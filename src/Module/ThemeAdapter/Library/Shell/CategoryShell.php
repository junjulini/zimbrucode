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
 * Class : Module/ThemeAdapter/Library/Shell : Category shell
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
class CategoryShell extends ShellKernel
{
    /**
     * Display or retrieve page title for category archive
     *
     * @param string $prefix    What to display before the title
     * @param bool   $display   Whether to display or retrieve title
     * @return mixed            Title when retrieving
     * @since 1.3.0
     */
    public function singleTitle(string $prefix = '', bool $display = true): mixed
    {
        return apply_filters('zc/module/theme_adapter/category_shell/single_title', single_cat_title($prefix, $display));
    }

    /**
     * Retrieves category description
     *
     * @param int|null $category   Defaults to the current category ID
     * @return string              Category description, if available
     * @since 1.1.0
     */
    public function description(int $category = null): string
    {
        return category_description($category);
    }

    /**
     * Retrieves tag description
     *
     * @param int|null $tag   Tag ID. Defaults to the current tag ID
     * @return string         Tag description, if available
     * @since 1.1.0
     */
    public function tagDescription(int $tag = null): string
    {
        return tag_description($tag);
    }

    /**
     * Retrieves the terms associated with the given object(s), in the supplied taxonomies
     *
     * @param int|array    $objectIDs    The ID(s) of the object(s) to retrieve
     * @param string|array $taxonomies   The taxonomy names to retrieve terms from
     * @param array|string $args         See WP_Term_Query::__construct() for supported arguments
     * @return mixed                     Array of terms or empty array if no terms found. WP_Error if any of the taxonomies don't exist
     * @since 1.3.0
     */
    public function objectTerms(int|array $objectIDs = null, string|array $taxonomies = null, array|string $args = []): mixed
    {
        return wp_get_object_terms($objectIDs, $taxonomies, $args);
    }
}
