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

use Whoops\Exception\Formatter;
use Whoops\Handler\Handler;
use Whoops\Handler\PrettyPageHandler;
use Whoops\Util\Misc;
use Whoops\Util\TemplateHelper;

/**
 * Class : Error page handler
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class ErrorPageHandler extends PrettyPageHandler
{
    /**
     * @return int|null
     * @since 1.0.0
     */
    public function handle()
    {
        if (!$this->handleUnconditionally()) {
            // Check conditions for outputting HTML:
            // @todo: Make this more robust
            if (php_sapi_name() === 'cli') {
                // Help users who have been relying on an internal test value
                // fix their code to the proper method
                if (isset($_ENV['whoops-test'])) {
                    throw new \Exception('Use handleUnconditionally instead of whoops-test environment variable');
                }

                return Handler::DONE;
            }
        }

        // @todo: Make this more dynamic
        $helper = new TemplateHelper();

        $templateFile = $this->getResource('views/layout.html.php');
        $cssFile      = $this->getResource('css/whoops.base.css');
        $zeptoFile    = $this->getResource('js/zepto.min.js');
        $clipboard    = $this->getResource('js/clipboard.min.js');
        $jsFile       = $this->getResource('js/whoops.base.js');

        $customCssFile = 'body {tab-size: 2}';

        $inspector = $this->getInspector();
        $frames    = $inspector->getFrames();

        $code = $inspector->getException()->getCode();

        if ($inspector->getException() instanceof \ErrorException) {
            // ErrorExceptions wrap the php-error types within the "severity" property
            $code = Misc::translateErrorCode($inspector->getException()->getSeverity());
        }

        // List of variables that will be passed to the layout template.
        $vars = [
            'page_title'      => $this->getPageTitle(),

            // @todo: Asset compiler
            'stylesheet'      => @file_get_contents($cssFile),
            'zepto'           => @file_get_contents($zeptoFile),
            'clipboard'       => @file_get_contents($clipboard),
            'javascript'      => @file_get_contents($jsFile),

            // Template paths:
            'header'          => $this->getResource('views/header.html.php'),
            'frame_list'      => $this->getResource('views/frame_list.html.php'),
            'frame_code'      => $this->getResource('views/frame_code.html.php'),
            'env_details'     => $this->getResource('views/env_details.html.php'),

            'title'           => $this->getPageTitle(),
            'name'            => explode('\\', $inspector->getExceptionName()),
            'message'         => $inspector->getException()->getMessage(),
            'code'            => $code,
            'plain_exception' => Formatter::formatExceptionPlain($inspector),
            'frames'          => $frames,
            'has_frames'      => !!count($frames),
            'handler'         => $this,
            'handlers'        => $this->getRun()->getHandlers(),

            'tables'          => [
                'GET Data'              => $_GET,
                'POST Data'             => $_POST,
                'Files'                 => $_FILES,
                'Cookies'               => $_COOKIE,
                'Session'               => isset($_SESSION) ? $_SESSION : [],
                'Server/Request Data'   => $_SERVER,
                'Environment Variables' => $_ENV,
            ],
        ];

        if (isset($customCssFile)) {
            $vars['stylesheet'] .= $customCssFile;
        }

        // Add extra entries list of data tables:
        // @todo: Consolidate addDataTable and addDataTableCallback
        $extraTables = array_map(function ($table) {
            return $table instanceof \Closure ? $table() : $table;
        }, $this->getDataTables());

        $vars['tables'] = array_merge($extraTables, $vars['tables']);

        $helper->setVariables($vars);
        $helper->render($templateFile);

        return Handler::QUIT;
    }
}
