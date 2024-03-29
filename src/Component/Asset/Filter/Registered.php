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

/**
 * Class : Component/Asset/Filter : Registered
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class Registered extends Filter
{
    /**
     * Each asset
     *
     * @param AssetData $asset   Asset data
     * @return void
     * @since 1.0.0
     */
    public function each(AssetData $asset): void
    {
        if (!$asset->isFile() && !(new NamespaceHandler($asset->raw()))->is() && wp_script_is($asset->raw(), 'registered')) {
            $asset->type('registered')->name($asset->raw());
            $this->callback($this->collector(), $asset);
        }
    }
}
