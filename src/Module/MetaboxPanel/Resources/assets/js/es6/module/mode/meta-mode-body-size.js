
/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : MetaboxPanel/Module/Mode : Meta mode body size
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */

'use strict';

import Kernel from '../../../../../../../Panel/Resources/assets/js/es6/module/kernel';

const $ = jQuery;

export default class MetaModeBodySize extends Kernel {

    /**
     * Constructor
     * 
     * @since 1.0.0
     */
    constructor() {
        super();

        let panelWidth = $('.zc-panel.zc-panel_mode_meta').width();
        if (panelWidth > 0) {
            this.checkPanelWidth();
            this.checkPanelHeight();
        } else {
            let interval = setInterval(() => {
                panelWidth = $('.zc-panel.zc-panel_mode_meta').width();

                if (panelWidth > 0) {
                    clearInterval(interval);

                    this.checkPanelWidth();
                    this.checkPanelHeight();
                }
            }, 100);
        }

        zc.resize(() => {
            this.eraseMobileMenu();
            this.checkPanelHeight();
        });
    }

    /**
     * Add mode size
     * 
     * @param {string} width   Panel width
     * @return {null}          None
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

        $('.zc-panel.zc-panel_mode_meta').attr('data-width', mode + width);

        $(window).trigger('zc/panel/size-changed');
    }

    /**
     * Check panel height
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    checkPanelHeight() {
        if (this.isDesktopMode()) {
            $('.zc-panel.zc-panel_mode_meta').height('auto');
            $('.zc-panel.zc-panel_mode_meta').css('min-height', $('.zc-panel.zc-panel_mode_meta .zc-panel-menu__list').outerHeight(true) + 60);
            $('.zc-panel.zc-panel_mode_meta .zc-panel-controls').height('auto');
            $('.zc-panel.zc-panel_mode_meta .zc-panel-submenu__scrollbar-container').height('auto');
        } else {
            $('.zc-panel.zc-panel_mode_meta').height('100%');
            $('.zc-panel.zc-panel_mode_meta').css('min-height', 'inherit');
            $('.zc-panel.zc-panel_mode_meta .zc-panel-controls').height('100%');
            $('.zc-panel.zc-panel_mode_meta .zc-panel-submenu__scrollbar-container').height('100%');
        }
    }

    /**
     * Check panel width
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    checkPanelWidth() {
        const ro = new ResizeObserver(entries => {
            if (entries[0] !== undefined) {
                this.addModeSize(entries[0].contentRect.width);
            }
        });

        ro.observe($('.zc-panel.zc-panel_mode_meta').get(0));
    }
}