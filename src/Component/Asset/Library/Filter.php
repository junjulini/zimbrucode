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

use ZimbruCode\Component\Asset\Library\AssetDataCollector;

/**
 * Class : Filter
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
abstract class Filter
{
    private $collector;
    private $callback;

    /**
     * Initialization of filter
     *
     * @param  AssetDataCollector $collector   Collector object
     * @param  string             $single      Name of asset
     * @param  callable|null      $callback    Additional callback
     * @return void                            This function does not return a value
     * @since 1.0.0
     */
    final public function __init(AssetDataCollector $collector, string $single = null, callable $callback = null)
    {
        $this->collector = $collector;
        $this->callback  = $callback;

        if (method_exists($this, 'setup')) {
            $this->setup();
        }

        if (method_exists($this, 'each')) {
            if ($single) {
                if ($this->collector()->has($single)) {
                    $this->each($this->collector()->get($single));
                }
            } else {
                foreach ($this->collector()->get() as $asset) {
                    $this->each($asset);
                }
            }
        }
    }

    /**
     * Assets collector
     *
     * @return AssetDataCollector object
     * @since 1.0.0
     */
    final protected function collector(): AssetDataCollector
    {
        return $this->collector;
    }

    /**
     * Run additional callback
     *
     * @since 1.0.0
     */
    final protected function callback(...$args)
    {
        if (is_callable($this->callback)) {
            return call_user_func_array($this->callback, $args);
        }
    }
}
