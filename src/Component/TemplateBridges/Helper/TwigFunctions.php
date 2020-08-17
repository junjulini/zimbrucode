<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\TemplateBridges\Helper;

use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\TemplateBridges\TwigTemplateBridge;

/**
 * Class : Twig functions
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class TwigFunctions
{
    public function __construct(TwigTemplateBridge $ttb)
    {
        $ttb->addFunction('__',       '__');
        $ttb->addFunction('_n',       '_n');
        $ttb->addFunction('_x',       '_x');
        $ttb->addFunction('_nx',      '_nx');
        $ttb->addFunction('_n_noop',  '_n_noop');
        $ttb->addFunction('_nx_noop', '_nx_noop');

        $ttb->addFunction('translate',              'translate');
        $ttb->addFunction('translate_nooped_plural', 'translate_nooped_plural');

        $ttb->addFunction('to_string',   [$this, '__callback_to_string']);
        $ttb->addFunction('action',      [$this, '__callback_action']);
        $ttb->addFunction('filter',      [$this, '__callback_filter']);
        $ttb->addFunction('fn',          [$this, '__callback_fn']);
        $ttb->addFunction('r_post',      [$this, '__callback_r_post']);
        $ttb->addFunction('r_get',       [$this, '__callback_r_get']);
        $ttb->addFunction('dev',         [$this, '__callback_dev']);
        $ttb->addFunction('get_session', [$this, '__callback_get_session']);
        $ttb->addFunction('dump',        [$this, '__callback_dump']);
        $ttb->addFunction('get_HJWEP',   [$this, '__callback_get_HJWEP']);
        $ttb->addFunction('is_assoc',    [$this, '__callback_is_assoc']);
    }

    public function __callback_to_string($value)
    {
        return (string) $value;
    }

    public function __callback_action(...$args)
    {
        call_user_func_array('do_action', $args);
    }

    public function __callback_filter(...$args)
    {
        return call_user_func_array('apply_filters', $args);
    }

    public function __callback_fn(callable $function, ...$args)
    {
        return call_user_func_array($function, $args);
    }

    /**
     * Post control
     *
     * @param  string $param
     * @return string
     * @since 1.0.0
     */
    public function __callback_r_post($param, $default = '')
    {
        return Kernel::rPost($param, $default);
    }

    /**
     * Get control
     *
     * @param  string $param
     * @return string
     * @since 1.0.0
     */
    public function __callback_r_get($param, $default = '')
    {
        return Kernel::rGet($param, $default);
    }

    /**
     * For developers
     *
     * @return object
     * @since 1.0.0
     */
    public function __callback_dev()
    {
        return Kernel::dev();
    }

    /**
     * Get data from session
     *
     * @param  string  $path      Base path
     * @param  string  $default   Default value
     * @return string             Return data
     * @since 1.0.0
     */
    public function __callback_get_session($path, $default = false)
    {
        return Kernel::getSession($path, $default);
    }

    /**
     * Dump data
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function __callback_dump(...$args)
    {
        if (class_exists('\\Tracy\\Debugger')) {
            array_map('ZimbruCode\\Component\\Debug\\TracyDebugger::dump', $args);
        } else {
            var_dump($args);
        }
    }

    /**
     * Get htmlentities -> json_encode | with ENT_QUOTES parameter
     *
     * @param  array  $array
     * @return string
     * @since 1.0.0
     */
    public function __callback_get_HJWEP($array)
    {
        if ($array && is_array($array)) {
            return Tools::getHJWEP($array);
        }
    }

    public function __callback_is_assoc($array)
    {
        if (empty($array) || !is_array($array)) {
            return false;
        }

        return Tools::arrayIsAssoc($array);
    }
}
