<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Asset\Library\Less;

/**
 * Class : Parser output
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Output
{
    /**
     * Output holder
     *
     * @var string
     */
    protected $strs = [];

    /**
     * Adds a chunk to the stack
     *
     * @param string $chunk The chunk to output
     * @param FileInfo $fileInfo The file information
     * @param integer $index The index
     * @param mixed $mapLines
     */
    public function add($chunk, $fileInfo = null, $index = 0, $mapLines = null)
    {
        $this->strs[] = $chunk;
    }

    /**
     * Is the output empty?
     *
     * @return boolean
     */
    public function isEmpty()
    {
        return count($this->strs) === 0;
    }

    /**
     * Converts the output to string
     *
     * @return string
     */
    public function toString()
    {
        return implode('', $this->strs);
    }
}
