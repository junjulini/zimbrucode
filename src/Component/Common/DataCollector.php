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

use ZimbruCode\Component\Common\Tools;

/**
 * Class : Data collector
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class DataCollector
{
    protected $data = [];

    /**
     * Add value
     *
     * @param string $path
     * @param mix $value
     * @since 1.0.0
     */
    public function add(string $path, $value = ''): DataCollector
    {
        Tools::addNode($this->data, $path, $value);
        return $this;
    }

    /**
     * Get value
     *
     * @param  string  $path
     * @param  mix $default
     * @return mix
     * @since 1.0.0
     */
    public function get(string $path, $default = false)
    {
        return Tools::getNode($this->data, $path, $default);
    }

    /**
     * Remove
     *
     * @param  string $path
     * @return bool
     * @since 1.0.0
     */
    public function remove(string $path): bool
    {
        return Tools::unsetNode($this->data, $path);
    }

    /**
     * Dump data
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function dump(): void
    {
        dump($this->data);
    }
}
