<?php

/*
 * This file is part of the zimbrucode package.
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
 * Class : Component/Asset/Filter : Asset namespace
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class AssetNamespace extends Filter
{
    /**
     * Each asset
     *
     * @param AssetData $asset   Asset data
     * @return void
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

            $this->callback($this->collector(), $asset);
            $this->collector()->remove($asset->raw());
        }
    }

    /**
     * Preparing assets namespaces
     *
     * @param AssetDataCollector $collector   Asset data collector
     * @return void
     * @since 1.0.0
     */
    protected function prepNamespace(AssetDataCollector $collector): void
    {
        foreach ($collector->get() as $asset => $assetData) {
            $this->collector()->addRaw($asset, $assetData);
        }
    }
}
