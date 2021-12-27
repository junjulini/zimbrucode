<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

return [

    // Core
    'core'       => require __DIR__ . '/component/core.php',

    // Asset
    'asset'      => require __DIR__ . '/component/asset.php',

    // Path
    'path'       => require __DIR__ . '/component/path.php',

    // Cache
    'cache'      => require __DIR__ . '/component/cache.php',

    // Fast Cache
    'fast-cache' => require __DIR__ . '/component/fast-cache.php',
];
