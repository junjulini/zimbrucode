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
 * @since   1.1.0
 */
class DataCollector
{
    protected $data = [];

    /**
     * Get data
     *
     * @param string  $path      Array path
     * @param mixed   $default   Default value
     * @return mixed             Item data
     * @since 1.0.0
     */
    public function get(string $path, $default = false)
    {
        return Tools::getNode($this->data, $path, $default);
    }

    /**
     * Add data
     *
     * @param string $path    Array path
     * @param mixed  $value   Value
     * @return DataCollector
     * @since 1.0.0
     */
    public function add(string $path, $value = ''): self
    {
        Tools::addNode($this->data, $path, $value);
        return $this;
    }

    /**
     * Check if element exists
     *
     * @param string $path   Array path
     * @return bool          Action result
     * @since 1.1.0
     */
    public function has(string $path): bool
    {
        return (!empty($this->get($path)));
    }

    /**
     * Remove item
     *
     * @param  string $path   Array path
     * @return bool           Action result
     * @since 1.0.0
     */
    public function remove(string $path): bool
    {
        return Tools::unsetNode($this->data, $path);
    }

    /**
     * Remove all items
     *
     * @return DataCollector
     * @since 1.1.0
     */
    public function flush(): self
    {
        $this->data = [];
        return $this;
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
