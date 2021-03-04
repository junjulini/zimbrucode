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

use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Core\ModuleKernel;
use ZimbruCode\Component\TemplateBridges\Helper\ShellKernel;

/**
 * Class : Base shell
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class BaseShell extends ShellKernel
{
    protected $panel;
    protected $customMethod = [];

    public function __construct(ModuleKernel $panel)
    {
        $this->panel = $panel;
    }

    /**
     * Get module name
     *
     * @return string   Module name
     * @since 1.0.0
     */
    public function getModuleName(): string
    {
        return $this->panel->getModuleName();
    }

    /**
     * Get module namespace
     *
     * @return string   Module namespace
     * @since 1.0.0
     */
    public function getModuleNamespace(): string 
    {
        return $this->panel->getModuleNamespace();
    }

    /**
     * Get module path
     *
     * @return string   Module path
     * @since 1.0.0
     */
    public function getModulePath(): string
    {
        return $this->panel->getModulePath();
    }

    /**
     * Get module URL
     *
     * @return string   Module URL
     * @since 1.0.0
     */
    public function getModuleURL(): string
    {
        return $this->panel->getModuleURL();
    }

    /**
     * Get module setting
     *
     * @param  string $setting   Setting name
     * @param  mix    $default   Default value
     * @return string/array      Settings or single setting
     * @since 1.0.0
     */
    public function getModuleSetting(...$args)
    {
        return $this->panel->getModuleSetting(...$args);
    }

    /**
     * Get build options
     *
     * @return array   Options
     * @since 1.0.0
     */
    public function getBuildSettings(): array
    {
        return $this->panel->getBuildSettings();
    }

    /**
     * Get mode
     *
     * @return string   Panel mode
     * @since 1.0.0
     */
    public function getMode(): string
    {
        return $this->panel->getMode();
    }

    /**
     * Get resource path
     *
     * @param  string $path   Additional part of path
     * @return string         Resource path
     * @since 1.0.0
     */
    public function getModuleResourcePath(string $path = ''): string
    {
        return $this->panel->getModuleResourcePath($path);
    }

    /**
     * Get resource URL
     *
     * @param  string $url   Additional part of URL
     * @return string        Resource URL
     * @since 1.0.0
     */
    public function getModuleResourceURL(string $url = ''): string
    {
        return $this->panel->getModuleResourceURL($url);
    }

    /**
     * Debug
     *
     * @since 1.0.0
     */
    public function debug(): void
    {
        if (Kernel::getGlobal('core/module/panel/control-settings/debug-mode')) {
            $data = [
                'id'     => $this->getID(),
                'option' => $this->getOption(),
            ];

            Tools::dump($data);
        }
    }

    /**
     * Get panel mode instance
     *
     * @return ModuleKernel  Panel mode
     * @since 1.0.0
     */
    public function getModeInstance()
    {
        return $this->panel;
    }
}
