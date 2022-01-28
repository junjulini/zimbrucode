<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\ThemeAdaptor\Library\TwigExtension\PostsExtension;

use Twig\Node\Node;
use Twig\Token;
use Twig\TokenParser\AbstractTokenParser;

/**
 * Class : Module/ThemeAdaptor/Library/TwigExtension/PostsExtension : Posts - Token parser
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class PostsTokenParser extends AbstractTokenParser
{
    /**
     * Parse
     *
     * @param Token $token   Token object
     * @return PostsNode
     * @since 1.0.0
     */
    public function parse(Token $token): PostsNode
    {
        $stream = $this->parser->getStream();
        $values = null;

        if (!$stream->test(Token::BLOCK_END_TYPE)) {
            $values = $this->parser->getExpressionParser()->parseExpression();
        }

        $stream->expect(Token::BLOCK_END_TYPE);
        $body = $this->parser->subparse([$this, 'decidePostsEnd'], true);
        $stream->expect(Token::BLOCK_END_TYPE);

        return new PostsNode($body, $values, $token->getLine(), $this->getTag());
    }

    /**
     * Test : Decide posts end
     *
     * @param Token $token   Token object
     * @return boolean       Result of checking
     * @since 1.0.0
     */
    public function decidePostsEnd(Token $token): bool
    {
        return $token->test('endposts');
    }

    /**
     * Get tag
     *
     * @return string   Tag value
     * @since 1.0.0
     */
    public function getTag(): string
    {
        return 'posts';
    }
}
