<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\ThemeAdapter\Library\TwigExtension;

use Twig\Environment;
use ZimbruCode\Module\ThemeAdapter\Library\TwigExtension\HavePostsExtension\HavePostsTokenParser;
use ZimbruCode\Module\ThemeAdapter\Library\TwigExtension\PostsExtension\PostsTokenParser;

/**
 * Class : Module/ThemeAdapter/Library/TwigExtension : Initialization of twig extensions
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class InitTwigExtensions
{
    /**
     * Constructor
     *
     * @param Environment $twig   Environment TWIG object
     * @since 1.0.0
     */
    public function __construct(Environment $twig)
    {
        // Posts extension
        $twig->addTokenParser(new PostsTokenParser);

        // HavePosts extension
        $twig->addTokenParser(new HavePostsTokenParser);
    }
}
