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
use ZimbruCode\Component\Asset\Filter\AssetNamespace;
use ZimbruCode\Component\Asset\Filter\CSS;
use ZimbruCode\Component\Asset\Filter\JavaScript;
use ZimbruCode\Component\Asset\Filter\Package;
use ZimbruCode\Component\Asset\Filter\Registered;
use ZimbruCode\Component\Asset\Filter\SCSS;
use ZimbruCode\Component\Asset\Library\Filter;
use ZimbruCode\Component\Asset\Library\LocationDetector;
use ZimbruCode\Component\Common\Tools;

/**
 * Class : Component/Asset/Library : Asset data collector
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
class AssetDataCollector
{
    protected array $data   = [];
    protected array $global = [];

    /**
     * Constructor
     *
     * @param LocationDetector $location   Location detector object
     * @since 1.3.0
     */
    public function __construct(
        protected readonly LocationDetector $location,
    ) {}

    /**
     * Location
     *
     * @return LocationDetector
     * @since 1.0.0
     */
    public function location(): LocationDetector
    {
        return $this->location;
    }

    /**
     * Filter
     *
     * @param Filter        $filter      Filter object
     * @param string|null   $assetName   Run the filter only for a specific asset. Asset name
     * @param callable|null $callback    Additional callback
     * @return void
     * @since 1.0.0
     */
    public function filter(Filter $filter, string $assetName = null, callable $callback = null): void
    {
        $filter->__init($this, $assetName, $callback);
    }

    /**
     * Add asset
     *
     * @param  mixed         $asset        Asset name / Assets
     * @param  bool          $autoFilter   Preparing assets through filters
     * @param  callable|null $callback     Callback for additional asset manipulation
     * @throws InvalidArgumentException
     * @return AssetDataCollector
     * @since 1.1.0
     */
    public function add($asset, bool $autoFilter = false, callable $callback = null): self
    {
        if (is_string($asset) || is_array($asset)) {
            $assetData = new AssetData($asset, $this->location);

            $this->addRaw($assetData->raw(), $assetData);

            if ($autoFilter) {
                $this->filter(new CSS, $assetData->raw(), $callback);
                $this->filter(new JavaScript, $assetData->raw(), $callback);
                $this->filter(new AssetNamespace, $assetData->raw(), $callback);
                $this->filter(new Package, $assetData->raw(), $callback);
                $this->filter(new SCSS, $assetData->raw(), $callback);
                $this->filter(new Registered, $assetData->raw(), $callback);
            }
        } else {
            throw new InvalidArgumentException('ZE0020');
        }

        return $this;
    }

    /**
     * Add raw asset data
     *
     * @param string    $assetName   Asset name
     * @param AssetData $assetData   Asset data
     * @return AssetDataCollector
     * @since 1.0.0
     */
    public function addRaw(string $assetName, AssetData $assetData): self
    {
        if ($assetName) {
            $this->data[$assetName] = $assetData;
        }

        return $this;
    }

    /**
     * Get asset
     *
     * @param  string|null $asset         Asset name
     * @throws InvalidArgumentException
     * @return array|AssetData            Asset data / Assets
     * @since 1.3.0
     */
    public function get(string $asset = null): array|AssetData
    {
        if ($asset === null) {
            return $this->data;
        }

        if (!isset($this->data[$asset])) {
            throw new InvalidArgumentException("ZE0021 - The asset does not exist : {$asset}");
        }

        return $this->data[$asset];
    }

    /**
     * Checks if asset exit
     *
     * @param string $asset   Asset name
     * @return bool           Result of checking
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
     * Remove asset
     *
     * @param  string $asset   Asset name
     * @throws InvalidArgumentException
     * @return bool            Removal result
     * @since 1.1.0
     */
    public function remove(string $asset): bool
    {
        if (!isset($this->data[$asset])) {
            throw new InvalidArgumentException("ZE0022 - The asset does not exist : {$asset}");
        }

        unset($this->data[$asset]);
        return true;
    }

    /**
     * Remove all assets
     *
     * @return AssetDataCollector
     * @since 1.0.0
     */
    public function flush(): self
    {
        $this->data = [];
        return $this;
    }

    /**
     * Add global data
     *
     * @param string $path    Array path
     * @param mixed  $value   Global value
     * @return AssetDataCollector
     * @since 1.3.0
     */
    public function addGlobal(string $path, mixed $value = ''): self
    {
        if ($path) {
            Tools::addNode($this->global, $path, $value);
        }

        return $this;
    }

    /**
     * Get global data
     *
     * @param string $path      Array path
     * @param mixed  $default   Default value
     * @return mixed            Global value
     * @since 1.3.0
     */
    public function getGlobal(string $path, mixed $default = false): mixed
    {
        if ($path) {
            return Tools::getNode($this->global, $path, $default);
        }

        return $default;
    }
}
