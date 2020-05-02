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
 * Class : Tree - Anonymous
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Anonymous extends Tree
{
    public $value;
    public $quote;
    public $index;
    public $mapLines;
    public $currentFileInfo;
    public $type = 'Anonymous';

    /**
     * @param integer $index
     * @param boolean $mapLines
     */
    public function __construct($value, $index = null, $currentFileInfo = null, $mapLines = null)
    {
        $this->value           = $value;
        $this->index           = $index;
        $this->mapLines        = $mapLines;
        $this->currentFileInfo = $currentFileInfo;
    }

    public function compile()
    {
        return new Anonymous($this->value, $this->index, $this->currentFileInfo, $this->mapLines);
    }

    public function compare($x)
    {
        if (!is_object($x)) {
            return -1;
        }

        $left  = $this->toCSS();
        $right = $x->toCSS();

        if ($left === $right) {
            return 0;
        }

        return $left < $right ? -1 : 1;
    }

    public function genCSS($output)
    {
        $output->add($this->value, $this->currentFileInfo, $this->index, $this->mapLines);
    }

    public function toCSS()
    {
        return $this->value;
    }
}
