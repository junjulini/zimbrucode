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

use Twig\Compiler;
use Twig\Node\Node;

/**
 * Class : Module/ThemeAdaptor/Library/TwigExtension/PostsExtension : Posts - Node
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class PostsNode extends Node
{
    /**
     * Constructor
     *
     * @param Node        $body     "Body" node
     * @param Node|null   $values   "Values" node
     * @param int         $lineno
     * @param string|null $tag
     * @since 1.0.0
     */
    public function __construct(Node $body, ?Node $values, int $lineno, string $tag = null)
    {
        $nodes = ['body' => $body];

        if ($values) {
            $nodes['values'] = $values;
        }

        parent::__construct($nodes, [], $lineno, $tag);
    }

    /**
     * Compile
     *
     * @param Compiler $compiler   Compiler object
     * @return void
     * @since 1.0.0
     */
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
            ->write('while ($query->have_posts()) : $query->the_post();' . "\n")
                ->indent()
                ->subcompile($this->getNode('body'))
            ->outdent()
            ->write('endwhile;' . "\n");
    }
}
