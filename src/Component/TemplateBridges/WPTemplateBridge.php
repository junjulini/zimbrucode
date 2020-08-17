<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\TemplateBridges;

use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Handler\Traits\HooksHandlerTrait;

/**
 * Class : WordPress Template
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class WPTemplateBridge
{
    use HooksHandlerTrait;

    protected $templates = [];
    protected $location  = '';

    /**
     * Add location for custom templates files
     * 
     * @param string $location   Patch
     * @return void              This function does not return a value
     * @since 1.0.0
     */
    public function addLocation($location)
    {
        if ($location && is_string($location)) {
            $this->location = $location;
        }
    }

    /**
     * Add custom templates
     *
     * @param array $templates   Templates list
     * @return void              This function does not return a value
     * @since 1.0.0
     */
    public function add(array $templates)
    {
        $this->templates = Tools::arrayMerge($this->templates, $templates);
    }

    /**
     * Register custom templates
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function register()
    {
        // Set a filter to the attributes metabox to inject template into the cache.
        $this->addFilter('page_attributes_dropdown_pages_args', '__filter_register_templates');

        // Set a filter to the save post to inject out template into the page cache
        $this->addFilter('wp_insert_post_data', '__filter_register_templates');

        // Set a filter to the template include to determine if the page has our
        // template assigned and return it's path
        $this->addFilter('template_include', '__filter_view_template');
    }

    /**
     * Filter : Adds our template to the pages cache in order to trick WordPress
     * into thinking the template file exists where it doesn't really exist.
     * 
     * @since 1.0.0
     */
    public function __filter_register_templates($atts)
    {
        // Create the key used for the themes cache
        $cacheKey = 'page_templates-' . md5(get_theme_root() . '/' . get_stylesheet());

        // Retrieve the cache list.
        // If it doesn't exist, or it's empty prepare an array
        $templates = wp_get_theme()->get_page_templates();

        if (!$templates) {
            $templates = [];
        }

        // New cache, therefore remove the old one
        wp_cache_delete($cacheKey, 'themes');

        // Now add our template to the list of templates by merging our templates
        // with the existing templates array from the cache.
        $templates = array_merge($templates, $this->templates);

        // Add the modified cache to allow WordPress to pick it up for listing
        // available templates
        wp_cache_add($cacheKey, $templates, 'themes', 1800);

        return $atts;
    }

    /**
     * Filter : Checks if the template is assigned to the page
     * 
     * @param  string $template   Template file
     * @return string             New template file
     * @since 1.0.0
     */
    public function __filter_view_template($template)
    {
        global $post;

        $newTemplate = get_post_meta($post->ID, '_wp_page_template', true);

        if (!isset($this->templates[$newTemplate])) {
            return $template;
        }

        $file = $this->location . $newTemplate;

        // Just to be safe, we check if the file exist first
        if (file_exists($file)) {
            return $file;
        }

        return $template;
    }
}
