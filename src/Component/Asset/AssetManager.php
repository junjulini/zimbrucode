<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Asset;

use ZimbruCode\Component\Asset\Library\AssetData;
use ZimbruCode\Component\Asset\Library\AssetDataCollector;
use ZimbruCode\Component\Asset\Library\Filter;
use ZimbruCode\Component\Asset\Library\LocationDetector;
use ZimbruCode\Component\Asset\Library\NamespaceHandler;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Asset manager
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class AssetManager
{
    protected $collector;
    protected $autoFilter;
    protected $callbacks = [];
    protected $nh;

    public function __construct(bool $autoFilter = true, string $customLocation = '')
    {
        $this->autoFilter($autoFilter);

        if (!$customLocation) {
            $customLocation = dirname(debug_backtrace()[0]['file']);
        }

        $location        = new LocationDetector($customLocation);
        $this->collector = new AssetDataCollector($location);

        $this->nh = new NamespaceHandler;
    }

    /**
     * Disable or enable auto filter
     *
     * @param  bool $autoFilter   Auto filter option : true/false
     * @return bool               Auto filter option
     * @since 1.0.0
     */
    public function autoFilter(bool $autoFilter = null): bool
    {
        if ($autoFilter !== null) {
            $this->autoFilter = $autoFilter;
        }

        return $this->autoFilter;
    }

    /**
     * Gets an asset by name
     *
     * @param string $asset   The asset name
     * @return AssetData
     * @since 1.0.0
     */
    public function get(string $asset): AssetData
    {
        return $this->collector->get($asset);
    }

    /**
     * Registers an asset
     *
     * @since 1.0.0
     */
    public function add(...$assets): AssetManager
    {
        if ($assets) {
            foreach ($assets as $asset) {
                if (is_array($asset)) {
                    foreach ($asset as $afc) {
                        $callback = (!empty($this->callbacks[$afc])) ? $this->callbacks[$afc] : null;
                        $this->collector->add($afc, $this->autoFilter, $callback);
                    }
                } else {
                    $callback = (!empty($this->callbacks[$asset])) ? $this->callbacks[$asset] : null;
                    $this->collector->add($asset, $this->autoFilter, $callback);
                }
            }
        } else {
            throw new \InvalidArgumentException('No assets.');
        }

        return $this;
    }

    /**
     * Remove an asset by name
     *
     * @param string $asset  The asset name
     * @return bool          True if the asset has been set, false if not
     * @since 1.0.0
     */
    public function has(string $asset): bool
    {
        return $this->collector->has($asset);
    }

    /**
     * Remove an asset by name
     *
     * @param string $asset   The asset name
     * @since 1.0.0
     */
    public function remove(string $asset): bool
    {
        return $this->collector->remove($asset);
    }

    /**
     * Remove all assets
     *
     * @since 1.0.0
     */
    public function flush(): AssetManager
    {
        $this->collector->flush();
        return $this;
    }

    public function filter(Filter $filter, bool $single = false, callable $callback = null): AssetManager
    {
        $this->collector->filter($filter, $single, $callback);
        return $this;
    }

    /**
     * Dump data
     *
     * @return void
     * @since 1.0.0
     */
    public function dump(): void
    {
        Tools::dump($this->collector);
    }

    /**
     * Enroll assets
     *
     * @param  string $logTitle   Additional log title
     * @return void               This function does not return a value
     * @since 1.0.0
     */
    public function enroll(string $logTitle = ''): void
    {
        if (Kernel::dev()) {
            Kernel::dev()->addLogMessage("Asset : {$logTitle}", $this->collector->get());
        }

        foreach ($this->collector->get() as $asset) {
            if ($asset->type() == 'css') {
                wp_enqueue_style($asset->name(), $asset->url(), $asset->deps(), $asset->version(), $asset->media(), $asset->footer());
            } elseif ($asset->type() == 'js') {
                wp_enqueue_script($asset->name(), $asset->url(), $asset->deps(), $asset->version(), $asset->footer());
            } elseif ($asset->type() == 'registered') {
                wp_enqueue_script($asset->name());
            }
        }
    }

    /**
     * Enroll assets as namespace
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function enrollAsNamespace(string $namespace = ''): void
    {
        $this->nh->add($namespace, $this->collector);
    }

    /**
     * Localizes a registered script with data for a JavaScript variable.
     *
     * @param  string $handle   The registered script handle you are attaching the data for
     * @param  string $name     The name of the variable which will contain the data
     * @param  array  $data     The data itself
     * @return bool
     * @since 1.0.0
     */
    public function localize(string $handle, string $name, array $data = []): ?bool
    {
        if ($handle && $name) {
            foreach ($this->collector->get() as $asset) {
                if ($handle == $asset->url() || $handle == $asset->raw() || strpos($asset->name(), $handle) !== false) {
                    return wp_localize_script($asset->name(), $name, $data);
                }
            }

            throw new \InvalidArgumentException("Next script handle for \"localize\" function not found : {$handle}");
        }

        return null;
    }

    public function addInlineScript(string $handle, string $data, string $position = 'after'): ?bool
    {
        if ($handle) {
            foreach ($this->collector->get() as $asset) {
                if ($handle == $asset->url() || $handle == $asset->raw() || strpos($asset->name(), $handle) !== false) {
                    return wp_add_inline_script($asset->name(), $data, $position);
                }
            }

            throw new \InvalidArgumentException("Next script handle for \"addInlineScript\" function not found : {$handle}");
        }

        return null;
    }

    public function addInlineStyle(string $handle, string $data): ?bool
    {
        if ($handle) {
            foreach ($this->collector->get() as $asset) {
                if ($handle == $asset->url() || $handle == $asset->raw() || strpos($asset->name(), $handle) !== false) {
                    return wp_add_inline_style($asset->name(), $data);
                }
            }

            throw new \InvalidArgumentException("Next style handle for \"addInlineStyle\" function not found : {$handle}");
        }

        return null;
    }

    /**
     * Add preventive callback
     *
     * @param string   $asset      Asset ID
     * @param callable $callback   Callback for asset
     * @since 1.0.0
     */
    public function addCallback(string $asset, callable $callback): AssetManager
    {
        if ($asset) {
            $this->callbacks[$asset] = $callback;
        }

        return $this;
    }

    /**
     * Add less vars
     *
     * @param  string $assetName  Name of LESS file
     * @param  array  $vars       Vars for LESS Render
     * @since 1.0.0
     */
    public function addLessVars(string $assetName, array $vars): AssetManager
    {
        if ($assetName && $vars) {
            $assetName = str_replace('/', '\\', $assetName);

            $this->collector->addGlobal("less-vars/{$assetName}", $vars);
        }

        return $this;
    }

    /**
     * Add global less vars
     *
     * @param array  $vars          Vars for LESS Render
     * @param string $assetName     Name of LESS file
     * @param string $restriction   Restriction : vars for app/admin mode
     * @since 1.0.0
     */
    public function addGlobalLessVars(array $vars, string $assetName = '', string $restriction = 'app'): AssetManager
    {
        if ($vars) {
            $globalVars   = Kernel::getGlobalCache('asset/less/vars', []);
            $globalVars[] = [
                'vars'        => $vars,
                'asset-name'  => $assetName,
                'restriction' => $restriction,
            ];

            Kernel::addGlobalCache('asset/less/vars', $globalVars);
        }

        return $this;
    }
}
