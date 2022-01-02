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

use InvalidArgumentException;
use ZimbruCode\Component\Core\Kernel;

/**
 * Trait : Global cache handler trait
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
trait GlobalCacheHandlerTrait
{
    /**
     * Add cache
     *
     * @param string $key     Cache key
     * @param mix    $value   Cache value
     * @since 1.0.0
     */
    public static function addGlobalCache(string $key, $value = '')
    {
        if (!$key) {
            throw new InvalidArgumentException('ZE0078');
        }

        return Kernel::addGlobal("cache/$key", $value);
    }

    /**
     * Get cache value
     *
     * @param string $key   Cache key
     * @since 1.0.0
     */
    public static function getGlobalCache(string $key, $default = false)
    {
        if (!$key) {
            throw new InvalidArgumentException('ZE0079');
        }

        return Kernel::getGlobal("cache/$key", $default);
    }

    /**
     * Remove cache value
     *
     * @param string $key   Cache key
     * @since 1.0.0
     */
    public static function remGlobalCache(string $key): bool
    {
        if (!$key) {
            throw new InvalidArgumentException('ZE0080');
        }

        return Kernel::remGlobal("cache/$key");
    }

    /**
     * Clear all cache values
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public static function flushGlobalCache(): void
    {
        Kernel::addGlobal('cache', []);
    }
}
