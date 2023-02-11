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
 * Trait : Component/Handler/Traits : Global cache handler
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
trait GlobalCacheHandlerTrait
{
    /**
     * Add global cache
     *
     * @param string $key     Cache key
     * @param mixed  $value   Cache value
     * @throws InvalidArgumentException
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
     * Get global cache
     * 
     * @param string $key       Cache key
     * @param mixed  $default   Default value if key does not exist
     * @throws InvalidArgumentException
     * @return mixed
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
     * Remove global cache item
     *
     * @param string $key   Cache key
     * @throws InvalidArgumentException
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
     * Remove all cache items
     *
     * @return void
     * @since 1.0.0
     */
    public static function flushGlobalCache(): void
    {
        Kernel::addGlobal('cache', []);
    }
}
