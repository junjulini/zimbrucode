<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\Panel\Library\Traits;

use RuntimeException;
use ZimbruCode\Component\Common\Tools;

/**
 * Trait : Module/Panel/Library/Traits : Control base functions
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */
trait ControlTrait
{
    /**
     * Initialization of controls
     *
     * @return void
     * @since 1.1.0
     */
    public function initControls(): void
    {
        $this->addModuleData('control', $this->loadModulePart('ZimbruCode\Module\Panel\Library\ControlManager'));
    }

    /**
     * Combine assets variables with custom variables
     *
     * @param  array $data   Custom variables
     * @throws RuntimeException
     * @return array         Combine assets variables
     * @since 1.1.0
     */
    public function mergeControlsLocalizeVars(array $data): array
    {
        if (isset($data['controls'])) {
            throw new RuntimeException('ZE0137');
        }

        return Tools::arrayMerge(['controls' => $this->getModuleData('control-localize-vars')], $data);
    }
}
