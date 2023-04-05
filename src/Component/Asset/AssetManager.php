<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Asset;

use InvalidArgumentException;
use ZimbruCode\Component\Asset\Filter\Combine;
use ZimbruCode\Component\Asset\Library\AssetData;
use ZimbruCode\Component\Asset\Library\AssetDataCollector;
use ZimbruCode\Component\Asset\Library\LocationDetector;
use ZimbruCode\Component\Asset\Library\NamespaceHandler;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Component/Asset : Asset manager
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.2.0
 */
class AssetManager
{
    protected AssetDataCollector $collector;
    protected bool $autoFilter;
    protected array $callbacks = [];
    protected NamespaceHandler $nh;

    /**
     * Constructor
     * 
     * @param bool   $autoFilter       Auto filter status
     * @param string $customLocation   Custom location
     * @since 1.1.0
     */
    public function __construct(bool $autoFilter = true, string $customLocation = '')
    {
        $this->autoFilter($autoFilter);

        $customLocation = $customLocation ?: ((!empty(debug_backtrace()[0]['file'])) ? debug_backtrace()[0]['file'] : __FILE__);

        $location        = new LocationDetector($customLocation);
        $this->collector = new AssetDataCollector($location);

        $this->nh = new NamespaceHandler;
    }

    /**
     * Disable or enable automatic filter
     *
     * @param bool|null $autoFilter   Auto filter status : true/false
     * @return bool                   Auto filter status
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
     * Get an asset by name
     *
     * @param string $asset   Asset name
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
     * @param mixed         $asset      Asset
     * @param callable|null $callback   Callback function
     * @return AssetManager
     * @since 1.0.0
     */
    public function add($asset, callable $callback = null): self
    {
        if ($asset) {
            $this->collector->add($asset, $this->autoFilter(), $callback);
        }

        return $this;
    }

    /**
     * Add assets
     *
     * @param array $assets   Assets array
     * @return AssetManager
     * @since 1.0.0
     */
    public function addAssets(array $assets): self
    {
        if ($assets) {
            foreach ($assets as $asset) {
                if (is_array($asset) && !empty($asset['raw']) && is_string($asset['raw'])) {
                    $callback = $this->callbacks[$asset['raw']] ?? null;
                } else {
                    $callback = $this->callbacks[$asset] ?? null;
                }

                $this->collector->add($asset, $this->autoFilter(), $callback);
            }
        }

        return $this;
    }

    /**
     * Check if an asset exists
     *
     * @param string $asset   Asset name
     * @return bool           Result of checking
     * @since 1.0.0
     */
    public function has(string $asset): bool
    {
        return $this->collector->has($asset);
    }

    /**
     * Remove asset
     *
     * @param string $asset   Asset name
     * @return AssetManager
     * @since 1.0.0
     */
    public function remove(string $asset): self
    {
        $this->collector->remove($asset);
        return $this;
    }

    /**
     * Remove all assets
     *
     * @return AssetManager
     * @since 1.0.0
     */
    public function flush(): self
    {
        $this->collector->flush();
        return $this;
    }

    /**
     * Run filter
     *
     * @param mixed ...$args
     * @return AssetManager
     * @since 1.0.0
     */
    public function filter(...$args): self
    {
        $this->collector->filter(...$args);
        return $this;
    }

    /**
     * Combine all assets into one file
     *
     * @param string $name   Output file name
     * @return AssetManager
     * @since 1.0.0
     */
    public function combine(string $name): self
    {
        if ($this->collector->get() && $name && !Kernel::dev()) {
            $callback = function (AssetDataCollector $collector, array $data) use ($name): array {
                $data['settings']['js']['output-name']  = $name;
                $data['settings']['css']['output-name'] = $name;

                return $data;
            };

            $this->filter(new Combine, null, $callback);
        }

        return $this;
    }

    /**
     * Dump assets data
     *
     * @return AssetManager
     * @since 1.0.0
     */
    public function dump(): self
    {
        Tools::dump($this->collector);
        return $this;
    }

    /**
     * Enroll assets
     *
     * @param string $logTitle   Log title
     * @return AssetManager
     * @since 1.1.0
     */
    public function enroll(string $logTitle = ''): self
    {
        if (Kernel::dev()) {
            Kernel::dev()->addLogMessage("Asset : {$logTitle}", $this->collector->get());
        }

        foreach ($this->collector->get() as $asset) {
            if ($asset->type() == 'css') {
                wp_enqueue_style($asset->name(), $asset->url(), $asset->deps(), $asset->version(), $asset->media());
            } elseif ($asset->type() == 'js') {
                wp_enqueue_script($asset->name(), $asset->url(), $asset->deps(), $asset->version(), $asset->footer());
            } elseif ($asset->type() == 'registered') {
                wp_enqueue_script($asset->name());
            }
        }

        return $this;
    }

    /**
     * Enroll assets as namespace
     *
     * @param string $namespace   Namespace
     * @return AssetManager
     * @since 1.0.0
     */
    public function enrollAsNamespace(string $namespace = ''): self
    {
        $this->nh->add($namespace, $this->collector);
        return $this;
    }

    /**
     * Localizes a registered script with data for a JavaScript variable.
     *
     * @param string $handle   The registered script handle you are attaching the data for
     * @param string $name     The name of the variable which will contain the data
     * @param array  $data     The data itself
     * @throws InvalidArgumentException
     * @return AssetManager
     * @since 1.1.0
     */
    public function localize(string $handle, string $name, array $data = []): self
    {
        if ($handle && $name) {
            foreach ($this->collector->get() as $asset) {
                if ($handle == $asset->url() || $handle == $asset->raw() || strpos($asset->name(), $handle) !== false) {
                    wp_localize_script($asset->name(), $name, $data);
                    return $this;
                }
            }

            throw new InvalidArgumentException("ZE0004 - Handle not found : {$handle}");
        }

        return $this;
    }

    /**
     * Adds extra code to a registered script
     *
     * @param string $handle     Name of the script to add the inline script to
     * @param string $data       String containing the JavaScript to be added
     * @param string $position   Whether to add the inline script before the handle or after
     * @throws InvalidArgumentException
     * @return AssetManager
     * @since 1.1.0
     */
    public function addInlineScript(string $handle, string $data, string $position = 'after'): self
    {
        if ($handle) {
            foreach ($this->collector->get() as $asset) {
                if ($handle == $asset->url() || $handle == $asset->raw() || strpos($asset->name(), $handle) !== false) {
                    wp_add_inline_script($asset->name(), $data, $position);
                    return $this;
                }
            }

            throw new InvalidArgumentException("ZE0005 - Handle not found : {$handle}");
        }

        return $this;
    }

    /**
     * Add extra CSS styles to a registered stylesheet
     *
     * @param string $handle   Name of the stylesheet to add the extra styles to
     * @param string $data     String containing the CSS styles to be added
     * @throws InvalidArgumentException
     * @return AssetManager
     * @since 1.1.0
     */
    public function addInlineStyle(string $handle, string $data): self
    {
        if ($handle) {
            foreach ($this->collector->get() as $asset) {
                if ($handle == $asset->url() || $handle == $asset->raw() || strpos($asset->name(), $handle) !== false) {
                    wp_add_inline_style($asset->name(), $data);
                    return $this;
                }
            }

            throw new InvalidArgumentException("ZE0006 - Handle not found : {$handle}");
        }

        return $this;
    }

    /**
     * Add callback
     *
     * @param string   $asset      Asset ID
     * @param callable $callback   Callback function
     * @return AssetManager
     * @since 1.0.0
     */
    public function addCallback(string $asset, callable $callback): self
    {
        if ($asset) {
            $this->callbacks[$asset] = $callback;
        }

        return $this;
    }

    /**
     * Add SCSS vars
     *
     * @param string $assetName   SCSS file name
     * @param array  $vars        Vars for SCSS Render
     * @return AssetManager
     * @since 1.0.0
     */
    public function addScssVars(string $assetName, array $vars): self
    {
        if ($assetName && $vars) {
            $assetName = str_replace('/', '\\', $assetName);

            $this->collector->addGlobal("scss-vars/{$assetName}", $vars);
        }

        return $this;
    }

    /**
     * Add global SCSS vars
     *
     * @param array  $vars          Vars for SCSS Render
     * @param string $assetName     SCSS file name
     * @param string $restriction   Restriction : app or admin mode
     * @return AssetManager
     * @since 1.1.0
     */
    public function addGlobalScssVars(array $vars, string $assetName = '', string $restriction = 'app'): self
    {
        if ($vars) {
            $globalVars   = (array) Kernel::getGlobalCache('asset/scss/vars', []);
            $globalVars[] = [
                'vars'        => $vars,
                'asset-name'  => $assetName,
                'restriction' => $restriction,
            ];

            Kernel::addGlobalCache('asset/scss/vars', $globalVars);
        }

        return $this;
    }

    /**
     * Add SCSS namespace
     *
     * @param string $namespace   Namespace value
     * @param string $location    Path
     * @return AssetManager
     * @since 1.0.0
     */
    public function addScssNamespace(string $namespace, string $location): self
    {
        if ($namespace && $location) {
            Kernel::addGlobalCache("asset/scss/namespace/{$namespace}", $location);
        }

        return $this;
    }
}
