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
    'mode'     => null, # If null, do auto. ( apc, memcache, memcached, file, redis )
    'settings' => [
        'memcache'  => [
            'host' => '127.0.0.1',
            'port' => '11211',
        ],
        'memcached' => [
            'host' => '127.0.0.1',
            'port' => '11211',
        ],
        'redis'     => [
            'host' => '127.0.0.1',
            'port' => '6379',
        ],
    ],
];
