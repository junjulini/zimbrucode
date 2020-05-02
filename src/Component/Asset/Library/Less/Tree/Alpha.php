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
 * Class : Tree - Alpha
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Alpha extends Tree
{
    public $value;
    public $type = 'Alpha';

    public function __construct($val)
    {
        $this->value = $val;
    }

    public function compile($env)
    {
        if (is_object($this->value)) {
            $this->value = $this->value->compile($env);
        }

        return $this;
    }

    public function genCSS($output)
    {
        $output->add("alpha(opacity=");

        if (is_string($this->value)) {
            $output->add($this->value);
        } else {
            $this->value->genCSS($output);
        }

        $output->add(')');
    }

    public function toCSS()
    {
        return "alpha(opacity=" . (is_string($this->value) ? $this->value : $this->value->toCSS()) . ")";
    }
}
