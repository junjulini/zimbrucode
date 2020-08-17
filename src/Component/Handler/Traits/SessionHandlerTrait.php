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
     * @param  string  $default   Default value
     * @return string             Return data
     * @since 1.0.0
     */
    public static function getSession($path, $default = false)
    {
        if ($path && is_string($path)) {
            return Tools::getNode($_SESSION, $path, $default);
        }

        return false;
    }

    /**
     * Add data to session
     * 
     * @param  string  $path    Base path
     * @param  string  $value   Value
     * @return void             This function does not return a value
     * @since 1.0.0
     */
    public static function addSession($path, $value = '')
    {
        if ($path && is_string($path)) {
            Tools::addNode($_SESSION, $path, $value);
        }
    }

    /**
     * Remove data from session
     * 
     * @param  string $path   Base path
     * @return boolean        Return false/true
     * @since 1.0.0
     */
    public static function remSession($path)
    {
        if ($path && is_string($path)) {
            return Tools::unsetNode($_SESSION, $path);
        }

        return false;
    }
}
