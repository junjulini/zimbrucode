<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Composer;

use Composer\Script\Event;
use MatthiasMullie\Minify\CSS as MinifyCSS;
use MatthiasMullie\Minify\JS as MinifyJS;
use SplFileInfo;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Finder\Finder;

/**
 * Class : Component/Composer : Script handler
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.2.0
 */
class ScriptHandler
{
    private static bool $__VAR_UPLOAD_MODE = false;

    /**
     * Install theme script
     *
     * @param Event $event   Event object
     * @return void
     * @since 1.0.0
     */
    public static function installTheme(Event $event): void
    {
        $event->getIO()->write("\n<question>###################### ZimbruCode Installer : Theme ######################</question>\n");

        $config = [];
        $root   = dirname($event->getComposer()->getConfig()->get('vendor-dir'));

        $config                    = [];
        $config['app-name']        = $event->getIO()->ask('Theme name. Default - ZC_Theme : ', 'ZC_Theme');
        $config['app-slug']        = $event->getIO()->ask('Theme slug. Default - zc_theme : ', 'zc_theme');
        $config['app-class']       = $event->getIO()->ask("Theme class. Default - {$config['app-name']} : ", $config['app-name']);
        $config['app-class-alias'] = $event->getIO()->ask('Theme class alias. Default - zc : ', 'zc');
        $config['app-uri']         = $event->getIO()->ask('Theme URI (DEMO / HOME) : ', 'https://junjulini.com');
        $config['app-desc']        = $event->getIO()->ask('Theme description : ', 'ZC theme');
        $config['app-author']      = $event->getIO()->ask('Theme author : ', 'Junjulini');
        $config['app-author-uri']  = $event->getIO()->ask('Theme author URI : ', 'https://junjulini.com');
        $config['app-version']     = $event->getIO()->ask('Theme version : ', '1.0.0');
        $config['app-tags']        = $event->getIO()->ask('Theme tags : ', 'theme, zimbrucode');
        $config['app-domain']      = $event->getIO()->ask('Theme domain : ', 'zimbrucode-app');

        // Create app config
        file_put_contents("{$root}/config.json", json_encode($config, JSON_PRETTY_PRINT));

        $search = [
            '{APP-NAME}',
            '{APP-SLUG}',
            '{APP-CLASS}',
            '{APP-CLASS-ALIAS}',
            '{APP-URI}',
            '{APP-DESC}',
            '{APP-AUTHOR}',
            '{APP-AUTHOR-URI}',
            '{APP-VERSION}',
            '{APP-TAGS}',
            '{APP-DOMAIN}',
        ];

        $replace = [
            $config['app-name'],
            $config['app-slug'],
            $config['app-class'],
            $config['app-class-alias'],
            $config['app-uri'],
            $config['app-desc'],
            $config['app-author'],
            $config['app-author-uri'],
            $config['app-version'],
            $config['app-tags'],
            $config['app-domain'],
        ];

        $files = [
            'composer.json',
            'bootstrap.php',
            'functions.php',
            'index.php',
            'style.css',
            'app/Application.php',
            'app/Resources/config/app.php',
            'app/Resources/config/core.php',
            'app/Resources/config/modules.php',
            'app/Resources/views/index.twig',
            'app/Resources/assets/js/script.js',
            'app/Resources/assets/scss/style.scss',
        ];

        foreach ($files as $file) {
            $file = "{$root}/{$file}";

            if (file_exists($file)) {
                file_put_contents($file, str_replace($search, $replace, file_get_contents($file)));
            }
        }

        $event->getIO()->write("\n<info>Done !!!</info>");
    }

    /**
     * Install plugin script
     *
     * @param Event $event   Event object
     * @return void
     * @since 1.0.0
     */
    public static function installPlugin(Event $event): void
    {
        $event->getIO()->write("\n<question>###################### ZimbruCode Installer : Plugin ######################</question>\n");

        $config = [];
        $root   = dirname($event->getComposer()->getConfig()->get('vendor-dir'));

        $config                    = [];
        $config['app-name']        = $event->getIO()->ask('Plugin name. Default - ZC_Plugin : ', 'ZC_Plugin');
        $config['app-slug']        = $event->getIO()->ask('Plugin slug. Default - zc_plugin : ', 'zc_plugin');
        $config['app-class']       = $event->getIO()->ask("Plugin class. Default - {$config['app-name']} : ", $config['app-name']);
        $config['app-class-alias'] = $event->getIO()->ask('Plugin class alias. Default - zc : ', 'zc');
        $config['app-uri']         = $event->getIO()->ask('Plugin URI (DEMO / HOME) : ', 'https://junjulini.com');
        $config['app-desc']        = $event->getIO()->ask('Plugin description : ', 'ZC plugin');
        $config['app-author']      = $event->getIO()->ask('Plugin author : ', 'Junjulini');
        $config['app-author-uri']  = $event->getIO()->ask('Plugin author URI : ', 'https://junjulini.com');
        $config['app-version']     = $event->getIO()->ask('Plugin version : ', '1.0.0');
        $config['app-domain']      = $event->getIO()->ask('Plugin domain : ', 'zimbrucode-app');

        // Create app config
        file_put_contents("{$root}/config.json", json_encode($config, JSON_PRETTY_PRINT));

        $search = [
            '{APP-NAME}',
            '{APP-SLUG}',
            '{APP-CLASS}',
            '{APP-CLASS-ALIAS}',
            '{APP-URI}',
            '{APP-DESC}',
            '{APP-AUTHOR}',
            '{APP-AUTHOR-URI}',
            '{APP-VERSION}',
            '{APP-DOMAIN}',
        ];

        $replace = [
            $config['app-name'],
            $config['app-slug'],
            $config['app-class'],
            $config['app-class-alias'],
            $config['app-uri'],
            $config['app-desc'],
            $config['app-author'],
            $config['app-author-uri'],
            $config['app-version'],
            $config['app-domain'],
        ];

        $files = [
            'composer.json',
            'bootstrap.php',
            'index.php',
            'app/Application.php',
            'app/Resources/config/app.php',
            'app/Resources/config/core.php',
            'app/Resources/config/modules.php',
            'app/Resources/assets/js/script.js',
            'app/Resources/assets/scss/style.scss',
        ];

        foreach ($files as $file) {
            $file = "{$root}/{$file}";

            if (file_exists($file)) {
                file_put_contents($file, str_replace($search, $replace, file_get_contents($file)));
            }
        }

        $event->getIO()->write("\n<info>Done !!!</info>");
    }

    /**
     * Clear cache script
     *
     * @param Event $event   Event object
     * @return void
     * @since 1.0.0
     */
    public static function clearCache(Event $event): void
    {
        $root   = dirname($event->getComposer()->getConfig()->get('vendor-dir'));
        $config = false;

        if (file_exists("{$root}/config.json")) {
            $config = @json_decode(@file_get_contents("{$root}/config.json"), true);

            if (!is_array($config)) {
                $event->getIO()->writeError('App config is not compatible.');
                return;
            }
        } else {
            $event->getIO()->writeError('App config file don\'t exist.');
            return;
        }

        if (self::$__VAR_UPLOAD_MODE === true) {
            $dir = "{$root}/../../uploads/{$config['app-slug']}/cache";
        } else {
            $dir = "{$root}/app/Resources/var/cache";
        }

        $finder = new Finder;
        $fs     = new Filesystem;

        foreach ($finder->in($dir)->depth('== 0') as $item) {
            try {
                $fs->remove($item->getPathname());
            } catch (IOExceptionInterface $e) {
                echo "An error occurred while removing your item at : {$e->getPath()} : {$e->getMessage()}";
            }
        }
    }

    /**
     * Clear var script
     *
     * @param Event $event   Event object
     * @return void
     * @since 1.0.0
     */
    public static function clearVar(Event $event): void
    {
        $root   = dirname($event->getComposer()->getConfig()->get('vendor-dir'));
        $config = false;

        if (file_exists("{$root}/config.json")) {
            $config = @json_decode(@file_get_contents("{$root}/config.json"), true);

            if (!is_array($config)) {
                $event->getIO()->writeError('App config is not compatible.');
                return;
            }
        } else {
            $event->getIO()->writeError('App config file don\'t exist.');
            return;
        }

        if (self::$__VAR_UPLOAD_MODE === true) {
            $dir = "{$root}/../../uploads/{$config['app-slug']}";
        } else {
            $dir = "{$root}/app/Resources/var";
        }

        $finder = new Finder;
        $fs     = new Filesystem;

        foreach ($finder->in($dir)->depth('== 0') as $item) {
            try {
                $fs->remove($item->getPathname());
            } catch (IOExceptionInterface $e) {
                echo "An error occurred while removing your item at : {$e->getPath()} : {$e->getMessage()}";
            }
        }
    }

    /**
     * New module script
     *
     * @param Event $event   Event object
     * @return void
     * @since 1.0.0
     */
    public static function newModule(Event $event): void
    {
        $root      = dirname($event->getComposer()->getConfig()->get('vendor-dir'));
        $moduleDir = "{$root}/app/Module";
        $config    = false;

        if (file_exists("{$root}/config.json")) {
            $config = @json_decode(@file_get_contents("{$root}/config.json"), true);

            if (!is_array($config)) {
                $event->getIO()->writeError('App config is not compatible.');
                return;
            }
        } else {
            $event->getIO()->writeError('App config file don\'t exist.');
            return;
        }

        if ($module = self::getModuleName($event, $moduleDir)) {
            $fs = new Filesystem;

            try {
                $fs->copy(realpath(__DIR__ . '/../../Resources/skeleton/module/Module.php'), "{$moduleDir}/{$module}/Module.php");

                $search = [
                    '{APP-NAME}',
                    '{APP-SLUG}',
                    '{APP-CLASS}',
                    '{APP-CLASS-ALIAS}',
                    '{APP-URI}',
                    '{APP-DESC}',
                    '{APP-AUTHOR}',
                    '{APP-AUTHOR-URI}',
                    '{APP-VERSION}',
                    '{APP-TAGS}',
                    '{APP-DOMAIN}',
                    '{MODULE-NAME}',
                ];

                $replace = [
                    $config['app-name'],
                    $config['app-slug'],
                    $config['app-class'],
                    $config['app-class-alias'],
                    $config['app-uri'],
                    $config['app-desc'],
                    $config['app-author'],
                    $config['app-author-uri'],
                    $config['app-version'],
                    $config['app-tags'],
                    $config['app-domain'],
                    $module,
                ];

                $files = [
                    'Module.php',
                ];

                foreach ($files as $file) {
                    $file = "{$moduleDir}/{$module}/{$file}";

                    if (file_exists($file)) {
                        file_put_contents($file, str_replace($search, $replace, file_get_contents($file)));
                    }
                }
            } catch (IOExceptionInterface $e) {
                echo "FS : An error occurred at : {$e->getPath()} : {$e->getMessage()}";
            }
        }
    }

    /**
     * Check if module exist
     *
     * @param Event  $event       Event object
     * @param string $moduleDir   Module directory
     * @return string|null        Module name
     * @since 1.1.0
     */
    protected static function getModuleName(Event $event, string $moduleDir): ?string
    {
        $args = $event->getArguments();
        $name = (!empty($args[0])) ? $args[0] : false;

        if (!$name) {
            return null;
        }

        if (file_exists("{$moduleDir}/{$name}")) {
            $event->getIO()->writeError("This module exist : {$name}");
            return null;
        }

        return $name;
    }

    /**
     * New control script
     *
     * @param Event $event   Event object
     * @return void
     * @since 1.0.0
     */
    public static function newControl(Event $event): void
    {
        $root      = dirname($event->getComposer()->getConfig()->get('vendor-dir'));
        $moduleDir = "{$root}/app/Module";
        $config    = false;

        if (file_exists("{$root}/config.json")) {
            $config = @json_decode(@file_get_contents("{$root}/config.json"), true);

            if (!is_array($config)) {
                $event->getIO()->writeError('App config is not compatible.');
                return;
            }
        } else {
            $event->getIO()->writeError('App config file don\'t exist.');
            return;
        }

        if ($data = self::checkControlData($event, $moduleDir)) {
            $fs = new Filesystem;

            try {
                $fs->copy(realpath(__DIR__ . '/../../Resources/skeleton/control/Control.php'), "{$moduleDir}/{$data['module']}/Resources/controls/{$data['control']}/Control.php");
                $fs->copy(realpath(__DIR__ . '/../../Resources/skeleton/control/Resources/views/control.twig'), "{$moduleDir}/{$data['module']}/Resources/controls/{$data['control']}/Resources/views/control.twig");
                $fs->copy(realpath(__DIR__ . '/../../Resources/skeleton/control/Resources/assets/js/control.js'), "{$moduleDir}/{$data['module']}/Resources/controls/{$data['control']}/Resources/assets/js/control.js");
                $fs->copy(realpath(__DIR__ . '/../../Resources/skeleton/control/Resources/assets/scss/control.scss'), "{$moduleDir}/{$data['module']}/Resources/controls/{$data['control']}/Resources/assets/scss/control.scss");

                $search = [
                    '{APP-NAME}',
                    '{APP-SLUG}',
                    '{APP-CLASS}',
                    '{APP-CLASS-ALIAS}',
                    '{APP-URI}',
                    '{APP-DESC}',
                    '{APP-AUTHOR}',
                    '{APP-AUTHOR-URI}',
                    '{APP-VERSION}',
                    '{APP-TAGS}',
                    '{APP-DOMAIN}',
                    '{MODULE-NAME}',
                    '{CONTROL}',
                ];

                $replace = [
                    $config['app-name'],
                    $config['app-slug'],
                    $config['app-class'],
                    $config['app-class-alias'],
                    $config['app-uri'],
                    $config['app-desc'],
                    $config['app-author'],
                    $config['app-author-uri'],
                    $config['app-version'],
                    $config['app-tags'],
                    $config['app-domain'],
                    $data['module'],
                    $data['control'],
                ];

                $files = [
                    'Control.php',
                    'Resources/views/control.twig',
                    'Resources/assets/js/control.js',
                    'Resources/assets/scss/control.scss',
                ];

                foreach ($files as $file) {
                    $file = "{$moduleDir}/{$data['module']}/Resources/controls/{$data['control']}/{$file}";

                    if (file_exists($file)) {
                        file_put_contents($file, str_replace($search, $replace, file_get_contents($file)));
                    }
                }
            } catch (IOExceptionInterface $e) {
                echo "FS : An error occurred at : {$e->getPath()} : {$e->getMessage()}";
            }
        }
    }

    /**
     * Check control data
     *
     * @param Event  $event       Event object
     * @param string $moduleDir   Module directory
     * @return array|null         Control data ( name, module location )
     * @since 1.0.0
     */
    protected static function checkControlData(Event $event, string $moduleDir): ?array
    {
        $args    = $event->getArguments();
        $control = (!empty($args[0])) ? $args[0] : false;

        if (!$control) {
            return null;
        }

        $module = (!empty($args[1])) ? $args[1] : false;
        if (!$module) {
            return null;
        }

        if (file_exists("{$moduleDir}/{$module}/Resources/controls/{$control}")) {
            $event->getIO()->writeError("This control exist : {$control}");
            return null;
        }

        return [
            'control' => $control,
            'module'  => $module,
        ];
    }

    /**
     * Minify script
     *
     * @param Event $event   Event object
     * @return void
     * @since 1.1.0
     */
    public static function minify(Event $event): void
    {
        $root = dirname($event->getComposer()->getConfig()->get('vendor-dir'));

        $args = $event->getArguments();
        $name = (!empty($args[0])) ? $args[0] : false;

        if (!$name) {
            return;
        }

        $path = (!empty($args[1])) ? $args[1] : false;
        if (!$path) {
            return;
        }

        $path = "{$root}/{$path}";

        if (!file_exists($path) || !is_file($path)) {
            $event->getIO()->writeError("File don't exist or is not valid : {$path}");
            return;
        }

        $fi = new SplFileInfo($path);

        if ($fi->getExtension() == 'css') {
            $tool = new MinifyCSS;
            $tool->add(file_get_contents($path));

            file_put_contents("{$fi->getPath()}/{$name}", $tool->minify());
        } elseif ($fi->getExtension() == 'js') {
            $tool = new MinifyJS;
            $tool->add(file_get_contents($path));

            file_put_contents("{$fi->getPath()}/{$name}", $tool->minify());
        }
    }
}
