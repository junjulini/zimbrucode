<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Asset\Library;

use ZimbruCode\Component\Asset\Filter\AssetNamespace;
use ZimbruCode\Component\Asset\Filter\CSS;
use ZimbruCode\Component\Asset\Filter\JavaScript;
use ZimbruCode\Component\Asset\Filter\LESS;
use ZimbruCode\Component\Asset\Filter\Package;
use ZimbruCode\Component\Asset\Filter\Registered;
use ZimbruCode\Component\Asset\Library\Filter;
use ZimbruCode\Component\Asset\Library\LocationDetector;
use ZimbruCode\Component\Common\Tools;

/**
 * Class : Asset data collector
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class AssetDataCollector
{
    protected $data   = [];
    protected $global = [];
    protected $location;

    public function __construct(LocationDetector $location)
    {
        $this->location = $location;
    }

    /**
     * Location
     *
     * @return LocationDetector object
     * @since 1.0.0
     */
    public function location(): LocationDetector
    {
        return $this->location;
    }

    /**
     * Run filter
     *
     * @param  Filter        $filter     Filter object
     * @param  string        $single     Run filter only for concrete asset. Name of asset
     * @param  callable|null $callback   Additional callback
     * @return void                      This function does not return a value
     * @since 1.0.0
     */
    public function filter(Filter $filter, string $single = null, callable $callback = null): void
    {
        $filter->__init($this, $single, $callback);
    }

    /**
     * Registers an asset to the current asset data collector
     *
     * @param string   $asset                The asset name
     * @param bool     $autoFilter           Preparing through default filters
     * @param callable $callback             Callback for additional manipulations with assets
     * @throws \InvalidArgumentException     If the asset name is invalid
     * @since 1.0.0
     */
    public function add(string $asset, bool $autoFilter = false, callable $callback = null): AssetDataCollector
    {
        if ($asset) {
            $args = [];

            preg_match_all('/{(.*?)}/i', $asset, $output);
            if (!empty($output[1])) {
                $args  = $output[1];
                $asset = str_replace($output[0], '', $asset);
            }

            $this->addRaw($asset, new AssetData($asset, $this->location));

            if (!empty($args)) {
                $this->get($asset)->addArgs($args);
            }

            if ($autoFilter) {
                $this->filter(new CSS, $asset, $callback);
                $this->filter(new JavaScript, $asset, $callback);
                $this->filter(new AssetNamespace, $asset, $callback);
                $this->filter(new Package, $asset, $callback);
                $this->filter(new LESS, $asset, $callback);
                $this->filter(new Registered, $asset, $callback);
            }
        } else {
            throw new \InvalidArgumentException('Asset is empty or not string.');
        }

        return $this;
    }

    /**
     * Gets an asset by name
     *
     * @param  string $asset               The asset name
     * @return array|AssetData             The asset data
     * @throws \InvalidArgumentException   If there is no asset by that name
     * @since 1.0.0
     */
    public function get(string $asset = null)
    {
        if ($asset === null) {
            return $this->data;
        }

        if (!isset($this->data[$asset])) {
            throw new \InvalidArgumentException("There is no {$asset} asset.");
        }

        return $this->data[$asset];
    }

    /**
     * Checks if asset exit
     *
     * @param string $asset  Asset name
     * @return bool          True if the asset has been set, false if not
     * @since 1.0.0
     */
    public function has(string $asset): bool
    {
        if ($asset) {
            return isset($this->data[$asset]);
        }

        return false;
    }

    /**
     * Remove an asset by name
     *
     * @param  string $asset              The asset name
     * @return bool                       False or True
     * @throws \InvalidArgumentException  If there is no asset by that name
     * @since 1.0.0
     */
    public function remove(string $asset): bool
    {
        if (!isset($this->data[$asset])) {
            throw new \InvalidArgumentException("There is no {$asset} asset.");
        }

        unset($this->data[$asset]);
        return true;
    }

    /**
     * Remove all assets
     *
     * @since 1.0.0
     */
    public function flush(): AssetDataCollector
    {
        $this->data = [];
        return $this;
    }

    /**
     * Add additional global data for collector
     *
     * @param string $path   The path in the array
     * @param mix    $value  The value to set
     * @since 1.0.0
     */
    public function addGlobal(string $path, $value = ''): AssetDataCollector
    {
        if ($path) {
            Tools::addNode($this->global, $path, $value);
        }

        return $this;
    }

    /**
     * Get additional global data for collector
     *
     * @param string $path     The path in the array
     * @param mix    $default  Default value
     * @since 1.0.0
     */
    public function getGlobal(string $path, $default = false)
    {
        if ($path) {
            return Tools::getNode($this->global, $path, $default);
        }

        return $default;
    }

    /**
     * Add raw asset data
     *
     * @param string    $asset       Asset ID
     * @param AssetData $assetData   Asset data
     * @since 1.0.0
     */
    public function addRaw(string $asset, AssetData $assetData): AssetDataCollector
    {
        if ($asset) {
            $this->data[$asset] = $assetData;
        }

        return $this;
    }
}
