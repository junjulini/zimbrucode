
/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : MetaboxPanel/Module/Mode : Meta lite mode body size
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */

'use strict';

import Kernel from '../../../../../../../Panel/Resources/assets/js/es6/module/kernel';

const $ = jQuery;

export default class MetaLiteModeBodySize extends Kernel {
    constructor() {
        super();

        let panelWidth = $('.zc-panel.zc-panel_mode_meta-lite').width();
        if (panelWidth > 0) {
            this.checkPanelWidth();
        } else {
            let interval = setInterval(() => {
                panelWidth = $('.zc-panel.zc-panel_mode_meta-lite').width();

                if (panelWidth > 0) {
                    clearInterval(interval);

                    this.checkPanelWidth();
                }
            }, 100);
        }
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

        $('.zc-panel.zc-panel_mode_meta-lite').attr('data-width', mode + width);

        $(window).trigger('zc/panel/size-changed');
    }

    checkPanelWidth() {
        const ro = new ResizeObserver(entries => {
            if (entries[0] !== undefined) {
                this.addModeSize(entries[0].contentRect.width);
            }
        });

        ro.observe($('.zc-panel.zc-panel_mode_meta-lite').get(0));
    }
}