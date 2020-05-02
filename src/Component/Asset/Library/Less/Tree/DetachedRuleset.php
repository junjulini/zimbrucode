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
 * Class : Tree - DetachedRuleset
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class DetachedRuleset extends Tree
{
    public $ruleset;
    public $frames;
    public $type = 'DetachedRuleset';

    public function __construct($ruleset, $frames = null)
    {
        $this->ruleset = $ruleset;
        $this->frames  = $frames;
    }

    public function accept($visitor)
    {
        $this->ruleset = $visitor->visitObj($this->ruleset);
    }

    public function compile($env)
    {
        if ($this->frames) {
            $frames = $this->frames;
        } else {
            $frames = $env->frames;
        }
        return new DetachedRuleset($this->ruleset, $frames);
    }

    public function callEval($env)
    {
        if ($this->frames) {
            return $this->ruleset->compile($env->copyEvalEnv(array_merge($this->frames, $env->frames)));
        }
        return $this->ruleset->compile($env);
    }
}
