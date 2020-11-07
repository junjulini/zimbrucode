<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Asset\Filter;

use ZimbruCode\Component\Asset\Library\AssetData;
use ZimbruCode\Component\Asset\Library\AssetDataCollector;
use ZimbruCode\Component\Asset\Library\Filter;
use ZimbruCode\Component\Asset\Library\NamespaceHandler;

/**
 * Class : Filter - AssetNamespace
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class AssetNamespace extends Filter
{
    /**
     * Each asset
     *
     * @param  AssetData $asset   Asset data
     * @return void               This function does not return a value
     * @since 1.0.0
     */
    protected function each(AssetData $asset): void
    {
        $nameSpaceHandler = new NamespaceHandler($asset->raw());

        if (!$asset->isFile() && $nameSpaceHandler->is() && $nameSpaceHandler->has()) {
            $collectors = $nameSpaceHandler->collector();

            if (is_array($collectors)) {
                foreach ($collectors as $collector) {
                    $this->prepNamespace($collector);
                }
            } else {
                $this->prepNamespace($collectors);
            }

            $this->collector()->remove($asset->raw());
        }
    }

    /**
     * Get assets from namespace
     *
     * @param  AssetDataCollector $namespaceCollector   Collector from namespace
     * @return void                                     This function does not return a value
     * @since 1.0.0
     */
    protected function prepNamespace(AssetDataCollector $namespaceCollector): void
    {
        foreach ($namespaceCollector->get() as $asset => $assetData) {
            $this->collector()->addRaw($asset, $assetData);
        }
    }
}
