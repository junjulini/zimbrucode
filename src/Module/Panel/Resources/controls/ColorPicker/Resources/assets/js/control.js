
/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : Color picker
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */

'use strict';

zc.module.panel.addControl(($, panel) => {
    const control = {};

    control.initColorPicker = (el) => {
        const settings = el.data('settings') || {};

        const defaults = {
            el: el.get(0),
            theme: 'monolith',
            useAsButton: true,
            default: el.val() || '#FFFFFF',
            container: '.zc-panel',
            components: {
                preview: false,
                opacity: true,
                hue: true,
                interaction: {
                    hex: true,
                    rgba: true,
                    hsla: false,
                    hsva: false,
                    cmyk: false,
                    input: true,
                    clear: false,
                    save: false
                }
            }
        };

        const pickr = Pickr.create($.extend({}, defaults, settings));

        const priv = {
            prepColor: (color) => {
                const representation = pickr.getColorRepresentation();

                let currentColor = '';

                if (representation == 'HEXA') {
                    currentColor = color.toHEXA().toString();
                } else if (representation == 'RGBA') {
                    currentColor = color.toRGBA().toString(0);
                }

                return currentColor;
            },
            preInit: (item, oldColor) => {
                const currentColor = $(item).val();

                if (!currentColor) {
                    priv.changeColor(item, '#FFFFFF');
                } else if (currentColor !== oldColor) {
                    pickr.setColor(currentColor);
                }
            },
            changeColor: (item, color) => {
                $(item).parent().find('.zc-panel-control-colorpicker__live-color').css('background', color);
                $(item).val(color).change();
            }
        };

        pickr.on('show', (color, instance) => {
            const root = pickr.getRoot();

            setTimeout(() => {
                $(root.app).find('.pcr-result').focus().select();
            }, 200);

            priv.preInit(root.button, priv.prepColor(color));
        });

        pickr.on('change', (color) => {
            const root = pickr.getRoot();

            priv.changeColor(root.button, priv.prepColor(color));
            pickr.applyColor(false);
        });
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                if (!$(entry.target).hasClass('zc-panel-control-colorpicker__input_activated')) {
                    $(entry.target).addClass('zc-panel-control-colorpicker__input_activated');

                    control.initColorPicker($(entry.target));
                }
            }
        });
    }, {
        root: null,
        threshold: 0.25
    });

    $(window).on('zc/panel/menu/item-change-ICP', (event, section) => {
        if (section) {
            section.find('.zc-panel-control-colorpicker__input').each((index, el) => {
                observer.observe(el);
            });
        }
    });
});