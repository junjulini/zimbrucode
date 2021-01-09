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
    'version'    => ($version = '1.0.0'),
    'slug'       => ($slug = 'zc'),
    'name'       => 'ZimbruCode',

    # Author details
    'author'     => [
        'main-website' => 'https://junjulini.com',
    ],

    # For dev
    'dev'        => false,
    'dev-config' => [
        'dev-log'      => true,
        'script-debug' => true,
        'max-depth'    => 40,
        'max-len'      => 150,
        'environment'  => false,
    ],

    # Module configs
    'module'     => require __DIR__ . '/other/module.php',

    # Component configs
    'component'  => require __DIR__ . '/other/component.php',
];
