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

use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Css convertor
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
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
     * @return void           This function does not return a value
     * @since 1.0.0
     */
    public function addAsset($asset)
    {
        if (!$asset) {
            throw new \InvalidArgumentException(esc_html__('Asset is empty.', 'zc'));
        }

        if (!file_exists($asset)) {
            throw new \RuntimeException($asset . esc_html__(' - asset don\'t exist.', 'zc'));
        }

        $this->asset = $asset;
    }

    /**
     * Add output
     * 
     * @param string $output   Output file path
     * @return void            This function does not return a value
     * @since 1.0.0
     */
    public function addOutput($output)
    {
        if (!$output) {
            throw new \InvalidArgumentException(esc_html__('Output is empty.', 'zc'));
        }

        $this->output = $output;
    }

    /**
     * Add asset content
     * 
     * @param string $content   Content of asset
     * @return void             This function does not return a value
     * @since 1.0.0
     */
    public function add($content)
    {
        if (!$content) {
            throw new \InvalidArgumentException(esc_html__('Content is empty', 'zc'));
        }

        $this->content = $content;
    }

    /**
     * Get asset content
     * 
     * @return string   Asset content
     * @since 1.0.0
     */
    protected function get()
    {
        if (!$this->asset) {
            throw new \RuntimeException(esc_html__('Asset is empty.', 'zc'));
        }

        return ($this->content) ? $this->content : file_get_contents($this->asset);
    }

    /**
     * Convert paths to relative paths
     * 
     * @return string  New content
     * @since 1.0.0
     */
    public function convertPathToRelative()
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

                if (Tools::isLocalURL($clean) || Tools::isLocalPath($clean)) {
                    $data['search'][]  = $clean;
                    $absPath           = Tools::getPath($clean);
                    $data['replace'][] = Tools::getRelativePath($this->output, $absPath);
                } elseif (strpos($clean, 'data:') === false && !Tools::isURL($clean)) {
                    if (strpos($clean, '/')) {
                        $data['search'][]  = $clean;
                        $absPath           = dirname($this->asset) . '/' . $clean;
                        $data['replace'][] = Tools::getRelativePath($this->output, $absPath);
                    }
                }
            }

            return str_replace($data['search'], $data['replace'], $content);
        } else {
            return $content;
        }
    }

    /**
     * Covert paths to base64 encoded data
     * 
     * @return array   New content
     * @since 1.0.0
     */
    public function convertPathToData()
    {
        $content = $this->get();
        $config  = Kernel::getGlobal('core/component/asset/css-convertor');

        preg_match_all("/url\((.*?)\)/is", $content, $matches);
        if (!empty($matches[1])) {
            $data = [
                'search'  => [],
                'replace' => [],
                'cache'   => [],
            ];

            foreach ($matches[1] as $item) {
                $clean = str_replace(['"', "'"], '', $item);

                if (Tools::isLocalURL($clean) || Tools::isLocalPath($clean)) {
                    $item      = new \SplFileInfo(Tools::getPath($clean));
                    $importExt = $config['import-ext'];

                    if (isset($importExt[$item->getExtension()]) && file_exists($item->getPathname())) {
                        $max_size = $config['import-size'] * 1024;

                        if ($item->getSize() <= $max_size) {
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
