<?php

/*
 * This file is part of the ZimbruCode package.
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
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class ControlShell
{
    protected $panel;
    protected $base = [];
    protected $customMethod = [];

    public function __construct(ControlManager $panel, array $base) {
        $this->panel = $panel;
        $this->base = $base;
    }

    protected function getBaseSetting($setting, $default = null)
    {
        return (isset($this->base[$setting])) ? $this->base[$setting] : $default;
    }

    /**
     * Set custom method
     * 
     * @param string   $name   Method name
     * @param callable $method
     * @return void            This function does not return a value
     * @since 1.0.0
     */
    public function __set($name, callable $method)
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
    public function __call($name, $args)
    {
        if (!empty($this->customMethod[$name]) && is_callable($this->customMethod[$name])) {
            return call_user_func_array($this->customMethod[$name], $args);
        }
    }

    /**
     * Control saved option
     *
     * @param string $default
     * @return mix
     */
    public function option($option = null, $default = null)
    {
        if (!isset($option)) {
            $option  = $this->ID();
            $default = (isset($default)) ? $default : $this->defaultValue();
        }

        return $this->panel->getOption($option, $default);
    }

    /**
     * Control URL
     *
     * @param string $default
     * @return string
     */
    public function url($url = '')
    {
        return $this->panel->getControl($this->type())->getControlURL($url);
    }

    /**
     * Control path
     *
     * @param string $default
     * @return string
     */
    public function path($path = '')
    {
        return $this->panel->getControl($this->type())->getControlPath($path);
    }

    ####################################################################################################################
    
    /**
     * Control type
     *
     * @param string $default
     * @return string
     */
    public function type($default = null)
    {
        return $this->getBaseSetting(__FUNCTION__, $default);
    }

    /**
     * Control ID
     *
     * @param string $default
     * @return string
     */
    public function ID($default = '')
    {
        $value = $this->getBaseSetting('id', $default);
        return ($value) ? Kernel::getGlobal('core/module/panel/prefix-slug') . $value : $default;
    }

    /**
     * Control title
     *
     * @param string $default
     * @return string
     */
    public function title($default = null)
    {
        return $this->getBaseSetting(__FUNCTION__, $default);
    }

    /**
     * Control description
     *
     * @param string $default
     * @return string
     */
    public function desc($default = null)
    {
        return $this->getBaseSetting(__FUNCTION__, $default);
    }

    /**
     * Control style/styles
     *
     * @param string $default
     * @return string
     */
    public function style($default = null)
    {
        return $this->getBaseSetting(__FUNCTION__, $default);
    }

    /**
     * Control classes
     *
     * @param string $default
     * @return string
     */
    public function classes($default = null)
    {
        return $this->getBaseSetting(__FUNCTION__, $default);
    }

    /**
     * Control full width
     *
     * @param string $default
     * @return string
     */
    public function fullWidth($default = false)
    {
        return $this->getBaseSetting('full-width', $default);
    }

    /**
     * Control border line
     *
     * @param string $default
     * @return string
     */
    public function borderLine($default = false)
    {
        return $this->getBaseSetting('border-line', $default);
    }
    
    /**
     * Control ratio ( desc/content )
     *
     * @param string $default
     * @return string
     */
    public function ratio($default = null)
    {
        return $this->getBaseSetting(__FUNCTION__, $default);
    }

    /**
     * Control help
     *
     * @param string $default
     * @return string
     */
    public function help($default = null)
    {
        return $this->getBaseSetting(__FUNCTION__, $default);
    }

    /**
     * Control ignore ( do not save )
     *
     * @param string $default
     * @param bool   $return
     * @return string
     */
    public function ignore($default = null, $return = false)
    {
        $value = ($this->getBaseSetting(__FUNCTION__, $default)) ? 'data-i="i"' : '';
        
        if ($return == true) {
            return $value;
        } else {
            echo $value;
        }
    }

    /**
     * Control default value
     *
     * @param string $default
     * @return string
     */
    public function defaultValue($default = null)
    {
        return $this->getBaseSetting('default', $default);
    }

    /**
     * Control condition
     *
     * @param string $default
     * @return string
     */
    public function condition($default = null)
    {
        return $this->getBaseSetting(__FUNCTION__, $default);
    }

    /**
     * Control operator
     *
     * @param string $default
     * @return string
     */
    public function operator($default = null)
    {
        return $this->getBaseSetting(__FUNCTION__, $default);
    }

    /**
     * Control internal content ( controls )
     *
     * @param string $default
     * @return string
     */
    public function content($default = null)
    {
        return $this->getBaseSetting(__FUNCTION__, $default);
    }

    /**
     * Control additional settings
     *
     * @param string $default
     * @return string
     */
    public function settings($default = null)
    {
        return $this->getBaseSetting(__FUNCTION__, $default);
    }
}
