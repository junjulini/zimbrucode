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

use Twig\Node\Node;
use Twig\Compiler;

/**
 * Twig node class : Posts
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class PostsNode extends Node
{
    public function __construct(Node $body, $values, $line, $tag = null)
    {
        if ($values) {
            parent::__construct(['body' => $body, 'values' => $values], [], $line, $tag);
        } else {
            parent::__construct(['body' => $body], [], $line, $tag);
        }
    }

    public function compile(Compiler $compiler)
    {
        $compiler->addDebugInfo($this);

        if ($this->hasNode('values') && null !== $this->getNode('values')) {
            $compiler->write('$args = ')->subcompile($this->getNode('values'))->raw(";\n");
        } else {
            $compiler->write('$args = false;' . "\n");
        }

        $compiler
        ->write('if (!empty($args)) {' . "\n")
            ->indent()
            ->write('$query = ($args instanceof WP_Query) ? $args : new WP_Query($args);' . "\n")
        ->outdent()
        ->write('} else {' . "\n")
            ->indent()
            ->write('global $wp_query;' . "\n")
            ->write('$query = $wp_query;' . "\n")
        ->outdent()
        ->write('}' . "\n")
        ->write('while ($query->have_posts()) : $query->the_post();' . "\n")
            ->indent()
            ->subcompile($this->getNode('body'))
        ->outdent()
        ->write('endwhile;' . "\n");
    }
}
