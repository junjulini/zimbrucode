<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\Panel\Controls\WpEditor;

use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Module\Panel\Library\ControlKernel;

/**
 * Panel control : WP editor
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
        if (!class_exists('_WP_Editors', false)) {
            require ABSPATH . WPINC . '/class-wp-editor.php';
        }

        $id  = 'zc_module_panel_control_wp_editor_init_' . Tools::getRandomString();
        $set = \_WP_Editors::parse_settings($id, []);
        \_WP_Editors::editor_settings($id, $set);

        $this->addAction('admin_enqueue_scripts', function (): void {
            wp_enqueue_media();
        });
    }
}
