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

use ZimbruCode\Component\TemplateBridges\TwigTemplateBridge;
use ZimbruCode\Module\Panel\Library\Shell\BaseShell;

/**
 * Trait : Utility base functions
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
trait UtilityTrait
{
    use ContentUtilityTrait, CallbackTrait;

    /**
     * Set custom shell function
     * 
     * @param string   $name   Name of function
     * @param callable $method
     * @param string   $type
     * @since 1.0.0
     */
    protected function setShellFunction($name, callable $method, $type = 'panel-base-shell')
    {
        $this->callback()->set($type, function ($shell) use ($name, $method) {
            $shell->$name = function (...$args) use ($method) {
                return call_user_func_array($method, $args);
            };
        });

        return false;
    }

    /**
     * Render
     * 
     * @param  string  $template   Template path
     * @param  array   $vars       Additional vars
     * @param  boolean $return     Return content or echo
     * @return string              HTML output
     * @since 1.0.0
     */
    protected function render($template = '', array $vars = [], $return = false, callable $renderCallback = null)
    {
        if ($template && is_string($template)) {
            $shell = ($customBaseShell = $this->getModuleSetting('custom-base-shell')) ? new $customBaseShell($this) : new BaseShell($this);
            $this->callback()->run('panel-base-shell', $shell);

            $ttb = new TwigTemplateBridge;

            $ttb->addLoadPath($this->getModuleResourcePath('views/macros'), 'macros');
            $ttb->addLoadPath($this->getModuleResourcePath('views/blocks'), 'blocks');
            $ttb->addLoadPath($this->getModuleResourcePath('views/mode'));

            $ttb->setCachePath(self::service('app-locator')->getCachePath('/twig'));

            // Custom vars
            if (!empty($vars)) {
                foreach ($vars as $name => $value) {
                    $ttb->setVar($name, $value);
                }
            }

            // Shell
            $ttb->panel = $shell;

            // Callback
            if (is_callable($renderCallback)) {
                $renderCallback($ttb);
            }

            $this->callback()->run('panel-render', $ttb);

            if ($return) {
                return $ttb->render($template);
            } else {
                echo $ttb->render($template);
            }
        }
    }

    /**
     * Asset
     * 
     * @return object   AssetHandler
     * @since 1.0.0
     */
    public function asset(...$assets)
    {
        if ($assets) {
            $this->getModuleData('asset')->set($assets);
        }
        
        return $this->getModuleData('asset');
    }
}
