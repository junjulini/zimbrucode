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

use InvalidArgumentException;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\ModuleKernel;
use ZimbruCode\Module\Panel\Library\AssetHandler;

/**
 * Module : Panel
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */
class Module extends ModuleKernel
{
    protected $__multiUse = true;

    /**
     * Module setup
     *
     * @throws InvalidArgumentException
     * @return void
     * @since 1.1.0
     */
    public function setup(): void
    {
        if ($this->getModuleSetting()) {

            // Check if "build settings" are not empty
            if (!$this->getModuleSetting('build-settings', [])) {
                if (!file_exists($this->getModuleSetting('build-settings-file'))) {
                    throw new InvalidArgumentException('ZE0125');
                }
            }

            // Panel hook : Before
            do_action('zc/module/panel/setup_before', $this);
            do_action("zc/module/panel/{$this->getModuleSetting('slug')}/setup_before", $this);

            // Processing "build settings"
            $this->procBuildSettings();

            // Check panel mode
            $this->checkMode();

            // Processing panel settings
            $this->procSettings();

            // Load "asset handler"
            $this->addModuleData('asset', new AssetHandler($this));

            // Load panel mode
            $this->loadMode();

            // Panel hook : After
            do_action('zc/module/panel/setup_after', $this);
            do_action("zc/module/panel/{$this->getModuleSetting('slug')}/setup_after", $this);
        }
    }

    /**
     * Processing "build settings"
     *
     * @return void
     * @since 1.1.0
     */
    protected function procBuildSettings(): void
    {
        if ($this->getModuleSetting('build-settings')) {
            $this->addModuleData('build-settings', $this->getModuleSetting('build-settings'));
        } else {
            $this->addModuleData('build-settings-file', $this->getModuleSetting('build-settings-file'));
        }
    }

    /**
     * Check the panel mode type
     *
     * @throws InvalidArgumentException
     * @return void
     * @since 1.1.0
     */
    protected function checkMode(): void
    {
        $mode = $this->getModuleSetting('mode', 'page');

        if (empty($mode)) {
            throw new InvalidArgumentException('ZE0126');
        }

        if (!is_string($mode)) {
            throw new InvalidArgumentException('ZE0127');
        }

        if (!self::getGlobal("core/module/panel/mode/{$mode}")) {
            if (!$this->getModuleData("custom-mode/{$mode}")) {
                throw new InvalidArgumentException(
                    "ZE0128 - This mode '{$mode}' is incompatible, only allowed:" .
                    implode(', ', array_keys(Tools::arrayMerge(self::getGlobal('core/module/panel/mode'), $this->getModuleData('custom-mode', []))))
                );
            }
        }

        $this->addModuleData('mode', $mode);
    }

    /**
     * Processing panel settings
     *
     * @return void
     * @since 1.1.0
     */
    protected function procSettings(): void
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
     * @return void
     * @since 1.1.0
     */
    protected function loadMode(): void
    {
        if (self::getGlobal("core/module/panel/mode/{$this->getModuleData('mode')}")) {
            $mode = self::getGlobal("core/module/panel/mode/{$this->getModuleData('mode')}");
        } else {
            $mode = $this->getModuleData("custom-mode/{$this->getModuleData('mode')}");
        }

        $this->loadModulePart($mode);
    }

    /**
     * Add custom mode
     *
     * @param  string $mode    Mode name
     * @param  string $class   Mode class name
     * @throws InvalidArgumentException
     * @return ModuleKernel
     * @since 1.1.0
     */
    public function addCustomMode(string $mode, string $class): ModuleKernel
    {
        if (!$mode) {
            throw new InvalidArgumentException('ZE0129');
        }

        if (!class_exists($class)) {
            throw new InvalidArgumentException("ZE0130 - Class don't exist : {$class}");
        }

        $this->addModuleData("custom-mode/{$mode}", $class);

        return $this;
    }

    /**
     * Add custom controls namespace
     *
     * @param  string $path        Controls namespace path
     * @param  string $namespace   Controls namespace
     * @throws InvalidArgumentException
     * @return ModuleKernel
     * @since 1.1.0
     */
    public function addCustomControlsNamespace(string $path, string $namespace): ModuleKernel
    {
        if (!$path) {
            throw new InvalidArgumentException('ZE0131');
        }

        if (!Tools::isLocalPath($path)) {
            throw new InvalidArgumentException("ZE0132 - Control path is not local : {$path}");
        }

        if (!$namespace) {
            throw new InvalidArgumentException('ZE0133');
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
