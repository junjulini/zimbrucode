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
use ZimbruCode\Component\Core\GlobalConfig;
use ZimbruCode\Component\Core\GlobalLibrary;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Core\Traits\AssetTrait;
use ZimbruCode\Component\Common\FastCache;
use ZimbruCode\Component\Handler\AppLocatorHandler;
use ZimbruCode\Component\Handler\DBHandler;

/**
 * Class : Application Kernel
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
abstract class AppKernel extends Kernel
{
    use AssetTrait;

    /**
     * Initialization new app
     *
     * @param  string      $slug           Slug name of global var
     * @param  string      $mode           Mode of app ( theme / plugin )
     * @param  boolean     $dev            Dev environment
     * @param  string      $rootPath       ( Only for plugin mode ) plugin file path
     * @param  boolean     $session        Disable or enable "session_start()"
     * @param  ClassLoader $composer       Instance of ClassLoader
     * @return void                        This function does not return a value
     * @since 1.0.0
     */
    final public function __construct($slug, $mode = 'theme', $dev = false, $rootPath = '', $session = false, ClassLoader $composer)
    {
        if (!is_string($slug) || !is_string($mode) || !is_bool($dev) || !is_string($rootPath)) {
            throw new \InvalidArgumentException(esc_html__('Error init app : Invalid arguments.', 'zc'));
        }

        $this->__checkAppDuplicate($slug);                         // Checking doubling of application
        $this->__initSession($session);                            // Session start
        $this->__initGlobalConfigAndLibrary();                     // Initialization of global configs and global library
        $this->__setEnvironment($dev);                             // Set DEV environment
        $this->__setChmod();                                       // Set file/dir chmod from WP constants
        self::setGlobalCache('app-instance', $this);               // Application instance
        $this->__initServices('before', $composer, $rootPath); // Init Services
        $this->__appConfig($mode);                                 // App configs

        // Other services
        $this->__initServices('after');

        // Set modules namespace
        self::module()->setNamespace($this->getNamespace() . '\\' . self::getGlobal('app/module-namespace-dir'));

        // Run setup
        $this->setup();

        $this->__loadModules();      // Load modules from config file
        $this->__initThemeAdaptor(); // Run theme adaptor
        $this->__callbackAfter();    // Callback after load all modules

        // Load textdomain
        $this->addAction('after_setup_theme', function() {
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
    private function __checkAppDuplicate($slug)
    {
        $appClass = str_replace('\\', '-', get_class($this));
        if (!self::getGlobal("@/app-class/{$appClass}")) {
            self::setGlobal("@/app-class/{$appClass}", true);

            // Set global var slug (GVS)
            self::setGlobalVarSlug($slug);
        } else {
            throw new \RuntimeException(sprintf('AppKernel - Doubling of application : %s', $appClass));
        }
    }

    /**
     * Init session
     *
     * @param boolean $session   Enable/Disable session
     * @return void              This function does not return a value
     * @since 1.0.0
     */
    private function __initSession($session)
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
    private function __initGlobalConfigAndLibrary()
    {
        new GlobalConfig;  // Set global configs
        new GlobalLibrary; // Set global library
    }

    /**
     * Set environment
     *
     * @param boolean $dev   True/False if Dev environment
     * @return void          This function does not return a value
     * @since 1.0.0
     */
    private function __setEnvironment($dev)
    {
        $environment = ($dev === true) ? 'dev' : 'prod';

        self::setGlobal('core/dev', $dev);
        self::setGlobal('core/dev-config/environment', $environment);
    }

    /**
     * Set file/dir chmod from WP constants
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    private function __setChmod()
    {
        self::setGlobal('core/chmod-dir', (fileperms(ABSPATH) & 0777 | 0755));
        self::setGlobal('core/chmod-file', (fileperms(ABSPATH . 'index.php') & 0777 | 0644));
    }

    /**
     * Init services
     *
     * @param string      $mode           Mode of loading services
     * @param ClassLoader $composer       Instance of Composer ClassLoader
     * @param string      $rootPath   File path where was initialized app class
     * @return void                       This function does not return a value
     * @since 1.0.0
     */
    private function __initServices($mode = 'before', ClassLoader $composer = null, $rootPath = null)
    {
        if ($mode === 'before') {
            self::service('composer', $composer);
            self::service('app-locator', new AppLocatorHandler($this, $rootPath));
        } elseif ($mode === 'after') {
            self::service('db', new DBHandler);
            self::service('fast-cache', new FastCache);
        }
    }

    /**
     * Set app mode
     *
     * @param string  $mode    App mode
     * @param boolean $check   Check if mode is different
     * @return void            This function does not return a value
     * @since 1.0.0
     */
    private function __setMode($mode, $check = false)
    {
        if ($check === false) {
            if (in_array($mode, self::getGlobal('app/modes'))) {
                self::setGlobal('app/mode', $mode);
            } else {
                throw new \RuntimeException(sprintf(esc_html__('AppKernel - Mode is not compatible : %s', 'zc'), $mode));
            }
        } else {
            if (self::getGlobal('app/mode') !== $mode) {
                if (in_array($mode, self::getGlobal('app/modes'))) {
                    self::setGlobal('app/mode', $mode);
                } else {
                    throw new \RuntimeException(sprintf(esc_html__('AppKernel - Mode is not compatible : %s', 'zc'), $mode));
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
    private function __appConfig($mode)
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
    private function __customAppConfig()
    {
        // Load custom 'App' config file
        if (file_exists($file = self::service('app-locator')->getConfigPath('/app.php'))) {
            if (is_array($config = require $file)) {
                self::setGlobal('app', array_replace_recursive(self::getGlobal('app'), $config));
            }
        }

        // Load custom 'Core' config file
        if (file_exists($file = self::service('app-locator')->getConfigPath('/core.php'))) {
            if (is_array($config = require $file)) {
                self::setGlobal('core', array_replace_recursive(self::getGlobal('core'), $config));
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
     * @since 1.0.0
     */
    private function __defaultAppConfig()
    {
        // Theme mode
        if (self::getGlobal('app/mode') === 'theme') {
            $pref = self::getGlobal('core/slug');

            // Theme details
            self::setGlobalCache('theme-details', ($td = wp_get_theme()));

            // Theme name
            self::setGlobal('app/name', ($tn = $td->get('Name')));

            // Theme slug
            self::setGlobal('app/slug', $pref . '_' . str_replace(['-', ' '], '_', strtolower($td->get('Name'))));

            // Theme version
            self::setGlobal('app/version', $td->get('Version'));

            // Plugin mode
        } elseif (self::getGlobal('app/mode') === 'plugin') {

            // Plugin name
            $name = ucfirst(str_replace(['-', '_'], '', self::getGlobalVarSlug()));
            self::setGlobal('app/name', $name);

            // Plugin slug
            $pref = self::getGlobal('core/slug');
            $slug = $pref . '_' . str_replace(['-', ' '], '_', strtolower(self::getGlobalVarSlug()));
            self::setGlobal('app/slug', $slug);

            // Plugin version
            self::setGlobal('app/version', self::getGlobal('core/version'));
        }
    }

    /**
     * Load modules from config file
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    private function __loadModules()
    {
        if (file_exists($this->getResourcePath('config/modules.php'))) {
            if ($modules = require $this->getResourcePath('config/modules.php')) {
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
    private function __initThemeAdaptor()
    {
        if (self::getGlobal('app/mode') === 'theme') {
            self::module()->setAsService('theme')->ThemeAdaptor;
        }
    }

    /**
     * Callback after load all modules
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    private function __callbackAfter()
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
    final public function getName()
    {
        return self::service('app-locator')->getName();
    }

    /**
     * Gets the app namespace
     *
     * @return string   The app namespace
     * @since 1.0.0
     */
    final public function getNamespace()
    {
        return self::service('app-locator')->getNamespace();
    }

    /**
     * Get the app path
     *
     * @return string   App path
     * @since 1.0.0
     */
    final public function getPath($path = '')
    {
        return self::service('app-locator')->getPath($path);
    }

    /**
     * Gets the app URL
     *
     * @return string   The app URL
     * @since 1.0.0
     */
    final public function getURL($url = '')
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
    final public function getResourcePath($path = '')
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
    final public function getResourceURL($url = '')
    {
        return self::service('app-locator')->getResourceURL($url);
    }

    /**
     * Get root file path ( only for plugin mode )
     *
     * @return string   Plugin file path
     * @since 1.0.0
     */
    final public function getRootFilePath()
    {
        return self::service('app-locator')->getRootFilePath();
    }

    /**
     * App setup
     *
     * @since 1.0.0
     */
    abstract protected function setup();
}
