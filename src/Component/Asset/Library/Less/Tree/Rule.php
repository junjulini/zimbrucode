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

use ZimbruCode\Component\Asset\Library\Less\Environment;
use ZimbruCode\Component\Asset\Library\Less\Exception\ExceptionCompiler;
use ZimbruCode\Component\Asset\Library\Less\Output;
use ZimbruCode\Component\Asset\Library\Less\Parser;
use ZimbruCode\Component\Asset\Library\Less\Tree;

/**
 * Class : Tree - Rule
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Rule extends Tree
{
    public $name;
    public $value;
    public $important;
    public $merge;
    public $index;
    public $inline;
    public $variable;
    public $currentFileInfo;
    public $type = 'Rule';

    /**
     * @param string $important
     */
    public function __construct($name, $value = null, $important = null, $merge = null, $index = null, $currentFileInfo = null, $inline = false)
    {
        $this->name            = $name;
        $this->value           = ($value instanceof Value || $value instanceof Ruleset) ? $value : new Value([$value]);
        $this->important       = $important ? ' ' . trim($important) : '';
        $this->merge           = $merge;
        $this->index           = $index;
        $this->currentFileInfo = $currentFileInfo;
        $this->inline          = $inline;
        $this->variable        = (is_string($name) && $name[0] === '@');
    }

    public function accept($visitor)
    {
        $this->value = $visitor->visitObj($this->value);
    }

    public function genCSS($output)
    {

        $output->add($this->name . Environment::$_outputMap[': '], $this->currentFileInfo, $this->index);
        try {
            $this->value->genCSS($output);

        } catch (ExceptionParser $e) {
            $e->index       = $this->index;
            $e->currentFile = $this->currentFileInfo;
            throw $e;
        }
        $output->add($this->important . (($this->inline || (Environment::$lastRule && Parser::$options['compress'])) ? "" : ";"), $this->currentFileInfo, $this->index);
    }

    public function compile($env)
    {

        $name = $this->name;
        if (is_array($name)) {
            // expand 'primitive' name directly to get
            // things faster (~10% for benchmark.less):
            if (count($name) === 1 && $name[0] instanceof Keyword) {
                $name = $name[0]->value;
            } else {
                $name = $this->CompileName($env, $name);
            }
        }

        $strictMathBypass = Parser::$options['strictMath'];
        if ($name === "font" && !Parser::$options['strictMath']) {
            Parser::$options['strictMath'] = true;
        }

        try {
            $evaldValue = $this->value->compile($env);

            if (!$this->variable && $evaldValue->type === "DetachedRuleset") {
                throw new ExceptionCompiler("Rulesets cannot be evaluated on a property.", null, $this->index, $this->currentFileInfo);
            }

            if (Environment::$mixin_stack) {
                $return = new Rule($name, $evaldValue, $this->important, $this->merge, $this->index, $this->currentFileInfo, $this->inline);
            } else {
                $this->name  = $name;
                $this->value = $evaldValue;
                $return      = $this;
            }

        } catch (ExceptionParser $e) {
            if (!is_numeric($e->index)) {
                $e->index       = $this->index;
                $e->currentFile = $this->currentFileInfo;
            }
            throw $e;
        }

        Parser::$options['strictMath'] = $strictMathBypass;

        return $return;
    }

    public function CompileName($env, $name)
    {
        $output = new Output();
        foreach ($name as $n) {
            $n->compile($env)->genCSS($output);
        }
        return $output->toString();
    }

    public function makeImportant()
    {
        return new Rule($this->name, $this->value, '!important', $this->merge, $this->index, $this->currentFileInfo, $this->inline);
    }
}
