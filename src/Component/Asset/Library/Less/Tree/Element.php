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
use ZimbruCode\Component\Asset\Library\Less\Environment;

/**
 * Class : Tree - Element
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Element extends Tree
{
    public $combinator = '';
    public $value      = '';
    public $index;
    public $currentFileInfo;
    public $type = 'Element';

    public $value_is_object = false;

    public function __construct($combinator, $value, $index = null, $currentFileInfo = null)
    {
        $this->value           = $value;
        $this->value_is_object = is_object($value);

        if ($combinator) {
            $this->combinator = $combinator;
        }

        $this->index           = $index;
        $this->currentFileInfo = $currentFileInfo;
    }

    public function accept($visitor)
    {
        if ($this->value_is_object) {
            //object or string
            $this->value = $visitor->visitObj($this->value);
        }
    }

    public function compile($env)
    {
        if (Environment::$mixin_stack) {
            return new Element($this->combinator, ($this->value_is_object ? $this->value->compile($env) : $this->value), $this->index, $this->currentFileInfo);
        }

        if ($this->value_is_object) {
            $this->value = $this->value->compile($env);
        }

        return $this;
    }

    public function genCSS($output)
    {
        $output->add($this->toCSS(), $this->currentFileInfo, $this->index);
    }

    public function toCSS()
    {
        if ($this->value_is_object) {
            $value = $this->value->toCSS();
        } else {
            $value = $this->value;
        }

        if ($value === '' && $this->combinator && $this->combinator === '&') {
            return '';
        }

        return Environment::$_outputMap[$this->combinator] . $value;
    }
}
