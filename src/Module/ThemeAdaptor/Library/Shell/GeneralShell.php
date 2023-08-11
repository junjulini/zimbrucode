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
 * Class : Module/ThemeAdaptor/Library/Shell : General shell
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.2.0
 */
class GeneralShell extends ShellKernel
{
    /**
     * Retrieves the URL for a given site where the front end is accessible
     *
     * @param int|null    $blogID   Site ID. Default null (current site)
     * @param string      $path     Path relative to the home URL
     * @param string|null $scheme   Scheme to give the home URL context. Accepts 'http', 'https', 'relative', 'rest', or null
     * @return string               Home URL link with optional path appended
     * @since 1.2.0
     */
    public function homeURL(int $blogID = null, string $path = '', string $scheme = null): string
    {
        return esc_url(get_home_url($blogID, $path, $scheme), '', '');
    }

    /**
     * Check if the current page is "home page" or "home page"
     *
     * @return bool   Result of checking
     * @since 1.0.0
     */
    public function isFrontPageOrHome(): bool
    {
        return is_front_page() || is_home();
    }

    /**
     * Retrieves a post’s terms as a list with specified format
     *
     * @param int|null    $postID            Post ID
     * @param string|null $taxonomy          Taxonomy name
     * @param string      $before            String to use before the terms
     * @param string      $sep               String to use between the terms
     * @param string      $after             String to use after the terms
     * @return mixed                         A list of terms on success, false if there are no terms, WP_Error on failure
     * @since 1.1.0
     */
    public function getTermList(int $postID = null, string $taxonomy = null, string $before = '', string $sep = '', string $after = '')
    {
        return get_the_term_list($postID, $taxonomy, $before, $sep, $after);
    }

    /**
     * Retrieves information about the current site
     *
     * @param string $show     Site info to retrieve. Default empty (site name)
     * @param string $filter   How to filter what is retrieved
     * @return string          Mostly string values, might be empty
     * @since 1.1.0
     */
    public function blogInfo(string $show = '', string $filter = 'raw'): string
    {
        return get_bloginfo($show, $filter);
    }
}
