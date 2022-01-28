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
 * Class : Module/ThemeAdaptor/Library/Shell : Menu shell
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class MenuShell extends ShellKernel
{
    /**
     * Displays a navigation menu
     *
     * @param array $args    Array of nav menu arguments
     * @return string|null   Void if 'echo' argument is true, menu output if 'echo' is false. False if there are no items or no menu was found
     * @since 1.0.0
     */
    public function get(array $args = []): ?string
    {
        if (!isset($args['echo']) || isset($args['echo']) && $args['echo'] === true) {
            wp_nav_menu($args);
            return null;
        } else {
            return wp_nav_menu($args);
        }
    }

    /**
     * Determines whether a registered nav menu location has a menu assigned to it
     *
     * @param string $location   Menu location identifier
     * @return boolean           Whether location has a menu
     * @since 1.0.0
     */
    public function has(string $location): bool
    {
        return has_nav_menu($location);
    }
}
