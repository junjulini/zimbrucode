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
        $this->module = $module;
        $this->assetManager = new AssetManager(true, $this->module->getModulePath());

        $resourceDir = Kernel::getGlobal('core/component/core/module/resource-dir');
        $path = "{$this->module->getModulePath()}{$resourceDir}/assets/less";
        $url  = "{$this->module->getModuleURL()}{$resourceDir}/assets/less";

        $this->setLessDir($path, $url);
    }

    /**
     * Set assets
     * 
     * @param array/string $assets   Assets data
     * @since 1.0.0
     */
    public function set($assets)
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
     * Set asset : last queue
     * 
     * @param  string $path   Asset path
     * @return object         AssetHandler
     * @since 1.0.0
     */
    public function setLast($path = '')
    {
        if ($path && is_string($path)) {
            $this->lastAssets[] = $path;
        }

        return $this;
    }

    /**
     * Set less file
     * 
     * @param  string $file   File path
     * @return object         AssetHandler
     * @since 1.0.0
     */
    public function setLessFile($file)
    {
        if ($file && is_string($file) && file_exists($file)) {
            $this->lessData['files'][] = $file;
        }

        return $this;
    }

    /**
     * Set less dir
     * 
     * @param  string $dir   Dir path
     * @param  string $url   Dir url
     * @return object        AssetHandler
     * @since 1.0.0
     */
    public function setLessDir($dir, $url = '')
    {
        if ($dir && is_string($dir) && file_exists($dir)) {
            $this->lessData['dirs'][] = [
                'dir' => $dir,
                'url' => $url,
            ];
        }

        return $this;
    }

    /**
     * Set less function
     * 
     * @param  string   $name     Name of function
     * @param  callable $method   Function
     * @return object             AssetHandler
     * @since 1.0.0
     */
    public function setLessFunction($name, callable $method)
    {
        if ($name && is_string($name)) {
            $this->lessData['functions'][] = [
                'name'   => $name,
                'method' => $method,
            ];
        }

        return $this;
    }

    /**
     * Set less var
     * 
     * @param  string $slug
     * @param  mix    $value
     * @return object   AssetHandler
     * @since 1.0.0
     */
    public function setLessVar($slug, $value = '')
    {
        if ($slug && is_string($slug)) {
            $this->lessData['vars'][$slug] = $value;
        }

        return $this;
    }

    /**
     * Set less vars
     * 
     * @param array $vars   Pool of vars for LESS
     * @return object       AssetHandler
     * @since 1.0.0
     */
    public function setLessVars(array $vars)
    {
        if ($vars) {
            $this->lessData['vars'] = $vars;
        }

        return $this;
    }

    /**
     * Enroll assets
     * 
     * @return object   AssetHandler
     * @since 1.0.0
     */
    public function enroll()
    {
        if (!empty($this->lastAssets)) {
            foreach ($this->lastAssets as $lastAsset) {
                $this->assets[] = $lastAsset;
            }
        }

        $callbackForLessRender = function ($type = '', $collector, $less) {
            if (isset($type)) {
                if ($type == 'less-2') {
                    if (!empty($this->lessData['files'])) {
                        foreach ($this->lessData['files'] as $file) {
                            $less->setFile($file);
                        }
                    }

                    if (!empty($this->lessData['dirs'])) {
                        foreach ($this->lessData['dirs'] as $dirData) {
                            $less->addDir($dirData['dir'], $dirData['url']);
                        }
                    }

                    if (!empty($this->lessData['functions'])) {
                        foreach ($this->lessData['functions'] as $functionData) {
                            $less->setFunction($functionData['name'], $functionData['method']);
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
                    $output = Kernel::service('app-locator')->getVarPath("/assets/{$env}/{$path}");

                    $less->cache  = $cache;
                    $less->output = $output;
                }
            }
        };

        foreach ($this->assets as $asset) {
            if ((new \SplFileInfo($asset))->getExtension() == 'less') {
                $this->assetManager->setCallback($asset, $callbackForLessRender);
            }
        }

        $this->assetManager->set($this->assets)
             ->enroll('Panel - ' . ucfirst($this->module->getModuleSetting('slug')));

        return $this;
    }

    /**
     * Dump assets
     * 
     * @return object   AssetHandler
     * @since 1.0.0
     */
    public function dump()
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
    public function localize($handle, $name, array $data = [])
    {
        if ($handle && is_string($handle) && $name && is_string($name)) {
            $this->assetManager->localize($handle, $name, $data);
        }

        return $this;
    }
}
