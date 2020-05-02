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

use ZimbruCode\Component\Asset\Library\Less\Environment;
use ZimbruCode\Component\Asset\Library\Less\Parser;
use ZimbruCode\Component\Asset\Library\Less\Tree;

/**
 * Class : Tree - Url
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Url extends Tree
{
    public $attrs;
    public $value;
    public $currentFileInfo;
    public $isEvald;
    public $type = 'Url';

    public function __construct($value, $currentFileInfo = null, $isEvald = null)
    {
        $this->value           = $value;
        $this->currentFileInfo = $currentFileInfo;
        $this->isEvald         = $isEvald;
    }

    public function accept($visitor)
    {
        $this->value = $visitor->visitObj($this->value);
    }

    public function genCSS($output)
    {
        $output->add('url(');
        $this->value->genCSS($output);
        $output->add(')');
    }

    public function compile($ctx)
    {
        $val = $this->value->compile($ctx);

        if (!$this->isEvald) {
            // Add the base path if the URL is relative
            if (Parser::$options['relativeUrls']
                && $this->currentFileInfo
                && is_string($val->value)
                && Environment::isPathRelative($val->value)
            ) {
                $rootpath = $this->currentFileInfo['uri_root'];
                if (!$val->quote) {
                    $rootpath = preg_replace('/[\(\)\'"\s]/', '\\$1', $rootpath);
                }
                $val->value = $rootpath . $val->value;
            }

            $val->value = Environment::normalizePath($val->value);
        }

        // Add cache buster if enabled
        if (Parser::$options['urlArgs']) {
            if (!preg_match('/^\s*data:/', $val->value)) {
                $delimiter = strpos($val->value, '?') === false ? '?' : '&';
                $urlArgs   = $delimiter . Parser::$options['urlArgs'];
                $hash_pos  = strpos($val->value, '#');
                if ($hash_pos !== false) {
                    $val->value = substr_replace($val->value, $urlArgs, $hash_pos, 0);
                } else {
                    $val->value .= $urlArgs;
                }
            }
        }

        return new Url($val, $this->currentFileInfo, true);
    }
}
