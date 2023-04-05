<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Asset\Library;

use InvalidArgumentException;
use ReflectionClass;
use RuntimeException;
use ZimbruCode\Component\Common\Callback;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Handler\CacheHandler;

/**
 * Class : Component/Asset/Library : Asset cache
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.2.0
 */
class AssetCache
{
    protected array $assets   = [];
    protected array $object   = [];
    protected array $settings = [];

    protected string $cacheID         = 'asset-cache';
    protected string $executeLocation = __CLASS__;

    /**
     * Constructor
     *
     * @since 1.1.0
     */
    public function __construct()
    {
        // Settings
        $this->settings = Kernel::getGlobal('core/component/asset/cache/settings');
        $cacheDir       = Kernel::service('app')->getCachePath(Kernel::getGlobal('core/component/asset/cache/dir', '/assets'));
        $extension      = Kernel::getGlobal('core/component/asset/cache/extension', '.cache');

        $cacheHandler = new CacheHandler($cacheDir, $extension);

        // Objects
        $this->object['cache']    = $cacheHandler->getCacheDriver();
        $this->object['callback'] = new Callback;
    }

    /**
     * Add setting
     *
     * @param string $setting   Setting key
     * @param string $value     Setting value
     * @throws RuntimeException
     * @return void
     * @since 1.1.0
     */
    public function addSetting(string $setting, string $value = ''): void
    {
        if (!isset($this->settings[$setting])) {
            throw new RuntimeException("ZE0007 - Setting don't exist : {$setting}");
        }

        $this->settings[$setting] = $value;
    }

    /**
     * Get setting
     *
     * @param string $setting      Setting key
     * @return bool|mixed|string   Setting value
     * @since 1.0.0
     */
    public function getSetting(string $setting)
    {
        return $this->settings[$setting] ?? false;
    }

    /**
     * Add execution location ( For DEV )
     * 
     * @param string $class               Class name
     * @throws InvalidArgumentException
     * @return string                     Location
     * @since 1.1.0
     */
    public function addExecuteLocation(string $class): string
    {
        if (!class_exists($class)) {
            throw new InvalidArgumentException("ZE0008 - Class don't exist : {$class}");
        }

        $this->executeLocation = (new ReflectionClass($class))->getShortName();

        return $this->executeLocation;
    }

    /**
     * Add asset to cache array
     *
     * @param string $asset   Asset
     * @return void
     * @since 1.0.0
     */
    public function addAsset(string $asset): void
    {
        $this->assets[] = $asset;
    }

    /**
     * Add assets to cache array
     *
     * @param array $asset   Assets array
     * @return void
     * @since 1.0.0
     */
    public function addAssets(array $assets): void
    {
        $this->assets = $assets;
    }

    /**
     * Add the cache path
     *
     * @param string $path   Cache file path
     * @throws InvalidArgumentException
     * @return void
     * @since 1.1.0
     */
    public function addPath(string $path = 'file.cache'): void
    {
        if ($path) {
            $this->cacheID = $path;
        } else {
            throw new InvalidArgumentException('ZE0009');
        }
    }

    /**
     * Add the check function
     *
     * @param callable $callback   Function for checking
     * @param string   $type       Type of checking
     * @return void
     * @since 1.0.0
     */
    public function addCheckFunction(callable $callback, string $type = 'additional'): void
    {
        switch ($type) {
            case 'asset':
                $this->object['callback']->add('asset', $callback);
                break;
            case 'additional':
                $this->object['callback']->add('additional', $callback);
                break;

            default:
                $this->object['callback']->add('additional', $callback);
                break;
        }
    }

    /**
     * Build cache
     *
     * @param array $additional   Additional content
     * @return void
     * @since 1.0.0
     */
    public function build(array $additional = []): void
    {
        $content = [
            'assets'     => [],
            'additional' => [],
        ];

        if (!empty($additional)) {
            $content['additional'] = $additional;
        }

        foreach ($this->assets as $asset) {
            $content['assets'][] = [
                'path' => Tools::cutServerPartFromPath($asset),
                'hash' => @md5_file($asset),
            ];
        }

        $this->add($content);
    }

    /**
     * Check if a rebuild is needed
     *
     * @return bool   Result of checking
     * @since 1.0.0
     */
    public function check(): bool
    {
        if ($this->getSetting('check-only-dev') && !Kernel::dev()) {
            return false;
        }

        if ($this->getSetting('check-cache-has')) {
            if (!$this->has()) {
                if (Kernel::dev()) {
                    $msg = "Asset - {$this->executeLocation}/Cache : Cache file not found : {$this->cacheID}";
                    Kernel::dev()->addWarningMessage($msg);
                }

                return true;
            }
        }

        $cache = $this->get();
        if ($this->getSetting('check-asset-array')) {
            if (empty($cache['assets']) || !is_array($cache['assets'])) {
                if (Kernel::dev()) {
                    $msg = "Asset - {$this->executeLocation}/Cache : The cache is empty or not an array";
                    Kernel::dev()->addWarningMessage($msg);
                }

                return true;
            }
        }

        if ($this->getSetting('check-asset-count')) {
            if (count($cache['assets']) != count($this->assets)) {
                if (Kernel::dev()) {
                    $msg = "Asset - {$this->executeLocation}/Cache : ";
                    $msg .= sprintf('Count is different - %d != %d', count($cache['assets']), count($this->assets));

                    Kernel::dev()->addWarningMessage($msg);
                }

                return true;
            }
        }

        if ($this->getSetting('check-asset-path')) {
            foreach ($cache['assets'] as $asset) {
                if (!file_exists($cutPath = Tools::cutServerPartFromPath($asset['path'], true))) {
                    if (Kernel::dev()) {
                        $msg = "Asset - {$this->executeLocation}/Cache : {$cutPath} : file not found";
                        Kernel::dev()->addWarningMessage($msg);
                    }

                    return true;
                }

                if ($asset['hash'] != @md5_file($cutPath)) {
                    if (Kernel::dev()) {
                        $msg = "Asset - {$this->executeLocation}/Cache : ";
                        $msg .= sprintf('Hash is different - %s != %s', $asset['hash'], @md5_file($cutPath));

                        Kernel::dev()->addWarningMessage($msg);
                    }

                    return true;
                }
            }
        }

        if ($this->callAdditionalFunctions($cache['additional'])) {
            return true;
        }

        return false;
    }

    /**
     * Get the contents of the cache
     *
     * @throws RuntimeException
     * @return array
     * @since 1.1.0
     */
    public function get(): array
    {
        if (!$this->cacheID) {
            throw new RuntimeException('ZE0010');
        }

        if (!is_string($this->cacheID)) {
            throw new RuntimeException('ZE0011');
        }

        return $this->object['cache']->fetch($this->cacheID);
    }

    /**
     * Add cache data
     *
     * @param array $data   Cache data
     * @throws RuntimeException
     * @return void
     * @since 1.1.0
     */
    public function add(array $data): void
    {
        if (!$this->cacheID) {
            throw new RuntimeException('ZE0014');
        }

        if (!is_string($this->cacheID)) {
            throw new RuntimeException('ZE0015');
        }

        $this->object['cache']->save($this->cacheID, $data);
    }

    /**
     * Check if cache file or APC key exists
     *
     * @throws RuntimeException
     * @return bool   Result of checking
     * @since 1.1.0
     */
    public function has(): bool
    {
        if (!$this->cacheID) {
            throw new RuntimeException('ZE0012');
        }

        if (!is_string($this->cacheID)) {
            throw new RuntimeException('ZE0013');
        }

        return $this->object['cache']->contains($this->cacheID);
    }

    /**
     * Remove cache
     *
     * @throws RuntimeException
     * @return void
     * @since 1.1.0
     */
    public function remove(): void
    {
        if (!$this->cacheID) {
            throw new RuntimeException('ZE0016');
        }

        if (!is_string($this->cacheID)) {
            throw new RuntimeException('ZE0017');
        }

        $this->object['cache']->delete($this->cacheID);
    }

    /**
     * Flush
     *
     * @return void
     * @since 1.1.0
     */
    public function flush(): void
    {
        $this->object['cache']->flushAll();
    }

    /**
     * Call additional functions
     *
     * @param array  $cacheData   Cache data
     * @param string $type        Type of checking
     * @return bool               Result of checking
     * @since 1.1.0
     */
    protected function callAdditionalFunctions(array $cacheData, string $type = 'additional'): bool
    {
        switch ($type) {
            case 'asset':
                $type = 'asset';
                break;
            case 'additional':
                $type = 'additional';
                break;

            default:
                $type = 'additional';
                break;
        }

        $output = $this->object['callback']->run($type, $cacheData);

        if (!$output) {
            return false;
        }

        foreach ($output as $return) {
            if ($return) {
                return true;
            }

        }

        return false;
    }
}
