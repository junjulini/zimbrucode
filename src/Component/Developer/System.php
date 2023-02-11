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

use COM;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Component/Developer : System functions
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */
class System
{
    /**
     * Dump system data
     *
     * @return void
     * @since 1.0.0
     */
    public function dumpSysData(): void
    {
        $memory = $this->getMemoryUsage();

        $data = [
            'server-load'         => $this->getServerLoad(),
            'server-memory-usage' => $this->getServerMemoryUsage(),
            'memory-limit'        => "{$memory['limit']} Mb",
            'memory-usage'        => "{$memory['usage']} Mb",
            'memory-percent'      => "{$memory['percent']} %",
            'ip'                  => $_SERVER['SERVER_ADDR'],
            'php'                 => PHP_VERSION . ' @' . (PHP_INT_SIZE * 8) . 'BitOS',
        ];

        Tools::dump($data);
    }

    /**
     * Get system data
     *
     * @return array   System data
     * @since 1.0.0
     */
    public function getSysData(): array
    {
        $memory = $this->getMemoryUsage();

        return [
            'server-load'         => $this->getServerLoad(),
            'server-memory-usage' => $this->getServerMemoryUsage(),
            'memory-limit'        => "{$memory['limit']} Mb",
            'memory-usage'        => "{$memory['usage']} Mb",
            'memory-percent'      => "{$memory['percent']} %",
            'ip'                  => $_SERVER['SERVER_ADDR'],
            'php'                 => PHP_VERSION . ' @' . (PHP_INT_SIZE * 8) . 'BitOS',
        ];
    }

    /**
     * Display system data
     *
     * @return void
     * @since 1.0.0
     */
    public function displaySysData(): void
    {
        if (Kernel::dev()) {
            Kernel::dev()->addInfoMessage('System : ', $this->getSysData());
        }
    }

    /**
     * Get server CPU load
     *
     * @return float|null   CPU load data
     * @since 1.1.0
     */
    public function getServerLoad(): ?float
    {
        if (stristr(PHP_OS, 'win')) {
            if (!class_exists('COM')) {
                return null;
            }

            $wmi    = new COM('Winmgmts://');
            $server = $wmi->execquery('SELECT LoadPercentage FROM Win32_Processor');

            $cpuNum = $loadTotal = 0;

            foreach ($server as $cpu) {
                $cpuNum++;
                $loadTotal += $cpu->loadpercentage;
            }

            $load = round($loadTotal / $cpuNum);
        } else {
            $load = sys_getloadavg()[0];
        }

        return $load;
    }

    /**
     * Get server memory usage
     *
     * @return string|null   Memory usage
     * @since 1.1.0
     */
    public function getServerMemoryUsage(): ?string
    {
        if ($shell = shell_exec('free')) {
            $free     = $shell;
            $free     = (string) trim($free);
            $free_arr = explode("\n", $free);
            $mem      = explode(' ', $free_arr[1]);
            $mem      = array_filter($mem);
            $mem      = array_merge($mem);

            $memory_usage = $mem[2] / $mem[1] * 100;

            return intval($memory_usage) . '%';
        } else {
            return null;
        }
    }

    /**
     * Get script memory usage
     *
     * @return array   Memory usage
     * @since 1.0.0
     */
    public function getMemoryUsage(): array
    {
        $memory          = [];
        $memory['limit'] = (int) ini_get('memory_limit');
        $memory['usage'] = function_exists('memory_get_usage') ? round(memory_get_usage(true) / 1024 / 1024, 2) : 0;

        if (!empty($memory['usage']) && !empty($memory['limit'])) {
            $memory['percent'] = round($memory['usage'] / $memory['limit'] * 100, 0);
        }

        return $memory;
    }
}
