<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Handler;

use Doctrine\Common\Cache\ApcCache;
use Doctrine\Common\Cache\FilesystemCache;
use Doctrine\Common\Cache\MemcacheCache;
use Doctrine\Common\Cache\MemcachedCache;
use Doctrine\Common\Cache\RedisCache;
use Memcache;
use Memcached;
use Redis;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Component/Handler : Cache
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.2.0
 */
class CacheHandler
{
    protected string $fileCacheDir;
    protected string $fileCacheExtension;

    /**
     * Constructor
     *
     * @param string $fileCacheDir         Cache file directory
     * @param string $fileCacheExtension   Cache file extension
     * @since 1.0.0
     */
    public function __construct(string $fileCacheDir, string $fileCacheExtension = '.cache')
    {
        $this->fileCacheDir       = $fileCacheDir;
        $this->fileCacheExtension = $fileCacheExtension;
    }

    /**
     * Get cache drive
     *
     * @return object   Cache drive
     * @since 1.1.0
     */
    public function getCacheDriver(): object
    {
        $mode = Kernel::getGlobal('core/component/cache/mode', 'auto');

        if ($mode == 'auto') {
            if (extension_loaded('apc') && ini_get('apc.enabled')) {
                return $this->apc();
            } elseif (class_exists('Memcache')) {
                return $this->memcache();
            } elseif (class_exists('Memcached')) {
                return $this->memcached();
            } elseif (class_exists('Redis')) {
                return $this->redis();
            }

            return $this->filesystem();
        } else {
            switch ($mode) {
                case 'apc':
                    if (extension_loaded('apc') && ini_get('apc.enabled')) {
                        return $this->apc();
                    } else {
                        return $this->filesystem();
                    }

                case 'memcache':
                    if (class_exists('Memcache')) {
                        return $this->memcache();
                    } else {
                        return $this->filesystem();
                    }

                case 'memcached':
                    if (class_exists('Memcached')) {
                        return $this->memcached();
                    } else {
                        return $this->filesystem();
                    }

                case 'redis':
                    if (class_exists('Redis')) {
                        return $this->redis();
                    } else {
                        return $this->filesystem();
                    }

                default:
                    return $this->filesystem();
            }
        }
    }

    /**
     * APC
     *
     * @return ApcCache
     * @since 1.0.0
     */
    protected function apc(): ApcCache
    {
        return new ApcCache;
    }

    /**
     * Memcache
     *
     * @return MemcacheCache
     * @since 1.1.0
     */
    protected function memcache(): MemcacheCache
    {
        $host = Kernel::getGlobal('core/component/cache/settings/memcache/host');
        $port = Kernel::getGlobal('core/component/cache/settings/memcache/port');

        $memcache = new Memcache;

        if ($memcache->connect($host, $port)) {
            $cacheDriver = new MemcacheCache;
            $cacheDriver->setMemcache($memcache);

            return $cacheDriver;
        }
    }

    /**
     * Memcached
     *
     * @return MemcachedCache
     * @since 1.1.0
     */
    protected function memcached(): MemcachedCache
    {
        $host = Kernel::getGlobal('core/component/cache/settings/memcached/host');
        $port = Kernel::getGlobal('core/component/cache/settings/memcached/port');

        $memcached = new Memcached;

        if ($memcached->addServer($host, $port)) {
            $cacheDriver = new MemcachedCache;
            $cacheDriver->setMemcached($memcached);

            return $cacheDriver;
        }
    }

    /**
     * Redis
     *
     * @return object  Redis drive
     * @since 1.1.0
     */
    protected function redis(): RedisCache
    {
        $host = Kernel::getGlobal('core/component/cache/settings/redis/host');
        $port = Kernel::getGlobal('core/component/cache/settings/redis/port');

        $redis = new Redis;

        if ($redis->connect($host, $port)) {
            $cacheDriver = new RedisCache;
            $cacheDriver->setRedis($redis);

            return $cacheDriver;
        }
    }

    /**
     * Filesystem
     *
     * @return FilesystemCache
     * @since 1.0.0
     */
    protected function filesystem(): FilesystemCache
    {
        return new FilesystemCache($this->fileCacheDir, $this->fileCacheExtension);
    }
}
