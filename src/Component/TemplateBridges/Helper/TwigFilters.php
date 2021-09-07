<?php

/*
 * This file is part of the zimbrucode package.
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
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class TwigFilters
{
    public function __construct(TwigTemplateBridge $ttb)
    {
        $ttb->addFilter('rs',          [$this, '__callback_stripslashes']);
        $ttb->addFilter('fn',          [$this, '__callback_fn']);
        $ttb->addFilter('json_decode', [$this, '__callback_json_decode']);
    }

    /**
     * Filter : Remove Slashes
     *
     * @param  string $string   String from template
     * @return string           Modificated string
     * @since 1.0.0
     */
    public function __callback_stripslashes(?string $string): ?string
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
    public function __callback_json_decode(string $json): array
    {
        if ($json) {
            $data = json_decode($json, true);

            return (json_last_error() == JSON_ERROR_NONE) ? $data : [];
        }

        return [];
    }
}
