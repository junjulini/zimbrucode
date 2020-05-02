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

use ZimbruCode\Component\Asset\Library\Less\Tree\Anonymous;
use ZimbruCode\Component\Common\Tools;

/**
 * Class : Less default functions
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class LessDefaultFunctions implements LessFunctionsInterface
{
    /**
     * Get functions
     * 
     * @return array   Functions
     * @since 1.0.0
     */
    public function get()
    {
        return [
            'dov'         => [$this, '__less_dov'],
            'font-import' => [$this, '__less_font_import'],
            'is'          => [$this, '__less_is'],
            'dump'        => [$this, '__less_dump'],
        ];
    }

    /**
     * Function : Font import
     * 
     * @return string   Link from google font
     * @since 1.0.0
     */
    public function __less_font_import($font, $argument)
    {
        $font     = $font->value;
        $argument = $argument->value;
        $data     = ($font) ? '//fonts.googleapis.com/css?family=' . str_replace(' ', '+', $font) . $argument : '';

        return new Anonymous($data);
    }

    /**
     * Function : Dov
     * 
     * @return string
     * @since 1.0.0
     */
    public function __less_dov($default, $value)
    {
        if (is_object($value)) {
            return (!empty($value->value) || $value->type === 'Color') ? $value : $default;
        } else {
            return $default;
        }
    }

    /**
     * Function : Is
     * 
     * @return string
     * @since 1.0.0
     */
    public function __less_is($control, $check, $type = false)
    {
        if (!$type) {
            $data = ($control->value === 'null') ? $check->value : '';
        } else {
            $data = ($control->value !== 'null') ? $check->value : '';
        }

        return new Anonymous($data);
    }

    /**
     * Function : Dump
     * 
     * @return string
     * @since 1.0.0
     */
    public function __less_dump($value)
    {
        Tools::dump($value);
        return $value;
    }
}
