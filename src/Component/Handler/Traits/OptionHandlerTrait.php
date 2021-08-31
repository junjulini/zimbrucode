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
    private static function __prepOption(string $option): string
    {
        if (strrpos($option, '/') === false) {
            $slug   = Kernel::getGlobal('core/module/panel/db-name') .'.'. Kernel::getGlobal('core/module/admin-panel/settings/slug') . '/';
            $option = $slug . $option;
        }

        return $option;
    }

    /**
     * Get option value
     *
     * @param  string $option    Option name
     * @param  mix    $default   Default value
     * @param  bool   $ao        Alternative option
     * @return mix               Return option value if exist
     * @since 1.0.0
     */
    public static function getOption(string $option, $default = '', bool $ao = false)
    {
        if (!$ao) {
            $value = Kernel::service('db')->get(self::__prepOption($option), null);
            return ($value !== '' && $value !== null) ? $value : $default;
        } else {
            return get_option($option, $default);
        }
    }

    /**
     * Check if exist app option
     *
     * @param  string  $option   Option of app
     * @param  mix     $type     Type of function
     * @param  bool    $ao       Alternative option
     * @return boolean           Return true or false
     * @since 1.0.0
     */
    public static function hasOption(string $option, $type = false, bool $ao = false): bool
    {
        if ($option) {
            if (!$type) {
                return (self::getOption($option, '', $ao)) ? true : false;
            } elseif ($type === true) {
                return (self::getOption($option, '', $ao) === true);
            } elseif (is_string($type)) {
                return (self::getOption($option, '', $ao) == $type);
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
    public static function getMeta(string $meta = null, $default = '', int $id = null)
    {
        $id   = $id ?: get_the_ID();
        $data = Kernel::getGlobalCache("meta-data/{$id}");

        if ($data === false) {
            $metaContainerSlug = Kernel::getGlobal('core/module/metabox-panel/meta-container-slug');
            $data = get_post_meta($id, "_{$metaContainerSlug}", true);

            if ($data && is_array($data)) {
                Kernel::addGlobalCache("meta-data/{$id}", $data);
            } else {
                return $default;
            }
        }

        if ($meta) {
            return (isset($data[$meta]) && $data[$meta] !== '') ? $data[$meta] : $default;
        } else {
            return $data;
        }
    }
}
