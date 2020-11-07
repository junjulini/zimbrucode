<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Handler\Traits;

/**
 * Trait : Request handler trait
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
trait RequestHandlerTrait
{
    /**
     * Post request
     *
     * @param  string $param
     * @return string
     * @since 1.0.0
     */
    public static function rPost(string $param, $default = ''): string
    {
        return !empty($_POST[$param]) ? $_POST[$param] : $default;
    }

    /**
     * Get request
     *
     * @param  string $param
     * @return string
     * @since 1.0.0
     */
    public static function rGet(string $param, $default = ''): string
    {
        return !empty($_GET[$param]) ? $_GET[$param] : $default;
    }
}
