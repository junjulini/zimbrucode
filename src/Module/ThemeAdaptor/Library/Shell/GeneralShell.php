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
 * Class : General shell
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class GeneralShell extends ShellKernel
{
    public function getHomeURL(string $path = '/', $scheme = null): string
    {
        return esc_url(home_url($path, $scheme));
    }

    public function isFrontPageOrHome(): bool
    {
        return is_front_page() || is_home();
    }
}
