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

use ZimbruCode\Component\Asset\Library\AssetDataCollector;

/**
 * Class : Component/Asset/Library : Filter
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
abstract class Filter
{
    private readonly AssetDataCollector $collector;
    private $callback;

    /**
     * Initialization of filter
     *
     * @param AssetDataCollector $collector   Asset data collector object
     * @param string|null        $assetName   Asset name
     * @param callable|null      $callback    Callback function
     * @return void
     * @since 1.3.0
     */
    final public function __init(AssetDataCollector $collector, string $assetName = null, callable $callback = null): void
    {
        $this->collector = $collector;
        $this->callback  = $callback;

        if (method_exists($this, 'setup')) {
            $this->setup();
        }

        if (method_exists($this, 'each')) {
            if ($assetName) {
                if ($this->collector()->has($assetName)) {
                    $this->each($this->collector()->get($assetName));
                }
            } else {
                foreach ($this->collector()->get() as $assetData) {
                    $this->each($assetData);
                }
            }
        }
    }

    /**
     * Assets data collector
     *
     * @return AssetDataCollector object
     * @since 1.0.0
     */
    final protected function collector(): AssetDataCollector
    {
        return $this->collector;
    }

    /**
     * Run callback
     *
     * @param mixed ...$args
     * @return mixed
     * @since 1.3.0
     */
    final protected function callback(...$args): mixed
    {
        if (is_callable($this->callback)) {
            return call_user_func_array($this->callback, $args);
        }

        return null;
    }
}
