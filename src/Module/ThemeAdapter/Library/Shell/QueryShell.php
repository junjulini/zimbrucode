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
 * @since   1.3.0
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
     * @param array|string $query   Array or string of WP_Query arguments
     * @return array                Array of post objects or post IDs
     * @since 1.3.0
     */
    public function posts(array|string $query): array
    {
        return query_posts($query);
    }
}
