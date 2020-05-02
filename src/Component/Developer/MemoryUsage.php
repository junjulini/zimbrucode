<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Developer;

use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : MemoryUsage
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class MemoryUsage
{
    protected static $start     = 0;
    protected static $marker    = '';
    protected static $realUsage = true;

    /**
     * Start check memory usage
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function start($marker = '', $realUsage = true)
    {
        self::$realUsage = $realUsage;
        self::$marker    = $marker;
        self::$start     = memory_get_usage(self::$realUsage);
    }

    /**
     * Memory usage in end position
     * 
     * @return int   Memory
     * @since 1.0.0
     */
    public function segs()
    {
        return memory_get_usage(self::$realUsage) - self::$start;
    }

    /**
     * Converted memory
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function display()
    {
        if (Kernel::dev()) {
            Kernel::dev()->addInfoMessage(self::$marker, Tools::convertSize($this->segs()));
        }
    }
}
