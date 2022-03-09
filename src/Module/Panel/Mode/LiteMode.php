<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\Panel\Mode;

use ZimbruCode\Component\Handler\AjaxHandler;
use ZimbruCode\Module\Panel\Library\Mode;
use ZimbruCode\Module\Panel\Library\Traits\ControlTrait;

/**
 * Class : Module/Panel/Mode : Lite mode
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class LiteMode extends Mode
{
    use ControlTrait;

    /**
     * Mode setup
     *
     * @return void
     * @since 1.0.0
     */
    public function setup(): void
    {
        // Preparing controls & assets
        if (self::rGet('page') == $this->getModuleSetting('menu-slug')) {

            // Remove screen options
            $this->addFilter('screen_options_show_screen', '__return_false');

            // Initialization of controls
            $this->initControls();

            // Enqueue styles and scripts for panel
            $this->addAction('admin_enqueue_scripts', '__action_enqueue');
        }

        // Menu hook
        $action = (!$this->getModuleSetting('parent-slug')) ? '__action_register_menu_page' : '__action_register_submenu_page';
        $this->addAction('admin_menu', $action);

        // Ajax
        $this->addAjax("zc/module/panel/save_{$this->getModuleSetting('slug')}",  '__ajax_save_options');
        $this->addAjax("zc/module/panel/reset_{$this->getModuleSetting('slug')}", '__ajax_reset_options');
    }

    /**
     * Callback : Creates html structure for panel
     *
     * @return void
     * @since 1.0.0
     */
    public function __callback_html_structure(): void
    {
        do_action('zc/module/panel/mode/lite/template--before');
        do_action("zc/module/panel/{$this->getModuleSetting('slug')}/mode/lite/template--before");

        // Render content
        $this->render('page-lite-mode.twig');

        do_action('zc/module/panel/mode/lite/template--after');
        do_action("zc/module/panel/{$this->getModuleSetting('slug')}/mode/lite/template--after");
    }

    /**
     * Action : Enqueue styles and scripts for panel
     *
     * @return void
     * @since 1.0.0
     */
    public function __action_enqueue(): void
    {
        do_action('zc/module/panel/mode/lite/enqueue--before');
        do_action("zc/module/panel/{$this->getModuleSetting('slug')}/mode/lite/enqueue--before");

        // Assets
        $this->asset(
            'icons',
            'zimbrucode',
            'ba-bbq',
            'tipsy',
            self::dop('jquery.panel.js', 'jquery.panel.min.js'),
            self::dop('jquery.panel-lite-mode.js', 'jquery.panel-lite-mode.min.js'),
            'mode/lite-mode.scss'
        )->enroll()->localize(self::dop('jquery.panel.js', 'jquery.panel.min.js'), 'zcPanelVars', $this->mergeControlsLocalizeVars([
            'slug'                  => $this->getModuleSetting('slug'),
            'mode'                  => $this->getMode(),
            'nonce'                 => AjaxHandler::getNonce($this->getModuleSetting('nonce')),
            'browser-error-title'   => esc_html__('Panel error', 'zc'),
            'browser-error-subject' => esc_html__('Your browser is out of date. Please upgrade your browser or download Chrome/Edge/Opera/Firefox', 'zc'),
            'exit'                  => esc_html__('Exit', 'zc'),
            'reset-popup-title'     => esc_html__('Confirm', 'zc'),
            'reset-popup-subject'   => esc_html__('The options will be deleted, okay ?', 'zc'),
            'reset-popup-ok'        => esc_html__('OK', 'zc'),
            'reset-popup-cancel'    => esc_html__('Cancel', 'zc'),
            'if-changed'            => esc_html__('Are you sure you want to leave ?', 'zc'),
            'prefix-slug'           => self::getGlobal('core/module/panel/prefix-slug'),
        ]));

        do_action('zc/module/panel/mode/lite/enqueue--after');
        do_action("zc/module/panel/{$this->getModuleSetting('slug')}/mode/lite/enqueue--after");
    }

    /**
     * Action : Register menu page
     *
     * @return void
     * @since 1.0.0
     */
    public function __action_register_menu_page(): void
    {
        add_menu_page(
            $this->getModuleSetting('page-title'),
            $this->getModuleSetting('menu-title'),
            $this->getModuleSetting('capability'),
            $this->getModuleSetting('menu-slug'),
            [$this, '__callback_html_structure'],
            $this->getModuleSetting('menu-icon'),
            $this->getModuleSetting('position')
        );

        do_action('zc/module/panel/mode/lite/menu');
        do_action("zc/module/panel/{$this->getModuleSetting('slug')}/mode/lite/menu");
    }

    /**
     * Action : Register submenu page
     *
     * @return void
     * @since 1.0.0
     */
    public function __action_register_submenu_page(): void
    {
        add_submenu_page(
            $this->getModuleSetting('parent-slug'),
            $this->getModuleSetting('page-title'),
            $this->getModuleSetting('menu-title'),
            $this->getModuleSetting('capability'),
            $this->getModuleSetting('menu-slug'),
            [$this, '__callback_html_structure'],
            $this->getModuleSetting('position')
        );

        do_action('zc/module/panel/mode/lite/submenu');
        do_action("zc/module/panel/{$this->getModuleSetting('slug')}/mode/lite/submenu");
    }

    /**
     * Ajax : Save options
     *
     * @return void
     * @since 1.0.0
     */
    public function __ajax_save_options(): void
    {
        $ajax    = new AjaxHandler($this->getModuleSetting('nonce'), 'edit_theme_options');
        $options = $ajax->get('options');

        // Filter : Options save - Before
        $options = apply_filters('zc/module/panel/mode/lite/options_save--before', $options, $ajax, $this);
        $options = apply_filters("zc/module/panel/{$this->getModuleSetting('slug')}/mode/lite/options_save--before", $options, $ajax, $this);

        if ($options) {
            if ($this->isOptionsDifferent($options)) {
                if ($this->addOptions($options)) {

                    // Hook : Options save - Success
                    do_action('zc/module/panel/mode/lite/options_save--success', $options, $ajax, $this);
                    do_action("zc/module/panel/{$this->getModuleSetting('slug')}/mode/lite/options_save--success", $options, $ajax, $this);

                    $ajax->send(self::getGlobal('core/module/panel/settings/page/events/event-1'));
                } else {
                    $ajax->send(self::getGlobal('core/module/panel/settings/page/events/event-5'));
                }
            } else {
                $ajax->send(self::getGlobal('core/module/panel/settings/page/events/event-2'));
            }
        } else {
            $ajax->send(self::getGlobal('core/module/panel/settings/page/events/event-6'));
        }
    }

    /**
     * Ajax : Reset options
     *
     * @return void
     * @since 1.0.0
     */
    public function __ajax_reset_options(): void
    {
        $ajax = new AjaxHandler($this->getModuleSetting('nonce'), 'edit_theme_options');

        // Hook : Options reset - Before
        do_action('zc/module/panel/mode/lite/options_reset--before', $this, $ajax);
        do_action("zc/module/panel/{$this->getModuleSetting('slug')}/mode/lite/options_reset--before", $this, $ajax);

        if ($this->remOptions()) {

            // Hook : Options reset - Success
            do_action('zc/module/panel/mode/lite/options_reset--success', $this, $ajax);
            do_action("zc/module/panel/{$this->getModuleSetting('slug')}/mode/lite/options_reset--success", $this, $ajax);

            $ajax->send(self::getGlobal('core/module/panel/settings/page/events/event-3'));
        } else {
            $ajax->send(self::getGlobal('core/module/panel/settings/page/events/event-4'));
        }
    }
}
