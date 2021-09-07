<?php

/*
 * This file is part of the zimbrucode package.
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
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class TwigFunctions
{
    public function __construct(TwigTemplateBridge $ttb)
    {
        $ttb->addFunction('option', [$this, '__callback_option']);
    }

    public function __callback_option(...$args)
    {
        return OptionHandler::getOption(...$args);
    }
}
