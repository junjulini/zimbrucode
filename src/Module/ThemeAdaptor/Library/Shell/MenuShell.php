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
 * Class : Menu shell
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
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

    public function has(string $location): bool
    {
        return has_nav_menu($location);
    }
}
