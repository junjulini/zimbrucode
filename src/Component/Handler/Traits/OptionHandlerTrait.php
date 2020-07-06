<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Handler\Traits;

use ZimbruCode\Component\Core\Kernel;

/**
 * Trait : Option handler trait
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
trait OptionHandlerTrait
{
    /**
     * Prep option path
     * 
     * @param  string $option   Option path
     * @return string           Prepared option path
     * @since 1.0.0
     */
    private static function __prepOption($option)
    {
        if (strrpos($option, '/') === false) {
            $slug   = 'module.panel.' . Kernel::getGlobal('core/module/admin-panel/settings/slug') . '/';
            $option = $slug . $option;
        }

        return $option;
    }

    /**
     * Get option value
     * 
     * @param  string $option    Option name
     * @param  string $default   Default value
     * @param  string $ao        Name of alternative option
     * @return string            Return option value if exist
     * @since 1.0.0
     */
    public static function getOption($option, $default = '', $ao = false)
    {
        if (!$ao) {
            $value = Kernel::service('db')->get(self::__prepOption($option), null);
            return ($value !== '' && $value !== null) ? $value : $default;
        } else {
            return get_option($ao, $default);
        }
    }

    /**
     * Check if exist app option
     * 
     * @param  string  $option   Option of app
     * @param  string  $type     Type of function
     * @param  string  $ao       Name of alternative option
     * @return boolean           Return true or false
     * @since 1.0.0
     */
    public static function hasOption($option, $type = false, $ao = false)
    {
        if ($option && is_string($option)) {
            if (!$type) {
                if (!$ao) {
                    return (self::getOption($option)) ? true : false;
                } else {
                    return (!empty(self::getOption($option, '', true))) ? true : false;
                }
            } elseif ($type === true) {
                if (!$ao) {
                    return (self::getOption($option) === true) ? true : false;
                } else {
                    return (self::getOption($option, '', true) === true) ? true : false;
                }
            } elseif (is_string($type)) {
                if (!$ao) {
                    return (self::getOption($option) == $type) ? true : false;
                } else {
                    return (self::getOption($option, '', true) == $type) ? true : false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    /**
     * Get meta data
     * 
     * @param  string $meta      Meta name
     * @param  string $default   Default value
     * @param  int    $id        Custom post ID
     * @return string            Return meta data
     * @since 1.0.0
     */
    public static function getMeta($meta, $default = '', $id = null)
    {
        if ($meta && is_string($meta)) {
            $id   = ($id) ? $id : get_the_ID();
            $meta = '_' . Kernel::getGlobal('core/module/panel/prefix-slug') . $meta;

            $value = get_post_meta($id, $meta, true);
            return ($value !== '' && $value !== null) ? $value : $default;
        }
    }
}
