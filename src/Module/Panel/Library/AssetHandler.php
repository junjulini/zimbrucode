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
    protected $scssData   = [
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
        $path        = "{$this->module->getModulePath()}{$resourceDir}/assets/scss";
        $url         = "{$this->module->getModuleURL()}{$resourceDir}/assets/scss";

        $this->addScssDir($path, $url);
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
     * Add scss file
     *
     * @param  string $file   File path
     * @return AssetHandler
     * @since 1.0.0
     */
    public function addScssFile(string $file): AssetHandler
    {
        if ($file && file_exists($file)) {
            $this->scssData['files'][] = $file;
        }

        return $this;
    }

    /**
     * Add scss dir
     *
     * @param  string $dir   Dir path
     * @return AssetHandler
     * @since 1.0.0
     */
    public function addScssDir(string $dir): AssetHandler
    {
        if ($dir && file_exists($dir)) {
            $this->scssData['dirs'][] = $dir;
        }

        return $this;
    }

    /**
     * Add scss function
     *
     * @param  string   $name     Name of function
     * @param  callable $method   Function
     * @return AssetHandler
     * @since 1.0.0
     */
    public function addScssFunction(string $name, callable $method): AssetHandler
    {
        if ($name) {
            $this->scssData['functions'][] = [
                'name'   => $name,
                'method' => $method,
            ];
        }

        return $this;
    }

    /**
     * Add scss var
     *
     * @param  string $slug
     * @param  mix    $value
     * @return AssetHandler
     * @since 1.0.0
     */
    public function addScssVar(string $slug, $value = ''): AssetHandler
    {
        if ($slug) {
            $this->scssData['vars'][$slug] = $value;
        }

        return $this;
    }

    /**
     * Add scss vars
     *
     * @param array $vars   Pool of vars for SCSS
     * @return AssetHandler
     * @since 1.0.0
     */
    public function addScssVars(array $vars): AssetHandler
    {
        if ($vars) {
            $this->scssData['vars'] = $vars;
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

        $callbackForScssRender = function (string $type = '', object $collector = null, object $scss = null): void {
            if (isset($type)) {
                if ($type == 'scss-2') {
                    if (!empty($this->scssData['files'])) {
                        foreach ($this->scssData['files'] as $file) {
                            $scss->addFile($file);
                        }
                    }

                    if (!empty($this->scssData['dirs'])) {
                        foreach ($this->scssData['dirs'] as $dir) {
                            $scss->addDir($dir);
                        }
                    }

                    if (!empty($this->scssData['functions'])) {
                        foreach ($this->scssData['functions'] as $functionData) {
                            $scss->addFunction($functionData['name'], $functionData['method']);
                        }
                    }

                    if (!empty($this->scssData['vars'])) {
                        foreach ($this->scssData['vars'] as $slug => $var) {
                            $scss->vars[$slug] = $var;
                        }
                    }

                    $env        = Kernel::getEnvironment();
                    $outputFile = basename($scss->output);
                    $panelMode  = strtolower($this->module->getModuleSetting('mode', 'page'));
                    $panelSlug  = strtolower($this->module->getModuleSetting('slug', 'undefined'));

                    $scss->output = Kernel::service('app-locator')->getVarPath("assets/{$env}/module.panel.{$panelMode}.{$panelSlug}/{$outputFile}");

                    $info        = new \SplFileInfo($scss->output);
                    $scss->cache = "{$info->getPath()}/{$info->getBasename('.' . $info->getExtension())}.cache";
                }
            }
        };

        foreach ($this->assets as $asset) {
            if ((new \SplFileInfo($asset))->getExtension() == 'scss') {
                $this->assetManager->addCallback($asset, $callbackForScssRender);
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
