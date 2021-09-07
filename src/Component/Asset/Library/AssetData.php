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

use ZimbruCode\Component\Asset\Library\LocationDetector;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Asset data
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class AssetData
{
    protected $raw;
    protected $info;
    protected $data;
    protected $location;

    public function __construct($asset, LocationDetector $location)
    {
        if ($asset) {
            if (is_string($asset)) {
                $this->raw  = $asset;
                $this->data = Kernel::getGlobal('core/component/asset/default-data');
            } elseif (is_array($asset) && !empty($asset['raw']) && is_string($asset['raw'])) {
                $this->raw  = $asset['raw'];
                $this->data = Kernel::getGlobal('core/component/asset/default-data');

                if (isset($asset['type'])) {
                    $this->type($asset['type']);
                }

                if (isset($asset['name'])) {
                    $this->name($asset['name']);
                }

                if (isset($asset['url'])) {
                    $this->url($asset['url']);
                }

                if (isset($asset['deps'])) {
                    $this->deps($asset['deps']);
                }

                if (isset($asset['version'])) {
                    $this->version($asset['version']);
                }

                if (isset($asset['media'])) {
                    $this->media($asset['media']);
                }

                if (isset($asset['footer'])) {
                    $this->footer($asset['footer']);
                }
            } else {
                throw new \InvalidArgumentException('Asset is empty or not string/array or asset[\'raw\'] is empty');
            }
        }

        $this->info     = new \SplFileInfo($this->raw);
        $this->location = $location;
    }

    /**
     * Asset type
     *
     * @param  string $type       Option for asset type
     * @return string|AssetData   Asset type
     * @since 1.0.0
     */
    public function type(string $type = '', bool $check = false)
    {
        if ($type) {
            if ($check === true) {
                if (empty($this->data['type'])) {
                    $this->data['type'] = $type;
                }

                return $this;
            }

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
    public function name(string $name = '', bool $check = false)
    {
        if ($name) {
            if ($check === true) {
                if (empty($this->data['name'])) {
                    $this->data['name'] = $name;
                }

                return $this;
            }

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
    public function url(string $url = '', bool $check = false)
    {
        if ($url) {
            if ($check === true) {
                if (empty($this->data['url'])) {
                    $this->data['url'] = $url;
                }

                return $this;
            }

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
    public function deps(array $deps = [], bool $check = false)
    {
        if ($deps) {
            if ($check === true) {
                if (empty($this->data['deps'])) {
                    $this->data['deps'] = $deps;
                }

                return $this;
            }

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
    public function version(string $version = '', bool $check = false)
    {
        if ($version) {
            if ($check === true) {
                if (empty($this->data['version'])) {
                    $this->data['version'] = $version;
                }

                return $this;
            }

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
    public function media(bool $media = null, bool $check = false)
    {
        if ($media !== null) {
            if ($check === true) {
                if (empty($this->data['media'])) {
                    $this->data['media'] = $media;
                }

                return $this;
            }

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
    public function footer(bool $footer = null, bool $check = false)
    {
        if ($footer !== null) {
            if ($check === true) {
                if (empty($this->data['footer'])) {
                    $this->data['footer'] = $footer;
                }

                return $this;
            }

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

    public function dynamicVersion()
    {
        $version = Kernel::getGlobal('app/version');
        $hash    = hash_file('adler32', $this->getPath());

        if ($hash) {
            $version = "{$version}.{$hash}";
        }

        return $version;
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

    public function fileType()
    {
        return $this->type() ?: $this->info()->getExtension();
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

    public function addData(array $data): AssetData
    {
        $this->data = $data;
        return $this;
    }

    /**
     * Asset data
     *
     * @return array   All asset data
     * @since 1.0.0
     */
    public function getData(): array
    {
        return $this->data;
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
        return $this->data['additional-data'][$id] ?? false;
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
