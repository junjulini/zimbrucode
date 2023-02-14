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
 * Class : Module/ThemeAdaptor/Library/Shell : Attachment shell
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */
class AttachmentShell extends ShellKernel
{
    /**
     * Determines whether the query is for an existing attachment page
     *
     * @param mixed $attachmentID   Attachment ID, title, slug, or array of such to check against
     * @return bool                 Whether the query is for an existing attachment page
     * @since 1.1.0
     */
    public function is($attachmentID = null): bool
    {
        return is_attachment($attachmentID);
    }

    /**
     * Get an HTML img element representing an image attachment
     *
     * @param int|null $attachmentID   Image attachment ID
     * @param mixed    $size           Image size. Accepts any registered image size name, or an array of width and height values in pixels (in that order)
     * @param bool     $icon           Whether the image should be treated as an icon
     * @param mixed    $attr           Attributes for the image markup
     * @return void
     * @since 1.1.0
     */
    public function image(?int $attachmentID = null, $size = 'thumbnail', bool $icon = false, $attr = ''): void
    {
        echo wp_get_attachment_image($attachmentID, $size, $icon, $attr);
    }

    /**
     * Retrieves the caption for an attachment
     *
     * @param int|null $postID   Attachment ID. Default is the ID of the global $post
     * @return mixed             Attachment caption on success, false on failure
     * @since 1.1.0
     */
    public function caption(?int $postID = null)
    {
        return wp_get_attachment_caption($postID);
    }

    /**
     * Retrieves the URL for an attachment
     *
     * @param int|null $attachmentID   Attachment post ID. Defaults to global $post
     * @return mixed                   Attachment URL, otherwise false
     * @since 1.1.0
     */
    public function url(?int $attachmentID = null)
    {
        $url = wp_get_attachment_url($attachmentID);

        return ($url && !is_bool($url)) ? esc_url($url) : $url;
    }

    /**
     * Retrieves attached file path based on attachment ID
     *
     * @param int|null $attachmentID   Attachment ID
     * @param bool     $unfiltered     Whether to apply filters
     * @return mixed                   The file path to where the attached file should be, false otherwise
     * @since 1.1.0
     */
    public function file(?int $attachmentID = null, bool $unfiltered = false)
    {
        return get_attached_file($attachmentID, $unfiltered);
    }

    /**
     * Retrieves an image to represent an attachment
     *
     * @param int|null $attachmentID   Image attachment ID
     * @param mixed    $size           Image size. Accepts any registered image size name, or an array of width and height values in pixels (in that order)
     * @param bool     $icon           Whether the image should fall back to a mime type icon
     * @return mixed                   Array of image data, or boolean false if no image is available
     * @since 1.1.0
     */
    public function data(?int $attachmentID = null, $size = 'thumbnail', bool $icon = false)
    {
        $data = wp_get_attachment_image_src($attachmentID, $size, $icon);

        if (!empty($data)) {
            return [
                'url'    => $data[0],
                'width'  => $data[1],
                'height' => $data[2],
            ];
        }

        return false;
    }
}
