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

use ZimbruCode\Component\TemplateBridges\TwigTemplateBridge;
use Twig\Environment;

/**
 * Class : Twig escaper
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class TwigEscaper
{
    public function __construct(TwigTemplateBridge $ttb)
    {
        $ttb->setEscaper('esc_url',         [$this, '__callback_esc_url']);
        $ttb->setEscaper('_url',            [$this, '__callback_esc_url']);
        $ttb->setEscaper('esc_url_raw',     [$this, '__callback_esc_url_raw']);
        $ttb->setEscaper('_url_raw',        [$this, '__callback_esc_url_raw']);
        $ttb->setEscaper('esc_html',        [$this, '__callback_esc_html']);
        $ttb->setEscaper('_html',           [$this, '__callback_esc_html']);
        $ttb->setEscaper('esc_js',          [$this, '__callback_esc_js']);
        $ttb->setEscaper('_js',             [$this, '__callback_esc_js']);
        $ttb->setEscaper('esc_textarea',    [$this, '__callback_esc_textarea']);
        $ttb->setEscaper('_textarea',       [$this, '__callback_esc_textarea']);
        $ttb->setEscaper('esc_attr',        [$this, '__callback_esc_attr']);
        $ttb->setEscaper('_attr',           [$this, '__callback_esc_attr']);
        $ttb->setEscaper('wp_kses_post',    [$this, '__callback_wp_kses_post']);
        $ttb->setEscaper('wp_rel_nofollow', [$this, '__callback_wp_rel_nofollow']);
    }

    public function __callback_esc_url(Environment $env, $string)
    {
        return esc_url($string);
    }

    public function __callback_esc_url_raw(Environment $env, $string)
    {
        return esc_url_raw($string);
    }

    public function __callback_esc_html(Environment $env, $string)
    {
        return esc_html($string);
    }

    public function __callback_esc_js(Environment $env, $string)
    {
        return esc_js($string);
    }

    public function __callback_esc_textarea(Environment $env, $string)
    {
        return esc_textarea($string);
    }

    public function __callback_esc_attr(Environment $env, $string)
    {
        return esc_attr($string);
    }

    public function __callback_wp_kses_post(Environment $env, $string)
    {
        return wp_kses_post($string);
    }

    public function __callback_wp_rel_nofollow(Environment $env, $string)
    {
        return wp_rel_nofollow($string);
    }
}
