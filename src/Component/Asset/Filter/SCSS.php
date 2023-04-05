<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Asset\Filter;

use ZimbruCode\Component\Asset\Library\AssetData;
use ZimbruCode\Component\Asset\Library\Filter;
use ZimbruCode\Component\Asset\Library\ScssCompiler;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Component/Asset/Filter : SCSS
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.2.0
 */
class SCSS extends Filter
{
    protected ScssCompiler $compiler;

    protected string $appPath;
    protected string $rootPath;
    protected string $varPath;

    protected string $searchPoint;
    protected string $externalPoint;

    protected string $fwSP;
    protected string $cacheExt;

    /**
     * Setup
     *
     * @return void
     * @since 1.1.0
     */
    protected function setup(): void
    {
        $this->compiler = new ScssCompiler;

        $env = Kernel::getEnvironment();

        $this->appPath  = Kernel::service('app')->getPath();
        $this->rootPath = Kernel::service('app')->getRootPath();
        $this->varPath  = Kernel::service('app')->getVarPath("assets/{$env}");

        $this->searchPoint   = Kernel::getGlobal('core/component/asset/filter/scss/search-point');
        $this->externalPoint = Kernel::getGlobal('core/component/asset/filter/scss/external-point');

        $this->fwSP     = str_replace('/', '\/', Kernel::getGlobal('core/component/asset/fw-search-point'));
        $this->cacheExt = Kernel::getGlobal('core/component/asset/cache/extension', '.cache');
    }

    /**
     * Each asset
     *
     * @param AssetData $asset   Asset data
     * @return void
     * @since 1.1.0
     */
    protected function each(AssetData $asset): void
    {
        if ($asset->fileType() == 'scss') {
            $output = $this->getOutput($asset);

            $asset->name($asset->generateName());

            $this->compiler->input  = $asset->getPath();
            $this->compiler->output = $output;
            $this->compiler->cache  = str_replace('.scss', $this->cacheExt, $asset->getPath());
            $this->compiler->minify = true;
            $this->compiler->vars   = [];
            $this->compiler->dev    = Kernel::getGlobal('core/component/asset/filter/scss/dev');

            $this->callback('scss-1', $this->collector(), $asset, $this->compiler);

            $vars = $this->collector()->getGlobal('scss-vars');
            if (!empty($vars)) {
                foreach ($vars as $assetName => $assetVars) {
                    $assetName = str_replace('\\', '/', $assetName);

                    if (false !== strpos($asset->name(), $assetName)) {
                        $this->compiler->vars = Tools::arrayMerge($this->compiler->vars, $assetVars);
                        break;
                    }
                }
            }

            // Global vars
            $vars = apply_filters('zc/component/core/asset/filter/scss/vars', Kernel::getGlobalCache('asset/scss/vars'));

            if (!empty($vars)) {
                foreach ($vars as $item) {
                    if (!empty($item['vars'])) {
                        $restriction = $item['restriction'] ?? '';

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
                        } elseif ($restriction === 'not-admin') {
                            if (!is_admin()) {
                                $run = true;
                            }
                        } else {
                            $run = true;
                        }

                        if ($run === true) {
                            $this->compiler->vars = Tools::arrayMerge($this->compiler->vars, $item['vars']);
                        }
                    }
                }
            }

            $this->callback('scss-2', $this->collector(), $this->compiler);

            // Compile
            $this->compiler->compile();

            $newAsset = $this->collector()
                             ->add($this->compiler->output, false)
                             ->get($this->compiler->output);

            $newAsset->addData($asset->getData())
                     ->type('css', true)
                     ->name($newAsset->generateName(), true)
                     ->url(Tools::getURL($this->compiler->output), true)
                     ->version($newAsset->dynamicVersion(), true);

            $this->callback('scss-3', $this->collector(), $newAsset);
            $this->collector()->remove($asset->raw());
        }
    }

    /**
     * Get output path of converted css file
     *
     * @param AssetData $asset   Asset data
     * @return string            Output path
     * @since 1.1.0
     */
    protected function getOutput(AssetData $asset): string
    {
        $output   = '';
        $assetDir = dirname($asset->getPath());

        if (false !== strpos($assetDir, $this->varPath)) {
            $output = $asset->getPath();
        } elseif (false !== strpos($assetDir, $this->appPath)) {
            $output = strtolower(str_replace($this->rootPath, '', $asset->getPath()));
            $output = str_replace($this->searchPoint, '', $output);

            $file = basename($output);
            $dir  = str_replace('/', '.', dirname(ltrim($output, '/')));

            $output = "{$this->varPath}/{$dir}/{$file}";
        } elseif (false !== strpos($assetDir, $this->rootPath) && 0 !== strpos($assetDir, Kernel::service('app')->getChildPath())) {
            preg_match("/{$this->fwSP}(.*)/i", $asset->getPath(), $matches);

            $output = strtolower($matches[1]);
            $output = str_replace($this->searchPoint, '', $output);

            $file = basename($output);
            $dir  = str_replace('/', '.', dirname(ltrim($output, '/')));

            $output = "{$this->varPath}/{$dir}/{$file}";
        } else {
            $output = $this->varPath . $this->externalPoint . basename($assetDir) . '/' . basename($asset->getPath());
        }

        return str_replace('.scss', '.css', $output);
    }
}
