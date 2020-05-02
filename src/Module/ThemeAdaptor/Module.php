<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\ThemeAdaptor;

use Symfony\Component\Finder\Finder;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\ModuleKernel;
use ZimbruCode\Module\ThemeAdaptor\Library\Render;
use ZimbruCode\Module\ThemeAdaptor\Library\TemplateFilesHandler;

/**
 * Module : Theme adaptor
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Module extends ModuleKernel
{
    protected $templates = [];

    /**
     * Module setup
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function setup()
    {
        // Search custom templates
        $this->searchCustomTemplates();

        // Template include
        $this->addFilter('template_include', '__filter_template_include', 999999);
    }

    /**
     * Search custom templates
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    protected function searchCustomTemplates()
    {
        $prefix = self::getGlobal('core/module/theme-adaptor/custom-template-prefix', '__');
        $slug = self::getGlobal('core/slug', 'zc');

        if (file_exists($dir = self::service('app-locator')->getViewPath())) {
            foreach ((new Finder)->files()->in($dir) as $file) {
                if (strpos($file->getBasename(), $prefix) !== false) {
                    $path = wp_normalize_path($file->getPathname());
                    $hash = $slug . '_template_' . md5($path);

                    $this->templates[$hash] = [
                        'name' => ucfirst(str_replace([$prefix, '-', '_'], ['', ' ', ' '], $file->getBasename('.twig'))),
                        'file' => $path
                    ];
                }
            }
        }

        if (Tools::isChildTheme()) {
            if (file_exists($dir = wp_normalize_path(get_stylesheet_directory()) . '/views')) {
                foreach ((new Finder)->files()->in($dir) as $file) {
                    if (strpos($file->getBasename(), $prefix) !== false) {
                        $path = wp_normalize_path($file->getPathname());
                        $hash = $slug . '_template_' . md5($path);

                        $this->templates[$hash] = [
                            'name' => ucfirst(str_replace([$prefix, '-', '_'], ['', ' ', ' '], $file->getBasename('.twig'))),
                            'file' => $path
                        ];
                    }
                }
            }
        }

        if ($this->templates) {
            $this->addFilter('theme_page_templates', '__filter_register_templates', 20, 4);
            $this->addFilter('template_include',     '__filter_register_templates_files', 11);
        }
    }

    public function __filter_register_templates($templates)
    {
        if (!empty($this->templates)) {
            $data = [];

            foreach ($this->templates as $templateHash => $templateData) {
                $data[$templateHash] = $templateData['name'];
            }

            $templates = $data + $templates;
        }

        return $templates;
    }

    public function __filter_register_templates_files($template)
    {
        $templates = get_post_meta(get_the_ID(), '_wp_page_template');
        if (!empty($templates)) {
            foreach ($templates as $templateHash) {
                if (isset($this->templates[$templateHash])) {
                    $template = $this->templates[$templateHash]['file'];
                }
            }
        }

        return $template;
    }

    /**
     * Filter : Template include
     * 
     * @param  string $wpTemplate WordPress template
     * @return string             WordPress template
     * @since 1.0.0
     */
    public function __filter_template_include($wpTemplate)
    {
        $tfh = new TemplateFilesHandler;
        $tfh->location = self::service('app-locator')->getViewPath();

        $template     = false;
        $tagTemplates = [
            'is_embed'             => 'getEmbedTemplate',
            'is_404'               => 'get404Template',
            'is_search'            => 'getSearchTemplate',
            'is_front_page'        => 'getFrontPageTemplate',
            'is_home'              => 'getHomeTemplate',
            'is_privacy_policy'    => 'getPrivacyPolicyTemplate',
            'is_post_type_archive' => 'getPostTypeArchiveTemplate',
            'is_tax'               => 'getTaxonomyTemplate',
            'is_attachment'        => 'getAttachmentTemplate',
            'is_single'            => 'getSingleTemplate',
            'is_page'              => 'getPageTemplate',
            'is_singular'          => 'getSingularTemplate',
            'is_category'          => 'getCategoryTemplate',
            'is_tag'               => 'getTagTemplate',
            'is_author'            => 'getAuthorTemplate',
            'is_date'              => 'getDateTemplate',
            'is_archive'           => 'getArchiveTemplate',
        ];

        // Loop through each of the template conditionals, and find the appropriate template file.
        foreach ($tagTemplates as $tag => $templateGetter) {
            if (call_user_func($tag)) {
                $template = $tfh->{$templateGetter}();
            }

            if ($template) {
                if ('is_attachment' === $tag) {
                    remove_filter('the_content', 'prepend_attachment');
                }

                break;
            }
        }

        if (!$template) {
            $template = $tfh->getIndexTemplate();
        }

        if ($wpTemplate !== get_index_template()) {
            $ext = (new \SplFileInfo($wpTemplate))->getExtension();

            if ($ext === 'php' || $ext === 'html') {
                return $wpTemplate;
            } elseif ($ext === 'twig') {
                $template = basename($wpTemplate);
            }
        }

        // Filter
        $template = apply_filters('zc/module/theme_adaptor/template', $template);

        if ($template) {
            new Render($template, $this->getModuleResourcePath('views'));
            return false;
        } else {
            return $wpTemplate;
        }
    }
}
