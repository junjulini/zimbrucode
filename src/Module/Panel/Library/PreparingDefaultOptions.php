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

use ZimbruCode\Component\Common\Callback;
use ZimbruCode\Component\Common\Tools;

/**
 * Class : Preparing default options
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class PreparingDefaultOptions
{
    protected $settings = [];
    protected $options  = [];
    protected $control  = [];
    protected $callback;

    protected $exclude = [
        'menuTab',
        'menuParentTab',
    ];

    public $ignore = false;

    public function __construct()
    {
        $this->callback = new Callback;
    }

    /**
     * Get control setting
     *
     * @param string $path      Path to a specific setting to extract
     * @param string $default   Default value if setting not exist
     * @return mix              Return setting or default value
     * @since 1.0.0
     */
    public function get($path, $default = '')
    {
        if ($path && is_string($path)) {
            $output = Tools::getNode($this->control, $path, $default);

            if (is_int($output) || is_float($output)) {
                $output = (string) $output;
            }

            return $output;
        } else {
            return $default;
        }
    }

    /**
     * Add build settings
     *
     * @param array $settings   Build settings from panel module
     * @return void             This function does not return a value
     * @since 1.0.0
     */
    public function addSettings(array $settings)
    {
        $this->settings = $settings;
    }

    /**
     * Exclude controls from checking
     *
     * @param string $controlName   Name of control
     * @return void
     * @since 1.0.0
     */
    public function excludeControl($controlName)
    {
        if ($controlName && is_string($controlName)) {
            $this->exclude[] = $controlName;
        }
    }

    /**
     * Add additional checker function
     *
     * @param callable $checker   Checker function for preparing controls settings
     * @return void               This function does not return a value
     * @since 1.0.0
     */
    public function addChecker(callable $checker)
    {
        $this->callback->set('additional-checker', $checker);
    }

    /**
     * Add option
     *
     * @param string $key     Option key
     * @param mix    $value   Option value
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    public function addOption($key, $value = '')
    {
        if ($key && is_string($key)) {
            $this->options[$key] = $value;
        }
    }

    /**
     * Get default control options
     *
     * @return array   Return prepared options
     * @since 1.0.0
     */
    public function getOptions()
    {
        $this->search($this->settings);
        return $this->options;
    }

    /**
     * Search default settings from control
     *
     * @param  array  $settings   Build settings from panel
     * @return void               This function does not return a value
     * @since 1.0.0
     */
    public function search(array $settings)
    {
        foreach ($settings as $setting) {
            if (!is_array($setting)) {
                continue;
            }

            $this->control = $setting;

            $id      = $this->get('id');
            $type    = $this->get('type');
            $content = $this->get('content');

            if ($this->ignore === true) {
                if (!$this->get('ignore')) {
                    $this->partOfSearch($id, $type, $setting);
                }
            } else {
                $this->partOfSearch($id, $type, $setting);
            }

            if ($content && is_array($content)) {
                $this->search($content);
            }
        }
    }

    /**
     * Search part
     *
     * @param string $id
     * @param string $type
     * @param mix    $setting
     * @return void
     * @since 1.0.0
     */
    protected function partOfSearch($id, $type, $setting)
    {
        if ($id && $type && !in_array($type, $this->exclude)) {
            $this->addOption($id, $this->get('default', ''));
        }

        $this->callback->run('additional-checker', $this, $setting);
    }
}
