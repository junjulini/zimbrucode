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

/**
 * Class : Global configs
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
final class GlobalConfig
{
    /**
     * Global configs
     *
     * @since 1.0.0
     */
    public function __construct()
    {
        // Core configs
        Kernel::addGlobal('core', require __DIR__ . '/../../Resources/config/core.php');

        // Application configs
        Kernel::addGlobal('app', require __DIR__ . '/../../Resources/config/app.php');
    }
}
