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

use Tracy\Debugger;
use Tracy\Dumper;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Component/Debug : Debug controller
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
class DebugController
{
    /**
     * Initialization of debugger : Tracy
     *
     * @param array $args   Debugger arguments
     * @return void
     * @since 1.2.0
     */
    public static function runTracy(array $args = []): void
    {
        if (defined('DOING_AJAX') || defined('REST_REQUEST')) {
            return;
        }

        $default = [
            'strictMode'            => false,
            'showBar'               => true,
            'logDirectory'          => null,
            'logSeverity'           => 0,
            'logDisableEDeprecated' => false,
            'email'                 => null,
            'dev'                   => false,
            'maxDepth'              => 4,
            'maxLength'             => 150,
            'editor'                => false,
        ];

        $args = Tools::arrayMerge($default, $args, 's');

        Debugger::$strictMode     = $args['strictMode'];
        Debugger::$showBar        = $args['showBar'];
        Debugger::$logDirectory   = $args['logDirectory'];
        Debugger::$logSeverity    = $args['logSeverity'];
        Debugger::$email          = $args['email'];
        Debugger::$productionMode = ($args['dev']) ? false : true;
        Debugger::$maxDepth       = $args['maxDepth'];
        Debugger::$maxLength      = $args['maxLength'];

        if ($args['editor'] && is_string($args['editor'])) {
            Debugger::$editor = $args['editor'];
        }

        Debugger::$errorTemplate = wp_normalize_path(realpath(__DIR__ . '/../../Resources/phtml/error.500.phtml'));

        $logger = new TracyLogger(Debugger::$logDirectory, Debugger::$email, Debugger::getBlueScreen());

        $logger->disableEDeprecated = ($args['logDisableEDeprecated']) ? true : false;

        Debugger::setLogger($logger);
        Debugger::enable();
    }

    /**
     * Add error message
     *
     * @param string $message    Error message or a complete WP_Error object.
     * @param string $title      Title in message
     * @param string $tabTitle   Error title, If you use a WP_Error object, the title will be by default the one you added in $data['title']
     * @param array  $args       Optional arguments to control behavior
     * @return void
     * @since 1.3.0
     */
    public static function addErrorMessage(string $message, string $title = 'Error', string $tabTitle = 'Error', array $args = []): never
    {
        $html = "<h2>{$title}</h2>";
        $html .= "<p>{$message}</p>";

        wp_die($html, $tabTitle, $args);
        exit;
    }

    /**
     * Summary of addBarLogMessage
     * @param mixed  $var          Variable to dump
     * @param string $title        Optional title
     * @param string $titleColor   Optional title color
     * @param array  $options      Dumper options
     * @return mixed               Variable itself
     * @since 1.3.0
     */
    public static function addBarLogMessage($var, string $title, string $titleColor = '#3484d2', array $options = []): mixed
    {
        if (Kernel::dev() && Kernel::getGlobal('core/dev-config/dev-log')) {
            static $panel;

            if (!$panel) {
                Debugger::getBar()->addPanel($panel = new DevLogTracyBarExtension);
            }

            $panel->data[] = ['title' => $title, 'color' => $titleColor, 'dump' => Dumper::toHtml($var, (array) $options + [
                Dumper::DEPTH    => Kernel::getGlobal('core/dev-config/max-depth', Debugger::$maxDepth),
                Dumper::TRUNCATE => Kernel::getGlobal('core/dev-config/max-len', Debugger::$maxLen),
                Dumper::LOCATION => false,
            ])];
        }

        return $var;
    }
}
