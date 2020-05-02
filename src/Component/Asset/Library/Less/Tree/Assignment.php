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
 * Class : Tree - Assignment
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Assignment extends Tree
{
    public $key;
    public $value;
    public $type = 'Assignment';

    public function __construct($key, $val)
    {
        $this->key   = $key;
        $this->value = $val;
    }

    public function accept($visitor)
    {
        $this->value = $visitor->visitObj($this->value);
    }

    public function compile($env)
    {
        return new Assignment($this->key, $this->value->compile($env));
    }

    public function genCSS($output)
    {
        $output->add($this->key . '=');
        $this->value->genCSS($output);
    }

    public function toCss()
    {
        return $this->key . '=' . $this->value->toCSS();
    }
}
