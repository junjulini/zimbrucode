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
 * Class :  Module/Panel/Library : Settings handler
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
class SettingsHandler
{
    protected array $data     = [];
    protected array $control  = [];
    protected array $settings = [];
    protected Callback $callback;

    protected array $exclude = [
        'menuTab',
        'menuParentTab',
    ];

    protected bool $ignore = false;

    /**
     * Constructor
     *
     * @since 1.0.0
     */
    public function __construct()
    {
        $this->callback = new Callback;
    }

    /**
     * Set status of "ignore" setting
     *
     * @param bool $status   Status
     * @return void
     * @since 1.0.0
     */
    public function ignore(bool $status): void
    {
        $this->ignore = $status;
    }

    /**
     * Get control setting
     *
     * @param string $path      Array path
     * @param mixed  $default   Default value
     * @return mixed            Setting value
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
     * Add control setting
     * 
     * @param string $path   Array path
     * @param mixed  $value  New control setting
     * @return void
     * @since 1.3.0
     */
    public function add(string $path, $value): void
    {
        Tools::addNode($this->control, $path, $value);
    }

    /**
     * Remove control setting
     * 
     * @param string $path   Array path
     * @return bool          Action result
     * @since 1.3.0
     */
    public function remove(string $path): bool
    {
        return Tools::unsetNode($this->control, $path);
    }

    /**
     * Add control settings
     * 
     * @param array $settings   New control settings
     * @return void
     * @since 1.3.0
     */
    public function addControlSettings(array $settings): void
    {
        $this->control = $settings;
    }

    /**
     * Get control settings
     * 
     * @return array   Control settings
     * @since 1.3.0
     */
    public function getControlSettings(): array
    {
        return $this->control;
    }

    /**
     * Add settings
     *
     * @param array $settings   Settings list
     * @return void
     * @since 1.3.0
     */
    public function addSettings(array &$settings): void
    {
        $this->settings = &$settings;
    }

    /**
     * Exclude controls from checklist
     *
     * @param string $controlName   Control name
     * @return void
     * @since 1.0.0
     */
    public function excludeControl(string $controlName): void
    {
        if ($controlName) {
            $this->exclude[] = $controlName;
        }
    }

    /**
     * Add a basic check function
     *
     * @param callable $checker   Callback
     * @return void
     * @since 1.0.0
     */
    public function addMainChecker(callable $checker): void
    {
        $this->callback->add('main-checker', $checker);
    }

    /**
     * Add an additional check function
     *
     * @param callable $checker   Callback
     * @return void
     * @since 1.0.0
     */
    public function addAdditionalChecker(callable $checker): void
    {
        $this->callback->add('additional-checker', $checker);
    }

    /**
     * Add temporary data
     *
     * @param string $key     Item key
     * @param mixed  $value   Item value
     * @return void
     * @since 1.0.0
     */
    public function addData(string $key, $value = ''): void
    {
        if ($key) {
            $this->data[$key] = $value;
        }
    }

    /**
     * Get temporary data
     *
     * @return array   Temporary data
     * @since 1.0.0
     */
    public function getData(): array
    {
        $this->search($this->settings);
        return $this->data;
    }

    /**
     * Remove all temporary data
     *
     * @return void
     */
    public function flush(): void
    {
        $this->data    = [];
        $this->control = [];
    }

    /**
     * Finding default settings from controls
     *
     * @param array $settings   List of settings
     * @return void
     * @since 1.3.0
     */
    public function search(array &$settings): void
    {
        foreach ($settings as &$controlSettings) {
            if (!is_array($controlSettings)) {
                continue;
            }

            $this->control = &$controlSettings;

            $id   = $this->get('id');
            $type = $this->get('type');

            if ($this->ignore === true) {
                if (!$this->get('ignore')) {
                    $this->check($id, $type, $controlSettings);
                }
            } else {
                $this->check($id, $type, $controlSettings);
            }

            if (isset($controlSettings['content']) && is_array($controlSettings['content'])) {
                $this->search($controlSettings['content']);
            }
        }
    }

    /**
     * Check settings
     *
     * @param string $id        Control ID
     * @param string $type      Control type
     * @param array  $setting   Control settings
     * @return void
     * @since 1.0.0
     */
    protected function check(string $id, string $type, array $settings): void
    {
        if ($id && $type && !in_array($type, $this->exclude)) {
            $this->callback->run('main-checker', $this, $settings);
        }

        $this->callback->run('additional-checker', $this, $settings);
    }
}
