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
 * Class : Tree - Expression
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Expression extends Tree
{
    public $value      = [];
    public $parens     = false;
    public $parensInOp = false;
    public $type       = 'Expression';

    public function __construct($value, $parens = null)
    {
        $this->value  = $value;
        $this->parens = $parens;
    }

    public function accept($visitor)
    {
        $this->value = $visitor->visitArray($this->value);
    }

    public function compile($env)
    {
        $doubleParen = false;

        if ($this->parens && !$this->parensInOp) {
            Environment::$parensStack++;
        }

        $returnValue = null;
        if ($this->value) {

            $count = count($this->value);

            if ($count > 1) {

                $ret = [];
                foreach ($this->value as $e) {
                    $ret[] = $e->compile($env);
                }
                $returnValue = new Expression($ret);

            } else {

                if (($this->value[0] instanceof Expression) && $this->value[0]->parens && !$this->value[0]->parensInOp) {
                    $doubleParen = true;
                }

                $returnValue = $this->value[0]->compile($env);
            }

        } else {
            $returnValue = $this;
        }

        if ($this->parens) {
            if (!$this->parensInOp) {
                Environment::$parensStack--;

            } elseif (!Environment::isMathOn() && !$doubleParen) {
                $returnValue = new Paren($returnValue);

            }
        }
        return $returnValue;
    }

    public function genCSS($output)
    {
        $val_len = count($this->value);
        for ($i = 0; $i < $val_len; $i++) {
            $this->value[$i]->genCSS($output);
            if ($i + 1 < $val_len) {
                $output->add(' ');
            }
        }
    }

    public function throwAwayComments()
    {

        if (is_array($this->value)) {
            $new_value = [];
            foreach ($this->value as $v) {
                if ($v instanceof Comment) {
                    continue;
                }
                $new_value[] = $v;
            }
            $this->value = $new_value;
        }
    }
}
