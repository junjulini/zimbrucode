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
 * Class : Page mode
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class PageMode extends Mode
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
        $action = (!$this->getModuleSetting('sub-menu')) ? '__action_register_panel' : '__action_register_submenu_panel';
        $this->addAction('admin_menu', $action);

        // Add admin bar hook function
        if ($this->getModuleSetting('top-bar-menu') && current_user_can('administrator')) {
            $this->addAction('admin_bar_menu', '__action_bar_render', 999);
        }

        // Ajax
        $this->addAjax("zc/module/panel/content_{$this->getModuleSetting('slug')}", '__ajax_load_panel_content');
        $this->addAjax("zc/module/panel/save_{$this->getModuleSetting('slug')}",    '__ajax_save_options');
        $this->addAjax("zc/module/panel/reset_{$this->getModuleSetting('slug')}",   '__ajax_reset_options');
    }

    /**
     * Callback : Creates html structure for panel
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function __callback_html_structure(): void
    {
        do_action('zc/module/panel/mode/page/template--before');
        do_action("zc/module/panel/{$this->getModuleSetting('slug')}/mode/page/template--before");

        ?>
        <section class="zc-panel-template">
            <div class="zc-panel-template__panel-loading">
                <div class="zc-panel-template__panel-loading-content">
                    <div class="zc-panel-template__panel-loading-value">0 %</div>
                    <div class="zc-panel-template__panel-loading-progress">
                        <div class="zc-panel-template__panel-loading-progress-total"></div>
                    </div>
                </div>
            </div>
        </section>
        <?php

        do_action('zc/module/panel/mode/page/template--after');
        do_action("zc/module/panel/{$this->getModuleSetting('slug')}/mode/page/template--after");
    }

    /**
     * Action : Enqueue styles and scripts for panel
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function __action_enqueue(): void
    {
        do_action('zc/module/panel/mode/page/enqueue--before');
        do_action("zc/module/panel/{$this->getModuleSetting('slug')}/mode/page/enqueue--before");

        // Assets
        $this->asset(
            'icons',
            'zimbrucode',
            'ba-bbq',
            'tipsy',
            self::dop('jquery.panel.js', 'jquery.panel.min.js'),
            self::dop('jquery.panel-page-mode.js', 'jquery.panel-page-mode.min.js'),
            'mode/page-mode.less'
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

        do_action('zc/module/panel/mode/page/enqueue--after');
        do_action("zc/module/panel/{$this->getModuleSetting('slug')}/mode/page/enqueue--after");
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

        do_action('zc/module/panel/mode/page/menu');
        do_action("zc/module/panel/{$this->getModuleSetting('slug')}/mode/page/menu");
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

        do_action('zc/module/panel/mode/page/submenu');
        do_action("zc/module/panel/{$this->getModuleSetting('slug')}/mode/page/submenu");
    }

    /**
     * Action : Set admin bar with panel items
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function __action_bar_render($wpAdminBar): void
    {
        $slug   = self::getGlobal('core/slug') . '-' . $this->getModuleSetting('slug');
        $target = (!is_admin()) ? '_blank' : '';
        $title  = "<span class=\"ab-icon {$this->getModuleSetting('menu-icon')}\"></span>";
        $title .= "<span class=\"ab-label\">{$this->getModuleSetting('menu-title')}</span>";

        $menuItems = [];

        if (!$menuItems = self::service('fast-cache')->get('module/panel/bar-render')) {
            foreach ($this->getBuildSettings() as $setting) {
                if (!isset($setting['type'])) {
                    continue;
                }

                if ($setting['type'] == 'menuTab' && !empty($setting['id'])) {
                    $menuItems[] = [
                        'parent' => $slug,
                        'id'     => "{$slug}-menu-item-{$setting['id']}",
                        'title'  => $setting['title'],
                        'href'   => admin_url("admin.php?page={$this->getModuleSetting('menu-slug')}#section_{$setting['id']}"),
                        'meta'   => [
                            'target' => $target,
                        ],
                    ];
                }

                if ($setting['type'] == 'menuParentTab' && !empty($setting['id'])) {
                    $parentTab   = $setting['id'];
                    $menuItems[] = [
                        'parent' => $slug,
                        'id'     => "{$slug}-menu-parent-item-{$parentTab}",
                        'title'  => $setting['title'],
                        'href'   => '#',
                        'meta'   => [
                            'target' => $target,
                        ],
                    ];

                    if (!empty($setting['content']) && is_array($setting['content'])) {
                        foreach ($setting['content'] as $setting) {
                            if (!isset($setting['type'])) {
                                continue;
                            }

                            if ($setting['type'] == 'menuTab' && !empty($setting['id'])) {
                                $menuItems[] = [
                                    'parent' => "{$slug}-menu-parent-item-{$parentTab}",
                                    'id'     => "{$slug}-menu-item-{$setting['id']}",
                                    'title'  => $setting['title'],
                                    'href'   => admin_url("admin.php?page={$this->getModuleSetting('menu-slug')}#section_{$setting['id']}"),
                                    'meta'   => [
                                        'target' => $target,
                                    ],
                                ];
                            }
                        }
                    }
                }
            }

            self::service('fast-cache')->add('module/panel/bar-render', $menuItems);
        }

        if ($menuItems && is_array($menuItems)) {
            $wpAdminBar->add_menu([
                'parent' => false,
                'id'     => $slug,
                'title'  => $title,
                'href'   => admin_url("admin.php?page={$this->getModuleSetting('menu-slug')}"),
                'meta'   => [
                    'target' => $target,
                ],
            ]);

            foreach ($menuItems as $item) {
                $wpAdminBar->add_menu($item);
            }
        }
    }

    /**
     * Ajax : Panel content
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function __ajax_load_panel_content(): void
    {
        $ajax = new AjaxHandler($this->getModuleSetting('nonce'));

        // Initialization of controls
        $this->initControls();

        $content = $this->render('page-mode.twig', [], true);
        if ($this->getModuleSetting('ajax-response/minify')) {
            $content = trim(preg_replace('/>\s+</', '><', $content));
        }

        $oc = null;
        if ($this->getModuleSetting('ajax-response/gzip')) {
            $oc = (ini_get('zlib.output_compression') != '1') ? 'ob_gzhandler' : $oc;
        }

        header('Accept-Ranges: bytes');
        header('Content-Type: text/html');

        ob_start($oc);

        // Render content
        echo $content;

        header('X-Content-Length: ' . ob_get_length());

        ob_end_flush();

        $ajax->off();
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

        // Filter : Options save - before
        $options = apply_filters('zc/module/panel/mode/page/options_save--before', $options, $ajax, $this);
        $options = apply_filters("zc/module/panel/{$this->getModuleSetting('slug')}/mode/page/options_save--before", $options, $ajax, $this);

        if ($options) {
            if ($this->isOptionsDifferent($options)) {
                if ($this->addOptions($options)) {

                    // Hook : Options save - success
                    do_action('zc/module/panel/mode/page/options_save--success', $options, $ajax, $this);
                    do_action("zc/module/panel/{$this->getModuleSetting('slug')}/mode/page/options_save--success", $options, $ajax, $this);

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

        // Hook : Options reset - before
        do_action('zc/module/panel/mode/page/options_reset--before', $this, $ajax);
        do_action("zc/module/panel/{$this->getModuleSetting('slug')}/mode/page/options_reset--before", $this, $ajax);

        $result = $this->remOptions();

        if ($result) {
            // Hook : Options reset - success
            do_action('zc/module/panel/mode/page/options_reset--success', $this, $ajax);
            do_action("zc/module/panel/{$this->getModuleSetting('slug')}/mode/page/options_reset--success", $this, $ajax);

            $ajax->add(self::getGlobal('core/module/panel/settings/page/events/event-3'))->send();
        } else {
            $ajax->add(self::getGlobal('core/module/panel/settings/page/events/event-4'))->send();
        }
    }
}
