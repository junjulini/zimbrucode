<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\AdminPanel;

use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\ModuleKernel;

/**
 * Module : Admin Panel
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Module extends ModuleKernel
{
    /**
     * Module setup
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function setup()
    {
        self::setGlobal('core/module/admin-panel/settings/page-title', self::getGlobal('app/name') . esc_html__(' Options', 'zc'));
        self::setGlobal('core/module/admin-panel/settings/menu-title', self::getGlobal('app/name'));
        self::setGlobal('core/module/admin-panel/settings/menu-slug', self::getGlobal('app/slug') . '_panel');

        $panel = $this->module()->Panel;

        $panel->setModuleSettings(Tools::arrayMerge(
            self::getGlobal('core/module/admin-panel/settings', []),
            $this->getModuleSetting(), 's'
        ));

        $panel->setModuleSetting('build-settings', $this->getModuleSetting('build-settings'));
        $panel->setModuleSetting('build-settings-file', $this->getModuleSetting('build-settings-file'));

        // Admin Panel hook
        do_action('zc/module/admin_panel/setup', $panel);

        // Setup module
        $panel->setup();
    }
}
