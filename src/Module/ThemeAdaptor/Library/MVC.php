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

use RuntimeException;
use ZimbruCode\AppKernel;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Developer\DeveloperMode;
use ZimbruCode\Component\Handler\Traits\GlobalCacheHandlerTrait;
use ZimbruCode\Component\Handler\Traits\OptionHandlerTrait;
use ZimbruCode\Component\Handler\Traits\RequestHandlerTrait;
use ZimbruCode\Component\Handler\Traits\SessionHandlerTrait;
use ZimbruCode\Component\Handler\Traits\HooksHandlerTrait;

/**
 * Class : Module/ThemeAdaptor/Library : MVC - The controller that handles the model and view layers to work together
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.3
 */
class MVC
{
    use OptionHandlerTrait, GlobalCacheHandlerTrait, RequestHandlerTrait, SessionHandlerTrait, HooksHandlerTrait;

    protected $__render;

    /**
     * Constructor
     *
     * @param string $template         Template path
     * @param string $TDP              Templates directory path
     * @param array  $additionalData   Additional data for rendering
     * @since 1.0.0
     */
    public function __construct(string $template, string $TDP, array $additionalData = [])
    {
        $this->__render = new Render($template);
        $this->__render->addLocationPath($TDP, 'core');

        // Variables
        if (!empty($additionalData['vars']) && is_array($additionalData['vars'])) {
            $this->addVars($additionalData['vars']);
        }

        // Functions
        if (!empty($additionalData['functions']) && is_array($additionalData['functions'])) {
            foreach ($additionalData['functions'] as $name => $method) {
                $this->addFunction($name, $method);
            }
        }

        if (Tools::isChildTheme()) {

            // Set child views path
            if (file_exists($dir = self::service('app')->getChildViewPath())) {
                $this->__render->addLocationPath($dir);
            }

            if (!file_exists($this->service('app')->getViewPath())) {
                throw new RuntimeException('ZE0138');
            }

            // Set views path
            $this->__render->addLocationPath($this->service('app')->getViewPath());

            // Load model if exist
            if (file_exists($model = self::service('app')->getChildModelPath(str_replace('.twig', '.php', $template)))) {
                require $model;
            } elseif (file_exists($model = $this->service('app')->getModelPath(str_replace('.twig', '.php', $template)))) {
                require $model;
            }
        } else {
            if (!file_exists($this->service('app')->getViewPath())) {
                throw new RuntimeException('ZE0139');
            }

            // Set views path
            $this->__render->addLocationPath($this->service('app')->getViewPath());

            // Load model if exist
            if (file_exists($model = $this->service('app')->getModelPath(str_replace('.twig', '.php', $template)))) {
                require $model;
            }
        }

        $this->__render->setupEnvironment();
        $this->__render->renderContent();
    }

    /**
     * Get variable
     *
     * @param  string $name   Variable name
     * @return mix            Variable value
     * @since 1.0.0
     */
    public function __get(string $name)
    {
        return $this->getVar($name);
    }

    /**
     * Add variable (setter)
     *
     * @param string $name    Variable name
     * @param mix    $value   Variable value
     * @since 1.0.0
     */
    public function __set(string $name, $value)
    {
        $this->addVar($name, $value);
    }

    /**
     * Get variable
     *
     * @param string $name    Variable name
     * @return mix            Variable value
     * @since 1.0.0
     */
    public function getVar(string $name)
    {
        return $this->__render->getVar($name);
    }

    /**
     * Add variable
     *
     * @param string $name    Variable name
     * @param mix    $value   Variable value
     * @since 1.0.0
     */
    public function addVar(...$args): void
    {
        $this->__render->addVar(...$args);
    }

    /**
     * Add variables
     *
     * @param array $vars   List of variables
     * @since 1.0.0
     */
    public function addVars(array $vars): void
    {
        $this->__render->addVars($vars);
    }

    /**
     * Add function
     *
     * @param  string   $name     Function name
     * @param  callable $method   Callback
     * @return void
     * @since 1.0.0
     */
    public function addFunction(...$args): void
    {
        $this->__render->addFunction(...$args);
    }

    /**
     * Add escaper
     *
     * @param  string   $name     Escaper name
     * @param  callable $method   Callback
     * @return void
     * @since 1.0.0
     */
    public function addEscaper(...$args): void
    {
        $this->__render->addEscaper(...$args);
    }

    /**
     * Add filter
     *
     * @param  string   $name     Filter name
     * @param  callable $method   Callback
     * @return void
     * @since 1.0.0
     */
    public function addFilter(...$args): void
    {
        $this->__render->addFilter(...$args);
    }

    /**
     * Get environment
     *
     * @return string   Environment
     * @since 1.0.0
     */
    public function getEnvironment(): string
    {
        return Kernel::getEnvironment();
    }

    /**
     * Get application instance
     *
     * @return AppKernel
     * @since 1.0.0
     */
    public function app(): AppKernel
    {
        return self::getGlobalCache('app-instance');
    }

    /**
     * Developer message
     *
     * @param string $type    Message type
     * @param string $title   Message title
     * @param string $msg     Message text
     * @return DeveloperMode|null
     * @since 1.0.0
     */
    public function dev(string $type = '', string $title = 'Title', string $msg = ' ... '): ?DeveloperMode
    {
        return Kernel::dev($type, $title, $msg);
    }

    /**
     * Module loader
     *
     * @param array $config   Module config
     * @return ModuleLoader
     * @since 1.0.0
     */
    public function module(array $config = []): object
    {
        return Kernel::module($config);
    }

    /**
     * Get a service or register a new service
     *
     * @param  string      $service   Service name
     * @param  object|null $handler   Service object
     * @return object|null            Service object or null
     * @since 1.0.0
     */
    public function service(...$args)
    {
        return Kernel::service(...$args);
    }

    /**
     * Development or production data
     *
     * @param  mix $value1   First value
     * @param  mix $value2   Last value
     * @return mix           Action result
     * @since 1.0.0
     */
    public function dop(...$args)
    {
        return Kernel::dop(...$args);
    }

    /**
     * Get global data
     *
     * @param  string $path      Array path
     * @param  mix    $default   Default value
     * @return mix               Global data
     * @since 1.0.0
     */
    public function getGlobal(...$args)
    {
        return Kernel::getGlobal(...$args);
    }

    /**
     * ifG : If global exist, return value1, if not, return value2
     *
     * @param  string  $path     Array path
     * @param  mix     $value1   Value 1
     * @param  mix     $value2   Value 2
     * @return mix               Action result
     * @since 1.0.0
     */
    public function ifG(...$args)
    {
        return Kernel::ifG(...$args);
    }
}
