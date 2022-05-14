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

use WP_Post;
use ZimbruCode\Component\TemplateBridges\Helper\ShellKernel;

/**
 * Class : Module/ThemeAdaptor/Library/Shell : Comments shell
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class CommentsShell extends ShellKernel
{
    /**
     * Determines whether the current post is open for comments
     *
     * @param WP_Post|null $postID   Post ID
     * @return boolean               True if the comments are open
     * @since 1.0.0
     */
    public function isOpen(WP_Post $postID = null): bool
    {
        return comments_open($postID);
    }

    /**
     * Displays the language string for the number of comments the current post has
     *
     * @param string|boolean $zero     Text for no comments
     * @param string|boolean $one      Text for one comment
     * @param string|boolean $more     Text for more than one comment
     * @param int|WP_Post    $postID   Post ID or WP_Post object. Default is the global $post
     * @return void
     * @since 1.0.0
     */
    public function number($zero = false, $one = false, $more = false, $postID = null): void
    {
        comments_number($zero, $one, $more, $postID);
    }

    /**
     * Get number
     *
     * @param int|WP_Post $postID   Post ID or WP_Post object. Default is the global $post
     * @return void
     * @since 1.0.0
     */
    public function getNumber($postID = null)
    {
        return get_comments_number($postID);
    }

    /**
     * Undocumented function
     *
     * @param array $args            Default arguments and form fields to override
     * @param WP_Post|null $postID   Post ID
     * @return void
     * @since 1.0.0
     */
    public function form(array $args = [], WP_Post $postID = null)
    {
        comment_form($args, $postID);
    }

    /**
     * Determines whether current WordPress query has comments to loop over
     *
     * @return boolean   True if comments are available, false if no more comments
     * @since 1.0.0
     */
    public function check(): bool
    {
        return have_comments();
    }

    /**
     * Displays a list of comments
     *
     * @param string|array $args       Formatting options
     * @param WP_Comment[] $comments   Array of WP_Comment objects
     * @return void|string             Void if 'echo' argument is true, or no comments to list. Otherwise, HTML list of comments
     * @since 1.0.0
     */
    function list($args = [], $comments = null) {
        return wp_list_comments($args, $comments);
    }

    /**
     * Displays or retrieves pagination links for the comments on the current post
     *
     * @param array|string $args   Default arguments
     * @return void|string|array   Action result
     * @since 1.0.0
     */
    public function pagination($args = [])
    {
        return paginate_comments_links($args);
    }
}
