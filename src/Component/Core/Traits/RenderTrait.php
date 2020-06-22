<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Core\Traits;

use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\TemplateBridges\TwigTemplateBridge;

/**
 * Trait : Render function
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
trait RenderTrait
{
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
            $output = '';

            $renderTemplate = function ($template, $locationPath) use ($vars, $renderCallback) {
                $ttb = new TwigTemplateBridge;
                $ttb->addLocationPath($locationPath);
                $ttb->setCachePath(self::service('app-locator')->getCachePath('/twig'));

                if (!empty($vars)) {
                    foreach ($vars as $name => $value) {
                        $ttb->setVar($name, $value);
                    }
                }

                if (is_callable($renderCallback)) {
                    $renderCallback($ttb);
                }

                return $ttb->render($template);
            };

            if (Tools::isLocalPath($template) && file_exists($template)) {
                $output = $renderTemplate(basename($template), dirname($template));
            } else {
                $locationPath = $this->getModulePath() . self::getGlobal('core/component/core/module/resource-dir') . '/views';

                if (method_exists($this, 'getModulePath') && file_exists("{$locationPath}/{$template}")) {
                    $output = $renderTemplate($template, $locationPath);
                } elseif (file_exists(self::service('app-locator')->getViewPath("/{$template}"))) {
                    $output = $renderTemplate($template, self::service('app-locator')->getViewPath());
                }
            }

            if ($return) {
                return $output;
            } else {
                echo $output;
                return false;
            }
        }

        return new TwigTemplateBridge;
    }
}
