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
 * Class : Component/Common : Cookie
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
class Cookie
{
    /**
     * Get cookie
     *
     * @param string $name      Cookie name
     * @param mixed  $default   Default value
     * @param string $filter    Format : serialize, json
     * @return mixed
     * @since 1.3.0
     */
    public function get(string $name, $default = false, string $filter = 'json')
    {
        if (empty($_COOKIE[$name])) {
            return $default;
        }

        switch ($filter) {
            case 'serialize':
                $raw = unserialize($_COOKIE[$name]);
                return $raw ?: $default;

            case 'json':
                $raw = Tools::jsonDecode(stripslashes($_COOKIE[$name]), 'ZE0145');
                return $raw ?: $default;

            default:
                return $_COOKIE[$name];
        }
    }

    /**
     * Add cookie
     *
     * @param string $name     Cookie name
     * @param mixed  $data     Cookie data
     * @param int    $time     Cookie time
     * @param string $filter   Format : serialize, json
     * @return void
     * @since 1.3.0
     */
    public function add(string $name, $data, int $time = 0, string $filter = 'json'): void
    {
        if ($name && defined('COOKIEPATH') && defined('SITECOOKIEPATH') && defined('COOKIE_DOMAIN')) {
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
     * @param string $name   Cookie name
     * @return void
     * @since 1.1.0
     */
    public function remove(string $name): void
    {
        if (empty($_COOKIE[$name])) {
            return;
        }

        if (defined('COOKIEPATH') && defined('SITECOOKIEPATH') && defined('COOKIE_DOMAIN')) {
            unset($_COOKIE[$name]);
            setcookie($name, null, -1, COOKIEPATH, COOKIE_DOMAIN);

            if (SITECOOKIEPATH != COOKIEPATH) {
                setcookie($name, null, -1, SITECOOKIEPATH, COOKIE_DOMAIN);
            }
        }
    }

    /**
     * Remove data in cookie
     *
     * @param string $name   Cookie name
     * @return void
     * @since 1.1.0
     */
    public function remOnlyData(string $name): void
    {
        $this->add($name, '');
    }
}
