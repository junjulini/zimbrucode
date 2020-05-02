<?php

/*
 * This file is part of the ZimbruCode package.
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
 * Class : Library handler
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class LibraryHandler
{
    /**
     * Set package
     * 
     * @param string $name   Name of package
     * @param array  $source
     * @return void          This function does not return a value
     * @since 1.0.0
     */
    public static function setPackage($name, array $source)
    {
        if ($name && is_string($name)) {
            Kernel::setGlobalCache("library/package/{$name}", $source);
        }
    }

    /**
     * Set packages
     * 
     * @param array $source
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public static function setPackages(array $source)
    {
        Kernel::setGlobalCache(
            'library/package',
            Tools::arrayMerge(
                self::getPackages(),
                $source
            )
        );
    }

    /**
     * Get packages
     * 
     * @param  string $name   Name of package
     * @return array
     * @since 1.0.0
     */
    public static function getPackage($name)
    {
        if ($name && is_string($name)) {
            return Kernel::getGlobalCache("library/package/{$name}");
        }

        return false;
    }

    /**
     * Get packages
     * 
     * @return array
     * @since 1.0.0
     */
    public static function getPackages()
    {
        return Kernel::getGlobalCache('library/package', []);
    }

    /**
     * Remove package
     * 
     * @param  string $name   Name of package
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    public static function remPackage($name)
    {
        if ($name && is_string($name)) {
            Kernel::remGlobalCache("library/package/{$name}");
        }
    }

    /**
     * Remove packages
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public static function remPackages()
    {
        Kernel::remGlobalCache('library/package');
    }

    /**
     * Set element
     * 
     * @param string $name     Name of element
     * @param string $source   Source of element
     * @return void            This function does not return a value
     * @since 1.0.0
     */
    public static function setElement($name, $source)
    {
        if ($name && is_string($name) && $source) {
            Kernel::setGlobalCache("library/other/{$name}", $source);
        }
    }

    /**
     * Get element
     * 
     * @param  string $name   Name of element
     * @return array          Source of element
     * @since 1.0.0
     */
    public static function getElement($name)
    {
        if ($name && is_string($name)) {
            return Kernel::getGlobalCache("library/other/{$name}");
        }

        return false;
    }

    /**
     * Remove element
     * 
     * @param  string $name   Name of element
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    public static function remElement($name)
    {
        if ($name && is_string($name)) {
            Kernel::remGlobalCache("library/other/{$name}");
        }
    }
}
