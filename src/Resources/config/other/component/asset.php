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
    'default-location'          => [
        'resources' => '/Resources/',
        'css'       => '/assets/css/',
        'js'        => '/assets/js/',
        'less'      => '/assets/less/',
        'image'     => '/assets/image/',
    ],

    'default-data'              => [
        'type'    => '',
        'name'    => '',
        'url'     => '',
        'deps'    => [],
        'version' => $version,
        'media'   => false,
        'footer'  => false,
    ],

    'default-javascript-deps'   => ['jquery'],
    'default-css-deps'          => [],
    'default-javascript-footer' => true,

    'filter'                    => [
        'less'      => [
            'dev'               => false,
            'search-point'      => 'resources/assets/less/',
            'external-point'    => '/external/'
        ],
        'combine'   => [
            'js'             => [
                'outputName'  => 'app/combine-file',
                'minify'      => false,
                'minify-type' => 'local', // "local" or "remote"
            ],
            'css'            => [
                'outputName' => 'app/combine-file',
                'minify'     => false,
                'convert'    => true,
            ],
            'exclude-marker' => 'EXC',
        ],
        'namespace' => [
            'namespace-symbol'  => '@_',
            'global-namespace' => 'GLOBAL',
        ],
    ],

    'cache'                     => [
        'dir'       => '/assets',
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
        'import-size' => 3, # import size of files in kb
    ],

    'remote-minify'             => [
        'css-server' => 'https://cssminifier.com/raw',
        'js-server'  => 'https://javascript-minifier.com/raw',
    ],

    'fw-search-point'           => 'zimbrucode/src/',
];
