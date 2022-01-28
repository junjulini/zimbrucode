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
use RuntimeException;
use SplFileInfo;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Component/Asset/Library : Location detector
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class LocationDetector
{
    protected $location;
    protected $root;
    protected $defaultLocation = [];

    /**
     * Constructor
     *
     * @param string $location   Location of assets
     * @since 1.0.0
     */
    public function __construct(string $location)
    {
        if (!$location) {
            throw new InvalidArgumentException('ZE0028');
        }

        $this->root            = Kernel::service('app')->getResourcePath();
        $this->defaultLocation = Kernel::getGlobal('core/component/asset/default-location');

        $path = wp_normalize_path($location);

        while (!file_exists($path . $this->defaultLocation['resources'])) {
            $path = wp_normalize_path(realpath($path . '/..'));
        }

        $this->location = $path . $this->defaultLocation['resources'];
    }

    /**
     * Get the path to the asset
     *
     * @param  string $path   Name or path to the asset
     * @return string         Asset path
     * @since 1.0.0
     */
    public function get(string $path): string
    {
        if (!$path) {
            throw new InvalidArgumentException('ZE0029');
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
     * Preparing a path defined as a string
     *
     * @param  string $path   Path of asset
     * @return string         Prepared asset path
     * @since 1.0.0
     */
    protected function definedAsString(string $path): string
    {
        $type = (new SplFileInfo($path))->getExtension();

        if (isset($this->defaultLocation[$type])) {
            $loc1 = wp_normalize_path($this->location . $this->defaultLocation[$type] . $path);
            $loc2 = wp_normalize_path($this->root . $this->defaultLocation[$type] . $path);

            if (file_exists($loc1)) {
                return $loc1;
            } elseif (file_exists($loc2)) {
                return $loc2;
            } elseif (file_exists($path)) {
                return wp_normalize_path($path);
            }
        } else {
            $loc1 = wp_normalize_path("{$this->location}/{$path}");
            $loc2 = wp_normalize_path("{$this->root}/{$path}");

            if (file_exists($loc1)) {
                return $loc1;
            } elseif (file_exists($loc2)) {
                return $loc2;
            } elseif (file_exists($path)) {
                return wp_normalize_path($path);
            }
        }

        throw new RuntimeException("ZE0030 - The asset does not exist : {$path}");
    }

    /**
     * Preparing a path defined as a path
     *
     * @param  string $path   Path of asset
     * @return string         Prepared asset path
     * @since 1.0.0
     */
    protected function definedAsPath(string $path): string
    {
        if (file_exists($path)) {
            return wp_normalize_path($path);
        }

        throw new RuntimeException("ZE0031 - The asset does not exist : {$path}");
    }

    /**
     * Preparing a path defined as a URL
     *
     * @param  string $path   Path of asset
     * @return string         Prepared asset path
     * @since 1.0.0
     */
    protected function definedAsURL(string $path): string
    {
        if (Tools::isLocalURL($path)) {
            return Tools::getPath($path);
        } else {
            throw new RuntimeException("ZE0032 - URL is not local : {$path}");
        }
    }
}
