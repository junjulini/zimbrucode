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
 * Class : Tree - Negative
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Negative extends Tree
{
    public $value;
    public $type = 'Negative';

    public function __construct($node)
    {
        $this->value = $node;
    }

    public function genCSS($output)
    {
        $output->add('-');
        $this->value->genCSS($output);
    }

    public function compile($env)
    {
        if (Environment::isMathOn()) {
            $ret = new Operation('*', [new Dimension(-1), $this->value]);
            return $ret->compile($env);
        }
        return new Negative($this->value->compile($env));
    }
}
