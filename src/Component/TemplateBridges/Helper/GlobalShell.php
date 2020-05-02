<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\TemplateBridges\Helper;

use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Global shell (All extern functions)
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class GlobalShell
{
    /**
     * Call function
     * 
     * @param  string $name function name
     * @param  array  $args function args
     * @return mix          function return after calling
     * @since 1.0.0
     */
    public function __call($name, $args)
    {
        if (function_exists($name)) {
            $end = end($args);

            if (!empty($end) && $end == '{R}') {
                array_pop($args);

                ob_start();
                $output = call_user_func_array($name, $args);
                ob_end_clean();

                return $output;
            } elseif (!empty($end) && $end == '{E}') {
                array_pop($args);

                call_user_func_array($name, $args);

                return '';
            } elseif (!empty($end) && $end == '{ER}') {
                array_pop($args);

                ob_start();
                call_user_func_array($name, $args);
                $output = ob_get_contents();
                ob_end_clean();

                return $output;
            } else {
                return call_user_func_array($name, $args);
            }
        }
    }

    /**
     * Get global data from global var
     * 
     * @param  string  $path      Base path
     * @param  string  $default   Default value
     * @return string             Return data
     * @since 1.0.0
     */
    public function get($path, $default = false)
    {
        return Kernel::getGlobal($path, $default);
    }

    /**
     * Get cache value
     * 
     * @param  string  $key       Cache key
     * @param  string  $default   Default value
     * @return string             Return data
     * @since 1.0.0
     */
    public function cache($key, $default = false)
    {
        return Kernel::getGlobal("cache/$key", $default);
    }

    /**
     * Get global var slug
     * 
     * @return string   Slug name
     * @since 1.0.0
     */
    public function varSlug()
    {
        return Kernel::getGlobalVarSlug();
    }

    public function extern($key, $default = false)
    {
        return (isset($GLOBALS[$key])) ? $GLOBALS[$key] : $default;
    }
}
