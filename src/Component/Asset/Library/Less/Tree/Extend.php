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

use ZimbruCode\Component\Asset\Library\Less\Parser;
use ZimbruCode\Component\Asset\Library\Less\Tree;

/**
 * Class : Tree - Extend
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Extend extends Tree
{
    public $selector;
    public $option;
    public $index;
    public $selfSelectors = [];
    public $allowBefore;
    public $allowAfter;
    public $firstExtendOnThisSelectorPath;
    public $type = 'Extend';
    public $ruleset;

    public $object_id;
    public $parent_ids = [];

    public function __construct($selector, $option, $index)
    {
        static $i       = 0;
        $this->selector = $selector;
        $this->option   = $option;
        $this->index    = $index;

        switch ($option) {
            case "all":
                $this->allowBefore = true;
                $this->allowAfter  = true;
                break;
            default:
                $this->allowBefore = false;
                $this->allowAfter  = false;
                break;
        }

        $this->object_id  = $i++;
        $this->parent_ids = [$this->object_id];
    }

    public function accept($visitor)
    {
        $this->selector = $visitor->visitObj($this->selector);
    }

    public function compile($env)
    {
        Parser::$has_extends = true;
        $this->selector      = $this->selector->compile($env);
        return $this;
    }

    public function findSelfSelectors($selectors)
    {
        $selfElements = [];

        for ($i = 0, $selectors_len = count($selectors); $i < $selectors_len; $i++) {
            $selectorElements = $selectors[$i]->elements;
            // duplicate the logic in genCSS function inside the selector node.
            // future TODO - move both logics into the selector joiner visitor
            if ($i && $selectorElements && $selectorElements[0]->combinator === "") {
                $selectorElements[0]->combinator = ' ';
            }
            $selfElements = array_merge($selfElements, $selectors[$i]->elements);
        }

        $this->selfSelectors = [new Selector($selfElements)];
    }
}
