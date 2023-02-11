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

use ReflectionObject;
use Symfony\Component\Filesystem\Filesystem;
use ZimbruCode\AppKernel;
use ZimbruCode\Component\Common\Tools;

/**
 * Class : Component/Service : Application
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */
class AppService
{
    protected $app;
    public $fs;

    /**
     * Constructor
     *
     * @param AppKernel $app        Application object
     * @param string    $rootPath   Path to the root directory of the application
     * @param string    $slug       Application slug
     * @since 1.1.0
     */
    public function __construct(AppKernel $app, string $rootPath, string $slug)
    {
        $this->app = $app;
        $this->fs  = new Filesystem;

        $mid = ($id = Tools::getMultiSiteID()) ? "{$id}/" : '';
        $env = "{$this->app->getEnvironment()}/";

        $reflected = new ReflectionObject($app);
        $path      = dirname(wp_normalize_path($reflected->getFileName())) . '/';
        $this->app->addGlobal('app/path', $path);

        $url = Tools::getURL($path) . '/';
        $this->app->addGlobal('app/url', $url);

        // Root
        $rootPath = wp_normalize_path($rootPath);
        $this->app->addGlobal('app/root-file', $rootPath);
        $this->app->addGlobal('app/root-path', dirname($rootPath) . '/');
        $this->app->addGlobal('app/root-url', Tools::getURL(dirname($rootPath)) . '/');

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

        // Var
        if ($this->app->getGlobal('app/var-upload-mode') === true) {
            if ($slug) {
                $uploadDir = wp_get_upload_dir();

                if (isset($uploadDir['error']) && $uploadDir['error'] === false && $uploadDir['basedir'] && $uploadDir['baseurl']) {
                    $varsDirPath = wp_normalize_path("{$uploadDir['basedir']}/{$slug}");
                    $varsDirURL  = esc_url(wp_normalize_path("{$uploadDir['baseurl']}/{$slug}"));

                    $var = $this->app->getGlobal('app/var-dir');
                    $this->app->addGlobal('app/var-path', "{$varsDirPath}/{$mid}");
                    $this->app->addGlobal('app/var-url', "{$varsDirURL}/{$mid}");

                    // Cache
                    $cache = $this->app->getGlobal('app/cache-dir');
                    $this->app->addGlobal('app/cache-path', "{$varsDirPath}/{$mid}{$cache}{$env}");
                    $this->app->addGlobal('app/cache-url', "{$varsDirURL}/{$mid}{$cache}{$env}");

                    // Temp
                    $temp = $this->app->getGlobal('app/temp-dir');
                    $this->app->addGlobal('app/temp-path', "{$varsDirPath}/{$mid}{$temp}");
                    $this->app->addGlobal('app/temp-url', "{$varsDirURL}/{$mid}{$temp}");

                    // Log
                    $log = $this->app->getGlobal('app/log-dir');
                    $this->app->addGlobal('app/log-path', "{$varsDirPath}/{$log}");
                    $this->app->addGlobal('app/log-url', "{$varsDirURL}/{$log}");
                }
            }
        } else {
            $var = $this->app->getGlobal('app/var-dir');
            $this->app->addGlobal('app/var-path', $this->getPath("{$var}{$mid}"));
            $this->app->addGlobal('app/var-url', $this->getURL("{$var}{$mid}"));

            // Cache
            $cache = $this->app->getGlobal('app/cache-dir');
            $this->app->addGlobal('app/cache-path', $this->getPath("{$var}{$mid}{$cache}{$env}"));
            $this->app->addGlobal('app/cache-url', $this->getURL("{$var}{$mid}{$cache}{$env}"));

            // Temp
            $temp = $this->app->getGlobal('app/temp-dir');
            $this->app->addGlobal('app/temp-path', $this->getPath("{$var}{$mid}{$temp}"));
            $this->app->addGlobal('app/temp-url', $this->getURL("{$var}{$mid}{$temp}"));

            // Log
            $log = $this->app->getGlobal('app/log-dir');
            $this->app->addGlobal('app/log-path', $this->getPath("{$var}{$log}"));
            $this->app->addGlobal('app/log-url', $this->getURL("{$var}{$log}"));
        }
    }

    /**
     * Get application name (the class short name)
     *
     * @return string   Application name
     * @since 1.0.0
     */
    public function getName(): string
    {
        return $this->app->getGlobal('app/name');
    }

    /**
     * Get application namespace
     *
     * @return string   Application namespace
     * @since 1.0.0
     */
    public function getNamespace(): string
    {
        $class = get_class($this->app);
        return substr($class, 0, strrpos($class, '\\'));
    }

    /**
     * Get child application namespace
     *
     * @return string   Application namespace
     * @since 1.0.0
     */
    public function getChildNamespace(): string
    {
        return $this->getNamespace() . $this->app->getGlobal('app/child-namespace-suffix');
    }

    /**
     * Get application path
     *
     * @param string $path   Additional part of the path
     * @return string        Application path
     * @since 1.0.0
     */
    public function getPath(string $path = ''): string
    {
        return wp_normalize_path($this->app->getGlobal('app/path') . $path);
    }

    /**
     * Get child application path
     *
     * @param string $path   Additional part of the path
     * @return string        Application path
     * @since 1.0.0
     */
    public function getChildPath(string $path = ''): string
    {
        if (Tools::isChildTheme()) {
            $appDir = str_replace($this->getRootPath(), '', $this->getPath());

            return $this->getChildRootPath("{$appDir}/{$path}");
        }

        return '';
    }

    /**
     * Get application URL
     *
     * @param string $path   Additional part of the path
     * @return string        Application URL
     * @since 1.0.0
     */
    public function getURL(string $url = ''): string
    {
        return esc_url($this->app->getGlobal('app/url') . $url);
    }

    /**
     * Get child application URL
     *
     * @param string $path   Additional part of the path
     * @return string        Application URL
     * @since 1.0.0
     */
    public function getChildURL(string $url = ''): string
    {
        if (Tools::isChildTheme()) {
            $appDir = str_replace($this->getRootURL(), '', $this->getURL());

            return $this->getChildRootURL("{$appDir}/{$url}");
        }

        return '';
    }

    /**
     * Get the path to the root file
     *
     * @return string   Root file path
     * @since 1.0.0
     */
    public function getRootFilePath(): string
    {
        return wp_normalize_path($this->app->getGlobal('app/root-file'));
    }

    /**
     * Get the path to the root directory
     *
     * @param string $path   Additional part of the path
     * @return string        Root directory path
     * @since 1.0.0
     */
    public function getRootPath(string $path = ''): string
    {
        return wp_normalize_path($this->app->getGlobal('app/root-path') . $path);
    }

    /**
     * Get the path to the "child app" root directory
     *
     * @param string $path   Additional part of the path
     * @return string        Root directory path
     * @since 1.0.0
     */
    public function getChildRootPath(string $path = ''): string
    {
        if (Tools::isChildTheme()) {
            return wp_normalize_path(get_stylesheet_directory() . "/{$path}");
        }

        return '';
    }

    /**
     * Get the URL of the root directory
     *
     * @param string $url   Additional part of the URL
     * @return string       Root directory URL
     * @since 1.0.0
     */
    public function getRootURL(string $url = ''): string
    {
        return esc_url(wp_normalize_path($this->app->getGlobal('app/root-url') . $url));
    }

    /**
     * Get the URL of the "child app" root directory
     *
     * @param string $url   Additional part of the URL
     * @return string       Root directory URL
     * @since 1.0.0
     */
    public function getChildRootURL(string $url = ''): string
    {
        if (Tools::isChildTheme()) {
            return esc_url(wp_normalize_path(get_stylesheet_directory_uri() . "/{$url}"));
        }

        return '';
    }

    /**
     * Get the path to the resource directory
     *
     * @param string $path   Additional part of the path
     * @return string        Resource directory path
     * @since 1.0.0
     */
    public function getResourcePath(string $path = ''): string
    {
        return wp_normalize_path($this->app->getGlobal('app/resource-path') . $path);
    }

    /**
     * Get the path to the "child app" resource directory
     *
     * @param string $path   Additional part of the path
     * @return string        Resource directory path
     * @since 1.0.0
     */
    public function getChildResourcePath(string $path = ''): string
    {
        return $this->getChildPath($this->app->getGlobal('app/resource-dir') . $path);
    }

    /**
     * Get the URL of the resource directory
     *
     * @param string $url   Additional part of the URL
     * @return string       Resource directory URL
     * @since 1.0.0
     */
    public function getResourceURL(string $url = ''): string
    {
        return esc_url(wp_normalize_path($this->app->getGlobal('app/resource-url') . $url));
    }

    /**
     * Get the URL of the "child app" resource directory
     *
     * @param string $url   Additional part of the URL
     * @return string       Resource directory URL
     * @since 1.0.0
     */
    public function getChildResourceURL(string $url = ''): string
    {
        return $this->getChildURL($this->app->getGlobal('app/resource-dir') . $url);
    }

    /**
     * Get the path to the var directory
     *
     * @param string $path   Additional part of the path
     * @return string        Var directory path
     * @since 1.0.0
     */
    public function getVarPath(string $path = ''): string
    {
        return wp_normalize_path($this->app->getGlobal('app/var-path') . $path);
    }

    /**
     * Get the URL of the var directory
     *
     * @param string $url   Additional part of the URL
     * @return string       Var directory URL
     * @since 1.0.0
     */
    public function getVarURL(string $url = ''): string
    {
        return esc_url(wp_normalize_path($this->app->getGlobal('app/var-url') . $url));
    }

    /**
     * Remove var directory
     *
     * @return void
     * @since 1.1.0
     */
    public function remVarDir(): void
    {
        $this->fs->remove($this->getVarPath());
    }

    /**
     * Get the path to the cache directory
     *
     * @param string $path   Additional part of the path
     * @return string        Cache directory path
     * @since 1.0.0
     */
    public function getCachePath(string $path = ''): string
    {
        return wp_normalize_path($this->app->getGlobal('app/cache-path') . $path);
    }

    /**
     * Get the URL of the cache directory
     *
     * @param string $url   Additional part of the URL
     * @return string       Cache directory URL
     * @since 1.0.0
     */
    public function getCacheURL(string $url = ''): string
    {
        return esc_url(wp_normalize_path($this->app->getGlobal('app/cache-url') . $url));
    }

    /**
     * Remove cache directory
     *
     * @param bool $full   Delete all directories and files in the cache directory
     * @return void
     * @since 1.1.0
     */
    public function remCacheDir(bool $full = false): void
    {
        if ($full === true) {
            $this->fs->remove(str_replace("{$this->app->getEnvironment()}/", '', $this->getCachePath()));
        } else {
            $this->fs->remove($this->getCachePath());
        }
    }

    /**
     * Get the path of the temp directory
     *
     * @param string $path   Additional part of the path
     * @return string        Temp directory path
     * @since 1.0.0
     */
    public function getTempPath(string $path = ''): string
    {
        return wp_normalize_path($this->app->getGlobal('app/temp-path') . $path);
    }

    /**
     * Get the URL of the temp directory
     *
     * @param string $url   Additional part of the URL
     * @return string       Temp directory URL
     * @since 1.0.0
     */
    public function getTempURL(string $url = ''): string
    {
        return esc_url(wp_normalize_path($this->app->getGlobal('app/temp-url') . $url));
    }

    /**
     * Remove temp directory
     *
     * @return void
     * @since 1.1.0
     */
    public function remTempDir(): void
    {
        $this->fs->remove($this->getTempPath());
    }

    /**
     * Get path to log directory
     *
     * @param string $path   Additional part of the path
     * @return string        Log directory path
     * @since 1.0.0
     */
    public function getLogPath(string $path = ''): string
    {
        return wp_normalize_path($this->app->getGlobal('app/log-path') . $path);
    }

    /**
     * Get the URL of the logs directory
     *
     * @param string $url   Additional part of the URL
     * @return string       Log directory URL
     * @since 1.0.0
     */
    public function getLogURL(string $url = ''): string
    {
        return esc_url(wp_normalize_path($this->app->getGlobal('app/log-url') . $url));
    }

    /**
     * Remove log directory
     *
     * @return void
     * @since 1.1.0
     */
    public function remLogDir(): void
    {
        $this->fs->remove($this->getLogPath());
    }

    /**
     * Get the path to the asset directory
     *
     * @param string $path   Additional part of the path
     * @return string        Asset directory path
     * @since 1.0.0
     */
    public function getAssetPath(string $path = ''): string
    {
        return wp_normalize_path($this->app->getGlobal('app/asset-path') . $path);
    }

    /**
     * Get the path to the "child app" asset directory
     *
     * @param string $path   Additional part of the path
     * @return string        Asset directory path
     * @since 1.0.0
     */
    public function getChildAssetPath(string $path = ''): string
    {
        return $this->getChildPath($this->app->getGlobal('app/asset-dir') . $path);
    }

    /**
     * Get the URL of the asset directory
     *
     * @param string $url   Additional part of the URL
     * @return string       Asset directory URL
     * @since 1.0.0
     */
    public function getAssetURL(string $url = ''): string
    {
        return esc_url(wp_normalize_path($this->app->getGlobal('app/asset-url') . $url));
    }

    /**
     * Get the URL of the "child app" asset directory
     *
     * @param string $url   Additional part of the URL
     * @return string       Asset directory URL
     * @since 1.0.0
     */
    public function getChildAssetURL(string $url = ''): string
    {
        return $this->getChildURL($this->app->getGlobal('app/asset-dir') . $url);
    }

    /**
     * Get the path to the config directory
     *
     * @param string $path   Additional part of the path
     * @return string        Config directory path
     * @since 1.0.0
     */
    public function getConfigPath(string $path = ''): string
    {
        return wp_normalize_path($this->app->getGlobal('app/config-path') . $path);
    }

    /**
     * Get the path to the "child app" config directory
     *
     * @param string $path   Additional part of the path
     * @return string        Config directory path
     * @since 1.0.0
     */
    public function getChildConfigPath(string $path = ''): string
    {
        return $this->getChildPath($this->app->getGlobal('app/config-dir') . $path);
    }

    /**
     * Get the URL of the config directory
     *
     * @param string $url   Additional part of the URL
     * @return string       Config directory URL
     * @since 1.0.0
     */
    public function getConfigURL(string $url = ''): string
    {
        return esc_url(wp_normalize_path($this->app->getGlobal('app/config-url') . $url));
    }

    /**
     * Get the URL of the "child app" config directory
     *
     * @param string $url   Additional part of the URL
     * @return string       Config directory URL
     * @since 1.0.0
     */
    public function getChildConfigURL(string $url = ''): string
    {
        return $this->getChildURL($this->app->getGlobal('app/config-dir') . $url);
    }

    /**
     * Get the path to the model directory
     *
     * @param string $path   Additional part of the path
     * @return string        Model directory path
     * @since 1.0.0
     */
    public function getModelPath(string $path = ''): string
    {
        return wp_normalize_path($this->app->getGlobal('app/model-path') . $path);
    }

    /**
     * Get the path to the "child app" model directory
     *
     * @param string $path   Additional part of the path
     * @return string        Model directory path
     * @since 1.0.0
     */
    public function getChildModelPath(string $path = ''): string
    {
        return $this->getChildPath($this->app->getGlobal('app/model-dir') . $path);
    }

    /**
     * Get the URL to the model directory
     *
     * @param string $url   Additional part of the URL
     * @return string       Model directory URL
     * @since 1.0.0
     */
    public function getModelURL(string $url = ''): string
    {
        return esc_url(wp_normalize_path($this->app->getGlobal('app/model-url') . $url));
    }

    /**
     * Get the URL to the "child app"  model directory
     *
     * @param string $url   Additional part of the URL
     * @return string       Model directory URL
     * @since 1.0.0
     */
    public function getChildModelURL(string $url = ''): string
    {
        return $this->getChildURL($this->app->getGlobal('app/model-dir') . $url);
    }

    /**
     * Get the path to the view directory
     *
     * @param string $path   Additional part of the path
     * @return string        View directory path
     * @since 1.0.0
     */
    public function getViewPath(string $path = ''): string
    {
        return wp_normalize_path($this->app->getGlobal('app/view-path') . $path);
    }

    /**
     * Get the path to the "child app" view directory
     *
     * @param string $path   Additional part of the path
     * @return string        View directory path
     * @since 1.0.0
     */
    public function getChildViewPath(string $path = ''): string
    {
        return $this->getChildPath($this->app->getGlobal('app/view-dir') . $path);
    }

    /**
     * Get the URL of the view directory
     *
     * @param string $url   Additional part of the URL
     * @return string       View directory URL
     * @since 1.0.0
     */
    public function getViewURL(string $url = ''): string
    {
        return esc_url(wp_normalize_path($this->app->getGlobal('app/view-url') . $url));
    }

    /**
     * Get the URL of the "child app" view directory
     *
     * @param string $url   Additional part of the URL
     * @return string       View directory URL
     * @since 1.0.0
     */
    public function getChildViewURL(string $url = ''): string
    {
        return $this->getChildURL($this->app->getGlobal('app/view-dir') . $url);
    }
}
