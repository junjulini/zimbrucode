<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Common;

/**
 * Class : Cookie
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
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
    public function get($name, $default = false, $filter = 'serialize')
    {
        if (empty($_COOKIE[$name])) {
            return $default;
        }

        switch ($filter) {
            case 'serialize':
                $raw = unserialize($_COOKIE[$name]);
                return ($raw !== null) ? $raw : $default;
                break;

            case 'json':
                $raw = json_decode(stripslashes($_COOKIE[$name]));
                return ($raw !== null) ? $raw : $default;
                break;

            default:
                return $_COOKIE[$name];
                break;
        }
    }

    /**
     * Set cookie
     * 
     * @param string $name     Name of cookie
     * @param string $data     Data for cookie
     * @param string $time     Time for cookie
     * @param string $filter   Format : simple '', serialize, json
     * @return void            This function does not return a value
     * @since 1.0.0
     */
    public function set($name, $data, $time = 0, $filter = 'serialize')
    {
        if ($name && is_string($name)) {
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
    public function remove($name)
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
    public function removeOnlyData($name)
    {
        $this->set($name, '');
    }
}
