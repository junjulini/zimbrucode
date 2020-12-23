<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\Panel\Library\Traits;

use ZimbruCode\Component\Common\Tools;

/**
 * Trait : Content utility base functions
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
trait ContentUtilityTrait
{
    /**
     * Get option if exist
     *
     * @param  array  $options   All options
     * @param  string $option    Option name
     * @param  mix    $default   Default value if option not exist
     * @return string            Return value of option
     * @since 1.0.0
     */
    public function getOIE(array $options = [], string $option = '', $default = '')
    {
        if ($options && $option) {
            return (!empty($options[$option])) ? $options[$option] : $default;
        }
    }

    /**
     * Get build settings
     *
     * @return array   Build settings
     * @since 1.0.0
     */
    public function getBuildSettings(): array
    {
        if ($this->getModuleData('build-settings')) {
            return $this->getModuleData('build-settings', []);
        } else {
            if (file_exists($this->getModuleData('build-settings-file'))) {
                return require $this->getModuleData('build-settings-file');
            } else {
                return [];
            }
        }
    }

    /**
     * Get mode
     *
     * @return string   Panel mode
     * @since 1.0.0
     */
    public function getMode(): string
    {
        return $this->getModuleData('mode', '');
    }

    /**
     * Add options
     *
     * @param array $options   Mode options
     * @since 1.0.0
     */
    public function addOptions(array $options)
    {
        $prefix = self::getGlobal('core/module/panel/prefix-slug');

        foreach ($options as $key => $option) {
            unset($options[$key]);

            $key           = str_replace($prefix, '', $key);
            $options[$key] = stripslashes_deep($option);
        }

        return self::service('db')->add("module.panel.{$this->getModuleSetting('slug')}", $options, true);
    }

    /**
     * Check if options is different from options in DB
     *
     * @param  array $options   Mode options
     * @return bool             True if different
     * @since 1.0.0
     */
    public function isOptionsDifferent(array $options): bool
    {
        $prefix = self::getGlobal('core/module/panel/prefix-slug');

        foreach ($options as $key => $option) {
            unset($options[$key]);

            $key           = str_replace($prefix, '', $key);
            $options[$key] = stripslashes_deep($option);
        }

        return Tools::arrayDiff($options, $this->getOptions());
    }

    /**
     * Remove options
     *
     * @return bool   Result of manipulation
     * @since 1.0.0
     */
    public function remOptions(): bool
    {
        return self::service('db')->remove("module.panel.{$this->getModuleSetting('slug')}", true);
    }

    /**
     * Get options
     *
     * @param  mix $default   Default value
     * @return array          Mode options
     * @since 1.0.0
     */
    public function getOptions($default = ''): array
    {
        return self::service('db')->get("module.panel.{$this->getModuleSetting('slug')}", $default);
    }

    /**
     * Get option
     *
     * @param  string $option    Name of option
     * @param  mix    $default   Default value
     * @return mix
     * @since 1.0.0
     */
    public function getOption(string $option, $default = '')
    {
        if ($option) {
            $prefix = self::getGlobal('core/module/panel/prefix-slug');

            if (strpos($option, $prefix) !== false) {
                $option = str_replace($prefix, '', $option);
            }

            return self::service('db')->get("module.panel.{$this->getModuleSetting('slug')}/{$option}", $default);
        }
    }
}
