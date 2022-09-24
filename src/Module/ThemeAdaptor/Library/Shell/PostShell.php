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
     * Get post title
     *
     * @param boolean $return   Echo/Return
     * @param integer $postID   Post ID
     * @return void
     * @since 1.0.0
     */
    public function title(bool $return = false, int $postID = 0)
    {
        $data = get_the_title($postID);

        if ($return === true) {
            return $data;
        } else {
            echo $data;
        }
    }

    /**
     * Echo post content
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
     * Get post content
     *
     * @param string|null        $moreLinkText   Content for when there is more text
     * @param boolean            $stripTeaser    Strip teaser content before the more text
     * @param WP_Post|object|int $post           WP_Post instance or Post ID/object
     * @return string                            Action result
     * @since 1.0.0
     */
    public function getContent(string $moreLinkText = null, bool $stripTeaser = false, $post = null): string
    {
        return get_the_content($moreLinkText, $stripTeaser, $post);
    }

    /**
     * Get the permalink for the current post
     *
     * @param integer $postID   Post ID
     * @return string|false     The permalink URL or false if post does not exist
     * @since 1.0.0
     */
    public function link(int $postID = 0)
    {
        return get_permalink($postID);
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
     * Retrieve the time at which the post was written
     *
     * @param string      $format   Format to use for retrieving the time the post was written. Accepts 'G', 'U', or PHP date format
     * @param int|WP_Post $post     WP_Post object or ID. Default is global $post object
     * @return string|int|false     Formatted date string or Unix timestamp if $format is 'U' or 'G'. False on failure
     * @since 1.0.0
     */
    public function time(string $format = '', $post = null)
    {
        return get_the_time($format, $post);
    }

    /**
     * Retrieve the date on which the post was written
     *
     * @param string      $format   PHP date format. Defaults to the 'date_format' option
     * @param int|WP_Post $post     Post ID or WP_Post object. Default current post
     * @return string|false         Date the current post was written. False on failure
     * @since 1.0.0
     */
    public function date(string $format = '', $post = null)
    {
        return get_the_date($format, $post);
    }

    /**
     * Whether post requires password and correct password has been provided
     *
     * @param int|WP_Post|null $post   An optional post. Global $post used if not provided
     * @return boolean                 False if a password is not required or the correct password cookie is present, true otherwise
     * @since 1.0.0
     */
    public function passwordRequired($post = null): bool
    {
        return post_password_required($post);
    }

    /**
     * Get meta value
     *
     * @param string  $meta      Meta option name
     * @param mix     $default   Default value
     * @param integer $id        Post ID
     * @return mix               Action result
     * @since 1.0.0
     */
    public function meta(string $meta, $default = '', int $id = null)
    {
        return OptionHandler::getMeta($meta, $default, $id);
    }

    /**
     * Display the post thumbnail
     *
     * @param string|int[] $size   Image size. Accepts any registered image size name, or an array of width and height values in pixels (in that order)
     * @param string|array $attr   Query string or array of attributes
     * @return void
     * @since 1.0.0
     */
    public function image($size = 'post-thumbnail', $attr = ''): void
    {
        the_post_thumbnail($size, $attr);
    }

    /**
     * Determines whether a post has an image attached
     *
     * @param int|WP_Post $post   Post ID or WP_Post object. Default is global $post
     * @return boolean            Whether the post has an image attached
     * @since 1.0.0
     */
    public function hasImage($post = null): bool
    {
        return has_post_thumbnail($post);
    }

    /**
     * Return the post thumbnail URL
     *
     * @param int|WP_Post  $post   Post ID or WP_Post object. Default is global $post
     * @param string|int[] $size   Registered image size to retrieve the source for or a flat array of height and width dimensions
     * @return string|false        Post thumbnail URL or false if no image is available. If $size does not match any registered image size, the original image URL will be returned
     * @since 1.0.0
     */
    public function imageURL($post = null, $size = 'post-thumbnail')
    {
        return get_the_post_thumbnail_url($post, $size);
    }

    /**
     * Returns the post thumbnail caption
     *
     * @param int|WP_Post $post   Post ID or WP_Post object. Default is global $post
     * @return string             Post thumbnail caption
     * @since 1.0.0
     */
    public function imageCaption($post = null): string
    {
        return get_the_post_thumbnail_caption($post);
    }

    /**
     * The formatted output of a list of pages
     *
     * @param array $args   Default arguments
     * @return string       Formatted output in HTML
     * @since 1.0.0
     */
    public function linkPages(array $args = []): string
    {
        return wp_link_pages($args);
    }

    /**
     * Undocumented function
     *
     * @param string       $before     String to use before the tags
     * @param string       $sep        String to use between the tags
     * @param string       $after      String to use after the tags
     * @param integer|null $postID     Post ID. Defaults to the current post ID
     * @return void
     * @since 1.0.0
     */
    public function tagList(string $before = '', string $sep = '', string $after = '', int $postID = null): void
    {
        echo get_the_tag_list($before, $sep, $after, $postID);
    }

    /**
     * Retrieves the previous post link that is adjacent to the current post
     *
     * @param string       $format          Link anchor format. Default '« %link'
     * @param string       $link            Link permalink format
     * @param boolean      $inSameTerm      Whether link should be in a same taxonomy term
     * @param int[]|string $excludedTerms   Array or comma-separated list of excluded term IDs
     * @param string       $taxonomy        Taxonomy, if $in_same_term is true
     * @return string                       The link URL of the previous post in relation to the current post
     * @since 1.0.0
     */
    public function previousPageLink(string $format = '&laquo; %link', string $link = '%title', bool $inSameTerm = false, $excludedTerms = '', string $taxonomy = 'category'): string
    {
        return get_previous_post_link($format, $link, $inSameTerm, $excludedTerms, $taxonomy);
    }

    /**
     * Retrieves the next post link that is adjacent to the current post
     *
     * @param string       $format          Link anchor format. Default '« %link'
     * @param string       $link            Link permalink format
     * @param boolean      $inSameTerm      Whether link should be in a same taxonomy term
     * @param int[]|string $excludedTerms   Array or comma-separated list of excluded term IDs
     * @param string       $taxonomy        Taxonomy, if $in_same_term is true
     * @return string                       The link URL of the previous post in relation to the current post
     * @since 1.0.0
     */
    public function nextPageLink(string $format = '%link &raquo;', string $link = '%title', bool $inSameTerm = false, $excludedTerms = '', string $taxonomy = 'category'): string
    {
        return get_next_post_link($format, $link, $inSameTerm, $excludedTerms, $taxonomy);
    }
}
