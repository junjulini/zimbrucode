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
     * Set cache
     * 
     * @param string $key     Cache key
     * @param mix    $value   Cache value
     * @since 1.0.0
     */
    public static function setGlobalCache($key, $value = '')
    {
        if (!$key) {
            throw new \InvalidArgumentException(esc_html__('Global cache key is empty.', 'zc'));
        }

        if (!is_string($key)) {
            throw new \InvalidArgumentException(esc_html__('Global cache key not string.', 'zc'));
        }

        return Kernel::setGlobal("cache/$key", $value);
    }

    /**
     * Get cache value
     * 
     * @param string $key   Cache key
     * @since 1.0.0
     */
    public static function getGlobalCache($key, $default = false)
    {
        if (!$key) {
            throw new \InvalidArgumentException(esc_html__('Global cache key is empty.', 'zc'));
        }

        if (!is_string($key)) {
            throw new \InvalidArgumentException(esc_html__('Global cache key not string.', 'zc'));
        }

        return Kernel::getGlobal("cache/$key", $default);
    }

    /**
     * Remove cache value
     * 
     * @param string $key   Cache key
     * @since 1.0.0
     */
    public static function remGlobalCache($key)
    {
        if (!$key) {
            throw new \InvalidArgumentException(esc_html__('Global cache key is empty.', 'zc'));
        }

        if (!is_string($key)) {
            throw new \InvalidArgumentException(esc_html__('Global cache key not string.', 'zc'));
        }

        return Kernel::remGlobal("cache/$key");
    }

    /**
     * Clear all cache values
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public static function flushGlobalCache()
    {
        Kernel::setGlobal('cache', []);
    }
}
