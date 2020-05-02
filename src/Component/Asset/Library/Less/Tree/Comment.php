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
use ZimbruCode\Component\Asset\Library\Less\Parser;

/**
 * Class : Tree - Comment
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Comment extends Tree
{
    public $value;
    public $silent;
    public $isReferenced;
    public $currentFileInfo;
    public $type = 'Comment';

    public function __construct($value, $silent, $index = null, $currentFileInfo = null)
    {
        $this->value           = $value;
        $this->silent          = !!$silent;
        $this->currentFileInfo = $currentFileInfo;
    }

    public function genCSS($output)
    {
        $output->add(trim($this->value));
    }

    public function toCSS()
    {
        return Parser::$options['compress'] ? '' : $this->value;
    }

    public function isSilent()
    {
        $isReference  = ($this->currentFileInfo && isset($this->currentFileInfo['reference']) && (!isset($this->isReferenced) || !$this->isReferenced));
        $isCompressed = Parser::$options['compress'] && !preg_match('/^\/\*!/', $this->value);
        return $this->silent || $isReference || $isCompressed;
    }

    public function compile()
    {
        return $this;
    }

    public function markReferenced()
    {
        $this->isReferenced = true;
    }
}
