<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\MetaboxPanel\Mode;

use ZimbruCode\Component\Handler\AjaxHandler;
use ZimbruCode\Module\MetaboxPanel\Helper\Backup;
use ZimbruCode\Module\Panel\Library\Mode;
use ZimbruCode\Module\Panel\Library\Traits\ControlTrait;

/**
 * Class : Meta mode
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class MetaMode extends Mode
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
        // Hooks
        $this->addAction('admin_menu',                          '__action_register_panel');
        $this->addAction('save_post',                           '__action_save_options');
        $this->addAction('load-' . ($GLOBALS['pagenow'] ?? ''), '__action_preparing');

        // Ajax
        $this->addAjax("zc/module/metabox_panel/reset_{$this->getModuleSetting('slug')}", '__ajax_options_reset');

        // Metabox panel backup init
        new Backup($this);
    }

    /**
     * Alternative render
     *
     * @param string $path   Path of template
     * @param array  $data   Additional data for rendering
     * @return void          Result of render
     * @since 1.0.0
     */
    public function altRender(string $path, array $data = []): string
    {
        return $this->render("@meta/${path}", $data, true, function (object $ttb): void {
            $ttb->addLocationPath("{$this->getModuleSetting('meta-module-resource')}/views", 'meta');
        });
    }

    /**
     * Callback : Creates html structure for panel
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function __callback_html_structure(): void
    {
        if ($this->getModuleData('control') === false) {
            $this->initControls();
        }

        do_action('zc/module/metabox_panel/mode/meta/template--before');
        do_action("zc/module/metabox_panel/{$this->getModuleSetting('slug')}/mode/meta/template--before");

        $this->render('@meta/meta-mode.twig', [
            'nonce' => AjaxHandler::getNonce($this->getModuleSetting('nonce')),
            'id'    => get_the_ID(),
        ], false, function ($ttb) {
            $ttb->addLocationPath($this->getModuleSetting('meta-module-resource') . '/views', 'meta');
        });

        do_action('zc/module/metabox_panel/mode/meta/template--after');
        do_action("zc/module/metabox_panel/{$this->getModuleSetting('slug')}/mode/meta/template--after");
    }

    /**
     * Action : Preparing controls & assets
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function __action_preparing(): void
    {
        if (isset($GLOBALS['pagenow']) && ($GLOBALS['pagenow'] == 'post.php' || $GLOBALS['pagenow'] == 'post-new.php')) {
            if (isset($GLOBALS['typenow']) && in_array($GLOBALS['typenow'], $this->getModuleSetting('screen'))) {

                // Initialization of controls
                $this->initControls();

                // Enqueue styles and scripts for panel
                $this->addAction('admin_enqueue_scripts', '__action_enqueue');
            }
        }
    }

    /**
     * Action : Enqueue styles and scripts for panel
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function __action_enqueue($hook): void
    {
        do_action('zc/module/metabox_panel/mode/meta/enqueue--before');
        do_action("zc/module/metabox_panel/{$this->getModuleSetting('slug')}/mode/meta/enqueue--before");

        $this->asset()->addScssVar('hide_header', $this->getModuleSetting('hide-header'));
        $mmr = $this->getModuleSetting('meta-module-resource');

        // Assets
        $this->asset(
            'icons',
            'zimbrucode',
            'ba-bbq',
            'tipsy',
            self::dop('jquery.panel.js', 'jquery.panel.min.js'),
            self::dop("{$mmr}/assets/js/jquery.meta-mode.js", "{$mmr}/assets/js/jquery.meta-mode.min.js"),
            "{$mmr}/assets/scss/meta-mode.scss"
        )->enroll()->localize(self::dop('jquery.panel.js', 'jquery.panel.min.js'), 'zcPanelVars', $this->mergeControlsLocalizeVars([
            'slug'                  => $this->getModuleSetting('slug'),
            'mode'                  => $this->getMode(),
            'nonce'                 => AjaxHandler::getNonce($this->getModuleSetting('nonce')),
            'browser-error-title'   => esc_html__('MetaboxPanel error', 'zc'),
            'browser-error-subject' => esc_html__('Your browser is old. Please update your browser or download Chrome / Opera / Firefox', 'zc'),
            'prefix-slug'           => self::getGlobal('core/module/panel/prefix-slug'),
            'exit'                  => esc_html__('Exit', 'zc'),
            'reset-popup-title'    => esc_html__('Confirm', 'zc'),
            'reset-popup-subject'  => esc_html__('Options will be removed, ok?', 'zc'),
            'reset-popup-ok'       => esc_html__('OK', 'zc'),
            'reset-popup-cancel'   => esc_html__('Cancel', 'zc'),
            'backup-popup-title'   => esc_html__('Backup', 'zc'),
        ]));

        do_action('zc/module/metabox_panel/mode/meta/enqueue--after');
        do_action("zc/module/metabox_panel/{$this->getModuleSetting('slug')}/mode/meta/enqueue--after");
    }

    /**
     * Action : Register panel
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function __action_register_panel(): void
    {
        add_meta_box(
            "{$this->getGlobal('core/slug')}_{$this->getModuleSetting('slug')}",
            $this->getModuleSetting('title'),
            [$this, '__callback_html_structure'],
            $this->getModuleSetting('screen'),
            $this->getModuleSetting('context'),
            $this->getModuleSetting('priority')
        );
    }

    /**
     * Action : Panel options save
     *
     * @param  int $postID
     * @return mix   Post id or null
     * @since 1.0.0
     */
    public function __action_save_options(int $postID)
    {
        // Verify nonce
        if (!AjaxHandler::checkNonce(self::rPost('zc-panel-meta-mode-nonce'), $this->getModuleSetting('nonce'))) {
            return $postID;
        }

        // Check auto save
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return $postID;
        }

        // Check permissions
        if (in_array(self::rPost('post_type'), $this->getModuleSetting('screen'))) {
            if (!current_user_can('edit_page', $postID)) {
                return $postID;
            }

            $options = $_POST;

            if ($options && is_array($options)) {

                // Filter : Options save - before
                $options = apply_filters('zc/module/metabox_panel/mode/meta/options_save--before', $options, $postID, $this);
                $options = apply_filters("zc/module/metabox_panel/{$this->getModuleSetting('slug')}/mode/meta/options_save--before", $options, $postID, $this);

                $output = [];
                $prefix = self::getGlobal('core/module/panel/prefix-slug');

                foreach ($options as $key => $value) {
                    if (strpos($key, $prefix) !== false) {
                        $key = str_replace($prefix, '', $key);
                        $output[$key] = stripslashes_deep($value);
                    }
                }

                if (!empty($output)) {
                    update_post_meta($postID, "_{$this->getGlobal('core/module/metabox-panel/meta-container-slug')}", $output);
                }
            }
        }
    }

    /**
     * Ajax : Panel options reset
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function __ajax_options_reset(): void
    {
        $ajax = new AjaxHandler($this->getModuleSetting('nonce'));

        if (delete_post_meta($ajax->post('id'), "_{$this->getGlobal('core/module/metabox-panel/meta-container-slug')}")) {

            // Hook : Options reset - success
            do_action('zc/module/metabox_panel/mode/meta/options_reset--success', $this, $ajax);
            do_action("zc/module/metabox_panel/{$this->getModuleSetting('slug')}/mode/meta/options_reset--success", $this, $ajax);

            $ajax->add($this->getModuleSetting('events/reset/success'))->send();
        } else {
            $ajax->add($this->getModuleSetting('events/reset/failure'))->send();
        }
    }
}
