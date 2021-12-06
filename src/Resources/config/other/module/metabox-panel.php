<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

return [
    'mode'                => [
        'meta'      => 'ZimbruCode\Module\MetaboxPanel\Mode\MetaMode',
        'meta-lite' => 'ZimbruCode\Module\MetaboxPanel\Mode\MetaLiteMode',
    ],

    'control-settings'    => [
        'namespace' => 'ZimbruCode\Module\MetaboxPanel\Controls\\',
    ],

    'meta-container-slug' => "{$slug}_meta_panel_container",

    'settings'            => [
        'slug'                 => 'default',
        'nonce'                => 'panel_mode__metabox',
        'screen'               => 'post',
        'mode'                 => 'meta',
        'title'                => esc_html__('Page Options', 'zc'),
        'context'              => 'normal',
        'priority'             => 'high',

        'panel-title'          => esc_html__('Dashboard', 'zc'),
        'panel-title-icon'     => 'zc-icon-polymer',
        'panel-reset-button'   => true,
        'panel-backup-button'  => true,

        'backup'               => [
            'db-name' => 'module.metabox_panel.backup',
        ],

        'custom-control-shell' => 'ZimbruCode\Module\MetaboxPanel\Helper\ControlShell',
        'hide-header'          => false,

        'events'               => [
            'reset'  => [
                'success' => [
                    'type'    => 'success',
                    'title'   => esc_html__('Success', 'zc'),
                    'content' => esc_html__('Options deleted. Page will be reloaded ...', 'zc'),
                ],
                'failure' => [
                    'type'    => 'info',
                    'title'   => esc_html__('Info', 'zc'),
                    'content' => esc_html__('No options for deleting.', 'zc'),
                ],
            ],

            'backup' => [
                'success' => [
                    'type'    => 'success',
                    'title'   => esc_html__('Success', 'zc'),
                    'content' => esc_html__('Options restored. Page will be reloaded ...', 'zc'),
                ],
            ],
        ],
    ],
];
