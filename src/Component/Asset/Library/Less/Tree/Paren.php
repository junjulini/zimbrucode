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
 * Class : Tree - Paren
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Paren extends Tree
{
    public $value;
    public $type = 'Paren';

    public function __construct($value)
    {
        $this->value = $value;
    }

    public function accept($visitor)
    {
        $this->value = $visitor->visitObj($this->value);
    }

    public function genCSS($output)
    {
        $output->add('(');
        $this->value->genCSS($output);
        $output->add(')');
    }

    public function compile($env)
    {
        return new Paren($this->value->compile($env));
    }
}
