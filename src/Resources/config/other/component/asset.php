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
    'default-location'          => [
        'resources' => '/Resources/',
        'css'       => '/assets/css/',
        'js'        => '/assets/js/',
        'scss'      => '/assets/scss/',
        'image'     => '/assets/image/',
    ],

    'default-data'              => [
        'type'    => '',
        'name'    => '',
        'url'     => '',
        'deps'    => [],
        'version' => '',
        'media'   => 'all',
        'footer'  => false,
    ],

    'default-javascript-deps'   => ['jquery'],
    'default-css-deps'          => [],
    'default-javascript-footer' => true,

    'filter'                    => [
        'scss'      => [
            'dev'            => false,
            'search-point'   => 'resources/assets/scss/',
            'external-point' => '/external/',
        ],
        'combine'   => [
            'js'  => [
                'output-name' => 'app/combine-file',
                'minify'      => false,
            ],
            'css' => [
                'output-name'                => 'app/combine-file',
                'minify'                     => false,
                'convert'                    => true,
                'convert-mode-relative-path' => false,
            ],
        ],
        'namespace' => [
            'namespace-symbol' => '@_',
            'global-namespace' => 'GLOBAL',
        ],
    ],

    'cache'                     => [
        'dir'       => 'assets',
        'extension' => '.cache',
        'settings'  => [
            'check-only-dev'    => false,
            'check-cache-has'   => true,
            'check-asset-array' => true,
            'check-asset-count' => true,
            'check-asset-path'  => true,
        ],
    ],

    'css-convertor'             => [
        'import-ext'  => [
            'gif'  => 'data:image/gif',
            'png'  => 'data:image/png',
            'jpg'  => 'data:image/jpg',
            'jpeg' => 'data:image/jpeg',
            'svg'  => 'data:image/svg+xml',
            'woff' => 'data:application/x-font-woff',
        ],
        'import-size' => 3, // Import file size in kb
    ],

    'fw-search-point'           => 'zimbrucode/src/',
];
