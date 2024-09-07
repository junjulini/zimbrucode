<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Handler;

use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Component/Handler : Library handler
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
class LibraryHandler
{
    /**
     * Add package
     *
     * @param string $packageName   Package name
     * @param array  $package       Package data
     * @return void
     * @since 1.3.0
     */
    public static function addPackage(string $packageName, array $package): void
    {
        if ($packageName) {
            Kernel::addGlobalCache("library/package/{$packageName}", $package);
        }
    }

    /**
     * Add packages
     *
     * @param array $packages   List of packages
     * @return void
     * @since 1.0.0
     */
    public static function addPackages(array $packages): void
    {
        Kernel::addGlobalCache(
            'library/package',
            Tools::arrayMerge(
                self::getPackages(),
                $packages
            )
        );
    }

    /**
     * Get package
     *
     * @param string $packageName   Package name
     * @return mixed                Package data
     * @since 1.3.0
     */
    public static function getPackage(string $packageName): mixed
    {
        if ($packageName) {
            return Kernel::getGlobalCache("library/package/{$packageName}");
        }

        return null;
    }

    /**
     * Get packages
     *
     * @return array   List of packages
     * @since 1.0.0
     */
    public static function getPackages(): array
    {
        return Kernel::getGlobalCache('library/package', []);
    }

    /**
     * Remove package
     *
     * @param string $packageName   Package name
     * @return void
     * @since 1.0.0
     */
    public static function remPackage(string $packageName): void
    {
        if ($packageName) {
            Kernel::remGlobalCache("library/package/{$packageName}");
        }
    }

    /**
     * Remove packages
     *
     * @return void
     * @since 1.3.0
     */
    public static function remPackages(): void
    {
        Kernel::remGlobalCache('library/package');
    }

    /**
     * Add element
     *
     * @param string $name     Element name
     * @param string $source   Source of element
     * @return void
     * @since 1.0.0
     */
    public static function addElement(string $name, string $source): void
    {
        if ($name && $source) {
            Kernel::addGlobalCache("library/other/{$name}", $source);
        }
    }

    /**
     * Get element
     *
     * @param string $name   Element name
     * @return mixed         Source of element
     * @since 1.3.0
     */
    public static function getElement(string $name): mixed
    {
        if ($name) {
            return Kernel::getGlobalCache("library/other/{$name}");
        }

        return null;
    }

    /**
     * Remove element
     *
     * @param string $name   Element name
     * @return void
     * @since 1.0.0
     */
    public static function remElement(string $name): void
    {
        if ($name) {
            Kernel::remGlobalCache("library/other/{$name}");
        }
    }
}
