<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\TemplateBridges\Helper;

use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Developer\DeveloperMode;
use ZimbruCode\Component\TemplateBridges\TwigTemplateBridge;

/**
 * Class : Component/TemplateBridge/Helper : Twig functions
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */
class TwigFunctions
{
    /**
     * Constructor
     *
     * @param TwigTemplateBridge $ttb   TwigTemplateBridge object
     * @since 1.1.0
     */
    public function __construct(TwigTemplateBridge $ttb)
    {
        $ttb->addFunction('__',       '__');
        $ttb->addFunction('_n',       '_n');
        $ttb->addFunction('_x',       '_x');
        $ttb->addFunction('_nx',      '_nx');
        $ttb->addFunction('_n_noop',  '_n_noop');
        $ttb->addFunction('_nx_noop', '_nx_noop');

        $ttb->addFunction('translate',               'translate');
        $ttb->addFunction('translate_nooped_plural', 'translate_nooped_plural');

        $ttb->addFunction('to_string',    [$this, '__callback_to_string']);
        $ttb->addFunction('action',       [$this, '__callback_action']);
        $ttb->addFunction('filter',       [$this, '__callback_filter']);
        $ttb->addFunction('fn',           [$this, '__callback_fn']);
        $ttb->addFunction('r_post',       [$this, '__callback_r_post']);
        $ttb->addFunction('r_get',        [$this, '__callback_r_get']);
        $ttb->addFunction('dev',          [$this, '__callback_dev']);
        $ttb->addFunction('get_session',  [$this, '__callback_get_session']);
        $ttb->addFunction('dump',         [$this, '__callback_dump']);
        $ttb->addFunction('get_HJWEP',    [$this, '__callback_get_HJWEP']);
        $ttb->addFunction('is_assoc',     [$this, '__callback_is_assoc']);
        $ttb->addFunction('do_shortcode', [$this, '__callback_do_shortcode']);
    }

    /**
     * Callback : Convert value to string
     *
     * @param mixed $value   Value
     * @return string       Converted value
     * @since 1.0.0
     */
    public function __callback_to_string($value): string
    {
        return (string) $value;
    }

    /**
     * Callback : do_action
     *
     * @param mixed ...$args   Function arguments
     * @return void            Action result
     * @since 1.0.0
     */
    public function __callback_action(...$args): void
    {
        call_user_func_array('do_action', $args);
    }

    /**
     * Callback : apply_filters
     *
     * @param mixed ...$args   Function arguments
     * @return void            Action result
     * @since 1.0.0
     */
    public function __callback_filter(...$args)
    {
        return call_user_func_array('apply_filters', $args);
    }

    /**
     * Callback : Call function
     *
     * @param callable $function   Callback
     * @param mixed    ...$args    Function arguments
     * @return mixed               Action result
     * @since 1.0.0
     */
    public function __callback_fn(callable $function, ...$args)
    {
        return call_user_func_array($function, $args);
    }

    /**
     * HTTP request : Post
     *
     * @param string $param   Param value
     * @return mixed          Action result
     * @since 1.0.0
     */
    public function __callback_r_post(...$args)
    {
        return Kernel::rPost(...$args);
    }

    /**
     * HTTP request : Get
     *
     * @param string $param   Param value
     * @return mixed          Action result
     * @since 1.0.0
     */
    public function __callback_r_get(...$args)
    {
        return Kernel::rGet(...$args);
    }

    /**
     * For developers
     *
     * @return DeveloperMode|null
     * @since 1.0.0
     */
    public function __callback_dev(): ?DeveloperMode
    {
        return Kernel::dev();
    }

    /**
     * Get data from session
     *
     * @param string $path      Array path
     * @param string $default   Default value
     * @return mixed            Session data
     * @since 1.0.0
     */
    public function __callback_get_session(...$args)
    {
        return Kernel::getSession(...$args);
    }

    /**
     * Dump data
     *
     * @param mixed ...$args    Function arguments
     * @return void
     * @since 1.0.0
     */
    public function __callback_dump(...$args): void
    {
        if (class_exists('\\Tracy\\Debugger')) {
            array_map('Tracy\Debugger::dump', $args);
        } else {
            var_dump($args);
        }
    }

    /**
     * Get htmlentities -> wp_json_encode | with ENT_QUOTES parameter
     *
     * @param array $array   Data
     * @return string        Array data in string format
     * @since 1.0.0
     */
    public function __callback_get_HJWEP(array $array): string
    {
        return Tools::getHJWEP($array);
    }

    /**
     * Callback : Check if the array is associative
     *
     * @param array $array   Array for work
     * @return bool          Result of checking
     * @since 1.0.0
     */
    public function __callback_is_assoc(array $array): bool
    {
        if (empty($array)) {
            return false;
        }

        return Tools::arrayIsAssoc($array);
    }

    /**
     * Callback : do_shortcode
     *
     * @param string|null $content      Content to search for shortcodes
     * @param bool        $ignoreHtml   When true, shortcodes inside HTML elements will be skipped
     * @return void
     * @since 1.0.0
     */
    public function __callback_do_shortcode(?string $content = '', bool $ignoreHtml = false): void
    {
        echo do_shortcode($content, $ignoreHtml);
    }
}
