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

use ZimbruCode\Component\Asset\Library\LocationDetector;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Asset data
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class AssetData
{
    protected $raw;
    protected $info;
    protected $data;
    protected $location;

    public function __construct(string $asset, LocationDetector $location)
    {
        $this->raw  = $asset;
        $this->info = new \SplFileInfo($this->raw);
        $this->data = Kernel::getGlobal('core/component/asset/default-data');

        $this->location = $location;
    }

    /**
     * Asset type
     *
     * @param  string $type       Option for asset type
     * @return string|AssetData   Asset type
     * @since 1.0.0
     */
    public function type(string $type = '')
    {
        if ($type) {
            $this->data['type'] = $type;
            return $this;
        }

        return $this->data['type'];
    }

    /**
     * Asset name
     *
     * @param  string $name       Option for asset name
     * @return string|AssetData   Asset name
     * @since 1.0.0
     */
    public function name(string $name = '')
    {
        if ($name) {
            $this->data['name'] = $name;
            return $this;
        }

        return $this->data['name'];
    }

    /**
     * Asset url
     *
     * @param  string $url        Option for asset url
     * @return string|AssetData   Asset url
     * @since 1.0.0
     */
    public function url(string $url = '')
    {
        if ($url) {
            $this->data['url'] = $url;
            return $this;
        }

        return $this->data['url'];
    }

    /**
     * Asset deps
     *
     * @param  array $deps       Option for asset deps
     * @return array|AssetData   Asset deps
     * @since 1.0.0
     */
    public function deps(array $deps = [])
    {
        if ($deps) {
            $this->data['deps'] = $deps;
            return $this;
        }

        return $this->data['deps'];
    }

    /**
     * Asset version
     *
     * @param  string $version    Option for asset version
     * @return string|AssetData   Asset version
     * @since 1.0.0
     */
    public function version(string $version = '')
    {
        if ($version) {
            $this->data['version'] = $version;
            return $this;
        }

        return $this->data['version'];
    }

    /**
     * Asset media
     *
     * @param  bool $media      Option for asset media
     * @return bool|AssetData   Asset media
     * @since 1.0.0
     */
    public function media(bool $media = null)
    {
        if ($media !== null) {
            $this->data['media'] = $media;
            return $this;
        }

        return $this->data['media'];
    }

    /**
     * Asset footer : if script set for footer
     *
     * @param  bool $footer     Option for asset footer
     * @return bool|AssetData   Asset footer
     * @since 1.0.0
     */
    public function footer(bool $footer = null)
    {
        if ($footer !== null) {
            $this->data['footer'] = $footer;
            return $this;
        }

        return $this->data['footer'];
    }

    /**
     * Remove all asset data
     *
     * @return AssetData object
     * @since 1.0.0
     */
    public function flush(): AssetData
    {
        $this->data = Kernel::getGlobal('core/component/asset/default-data');
        return $this;
    }

    /**
     * Get raw identification of asset
     *
     * @return string   Identification of asset
     * @since 1.0.0
     */
    public function raw(): string
    {
        return $this->raw;
    }

    /**
     * Additional info of asset
     *
     * @return SplFileInfo object
     * @since 1.0.0
     */
    public function info(): object
    {
        return $this->info;
    }

    /**
     * Check if asset is file
     *
     * @return bool   True of False
     * @since 1.0.0
     */
    public function isFile(): bool
    {
        return ($this->info->getExtension()) ? true : false;
    }

    /**
     * Get asset path if is file
     *
     * @return string   Asset path
     * @since 1.0.0
     */
    public function getPath(): string
    {
        if ($this->isFile()) {
            return $this->location->get($this->raw);
        } else {
            throw new \RuntimeException("Asset is not file : {$this->raw}");
        }
    }

    /**
     * Get asset URL
     *
     * @return string   Asset URL
     * @since 1.0.0
     */
    public function getURL(): string
    {
        return Tools::getURL($this->getPath());
    }

    /**
     * Asset data
     *
     * @return array   All asset data
     * @since 1.0.0
     */
    public function getAssetData(): array
    {
        return $this->data;
    }

    /**
     * Add additional arguments
     *
     * @param array $args   List of arguments
     * @since 1.0.0
     */
    public function addArgs(array $args): AssetData
    {
        $this->data['args'] = $args;
        return $this;
    }

    /**
     * Get additional arguments
     *
     * @return array   Additional arguments
     * @since 1.0.0
     */
    public function getArgs(): array
    {
        return (!empty($this->data['args'])) ? $this->data['args'] : [];
    }

    /**
     * Check if asset has additional argument
     *
     * @param  string $arg   Argument name
     * @return bool           True of False
     * @since 1.0.0
     */
    public function hasArg(string $arg): bool
    {
        if ($arg) {
            return in_array($arg, $this->getArgs());
        }

        return false;
    }

    /**
     * Add additional asset data
     *
     * @param string $id    Identifier
     * @param array  $data  Additional data
     * @since 1.0.0
     */
    public function addAdditionalData(string $id, array $data): AssetData
    {
        if ($id && !empty($data)) {
            $this->data['additional-data'][$id] = $data;
        }

        return $this;
    }

    /**
     * Get additional asset data
     *
     * @param  string $id   Identifier
     * @return array|bool   Additional asset data
     * @since 1.0.0
     */
    public function getAdditionalData(string $id)
    {
        if ($id) {
            return (!empty($this->data['additional-data'][$id])) ? $this->data['additional-data'][$id] : false;
        }

        return false;
    }

    /**
     * Generate asset name
     *
     * @param  bool $withCoreSlug   With next prefix : zc
     * @return string               Generated asset name
     * @since 1.0.0
     */
    public function generateName(bool $withCoreSlug = true): string
    {
        $fileURL = $this->getURL();
        $rootURL = Kernel::service('app-locator')->getURL();

        if (0 === strpos($fileURL, $rootURL)) {
            $rootURL = str_replace('/app', '', $rootURL);
            $rootURL = rtrim($rootURL, '/');
            $output  = str_replace($rootURL . '/', '', $fileURL);
            $output  = strtolower($output);

            return ($withCoreSlug) ? Kernel::getGlobal('core/slug') . '/' . $output : $output;
        } else {
            $rootURL = Kernel::service('app-locator')->getRootURL();

            if (0 === strpos($fileURL, $rootURL)) {
                $fwSP = Kernel::getGlobal('core/component/asset/fw-search-point');
                $fwSP = str_replace('/', '\/', $fwSP);

                preg_match("/{$fwSP}(.*)/i", $fileURL, $output);

                $output = strtolower($output[1]);

                return ($withCoreSlug) ? Kernel::getGlobal('core/slug') . '/' . $output : $output;
            } else {
                $rootURL = get_site_url();

                if (0 === strpos($fileURL, $rootURL)) {
                    $rootURL = str_replace('/app', '', $rootURL);
                    $rootURL = rtrim($rootURL, '/');
                    $output  = str_replace($rootURL . '/', '', $fileURL);
                    $output  = strtolower($output);

                    return ($withCoreSlug) ? Kernel::getGlobal('core/slug') . '/' . $output : $output;
                } else {
                    return basename($fileURL);
                }
            }
        }
    }
}
