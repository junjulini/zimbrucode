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

use ZimbruCode\Component\Handler\LibraryHandler;
use ZimbruCode\Component\Common\Tools;

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

        $this->setPackageLibrary($path);
        $this->setIconFontLibrary($path);
        $this->setLessFileLibrary($path, $url);
    }

    /**
     * Set package library
     * 
     * @param  string $path   Path from this class
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    private function setPackageLibrary($path)
    {
        LibraryHandler::setPackages(require $path . '/config/asset-packages.php');
    }

    /**
     * Set icon font library
     * 
     * @param  string $path   Path from this class
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    private function setIconFontLibrary($path)
    {
        LibraryHandler::setElement('icons/material-icons', $path . '/icons/material-icons-map.php');
        LibraryHandler::setPackages(require $path . '/icons/font-icons-package.php');
    }

    /**
     * Set less file library
     * 
     * @param  string $path   Path from this class
     * @param  string $url    URL from this class
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    private function setLessFileLibrary($path, $url)
    {
        Kernel::setGlobalCache('asset/less/import-dirs/core',
            [
                'path' => $path . '/less',
                'url'  => $url . '/less/',
            ]
        );
    }
}
