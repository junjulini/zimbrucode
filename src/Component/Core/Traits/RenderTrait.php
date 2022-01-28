<?php

/*
 * This file is part of the zimbrucode package.
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
 * Trait : Component/Core/Traits : Render function
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.2
 */
trait RenderTrait
{
    /**
     * Render TWIG template
     *
     * @param  string  $template                Path of TWIG template
     * @param  array   $vars                    Additional vars
     * @param  boolean $return                  Return content or echo
     * @return string|null|TwigTemplateBridge   HTML output
     * @since 1.0.2
     */
    protected function render(string $template = '', array $vars = [], bool $return = false, callable $renderCallback = null)
    {
        if ($template) {
            $output = '';

            $renderTemplate = function (string $template, string $locationPath) use ($vars, $renderCallback): ?string {
                $ttb = new TwigTemplateBridge;

                $ttb->addLocationPath($locationPath);
                $ttb->addCachePath(self::service('app')->getCachePath('twig'));

                if (!empty($vars)) {
                    foreach ($vars as $name => $value) {
                        $ttb->addVar($name, $value);
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
                $locationPath = '';

                if (method_exists($this, 'getModulePath')) {
                    $locationPath = $this->getModulePath() . self::getGlobal('core/component/core/module/resource-dir') . '/views';
                }

                if (file_exists("{$locationPath}/{$template}")) {
                    $output = $renderTemplate($template, $locationPath);
                } elseif (file_exists(self::service('app')->getViewPath($template))) {
                    $output = $renderTemplate($template, self::service('app')->getViewPath());
                }
            }

            if ($return) {
                return $output;
            } else {
                echo $output;
                return null;
            }
        }

        return new TwigTemplateBridge;
    }
}
