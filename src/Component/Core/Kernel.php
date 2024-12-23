<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Core;

use RuntimeException;
use ZimbruCode\AppKernel;
use ZimbruCode\Component\Core\ModuleLoader;
use ZimbruCode\Component\Developer\DeveloperMode;
use ZimbruCode\Component\Handler\Traits\GlobalCacheHandlerTrait;
use ZimbruCode\Component\Handler\Traits\HooksHandlerTrait;
use ZimbruCode\Component\Handler\Traits\RequestHandlerTrait;
use ZimbruCode\Component\Handler\Traits\SessionHandlerTrait;

/**
 * Class : Component/Core : Kernel
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.1
 */
abstract class Kernel extends GlobalDataOperator
{
    use HooksHandlerTrait, GlobalCacheHandlerTrait, RequestHandlerTrait, SessionHandlerTrait;

    /**
     * Get environment
     *
     * @return string   Environment
     * @since 1.1.0
     */
    final public static function getEnvironment(): string
    {
        return (string) self::getGlobal('core/dev-config/environment', 'prod');
    }

    /**
     * Developer message
     *
     * @param string $type    Message type
     * @param string $title   Message title
     * @param string $msg     Message text
     * @return DeveloperMode|null
     * @since 1.0.0
     */
    final public static function dev(string $type = '', string $title = 'Title', string $msg = ' ... '): ?DeveloperMode
    {
        return (self::getGlobal('core/dev')) ? new DeveloperMode($type, $title, $msg) : null;
    }

    /**
     * Development or production data
     *
     * @param mixed $value1   First value
     * @param mixed $value2   Last value
     * @return mixed          Action result
     * @since 1.3.0
     */
    final public static function dop(mixed $value1, mixed $value2): mixed
    {
        return (self::dev()) ? $value1 : $value2;
    }

    /**
     * Module loader
     *
     * @param array $config   Module config
     * @return ModuleLoader
     * @since 1.3.0
     */
    final public static function module(array $config = []): ModuleLoader
    {
        if ($loader = self::getGlobalCache('module-instance')) {
            if (!($loader instanceof ModuleLoader)) {
                $loader = new ModuleLoader;
                self::addGlobalCache('module-instance', $loader);
            }

            return $loader->flush()->addConfig($config);
        } else {
            $loader = new ModuleLoader;
            self::addGlobalCache('module-instance', $loader);

            return $loader->addConfig($config);
        }
    }

    /**
     * Get a service or register a new service
     *
     * @param  string      $service   Service name
     * @param  object|null $handler   Service object
     * @throws RuntimeException
     * @return object|null            Service object or null
     * @since 1.3.1
     */
    final public static function service(string $service, object $handler = null): ?object
    {
        if ($handler) {
            if (!self::hasService($service)) {
                self::addService($service, $handler);

                return null;
            } else {
                throw new RuntimeException("ZE0061 - This service exist : {$service}");
            }
        } else {
            if ($object = self::getGlobalCache("services/{$service}")) {
                return $object;
            } else {
                throw new RuntimeException("ZE0063 - This service don't exist : {$service}");
            }
        }
    }

    /**
     * Check if a service exists
     * 
     * @param string $service   Service name
     * @return bool             Action result
     * @since 1.2.0
     */
    final public static function hasService(string $service): bool
    {
        return (self::getGlobalCache("services/{$service}")) ? true : false;
    }

    /**
     * Add service
     * 
     * @param string      $service   Service name
     * @param object|null $handler   Service object
     * @return void
     * @since 1.2.0
     */
    final public static function addService(string $service, object $handler = null): void
    {
        self::addGlobalCache("services/{$service}", $handler);
    }

    /**
     * Application instance
     *
     * @throws RuntimeException
     * @return AppKernel
     * @since 1.1.0
     */
    final public function app(): AppKernel
    {
        $appInstance = self::getGlobalCache('app-instance');

        if ($appInstance instanceof AppKernel) {
            return $appInstance;
        } else {
            throw new RuntimeException('ZE0150');
        }
    }
}
