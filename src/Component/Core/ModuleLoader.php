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
use ReflectionObject;
use RuntimeException;
use ZimbruCode\Component\Common\DataCollector;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Component/Core : Module loader
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */
class ModuleLoader
{
    protected $config  = [];
    protected $group   = [];
    protected $isGroup = false;

    /**
     * Constructor
     *
     * @since 1.0.0
     */
    public function __construct()
    {
        $this->flush();
    }

    /**
     * Get a module by name
     *
     * @param  string $name   Short name of module
     * @return object         Module object
     * @since 1.0.0
     */
    public function __get($name)
    {
        return $this->useModule($name)->build();
    }

    /**
     * Get the path to the module directory
     *
     * @param string  $module    Module name
     * @param string  $path      Additional part of the path
     * @param mix     $default   Default value
     * @return mix               Module path
     * @since 1.0.0
     */
    public function getModulePath(string $module, string $path = '', $default = false)
    {
        $class    = $this->getModuleClass($module);
        $filePath = Kernel::service('composer')->findFile($class);
        $dirPath  = dirname(wp_normalize_path(realpath($filePath)));

        return ($dirPath) ? $dirPath . $path : $default;
    }

    /**
     * Get module URL
     *
     * @param string  $module   Module name
     * @param string  $url      Additional part of the URL
     * @param mix     $default  Return value if not exist module
     * @return mix              Module URL
     * @since 1.0.0
     */
    public function getModuleURL(string $module, string $url = '', $default = false)
    {
        $dirPath = $this->getModulePath($module);
        return ($dirPath) ? Tools::getURL($dirPath) . $url : $default;
    }

    /**
     * Get module resource path
     *
     * @param string $module   Module name
     * @param string $path     Additional part of the path
     * @return mix             Module resource path
     * @since 1.0.0
     */
    public function getModuleResourcePath(string $module, string $path = '')
    {
        $dirPath = $this->getModulePath($module);
        return ($dirPath) ? $dirPath . Kernel::getGlobal('core/component/core/module/resource-dir') . $path : false;
    }

    /**
     * Get module resource URL
     *
     * @param string $module   Module name
     * @param string $url      Additional part of the URL
     * @return mix             Module resource URL
     * @since 1.0.0
     */
    public function getModuleResourceURL(string $module, string $url = '')
    {
        $urlPath = $this->getModuleURL($module);
        return ($urlPath) ? $urlPath . Kernel::getGlobal('core/component/core/module/resource-dir') . $url : false;
    }

    /**
     * Add namespace for search
     *
     * @param string $namespace   Namespace value
     * @return self
     * @since 1.0.0
     */
    public function addNamespace(string $namespace): self
    {
        if (!$namespace) {
            throw new InvalidArgumentException('ZE0068');
        }

        Kernel::addGlobalCache("module/namespace/{$namespace}", $namespace);

        return $this;
    }

    /**
     * Add settings
     *
     * @param array $setting   Module settings
     * @return self
     * @since 1.0.0
     */
    public function addSettings(array $settings): self
    {
        $this->config['settings'] = $settings;
        return $this;
    }

    /**
     * Add module as service
     *
     * @param string $name   Name of service
     * @return self
     * @since 1.0.0
     */
    public function addAsService(string $name): self
    {
        if ($name) {
            $this->config['service'] = $name;
        }

        return $this;
    }

    /**
     * Add module mode
     *
     * @param string $mode   Module mode
     * @return self
     * @since 1.0.0
     */
    public function addMode(string $mode): self
    {
        if ($mode) {
            $this->config['mode'] = $mode;
        }

        return $this;
    }

    /**
     * Add module config
     *
     * @param array|string $config   Module config
     * @return self
     * @since 1.0.0
     */
    public function addConfig($config): self
    {
        if ($config) {
            $config = apply_filters('zc/component/core/module_loader/before_load_config', $config);

            if (is_string($config)) {
                $this->useModule($config)
                     ->addAsService(false)
                     ->addMode(false)
                     ->addSettings([])
                     ->build();
            } elseif (!empty($config['module'])) {
                $service  = (!empty($config['service']) && is_string($config['service'])) ? $config['service'] : false;
                $mode     = (!empty($config['mode']) && is_string($config['mode'])) ? $config['mode'] : false;
                $settings = (isset($config['settings']) && is_array($config['settings'])) ? $config['settings'] : [];

                $this->useModule($config['module'])
                     ->addAsService($service)
                     ->addMode($mode)
                     ->addSettings($settings)
                     ->build();
            } else {
                $this->group('init');

                foreach ($config as $module) {
                    if (is_string($module)) {
                        $this->useModule($module)
                             ->addAsService(false)
                             ->addMode(false)
                             ->addSettings([])
                             ->build();
                    } elseif (is_array($module)) {
                        if (empty($module['module'])) {
                            throw new RuntimeException('ZE0069');
                        }

                        $service  = (!empty($module['service']) && is_string($module['service'])) ? $module['service'] : false;
                        $mode     = (!empty($module['mode']) && is_string($module['mode'])) ? $module['mode'] : false;
                        $settings = (isset($module['settings']) && is_array($module['settings'])) ? $module['settings'] : [];

                        $this->useModule($module['module'])
                             ->addAsService($service)
                             ->addMode($mode)
                             ->addSettings($settings)
                             ->build();
                    }
                }

                $this->group('run');
            }
        }

        return $this;
    }

    /**
     * Get module config
     *
     * @return array   Module config
     * @since 1.0.0
     */
    public function getConfig(): array
    {
        return $this->config;
    }

    /**
     * Clear module loader configs
     *
     * @return self
     * @since 1.0.0
     */
    public function flush(): self
    {
        $this->config = [
            'module'   => '',
            'mode'     => false,
            'service'  => false,
            'settings' => [],
        ];

        return $this;
    }

    /**
     * Use module
     *
     * @param  string $module   Module name
     * @return self
     * @since 1.0.0
     */
    protected function useModule(string $module): self
    {
        if ($module) {
            $this->config['module'] = $module;
        }

        return $this;
    }

    /**
     * Build the module and run it
     *
     * @return ModuleKernel|null
     * @since 1.0.0
     */
    protected function build(): ?ModuleKernel
    {
        if (empty($this->config['module']) || !is_string($this->config['module'])) {
            throw new RuntimeException('ZE0070');
        }

        if (!empty($this->config['mode']) && is_string($this->config['mode'])) {
            switch ($this->config['mode']) {
                case 'admin':
                    if (is_admin()) {
                        return $this->prepModuleData();
                    }

                    break;
                case 'not-admin':
                    if (!is_admin()) {
                        return $this->prepModuleData();
                    }

                    break;

                default:
                    return $this->prepModuleData();
                    break;
            }
        } else {
            return $this->prepModuleData();
        }

        $this->flush();

        return null;
    }

    /**
     * Preparing module data
     *
     * @return ModuleKernel
     * @since 1.0.0
     */
    protected function prepModuleData(): ModuleKernel
    {
        if (!$module = $this->getModuleClass($this->config['module'])) {
            throw new RuntimeException("ZE0071 - Module does not exist : {$this->config['module']}");
        }

        // Init collector
        $collector = new DataCollector;
        $collector->add('settings', $this->config['settings'])
                  ->add('multi-use', false)
                  ->add('module-namespace', substr($module, 0, strrpos($module, '\\')));

        // Module initialization
        if (!(($module = new $module($collector)) instanceof ModuleKernel)) {
            throw new RuntimeException('ZE0072 - This module is not compatible : ' . get_class($module));
        }

        // Set the module path in the collector
        $collector->add('module-path', wp_normalize_path(dirname((new ReflectionObject($module))->getFileName())));

        // Check "MultiUse"
        if (!$collector->get('multi-use')) {
            if (!Kernel::getGlobal("cache/module/one-off/{$module->getModuleNamespace()}")) {
                Kernel::addGlobal("cache/module/one-off/{$module->getModuleNamespace()}", $module->getModuleName());
            } else {
                throw new RuntimeException("ZE0073 - This module is duplicated : {$module->getModuleNamespace()}");
            }
        }

        // Set as service
        if ($this->config['service']) {
            Kernel::service($this->config['service'], $module);
        }

        // Module setup
        if ($this->group('check')) {
            $this->group('add', $module);
        } else {
            $this->doAction($module);

            if (method_exists($module, 'setup')) {
                $module->setup();
            }
        }

        // Flush
        $this->flush();

        return $module;
    }

    /**
     * Get module class
     *
     * @param  string $module   Module name
     * @return string/null      Module class
     * @since 1.0.0
     */
    protected function getModuleClass(string $module): ?string
    {
        $moduleName = Kernel::getGlobal('core/component/core/module/module-name');

        foreach (Kernel::getGlobal('core/component/core/module/namespace') as $namespace) {
            $class = "{$namespace}\\{$module}\\{$moduleName}";

            if (class_exists($class)) {
                return $class;
            }
        }

        foreach (Kernel::getGlobalCache('module/namespace') as $namespace) {
            $class = "{$namespace}\\{$module}\\{$moduleName}";

            if (class_exists($class)) {
                return $class;
            }
        }

        return null;
    }

    /**
     * Preparing group modules
     *
     * @param string       $task     Task value
     * @param ModuleKernel $module   Module object
     * @return boolean               Action result
     * @since 1.0.0
     */
    protected function group(string $task = '', ModuleKernel $module = null): bool
    {
        if ($task === 'init') {
            $this->isGroup = true;
        } else if ($task === 'check') {
            return ($this->isGroup === true);
        } else if ($task === 'add') {
            $this->group[] = $module;
        } else if ($task === 'run') {
            if (!empty($this->group)) {
                foreach ($this->group as $module) {
                    $this->doAction($module);

                    if (method_exists($module, 'setup')) {
                        $module->setup();
                    }
                }

                $this->group   = [];
                $this->isGroup = false;
            }
        }

        return false;
    }

    /**
     * Do action before setup
     *
     * @param ModuleKernel $module   Module object
     * @return void
     * @since 1.1.0
     */
    protected function doAction(ModuleKernel $module): void
    {
        $name = ltrim(strtolower(preg_replace('/[A-Z]([A-Z](?![a-z]))*/', '_$0', $module->getModuleName())), '_');

        if (strpos($module->getModuleNamespace(), Kernel::getGlobal('core/name')) !== false) {
            do_action("zc/module/{$name}/before_setup", $module);
        } elseif (strpos($module->getModuleNamespace(), Kernel::getGlobal('app/name')) !== false) {
            do_action("zc/app/module/{$name}/before_setup", $module);
        } else {
            do_action("zc/{$name}/before_setup", $module);
        }
    }
}
