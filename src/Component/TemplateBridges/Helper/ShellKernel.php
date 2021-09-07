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

/**
 * Class : Shell kernel
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
abstract class ShellKernel
{
    private $__CM = [];

    public function __set(string $name, callable $method)
    {
        if (method_exists($this, $name) || !empty($this->customMethod[$name])) {
            throw new \RuntimeException($name . ' - this method exist in ' . static::class);
        }

        $this->__CM[$name] = $method;
    }

    public function __call(string $method, array $args)
    {
        if (isset($this->__CM[$method]) && is_callable($this->__CM[$method])) {
            return call_user_func_array($this->__CM[$method], $args);
        }
    }
}
