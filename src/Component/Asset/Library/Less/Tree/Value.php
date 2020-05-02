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
 * Class : Tree - Value
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Value extends Tree
{
    public $type = 'Value';
    public $value;

    public function __construct($value)
    {
        $this->value = $value;
    }

    public function accept($visitor)
    {
        $this->value = $visitor->visitArray($this->value);
    }

    public function compile($env)
    {
        $ret = [];
        $i   = 0;

        foreach ($this->value as $i => $v) {
            $ret[] = $v->compile($env);
        }

        if ($i > 0) {
            return new Value($ret);
        }

        return $ret[0];
    }

    public function genCSS($output)
    {
        $len = count($this->value);
        for ($i = 0; $i < $len; $i++) {
            $this->value[$i]->genCSS($output);

            if ($i + 1 < $len) {
                $output->add(Environment::$_outputMap[',']);
            }
        }
    }
}
