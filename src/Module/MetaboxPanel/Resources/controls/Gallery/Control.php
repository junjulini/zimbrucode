<?php

/*
 * This file is part of the zimbrucode package.
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
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class Control extends ControlKernel
{
    /**
     * Control setup
     *
     * @return void
     * @since 1.0.0
     */
    public function setup(): void
    {
        // Additional vars
        $this->localize([
            'window-title-1' => esc_html__('Add images to gallery', 'zc'),
            'window-text-1'  => esc_html__('Add images', 'zc'),
            'window-title-2' => esc_html__('Change image in gallery', 'zc'),
            'window-text-2'  => esc_html__('Change image', 'zc'),
            'button-title-1' => esc_html__('Change image', 'zc'),
            'button-title-2' => esc_html__('Remove image', 'zc'),
        ]);

        // Template functions
        $this->addTemplateFunction('getAttachmentImageSrc', '__callback_get_attachment_image_src');
    }

    /**
     * Callback : Get attachment image path
     *
     * @param string $value   Value from BD
     * @return string         Image path
     * @since 1.0.0
     */
    public function __callback_get_attachment_image_src(string $value = ''): string
    {
        $image = wp_get_attachment_image_src($value, 'thumbnail');

        return $image[0];
    }
}
