<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Handler;

use ZimbruCode\AppKernel;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Common\Tools;

/**
 * Class : Application locator handler
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class AppLocatorHandler
{
    protected $app;

    public function __construct(AppKernel $app, $rootPath)
    {
        $this->app = $app;

        $mid = ($id = Tools::getMultiSiteID()) ? "{$id}/" : '';
        $env = Kernel::getEnvironment();

        $reflected = new \ReflectionObject($app);
        $path = dirname(wp_normalize_path($reflected->getFileName()));
        Kernel::setGlobal('app/path', $path);

        $url = Tools::getURL($path);
        Kernel::setGlobal('app/url', $url);

        // Root locations
        $rootPath = wp_normalize_path($rootPath);
        Kernel::setGlobal('app/root-file', $rootPath);
        Kernel::setGlobal('app/root-path', dirname($rootPath));
        Kernel::setGlobal('app/root-url', Tools::getURL(dirname($rootPath)));

        // Resource
        $resource = Kernel::getGlobal('app/resource-dir');
        Kernel::setGlobal('app/resource-path', $this->getPath($resource));
        Kernel::setGlobal('app/resource-url', $this->getURL($resource));

        // Var
        $var = Kernel::getGlobal('app/var-dir');
        Kernel::setGlobal('app/var-path', $this->getPath("{$var}{$mid}"));
        Kernel::setGlobal('app/var-url', $this->getURL("{$var}{$mid}"));

        // Cache
        $cache = Kernel::getGlobal('app/cache-dir');
        Kernel::setGlobal('app/cache-path', $this->getPath("{$var}{$mid}{$cache}{$env}"));
        Kernel::setGlobal('app/cache-url', $this->getURL("{$var}{$mid}{$cache}{$env}"));

        // Log
        $log = Kernel::getGlobal('app/log-dir');
        Kernel::setGlobal('app/log-path', $this->getPath("{$var}{$mid}{$log}"));
        Kernel::setGlobal('app/log-url', $this->getURL("{$var}{$mid}{$log}"));

        // Asset
        $asset = Kernel::getGlobal('app/asset-dir');
        Kernel::setGlobal('app/asset-path', $this->getPath($asset));
        Kernel::setGlobal('app/asset-url', $this->getURL($asset));

        // Config
        $config = Kernel::getGlobal('app/config-dir');
        Kernel::setGlobal('app/config-path', $this->getPath($config));
        Kernel::setGlobal('app/config-url', $this->getURL($config));

        // Model
        $model = Kernel::getGlobal('app/model-dir');
        Kernel::setGlobal('app/model-path', $this->getPath($model));
        Kernel::setGlobal('app/model-url', $this->getURL($model));

        // View
        $view = Kernel::getGlobal('app/view-dir');
        Kernel::setGlobal('app/view-path', $this->getPath($view));
        Kernel::setGlobal('app/view-url', $this->getURL($view));
    }

    /**
     * Returns the app name (the class short name)
     * 
     * @return string   The app name
     * @since 1.0.0
     */
    public function getName()
    {
        return Kernel::getGlobal('app/name');
    }

    /**
     * Gets the app namespace
     * 
     * @return string   The app namespace
     * @since 1.0.0
     */
    public function getNamespace()
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
    public function getPath($path = '')
    {
        return wp_normalize_path(Kernel::getGlobal('app/path') . $path);
    }

    /**
     * Gets the app URL
     * 
     * @return string   The app URL
     * @since 1.0.0
     */
    public function getURL($url = '')
    {
        return esc_url(Kernel::getGlobal('app/url') . $url);
    }

    /**
     * Get root file path
     * 
     * @return string   Root file path
     * @since 1.0.0
     */
    public function getRootFilePath()
    {
        return wp_normalize_path(Kernel::getGlobal('app/root-file'));
    }

    /**
     * Get root path
     * 
     * @param  string $path   Additional part of path
     * @return string         Root path
     * @since 1.0.0
     */
    public function getRootPath($path = '')
    {
        return wp_normalize_path(Kernel::getGlobal('app/root-path') . $path);
    }

    /**
     * Get root URL
     * 
     * @param  string $url   Additional part of URL
     * @return string        Root URL
     * @since 1.0.0
     */
    public function getRootURL($url = '')
    {
        return esc_url(Kernel::getGlobal('app/root-url') . $url);
    }

    /**
     * Get resource path
     * 
     * @param  string $path   Additional part of path
     * @return string         Resource path
     * @since 1.0.0
     */
    public function getResourcePath($path = '')
    {
        return wp_normalize_path(Kernel::getGlobal('app/resource-path') . $path);
    }

    /**
     * Get resource URL
     * 
     * @param  string $url   Additional part of URL
     * @return string        Resource URL
     * @since 1.0.0
     */
    public function getResourceURL($url = '')
    {
        return esc_url(Kernel::getGlobal('app/resource-url') . $url);
    }

    /**
     * Get var path
     * 
     * @param  string $path   Additional part of path
     * @return string         Var path
     * @since 1.0.0
     */
    public function getVarPath($path = '')
    {
        return wp_normalize_path(Kernel::getGlobal('app/var-path') . $path);
    }

    /**
     * Get var URL
     * 
     * @param  string $url   Additional part of URL
     * @return string        Var URL
     * @since 1.0.0
     */
    public function getVarURL($url = '')
    {
        return esc_url(Kernel::getGlobal('app/var-url') . $url);
    }

    /**
     * Get cache path
     * 
     * @param  string $path   Additional part of path
     * @return string         Cache path
     * @since 1.0.0
     */
    public function getCachePath($path = '')
    {
        return wp_normalize_path(Kernel::getGlobal('app/cache-path') . $path);
    }

    /**
     * Get cache URL
     * 
     * @param  string $url   Additional part of URL
     * @return string        Cache URL
     * @since 1.0.0
     */
    public function getCacheURL($url = '')
    {
        return esc_url(Kernel::getGlobal('app/cache-url') . $url);
    }

    /**
     * Get log path
     * 
     * @param  string $path   Additional part of path
     * @return string         Log path
     * @since 1.0.0
     */
    public function getLogPath($path = '')
    {
        return wp_normalize_path(Kernel::getGlobal('app/log-path') . $path);
    }

    /**
     * Get log URL
     * 
     * @param  string $url   Additional part of URL
     * @return string        Log URL
     * @since 1.0.0
     */
    public function getLogURL($url = '')
    {
        return esc_url(Kernel::getGlobal('app/log-url') . $url);
    }

    /**
     * Get asset path
     * 
     * @param  string $path   Additional part of path
     * @return string         Asset path
     * @since 1.0.0
     */
    public function getAssetPath($path = '')
    {
        return wp_normalize_path(Kernel::getGlobal('app/asset-path') . $path);
    }

    /**
     * Get asset URL
     * 
     * @param  string $url   Additional part of URL
     * @return string        Asset URL
     * @since 1.0.0
     */
    public function getAssetURL($url = '')
    {
        return esc_url(Kernel::getGlobal('app/asset-url') . $url);
    }

    /**
     * Get config path
     * 
     * @param  string $path   Additional part of path
     * @return string         Config path
     * @since 1.0.0
     */
    public function getConfigPath($path = '')
    {
        return wp_normalize_path(Kernel::getGlobal('app/config-path') . $path);
    }

    /**
     * Get config URL
     * 
     * @param  string $url   Additional part of URL
     * @return string        Config URL
     * @since 1.0.0
     */
    public function getConfigURL($url = '')
    {
        return esc_url(Kernel::getGlobal('app/config-url') . $url);
    }

    /**
     * Get model path
     * 
     * @param  string $path   Additional part of path
     * @return string         Model path
     * @since 1.0.0
     */
    public function getModelPath($path = '')
    {
        return wp_normalize_path(Kernel::getGlobal('app/model-path') . $path);
    }

    /**
     * Get model URL
     * 
     * @param  string $url   Additional part of URL
     * @return string        Model URL
     * @since 1.0.0
     */
    public function getModelURL($url = '')
    {
        return esc_url(Kernel::getGlobal('app/model-url') . $url);
    }

    /**
     * Get view path
     * 
     * @param  string $path   Additional part of path
     * @return string         View path
     * @since 1.0.0
     */
    public function getViewPath($path = '')
    {
        return wp_normalize_path(Kernel::getGlobal('app/view-path') . $path);
    }

    /**
     * Get view URL
     * 
     * @param  string $url   Additional part of URL
     * @return string        View URL
     * @since 1.0.0
     */
    public function getViewURL($url = '')
    {
        return esc_url(Kernel::getGlobal('app/view-url') . $url);
    }
}
