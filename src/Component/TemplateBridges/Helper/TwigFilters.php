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
 * Class : Component/TemplateBridge/Helper : Twig filters
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
class TwigFilters
{
    /**
     * Constructor
     *
     * @param TwigTemplateBridge $ttb   TwigTemplateBridge object
     * @since 1.0.0
     */
    public function __construct(TwigTemplateBridge $ttb)
    {
        $ttb->addFilter('rs',          [$this, '__callback_stripslashes']);
        $ttb->addFilter('fn',          [$this, '__callback_fn']);
        $ttb->addFilter('json_decode', [$this, '__callback_json_decode']);
    }

    /**
     * Callback : Remove Slashes
     *
     * @param string|null $string   String from template
     * @return string|null          Modificated string
     * @since 1.1.0
     */
    public function __callback_stripslashes(?string $string): ?string
    {
        if (!$string) {
            return $string;
        }

        return Tools::remSlashes($string);
    }

    /**
     * Callback : Call function
     *
     * @param callable $function   Callback
     * @return mixed               Action result
     * @since 1.3.0
     */
    public function __callback_fn(callable $function): mixed
    {
        return call_user_func_array($function, []);
    }

    /**
     * Json decode
     *
     * @param string $array   Json data
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
