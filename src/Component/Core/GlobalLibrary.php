<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Core;

use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Handler\LibraryHandler;

/**
 * Class : Global library
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
final class GlobalLibrary
{
    /**
     * Global configs
     *
     * @since 1.0.0
     */
    public function __construct()
    {
        $path = wp_normalize_path(realpath(__DIR__ . '/../../Resources'));
        $url  = Tools::getURL($path);

        $this->addPackageLibrary($path);
        $this->addIconFontLibrary($path);
        $this->addLessFileLibrary($path, $url);
    }

    /**
     * Add package library
     *
     * @param  string $path   Path from this class
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    private function addPackageLibrary(string $path): void
    {
        LibraryHandler::addPackages(require "{$path}/config/asset-packages.php");
    }

    /**
     * Add icon font library
     *
     * @param  string $path   Path from this class
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    private function addIconFontLibrary(string $path): void
    {
        LibraryHandler::addElement('icons/material-icons', "{$path}/icons/material-icons-map.php");
        LibraryHandler::addPackages(require "{$path}/icons/font-icons-package.php");
    }

    /**
     * Add less file library
     *
     * @param  string $path   Path from this class
     * @param  string $url    URL from this class
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    private function addLessFileLibrary(string $path, string $url): void
    {
        Kernel::addGlobalCache('asset/less/import-dirs/core', [
            'path' => "{$path}/less",
            'url'  => "{$url}/less/",
        ]);
    }
}
