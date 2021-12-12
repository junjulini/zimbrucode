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
 * Trait : Request handler trait
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
trait RequestHandlerTrait
{
    public static function request(string $param, $default = '')
    {
        return !empty($_REQUEST[$param]) ? $_REQUEST[$param] : $default;
    }
}
