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

use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Timing
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Timing
{
    protected static $start  = 0;
    protected static $marker = '';

    /**
     * Start time
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function start(string $marker = ''): void
    {
        self::$marker = $marker;
        self::$start  = microtime(true);
    }

    /**
     * End time
     *
     * @return int   Time
     * @since 1.0.0
     */
    public function segs()
    {
        return microtime(true) - self::$start;
    }

    /**
     * Converted time
     *
     * @since 1.0.0
     */
    public function display()
    {
        $segs = $this->segs();
        $days = floor($segs / 86400);
        $segs -= $days * 86400;
        $hours = floor($segs / 3600);
        $segs -= $hours * 3600;
        $mins = floor($segs / 60);
        $segs -= $mins * 60;
        $microsegs = ($segs - floor($segs)) * 1000;
        $segs      = floor($segs);

        $output = (!$days ? '' : $days . 'd ') .
            (!$hours ? '' : $hours . 'h ') .
            (!$mins ? '' : $mins . 'm ') .
            $segs . 's ' .
            $microsegs . 'ms';

        if (Kernel::dev()) {
            Kernel::dev()->addInfoMessage(self::$marker, $output);
        }

        return $output;
    }
}
