<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Asset\Library\Less;

/**
 * Class : Mime lookup
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Mime
{
    // this map is intentionally incomplete
    // if you want more, install 'mime' dep
    static $_types = [
        '.htm'  => 'text/html',
        '.html' => 'text/html',
        '.gif'  => 'image/gif',
        '.jpg'  => 'image/jpeg',
        '.jpeg' => 'image/jpeg',
        '.png'  => 'image/png',
        '.ttf'  => 'application/x-font-ttf',
        '.otf'  => 'application/x-font-otf',
        '.eot'  => 'application/vnd.ms-fontobject',
        '.woff' => 'application/x-font-woff',
        '.svg'  => 'image/svg+xml',
    ];

    public static function lookup($filepath)
    {
        $parts = explode('.', $filepath);
        $ext   = '.' . strtolower(array_pop($parts));

        if (!isset(self::$_types[$ext])) {
            return;
        }
        return self::$_types[$ext];
    }

    public static function charsets_lookup($type = null)
    {
        // assumes all text types are UTF-8
        return $type && preg_match('/^text\//', $type) ? 'UTF-8' : '';
    }
}
