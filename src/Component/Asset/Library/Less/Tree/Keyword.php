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
use ZimbruCode\Component\Asset\Library\Less\Exception\ExceptionCompiler;

/**
 * Class : Tree - Keyword
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Keyword extends Tree
{
    public $value;
    public $type = 'Keyword';

    /**
     * @param string $value
     */
    public function __construct($value)
    {
        $this->value = $value;
    }

    public function compile()
    {
        return $this;
    }

    public function genCSS($output)
    {

        if ($this->value === '%') {
            throw new ExceptionCompiler("Invalid % without number");
        }

        $output->add($this->value);
    }

    public function compare($other)
    {
        if ($other instanceof Keyword) {
            return $other->value === $this->value ? 0 : 1;
        } else {
            return -1;
        }
    }
}
