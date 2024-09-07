<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Common;

use RuntimeException;

/**
 * Class : Component/Common : Callback
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
class Callback
{
    protected array $callback = [];

    /**
     * Add callback
     *
     * @param string   $name       Callback name
     * @param callable $callback   Function
     * @param string   $id         Identifier
     * @return void
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
     * @param  string $name   Callback name
     * @param  mixed  ...$args
     * @throws RuntimeException
     * @return array|bool     Callbacks results
     * @since 1.3.0
     */
    public function run(string $name, ...$args): array|bool
    {
        if (!$name) {
            throw new RuntimeException('ZE0037');
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
     * @param string $name   Callback name
     * @return void
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
     * @return void
     * @since 1.0.0
     */
    public function flush(): void
    {
        $this->callback = [];
    }
}
