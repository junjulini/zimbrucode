<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\ThemeAdapter\Library\TwigExtension\HavePostsExtension;

use Twig\Error\SyntaxError;
use Twig\Token;
use Twig\TokenParser\AbstractTokenParser;

/**
 * Class : Module/ThemeAdapter/Library/TwigExtension/HavePostsExtension : Have posts - Token parser
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */
class HavePostsTokenParser extends AbstractTokenParser
{
    /**
     * Parse
     *
     * @param  Token $token   Token object
     * @throws SyntaxError
     * @return HavePostsNode
     * @since 1.1.0
     */
    public function parse(Token $token): HavePostsNode
    {
        $stream = $this->parser->getStream();

        $values = null;
        $else   = null;
        $end    = false;

        if (!$stream->test(Token::BLOCK_END_TYPE)) {
            $values = $this->parser->getExpressionParser()->parseExpression();
        }

        $stream->expect(Token::BLOCK_END_TYPE);

        $body = $this->parser->subparse([$this, 'decideHavePostsFork']);

        while (!$end) {
            switch ($stream->next()->getValue()) {
                case 'else':
                    $stream->expect(Token::BLOCK_END_TYPE);
                    $else = $this->parser->subparse([$this, 'decideHavePostsEnd']);
                    break;

                case 'endhaveposts':
                    $end = true;
                    break;

                default:
                    throw new SyntaxError('ZE0144 - ' . sprintf('Unexpected end of template. Twig was looking for the following tags "else" or "endhaveposts" to close the "haveposts" block started at line %d).', $token->getLine()), $stream->getCurrent()->getLine(), $stream->getSourceContext());
            }
        }

        $stream->expect(Token::BLOCK_END_TYPE);

        return new HavePostsNode($body, $values, $else, $token->getLine(), $this->getTag());
    }

    /**
     * Test : Decide have posts fork
     *
     * @param Token $token   Token object
     * @return bool          Result of checking
     * @since 1.0.0
     */
    public function decideHavePostsFork(Token $token): bool
    {
        return $token->test(['else', 'endhaveposts']);
    }

    /**
     * Test : Decide have posts end
     *
     * @param Token $token   Token object
     * @return bool       Result of checking
     * @since 1.0.0
     */
    public function decideHavePostsEnd(Token $token): bool
    {
        return $token->test(['endhaveposts']);
    }

    /**
     * Get tag
     *
     * @return string   Tag value
     * @since 1.0.0
     */
    public function getTag(): string
    {
        return 'haveposts';
    }
}
