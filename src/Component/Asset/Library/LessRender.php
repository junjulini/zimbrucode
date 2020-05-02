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

use ZimbruCode\Component\Asset\Library\AssetCache;
use ZimbruCode\Component\Asset\Library\Less\Parser;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Less render
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class LessRender
{
    // Parser object
    public $parser;

    // AssetCache object
    public $assetCache;

    // Paths
    public $input  = '';
    public $output = '';
    public $cache  = '';

    // Options
    public $vars     = [];    // Vars for LESS
    public $minify   = true;  // Compress CSS : true/false
    public $dev      = false; // When DEV is true, cache sys. not used
    public $inputURL = '';    // URL of input LESS file ( used for URL in CSS )

    // Other
    protected $data = [];

    public function __construct()
    {
        $this->assetCache = new AssetCache;
    }

    /**
     * Add import directory
     * 
     * @param string $path   Directory path
     * @param string $url    Directory url
     * @return void          This function does not return a value
     * @since 1.0.0
     */
    public function addDir($path, $url = '/')
    {
        if ($path && is_string($path) && $url && is_string($url)) {
            $this->data['custom-dirs'][] = [
                'path' => wp_normalize_path($path),
                'url'  => $url,
            ];
        }
    }

    /**
     * Set file for parsing
     * 
     * @param string $path   Less file
     * @return void          This function does not return a value
     * @since 1.0.0
     */
    public function setFile($path)
    {
        if ($path && is_string($path)) {
            $path = wp_normalize_path($path);
            if (!empty($this->data['parsed-files'][$path])) {
                return;
            }

            $this->data['parsed-files'][$path] = $path;
        }
    }

    /**
     * Set function
     * 
     * @param string   $name     Name of function
     * @param callable $method   Function
     * @return void              This function does not return a value
     * @since 1.0.0
     */
    public function setFunction($name, callable $method)
    {
        if ($name && is_string($name)) {
            Kernel::setGlobalCache("asset/less/functions/{$name}", $method);
        }
    }

    /**
     * Set Less core vars
     * 
     * @param string  $slug    Var slug
     * @param mix     $value   Vars for less
     * @return void            This function does not return a value
     * @since 1.0.0
     */
    public function setVar($slug, $value = '')
    {
        if ($slug && is_string($slug)) {
            $this->vars[$slug] = $value;
        }
    }

    /**
     * Set functions
     * 
     * @param LessFunctionsInterface $object   Object with less functions
     * @return void                            This function does not return a value
     * @since 1.0.0
     */
    public function setFunctions(LessFunctionsInterface $object)
    {
        $methods = $object->get();

        foreach ($methods as $name => $method) {
            $this->setFunction($name, $method);
        }
    }

    /**
     * Parse files
     * 
     * @param  string $input   Input path
     * @param  string $url     Input url
     * @return void            This function does not return a value
     * @since 1.0.0
     */
    protected function parseFiles($input, $url)
    {
        $this->parser->parseFile($input, $url);

        if (!empty($this->data['parsed-files'])) {
            foreach ($this->data['parsed-files'] as $input) {
                $uriRoot = Tools::getURL(dirname($input));
                $this->parser->parseFile($input, $uriRoot);
            }
        }
    }

    /**
     * Get assets
     * 
     * @return array   All assets
     * @since 1.0.0
     */
    protected function getAssets()
    {
        $parsedFiles = (!empty($this->data['parsed-files'])) ? $this->data['parsed-files'] : [];
        return Tools::arrayMerge($this->parser->AllParsedFiles(), $parsedFiles, 'wk');
    }

    /**
     * Preparing import dirs
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    protected function prepImportDirs()
    {
        $importDirs = Kernel::getGlobalCache('asset/less/import-dirs');
        if ($importDirs && is_array($importDirs)) {
            $output = [];
            foreach ($importDirs as $data) {
                $output[$data['path']] = $data['url'];
            }

            if (!empty($this->data['custom-dirs'])) {
                foreach ($this->data['custom-dirs'] as $data) {
                    $output[$data['path']] = $data['url'];
                }
            }

            $this->parser->SetImportDirs($output);
        }
    }

    /**
     * Register all functions
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    protected function prepFunctions()
    {
        $functions = Kernel::getGlobalCache('asset/less/functions');

        if ($functions && is_array($functions)) {
            foreach ($functions as $name => $method) {
                $this->parser->registerFunction($name, $method);
            }
        }
    }

    /**
     * Data preparing
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    protected function prepData()
    {
        $this->data['cache']  = wp_normalize_path($this->cache);  // Set cache path
        $this->data['input']  = wp_normalize_path($this->input);  // Set input path (LESS File)
        $this->data['output'] = wp_normalize_path($this->output); // Set output path (CSS File)

        if (empty($this->data['input'])) {
            throw new \RuntimeException("{$this->data['input']} - input file is empty.");
        }

        if (!Tools::isLocalPath($this->data['input'])) {
            throw new \RuntimeException("{$this->data['input']} - input file is not local.");
        }

        if (!file_exists($this->data['input'])) {
            throw new \RuntimeException("{$this->data['input']} - input file not found.");
        }

        $info                   = new \SplFileInfo($this->data['input']);
        $this->data['key-name'] = $info->getBasename('.' . $ext = $info->getExtension());

        // Prep vars
        $this->data['md5-vars'] = md5(json_encode($this->vars));
    }

    protected function initParser()
    {
        $sourceMap = (Kernel::dev()) ? true : false;

        $this->parser = new Parser;
        $this->parser->SetOption('compress', $this->minify); // Settings : Compress
        $this->parser->SetOption('sourceMap', $sourceMap);   // Settings : Source map
        $this->parser->ModifyVars($this->vars);

        $this->prepImportDirs(); // Preparing import dirs
        $this->prepFunctions();  // Register functions

        $this->parseFiles($this->data['input'], $this->inputURL);
        Tools::fWrite($this->data['output'], $this->parser->getCss());
    }

    /**
     * Render
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function render()
    {
        $this->inputURL = $this->inputURL . '/';

        // Data preparing
        $this->prepData();

        $executeLocation = $this->assetCache->setExecuteLocation(__CLASS__);

        $this->assetCache->setSetting('check-asset-count', false);
        $this->assetCache->setPath($this->data['cache']);

        // Callback : Check output file if exist and less vars is different
        $this->assetCache->addCheckFunction(function ($args) use ($executeLocation) {
            if (!file_exists($this->data['output'])) {
                if (Kernel::dev()) {
                    $msg = "Asset - {$executeLocation}/Cache : Additional checking functions : {$this->data['output']} : file output not found.";
                    Kernel::dev()->addWarningMessage($msg);
                }

                return true;
            }

            if (empty($args['md5-vars']) || $args['md5-vars'] != $this->data['md5-vars']) {
                if (Kernel::dev()) {
                    $msg = "Asset - {$executeLocation}/Cache : Additional checking functions : Less vars is different.";
                    Kernel::dev()->addWarningMessage($msg);
                }

                return true;
            }

            $pf  = (empty($this->data['parsed-files'])) ? 0 : md5(json_encode($this->data['parsed-files']));
            $pfc = (empty($args['parsed-files'])) ? 0 : $args['parsed-files'];

            if ($pf != $pfc) {
                if (Kernel::dev()) {
                    $msg = "Asset - {$executeLocation}/Cache : Additional checking functions : Less parsed files is different.";
                    Kernel::dev()->addWarningMessage($msg);
                }

                return true;
            }
        });

        // DEV
        if (Kernel::dev()) {
            Kernel::dev()->addLogMessage('Asset - LessFilter', [
                'input-data'    => [
                    'input'     => $this->data['input'],
                    'input-url' => $this->inputURL,
                    'cache'     => $this->data['cache'],
                    'output'    => $this->data['output'],
                    'minify'    => $this->minify,
                    'dev'       => $this->dev,
                    'vars'      => $this->vars,
                ],
                'cache-content' => ($this->assetCache->has() ? $this->assetCache->get() : '?'),
            ]);
        }

        if (!$this->dev) {
            if ($this->assetCache->check()) {
                $this->initParser();

                $this->assetCache->setAssets($this->getAssets());
                $this->assetCache->build([
                    'md5-vars'     => $this->data['md5-vars'],
                    'parsed-files' => (empty($this->data['parsed-files']) ? 0 : md5(json_encode($this->data['parsed-files']))),
                ]);

                // Reset parser data
                $this->parser->Reset();
            }
        } else {
            // Working only if $dev is true
            $this->initParser();

            $this->assetCache->remove($this->data['cache']);
            $this->parser->Reset();
        }
    }
}
