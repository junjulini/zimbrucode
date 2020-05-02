<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\MetaboxPanel;

use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\ModuleKernel;

/**
 * Module : MetaboxPanel
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Module extends ModuleKernel
{
    protected $__multiUse = true;

    /**
     * Module setup
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function setup()
    {
        $panel = $this->module()->Panel;

        $this->setModuleSetting('slug', 'metabox_panel__' . $this->getModuleSetting('slug', 'default'));

        if (is_string($this->getModuleSetting('screen'))) {
            $this->setModuleSetting('screen', [$this->getModuleSetting('screen')]);
        } elseif (!is_array($this->getModuleSetting('screen'))) {
            $this->setModuleSetting('screen', ['post']);
        }

        $panel->setModuleSettings(Tools::arrayMerge(
            self::getGlobal('core/module/metabox-panel/settings', []),
            $this->getModuleSetting(), 's'
        ));

        $panel->setModuleSetting('build-settings', $this->getModuleSetting('build-settings'))
              ->setModuleSetting('build-settings-file', $this->getModuleSetting('build-settings-file'))
              ->setModuleSetting('meta-module-resource', $this->getModuleResourcePath())
              ->setCustomMode('meta', self::getGlobal('core/module/metabox-panel/mode/meta'))
              ->setCustomMode('meta-lite', self::getGlobal('core/module/metabox-panel/mode/meta-lite'))
              ->addCustomControlsNamespace($this->getModuleResourcePath('controls'), self::getGlobal('core/module/metabox-panel/control-settings/namespace'));

        // Metabox Panel hook
        do_action('zc/module/metabox_panel/setup', $panel);
        do_action("zc/module/metabox_panel/setup--{$this->getModuleSetting('slug')}", $panel);

        // Setup module
        $panel->setup();
    }
}
