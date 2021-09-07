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
 * Class : Sidebar shell
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class SidebarShell extends ShellKernel
{
    /**
     * Get widgets
     *
     * @param mix $index   Name or ID of dynamic sidebar
     * @return void
     */
    public function get($index = null): void
    {
        dynamic_sidebar($index);
    }

    public function has($index)
    {
        return is_active_sidebar($index);
    }
}
