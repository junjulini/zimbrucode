<?php

/*
 * This file is part of the ZimbruCode package.
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
 * Class : Lite mode
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class LiteMode extends Mode
{
    use ControlTrait;

    /**
     * Mode setup
     *
     * @return void   This function does not return a value
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

        // Add menu hook function
        $action = (!$this->getModuleSetting('parent-slug')) ? '__action_register_panel' : '__action_register_submenu_panel';
        $this->addAction('admin_menu', $action);

        // Ajax
        $this->addAjax('zc/module/panel/save_' . $this->getModuleSetting('slug'), '__ajax_save_options');
        $this->addAjax('zc/module/panel/reset_' . $this->getModuleSetting('slug'), '__ajax_reset_options');
    }

    /**
     * Callback : Creates html structure for panel
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function __callback_html_structure(): void
    {
        $this->callback()->run('panel-template--before');

        // Render content
        $this->render('page-lite-mode.twig');

        $this->callback()->run('panel-template--after');
    }

    /**
     * Action : Enqueue styles and scripts for panel
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function __action_enqueue(): void
    {
        $this->callback()->run('panel-enqueue--before');

        // Assets
        $this->asset(
            'icons',
            'zimbrucode',
            'ba-bbq',
            'tipsy',
            self::dop('jquery.panel.js', 'jquery.panel.min.js'),
            self::dop('jquery.panel-lite-mode.js', 'jquery.panel-lite-mode.min.js'),
            'mode/lite-mode.less'
        )->enroll()->localize(self::dop('jquery.panel.js', 'jquery.panel.min.js'), 'zcPanelVars', $this->mergeControlsLocalizeVars([
            'slug'                  => $this->getModuleSetting('slug'),
            'mode'                  => $this->getMode(),
            'nonce'                 => AjaxHandler::getNonce($this->getModuleSetting('nonce')),
            'browser-error-title'   => esc_html__('Panel error', 'zc'),
            'browser-error-subject' => esc_html__('Your browser is old. Please update your browser or download Chrome / Opera / Firefox', 'zc'),
            'exit'                  => esc_html__('Exit', 'zc'),
            'reset-pop-up-title'    => esc_html__('Confirm', 'zc'),
            'reset-pop-up-subject'  => esc_html__('Options will be removed, ok?', 'zc'),
            'reset-pop-up-ok'       => esc_html__('OK', 'zc'),
            'reset-pop-up-cancel'   => esc_html__('Cancel', 'zc'),
            'if-changed'            => esc_html__('Are you sure you want to leave ?', 'zc'),
            'prefix-slug'           => self::getGlobal('core/module/panel/prefix-slug'),
        ]));

        $this->callback()->run('panel-enqueue--after');
    }

    /**
     * Action : Register panel
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function __action_register_panel(): void
    {
        // Menu page
        add_menu_page(
            $this->getModuleSetting('page-title'),
            $this->getModuleSetting('menu-title'),
            $this->getModuleSetting('capability'),
            $this->getModuleSetting('menu-slug'),
            [$this, '__callback_html_structure'],
            $this->getModuleSetting('menu-icon'),
            $this->getModuleSetting('position')
        );

        $this->callback()->run('panel-menu');
    }

    /**
     * Action : Register submenu panel
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function __action_register_submenu_panel(): void
    {
        add_submenu_page(
            $this->getModuleSetting('parent-slug'),
            $this->getModuleSetting('page-title'),
            $this->getModuleSetting('menu-title'),
            $this->getModuleSetting('capability'),
            $this->getModuleSetting('menu-slug'),
            [$this, '__callback_html_structure']
        );

        $this->callback()->run('panel-submenu');
    }

    /**
     * Ajax : Panel options save
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function __ajax_save_options(): void
    {
        $ajax    = new AjaxHandler($this->getModuleSetting('nonce'));
        $options = json_decode(stripslashes($ajax->post('options')), true);

        // Callback : Options save - before
        $this->callback()->run('panel-options-save--before', $this, $ajax, $options);

        if ($options) {
            if ($this->isOptionsDifferent($options)) {
                if ($this->addOptions($options)) {

                    // Callback : Options save - success
                    $this->callback()->run('panel-options-save--success', $this, $ajax, $options);

                    $ajax->add(self::getGlobal('core/module/panel/settings/page/events/event-1'))->send();
                } else {
                    $ajax->add(self::getGlobal('core/module/panel/settings/page/events/event-5'))->send();
                }
            } else {
                $ajax->add(self::getGlobal('core/module/panel/settings/page/events/event-2'))->send();
            }
        } else {
            $ajax->add(self::getGlobal('core/module/panel/settings/page/events/event-6'))->send();
        }
    }

    /**
     * Ajax : Panel options reset
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function __ajax_reset_options(): void
    {
        $ajax = new AjaxHandler($this->getModuleSetting('nonce'));

        // Callback : Options reset - before
        $this->callback()->run('panel-options-reset--before', $this, $ajax);

        $result = $this->remOptions();

        if ($result) {
            // Callback : Options reset - success
            $this->callback()->run('panel-options-reset--success', $this, $ajax);

            $ajax->add(self::getGlobal('core/module/panel/settings/page/events/event-3'))->send();
        } else {
            $ajax->add(self::getGlobal('core/module/panel/settings/page/events/event-4'))->send();
        }
    }
}
