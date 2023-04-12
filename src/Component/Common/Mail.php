<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Common;

/**
 * Class : Component/Common : Mail
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.2.0
 */
class Mail
{
    public string $to      = '';
    public string $subject = '';
    public string $body    = '';
    public string $from    = '';
    public string $email   = '';

    /**
     * Constructor
     *
     * @since 1.0.0
     */
    public function __construct()
    {
        $this->subject = sprintf(esc_html__('[%s] message from Administrator', 'zc'), get_bloginfo('name'));
        $this->email   = get_option('admin_email');
        $this->from    = esc_html__('Administrator', 'zc');
    }

    /**
     * Check for errors
     *
     * @return bool   Result of checking
     * @since 1.2.0
     */
    protected function error(): bool
    {
        $this->to    = filter_var($this->to, FILTER_SANITIZE_EMAIL);
        $this->email = filter_var($this->email, FILTER_SANITIZE_EMAIL);

        if (empty($this->to) || empty($this->subject) || empty($this->body) || empty($this->from) || empty($this->email)) {
            return true;
        }

        if (!filter_var($this->email, FILTER_VALIDATE_EMAIL)) {
            return true;
        }

        if (!filter_var($this->to, FILTER_VALIDATE_EMAIL)) {
            return true;
        }

        return false;
    }

    /**
     * Send mail
     *
     * @return bool   Action result
     * @since 1.2.0
     */
    public function send(): bool
    {
        if (!$this->error()) {
            $headers  = "From: {$this->from} <{$this->email}>\r\n";
            $headers .= "Reply-To: {$this->email}\r\n";

            if (wp_mail($this->to, $this->subject, $this->body, $headers)) {
                return true;
            }
        }

        return false;
    }
}
