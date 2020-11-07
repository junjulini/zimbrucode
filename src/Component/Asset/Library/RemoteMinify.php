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

use MatthiasMullie\Minify\CSS as MinifyCSS;
use MatthiasMullie\Minify\JS as MinifyJS;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Remote minify
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class RemoteMinify
{
    protected $cssServer = 'https://cssminifier.com/raw';
    protected $jsServer  = 'https://javascript-minifier.com/raw';

    public function __construct()
    {
        if ($server = @Kernel::getGlobal('core/component/asset/remote-minify/css-server')) {
            $this->cssServer = $server;
        }

        if ($server = @Kernel::getGlobal('core/component/asset/remote-minify/js-server')) {
            $this->jsServer = $server;
        }
    }

    /**
     * Minify
     *
     * @param  string $type      Type of convertor
     * @param  string $content   Content of file
     * @return string            Minified content
     * @since 1.0.0
     */
    public function minify(string $type, string $content): string
    {
        if ($type && is_string($type) && in_array($type, ['css', 'js']) && $content && is_string($content)) {
            if ($type == 'css') {
                return $this->getRemoteContent($this->cssServer, $content, $type);
            } elseif ($type == 'js') {
                return $this->getRemoteContent($this->jsServer, $content, $type);
            }
        } else {
            throw new \InvalidArgumentException('Minify : error in arg.');
        }
    }

    /**
     * Get remote content
     *
     * @param  string $url       Remote server
     * @param  string $content   Local file content
     * @param  string $type      Type of convertor
     * @return string            Minified content
     * @since 1.0.0
     */
    protected function getRemoteContent(string $url, string $content, string $type): string
    {
        $ch = curl_init($url);

        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(['input' => $content]));
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 20);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $query = curl_exec($ch);
        curl_close($ch);

        // If connection error
        if ($query === false) {
            if ($type == 'js') {
                $minifier = new MinifyJS;
                $minifier->add($content);

                return $minifier->minify();
            } elseif ($type == 'css') {
                $minifier = new MinifyCSS;
                $minifier->add($content);

                return $minifier->minify();
            }
        }

        return $query;
    }
}
