<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Asset\Library\Less\Tree;

use ZimbruCode\Component\Asset\Library\Less\Environment;
use ZimbruCode\Component\Asset\Library\Less\Parser;
use ZimbruCode\Component\Asset\Library\Less\Tree;
use ZimbruCode\Component\Asset\Library\Less\Tree\Mixin\CallMixin;
use ZimbruCode\Component\Asset\Library\Less\Tree\Mixin\DefinitionMixin;

/**
 * Class : Tree - Ruleset
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Ruleset extends Tree
{
    protected $lookups;
    public $_variables;
    public $_rulesets;

    public $strictImports;

    public $selectors;
    public $rules;
    public $root;
    public $allowImports;
    public $paths;
    public $firstRoot;
    public $type = 'Ruleset';
    public $multiMedia;
    public $allExtends;

    public $ruleset_id;
    public $originalRuleset;

    public $first_oelements;

    public function __construct($selectors, $rules, $strictImports = null)
    {
        $this->selectors     = $selectors;
        $this->rules         = $rules;
        $this->lookups       = [];
        $this->strictImports = $strictImports;
        $this->SetRulesetIndex();
    }

    public function SetRulesetIndex()
    {
        $this->ruleset_id      = Parser::$next_id++;
        $this->originalRuleset = $this->ruleset_id;

        if ($this->selectors) {
            foreach ($this->selectors as $sel) {
                if ($sel->_oelements) {
                    $this->first_oelements[$sel->_oelements[0]] = true;
                }
            }
        }
    }

    public function accept($visitor)
    {
        if ($this->paths) {
            $paths_len = count($this->paths);
            for ($i = 0, $paths_len; $i < $paths_len; $i++) {
                $this->paths[$i] = $visitor->visitArray($this->paths[$i]);
            }
        } elseif ($this->selectors) {
            $this->selectors = $visitor->visitArray($this->selectors);
        }

        if ($this->rules) {
            $this->rules = $visitor->visitArray($this->rules);
        }
    }

    public function compile($env)
    {
        $ruleset = $this->PrepareRuleset($env);

        // Store the frames around mixin definitions,
        // so they can be evaluated like closures when the time comes.
        $rsRuleCnt = count($ruleset->rules);
        for ($i = 0; $i < $rsRuleCnt; $i++) {
            if ($ruleset->rules[$i] instanceof DefinitionMixin || $ruleset->rules[$i] instanceof DetachedRuleset) {
                $ruleset->rules[$i] = $ruleset->rules[$i]->compile($env);
            }
        }

        $mediaBlockCount = 0;
        if ($env instanceof Environment) {
            $mediaBlockCount = count($env->mediaBlocks);
        }

        // Evaluate mixin calls.
        $this->EvalMixinCalls($ruleset, $env, $rsRuleCnt);

        // Evaluate everything else
        for ($i = 0; $i < $rsRuleCnt; $i++) {
            if (!($ruleset->rules[$i] instanceof DefinitionMixin || $ruleset->rules[$i] instanceof DetachedRuleset)) {
                $ruleset->rules[$i] = $ruleset->rules[$i]->compile($env);
            }
        }

        // Evaluate everything else
        for ($i = 0; $i < $rsRuleCnt; $i++) {
            $rule = $ruleset->rules[$i];

            // for rulesets, check if it is a css guard and can be removed
            if ($rule instanceof Ruleset && $rule->selectors && count($rule->selectors) === 1) {

                // check if it can be folded in (e.g. & where)
                if ($rule->selectors[0]->isJustParentSelector()) {
                    array_splice($ruleset->rules, $i--, 1);
                    $rsRuleCnt--;

                    for ($j = 0; $j < count($rule->rules); $j++) {
                        $subRule = $rule->rules[$j];
                        if (!($subRule instanceof Rule) || !$subRule->variable) {
                            array_splice($ruleset->rules, ++$i, 0, [$subRule]);
                            $rsRuleCnt++;
                        }
                    }
                }
            }
        }

        // Pop the stack
        $env->shiftFrame();

        if ($mediaBlockCount) {
            $len = count($env->mediaBlocks);
            for ($i = $mediaBlockCount; $i < $len; $i++) {
                $env->mediaBlocks[$i]->bubbleSelectors($ruleset->selectors);
            }
        }

        return $ruleset;
    }

    /**
     * Compile Call objects
     *
     * @param Ruleset $ruleset
     * @param integer $rsRuleCnt
     */
    private function EvalMixinCalls($ruleset, $env, &$rsRuleCnt)
    {
        for ($i = 0; $i < $rsRuleCnt; $i++) {
            $rule = $ruleset->rules[$i];

            if ($rule instanceof CallMixin) {
                $rule = $rule->compile($env);

                $temp = [];
                foreach ($rule as $r) {
                    if (($r instanceof Rule) && $r->variable) {
                        // do not pollute the scope if the variable is
                        // already there. consider returning false here
                        // but we need a way to "return" variable from mixins
                        if (!$ruleset->variable($r->name)) {
                            $temp[] = $r;
                        }
                    } else {
                        $temp[] = $r;
                    }
                }
                $temp_count = count($temp) - 1;
                array_splice($ruleset->rules, $i, 1, $temp);
                $rsRuleCnt += $temp_count;
                $i += $temp_count;
                $ruleset->resetCache();

            } elseif ($rule instanceof RulesetCall) {

                $rule  = $rule->compile($env);
                $rules = [];
                foreach ($rule->rules as $r) {
                    if (($r instanceof Rule) && $r->variable) {
                        continue;
                    }
                    $rules[] = $r;
                }

                array_splice($ruleset->rules, $i, 1, $rules);
                $temp_count = count($rules);
                $rsRuleCnt += $temp_count - 1;
                $i += $temp_count - 1;
                $ruleset->resetCache();
            }
        }
    }

    /**
     * Compile the selectors and create a new ruleset object for the compile() method
     */
    private function PrepareRuleset($env)
    {
        $hasOnePassingSelector = false;
        $selectors             = [];
        if ($this->selectors) {
            DefaultFunc::error("it is currently only allowed in parametric mixin guards,");

            foreach ($this->selectors as $s) {
                $selector    = $s->compile($env);
                $selectors[] = $selector;
                if ($selector->evaldCondition) {
                    $hasOnePassingSelector = true;
                }
            }

            DefaultFunc::reset();
        } else {
            $hasOnePassingSelector = true;
        }

        if ($this->rules && $hasOnePassingSelector) {
            $rules = $this->rules;
        } else {
            $rules = [];
        }

        $ruleset = new Ruleset($selectors, $rules, $this->strictImports);

        $ruleset->originalRuleset = $this->ruleset_id;

        $ruleset->root         = $this->root;
        $ruleset->firstRoot    = $this->firstRoot;
        $ruleset->allowImports = $this->allowImports;

        // push the current ruleset to the frames stack
        $env->unshiftFrame($ruleset);

        // Evaluate imports
        if ($ruleset->root || $ruleset->allowImports || !$ruleset->strictImports) {
            $ruleset->evalImports($env);
        }

        return $ruleset;
    }

    public function evalImports($env)
    {
        $rules_len = count($this->rules);
        for ($i = 0; $i < $rules_len; $i++) {
            $rule = $this->rules[$i];

            if ($rule instanceof Import) {
                $rules = $rule->compile($env);
                if (is_array($rules)) {
                    array_splice($this->rules, $i, 1, $rules);
                    $temp_count = count($rules) - 1;
                    $i += $temp_count;
                    $rules_len += $temp_count;
                } else {
                    array_splice($this->rules, $i, 1, [$rules]);
                }

                $this->resetCache();
            }
        }
    }

    public function makeImportant()
    {
        $important_rules = [];
        foreach ($this->rules as $rule) {
            if ($rule instanceof Rule || $rule instanceof Ruleset || $rule instanceof NameValue) {
                $important_rules[] = $rule->makeImportant();
            } else {
                $important_rules[] = $rule;
            }
        }

        return new Ruleset($this->selectors, $important_rules, $this->strictImports);
    }

    public function matchArgs($args)
    {
        return !$args;
    }

    public function matchCondition($args, $env)
    {
        $lastSelector = end($this->selectors);

        if (!$lastSelector->evaldCondition) {
            return false;
        }
        if ($lastSelector->condition && !$lastSelector->condition->compile($env->copyEvalEnv($env->frames))) {
            return false;
        }
        return true;
    }

    public function resetCache()
    {
        $this->_rulesets  = null;
        $this->_variables = null;
        $this->lookups    = [];
    }

    public function variables()
    {
        $this->_variables = [];
        foreach ($this->rules as $r) {
            if ($r instanceof Rule && $r->variable === true) {
                $this->_variables[$r->name] = $r;
            }
        }
    }

    public function variable($name)
    {
        if (is_null($this->_variables)) {
            $this->variables();
        }

        return isset($this->_variables[$name]) ? $this->_variables[$name] : null;
    }

    public function find($selector, $self = null)
    {
        $key = implode(' ', $selector->_oelements);

        if (!isset($this->lookups[$key])) {

            if (!$self) {
                $self = $this->ruleset_id;
            }

            $this->lookups[$key] = [];

            $first_oelement = $selector->_oelements[0];

            foreach ($this->rules as $rule) {
                if ($rule instanceof Ruleset && $rule->ruleset_id != $self) {

                    if (isset($rule->first_oelements[$first_oelement])) {

                        foreach ($rule->selectors as $ruleSelector) {
                            $match = $selector->match($ruleSelector);
                            if ($match) {
                                if ($selector->elements_len > $match) {
                                    $this->lookups[$key] = array_merge($this->lookups[$key], $rule->find(new Selector(array_slice($selector->elements, $match)), $self));
                                } else {
                                    $this->lookups[$key][] = $rule;
                                }
                                break;
                            }
                        }
                    }
                }
            }
        }

        return $this->lookups[$key];
    }

    public function genCSS($output)
    {
        if (!$this->root) {
            Environment::$tabLevel++;
        }

        $tabRuleStr = $tabSetStr = '';
        if (!Parser::$options['compress']) {
            if (Environment::$tabLevel) {
                $tabRuleStr = "\n" . str_repeat(Parser::$options['indentation'], Environment::$tabLevel);
                $tabSetStr  = "\n" . str_repeat(Parser::$options['indentation'], Environment::$tabLevel - 1);
            } else {
                $tabSetStr = $tabRuleStr = "\n";
            }
        }

        $ruleNodes    = [];
        $rulesetNodes = [];

        $partOfNamespace = 'ZimbruCode\\Component\\Asset\\Library\\Less\\Tree\\';

        foreach ($this->rules as $rule) {

            $class = get_class($rule);
            if (($class === $partOfNamespace . 'Media') || ($class === $partOfNamespace . 'Directive') || ($this->root && $class === $partOfNamespace . 'Comment') || ($class === $partOfNamespace . 'Ruleset' && $rule->rules)) {
                $rulesetNodes[] = $rule;
            } else {
                $ruleNodes[] = $rule;
            }
        }

        // If this is the root node, we don't render
        // a selector, or {}.
        if (!$this->root) {
            $paths_len = count($this->paths);
            for ($i = 0; $i < $paths_len; $i++) {
                $path          = $this->paths[$i];
                $firstSelector = true;

                foreach ($path as $p) {
                    $p->genCSS($output, $firstSelector);
                    $firstSelector = false;
                }

                if ($i + 1 < $paths_len) {
                    $output->add(',' . $tabSetStr);
                }
            }

            $output->add((Parser::$options['compress'] ? '{' : " {") . $tabRuleStr);
        }

        // Compile rules and rulesets
        $ruleNodes_len    = count($ruleNodes);
        $rulesetNodes_len = count($rulesetNodes);
        for ($i = 0; $i < $ruleNodes_len; $i++) {
            $rule = $ruleNodes[$i];

            // @page{ directive ends up with root elements inside it, a mix of rules and rulesets
            // In this instance we do not know whether it is the last property
            if ($i + 1 === $ruleNodes_len && (!$this->root || $rulesetNodes_len === 0 || $this->firstRoot)) {
                Environment::$lastRule = true;
            }

            $rule->genCSS($output);

            if (!Environment::$lastRule) {
                $output->add($tabRuleStr);
            } else {
                Environment::$lastRule = false;
            }
        }

        if (!$this->root) {
            $output->add($tabSetStr . '}');
            Environment::$tabLevel--;
        }

        $firstRuleset = true;
        $space        = ($this->root ? $tabRuleStr : $tabSetStr);
        for ($i = 0; $i < $rulesetNodes_len; $i++) {

            if ($ruleNodes_len && $firstRuleset) {
                $output->add($space);
            } elseif (!$firstRuleset) {
                $output->add($space);
            }
            $firstRuleset = false;
            $rulesetNodes[$i]->genCSS($output);
        }

        if (!Parser::$options['compress'] && $this->firstRoot) {
            $output->add("\n");
        }
    }

    public function markReferenced()
    {
        if (!$this->selectors) {
            return;
        }
        foreach ($this->selectors as $selector) {
            $selector->markReferenced();
        }
    }

    public function joinSelectors($context, $selectors)
    {
        $paths = [];
        if (is_array($selectors)) {
            foreach ($selectors as $selector) {
                $this->joinSelector($paths, $context, $selector);
            }
        }

        return $paths;
    }

    public function joinSelector(&$paths, $context, $selector)
    {
        $hasParentSelector = false;

        foreach ($selector->elements as $el) {
            if ($el->value === '&') {
                $hasParentSelector = true;
            }
        }

        if (!$hasParentSelector) {
            if ($context) {
                foreach ($context as $context_el) {
                    $paths[] = array_merge($context_el, [$selector]);
                }
            } else {
                $paths[] = [$selector];
            }
            return;
        }

        // The paths are [[Selector]]
        // The first list is a list of comma separated selectors
        // The inner list is a list of inheritance separated selectors
        // e.g.
        // .a, .b {
        //   .c {
        //   }
        // }
        // == [[.a] [.c]] [[.b] [.c]]
        //

        // the elements from the current selector so far
        $currentElements = [];
        // the current list of new selectors to add to the path.
        // We will build it up. We initiate it with one empty selector as we "multiply" the new selectors
        // by the parents
        $newSelectors = [[]];

        foreach ($selector->elements as $el) {

            // non parent reference elements just get added
            if ($el->value !== '&') {
                $currentElements[] = $el;
            } else {
                // the new list of selectors to add
                $selectorsMultiplied = [];

                // merge the current list of non parent selector elements
                // on to the current list of selectors to add
                if ($currentElements) {
                    $this->mergeElementsOnToSelectors($currentElements, $newSelectors);
                }

                // loop through our current selectors
                foreach ($newSelectors as $sel) {

                    // if we don't have any parent paths, the & might be in a mixin so that it can be used
                    // whether there are parents or not
                    if (!$context) {
                        // the combinator used on el should now be applied to the next element instead so that
                        // it is not lost
                        if ($sel) {
                            $sel[0]->elements   = array_slice($sel[0]->elements, 0);
                            $sel[0]->elements[] = new Element($el->combinator, '', $el->index, $el->currentFileInfo);
                        }
                        $selectorsMultiplied[] = $sel;
                    } else {

                        // and the parent selectors
                        foreach ($context as $parentSel) {
                            // We need to put the current selectors
                            // then join the last selector's elements on to the parents selectors

                            // our new selector path
                            $newSelectorPath = [];
                            // selectors from the parent after the join
                            $afterParentJoin        = [];
                            $newJoinedSelectorEmpty = true;

                            //construct the joined selector - if & is the first thing this will be empty,
                            // if not newJoinedSelector will be the last set of elements in the selector
                            if ($sel) {
                                $newSelectorPath        = $sel;
                                $lastSelector           = array_pop($newSelectorPath);
                                $newJoinedSelector      = $selector->createDerived(array_slice($lastSelector->elements, 0));
                                $newJoinedSelectorEmpty = false;
                            } else {
                                $newJoinedSelector = $selector->createDerived([]);
                            }

                            //put together the parent selectors after the join
                            if (count($parentSel) > 1) {
                                $afterParentJoin = array_merge($afterParentJoin, array_slice($parentSel, 1));
                            }

                            if ($parentSel) {
                                $newJoinedSelectorEmpty = false;

                                // join the elements so far with the first part of the parent
                                $newJoinedSelector->elements[] = new Element($el->combinator, $parentSel[0]->elements[0]->value, $el->index, $el->currentFileInfo);

                                $newJoinedSelector->elements = array_merge($newJoinedSelector->elements, array_slice($parentSel[0]->elements, 1));
                            }

                            if (!$newJoinedSelectorEmpty) {
                                // now add the joined selector
                                $newSelectorPath[] = $newJoinedSelector;
                            }

                            // and the rest of the parent
                            $newSelectorPath = array_merge($newSelectorPath, $afterParentJoin);

                            // add that to our new set of selectors
                            $selectorsMultiplied[] = $newSelectorPath;
                        }
                    }
                }

                // our new selectors has been multiplied, so reset the state
                $newSelectors    = $selectorsMultiplied;
                $currentElements = [];
            }
        }

        // if we have any elements left over (e.g. .a& .b == .b)
        // add them on to all the current selectors
        if ($currentElements) {
            $this->mergeElementsOnToSelectors($currentElements, $newSelectors);
        }
        foreach ($newSelectors as $new_sel) {
            if ($new_sel) {
                $paths[] = $new_sel;
            }
        }
    }

    public function mergeElementsOnToSelectors($elements, &$selectors)
    {
        if (!$selectors) {
            $selectors[] = [new Selector($elements)];
            return;
        }

        foreach ($selectors as &$sel) {

            // if the previous thing in sel is a parent this needs to join on to it
            if ($sel) {
                $last       = count($sel) - 1;
                $sel[$last] = $sel[$last]->createDerived(array_merge($sel[$last]->elements, $elements));
            } else {
                $sel[] = new Selector($elements);
            }
        }
    }
}
