<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\ThemeAdaptor\Library\TwigExtension;

use Twig\Environment;
use ZimbruCode\Module\ThemeAdaptor\Library\TwigExtension\HavePostsExtension\HavePostsTokenParser;
use ZimbruCode\Module\ThemeAdaptor\Library\TwigExtension\PostsExtension\PostsTokenParser;

/**
 * Class : Initialization of Twig Extensions
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class InitTwigExtensions
{
    public function __construct(Environment $twig)
    {
        // Posts extension
        $twig->addTokenParser(new PostsTokenParser);

        // HavePosts extension
        $twig->addTokenParser(new HavePostsTokenParser);
    }
}
