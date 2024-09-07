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

use InvalidArgumentException;
use RuntimeException;
use ZimbruCode\Component\Common\Tools;

/**
 * Class : Component/Core : Global data operator
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
abstract class GlobalDataOperator
{
    /**
     * GNS ( Global nodes slug )
     *
     * @var string
     * @since 1.3.0
     */
    private static string $__GNS;

    /**
     * GN ( Global nodes )
     *
     * @var array
     * @since 1.3.0
     */
    private static array $__GN = [
        // Root nodes
        '@' => [],
    ];

    /**
     * SGN ( Standard global nodes )
     *
     * @var array
     * @since 1.3.0
     */
    private static array $__SGN = [
        'core'  => [],
        'app'   => [],
        'cache' => [],
    ];

    /**
     * RN : Root node
     *
     * @var string
     * @since 1.3.0
     */
    private static string $__RN = '@';

    /**
     * CGN ( Condition global nodes )
     *
     * @var array
     * @since 1.3.0
     */
    private static array $__CGN = ['@', 'core', 'app', 'cache'];

    /**
     * OEM ( Operator exception message )
     *
     * @var string
     * @since 1.3.0
     */
    private static string $__OEM = '{PATH} - conditions are not met. Only the following nodes are allowed in the first position : {NODES}.';

    /**
     * Nodes cache
     *
     * @var string
     * @since 1.3.0
     */
    private static array $__NODES_CACHE = [];

    ####################################################################################################################

    /**
     * Get OEM ( Operator exception message )
     *
     * @param string $path   Array path
     * @return string        Exception message
     * @since 1.0.0
     */
    private static function __getOEM(string $path): string
    {
        return str_replace(['{PATH}', '{NODES}'], [$path, implode(', ', self::$__CGN)], self::$__OEM);
    }

    /**
     * Is on condition
     *
     * @param string $path        Array path
     * @param string $delimiter   Path delimiter
     * @return bool               Result of checking
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
     * Is root node
     *
     * @param string $path        Array path
     * @param string $delimiter   Path delimiter
     * @return bool               Result of checking
     * @since 1.3.0
     */
    private static function __isRootNode(string $path, string $delimiter = '/'): bool
    {
        if ($path) {
            $element = explode($delimiter, $path);
            return in_array($element[0], [self::$__RN]);
        }

        return false;
    }

    /**
     * Remove node from cache
     *
     * @param string $path   Array path
     * @return void
     * @since 1.1.0
     */
    private static function __removeFromNodesCache(string $path = ''): void
    {
        if (self::__isRootNode($path)) {
            if (!empty(self::$__NODES_CACHE['@']) && is_array(self::$__NODES_CACHE['@'])) {
                foreach (self::$__NODES_CACHE['@'] as $key => $value) {
                    if (strpos($key, $path) !== false) {
                        unset(self::$__NODES_CACHE['@'][$key]);
                    }
                }
            }
        } else {
            if (!empty(self::$__NODES_CACHE[self::$__GNS]) && is_array(self::$__NODES_CACHE[self::$__GNS])) {
                foreach (self::$__NODES_CACHE[self::$__GNS] as $key => $value) {
                    if (strpos($key, $path) !== false) {
                        unset(self::$__NODES_CACHE[self::$__GNS][$key]);
                    }
                }
            }
        }
    }

    /**
     * Add global slug variable
     *
     * @param  string $slug   Slug name
     * @throws InvalidArgumentException
     * @throws RuntimeException
     * @return void
     * @since 1.1.0
     */
    final protected static function addGlobalVarSlug(string $slug): void
    {
        if (!$slug) {
            throw new InvalidArgumentException('ZE0056');
        }

        if (isset(self::$__GN[$slug])) {
            throw new RuntimeException('ZE0057');
        }

        self::$__GNS       = $slug;
        self::$__GN[$slug] = self::$__SGN;
    }

    /**
     * Get global slug variable
     *
     * @return string   Slug name
     * @since 1.3.0
     */
    final public static function getGlobalVarSlug(): string
    {
        return self::$__GNS;
    }

    /**
     * Get global data
     *
     * @param string $path      Array path
     * @param mixed  $default   Default value
     * @return mixed            Global data
     * @since 1.3.0
     */
    final public static function getGlobal(string $path, mixed $default = false): mixed
    {
        if ($path) {
            if (self::__isOnCondition($path)) {
                if (self::__isRootNode($path)) {
                    if (isset(self::$__NODES_CACHE['@']) && isset(self::$__NODES_CACHE['@'][$path])) {
                        return self::$__NODES_CACHE['@'][$path];
                    } else {
                        $path                            = str_replace('@/', '', $path);
                        self::$__NODES_CACHE['@'][$path] = Tools::getNode(self::$__GN[self::$__RN], $path, $default);

                        return self::$__NODES_CACHE['@'][$path];
                    }
                } else {
                    if (isset(self::$__NODES_CACHE[self::$__GNS]) && isset(self::$__NODES_CACHE[self::$__GNS][$path])) {
                        return self::$__NODES_CACHE[self::$__GNS][$path];
                    } else {
                        self::$__NODES_CACHE[self::$__GNS][$path] = Tools::getNode(self::$__GN[self::$__GNS], $path, $default);

                        return self::$__NODES_CACHE[self::$__GNS][$path];
                    }
                }
            }
        }

        return $default;
    }

    /**
     * ifG : If global exist, return value1, if not, return value2
     *
     * @param string $path     Array path
     * @param mixed  $value1   Value 1
     * @param mixed  $value2   Value 2
     * @return mixed           Action result
     * @since 1.3.0
     */
    final public static function ifG(string $path, mixed $value1, mixed $value2): mixed
    {
        if ($path) {
            return (self::getGlobal($path)) ? $value1 : $value2;
        }

        return null;
    }

    /**
     * Add global data
     *
     * @param  string $path    Array path
     * @param  mixed  $value   Value
     * @throws InvalidArgumentException
     * @return void
     * @since 1.3.0
     */
    final public static function addGlobal(string $path, mixed $value): void
    {
        if ($path) {
            if (!self::__isOnCondition($path)) {
                throw new InvalidArgumentException('ZE0058 - ' . self::__getOEM($path));
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
     * Remove global item
     *
     * @param  string $path   Array path
     * @throws InvalidArgumentException
     * @return bool           Action result
     * @since 1.1.0
     */
    final public static function remGlobal(string $path): bool
    {
        if ($path) {
            if (!self::__isOnCondition($path)) {
                throw new InvalidArgumentException('ZE0059 - ' . self::__getOEM($path));
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
     * Dump global data
     *
     * @param  string $path   Array path
     * @throws InvalidArgumentException
     * @return void
     * @since 1.1.0
     */
    final public static function dumpGlobal(string $path = ''): void
    {
        if ($path) {
            if (!self::__isOnCondition($path)) {
                throw new InvalidArgumentException('ZE0060 - ' . self::__getOEM($path));
            }

            Tools::dump(self::getGlobal($path));
        } else {
            Tools::dump(self::$__GN);
        }
    }
}
