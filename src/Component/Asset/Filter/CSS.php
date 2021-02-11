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
use ZimbruCode\Component\Asset\Library\Filter;

/**
 * Class : Filter - CSS
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class CSS extends Filter
{
    /**
     * Each asset
     *
     * @param  AssetData $asset   Asset data
     * @return void               This function does not return a value
     * @since 1.0.0
     */
    public function each(AssetData $asset): void
    {
        if ($asset->fileType() == 'css') {
            $asset->type('css', true)
                  ->name($asset->generateName(), true)
                  ->url($asset->getURL(), true)
                  ->version($asset->dynamicVersion(), true);

            $this->callback($this->collector(), $asset);
        }
    }
}
