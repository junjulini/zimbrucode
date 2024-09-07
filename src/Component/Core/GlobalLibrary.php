<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Core;

use ZimbruCode\Component\Handler\LibraryHandler;

/**
 * Class : Component/Core : Global library
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
final class GlobalLibrary
{
    private readonly string $path;

    /**
     * Constructor
     *
     * @since 1.0.0
     */
    public function __construct()
    {
        $this->path = wp_normalize_path(realpath(__DIR__ . '/../../Resources'));

        $this->addPackageLibrary();
        $this->addIconFontLibrary();
        $this->addScssNamespace();
    }

    /**
     * Add packages
     *
     * @return void
     * @since 1.2.0
     */
    private function addPackageLibrary(): void
    {
        LibraryHandler::addPackages(require_once "{$this->path}/config/asset-packages.php");
    }

    /**
     * Add font icons library
     *
     * @return void
     * @since 1.2.0
     */
    private function addIconFontLibrary(): void
    {
        LibraryHandler::addElement('icons/material-icons', "{$this->path}/icons/material-icons-list.php");
        LibraryHandler::addPackages(require_once "{$this->path}/icons/font-icons-package.php");
    }

    /**
     * Add SCSS namespaces
     *
     * @return void
     * @since 1.0.0
     */
    private function addScssNamespace(): void
    {
        Kernel::addGlobalCache('asset/scss/namespace/zc', "{$this->path}/scss");
    }
}
