
/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : MetaboxPanel/Module/Header : Reset
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */

'use strict';

import Kernel from '../../../../../../../Panel/Resources/assets/js/es6/module/kernel';

import TPL__reset_popup_notification from '../header/tpl/reset-popup-notification.html';

const $ = jQuery;

export default class Reset extends Kernel {

    /**
     * Constructor
     * 
     * @since 1.0.0
     */
    constructor() {
        super();

        this.confirm();
    }

    /**
     * Confirm action
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    confirm() {
        this.click('.zc-metabox-panel-reset-button', () => {
            zc.confirm({
                title: this.getVar('reset-popup-title'),
                subject: this.getVar('reset-popup-subject'),
                titleOK: this.getVar('reset-popup-ok'),
                titleCancel: this.getVar('reset-popup-cancel'),
                ok: (popup) => {
                    popup.hideContent();
                    $(window).trigger('zc/metabox-panel/reset/before');

                    zc.jsonRequest(`zc/module/metabox_panel/reset_${this.getVar('slug')}`, this.getVar('nonce'), {
                        id: $('.zc-panel-template_wid').data('post-id'),
                    }).then((response) => {
                        if (response.type === 'success') {
                            popup.remContent();
                            popup.appendContent(zc.tpl(TPL__reset_popup_notification, {
                                type: response.type ?? 'error',
                                title: response.title ?? 'Error',
                                content: response.content ?? 'Unknown error'
                            }));
                            popup.showContent();

                            setTimeout(() => {
                                location.reload();
                            }, 2000);

                            $(window).trigger('zc/metabox-panel/reset/success-success');
                        } else {
                            popup.remContent();
                            popup.appendContent(zc.tpl(TPL__reset_popup_notification, {
                                type: response.type ?? 'error',
                                title: response.title ?? 'Error',
                                content: response.content ?? 'Unknown error',
                                var_exit: this.getVar('exit')
                            }));
                            popup.showContent();

                            $('.zc-popup').on('click', '.zc-panel-popup-notification__close-button', (event) => {
                                event.preventDefault();
                                /* Act on the event */

                                popup.close();
                            });

                            $(window).trigger('zc/metabox-panel/reset/success-info');
                        }
                    }).catch((errorMsg) => {
                        $(window).trigger('zc/metabox-panel/reset/error');
                        this.errorCheck('MetaboxPanel : Reset settings', errorMsg);
                    });
                }
            });
        });
    }
}