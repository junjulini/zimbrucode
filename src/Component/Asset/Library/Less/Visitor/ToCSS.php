<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Asset\Library\Less\Visitor;

use ZimbruCode\Component\Asset\Library\Less\Exception\ExceptionCompiler;
use ZimbruCode\Component\Asset\Library\Less\Tree\Expression;
use ZimbruCode\Component\Asset\Library\Less\Tree\NameValue;
use ZimbruCode\Component\Asset\Library\Less\Tree\Rule;
use ZimbruCode\Component\Asset\Library\Less\Tree\Value;
use ZimbruCode\Component\Asset\Library\Less\VisitorReplacing;

/**
 * Class : toCSS Visitor
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class ToCSS extends VisitorReplacing
{
    private $charset;

    public function __construct()
    {
        parent::__construct();
    }

    public function run($root)
    {
        return $this->visitObj($root);
    }

    public function visitRule($ruleNode)
    {
        if ($ruleNode->variable) {
            return [];
        }
        return $ruleNode;
    }

    public function visitMixinDefinition($mixinNode)
    {
        // mixin definitions do not get eval'd - this means they keep state
        // so we have to clear that state here so it isn't used if toCSS is called twice
        $mixinNode->frames = [];
        return [];
    }

    public function visitExtend()
    {
        return [];
    }

    public function visitComment($commentNode)
    {
        if ($commentNode->isSilent()) {
            return [];
        }
        return $commentNode;
    }

    public function visitMedia($mediaNode, &$visitDeeper)
    {
        $mediaNode->accept($this);
        $visitDeeper = false;

        if (!$mediaNode->rules) {
            return [];
        }

        return $mediaNode;
    }

    public function visitDirective($directiveNode)
    {
        if (isset($directiveNode->currentFileInfo['reference']) && (!property_exists($directiveNode, 'isReferenced') || !$directiveNode->isReferenced)) {
            return [];
        }

        if ($directiveNode->name === '@charset') {
            // Only output the debug info together with subsequent @charset definitions
            // a comment (or @media statement) before the actual @charset directive would
            // be considered illegal css as it has to be on the first line
            if (isset($this->charset) && $this->charset) {
                return [];
            }

            $this->charset = true;
        }

        return $directiveNode;
    }

    public function checkPropertiesInRoot($rulesetNode)
    {
        if (!$rulesetNode->firstRoot) {
            return;
        }

        foreach ($rulesetNode->rules as $ruleNode) {
            if ($ruleNode instanceof Rule && !$ruleNode->variable) {
                $msg = "properties must be inside selector blocks, they cannot be in the root. Index " . $ruleNode->index . ($ruleNode->currentFileInfo ? (' Filename: ' . $ruleNode->currentFileInfo['filename']) : null);
                throw new ExceptionCompiler($msg);
            }
        }
    }

    public function visitRuleset($rulesetNode, &$visitDeeper)
    {
        $visitDeeper = false;

        $this->checkPropertiesInRoot($rulesetNode);

        if ($rulesetNode->root) {
            return $this->visitRulesetRoot($rulesetNode);
        }

        $rulesets           = [];
        $rulesetNode->paths = $this->visitRulesetPaths($rulesetNode);

        // Compile rules and rulesets
        $nodeRuleCnt = $rulesetNode->rules ? count($rulesetNode->rules) : 0;
        for ($i = 0; $i < $nodeRuleCnt;) {
            $rule = $rulesetNode->rules[$i];

            if (property_exists($rule, 'rules')) {
                // visit because we are moving them out from being a child
                $rulesets[] = $this->visitObj($rule);
                array_splice($rulesetNode->rules, $i, 1);
                $nodeRuleCnt--;
                continue;
            }
            $i++;
        }

        // accept the visitor to remove rules and refactor itself
        // then we can decide now whether we want it or not
        if ($nodeRuleCnt > 0) {
            $rulesetNode->accept($this);

            if ($rulesetNode->rules) {

                if (count($rulesetNode->rules) > 1) {
                    $this->_mergeRules($rulesetNode->rules);
                    $this->_removeDuplicateRules($rulesetNode->rules);
                }

                // now decide whether we keep the ruleset
                if ($rulesetNode->paths) {
                    //array_unshift($rulesets, $rulesetNode);
                    array_splice($rulesets, 0, 0, [$rulesetNode]);
                }
            }

        }

        if (count($rulesets) === 1) {
            return $rulesets[0];
        }
        return $rulesets;
    }

    private function visitRulesetRoot($rulesetNode)
    {
        $rulesetNode->accept($this);
        if ($rulesetNode->firstRoot || $rulesetNode->rules) {
            return $rulesetNode;
        }
        return [];
    }

    private function visitRulesetPaths($rulesetNode)
    {
        $paths = [];
        foreach ($rulesetNode->paths as $p) {
            if ($p[0]->elements[0]->combinator === ' ') {
                $p[0]->elements[0]->combinator = '';
            }

            foreach ($p as $pi) {
                if ($pi->getIsReferenced() && $pi->getIsOutput()) {
                    $paths[] = $p;
                    break;
                }
            }
        }

        return $paths;
    }

    protected function _removeDuplicateRules(&$rules)
    {
        // remove duplicates
        $ruleCache = [];
        for ($i = count($rules) - 1; $i >= 0; $i--) {
            $rule = $rules[$i];
            if ($rule instanceof Rule || $rule instanceof NameValue) {

                if (!isset($ruleCache[$rule->name])) {
                    $ruleCache[$rule->name] = $rule;
                } else {
                    $ruleList = &$ruleCache[$rule->name];

                    if ($ruleList instanceof Rule || $ruleList instanceof NameValue) {
                        $ruleList = $ruleCache[$rule->name] = [$ruleCache[$rule->name]->toCSS()];
                    }

                    $ruleCSS = $rule->toCSS();
                    if (array_search($ruleCSS, $ruleList) !== false) {
                        array_splice($rules, $i, 1);
                    } else {
                        $ruleList[] = $ruleCSS;
                    }
                }
            }
        }
    }

    protected function _mergeRules(&$rules)
    {
        $groups = [];

        $rules_len = count($rules);
        for ($i = 0; $i < $rules_len; $i++) {
            $rule = $rules[$i];

            if (($rule instanceof Rule) && $rule->merge) {

                $key = $rule->name;
                if ($rule->important) {
                    $key .= ',!';
                }

                if (!isset($groups[$key])) {
                    $groups[$key] = [];
                } else {
                    array_splice($rules, $i--, 1);
                    $rules_len--;
                }

                $groups[$key][] = $rule;
            }
        }

        foreach ($groups as $parts) {

            if (count($parts) > 1) {
                $rule            = $parts[0];
                $spacedGroups    = [];
                $lastSpacedGroup = [];
                $parts_mapped    = [];
                foreach ($parts as $p) {
                    if ($p->merge === '+') {
                        if ($lastSpacedGroup) {
                            $spacedGroups[] = self::toExpression($lastSpacedGroup);
                        }
                        $lastSpacedGroup = [];
                    }
                    $lastSpacedGroup[] = $p;
                }

                $spacedGroups[] = self::toExpression($lastSpacedGroup);
                $rule->value    = self::toValue($spacedGroups);
            }
        }

    }

    public static function toExpression($values)
    {
        $mapped = [];
        foreach ($values as $p) {
            $mapped[] = $p->value;
        }
        return new Expression($mapped);
    }

    public static function toValue($values)
    {
        $mapped = [];
        foreach ($values as $p) {
            $mapped[] = $p;
        }

        return new Value($mapped);
    }
}
