<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Common;

use Tracy\Debugger;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Tools
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Tools
{
    /**
     * Array value copy to key
     *
     * @param  array  $array   Array for work
     * @return array           Return new modificated array
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
     * Array key copy to value
     *
     * @param  array  $array   Array for work
     * @return array           Return new modificated array
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
     * Check if array is associative
     *
     * @param  array  $array   Array for work
     * @return bool            Return true or false
     * @since 1.0.0
     */
    public static function arrayIsAssoc(array $array): bool
    {
        return (bool) count(array_filter(array_keys($array), 'is_string'));
    }

    /**
     * Merge more arrays in one
     *
     * @param array   $array1   First array
     * @param array   $array2   Last array
     * @param string  $mode     Mode : d (Default), wk (Without key), s (Strict)
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
     * Computes the difference of arrays
     *
     * @param mix $array1   The array to compare from
     * @param mix $array2   An array to compare against
     * @return bool         Return true ( if different ) or false
     * @since 1.0.0
     */
    public static function arrayDiff($array1, $array2): bool
    {
        if (is_array($array1) && is_array($array2)) {
            foreach ($array1 as $key => $value) {
                if ($array2[$key] !== $value) {
                    return true;
                }
            }

            return false;
        } else {
            return ($array1 !== $array2);
        }
    }

    /**
     * Add a value in a nested array based on path
     *
     * @param  array  $array       The array to modify
     * @param  string $path        The path in the array
     * @param  mix    $value       The value to set
     * @param  string $delimiter   The separator for the path
     * @return void                This function does not return a value
     * @since 1.0.0
     */
    public static function addNode(array &$array, string $path, &$value, string $delimiter = '/'): void
    {
        // Fail if the path is empty
        if (!$path) {
            throw new \InvalidArgumentException('Node path cannot be empty.');
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
     * Get value an array by using "root/branch/leaf" notation
     *
     * @param  array  $array
     * @param  string $path      Path to a specific option to extract
     * @param  mix    $default   Value to use if the path was not found
     * @return mix
     * @since 1.0.0
     */
    public static function getNode(array $array, string $path, $default = null, string $delimiter = '/')
    {
        // Fail if the path is empty
        if (!$path) {
            throw new \InvalidArgumentException('Node path cannot be empty.');
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
     * Unset value an array by using "root/branch/leaf" notation
     *
     * @param  array  $array
     * @param  string $path   Path to a specific option to extract
     * @return bool          true/false
     * @since 1.0.0
     */
    public static function unsetNode(array &$array, string $path, string $delimiter = '/'): bool
    {
        // Fail if the path is empty
        if (!$path) {
            throw new \InvalidArgumentException('Node path cannot be empty.');
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
     * Inserts a new key/value after the key in the array.
     *
     * @param  $array       An array to insert in to.
     * @param  $node        The node to insert after.
     * @param  $newNode     The new node to insert.
     * @param  $value       An value to insert.
     * @return The new array if the key exists, FALSE otherwise.
     * @since 1.0.0
     */
    public static function appendNode(array $array, string $node, string $newNode, $value, bool $after = true)
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
    }

    /**
     * Image resize
     *
     * @param  integer  $attachID   ID of attach
     * @param  string   $imgURL     URL of image
     * @param  integer  $width
     * @param  integer  $height
     * @param  bool     $crop
     * @return string               URL of resized image
     * @since 1.0.0
     */
    public static function resizeImg(int $attachID = null, string $imgURL = '', int $width = 9999, int $height = 9999, bool $crop = false)
    {
        $filePath = $imageSrc = $extension = $noExtPath = '';

        if ($width !== 'full') {

            // This is an attachment, so we have the ID
            if ($attachID) {
                $imageSrc = wp_get_attachment_image_src($attachID, 'full');
                $filePath = get_attached_file($attachID);

                // This is not an attachment, let's use the image url
            } elseif ($imgURL) {
                $filePath = parse_url($imgURL);
                $filePath = $_SERVER['DOCUMENT_ROOT'] . $filePath['path'];
                $origSize = getimagesize($filePath);

                $imageSrc[0] = $imgURL;
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

                // checking if the file size is larger than the target size
                // if it is smaller or the same size, stop right here and return
                if ($imageSrc[1] > $width || $imageSrc[2] > $height) {

                    // the file is larger, check if the resized version already exists (for $crop = true but will also work for $crop = false if the sizes match)
                    if (file_exists($croppedImgPath)) {
                        $croppedImgURL = str_replace(basename($imageSrc[0]), basename($croppedImgPath), $imageSrc[0]);
                        $finalImage    = [
                            'url'    => $croppedImgURL,
                            'width'  => $width,
                            'height' => $height,
                        ];

                        return $finalImage;
                    }

                    // $crop = false
                    if ($crop === false) {

                        // calculate the size proportionally
                        $proportionalSize = wp_constrain_dimensions($imageSrc[1], $imageSrc[2], $width, $height);
                        $resizedImgPath   = "{$noExtPath}-{$proportionalSize[0]}x{$proportionalSize[1]}{$extension}";

                        // checking if the file already exists
                        if (file_exists($resizedImgPath)) {
                            $resizedImgURL = str_replace(basename($imageSrc[0]), basename($resizedImgPath), $imageSrc[0]);
                            $finalImage    = [
                                'url'    => $resizedImgURL,
                                'width'  => $proportionalSize[0],
                                'height' => $proportionalSize[1],
                            ];

                            return $finalImage;
                        }
                    }

                    // no cache files - let's finally resize it
                    $img = wp_get_image_editor($filePath);
                    if (!is_wp_error($img)) {
                        $img->resize($width, $height, $crop);
                        $savedImg = $img->save();
                    }

                    if ($savedImg['file']) {
                        $newImg = str_replace(basename($imageSrc[0]), $savedImg['file'], $imageSrc[0]);
                    } else {
                        $newImg = $imageSrc[0];
                    }

                    // resized output
                    $finalImage = [
                        'url'    => $newImg,
                        'width'  => $savedImg['width'],
                        'height' => $savedImg['height'],
                    ];

                    return $finalImage;
                }

                // default output - without resizing
                $finalImage = [
                    'url'    => $imageSrc[0],
                    'width'  => $imageSrc[1],
                    'height' => $imageSrc[2],
                ];

                return $finalImage;
            } else {
                return ['url' => ''];
            }
        } else {
            // this is an attachment, so we have the ID
            if ($attachID) {
                return wp_get_attachment_image_src($attachID, 'full');
            }
        }
    }

    /**
     * Cut string
     *
     * @param  string  $input    String / text
     * @param  integer $n        Number of symbols
     * @param  bool    $return   Return or Echo
     * @return string            Return string / text with modification
     * @since 1.0.0
     */
    public static function cut(string $input, int $n = 20, bool $return = false)
    {
        if (!$input) {
            throw new \InvalidArgumentException('Input is empty.');
        }

        $output = ($n < strlen($input)) ? substr($input, 0, $n) . ' ...' : $input;

        if ($return) {
            return $output;
        } else {
            echo $output;
        }
    }

    /**
     * Script Condition
     *
     * @param  array  $data
     * @param  string $condition
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public static function scriptCondition(array $data, string $condition = 'lt IE 9'): void
    {
        $output = sprintf("<!--[if %s]>\n", $condition);

        foreach ($data as $item) {
            $output .= sprintf("<script src=\"%s\"></script>\n", $item);
        }

        $output .= sprintf("<![endif]-->\n");

        echo $output;
    }

    /**
     * Get random string
     *
     * @param  integer $length   Length of string
     * @return string            Random string
     * @since 1.0.0
     */
    public static function getRandomString(int $length = 10): string
    {
        $characters   = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $randomString = '';

        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, strlen($characters) - 1)];
        }

        return $randomString;
    }

    /**
     * Get random number
     *
     * @param  integer $length   Length of number
     * @return string            Random number
     * @since 1.0.0
     */
    public static function getRandomNumber(int $length = 10): string
    {
        $characters   = '0123456789';
        $randomString = '';

        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, strlen($characters) - 1)];
        }

        return $randomString;
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
        $date       = new \DateTime(date('Y-m-d H:i:s.' . $micro_time));

        return $date->format('Y-m-d H:i:s.u');
    }

    /**
     * Check is child theme
     *
     * @return bool   true/false
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
     * Get posts in array where is only id and title
     *
     * @param  string $args
     * @return array
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
     * @param  array  $array
     * @return string
     * @since 1.0.0
     */
    public static function getHJWEP(array $array): string
    {
        return htmlentities(wp_json_encode($array), ENT_QUOTES);
    }

    /**
     * Check if is image file
     *
     * @param  string $image   File
     * @return bool            true/false
     * @since 1.0.0
     */
    public static function checkImage(string $image): bool
    {
        if (!$image) {
            throw new \InvalidArgumentException('Image path is empty.');
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

        return (in_array($extension, $extensions) and in_array($mime, $mimes)) ? true : false;
    }

    /**
     * PRE
     *
     * @param  array $data array
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public static function pre(array $data): void
    {
        echo '<pre>';
        print_r($data);
        echo '</pre>';
    }

    /**
     * Remove slashes
     *
     * @param  string $input   Input string
     * @return string          Clean string
     * @since 1.0.0
     */
    public static function removeSlashes(string $input): string
    {
        if (!$input) {
            throw new \InvalidArgumentException('Input is empty.');
        }

        $input = implode('', explode('\\', $input));

        return stripslashes(trim($input));
    }

    /**
     * Replace spaces
     *
     * @param  string $input   Input string
     * @param  string $replace
     * @return string
     * @since 1.0.0
     */
    public static function replaceSpaces(string $input, string $replace = '-'): string
    {
        if (!$input) {
            throw new \InvalidArgumentException('Input is empty.');
        }

        return str_replace(' ', $replace, $input);
    }

    /**
     * Convertor size
     *
     * @param  integer $size
     * @return string
     * @since 1.0.0
     */
    public static function convertSize(int $size): string
    {
        $unit = ['Bits', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb'];

        return @round($size / pow(1024, ($i = floor(log($size, 1024)))), 2) . ' ' . $unit[$i];
    }

    /**
     * Get multi site ID
     *
     * @param  string $delimiter   Delimiter for ID
     * @param  mix    $default     Return value if not multi site
     * @return string              Multi site ID
     * @since 1.0.0
     */
    public static function getMultiSiteID(string $delimiter = '', $default = false): string
    {
        $delimiter = ($delimiter) ? $delimiter : Kernel::getGlobal('app/network-site-delimiter');
        return (is_multisite()) ? $delimiter . get_current_blog_id() : $default;
    }

    /**
     * Cut server part from path
     *
     * @param  string  $path   Path
     * @param  bool    $nm     Normal mode
     * @return bool            None
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
     * Get URL of file
     *
     * @param  string $path
     * @return string
     * @since 1.0.0
     */
    public static function getURL(string $path): string
    {
        $output = '';

        if ($path && ABSPATH) {
            $path        = ($path) ? $path : ((!empty(debug_backtrace()[0]['file'])) ? debug_backtrace()[0]['file'] : __FILE__);
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
     * Get path
     *
     * @param  string $url
     * @return path
     * @since 1.0.0
     */
    public static function getPath(string $url): string
    {
        $output = '';

        if ($url) {
            $path = strstr(
                wp_normalize_path(wp_make_link_relative($url)),
                Kernel::getGlobal('core/component/path/search-point')
            );

            $root = strstr(
                wp_normalize_path(ABSPATH),
                Kernel::getGlobal('core/component/path/search-point'),
                true
            );

            $output = $root . $path;
        } else {
            $output = (!empty(debug_backtrace()[0]['file'])) ? wp_normalize_path(dirname(debug_backtrace()[0]['file'])) : wp_normalize_path(__DIR__);
        }

        return $output;
    }

    /**
     * Is path
     *
     * @param  string  $path
     * @return bool
     * @since 1.0.0
     */
    public static function isPath(string $path): bool
    {
        if ($path && !empty($_SERVER['DOCUMENT_ROOT'])) {
            $path        = wp_normalize_path($path);
            $templateDir = wp_normalize_path($_SERVER['DOCUMENT_ROOT']);

            return (0 === strpos($path, $templateDir)) ? true : false;
        }

        return false;
    }

    /**
     * Is url
     *
     * @param  string  $url
     * @return bool
     * @since 1.0.0
     */
    public static function isURL(string $url): bool
    {
        if ($url) {
            return (filter_var($url, FILTER_VALIDATE_URL) === false) ? false : true;
        }

        return false;
    }

    /**
     * Check if path is from local server
     *
     * @param  string  $path   Path
     * @return bool           true/false
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

            return (strpos($path, $root) !== false) ? true : false;
        }

        return false;
    }

    /**
     * Check if url is local
     *
     * @param  string  $url   Url
     * @return bool           true/false
     * @since 1.0.0
     */
    public static function isLocalURL(string $url): bool
    {
        if ($url) {
            return (strpos($url, get_site_url()) !== false) ? true : false;
        }

        return false;
    }

    /**
     * Parse info format
     *
     * @param  string $data   Content of info file
     * @return array          Parsed data
     * @since 1.0.0
     */
    public static function parseInfoFormat(string $data): array
    {
        $info = [];

        if (preg_match_all('
            @^\s*                           # Start at the beginning of a line, ignoring leading whitespace
            ((?:
                [^=;\[\]]|                    # Key names cannot contain equal signs, semi-colons or square brackets,
                \[[^\[\]]*\]                  # unless they are balanced and not nested
            )+?)
            \s*=\s*                         # Key/value pairs are separated by equal signs (ignoring white-space)
            (?:
                ("(?:[^"]|(?<=\\\\)")*")|     # Double-quoted string, which may contain slash-escaped quotes/slashes
                (\'(?:[^\']|(?<=\\\\)\')*\')| # Single-quoted string, which may contain slash-escaped quotes/slashes
                ([^\r\n]*?)                   # Non-quoted string
            )\s*$                           # Stop at the next end of a line, ignoring trailing whitespace
            @msx', $data, $matches, PREG_SET_ORDER)) {

            foreach ($matches as $match) {
                // Fetch the key and value string.
                $i = 0;
                foreach (['key', 'value1', 'value2', 'value3'] as $var) {
                    $$var = isset($match[++$i]) ? $match[$i] : '';
                }
                $value = stripslashes(substr($value1, 1, -1)) . stripslashes(substr($value2, 1, -1)) . $value3;

                // Parse array syntax.
                $keys   = preg_split('/\]?\[/', rtrim($key, ']'));
                $last   = array_pop($keys);
                $parent = &$info;

                // Create nested arrays.
                foreach ($keys as $key) {
                    if ($key == '') {
                        $key = count($parent);
                    }
                    if (!isset($parent[$key]) || !is_array($parent[$key])) {
                        $parent[$key] = [];
                    }
                    $parent = &$parent[$key];
                }

                // Handle PHP constants.
                if (preg_match('/^\w+$/i', $value) && defined($value)) {
                    $value = constant($value);
                }

                // Insert actual value.
                if ($last == '') {
                    $last = count($parent);
                }

                $parent[$last] = $value;
            }
        }

        return $info;
    }

    /**
     * Add content in the file
     *
     * @param  string  $file        File path
     * @param  string  $content     Content for file
     * @param  string  $filter      Format : simple '', serialize, json
     * @param  bool    $condition   Condition if file exist
     * @return bool                 None
     * @since 1.0.0
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
                throw new \RuntimeException("Unable to create the directory ({$dir})");
            }
        }

        if ($condition && file_exists($file)) {
            return false;
        }

        $fp = @fopen($file, 'wb');
        if (!$fp) {
            throw new \RuntimeException("E1 - Unable to create the file : ({$file})");
        }

        mbstring_binary_safe_encoding();

        $dataLength   = strlen($content);
        $bytesWritten = fwrite($fp, $content);

        reset_mbstring_encoding();

        fclose($fp);

        if ($dataLength !== $bytesWritten) {
            throw new \RuntimeException("E2 - Unable to create the file : ({$file})");
        }

        @chmod($file, fileperms(ABSPATH . 'index.php') & 0777 | 0644);

        return true;
    }

    /**
     * Get number of lines from file
     *
     * @param  string $file   File path
     * @return int            Number of lines
     * @since 1.0.0
     */
    public static function getLineCount(string $file): int
    {
        if (!file_exists($file)) {
            throw new \InvalidArgumentException("{$file}  - file don\'t exist.");
        }

        return count(file($file));
    }

    /**
     * Get absolute path
     *
     * @param  string $path   File path
     * @return string         Absolute path
     * @since 1.0.0
     */
    public static function getAbsolutePath(string $path): string
    {
        if (!$path) {
            throw new \InvalidArgumentException('Path is empty.');
        }

        $separator = self::getGlobal('core/component/path/directory-separator');
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
     * @return string         Relative path
     * @since 1.0.0
     */
    public static function getRelativePath(string $from, string $to): string
    {
        if (!$from) {
            throw new \InvalidArgumentException('$from is empty.');
        }

        if (!$to) {
            throw new \InvalidArgumentException('$to is empty.');
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
                    // add traversals up to first matching dir
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
     * Default dump
     *
     * @param mix $data   Data for dumping
     * @return void
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

    public static function removeClassAction(string $tag, string $class = '', $method, $priority = null)
    {
        global $wp_filter;

        if (isset($wp_filter[$tag])) {
            $len = strlen($method);

            foreach ($wp_filter[$tag] as $_priority => $actions) {

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
                                                return $wp_filter[$tag]->remove_filter($tag, $functionKey, $_priority);
                                            }
                                        } else {
                                            return $wp_filter[$tag]->remove_filter($tag, $functionKey, $_priority);
                                        }
                                    }
                                } else {
                                    if (is_numeric($priority)) {
                                        if ($_priority == $priority) {
                                            return $wp_filter[$tag]->remove_filter($tag, $functionKey, $_priority);
                                        }
                                    } else {
                                        return $wp_filter[$tag]->remove_filter($tag, $functionKey, $_priority);
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
}
