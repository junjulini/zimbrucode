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

/**
 * Class : Shell kernel
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
abstract class ShellKernel
{
    private $__CM = [];

    public function __set($name, callable $method)
    {
        if ($name && is_string($name)) {
            $this->__CM[$name] = $method;
        } else {
            throw new \RuntimeException(esc_html__('Name of var is not string or is empty.', 'zc'));
        }
    }

    public function __call($method, $args)
    {
        if (isset($this->__CM[$method]) && is_callable($this->__CM[$method])) {
            return call_user_func_array($this->__CM[$method], $args);
        }
    }
}
