<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\Panel\Controls\InputRange;

use ZimbruCode\Module\Panel\Library\ControlKernel;

/**
 * Panel control : Input range
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class Control extends ControlKernel
{
    /**
     * Control setup
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function setup(): void
    {
        $this->localize([
            'title-range-error' => esc_html__('Permitted only number with next intervals : min = {MIN}, max = {MAX}', 'zc'),
        ]);

        // Custom template function
        $this->addShellFunction('gridMark',     '__callback_grid_mark');
        $this->addShellFunction('trackPercent', '__callback_track_percent');
    }

    public function __callback_grid_mark($value, $step)
    {
        if ($value && $step) {
            $nod = strlen(substr(strrchr($step, '.'), 1));
            return ($nod == 0) ? round($value, 0) : number_format($value, $nod, '.', '');
        }

        return 0;
    }

    public function __callback_track_percent($value, $min, $max)
    {
        $value = str_replace(['px', '%'], '', $value);
        return (($value - $min) * 100) / ($max - $min);
    }
}
