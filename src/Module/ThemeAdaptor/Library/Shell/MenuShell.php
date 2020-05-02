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

use ZimbruCode\Component\TemplateBridges\Helper\ShellKernel;

/**
 * Class : Menu shell
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class MenuShell extends ShellKernel
{
    /**
     * Get menu
     *
     * @param array $args
     * @return void
     */
    public function get(array $args = [])
    {
        if (!isset($args['echo']) || isset($args['echo']) && $args['echo'] === true) {
            wp_nav_menu($args);
        } else {
            return wp_nav_menu($args);
        }
    }

    public function has($location)
    {
        return has_nav_menu($location);
    }
}
