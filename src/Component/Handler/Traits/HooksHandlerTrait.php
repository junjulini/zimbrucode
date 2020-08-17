<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Handler\Traits;

/**
 * Trait : Hooks handler trait
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
trait HooksHandlerTrait
{
    /**
     * Add action
     * 
     * @param string  $hook           The name of the action to which $method is hooked
     * @param mix     $method         The name of the function you wish to be hooked
     * @param integer $priority       Used to specify the order in which the functions associated with a particular action are executed
     * @param integer $acceptedArgs   The number of arguments the hooked function accepts
     * @return void                   This function does not return a value
     * @since 1.0.0
     */
    protected function addAction($hook, $method, $priority = 10, $acceptedArgs = 1)
    {
        if (!$hook) {
            throw new \InvalidArgumentException(esc_html__('Action is empty.', 'zc'));
        }

        if (!is_string($hook)) {
            throw new \InvalidArgumentException(esc_html__('Action not string.', 'zc'));
        }

        if (!$method) {
            throw new \InvalidArgumentException(esc_html__('Method is empty.', 'zc'));
        }

        if (is_callable($method)) {
            add_action($hook, $method, $priority, $acceptedArgs);
        } elseif (is_string($method)) {
            add_action($hook, [$this, $method], $priority, $acceptedArgs);
        } else {
            throw new \InvalidArgumentException(esc_html__('Method not string or callable.', 'zc'));
        }
    }

    /**
     * Remove action : This function removes a function attached to a specified action hook
     * 
     * @param string  $hook           The name of the action to which $method is hooked
     * @param mix     $method         The name of the function which should be removed
     * @param integer $priority       Used to specify the order in which the functions associated with a particular action are executed
     * @return void                   This function does not return a value
     * @since 1.0.0
     */
    protected function remAction($hook, $method, $priority = 10)
    {
        if (!$hook) {
            throw new \InvalidArgumentException(esc_html__('Action is empty.', 'zc'));
        }

        if (!is_string($hook)) {
            throw new \InvalidArgumentException(esc_html__('Action not string.', 'zc'));
        }

        if (!$method) {
            throw new \InvalidArgumentException(esc_html__('Method is empty.', 'zc'));
        }

        if (is_callable($method)) {
            remove_action($hook, $method, $priority);
        } elseif (is_string($method)) {
            remove_action($hook, [$this, $method], $priority);
        } else {
            throw new \InvalidArgumentException(esc_html__('Method not string or callable.', 'zc'));
        }
    }

    /**
     * Add AJAX
     * 
     * @param string  $hook     The name of the action to which $method is hooked
     * @param mix     $method   The name of the function you wish to be hooked
     * @param boolean $nopriv   For non unauthenticated users
     * @return void             This function does not return a value
     * @since 1.0.0
     */
    protected function addAjax($hook, $method, $nopriv = false)
    {
        if (!$hook) {
            throw new \InvalidArgumentException(esc_html__('Action is empty.', 'zc'));
        }

        if (!is_string($hook)) {
            throw new \InvalidArgumentException(esc_html__('Action not string.', 'zc'));
        }

        if (!$method) {
            throw new \InvalidArgumentException(esc_html__('Method is empty.', 'zc'));
        }

        if ($nopriv) {
            $this->addAction("wp_ajax_nopriv_{$hook}", $method);
        } else {
            $this->addAction("wp_ajax_{$hook}", $method);
        }
    }

    /**
     * Add filter
     * 
     * @param string  $tag            The name of the existing Filter to Hook the $method argument to
     * @param mix     $method         The name of the function to be called when the custom Filter is applied
     * @param integer $priority       Used to specify the order in which the functions associated with a particular action are executed
     * @param integer $acceptedArgs   The number of arguments the function(s) accept(s)
     * @return void                   This function does not return a value
     * @since 1.0.0
     */
    protected function addFilter($tag, $method, $priority = 10, $acceptedArgs = 1)
    {
        if (!$tag) {
            throw new \InvalidArgumentException(esc_html__('Filter is empty.', 'zc'));
        }

        if (!is_string($tag)) {
            throw new \InvalidArgumentException(esc_html__('Filter not string.', 'zc'));
        }

        if (!$method) {
            throw new \InvalidArgumentException(esc_html__('Method is empty.', 'zc'));
        }

        if (is_callable($method)) {
            add_action($tag, $method, $priority, $acceptedArgs);
        } elseif (is_string($method)) {
            add_action($tag, [$this, $method], $priority, $acceptedArgs);
        } else {
            throw new \InvalidArgumentException(esc_html__('Method not string or callable.', 'zc'));
        }
    }

    /**
     * Add filter
     * 
     * @param string  $tag        The action hook to which the function to be removed is hooked
     * @param mix     $method     The callback for the function which should be removed
     * @param integer $priority   The priority of the function (as defined when the function was originally hooked)
     * @return void               This function does not return a value
     * @since 1.0.0
     */
    protected function remFilter($tag, $method, $priority = 10, $acceptedArgs = 1)
    {
        if (!$tag) {
            throw new \InvalidArgumentException(esc_html__('Filter is empty.', 'zc'));
        }

        if (!is_string($tag)) {
            throw new \InvalidArgumentException(esc_html__('Filter not string.', 'zc'));
        }

        if (!$method) {
            throw new \InvalidArgumentException(esc_html__('Method is empty.', 'zc'));
        }

        if (is_callable($method)) {
            remove_filter($tag, $method, $priority);
        } elseif (is_string($method)) {
            remove_filter($tag, [$this, $method], $priority);
        } else {
            throw new \InvalidArgumentException(esc_html__('Method not string or callable.', 'zc'));
        }
    }

    /**
     * Add shortcode
     * 
     * @param string $tag      Shortcode tag to be searched in post content
     * @param mix    $method   Hook to run when shortcode is found
     * @return void            This function does not return a value
     * @since 1.0.0
     */
    protected function addShortCode($tag, $method)
    {
        if (!$tag) {
            throw new \InvalidArgumentException(esc_html__('Tag is empty.', 'zc'));
        }

        if (!is_string($tag)) {
            throw new \InvalidArgumentException(esc_html__('Filter not string.', 'zc'));
        }

        if (!$method) {
            throw new \InvalidArgumentException(esc_html__('Method is empty.', 'zc'));
        }

        if (is_callable($method)) {
            add_shortcode($tag, $method);
        } elseif (is_string($method)) {
            add_shortcode($tag, [$this, $method]);
        } else {
            throw new \InvalidArgumentException(esc_html__('Method not string or callable.', 'zc'));
        }
    }

    /**
     * Do shortcode
     * 
     * @param  string  $tag      Content to search for shortcodes
     * @param  boolean $return   Return or echo
     * @return boolean / string
     * @since 1.0.0
     */
    protected function doShortCode($tag, $return = false)
    {
        if (!$tag) {
            throw new \InvalidArgumentException(esc_html__('Tag is empty.', 'zc'));
        }

        if (!is_string($tag)) {
            throw new \InvalidArgumentException(esc_html__('Filter not string.', 'zc'));
        }

        if ($return) {
            return do_shortcode($tag);
        } else {
            echo do_shortcode($tag);
        }
    }

    /**
     * Remove shortcode
     * 
     * @param  string $tag   Shortcode tag to remove hook
     * @return void          This function does not return a value
     * @since 1.0.0
     */
    protected function remShortCode($tag)
    {
        if (!$tag) {
            throw new \InvalidArgumentException(esc_html__('Tag is empty.', 'zc'));
        }

        if (!is_string($tag)) {
            throw new \InvalidArgumentException(esc_html__('Filter not string.', 'zc'));
        }

        remove_shortcode($tag);
    }
}
