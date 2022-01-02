<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Common;

use ZimbruCode\Component\Common\Tools;

/**
 * Class : Cookie
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class Cookie
{
    /**
     * Get cookie
     *
     * @param  string $name     Name of cookie
     * @param  mix    $default  Default value in case if null
     * @param  string $filter   Format : simple '', serialize, json
     * @return mix
     * @since 1.0.0
     */
    public function get(string $name, $default = false, string $filter = 'serialize')
    {
        if (empty($_COOKIE[$name])) {
            return $default;
        }

        switch ($filter) {
            case 'serialize':
                $raw = unserialize($_COOKIE[$name]);
                return $raw ?: $default;
                break;

            case 'json':
                $raw = Tools::jsonDecode(stripslashes($_COOKIE[$name]), 'ZE0145');
                return $raw ?: $default;
                break;

            default:
                return $_COOKIE[$name];
                break;
        }
    }

    /**
     * Add cookie
     *
     * @param string $name     Name of cookie
     * @param mix    $data     Data for cookie
     * @param int    $time     Time for cookie
     * @param string $filter   Format : simple '', serialize, json
     * @return void            This function does not return a value
     * @since 1.0.0
     */
    public function add(string $name, $data, int $time = 0, string $filter = 'serialize'): void
    {
        if ($name) {
            switch ($filter) {
                case 'serialize':
                    $data = serialize($data);
                    break;

                case 'json':
                    $data = Tools::getHJWEP($data);
                    break;
            }

            setcookie($name, $data, $time, COOKIEPATH, COOKIE_DOMAIN);

            if (SITECOOKIEPATH != COOKIEPATH) {
                setcookie($name, $data, $time, SITECOOKIEPATH, COOKIE_DOMAIN);
            }
        }
    }

    /**
     * Remove cookie
     *
     * @param  string $name   Name of cookie
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    public function remove(string $name): void
    {
        if (empty($_COOKIE[$name])) {
            return;
        }

        unset($_COOKIE[$name]);
        setcookie($name, null, -1, COOKIEPATH, COOKIE_DOMAIN);

        if (SITECOOKIEPATH != COOKIEPATH) {
            setcookie($name, null, -1, SITECOOKIEPATH, COOKIE_DOMAIN);
        }
    }

    /**
     * Remove data in cookie
     *
     * @param  string $name   Name of cookie
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    public function removeOnlyData(string $name): void
    {
        $this->add($name, '');
    }
}
