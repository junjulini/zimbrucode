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
    'version'                      => ($version = '1.0.3'),
    'slug'                         => ($slug = 'zc'),
    'name'                         => 'ZimbruCode',

    // Author details
    'author'                       => [
        'main-website' => 'https://junjulini.com',
    ],

    // For developing
    'dev'                          => false,
    'dev-config'                   => [
        'dev-log'      => true,
        'script-debug' => true,
        'max-depth'    => 40,
        'max-len'      => 150,
        'environment'  => false,
    ],

    // Twig environment : Auto reload status
    'twig-environment-auto-reload' => true,

    // Modules configs
    'module'                       => require __DIR__ . '/other/module.php',

    // Components configs
    'component'                    => require __DIR__ . '/other/component.php',
];
