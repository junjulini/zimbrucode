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
use ZimbruCode\Component\TemplateBridges\Helper\ShellKernel;
use ZimbruCode\Component\TemplateBridges\TwigTemplateBridge;
use ZimbruCode\Module\Panel\Library\Traits\ContentUtilityTrait;

/**
 * Class : Module/Panel/Library : Control kernel
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
     * @param  string $path   Additional part of the path
     * @return string         Control path
     * @since 1.0.0
     */
    public function getControlPath(string $path = ''): string
    {
        return wp_normalize_path(dirname((new ReflectionObject($this))->getFileName()) . $path);
    }

    /**
     * Get control url
     *
     * @param  string $url   Additional part of the url
     * @return string        Control URL
     * @since 1.0.0
     */
    public function getControlURL(string $url = ''): string
    {
        return Tools::getURL($this->getControlPath()) . $url;
    }

    /**
     * Add template function
     *
     * @param string $name     Function name
     * @param string $method   Callback
     * @param string $type     Part of the hook name
     * @return void
     * @since 1.0.0
     */
    protected function addTemplateFunction(string $name, string $method, string $type = 'control_shell'): void
    {
        if (!is_callable($method)) {
            $method = [$this, $method];
        }

        $this->addAction("zc/module/panel/{$this->getModuleSetting('slug')}/{$type}", function (ShellKernel $shell) use ($name, $method): void {
            $shell->$name = function (...$args) use ($method) {
                return call_user_func_array($method, $args);
            };
        });
    }

    /**
     * Add template variable
     *
     * @param string $name    Variable name
     * @param mix    $value   Variable value
     * @return void
     * @since 1.0.0
     */
    protected function addTemplateVar(string $name, $value = ''): void
    {
        if ($name) {
            $this->addAction("zc/module/panel/{$this->getModuleSetting('slug')}/render", function (TwigTemplateBridge $ttb) use ($name, $value): void {
                $ttb->addVar($name, $value);
            });
        }
    }

    /**
     * Add scss variable
     *
     * @return void
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
     * @return void
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
     * @param  array $data   The data itself
     * @return void
     * @since 1.0.0
     */
    protected function localize(array $data = []): void
    {
        $control = basename($this->getControlPath());
        $this->addModuleData("control-localize-vars/{$control}", $data);
    }
}
