<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\MetaboxPanel\Helper;

use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Handler\OptionHandler;
use ZimbruCode\Module\Panel\Library\Shell\ControlShell as PanelControlShell;

/**
 * Class : Module/MetaboxPanel/Helper : Meta control shell
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class ControlShell extends PanelControlShell
{
    /**
     * Get control option
     *
     * @param string|null $option    Option name
     * @param mixed       $default   Default value
     * @return mixed                 Control option
     * @since 1.0.0
     */
    public function option(string $option = null, $default = null)
    {
        $option  = $option ?? $this->ID();
        $option  = str_replace(Kernel::getGlobal('core/module/panel/prefix-slug'), '', $option);
        $default = $default ?? $this->defaultValue();

        return OptionHandler::getMeta($option, $default);
    }
}
