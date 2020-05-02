<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\ThemeAdaptor\Library;

/**
 * Class : Template files handler
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class TemplateFilesHandler
{
    public $location = '';

    /**
     * Retrieve path to a template
     *
     * Used to quickly retrieve the path of a template without including the file
     * extension. It will also check the parent theme, if the file exists, with
     * the use of {@link locateTemplate()}. Allows for more generic template location
     * without the use of the other get_*_template() functions.
     *
     * @param string $type      Filename without extension.
     * @param array  $templates An optional list of template candidates
     * @return string Full path to template file.
     * @since 1.0.0
     */
    public function getQueryTemplate($type, array $templates = [])
    {
        $type = preg_replace('|[^a-z0-9-]+|', '', $type);

        if (empty($templates)) {
            $templates = ["{$type}.twig"];
        }

        return $this->locateTemplate($templates);
    }

    /**
     * Retrieve path of index template in current or parent template.
     *
     * @see getQueryTemplate()
     * @return string Full path to index template file.
     * @since 1.0.0
     */
    public function getIndexTemplate()
    {
        return $this->getQueryTemplate('index');
    }

    /**
     * Retrieve path of 404 template in current or parent template.
     *
     * @see getQueryTemplate()
     * @return string Full path to 404 template file.
     * @since 1.0.0
     */
    public function get404Template()
    {
        return $this->getQueryTemplate('404');
    }

    /**
     * Retrieve path of archive template in current or parent template.
     *
     * @see getQueryTemplate()
     * @return string Full path to archive template file.
     * @since 1.0.0
     */
    public function getArchiveTemplate()
    {
        $postTypes = array_filter((array) get_query_var('post_type'));
        $templates = [];

        if (count($postTypes) == 1) {
            $postType    = reset($postTypes);
            $templates[] = "archive-{$postType}.twig";
        }

        $templates[] = 'archive.twig';

        return $this->getQueryTemplate('archive', $templates);
    }

    /**
     * Retrieve path of post type archive template in current or parent template.
     *
     * @see getArchiveTemplate()
     * @return string Full path to archive template file.
     * @since 1.0.0
     */
    public function getPostTypeArchiveTemplate()
    {
        $postType = get_query_var('post_type');
        if (is_array($postType)) {
            $postType = reset($postType);
        }

        $obj = get_post_type_object($postType);
        if (!($obj instanceof \WP_Post_Type) || !$obj->has_archive) {
            return '';
        }

        return $this->getArchiveTemplate();
    }

    /**
     * Retrieve path of author template in current or parent template.
     *
     * @see getQueryTemplate()
     * @return string Full path to author template file.
     * @since 1.0.0
     */
    public function getAuthorTemplate()
    {
        $author    = get_queried_object();
        $templates = [];

        if ($author instanceof \WP_User) {
            $templates[] = "author-{$author->user_nicename}.twig";
            $templates[] = "author-{$author->ID}.twig";
        }

        $templates[] = 'author.twig';

        return $this->getQueryTemplate('author', $templates);
    }

    /**
     * Retrieve path of category template in current or parent template.
     *
     * Works by first retrieving the current slug, for example 'category-default.twig',
     * and then trying category ID, for example 'category-1.twig', and will finally fall
     * back to category.twig template, if those files don't exist.
     *
     * @see getQueryTemplate()
     * @return string Full path to category template file.
     * @since 1.0.0
     */
    public function getCategoryTemplate()
    {
        $category  = get_queried_object();
        $templates = [];

        if (!empty($category->slug)) {
            $slugDecoded = urldecode($category->slug);
            if ($slugDecoded !== $category->slug) {
                $templates[] = "category-{$slugDecoded}.twig";
            }

            $templates[] = "category-{$category->slug}.twig";
            $templates[] = "category-{$category->term_id}.twig";
        }

        $templates[] = 'category.twig';

        return $this->getQueryTemplate('category', $templates);
    }

    /**
     * Retrieve path of tag template in current or parent template.
     *
     * Works by first retrieving the current tag name, for example 'tag-wordpress.twig',
     * and then trying tag ID, for example 'tag-1.twig', and will finally fall back to
     * tag.twig template, if those files don't exist.
     *
     * @see getQueryTemplate()
     * @return string Full path to tag template file.
     * @since 1.0.0
     */
    public function getTagTemplate()
    {
        $tag       = get_queried_object();
        $templates = [];

        if (!empty($tag->slug)) {
            $slugDecoded = urldecode($tag->slug);
            if ($slugDecoded !== $tag->slug) {
                $templates[] = "tag-{$slugDecoded}.twig";
            }

            $templates[] = "tag-{$tag->slug}.twig";
            $templates[] = "tag-{$tag->term_id}.twig";
        }

        $templates[] = 'tag.twig';

        return $this->getQueryTemplate('tag', $templates);
    }

    /**
     * Retrieve path of taxonomy template in current or parent template.
     *
     * Retrieves the taxonomy and term, if term is available. The template is
     * prepended with 'taxonomy-' and followed by both the taxonomy string and
     * the taxonomy string followed by a dash and then followed by the term.
     *
     * The taxonomy and term template is checked and used first, if it exists.
     * Second, just the taxonomy template is checked, and then finally, taxonomy.twig
     * template is used. If none of the files exist, then it will fall back on to
     * index.twig.
     *
     * @see getQueryTemplate()
     * @return string Full path to taxonomy template file.
     * @since 1.0.0
     */
    public function getTaxonomyTemplate()
    {
        $term      = get_queried_object();
        $templates = [];

        if (!empty($term->slug)) {
            $taxonomy = $term->taxonomy;

            $slugDecoded = urldecode($term->slug);
            if ($slugDecoded !== $term->slug) {
                $templates[] = "taxonomy-{$taxonomy}-{$slugDecoded}.twig";
            }

            $templates[] = "taxonomy-{$taxonomy}-{$term->slug}.twig";
            $templates[] = "taxonomy-{$taxonomy}.twig";
        }

        $templates[] = 'taxonomy.twig';

        return $this->getQueryTemplate('taxonomy', $templates);
    }

    /**
     * Retrieve path of date template in current or parent template.
     *
     * @see getQueryTemplate()
     * @return string Full path to date template file.
     * @since 1.0.0
     */
    public function getDateTemplate()
    {
        return $this->getQueryTemplate('date');
    }

    /**
     * Retrieve path of home template in current or parent template.
     *
     * This is the template used for the page containing the blog posts.
     * Attempts to locate 'home.twig' first before falling back to 'index.twig'.
     *
     * @see getQueryTemplate()
     * @return string Full path to home template file.
     * @since 1.0.0
     */
    public function getHomeTemplate()
    {
        return $this->getQueryTemplate('home', ['home.twig', 'index.twig']);
    }

    /**
     * Retrieve path of front-page template in current or parent template.
     *
     * @see getQueryTemplate()
     * @return string Full path to front page template file.
     * @since 1.0.0
     */
    public function getFrontPageTemplate()
    {
        return $this->getQueryTemplate('front_page', ['front-page.twig']);
    }

    /**
     * Retrieve path of Privacy Policy page template in current or parent template.
     *
     * The template hierarchy and template path are filterable via the {@see '$type_template_hierarchy'}
     * and {@see '$type_template'} dynamic hooks, where `$type` is 'privacypolicy'.
     *
     * @see get_query_template()
     * @return string Full path to privacy policy template file.
     * @since 1.0.0
     */
    public function getPrivacyPolicyTemplate()
    {
        return $this->getQueryTemplate('privacypolicy', ['privacy-policy.twig']);
    }

    /**
     * Retrieve path of page template in current or parent template.
     *
     * Will first look for the specifically assigned page template.
     * Then will search for 'page-{slug}.twig', followed by 'page-{id}.twig',
     * and finally 'page.twig'.
     *
     * @see getQueryTemplate()
     * @return string Full path to page template file.
     * @since 1.0.0
     */
    public function getPageTemplate()
    {
        $id       = get_queried_object_id();
        $template = get_page_template_slug();
        $pagename = get_query_var('pagename');

        if (!$pagename && $id) {

            // If a static page is set as the front page, $pagename will not be set. Retrieve it from the queried object
            $post = get_queried_object();
            if ($post) {
                $pagename = $post->post_name;
            }
        }

        $templates = [];

        if ($template && 0 === validate_file($template)) {
            $templates[] = $template;
        }

        if ($pagename) {
            $pagenameDecoded = urldecode($pagename);
            if ($pagenameDecoded !== $pagename) {
                $templates[] = "page-{$pagenameDecoded}.twig";
            }

            $templates[] = "page-{$pagename}.twig";
        }

        if ($id) {
            $templates[] = "page-{$id}.twig";
        }

        $templates[] = 'page.twig';

        return $this->getQueryTemplate('page', $templates);
    }

    /**
     * Retrieve path of search template in current or parent template.
     *
     * @see getQueryTemplate()
     * @return string Full path to search template file.
     * @since 1.0.0
     */
    public function getSearchTemplate()
    {
        return $this->getQueryTemplate('search');
    }

    /**
     * Retrieve path of single template in current or parent template.
     *
     * @see getQueryTemplate()
     * @return string Full path to single template file.
     * @since 1.0.0
     */
    public function getSingleTemplate()
    {
        $object    = get_queried_object();
        $templates = [];

        if (!empty($object->post_type)) {
            $template = get_page_template_slug($object);
            if ($template && 0 === validate_file($template)) {
                $templates[] = $template;
            }

            $nameDecoded = urldecode($object->post_name);
            if ($nameDecoded !== $object->post_name) {
                $templates[] = "single-{$object->post_type}-{$nameDecoded}.twig";
            }

            $templates[] = "single-{$object->post_type}-{$object->post_name}.twig";
            $templates[] = "single-{$object->post_type}.twig";
        }

        $templates[] = 'single.twig';

        return $this->getQueryTemplate('single', $templates);
    }

    /**
     * Retrieves an embed template path in the current or parent template.
     *
     * @see getQueryTemplate()
     * @return string Full path to embed template file.
     * @since 1.0.0
     */
    public function getEmbedTemplate()
    {
        $object    = get_queried_object();
        $templates = [];

        if (!empty($object->post_type)) {
            $postFormat = get_post_format($object);

            if ($postFormat) {
                $templates[] = "embed-{$object->post_type}-{$postFormat}.twig";
            }

            $templates[] = "embed-{$object->post_type}.twig";
        }

        $templates[] = 'embed.twig';

        return $this->getQueryTemplate('embed', $templates);
    }

    /**
     * Retrieves the path of the singular template in current or parent template.
     *
     * @see getQueryTemplate()
     * @return string Full path to singular template file
     * @since 1.0.0
     */
    public function getSingularTemplate()
    {
        return $this->getQueryTemplate('singular');
    }

    /**
     * Retrieve path of attachment template in current or parent template.
     *
     * The attachment path first checks if the first part of the mime type exists.
     * The second check is for the second part of the mime type. The last check is
     * for both types separated by an underscore. If neither are found then the file
     * 'attachment.twig' is checked and returned.
     *
     * Some examples for the 'text/plain' mime type are 'text.twig', 'plain.twig', and
     * finally 'text-plain.twig'.
     *
     * @see getQueryTemplate()
     * @global array $posts
     * @return string Full path to attachment template file.
     * @since 1.0.0
     */
    public function getAttachmentTemplate()
    {
        $attachment = get_queried_object();
        $templates  = [];

        if ($attachment) {
            if (false !== strpos($attachment->post_mime_type, '/')) {
                list($type, $subtype) = explode('/', $attachment->post_mime_type);
            } else {
                list($type, $subtype) = [$attachment->post_mime_type, ''];
            }

            if (!empty($subtype)) {
                $templates[] = "{$type}-{$subtype}.twig";
                $templates[] = "{$subtype}.twig";
            }

            $templates[] = "{$type}.twig";
        }

        $templates[] = 'attachment.twig';

        return $this->getQueryTemplate('attachment', $templates);
    }

    /**
     * Retrieve the name of the highest priority template file that exists.
     *
     * @param string|array $templateNames Template file(s) to search for, in order.
     * @return string The template filename if one is located.
     * @since 1.0.0
     */
    public function locateTemplate(array $templateNames)
    {
        $located = '';
        foreach ((array) $templateNames as $templateName) {
            if (!$templateName) {
                continue;
            }

            if (file_exists($this->location . '/' . $templateName)) {
                $located = $templateName;
                break;
            }
        }

        return $located;
    }
}
