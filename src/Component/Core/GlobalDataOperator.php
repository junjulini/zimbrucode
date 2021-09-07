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

use ZimbruCode\Component\Common\Tools;

/**
 * Class : Global data operator
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
abstract class GlobalDataOperator
{
    /**
     * GVS ( Global nodes slug )
     *
     * @var string
     * @since 1.0.0
     */
    private static $__GNS;

    /**
     * GV ( Global nodes )
     *
     * @var array
     * @since 1.0.0
     */
    private static $__GN = [
        // Root nodes
        '@' => [],
    ];

    /**
     * SGV ( Standard global nodes )
     *
     * @var array
     * @since 1.0.0
     */
    private static $__SGN = [
        'core'  => [],
        'app'   => [],
        'cache' => [],
    ];

    /**
     * RN : Root Node
     *
     * @var string
     * @since 1.0.0
     */
    private static $__RN = '@';

    /**
     * CGV ( Condition global nodes )
     *
     * @var array
     * @since 1.0.0
     */
    private static $__CGN = ['@', 'core', 'app', 'cache'];

    /**
     * OEM ( Operator exception message )
     *
     * @var string
     * @since 1.0.0
     */
    private static $__OEM = '{PATH} - conditions are not fulfilled. Only next nodes are permitted in first position : {NODES}.';

    /**
     * Nodes cache
     *
     * @var string
     * @since 1.0.0
     */
    private static $__NODES_CACHE = [];

    ####################################################################################################################

    /**
     * Get OEM ( Operator exception message )
     *
     * @param  string $path   Base path
     * @return string         Exception message
     * @since 1.0.0
     */
    private static function __getOEM(string $path): string
    {
        return str_replace(['{PATH}', '{NODES}'], [$path, implode(', ', self::$__CGN)], self::$__OEM);
    }

    /**
     * Is on condition
     *
     * @param  string  $path
     * @param  string  $delimiter
     * @return bool    true/false
     * @since 1.0.0
     */
    private static function __isOnCondition(string $path, string $delimiter = '/'): bool
    {
        if ($path) {
            $element = explode($delimiter, $path);
            return (!in_array($element[0], self::$__CGN)) ? false : true;
        }

        return false;
    }

    /**
     * Remove node from cache
     *
     * @param  string $path   Node path
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    private static function __removeFromNodesCache(string $path = ''): void
    {
        if (self::__isRootNode($path)) {
            foreach (self::$__NODES_CACHE['@'] as $key => $value) {
                if (strpos($key, $path) !== false) {
                    unset(self::$__NODES_CACHE['@'][$key]);
                }
            }
        } else {
            if (isset(self::$__NODES_CACHE[self::$__GNS])) {
                foreach (self::$__NODES_CACHE[self::$__GNS] as $key => $value) {
                    if (strpos($key, $path) !== false) {
                        unset(self::$__NODES_CACHE[self::$__GNS][$key]);
                    }
                }
            }
        }
    }

    /**
     * Is root node
     *
     * @param  string $path
     * @param  string $delimiter
     * @return bool   true/false
     * @since 1.0.0
     */
    private static function __isRootNode(string $path, string $delimiter = '/'): bool
    {
        if ($path) {
            $element = explode($delimiter, $path);
            return (!in_array($element[0], [self::$__RN])) ? false : true;
        }

        return false;
    }

    /**
     * Add global var slug
     *
     * @param  string $slug   Slug name
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    final protected static function addGlobalVarSlug(string $slug): void
    {
        if (!$slug) {
            throw new \InvalidArgumentException('Global var slug : empty.');
        }

        if (isset(self::$__GN[$slug])) {
            throw new \RuntimeException('App slug is already used.');
        }

        self::$__GNS       = $slug;
        self::$__GN[$slug] = self::$__SGN;
    }

    /**
     * Get global var slug
     *
     * @return string   Slug name
     * @since 1.0.0
     */
    final public static function getGlobalVarSlug()
    {
        return self::$__GNS;
    }

    /**
     * Get data from global var
     *
     * @param  string  $path      Base path
     * @param  mix     $default   Default value
     * @return mix                Return data
     * @since 1.0.0
     */
    final public static function getGlobal(string $path, $default = false)
    {
        if ($path) {
            if (isset(self::$__NODES_CACHE[self::$__GNS][$path])) {
                if (self::__isRootNode($path)) {
                    return self::$__NODES_CACHE['@'][$path];
                } else {
                    return self::$__NODES_CACHE[self::$__GNS][$path];
                }
            } else {
                if (!self::__isOnCondition($path)) {
                    return $default;
                }

                if (self::__isRootNode($path)) {
                    $path = str_replace('@/', '', $path);
                    self::$__NODES_CACHE['@'][$path] = Tools::getNode(self::$__GN[self::$__RN], $path, $default);

                    return self::$__NODES_CACHE['@'][$path];
                } else {
                    self::$__NODES_CACHE[self::$__GNS][$path] = Tools::getNode(self::$__GN[self::$__GNS], $path, $default);

                    return self::$__NODES_CACHE[self::$__GNS][$path];
                }
            }
        }

        return $default;
    }

    /**
     * ifG : If global exist, return value1, if not, return value2
     *
     * @param  string  $path      Base path
     * @param  mix     $value1    Value 1
     * @param  mix     $value2    Value 2
     * @return mix                Return data
     * @since 1.0.0
     */
    final public static function ifG(string $path, $value1, $value2)
    {
        if ($path) {
            return (self::getGlobal($path)) ? $value1 : $value2;
        }
    }

    /**
     * Add data to global var
     *
     * @param  string  $path    Base path
     * @param  mix     $value   Value
     * @return void             This function does not return a value
     * @since 1.0.0
     */
    final public static function addGlobal(string $path, $value): void
    {
        if ($path) {
            if (!self::__isOnCondition($path)) {
                throw new \InvalidArgumentException(self::__getOEM($path));
            }

            self::__removeFromNodesCache($path);

            if (self::__isRootNode($path)) {
                $path = str_replace('@/', '', $path);
                Tools::addNode(self::$__GN[self::$__RN], $path, $value);
            } else {
                Tools::addNode(self::$__GN[self::$__GNS], $path, $value);
            }
        }
    }

    /**
     * Remove data from global var
     *
     * @param  string $path   Base path
     * @return bool           Return false/true
     * @since 1.0.0
     */
    final public static function remGlobal(string $path): bool
    {
        if ($path) {
            if (!self::__isOnCondition($path)) {
                throw new \InvalidArgumentException(self::__getOEM($path));
            }

            self::__removeFromNodesCache($path);

            if (self::__isRootNode($path)) {
                $path = str_replace('@/', '', $path);
                return Tools::unsetNode(self::$__GN[self::$__RN], $path);
            } else {
                return Tools::unsetNode(self::$__GN[self::$__GNS], $path);
            }
        }

        return false;
    }

    /**
     * Dump global
     *
     * @param  string $path   Base path
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    final public static function dumpGlobal(string $path = ''): void
    {
        if ($path) {
            if (!self::__isOnCondition($path)) {
                throw new \InvalidArgumentException(self::__getOEM($path));
            }

            Tools::dump(self::getGlobal($path));
        } else {
            Tools::dump(self::$__GN);
        }
    }
}
