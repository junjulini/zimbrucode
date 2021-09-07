<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode;

use Composer\Autoload\ClassLoader;
use ZimbruCode\Component\Common\FastCache;
use ZimbruCode\Component\Core\GlobalConfig;
use ZimbruCode\Component\Core\GlobalLibrary;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Core\Traits\AssetTrait;
use ZimbruCode\Component\Handler\AppLocatorHandler;
use ZimbruCode\Component\Handler\DBHandler;

/**
 * Class : Application Kernel
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.1
 */
abstract class AppKernel extends Kernel
{
    use AssetTrait;

    /**
     * Initialization new app
     *
     * @param  string      $slug           Slug name of global var
     * @param  string      $mode           Mode of app ( theme / plugin )
     * @param  bool        $dev            Dev environment
     * @param  string      $rootPath       ( Only for plugin mode ) plugin file path
     * @param  bool        $session        Disable or enable "session_start()"
     * @param  ClassLoader $composer       Instance of ClassLoader
     * @return void                        This function does not return a value
     * @since 1.0.0
     */
    final public function __construct(string $slug, string $mode = 'theme', bool $dev = false, string $rootPath = '', bool $session = false, ClassLoader $composer = null)
    {
        // Checking doubling of application
        $this->__checkAppDuplicate($slug);

        // Session start
        $this->__initSession($session);

        // Initialization of global configs
        new GlobalConfig;

        // Set DEV environment
        $this->__setEnvironment($dev);

        // Initialization of global library
        new GlobalLibrary;

        // Application instance
        self::addGlobalCache('app-instance', $this);

        // Initialization of services [mode : before]
        $this->__initServices('before', $composer, $rootPath, $slug);

        // Application configs
        $this->__appConfig($mode);

        // Initialization of services [mode : after]
        $this->__initServices('after');

        // Set modules namespace
        self::module()->addNamespace($this->getNamespace() . '\\' . self::getGlobal('app/module-namespace-dir'));

        // Run setup
        $this->setup();

        // Load modules from config file
        $this->__loadModules();

        // Run theme adaptor
        $this->__initThemeAdaptor();

        // Callback after load all modules
        $this->__callbackAfter();

        // Load textdomain
        $this->addAction('init', function (): void {
            load_theme_textdomain('zc', __DIR__ . '/Resources/languages');
        });
    }

    /**
     * Checking doubling of application
     *
     * @param string $slug   Slug (GVS)
     * @return void          This function does not return a value
     * @since 1.0.0
     */
    private function __checkAppDuplicate(string $slug): void
    {
        $appClass = str_replace('\\', '-', get_class($this));
        if (!self::getGlobal("@/app-class/{$appClass}")) {
            self::addGlobal("@/app-class/{$appClass}", true);

            // Set global var slug (GVS)
            self::addGlobalVarSlug($slug);
        } else {
            throw new \RuntimeException("AppKernel - Doubling of application : {$appClass}");
        }
    }

    /**
     * Init session
     *
     * @param bool $session   Enable/Disable session
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    private function __initSession(bool $session): void
    {
        if (session_status() == PHP_SESSION_NONE && $session === true) {
            session_start();
        }
    }

    /**
     * Initialization of global configs and global library
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    private function __initGlobalConfigAndLibrary(): void
    {
        new GlobalConfig;  // Set global configs
        new GlobalLibrary; // Set global library
    }

    /**
     * Set environment
     *
     * @param bool $dev   True/False if Dev environment
     * @return void       This function does not return a value
     * @since 1.0.0
     */
    private function __setEnvironment(bool $dev): void
    {
        $environment = ($dev === true) ? 'dev' : 'prod';

        self::addGlobal('core/dev', $dev);
        self::addGlobal('core/dev-config/environment', $environment);
    }

    /**
     * Init services
     *
     * @param string      $mode       Mode of loading services
     * @param ClassLoader $composer   Instance of Composer ClassLoader
     * @param string      $rootPath   File path where was initialized app class
     * @return void                   This function does not return a value
     * @since 1.0.0
     */
    private function __initServices(string $mode = 'before', ClassLoader $composer = null, string $rootPath = null, string $slug = ''): void
    {
        if ($mode === 'before') {
            self::service('composer', $composer);
            self::service('app-locator', new AppLocatorHandler($this, $rootPath, $slug));
        } elseif ($mode === 'after') {
            self::service('db', new DBHandler);
            self::service('fast-cache', new FastCache);
        }
    }

    /**
     * Set app mode
     *
     * @param string  $mode    App mode
     * @param bool    $check   Check if mode is different
     * @return void            This function does not return a value
     * @since 1.0.0
     */
    private function __setMode(string $mode, bool $check = false): void
    {
        if ($check === false) {
            if (in_array($mode, self::getGlobal('app/modes'))) {
                self::addGlobal('app/mode', $mode);
            } else {
                throw new \RuntimeException("AppKernel - Mode is not compatible : {$mode}");
            }
        } else {
            if (self::getGlobal('app/mode') !== $mode) {
                if (in_array($mode, self::getGlobal('app/modes'))) {
                    self::addGlobal('app/mode', $mode);
                } else {
                    throw new \RuntimeException("AppKernel - Mode is not compatible : {$mode}");
                }
            }
        }
    }

    /**
     * Init app configs
     *
     * @param string $mode   App mode
     * @return void          This function does not return a value
     * @since 1.0.0
     */
    private function __appConfig(string $mode): void
    {
        $this->__setMode($mode);
        $this->__defaultAppConfig();
        $this->__customAppConfig();
        $this->__setMode($mode, true);
    }

    /**
     * Merge custom app config with global config and init config method
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    private function __customAppConfig(): void
    {
        // Load custom 'App' config file
        if (file_exists($file = self::service('app-locator')->getConfigPath('app.php'))) {
            if (is_array($config = require $file)) {
                self::addGlobal('app', array_replace_recursive(self::getGlobal('app'), $config));
            }
        }

        // Load custom 'Core' config file
        if (file_exists($file = self::service('app-locator')->getConfigPath('core.php'))) {
            if (is_array($config = require $file)) {
                self::addGlobal('core', array_replace_recursive(self::getGlobal('core'), $config));
            }
        }

        // Set app configs
        if (method_exists($this, 'config')) {
            $this->config();
        }
    }

    /**
     * Set default app configs
     *
     * @return void   This function does not return a value
     * @since 1.0.1
     */
    private function __defaultAppConfig(): void
    {
        // Theme mode
        if (self::getGlobal('app/mode') === 'theme') {
            $pref = self::getGlobal('core/slug');

            $td = wp_get_theme();

            if ($td->parent()) {
                $td = $td->parent();
            }

            // Theme details
            self::addGlobalCache('theme-details', $td);

            // Theme name
            self::addGlobal('app/name', $td->get('Name'));

            // Theme slug
            self::addGlobal('app/slug', $pref . '_' . str_replace(['-', ' '], '_', strtolower($td->get('Name'))));

            // Theme version
            self::addGlobal('app/version', $td->get('Version'));

            // Plugin mode
        } elseif (self::getGlobal('app/mode') === 'plugin') {

            // Plugin name
            $name = ucfirst(str_replace(['-', '_'], '', self::getGlobalVarSlug()));
            self::addGlobal('app/name', $name);

            // Plugin slug
            $pref = self::getGlobal('core/slug');
            $slug = $pref . '_' . str_replace(['-', ' '], '_', strtolower(self::getGlobalVarSlug()));
            self::addGlobal('app/slug', $slug);

            // Plugin version
            self::addGlobal('app/version', self::getGlobal('core/version'));
        }
    }

    /**
     * Load modules from config file
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    private function __loadModules(): void
    {
        $file = self::service('app-locator')->getConfigPath('modules.php');

        if (file_exists($file)) {
            if ($modules = require $file) {
                self::module($modules);
            }
        }
    }

    /**
     * Initialization of ThemeAdaptor module
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    private function __initThemeAdaptor(): void
    {
        if (self::getGlobal('app/mode') === 'theme') {
            self::module()->addAsService('theme')->ThemeAdaptor;
        }
    }

    /**
     * Callback after load all modules
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    private function __callbackAfter(): void
    {
        if (method_exists($this, 'afterLoadAllModules')) {
            $this->afterLoadAllModules();
        }

        do_action('zc/after_load_modules');
    }

    /**
     * Returns the app name ( the class short name )
     *
     * @return string   The app name
     * @since 1.0.0
     */
    final public function getName(): string
    {
        return self::service('app-locator')->getName();
    }

    /**
     * Gets the app namespace
     *
     * @return string   The app namespace
     * @since 1.0.0
     */
    final public function getNamespace(): string
    {
        return self::service('app-locator')->getNamespace();
    }

    /**
     * Get the app path
     *
     * @return string   App path
     * @since 1.0.0
     */
    final public function getPath(string $path = ''): string
    {
        return self::service('app-locator')->getPath($path);
    }

    /**
     * Gets the app URL
     *
     * @return string   The app URL
     * @since 1.0.0
     */
    final public function getURL(string $url = ''): string
    {
        return self::service('app-locator')->getUrl($url);
    }

    /**
     * Get resource path
     *
     * @param  string $path   Additional part of path
     * @return string         Resource path
     * @since 1.0.0
     */
    final public function getResourcePath(string $path = ''): string
    {
        return self::service('app-locator')->getResourcePath($path);
    }

    /**
     * Get resource URL
     *
     * @param  string $url   Additional part of URL
     * @return string        Resource URL
     * @since 1.0.0
     */
    final public function getResourceURL(string $url = ''): string
    {
        return self::service('app-locator')->getResourceURL($url);
    }

    /**
     * Get root file path ( only for plugin mode )
     *
     * @return string   Plugin file path
     * @since 1.0.0
     */
    final public function getRootFilePath(): string
    {
        return self::service('app-locator')->getRootFilePath();
    }

    /**
     * App setup
     *
     * @since 1.0.0
     */
    abstract protected function setup(): void;
}
