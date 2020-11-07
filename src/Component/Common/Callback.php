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
    public function add(string $name, callable $callback, string $id = ''): void
    {
        if ($name) {
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
    public function run(string $name, ...$args)
    {
        if (!$name) {
            throw new \RuntimeException('Name of callback is not defined.');
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
    public function remove(string $name): void
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
    public function flush(): void
    {
        $this->callback = [];
    }
}
