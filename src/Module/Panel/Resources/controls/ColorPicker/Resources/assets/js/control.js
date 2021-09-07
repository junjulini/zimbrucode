
/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : Color Picker
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */

'use strict';

zc.module.panel.addControl(($, panel) => {
    const control = {};

    control.initColorPicker = (el) => {
        const settings = el.data('settings') || {};

        const defaults = {
            size: 2,
            animationSpeed: 0,
            multipleInstances: true,
            noResize: true,
            memoryColors: [
                {r: 242, g: 76, b: 61, a: 1},
                {r: 36, g: 123, b: 160, a: 1},
                {r: 255, g: 224, b: 102, a: 1},
                {r: 44, g: 62, b: 80, a: 1},
                {r: 240, g: 61, b: 91, a: 1},
                {r: 227, g: 123, b: 64, a: 1},
                {r: 110, g: 193, b: 102, a: 1},
                {r: 89, g: 79, b: 79, a: 1}
            ],
            renderEC: (colors, mode, options, color) => {
                $(options.patch).parent().find('.zc-panel-control-colorpicker__live-color').css('background', color);
                $(options.patch).val(color).change();
            }
        };
        
        el.zcColorPicker($.extend({}, defaults, settings));
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