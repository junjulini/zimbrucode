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

use ZimbruCode\Component\Asset\Library\Less\Parser;
use ZimbruCode\Component\Asset\Library\Less\Tree;

/**
 * Class : Tree - Quoted
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Quoted extends Tree
{
    public $escaped;
    public $value;
    public $quote;
    public $index;
    public $currentFileInfo;
    public $type = 'Quoted';

    public function __construct($str, $content = '', $escaped = false, $index = false, $currentFileInfo = null)
    {
        $this->escaped = $escaped;
        $this->value   = $content;
        if ($str) {
            $this->quote = $str[0];
        }
        $this->index           = $index;
        $this->currentFileInfo = $currentFileInfo;
    }

    public function genCSS($output)
    {
        if (!$this->escaped) {
            $output->add($this->quote, $this->currentFileInfo, $this->index);
        }
        $output->add($this->value);
        if (!$this->escaped) {
            $output->add($this->quote);
        }
    }

    public function compile($env)
    {

        $value = $this->value;
        if (preg_match_all('/`([^`]+)`/', $this->value, $matches)) {
            foreach ($matches as $i => $match) {
                $js    = new JavaScript($matches[1], $this->index, true);
                $js    = $js->compile()->value;
                $value = str_replace($matches[0][$i], $js, $value);
            }
        }

        if (preg_match_all('/@\{([\w-]+)\}/', $value, $matches)) {
            foreach ($matches[1] as $i => $match) {
                $v     = new Variable('@' . $match, $this->index, $this->currentFileInfo);
                $v     = $v->compile($env);
                $v     = ($v instanceof Quoted) ? $v->value : $v->toCSS();
                $value = str_replace($matches[0][$i], $v, $value);
            }
        }

        return new Quoted($this->quote . $value . $this->quote, $value, $this->escaped, $this->index, $this->currentFileInfo);
    }

    public function compare($x)
    {

        if (!Parser::is_method($x, 'toCSS')) {
            return -1;
        }

        $left  = $this->toCSS();
        $right = $x->toCSS();

        if ($left === $right) {
            return 0;
        }

        return $left < $right ? -1 : 1;
    }
}
