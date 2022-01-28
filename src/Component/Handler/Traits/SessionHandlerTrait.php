<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Handler\Traits;

use ZimbruCode\Component\Common\Tools;

/**
 * Trait : Component/Handler/Traits : Session handler
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
trait SessionHandlerTrait
{
    /**
     * Get data from session
     *
     * @param  string  $path      Array path
     * @param  mix     $default   Default value
     * @return mix                Session data
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
     * @param  string  $path    Array path
     * @param  mix     $value   Value
     * @return void
     * @since 1.0.0
     */
    public static function addSession(string $path, $value = ''): void
    {
        if ($path) {
            Tools::addNode($_SESSION, $path, $value);
        }
    }

    /**
     * Remove item from session
     *
     * @param  string $path   Array path
     * @return boolean        Action result
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
