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
use ZimbruCode\Module\MetaboxPanel\Helper\Backup;

/**
 * Class : Meta mode
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
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
    public function setup()
    {
        // Hooks
        $this->addAction('admin_menu', '__action_register_panel');
        $this->addAction('save_post',  '__action_save_options');
        $this->addAction('load-' . (isset($GLOBALS['pagenow']) ? $GLOBALS['pagenow'] : ''), '__action_preparing');

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
    public function altRender($path, array $data = [])
    {
        return $this->render("@meta/${path}", $data, true, function ($ttb) {
            $ttb->addLocationPath($this->getModuleSetting('meta-module-resource') . '/views', 'meta');
        });
    }

    /**
     * Callback : Creates html structure for panel
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function __callback_html_structure()
    {
        if ($this->getModuleData('control') === false) {
            $this->initControls();
        }

        $this->callback()->run('panel-template--before');

        $this->render('@meta/meta-mode.twig', [
            'nonce' => AjaxHandler::getNonce($this->getModuleSetting('nonce')),
            'id'    => get_the_ID(),
        ], false, function($ttb) {
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
    public function __action_preparing()
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
    public function __action_enqueue($hook)
    {
        $this->callback()->run('panel-enqueue--before');

        $this->asset()->addLessVar('hide_header', $this->getModuleSetting('hide-header'));
        $mmr = $this->getModuleSetting('meta-module-resource');

        // Assets
        $this->asset(
            'icons',
            'zimbrucode',
            'ba-bbq',
            'tipsy',
            self::dop('jquery.panel.js', 'jquery.panel.min.js'),
            self::dop("{$mmr}/assets/js/jquery.meta-mode.js", "{$mmr}/assets/js/jquery.meta-mode.min.js"),
            "{$mmr}/assets/less/meta-mode.less"
        )->enroll()->localize(self::dop('jquery.panel.js', 'jquery.panel.min.js'), 'zcPanelVars', $this->mergeControlsLocalizeVars([
            'slug'                  => $this->getModuleSetting('slug'),
            'mode'                  => $this->getMode(),
            'nonce'                 => AjaxHandler::getNonce($this->getModuleSetting('nonce')),
            'browser-error-title'   => esc_html__('MetaboxPanel error', 'zc'),
            'browser-error-subject' => esc_html__('Your browser is old. Please update your browser or download Chrome / Opera / Firefox', 'zc'),
            'prefix-slug'           => self::getGlobal('core/module/panel/prefix-slug'),
            'exit'                  => esc_html__('Exit', 'zc'),
            'reset-pop-up-title'    => esc_html__('Confirm', 'zc'),
            'reset-pop-up-subject'  => esc_html__('Options will be removed, ok?', 'zc'),
            'reset-pop-up-ok'       => esc_html__('OK', 'zc'),
            'reset-pop-up-cancel'   => esc_html__('Cancel', 'zc'),
            'backup-pop-up-title'   => esc_html__('Backup', 'zc'),
        ]));

        $this->callback()->run('panel-enqueue--after');
    }

    /**
     * Action : Register panel
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function __action_register_panel()
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
    public function __action_save_options($postID)
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
                $prefix     = self::getGlobal('core/module/panel/prefix-slug');
                $defOptions = apply_filters('zc/module/metabox_panel/default_options', [], $this->getBuildSettings());

                foreach ($options as $key => $value) {
                    if (strpos($key, $prefix) !== false) {
                        $cleanKey = str_replace($prefix, '', $key);

                        if (isset($defOptions[$cleanKey])) {
                            update_post_meta($postID, "_{$key}", stripslashes_deep($value));
                        }
                    }
                }
            }

            // Callback : General data preparing
            $this->callback()->run('pane-meta-save', $postID, $this);
        }
    }

    /**
     * Ajax : Panel options reset
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function __ajax_options_reset()
    {
        $ajax    = new AjaxHandler($this->getModuleSetting('nonce'));
        $events  = $this->getModuleSetting('events/reset');
        $options = get_post_meta($ajax->post('id'));

        if ($options && is_array($options)) {
            $result = false;

            $prefix     = self::getGlobal('core/module/panel/prefix-slug');
            $defOptions = apply_filters('zc/module/metabox_panel/default_options', [], $this->getBuildSettings());

            foreach ($options as $key => $value) {
                if (strpos($key, $prefix) !== false) {
                    $cleanKey = str_replace("_{$prefix}", '', $key);

                    if (isset($defOptions[$cleanKey])) {
                        update_post_meta($ajax->post('id'), $key, stripslashes_deep($defOptions[$cleanKey]));
                    } else {
                        delete_post_meta($ajax->post('id'), $key);
                    }

                    if (!$result) {
                        $result = true;
                    }
                }
            }

            if ($result) {
                $ajax->add($events['success'])->send();
            } else {
                $ajax->add($events['failure'])->send();
            }
        } else {
            $ajax->add($events['failure'])->send();
        }
    }
}
