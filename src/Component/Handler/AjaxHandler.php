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

use RuntimeException;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Component/Handler : Ajax
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class AjaxHandler
{
    protected $inputJsonType = true;
    protected $inputJsonData = [];
    protected $data          = [];

    /**
     * Constructor
     *
     * @param string  $action           Ajax action
     * @param string  $userCapability   User capability
     * @param boolean $inputJsonType    Return result in JSON format
     * @since 1.0.0
     */
    public function __construct(string $action = '', string $userCapability = '', bool $inputJsonType = true)
    {
        if ($action) {
            self::checkAjaxReferer($action);

            if ($userCapability) {
                if (!$this->checkUser($userCapability)) {
                    throw new RuntimeException('ZE0074');
                }
            }
        }

        $this->inputJsonType = $inputJsonType;

        if ($this->inputJsonType === true) {
            if (($_SERVER['CONTENT_TYPE'] ?? '') == 'application/json') {
                $this->inputJsonData = (array) Tools::jsonDecode((string) file_get_contents('php://input'), 'ZE0146');
            } else {
                throw new RuntimeException('ZE0075');
            }
        }
    }

    /**
     * Get input json data
     *
     * @return array   Input json data
     * @since 1.0.0
     */
    public function getInputJsonData(): array
    {
        return $this->inputJsonData;
    }

    /**
     * Get ajax data
     *
     * @return array   Ajax data
     * @since 1.0.0
     */
    public function getData(): array
    {
        return $this->data;
    }

    /**
     * Whether current user has a specific capability
     *
     * @param  string $capability   Role or capability
     * @param  mix    $args         (Optional) further parameters, typically starting with an object ID
     * @return boolean              Current user has capability
     * @since 1.0.0
     */
    public function checkUser(string $capability, $args = null): bool
    {
        return current_user_can($capability, $args);
    }

    /**
     * Get request data
     *
     * @param  string $param     Param name
     * @param  mix    $default   Default value
     * @param  string $type      Request type
     * @return mix               Request data
     * @since 1.0.0
     */
    public function get(string $param, $default = '', string $type = 'get')
    {
        if ($this->inputJsonType === true) {
            return $this->inputJsonData[$param] ?? $default;
        } else {
            if ($type === 'get') {
                return Kernel::rGet($param, $default);
            } elseif ($type === 'post') {
                return Kernel::rPost($param, $default);
            } else {
                return Kernel::rGet($param, $default);
            }
        }
    }

    /**
     * Add item
     *
     * @param string|array $name   Item name
     * @param mix $value           Item value
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
     * Check if element exists
     *
     * @param string $name   Item name
     * @return boolean       Action result
     * @since 1.1.0
     */
    public function has(string $name): bool
    {
        return ($this->get($name));
    }

    /**
     * Remove item
     *
     * @param string $name   Item name
     * @since 1.0.0
     */
    public function remove(string $name = ''): AjaxHandler
    {
        if ($name) {
            if (isset($this->data[$name])) {
                unset($this->data[$name]);
            }
        } elseif (!$name) {
            unset($this->data);
        }

        return $this;
    }

    /**
     * Remove all items
     *
     * @return void
     * @since 1.1.0
     */
    public function flush(): void
    {
        $this->data = [];
    }

    /**
     * Dump data
     *
     * @return void
     * @since 1.1.0
     */
    public function dump(): void
    {
        Tools::dump($this->data);
    }

    /**
     * Send response
     *
     * @param string|array $data    Response data
     * @param mix          $value   Single response data
     * @return void
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
     * @param string $nonce      Nonce to verify
     * @param string $action     Action name. Should give the context to what is taking place and be the same when the nonce was created
     * @return boolean/integer   Boolean false if the nonce is invalid. Otherwise, returns an integer with the value : 1 /2
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
     * @param  boolean $die      (optional) whether to die if the nonce is invalid
     * @return boolean           If parameter $die is set to false, this function will return a boolean of true if the check passes or false if the check fails
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
