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
 * Class : Tree - RulesetCall
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class RulesetCall extends Tree
{
    public $variable;
    public $type = "RulesetCall";

    public function __construct($variable)
    {
        $this->variable = $variable;
    }

    public function accept($visitor)
    {

    }

    public function compile($env)
    {
        $variable        = new Variable($this->variable);
        $detachedRuleset = $variable->compile($env);
        return $detachedRuleset->callEval($env);
    }
}
