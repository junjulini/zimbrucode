<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Core;

use ZimbruCode\Component\Common\DataCollector;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Core\Traits\AssetTrait;
use ZimbruCode\Component\Core\Traits\RenderTrait;

/**
 * Class : Module kernel
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
abstract class ModuleKernel extends Kernel
{
    use RenderTrait, AssetTrait;

    /**
     * Module base data
     *
     * @var DataCollector
     */
    private $__DC;

    final public function __construct(DataCollector $collector)
    {
        $this->__DC = $collector;

        // Set as multi use
        if (isset($this->__multiUse) && $this->__multiUse === true) {
            $this->__DC->set('multi-use', true);
        }
    }

    /**
     * Get module value
     * 
     * @param string $path
     * @param string $value
     * @since 1.0.0
     */
    final public function setModuleData($path, $value)
    {
        if ($path && is_string($path)) {
            $this->__DC->set("additional-data/{$path}", $value);
        }

        return $this;
    }

    /**
     * Get module value
     * 
     * @param  string  $path
     * @param  boolean $default
     * @return mix
     * @since 1.0.0
     */
    final public function getModuleData($path = '', $default = false)
    {
        if ($path && is_string($path)) {
            return $this->__DC->get("additional-data/{$path}", $default);
        }

        return $this->__DC->get('additional-data', $default);
    }

    /**
     * Remove module value
     * 
     * @param  string $path
     * @return boolean
     * @since 1.0.0
     */
    final public function remModuleData($path)
    {
        if ($path && is_string($path)) {
            return $this->__DC->remove("additional-data/{$path}");
        }

        return false;
    }

    /**
     * Get module setting
     * 
     * @param  string $setting   Single setting
     * @param  string $default   Default value
     * @return string/array      Settings or single setting
     * @since 1.0.0
     */
    final public function getModuleSetting($setting = '', $default = '')
    {
        if ($setting && is_string($setting)) {
            return $this->__DC->get("settings/{$setting}", $default);
        }

        return $this->__DC->get('settings');
    }

    /**
     * Set module setting
     * 
     * @param string $setting   Setting key
     * @param string $value     Value for setting
     * @since 1.0.0
     */
    final public function setModuleSetting($setting, $value)
    {
        if ($setting && is_string($setting)) {
            $this->__DC->set("settings/{$setting}", $value);
        }

        return $this;
    }

    /**
     * Set module settings
     * 
     * @param array $value   Value for settings
     * @since 1.0.0
     */
    final public function setModuleSettings(array $value)
    {
        $this->__DC->set('settings', $value);
        return $this;
    }

    /**
     * Get module data collector
     * 
     * @return DataCollector   Module data
     * @since 1.0.0
     */
    final public function getModuleDataCollector()
    {
        return $this->__DC;
    }

    /**
     * Returns the module name
     * 
     * @return string   The Module name
     * @since 1.0.0
     */
    final public function getModuleName()
    {
        if (!$moduleName = $this->__DC->get('module-name')) {
            $moduleName = basename($this->getModulePath());
            $this->__DC->set('module-name', $moduleName);
        }

        return $moduleName;
    }

    /**
     * Gets the module namespace
     * 
     * @return string   The Module namespace
     * @since 1.0.0
     */
    final public function getModuleNamespace()
    {
        return $this->__DC->get('module-namespace');
    }

    /**
     * Gets the module directory path
     * 
     * @param  string $path   Additional part of path
     * @return string         The Module absolute path
     * @since 1.0.0
     */
    final public function getModulePath($path = '')
    {
        return $this->__DC->get('module-path') . $path;
    }

    /**
     * Gets the module URL
     * 
     * @param  string $url   Additional part of url
     * @return string        The Module URL
     * @since 1.0.0
     */
    final public function getModuleURL($url = '')
    {
        if (!$moduleURL = $this->__DC->get('module-url')) {
            $moduleURL = Tools::getURL($this->getModulePath());
            $this->__DC->set('module-url', $moduleURL);
        }

        return $moduleURL . $url;
    }

    /**
     * Get resource path
     * 
     * @param  string $path Additional part of path
     * @return string       Resource path
     * @since 1.0.0
     */
    public function getModuleResourcePath($path = '')
    {
        return wp_normalize_path($this->getModulePath() . self::getGlobal('core/component/core/module/resource-dir') . $path);
    }

    /**
     * Get resource URL
     * 
     * @param  string $url Additional part of URL
     * @return string      Resource URL
     * @since 1.0.0
     */
    public function getModuleResourceURL($url = '')
    {
        return esc_url($this->getModuleURL() . self::getGlobal('core/component/core/module/resource-dir') . $url);
    }

    /**
     * Load synchronized module part
     *
     * @param string $part      Module part name
     * @param string $service   Load as local service with name ...
     * @param mix    $data      Additional data
     * @return object           Instance of module part
     * @since 1.0.0
     */
    final public function loadModulePart($part, $service = false, $data = null)
    {
        if (!$part) {
            throw new \InvalidArgumentException(esc_html__('Module part : empty.', 'zc'));
        }

        if (!is_string($part)) {
            throw new \InvalidArgumentException(esc_html__('Module part : not string.', 'zc'));
        }

        if (!(($part = new $part($this->__DC)) instanceof ModuleKernel)) {
            throw new \RuntimeException(get_class($part) . ' - this module part not compatible.');
        }

        if (method_exists($part, 'setup')) {
            $part->setup($this, $data);
        }

        if ($service && is_string($service) && !$this->__DC->get("module-services/{$service}")) {
            $this->__DC->set("module-services/{$service}", $part);
        }

        return $part;
    }

    /**
     * Get module service
     *
     * @param string $service   Name of module service
     * @return object           Instance of module part as local service
     * @since 1.0.0
     */
    final public function moduleService($service)
    {
        if ($service && is_string($service) && $moduleService = $this->__DC->get("module-services/{$service}")) {
            return $moduleService;
        } else {
            throw new \InvalidArgumentException(esc_html__('Module service is : empty, not string or not exist.', 'zc'));
        }
    }
}
