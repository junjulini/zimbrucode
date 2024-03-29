<?php

/*
 * This file is part of the zimbrucode package.
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
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.2.0
 */
class Module extends ModuleKernel
{
    protected bool $__multiUse = true;

    /**
     * Module setup
     *
     * @return void
     * @since 1.1.0
     */
    public function setup(): void
    {
        $panel = $this->module()->Panel;

        $this->addModuleSetting('slug', "metabox_panel__{$this->getModuleSetting('slug', 'default')}");

        if (is_string($this->getModuleSetting('screen'))) {
            $this->addModuleSetting('screen', [$this->getModuleSetting('screen')]);
        } elseif (!is_array($this->getModuleSetting('screen'))) {
            $this->addModuleSetting('screen', ['post']);
        }

        $panel->addModuleSettings(Tools::arrayMerge(
            self::getGlobal('core/module/metabox-panel/settings', []),
            $this->getModuleSetting(), 's'
        ));

        $panel->addModuleSetting('build-settings', $this->getModuleSetting('build-settings'))
              ->addModuleSetting('build-settings-file', $this->getModuleSetting('build-settings-file'))
              ->addModuleSetting('meta-module-resource', $this->getModuleResourcePath())
              ->addCustomMode('meta', self::getGlobal('core/module/metabox-panel/mode/meta'))
              ->addCustomMode('meta-lite', self::getGlobal('core/module/metabox-panel/mode/meta-lite'));

        // Metabox Panel hook
        do_action('zc/module/metabox_panel/setup', $panel);
        do_action("zc/module/metabox_panel/{$this->getModuleSetting('slug')}/setup", $panel);

        // Setup module
        $panel->setup();
    }
}
