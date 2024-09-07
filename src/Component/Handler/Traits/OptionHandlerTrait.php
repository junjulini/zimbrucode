<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Handler\Traits;

use ZimbruCode\Component\Core\Kernel;

/**
 * Trait : Component/Handler/Traits : Option handler
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
trait OptionHandlerTrait
{
    /**
     * Preparing option
     *
     * @param string $option   Option name
     * @return string           Prepared option
     * @since 1.1.0
     */
    private static function __prepOption(string $option): string
    {
        if (strrpos($option, '/') === false) {
            $slug   = Kernel::getGlobal('core/module/panel/db-name') . '.' . Kernel::getGlobal('core/module/admin-panel/settings/slug') . '/';
            $option = $slug . $option;
        }

        return $option;
    }

    /**
     * Get option value
     *
     * @param string $option    Option name
     * @param mixed  $default   Default value
     * @param bool   $ao        Alternative option
     * @return mixed            Action result
     * @since 1.3.0
     */
    public static function getOption(string $option, mixed $default = '', bool $ao = false): mixed
    {
        if (!$ao) {
            $value = Kernel::service('db')->get(self::__prepOption($option), null);
            return ($value !== '' && $value !== null) ? $value : $default;
        } else {
            return get_option($option, $default);
        }
    }

    /**
     * Check if option exists
     *
     * @param  string $option   Option name
     * @param  mixed  $type     Type of action
     * @param  bool   $ao       Alternative option
     * @return bool             Result of checking
     * @since 1.3.0
     */
    public static function hasOption(string $option, mixed $type = false, bool $ao = false): bool
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
     * Get meta value
     *
     * @param string   $meta      Meta option name
     * @param mixed    $default   Default value
     * @param int|null $id        Post ID
     * @return mixed              Action result
     * @since 1.3.0
     */
    public static function getMeta(string $meta = null, mixed $default = '', int $id = null): mixed
    {
        $id   = $id ?: get_the_ID();
        $data = Kernel::getGlobalCache("meta-data/{$id}");

        if ($data === false) {
            $metaContainerSlug = Kernel::getGlobal('core/module/metabox-panel/meta-container-slug');
            $data              = get_post_meta($id, "_{$metaContainerSlug}", true);

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
