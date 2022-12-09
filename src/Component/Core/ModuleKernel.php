<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Core;

use InvalidArgumentException;
use RuntimeException;
use ZimbruCode\Component\Common\DataCollector;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Core\Traits\AssetTrait;
use ZimbruCode\Component\Core\Traits\RenderTrait;

/**
 * Class : Component/Core : Module kernel
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */
abstract class ModuleKernel extends Kernel
{
    use RenderTrait, AssetTrait;

    private $__DC;
    private $__MP;

    /**
     * Constructor
     *
     * @param DataCollector     $collector      Data collector object
     * @param ModuleKernel|null $moduleParent   Parent module
     * @since 1.0.0
     */
    final public function __construct(DataCollector $collector, ModuleKernel $moduleParent = null)
    {
        $this->__DC = $collector;

        // Set as multipurpose
        if (isset($this->__multiUse) && $this->__multiUse === true) {
            $this->__DC->add('multi-use', true);
        }

        // Module parent
        if ($moduleParent) {
            $this->__MP = $moduleParent;
        }
    }

    /**
     * Module parent object
     *
     * @return ModuleKernel
     * @since 1.0.0
     */
    final public function moduleParent(): ModuleKernel
    {
        if ($this->__MP instanceof ModuleKernel) {
            return $this->__MP;
        } else {
            throw new RuntimeException('ZE0064');
        }
    }

    /**
     * Add module data
     *
     * @param string $path    Array path
     * @param mix    $value   Value
     * @return self
     * @since 1.0.0
     */
    final public function addModuleData(string $path, $value): self
    {
        if ($path) {
            $this->__DC->add("additional-data/{$path}", $value);
        }

        return $this;
    }

    /**
     * Get module data
     *
     * @param  string $path      Array value
     * @param  mix    $default   Default value
     * @return mix               Item data
     * @since 1.0.0
     */
    final public function getModuleData(string $path = '', $default = false)
    {
        if ($path) {
            return $this->__DC->get("additional-data/{$path}", $default);
        }

        return $this->__DC->get('additional-data', $default);
    }

    /**
     * Remove module data item
     *
     * @param  string $path   Array path
     * @return boolean        Action result
     * @since 1.0.0
     */
    final public function remModuleData(string $path): bool
    {
        if ($path) {
            return $this->__DC->remove("additional-data/{$path}");
        }

        return false;
    }

    /**
     * Get module setting
     *
     * @param  string $path      Array path
     * @param  string $default   Default value
     * @return mix               Setting value
     * @since 1.0.0
     */
    final public function getModuleSetting(string $path = '', $default = '')
    {
        if ($path) {
            return $this->__DC->get("settings/{$path}", $default);
        }

        return $this->__DC->get('settings');
    }

    /**
     * Add module setting
     *
     * @param string $path    Array path
     * @param mix    $value   Value
     * @return self
     * @since 1.0.0
     */
    final public function addModuleSetting(string $path, $value): self
    {
        if ($path) {
            $this->__DC->add("settings/{$path}", $value);
        }

        return $this;
    }

    /**
     * Add module settings
     *
     * @param array $settings   Settings array
     * @return self
     * @since 1.0.0
     */
    final public function addModuleSettings(array $settings): self
    {
        $this->__DC->add('settings', $settings);
        return $this;
    }

    /**
     * Get module data collector
     *
     * @return DataCollector   Module data
     * @since 1.0.0
     */
    final public function getModuleDataCollector(): DataCollector
    {
        return $this->__DC;
    }

    /**
     * Returns the module name
     *
     * @return string   Module name
     * @since 1.0.0
     */
    final public function getModuleName(): string
    {
        if (!$moduleName = $this->__DC->get('module-name')) {
            $moduleName = basename($this->getModulePath());
            $this->__DC->add('module-name', $moduleName);
        }

        return $moduleName;
    }

    /**
     * Get module namespace
     *
     * @return string   Module namespace
     * @since 1.0.0
     */
    final public function getModuleNamespace(): string
    {
        return $this->__DC->get('module-namespace');
    }

    /**
     * Get the path to the module directory
     *
     * @param  string $path   Additional part of the path
     * @return string         Module path
     * @since 1.0.0
     */
    final public function getModulePath(string $path = ''): string
    {
        return $this->__DC->get('module-path') . $path;
    }

    /**
     * Get module URL
     *
     * @param  string $url   Additional part of the URL
     * @return string        Module URL
     * @since 1.0.0
     */
    final public function getModuleURL(string $url = ''): string
    {
        if (!$moduleURL = $this->__DC->get('module-url')) {
            $moduleURL = Tools::getURL($this->getModulePath());
            $this->__DC->add('module-url', $moduleURL);
        }

        return $moduleURL . $url;
    }

    /**
     * Get resource path
     *
     * @param  string $path   Additional part of the path
     * @return string         Resource path
     * @since 1.0.0
     */
    public function getModuleResourcePath(string $path = ''): string
    {
        return wp_normalize_path($this->getModulePath() . self::getGlobal('core/component/core/module/resource-dir') . $path);
    }

    /**
     * Get resource URL
     *
     * @param  string $url   Additional part of the URL
     * @return string        Resource URL
     * @since 1.0.0
     */
    public function getModuleResourceURL(string $url = ''): string
    {
        return esc_url($this->getModuleURL() . self::getGlobal('core/component/core/module/resource-dir') . $url);
    }

    /**
     * Load the synchronized part of the module
     *
     * @param string $part      Module part name
     * @param string $service   Load as local service with name ...
     * @param mix    $data      Additional data
     * @return ModuleKernel     Instance of module part
     * @since 1.1.0
     */
    final public function loadModulePart(string $part, string $service = '', $data = null): ModuleKernel
    {
        if (!$part) {
            throw new InvalidArgumentException('ZE0065');
        }

        if (!(($part = new $part($this->__DC, $this)) instanceof ModuleKernel)) {
            throw new RuntimeException('ZE0066 - this module part not compatible : ' . get_class($part));
        }

        if ($service && !$this->__DC->get("module-services/{$service}")) {
            $this->__DC->add("module-services/{$service}", $part);
        }

        if (method_exists($part, 'setup')) {
            $part->setup($data);
        }

        return $part;
    }

    /**
     * Get module service
     *
     * @param string $service   Name of module service
     * @return ModuleKernel     Instance of a part of a module as a local service
     * @since 1.0.0
     */
    final public function moduleService(string $service): ModuleKernel
    {
        if ($service && $moduleService = $this->__DC->get("module-services/{$service}")) {
            return $moduleService;
        } else {
            throw new InvalidArgumentException('ZE0067');
        }
    }
}
