<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Core\Traits;

use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Asset\AssetManager;
use ZimbruCode\Component\Asset\Filter\Combine;

/**
 * Trait : Asset function
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
trait AssetTrait
{
    /**
     * Asset
     * 
     * @return object   AssetAutomatic
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

        if ($assets) {
            $namespace = '';

            if (method_exists($this, 'getModuleNamespace')) {
                $namespace = $this->getModuleNamespace();
            } elseif (method_exists($this, 'getNamespace')) {
                $namespace = $this->getNamespace();
            } else {
                return new AssetManager(true, $path);
            }

            $name = str_replace('\\', '.', strtolower($namespace));

            if (is_array($assets[0])) {
                $assets = $assets[0];
            }

            // Enroll name for combine mode : Ex - [NAME]
            if (!empty($assets[0])) {
                if (strpos($assets[0], '[') !== false) {
                    if ($name = str_replace(['[', ']'], '', $assets[0])) {
                        $name = strtolower($name);
                        unset($assets[0]);
                    }
                }
            }

            $combine  = false;
            $callback = false;

            // If last arg : bool : Combine
            if ($assets && is_bool(array_slice($assets, -1, 1)[0])) {
                array_pop($assets);
                $combine = true;
            
            // If last arg : callable : Additional callback
            } elseif ($assets && is_callable(array_slice($assets, -1, 1)[0])) {
                $callback = array_slice($assets, -1, 1)[0];
                array_pop($assets);

                if ($assets && is_bool(array_slice($assets, -1, 1)[0])) {
                    array_pop($assets);
                    $combine = true;
                }
            }

            if (Kernel::dev()) {
                $combine = false;
            }

            $assetManager = new AssetManager(true, $path);

            if ($callback && is_callable($callback)) {
                $callback($assetManager);
            }

            if (!$combine) {
                $assetManager->add($assets)->enroll($name);
            } else {
                $callback = function($collector, $data) use ($name) {
                    $data['settings']['js']['outputName']  = $name;
                    $data['settings']['css']['outputName'] = $name;

                    return $data;
                };

                $assetManager->add($assets)->filter(new Combine, false, $callback)->enroll($name);
            }

            return $assetManager;
        } else {
            return new AssetManager(true, $path);
        }
    }
}
