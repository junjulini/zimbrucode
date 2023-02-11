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

use InvalidArgumentException;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\TemplateBridges\TwigTemplateBridge;
use ZimbruCode\Module\ThemeAdaptor\Library\Shell\AttachmentShell;
use ZimbruCode\Module\ThemeAdaptor\Library\Shell\AuthorShell;
use ZimbruCode\Module\ThemeAdaptor\Library\Shell\BodyShell;
use ZimbruCode\Module\ThemeAdaptor\Library\Shell\CategoryShell;
use ZimbruCode\Module\ThemeAdaptor\Library\Shell\CommentsShell;
use ZimbruCode\Module\ThemeAdaptor\Library\Shell\GeneralShell;
use ZimbruCode\Module\ThemeAdaptor\Library\Shell\MenuShell;
use ZimbruCode\Module\ThemeAdaptor\Library\Shell\PostShell;
use ZimbruCode\Module\ThemeAdaptor\Library\Shell\QueryShell;
use ZimbruCode\Module\ThemeAdaptor\Library\Shell\SearchShell;
use ZimbruCode\Module\ThemeAdaptor\Library\Shell\SidebarShell;
use ZimbruCode\Module\ThemeAdaptor\Library\TwigExtension\InitTwigExtensions;
use ZimbruCode\Module\ThemeAdaptor\Library\TwigFunctions;

/**
 * Class : Module/ThemeAdaptor/Library : Render
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

    /**
     * Constructor
     *
     * @param  string $template       Template path
     * @param  string $locationPath   Templates directory path
     * @param  bool   $flush          "Flush" status
     * @throws InvalidArgumentException
     * @since 1.0.0
     */
    public function __construct(string $template, string $locationPath = '', bool $flush = true)
    {
        if (!$template) {
            throw new InvalidArgumentException('ZE0140');
        }

        $this->ttb   = new TwigTemplateBridge;
        $this->flush = $flush;

        $this->data['template'] = $template;

        if ($locationPath) {
            $this->addLocationPath($locationPath);
            $this->setupEnvironment();
        }
    }

    /**
     * Setup environment
     *
     * @return void
     * @since 1.0.0
     */
    public function setupEnvironment()
    {
        if (Kernel::getGlobal('core/module/theme-adaptor/cache')) {
            $this->ttb->addCachePath(Kernel::service('app')->getCachePath('twig'));
        }

        // Default shells
        $this->post       = new PostShell;
        $this->query      = new QueryShell;
        $this->sidebar    = new SidebarShell;
        $this->menu       = new MenuShell;
        $this->comments   = new CommentsShell;
        $this->category   = new CategoryShell;
        $this->attachment = new AttachmentShell;
        $this->search     = new SearchShell;
        $this->author     = new AuthorShell;
        $this->body       = new BodyShell;

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

        // Hook
        do_action('zc/module/theme_adaptor/render', $this, $this->ttb);

        // Run loader & environment
        $this->ttb->addLoader();
        $this->ttb->addEnvironment();

        // TWIG extension initialization
        new InitTwigExtensions($this->ttb->getTWIG());
    }

    /**
     * Get variable
     *
     * @param string $name   Variable name
     * @return mixed         Variable value
     * @since 1.0.0
     */
    public function __get($name)
    {
        return $this->ttb->getVar($name);
    }

    /**
     * Add variable (setter)
     *
     * @param string $name    Variable name
     * @param mixed  $value   Variable value
     * @return void
     * @since 1.0.0
     */
    public function __set($name, $value)
    {
        $this->ttb->addVar($name, $value);
    }

    /**
     * Get variable
     *
     * @param string $name   Variable name
     * @return mixed         Variable value
     * @since 1.0.0
     */
    public function getVar(string $name)
    {
        return $this->ttb->getVar($name);
    }

    /**
     * Add variable
     *
     * @param string $name    Variable name
     * @param mixed  $value   Variable value
     * @return void
     * @since 1.0.0
     */
    public function addVar(...$args): void
    {
        $this->ttb->addVar(...$args);
    }

    /**
     * Add variables
     *
     * @param array $vars   List of variables
     * @return void
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
     * @param  callable $method   Callback
     * @throws InvalidArgumentException
     * @return void
     * @since 1.0.0
     */
    public function addFunction(string $name, callable $method): void
    {
        if (!$name) {
            throw new InvalidArgumentException('ZE0141');
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
     * @since 1.0.0
     */
    public function addEscaper(string $name, callable $method): void
    {
        if (!$name) {
            throw new InvalidArgumentException('ZE0142');
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
     * @since 1.0.0
     */
    public function addFilter(string $name, callable $method): void
    {
        if (!$name) {
            throw new InvalidArgumentException('ZE0143');
        }

        $this->data['filters'][$name] = $method;
    }

    /**
     * Add path to templates directory
     *
     * @param string  $path        Templates directory path
     * @param string  $namespace   Templates namespace
     * @return void
     * @since 1.0.0
     */
    public function addLocationPath(...$args): void
    {
        $this->ttb->addLocationPath(...$args);
    }

    /**
     * Get the path to the template directory
     *
     * @return string   Templates directory path
     * @since 1.0.0
     */
    public function getLocationPath(): string
    {
        return $this->data['location-path'];
    }

    /**
     * Get template
     *
     * @return string   Template path
     * @since 1.0.0
     */
    public function getTemplate(): string
    {
        return $this->data['template'];
    }

    /**
     * Render content
     *
     * @return void
     * @since 1.0.0
     */
    public function renderContent(): void
    {
        if ($this->flush === true) {
            flush();
        }

        echo $this->ttb->render($this->getTemplate());
    }
}
