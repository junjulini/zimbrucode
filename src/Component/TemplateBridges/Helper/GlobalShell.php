<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\TemplateBridges\Helper;

use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Component/TemplateBridge/Helper : Global shell (All extern functions)
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class GlobalShell
{
    /**
     * Call function
     *
     * @param  string $name   Function name
     * @param  array  $args   Function args
     * @return mix            Action result
     * @since 1.0.0
     */
    public function __call(string $name, array $args)
    {
        if (function_exists($name)) {
            $lastArg = end($args);

            if (!empty($lastArg)) {
                if ($lastArg === '{R}') {
                    array_pop($args);

                    ob_start();

                    $output = call_user_func_array($name, $args);

                    ob_end_clean();

                    return $output;
                } elseif ($lastArg === '{E}') {
                    array_pop($args);

                    call_user_func_array($name, $args);

                    return '';
                } elseif ($lastArg === '{ER}') {
                    array_pop($args);

                    ob_start();

                    call_user_func_array($name, $args);

                    return ob_get_clean();
                }
            }

            return call_user_func_array($name, $args);
        }
    }

    /**
     * Get global data
     *
     * @param  string  $path      Array path
     * @param  mix     $default   Default value
     * @return mix                Global data
     * @since 1.0.0
     */
    public function get(...$args)
    {
        return Kernel::getGlobal(...$args);
    }

    /**
     * Get cache data
     *
     * @param  string  $key       Cache key
     * @param  mix     $default   Default value
     * @return mix                Cache data
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

    /**
     * Get external global var
     *
     * @param string  $key       Global var
     * @param boolean $default   Default value
     * @return mix               Global data
     * @since 1.0.0
     */
    public function externVar(string $key, $default = false)
    {
        return $GLOBALS[$key] ?? $default;
    }
}
