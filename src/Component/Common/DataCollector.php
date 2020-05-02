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
     * Set value
     * 
     * @param string $path
     * @param string $value
     * @since 1.0.0
     */
    public function set($path, $value = '')
    {
        Tools::setNode($this->data, $path, $value);
        return $this;
    }

    /**
     * Get value
     * 
     * @param  string  $path
     * @param  boolean $default
     * @return mix
     * @since 1.0.0
     */
    public function get($path, $default = false)
    {
        return Tools::getNode($this->data, $path, $default);
    }

    /**
     * Remove
     * 
     * @param  string $path
     * @return boolean
     * @since 1.0.0
     */
    public function remove($path)
    {
        return Tools::unsetNode($this->data, $path);
    }

    /**
     * Dump data
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function dump()
    {
        dump($this->data);
    }
}
