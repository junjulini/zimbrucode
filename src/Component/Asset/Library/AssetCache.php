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
 * Class : Asset cache
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class AssetCache
{
    protected $assets   = [];
    protected $object   = [];
    protected $settings = [];

    protected $cacheID         = 'asset-cache';
    protected $executeLocation = __CLASS__;

    public function __construct()
    {
        // Set settings
        $this->settings = Kernel::getGlobal('core/component/asset/cache/settings');
        $cacheDir       = Kernel::service('app')->getCachePath(Kernel::getGlobal('core/component/asset/cache/dir', '/assets'));
        $extension      = Kernel::getGlobal('core/component/asset/cache/extension', '.cache');

        $cacheHandler = new CacheHandler($cacheDir, $extension);

        // Set objects
        $this->object['cache']    = $cacheHandler->getCacheDriver();
        $this->object['callback'] = new Callback;
    }

    /**
     * Add setting
     *
     * @param string $setting   Setting key
     * @param string $value     New value
     * @return void             This function does not return a value
     * @since 1.0.0
     */
    public function addSetting(string $setting, string $value = ''): void
    {
        if (!isset($this->settings[$setting])) {
            throw new RuntimeException("ZE0007 - Setting don't exist : {$setting}");
        }

        $this->settings[$setting] = $value;
    }

    /**
     * Set setting
     *
     * @param string $setting   Setting key
     * @since 1.0.0
     */
    public function getSetting(string $setting)
    {
        return $this->settings[$setting] ?? false;
    }

    /**
     * Add execute location ( For DEV )
     *
     * @param string $class   Class name
     * @since 1.0.0
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
     * Add asset in cache
     *
     * @param string $asset   Path of file
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    public function addAsset(string $asset): void
    {
        $this->assets[] = $asset;
    }

    /**
     * Add assets in cache
     *
     * @param array $asset   All path of files
     * @return void          This function does not return a value
     * @since 1.0.0
     */
    public function addAssets(array $assets): void
    {
        $this->assets = $assets;
    }

    /**
     * Add cache path
     *
     * @param string $path   Path of cache file
     * @return void          This function does not return a value
     * @since 1.0.0
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
     * Add check function
     *
     * @param callable $callback   Function
     * @param string   $type       Type of check
     * @return void                This function does not return a value
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
     * @param  array $additional   Additional content
     * @return void                This function does not return a value
     * @since 1.0.0
     */
    public function build(array $additional = [], string $type = 'additional'): void
    {
        $content = [
            'assets'     => [],
            'additional' => [],
        ];

        if ($type === 'additional') {
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
     * Check if need rebuild
     *
     * @return boolean   None
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
                    $msg = "Asset - {$this->executeLocation}/Cache : Cache is empty or is not array.";
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
                        $msg = "Asset - {$this->executeLocation}/Cache : {$cutPath} : file not found.";
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

        if ($this->checkAdditionalFunctions($cache['additional'])) {
            return true;
        }

        return false;
    }

    /**
     * Get cache content
     *
     * @return array cache   Content in array format
     * @since 1.0.0
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
     * Check if exits cache file or APC key
     *
     * @return boolean   true/false
     * @since 1.0.0
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
     * Add cache content
     *
     * @param array $content   Content of cache file
     * @return void            This function does not return a value
     * @since 1.0.0
     */
    public function add(array $content): void
    {
        if (!$this->cacheID) {
            throw new RuntimeException('ZE0014');
        }

        if (!is_string($this->cacheID)) {
            throw new RuntimeException('ZE0015');
        }

        $this->object['cache']->save($this->cacheID, $content);
    }

    /**
     * Remove cache
     *
     * @return void   This function does not return a value
     * @since 1.0.0
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
     * Check additional functions
     *
     * @param  array  $args   Cache data
     * @param  string $type   Type of check
     * @return bool           Results from check functions
     * @since 1.0.0
     */
    protected function checkAdditionalFunctions(array $args, string $type = 'additional'): bool
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

        $output = $this->object['callback']->run($type, $args);
        $result = '';

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
