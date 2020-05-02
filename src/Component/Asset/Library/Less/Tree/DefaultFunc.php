<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Asset\Library\Less\Tree;

/**
 * Class : Tree - Default function
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class DefaultFunc
{
    static $error_;
    static $value_;

    public static function compile()
    {
        if (self::$error_) {
            throw new Exception(self::$error_);
        }
        if (self::$value_ !== null) {
            return self::$value_ ? new Keyword('true') : new Keyword('false');
        }
    }

    public static function value($v)
    {
        self::$value_ = $v;
    }

    public static function error($e)
    {
        self::$error_ = $e;
    }

    public static function reset()
    {
        self::$value_ = self::$error_ = null;
    }
}
