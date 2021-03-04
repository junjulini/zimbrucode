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
    public function __call(string $name, array $args)
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
     * @param  mix     $default   Default value
     * @return mix                Return data
     * @since 1.0.0
     */
    public function get(...$args)
    {
        return Kernel::getGlobal(...$args);
    }

    /**
     * Get cache value
     *
     * @param  string  $key       Cache key
     * @param  mix     $default   Default value
     * @return mix                Return data
     * @since 1.0.0
     */
    public function cache(string $key, $default = false)
    {
        return Kernel::getGlobal("cache/$key", $default);
    }

    /**
     * Get global var slug
     *
     * @return string   Slug name
     * @since 1.0.0
     */
    public function varSlug(): string
    {
        return Kernel::getGlobalVarSlug();
    }

    public function externVar(string $key, $default = false)
    {
        return $GLOBALS[$key] ?? $default;
    }
}
