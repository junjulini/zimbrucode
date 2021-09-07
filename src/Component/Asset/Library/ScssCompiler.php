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

use ScssPhp\ScssPhp\Compiler;
use ScssPhp\ScssPhp\OutputStyle;
use ScssPhp\ScssPhp\ValueConverter;
use ZimbruCode\Component\Asset\Library\AssetCache;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Scss compiler
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class ScssCompiler
{
    // Paths
    public $input  = '';
    public $output = '';
    public $cache  = '';

    // Options
    public $vars   = [];    // Vars for SCSS
    public $minify = true;  // Compress CSS : true/false
    public $dev    = false; // When DEV is true, cache sys. not used

    // Other
    protected $data = [
        'custom-dirs'      => [],
        'namespaces'       => [],
        'additional-files' => [],
        'functions'        => [],
    ];

    /**
     * Add import directory
     *
     * @param string $path   Directory path
     * @return void          This function does not return a value
     * @since 1.0.0
     */
    public function addDir(string $path): void
    {
        if ($path) {
            $this->data['custom-dirs'][] = wp_normalize_path($path);
        }
    }

    public function addNamespace(string $namespace, string $path): void
    {
        if ($namespace && $path) {
            $this->data['namespaces'][$namespace] = wp_normalize_path($path);
        }
    }

    /**
     * Add file for parsing
     *
     * @param string $path   SCSS file
     * @return void          This function does not return a value
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
     * @param string  $slug    Var slug
     * @param mix     $value   Var
     * @return void            This function does not return a value
     * @since 1.0.0
     */
    public function addVar(string $slug, $value = ''): void
    {
        if ($slug) {
            $this->vars[$slug] = $value;
        }
    }

    /**
     * Add function
     *
     * @param string   $name     Name of function
     * @param callable $method   Function
     * @return void              This function does not return a value
     * @since 1.0.0
     */
    public function addFunction(string $name, callable $method): void
    {
        if ($name) {
            $this->data['functions'][$name] = $method;
        }
    }

    /**
     * Compile
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function compile(): void
    {
        // Objects
        $compiler   = new Compiler();
        $assetCache = new AssetCache;

        // Data preparing
        $cachePath  = wp_normalize_path($this->cache);  // Set cache path
        $inputPath  = wp_normalize_path($this->input);  // Set input path (SCSS File)
        $outputPath = wp_normalize_path($this->output); // Set output path (CSS File)

        if (empty($inputPath)) {
            throw new \RuntimeException("{$inputPath} - input path is empty.");
        }

        if (!Tools::isLocalPath($inputPath)) {
            throw new \RuntimeException("{$inputPath} - input file is not local.");
        }

        if (!file_exists($inputPath)) {
            throw new \RuntimeException("{$inputPath} - input file not found.");
        }

        $assetCache->addSetting('check-asset-count', false);
        $assetCache->addPath($cachePath);

        $md5Vars         = md5(wp_json_encode($this->vars));
        $md5AF           = md5(wp_json_encode($this->data['additional-files']));
        $executeLocation = $assetCache->addExecuteLocation(__CLASS__);

        // Callback : Check output file if exist and vars if is different
        $assetCache->addCheckFunction(function (array $args) use ($outputPath, $md5Vars, $md5AF, $executeLocation): bool {
            if (!file_exists($outputPath)) {
                if (Kernel::dev()) {
                    $msg = "Asset - {$executeLocation}/Cache : Additional checking : {$outputPath} : output file not found.";
                    Kernel::dev()->addWarningMessage($msg);
                }

                return true;
            }

            if (empty($args['md5-vars']) || $args['md5-vars'] != $md5Vars) {
                if (Kernel::dev()) {
                    $msg = "Asset - {$executeLocation}/Cache : Additional checking : The list of vars is different.";
                    Kernel::dev()->addWarningMessage($msg);
                }

                return true;
            }

            if (empty($args['md5-af']) || $args['md5-af'] != $md5AF) {
                if (Kernel::dev()) {
                    $msg = "Asset - {$executeLocation}/Cache : Additional checking : The list of additional files is different.";
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
                    $info = new \SplFileInfo($path);
                    $name = $info->getBasename('.' . $info->getExtension());

                    return [
                        'base-path' => $info->getPath(),
                        'file-path' => "{$info->getPath()}/{$name}.map",
                    ];
                };

                $templateDir = wp_normalize_path(ABSPATH);

                if (0 === strpos($outputPath, $templateDir)) {
                    $folder = str_replace($templateDir, '', $outputPath);

                    if ('.' != $folder) {
                        $outputURL = trim(get_site_url(null, $folder), '/');

                        $compiler->setSourceMap(Compiler::SOURCE_MAP_INLINE);
                        $compiler->setSourceMapOptions([
                            'sourceMapRootpath' => content_url('/'),
                            'sourceMapBasepath' => WP_CONTENT_DIR,
                            'sourceMapWriteTo'  => $fileInfo($outputPath)['file-path'],
                            'sourceMapURL'      => $fileInfo($outputURL)['file-path'],
                        ]);
                    }
                }
            }

            // Minify CSS
            if ($this->minify === true) {
                $compiler->setOutputStyle(OutputStyle::COMPRESSED);
            }

            // Vars
            $compiler->addVariables(array_map(function ($var) {
                return ValueConverter::fromPhp($var);
            }, $this->vars));

            // Preparing import dirs
            $importDirs = Kernel::getGlobalCache('asset/scss/import-dirs', []);

            foreach ($importDirs as $path) {
                $compiler->setImportPaths($path);
            }

            if (!empty($this->data['custom-dirs'])) {
                foreach ($this->data['custom-dirs'] as $path) {
                    $compiler->setImportPaths($path);
                }
            }

            // Register functions
            $defaultFunctions = (new ScssDefaultFunctions)->get();
            if ($defaultFunctions && is_array($defaultFunctions)) {
                foreach ($defaultFunctions as $name => $method) {
                    $compiler->registerFunction($name, $method, '');
                }
            }

            $globalFunctions = Kernel::getGlobalCache('asset/scss/functions');
            if ($globalFunctions && is_array($globalFunctions)) {
                foreach ($globalFunctions as $name => $method) {
                    $compiler->registerFunction($name, $method, '');
                }
            }

            if (!empty($this->data['functions'])) {
                foreach ($this->data['functions'] as $name => $method) {
                    $compiler->registerFunction($name, $method, '');
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
                preg_match_all('/\[(.*)\]/m', $path, $matches, PREG_SET_ORDER, 0);

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
            $assetCache->remove($cachePath);
        }
    }
}
