<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\Panel\Library;

use SplFileInfo;
use ZimbruCode\Component\Asset\AssetManager;
use ZimbruCode\Component\Asset\Library\AssetDataCollector;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Core\ModuleKernel;

/**
 * Class : Module/Panel/Library : Asset handler
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
class AssetHandler
{
    protected array $assets     = [];
    protected array $lastAssets = [];
    protected array $scssData   = [
        'files' => [],
        'dirs'  => [],
        'vars'  => [],
    ];

    protected readonly ModuleKernel $module;
    protected readonly AssetManager $assetManager;

    /**
     * Constructor
     *
     * @param ModuleKernel $module   Module object
     * @since 1.1.0
     */
    public function __construct(ModuleKernel $module)
    {
        $this->module       = $module;
        $this->assetManager = new AssetManager(true, $this->module->getModulePath());

        $resourceDir = Kernel::getGlobal('core/component/core/module/resource-dir');
        $path        = "{$this->module->getModulePath()}{$resourceDir}/assets/scss";

        $this->addScssDir($path);
    }

    /**
     * Add assets
     *
     * @param mixed $assets   List of assets
     * @return AssetHandler
     * @since 1.3.0
     */
    public function add(mixed $assets): self
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
     * @param string $path   Asset path
     * @return AssetHandler
     * @since 1.0.0
     */
    public function addLast(string $path = ''): self
    {
        if ($path) {
            $this->lastAssets[] = $path;
        }

        return $this;
    }

    /**
     * Add scss file
     *
     * @param string $file   Path to the Scss file
     * @return AssetHandler
     * @since 1.0.0
     */
    public function addScssFile(string $file): self
    {
        if ($file && file_exists($file)) {
            $this->scssData['files'][] = $file;
        }

        return $this;
    }

    /**
     * Add scss directory
     *
     * @param string $dir   Directory path
     * @return AssetHandler
     * @since 1.0.0
     */
    public function addScssDir(string $dir): self
    {
        if ($dir && file_exists($dir)) {
            $this->scssData['dirs'][] = $dir;
        }

        return $this;
    }

    /**
     * Add scss variable
     *
     * @param string $name    Variable name
     * @param mixed  $value   Variable value
     * @return AssetHandler
     * @since 1.3.0
     */
    public function addScssVar(string $name, mixed $value = ''): self
    {
        if ($name) {
            $this->scssData['vars'][$name] = $value;
        }

        return $this;
    }

    /**
     * Add scss variables
     *
     * @param array $vars   Variable list
     * @return AssetHandler
     * @since 1.0.0
     */
    public function addScssVars(array $vars): self
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
     * @since 1.1.0
     */
    public function enroll(): self
    {
        if (!empty($this->lastAssets)) {
            foreach ($this->lastAssets as $lastAsset) {
                $this->assets[] = $lastAsset;
            }
        }

        $callbackForScssRender = function (string $type = '', AssetDataCollector $collector = null, $scss = null): void {
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

                    if (!empty($this->scssData['vars'])) {
                        foreach ($this->scssData['vars'] as $slug => $var) {
                            $scss->vars[$slug] = $var;
                        }
                    }

                    $env        = Kernel::getEnvironment();
                    $outputFile = basename($scss->output);
                    $panelMode  = strtolower($this->module->getModuleSetting('mode', 'page'));
                    $panelSlug  = strtolower($this->module->getModuleSetting('slug', 'undefined'));

                    $scss->output = Kernel::service('app')->getVarPath("assets/{$env}/module.panel.{$panelMode}.{$panelSlug}/{$outputFile}");

                    $info        = new SplFileInfo($scss->output);
                    $scss->cache = "{$info->getPath()}/{$info->getBasename('.' . $info->getExtension())}.cache";
                }
            }
        };

        foreach ($this->assets as $asset) {
            if ((new SplFileInfo($asset))->getExtension() == 'scss') {
                $this->assetManager->addCallback($asset, $callbackForScssRender);
            }
        }

        $this->assetManager->addAssets($this->assets)->enroll('Panel - ' . ucfirst($this->module->getModuleSetting('slug')));

        return $this;
    }

    /**
     * Dump of assets
     *
     * @return AssetHandler
     * @since 1.0.0
     */
    public function dump(): self
    {
        $this->assetManager->dump();
        return $this;
    }

    /**
     * Localizes a registered script with data for a JavaScript variable
     *
     * @param string $handle   The registered script handle you are attaching the data for
     * @param string $name     The name of the variable which will contain the data
     * @param array  $data     The data itself
     * @return AssetHandler
     * @since 1.0.0
     */
    public function localize(string $handle, string $name, array $data = []): self
    {
        if ($handle && $name) {
            $this->assetManager->localize($handle, $name, $data);
        }

        return $this;
    }
}
