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
 * Class : Module/ThemeAdaptor/Library/Shell : General shell
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class GeneralShell extends ShellKernel
{
    /**
     * Get home URL
     *
     * @param string      $path     Path relative to the home URL
     * @param string|null $scheme   Scheme to give the home URL context. Accepts 'http', 'https', 'relative', 'rest', or null
     * @return string               Home URL link with optional path appended
     * @since 1.0.0
     */
    public function getHomeURL(string $path = '/', $scheme = null): string
    {
        return esc_url(home_url($path, $scheme));
    }

    /**
     * Check if the current page is "home page" or "home page"
     *
     * @return boolean   Result of checking
     * @since 1.0.0
     */
    public function isFrontPageOrHome(): bool
    {
        return is_front_page() || is_home();
    }
}
