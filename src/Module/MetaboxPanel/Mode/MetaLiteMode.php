<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\MetaboxPanel\Mode;

use ZimbruCode\Component\Handler\AjaxHandler;
use ZimbruCode\Module\Panel\Library\Mode;
use ZimbruCode\Module\Panel\Library\Traits\ControlTrait;

/**
 * Class : Meta lite mode
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class MetaLiteMode extends Mode
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
        $this->addAction('admin_menu', '__action_register_panel');
        $this->addAction('save_post', '__action_save_options');
        $this->addAction('load-' . ($GLOBALS['pagenow'] ?? ''), '__action_preparing');
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

        $this->callback()->run('panel-template--before');

        $this->render('@meta/meta-lite-mode.twig', [
            'nonce' => AjaxHandler::getNonce($this->getModuleSetting('nonce')),
            'id'    => get_the_ID(),
        ], false, function ($ttb) {
            $ttb->addLocationPath($this->getModuleSetting('meta-module-resource') . '/views', 'meta');
        });

        $this->callback()->run('panel-template--after');
    }

    /**
     * Action : Preparing controls & assets
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function __action_preparing(): void
    {
        if ($GLOBALS['pagenow'] == 'post.php' || $GLOBALS['pagenow'] == 'post-new.php') {
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
        $this->callback()->run('panel-enqueue--before');

        $handle = self::dop('jquery.panel', 'jquery.panel.min');
        $result = array_filter(wp_scripts()->queue, function ($var) use ($handle) {
            return strpos($var, $handle) !== false;
        });

        $mmr = $this->getModuleSetting('meta-module-resource');

        // Assets
        $this->asset(
            'icons',
            'zimbrucode',
            'ba-bbq',
            'tipsy',
            self::dop('jquery.panel.js', 'jquery.panel.min.js'),
            self::dop("{$mmr}/assets/js/jquery.meta-lite-mode.js", "{$mmr}/assets/js/jquery.meta-lite-mode.min.js"),
            "{$mmr}/assets/less/meta-lite-mode.less"
        );

        // Assets enroll
        if (!$result) {
            $this->asset()->enroll()->localize($handle, 'zcPanelVars', $this->mergeControlsLocalizeVars([
                'browser-error-title'   => esc_html__('MetaboxPanel error', 'zc'),
                'browser-error-subject' => esc_html__('Your browser is old. Please update your browser or download Chrome / Opera / Firefox', 'zc'),
                'prefix-slug'           => self::getGlobal('core/module/panel/prefix-slug'),
            ]));
        } else {
            $this->asset()->enroll();
        }

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
                $prefix = self::getGlobal('core/module/panel/prefix-slug');

                foreach ($options as $key => $value) {
                    if (strpos($key, $prefix) !== false) {
                        update_post_meta($postID, "_{$key}", stripslashes_deep($value));
                    }
                }
            }

            // Callback : General data preparing
            $this->callback()->run('panel-meta-save', $postID, $this);
        }
    }
}
