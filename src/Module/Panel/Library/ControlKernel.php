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
    public function getControlPath($path = '')
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
    public function getControlURL($url = '')
    {
        return Tools::getURL($this->getControlPath()) . $url;
    }

    /**
     * Set custom shell function
     * 
     * @param string   $name   Name of function
     * @param callable $method
     * @param string   $type
     * @return void            This function does not return a value
     * @since 1.0.0
     */
    protected function setShellFunction($name, callable $method, $type = 'panel-control-shell') // TODO: Posibil de scimbat denumirea
    {
        $this->callback()->set($type, function ($shell) use ($name, $method) {
            $shell->$name = function (...$args) use ($method) {
                return call_user_func_array($method, $args);
            };
        });
    }

    /**
     * Set template var
     * 
     * @param string $name
     * @param mix    $value
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    protected function setTemplateVar($name, $value = '')
    {
        if ($name && is_string($name)) {
            $this->callback()->set('panel-render', function ($ttb) use ($name, $value) {
                $ttb->setVar($name, $value);
            });
        }
    }

    /**
     * Set less var
     * 
     * @param  string $slug
     * @param  mix    $value
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    protected function setLessVar($slug, $value = '')
    {
        $this->getModuleData('asset')->setLessVar($slug, $value);
    }

    /**
     * Set control asset
     * 
     * @param string $path   Asset path or package name
     * @return void          This function does not return a value
     * @since 1.0.0
     */
    protected function setAsset($path)
    {
        if (!$path) {
            throw new \InvalidArgumentException(esc_html__('Path is empty.', 'zc'));
        }

        $this->getModuleData('asset')->set($path);
    }

    /**
     * Localizes a registered script with data for a JavaScript variable
     * 
     * @param  array  $data   The data itself
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    protected function localize(array $data = [])
    {
        $control = basename($this->getControlPath());
        $this->setModuleData("control-localize-vars/{$control}", $data);
    }
}
