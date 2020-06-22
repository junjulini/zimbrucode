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
use ZimbruCode\Component\TemplateBridges\Helper\GlobalShell;
use ZimbruCode\Module\ThemeAdaptor\Library\TwigFunctions;
use ZimbruCode\Module\ThemeAdaptor\Library\TwigExtension\InitTwigExtensions;
use ZimbruCode\Module\ThemeAdaptor\Library\Shell\RenderShell;
use ZimbruCode\Module\ThemeAdaptor\Library\Shell\PostShell;
use ZimbruCode\Module\ThemeAdaptor\Library\Shell\QueryShell;
use ZimbruCode\Module\ThemeAdaptor\Library\Shell\SidebarShell;
use ZimbruCode\Module\ThemeAdaptor\Library\Shell\MenuShell;
use ZimbruCode\Module\ThemeAdaptor\Library\Shell\GeneralShell;

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
        'template'  => false
    ];

    protected $__eflush;

    public function __construct($template, $locationPath, $directRender = true, $directMode = false, $flush = true)
    {
        if (!$template || !is_string($template)) {
            throw new \InvalidArgumentException('Template is empty or not string.');
        }

        $this->__ttb = new TwigTemplateBridge;
        $this->__data['template'] = $template;
        $this->__flush = $flush;

        if ($directMode === false) {

            // Set core views path
            $this->addLoadPath($locationPath, 'core');

            if (Tools::isChildTheme()) {

                // Set child views path
                if (file_exists($dir = wp_normalize_path(get_stylesheet_directory()) . '/views')) {
                    $this->addLoadPath($dir);
                }

                if (!file_exists(Kernel::service('app-locator')->getViewPath())) {
                    throw new \RuntimeException('App views dir don\'t exist.');
                }

                // Set views path
                $this->addLoadPath(Kernel::service('app-locator')->getViewPath());

                // Load model if exist
                if (file_exists($model = wp_normalize_path(get_stylesheet_directory()) . '/models/' . str_replace('.twig', '.php', $this->__data['template']))) {
                    require $model;
                } elseif (file_exists($model = Kernel::service('app-locator')->getModelPath('/' . str_replace('.twig', '.php', $this->__data['template'])))) {
                    require $model;
                }
            } else {
                if (!file_exists(Kernel::service('app-locator')->getViewPath())) {
                    throw new \RuntimeException('App views dir don\'t exist.');
                }

                // Set views path
                $this->addLoadPath(Kernel::service('app-locator')->getViewPath());

                // Load model if exist
                if (file_exists($model = Kernel::service('app-locator')->getModelPath('/' . str_replace('.twig', '.php', $this->__data['template'])))) {
                    require $model;
                }
            }
        } else {
            $this->addLoadPath($locationPath);
        }

        if (Kernel::getGlobal('core/module/theme-adaptor/cache')) {
            $this->__ttb->setCachePath(Kernel::service('app-locator')->getCachePath('/twig'));
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
            $this->__ttb->setFunction($name, $method);
        }

        // Add escapers
        foreach ($this->__data['escapers'] as $name => $method) {
            $this->__ttb->setEscaper($name, $method);
        }

        // Add filters
        foreach ($this->__data['filters'] as $name => $method) {
            $this->__ttb->setFilter($name, $method);
        }

        // Filters
        apply_filters('zc/module/theme_adaptor/twig/shell/post',    $this->post);
        apply_filters('zc/module/theme_adaptor/twig/shell/query',   $this->query);
        apply_filters('zc/module/theme_adaptor/twig/shell/sidebar', $this->sidebar);
        apply_filters('zc/module/theme_adaptor/twig/shell/menu',    $this->menu);
        apply_filters('zc/module/theme_adaptor/twig/shell/general', $this->gen);

        // Action
        do_action('zc/module/theme_adaptor/twig', $this->__ttb, $this->__data['template'], $locationPath);

        // Run loader & environment
        $this->__ttb->setLoader();
        $this->__ttb->setEnvironment();

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
     * Set var (setter)
     * 
     * @param string $name    Name of var
     * @param mix    $value   Value of var
     * @since 1.0.0
     */
    public function __set($name, $value)
    {
        return $this->__ttb->setVar($name, $value);
    }

    /**
     * Set var
     * 
     * @param string $name    Name of var
     * @param mix    $value   Value of var
     * @since 1.0.0
     */
    public function setVar($name, $value)
    {
        return $this->__ttb->setVar($name, $value);
    }

    /**
     * Set vars
     * 
     * @param array $vars   Vars
     * @since 1.0.0
     */
    public function setVars(array $vars)
    {
        return $this->__ttb->getVars($vars);
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

        $this->__data['functions'][$name] = $method;
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

        $this->__data['escapers'][$name] = $method;
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

        $this->__data['filters'][$name] = $method;
    }

    /**
     * Set load path
     * 
     * @param string  $path        Path of template
     * @param string  $namespace   Namespace of templates
     * @since 1.0.0
     */
    public function addLoadPath($path, $namespace = null)
    {
        return $this->__ttb->addLoadPath($path, $namespace);
    }

    /**
     * Render content
     *
     * @return void
     */
    public function renderContent()
    {
        if ($this->__flush === true) {
            flush();
        }

        echo $this->__ttb->render($this->__data['template']);
    }
}
