
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : Color Picker
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */

'use strict';

zc.module.panel.setControl(function($, panel) {
    var control = {};

    control.initColorPicker = function(el) {
        var settings = el.data('settings') || {};
        var timer    = false;
        var interval = 100;

        var defaults = {
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
            renderEC: function(colors, mode, options, color) {
                $(options.patch).parent().find('.zc-panel-control-colorpicker__live-color').css('background', color);
                $(options.patch).val(color);

                clearTimeout(timer);
                
                // Check after {interval} 
                timer = setTimeout(function() {
                    clearTimeout(timer);

                    $(options.patch).change();
                }, interval);
            }
        };
        
        el.zcColorPicker($.extend({}, defaults, settings));
    };

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio > 0) {
                if (!$(entry.target).hasClass('zc-panel-control-colorpicker__input_activated')) {
                    $(entry.target).addClass('zc-panel-control-colorpicker__input_activated');

                    control.initColorPicker($(entry.target));
                }
            }
        });
    }, {
        root: null
    });

    $(window).on('zc/panel/menu/item-change-ICP', function(event, section) {
        if (section) {
            section.find('.zc-panel-control-colorpicker__input').each(function(index, el) {
                observer.observe(el);
            });
        }
    });
});