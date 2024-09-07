<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Service;

use RuntimeException;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Handler\CacheHandler;

/**
 * Class : Component/Service : Fast cache service
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
class FastCacheService
{
    protected readonly object $cache;
    protected readonly string $cacheID;
    protected array $data = [];

    /**
     * Constructor
     *
     * @since 1.3.0
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
     * @param  string $key       Item key
     * @param  mixed  $default   Default value
     * @throws RuntimeException
     * @return mixed             Item data
     * @since 1.3.0
     */
    public function get(string $key, mixed $default = false): mixed
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
     * @param  mixed  $value   Item value
     * @throws RuntimeException
     * @return void
     * @since 1.3.0
     */
    public function add(string $key, mixed $value = ''): void
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
     * @return bool         Action result
     * @since 1.3.0
     */
    public function has(string $key): bool
    {
        return (!empty($this->get($key)));
    }

    /**
     * Remove item
     *
     * @param string $key   Item key
     * @return void
     * @since 1.3.0
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
     * @since 1.3.0
     */
    public function flush(): void
    {
        $this->data = [];
        $this->cache->delete($this->cacheID);
    }

    /**
     * Dump data
     *
     * @return void
     * @since 1.3.0
     */
    public function dump(): void
    {
        Tools::dump($this->data);
    }
}
