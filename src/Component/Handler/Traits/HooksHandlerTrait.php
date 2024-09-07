<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Handler\Traits;

use InvalidArgumentException;

/**
 * Trait : Component/Handler/Traits : Hooks handler
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
trait HooksHandlerTrait
{
    /**
     * Add action
     *
     * @param  string          $hook           The name of the action to which $method is hooked
     * @param  callable|string $method         The name of the function you wish to be hooked
     * @param  int             $priority       Used to specify the order in which the functions associated with a particular action are executed
     * @param  int             $acceptedArgs   The number of arguments the hooked function accepts
     * @throws InvalidArgumentException
     * @return void
     * @since 1.3.0
     */
    protected function addAction(string $hook, callable|string $method, int $priority = 10, int $acceptedArgs = 1): void
    {
        if (!$hook) {
            throw new InvalidArgumentException('ZE0081');
        }

        if (!$method) {
            throw new InvalidArgumentException('ZE0082');
        }

        if (is_callable($method)) {
            add_action($hook, $method, $priority, $acceptedArgs);
        } elseif (is_string($method)) {
            add_action($hook, [$this, $method], $priority, $acceptedArgs);
        }
    }

    /**
     * Remove action : This function removes a function attached to a specified action hook
     *
     * @param  string          $hook       The name of the action to which $method is hooked
     * @param  callable|string $method     The name of the function which should be removed
     * @param  int             $priority   Used to specify the order in which the functions associated with a particular action are executed
     * @throws InvalidArgumentException
     * @return void
     * @since 1.3.0
     */
    protected function remAction(string $hook, callable|string $method, int $priority = 10): void
    {
        if (!$hook) {
            throw new InvalidArgumentException('ZE0084');
        }

        if (!$method) {
            throw new InvalidArgumentException('ZE0085');
        }

        if (is_callable($method)) {
            remove_action($hook, $method, $priority);
        } elseif (is_string($method)) {
            remove_action($hook, [$this, $method], $priority);
        }
    }

    /**
     * Add AJAX
     *
     * @param  string          $hook     The name of the action to which $method is hooked
     * @param  callable|string $method   The name of the function you wish to be hooked
     * @param  bool            $nopriv   For non unauthenticated users
     * @throws InvalidArgumentException
     * @return void
     * @since 1.3.0
     */
    protected function addAjax(string $hook, callable|string $method, bool $nopriv = false): void
    {
        if (!$hook) {
            throw new InvalidArgumentException('ZE0087');
        }

        if (!$method) {
            throw new InvalidArgumentException('ZE0088');
        }

        if ($nopriv === true) {
            $this->addAction("wp_ajax_nopriv_{$hook}", $method);
        } else {
            $this->addAction("wp_ajax_{$hook}", $method);
        }
    }

    /**
     * Add filter
     *
     * @param  string          $tag            The name of the existing Filter to Hook the $method argument to
     * @param  callable|string $method         The name of the function to be called when the custom Filter is applied
     * @param  int             $priority       Used to specify the order in which the functions associated with a particular action are executed
     * @param  int             $acceptedArgs   The number of arguments the function(s) accept(s)
     * @throws InvalidArgumentException
     * @return void
     * @since 1.3.0
     */
    protected function addFilter(string $tag, callable|string $method, int $priority = 10, int $acceptedArgs = 1): void
    {
        if (!$tag) {
            throw new InvalidArgumentException('ZE0089');
        }

        if (!$method) {
            throw new InvalidArgumentException('ZE0090');
        }

        if (is_callable($method)) {
            add_filter($tag, $method, $priority, $acceptedArgs);
        } elseif (is_string($method)) {
            add_filter($tag, [$this, $method], $priority, $acceptedArgs);
        }
    }

    /**
     * Add filter
     *
     * @param  string          $tag        The action hook to which the function to be removed is hooked
     * @param  callable|string $method     The callback for the function which should be removed
     * @param  int             $priority   The priority of the function (as defined when the function was originally hooked)
     * @throws InvalidArgumentException
     * @return void
     * @since 1.3.0
     */
    protected function remFilter(string $tag, callable|string $method, int $priority = 10): void
    {
        if (!$tag) {
            throw new InvalidArgumentException('ZE0092');
        }

        if (!$method) {
            throw new InvalidArgumentException('ZE0093');
        }

        if (is_callable($method)) {
            remove_filter($tag, $method, $priority);
        } elseif (is_string($method)) {
            remove_filter($tag, [$this, $method], $priority);
        }
    }

    /**
     * Add shortcode
     *
     * @param  string          $tag      ShortCode tag
     * @param  callable|string $method   Callback
     * @throws InvalidArgumentException
     * @return void
     * @since 1.3.0
     */
    protected function addShortCode(string $tag, callable|string $method): void
    {
        if (!$tag) {
            throw new InvalidArgumentException('ZE0095');
        }

        if (!$method) {
            throw new InvalidArgumentException('ZE0096');
        }

        if (is_callable($method)) {
            add_shortcode($tag, $method);
        } elseif (is_string($method)) {
            add_shortcode($tag, [$this, $method]);
        }
    }

    /**
     * Do shortcode
     *
     * @param  string $tag      Shortcode tag
     * @param  bool   $return   Return or echo
     * @throws InvalidArgumentException
     * @return mixed
     * @since 1.3.0
     */
    protected function doShortCode(string $tag, bool $return = false): mixed
    {
        if (!$tag) {
            throw new InvalidArgumentException('ZE0098');
        }

        if ($return) {
            return do_shortcode($tag);
        } else {
            echo do_shortcode($tag);
            return null;
        }
    }

    /**
     * Remove shortcode
     *
     * @param  string $tag   Shortcode tag
     * @throws InvalidArgumentException
     * @return void
     * @since 1.1.0
     */
    protected function remShortCode(string $tag): void
    {
        if (!$tag) {
            throw new InvalidArgumentException('ZE0099');
        }

        remove_shortcode($tag);
    }
}
