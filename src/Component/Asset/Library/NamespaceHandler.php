<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Asset\Library;

use InvalidArgumentException;
use ZimbruCode\Component\Asset\Library\AssetDataCollector;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Component/Asset/Library : Namespace handler
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */
class NamespaceHandler
{
    protected $namespace;
    protected $namespaceSymbol;
    protected $globalNamespace;

    /**
     * Constructor
     *
     * @param string $namespace   Asset namespace
     * @since 1.0.0
     */
    public function __construct(string $namespace = '')
    {
        $this->globalNamespace = Kernel::getGlobal('core/component/asset/filter/namespace/global-namespace');
        $this->namespaceSymbol = Kernel::getGlobal('core/component/asset/filter/namespace/namespace-symbol');

        if ($namespace) {
            $this->namespace = $namespace;
        } else {
            $this->namespace = $this->namespaceSymbol . $this->globalNamespace;
        }
    }

    /**
     * Get namespace
     *
     * @return string   Namespace
     * @since 1.0.0
     */
    public function name(): string
    {
        return str_replace($this->namespaceSymbol, '', $this->namespace);
    }

    /**
     * Check if namespace is a word
     *
     * @return bool   Result of checking
     * @since 1.0.0
     */
    public function is(): bool
    {
        return (substr($this->namespace, 0, 2) == $this->namespaceSymbol);
    }

    /**
     * Check if namespace is registered
     *
     * @return bool   Result of checking
     * @since 1.0.0
     */
    public function has(): bool
    {
        return (Kernel::getGlobalCache("asset/namespace/{$this->name()}")) ? true : false;
    }

    /**
     * Add namespace
     *
     * @param  string                  $namespace   Namespace value
     * @param  AssetDataCollector|null $collector   Assets data collector object
     * @throws InvalidArgumentException
     * @return NamespaceHandler
     * @since 1.1.0
     */
    public function add(string $namespace = '', AssetDataCollector $collector = null): self
    {
        if (empty($namespace)) {
            $namespace = Kernel::getGlobal('core/component/asset/filter/namespace/global-namespace');
        } elseif (is_string($namespace)) {
            if (strpos($namespace, '/') !== false) {
                throw new InvalidArgumentException('ZE0033 - Namespace with the following "/" character is not allowed');
            }
        }

        $data   = (array) Kernel::getGlobalCache("asset/namespace/{$namespace}", []);
        $data[] = $collector;

        Kernel::addGlobalCache("asset/namespace/{$namespace}", $data);

        return $this;
    }

    /**
     * Get assets by current namespace
     *
     * @return array   Assets data
     * @since 1.1.0
     */
    public function collector(): array
    {
        return (array) Kernel::getGlobalCache("asset/namespace/{$this->name()}", []);
    }
}
