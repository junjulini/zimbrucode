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
use ZimbruCode\Component\Asset\Library\Less\Parser;
use ZimbruCode\Component\Asset\Library\Less\Environment;

/**
 * Class : Tree - A simple css name-value pair
 *
 * ex: width:100px;
 *
 * In bootstrap, there are about 600-1,000 simple name-value pairs (depending on how forgiving the match is) -vs- 6,020 dynamic rules (Rule)
 * Using the name-value object can speed up bootstrap compilation slightly, but it breaks color keyword interpretation: color:red -> color:#FF0000;
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class NameValue extends Tree
{
    public $name;
    public $value;
    public $index;
    public $currentFileInfo;
    public $type      = 'NameValue';
    public $important = '';

    public function __construct($name, $value = null, $index = null, $currentFileInfo = null)
    {
        $this->name            = $name;
        $this->value           = $value;
        $this->index           = $index;
        $this->currentFileInfo = $currentFileInfo;
    }

    public function genCSS($output)
    {
        $output->add(
            $this->name
            . Environment::$_outputMap[': ']
            . $this->value
            . $this->important
            . (((Environment::$lastRule && Parser::$options['compress'])) ? "" : ";")
            , $this->currentFileInfo, $this->index);
    }

    public function compile($env)
    {
        return $this;
    }

    public function makeImportant()
    {
        $new            = new NameValue($this->name, $this->value, $this->index, $this->currentFileInfo);
        $new->important = ' !important';
        return $new;
    }
}
