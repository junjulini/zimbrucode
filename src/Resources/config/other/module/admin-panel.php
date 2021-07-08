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
    'settings' => [
        'mode'               => 'page',
        'slug'               => 'admin',
        'nonce'              => 'panel_mode__admin',
        'capability'         => 'edit_themes',
        'menu-icon'          => 'dashicons-hammer',
        'position'           => 3,
        'parent-slug'        => '',

        'bar-render-title'   => esc_html__('Admin panel', 'zc'),

        'panel-title'        => esc_html__('Dashboard', 'zc'),
        'panel-title-icon'   => 'zc-icon-polymer',

        'panel-save-button'  => true,
        'panel-reset-button' => true,
        'panel-quick-links'  => false,

        'quick-links'        => [],
        'top-bar-menu'       => true,

        'footer'             => [
            'title'      => false,
            'text'       => false,
            'logo-title' => false,
            'logo'       => false,
        ],
    ],
];
