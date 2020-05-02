<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\TemplateBridges\Helper;

use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\TemplateBridges\TwigTemplateBridge;

/**
 * Class : Twig filters
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class TwigFilters
{
    public function __construct(TwigTemplateBridge $ttb)
    {
        // Filter : Remove Slashes
        $ttb->setFilter('rs', [$this, '__callback_stripslashes']);
        $ttb->setFilter('fn', [$this, '__callback_fn']);
        $ttb->setFilter('json_decode', [$this, '__callback_json_decode']);
    }

    /**
     * Filter : Remove Slashes
     * 
     * @param  string $string   String from template
     * @return string           Modificated string
     * @since 1.0.0
     */
    public function __callback_stripslashes($string)
    {
        if (!$string) {
            return $string;
        }

        return Tools::removeSlashes($string);
    }

    public function __callback_fn(callable $function)
    {
        return call_user_func_array($function, []);
    }

    /**
     * Json decode
     * 
     * @param  json  $array   Json data
     * @return array          Decoded data
     * @since 1.0.0
     */
    public function __callback_json_decode($json)
    {
        if ($json && is_string($json)) {
            $data = json_decode($json);

            return (json_last_error() == JSON_ERROR_NONE) ? $data : [];
        }

        return [];
    }
}
