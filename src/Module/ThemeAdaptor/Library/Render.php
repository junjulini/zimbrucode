<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\ThemeAdaptor\Library;

use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Handler\Traits\OptionHandlerTrait;
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
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Render
{
    use OptionHandlerTrait;

    protected $__ttb;
    protected $__data = [
        'functions' => [],
        'escapers'  => [],
        'filters'   => [],
        'template'  => false,
    ];

    protected $__eflush;

    public function __construct(string $template, string $locationPath, bool $directRender = true, bool $directMode = false, bool $flush = true)
    {
        if (!$template) {
            throw new \InvalidArgumentException('Template is empty.');
        }

        $this->__ttb              = new TwigTemplateBridge;
        $this->__data['template'] = $template;
        $this->__flush            = $flush;

        if ($directMode === false) {

            // Set core views path
            $this->addLocationPath($locationPath, 'core');

            if (Tools::isChildTheme()) {

                // Set child views path
                if (file_exists($dir = wp_normalize_path(get_stylesheet_directory()) . '/views')) {
                    $this->addLocationPath($dir);
                }

                if (!file_exists(Kernel::service('app-locator')->getViewPath())) {
                    throw new \RuntimeException('App views dir don\'t exist.');
                }

                // Set views path
                $this->addLocationPath(Kernel::service('app-locator')->getViewPath());

                // Load model if exist
                if (file_exists($model = wp_normalize_path(get_stylesheet_directory()) . '/models/' . str_replace('.twig', '.php', $this->__data['template']))) {
                    require $model;
                } elseif (file_exists($model = Kernel::service('app-locator')->getModelPath(str_replace('.twig', '.php', $this->__data['template'])))) {
                    require $model;
                }
            } else {
                if (!file_exists(Kernel::service('app-locator')->getViewPath())) {
                    throw new \RuntimeException('App views dir don\'t exist.');
                }

                // Set views path
                $this->addLocationPath(Kernel::service('app-locator')->getViewPath());

                // Load model if exist
                if (file_exists($model = Kernel::service('app-locator')->getModelPath(str_replace('.twig', '.php', $this->__data['template'])))) {
                    require $model;
                }
            }
        } else {
            $this->addLocationPath($locationPath);
        }

        if (Kernel::getGlobal('core/module/theme-adaptor/cache')) {
            $this->__ttb->addCachePath(Kernel::service('app-locator')->getCachePath('twig'));
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
        new TwigFunctions($this->__ttb);

        // Add functions
        foreach ($this->__data['functions'] as $name => $method) {
            $this->__ttb->addFunction($name, $method);
        }

        // Add escapers
        foreach ($this->__data['escapers'] as $name => $method) {
            $this->__ttb->addEscaper($name, $method);
        }

        // Add filters
        foreach ($this->__data['filters'] as $name => $method) {
            $this->__ttb->addFilter($name, $method);
        }

        // Filters
        apply_filters('zc/module/theme_adaptor/twig/shell/post', $this->post);
        apply_filters('zc/module/theme_adaptor/twig/shell/query', $this->query);
        apply_filters('zc/module/theme_adaptor/twig/shell/sidebar', $this->sidebar);
        apply_filters('zc/module/theme_adaptor/twig/shell/menu', $this->menu);
        apply_filters('zc/module/theme_adaptor/twig/shell/general', $this->gen);

        // Action
        do_action('zc/module/theme_adaptor/twig', $this->__ttb, $this->__data['template'], $locationPath);

        // Run loader & environment
        $this->__ttb->addLoader();
        $this->__ttb->addEnvironment();

        // Set extensions
        new InitTwigExtensions($this->__ttb->getTWIG());

        if ($directRender === true) {
            $this->renderContent();
        }
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
        return $this->__ttb->getVar($name);
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
        $this->__ttb->addVar($name, $value);
    }

    /**
     * Add var
     *
     * @param string $name    Name of var
     * @param mix    $value   Value of var
     * @since 1.0.0
     */
    public function addVar(string $name, $value): void
    {
        $this->__ttb->addVar($name, $value);
    }

    /**
     * Add vars
     *
     * @param array $vars   Vars
     * @since 1.0.0
     */
    public function addVars(array $vars): void
    {
        $this->__ttb->getVars($vars);
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

        $this->__data['functions'][$name] = $method;
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

        $this->__data['escapers'][$name] = $method;
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

        $this->__data['filters'][$name] = $method;
    }

    /**
     * Add load path
     *
     * @param string  $path        Path of template
     * @param string  $namespace   Namespace of templates
     * @since 1.0.0
     */
    public function addLocationPath(string $path, string $namespace = null): void
    {
        $this->__ttb->addLocationPath($path, $namespace);
    }

    /**
     * Render content
     *
     * @return void
     */
    public function renderContent(): void
    {
        if ($this->__flush === true) {
            flush();
        }

        echo $this->__ttb->render($this->__data['template']);
    }
}
