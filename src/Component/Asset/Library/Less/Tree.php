<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Asset\Library\Less;

/**
 * Class : Tree
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Tree
{
    public $cache_string;

    public function toCSS()
    {
        $output = new Output();
        $this->genCSS($output);
        return $output->toString();
    }

    /**
     * Generate CSS by adding it to the output object
     *
     * @param Output $output The output
     * @return void
     */
    public function genCSS($output)
    {

    }

    public static function outputRuleset($output, $rules)
    {
        $ruleCnt = count($rules);
        Environment::$tabLevel++;

        // Compressed
        if (Parser::$options['compress']) {
            $output->add('{');
            for ($i = 0; $i < $ruleCnt; $i++) {
                $rules[$i]->genCSS($output);
            }

            $output->add('}');
            Environment::$tabLevel--;
            return;
        }

        // Non-compressed
        $tabSetStr  = "\n" . str_repeat(Parser::$options['indentation'], Environment::$tabLevel - 1);
        $tabRuleStr = $tabSetStr . Parser::$options['indentation'];

        $output->add(" {");
        for ($i = 0; $i < $ruleCnt; $i++) {
            $output->add($tabRuleStr);
            $rules[$i]->genCSS($output);
        }
        Environment::$tabLevel--;
        $output->add($tabSetStr . '}');
    }

    public function accept($visitor)
    {

    }

    public static function ReferencedArray($rules)
    {
        foreach ($rules as $rule) {
            if (method_exists($rule, 'markReferenced')) {
                $rule->markReferenced();
            }
        }
    }

    /**
     * Requires php 5.3+
     */
    public static function __set_state($args)
    {
        $class = get_called_class();
        $obj   = new $class(null, null, null, null);

        foreach ($args as $key => $val) {
            $obj->$key = $val;
        }

        return $obj;
    }
}
