<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\Panel\Controls\Measurement;

use ZimbruCode\Module\Panel\Library\ControlKernel;

/**
 * Panel control : Measurement
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

        $this->addAsset('chosen');
    }
}
