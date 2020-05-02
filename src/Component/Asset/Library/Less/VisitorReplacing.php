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
 * Class : Replacing Visitor
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class VisitorReplacing extends Visitor
{
    public function visitObj($node)
    {
        $funcName = 'visit' . $node->type;
        if (isset($this->_visitFnCache[$funcName])) {

            $visitDeeper = true;
            $node        = $this->$funcName($node, $visitDeeper);

            if ($node) {
                if ($visitDeeper && is_object($node)) {
                    $node->accept($this);
                }

                $funcName = $funcName . "Out";
                if (isset($this->_visitFnCache[$funcName])) {
                    $this->$funcName($node);
                }
            }

        } else {
            $node->accept($this);
        }

        return $node;
    }

    public function visitArray($nodes)
    {
        $newNodes = [];
        foreach ($nodes as $node) {
            $evald = $this->visitObj($node);
            if ($evald) {
                if (is_array($evald)) {
                    self::flatten($evald, $newNodes);
                } else {
                    $newNodes[] = $evald;
                }
            }
        }
        return $newNodes;
    }

    public function flatten($arr, &$out)
    {

        foreach ($arr as $item) {
            if (!is_array($item)) {
                $out[] = $item;
                continue;
            }

            foreach ($item as $nestedItem) {
                if (is_array($nestedItem)) {
                    self::flatten($nestedItem, $out);
                } else {
                    $out[] = $nestedItem;
                }
            }
        }

        return $out;
    }
}
