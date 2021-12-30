<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Service;

use Symfony\Component\Filesystem\Filesystem;
use ZimbruCode\AppKernel;
use ZimbruCode\Component\Common\Tools;

/**
 * Class : Application service
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class AppService
{
    protected $app;
    protected $fs;

    public function __construct(AppKernel $app, string $rootPath, string $slug)
    {
        $this->app = $app;
        $this->fs  = new Filesystem;

        $mid = ($id = Tools::getMultiSiteID()) ? "{$id}/" : '';
        $env = $this->app->getEnvironment() . '/';

        $reflected = new \ReflectionObject($app);
        $path      = dirname(wp_normalize_path($reflected->getFileName())) . '/';
        $this->app->addGlobal('app/path', $path);

        $url = Tools::getURL($path) . '/';
        $this->app->addGlobal('app/url', $url);

        // Root locations
        $rootPath = wp_normalize_path($rootPath);
        $this->app->addGlobal('app/root-file', $rootPath);
        $this->app->addGlobal('app/root-path', dirname($rootPath));
        $this->app->addGlobal('app/root-url', Tools::getURL(dirname($rootPath)));

        // Resource
        $resource = $this->app->getGlobal('app/resource-dir');
        $this->app->addGlobal('app/resource-path', $this->getPath($resource));
        $this->app->addGlobal('app/resource-url', $this->getURL($resource));

        // Asset
        $asset = $this->app->getGlobal('app/asset-dir');
        $this->app->addGlobal('app/asset-path', $this->getPath($asset));
        $this->app->addGlobal('app/asset-url', $this->getURL($asset));

        // Config
        $config = $this->app->getGlobal('app/config-dir');
        $this->app->addGlobal('app/config-path', $this->getPath($config));
        $this->app->addGlobal('app/config-url', $this->getURL($config));

        // Model
        $model = $this->app->getGlobal('app/model-dir');
        $this->app->addGlobal('app/model-path', $this->getPath($model));
        $this->app->addGlobal('app/model-url', $this->getURL($model));

        // View
        $view = $this->app->getGlobal('app/view-dir');
        $this->app->addGlobal('app/view-path', $this->getPath($view));
        $this->app->addGlobal('app/view-url', $this->getURL($view));

        ################################################################################################################

        if ($this->app->getGlobal('app/var-upload-mode') === true) {
            if ($slug) {
                $uploadDir = wp_get_upload_dir();

                if (isset($uploadDir['error']) && $uploadDir['error'] === false && $uploadDir['basedir'] && $uploadDir['baseurl']) {
                    $varsDirPath = wp_normalize_path("{$uploadDir['basedir']}/{$slug}");
                    $varsDirURL  = esc_url("{$uploadDir['baseurl']}/{$slug}");

                    // Var
                    $var = $this->app->getGlobal('app/var-dir');
                    $this->app->addGlobal('app/var-path', "{$varsDirPath}/{$mid}");
                    $this->app->addGlobal('app/var-url', "{$varsDirURL}/{$mid}");

                    // Cache
                    $cache = $this->app->getGlobal('app/cache-dir');
                    $this->app->addGlobal('app/cache-path', "{$varsDirPath}/{$mid}{$cache}{$env}");
                    $this->app->addGlobal('app/cache-url', "{$varsDirURL}/{$mid}{$cache}{$env}");

                    // Temp
                    $temp = $this->app->getGlobal('app/temp-dir');
                    $this->app->addGlobal('app/temp-path', "{$varsDirPath}/{$mid}{$temp}{$env}");
                    $this->app->addGlobal('app/temp-url', "{$varsDirURL}/{$mid}{$temp}{$env}");

                    // Log
                    $log = $this->app->getGlobal('app/log-dir');
                    $this->app->addGlobal('app/log-path', "{$varsDirPath}/{$mid}{$log}");
                    $this->app->addGlobal('app/log-url', "{$varsDirURL}/{$mid}{$log}");
                }
            }
        } else {
            // Var
            $var = $this->app->getGlobal('app/var-dir');
            $this->app->addGlobal('app/var-path', $this->getPath("{$var}{$mid}"));
            $this->app->addGlobal('app/var-url', $this->getURL("{$var}{$mid}"));

            // Cache
            $cache = $this->app->getGlobal('app/cache-dir');
            $this->app->addGlobal('app/cache-path', $this->getPath("{$var}{$mid}{$cache}{$env}"));
            $this->app->addGlobal('app/cache-url', $this->getURL("{$var}{$mid}{$cache}{$env}"));

            // Temp
            $temp = $this->app->getGlobal('app/temp-dir');
            $this->app->addGlobal('app/temp-path', $this->getPath("{$var}{$mid}{$temp}{$env}"));
            $this->app->addGlobal('app/temp-url', $this->getURL("{$var}{$mid}{$temp}{$env}"));

            // Log
            $log = $this->app->getGlobal('app/log-dir');
            $this->app->addGlobal('app/log-path', $this->getPath("{$var}{$mid}{$log}"));
            $this->app->addGlobal('app/log-url', $this->getURL("{$var}{$mid}{$log}"));
        }
    }

    /**
     * Returns the app name (the class short name)
     *
     * @return string   The app name
     * @since 1.0.0
     */
    public function getName(): string
    {
        return $this->app->getGlobal('app/name');
    }

    /**
     * Gets the app namespace
     *
     * @return string   The app namespace
     * @since 1.0.0
     */
    public function getNamespace(): string
    {
        $class = get_class($this->app);
        return substr($class, 0, strrpos($class, '\\'));
    }

    /**
     * Get the app path
     *
     * @return string   App path
     * @since 1.0.0
     */
    public function getPath(string $path = ''): string
    {
        return wp_normalize_path($this->app->getGlobal('app/path') . $path);
    }

    /**
     * Gets the app URL
     *
     * @return string   The app URL
     * @since 1.0.0
     */
    public function getURL(string $url = ''): string
    {
        return esc_url($this->app->getGlobal('app/url') . $url);
    }

    /**
     * Get root file path
     *
     * @return string   Root file path
     * @since 1.0.0
     */
    public function getRootFilePath(): string
    {
        return wp_normalize_path($this->app->getGlobal('app/root-file'));
    }

    /**
     * Get root path
     *
     * @param  string $path   Additional part of path
     * @return string         Root path
     * @since 1.0.0
     */
    public function getRootPath(string $path = ''): string
    {
        return wp_normalize_path($this->app->getGlobal('app/root-path') . $path);
    }

    /**
     * Get root URL
     *
     * @param  string $url   Additional part of URL
     * @return string        Root URL
     * @since 1.0.0
     */
    public function getRootURL(string $url = ''): string
    {
        return esc_url($this->app->getGlobal('app/root-url') . $url);
    }

    /**
     * Get resource path
     *
     * @param  string $path   Additional part of path
     * @return string         Resource path
     * @since 1.0.0
     */
    public function getResourcePath(string $path = ''): string
    {
        return wp_normalize_path($this->app->getGlobal('app/resource-path') . $path);
    }

    /**
     * Get resource URL
     *
     * @param  string $url   Additional part of URL
     * @return string        Resource URL
     * @since 1.0.0
     */
    public function getResourceURL(string $url = ''): string
    {
        return esc_url($this->app->getGlobal('app/resource-url') . $url);
    }

    /**
     * Get var path
     *
     * @param  string $path   Additional part of path
     * @return string         Var path
     * @since 1.0.0
     */
    public function getVarPath(string $path = ''): string
    {
        return wp_normalize_path($this->app->getGlobal('app/var-path') . $path);
    }

    /**
     * Get var URL
     *
     * @param  string $url   Additional part of URL
     * @return string        Var URL
     * @since 1.0.0
     */
    public function getVarURL(string $url = ''): string
    {
        return esc_url($this->app->getGlobal('app/var-url') . $url);
    }

    public function removeVarDir(): void
    {
        $this->fs->remove($this->getVarPath());
    }

    /**
     * Get cache path
     *
     * @param  string $path   Additional part of path
     * @return string         Cache path
     * @since 1.0.0
     */
    public function getCachePath(string $path = ''): string
    {
        return wp_normalize_path($this->app->getGlobal('app/cache-path') . $path);
    }

    /**
     * Get cache URL
     *
     * @param  string $url   Additional part of URL
     * @return string        Cache URL
     * @since 1.0.0
     */
    public function getCacheURL(string $url = ''): string
    {
        return esc_url($this->app->getGlobal('app/cache-url') . $url);
    }

    public function removeCacheDir(): void
    {
        $this->fs->remove($this->getCachePath());
    }

    /**
     * Get temp path
     *
     * @param  string $path   Additional part of path
     * @return string         Temp path
     * @since 1.0.0
     */
    public function getTempPath(string $path = ''): string
    {
        return wp_normalize_path($this->app->getGlobal('app/temp-path') . $path);
    }

    /**
     * Get temp URL
     *
     * @param  string $url   Additional part of URL
     * @return string        Temp URL
     * @since 1.0.0
     */
    public function getTempURL(string $url = ''): string
    {
        return esc_url($this->app->getGlobal('app/temp-url') . $url);
    }

    public function removeTempDir(): void
    {
        $this->fs->remove($this->getTempPath());
    }

    /**
     * Get log path
     *
     * @param  string $path   Additional part of path
     * @return string         Log path
     * @since 1.0.0
     */
    public function getLogPath(string $path = ''): string
    {
        return wp_normalize_path($this->app->getGlobal('app/log-path') . $path);
    }

    /**
     * Get log URL
     *
     * @param  string $url   Additional part of URL
     * @return string        Log URL
     * @since 1.0.0
     */
    public function getLogURL(string $url = ''): string
    {
        return esc_url($this->app->getGlobal('app/log-url') . $url);
    }

    public function removeLogDir(): void
    {
        $this->fs->remove($this->getLogPath());
    }

    /**
     * Get asset path
     *
     * @param  string $path   Additional part of path
     * @return string         Asset path
     * @since 1.0.0
     */
    public function getAssetPath(string $path = ''): string
    {
        return wp_normalize_path($this->app->getGlobal('app/asset-path') . $path);
    }

    /**
     * Get asset URL
     *
     * @param  string $url   Additional part of URL
     * @return string        Asset URL
     * @since 1.0.0
     */
    public function getAssetURL(string $url = ''): string
    {
        return esc_url($this->app->getGlobal('app/asset-url') . $url);
    }

    /**
     * Get config path
     *
     * @param  string $path   Additional part of path
     * @return string         Config path
     * @since 1.0.0
     */
    public function getConfigPath(string $path = ''): string
    {
        return wp_normalize_path($this->app->getGlobal('app/config-path') . $path);
    }

    /**
     * Get config URL
     *
     * @param  string $url   Additional part of URL
     * @return string        Config URL
     * @since 1.0.0
     */
    public function getConfigURL(string $url = ''): string
    {
        return esc_url($this->app->getGlobal('app/config-url') . $url);
    }

    /**
     * Get model path
     *
     * @param  string $path   Additional part of path
     * @return string         Model path
     * @since 1.0.0
     */
    public function getModelPath(string $path = ''): string
    {
        return wp_normalize_path($this->app->getGlobal('app/model-path') . $path);
    }

    /**
     * Get model URL
     *
     * @param  string $url   Additional part of URL
     * @return string        Model URL
     * @since 1.0.0
     */
    public function getModelURL(string $url = ''): string
    {
        return esc_url($this->app->getGlobal('app/model-url') . $url);
    }

    /**
     * Get view path
     *
     * @param  string $path   Additional part of path
     * @return string         View path
     * @since 1.0.0
     */
    public function getViewPath(string $path = ''): string
    {
        return wp_normalize_path($this->app->getGlobal('app/view-path') . $path);
    }

    /**
     * Get view URL
     *
     * @param  string $url   Additional part of URL
     * @return string        View URL
     * @since 1.0.0
     */
    public function getViewURL(string $url = ''): string
    {
        return esc_url($this->app->getGlobal('app/view-url') . $url);
    }
}