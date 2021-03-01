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

use Twig\Environment;
use ZimbruCode\Component\TemplateBridges\TwigTemplateBridge;

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
        $ttb->addEscaper('esc_url',         [$this, '__callback_esc_url']);
        $ttb->addEscaper('_url',            [$this, '__callback_esc_url']);
        $ttb->addEscaper('esc_url_raw',     [$this, '__callback_esc_url_raw']);
        $ttb->addEscaper('_url_raw',        [$this, '__callback_esc_url_raw']);
        $ttb->addEscaper('esc_html',        [$this, '__callback_esc_html']);
        $ttb->addEscaper('_html',           [$this, '__callback_esc_html']);
        $ttb->addEscaper('esc_js',          [$this, '__callback_esc_js']);
        $ttb->addEscaper('_js',             [$this, '__callback_esc_js']);
        $ttb->addEscaper('esc_textarea',    [$this, '__callback_esc_textarea']);
        $ttb->addEscaper('_textarea',       [$this, '__callback_esc_textarea']);
        $ttb->addEscaper('esc_attr',        [$this, '__callback_esc_attr']);
        $ttb->addEscaper('_attr',           [$this, '__callback_esc_attr']);
        $ttb->addEscaper('wp_kses_post',    [$this, '__callback_wp_kses_post']);
        $ttb->addEscaper('wp_rel_nofollow', [$this, '__callback_wp_rel_nofollow']);
    }

    public function __callback_esc_url(Environment $env, ?string $string): ?string
    {
        return esc_url($string);
    }

    public function __callback_esc_url_raw(Environment $env, ?string $string): ?string
    {
        return esc_url_raw($string);
    }

    public function __callback_esc_html(Environment $env, ?string $string): ?string
    {
        return esc_html($string);
    }

    public function __callback_esc_js(Environment $env, ?string $string): ?string
    {
        return esc_js($string);
    }

    public function __callback_esc_textarea(Environment $env, ?string $string): ?string
    {
        return esc_textarea($string);
    }

    public function __callback_esc_attr(Environment $env, ?string $string): ?string
    {
        return esc_attr($string);
    }

    public function __callback_wp_kses_post(Environment $env, ?string $string): ?string
    {
        return wp_kses_post($string);
    }

    public function __callback_wp_rel_nofollow(Environment $env, ?string $string): string
    {
        return wp_rel_nofollow($string);
    }
}
