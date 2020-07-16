<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\MetaboxPanel\Controls\Gallery;

use ZimbruCode\Module\Panel\Library\ControlKernel;

/**
 * Panel control : Gallery
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
    public function setup()
    {
        // Set Attachment Image Src in shell
        $this->setShellFunction('getAttachmentImageSrc', '__custom_shell_function');

        // Additional vars for control.js
        $this->localize([
            'window-title-1' => esc_html__('Add images to gallery', 'zc'),
            'window-text-1'  => esc_html__('Add images', 'zc'),
            'window-title-2' => esc_html__('Change image in gallery', 'zc'),
            'window-text-2'  => esc_html__('Change image', 'zc'),
            'button-title-1' => esc_html__('Change image', 'zc'),
            'button-title-2' => esc_html__('Remove image', 'zc'),
        ]);
    }

    /**
     * Custom shell function : Attachment Image Src
     * 
     * @param  string $value   Value from BD
     * @return string          Image src
     * @since 1.0.0
     */
    public function __custom_shell_function($value = '')
    {
        $image = wp_get_attachment_image_src($value, 'thumbnail');
        return $image[0];
    }
}
