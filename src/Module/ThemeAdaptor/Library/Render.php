<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\ThemeAdaptor\Library;

use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\TemplateBridges\TwigTemplateBridge;
use ZimbruCode\Module\ThemeAdaptor\Library\Shell\GeneralShell;
use ZimbruCode\Module\ThemeAdaptor\Library\Shell\MenuShell;
use ZimbruCode\Module\ThemeAdaptor\Library\Shell\PostShell;
use ZimbruCode\Module\ThemeAdaptor\Library\Shell\QueryShell;
use ZimbruCode\Module\ThemeAdaptor\Library\Shell\SidebarShell;
use ZimbruCode\Module\ThemeAdaptor\Library\TwigExtension\InitTwigExtensions;
use ZimbruCode\Module\ThemeAdaptor\Library\TwigFunctions;

/**
 * Class : Render
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class Render
{
    protected $ttb;
    protected $flush;

    protected $data = [
        'functions' => [],
        'escapers'  => [],
        'filters'   => [],
        'template'  => '',
    ];

    public function __construct(string $template, string $locationPath = '', bool $flush = true)
    {
        if (!$template) {
            throw new \InvalidArgumentException('Template is empty.');
        }

        $this->ttb   = new TwigTemplateBridge;
        $this->flush = $flush;

        $this->data['template'] = $template;

        if ($locationPath) {
            $this->addLocationPath($locationPath);
            $this->setupEnvironment();
        }
    }

    public function setupEnvironment()
    {
        if (Kernel::getGlobal('core/module/theme-adaptor/cache')) {
            $this->ttb->addCachePath(Kernel::service('app')->getCachePath('twig'));
        }

        // Default shells
        $this->post    = new PostShell;
        $this->query   = new QueryShell;
        $this->sidebar = new SidebarShell;
        $this->menu    = new MenuShell;

        $gs = new GeneralShell;
        $this->general = $gs;
        $this->gen     = $gs;

        // Default functions
        new TwigFunctions($this->ttb);

        // Add functions
        foreach ($this->data['functions'] as $name => $method) {
            $this->ttb->addFunction($name, $method);
        }

        // Add escapers
        foreach ($this->data['escapers'] as $name => $method) {
            $this->ttb->addEscaper($name, $method);
        }

        // Add filters
        foreach ($this->data['filters'] as $name => $method) {
            $this->ttb->addFilter($name, $method);
        }

        // Action
        do_action('zc/module/theme_adaptor/render', $this, $this->ttb);

        // Run loader & environment
        $this->ttb->addLoader();
        $this->ttb->addEnvironment();

        // Set extensions
        new InitTwigExtensions($this->ttb->getTWIG());
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
        return $this->ttb->getVar($name);
    }

    /**
     * Add var (setter)
     *
     * @param string $name    Name of var
     * @param mix    $value   Value of var
     * @since 1.0.0
     */
    public function __set($name, $value)
    {
        $this->ttb->addVar($name, $value);
    }

    /**
     * Add var
     *
     * @param string $name    Name of var
     * @since 1.0.0
     */
    public function getVar(string $name)
    {
        return $this->ttb->getVar($name);
    }

    /**
     * Add var
     *
     * @param string $name    Name of var
     * @param mix    $value   Value of var
     * @since 1.0.0
     */
    public function addVar(...$args): void
    {
        $this->ttb->addVar(...$args);
    }

    /**
     * Add vars
     *
     * @param array $vars   Vars
     * @since 1.0.0
     */
    public function addVars(array $vars): void
    {
        $this->ttb->addVars($vars);
    }

    /**
     * Add function
     *
     * @param  string   $name     Function name
     * @param  callable $method   The function that will be called
     * @return void               This function does not return a value
     * @since 1.0.0
     */
    public function addFunction(string $name, callable $method): void
    {
        if (!$name) {
            throw new \InvalidArgumentException('Function name is empty.');
        }

        $this->data['functions'][$name] = $method;
    }

    /**
     * Add escaper
     *
     * @param  string   $name     Escaper name
     * @param  callable $method   The function that will be called
     * @return void               This function does not return a value
     * @since 1.0.0
     */
    public function addEscaper(string $name, callable $method): void
    {
        if (!$name) {
            throw new \InvalidArgumentException('Escaper function name is empty.');
        }

        $this->data['escapers'][$name] = $method;
    }

    /**
     * Add filter
     *
     * @param  string   $name     Filter name
     * @param  callable $method   The function that will be called
     * @return void               This function does not return a value
     * @since 1.0.0
     */
    public function addFilter(string $name, callable $method): void
    {
        if (!$name) {
            throw new \InvalidArgumentException('Filter function name is empty.');
        }

        $this->data['filters'][$name] = $method;
    }

    /**
     * Add load path
     *
     * @param string  $path        Path of template
     * @param string  $namespace   Namespace of templates
     * @since 1.0.0
     */
    public function addLocationPath(...$args): void
    {
        $this->ttb->addLocationPath(...$args);
    }

    public function getLocationPath(): string
    {
        return $this->data['location-path'];
    }

    public function getTemplate(): string
    {
        return $this->data['template'];
    }

    /**
     * Render content
     *
     * @return void
     */
    public function renderContent(): void
    {
        if ($this->flush === true) {
            flush();
        }

        echo $this->ttb->render($this->getTemplate());
    }
}
