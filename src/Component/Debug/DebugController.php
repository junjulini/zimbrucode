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

use Tracy\Dumper;
use Whoops\Run;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Debug
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class DebugController
{
    /**
     * Initialization of debugger : Whoops
     *
     * @param  boolean $mode   DEV mode : true/false
     * @return void            This function does not return a value
     * @since 1.0.0
     */
    public static function runWhoops($mode = true)
    {
        if ($mode && is_bool($mode)) {
            $debug = new Run;
            $debug->pushHandler(new ErrorPageHandler)->pushHandler(function ($exception, $inspector, $run) {
                $inspector->getFrames()->map(function ($frame) {
                    if ($function = $frame->getFunction()) {
                        $line = $frame->getLine();
                        $frame->addComment(
                            sprintf(esc_html__('This frame is within function \'%s\' - line : %s', 'zc'), $function, $line),
                            Kernel::getGlobal('core/name')
                        );
                    }

                    return $frame;
                });
            })->register();
        }
    }

    /**
     * Initialization of debugger : Tracy
     *
     * @param  array  $args   Debugger args
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    public static function runTracy(array $args = [])
    {
        if (defined('DOING_AJAX') || defined('REST_REQUEST')) {
            return;
        }

        $default = [
            'strictMode'   => false,
            'showBar'      => true,
            'logDirectory' => null,
            'logSeverity'  => 0,
            'email'        => null,
            'dev'          => false,
            'maxDepth'     => 4,
            'maxLength'    => 150,
        ];

        $args = Tools::arrayMerge($default, $args, 's');

        TracyDebugger::$strictMode     = $args['strictMode'];
        TracyDebugger::$showBar        = $args['showBar'];
        TracyDebugger::$logDirectory   = $args['logDirectory'];
        TracyDebugger::$logSeverity    = $args['logSeverity'];
        TracyDebugger::$email          = $args['email'];
        TracyDebugger::$productionMode = ($args['dev']) ? false : true;
        TracyDebugger::$maxDepth       = $args['maxDepth'];
        TracyDebugger::$maxLength      = $args['maxLength'];
        
        TracyDebugger::enable();
    }

    /**
     * Add error message
     *
     * @param string $message    Error message or a complete WP_Error object.
     * @param string $title      Title in message
     * @param string $tabTitle   Error title, If you use a WP_Error object, the title will be by default the one you added in $data['title']
     * @param array  $args       Optional arguments to control behavior
     * @return void              This function does not return a value
     * @since 1.0.0
     */
    public static function addErrorMessage($message, $title = 'Error', $tabTitle = 'Error', array $args = [])
    {
        if (is_string($message) && is_string($title) && is_string($tabTitle)) {
            $html = "<h2>{$title}</h2>";
            $html .= "<p>{$message}</p>";

            wp_die($html, $tabTitle, $args);
        }
    }

    /**
     * Dumps dev log in Tracy Debug Bar
     *
     * @param  mix      Variable to dump
     * @param  string   Optional title
     * @param  string   Optional title color
     * @param  array    Dumper options
     * @return mix      Variable itself
     * @since 1.0.0
     */
    public static function addBarLogMessage($var, $title, $titleColor = '#3484d2', array $options = [])
    {
        if (Kernel::dev() && Kernel::getGlobal('core/dev-config/dev-log')) {
            static $panel;

            if (!$panel) {
                TracyDebugger::getBar()->addPanel($panel = new DevLogTracyBarExtension);
            }

            $panel->data[] = ['title' => $title, 'color' => $titleColor, 'dump' => Dumper::toHtml($var, (array) $options + [
                Dumper::DEPTH    => Kernel::getGlobal('core/dev-config/max-depth', TracyDebugger::$maxDepth),
                Dumper::TRUNCATE => Kernel::getGlobal('core/dev-config/max-len', TracyDebugger::$maxLen),
                Dumper::LOCATION => false,
            ])];
        }

        return $var;
    }
}
