<?php

/*
 * This file is part of the zimbrucode package.
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
 * Class : Component/Developer : Developer mode
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
class DeveloperMode
{
    protected bool $isDev   = false;
    protected array $config = [];

    protected Timing $timing;
    protected MemoryUsage $memoryUsage;
    protected System $system;

    /**
     * Constructor
     *
     * @param string $type    Message type
     * @param string $title   The headline of the message
     * @param mixed  $msg     Message data
     * @since 1.0.0
     */
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
     * @return Timing
     * @since 1.0.0
     */
    public function timing(): Timing
    {
        return $this->timing;
    }

    /**
     * Memory usage
     *
     * @return MemoryUsage
     * @since 1.0.0
     */
    public function mem(): MemoryUsage
    {
        return $this->memoryUsage;
    }

    /**
     * System functions
     *
     * @return System
     * @since 1.0.0
     */
    public function sys(): System
    {
        return $this->system;
    }

    /**
     * Set dump message on screen
     *
     * @param string     $title   The headline of the message
     * @param array|null $data    Message data
     * @return void
     * @since 1.1.0
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
     * Add a log message to the developer bar
     *
     * @param string $title   The headline of the message
     * @param mixed  $msg     Message data
     * @return void
     * @since 1.3.0
     */
    public function addLogMessage(string $title = '', mixed $msg = ''): void
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
     * Add a warning message to the developer bar
     *
     * @param string $title   The headline of the message
     * @param mixed  $msg     Message data
     * @return void
     * @since 1.3.0
     */
    public function addWarningMessage(string $title = '', mixed $msg = ''): void
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
     * Add a error message to the developer bar
     *
     * @param string $title   The headline of the message
     * @param mixed  $msg     Message data
     * @return void
     * @since 1.3.0
     */
    public function addErrorMessage(string $title = '', mixed $msg = ''): void
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
     * Add a info message to the developer bar
     *
     * @param string $title   The headline of the message
     * @param mixed  $msg     Message data
     * @return void
     * @since 1.3.0
     */
    public function addInfoMessage(string $title = '', mixed $msg = ''): void
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
