<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Core\Traits;

use ZimbruCode\Component\Asset\AssetManager;

/**
 * Trait : Component/Core/Traits : Asset function
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
trait AssetTrait
{
    /**
     * Asset
     *
     * @param mixed ...$assets
     * @return AssetManager
     * @since 1.0.0
     */
    protected function asset(...$assets)
    {
        $path = '';

        if (method_exists($this, 'getModulePath')) {
            $path = $this->getModulePath();
        } elseif (method_exists($this, 'getPath')) {
            $path = $this->getPath();
        }

        $assetManager = new AssetManager(true, $path);

        if ($assets) {
            $namespace = '';

            if (method_exists($this, 'getModuleNamespace')) {
                $namespace = $this->getModuleNamespace();
            } elseif (method_exists($this, 'getNamespace')) {
                $namespace = $this->getNamespace();
            }

            $name = str_replace('\\', '.', strtolower($namespace));

            $assetManager->addAssets($assets)->enroll($name);
        }

        return $assetManager;
    }
}
