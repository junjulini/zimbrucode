
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : Select
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */

'use strict';

zc.module.panel.addControl(function($, panel) {

    var defaults = {
        width: '100%',
        disable_search_threshold: 10
    };

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio > 0) {
                if (!$(entry.target).hasClass('zc-panel-control-select_activated')) {
                    $(entry.target).addClass('zc-panel-control-select_activated');

                    var configs = $(entry.target).data('configs') || {};
                    var chosenConfigs = $.extend({}, defaults, configs);

                    $(entry.target).find('.zc-panel-control-select__list').chosen(chosenConfigs);
            
                    if (zc.isMobile()) {
                        $(entry.target).addClass('zc-panel-control-select_mobile');
                    }
                }
            }
        });
    }, {
        root: null,
        threshold: 0.25
    });

    $(window).on('zc/panel/menu/item-change-ICP', function(event, section) {
        if (section) {
            section.find('.zc-panel-control-select').each(function(index, el) {
                observer.observe(el);
            });
        }
    });
});