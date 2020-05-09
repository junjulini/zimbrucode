<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\MetaboxPanel\Helper;

use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Module\Panel\Library\Shell\ControlShell as PanelControlShell;

/**
 * Class : Meta control shell
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class ControlShell extends PanelControlShell
{
    /**
     * Get control option
     * 
     * @param  string $option    Option name
     * @param  mix    $default   Default value
     * @return mix               Control option
     * @since 1.0.0
     */
    public function option($option = null, $default = null)
    {
        $option  = (isset($option)) ? "_{$option}" : "_{$this->ID()}";
        $default = (isset($default)) ? $default : $this->defaultValue();
        $output  = get_post_meta(get_the_ID(), $option, true);

        return ($output) ? $output : $default;
    }
}
