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

    public function title(string $before = '', string $after = ''): void
    {
        the_title($before, $after);
    }

    public function content(): void
    {
        the_content();
    }

    public function link(): void
    {
        the_permalink();
    }

    public function classes($class = '', $postID = null)
    {
        return join(' ', get_post_class($class, $postID));
    }

    public function ID(): void
    {
        the_ID();
    }

    public function meta(string $meta, $id = null)
    {
        return OptionHandler::getMeta($meta, '', $id);
    }
}
