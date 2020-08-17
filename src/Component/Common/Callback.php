<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Common;

use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Callback
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Callback
{
    protected $callback = [];

    /**
     * Add callback
     *
     * @param string   $name       Name of callback
     * @param callable $callback   Function ( object )
     * @param string   $id         Return identifier
     * @return void                This function does not return a value
     * @since 1.0.0
     */
    public function add($name, callable $callback, $id = '')
    {
        if ($name && is_string($name)) {
            if ($id) {
                $this->callback[$name][$id] = $callback;
            } else {
                $this->callback[$name][] = $callback;
            }
        }
    }

    /**
     * Run callback
     * 
     * @return array   Functions results
     * @since 1.0.0
     */
    public function run($name, ...$args)
    {
        if (!$name || !is_string($name)) {
            throw new \RuntimeException(esc_html__('Name of callback is not defined.', 'zc'));
        }

        $output = [];
        if (!empty($this->callback[$name])) {
            foreach ($this->callback[$name] as $key => $function) {
                if (is_callable($function)) {
                    $output[$key] = call_user_func_array($function, $args);
                }
            }
        }

        return (!empty($output)) ? $output : false;
    }

    /**
     * Remove callback
     * 
     * @param  string $name   Name of callback
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    public function remove($name)
    {
        if (!empty($this->callback[$name])) {
            unset($this->callback[$name]);
        }
    }

    /**
     * Remove all callback's
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function flush()
    {
        $this->callback = [];
    }
}
