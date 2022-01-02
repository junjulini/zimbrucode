<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\Panel\Library;

use InvalidArgumentException;
use ReflectionObject;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\ModuleKernel;
use ZimbruCode\Module\Panel\Library\Traits\ContentUtilityTrait;

/**
 * Class : Control kernel
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
abstract class ControlKernel extends ModuleKernel
{
    use ContentUtilityTrait;

    /**
     * Get control path
     *
     * @param  string $path   Additional part of path
     * @return string         The control path
     * @since 1.0.0
     */
    public function getControlPath(string $path = ''): string
    {
        return wp_normalize_path(dirname((new ReflectionObject($this))->getFileName()) . $path);
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
    protected function addShellFunction(string $name, string $method, string $type = 'control_shell'): void
    {
        if (!is_callable($method)) {
            $method = [$this, $method];
        }

        $this->addAction("zc/module/panel/{$this->getModuleSetting('slug')}/{$type}", function (object $shell) use ($name, $method): void {
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
            $this->addAction("zc/module/panel/{$this->getModuleSetting('slug')}/render", function (object $ttb) use ($name, $value): void {
                $ttb->addVar($name, $value);
            });
        }
    }

    /**
     * Add scss var
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    protected function addScssVar(...$args): void
    {
        $this->getModuleData('asset')->addScssVar(...$args);
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
            throw new InvalidArgumentException('ZE0134');
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
