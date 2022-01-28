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

use ZimbruCode\Component\Common\Tools;

/**
 * Class : Component/Common : Data collector
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class DataCollector
{
    protected $data = [];

    /**
     * Add data
     *
     * @param  string $path    Array path
     * @param  mix    $value   Value
     * @return self
     * @since 1.0.0
     */
    public function add(string $path, $value = ''): self
    {
        Tools::addNode($this->data, $path, $value);
        return $this;
    }

    /**
     * Get data
     *
     * @param  string  $path      Array path
     * @param  mix     $default   Default value
     * @return mix                Item data
     * @since 1.0.0
     */
    public function get(string $path, $default = false)
    {
        return Tools::getNode($this->data, $path, $default);
    }

    /**
     * Remove item
     *
     * @param  string $path   Array path
     * @return boolean        Action result
     * @since 1.0.0
     */
    public function remove(string $path): bool
    {
        return Tools::unsetNode($this->data, $path);
    }

    /**
     * Dump data
     *
     * @return void
     * @since 1.0.0
     */
    public function dump(): void
    {
        dump($this->data);
    }
}
