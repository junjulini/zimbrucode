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
 * @since   1.0.0
 */
class AttachmentShell extends ShellKernel
{
    /**
     * Determines whether the query is for an existing attachment page
     *
     * @param int|string|int[]|string[] $attachment   Attachment ID, title, slug, or array of such to check against
     * @return boolean                                Whether the query is for an existing attachment page
     * @since 1.0.0
     */
    public function is($attachment = ''): bool
    {
        return is_attachment($attachment);
    }

    /**
     * Get an HTML img element representing an image attachment
     *
     * @param integer $attachmentID   Image attachment ID
     * @param string  $size           Image size. Accepts any registered image size name, or an array of width and height values in pixels (in that order)
     * @param boolean $icon           Whether the image should be treated as an icon
     * @param string  $attr           Attributes for the image markup
     * @return void
     * @since 1.0.0
     */
    public function image(int $attachmentID, $size = 'thumbnail', bool $icon = false, $attr = ''): void
    {
        echo wp_get_attachment_image($attachmentID, $size, $icon, $attr);
    }

    /**
     * Retrieves the caption for an attachment
     *
     * @param integer|null $postID   Attachment ID. Default is the ID of the global $post
     * @return string|boolean        Attachment caption on success, false on failure
     * @since 1.0.0
     */
    public function caption(int $postID = null)
    {
        return wp_get_attachment_caption($postID);
    }
}
