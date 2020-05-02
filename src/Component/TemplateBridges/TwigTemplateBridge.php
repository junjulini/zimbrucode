<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\TemplateBridges;

use Twig\Cache\FilesystemCache;
use Twig\Environment;
use Twig\Extension\AbstractExtension;
use Twig\Loader\FilesystemLoader;
use Twig\TwigFilter;
use Twig\TwigFunction;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\TemplateBridges\Helper\GlobalShell;
use ZimbruCode\Component\TemplateBridges\Helper\TwigEscaper;
use ZimbruCode\Component\TemplateBridges\Helper\TwigFilters;
use ZimbruCode\Component\TemplateBridges\Helper\TwigFunctions;

/**
 * Class : Twig Template
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class TwigTemplateBridge extends Kernel
{
    protected $loadPath  = [];
    protected $cachePath = false;
    protected $twig      = false;
    protected $loader    = false;
    protected $data      = [
        'vars'       => [],
        'functions'  => [],
        'escapers'   => [],
        'filters'    => [],
        'extensions' => [],
    ];

    public function __construct($loadDefaultShells = true)
    {
        // Set filters
        new TwigFilters($this);

        // Set escapers
        new TwigEscaper($this);

        // Set functions
        new TwigFunctions($this);

        // Set shells
        if ($loadDefaultShells) {
            $gs = new GlobalShell;

            $this->setVar('global', $gs);
            $this->setVar('glob', $gs);
            $this->setVar('app', self::getGlobalCache('app-instance'));
        }
    }

    /**
     * Get TWIG Environment
     *
     * @return Environment  TWIG Environment
     * @since 1.0.0
     */
    public function getTWIG()
    {
        if (!$this->twig || !($this->twig instanceof Environment)) {
            throw new \RuntimeException('TWIG Environment is not initialized.');
        }

        return $this->twig;
    }

    /**
     * Get TWIG filesystem loader
     *
     * @return FilesystemLoader  TWIG filesystem loader
     * @since 1.0.0
     */
    public function getLoader()
    {
        if (!$this->loader || !($this->loader instanceof FilesystemLoader)) {
            throw new \RuntimeException('TWIG FilesystemLoader is not initialized.');
        }

        return $this->loader;
    }

    /**
     * Get var
     *
     * @param  string $name   Name of var
     * @return string         Value of var
     * @since 1.0.0
     */
    public function __get($name)
    {
        if (!isset($this->data['vars'][$name])) {
            throw new \RuntimeException($name . ' - this variable not found.');
        }

        return $this->data['vars'][$name];
    }

    /**
     * Set var (setter)
     *
     * @param string $name    Name of var
     * @param mix    $value   Value of var
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    public function __set($name, $value)
    {
        if ($name && is_string($name)) {
            $this->data['vars'][$name] = $value;
        } else {
            throw new \RuntimeException('Name of var is not string or is empty.');
        }
    }

    /**
     * Get var
     *
     * @param  string $name   Name of var
     * @return string         Value of var
     * @since 1.0.0
     */
    public function getVar($name)
    {
        if ($name && is_string($name)) {
            if (!isset($this->data['vars'][$name])) {
                throw new \RuntimeException($name . ' - this variable not found.');
            }

            return $this->data['vars'][$name];
        }

        return false;
    }

    /**
     * Get vars
     *
     * @return array   Vars
     * @since 1.0.0
     */
    public function getVars()
    {
        return $this->data['vars'];
    }

    /**
     * Set var
     *
     * @param string $name    Name of var
     * @param mix    $value   Value of var
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    public function setVar($name, $value)
    {
        if ($name && is_string($name)) {
            $this->data['vars'][$name] = $value;
        }
    }

    /**
     * Set vars
     *
     * @param array $vars   Vars
     * @since 1.0.0
     */
    public function setVars(array $vars)
    {
        $this->data['vars'] = $vars;
    }

    /**
     * Add load path
     *
     * @param string  $path        Path of template
     * @param string  $namespace   Namespace of templates
     * @return void                This function does not return a value
     * @since 1.0.0
     */
    public function addLoadPath($path, $namespace = null)
    {
        if (!$path) {
            throw new \RuntimeException('Load path is empty.');
        }

        if (!Tools::isLocalPath($path)) {
            throw new \RuntimeException($path . ' - this path is not local.');
        }

        $this->loadPath[] = [$path, $namespace];
    }

    /**
     * Set cache path
     *
     * @param string $cache   Cache path
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    public function setCachePath($path)
    {
        if (!$path) {
            throw new \RuntimeException('Cache path is empty.');
        }

        if (!Tools::isLocalPath($path)) {
            throw new \RuntimeException($path . ' - this path is not local.');
        }

        $this->cachePath = $path;
    }

    /**
     * Set function
     *
     * @param  string   $name     Function name
     * @param  callable $method   The function that will be called
     * @return void               This function does not return a value
     * @since 1.0.0
     */
    public function setFunction($name, callable $method)
    {
        if (!$name) {
            throw new \InvalidArgumentException('Function name is empty.');
        }

        if (!is_string($name)) {
            throw new \InvalidArgumentException('Function name is not string.');
        }

        $this->data['functions'][$name] = $method;
    }

    /**
     * Set escaper
     *
     * @param  string   $name     Escaper name
     * @param  callable $method   The function that will be called
     * @return void               This function does not return a value
     * @since 1.0.0
     */
    public function setEscaper($name, callable $method)
    {
        if (!$name) {
            throw new \InvalidArgumentException('Escaper function name is empty.');
        }

        if (!is_string($name)) {
            throw new \InvalidArgumentException('Escaper function name is not string.');
        }

        $this->data['escapers'][$name] = $method;
    }

    /**
     * Set filter
     *
     * @param  string   $name     Filter name
     * @param  callable $method   The function that will be called
     * @return void               This function does not return a value
     * @since 1.0.0
     */
    public function setFilter($name, callable $method)
    {
        if (!$name) {
            throw new \InvalidArgumentException('Filter function name is empty.');
        }

        if (!is_string($name)) {
            throw new \InvalidArgumentException('Filter function name is not string.');
        }

        $this->data['filters'][$name] = $method;
    }

    /**
     * Set extension
     *
     * @param  AbstractExtension $extension   Extension object
     * @return void                           This function does not return a value
     * @since 1.0.0
     */
    public function setExtension(AbstractExtension $extension)
    {
        $this->data['extensions'][] = $extension;
    }

    /**
     * Set loader
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function setLoader()
    {
        if (!$this->loadPath) {
            throw new \RuntimeException('Array path is empty.');
        }

        $this->loader = new FilesystemLoader();

        // From global
        foreach (self::getGlobalCache('templates-path', []) as $value) {
            if (empty($value[1])) {
                $this->loader->addPath($value[0]);
            } else {
                $this->loader->addPath($value[0], $value[1]);
            }
        }

        foreach ($this->loadPath as $value) {
            if (empty($value[1])) {
                $this->loader->addPath($value[0]);
            } else {
                $this->loader->addPath($value[0], $value[1]);
            }
        }

        // Global twig loader hook
        do_action('zc/component/twig/loader', $this->loader);
    }

    /**
     * Set Environment
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function setEnvironment()
    {
        $cache      = ($this->cachePath) ? new FilesystemCache($this->cachePath, FilesystemCache::FORCE_BYTECODE_INVALIDATION) : false;
        $this->twig = new Environment($this->getLoader(), [
            'cache'       => $cache,
            'auto_reload' => self::dop(true, false),
        ]);

        // Set functions
        if (!empty($this->data['functions'])) {
            foreach ($this->data['functions'] as $name => $method) {
                $this->twig->addFunction(new TwigFunction($name, $method));
            }
        }

        // Set escapers
        if (!empty($this->data['escapers'])) {
            foreach ($this->data['escapers'] as $name => $method) {
                $this->twig->getExtension('Twig_Extension_Core')->setEscaper($name, $method);
            }
        }

        // Set filters
        if (!empty($this->data['filters'])) {
            foreach ($this->data['filters'] as $name => $method) {
                $this->twig->addFilter(new TwigFilter($name, $method));
            }
        }

        // Set extensions
        if (!empty($this->data['extensions'])) {
            foreach ($this->data['extensions'] as $extension) {
                $this->twig->addExtension($extension);
            }
        }

        // Global twig hook
        do_action('zc/component/twig', $this->twig);
    }

    /**
     * Render template
     *
     * @param  string $template template name
     * @return string           html
     * @since 1.0.0
     */
    public function renderTemplate($template)
    {
        if ($template && is_string($template)) {
            $template = $this->twig->loadTemplate($template);
            return $template->render($this->data['vars']);
        }

        return '';
    }

    /**
     * Render
     *
     * @param  string $template   Template start
     * @return string             Html
     * @since 1.0.0
     */
    public function render($template = '')
    {
        if (!$this->loader || !($this->loader instanceof FilesystemLoader)) {
            $this->setLoader();
        }

        if (!$this->twig || !($this->twig instanceof Environment)) {
            $this->setEnvironment();
        }

        return $this->renderTemplate($template);
    }
}
