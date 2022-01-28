<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\ThemeAdaptor\Library\TwigExtension\HavePostsExtension;

use Twig\Error\SyntaxError;
use Twig\Node\Node;
use Twig\Token;
use Twig\TokenParser\AbstractTokenParser;

/**
 * Class : Module/ThemeAdaptor/Library/TwigExtension/HavePostsExtension :  Have posts - Token parser
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class HavePostsTokenParser extends AbstractTokenParser
{
    /**
     * Parse
     *
     * @param Token $token   Token object
     * @return HavePostsNode
     * @since 1.0.0
     */
    public function parse(Token $token): HavePostsNode
    {
        $stream = $this->parser->getStream();
        $lineno = $token->getLine();

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
                    throw new SyntaxError('ZE0144 - ' . sprintf('Unexpected end of template. Twig was looking for the following tags "else" or "endhaveposts" to close the "haveposts" block started at line %d).', $lineno), $stream->getCurrent()->getLine(), $stream->getFilename());
            }
        }

        $stream->expect(Token::BLOCK_END_TYPE);

        return new HavePostsNode($body, $values, $else, $lineno, $this->getTag());
    }

    /**
     * Test : Decide have posts fork
     *
     * @param Token $token   Token object
     * @return boolean       Result of checking
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
     * @return boolean       Result of checking
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
