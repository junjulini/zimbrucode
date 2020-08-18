
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module/Mode : Panel page mode body size
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */

'use strict';

import Kernel from '../kernel';

const $ = jQuery;

export default class PanelPageModeBodySize extends Kernel {
    constructor() {
        super();

        this.height();
        this.checkWpStickyMenu();
        this.checkPanelWidth();

        let windowWidth  = window.innerWidth,
            windowHeight = window.innerHeight;

        $(window).on('resize.zc-panel', () => {
            if (window.innerWidth != windowWidth) {
                windowWidth = window.innerWidth;

                this.eraseMobileMenu(); // Erase mobile menu
                this.height();          // Check panel height size
            }

            if (this.isDesktopMode() && window.innerHeight != windowHeight) {
                windowHeight = window.innerHeight;

                this.calcHeight(); // Calculate panel height
                this.height();     // Check panel height size
            }
        });
    }

    height() {
        if (this.isDesktopMode()) {
            this.checkTopSpace();

            $('.zc-panel').height('auto');
            $('.zc-panel-controls').height('auto');
            $('.zc-panel-submenu__scrollbar-container').height('auto');
        } else {
            $('.zc-panel').height('100%');
            $('.zc-panel-controls').height('100%');
            $('.zc-panel-submenu__scrollbar-container').height('100%');
        }
    }

    checkTopSpace() {
        if (this.isDesktopMode()) {
            const wpbodyContent  = $('#wpbody-content').height(),
                  templateHeight = $('.zc-panel-template').height(),
                  top = (wpbodyContent - templateHeight) + this.getConfig('wp-admin-bar-height');

            $('.zc-panel').css('top', top);

            const body = this.getConfig('wp-body-height') - top - this.getConfig('bottom-margin');

            if (body > this.getConfig('min-size/body-height')) {
                $('.zc-panel').removeClass('zc-panel_disable-height-fixed');
            } else {
                $('.zc-panel').addClass('zc-panel_disable-height-fixed');
            }
        } else {
            $('.zc-panel').css('top', 'auto');
            $('.zc-panel').removeClass('zc-panel_disable-height-fixed');
        }
    }

    checkWpStickyMenu() {
        if ($('body').hasClass('folded')) {
            $('.zc-panel').addClass('zc-panel_wp-menu-folded');
        }

        $('#adminmenumain').on('click', '#collapse-menu', (event) => {
            event.preventDefault();
            /* Act on the event */

            if ($('body').hasClass('folded')) {
                $('.zc-panel').addClass('zc-panel_wp-menu-folded');
            } else {
                $('.zc-panel').removeClass('zc-panel_wp-menu-folded');
            }
        });
    }

    addModeSize(width) {
        let mode = 'mode-1-';

        if (this.getConfig('min-size/mode1') >= width) {
            mode = 'mode-1-';
        } else if (this.getConfig('min-size/mode2') >= width) {
            mode = 'mode-2-';
        } else {
            mode = 'mode-3-';
        }

        $('.zc-panel').attr('data-width', mode + width);

        $(window).trigger('zc/panel/size-changed');
    }

    checkPanelWidth() {
        const ro = new ResizeObserver(entries => {
            if (entries[0] !== undefined) {
                this.addModeSize(entries[0].contentRect.width);
            }
        });

        ro.observe($('.zc-panel').get(0));
    }
}