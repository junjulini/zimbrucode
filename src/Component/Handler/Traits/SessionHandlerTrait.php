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
 * @since   1.3.0
 */
trait SessionHandlerTrait
{
    /**
     * Get data from session
     *
     * @param string $path      Array path
     * @param mixed  $default   Default value
     * @return mixed            Session data
     * @since 1.3.0
     */
    public static function getSession(string $path, mixed $default = false): mixed
    {
        if ($path) {
            return Tools::getNode($_SESSION, $path, $default);
        }

        return null;
    }

    /**
     * Add data to session
     *
     * @param string $path    Array path
     * @param mixed  $value   Value
     * @return void
     * @since 1.3.0
     */
    public static function addSession(string $path, mixed $value = ''): void
    {
        if ($path) {
            Tools::addNode($_SESSION, $path, $value);
        }
    }

    /**
     * Remove item from session
     *
     * @param string $path   Array path
     * @return bool          Action result
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
