<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode;

use Composer\Autoload\ClassLoader;
use RuntimeException;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\GlobalConfig;
use ZimbruCode\Component\Core\GlobalLibrary;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Core\Traits\AssetTrait;
use ZimbruCode\Component\Handler\DBHandler;
use ZimbruCode\Component\Service\AppService;
use ZimbruCode\Component\Service\FastCacheService;

/**
 * Class : Application kernel
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
abstract class AppKernel extends Kernel
{
    use AssetTrait;

    private ?Kernel $__CHILD_APP = null;

    /**
     * Initializing a new application
     *
     * @param string           $slug       Global variable slug name
     * @param string           $mode       Application mode ( theme / plugin )
     * @param bool             $dev        Development environment
     * @param string           $rootPath   Plugin file path ( Plugin mode only )
     * @param bool             $session    Status of "session_start()"
     * @param ClassLoader|null $composer   Instance of ClassLoader ( Composer )
     * @since 1.3.0
     */
    final public function __construct(string $slug, string $mode = 'theme', bool $dev = false, string $rootPath = '', bool $session = false, ClassLoader $composer = null)
    {
        // Check if the application is duplicated
        $this->__checkAppDuplicate($slug);

        // Session start
        $this->__initSession($session);

        // Initializing global configs
        new GlobalConfig;

        // Set up development environment
        $this->__setEnvironment($dev);

        // Global library initialization
        new GlobalLibrary;

        // Application instance
        self::addGlobalCache('app-instance', $this);

        // Service initialization [mode : before]
        $this->__initServices('before', $composer, $rootPath, $slug);

        // Child theme : Application initialization (If exist)
        $this->__initChildApplicationIfExist();

        // Application configs
        $this->__appConfig($mode);

        // Service initialization [mode : after]
        $this->__initServices('after', $composer, $rootPath, $slug);

        // Set module namespace
        self::module()->addNamespace($this->getNamespace() . '\\' . self::getGlobal('app/module-namespace-dir'));

        // Child theme : Call "beforeParentSetup" method
        if ($this->__CHILD_APP && method_exists($this->__CHILD_APP, 'beforeParentSetup')) {
            $this->__CHILD_APP->beforeParentSetup();
        }

        // Call "setup" method
        $this->setup();

        // Child theme : Call "setup" method
        if ($this->__CHILD_APP && method_exists($this->__CHILD_APP, 'setup')) {
            $this->__CHILD_APP->setup();
        }

        // Load modules from config file
        $this->__loadModules();

        // Launch theme adapter
        $this->__initThemeAdaptor();

        // Callback after load all modules
        $this->__callbackAfter();

        // Load text domain
        $this->addAction('init', function (): void {
            load_theme_textdomain('zc', __DIR__ . '/Resources/languages');
        });
    }

    /**
     * Check if the application is duplicated
     *
     * @param string $slug   Slug (GVS)
     * @throws RuntimeException
     * @return void
     * @since 1.1.0
     */
    private function __checkAppDuplicate(string $slug): void
    {
        $appClass = str_replace('\\', '-', get_class($this));

        if (!self::getGlobal("@/app-class/{$appClass}")) {
            self::addGlobal("@/app-class/{$appClass}", true);

            // Set global slug variable (GVS)
            self::addGlobalVarSlug($slug);
        } else {
            throw new RuntimeException("ZE0001 - This application is duplicated : {$appClass}");
        }
    }

    /**
     * Initialization of child application ( If exist )
     *
     * @return void
     * @since 1.1.0
     */
    private function __initChildApplicationIfExist(): void
    {
        if (Tools::isChildTheme()) {
            $childAppDir = self::service('app')->getChildPath();

            if (file_exists($childAppDir)) {
                $childAppNamespace = self::service('app')->getChildNamespace();

                $namespaces = [
                    [
                        'path'      => $childAppDir,
                        'namespace' => $childAppNamespace . '\\',
                    ],
                ];

                Tools::addPsr4($namespaces);

                $class = $childAppNamespace . '\\' . self::getGlobal('app/child-application-name');
                if (class_exists($class)) {
                    $this->__CHILD_APP = new $class;
                }

                self::module()->addNamespace($childAppNamespace . '\\' . self::getGlobal('app/module-namespace-dir'));
            }
        }
    }

    /**
     * Session initialization
     *
     * @param bool $session   Session status
     * @return void
     * @since 1.1.0
     */
    private function __initSession(bool $session): void
    {
        $phpSession = (defined('PHP_SESSION_NONE')) ? PHP_SESSION_NONE : '';

        if (session_status() == $phpSession && $session === true) {
            session_start();
        }
    }

    /**
     * Set up development environment
     *
     * @param bool $dev   The status of the development environment
     * @return void
     * @since 1.0.0
     */
    private function __setEnvironment(bool $dev): void
    {
        $environment = ($dev === true) ? 'dev' : 'prod';

        self::addGlobal('core/dev', $dev);
        self::addGlobal('core/dev-config/environment', $environment);
    }

    /**
     * Initialization of services
     *
     * @param string           $mode       Service loading mode
     * @param ClassLoader|null $composer   Instance of ClassLoader (Composer)
     * @param string|null      $rootPath   The path to the file where the application class was initialized
     * @param string           $slug       Application slug
     * @return void
     * @since 1.3.0
     */
    private function __initServices(string $mode = 'before', ClassLoader $composer = null, string $rootPath = null, string $slug = ''): void
    {
        if ($mode === 'before') {
            self::service('composer', $composer);
            self::service('app', new AppService($this, $rootPath, $slug));

            $td = wp_get_theme();
            if ($td->parent()) {
                $td = $td->parent();
            }

            self::service('theme-details', $td);
        } elseif ($mode === 'after') {
            self::addService('app', new AppService($this, $rootPath, $slug));
            self::service('db', new DBHandler);
            self::service('fast-cache', new FastCacheService);
        }
    }

    /**
     * Set up application mode
     *
     * @param string $mode    Application mode
     * @param bool   $check   Check if mode is different
     * @throws RuntimeException
     * @return void
     * @since 1.1.0
     */
    private function __setMode(string $mode, bool $check = false): void
    {
        if ($check === false) {
            if (in_array($mode, self::getGlobal('app/modes'))) {
                self::addGlobal('app/mode', $mode);
            } else {
                throw new RuntimeException("ZE0002 - Mode is not compatible : {$mode}");
            }
        } else {
            if (self::getGlobal('app/mode') !== $mode) {
                if (in_array($mode, self::getGlobal('app/modes'))) {
                    self::addGlobal('app/mode', $mode);
                } else {
                    throw new RuntimeException("ZE0003 - Mode is not compatible : {$mode}");
                }
            }
        }
    }

    /**
     * Init app configs
     *
     * @param string $mode   Application mode
     * @return void
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
     * Combine the custom configuration of the application with the global configuration and call the "config" method
     *
     * @return void
     * @since 1.2.0
     */
    private function __customAppConfig(): void
    {
        // Load custom 'App' config file
        if (file_exists($file = self::service('app')->getConfigPath('app.php'))) {
            if (is_array($config = require $file)) {
                self::addGlobal('app', array_replace_recursive(self::getGlobal('app'), $config));
            }
        }

        // Load custom 'Core' config file
        if (file_exists($file = self::service('app')->getConfigPath('core.php'))) {
            if (is_array($config = require $file)) {
                self::addGlobal('core', array_replace_recursive(self::getGlobal('core'), $config));
            }
        }

        // Child theme
        if (Tools::isChildTheme()) {

            // Load custom 'App' config file
            if (file_exists($file = self::service('app')->getChildConfigPath('app.php'))) {
                if (is_array($config = require $file)) {
                    self::addGlobal('app', array_replace_recursive(self::getGlobal('app'), $config));
                }
            }

            // Load custom 'Core' config file
            if (file_exists($file = self::service('app')->getChildConfigPath('core.php'))) {
                if (is_array($config = require $file)) {
                    self::addGlobal('core', array_replace_recursive(self::getGlobal('core'), $config));
                }
            }
        }

        // Call "config" method
        if (method_exists($this, 'config')) {
            $this->config();
        }

        // Child theme : Call "config" method
        if ($this->__CHILD_APP && method_exists($this->__CHILD_APP, 'config')) {
            $this->__CHILD_APP->config();
        }
    }

    /**
     * Set up default application configs
     *
     * @return void
     * @since 1.1.0
     */
    private function __defaultAppConfig(): void
    {
        // Theme mode
        if (self::getGlobal('app/mode') === 'theme') {
            $pref = self::getGlobal('core/slug');
            $td   = self::service('theme-details');

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
     * @return void
     * @since 1.1.0
     */
    private function __loadModules(): void
    {
        $file = self::service('app')->getConfigPath('modules.php');

        if (file_exists($file)) {
            if (is_array($modules = require $file)) {

                // Child theme
                if (Tools::isChildTheme()) {
                    if (file_exists($childFile = self::service('app')->getChildConfigPath('modules.php'))) {
                        if (is_array($childModules = require $childFile)) {
                            $modules = Tools::arrayMerge($modules, $childModules, 'wk');
                        }
                    }
                }

                self::module($modules);
            }
        }
    }

    /**
     * Initializing the "ThemeAdaptor" module
     *
     * @return void
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
     * @return void
     * @since 1.2.0
     */
    private function __callbackAfter(): void
    {
        if (method_exists($this, 'afterLoadAllModules')) {
            $this->afterLoadAllModules();
        }

        // Child theme : Call "afterLoadAllModules" method
        if ($this->__CHILD_APP && method_exists($this->__CHILD_APP, 'afterLoadAllModules')) {
            $this->__CHILD_APP->afterLoadAllModules();
        }

        do_action('zc/after_load_modules');
    }

    /**
     * Returns the name of the application (short name of the class)
     *
     * @return string   Application name
     * @since 1.1.0
     */
    final public function getName(): string
    {
        return self::service('app')->getName();
    }

    /**
     * Gets the namespace of the application
     *
     * @return string   Application namespace
     * @since 1.1.0
     */
    final public function getNamespace(): string
    {
        return self::service('app')->getNamespace();
    }

    /**
     * Get application path
     *
     * @param string $path   Additional part of the path
     * @return string        Application path
     * @since 1.1.0
     */
    final public function getPath(string $path = ''): string
    {
        return self::service('app')->getPath($path);
    }

    /**
     * Gets the url of the application
     *
     * @param string $url   Additional part of the URL
     * @return string       Application URL
     * @since 1.1.0
     */
    final public function getURL(string $url = ''): string
    {
        return self::service('app')->getUrl($url);
    }

    /**
     * Get resource path
     *
     * @param string $path   Additional part of the path
     * @return string        Resource path
     * @since 1.1.0
     */
    final public function getResourcePath(string $path = ''): string
    {
        return self::service('app')->getResourcePath($path);
    }

    /**
     * Get resource URL
     *
     * @param string $url   Additional part of the URL
     * @return string       Resource URL
     * @since 1.1.0
     */
    final public function getResourceURL(string $url = ''): string
    {
        return self::service('app')->getResourceURL($url);
    }

    /**
     * Get the path to the root file
     *
     * @return string   The path to the root file
     * @since 1.1.0
     */
    final public function getRootFilePath(): string
    {
        return self::service('app')->getRootFilePath();
    }

    /**
     * Get child application object
     *
     * @return Kernel   Child application
     * @since 1.2.0
     */
    final public function child(): Kernel
    {
        if ($this->__CHILD_APP) {
            return $this->__CHILD_APP;
        } else {
            throw new RuntimeException('ZE0147 - You are not using a child theme');
        }
    }

    /**
     * Application setup
     *
     * @since 1.0.0
     */
    abstract protected function setup(): void;
}
