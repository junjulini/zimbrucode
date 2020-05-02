<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Debug;

use Tracy\Debugger;
use Tracy\Helpers;

/**
 * Class : Tracy Debugger
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class TracyDebugger extends Debugger
{
    /** @var bool */
    private static $enabled = false;

    /** @var string|null reserved memory; also prevents double rendering */
    private static $reserved;

    /** @var int initial output buffer level */
    private static $obLevel;

    /********************* misc ****************d*g**/

    /** @var array|null */
    private static $cpuUsage;

    /********************* services ****************d*g**/

    /** @var BlueScreen */
    private static $blueScreen;

    /** @var Bar */
    private static $bar;

    /** @var ILogger */
    private static $logger;

    /** @var ILogger */
    private static $fireLogger;

    /**
     * Enables displaying or logging errors and exceptions.
     * @param  mixed   $mode  production, development mode, autodetection or IP address(es) whitelist.
     * @param  string  $logDirectory  error log directory
     * @param  string  $email  administrator email; enables email sending in production mode
     * @return void
     */
    public static function enable($mode = null, $logDirectory = null, $email = null)
    {
        if ($mode !== null || self::$productionMode === null) {
            self::$productionMode = is_bool($mode) ? $mode : !self::detectDebugMode($mode);
        }

        self::$maxLen   = &self::$maxLength;
        self::$reserved = str_repeat('t', 30000);
        self::$time     = isset($_SERVER['REQUEST_TIME_FLOAT']) ? $_SERVER['REQUEST_TIME_FLOAT'] : microtime(true);
        self::$obLevel  = ob_get_level();
        self::$cpuUsage = !self::$productionMode && function_exists('getrusage') ? getrusage() : null;

        // logging configuration
        if ($email !== null) {
            self::$email = $email;
        }
        if ($logDirectory !== null) {
            self::$logDirectory = $logDirectory;
        }
        if (self::$logDirectory) {
            if (!preg_match('#([a-z]+:)?[/\\\\]#Ai', self::$logDirectory)) {
                self::exceptionHandler(new \RuntimeException('Logging directory must be absolute path.'));
                self::$logDirectory = null;
            } elseif (!is_dir(self::$logDirectory)) {
                self::exceptionHandler(new \RuntimeException("Logging directory '" . self::$logDirectory . "' is not found."));
                self::$logDirectory = null;
            }
        }

        // php configuration
        if (function_exists('ini_set')) {
            ini_set('display_errors', self::$productionMode ? '0' : '1'); // or 'stderr'
            ini_set('html_errors', '0');
            ini_set('log_errors', '0');
        } elseif (ini_get('display_errors') != !self::$productionMode && ini_get('display_errors') !== (self::$productionMode ? 'stderr' : 'stdout')) {
            self::exceptionHandler(new \RuntimeException("Unable to set 'display_errors' because function ini_set() is disabled."));
        }

        error_reporting(E_ALL);

        if (self::$enabled) {
            return;
        }

        register_shutdown_function([__CLASS__, 'shutdownHandler']);
        set_exception_handler([__CLASS__, 'exceptionHandler']);
        set_error_handler([__CLASS__, 'errorHandler']);

        array_map('class_exists', [
            'Tracy\Bar',
            'Tracy\BlueScreen',
            'Tracy\DefaultBarPanel',
            'Tracy\Dumper',
            'Tracy\FireLogger',
            'Tracy\Helpers',
            'Tracy\Logger',
        ]);

        self::dispatch();
        self::$enabled = true;
    }

    /**
     * Shutdown handler to catch fatal errors and execute of the planned activities.
     * @return void
     * @internal
     */
    public static function shutdownHandler()
    {
        if (!self::$reserved) {
            return;
        }

        self::$reserved = null;

        $error = error_get_last();
        if (isset($error['type']) && in_array($error['type'], [E_ERROR, E_CORE_ERROR, E_COMPILE_ERROR, E_PARSE, E_RECOVERABLE_ERROR, E_USER_ERROR], true)) {
            self::exceptionHandler(
                Helpers::fixStack(new \ErrorException($error['message'], 0, $error['type'], $error['file'], $error['line'])),
                false
            );

        } elseif (self::$showBar && !self::$productionMode) {
            self::removeOutputBuffers(false);
            self::getBar()->render();
        }
    }

    /**
     * Handler to catch uncaught exception.
     * @param  \Exception|\Throwable  $exception
     * @return void
     * @internal
     */
    public static function exceptionHandler($exception, $exit = true)
    {
        if (!self::$reserved && $exit) {
            return;
        }
        self::$reserved = null;

        if (!headers_sent()) {
            http_response_code(isset($_SERVER['HTTP_USER_AGENT']) && strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE ') !== false ? 503 : 500);
            if (Helpers::isHtmlMode()) {
                header('Content-Type: text/html; charset=UTF-8');
            }
        }

        Helpers::improveException($exception);
        self::removeOutputBuffers(true);

        if (self::$productionMode) {
            try {
                self::log($exception, self::EXCEPTION);
            } catch (\Exception $e) {
            } catch (\Throwable $e) {
            }

            if (Helpers::isHtmlMode()) {
                $logged = empty($e);

                $reflectionClass = new \ReflectionClass('Tracy\\Debugger');
                $tracyDir        = dirname($reflectionClass->getFilename());

                require self::$errorTemplate ?: $tracyDir . '/assets/Debugger/error.500.phtml';
            } elseif (PHP_SAPI === 'cli') {
                fwrite(STDERR, 'ERROR: application encountered an error and can not continue. ' . (isset($e) ? "Unable to log error.\n" : "Error was logged.\n"));
            }
        } elseif (!connection_aborted() && (Helpers::isHtmlMode() || Helpers::isAjax())) {
            self::getBlueScreen()->render($exception);

            if (self::$showBar) {
                self::getBar()->render();
            }

            try {
                self::log($exception, self::EXCEPTION);
            } catch (\Exception $e) {
            } catch (\Throwable $e) {
            }
        } else {
            self::fireLog($exception);
            $s = (get_class($exception) . ($exception->getMessage() === '')
                ? ''
                : ': ' . $exception->getMessage()) . ' in ' . $exception->getFile() . ':' . $exception->getLine() . "\nStack trace:\n" . $exception->getTraceAsString();

            try {
                $file = self::log($exception, self::EXCEPTION);
                if ($file && !headers_sent()) {
                    header("X-Tracy-Error-Log: $file");
                }

                echo "$s\n" . ($file ? "(stored in $file)\n" : '');

                if ($file && self::$browser) {
                    exec(self::$browser . ' ' . escapeshellarg($file));
                }
            } catch (\Exception $e) {
                echo "$s\nUnable to log error: {$e->getMessage()}\n";
            } catch (\Throwable $e) {
                echo "$s\nUnable to log error: {$e->getMessage()}\n";
            }
        }

        try {
            $e = null;

            foreach (self::$onFatalError as $handler) {
                call_user_func($handler, $exception);
            }
        } catch (\Exception $e) {
        } catch (\Throwable $e) {
        }

        if ($e) {
            try {
                self::log($e, self::EXCEPTION);
            } catch (\Exception $e) {
            } catch (\Throwable $e) {
            }
        }

        if ($exit) {
            exit(255);
        }
    }

    /**
     * Handler to catch warnings and notices.
     * @return bool|null   false to call normal error handler, null otherwise
     * @throws ErrorException
     * @internal
     */
    public static function errorHandler($severity, $message, $file, $line, $context = [])
    {
        if (self::$scream) {
            error_reporting(E_ALL);
        }

        if ($severity === E_RECOVERABLE_ERROR || $severity === E_USER_ERROR) {
            if (Helpers::findTrace(debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS), '*::__toString')) {
                $previous   = isset($context['e']) && ($context['e'] instanceof \Exception || $context['e'] instanceof \Throwable) ? $context['e'] : null;
                $e          = new \ErrorException($message, 0, $severity, $file, $line, $previous);
                $e->context = $context;

                self::exceptionHandler($e);
            }

            $e          = new \ErrorException($message, 0, $severity, $file, $line);
            $e->context = $context;
            throw $e;
        } elseif (($severity & error_reporting()) !== $severity) {
            return false; // calls normal error handler to fill-in error_get_last()
        } elseif (self::$productionMode && ($severity & self::$logSeverity) === $severity) {
            $e          = new \ErrorException($message, 0, $severity, $file, $line);
            $e->context = $context;

            Helpers::improveException($e);

            try {
                self::log($e, self::ERROR);
            } catch (\Exception $foo) {
            } catch (\Throwable $foo) {
            }

            return;
        } elseif (!self::$productionMode && !isset($_GET['_tracy_skip_error']) && (is_bool(self::$strictMode) ? self::$strictMode : ((self::$strictMode & $severity) === $severity))) {
            $e            = new \ErrorException($message, 0, $severity, $file, $line);
            $e->context   = $context;
            $e->skippable = true;

            self::exceptionHandler($e);
        }

        $message = 'PHP ' . Helpers::errorTypeToString($severity) . ": $message";
        $count   = &self::getBar()->getPanel('Tracy:errors')->data["$file|$line|$message"];

        if ($count++) {
            // repeated error
            return;

        } elseif (self::$productionMode) {
            try {
                self::log("$message in $file:$line", self::ERROR);
            } catch (\Exception $foo) {
            } catch (\Throwable $foo) {
            }

            return;
        } else {
            self::fireLog(new \ErrorException($message, 0, $severity, $file, $line));
            return Helpers::isHtmlMode() || Helpers::isAjax() ? null : false; // false calls normal error handler
        }
    }

    private static function removeOutputBuffers($errorOccurred)
    {
        while (ob_get_level() > self::$obLevel) {
            $status = ob_get_status();
            if (in_array($status['name'], ['ob_gzhandler', 'zlib output compression'], true)) {
                break;
            }

            $fnc = $status['chunk_size'] || !$errorOccurred ? 'ob_end_flush' : 'ob_end_clean';
            if (!@$fnc()) {
                // @ may be not removable
                break;
            }
        }
    }
}
