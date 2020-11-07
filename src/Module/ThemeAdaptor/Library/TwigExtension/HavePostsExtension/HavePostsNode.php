<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\ThemeAdaptor\Library\TwigExtension\HavePostsExtension;

use Twig\Node\Node;
use Twig\Compiler;

/**
 * Twig node class : Have posts
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class HavePostsNode extends Node
{
    public function __construct(Node $body, ?Node $values, ?Node $else, int $lineno, string $tag = null)
    {
        $nodes = ['body' => $body];

        if ($values) {
            $nodes['values'] = $values;
        }

        if ($else !== null) {
            $nodes['else'] = $else;
        }

        parent::__construct($nodes, [], $lineno, $tag);
    }

    public function compile(Compiler $compiler): void
    {
        $compiler->addDebugInfo($this);

        if ($this->hasNode('values')) {
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
            ->write('if ($query->have_posts()) {' . "\n")
                ->indent()
                ->subcompile($this->getNode('body'));

        if ($this->hasNode('else')) {
            $compiler->outdent()
                ->write('} else {' . "\n")
                    ->indent()
                    ->subcompile($this->getNode('else'));
        }

        $compiler->outdent()->write('}' . "\n");
    }
}
