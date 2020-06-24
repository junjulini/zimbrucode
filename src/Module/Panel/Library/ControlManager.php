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
use ZimbruCode\Module\Panel\Library\Interfaces\ControlInterface;
use ZimbruCode\Module\Panel\Library\Traits\CallbackTrait;
use ZimbruCode\Module\Panel\Library\Traits\ContentUtilityTrait;
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
    use ContentUtilityTrait, CallbackTrait;

    protected $controls     = [];
    protected $namespaces = [];

    /**
     * Controls setup
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function setup()
    {
        // Set Twig extension
        $this->callback()->set('panel-render', function ($ttb) {
            $ttb->setExtension(new ControlsRenderTwigExtension($this));
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
     * @return object         Control object
     * @since 1.0.0
     */
    public function getControl($name)
    {
        if ($name && is_string($name)) {
            if (!empty($this->controls[$name])) {
                return $this->controls[$name];
            }
        }

        return false;
    }

    /**
     * Set control
     * 
     * @param string      $name    Control name
     * @param ControlKernel $control   Control object
     * @since 1.0.0
     */
    public function setControl($name, ControlKernel $control)
    {
        if ($name && is_string($name)) {
            $this->controls[$name] = $control;
            return true;
        }

        return false;
    }

    /**
     * Remove control
     * 
     * @param  string $name   Control name
     * @return boolean        Unset result
     * @since 1.0.0
     */
    public function removeControl($name)
    {
        if ($name && is_string($name)) {
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
    public function search(array $settings)
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

        $this->callback()->run('panel-control-manager', $settings, $this);
    }

    /**
     * Load control
     * 
     * @param  string $control   Control class
     * @param  string $control   Control type
     * @return void              This function does not return a value
     * @since 1.0.0
     */
    protected function load($control, $type)
    {
        $this->setControl($type, $this->loadModulePart($control, false, $type));

        // Set less asset
        $asset = self::getGlobal('core/module/panel/control-settings/assets/less-file');
        $asset = $this->getControl($type)->getControlPath($asset);

        $this->getModuleData('asset')->setLessFile($asset);

        // Set js asset
        $asset = (self::dev())
            ? self::getGlobal('core/module/panel/control-settings/assets/js-file')
            : self::getGlobal('core/module/panel/control-settings/assets/min-js-file');

        if (file_exists($asset = $this->getControl($type)->getControlPath($asset))) {
            $this->getModuleData('asset')->setLast($asset);
        }

        // Set load path
        $this->callback()->set('panel-render', function ($ttb) use ($type) {
            $controlDir = self::getGlobal('core/module/panel/control-settings/template-dir');
            $ttb->addLocationPath($this->getControl($type)->getControlPath($controlDir), $type);
        });
    }
}
