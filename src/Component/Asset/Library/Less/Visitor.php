<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Asset\Library\Less;

/**
 * Class : Visitor
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Visitor
{
    protected $methods       = [];
    protected $_visitFnCache = [];

    public function __construct()
    {
        $this->_visitFnCache = get_class_methods(get_class($this));
        $this->_visitFnCache = array_flip($this->_visitFnCache);
    }

    public function visitObj($node)
    {
        $funcName = 'visit' . $node->type;
        if (isset($this->_visitFnCache[$funcName])) {

            $visitDeeper = true;
            $this->$funcName($node, $visitDeeper);

            if ($visitDeeper) {
                $node->accept($this);
            }

            $funcName = $funcName . "Out";
            if (isset($this->_visitFnCache[$funcName])) {
                $this->$funcName($node);
            }

        } else {
            $node->accept($this);
        }

        return $node;
    }

    public function visitArray($nodes)
    {
        array_map([$this, 'visitObj'], $nodes);
        return $nodes;
    }
}
