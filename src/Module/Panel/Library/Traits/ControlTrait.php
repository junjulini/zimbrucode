<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\Panel\Library\Traits;

use ZimbruCode\Component\Common\Tools;

/**
 * Trait : Control base functions
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
trait ControlTrait
{
    /**
     * Initialization of controls
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function initControls(): void
    {
        $this->addModuleData('control', $this->loadModulePart('ZimbruCode\\Module\\Panel\\Library\\ControlManager'));
    }

    /**
     * Merge controls localize vars with custom
     *
     * @param  array  $data   You custom vars
     * @return array          Prepared data
     * @since 1.0.0
     */
    public function mergeControlsLocalizeVars(array $data): array
    {
        if (isset($data['controls'])) {
            throw new \RuntimeException('Detected "controls" key in array. You can\'t use this key because is reserved for "controls localize vars".');
        }

        return Tools::arrayMerge(['controls' => $this->getModuleData('control-localize-vars')], $data);
    }
}
