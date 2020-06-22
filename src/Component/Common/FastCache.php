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

use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Handler\CacheHandler;
use ZimbruCode\Component\Common\Tools;

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

        $cacheHandler  = new CacheHandler($cacheDir, $extension);
        $this->cache   = $cacheHandler->getCacheDriver();
        $this->cacheID = $cacheID;

        if (!$this->cache->contains($this->cacheID)) {
            $this->cache->save($this->cacheID, $this->data);
        } else {
            $this->data = $this->cache->fetch($this->cacheID);
        }
    }

    /**
     * Set element data
     * 
     * @param  string $key     Element key
     * @param  string $value   Element value
     * @return void            This function does not return a value
     * @since 1.0.0
     */
    public function set($key, $value = '')
    {
        if (!$key) {
            throw new \RuntimeException(esc_html__('Cache key : empty.', 'zc'));
        }

        if (!is_string($key)) {
            throw new \RuntimeException(esc_html__('Cache key : not string.', 'zc'));
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
    public function get($key, $default = false)
    {
        if (!$key) {
            throw new \RuntimeException(esc_html__('Cache key : empty.', 'zc'));
        }

        if (!is_string($key)) {
            throw new \RuntimeException(esc_html__('Cache key : not string.', 'zc'));
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
    public function remove($key)
    {
        if (!$key) {
            throw new \RuntimeException(esc_html__('Cache key : empty.', 'zc'));
        }

        if (!is_string($key)) {
            throw new \RuntimeException(esc_html__('Cache key : not string.', 'zc'));
        }

        if (!isset($this->data[$key])) {
            throw new \RuntimeException(sprintf(esc_html__('This element "%s" don\'t exist in cache data.', 'zc')));
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
    public function flush()
    {
        $this->cache->delete($this->cacheID);
    }

    /**
     * Dump data
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function dump()
    {
        Tools::dump($this->data);
    }
}
