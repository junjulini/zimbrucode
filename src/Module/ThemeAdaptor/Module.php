<?php

/*
 * This file is part of the zimbrucode package.
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
use ZimbruCode\Module\ThemeAdaptor\Library\MVC;
use ZimbruCode\Module\ThemeAdaptor\Library\TemplateFilesHandler;

/**
 * Module : Theme adaptor
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
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
    public function setup(): void
    {
        // Initialize search for custom templates
        $this->initCustomTemplates();

        // Template include
        $this->addFilter('template_include', '__filter_template_include', 999999);
    }

    protected function initCustomTemplates(): void
    {
        if (file_exists($dir = self::service('app-locator')->getViewPath())) {
            $this->searchCustomTemplates($dir);
        }

        if (Tools::isChildTheme()) {
            if (file_exists($dir = wp_normalize_path(get_stylesheet_directory()) . '/views')) {
                $this->searchCustomTemplates($dir);
            }
        }

        if ($this->templates) {
            $this->addFilter('theme_page_templates', '__filter_register_templates', 20, 4);
            $this->addFilter('template_include',     '__filter_register_templates_files', 11);
        }
    }

    /**
     * Search custom templates
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    protected function searchCustomTemplates(string $dir): void
    {
        $prefix = self::getGlobal('core/module/theme-adaptor/custom-template-prefix', '__');

        foreach ((new Finder)->files()->in($dir) as $file) {
            if (strpos($file->getBasename(), $prefix) !== false) {
                $path = wp_normalize_path($file->getPathname());

                if (!preg_match('|Template Name:(.*)$|mi', file_get_contents($path), $header)) {
                    continue;
                }

                if (empty($header[1]) || $header[1] == ' ') {
                    continue;
                }

                $hash = md5(str_replace(get_theme_root(), '', $path));
                $slug = self::getGlobal('core/slug', 'zc') . '_template_' . $hash;

                $this->templates[$slug] = [
                    'name' => $header[1],
                    'file' => $path,
                ];
            }
        }
    }

    public function advancedRender(...$args): Render
    {
        return new Render(...$args);
    }

    public function mvc(string $template, array $additionalData = []): MVC
    {
        return new MVC($template, $this->getModuleResourcePath('views'), $additionalData);
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
        if (is_singular()) {
            $templates = get_post_meta(get_the_ID(), '_wp_page_template');

            if (!empty($templates)) {
                foreach ($templates as $templateHash) {
                    if (isset($this->templates[$templateHash])) {
                        $template = $this->templates[$templateHash]['file'];
                    }
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
        $tfh           = new TemplateFilesHandler;
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
            $this->mvc($template);
            return false;
        } else {
            return $wpTemplate;
        }
    }
}
