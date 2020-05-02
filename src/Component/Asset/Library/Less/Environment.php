<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Asset\Library\Less;

/**
 * Class : Environment
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Environment
{
    // public $paths = array();              // option - unmodified - paths to search for imports on
    // public static $files = array();       // list of files that have been imported, used for import-once
    // public $rootpath;                     // option - rootpath to append to URL's
    // public static $strictImports = null;  // option -
    // public $insecure;                     // option - whether to allow imports from insecure ssl hosts
    // public $processImports;               // option - whether to process imports. if false then imports will not be imported
    // public $javascriptEnabled;            // option - whether JavaScript is enabled. if undefined, defaults to true
    // public $useFileCache;                 // browser only - whether to use the per file session cache
    public $currentFileInfo;                 // information about the current file - for error reporting and importing and making urls relative etc.

    public $importMultiple = false; // whether we are currently importing multiple copies
    public $frames         = [];
    public $mediaBlocks    = [];
    public $mediaPath      = [];
    public $functions      = [];

    public static $parensStack = 0;
    public static $tabLevel    = 0;
    public static $lastRule    = false;
    public static $mixin_stack = 0;
    public static $_outputMap;

    public function Init()
    {
        self::$parensStack = 0;
        self::$tabLevel    = 0;
        self::$lastRule    = false;
        self::$mixin_stack = 0;

        if (Parser::$options['compress']) {
            self::$_outputMap = [
                ','  => ',',
                ': ' => ':',
                ''   => '',
                ' '  => ' ',
                ':'  => ' :',
                '+'  => '+',
                '~'  => '~',
                '>'  => '>',
                '|'  => '|',
                '^'  => '^',
                '^^' => '^^',
            ];

        } else {
            self::$_outputMap = [
                ','  => ', ',
                ': ' => ': ',
                ''   => '',
                ' '  => ' ',
                ':'  => ' :',
                '+'  => ' + ',
                '~'  => ' ~ ',
                '>'  => ' > ',
                '|'  => '|',
                '^'  => ' ^ ',
                '^^' => ' ^^ ',
            ];

        }
    }

    public function copyEvalEnv($frames = [])
    {
        $new_env         = new Environment();
        $new_env->frames = $frames;
        return $new_env;
    }

    public static function isMathOn()
    {
        return !Parser::$options['strictMath'] || self::$parensStack;
    }

    public static function isPathRelative($path)
    {
        return !preg_match('/^(?:[a-z-]+:|\/)/', $path);
    }

    /**
     * Canonicalize a path by resolving references to '/./', '/../'
     * Does not remove leading "../"
     * @param string path or url
     * @return string Canonicalized path
     */
    public static function normalizePath($path)
    {
        $segments = explode('/', $path);
        $segments = array_reverse($segments);

        $path     = [];
        $path_len = 0;

        while ($segments) {
            $segment = array_pop($segments);
            switch ($segment) {
                case '.':
                    break;

                case '..':
                    if (!$path_len || ($path[$path_len - 1] === '..')) {
                        $path[] = $segment;
                        $path_len++;
                    } else {
                        array_pop($path);
                        $path_len--;
                    }
                    break;

                default:
                    $path[] = $segment;
                    $path_len++;
                    break;
            }
        }

        return implode('/', $path);
    }

    public function unshiftFrame($frame)
    {
        array_unshift($this->frames, $frame);
    }

    public function shiftFrame()
    {
        return array_shift($this->frames);
    }
}
