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
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Component/Asset/Library : Css convertor
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */
class CssConvertor
{
    protected $asset;
    protected $content;
    protected $output;

    /**
     * Add asset
     *
     * @param string $asset   Asset path
     * @throws InvalidArgumentException
     * @throws RuntimeException
     * @return void
     * @since 1.1.0
     */
    public function addAsset(string $asset): void
    {
        if (!$asset) {
            throw new InvalidArgumentException('ZE0023');
        }

        if (!file_exists($asset)) {
            throw new RuntimeException("ZE0024 - The asset does not exist : {$asset}");
        }

        $this->asset = $asset;
    }

    /**
     * Add output file path
     *
     * @param string $output   Output file path
     * @throws InvalidArgumentException
     * @return void
     * @since 1.1.0
     */
    public function addOutput(string $output): void
    {
        if (!$output) {
            throw new InvalidArgumentException('ZE0025');
        }

        $this->output = $output;
    }

    /**
     * Add asset content
     *
     * @param string $content   Content of asset
     * @throws InvalidArgumentException
     * @return void
     * @since 1.1.0
     */
    public function add(string $content): void
    {
        if (!$content) {
            throw new InvalidArgumentException('ZE0026');
        }

        $this->content = $content;
    }

    /**
     * Get asset content
     *
     * @throws RuntimeException
     * @return string   Asset content
     * @since 1.1.0
     */
    protected function get(): string
    {
        if (!$this->asset) {
            throw new RuntimeException('ZE0027');
        }

        return $this->content ?: file_get_contents($this->asset);
    }

    /**
     * Converting paths to relative paths or URL
     *
     * @param bool $relativeMode   Relative mode
     * @return string              Content
     * @since 1.1.0
     */
    public function convertPathToRelativeOrURL(bool $relativeMode = true): string
    {
        $content = $this->get();

        preg_match_all("/url\((.*?)\)/is", $content, $matches);

        if (!empty($matches[1])) {
            $data = [
                'search'  => [],
                'replace' => [],
            ];

            foreach ($matches[1] as $item) {
                $clean = str_replace(['"', "'"], '', $item);

                if (Tools::isLocalURL($clean)) {
                    continue;
                } elseif (Tools::isLocalPath($clean)) {
                    continue;
                } elseif (strpos($clean, 'data:') === false && !Tools::isURL($clean)) {
                    $path = realpath(dirname($this->asset) . '/' . $clean);

                    if ($path) {
                        $data['search'][] = $clean;

                        if ($relativeMode === true) {
                            $data['replace'][] = Tools::getRelativePath($this->output, $path);
                        } else {
                            $data['replace'][] = Tools::getURL($path);
                        }
                    }
                }
            }

            return str_replace($data['search'], $data['replace'], $content);
        } else {
            return $content;
        }
    }

    /**
     * Converting paths to base64 encoded data
     *
     * @return array   New content
     * @since 1.1.0
     */
    public function convertPathToData(): array
    {
        $content = $this->get();
        $config  = Kernel::getGlobal('core/component/asset/css-convertor');

        preg_match_all("/url\((.*?)\)/is", $content, $matches);

        if (!empty($matches[1]) && is_array($config)) {
            $data = [
                'search'  => [],
                'replace' => [],
                'cache'   => [],
            ];

            foreach ($matches[1] as $item) {
                $clean = str_replace(['"', "'"], '', $item);

                if (Tools::isLocalURL($clean) || Tools::isLocalPath($clean)) {
                    $item      = new SplFileInfo(Tools::getPath($clean));
                    $importExt = $config['import-ext'];

                    if (isset($importExt[$item->getExtension()]) && file_exists($item->getPathname())) {
                        $maxSize = $config['import-size'] * 1024;

                        if ($item->getSize() <= $maxSize) {
                            $importContent     = base64_encode(file_get_contents($item->getPathname()));
                            $data['search'][]  = $clean;
                            $data['replace'][] = $importExt[$item->getExtension()] . ';base64,' . $importContent;
                            $data['cache'][]   = [
                                'path' => $item->getPathname(),
                                'size' => $item->getSize(),
                            ];
                        }
                    }
                }
            }

            return [
                'content' => str_replace($data['search'], $data['replace'], $content),
                'cache'   => $data['cache'],
            ];
        } else {
            return [
                'content' => $content,
                'cache'   => [],
            ];
        }
    }
}
