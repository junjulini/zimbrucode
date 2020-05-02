<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Asset\Library\Less\Tree;

use ZimbruCode\Component\Asset\Library\Less\Tree;
use ZimbruCode\Component\Asset\Library\Less\Parser;
use ZimbruCode\Component\Asset\Library\Less\Environment;

/**
 * Class : Tree - CSS @import node
 *
 * The general strategy here is that we don't want to wait
 * for the parsing to be completed, before we start importing
 * the file. That's because in the context of a browser,
 * most of the time will be spent waiting for the server to respond.
 *
 * On creation, we push the import path to our import queue, though
 * `import,push`, we also pass it a callback, which it'll call once
 * the file has been fetched, and parsed.
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Import extends Tree
{
    public $options;
    public $index;
    public $path;
    public $features;
    public $currentFileInfo;
    public $css;
    public $skip;
    public $root;
    public $type = 'Import';

    public function __construct($path, $features, $options, $index, $currentFileInfo = null)
    {
        $this->options         = $options;
        $this->index           = $index;
        $this->path            = $path;
        $this->features        = $features;
        $this->currentFileInfo = $currentFileInfo;

        if (is_array($options)) {
            $this->options += ['inline' => false];

            if (isset($this->options['less']) || $this->options['inline']) {
                $this->css = !isset($this->options['less']) || !$this->options['less'] || $this->options['inline'];
            } else {
                $pathValue = $this->getPath();
                if ($pathValue && preg_match('/css([\?;].*)?$/', $pathValue)) {
                    $this->css = true;
                }
            }
        }
    }

    public function accept($visitor)
    {
        if ($this->features) {
            $this->features = $visitor->visitObj($this->features);
        }
        $this->path = $visitor->visitObj($this->path);

        if (!$this->options['inline'] && $this->root) {
            $this->root = $visitor->visit($this->root);
        }
    }

    public function genCSS($output)
    {
        if ($this->css) {

            $output->add('@import ', $this->currentFileInfo, $this->index);

            $this->path->genCSS($output);
            if ($this->features) {
                $output->add(' ');
                $this->features->genCSS($output);
            }
            $output->add(';');
        }
    }

    public function toCSS()
    {
        $features = $this->features ? ' ' . $this->features->toCSS() : '';

        if ($this->css) {
            return "@import " . $this->path->toCSS() . $features . ";\n";
        } else {
            return "";
        }
    }

    public function getPath()
    {
        if ($this->path instanceof Quoted) {
            $path = $this->path->value;
            $path = (isset($this->css) || preg_match('/(\.[a-z]*$)|([\?;].*)$/', $path)) ? $path : $path . '.less';
        } else if ($this->path instanceof URL) {
            $path = $this->path->value->value;
        } else {
            return;
        }

        //remove query string and fragment
        return preg_replace('/[\?#][^\?]*$/', '', $path);
    }

    public function compileForImport($env)
    {
        return new Import($this->path->compile($env), $this->features, $this->options, $this->index, $this->currentFileInfo);
    }

    public function compilePath($env)
    {
        $path     = $this->path->compile($env);
        $rootpath = '';
        if ($this->currentFileInfo && $this->currentFileInfo['rootpath']) {
            $rootpath = $this->currentFileInfo['rootpath'];
        }

        if (!($path instanceof URL)) {
            if ($rootpath) {
                $pathValue = $path->value;
                // Add the base path if the import is relative
                if ($pathValue && Environment::isPathRelative($pathValue)) {
                    $path->value = $this->currentFileInfo['uri_root'] . $pathValue;
                }
            }
            $path->value = Environment::normalizePath($path->value);
        }

        return $path;
    }

    public function compile($env)
    {
        $evald = $this->compileForImport($env);

        //get path & uri
        $path_and_uri = null;
        if (is_callable(Parser::$options['import_callback'])) {
            $path_and_uri = call_user_func(Parser::$options['import_callback'], $evald);
        }

        if (!$path_and_uri) {
            $path_and_uri = $evald->PathAndUri();
        }

        if ($path_and_uri) {
            list($full_path, $uri) = $path_and_uri;
        } else {
            $full_path = $uri = $evald->getPath();
        }

        //import once
        if ($evald->skip($full_path, $env)) {
            return [];
        }

        if ($this->options['inline']) {
            Parser::AddParsedFile($full_path);
            $contents = new Anonymous(file_get_contents($full_path), 0, [], true);

            if ($this->features) {
                return new Media([$contents], $this->features->value);
            }

            return [$contents];
        }

        // optional (need to be before "CSS" to support optional CSS imports. CSS should be checked only if empty($this->currentFileInfo))
        if (isset($this->options['optional']) && $this->options['optional'] && !file_exists($full_path) && (!$evald->css || !empty($this->currentFileInfo))) {
            return [];
        }

        // css ?
        if ($evald->css) {
            $features = ($evald->features ? $evald->features->compile($env) : null);
            return new Import($this->compilePath($env), $features, $this->options, $this->index);
        }

        return $this->ParseImport($full_path, $uri, $env);
    }

    /**
     * Using the import directories, get the full absolute path and uri of the import
     */
    public function PathAndUri()
    {
        $evald_path = $this->getPath();

        if ($evald_path) {

            $import_dirs = [];

            if (Environment::isPathRelative($evald_path)) {
                //if the path is relative, the file should be in the current directory
                $import_dirs[$this->currentFileInfo['currentDirectory']] = $this->currentFileInfo['uri_root'];

            } else {
                //otherwise, the file should be relative to the server root
                if (isset($this->currentFileInfo['entryPath']) && isset($import_dirs[$this->currentFileInfo['entryPath']])) {
                    $import_dirs[$this->currentFileInfo['entryPath']] = $this->currentFileInfo['entryUri'];
                }

                //if the user supplied entryPath isn't the actual root
                $import_dirs[$_SERVER['DOCUMENT_ROOT']] = '';

            }

            // always look in user supplied import directories
            $import_dirs = array_merge($import_dirs, Parser::$options['import_dirs']);

            foreach ($import_dirs as $rootpath => $rooturi) {
                if (is_callable($rooturi)) {
                    list($path, $uri) = call_user_func($rooturi, $evald_path);
                    if (is_string($path)) {
                        $full_path = $path;
                        return [$full_path, $uri];
                    }
                } elseif (!empty($rootpath)) {

                    $path = rtrim($rootpath, '/\\') . '/' . ltrim($evald_path, '/\\');

                    if (file_exists($path)) {
                        $full_path = Environment::normalizePath($path);
                        $uri       = Environment::normalizePath(dirname($rooturi . $evald_path));
                        return [$full_path, $uri];
                    } elseif (file_exists($path . '.less')) {
                        $full_path = Environment::normalizePath($path . '.less');
                        $uri       = Environment::normalizePath(dirname($rooturi . $evald_path . '.less'));
                        return [$full_path, $uri];
                    }
                }
            }
        }
    }

    /**
     * Parse the import url and return the rules
     */
    public function ParseImport($full_path, $uri, $env)
    {
        $import_env = clone $env;
        if ((isset($this->options['reference']) && $this->options['reference']) || isset($this->currentFileInfo['reference'])) {
            $import_env->currentFileInfo['reference'] = true;
        }

        if ((isset($this->options['multiple']) && $this->options['multiple'])) {
            $import_env->importMultiple = true;
        }

        $parser = new Parser($import_env);
        $root   = $parser->parseFile($full_path, $uri, true);

        $ruleset = new Ruleset([], $root->rules);
        $ruleset->evalImports($import_env);

        return $this->features ? new Media($ruleset->rules, $this->features->value) : $ruleset->rules;
    }

    /**
     * Should the import be skipped?
     */
    private function Skip($path, $env)
    {
        $path = Parser::AbsPath($path, true);

        if ($path && Parser::FileParsed($path)) {

            if (isset($this->currentFileInfo['reference'])) {
                return true;
            }

            return !isset($this->options['multiple']) && !$env->importMultiple;
        }
    }
}
