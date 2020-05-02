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
use ZimbruCode\Component\Asset\Library\Less\Exception\ExceptionCompiler;

/**
 * Class : Tree - Operation
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Operation extends Tree
{
    public $op;
    public $operands;
    public $isSpaced;
    public $type = 'Operation';

    public function __construct($op, $operands, $isSpaced = false)
    {
        $this->op       = trim($op);
        $this->operands = $operands;
        $this->isSpaced = $isSpaced;
    }

    public function accept($visitor)
    {
        $this->operands = $visitor->visitArray($this->operands);
    }

    public function compile($env)
    {
        $a = $this->operands[0]->compile($env);
        $b = $this->operands[1]->compile($env);

        if (Environment::isMathOn()) {

            if ($a instanceof Dimension && $b instanceof Color) {
                $a = $a->toColor();

            } elseif ($b instanceof Dimension && $a instanceof Color) {
                $b = $b->toColor();

            }

            if (!method_exists($a, 'operate')) {
                throw new ExceptionCompiler("Operation on an invalid type");
            }

            return $a->operate($this->op, $b);
        }

        return new Operation($this->op, [$a, $b], $this->isSpaced);
    }

    public function genCSS($output)
    {
        $this->operands[0]->genCSS($output);
        if ($this->isSpaced) {
            $output->add(" ");
        }
        $output->add($this->op);
        if ($this->isSpaced) {
            $output->add(' ');
        }
        $this->operands[1]->genCSS($output);
    }
}
