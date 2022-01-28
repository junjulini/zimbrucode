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

use ZimbruCode\Component\Handler\OptionHandler;
use ZimbruCode\Component\TemplateBridges\Helper\ShellKernel;

/**
 * Class : Module/ThemeAdaptor/Library/Shell : Post shell
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class PostShell extends ShellKernel
{
    /**
     * Get post title
     *
     * @param integer $postID   Post ID
     * @return void
     * @since 1.0.0
     */
    public function title(int $postID = 0): string
    {
        return get_the_title($postID);
    }

    /**
     * Get post content
     *
     * @param string  $moreLinkText   Content for when there is more text
     * @param boolean $stripTeaser    Strip teaser content before the more text
     * @return void
     * @since 1.0.0
     */
    public function content(string $moreLinkText = null, bool $stripTeaser = false): void
    {
        the_content($moreLinkText, $stripTeaser);
    }

    /**
     * Get the permalink for the current post
     *
     * @param integer $postID   Post ID
     * @return void
     * @since 1.0.0
     */
    public function link(int $postID = 0): void
    {
        the_permalink($postID);
    }

    /**
     * Get the class names for the post container element
     *
     * @param string  $class    A string of class names, separated by spaces, to add to the list of classes.
     * @param integer $postID   Post ID
     * @return string           Class names
     * @since 1.0.0
     */
    public function classes(string $class = '', $postID = null): string
    {
        return implode(' ', get_post_class($class, $postID));
    }

    /**
     * Get the ID of the current item in the WordPress Loop
     *
     * @return integer|boolean   The ID of the current item in the WordPress Loop. False if $post is not set
     * @since 1.0.0
     */
    public function ID()
    {
        return get_the_ID();
    }

    /**
     * Get meta value
     *
     * @param string  $meta   Meta name
     * @param integer $id     Post ID
     * @return mix            Action result
     * @since 1.0.0
     */
    public function meta(string $meta, $id = null)
    {
        return OptionHandler::getMeta($meta, '', $id);
    }
}
