<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\Panel\Library;

/**
 * Class : TWIG context controller
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class TwigContextController
{
    protected $context = [];

    public function __construct(array &$context)
    {
        $this->context = &$context;
    }

    public function add(string $name, $value = ''): void
    {
        if ($name) {
            $this->context[$name] = $value;
        }
    }

    public function get(string $name)
    {
        if (!$name) {
            throw new \InvalidArgumentException('ZimbruCode\Module\Panel\Library\TwigContextController : Name item is empty');
        }

        if (!isset($this->context[$name])) {
            throw new \InvalidArgumentException('ZimbruCode\Module\Panel\Library\TwigContextController : The element does not exist in the context array');
        }

        return $this->context[$name];
    }
}
