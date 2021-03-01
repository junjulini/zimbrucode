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
    }

    public function __callback_option(string $option, $default = '', bool $ao = false)
    {
        return OptionHandler::getOption($option, $default, $ao);
    }
}
