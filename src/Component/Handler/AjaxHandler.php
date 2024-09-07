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
 * @since   1.3.0
 */
class AjaxHandler
{
    protected readonly string $requestType;
    protected readonly bool $inputJsonType;
    protected array $inputJsonData = [];
    protected array $data          = [];

    /**
     * Constructor
     *
     * @param  string $action           Ajax action
     * @param  string $userCapability   User capability
     * @param  bool   $inputJsonType    Return result in JSON format
     * @param  string $requestType      Request type : post/get
     * @throws RuntimeException
     * @since 1.1.0
     */
    public function __construct(string $action = '', string $userCapability = '', bool $inputJsonType = true, string $requestType = 'post')
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
        $this->requestType   = $requestType;

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
     * @param string $capability  Role or capability
     * @param mixed  $args        (Optional) further parameters, typically starting with an object ID
     * @return bool               Current user has capability
     * @since 1.3.0
     */
    public function checkUser(string $capability, mixed $args = null): bool
    {
        return current_user_can($capability, $args);
    }

    /**
     * Get request data
     *
     * @param string $param         Param name
     * @param mixed  $default       Default value
     * @param string $requestType   Request type
     * @return mixed                Request data
     * @since 1.3.0
     */
    public function get(string $param, mixed $default = '', string $requestType = ''): mixed
    {
        if ($this->inputJsonType === true) {
            return $this->inputJsonData[$param] ?? $default;
        } else {
            if (!$requestType) {
                $requestType = $this->requestType;
            }

            return match ($requestType) {
                'post'  => Kernel::rPost($param, $default),
                'get'   => Kernel::rGet($param, $default),
                default => Kernel::rGet($param, $default),
            };
        }
    }

    /**
     * Add item
     *
     * @param string|array $name    Item name
     * @param mixed        $value   Item value
     * @return AjaxHandler
     * @since 1.3.0
     */
    public function add(string|array $name, mixed $value = ''): AjaxHandler
    {
        if (is_string($name)) {
            $this->data[$name] = $value;
        } elseif (is_array($name)) {
            $this->data = $name;
        }

        return $this;
    }

    /**
     * Check if element exists
     *
     * @param string $name   Item name
     * @return bool          Action result
     * @since 1.3.0
     */
    public function has(string $name): bool
    {
        return !empty($this->get($name));
    }

    /**
     * Remove item
     *
     * @param string $name   Item name
     * @return AjaxHandler
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
     * @param mixed        $value   Single response data
     * @return never
     * @since 1.3.0
     */
    public function send(string|array $data = '', mixed $value = false): never
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

        exit;
    }

    /**
     * Kill WordPress execution and conditionally display HTML message with error message
     *
     * @param string $message   Error message or a complete WP_Error object
     * @param string $title     Error title, If you use a WP_Error object, the title will be by default the one you added in $data['title'] (ignored when DOING_AJAX is true)
     * @param array  $args      Optional arguments to control behavior (ignored when DOING_AJAX is true)
     * @param bool   $force
     * @return never
     * @since 1.3.0
     */
    public function off(string $message = '', string $title = '', array $args = [], bool $force = false): never
    {
        if ($this->inputJsonType === true && $force === false) {
            $this->send([]);
        } else {
            wp_die($message, $title, $args);
        }

        exit;
    }

    /**
     * Generates and returns a nonce.
     *
     * @param string $action   The nonce is generated based on the current time, the $action argument, and the current user ID
     * @return string|null     Return nonce
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
     * @param string $nonce    Nonce to verify
     * @param string $action   Action name. Should give the context to what is taking place and be the same when the nonce was created
     * @return bool            Boolean false if the nonce is invalid. Otherwise, returns an integer with the value : 1 /2
     * @since 1.1.0
     */
    public static function checkNonce(string $nonce, string $action): bool
    {
        if ($nonce && $action) {
            $action = Kernel::getGlobal('core/slug') . '_' . $action . '_nonce';
            return (bool) wp_verify_nonce($nonce, $action);
        }

        return false;
    }

    /**
     * The standard function verifies the AJAX request, to prevent any processing of requests which are passed in by third-party sites or systems.
     *
     * @param string $action   Action nonce
     * @param bool   $die      (optional) whether to die if the nonce is invalid
     * @return bool            If parameter $die is set to false, this function will return a boolean of true if the check passes or false if the check fails
     * @since 1.1.0
     */
    public static function checkAjaxReferer(string $action, bool $die = true): bool
    {
        if ($action && is_string($action)) {
            $action = Kernel::getGlobal('core/slug') . '_' . $action . '_nonce';
            return (bool) check_ajax_referer($action, false, $die);
        }

        return false;
    }

    /**
     * Get AJAX URL
     *
     * @param string $action   Ajax action
     * @param array  $args     Additional URL arguments
     * @return string          Ajax URL
     * @since 1.2.0
     */
    public static function getAjaxURL(string $action, array $args = []): string
    {
        $args['action'] = $action;

        return esc_url(add_query_arg($args, admin_url('admin-ajax.php')), '', '');
    }
}
