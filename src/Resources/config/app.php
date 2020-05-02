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
    'mode'                   => 'theme', # mode of app ( theme / plugin )
    'modes'                  => ['theme', 'plugin'], # permitted modes

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
    'cache-path'             => false,
    'cache-url'              => false,
    'var-path'               => false,
    'var-url'                => false,
    'asset-path'             => false,
    'asset-url'              => false,
    'config-path'            => false,
    'config-url'             => false,
    'log-path'               => false,
    'log-url'                => false,
    'model-path'             => false,
    'model-url'              => false,
    'view-path'              => false,
    'view-url'               => false,

    # app resource dir & other
    'resource-dir'           => '/Resources/',
    'var-dir'                => '/Resources/var/',
    'cache-dir'              => 'cache/',
    'log-dir'                => 'logs/',
    'asset-dir'              => '/Resources/assets/',
    'config-dir'             => '/Resources/config/',
    'model-dir'              => '/Resources/models/',
    'view-dir'               => '/Resources/views/',

    # app network site delimiter
    'network-site-delimiter' => 'network-site-',
];
