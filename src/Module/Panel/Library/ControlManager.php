<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\Panel\Library;

use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\ModuleKernel;
use ZimbruCode\Module\Panel\Library\Traits\ContentUtilityTrait;
use ZimbruCode\Module\Panel\Library\TwigContextController;
use ZimbruCode\Module\Panel\Library\TwigExtension\ControlsRenderTwigExtension;

/**
 * Class : Control manager
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class ControlManager extends ModuleKernel
{
    use ContentUtilityTrait;

    protected $controls   = [];
    protected $namespaces = [];

    /**
     * Controls setup
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function setup(): void
    {
        // Set Twig extension
        $this->addAction("zc/module/panel/{$this->getModuleSetting('slug')}/render", function (object $ttb): void {
            $ttb->addExtension(new ControlsRenderTwigExtension($this));
        });

        $this->namespaces[] = [
            'path'      => $this->getModuleResourcePath('controls'),
            'namespace' => self::getGlobal('core/module/panel/control-settings/namespace'),
        ];

        $this->namespaces = Tools::arrayMerge(
            $this->namespaces,
            $this->getModuleData('custom-controls-namespaces', []),
            'wk'
        );

        Tools::addPsr4($this->namespaces);

        foreach ($this->getBuildSettings() as $settings) {
            $this->search($settings);
        }
    }

    /**
     * Get control
     *
     * @param  string $name   Control name
     * @return ControlKernel
     * @since 1.0.0
     */
    public function getControl(string $name): ?ControlKernel
    {
        if ($name) {
            if (!empty($this->controls[$name])) {
                return $this->controls[$name];
            }
        }

        return null;
    }

    /**
     * Add control
     *
     * @param string      $name    Control name
     * @param ControlKernel $control   Control object
     * @since 1.0.0
     */
    public function addControl(string $name, ControlKernel $control): bool
    {
        if ($name) {
            $this->controls[$name] = $control;
            return true;
        }

        return false;
    }

    /**
     * Remove control
     *
     * @param  string $name   Control name
     * @return bool           Unset result
     * @since 1.0.0
     */
    public function removeControl(string $name): bool
    {
        if ($name) {
            if (!empty($this->controls[$name])) {
                unset($this->controls[$name]);
                return true;
            }
        }

        return false;
    }

    /**
     * Search controls in build settings
     *
     * @param  array  $settings
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function search(array $settings): void
    {
        if (!empty($settings['type']) && !$this->getControl($settings['type'])) {
            $type         = $settings['type'];
            $controlClass = self::getGlobal('core/module/panel/control-settings/class');

            foreach ($this->namespaces as $el) {
                if (!empty($el['namespace'])) {
                    if (class_exists($control = "{$el['namespace']}{$type}\\{$controlClass}")) {
                        $this->load($control, $type);
                        break;
                    }
                }
            }
        }

        if (!empty($settings['content']) && is_array($settings['content'])) {
            foreach ($settings['content'] as $control) {
                if (is_array($control)) {
                    $this->search($control);
                }
            }
        }

        do_action('zc/module/panel/control_manager', $settings, $this);
        do_action("zc/module/panel/{$this->getModuleSetting('slug')}/control_manager", $settings, $this);
    }

    /**
     * Load control
     *
     * @param  string $control   Control class
     * @param  string $control   Control type
     * @return void              This function does not return a value
     * @since 1.0.0
     */
    protected function load(string $control, string $type): void
    {
        $this->addControl($type, $this->loadModulePart($control, false, $type));

        if (method_exists($this->getControl($type), 'each')) {
            $this->addFilter("zc/module/panel/control/{$type}", function (array $context) use ($type): array {
                $this->getControl($type)->each(new TwigContextController($context));

                return $context;
            });
        }

        // Set less asset
        $asset = self::getGlobal('core/module/panel/control-settings/assets/less-file');
        $asset = $this->getControl($type)->getControlPath($asset);

        $this->getModuleData('asset')->addLessFile($asset);

        // Set js asset
        if (self::dev()) {
            $asset = self::getGlobal('core/module/panel/control-settings/assets/js-file');
        } else {
            $asset = self::getGlobal('core/module/panel/control-settings/assets/min-js-file');
        }

        if (file_exists($asset = $this->getControl($type)->getControlPath($asset))) {
            $this->getModuleData('asset')->addLast($asset);
        }

        // Set load path
        $this->addAction("zc/module/panel/{$this->getModuleSetting('slug')}/render", function (object $ttb) use ($type): void {
            $controlDir = self::getGlobal('core/module/panel/control-settings/template-dir');
            $ttb->addLocationPath($this->getControl($type)->getControlPath($controlDir), $type);
        });
    }
}
