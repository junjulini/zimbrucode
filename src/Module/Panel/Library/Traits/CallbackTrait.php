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

use ZimbruCode\Component\Common\Callback as CoreCallback;

/**
 * Trait : Callback function
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
trait CallbackTrait
{
    /**
     * Callback object
     * 
     * @return function   Object
     * @since 1.0.0
     */
    public function callback()
    {
        if (!$this->getModuleData('callback') || !($this->getModuleData('callback') instanceof CoreCallback)) {
            $this->addModuleData('callback', new CoreCallback);
        }

        return $this->getModuleData('callback');
    }
}
