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

use InvalidArgumentException;

/**
 * Class : Module/Panel/Library : TWIG context controller
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class TwigContextController
{
    protected $context = [];

    /**
     * Constructor
     *
     * @param array $context   Context data
     * @since 1.0.0
     */
    public function __construct(array &$context)
    {
        $this->context = &$context;
    }

    /**
     * Add context data
     *
     * @param string $key     Item key
     * @param string $value   Item value
     * @return void
     * @since 1.0.0
     */
    public function add(string $key, $value = ''): void
    {
        if ($key) {
            $this->context[$key] = $value;
        }
    }

    /**
     * Get context data
     *
     * @param string $key   Item key
     * @return mix          Item data
     * @since 1.0.0
     */
    public function get(string $key)
    {
        if (!$key) {
            throw new InvalidArgumentException('ZE0135');
        }

        if (!isset($this->context[$key])) {
            throw new InvalidArgumentException('ZE0136');
        }

        return $this->context[$key];
    }
}
