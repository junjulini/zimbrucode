<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Asset\Library;

use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Asset\Library\AssetDataCollector;

/**
 * Class : Namespace handler
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class NamespaceHandler
{
    protected $namespace;
    protected $namespaceSymbol;
    protected $globalNamespace;

    public function __construct($namespace = '')
    {
        $this->globalNamespace = Kernel::getGlobal('core/component/asset/filter/namespace/global-namespace');
        $this->namespaceSymbol = Kernel::getGlobal('core/component/asset/filter/namespace/namespace-symbol');

        if ($namespace && is_string($namespace)) {
            $this->namespace = $namespace;
        } else {
            $this->namespace = $this->namespaceSymbol . $this->globalNamespace;
        }
    }

    /**
     * Clear namespace
     * 
     * @return string  Namespace
     * @since 1.0.0
     */
    public function name()
    {
        return str_replace($this->namespaceSymbol, '', $this->namespace);
    }

    /**
     * Check if word is namespace
     * 
     * @return boolean   False or True
     * @since 1.0.0
     */
    public function is()
    {
        return (substr($this->namespace, 0, 2) == $this->namespaceSymbol) ? true : false;
    }

    /**
     * Check if exist namespace
     * 
     * @return boolean   False or True
     * @since 1.0.0
     */
    public function has()
    {
        return (Kernel::getGlobalCache("asset/namespace/{$this->name()}")) ? true : false;
    }

    /**
     * Set namespace
     * 
     * @param  string             $namespace   Name of namespace
     * @param  AssetDataCollector $collector   Assets collector
     * @return NamespaceHandler object
     * @since 1.0.0
     */
    public function set($namespace = '', AssetDataCollector $collector)
    {
        if (empty($namespace)) {
            $namespace = Kernel::getGlobal('core/component/asset/filter/namespace/global-namespace');
        } elseif (is_string($namespace)) {
            if (strpos($namespace, '/') !== false) {
                throw new \InvalidArgumentException(esc_html__('Namespace with next symbol "/" not permitted.', 'zc'));
            }
        }

        $data = Kernel::getGlobalCache("asset/namespace/{$namespace}", []);
        $data[] = $collector;

        Kernel::setGlobalCache("asset/namespace/{$namespace}", $data);

        return $this;
    }

    /**
     * Get assets collector from namespace
     * 
     * @return AssetDataCollector object
     * @since 1.0.0
     */
    public function collector()
    {
        return Kernel::getGlobalCache("asset/namespace/{$this->name()}");
    }
}
