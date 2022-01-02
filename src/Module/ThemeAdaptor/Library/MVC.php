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
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Handler\Traits\GlobalCacheHandlerTrait;
use ZimbruCode\Component\Handler\Traits\OptionHandlerTrait;
use ZimbruCode\Component\Handler\Traits\RequestHandlerTrait;
use ZimbruCode\Component\Handler\Traits\SessionHandlerTrait;

/**
 * Class : MVC : The controller that handles the model and view layers to work together
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.3
 */
class MVC
{
    use OptionHandlerTrait, GlobalCacheHandlerTrait, RequestHandlerTrait, SessionHandlerTrait;

    protected $__render;

    public function __construct(string $template, string $TA_ViewPath, array $additionalData = [])
    {
        $this->__render = new Render($template);
        $this->__render->addLocationPath($TA_ViewPath, 'core');

        // Additional vars
        if (!empty($additionalData['vars']) && is_array($additionalData['vars'])) {
            $this->addVars($additionalData['vars']);
        }

        // Additional functions
        if (!empty($additionalData['functions']) && is_array($additionalData['functions'])) {
            foreach ($additionalData['functions'] as $name => $method) {
                $this->addFunction($name, $method);
            }
        }

        if (Tools::isChildTheme()) {

            // Set child views path
            if (file_exists($dir = wp_normalize_path(get_stylesheet_directory()) . '/views')) {
                $this->__render->addLocationPath($dir);
            }

            if (!file_exists($this->service('app')->getViewPath())) {
                throw new RuntimeException('ZE0138');
            }

            // Set views path
            $this->__render->addLocationPath($this->service('app')->getViewPath());

            // Load model if exist
            if (file_exists($model = wp_normalize_path(get_stylesheet_directory()) . '/models/' . str_replace('.twig', '.php', $template))) {
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
     * Get var
     *
     * @param  string $name   Name of var
     * @return string         Value of var
     * @since 1.0.0
     */
    public function __get(string $name)
    {
        return $this->getVar($name);
    }

    /**
     * Add var (setter)
     *
     * @param string $name    Name of var
     * @param mix    $value   Value of var
     * @since 1.0.0
     */
    public function __set(string $name, $value)
    {
        $this->addVar($name, $value);
    }

    /**
     * Add var
     *
     * @param string $name    Name of var
     * @since 1.0.0
     */
    public function getVar(string $name)
    {
        return $this->__render->getVar($name);
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
        $this->__render->addVar(...$args);
    }

    /**
     * Add vars
     *
     * @param array $vars   Vars
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
     * @param  callable $method   The function that will be called
     * @return void               This function does not return a value
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
     * @param  callable $method   The function that will be called
     * @return void               This function does not return a value
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
     * @param  callable $method   The function that will be called
     * @return void               This function does not return a value
     * @since 1.0.0
     */
    public function addFilter(...$args): void
    {
        $this->__render->addFilter(...$args);
    }

    public function getEnvironment(): string
    {
        return Kernel::getEnvironment();
    }

    public function app(): object
    {
        return self::getGlobalCache('app-instance');
    }

    public function dev(string $type = '', string $title = 'Title', string $msg = ' ... '): ?object
    {
        return Kernel::dev($type, $title, $msg);
    }

    public function module(array $config = []): object
    {
        return Kernel::module($config);
    }

    public function service(...$args)
    {
        return Kernel::service(...$args);
    }

    public function dop(...$args)
    {
        return Kernel::dop(...$args);
    }

    public function getGlobal(...$args)
    {
        return Kernel::getGlobal(...$args);
    }

    public function ifG(...$args)
    {
        return Kernel::ifG(...$args);
    }
}
