<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\Panel\Library;

use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\ModuleKernel;
use ZimbruCode\Module\Panel\Library\Traits\CallbackTrait;
use ZimbruCode\Module\Panel\Library\Traits\ContentUtilityTrait;

/**
 * Class : Control kernel
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
abstract class ControlKernel extends ModuleKernel
{
    use ContentUtilityTrait, CallbackTrait;

    /**
     * Get control path
     *
     * @param  string $path   Additional part of path
     * @return string         The control path
     * @since 1.0.0
     */
    public function getControlPath(string $path = ''): string
    {
        return wp_normalize_path(dirname((new \ReflectionObject($this))->getFileName()) . $path);
    }

    /**
     * Get control url
     *
     * @param  string $url   Additional part of url
     * @return string        The control URL
     * @since 1.0.0
     */
    public function getControlURL(string $url = ''): string
    {
        return Tools::getURL($this->getControlPath()) . $url;
    }

    /**
     * Add custom shell function
     *
     * @param string $name   Name of function
     * @param string $method
     * @param string $type
     * @return void          This function does not return a value
     * @since 1.0.0
     */
    protected function addShellFunction(string $name, string $method, string $type = 'panel-control-shell'): void // TODO: Posibil de scimbat denumirea
    {
        if (!is_callable($method)) {
            $method = [$this, $method];
        }

        $this->callback()->add($type, function ($shell) use ($name, $method) {
            $shell->$name = function (...$args) use ($method) {
                return call_user_func_array($method, $args);
            };
        });
    }

    /**
     * Add template var
     *
     * @param string $name
     * @param mix    $value
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    protected function addTemplateVar(string $name, $value = ''): void
    {
        if ($name) {
            $this->callback()->add('panel-render', function ($ttb) use ($name, $value) {
                $ttb->addVar($name, $value);
            });
        }
    }

    /**
     * Add less var
     *
     * @param  string $slug
     * @param  mix    $value
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    protected function addLessVar(string $slug, $value = ''): void
    {
        $this->getModuleData('asset')->addLessVar($slug, $value);
    }

    /**
     * Add control asset
     *
     * @param string $path   Asset path or package name
     * @return void          This function does not return a value
     * @since 1.0.0
     */
    protected function addAsset(string $path): void
    {
        if (!$path) {
            throw new \InvalidArgumentException('Path is empty.');
        }

        $this->getModuleData('asset')->add($path);
    }

    /**
     * Localizes a registered script with data for a JavaScript variable
     *
     * @param  array  $data   The data itself
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    protected function localize(array $data = []): void
    {
        $control = basename($this->getControlPath());
        $this->addModuleData("control-localize-vars/{$control}", $data);
    }
}
