<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Common;

use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Handler\CacheHandler;

/**
 * Class : Fast cache
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class FastCache
{
    protected $cache;
    protected $cacheID;
    protected $data = [];

    public function __construct()
    {
        $cacheDir  = Kernel::service('app-locator')->getCachePath(Kernel::getGlobal('core/component/fast-cache/dir', 'fast-cache'));
        $cacheID   = Kernel::getGlobal('core/component/fast-cache/id', 'fast-cache.cache');
        $extension = Kernel::getGlobal('core/component/fast-cache/extension', '.cache');

        $cacheHandler = new CacheHandler($cacheDir, $extension);

        $this->cache   = $cacheHandler->getCacheDriver();
        $this->cacheID = $cacheID;

        if (!$this->cache->contains($this->cacheID)) {
            $this->cache->save($this->cacheID, $this->data);
        } else {
            $this->data = $this->cache->fetch($this->cacheID);
        }
    }

    /**
     * Add element data
     *
     * @param  string $key   Element key
     * @param  mix $value    Element value
     * @return void          This function does not return a value
     * @since 1.0.0
     */
    public function add(string $key, $value = ''): void
    {
        if (!$key) {
            throw new \RuntimeException('Cache key : empty.');
        }

        $this->data[$key] = $value;
        $this->cache->save($this->cacheID, $this->data);
    }

    /**
     * Get element data
     *
     * @param  string  $key       Element key
     * @param  mix     $default   Element value
     * @return boolean            Element data
     * @since 1.0.0
     */
    public function get(string $key, $default = false)
    {
        if (!$key) {
            throw new \RuntimeException('Cache key : empty.');
        }

        return (isset($this->data[$key])) ? $this->data[$key] : $default;
    }

    /**
     * Remove element
     *
     * @param  string $key   Element key
     * @return void          This function does not return a value
     * @since 1.0.0
     */
    public function remove(string $key): void
    {
        if (!$key) {
            throw new \RuntimeException('Cache key : empty.');
        }

        if (!isset($this->data[$key])) {
            throw new \RuntimeException("This element {$key} don't exist in cache data.");
        }

        unset($this->data[$key]);
        $this->cache->save($this->cacheID, $this->data);
    }

    /**
     * Flush all data
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function flush(): void
    {
        $this->cache->delete($this->cacheID);
    }

    /**
     * Dump data
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function dump(): void
    {
        Tools::dump($this->data);
    }
}
