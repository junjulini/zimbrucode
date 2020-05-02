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
 * Class : Tree - Attribute
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Attribute extends Tree
{
    public $key;
    public $op;
    public $value;
    public $type = 'Attribute';

    public function __construct($key, $op, $value)
    {
        $this->key   = $key;
        $this->op    = $op;
        $this->value = $value;
    }

    public function compile($env)
    {
        $key_obj = is_object($this->key);
        $val_obj = is_object($this->value);

        if (!$key_obj && !$val_obj) {
            return $this;
        }

        return new Attribute(
            $key_obj ? $this->key->compile($env) : $this->key,
            $this->op,
            $val_obj ? $this->value->compile($env) : $this->value
        );
    }

    public function genCSS($output)
    {
        $output->add($this->toCSS());
    }

    public function toCSS()
    {
        $value = $this->key;

        if ($this->op) {
            $value .= $this->op;
            $value .= (is_object($this->value) ? $this->value->toCSS() : $this->value);
        }

        return '[' . $value . ']';
    }
}
