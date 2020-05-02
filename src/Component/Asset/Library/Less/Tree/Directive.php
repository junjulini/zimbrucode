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

use ZimbruCode\Component\Asset\Library\Less\Tree;

/**
 * Class : Tree - Directive
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Directive extends Tree
{
    public $name;
    public $value;
    public $rules;
    public $index;
    public $isReferenced;
    public $currentFileInfo;
    public $debugInfo;
    public $type = 'Directive';

    public function __construct($name, $value = null, $rules, $index = null, $currentFileInfo = null, $debugInfo = null)
    {
        $this->name  = $name;
        $this->value = $value;
        if ($rules) {
            $this->rules               = $rules;
            $this->rules->allowImports = true;
        }

        $this->index           = $index;
        $this->currentFileInfo = $currentFileInfo;
        $this->debugInfo       = $debugInfo;
    }

    public function accept($visitor)
    {
        if ($this->rules) {
            $this->rules = $visitor->visitObj($this->rules);
        }

        if ($this->value) {
            $this->value = $visitor->visitObj($this->value);
        }
    }

    public function genCSS($output)
    {
        $value = $this->value;
        $rules = $this->rules;
        $output->add($this->name, $this->currentFileInfo, $this->index);

        if ($this->value) {
            $output->add(' ');
            $this->value->genCSS($output);
        }

        if ($this->rules) {
            Tree::outputRuleset($output, [$this->rules]);
        } else {
            $output->add(';');
        }
    }

    public function compile($env)
    {
        $value = $this->value;
        $rules = $this->rules;
        if ($value) {
            $value = $value->compile($env);
        }

        if ($rules) {
            $rules       = $rules->compile($env);
            $rules->root = true;
        }

        return new Directive($this->name, $value, $rules, $this->index, $this->currentFileInfo, $this->debugInfo);
    }

    public function variable($name)
    {
        if ($this->rules) {
            return $this->rules->variable($name);
        }
    }

    public function find($selector)
    {
        if ($this->rules) {
            return $this->rules->find($selector, $this);
        }
    }

    public function markReferenced()
    {
        $this->isReferenced = true;
        if ($this->rules) {
            Tree::ReferencedArray($this->rules->rules);
        }
    }
}
