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

/**
 * Class : Component/Core : Global configs
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */
final class GlobalConfig
{
    /**
     * Global configs
     *
     * @since 1.1.0
     */
    public function __construct()
    {
        // Core configs
        Kernel::addGlobal('core', require_once wp_normalize_path(realpath(__DIR__ . '/../../Resources/config/core.php')));

        // Application configs
        Kernel::addGlobal('app', require_once wp_normalize_path(realpath(__DIR__ . '/../../Resources/config/app.php')));
    }
}
