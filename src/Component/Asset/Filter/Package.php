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
use ZimbruCode\Component\Asset\Library\Filter;
use ZimbruCode\Component\Asset\Library\NamespaceHandler;
use ZimbruCode\Component\Handler\LibraryHandler;

/**
 * Class : Component/Asset/Filter : Package
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
class Package extends Filter
{
    /**
     * Each asset
     *
     * @param AssetData $asset   Asset data
     * @return void
     * @since 1.3.0
     */
    protected function each(AssetData $asset): void
    {
        if (!$asset->isFile() && !(new NamespaceHandler($asset->raw()))->is()) {
            if ($package = LibraryHandler::getPackage($asset->raw())) {
                if (!empty($package['styles'])) {
                    foreach ($package['styles'] as $packageName => $packageData) {
                        $newAsset = $this->collector()
                                         ->add($packageData['path'])
                                         ->get($packageData['path']);

                        $newAsset->type('css')
                                 ->name($newAsset->generateName())
                                 ->url($newAsset->getURL())
                                 ->version((!empty($packageData['version']) ? $packageData['version'] : $newAsset->dynamicVersion()))
                                 ->media('all');
                    }
                }

                if (!empty($package['scripts'])) {
                    foreach ($package['scripts'] as $packageName => $packageData) {
                        $newAsset = $this->collector()
                                         ->add($packageData['path'])
                                         ->get($packageData['path']);

                        $newAsset->type('js')
                                 ->name($newAsset->generateName())
                                 ->url($newAsset->getURL())
                                 ->deps(['jquery'])
                                 ->version((!empty($packageData['version']) ? $packageData['version'] : $newAsset->dynamicVersion()))
                                 ->footer(true);
                    }
                }

                $this->callback($this->collector(), $asset);
                $this->collector()->remove($asset->raw());
            }
        }
    }
}
