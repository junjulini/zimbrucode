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
 * Class : Tree - UnicodeDescriptor
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class UnicodeDescriptor extends Tree
{
    public $value;
    public $type = 'UnicodeDescriptor';

    public function __construct($value)
    {
        $this->value = $value;
    }

    public function genCSS($output)
    {
        $output->add($this->value);
    }

    public function compile()
    {
        return $this;
    }
}
