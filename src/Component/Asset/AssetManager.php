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

use ZimbruCode\Component\Asset\Library\AssetDataCollector;
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

    public function __construct($autoFilter = true, $customLocation = '')
    {
        $this->autoFilter($autoFilter);

        if (!$customLocation || !is_string($customLocation)) {
            $customLocation = dirname(debug_backtrace()[0]['file']);
        }

        $location = new LocationDetector($customLocation);
        $this->collector = new AssetDataCollector($location);

        $this->nh = new NamespaceHandler;
    }

    /**
     * Disable or enable auto filter
     * 
     * @param  boolean $autoFilter   Auto filter option : true/false
     * @return boolean               Auto filter option
     * @since 1.0.0
     */
    public function autoFilter($autoFilter = true)
    {
        if (is_bool($autoFilter)) {
            $this->autoFilter = $autoFilter;
        }

        return $this->autoFilter;
    }

    /**
     * Gets an asset by name
     * 
     * @param string $asset   The asset name
     * @return The asset data
     * @since 1.0.0
     */
    public function get($asset = '')
    {
        return $this->collector->get($asset);
    }

    /**
     * Registers an asset
     * 
     * @since 1.0.0
     */
    public function set(...$assets)
    {
        if ($assets) {
            foreach ($assets as $asset) {
                if (is_array($asset)) {
                    foreach ($asset as $afc) {
                        $callback = (!empty($this->callbacks[$afc])) ? $this->callbacks[$afc] : null;
                        $this->collector->set($afc, $this->autoFilter, $callback);
                    }
                } else {
                    $callback = (!empty($this->callbacks[$asset])) ? $this->callbacks[$asset] : null;
                    $this->collector->set($asset, $this->autoFilter, $callback);
                }
            }
        } else {
            throw new \InvalidArgumentException(esc_html__('No assets.', 'zc'));
        }

        return $this;
    }

    /**
     * Remove an asset by name
     * 
     * @param string $asset  The asset name
     * @return boolean       True if the asset has been set, false if not
     * @since 1.0.0
     */
    public function has($asset)
    {
        return $this->collector->has($asset);
    }

    /**
     * Remove an asset by name
     * 
     * @param string $asset   The asset name
     * @since 1.0.0
     */
    public function remove($asset)
    {
        return $this->collector->remove($asset);
    }

    /**
     * Remove all assets
     * 
     * @since 1.0.0
     */
    public function flush()
    {
        $this->collector->flush();
        return $this;
    }

    public function filter($filter, $single = false, callable $callback = null)
    {
        $this->collector->filter($filter, $single, $callback);
        return $this;
    }

    /**
     * Dump data
     * 
     * @return boolean  None
     * @since 1.0.0
     */
    public function dump()
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
    public function enroll($logTitle = '')
    {
        if (Kernel::dev()) {
            Kernel::dev()->addLogMessage(esc_html__('Asset : ', 'zc') . $logTitle, $this->collector->get());
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
    public function enrollAsNamespace($namespace = '')
    {
        $this->nh->set($namespace, $this->collector);
    }

    /**
     * Localizes a registered script with data for a JavaScript variable.
     * 
     * @param  string $handle   The registered script handle you are attaching the data for
     * @param  string $name     The name of the variable which will contain the data
     * @param  array  $data     The data itself
     * @return void             This function does not return a value
     * @since 1.0.0
     */
    public function localize($handle, $name, array $data = [])
    {
        if ($handle && is_string($handle) && $name && is_string($name)) {
            foreach ($this->collector->get() as $asset) {
                if (strpos($asset->name(), $handle) !== false) {
                    wp_localize_script($asset->name(), $name, $data);
                    return;
                }
            }

            throw new \InvalidArgumentException(esc_html__('Next script handle for "localize" function not found : ', 'zc') . $handle);
        }
    }

    /**
     * Set preventive callback
     * 
     * @param string   $asset      Asset ID
     * @param callable $callback   Callback for asset
     * @since 1.0.0
     */
    public function setCallback($asset, callable $callback)
    {
        if ($asset && is_string($asset)) {
            $this->callbacks[$asset] = $callback;
        }

        return $this;
    }

    /**
     * Set less vars
     * 
     * @param  string $assetName  Name of LESS file
     * @param  array  $vars       Vars for LESS Render
     * @since 1.0.0
     */
    public function setLessVars($assetName, array $vars)
    {
        if ($assetName && is_string($assetName) && $vars) {
            $assetName = str_replace('/', '\\', $assetName);

            $this->collector->setGlobal("less-vars/{$assetName}", $vars);
        }

        return $this;
    }

    /**
     * Set global less vars
     * 
     * @param array  $vars          Vars for LESS Render
     * @param  string $assetName    Name of LESS file
     * @param string $restriction   Restriction : vars for app/admin mode
     * @since 1.0.0
     */
    public function setGlobalLessVars(array $vars, $assetName = false, $restriction = 'app')
    {
        if ($vars) {
            $globalVars = Kernel::getGlobalCache('asset/less/vars', []);
            $globalVars[] = [
                'vars'        => $vars,
                'asset-name'  => $assetName,
                'restriction' => $restriction,
            ];

            Kernel::setGlobalCache('asset/less/vars', $globalVars);
        }

        return $this;
    }
}
