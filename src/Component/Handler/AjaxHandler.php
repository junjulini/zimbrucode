<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Handler;

use Exception;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Ajax handler
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class AjaxHandler
{
    protected $inputJsonType = true;
    protected $inputJsonData = [];

    protected $data = [];

    public function __construct(string $action = '', string $userCapability = '', bool $inputJsonType = true)
    {
        if ($action) {
            self::checkAjaxReferer($action);

            if ($userCapability) {
                if (!$this->checkUser($userCapability)) {
                    $this->off(-1);
                }
            }
        }

        $this->inputJsonType = $inputJsonType;

        if ($this->inputJsonType === true) {
            if (($_SERVER['CONTENT_TYPE'] ?? '') == 'application/json') {
                $this->inputJsonData = (array) Tools::jsonDecode((string) file_get_contents('php://input'), 'E0001');
            } else {
                throw new Exception('Content type not : application/json');
            }
        }
    }

    public function getInputJsonData(): array
    {
        return $this->inputJsonData;
    }

    /**
     * Get ajax data
     *
     * @return array  Ajax data
     * @since 1.0.0
     */
    public function getData(): array
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
     * @return bool                Current user has capability
     * @since 1.0.0
     */
    public function checkUser(string $capability, int $objectID = null): bool
    {
        return current_user_can($capability, $objectID);
    }

    /**
     * Get control
     *
     * @param  string $param
     * @return mix
     * @since 1.0.0
     */
    public function get(string $param, $default = '')
    {
        if ($this->inputJsonType === true) {
            return $this->inputJsonData[$param] ?? $default;
        } else {
            return Kernel::request($param, $default);
        }
    }

    /**
     * Add value
     *
     * @param string|array $name
     * @param mix $value
     * @since 1.0.0
     */
    public function add($name, $value = ''): AjaxHandler
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
     * @param string $name
     * @since 1.0.0
     */
    public function remove(string $name = ''): AjaxHandler
    {
        if ($name) {
            unset($this->data[$name]);
        } elseif (!$name) {
            unset($this->data);
        }

        return $this;
    }

    /**
     * Send response
     *
     * @return void
     * @since 1.0.0
     */
    public function send($data = '', $value = false): void
    {
        if ($data) {
            if (is_string($data) && $value) {
                $this->data = [
                    $data => $value,
                ];
            } elseif (is_array($data)) {
                $this->data = $data;
            }
        }

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
    public function off(string $message = '', string $title = '', array $args = [], bool $force = false): void
    {
        if ($this->inputJsonType === true && $force === false) {
            $this->send([]);
        } else {
            wp_die($message, $title, $args);
        }
    }

    /**
     * Generates and returns a nonce.
     *
     * @param  string $action   The nonce is generated based on the current time, the $action argument, and the current user ID
     * @return string|null      Return nonce
     * @since 1.0.0
     */
    public static function getNonce(string $action): ?string
    {
        if ($action) {
            $action = Kernel::getGlobal('core/slug') . '_' . $action . '_nonce';
            return wp_create_nonce($action);
        }

        return null;
    }

    /**
     * Verify that a nonce is correct and unexpired with the respect to a specified action
     *
     * @param string $nonce     Nonce to verify
     * @param string $action    Action name. Should give the context to what is taking place and be the same when the nonce was created
     * @return bool/integer     Boolean false if the nonce is invalid. Otherwise, returns an integer with the value : 1 /2
     * @since 1.0.0
     */
    public static function checkNonce(string $nonce, string $action)
    {
        if ($nonce && $action) {
            $action = Kernel::getGlobal('core/slug') . '_' . $action . '_nonce';
            return wp_verify_nonce($nonce, $action);
        }
    }

    /**
     * The standard function verifies the AJAX request, to prevent any processing of requests which are passed in by third-party sites or systems.
     *
     * @param  string  $action   Action nonce
     * @param  bool    $die      (optional) whether to die if the nonce is invalid
     * @return bool              If parameter $die is set to false, this function will return a boolean of true if the check passes or false if the check fails
     * @since 1.0.0
     */
    public static function checkAjaxReferer(string $action, bool $die = true)
    {
        if ($action && is_string($action)) {
            $action = Kernel::getGlobal('core/slug') . '_' . $action . '_nonce';
            return check_ajax_referer($action, false, $die);
        }
    }
}
