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

use WP_Post;
use ZimbruCode\Component\TemplateBridges\Helper\ShellKernel;

/**
 * Class : Module/ThemeAdapter/Library/Shell : Comments shell
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
class CommentsShell extends ShellKernel
{
    /**
     * Determines whether the current post is open for comments
     *
     * @param WP_Post|null $postID   Post ID
     * @return bool                  True if the comments are open
     * @since 1.1.0
     */
    public function isOpen(WP_Post $postID = null): bool
    {
        return comments_open($postID);
    }

    /**
     * Displays the language string for the number of comments the current post has
     *
     * @param string|bool $zero     Text for no comments
     * @param string|bool $one      Text for one comment
     * @param string|bool $more     Text for more than one comment
     * @param int|WP_Post $postID   Post ID or WP_Post object. Default is the global $post
     * @return void
     * @since 1.3.0
     */
    public function number(string|bool $zero = false, string|bool $one = false, string|bool $more = false, int|WP_Post $postID = null): void
    {
        comments_number($zero, $one, $more, $postID);
    }

    /**
     * Get number
     *
     * @param int|WP_Post $postID   Post ID or WP_Post object. Default is the global $post
     * @return string|int
     * @since 1.3.0
     */
    public function getNumber(int|WP_Post $postID = null): string|int
    {
        return get_comments_number($postID);
    }

    /**
     * Undocumented function
     *
     * @param array $args            Default arguments and form fields to override
     * @param WP_Post|null $postID   Post ID
     * @return void
     * @since 1.1.0
     */
    public function form(array $args = [], WP_Post $postID = null): void
    {
        comment_form($args, $postID);
    }

    /**
     * Determines whether current WordPress query has comments to loop over
     *
     * @return bool   True if comments are available, false if no more comments
     * @since 1.1.0
     */
    public function check(): bool
    {
        return have_comments();
    }

    /**
     * Displays a list of comments
     *
     * @param string|array $args       Formatting options
     * @param array        $comments   Array of WP_Comment objects
     * @return mixed                   Void if 'echo' argument is true, or no comments to list. Otherwise, HTML list of comments
     * @since 1.3.0
     */
    public function list(string|array $args = [], array $comments = null): mixed
    {
        return wp_list_comments($args, $comments);
    }

    /**
     * Displays or retrieves pagination links for the comments on the current post
     *
     * @param string|array $args   Default arguments
     * @return mixed               Action result
     * @since 1.3.0
     */
    public function pagination(string|array $args = []): mixed
    {
        return paginate_comments_links($args);
    }
}
