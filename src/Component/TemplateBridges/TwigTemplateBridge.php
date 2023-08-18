<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\TemplateBridges;

use InvalidArgumentException;
use RuntimeException;
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
 * Class : Component/TemplateBridge : Twig Template
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.2.2
 */
class TwigTemplateBridge
{
    protected array $locationPath = [];
    protected string $cachePath;
    protected ?Environment $twig = null;
    protected ?FilesystemLoader $loader = null;
    protected array $data = [
        'vars'       => [],
        'functions'  => [],
        'escapers'   => [],
        'filters'    => [],
        'extensions' => [],
    ];

    /**
     * Constructor
     *
     * @param bool $loadDefaultShells   Load default shells if value true
     * @since 1.0.0
     */
    public function __construct(bool $loadDefaultShells = true)
    {
        // Twig filters
        new TwigFilters($this);

        // Twig escapers
        new TwigEscaper($this);

        // Twig functions
        new TwigFunctions($this);

        // Default shells
        if ($loadDefaultShells === true) {
            $gs = new GlobalShell;

            $this->addVar('global', $gs);
            $this->addVar('glob', $gs);
            $this->addVar('app', Kernel::getGlobalCache('app-instance'));
        }
    }

    /**
     * Get TWIG Environment
     *
     * @throws RuntimeException
     * @return Environment   TWIG Environment
     * @since 1.1.0
     */
    public function getTWIG(): Environment
    {
        if (!$this->twig || !($this->twig instanceof Environment)) {
            throw new RuntimeException('ZE0100');
        }

        return $this->twig;
    }

    /**
     * Get TWIG filesystem loader
     *
     * @throws RuntimeException
     * @return FilesystemLoader   TWIG filesystem loader
     * @since 1.1.0
     */
    public function getLoader(): FilesystemLoader
    {
        if (!$this->loader || !($this->loader instanceof FilesystemLoader)) {
            throw new RuntimeException('ZE0101');
        }

        return $this->loader;
    }

    /**
     * Get var
     *
     * @param  string $name   Var name
     * @throws RuntimeException
     * @return mixed
     * @since 1.1.0
     */
    public function __get(string $name)
    {
        if (!isset($this->data['vars'][$name])) {
            throw new RuntimeException("ZE0102 - Variable not found : {$name}");
        }

        return $this->data['vars'][$name];
    }

    /**
     * Add var (setter)
     *
     * @param  string $name    Var name
     * @param  mixed  $value   Var value
     * @throws RuntimeException
     * @return void
     * @since 1.1.0
     */
    public function __set(string $name, $value)
    {
        if ($name) {
            $this->data['vars'][$name] = $value;
        } else {
            throw new RuntimeException('ZE0103');
        }
    }

    /**
     * Get var
     *
     * @param  string $name   Var name
     * @throws RuntimeException
     * @return mixed
     * @since 1.1.0
     */
    public function getVar(string $name)
    {
        if ($name) {
            if (!isset($this->data['vars'][$name])) {
                throw new RuntimeException("ZE0104 - Variable not found : {$name}");
            }

            return $this->data['vars'][$name];
        }
    }

    /**
     * Get vars
     *
     * @return array   List of vars
     * @since 1.0.0
     */
    public function getVars(): array
    {
        return $this->data['vars'];
    }

    /**
     * Add var
     *
     * @param string $name    Var name
     * @param mixed  $value   Var value
     * @return void
     * @since 1.0.0
     */
    public function addVar(string $name, $value): void
    {
        if ($name) {
            $this->data['vars'][$name] = $value;
        }
    }

    /**
     * Add vars
     *
     * @param array $vars   List of vars
     * @since 1.0.0
     */
    public function addVars(array $vars): void
    {
        $this->data['vars'] = Tools::arrayMerge($this->data['vars'], $vars);
    }

    /**
     * Add path to templates directory
     *
     * @param string      $path        Templates directory path
     * @param string|null $namespace   Templates namespace
     * @throws RuntimeException
     * @return void
     * @since 1.1.0
     */
    public function addLocationPath(string $path, string $namespace = null): void
    {
        if (!$path) {
            throw new RuntimeException('ZE0105');
        }

        if (!Tools::isLocalPath($path)) {
            throw new RuntimeException("ZE0106 - Path is not local : {$path}");
        }

        $this->locationPath[] = [$path, $namespace];
    }

    /**
     * Add cache path
     *
     * @param string $cache   Cache path
     * @throws RuntimeException
     * @return void
     * @since 1.1.0
     */
    public function addCachePath(string $path): void
    {
        if (!$path) {
            throw new RuntimeException('ZE0107');
        }

        if (!Tools::isLocalPath($path)) {
            throw new RuntimeException("ZE0108 - Path is not local : {$path}");
        }

        $this->cachePath = $path;
    }

    /**
     * Add function
     *
     * @param  string   $name     Function name
     * @param  callable $method   Callback
     * @throws InvalidArgumentException
     * @return void
     * @since 1.1.0
     */
    public function addFunction(string $name, callable $method): void
    {
        if (!$name) {
            throw new InvalidArgumentException('ZE0109');
        }

        $this->data['functions'][$name] = $method;
    }

    /**
     * Add escaper
     *
     * @param  string   $name     Escaper name
     * @param  callable $method   Callback
     * @throws InvalidArgumentException
     * @return void
     * @since 1.1.0
     */
    public function addEscaper(string $name, callable $method): void
    {
        if (!$name) {
            throw new InvalidArgumentException('ZE0110');
        }

        $this->data['escapers'][$name] = $method;
    }

    /**
     * Add filter
     *
     * @param  string   $name     Filter name
     * @param  callable $method   Callback
     * @throws InvalidArgumentException
     * @return void
     * @since 1.1.0
     */
    public function addFilter(string $name, callable $method): void
    {
        if (!$name) {
            throw new InvalidArgumentException('ZE0111');
        }

        $this->data['filters'][$name] = $method;
    }

    /**
     * Add extension
     *
     * @param AbstractExtension $extension   Extension object
     * @return void
     * @since 1.0.0
     */
    public function addExtension(AbstractExtension $extension): void
    {
        $this->data['extensions'][] = $extension;
    }

    /**
     * Add loader
     *
     * @throws RuntimeException
     * @return void
     * @since 1.1.0
     */
    public function addLoader(): void
    {
        if (!$this->locationPath) {
            throw new RuntimeException('ZE0112');
        }

        $this->loader = new FilesystemLoader();

        // From global
        foreach (Kernel::getGlobalCache('templates-path', []) as $value) {
            if (empty($value[1])) {
                $this->loader->addPath($value[0]);
            } else {
                $this->loader->addPath($value[0], $value[1]);
            }
        }

        foreach ($this->locationPath as $value) {
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
     * Add Environment
     *
     * @return void
     * @since 1.2.2
     */
    public function addEnvironment(): void
    {
        $cache      = ($this->cachePath) ? new FilesystemCache($this->cachePath, FilesystemCache::FORCE_BYTECODE_INVALIDATION) : false;
        $this->twig = new Environment($this->getLoader(), [
            'cache'       => $cache,
            'auto_reload' => Kernel::getGlobal('core/twig-environment-auto-reload'),
        ]);

        // Global twig hook
        do_action('zc/component/twig', $this, $this->twig);

        // Functions
        if (!empty($this->data['functions'])) {
            foreach ($this->data['functions'] as $name => $method) {
                $this->twig->addFunction(new TwigFunction($name, $method));
            }
        }

        // Escapers
        if (!empty($this->data['escapers'])) {
            foreach ($this->data['escapers'] as $name => $method) {
                $this->twig->getExtension(\Twig\Extension\EscaperExtension::class)->setEscaper($name, $method);
            }
        }

        // Filters
        if (!empty($this->data['filters'])) {
            foreach ($this->data['filters'] as $name => $method) {
                $this->twig->addFilter(new TwigFilter($name, $method));
            }
        }

        // Extensions
        if (!empty($this->data['extensions'])) {
            foreach ($this->data['extensions'] as $extension) {
                $this->twig->addExtension($extension);
            }
        }
    }

    /**
     * Render template
     *
     * @param string $template   Template name
     * @return string            Html content
     * @since 1.0.0
     */
    public function renderTemplate(string $template): string
    {
        if ($template && is_string($template)) {
            return $this->twig->render($template, $this->data['vars']);
        }

        return '';
    }

    /**
     * Render
     *
     * @param string $template   Template name
     * @return string            Html content
     * @since 1.2.0
     */
    public function render(string $template = ''): string
    {
        if (!$this->loader) {
            $this->addLoader();
        }

        if (!$this->twig) {
            $this->addEnvironment();
        }

        return $this->renderTemplate($template);
    }
}
