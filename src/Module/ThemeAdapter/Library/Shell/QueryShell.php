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
 * Class : Module/ThemeAdapter/Library/Shell : Query shell
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */
class QueryShell extends ShellKernel
{
    /**
     * Destroys the previous query and sets up a new query
     *
     * @return void
     * @since 1.0.0
     */
    public function resetGlobal(): void
    {
        wp_reset_query();
    }

    /**
     * After looping through a separate query, this function restores the $post global to the current post in the main query
     *
     * @return void
     * @since 1.0.0
     */
    public function reset(): void
    {
        wp_reset_postdata();
    }

    /**
     * Sets up The Loop with query parameters
     *
     * @param mixed $query   Array or string of WP_Query arguments
     * @return mixed         Array of post objects or post IDs
     * @since 1.0.0
     */
    public function posts($query)
    {
        return query_posts($query);
    }

    /**
     * Retrieves the contents of the search WordPress query variable
     *
     * @param bool $escaped   Whether the result is escaped. Only use when you are later escaping it
     * @return string         Contents of the search query
     * @since 1.1.0
     */
    public function search(bool $escaped = true): string
    {
        return get_search_query();
    }
}
