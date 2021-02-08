<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\ThemeAdaptor\Library;

use ZimbruCode\Component\Handler\OptionHandler;
use ZimbruCode\Component\TemplateBridges\TwigTemplateBridge;

/**
 * Class : Twig functions
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class TwigFunctions
{
    public function __construct(TwigTemplateBridge $ttb)
    {
        $ttb->addFunction('option', [$this, '__callback_option']);
        $ttb->addFunction('meta', [$this, '__callback_meta']);
    }

    public function __callback_option(string $option, $default = '', $ao = false)
    {
        return OptionHandler::getOption($option, $default, $ao);
    }

    public function __callback_meta(string $meta = null, $default = '', int $id = null)
    {
        return OptionHandler::getMeta($meta, $default, $id);
    }
}
