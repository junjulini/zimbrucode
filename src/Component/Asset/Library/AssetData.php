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
use RuntimeException;
use SplFileInfo;
use ZimbruCode\Component\Asset\Library\LocationDetector;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Component/Asset/Library : Asset data
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
class AssetData
{
    protected array $data;
    protected readonly string $raw;
    protected readonly SplFileInfo $info;
    protected readonly LocationDetector $location;

    /**
     * Constructor
     *
     * @since 1.3.0
     */
    public function __construct($asset, LocationDetector $location)
    {
        if ($asset) {
            $this->data = Kernel::getGlobal('core/component/asset/default-data');

            if (is_string($asset)) {
                $this->raw = $asset;
            } elseif (is_array($asset) && !empty($asset['raw']) && is_string($asset['raw'])) {
                $this->raw = $asset['raw'];

                if (isset($asset['type'])) {
                    $this->type($asset['type']);
                }

                if (isset($asset['name'])) {
                    $this->name($asset['name']);
                }

                if (isset($asset['url'])) {
                    $this->url($asset['url']);
                }

                if (isset($asset['deps'])) {
                    $this->deps($asset['deps']);
                }

                if (isset($asset['version'])) {
                    $this->version($asset['version']);
                }

                if (isset($asset['media'])) {
                    $this->media($asset['media']);
                }

                if (isset($asset['footer'])) {
                    $this->footer($asset['footer']);
                }
            } else {
                throw new InvalidArgumentException('ZE0018');
            }
        }

        $this->info     = new SplFileInfo($this->raw());
        $this->location = $location;
    }

    /**
     * Asset type
     *
     * @param string $type    Asset type
     * @param bool   $check   Check if the value exists before setting the asset type
     * @return mixed
     * @since 1.3.0
     */
    public function type(string $type = '', bool $check = false): mixed
    {
        if ($type) {
            if ($check === true) {
                if (empty($this->data['type'])) {
                    $this->data['type'] = $type;
                }

                return $this;
            }

            $this->data['type'] = $type;
            return $this;
        }

        return $this->data['type'];
    }

    /**
     * Asset name
     *
     * @param string $name    Asset name
     * @param bool   $check   Check if the value exists before setting the asset name
     * @return mixed
     * @since 1.3.0
     */
    public function name(string $name = '', bool $check = false): mixed
    {
        if ($name) {
            if ($check === true) {
                if (empty($this->data['name'])) {
                    $this->data['name'] = $name;
                }

                return $this;
            }

            $this->data['name'] = $name;
            return $this;
        }

        return $this->data['name'];
    }

    /**
     * Asset URL
     *
     * @param string $url     Asset URL
     * @param bool   $check   Check if the value exists before setting the asset name
     * @return mixed
     * @since 1.3.0
     */
    public function url(string $url = '', bool $check = false): mixed
    {
        if ($url) {
            if ($check === true) {
                if (empty($this->data['url'])) {
                    $this->data['url'] = $url;
                }

                return $this;
            }

            $this->data['url'] = $url;
            return $this;
        }

        return $this->data['url'];
    }

    /**
     * Asset deps
     *
     * @param array $deps    Asset deps
     * @param bool  $check   Check if the value exists before setting the asset deps
     * @return mixed
     * @since 1.3.0
     */
    public function deps(array $deps = [], bool $check = false): mixed
    {
        if ($deps) {
            if ($check === true) {
                if (empty($this->data['deps'])) {
                    $this->data['deps'] = $deps;
                }

                return $this;
            }

            $this->data['deps'] = $deps;
            return $this;
        }

        return $this->data['deps'];
    }

    /**
     * Asset version
     *
     * @param string  $version   Asset version
     * @param bool    $check     Check if the value exists before setting the asset version
     * @return mixed
     * @since 1.3.0
     */
    public function version(string $version = '', bool $check = false): mixed
    {
        if ($version) {
            if ($check === true) {
                if (empty($this->data['version'])) {
                    $this->data['version'] = $version;
                }

                return $this;
            }

            $this->data['version'] = $version;
            return $this;
        }

        return $this->data['version'];
    }

    /**
     * Asset dynamic version
     *
     * @return string   Dynamic version
     * @since 1.1.0
     */
    public function dynamicVersion(): string
    {
        $version = (string) Kernel::getGlobal('app/version');
        $hash    = hash_file('adler32', $this->getPath());

        if ($hash) {
            $version = "{$version}.{$hash}";
        }

        return $version;
    }

    /**
     * Asset media status
     *
     * @param string|null $media   Asset media status
     * @param bool        $check   Check if the value exists before setting the asset media
     * @return mixed
     * @since 1.3.0
     */
    public function media(string $media = null, bool $check = false): mixed
    {
        if ($media !== null) {
            if ($check === true) {
                if (empty($this->data['media'])) {
                    $this->data['media'] = $media;
                }

                return $this;
            }

            $this->data['media'] = $media;
            return $this;
        }

        return $this->data['media'];
    }

    /**
     * Asset footer status ( If script set for footer )
     *
     * @param bool|null $footer   Asset footer status
     * @param bool      $check    Check if the value exists before setting the asset footer
     * @return mixed
     * @since 1.3.0
     */
    public function footer(bool $footer = null, bool $check = false): mixed
    {
        if ($footer !== null) {
            if ($check === true) {
                if (isset($this->data['footer']) && $this->data['footer'] === '') {
                    $this->data['footer'] = $footer;
                }

                return $this;
            }

            $this->data['footer'] = $footer;
            return $this;
        }

        return $this->data['footer'];
    }

    /**
     * Clear all asset data
     *
     * @return AssetData
     * @since 1.0.0
     */
    public function flush(): self
    {
        $this->data = Kernel::getGlobal('core/component/asset/default-data');
        return $this;
    }

    /**
     * Get raw asset data
     *
     * @return string   Raw asset data
     * @since 1.0.0
     */
    public function raw(): string
    {
        return $this->raw;
    }

    /**
     * Additional information about the asset
     *
     * @return SplFileInfo
     * @since 1.0.0
     */
    public function info(): SplFileInfo
    {
        return $this->info;
    }

    /**
     * Check if the asset is a file
     *
     * @return bool   Result of checking
     * @since 1.0.0
     */
    public function isFile(): bool
    {
        return ($this->info->getExtension()) ? true : false;
    }

    /**
     * Asset file type
     *
     * @return mixed
     * @since 1.0.0
     */
    public function fileType()
    {
        return $this->type() ?: $this->info()->getExtension();
    }

    /**
     * Get the path of the asset
     *
     * @throws RuntimeException
     * @return string   Asset path
     * @since 1.3.0
     */
    public function getPath(): string
    {
        if ($this->isFile()) {
            return $this->location->get($this->raw());
        } else {
            throw new RuntimeException("ZE0019 - The asset is not file : {$this->raw()}");
        }
    }

    /**
     * Get the URL of the asset
     *
     * @return string   Asset URL
     * @since 1.0.0
     */
    public function getURL(): string
    {
        return Tools::getURL($this->getPath());
    }

    /**
     * Add asset data
     *
     * @param array $data   Asset data
     * @return AssetData
     * @since 1.0.0
     */
    public function addData(array $data): self
    {
        $this->data = $data;
        return $this;
    }

    /**
     * Get asset data
     *
     * @return array   Asset data
     * @since 1.0.0
     */
    public function getData(): array
    {
        return $this->data;
    }

    /**
     * Add additional asset data
     *
     * @param string $id     Identifier
     * @param array  $data   Additional data
     * @return AssetData
     * @since 1.0.0
     */
    public function addAdditionalData(string $id, array $data): self
    {
        if ($id && !empty($data)) {
            $this->data['additional-data'][$id] = $data;
        }

        return $this;
    }

    /**
     * Get additional asset data
     *
     * @param string $id   Identifier
     * @return array       Additional asset data
     * @since 1.0.0
     */
    public function getAdditionalData(string $id): array
    {
        return $this->data['additional-data'][$id] ?? [];
    }

    /**
     * Generate asset name
     *
     * @param bool $withCoreSlug   With next prefix : zc
     * @return string              Name of the generated asset
     * @since 1.1.0
     */
    public function generateName(bool $withCoreSlug = true): string
    {
        $fileURL = $this->getURL();
        $rootURL = Kernel::service('app')->getURL();

        if (0 === strpos($fileURL, $rootURL)) {
            $rootURL = str_replace('/app', '', $rootURL);
            $rootURL = rtrim($rootURL, '/');
            $output  = str_replace($rootURL . '/', '', $fileURL);
            $output  = strtolower($output);

            return ($withCoreSlug) ? Kernel::getGlobal('core/slug') . '/' . $output : $output;
        } else {
            $rootURL = Kernel::service('app')->getRootURL();

            if (0 === strpos($fileURL, $rootURL) && 0 !== strpos($fileURL, Kernel::service('app')->getChildURL() ?: '[zc]')) {
                $fwSP = Kernel::getGlobal('core/component/asset/fw-search-point');
                $fwSP = str_replace('/', '\/', $fwSP);

                preg_match("/{$fwSP}(.*)/i", $fileURL, $output);

                $output = strtolower($output[1]);

                return ($withCoreSlug) ? Kernel::getGlobal('core/slug') . '/' . $output : $output;
            } else {
                $rootURL = get_site_url();

                if (0 === strpos($fileURL, $rootURL)) {
                    $rootURL = str_replace('/app', '', $rootURL);
                    $rootURL = rtrim($rootURL, '/');
                    $output  = str_replace($rootURL . '/', '', $fileURL);
                    $output  = strtolower($output);

                    return ($withCoreSlug) ? Kernel::getGlobal('core/slug') . '/' . $output : $output;
                } else {
                    return basename($fileURL);
                }
            }
        }
    }
}
