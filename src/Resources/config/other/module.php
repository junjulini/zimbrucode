<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

return [

    # Module : Panel
    'panel'         => require __DIR__ . '/module/panel.php',

    # Module : AdminPanel
    'admin-panel'   => require __DIR__ . '/module/admin-panel.php',

    # Module : MetaboxPanel
    'metabox-panel' => require __DIR__ . '/module/metabox-panel.php',

    # Module : Theme adaptor
    'theme-adaptor' => require __DIR__ . '/module/theme-adaptor.php',
];
