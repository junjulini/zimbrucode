<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Developer;

use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Debug\DebugController;

/**
 * Class : Developer mode
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class DeveloperMode
{
    protected $isDev  = false;
    protected $config = [];

    protected $timing;
    protected $memoryUsage;
    protected $system;

    public function __construct(string $type, string $title, $msg)
    {
        $this->isDev  = Kernel::getGlobal('core/dev');
        $this->config = Kernel::getGlobal('core/dev-config');

        if ($this->isDev) {
            $this->timing      = new Timing;
            $this->memoryUsage = new MemoryUsage;
            $this->system      = new System;
        }

        if ($type) {
            switch ($type) {
                case 'setLog':
                    $this->addLogMessage($title, $msg);
                    break;
                case 'setWarn':
                    $this->addWarningMessage($title, $msg);
                    break;
                case 'setError':
                    $this->addErrorMessage($title, $msg);
                    break;
                case 'setInfo':
                    $this->addInfoMessage($title, $msg);
                    break;
            }
        }
    }

    /**
     * Timing
     *
     * @return object   TimingHelper
     * @since 1.0.0
     */
    public function timing(): Timing
    {
        return $this->timing;
    }

    /**
     * Memory usage
     *
     * @return object   MemoryUsage
     * @since 1.0.0
     */
    public function mem(): MemoryUsage
    {
        return $this->memoryUsage;
    }

    /**
     * System functions
     *
     * @return object   System
     * @since 1.0.0
     */
    public function sys(): System
    {
        return $this->system;
    }

    /**
     * Set dump message on screen
     *
     * @param string $title   Title of message
     * @param array  $data    Data of message
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    public function dump(string $title = 'DEV-MSG', array $data = null): void
    {
        if (!$this->isDev) {
            return;
        }

        $output = "------------------------ START : {$title} ------------------------";
        $output .= $data;
        $output .= "------------------------ END : {$title} ------------------------";

        Tools::dump($output);
    }

    /**
     * Add log message on developer bar
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function addLogMessage(string $title = '', $msg = ''): void
    {
        if (!$this->isDev || !$this->config['dev-log']) {
            return;
        }

        $color = '#a4adb5';

        if ($msg) {
            DebugController::addBarLogMessage($msg, "Log : {$title}", $color);
        } else {
            DebugController::addBarLogMessage($title, 'Log', $color);
        }
    }

    /**
     * Add warning message on developer bar
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function addWarningMessage(string $title = '', $msg = '')
    {
        if (!$this->isDev || !$this->config['dev-log']) {
            return;
        }

        $color = '#ffc42e';

        if ($msg) {
            DebugController::addBarLogMessage($msg, "Warning : {$title}", $color);
        } else {
            DebugController::addBarLogMessage($title, 'Warning', $color);
        }
    }

    /**
     * Add error message on developer bar
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function addErrorMessage(string $title = '', $msg = ''): void
    {
        if (!$this->isDev || !$this->config['dev-log']) {
            return;
        }

        $color = '#fd6444';

        if ($msg) {
            DebugController::addBarLogMessage($msg, "Error : {$title}", $color);
        } else {
            DebugController::addBarLogMessage($title, 'Error', $color);
        }
    }

    /**
     * Add info message on developer bar
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function addInfoMessage(string $title = '', $msg = ''): void
    {
        if (!$this->isDev || !$this->config['dev-log']) {
            return;
        }

        $color = '#44a1fd';

        if ($msg) {
            DebugController::addBarLogMessage($msg, "Info : {$title}", $color);
        } else {
            DebugController::addBarLogMessage($title, 'Info', $color);
        }
    }
}
