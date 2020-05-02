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

use ZimbruCode\Component\Asset\Library\Less\Exception\ExceptionCompiler;
use ZimbruCode\Component\Asset\Library\Less\Parser;
use ZimbruCode\Component\Asset\Library\Less\Tree;

/**
 * Class : Tree - Condition
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Condition extends Tree
{
    public $op;
    public $lvalue;
    public $rvalue;
    public $index;
    public $negate;
    public $type = 'Condition';

    public function __construct($op, $l, $r, $i = 0, $negate = false)
    {
        $this->op     = trim($op);
        $this->lvalue = $l;
        $this->rvalue = $r;
        $this->index  = $i;
        $this->negate = $negate;
    }

    public function accept($visitor)
    {
        $this->lvalue = $visitor->visitObj($this->lvalue);
        $this->rvalue = $visitor->visitObj($this->rvalue);
    }

    public function compile($env)
    {
        $a = $this->lvalue->compile($env);
        $b = $this->rvalue->compile($env);

        switch ($this->op) {
            case 'and':
                $result = $a && $b;
                break;

            case 'or':
                $result = $a || $b;
                break;

            default:
                if (Parser::is_method($a, 'compare')) {
                    $result = $a->compare($b);
                } elseif (Parser::is_method($b, 'compare')) {
                    $result = $b->compare($a);
                } else {
                    throw new ExceptionCompiler('Unable to perform comparison', null, $this->index);
                }

                switch ($result) {
                    case -1:
                        $result = $this->op === '<' || $this->op === '=<' || $this->op === '<=';
                        break;

                    case 0:
                        $result = $this->op === '=' || $this->op === '>=' || $this->op === '=<' || $this->op === '<=';
                        break;

                    case 1:
                        $result = $this->op === '>' || $this->op === '>=';
                        break;
                }
                break;
        }

        return $this->negate ? !$result : $result;
    }
}
