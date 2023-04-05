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

use MatthiasMullie\Minify\CSS as MinifyCSS;
use MatthiasMullie\Minify\JS as MinifyJS;
use ZimbruCode\Component\Asset\Library\AssetCache;
use ZimbruCode\Component\Asset\Library\CssConvertor;
use ZimbruCode\Component\Asset\Library\Filter;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Component/Asset/Filter : Combine
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.2.0
 */
class Combine extends Filter
{
    protected array $data = [
        'assets'   => [
            'js'  => [],
            'css' => [],
        ],
        'settings' => [],
    ];

    protected string $varPath;
    protected string $cacheExt;
    protected AssetCache $cache;

    /**
     * Setup
     *
     * @return void
     * @since 1.1.0
     */
    protected function setup(): void
    {
        $env = Kernel::getEnvironment();

        $this->data['settings'] = Kernel::getGlobal('core/component/asset/filter/combine');
        $this->varPath          = Kernel::service('app')->getVarPath("assets/{$env}");
        $this->cacheExt         = Kernel::getGlobal('core/component/asset/cache/extension', '.cache');

        foreach ($this->collector()->get() as $asset) {
            if ($asset->type() == 'css' && Tools::isLocalURL($asset->url())) {
                $this->data['assets']['css'][] = $asset;
                $this->collector()->remove($asset->raw());
            } elseif ($asset->type() == 'js' && Tools::isLocalURL($asset->url())) {
                $this->data['assets']['js'][] = $asset;
                $this->collector()->remove($asset->raw());
            }
        }

        $data = $this->callback($this->collector(), $this->data);
        if (!empty($data)) {
            $this->data = $data;
        }

        if (!empty($this->data['assets']['css'])) {
            $this->prepCSSAssets();
        }

        if (!empty($this->data['assets']['js'])) {
            $this->prepJavaScriptAssets();
        }
    }

    /**
     * CSS asset preparation
     *
     * @return void
     * @since 1.1.0
     */
    protected function prepCSSAssets(): void
    {
        $output      = "{$this->varPath}/{$this->data['settings']['css']['output-name']}.css";
        $minify      = $this->data['settings']['css']['minify'];
        $convert     = $this->data['settings']['css']['convert'];
        $convertMode = $this->data['settings']['css']['convert-mode-relative-path'];

        $this->cache     = new AssetCache;
        $executeLocation = $this->cache->addExecuteLocation(__CLASS__);

        $this->cache->addPath($output . $this->cacheExt);

        // Callback : Check the output file if it exists
        $this->cache->addCheckFunction(function (array $args) use ($executeLocation, $output): bool {
            if (!file_exists($output)) {
                if (Kernel::dev()) {
                    Kernel::dev()->addWarningMessage("Asset - {$executeLocation}/Cache : Additional checking functions : {$output}  : file output not found.");
                }

                return true;
            }

            return false;
        });

        foreach ($this->data['assets']['css'] as $asset) {
            $this->cache->addAsset($asset->getPath());
        }

        // DEV
        if (Kernel::dev()) {
            Kernel::dev()->addLogMessage("Asset - {$executeLocation}", [
                'cache-content' => ($this->cache->has() ? $this->cache->get() : '?'),
            ]);
        }

        if ($this->cache->check()) {
            $this->cache->build();

            $outputContent = '';

            foreach ($this->data['assets']['css'] as $n => $asset) {
                $content = file_get_contents($asset->getPath());

                if (!$content) {
                    continue;
                }

                if ($minify) {
                    $minifier = new MinifyCSS;
                    $minifier->add($content);

                    $content = $minifier->minify();
                }

                if ($convert) {
                    $convertor = new CssConvertor;
                    $convertor->addAsset($asset->getPath());
                    $convertor->addOutput($output);
                    $convertor->add($content);

                    $content = $convertor->convertPathToRelativeOrURL($convertMode);
                }

                $data = [
                    'between' => (0 != $n ? "\n\n\n" : ''),
                    'comment' => "/*\n* {$asset->name()} : v{$asset->dynamicVersion()}\n*/\n\n",
                    'content' => $content,
                ];

                $outputContent .= $data['between'] . $data['comment'] . $data['content'];
            }

            Tools::fWrite($output, $outputContent);
        }

        $asset = $this->collector()->add($output)->get($output);
        $asset->type('css')
              ->name($asset->generateName())
              ->url($asset->getURL())
              ->version($asset->dynamicVersion());
    }

    /**
     * Preparing JavaScript assets
     *
     * @return void
     * @since 1.1.0
     */
    protected function prepJavaScriptAssets(): void
    {
        $suffix = ($this->data['settings']['js']['minify']) ? '.min.js' : '.js';
        $output = $this->varPath . '/' . $this->data['settings']['js']['output-name'] . $suffix;
        $minify = $this->data['settings']['js']['minify'];

        $this->cache     = new AssetCache;
        $executeLocation = $this->cache->addExecuteLocation(__CLASS__);

        $this->cache->addPath($output . $this->cacheExt);

        // Callback : Check the output file if it exists
        $this->cache->addCheckFunction(function (array $args) use ($executeLocation, $output): bool {
            if (!file_exists($output)) {
                if (Kernel::dev()) {
                    Kernel::dev()->addWarningMessage("Asset - {$executeLocation}/Cache : Additional checking functions : {$output}  : file output not found.");
                }

                return true;
            }

            return false;
        });

        foreach ($this->data['assets']['js'] as $asset) {
            $this->cache->addAsset($asset->getPath());
        }

        // DEV
        if (Kernel::dev()) {
            Kernel::dev()->addLogMessage("Asset - {$executeLocation}", [
                'cache-content' => ($this->cache->has() ? $this->cache->get() : '?'),
            ]);
        }

        if ($this->cache->check()) {
            $this->cache->build();

            $outputContent = '';

            foreach ($this->data['assets']['js'] as $n => $asset) {
                $content = file_get_contents($asset->getPath());

                if (!$content) {
                    continue;
                }

                if ($minify) {
                    $minifier = new MinifyJS;
                    $minifier->add($content);
                    $content = $minifier->minify();
                }

                $data = [
                    'between' => (0 != $n ? "\n\n\n" : ''),
                    'comment' => "/*\n* {$asset->name()} : v{$asset->dynamicVersion()}\n*/\n\n",
                    'content' => $content,
                ];

                $outputContent .= $data['between'] . $data['comment'] . $data['content'];
            }

            Tools::fWrite($output, $outputContent);
        }

        $asset = $this->collector()->add($output)->get($output);
        $asset->type('js')
              ->name($asset->generateName())
              ->url($asset->getURL())
              ->version($asset->dynamicVersion())
              ->footer(true);
    }
}
