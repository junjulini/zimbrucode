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
 * @since   1.0.0
 */
abstract class Kernel extends GlobalDataOperator
{
    use HooksHandlerTrait, GlobalCacheHandlerTrait, RequestHandlerTrait, SessionHandlerTrait;

    /**
     * Get environment
     *
     * @return string   Environment
     * @since 1.0.0
     */
    final public static function getEnvironment(): string
    {
        return self::getGlobal('core/dev-config/environment', 'prod');
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
     * @param  mix $value1   First value
     * @param  mix $value2   Last value
     * @return mix           Action result
     * @since 1.0.0
     */
    final public static function dop($value1, $value2)
    {
        return (self::dev()) ? $value1 : $value2;
    }

    /**
     * Module loader
     *
     * @param array $config   Module config
     * @return ModuleLoader
     * @since 1.0.0
     */
    final public function module(array $config = []): ModuleLoader
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
     * @return object|null            Service object or null
     * @since 1.0.0
     */
    final public static function service(string $service, object $handler = null): ?object
    {
        if ($handler) {
            if (!self::getGlobalCache("services/{$service}")) {
                self::addGlobalCache("services/{$service}", $handler);

                return null;
            } else {
                throw new RuntimeException("ZE0061 - This service exist : {$service}");
            }
        } else {

            // WP Services
            switch ($service) {
                case 'wpdb':
                    if (isset($GLOBALS['wpdb'])) {
                        return $GLOBALS['wpdb'];
                    } else {
                        throw new RuntimeException('ZE0062');
                    }

                    break;
            }

            // Local services
            if ($object = self::getGlobalCache("services/{$service}")) {
                return $object;
            } else {
                throw new RuntimeException("ZE0063 - This service don't exist : {$service}");
            }
        }
    }
}
