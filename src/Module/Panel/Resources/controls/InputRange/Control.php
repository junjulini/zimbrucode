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
 * @since   1.1.0
 */
class Control extends ControlKernel
{
    /**
     * Control setup
     *
     * @return void
     * @since 1.1.0
     */
    public function setup(): void
    {
        $this->localize([
            'title-range-error' => esc_html__('Only number is allowed with the following intervals : min = {MIN}, max = {MAX}', 'zc'),
        ]);

        // Template functions
        $this->addTemplateFunction('gridMark',     '__callback_grid_mark');
        $this->addTemplateFunction('trackPercent', '__callback_track_percent');
    }

    /**
     * Callback : Grid mark
     *
     * @param float  $value       Position
     * @param string $step        Current step
     * @return float|int|string   Grid mark
     * @since 1.0.0
     */
    public function __callback_grid_mark(float $value, string $step)
    {
        if ($value && $step) {
            $nod = strlen(substr(strrchr($step, '.'), 1));
            return ($nod == 0) ? round($value, 0) : number_format($value, $nod, '.', '');
        }

        return 0;
    }

    /**
     * Callback : Track percent
     *
     * @param string $value   Position
     * @param mixed  $min     Minimum range
     * @param mixed  $max     Maximum range
     * @return int            Track percent
     * @since 1.0.0
     */
    public function __callback_track_percent(string $value, $min, $max)
    {
        $value = str_replace(['px', '%'], '', $value);
        return (($value - $min) * 100) / ($max - $min);
    }
}
