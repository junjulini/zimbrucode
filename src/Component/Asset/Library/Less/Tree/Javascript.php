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
 * Class : Tree - Javascript
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Javascript extends Tree
{
    public $type = 'Javascript';
    public $escaped;
    public $expression;
    public $index;

    /**
     * @param boolean $index
     * @param boolean $escaped
     */
    public function __construct($string, $index, $escaped)
    {
        $this->escaped    = $escaped;
        $this->expression = $string;
        $this->index      = $index;
    }

    public function compile()
    {
        return new Anonymous('/* Sorry, can not do JavaScript evaluation in PHP... :( */');
    }
}
