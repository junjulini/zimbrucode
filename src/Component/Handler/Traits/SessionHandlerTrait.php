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

use ZimbruCode\Component\Common\Tools;

/**
 * Trait : Session handler trait
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
trait SessionHandlerTrait
{
    /**
     * Get data from session
     *
     * @param  string  $path      Base path
     * @param  mix     $default   Default value
     * @return mix                Return data
     * @since 1.0.0
     */
    public static function getSession(string $path, $default = false)
    {
        if ($path) {
            return Tools::getNode($_SESSION, $path, $default);
        }
    }

    /**
     * Add data to session
     *
     * @param  string  $path    Base path
     * @param  mix     $value   Value
     * @return void             This function does not return a value
     * @since 1.0.0
     */
    public static function addSession(string $path, $value = ''): void
    {
        if ($path) {
            Tools::addNode($_SESSION, $path, $value);
        }
    }

    /**
     * Remove data from session
     *
     * @param  string $path   Base path
     * @return bool           Return false/true
     * @since 1.0.0
     */
    public static function remSession(string $path): bool
    {
        if ($path) {
            return Tools::unsetNode($_SESSION, $path);
        }

        return false;
    }
}
