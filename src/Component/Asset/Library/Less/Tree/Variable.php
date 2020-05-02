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
 * Class : Tree - Variable
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Variable extends Tree
{
    public $name;
    public $index;
    public $currentFileInfo;
    public $evaluating = false;
    public $type       = 'Variable';

    public function __construct($name, $index = null, $currentFileInfo = null)
    {
        $this->name            = $name;
        $this->index           = $index;
        $this->currentFileInfo = $currentFileInfo;
    }

    public function compile($env)
    {
        if ($this->name[1] === '@') {
            $v    = new Variable(substr($this->name, 1), $this->index + 1, $this->currentFileInfo);
            $name = '@' . $v->compile($env)->value;
        } else {
            $name = $this->name;
        }

        if ($this->evaluating) {
            throw new ExceptionCompiler("Recursive variable definition for " . $name, null, $this->index, $this->currentFileInfo);
        }

        $this->evaluating = true;

        foreach ($env->frames as $frame) {
            if ($v = $frame->variable($name)) {
                $r                = $v->value->compile($env);
                $this->evaluating = false;
                return $r;
            }
        }

        throw new ExceptionCompiler("variable " . $name . " is undefined in file " . $this->currentFileInfo["filename"], null, $this->index, $this->currentFileInfo);
    }
}
