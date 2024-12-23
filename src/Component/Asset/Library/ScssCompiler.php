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

use RuntimeException;
use ScssPhp\ScssPhp\Compiler;
use ScssPhp\ScssPhp\OutputStyle;
use ScssPhp\ScssPhp\ValueConverter;
use SplFileInfo;
use ZimbruCode\Component\Asset\Library\AssetCache;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Component/Asset/Library : Scss compiler
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.6
 */
class ScssCompiler
{
    // Paths
    public string $input  = '';
    public string $output = '';
    public string $cache  = '';

    // Options
    public array $vars  = [];    // SCSS vars
    public bool $minify = true;  // Compress CSS status
    public bool $dev    = false; // If DEV is true, cache sys. not used

    // Other
    protected $data = [
        'custom-dirs'      => [],
        'namespaces'       => [],
        'additional-files' => [],
    ];

    /**
     * Add directory for parsing
     *
     * @param string $path   Directory path
     * @return void
     * @since 1.0.0
     */
    public function addDir(string $path): void
    {
        if ($path) {
            $this->data['custom-dirs'][] = wp_normalize_path($path);
        }
    }

    /**
     * Add namespace
     *
     * @param string $namespace   Namespace value
     * @param string $path        Path value
     * @return void
     * @since 1.0.0
     */
    public function addNamespace(string $namespace, string $path): void
    {
        if ($namespace && $path) {
            $this->data['namespaces'][$namespace] = wp_normalize_path($path);
        }
    }

    /**
     * Add file for parsing
     *
     * @param string $path   File path
     * @return void
     * @since 1.0.0
     */
    public function addFile(string $path): void
    {
        if ($path) {
            $path = wp_normalize_path($path);
            $id   = md5($path);

            $this->data['additional-files'][$id] = $path;
        }
    }

    /**
     * Add var
     *
     * @param string $slug    Var slug
     * @param mixed  $value   Var value
     * @return void
     * @since 1.0.0
     */
    public function addVar(string $slug, $value = ''): void
    {
        if ($slug) {
            $this->vars[$slug] = $value;
        }
    }

    /**
     * Compile
     *
     * @throws RuntimeException
     * @return void
     * @since 1.3.6
     */
    public function compile(): void
    {
        // Objects
        $compiler   = new Compiler();
        $assetCache = new AssetCache;

        // Data preparing
        $cachePath  = wp_normalize_path($this->cache);  // Add cache path
        $inputPath  = wp_normalize_path($this->input);  // Add input path (SCSS File)
        $outputPath = wp_normalize_path($this->output); // Add output path (CSS File)

        if (empty($inputPath)) {
            throw new RuntimeException('ZE0034');
        }

        if (!Tools::isLocalPath($inputPath)) {
            throw new RuntimeException('ZE0035');
        }

        if (!file_exists($inputPath)) {
            throw new RuntimeException('ZE0036');
        }

        $assetCache->addSetting('check-asset-count', false);
        $assetCache->addPath($cachePath);

        $md5Vars         = md5(wp_json_encode($this->vars));
        $md5AF           = md5(wp_json_encode($this->data['additional-files']));
        $executeLocation = $assetCache->addExecuteLocation(__CLASS__);

        // Callback : Check the output file if it exists and the variables if different
        $assetCache->addCheckFunction(function (array $args) use ($outputPath, $md5Vars, $md5AF, $executeLocation): bool {
            if (!file_exists($outputPath)) {
                if (Kernel::dev()) {
                    $msg = "Asset - {$executeLocation}/Cache : Additional checking : {$outputPath} : output file not found";
                    Kernel::dev()->addWarningMessage($msg);
                }

                return true;
            }

            if (empty($args['md5-vars']) || $args['md5-vars'] != $md5Vars) {
                if (Kernel::dev()) {
                    $msg = "Asset - {$executeLocation}/Cache : Additional check: The list of vars is different";
                    Kernel::dev()->addWarningMessage($msg);
                }

                return true;
            }

            if (empty($args['md5-af']) || $args['md5-af'] != $md5AF) {
                if (Kernel::dev()) {
                    $msg = "Asset - {$executeLocation}/Cache : Additional checking : The list of additional files is different";
                    Kernel::dev()->addWarningMessage($msg);
                }

                return true;
            }

            return false;
        });

        // DEV
        if (Kernel::dev()) {
            Kernel::dev()->addLogMessage('Asset - ScssFilter', [
                'input-data'    => [
                    'input'  => $inputPath,
                    'cache'  => $cachePath,
                    'output' => $outputPath,
                    'minify' => $this->minify,
                    'dev'    => $this->dev,
                    'vars'   => $this->vars,
                ],
                'cache-content' => ($assetCache->has() ? $assetCache->get() : '?'),
            ]);
        }

        $runCompiler = false;
        $buildCache  = false;
        $removeCache = false;

        if (!$this->dev) {
            if ($assetCache->check()) {
                $runCompiler = true;
                $buildCache  = true;
            }
        } else {
            $runCompiler = true;
            $removeCache = true;
        }

        // Run compiler
        if ($runCompiler === true) {

            // Source map
            if (Kernel::dev()) {
                $fileInfo = function (string $path): array{
                    $info = new SplFileInfo($path);
                    $name = $info->getBasename('.' . $info->getExtension());

                    return [
                        'base-path' => $info->getPath(),
                        'file-path' => "{$info->getPath()}/{$name}.map",
                    ];
                };

                if (defined('ABSPATH')) {
                    $templateDir = wp_normalize_path(ABSPATH);

                    if (0 === strpos($outputPath, $templateDir)) {
                        $folder = str_replace($templateDir, '', $outputPath);

                        if ('.' != $folder) {
                            $outputURL = trim(get_site_url(null, $folder), '/');

                            $compiler->setSourceMap(Compiler::SOURCE_MAP_INLINE);
                            $compiler->setSourceMapOptions([
                                'sourceMapRootpath' => content_url('/'),
                                'sourceMapBasepath' => (defined('WP_CONTENT_DIR') ? WP_CONTENT_DIR : ''),
                                'sourceMapWriteTo'  => $fileInfo($outputPath)['file-path'],
                                'sourceMapURL'      => $fileInfo($outputURL)['file-path'],
                            ]);
                        }
                    }
                }
            }

            // Minify CSS
            if ($this->minify === true) {
                $compiler->setOutputStyle(OutputStyle::COMPRESSED);
            }

            // Vars
            $compiler->addVariables(array_map(function ($var) {
                if (is_bool($var)) {
                    return ValueConverter::fromPhp($var);
                } else {
                    return ValueConverter::parseValue($var);
                }
            }, $this->vars));

            // Preparing import directories
            $importDirs = Kernel::getGlobalCache('asset/scss/import-dirs', []);

            foreach ($importDirs as $path) {
                $compiler->setImportPaths($path);
            }

            if (!empty($this->data['custom-dirs'])) {
                foreach ($this->data['custom-dirs'] as $path) {
                    $compiler->setImportPaths($path);
                }
            }

            // Additional manipulations with import paths
            $compiler->addImportPath(function (string $path): string {

                // Namespace
                preg_match_all('/@(.*)\/(.*)/m', $path, $matches, PREG_SET_ORDER, 0);

                if (!empty($matches[0][1]) && !empty($matches[0][2])) {
                    $path = Kernel::getGlobalCache("asset/scss/namespace/{$matches[0][1]}");

                    if (!$path && isset($this->data['namespaces'][$matches[0][1]])) {
                        $path = $this->data['namespaces'][$matches[0][1]];
                    }

                    if ($path && is_string($path)) {
                        return $path . '/' . $matches[0][2];
                    }
                }

                // Additional file
                preg_match_all('/\[(.*)\]/m', urldecode($path), $matches, PREG_SET_ORDER, 0);

                if (!empty($matches[0][1]) && isset($this->data['additional-files'][$matches[0][1]])) {
                    return $this->data['additional-files'][$matches[0][1]];
                }

                return $path;
            });

            // Input content
            $content = file_get_contents($inputPath);

            // Add additional files
            if (!empty($this->data['additional-files'])) {
                $content .= "\n";

                foreach ($this->data['additional-files'] as $id => $path) {
                    $content .= "@import '[{$id}]';\n";
                }
            }

            $compileResult = $compiler->compileString($content, $inputPath);

            // Build cache
            if ($buildCache === true) {
                $files   = (array) $compileResult->getIncludedFiles();
                $files[] = $inputPath;

                $assetCache->addAssets($files);
                $assetCache->build([
                    'md5-vars' => $md5Vars,
                    'md5-af'   => $md5AF,
                ]);
            }

            // Output
            Tools::fWrite($outputPath, $compileResult->getCss());
        }

        // Remove cache
        if ($removeCache === true) {
            $assetCache->remove();
        }
    }
}
