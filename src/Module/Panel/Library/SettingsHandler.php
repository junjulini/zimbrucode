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

use ZimbruCode\Component\Common\Callback;
use ZimbruCode\Component\Common\Tools;

/**
 * Class : Settings handler
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class SettingsHandler
{
    protected $data     = [];
    protected $control  = [];
    protected $settings = [];
    protected $callback;

    protected $exclude = [
        'menuTab',
        'menuParentTab',
    ];

    protected $ignore = false;

    public function __construct()
    {
        $this->callback = new Callback;
    }

    public function ignore(bool $status): void
    {
        $this->ignore = $status;
    }

    /**
     * Get control setting
     *
     * @param string $path      Path to a specific setting to extract
     * @param mix    $default   Default value if setting not exist
     * @return mix              Return setting or default value
     * @since 1.0.0
     */
    public function get(string $path, $default = '')
    {
        if ($path) {
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
    public function addSettings(array $settings): void
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
    public function excludeControl(string $controlName): void
    {
        if ($controlName) {
            $this->exclude[] = $controlName;
        }
    }

    public function addMainChecker(callable $checker): void
    {
        $this->callback->add('main-checker', $checker);
    }

    /**
     * Add additional checker function
     *
     * @param callable $checker   Checker function for preparing controls settings
     * @return void               This function does not return a value
     * @since 1.0.0
     */
    public function addAdditionalChecker(callable $checker): void
    {
        $this->callback->add('additional-checker', $checker);
    }

    /**
     * Add data
     *
     * @param string $key     Key
     * @param mix    $value   Value
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    public function addData(string $key, $value = ''): void
    {
        if ($key) {
            $this->data[$key] = $value;
        }
    }

    /**
     * Get data
     *
     * @return array   Return data
     * @since 1.0.0
     */
    public function getData(): array
    {
        $this->search($this->settings);
        return $this->data;
    }

    public function flush()
    {
        $this->data    = [];
        $this->control = [];
    }

    /**
     * Search default settings from control
     *
     * @param  array  $settings   Build settings from panel
     * @return void               This function does not return a value
     * @since 1.0.0
     */
    public function search(array $settings): void
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
                    $this->check($id, $type, $setting);
                }
            } else {
                $this->check($id, $type, $setting);
            }

            if ($content && is_array($content)) {
                $this->search($content);
            }
        }
    }

    /**
     * Check
     *
     * @param string $id
     * @param string $type
     * @param array  $setting
     * @return void
     * @since 1.0.0
     */
    protected function check(string $id, string $type, array $setting): void
    {
        if ($id && $type && !in_array($type, $this->exclude)) {
            $this->callback->run('main-checker', $this, $setting);
        }

        $this->callback->run('additional-checker', $this, $setting);
    }
}
