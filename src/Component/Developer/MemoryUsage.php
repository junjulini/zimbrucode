<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Developer;

use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Component/Developer : Memory usage
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.3
 */
class MemoryUsage
{
    protected static $start     = 0;
    protected static $marker    = '';
    protected static $realUsage = true;

    /**
     * Start checking memory usage
     *
     * @param string  $marker      Marker value
     * @param boolean $realUsage   Set this to true to get total memory allocated from system, including unused pages. If not set or false only the used memory is reported.
     * @return void
     * @since 1.0.0
     */
    public function start(string $marker = '', bool $realUsage = true): void
    {
        self::$realUsage = $realUsage;
        self::$marker    = $marker;
        self::$start     = memory_get_usage(self::$realUsage);
    }

    /**
     * Memory usage at the end of a position
     *
     * @return int   Memory amount in bytes
     * @since 1.0.0
     */
    public function segs(): int
    {
        return memory_get_usage(self::$realUsage) - self::$start;
    }

    /**
     * Converted memory
     *
     * @return void
     * @since 1.0.3
     */
    public function display(): void
    {
        if (Kernel::dev()) {
            Kernel::dev()->addInfoMessage(self::$marker, size_format($this->segs()));
        }
    }
}
