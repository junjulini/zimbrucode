<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Asset\Library;

use ZimbruCode\Component\Common\Tools;

/**
 * Class : SCSS default functions
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class ScssDefaultFunctions
{
    /**
     * Get functions
     *
     * @return array   Functions
     * @since 1.0.0
     */
    public function get(): array
    {
        return [
            'dump' => [$this, '__callback_dump'],
        ];
    }

    /**
     * Function : Dump
     *
     * @return string
     * @since 1.0.0
     */
    public function __callback_dump($args)
    {
        Tools::dump($args);
    }
}
