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
use ZimbruCode\Component\Asset\Library\NamespaceHandler;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Handler\LibraryHandler;

/**
 * Class : Filter - Package
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Package extends Filter
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
        if (!$asset->isFile() && !(new NamespaceHandler($asset->raw()))->is()) {
            if ($packages = $this->prepPackageByCondition($asset->raw())) {
                if (!empty($packages['styles'])) {
                    foreach ($packages['styles'] as $packageName => $packageData) {
                        $package = $this->collector()->add($packageData['path'])
                                        ->get($packageData['path']);

                        $package->type('css')
                                ->name($package->generateName())
                                ->url($package->getURL())
                                ->version((!empty($packageData['version']) ? $packageData['version'] : Kernel::getGlobal('app/version')))
                                ->addArgs($asset->getArgs());
                    }
                }

                if (!empty($packages['scripts'])) {
                    foreach ($packages['scripts'] as $packageName => $packageData) {
                        $package = $this->collector()->add($packageData['path'])
                                        ->get($packageData['path']);

                        $package->type('js')
                                ->name($package->generateName())
                                ->url($package->getURL())
                                ->version((!empty($packageData['version']) ? $packageData['version'] : Kernel::getGlobal('app/version')))
                                ->footer(true)
                                ->addArgs($asset->getArgs());
                    }
                }

                $this->callback($this->collector(), $asset);
                $this->collector()->remove($asset->raw());
            }
        }
    }

    /**
     * Preparing package by condition
     *
     * @param  string $package   Package name
     * @return array/bool        Package data
     * @since 1.0.0
     */
    protected function prepPackageByCondition(string $package)
    {
        if (strpos($package, '|') !== false) {
            preg_match_all("/\|([^\|]*)\|/", $package, $matches);

            if (!empty($matches[1][0]) && !empty($matches[0][0])) {
                $package   = str_replace($matches[0][0], '', $package);
                $condition = json_decode($matches[1][0]);

                if (!$package = LibraryHandler::getPackage($package)) {
                    return false;
                }

                if ($package) {
                    if ($condition->script && is_array($condition->script)) {
                        foreach ($condition->script as $item) {
                            if (!empty($package['scripts'][$item])) {
                                unset($package['scripts'][$item]);
                            }
                        }
                    }

                    if ($condition->style && is_array($condition->style)) {
                        foreach ($condition->style as $item) {
                            if (!empty($package['styles'][$item])) {
                                unset($package['styles'][$item]);
                            }
                        }
                    }
                }
            }
        } else {
            if (!$package = LibraryHandler::getPackage($package)) {
                return false;
            }

        }

        return $package ? $package : [];
    }
}
