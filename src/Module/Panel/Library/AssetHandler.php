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

use ZimbruCode\Component\Asset\AssetManager;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Core\ModuleKernel;

/**
 * Class : Asset handler
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class AssetHandler
{
    protected $assets     = [];
    protected $lastAssets = [];
    protected $lessData   = [
        'files'     => [],
        'dirs'      => [],
        'vars'      => [],
        'functions' => [],
    ];

    protected $module;
    protected $assetManager;

    public function __construct(ModuleKernel $module)
    {
        $this->module       = $module;
        $this->assetManager = new AssetManager(true, $this->module->getModulePath());

        $resourceDir = Kernel::getGlobal('core/component/core/module/resource-dir');
        $path        = "{$this->module->getModulePath()}{$resourceDir}/assets/less";
        $url         = "{$this->module->getModuleURL()}{$resourceDir}/assets/less";

        $this->addLessDir($path, $url);
    }

    /**
     * Add assets
     *
     * @param array/string $assets   Assets data
     * @return AssetHandler
     * @since 1.0.0
     */
    public function add($assets): AssetHandler
    {
        if ($assets && is_array($assets)) {
            foreach ($assets as $asset) {
                $this->assets[] = $asset;
            }
        } elseif ($assets && is_string($assets)) {
            $this->assets[] = $assets;
        }

        return $this;
    }

    /**
     * Add asset : last queue
     *
     * @param  string $path   Asset path
     * @return AssetHandler
     * @since 1.0.0
     */
    public function addLast(string $path = ''): AssetHandler
    {
        if ($path) {
            $this->lastAssets[] = $path;
        }

        return $this;
    }

    /**
     * Add less file
     *
     * @param  string $file   File path
     * @return AssetHandler
     * @since 1.0.0
     */
    public function addLessFile(string $file): AssetHandler
    {
        if ($file && file_exists($file)) {
            $this->lessData['files'][] = $file;
        }

        return $this;
    }

    /**
     * Add less dir
     *
     * @param  string $dir   Dir path
     * @param  string $url   Dir url
     * @return AssetHandler
     * @since 1.0.0
     */
    public function addLessDir(string $dir, string $url = ''): AssetHandler
    {
        if ($dir && file_exists($dir)) {
            $this->lessData['dirs'][] = [
                'dir' => $dir,
                'url' => $url,
            ];
        }

        return $this;
    }

    /**
     * Add less function
     *
     * @param  string   $name     Name of function
     * @param  callable $method   Function
     * @return AssetHandler
     * @since 1.0.0
     */
    public function addLessFunction(string $name, callable $method): AssetHandler
    {
        if ($name) {
            $this->lessData['functions'][] = [
                'name'   => $name,
                'method' => $method,
            ];
        }

        return $this;
    }

    /**
     * Add less var
     *
     * @param  string $slug
     * @param  mix    $value
     * @return AssetHandler
     * @since 1.0.0
     */
    public function addLessVar(string $slug, $value = ''): AssetHandler
    {
        if ($slug) {
            $this->lessData['vars'][$slug] = $value;
        }

        return $this;
    }

    /**
     * Add less vars
     *
     * @param array $vars   Pool of vars for LESS
     * @return AssetHandler
     * @since 1.0.0
     */
    public function addLessVars(array $vars): AssetHandler
    {
        if ($vars) {
            $this->lessData['vars'] = $vars;
        }

        return $this;
    }

    /**
     * Enroll assets
     *
     * @return AssetHandler
     * @since 1.0.0
     */
    public function enroll(): AssetHandler
    {
        if (!empty($this->lastAssets)) {
            foreach ($this->lastAssets as $lastAsset) {
                $this->assets[] = $lastAsset;
            }
        }

        $callbackForLessRender = function (string $type = '', object $collector, object $less): void {
            if (isset($type)) {
                if ($type == 'less-2') {
                    if (!empty($this->lessData['files'])) {
                        foreach ($this->lessData['files'] as $file) {
                            $less->addFile($file);
                        }
                    }

                    if (!empty($this->lessData['dirs'])) {
                        foreach ($this->lessData['dirs'] as $dirData) {
                            $less->addDir($dirData['dir'], $dirData['url']);
                        }
                    }

                    if (!empty($this->lessData['functions'])) {
                        foreach ($this->lessData['functions'] as $functionData) {
                            $less->addFunction($functionData['name'], $functionData['method']);
                        }
                    }

                    if (!empty($this->lessData['vars'])) {
                        foreach ($this->lessData['vars'] as $slug => $var) {
                            $less->vars[$slug] = $var;
                        }
                    }

                    $env        = Kernel::getEnvironment();
                    $outputFile = basename($less->output);
                    $panelMode  = strtolower($this->module->getModuleSetting('mode', 'page'));
                    $panelSlug  = strtolower($this->module->getModuleSetting('slug', 'undefined'));

                    $path   = "module.panel.{$panelMode}.{$panelSlug}/$outputFile";
                    $cache  = "{$less->output}.{$path}";
                    $output = Kernel::service('app-locator')->getVarPath("assets/{$env}/{$path}");

                    $less->cache  = $cache;
                    $less->output = $output;
                }
            }
        };

        foreach ($this->assets as $asset) {
            if ((new \SplFileInfo($asset))->getExtension() == 'less') {
                $this->assetManager->addCallback($asset, $callbackForLessRender);
            }
        }

        $this->assetManager->addAssets($this->assets)
                           ->enroll('Panel - ' . ucfirst($this->module->getModuleSetting('slug')));

        return $this;
    }

    /**
     * Dump assets
     *
     * @return AssetHandler
     * @since 1.0.0
     */
    public function dump(): AssetHandler
    {
        $this->assetManager->dump();
        return $this;
    }

    /**
     * Localizes a registered script with data for a JavaScript variable
     *
     * @param  string $handle   The registered script handle you are attaching the data for
     * @param  string $name     The name of the variable which will contain the data
     * @param  array  $data     The data itself
     * @return object           AssetHandler
     * @since 1.0.0
     */
    public function localize(string $handle, string $name, array $data = []): AssetHandler
    {
        if ($handle && $name) {
            $this->assetManager->localize($handle, $name, $data);
        }

        return $this;
    }
}
