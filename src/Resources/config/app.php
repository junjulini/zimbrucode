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
    # mode of app ( theme / plugin )
    'mode'                   => 'theme',

    # permitted modes
    'modes'                  => ['theme', 'plugin'],

    'module-namespace-dir'   => 'Module',

    'domain'                 => false,
    'name'                   => false,
    'slug'                   => false,
    'version'                => false,

    # locator configs
    'load-file'              => false,
    'load-path'              => false,
    'load-url'               => false,
    'path'                   => false,
    'url'                    => false,
    'resource-path'          => false,
    'resource-url'           => false,
    'var-path'               => false,
    'var-url'                => false,
    'cache-path'             => false,
    'cache-url'              => false,
    'temp-path'              => false,
    'temp-url'               => false,
    'log-path'               => false,
    'log-url'                => false,
    'asset-path'             => false,
    'asset-url'              => false,
    'config-path'            => false,
    'config-url'             => false,
    'model-path'             => false,
    'model-url'              => false,
    'view-path'              => false,
    'view-url'               => false,

    # app resource dir & other
    'resource-dir'           => 'Resources/',
    'var-dir'                => 'Resources/var/',
    'cache-dir'              => 'cache/',
    'temp-dir'               => 'temp/',
    'log-dir'                => 'logs/',
    'asset-dir'              => 'Resources/assets/',
    'config-dir'             => 'Resources/config/',
    'model-dir'              => 'Resources/models/',
    'view-dir'               => 'Resources/views/',

    'var-upload-mode'        => false,

    # app network site delimiter
    'network-site-delimiter' => 'network-site-',
];
