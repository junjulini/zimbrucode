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
 * Class : Module/ThemeAdaptor/Library/Shell : Search shell
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class SearchShell extends ShellKernel
{
    /**
     * Display search form
     *
     * @param array $args   Array of display arguments
     * @return void
     * @since 1.0.0
     */
    public function form(array $args = []): void
    {
        get_search_form($args);
    }

    /**
     * Retrieves the contents of the search WordPress query variable
     *
     * @param boolean $escaped   Whether the result is escaped. Only use when you are later escaping it. Do not use unescaped
     * @return string            Action result
     * @since 1.0.0
     */
    public function query(bool $escaped = true): string
    {
        return get_search_query($escaped);
    }
}
