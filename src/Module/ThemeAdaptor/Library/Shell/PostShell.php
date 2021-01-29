<?php

/*
 * This file is part of the ZimbruCode package.
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
 * Class : Post shell
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class PostShell extends ShellKernel
{
    public function __toString()
    {
        return $this->title();
    }

    public function title(int $postID = 0): void
    {
        echo get_the_title($postID);
    }

    public function content(string $moreLinkText = null): void
    {
        the_content($moreLinkText);
    }

    public function link(int $postID = 0): void
    {
        the_permalink($postID);
    }

    public function classes(string $class = '', $postID = null)
    {
        return join(' ', get_post_class($class, $postID));
    }

    public function ID()
    {
        return get_the_ID();
    }

    public function meta(string $meta, $id = null)
    {
        return OptionHandler::getMeta($meta, '', $id);
    }
}
