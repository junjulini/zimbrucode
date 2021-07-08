<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

return [
    'mode'             => [
        'page'      => 'ZimbruCode\\Module\\Panel\\Mode\\PageMode',
        'page-lite' => 'ZimbruCode\\Module\\Panel\\Mode\\LiteMode',
    ],

    'control-settings' => [
        'namespace'     => 'ZimbruCode\\Module\\Panel\\Controls\\',
        'class'         => 'Control',
        'template-dir'  => '/Resources/views',
        'template-file' => 'control.twig',
        'assets'        => [
            'scss-file'   => '/Resources/assets/scss/control.scss',
            'js-file'     => '/Resources/assets/js/control.js',
            'min-js-file' => '/Resources/assets/js/control.min.js',
        ],
        'debug-mode'    => false,
        'exclude'       => [
            'menuTab',
            'menuParentTab',
            'menuTitleTab',
            'menuDelimiterTab',
            'menuTextTab',
        ],
    ],

    # Prefix slug for options
    'prefix-slug'      => "{$slug}_panel_option_",

    'settings'         => [
        'page'      => [
            'slug'                 => 'test',
            'nonce'                => 'panel_mode__page',
            'capability'           => 'edit_themes',
            'page-title'           => 'Test panel',
            'menu-title'           => 'Test panel',
            'menu-slug'            => 'test_panel',
            'menu-icon'            => '',
            'position'             => 3,
            'sub-menu'             => false,
            'parent-slug'          => false,

            'bar-render-title'     => esc_html__('Test panel', 'zc'),

            'panel-title'          => esc_html__('Dashboard', 'zc'),
            'panel-title-icon'     => 'zc-icon-polymer',

            'panel-save-button'    => true,
            'panel-reset-button'   => true,
            'panel-quick-links'    => false,

            'quick-links'          => [],
            'top-bar-menu'         => true,
            'custom-base-shell'    => false,
            'custom-control-shell' => false,

            'ajax-response'        => [
                'minify' => true,
                'gzip'   => true,
            ],

            'footer'               => [
                'title'      => false,
                'text'       => false,
                'logo-title' => false,
                'logo'       => false,
            ],

            'events'               => [
                'event-1' => [
                    'type'    => 'success',
                    'title'   => esc_html__('Success', 'zc'),
                    'content' => esc_html__('Options saved.', 'zc'),
                ],
                'event-2' => [
                    'type'    => 'warning',
                    'title'   => esc_html__('Warning', 'zc'),
                    'content' => esc_html__('For first you must change something.', 'zc'),
                ],
                'event-3' => [
                    'type'    => 'success',
                    'title'   => esc_html__('Success', 'zc'),
                    'content' => esc_html__('Options deleted. Page will be reloaded ...', 'zc'),
                ],
                'event-4' => [
                    'type'    => 'info',
                    'title'   => esc_html__('Info', 'zc'),
                    'content' => esc_html__('No options for deleting.', 'zc'),
                ],
                'event-5' => [
                    'type'    => 'error',
                    'title'   => esc_html__('Error', 'zc'),
                    'content' => esc_html__('Cannot update options.', 'zc'),
                ],
                'event-6' => [
                    'type'    => 'info',
                    'title'   => esc_html__('Info', 'zc'),
                    'content' => esc_html__('No options for saving.', 'zc'),
                ],
                'event-7' => [
                    'type'    => 'warning',
                    'title'   => esc_html__('Warning', 'zc'),
                    'content' => esc_html__('Cannot connect to AJAX Module. Page will be reloaded ...', 'zc'),
                    'reload'  => true,
                ],
                'event-8' => [
                    'type'    => 'warning',
                    'title'   => esc_html__('Warning', 'zc'),
                    'content' => esc_html__('You are not logged. Page will be reloaded ...', 'zc'),
                    'reload'  => true,
                ],
            ],
        ],

        'page-lite' => [
            'slug'                 => 'test_panel',
            'nonce'                => 'panel_mode__page_lite',
            'capability'           => 'edit_themes',
            'page-title'           => 'Test panel',
            'menu-title'           => 'Test panel',
            'menu-slug'            => 'test_panel',
            'menu-icon'            => '',
            'position'             => 3,
            'sub-menu'             => false,
            'parent-slug'          => false,

            'panel-title'          => esc_html__('Dashboard', 'zc'),
            'panel-title-icon'     => 'zc-icon-polymer',

            'panel-save-button'    => true,
            'panel-reset-button'   => true,
            'panel-quick-links'    => false,

            'quick-links'          => [],
            'top-bar-menu'         => true,
            'custom-base-shell'    => false,
            'custom-control-shell' => false,

            'events'               => [
                'event-1' => [
                    'type'    => 'success',
                    'title'   => esc_html__('Success', 'zc'),
                    'content' => esc_html__('Options saved.', 'zc'),
                ],
                'event-2' => [
                    'type'    => 'warning',
                    'title'   => esc_html__('Warning', 'zc'),
                    'content' => esc_html__('For first you must change something.', 'zc'),
                ],
                'event-3' => [
                    'type'    => 'success',
                    'title'   => esc_html__('Success', 'zc'),
                    'content' => esc_html__('Options deleted. Page will be reloaded ...', 'zc'),
                ],
                'event-4' => [
                    'type'    => 'info',
                    'title'   => esc_html__('Info', 'zc'),
                    'content' => esc_html__('No options for deleting.', 'zc'),
                ],
                'event-5' => [
                    'type'    => 'error',
                    'title'   => esc_html__('Error', 'zc'),
                    'content' => esc_html__('Cannot update options.', 'zc'),
                ],
                'event-6' => [
                    'type'    => 'info',
                    'title'   => esc_html__('Info', 'zc'),
                    'content' => esc_html__('No options for saving.', 'zc'),
                ],
                'event-7' => [
                    'type'    => 'warning',
                    'title'   => esc_html__('Warning', 'zc'),
                    'content' => esc_html__('Cannot connect to AJAX Module. Page will be reloaded ...', 'zc'),
                    'reload'  => true,
                ],
                'event-8' => [
                    'type'    => 'warning',
                    'title'   => esc_html__('Warning', 'zc'),
                    'content' => esc_html__('You are not logged. Page will be reloaded ...', 'zc'),
                    'reload'  => true,
                ],
            ],
        ],
    ],
];
