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

use ZimbruCode\Component\Asset\Library\Less\Visitor;

/**
 * Class : Join Selector Visitor
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class JoinSelector extends Visitor
{
    public $contexts = [[]];

    public function run($root)
    {
        return $this->visitObj($root);
    }

    public function visitRule($ruleNode, &$visitDeeper)
    {
        $visitDeeper = false;
    }

    public function visitMixinDefinition($mixinDefinitionNode, &$visitDeeper)
    {
        $visitDeeper = false;
    }

    public function visitRuleset($rulesetNode)
    {
        $paths = [];

        if (!$rulesetNode->root) {
            $selectors = [];

            if ($rulesetNode->selectors && $rulesetNode->selectors) {
                foreach ($rulesetNode->selectors as $selector) {
                    if ($selector->getIsOutput()) {
                        $selectors[] = $selector;
                    }
                }
            }

            if (!$selectors) {
                $rulesetNode->selectors = null;
                $rulesetNode->rules     = null;
            } else {
                $context = end($this->contexts); //$context = $this->contexts[ count($this->contexts) - 1];
                $paths   = $rulesetNode->joinSelectors($context, $selectors);
            }

            $rulesetNode->paths = $paths;
        }

        $this->contexts[] = $paths; //different from less.js. Placed after joinSelectors() so that $this->contexts will get correct $paths
    }

    public function visitRulesetOut()
    {
        array_pop($this->contexts);
    }

    public function visitMedia($mediaNode)
    {
        $context = end($this->contexts); //$context = $this->contexts[ count($this->contexts) - 1];

        if (!count($context) || (is_object($context[0]) && $context[0]->multiMedia)) {
            $mediaNode->rules[0]->root = true;
        }
    }
}
