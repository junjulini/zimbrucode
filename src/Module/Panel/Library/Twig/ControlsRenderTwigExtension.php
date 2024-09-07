<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\Panel\Library\Twig;

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;
use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Module\Panel\Library\ControlManager;
use ZimbruCode\Module\Panel\Library\Shell\ControlShell;

/**
 * Class : Module/Panel/Library/TwigExtension : Control render - Twig Extension
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */
class ControlsRenderTwigExtension extends AbstractExtension
{
    protected readonly ControlManager $__panel;

    /**
     * Constructor
     *
     * @param ControlManager $panel   Panel object
     * @since 1.0.0
     */
    public function __construct(ControlManager $panel)
    {
        $this->__panel = $panel;
    }

    /**
     * Get name
     *
     * @return string   Name
     * @since 1.0.0
     */
    public function getName(): string
    {
        return 'controls_render';
    }

    /**
     * Get functions
     *
     * @return array
     * @since 1.0.0
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('render', [$this, '__callback_render'], ['needs_environment' => true, 'needs_context' => true, 'is_safe' => ['all']]),
        ];
    }

    /**
     * Callback : Render
     *
     * @param Environment $env        Environment object
     * @param array       $context    Context data
     * @param array       $controls   List of controls
     * @return string                 Action result
     * @since 1.0.0
     */
    public function __callback_render(Environment $env, array $context, array $controls = []): string
    {
        $result = '';

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

                        do_action('zc/module/panel/control_shell', $shell);
                        do_action("zc/module/panel/{$this->__panel->getModuleSetting('slug')}/control_shell", $shell);

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
}
