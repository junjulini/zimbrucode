
/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module/Mode : Panel page mode body size
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */

'use strict';

import Kernel from '../kernel';

const $ = jQuery;

export default class PanelPageModeBodySize extends Kernel {

    /**
     * Constructor
     * 
     * @since 1.0.0
     */
    constructor() {
        super();

        this.calcPanelHeight();
        this.calcPanelWidth();

        let windowWidth  = window.innerWidth,
            windowHeight = window.innerHeight;

        $(window).on('resize.zc-panel', () => {
            if (window.innerWidth != windowWidth) {
                windowWidth = window.innerWidth;

                this.eraseMobileMenu();
                this.calcPanelHeight();
            }

            if (this.isDesktopMode() && window.innerHeight != windowHeight) {
                windowHeight = window.innerHeight;

                this.calcHeight();
                this.calcPanelHeight();
            }
        });
    }

    /**
     * Calc panel height
     * 
     * @since 1.0.0
     */
    calcPanelHeight() {
        if (this.isDesktopMode()) {
            $('.zc-panel-controls').height('auto');
            $('.zc-panel-submenu__scrollbar-container').height('auto');
        } else {
            $('.zc-panel-controls').height('100%');
            $('.zc-panel-submenu__scrollbar-container').height('100%');
        }
    }

    /**
     * Calc panel width
     * 
     * @since 1.0.0
     */
    calcPanelWidth() {
        const ro = new ResizeObserver(entries => {
            if (entries[0] !== undefined) {
                this.addModeSize(entries[0].contentRect.width);
            }
        });

        ro.observe($('.zc-panel').get(0));
    }

     /**
     * Add "mode size"
     * 
     * @param {string} width   Panel width
     * @since 1.0.0
     */
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
}