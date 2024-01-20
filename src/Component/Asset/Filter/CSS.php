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

/**
 * Class : Component/Asset/Filter : CSS
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
class CSS extends Filter
{
    /**
     * Each asset
     *
     * @param AssetData $asset   Asset data
     * @return void
     * @since 1.3.0
     */
    public function each(AssetData $asset): void
    {
        if ($asset->fileType() == 'css') {
            $asset->type('css', true)
                  ->name($asset->generateName(), true)
                  ->url($asset->getURL(), true)
                  ->version($asset->dynamicVersion(), true)
                  ->media('all', true);

            $this->callback($this->collector(), $asset);
        }
    }
}
