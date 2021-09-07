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

use ZimbruCode\Component\Core\ModuleLoader;
use ZimbruCode\Component\Developer\DeveloperMode;
use ZimbruCode\Component\Handler\Traits\GlobalCacheHandlerTrait;
use ZimbruCode\Component\Handler\Traits\HooksHandlerTrait;
use ZimbruCode\Component\Handler\Traits\RequestHandlerTrait;
use ZimbruCode\Component\Handler\Traits\SessionHandlerTrait;

/**
 * Class : Kernel
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
     * @return string  Environment
     * @since 1.0.0
     */
    final public static function getEnvironment(): string
    {
        return self::getGlobal('core/dev-config/environment', 'prod');
    }

    /**
     * For developers
     *
     * @return DeveloperMode
     * @since 1.0.0
     */
    final public static function dev(string $type = '', string $title = 'Title', string $msg = ' ... '): ?DeveloperMode
    {
        return (self::getGlobal('core/dev')) ? new DeveloperMode($type, $title, $msg) : null;
    }

    /**
     * Module loader
     *
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
     * Get service ( or set )
     *
     * @param  string  $service   Service name
     * @param  object  $handler   Service object ( for setter )
     * @return object             Service object
     * @since 1.0.0
     */
    final public static function service(string $service, object $handler = null)
    {
        if ($service) {
            if ($handler) {
                if (!self::getGlobalCache("services/{$service}")) {
                    self::addGlobalCache("services/{$service}", $handler);
                } else {
                    throw new \RuntimeException("This service exist : {$service}");
                }
            } else {

                // WP Services
                switch ($service) {
                    case 'wpdb':
                        if (isset($GLOBALS['wpdb'])) {
                            return $GLOBALS['wpdb'];
                        } else {
                            throw new \RuntimeException('Error : WPDB');
                        }
                        break;
                }

                // Local services
                if ($object = self::getGlobalCache("services/{$service}")) {
                    return $object;
                } else {
                    throw new \RuntimeException("This service don't exist : {$service}");
                }
            }
        }
    }

    /**
     * Development or Production value
     *
     * @param  mix $value1
     * @param  mix $value2
     * @return mix
     * @since 1.0.0
     */
    final public static function dop($value1, $value2)
    {
        return (self::dev()) ? $value1 : $value2;
    }
}
