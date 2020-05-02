<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\ThemeAdaptor\Library\TwigExtension\PostsExtension;

use Twig\Token;
use Twig\TokenParser\AbstractTokenParser;

/**
 * Twig token parser class : Posts
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class PostsTokenParser extends AbstractTokenParser
{
    public function parse(Token $token)
    {
        $stream = $this->parser->getStream();
        $values = '';

        if (!$stream->test(Token::BLOCK_END_TYPE)) {
            $values = $this->parser->getExpressionParser()->parseExpression();
        }

        $stream->expect(Token::BLOCK_END_TYPE);
        $body = $this->parser->subparse([$this, 'decidePostsEnd'], true);
        $stream->expect(Token::BLOCK_END_TYPE);

        return new PostsNode($body, $values, $token->getLine(), $this->getTag());
    }

    public function decidePostsEnd(Token $token)
    {
        return $token->test('endposts');
    }

    public function getTag()
    {
        return 'posts';
    }
}
