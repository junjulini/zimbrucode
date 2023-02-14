<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\Panel\Library\Traits;

use ZimbruCode\Component\Common\Tools;

/**
 * Trait : Module/Panel/Library/Traits : Content utility. Base functions
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */
trait ContentUtilityTrait
{
    /**
     * Get option if exist
     *
     * @param array  $options   All options
     * @param string $option    Option name
     * @param mixed  $default   Default value
     * @return mixed            Action result
     * @since 1.0.0
     */
    public function getOIE(array $options = [], string $option = '', $default = '')
    {
        if ($options && $option) {
            return (!empty($options[$option])) ? $options[$option] : $default;
        }
    }

    /**
     * Get "build settings"
     *
     * @return array   Build settings
     * @since 1.1.0
     */
    public function getBuildSettings(): array
    {
        if ($this->getModuleData('build-settings')) {
            return apply_filters('zc/module/panel/build_settings', $this->getModuleData('build-settings', []), $this);
        } else {
            if (file_exists($this->getModuleData('build-settings-file'))) {
                return apply_filters('zc/module/panel/build_settings', require $this->getModuleData('build-settings-file'), $this);
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
     * @param array $options   Options list
     * @return mixed
     * @since 1.1.0
     */
    public function addOptions(array $options)
    {
        $dbName = self::getGlobal('core/module/panel/db-name');
        return self::service('db')->add("{$dbName}.{$this->getModuleSetting('slug')}", $options, true);
    }

    /**
     * Check if the options are different from the options in the DB
     *
     * @param array $options   Options list
     * @return bool            Result of checking
     * @since 1.1.0
     */
    public function isOptionsDifferent(array $options): bool
    {
        return Tools::arrayDiff($options, $this->getOptions());
    }

    /**
     * Remove all options
     *
     * @return bool   Result of checking
     * @since 1.1.0
     */
    public function remOptions(): bool
    {
        $dbName = self::getGlobal('core/module/panel/db-name');
        return self::service('db')->remove("{$dbName}.{$this->getModuleSetting('slug')}", true);
    }

    /**
     * Get options
     *
     * @param mixed $default   Default value
     * @return array           Options list
     * @since 1.1.0
     */
    public function getOptions($default = ''): array
    {
        $dbName = self::getGlobal('core/module/panel/db-name');
        return self::service('db')->get("{$dbName}.{$this->getModuleSetting('slug')}", $default);
    }

    /**
     * Get option
     *
     * @param string $option    Name of option
     * @param mixed  $default   Default value
     * @return mixed            Option value
     * @since 1.1.0
     */
    public function getOption(string $option, $default = '')
    {
        if ($option) {
            $prefix = self::getGlobal('core/module/panel/prefix-slug');

            if (strpos($option, $prefix) !== false) {
                $option = str_replace($prefix, '', $option);
            }

            $dbName = self::getGlobal('core/module/panel/db-name');

            return self::service('db')->get("{$dbName}.{$this->getModuleSetting('slug')}/{$option}", $default);
        }
    }
}
