<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Handler;

use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Ajax handler
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class AjaxHandler
{
    protected $data = [];

    public function __construct($action = false, $userCapability = false)
    {
        if ($action && is_string($action)) {
            self::checkAjaxReferer($action);

            if ($userCapability && is_string($userCapability)) {
                if (!$this->checkUser($userCapability)) {
                    $this->off(-1);
                }
            }
        }
    }

    /**
     * Get ajax data
     *
     * @return array  Ajax data
     * @since 1.0.0
     */
    public function getData()
    {
        return $this->data;
    }
    
    /**
     * Whether current user has a specific capability
     *
     * @param string $capability   Role or capability
     * @param int    $objectID     Recommended when checking meta capabilities such as the capabilities defined in the
     *                             `map_meta_cap` function i.e 'edit_post', 'edit_others_posts', 'read_post' etc.
     *                             If omitted you may receive an 'Undefined offset: 0' warning (this is because the 
     *                             `current_user_can` function eventually calls `map_meta_cap` which when checking 
     *                             against meta capabilities expects an array but is only supplied a single value)
     * @return boolean             Current user has capability
     * @since 1.0.0
     */
    public function checkUser($capability, $objectID = null)
    {
        return current_user_can($capability, $objectID);
    }

    /**
     * Post control
     * 
     * @param  string $param
     * @return string
     * @since 1.0.0
     */
    public function post($param, $default = '')
    {
        return Kernel::rPost($param, $default);
    }

    /**
     * Get control
     * 
     * @param  string $param
     * @return string
     * @since 1.0.0
     */
    public function get($param, $default = '')
    {
        return Kernel::rGet($param, $default);
    }

    /**
     * Add value
     *
     * @param mix $name
     * @param mix $value
     * @since 1.0.0
     */
    public function add($name, $value = '')
    {
        if ($name && is_string($name)) {
            $this->data[$name] = $value;
        } elseif ($name && is_array($name)) {
            $this->data = $name;
        }

        return $this;
    }

    /**
     * Remove value
     * 
     * @param mix $name
     * @since 1.0.0
     */
    public function remove($name = '')
    {
        if ($name && is_string($name)) {
            unset($this->data[$name]);
        } elseif (!$name) {
            unset($this->data);
        }

        return $this;
    }

    /**
     * Send response
     * 
     * @return boolean   None
     * @since 1.0.0
     */
    public function send()
    {
        if ($this->data) {
            wp_send_json($this->data);
        }
    }

    /**
     * Kill WordPress execution and conditionally display HTML message with error message
     *
     * @param string $message   Error message or a complete WP_Error object
     * @param string $title     Error title, If you use a WP_Error object, the title will be by default the one you added in $data['title'] (ignored when DOING_AJAX is true)
     * @param array  $args      Optional arguments to control behavior (ignored when DOING_AJAX is true)
     * @return void             This function does not return a value
     * @since 1.0.0
     */
    public function off($message = '', $title = '', $args = [])
    {
        wp_die($message, $title, $args);
    }

    /**
     * Generates and returns a nonce.
     * 
     * @param  string $action   The nonce is generated based on the current time, the $action argument, and the current user ID
     * @return string           Return nonce
     * @since 1.0.0
     */
    static public function getNonce($action)
    {
        if ($action && is_string($action)) {
            $action = Kernel::getGlobal('core/slug') . '_' . $action . '_nonce';
            return wp_create_nonce($action);
        }

        return false;
    }

    /**
     * Verify that a nonce is correct and unexpired with the respect to a specified action
     *
     * @param string $nonce      Nonce to verify
     * @param string $action     Action name. Should give the context to what is taking place and be the same when the nonce was created
     * @return boolean/integer   Boolean false if the nonce is invalid. Otherwise, returns an integer with the value : 1 /2
     * @since 1.0.0
     */
    static public function checkNonce($nonce, $action)
    {
        if ($nonce && is_string($nonce) && $action && is_string($action)) {
            $action = Kernel::getGlobal('core/slug') . '_' . $action . '_nonce';
            return wp_verify_nonce($nonce, $action);
        }

        return false;
    }

    /**
     * The standard function verifies the AJAX request, to prevent any processing of requests which are passed in by third-party sites or systems.
     * 
     * @param  string  $action   Action nonce
     * @param  boolean $die      (optional) whether to die if the nonce is invalid
     * @return boolean           If parameter $die is set to false, this function will return a boolean of true if the check passes or false if the check fails
     * @since 1.0.0
     */
    static public function checkAjaxReferer($action, $die = true)
    {
        if ($action && is_string($action)) {
            $action = Kernel::getGlobal('core/slug') . '_' . $action . '_nonce';
            return check_ajax_referer($action, false, $die);
        }

        return false;
    }
}
