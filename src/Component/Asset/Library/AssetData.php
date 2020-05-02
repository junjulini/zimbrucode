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

use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Asset\Library\LocationDetector;
use ZimbruCode\Component\Common\Tools;

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

    public function __construct($asset, LocationDetector $location)
    {
        $this->raw  = $asset;
        $this->info = new \SplFileInfo($this->raw);
        $this->data = Kernel::getGlobal('core/component/asset/default-data');

        $this->location = $location;
    }

    /**
     * Asset type
     * 
     * @param  string $type   Option for asset type
     * @return string         Asset type
     * @since 1.0.0
     */
    public function type($type = '')
    {
        if ($type && is_string($type)) {
            $this->data['type'] = $type;
            return $this;
        }

        return $this->data['type'];
    }

    /**
     * Asset name
     * 
     * @param  string $name   Option for asset name
     * @return string         Asset name
     * @since 1.0.0
     */
    public function name($name = '')
    {
        if ($name && is_string($name)) {
            $this->data['name'] = $name;
            return $this;
        }

        return $this->data['name'];
    }

    /**
     * Asset url
     * 
     * @param  string $url   Option for asset url
     * @return string        Asset url
     * @since 1.0.0
     */
    public function url($url = '')
    {
        if ($url && is_string($url)) {
            $this->data['url'] = $url;
            return $this;
        }

        return $this->data['url'];
    }

    /**
     * Asset deps
     * 
     * @param  array $deps   Option for asset deps
     * @return array         Asset deps
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
     * @param  string $version   Option for asset version
     * @return string            Asset version
     * @since 1.0.0
     */
    public function version($version = '')
    {
        if ($version && is_string($version)) {
            $this->data['version'] = $version;
            return $this;
        }

        return $this->data['version'];
    }

    /**
     * Asset media
     * 
     * @param  string $media   Option for asset media
     * @return string          Asset media
     * @since 1.0.0
     */
    public function media($media = '')
    {
        if ($media && is_bool($media)) {
            $this->data['media'] = $media;
            return $this;
        }

        return $this->data['media'];
    }

    /**
     * Asset footer : if script set for footer
     * 
     * @param  string $footer   Option for asset footer
     * @return string           Asset footer
     * @since 1.0.0
     */
    public function footer($footer = '')
    {
        if ($footer && is_bool($footer)) {
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
    public function flush()
    {
        $this->data  = Kernel::getGlobal('core/component/asset/default-data');
        return $this;
    }

    /**
     * Get raw identification of asset
     * 
     * @return string   Identification of asset
     * @since 1.0.0
     */
    public function raw()
    {
        return $this->raw;
    }

    /**
     * Additional info of asset
     * 
     * @return SplFileInfo object
     * @since 1.0.0
     */
    public function info()
    {
        return $this->info;
    }

    /**
     * Check if asset is file
     * 
     * @return boolean   True of False
     * @since 1.0.0
     */
    public function isFile()
    {
        return ($this->info->getExtension()) ? true : false;
    }

    /**
     * Get asset path if is file
     * 
     * @return string   Asset path
     * @since 1.0.0
     */
    public function getPath()
    {
        if ($this->isFile()) {
            return $this->location->get($this->raw);
        } else {
            throw new \RuntimeException(esc_html__('Asset is not file : ', 'zc') . $this->raw);
        }
    }

    /**
     * Get asset URL
     * 
     * @return string   Asset URL
     * @since 1.0.0
     */
    public function getURL()
    {
        return Tools::getURL($this->getPath());
    }

    /**
     * Asset data
     * 
     * @return array   All asset data
     * @since 1.0.0
     */
    public function getAssetData()
    {
        return $this->data;
    }

    /**
     * Set additional arguments
     * 
     * @param array $args   List of arguments
     * @since 1.0.0
     */
    public function setArgs(array $args)
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
    public function getArgs()
    {
        return (!empty($this->data['args'])) ? $this->data['args'] : [];
    }

    /**
     * Check if asset has additional argument
     * 
     * @param  string  $arg   Argument name
     * @return boolean        True of False
     * @since 1.0.0
     */
    public function hasArg($arg)
    {
        if ($arg && is_string($arg)) {
            return in_array($arg, $this->getArgs());
        }

        return false;
    }

    /**
     * Set additional asset data
     * 
     * @param string $id    Identifier
     * @param array  $data  Additional data
     * @since 1.0.0
     */
    public function setAdditionalData($id, array $data)
    {
        if ($id && is_string($id) && !empty($data)) {
            $this->data['additional-data'][$id] = $data;
        }

        return $this;
    }

    /**
     * Get additional asset data
     * 
     * @param  string $id   Identifier
     * @return array        Additional asset data
     * @since 1.0.0
     */
    public function getAdditionalData($id)
    {
        if ($id && is_string($id)) {
            return (!empty($this->data['additional-data'][$id])) ? $this->data['additional-data'][$id] : false;
        }

        return false;
    }

    /**
     * Generate asset name
     * 
     * @param  boolean $withCoreSlug   With next prefix : zc
     * @return string                  Generated asset name
     * @since 1.0.0
     */
    public function generateName($withCoreSlug = true)
    {
        $fileURL = $this->getURL();
        $rootURL = Kernel::service('app-locator')->getURL();

        if (0 === strpos($fileURL, $rootURL)) {
            $rootURL = str_replace('/app', '', $rootURL);
            $output  = str_replace($rootURL . '/', '', $fileURL);
            $output  = strtolower($output);
            
            return ($withCoreSlug) ? Kernel::getGlobal('core/slug') .'/'. $output : $output;
        } else {
            $loadURL = Kernel::service('app-locator')->getLoadURL();

            if (0 === strpos($fileURL, $loadURL)) {
                $fwSP = Kernel::getGlobal('core/component/asset/fw-search-point');
                $fwSP = str_replace('/', '\/', $fwSP);

                preg_match("/{$fwSP}(.*)/i", $fileURL, $output);
                $output = strtolower($output[1]);

                return ($withCoreSlug) ? Kernel::getGlobal('core/slug') .'/'. $output : $output;
            } else {
                return basename($fileURL);
            }
        }

        return false;
    }
}
