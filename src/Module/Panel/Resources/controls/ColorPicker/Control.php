<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\Panel\Controls\ColorPicker;

use ZimbruCode\Module\Panel\Library\ControlKernel;

/**
 * Panel control : Color Picker
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
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
        $this->addAsset('colorpicker');
        $this->addAction('admin_enqueue_scripts', function () {
            wp_enqueue_script('jquery-ui-core');
            wp_enqueue_script('jquery-ui-draggable');
        });
    }
}
