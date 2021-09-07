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
 * Class : Query shell
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class QueryShell extends ShellKernel
{
    public function resetGlobal(): void
    {
        wp_reset_query();
    }

    public function reset(): void
    {
        wp_reset_postdata();
    }

    public function posts($query, bool $return = false)
    {
        if ($return === true) {
            return query_posts($query);
        } else {
            query_posts($query);
        }
    }

    public function search()
    {
        return get_search_query();
    }
}
