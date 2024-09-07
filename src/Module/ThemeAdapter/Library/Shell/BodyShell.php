<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\ThemeAdapter\Library\Shell;

use ZimbruCode\Component\TemplateBridges\Helper\ShellKernel;

/**
 * Class : Module/ThemeAdapter/Library/Shell : Body shell
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
class BodyShell extends ShellKernel
{
    /**
     * Fire the wp_head action
     *
     * @return void
     * @since 1.1.0
     */
    public function head(): void
    {
        wp_head();
    }

    /**
     * Fire the wp_footer action
     *
     * @return void
     * @since 1.1.0
     */
    public function footer(): void
    {
        wp_footer();
    }

    /**
     * Displays the language attributes for the ‘html’ tag
     *
     * @param string $doctype   The type of HTML document. Accepts 'xhtml' or 'html'
     * @return void
     * @since 1.1.0
     */
    public function languageAttributes(string $doctype = 'html'): void
    {
        language_attributes($doctype);
    }

    /**
     * Displays the class names for the body element
     *
     * @param string $class   Space-separated string or array of class names to add to the class list
     * @return void
     * @since 1.1.0
     */
    public function classes(string $class = ''): void
    {
        body_class($class);
    }

    /**
     * Fire the wp_body_open action
     *
     * @return void
     * @since 1.1.0
     */
    public function firstAction(): void
    {
        wp_body_open();
    }

    /**
     * Display or retrieve page title for all areas of blog
     *
     * @param string $sep           How to separate the various items within the page title. Default '»'
     * @param string $sepLocation   Location of the separator ('left' or 'right')
     * @return mixed                Action result
     * @since 1.3.0
     */
    public function title(string $sep = '&raquo;', string $sepLocation = ''): mixed
    {
        return wp_title($sep, true, $sepLocation);
    }
}
