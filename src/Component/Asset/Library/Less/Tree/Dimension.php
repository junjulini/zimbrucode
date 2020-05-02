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

use ZimbruCode\Component\Asset\Library\Less\Exception\ExceptionCompiler;
use ZimbruCode\Component\Asset\Library\Less\Functions;
use ZimbruCode\Component\Asset\Library\Less\Parser;
use ZimbruCode\Component\Asset\Library\Less\Tree;

/**
 * Class : Tree - Dimension
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Dimension extends Tree
{
    public $value;
    public $unit;
    public $type = 'Dimension';

    public function __construct($value, $unit = null)
    {
        $this->value = floatval($value);

        if ($unit && ($unit instanceof Unit)) {
            $this->unit = $unit;
        } elseif ($unit) {
            $this->unit = new Unit([$unit]);
        } else {
            $this->unit = new Unit();
        }
    }

    public function accept($visitor)
    {
        $this->unit = $visitor->visitObj($this->unit);
    }

    public function compile()
    {
        return $this;
    }

    public function toColor()
    {
        return new Color([$this->value, $this->value, $this->value]);
    }

    public function genCSS($output)
    {
        if (Parser::$options['strictUnits'] && !$this->unit->isSingular()) {
            throw new ExceptionCompiler("Multiple units in dimension. Correct the units or use the unit function. Bad unit: " . $this->unit->toString());
        }

        $value    = Functions::fround($this->value);
        $strValue = (string) $value;

        if ($value !== 0 && $value < 0.000001 && $value > -0.000001) {
            // would be output 1e-6 etc.
            $strValue = number_format($strValue, 10);
            $strValue = preg_replace('/\.?0+$/', '', $strValue);
        }

        if (Parser::$options['compress']) {
            // Zero values doesn't need a unit
            if ($value === 0 && $this->unit->isLength()) {
                $output->add($strValue);
                return $strValue;
            }

            // Float values doesn't need a leading zero
            if ($value > 0 && $value < 1 && $strValue[0] === '0') {
                $strValue = substr($strValue, 1);
            }
        }

        $output->add($strValue);
        $this->unit->genCSS($output);
    }

    public function __toString()
    {
        return $this->toCSS();
    }

    public function operate($op, $other)
    {
        $value = Functions::operate($op, $this->value, $other->value);
        $unit  = clone $this->unit;

        if ($op === '+' || $op === '-') {

            if (!$unit->numerator && !$unit->denominator) {
                $unit->numerator   = $other->unit->numerator;
                $unit->denominator = $other->unit->denominator;
            } elseif (!$other->unit->numerator && !$other->unit->denominator) {
                // do nothing
            } else {
                $other = $other->convertTo($this->unit->usedUnits());

                if (Parser::$options['strictUnits'] && $other->unit->toString() !== $unit->toCSS()) {
                    throw new ExceptionCompiler("Incompatible units. Change the units or use the unit function. Bad units: '" . $unit->toString() . "' and " . $other->unit->toString() . "'.");
                }

                $value = Functions::operate($op, $this->value, $other->value);
            }
        } elseif ($op === '*') {
            $unit->numerator   = array_merge($unit->numerator, $other->unit->numerator);
            $unit->denominator = array_merge($unit->denominator, $other->unit->denominator);
            sort($unit->numerator);
            sort($unit->denominator);
            $unit->cancel();
        } elseif ($op === '/') {
            $unit->numerator   = array_merge($unit->numerator, $other->unit->denominator);
            $unit->denominator = array_merge($unit->denominator, $other->unit->numerator);
            sort($unit->numerator);
            sort($unit->denominator);
            $unit->cancel();
        }
        return new Dimension($value, $unit);
    }

    public function compare($other)
    {
        if ($other instanceof Dimension) {

            if ($this->unit->isEmpty() || $other->unit->isEmpty()) {
                $a = $this;
                $b = $other;
            } else {
                $a = $this->unify();
                $b = $other->unify();
                if ($a->unit->compare($b->unit) !== 0) {
                    return -1;
                }
            }
            $aValue = $a->value;
            $bValue = $b->value;

            if ($bValue > $aValue) {
                return -1;
            } elseif ($bValue < $aValue) {
                return 1;
            } else {
                return 0;
            }
        } else {
            return -1;
        }
    }

    public function unify()
    {
        return $this->convertTo(['length' => 'px', 'duration' => 's', 'angle' => 'rad']);
    }

    public function convertTo($conversions)
    {
        $value = $this->value;
        $unit  = clone $this->unit;

        if (is_string($conversions)) {
            $derivedConversions = [];
            foreach (UnitConversions::$groups as $i) {
                if (isset(UnitConversions::${$i}[$conversions])) {
                    $derivedConversions = [$i => $conversions];
                }
            }
            $conversions = $derivedConversions;
        }

        foreach ($conversions as $groupName => $targetUnit) {
            $group = UnitConversions::${$groupName};

            //numerator
            foreach ($unit->numerator as $i => $atomicUnit) {
                $atomicUnit = $unit->numerator[$i];
                if (!isset($group[$atomicUnit])) {
                    continue;
                }

                $value = $value * ($group[$atomicUnit] / $group[$targetUnit]);

                $unit->numerator[$i] = $targetUnit;
            }

            // denominator
            foreach ($unit->denominator as $i => $atomicUnit) {
                $atomicUnit = $unit->denominator[$i];
                if (!isset($group[$atomicUnit])) {
                    continue;
                }

                $value = $value / ($group[$atomicUnit] / $group[$targetUnit]);

                $unit->denominator[$i] = $targetUnit;
            }
        }

        $unit->cancel();

        return new Dimension($value, $unit);
    }
}
