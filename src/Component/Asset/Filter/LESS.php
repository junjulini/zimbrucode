<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Asset\Filter;

use ZimbruCode\Component\Asset\Library\Filter;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Asset\Library\LessRender;
use ZimbruCode\Component\Asset\Library\LessDefaultFunctions;

/**
 * Class : Filter - LESS
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class LESS extends Filter
{
    protected $less;

    protected $rootPath;
    protected $loadPath;
    protected $varPath;

    protected $searchPoint;
    protected $externalPoint;

    protected $fwSP;
    protected $cacheExt;

    /**
     * Setup filter
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    protected function setup()
    {
        $this->less = new LessRender;
        $this->less->setFunctions(new LessDefaultFunctions);

        $env = Kernel::getEnvironment();

        $this->rootPath = Kernel::service('app-locator')->getPath();
        $this->loadPath = Kernel::service('app-locator')->getLoadPath();
        $this->varPath  = Kernel::service('app-locator')->getVarPath("/assets/{$env}");

        $this->searchPoint   = Kernel::getGlobal('core/component/asset/filter/less/search-point');
        $this->externalPoint = Kernel::getGlobal('core/component/asset/filter/less/external-point');

        $this->fwSP = str_replace('/', '\/', Kernel::getGlobal('core/component/asset/fw-search-point'));
        $this->cacheExt = Kernel::getGlobal('core/component/asset/cache/extension', '.cache');
    }

    /**
     * Each asset
     * 
     * @param  AssetData $asset   Asset data
     * @return void               This function does not return a value
     * @since 1.0.0
     */
    protected function each($asset)
    {
        if ($asset->info()->getExtension() == 'less') {
            $output = $this->getOutput($asset);

            $asset->name($asset->generateName());

            $this->less->input    = $asset->getPath();
            $this->less->output   = $output;
            $this->less->cache    = str_replace('.less', $this->cacheExt, $asset->getPath());
            $this->less->inputURL = dirname($asset->getURL());
            $this->less->minify   = true;
            $this->less->vars     = [];
            $this->less->dev      = Kernel::getGlobal('core/component/asset/filter/less/dev');

            $this->callback('less-1', $this->collector(), $asset, $this->less);

            $vars = $this->collector()->getGlobal('less-vars');
            if (!empty($vars)) {
                foreach ($vars as $assetName => $assetVars) {
                    $assetName = str_replace('\\', '/', $assetName);

                    if (false !== strpos($asset->name(), $assetName)) {
                        $this->less->vars = Tools::arrayMerge($this->less->vars, $assetVars);
                        break;
                    }
                }
            }

            // Global vars
            $vars = Kernel::getGlobalCache('asset/less/vars');
            if (!empty($vars)) {
                foreach ($vars as $item) {
                    if (!empty($item['vars'])) {
                        $restriction = (isset($item['restriction'])) ? $item['restriction'] : '';

                        if (!empty($item['asset-name']) && is_string($item['asset-name'])) {
                            $assetName = str_replace('\\', '/', $item['asset-name']);

                            if (false === strpos($asset->name(), $assetName)) {
                                continue;
                            }
                        }

                        $run = false;
    
                        if ($restriction === 'admin') {
                            if (is_admin()) {
                                $run = true;
                            }
                        } elseif ($restriction === 'app') {
                            if (!is_admin()) {
                                $run = true;
                            }
                        } else {
                            $run = true;
                        }

                        if ($run === true) {
                            $this->less->vars = Tools::arrayMerge($this->less->vars, $item['vars']);
                        }
                    }
                }
            }

            $this->callback('less-2', $this->collector(), $this->less);

            // Render sources
            $this->less->render();

            $newAsset = $this->collector()->set($this->less->output, false)
                                          ->get($this->less->output);

            $newAsset->name($newAsset->generateName())
                     ->url(Tools::getURL($this->less->output))
                     ->type('css')
                     ->setArgs($asset->getArgs());

            if (!empty($this->less->assetCache->get())) {
                $versionPart = (integer) (substr(hexdec(md5(json_encode($this->less->assetCache->get()))), 0, 9) * 100000000);
                $version = Kernel::getGlobal('app/version') . '.' . $versionPart;

                $newAsset->version($version);
            }

            $this->callback('less-3', $this->collector(), $newAsset);
            $this->collector()->remove($asset->raw());
        }
    }

    /**
     * Get output path of converted css file
     * 
     * @param  AssetData $asset   Asset data
     * @return string             Output path
     * @since 1.0.0
     */
    protected function getOutput($asset)
    {
        $assetDir = dirname($asset->getPath());

        if (false !== strpos($assetDir, $this->varPath)) {
            $output = $asset->getPath();
        } elseif (false !== strpos($assetDir, $this->rootPath)) {
            $output = strtolower(str_replace($this->loadPath, '', $asset->getPath()));
            $output = str_replace($this->searchPoint, '', $output);

            $file = basename($output);
            $dir  = str_replace('/', '.', dirname(ltrim($output, '/')));

            $output = "{$this->varPath}/{$dir}/{$file}";
        } elseif (false !== strpos($assetDir, $this->loadPath)) {
            preg_match("/{$this->fwSP}(.*)/i", $asset->getPath(), $output);

            $output = strtolower($output[1]);
            $output = str_replace($this->searchPoint, '', $output);

            $file = basename($output);
            $dir  = str_replace('/', '.', dirname(ltrim($output, '/')));

            $output = "{$this->varPath}/{$dir}/{$file}";
        } else {
            $output = $this->varPath . $this->externalPoint . basename($assetDir) . '/' . basename($asset->getPath());
        }

        return str_replace('.less', '.css', $output);
    }
}
