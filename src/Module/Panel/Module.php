<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\Panel;

use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\ModuleKernel;
use ZimbruCode\Module\Panel\Library\AssetHandler;

/**
 * Module : Panel
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
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
    public function setup(): void
    {
        if ($this->getModuleSetting()) {

            // Check build settings if not empty
            if (!$this->getModuleSetting('build-settings', [])) {
                if (!file_exists($this->getModuleSetting('build-settings-file'))) {
                    throw new \InvalidArgumentException('Build settings are empty or file with settings not exist.');
                }
            }

            // Panel hook before
            do_action('zc/module/panel/setup_before', $this);
            do_action("zc/module/panel/{$this->getModuleSetting('slug')}/setup_before", $this);

            // Preparing build settings
            $this->prepBuildSettings();

            // Check panel mode
            $this->checkMode();

            // Preparing panel settings
            $this->prepSettings();

            // Load asset handler
            $this->addModuleData('asset', new AssetHandler($this));

            // Load panel mode
            $this->loadMode();

            // Panel hook after
            do_action('zc/module/panel/setup_after', $this);
            do_action("zc/module/panel/{$this->getModuleSetting('slug')}/setup_after", $this);
        }
    }

    /**
     * Preparing build settings
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    protected function prepBuildSettings(): void
    {
        if ($this->getModuleSetting('build-settings')) {
            $this->addModuleData('build-settings', $this->getModuleSetting('build-settings'));
        } else {
            $this->addModuleData('build-settings-file', $this->getModuleSetting('build-settings-file'));
        }
    }

    /**
     * Check panel mode
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    protected function checkMode(): void
    {
        $mode = $this->getModuleSetting('mode', 'page');

        if (empty($mode)) {
            throw new \InvalidArgumentException('Mode is empty.');
        }

        if (!is_string($mode)) {
            throw new \InvalidArgumentException('Mode is not string.');
        }

        if (!self::getGlobal("core/module/panel/mode/{$mode}")) {
            if (!$this->getModuleData("custom-mode/{$mode}")) {
                throw new \InvalidArgumentException(
                    "{$mode} - this mode is not compatible, permitted only : " .
                    implode(', ', array_keys(Tools::arrayMerge(self::getGlobal('core/module/panel/mode'), $this->getModuleData('custom-mode', []))))
                );
            }
        }

        $this->addModuleData('mode', $mode);
    }

    /**
     * Preparing panel settings
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    protected function prepSettings(): void
    {
        if (self::getGlobal("core/module/panel/settings/{$this->getModuleData('mode')}")) {
            $this->addModuleSettings(Tools::arrayMerge(
                self::getGlobal("core/module/panel/settings/{$this->getModuleData('mode')}", []),
                $this->getModuleSetting(), 's'
            ));
        }
    }

    /**
     * Load panel mode
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    protected function loadMode(): void
    {
        $mode = ($mode = self::getGlobal("core/module/panel/mode/{$this->getModuleData('mode')}"))
            ? $mode
            : $this->getModuleData("custom-mode/{$this->getModuleData('mode')}");

        $this->loadModulePart($mode);
    }

    /**
     * Add custom mode
     *
     * @param string $mode    Mode name
     * @param string $class   Mode class name
     * @since 1.0.0
     */
    public function addCustomMode(string $mode, string $class): ModuleKernel
    {
        if (!$mode) {
            throw new \InvalidArgumentException('Mode is empty.');
        }

        if (!class_exists($class)) {
            throw new \InvalidArgumentException("{$class} - class don't exist.");
        }

        $this->addModuleData("custom-mode/{$mode}", $class);

        return $this;
    }

    /**
     * Add custom controls namespace
     *
     * @param string $path        Controls namespace path
     * @param string $namespace   Controls namespace
     * @since 1.0.0
     */
    public function addCustomControlsNamespace(string $path, string $namespace): ModuleKernel
    {
        if (!$path) {
            throw new \InvalidArgumentException('Control path is empty.');
        }

        if (!Tools::isLocalPath($path)) {
            throw new \InvalidArgumentException("{$path} - control path is not local.");
        }

        if (!$namespace) {
            throw new \InvalidArgumentException('Control namespace is empty.');
        }

        $this->addModuleData('custom-controls-namespaces', Tools::arrayMerge(
            $this->getModuleData('custom-controls-namespaces', []),
            [[
                'path'      => wp_normalize_path($path),
                'namespace' => $namespace,
            ]],
            'wk'
        ));

        return $this;
    }
}
