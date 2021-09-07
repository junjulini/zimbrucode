
/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : Select
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */

'use strict';

zc.module.panel.addControl(($, panel) => {

    const defaults = {
        width: '100%',
        disable_search_threshold: 10
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                if (!$(entry.target).hasClass('zc-panel-control-select_activated')) {
                    $(entry.target).addClass('zc-panel-control-select_activated');

                    const configs = $(entry.target).data('configs') || {};
                    const chosenConfigs = $.extend({}, defaults, configs);

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

    $(window).on('zc/panel/menu/item-change-ICP', (event, section) => {
        if (section) {
            section.find('.zc-panel-control-select').each((index, el) => {
                observer.observe(el);
            });
        }
    });
});