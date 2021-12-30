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

use ZimbruCode\Component\TemplateBridges\TwigTemplateBridge;
use ZimbruCode\Module\Panel\Library\AssetHandler;
use ZimbruCode\Module\Panel\Library\Shell\BaseShell;

/**
 * Trait : Utility base functions
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
trait UtilityTrait
{
    use ContentUtilityTrait;

    /**
     * Add custom shell function
     *
     * @param string   $name   Name of function
     * @param callable $method
     * @param void
     * @since 1.0.0
     */
    protected function addShellFunction(string $name, callable $method, string $type = 'base_shell'): void
    {
        $this->addAction("zc/module/panel/{$this->getModuleSetting('slug')}/{$type}", function (object $shell) use ($name, $method): void {
            $shell->$name = function (...$args) use ($method) {
                return call_user_func_array($method, $args);
            };
        });
    }

    /**
     * Render
     *
     * @param  string  $template   Template path
     * @param  array   $vars       Additional vars
     * @param  bool    $return     Return content or echo
     * @return string              HTML output
     * @since 1.0.0
     */
    protected function render(string $template = '', array $vars = [], bool $return = false, callable $renderCallback = null)
    {
        if ($template) {
            $shell = ($customBaseShell = $this->getModuleSetting('custom-base-shell')) ? new $customBaseShell($this) : new BaseShell($this);

            do_action('zc/module/panel/base_shell', $shell);
            do_action("zc/module/panel/{$this->getModuleSetting('slug')}/base_shell", $shell);

            $ttb = new TwigTemplateBridge;

            $ttb->addLocationPath($this->getModuleResourcePath('views/macros'), 'macros');
            $ttb->addLocationPath($this->getModuleResourcePath('views/blocks'), 'blocks');
            $ttb->addLocationPath($this->getModuleResourcePath('views/mode'));

            $ttb->addCachePath(self::service('app')->getCachePath('twig'));

            // Custom vars
            if (!empty($vars)) {
                foreach ($vars as $name => $value) {
                    $ttb->addVar($name, $value);
                }
            }

            // Shell
            $ttb->panel = $shell;

            // Callback
            if (is_callable($renderCallback)) {
                $renderCallback($ttb);
            }

            do_action('zc/module/panel/render', $ttb);
            do_action("zc/module/panel/{$this->getModuleSetting('slug')}/render", $ttb);

            if ($return === true) {
                return $ttb->render($template);
            } else {
                echo $ttb->render($template);
            }
        }
    }

    /**
     * Asset
     *
     * @return AssetHandler
     * @since 1.0.0
     */
    public function asset(...$assets): AssetHandler
    {
        if ($assets) {
            $this->getModuleData('asset')->add($assets);
        }

        return $this->getModuleData('asset');
    }
}
