<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\ThemeAdaptor\Library\Shell;

use ZimbruCode\Component\TemplateBridges\Helper\ShellKernel;

/**
 * Class : Module/ThemeAdaptor/Library/Shell : Author shell
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */
class AuthorShell extends ShellKernel
{
    /**
     * Retrieve the author of the current post
     *
     * @return mixed   The author's display name
     * @since 1.0.0
     */
    public function name()
    {
        return get_the_author();
    }

    /**
     * Retrieve the URL to the author page for the user with the ID provided
     *
     * @return string   The URL to the author's page
     * @since 1.0.0
     */
    public function pageURL(): string
    {
        if (isset($GLOBALS['authordata'])) {
            return esc_url(get_author_posts_url($GLOBALS['authordata']->ID, $GLOBALS['authordata']->user_nicename));
        } else {
            return '';
        }
    }

    /**
     * Displays an HTML link to the author page of the current post’s author
     *
     * @return void
     * @since 1.0.0
     */
    public function pageLink(): void
    {
        echo the_author_posts_link();
    }

    /**
     * Retrieves the requested data of the author of the current post
     *
     * @param string   $field    The user field to retrieve
     * @param int|bool $userID   User ID
     * @return string             The author's field from the current author's DB object, otherwise an empty string
     * @since 1.1.0
     */
    public function meta(string $field = '', $userID = false): string
    {
        return get_the_author_meta($field, $userID);
    }

    /**
     * Retrieve the avatar <img> tag for a user, email address, MD5 hash, comment, or post
     *
     * @param int    $size   Height and width of the avatar image file in pixels
     * @param string $alt    Alternative text to use in img tag
     * @return void
     * @since 1.0.0
     */
    public function avatar(int $size = 96, string $alt = ''): void
    {
        echo get_avatar($this->meta('ID'), $size, '', $alt);
    }
}
