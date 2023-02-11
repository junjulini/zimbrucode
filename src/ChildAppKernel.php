<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode;

use ZimbruCode\AppKernel;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Core\Traits\AssetTrait;

/**
 * Class : Child application kernel
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */
abstract class ChildAppKernel extends Kernel
{
    use AssetTrait;

    /**
     * Returns the name of the application (short name of the class)
     *
     * @return string   Application name
     * @since 1.1.0
     */
    final public function getName(): string
    {
        return self::service('app')->getName();
    }

    /**
     * Gets the namespace of the application
     *
     * @return string   Application namespace
     * @since 1.1.0
     */
    final public function getNamespace(): string
    {
        return self::service('app')->getChildNamespace();
    }

    /**
     * Get application path
     *
     * @param string $path   Additional part of the path
     * @return string        Application path
     * @since 1.1.0
     */
    final public function getPath(string $path = ''): string
    {
        return self::service('app')->getChildPath($path);
    }

    /**
     * Gets the url of the application
     *
     * @param string $url   Additional part of the URL
     * @return string       Application URL
     * @since 1.1.0
     */
    final public function getURL(string $url = ''): string
    {
        return self::service('app')->getChildUrl($url);
    }

    /**
     * Get resource path
     *
     * @param string $path   Additional part of the path
     * @return string        Resource path
     * @since 1.1.0
     */
    final public function getResourcePath(string $path = ''): string
    {
        return self::service('app')->getChildResourcePath($path);
    }

    /**
     * Get resource URL
     *
     * @param string $url   Additional part of the URL
     * @return string       Resource URL
     * @since 1.1.0
     */
    final public function getResourceURL(string $url = ''): string
    {
        return self::service('app')->getChildResourceURL($url);
    }

    /**
     * Parent application
     *
     * @return AppKernel
     * @since 1.1.0
     */
    final public function parentApp(): AppKernel
    {
        return $this->app();
    }

    /**
     * Application setup
     *
     * @since 1.1.0
     */
    abstract protected function setup(): void;
}
