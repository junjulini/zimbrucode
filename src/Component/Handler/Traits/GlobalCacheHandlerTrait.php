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

use ZimbruCode\Component\Core\Kernel;

/**
 * Trait : Global cache handler trait
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
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
            throw new \InvalidArgumentException('Global cache key is empty.');
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
            throw new \InvalidArgumentException('Global cache key is empty.');
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
            throw new \InvalidArgumentException('Global cache key is empty.');
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
