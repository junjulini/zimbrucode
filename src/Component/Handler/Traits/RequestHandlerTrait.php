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

/**
 * Trait : Component/Handler/Traits : Request handler
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
trait RequestHandlerTrait
{
    /**
     * HTTP Request : Post
     *
     * @param string $param     Param name
     * @param string $default   Default value
     * @return mix              Request data
     * @since 1.0.0
     */
    public static function rPost(string $param, $default = '')
    {
        return !empty($_POST[$param]) ? $_POST[$param] : $default;
    }

    /**
     * HTTP Request : Get
     *
     * @param string $param     Param name
     * @param string $default   Default value
     * @return mix              Request data
     * @since 1.0.0
     */
    public static function rGet(string $param, $default = '')
    {
        return !empty($_GET[$param]) ? $_GET[$param] : $default;
    }
}
