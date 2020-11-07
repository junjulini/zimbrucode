<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\Panel\Library\TwigExtension;

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Module\Panel\Library\ControlManager;
use ZimbruCode\Module\Panel\Library\Shell\ControlShell;

/**
 * Class : Control render - Twig Extension
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class ControlsRenderTwigExtension extends AbstractExtension
{
    protected $__panel;

    public function __construct(ControlManager $panel)
    {
        $this->__panel = $panel;
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('render', [$this, '__ext_render'], ['needs_environment' => true, 'needs_context' => true, 'is_safe' => ['all']]),
        ];
    }

    public function __ext_render(Environment $env, $context, $controls = [])
    {
        $result = null;

        if (!empty($controls)) {
            foreach ($controls as $control) {
                if (!empty($control['type'])) {
                    try {
                        if ($customControlShell = $this->__panel->getModuleSetting('custom-control-shell')) {
                            $shell = new $customControlShell($this->__panel, $control);

                            if (!($shell instanceof ControlShell)) {
                                $shell = new ControlShell($this->__panel, $control);
                            }
                        } else {
                            $shell = new ControlShell($this->__panel, $control);
                        }

                        $this->__panel->callback()->run('panel-control-shell', $shell);

                        $file               = Kernel::getGlobal('core/module/panel/control-settings/template-file');
                        $template           = "@{$shell->type()}/{$file}";
                        $context['control'] = $shell;

                        $context = apply_filters("zc/module/panel/control/{$shell->type()}", $context);

                        $result .= $env->resolveTemplate($template)->render($context);
                    } catch (LoaderError $e) {
                        throw $e;
                    }
                }
            }
        }

        return $result;
    }

    public function getName(): string
    {
        return 'controls_render';
    }
}
