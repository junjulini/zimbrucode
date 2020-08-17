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
    protected function each($asset)
    {
        $nh = new NamespaceHandler($asset->raw());

        if (!$asset->isFile() && $nh->is() && $nh->has()) {
            $nc = $nh->collector();

            if (is_array($nc)) {
                foreach ($nc as $nci) {
                    $this->prepNamespace($nci);
                }
            } else {
                $this->prepNamespace($nc);
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
    protected function prepNamespace($namespaceCollector)
    {
        if ($namespaceCollector instanceof AssetDataCollector) {
            foreach ($namespaceCollector->get() as $asset => $assetData) {
                $this->collector()->addRaw($asset, $assetData);
            }
        }
    }
}
