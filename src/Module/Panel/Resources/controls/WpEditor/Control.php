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

use RuntimeException;
use ZimbruCode\Module\Panel\Library\ControlKernel;
use _WP_Editors;

/**
 * Panel control : WP editor
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
class Control extends ControlKernel
{
    /**
     * Control setup
     *
     * @return void
     * @since 1.3.0
     */
    public function setup(): void
    {
        if (!class_exists('_WP_Editors', false)) {
            if (defined('ABSPATH') && defined('WPINC')) {
                require_once wp_normalize_path(ABSPATH . WPINC . '/class-wp-editor.php');
            } else {
                throw new RuntimeException('ZE0149 - ' . '"ABSPATH" constant not defined');
            }
        }

        $id  = 'zc_module_panel_control_wp_editor_init_' . sha1(time());
        $set = _WP_Editors::parse_settings($id, []);

        _WP_Editors::editor_settings($id, $set);

        $this->addAction('admin_enqueue_scripts', function (): void {
            wp_enqueue_media();
        });

        $this->addFilter('the_editor', function (string $textarea): string {
            $textarea = str_replace('<textarea', '<textarea data-option', $textarea);

            return $textarea;
        });
    }
}
