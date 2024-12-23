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
 * Class : Module/ThemeAdapter/Library/Shell : Author shell
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
class AuthorShell extends ShellKernel
{
    /**
     * Retrieve the author of the current post
     *
     * @return string   The author's display name
     * @since 1.3.0
     */
    public function name(): string
    {
        return get_the_author();
    }

    /**
     * Retrieve the URL to the author page for the user with the ID provided
     *
     * @return string   The URL to the author's page
     * @since 1.3.0
     */
    public function pageURL(): string
    {
        if (isset($GLOBALS['post'])) {
            $user = get_userdata($GLOBALS['post']->post_author);

            return esc_url(get_author_posts_url($user->data->ID, $user->data->user_nicename), '', '');
        } else {
            return '';
        }
    }

    /**
     * Displays an HTML link to the author page of the current post’s author
     *
     * @return void
     * @since 1.3.0
     */
    public function pageLink(): void
    {
        if (isset($GLOBALS['post'])) {
            $user  = get_userdata($GLOBALS['post']->post_author);
            $title = esc_attr(sprintf(__('Posts by %s'), $user->data->display_name));

            echo "<a href=\"{$this->pageURL()}\" title=\"{$title}\" rel=\"author\">{$user->data->display_name}</a>";
        }
    }

    /**
     * Retrieves the requested data of the author of the current post
     *
     * @param string   $field    The user field to retrieve
     * @param int|bool $userID   User ID
     * @return string            The author's field from the current author's DB object, otherwise an empty string
     * @since 1.3.0
     */
    public function meta(string $field = '', int|bool $userID = false): string
    {
        if (!$userID && isset($GLOBALS['post'])) {
            $userID = $GLOBALS['post']->post_author;
        }

        return get_the_author_meta($field, $userID);
    }

    /**
     * Retrieve the avatar <img> tag for a user, email address, MD5 hash, comment, or post
     *
     * @param int    $size   Height and width of the avatar image file in pixels
     * @param string $alt    Alternative text to use in img tag
     * @return void
     * @since 1.1.0
     */
    public function avatar(int $size = 96, string $alt = ''): void
    {
        echo get_avatar($this->meta('ID'), $size, '', $alt);
    }

    /**
     * Determines whether the query is for an existing author archive page
     * 
     * @param int|string|array $author   User ID, nickname, nicename, or array of such to check against
     * @return bool                      Whether the query is for an existing author archive page
     * @since 1.3.0
     */
    public function is(int|string|array $author = ''): bool
    {
        return is_author($author);
    }
}
