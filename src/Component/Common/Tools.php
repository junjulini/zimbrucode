<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Common;

use DateTime;
use InvalidArgumentException;
use RuntimeException;
use Tracy\Debugger;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Component/Common : Tools
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */
class Tools
{
    /**
     * Copying an array value to a key
     *
     * @param array $array   Array for work
     * @return array         Return a new modified array
     * @since 1.0.0
     */
    public static function arrayValueToKey(array $array): array
    {
        $output = [];

        foreach ($array as $key => $value) {
            $output[$value] = $value;
        }

        return $output;
    }

    /**
     * Copying an array key to a value
     *
     * @param array $array   Array for work
     * @return array         Return a new modificated array
     * @since 1.0.0
     */
    public static function arrayKeyToValue(array $array): array
    {
        $output = [];

        foreach ($array as $key => $value) {
            $output[$key] = $key;
        }

        return $output;
    }

    /**
     * Check if the array is associative
     *
     * @param array $array   Array for work
     * @return bool          Result of checking
     * @since 1.0.0
     */
    public static function arrayIsAssoc(array $array): bool
    {
        return (bool) count(array_filter(array_keys($array), 'is_string'));
    }

    /**
     * Merge two arrays
     *
     * @param array  $array1   First array
     * @param array  $array2   Last array
     * @param string $mode     Mode : d (Default), wk (Without key), s (Strict)
     * @return array           Return a new modificated array
     * @since 1.0.0
     */
    public static function arrayMerge(array $array1, array $array2, string $mode = 'd'): array
    {
        switch ($mode) {
            case 'd':
                foreach ($array2 as $key => $value) {
                    $array1[$key] = $value;
                }
                break;

            case 'wk':
                foreach ($array2 as $value) {
                    $array1[] = $value;
                }
                break;

            case 's':
                foreach ($array1 as $key => $value) {
                    if (isset($array2[$key])) {
                        $array1[$key] = $array2[$key];
                    }
                }
                break;

            default:
                foreach ($array2 as $key => $value) {
                    $array1[$key] = $value;
                }
                break;
        }

        return $array1;
    }

    /**
     * Check if two arrays are different
     *
     * @param mixed $array1   First array
     * @param mixed $array2   Last array
     * @return bool           Result of checking
     * @since 1.0.0
     */
    public static function arrayDiff($array1, $array2): bool
    {
        if (is_array($array1) && is_array($array2)) {
            ksort($array1);
            ksort($array2);

            return (strcmp(json_encode($array1), json_encode($array2)) !== 0);
        } else {
            return ($array1 !== $array2);
        }
    }

    /**
     * Add value to nested array based on path
     *
     * @param  array  $array       Array for work
     * @param  string $path        Array path
     * @param  mixed  $value       New value
     * @param  string $delimiter   Path separator
     * @throws InvalidArgumentException
     * @return void
     * @since 1.1.0
     */
    public static function addNode(array &$array, string $path, &$value, string $delimiter = '/'): void
    {
        if (!$path) {
            throw new InvalidArgumentException('ZE0042');
        }

        $path    = trim($path, $delimiter);    // Remove all leading and trailing slashes
        $parts   = explode($delimiter, $path); // Extract parts of the path
        $current = &$array;                    // Use current array as the initial value

        // Loop through each part and extract its value
        foreach ($parts as $part) {
            // Replace current value with the child
            $current = &$current[$part];
        }

        $current = $value;
    }

    /**
     * Get value from nested array based on path
     *
     * @param  array  $array     Array for work
     * @param  string $path      Array path
     * @param  mixed  $default   Default value
     * @param  string $delimiter
     * @throws InvalidArgumentException
     * @return mixed             Action result
     * @since 1.1.0
     */
    public static function getNode(array $array, string $path, $default = null, string $delimiter = '/')
    {
        if (!$path) {
            throw new InvalidArgumentException('ZE0043');
        }

        $path    = trim($path, $delimiter);    // Remove all leading and trailing slashes
        $parts   = explode($delimiter, $path); // Extract parts of the path
        $current = $array;                     // Use current array as the initial value

        // Loop through each part and extract its value
        foreach ($parts as $part) {
            if (isset($current[$part])) {
                // Replace current value with the child
                $current = $current[$part];
            } else {
                // Part doesn't exist, fail
                return $default;
            }
        }

        return $current;
    }

    /**
     * Remove element from nested array based on path
     *
     * @param  array  $array   Array for work
     * @param  string $path    Array path
     * @param  string $delimiter
     * @throws InvalidArgumentException
     * @return bool            Action result
     * @since 1.1.0
     */
    public static function unsetNode(array &$array, string $path, string $delimiter = '/'): bool
    {
        if (!$path) {
            throw new InvalidArgumentException('ZE0044');
        }

        $path    = trim($path, $delimiter);    // Remove all leading and trailing slashes
        $parts   = explode($delimiter, $path); // Extract parts of the path
        $current = &$array;                    // Use current array as the initial value

        $lastPart = key(array_slice($parts, -1, 1, true));

        // Loop through each part and extract its value
        foreach ($parts as $partKey => $part) {
            if (isset($current[$part])) {

                if ($lastPart === $partKey) {
                    unset($current[$part]);
                    return true;
                }

                $current = &$current[$part];
            } else {
                // Part doesn't exist, fail
                return false;
            }
        }

        return false;
    }

    /**
     * Inserts a new key / value after some position in the array
     * 
     * @param array  $array     Array for work
     * @param string $node      The node to be inserted after
     * @param string $newNode   Node after which a new node needs to be installed
     * @param mixed  $value     Value to insert
     * @param bool   $after
     * @return array|null       Return a new modificated array
     * @since 1.1.0
     */
    public static function appendNode(array $array, string $node, string $newNode, $value, bool $after = true): ?array
    {
        if (array_key_exists($node, $array)) {
            $output = [];

            if ($after) {
                foreach ($array as $k => $v) {
                    $output[$k] = $v;

                    if ($k == $node) {
                        $output[$newNode] = $value;
                    }
                }
            } else {
                foreach ($array as $k => $v) {
                    if ($k == $node) {
                        $output[$newNode] = $value;
                    }

                    $output[$k] = $v;
                }
            }

            return $output;
        }

        return null;
    }

    /**
     * Image resize
     * 
     * @param mixed $image    Image ID or URL
     * @param bool  $isURL    Use image as URL
     * @param int   $width    Image width
     * @param int   $height   Image height
     * @param bool  $crop     Crop image
     * @return array          Image data
     * @since 1.1.0
     */
    public static function resizeImg($image, bool $isURL = false, int $width = 9999, int $height = 9999, bool $crop = false): array
    {
        $filePath = $imageSrc = $extension = $noExtPath = '';

        if ($isURL === false) {
            $imageSrc = wp_get_attachment_image_src($image, 'full');
            $filePath = get_attached_file($image);
        } else {
            $filePath = parse_url($image);
            $filePath = $_SERVER['DOCUMENT_ROOT'] . $filePath['path'];
            $origSize = getimagesize($filePath);

            $imageSrc[0] = $image;
            $imageSrc[1] = $origSize[0];
            $imageSrc[2] = $origSize[1];
        }

        if ($imageSrc) {
            $fileInfo = pathinfo($filePath);

            if (isset($fileInfo['extension'])) {
                $extension = ".{$fileInfo['extension']}";
            }

            if (isset($fileInfo['dirname']) && isset($fileInfo['filename'])) {
                $noExtPath = "{$fileInfo['dirname']}/{$fileInfo['filename']}";
            }

            $croppedImgPath = "{$noExtPath}-{$width}x{$height}{$extension}";

            // Checking if the file size is larger than the target size
            // If it is smaller or the same size, stop right here and return
            if ($imageSrc[1] > $width || $imageSrc[2] > $height) {

                // The file is larger, check if the resized version already exists (for $crop = true but will also work for $crop = false if the sizes match)
                if (file_exists($croppedImgPath)) {
                    $croppedImgURL = str_replace(basename($imageSrc[0]), basename($croppedImgPath), $imageSrc[0]);

                    return [
                        'url'    => $croppedImgURL,
                        'width'  => $width,
                        'height' => $height,
                    ];
                }

                // $crop = false
                if ($crop === false) {

                    // Calculate the size proportionally
                    $proportionalSize = wp_constrain_dimensions($imageSrc[1], $imageSrc[2], $width, $height);
                    $resizedImgPath   = "{$noExtPath}-{$proportionalSize[0]}x{$proportionalSize[1]}{$extension}";

                    // Checking if the file already exists
                    if (file_exists($resizedImgPath)) {
                        $resizedImgURL = str_replace(basename($imageSrc[0]), basename($resizedImgPath), $imageSrc[0]);

                        return [
                            'url'    => $resizedImgURL,
                            'width'  => $proportionalSize[0],
                            'height' => $proportionalSize[1],
                        ];
                    }
                }

                // No cache files - let's finally resize it
                $img = wp_get_image_editor($filePath);

                if (!is_wp_error($img)) {
                    $img->resize($width, $height, $crop);
                    $savedImg = $img->save();

                    if ($savedImg['file']) {
                        $newImg = str_replace(basename($imageSrc[0]), $savedImg['file'], $imageSrc[0]);
                    } else {
                        $newImg = $imageSrc[0];
                    }

                    // Resized output
                    return [
                        'url'    => $newImg,
                        'width'  => $savedImg['width'],
                        'height' => $savedImg['height'],
                    ];
                }
            }

            // Default output - without resizing
            return [
                'url'    => $imageSrc[0],
                'width'  => $imageSrc[1],
                'height' => $imageSrc[2],
            ];
        } else {
            return ['url' => ''];
        }
    }

    /**
     * Cut string / text
     * 
     * @param string $input    String / text
     * @param int    $n        Number of symbols
     * @param bool   $return   Return or Echo
     * @throws InvalidArgumentException
     * @return string|null     Return modificated string / text
     * @since 1.1.0
     */
    public static function cut(string $input, int $n = 20, bool $return = false): ?string
    {
        if (!$input) {
            throw new InvalidArgumentException('ZE0045');
        }

        $output = ($n < strlen($input)) ? substr($input, 0, $n) . ' ...' : $input;

        if ($return) {
            return $output;
        } else {
            echo $output;
            return null;
        }
    }

    /**
     * Script condition
     *
     * @param array  $scripts     List of scripts
     * @param string $condition   Condition when displaying scripts
     * @return void
     * @since 1.0.0
     */
    public static function scriptCondition(array $scripts, string $condition = 'lt IE 9'): void
    {
        $output = sprintf("<!--[if %s]>\n", $condition);

        foreach ($scripts as $script) {
            $output .= sprintf("<script src=\"%s\"></script>\n", $script);
        }

        $output .= sprintf("<![endif]-->\n");

        echo $output;
    }

    /**
     * Get time
     *
     * @return string
     * @since 1.0.0
     */
    public static function getTime(): string
    {
        $time       = microtime(true);
        $micro_time = sprintf('%06d', ($time - floor($time)) * 1000000);
        $date       = new DateTime(date('Y-m-d H:i:s.' . $micro_time));

        return $date->format('Y-m-d H:i:s.u');
    }

    /**
     * Check if the current theme is a child theme
     *
     * @return bool   Result of checking
     * @since 1.0.0
     */
    public static function isChildTheme(): bool
    {
        if (!defined('TEMPLATEPATH') || !defined('STYLESHEETPATH')) {
            return false;
        }

        return (TEMPLATEPATH !== STYLESHEETPATH);
    }

    /**
     * Get posts in array format, where only ID and Title
     *
     * @param string $args   Arguments to retrieve posts
     * @return array         Lists of posts
     * @since 1.0.0
     */
    public static function getPWIT(array $args = []): array
    {
        $output = [];
        $data   = get_posts($args);

        if ($data) {
            foreach ($data as $key => $entry) {
                $output[$entry->ID] = $entry->post_title;
            }
        }

        return $output;
    }

    /**
     * Get htmlentities -> wp_json_encode | with ENT_QUOTES parameter
     *
     * @param array $array   Data
     * @return string        Array data in string format
     * @since 1.0.0
     */
    public static function getHJWEP(array $array): string
    {
        return htmlentities(wp_json_encode($array), ENT_QUOTES);
    }

    /**
     * Check that the file format is image
     *
     * @param  string $image   File
     * @throws InvalidArgumentException
     * @return bool            Result of checking
     * @since 1.1.0
     */
    public static function checkImage(string $image): bool
    {
        if (!$image) {
            throw new InvalidArgumentException('ZE0046');
        }

        $mimes = [
            'image/gif',
            'image/jpeg',
            'image/pjpeg',
            'image/png',
        ];

        $mime = getimagesize($image);
        $mime = $mime['mime'];

        $extensions = [
            'jpg',
            'png',
            'gif',
            'jpeg',
        ];

        $extension = strtolower(pathinfo($image, PATHINFO_EXTENSION));

        return (in_array($extension, $extensions) and in_array($mime, $mimes));
    }

    /**
     * PRE
     *
     * @param array $data   Array data
     * @return void
     * @since 1.0.0
     */
    public static function pre(array $data): void
    {
        echo '<pre>';
        print_r($data);
        echo '</pre>';
    }

    /**
     * Remove the slashes in the string
     *
     * @param  string $input   Input string
     * @throws InvalidArgumentException
     * @return string          Cleared string
     * @since 1.1.0
     */
    public static function remSlashes(string $input): string
    {
        if (!$input) {
            throw new InvalidArgumentException('ZE0047');
        }

        $input = implode('', explode('\\', $input));

        return stripslashes(trim($input));
    }

    /**
     * Replace spaces
     *
     * @param  string $input     Input string
     * @param  string $replace   The replacement value that replaces found spaces
     * @throws InvalidArgumentException
     * @return string            Action result
     * @since 1.1.0
     */
    public static function replaceSpaces(string $input, string $replace = '-'): string
    {
        if (!$input) {
            throw new InvalidArgumentException('ZE0048');
        }

        return str_replace(' ', $replace, $input);
    }

    /**
     * Get multisite ID
     *
     * @param  string $delimiter   Delimiter for ID
     * @param  mixed  $default     Default value
     * @return string              Multi site ID
     * @since 1.0.0
     */
    public static function getMultiSiteID(string $delimiter = '', $default = false): string
    {
        $delimiter = $delimiter ?: Kernel::getGlobal('app/network-site-delimiter');
        return (is_multisite()) ? $delimiter . get_current_blog_id() : $default;
    }

    /**
     * Cut the server part from the path
     *
     * @param  string $path   Path value
     * @param  bool   $nm     Mode : normal or not
     * @return string         Action result
     * @since 1.0.0
     */
    public static function cutServerPartFromPath(string $path, bool $nm = false): string
    {
        $output = '';

        if ($path) {
            $path = wp_normalize_path($path);
            $root = wp_normalize_path(get_theme_root());
            $dir  = strstr($root, '/' . Kernel::getGlobal('core/component/path/search-point'), true);

            if (!$nm) {
                $output = str_replace($dir, Kernel::getGlobal('core/component/path/spfp/indicator'), $path);
            } else {
                $output = str_replace(Kernel::getGlobal('core/component/path/spfp/indicator'), $dir, $path);
            }
        }

        return $output;
    }

    /**
     * Convert local path to URL
     *
     * @param string $path   Path value
     * @return string        Action result
     * @since 1.1.0
     */
    public static function getURL(string $path): string
    {
        $output = '';

        if ($path && defined('ABSPATH')) {
            $path        = $path ?: ((!empty(debug_backtrace()[0]['file'])) ? debug_backtrace()[0]['file'] : __FILE__);
            $path        = wp_normalize_path(realpath($path));
            $templateDir = wp_normalize_path(ABSPATH);

            if (0 === strpos($path, $templateDir)) {
                $folder = str_replace($templateDir, '', $path);

                if ('.' != $folder) {
                    $output = trim(get_site_url(null, $folder), '/');
                }
            }
        }

        return esc_url($output);
    }

    /**
     * Convert local URL to path
     *
     * @param string $url   URL value
     * @return string       Action result
     * @since 1.0.0
     */
    public static function getPath(string $url): string
    {
        $output = '';

        if ($url) {
            $output = wp_normalize_path($_SERVER['DOCUMENT_ROOT'] . wp_make_link_relative($url));
        } else {
            $output = (!empty(debug_backtrace()[0]['file'])) ? wp_normalize_path(dirname(debug_backtrace()[0]['file'])) : wp_normalize_path(__DIR__);
        }

        return $output;
    }

    /**
     * Check if string is path
     *
     * @param string $str   String data
     * @return bool         Result of checking
     * @since 1.0.0
     */
    public static function isPath(string $str): bool
    {
        if ($str && !empty($_SERVER['DOCUMENT_ROOT'])) {
            return (0 === strpos(wp_normalize_path($str), wp_normalize_path($_SERVER['DOCUMENT_ROOT'])));
        }

        return false;
    }

    /**
     * Check if string is URL
     *
     * @param string $str   String data
     * @return bool         Result of checking
     * @since 1.0.0
     */
    public static function isURL(string $str): bool
    {
        if ($str) {
            return (filter_var($str, FILTER_VALIDATE_URL) === false) ? false : true;
        }

        return false;
    }

    /**
     * Check if the path from the current server
     *
     * @param string $path   Path value
     * @return bool          Result of checking
     * @since 1.0.0
     */
    public static function isLocalPath(string $path): bool
    {
        if ($path) {
            $root = wp_normalize_path(strstr(
                get_theme_root(),
                Kernel::getGlobal('core/component/path/search-point'),
                true
            ));

            $path = wp_normalize_path($path);

            return (strpos($path, $root) !== false);
        }

        return false;
    }

    /**
     * Check if the URL from the current server
     *
     * @param string $url   URL value
     * @return bool         Result of checking
     * @since 1.0.0
     */
    public static function isLocalURL(string $url): bool
    {
        if ($url) {
            return (strpos($url, get_site_url()) !== false);
        }

        return false;
    }

    /**
     * Add content to file
     *
     * @param  string $file        File path
     * @param  string $content     The string that is to be written
     * @param  string $filter      Format : simple '', serialize, json
     * @param  bool   $condition   Condition : If file exist
     * @throws RuntimeException
     * @return bool                Action result
     * @since 1.1.0
     */
    public static function fWrite(string $file, string $content = '', string $filter = '', bool $condition = false): bool
    {
        if ($filter === 'serialize') {
            $content = serialize($content);
        } elseif ($filter === 'json') {
            $content = wp_json_encode($content);
        }

        $dir = dirname($file);
        if (!is_dir($dir)) {
            if (false === wp_mkdir_p($dir)) {
                throw new RuntimeException("ZE0049 - Unable to create the directory : {$dir}");
            }
        }

        if ($condition && file_exists($file)) {
            return false;
        }

        $fp = @fopen($file, 'wb');
        if (!$fp) {
            throw new RuntimeException("ZE0050 - Unable to create the file : {$file}");
        }

        mbstring_binary_safe_encoding();

        $dataLength   = strlen($content);
        $bytesWritten = fwrite($fp, $content);

        reset_mbstring_encoding();

        fclose($fp);

        if ($dataLength !== $bytesWritten) {
            throw new RuntimeException("ZE0051 - Unable to create the file : {$file}");
        }

        if (defined('ABSPATH')) {
            @chmod($file, fileperms(ABSPATH . 'index.php') & 0777 | 0644);
        } else {
            throw new RuntimeException('ZE0148 - ' . '"ABSPATH" constant not defined');
        }

        return true;
    }

    /**
     * Get number of lines from file
     *
     * @param  string $file   File path
     * @throws InvalidArgumentException
     * @return int            Number of lines
     * @since 1.1.0
     */
    public static function getLineCount(string $file): int
    {
        if (!file_exists($file)) {
            throw new InvalidArgumentException("ZE0052 - File don't exist : {$file}");
        }

        return count(file($file));
    }

    /**
     * Get absolute path
     *
     * @param  string $path   File path
     * @throws InvalidArgumentException
     * @return string         Absolute path
     * @since 1.1.0
     */
    public static function getAbsolutePath(string $path): string
    {
        if (!$path) {
            throw new InvalidArgumentException('ZE0053');
        }

        $separator = Kernel::getGlobal('core/component/path/directory-separator');
        $path      = str_replace(['/', '\\'], $separator, $path);
        $parts     = array_filter(explode($separator, $path), 'strlen');
        $absolutes = [];

        foreach ($parts as $part) {
            if ('.' == $part) {
                continue;
            }

            if ('..' == $part) {
                array_pop($absolutes);
            } else {
                $absolutes[] = $part;
            }
        }

        return implode($separator, $absolutes);
    }

    /**
     * Get relative path
     *
     * @param  string $from   File path
     * @param  string $to     Destination path
     * @throws InvalidArgumentException
     * @return string         Relative path
     * @since 1.1.0
     */
    public static function getRelativePath(string $from, string $to): string
    {
        if (!$from) {
            throw new InvalidArgumentException('ZE0054');
        }

        if (!$to) {
            throw new InvalidArgumentException('ZE0055');
        }

        // Some compatibility fixes for Windows paths
        $from    = is_dir($from) ? rtrim($from, '\/') . '/' : $from;
        $to      = is_dir($to) ? rtrim($to, '\/') . '/' : $to;
        $from    = str_replace('\\', '/', $from);
        $to      = str_replace('\\', '/', $to);
        $from    = explode('/', $from);
        $to      = explode('/', $to);
        $relPath = $to;

        foreach ($from as $depth => $dir) {

            // Find first non-matching dir
            if ($dir === $to[$depth]) {

                // Ignore this directory
                array_shift($relPath);
            } else {

                // Get number of remaining dirs to $from
                $remaining = count($from) - $depth;
                if ($remaining > 1) {

                    // Add traversals up to first matching dir
                    $padLength = (count($relPath) + $remaining - 1) * -1;
                    $relPath   = array_pad($relPath, $padLength, '..');
                    break;
                } else {
                    $relPath[0] = './' . $relPath[0];
                }
            }
        }

        return implode('/', $relPath);
    }

    /**
     * Dump
     *
     * @param mixed $data   Data for dumping
     * @return void
     * @since 1.0.0
     */
    public static function dump($data): void
    {
        if (class_exists('\\Tracy\\Debugger')) {
            Debugger::dump($data);
        } else {
            var_dump($data);
        }
    }

    /**
     * Registers a set of PSR-4 directories for a given namespace, either
     * appending or prepending to the ones previously set for this namespace.
     *
     * @param array $data   The directories and namespaces
     * @return void
     * @since 1.0.0
     */
    public static function addPsr4(array $data): void
    {
        foreach ($data as $el) {
            if (!empty($el['path']) && !empty($el['namespace'])) {
                Kernel::service('composer')->addPsr4($el['namespace'], $el['path']);
            }
        }

        if (Kernel::service('composer')->getPrefixesPsr4()) {
            Kernel::service('composer')->register(true);
        }
    }

    /**
     * Remove class action
     *
     * @param string   $hookName   The action hook to which the function to be removed is hooked
     * @param string   $class      Class name
     * @param mixed    $method     Class method
     * @param int|null $priority   The exact priority used when adding the original action callback
     * @return mixed
     * @since 1.1.0
     */
    public static function remClassAction(string $hookName, string $class = '', $method = null, int $priority = null)
    {
        global $wp_filter;

        if (isset($wp_filter[$hookName])) {
            $len = strlen($method);

            foreach ($wp_filter[$hookName] as $_priority => $actions) {

                if ($actions) {
                    foreach ($actions as $functionKey => $data) {

                        if ($data) {
                            if (substr($functionKey, -$len) == $method) {

                                if ($class !== '') {
                                    $_class = '';

                                    if (is_string($data['function'][0])) {
                                        $_class = $data['function'][0];
                                    } elseif (is_object($data['function'][0])) {
                                        $_class = get_class($data['function'][0]);
                                    } else {
                                        return false;
                                    }

                                    if ($_class !== '' && $_class == $class) {
                                        if (is_numeric($priority)) {
                                            if ($_priority == $priority) {
                                                return $wp_filter[$hookName]->remove_filter($hookName, $functionKey, $_priority);
                                            }
                                        } else {
                                            return $wp_filter[$hookName]->remove_filter($hookName, $functionKey, $_priority);
                                        }
                                    }
                                } else {
                                    if (is_numeric($priority)) {
                                        if ($_priority == $priority) {
                                            return $wp_filter[$hookName]->remove_filter($hookName, $functionKey, $_priority);
                                        }
                                    } else {
                                        return $wp_filter[$hookName]->remove_filter($hookName, $functionKey, $_priority);
                                    }
                                }

                            }
                        }
                    }
                }
            }
        }

        return false;
    }

    /**
     * Decodes a JSON string
     *
     * @param  string $json           The json string being decoded
     * @param  string $errorMsgPart   Part of error message
     * @throws RuntimeException
     * @return array                  Decoded array data
     * @since 1.1.0
     */
    public static function jsonDecode(string $json, string $errorMsgPart = ''): array
    {
        $data = json_decode($json, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            $errorMsg = 'JSON Decode - ' . json_last_error_msg();

            if ($errorMsgPart) {
                $errorMsg = "{$errorMsgPart} : {$errorMsg}";
            }

            throw new RuntimeException($errorMsg);
        }

        return $data;
    }
}
