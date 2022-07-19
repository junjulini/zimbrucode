<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Common;

use RuntimeException;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Handler\CacheHandler;

/**
 * Class : Component/Common : Fast cache
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class FastCache
{
    protected $cache;
    protected $cacheID;
    protected $data = [];

    /**
     * Constructor
     *
     * @since 1.0.0
     */
    public function __construct()
    {
        $cacheDir  = Kernel::service('app')->getCachePath(Kernel::getGlobal('core/component/fast-cache/dir', 'fast-cache'));
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
     * Get item data
     *
     * @param  string  $key       Item key
     * @param  mix     $default   Default value
     * @return mix                Item data
     * @since 1.0.0
     */
    public function get(string $key, $default = false)
    {
        if (!$key) {
            throw new RuntimeException('ZE0039');
        }

        return $this->data[$key] ?? $default;
    }

    /**
     * Add item
     *
     * @param  string $key     Item key
     * @param  mix    $value   Item value
     * @return void
     * @since 1.0.0
     */
    public function add(string $key, $value = ''): void
    {
        if (!$key) {
            throw new RuntimeException('ZE0038');
        }

        $this->data[$key] = $value;
        $this->cache->save($this->cacheID, $this->data);
    }

    /**
     * Check if item exists
     *
     * @param string $key   Item key
     * @return boolean      Action result
     * @since 1.1.0
     */
    public function has(string $key): bool
    {
        return ($this->get($key));
    }

    /**
     * Remove item
     *
     * @param  string $key   Item key
     * @return void
     * @since 1.0.0
     */
    public function remove(string $key): void
    {
        if (isset($this->data[$key])) {
            unset($this->data[$key]);
            $this->cache->save($this->cacheID, $this->data);
        }
    }

    /**
     * Remove all items
     *
     * @return void
     * @since 1.0.0
     */
    public function flush(): void
    {
        $this->cache->delete($this->cacheID);
    }

    /**
     * Dump data
     *
     * @return void
     * @since 1.0.0
     */
    public function dump(): void
    {
        Tools::dump($this->data);
    }
}
