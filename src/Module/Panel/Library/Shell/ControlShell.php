<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\Panel\Library\Shell;

use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Module\Panel\Library\ControlManager;

/**
 * Class : Control shell
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class ControlShell
{
    protected $panel;
    protected $controlData  = [];
    protected $customMethod = [];

    public function __construct(ControlManager $panel, array $controlData)
    {
        $this->panel       = $panel;
        $this->controlData = $controlData;
    }

    protected function getControlData(string $setting, $default = null)
    {
        return $this->controlData[$setting] ?? $default;
    }

    /**
     * Set custom method
     *
     * @param string   $name   Method name
     * @param callable $method
     * @return void            This function does not return a value
     * @since 1.0.0
     */
    public function __set(string $name, callable $method)
    {
        $this->customMethod[$name] = $method;
    }

    /**
     * Call custom method
     *
     * @param  string $name   Method name
     * @param  array  $args   Method args
     * @return mix            Method return after calling
     * @since 1.0.0
     */
    public function __call(string $name, array $args)
    {
        if (!empty($this->customMethod[$name]) && is_callable($this->customMethod[$name])) {
            return call_user_func_array($this->customMethod[$name], $args);
        }
    }

    /**
     * Control saved option
     *
     * @param mix $default
     * @return mix
     */
    public function option(string $option = null, $default = null)
    {
        $option  = $option ?? $this->ID();
        $default = $default ?? $this->defaultValue();

        return $this->panel->getOption($option, $default);
    }

    /**
     * Control URL
     *
     * @param string $default
     * @return mix
     */
    public function url(string $url = ''): string
    {
        return $this->panel->getControl($this->type())->getControlURL($url);
    }

    /**
     * Control path
     *
     * @param string $default
     * @return mix
     */
    public function path(string $path = ''): string
    {
        return $this->panel->getControl($this->type())->getControlPath($path);
    }

    ####################################################################################################################

    /**
     * Control type
     *
     * @param mix
     * @return mix
     */
    public function type($default = null)
    {
        return $this->getControlData(__FUNCTION__, $default);
    }

    /**
     * Control ID
     *
     * @param mix
     * @return mix
     */
    public function ID($default = '')
    {
        $value = $this->getControlData('id', $default);
        return ($value) ? Kernel::getGlobal('core/module/panel/prefix-slug') . $value : $default;
    }

    /**
     * Control title
     *
     * @param mix
     * @return mix
     */
    public function title($default = null)
    {
        return $this->getControlData(__FUNCTION__, $default);
    }

    /**
     * Control description
     *
     * @param mix
     * @return mix
     */
    public function desc($default = null)
    {
        return $this->getControlData(__FUNCTION__, $default);
    }

    /**
     * Control style/styles
     *
     * @param mix
     * @return mix
     */
    public function style($default = null)
    {
        return $this->getControlData(__FUNCTION__, $default);
    }

    /**
     * Control classes
     *
     * @param mix
     * @return mix
     */
    public function classes($default = null)
    {
        return $this->getControlData(__FUNCTION__, $default);
    }

    /**
     * Control full width
     *
     * @param mix
     * @return mix
     */
    public function fullWidth($default = false)
    {
        return $this->getControlData('full-width', $default);
    }

    /**
     * Control border line
     *
     * @param mix
     * @return mix
     */
    public function borderLine($default = false)
    {
        return $this->getControlData('border-line', $default);
    }

    /**
     * Control ratio ( desc/content )
     *
     * @param mix
     * @return mix
     */
    public function ratio($default = null)
    {
        return $this->getControlData(__FUNCTION__, $default);
    }

    /**
     * Control help
     *
     * @param mix
     * @return mix
     */
    public function help($default = null)
    {
        return $this->getControlData(__FUNCTION__, $default);
    }

    /**
     * Control ignore ( do not save )
     *
     * @param mix
     * @param bool   $return
     * @return mix
     */
    public function ignore($default = null, bool $return = false)
    {
        $value = ($this->getControlData(__FUNCTION__, $default)) ? 'data-i="i"' : '';

        if ($return == true) {
            return $value;
        } else {
            echo $value;
        }
    }

    /**
     * Control default value
     *
     * @param mix
     * @return mix
     */
    public function defaultValue($default = null)
    {
        return $this->getControlData('default', $default);
    }

    /**
     * Control condition
     *
     * @param mix
     * @return mix
     */
    public function condition($default = null)
    {
        return $this->getControlData(__FUNCTION__, $default);
    }

    /**
     * Control operator
     *
     * @param mix
     * @return mix
     */
    public function operator($default = null)
    {
        return $this->getControlData(__FUNCTION__, $default);
    }

    /**
     * Control internal content ( controls )
     *
     * @param mix
     * @return mix
     */
    public function content($default = null)
    {
        return $this->getControlData(__FUNCTION__, $default);
    }

    /**
     * Control additional settings
     *
     * @param mix
     * @return mix
     */
    public function settings($default = null)
    {
        return $this->getControlData(__FUNCTION__, $default);
    }
}
