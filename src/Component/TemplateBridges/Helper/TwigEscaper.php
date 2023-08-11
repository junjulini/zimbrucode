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

use Twig\Environment;
use ZimbruCode\Component\TemplateBridges\TwigTemplateBridge;

/**
 * Class : Component/TemplateBridge/Helper : Twig escaper
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.2.0
 */
class TwigEscaper
{
    /**
     * Constructor
     *
     * @param TwigTemplateBridge $ttb   TwigTemplateBridge object
     * @since 1.0.0
     */
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

    /**
     * Callback : esc_url
     *
     * @param Environment $env      Environment object
     * @param string|null $string   The URL to be cleaned
     * @return string|null          Action result
     * @since 1.2.0
     */
    public function __callback_esc_url(Environment $env, ?string $string): ?string
    {
        return esc_url($string, '', '');
    }

    /**
     * Callback : esc_url_raw
     *
     * @param Environment $env      Environment object
     * @param string|null $string   The URL to be cleaned
     * @return string|null          Action result
     * @since 1.0.0
     */
    public function __callback_esc_url_raw(Environment $env, ?string $string): ?string
    {
        return esc_url_raw($string);
    }

    /**
     * Callback : esc_html
     *
     * @param Environment $env      Environment object
     * @param string|null $string   HTML content
     * @return string|null          Action result
     * @since 1.0.0
     */
    public function __callback_esc_html(Environment $env, ?string $string): ?string
    {
        return esc_html($string);
    }

    /**
     * Callback : esc_js
     *
     * @param Environment $env      Environment object
     * @param string|null $string   JS content
     * @return string|null          Action result
     * @since 1.0.0
     */
    public function __callback_esc_js(Environment $env, ?string $string): ?string
    {
        return esc_js($string);
    }

    /**
     * Callback : esc_textarea
     *
     * @param Environment $env      Environment object
     * @param string|null $string   Text
     * @return string|null          Action result
     * @since 1.0.0
     */
    public function __callback_esc_textarea(Environment $env, ?string $string): ?string
    {
        return esc_textarea($string);
    }

    /**
     * Callback : esc_attr
     *
     * @param Environment $env      Environment object
     * @param string|null $string   HTML attribute
     * @return string|null          Action result
     * @since 1.0.0
     */
    public function __callback_esc_attr(Environment $env, ?string $string): ?string
    {
        return esc_attr($string);
    }

    /**
     * Callback : wp_kses_post
     *
     * @param Environment $env      Environment object
     * @param string|null $string   Post content to filter
     * @return string|null          Action result
     * @since 1.0.0
     */
    public function __callback_wp_kses_post(Environment $env, ?string $string): ?string
    {
        return wp_kses_post($string);
    }

    /**
     * Callback : wp_rel_nofollow
     *
     * @param Environment $env      Environment object
     * @param string|null $string   Content that may contain HTML A elements
     * @return string|null          Action result
     * @since 1.0.0
     */
    public function __callback_wp_rel_nofollow(Environment $env, ?string $string): string
    {
        return wp_rel_nofollow($string);
    }
}
