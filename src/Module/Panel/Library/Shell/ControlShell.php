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
use ZimbruCode\Component\TemplateBridges\Helper\ShellKernel;
use ZimbruCode\Module\Panel\Library\ControlManager;

/**
 * Class : Module/Panel/Library/Shell : Control shell
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.2.0
 */
class ControlShell extends ShellKernel
{
    protected ControlManager $panel;
    protected array $controlData = [];

    /**
     * Constructor
     *
     * @param ControlManager $panel   Panel object
     * @param array $controlData      Control data
     * @since 1.0.0
     */
    public function __construct(ControlManager $panel, array $controlData)
    {
        $this->panel       = $panel;
        $this->controlData = $controlData;
    }

    /**
     * Get control data
     *
     * @param string $setting   Setting name
     * @param mixed  $default   Default value
     * @return mixed            Control data
     * @since 1.1.0
     */
    protected function getControlData(string $setting, $default = null)
    {
        return $this->controlData[$setting] ?? $default;
    }

    /**
     * Get control option
     *
     * @param string|null $option    Option name
     * @param mixed       $default   Default value
     * @return mixed                 Option value
     * @since 1.0.0
     */
    public function option(string $option = null, $default = null)
    {
        $option  = $option ?? $this->ID();
        $default = $default ?? $this->defaultValue();

        return $this->panel->getOption($option, $default);
    }

    /**
     * Get control URL
     *
     * @param string $url   Additional part of the URL
     * @return string       Control URL
     * @since 1.0.0
     */
    public function url(string $url = ''): string
    {
        return $this->panel->getControl($this->type())->getControlURL($url);
    }

    /**
     * Get control path
     *
     * @param string $path   Additional part of the path
     * @return string        Control path
     * @since 1.0.0
     */
    public function path(string $path = ''): string
    {
        return $this->panel->getControl($this->type())->getControlPath($path);
    }

    ####################################################################################################################

    /**
     * Control : Type
     *
     * @param mixed $default   Default value
     * @return mixed           Type
     * @since 1.1.0
     */
    public function type($default = null)
    {
        return $this->getControlData(__FUNCTION__, $default);
    }

    /**
     * Control : ID
     *
     * @param mixed $default   Default value
     * @return string|mixed    ID
     * @since 1.1.0
     */
    public function ID($default = '')
    {
        $value = $this->getControlData('id', $default);
        return ($value) ? Kernel::getGlobal('core/module/panel/prefix-slug') . $value : $default;
    }

    /**
     * Control : Title
     *
     * @param mixed $default   Default value
     * @return mixed           Title
     * @since 1.1.0
     */
    public function title($default = null)
    {
        return $this->getControlData(__FUNCTION__, $default);
    }

    /**
     * Control : Description
     *
     * @param mixed $default   Default value
     * @return mixed           Description
     * @since 1.1.0
     */
    public function desc($default = null)
    {
        return $this->getControlData(__FUNCTION__, $default);
    }

    /**
     * Control : Styles
     *
     * @param mixed $default   Default value
     * @return mixed           Styles
     * @since 1.1.0
     */
    public function style($default = null)
    {
        return $this->getControlData(__FUNCTION__, $default);
    }

    /**
     * Control : Classes
     *
     * @param mixed $default   Default value
     * @return mixed           Classes
     * @since 1.1.0
     */
    public function classes($default = null)
    {
        return $this->getControlData(__FUNCTION__, $default);
    }

    /**
     * Control : Full width
     *
     * @param mixed $default   Default value
     * @return mixed           Full width status
     * @since 1.1.0
     */
    public function fullWidth($default = false)
    {
        return $this->getControlData('full-width', $default);
    }

    /**
     * Control : Border line
     *
     * @param mixed $default   Default value
     * @return mixed           Border line
     * @since 1.1.0
     */
    public function borderLine($default = false)
    {
        return $this->getControlData('border-line', $default);
    }

    /**
     * Control : Ratio ( desc/content )
     *
     * @param mixed $default   Default value
     * @return mixed           Ratio
     * @since 1.1.0
     */
    public function ratio($default = null)
    {
        return $this->getControlData(__FUNCTION__, $default);
    }

    /**
     * Control : Help
     *
     * @param mixed $default   Default value
     * @return mixed           Help content
     * @since 1.1.0
     */
    public function help($default = null)
    {
        return $this->getControlData(__FUNCTION__, $default);
    }

    /**
     * Control : Ignore
     *
     * @param mixed $default   Default value
     * @param bool  $return    Return or echo
     * @return string|null     Ignore status
     * @since 1.1.0
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
     * Control : Default value
     *
     * @param mixed $default   Default value
     * @return mixed           Control default value
     * @since 1.1.0
     */
    public function defaultValue($default = null)
    {
        return $this->getControlData('default', $default);
    }

    /**
     * Control : Condition
     *
     * @param mixed $default   Default value
     * @return mixed           Condition
     * @since 1.1.0
     */
    public function condition($default = null)
    {
        return $this->getControlData(__FUNCTION__, $default);
    }

    /**
     * Control : Operator
     *
     * @param mixed $default   Default value
     * @return mixed           Operator
     * @since 1.1.0
     */
    public function operator($default = null)
    {
        return $this->getControlData(__FUNCTION__, $default);
    }

    /**
     * Control : Internal content ( controls )
     *
     * @param mixed $default   Default value
     * @return mixed           Internal content
     * @since 1.1.0
     */
    public function content($default = null)
    {
        return $this->getControlData(__FUNCTION__, $default);
    }

    /**
     * Control : Additional settings
     *
     * @param mixed $default   Default value
     * @return mixed           Additional settings
     * @since 1.1.0
     */
    public function settings($default = null)
    {
        return $this->getControlData(__FUNCTION__, $default);
    }
}
