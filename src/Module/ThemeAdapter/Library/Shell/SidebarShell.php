<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\ThemeAdapter\Library\Shell;

use ZimbruCode\Component\TemplateBridges\Helper\ShellKernel;

/**
 * Class : Module/ThemeAdapter/Library/Shell : Sidebar shell
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */
class SidebarShell extends ShellKernel
{
    /**
     * Display dynamic sidebar
     *
     * @param mixed $index   Index, name or ID of dynamic sidebar
     * @return void
     * @since 1.0.0
     */
    public function get($index = null): void
    {
        dynamic_sidebar($index);
    }

    /**
     * Determines whether a sidebar contains widgets
     *
     * @param mixed $index   Sidebar name, id or number to check
     * @return bool          True if the sidebar has widgets, false otherwise
     * @since 1.1.0
     */
    public function has($index): bool
    {
        return is_active_sidebar($index);
    }
}
