<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Asset\Library;

/**
 * Interface : Less functions backend
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
interface LessFunctionsInterface
{
    /**
     * Get functions
     * 
     * @return boolean/array   Return data
     * @since 1.0.0
     */
    public function get();
}
