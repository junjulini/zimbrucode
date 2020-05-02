<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Asset\Library\Less\Tree;

use ZimbruCode\Component\Asset\Library\Less\Parser;
use ZimbruCode\Component\Asset\Library\Less\Tree;

/**
 * Class : Tree - Media
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Media extends Tree
{
    public $features;
    public $rules;
    public $index;
    public $currentFileInfo;
    public $isReferenced;
    public $type = 'Media';

    public function __construct($value = [], $features = [], $index = null, $currentFileInfo = null)
    {
        $this->index           = $index;
        $this->currentFileInfo = $currentFileInfo;

        $selectors = $this->emptySelectors();

        $this->features = new Value($features);

        $this->rules                  = [new Ruleset($selectors, $value)];
        $this->rules[0]->allowImports = true;
    }

    public function accept($visitor)
    {
        $this->features = $visitor->visitObj($this->features);
        $this->rules    = $visitor->visitArray($this->rules);
    }

    public function genCSS($output)
    {
        $output->add('@media ', $this->currentFileInfo, $this->index);
        $this->features->genCSS($output);
        Tree::outputRuleset($output, $this->rules);
    }

    public function compile($env)
    {
        $media = new Media([], [], $this->index, $this->currentFileInfo);

        $strictMathBypass = false;
        if (Parser::$options['strictMath'] === false) {
            $strictMathBypass              = true;
            Parser::$options['strictMath'] = true;
        }

        $media->features = $this->features->compile($env);

        if ($strictMathBypass) {
            Parser::$options['strictMath'] = false;
        }

        $env->mediaPath[]   = $media;
        $env->mediaBlocks[] = $media;

        array_unshift($env->frames, $this->rules[0]);
        $media->rules = [$this->rules[0]->compile($env)];
        array_shift($env->frames);

        array_pop($env->mediaPath);

        return !$env->mediaPath ? $media->compileTop($env) : $media->compileNested($env);
    }

    public function variable($name)
    {
        return $this->rules[0]->variable($name);
    }

    public function find($selector)
    {
        return $this->rules[0]->find($selector, $this);
    }

    public function emptySelectors()
    {
        $el                  = new Element('', '&', $this->index, $this->currentFileInfo);
        $sels                = [new Selector([$el], [], null, $this->index, $this->currentFileInfo)];
        $sels[0]->mediaEmpty = true;
        return $sels;
    }

    public function markReferenced()
    {
        $this->rules[0]->markReferenced();
        $this->isReferenced = true;
        Tree::ReferencedArray($this->rules[0]->rules);
    }

    // evaltop
    public function compileTop($env)
    {
        $result = $this;

        if (count($env->mediaBlocks) > 1) {
            $selectors          = $this->emptySelectors();
            $result             = new Ruleset($selectors, $env->mediaBlocks);
            $result->multiMedia = true;
        }

        $env->mediaBlocks = [];
        $env->mediaPath   = [];

        return $result;
    }

    public function compileNested($env)
    {
        $path = array_merge($env->mediaPath, [$this]);

        // Extract the media-query conditions separated with `,` (OR).
        foreach ($path as $key => $p) {
            $value      = $p->features instanceof Value ? $p->features->value : $p->features;
            $path[$key] = is_array($value) ? $value : [$value];
        }

        // Trace all permutations to generate the resulting media-query.
        //
        // (a, b and c) with nested (d, e) ->
        //    a and d
        //    a and e
        //    b and c and d
        //    b and c and e

        $permuted    = $this->permute($path);
        $expressions = [];
        foreach ($permuted as $path) {

            for ($i = 0, $len = count($path); $i < $len; $i++) {
                $path[$i] = Parser::is_method($path[$i], 'toCSS') ? $path[$i] : new Anonymous($path[$i]);
            }

            for ($i = count($path) - 1; $i > 0; $i--) {
                array_splice($path, $i, 0, [new Anonymous('and')]);
            }

            $expressions[] = new Expression($path);
        }
        $this->features = new Value($expressions);

        // Fake a tree-node that doesn't output anything.
        return new Ruleset([], []);
    }

    public function permute($arr)
    {
        if (!$arr) {
            return [];
        }

        if (count($arr) == 1) {
            return $arr[0];
        }

        $result = [];
        $rest   = $this->permute(array_slice($arr, 1));
        foreach ($rest as $r) {
            foreach ($arr[0] as $a) {
                $result[] = array_merge(
                    is_array($a) ? $a : [$a],
                    is_array($r) ? $r : [$r]
                );
            }
        }

        return $result;
    }

    public function bubbleSelectors($selectors)
    {
        if (!$selectors) {
            return;
        }

        $this->rules = [new Ruleset($selectors, [$this->rules[0]])];
    }
}
