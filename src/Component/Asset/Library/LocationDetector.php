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

use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Location detector
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class LocationDetector
{
    protected $location;
    protected $root;
    protected $defaultLocation = [];

    public function __construct(string $location)
    {
        if (!$location) {
            throw new \InvalidArgumentException('Location is empty.');
        }

        $this->root            = Kernel::service('app-locator')->getResourcePath();
        $this->defaultLocation = Kernel::getGlobal('core/component/asset/default-location');

        $path = wp_normalize_path($location);

        while (!file_exists($path . $this->defaultLocation['resources'])) {
            $path = wp_normalize_path(realpath($path . '/..'));
        }

        $this->location = $path . $this->defaultLocation['resources'];
    }

    /**
     * Get path of asset if exist
     *
     * @param  string $path   Name or path of asset
     * @return string         Asset path
     * @since 1.0.0
     */
    public function get(string $path): string
    {
        if (!$path) {
            throw new \InvalidArgumentException('Path is empty.');
        }

        if (Tools::isPath($path)) {
            return $this->definedAsPath($path);
        } elseif (Tools::isURL($path)) {
            return $this->definedAsURL($path);
        } else {
            return $this->definedAsString($path);
        }
    }

    /**
     * Preparing path defined as string
     *
     * @param  string $path   Path of asset
     * @return string         Full path of asset
     * @since 1.0.0
     */
    protected function definedAsString(string $path): string
    {
        $type = (new \SplFileInfo($path))->getExtension();

        if (isset($this->defaultLocation[$type])) {
            $loc1 = realpath($this->location . $this->defaultLocation[$type] . $path);
            $loc2 = realpath($this->root . $this->defaultLocation[$type] . $path);

            if (file_exists($loc1)) {
                return $loc1;
            } elseif (file_exists($loc2)) {
                return $loc2;
            } elseif (file_exists($path)) {
                return $path;
            }
        } else {
            $loc1 = realpath("{$this->location}/{$path}");
            $loc2 = realpath("{$this->root}/{$path}");

            if (file_exists($loc1)) {
                return $loc1;
            } elseif (file_exists($loc2)) {
                return $loc2;
            } elseif (file_exists($path)) {
                return $path;
            }
        }

        throw new \RuntimeException("Asset not exist : {$path}");
    }

    /**
     * Preparing path defined as path
     *
     * @param  string $path   Path of asset
     * @return string         Full path of asset
     * @since 1.0.0
     */
    protected function definedAsPath(string $path): string
    {
        if (file_exists($path)) {
            return $path;
        }

        throw new \RuntimeException("Asset not exist : {$path}");
    }

    /**
     * Preparing path defined as URL
     *
     * @param  string $path   Path of asset
     * @return string         Full path of asset
     * @since 1.0.0
     */
    protected function definedAsURL(string $path): string
    {
        if (Tools::isLocalURL($path)) {
            return Tools::getPath($path);
        } else {
            throw new \RuntimeException("Can't get path for non local URL : {$path}");
        }
    }
}
