<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Debug;

use DirectoryIterator;
use LogicException;
use RuntimeException;
use Throwable;
use Tracy\Helpers;
use Tracy\Logger;
use ZimbruCode\Component\Common\Mail;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Component/Debug : Tracy logger
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.2.0
 */
class TracyLogger extends Logger
{
    public bool $disableEDeprecated = false;

    /**
     * Logs message or exception to file and sends email notification.
     * @param  mixed  $message
     * @param  string  $level  one of constant ILogger::INFO, WARNING, ERROR (sends email), EXCEPTION (sends email), CRITICAL (sends email)
     * @return string|null logged error filename
     */
    public function log($message, $level = self::INFO)
    {
        if ($this->disableEDeprecated === true && is_string($message) && strpos($message, 'PHP Deprecated') !== false) {
            return;
        }

        if (!$this->directory) {
            throw new LogicException('Logging directory is not specified.');
        } elseif (!is_dir($this->directory)) {
            throw new RuntimeException("Logging directory '$this->directory' is not found or is not directory.");
        }

        $exceptionFile = $message instanceof Throwable
            ? $this->getExceptionFile($message, $level)
            : null;
        $line = self::formatLogLine($message, $exceptionFile);
        $file = $this->directory . '/' . strtolower($level ?: self::INFO) . '.log';

        if (!@file_put_contents($file, $line . PHP_EOL, FILE_APPEND | LOCK_EX)) { // @ is escalated to exception
            throw new RuntimeException("Unable to write to log file '$file'. Is directory writable?");
        }

        if ($exceptionFile) {
            $this->logException($message, $exceptionFile);
        }

        if (in_array($level, [self::ERROR, self::EXCEPTION, self::CRITICAL], true)) {
            $this->sendEmail($message);
        }

        return $exceptionFile;
    }

    /**
     * @param  mixed  $message
     */
    public static function formatLogLine($message, ?string $exceptionFile = null): string
    {
        return implode(' ', [
            wp_date('[Y-m-d H-i-s]'),
            preg_replace('#\s*\r?\n\s*#', ' ', static::formatMessage($message)),
            ' @  ' . Helpers::getSource(),
            $exceptionFile ? ' @@  ' . Kernel::service('app')->getLogURL(basename($exceptionFile)) : null,
        ]);
    }

    public function getExceptionFile(Throwable $exception, string $level = self::EXCEPTION): string
    {
        foreach (Helpers::getExceptionChain($exception) as $exception) {
            $data[] = [
                get_class($exception), $exception->getMessage(), $exception->getCode(), $exception->getFile(), $exception->getLine(),
                array_map(function (array $item): array {
                    unset($item['args']);
                    return $item;
                }, $exception->getTrace()),
            ];
        }

        $hash = substr(md5(serialize($data)), 0, 10);
        $dir  = strtr($this->directory . '/', '\\/', DIRECTORY_SEPARATOR . DIRECTORY_SEPARATOR);

        foreach (new DirectoryIterator($this->directory) as $file) {
            if (strpos($file->getBasename(), $hash)) {
                return $dir . $file;
            }
        }

        return $dir . $level . '--' . wp_date('Y-m-d--H-i') . "--$hash.html";
    }

    /**
     * Default mailer.
     * @param  mixed  $message
     * @internal
     */
    public function defaultMailer($message, string $email): void
    {
        $mail = new Mail;

        $mail->from    = get_bloginfo('name');
        $mail->to      = $email;
        $mail->subject = esc_html__('WordPress : There was an error on the server', 'zc');
        $mail->body    = static::formatMessage($message) . "\n\nSource: " . Helpers::getSource();

        $mail->send();
    }
}
