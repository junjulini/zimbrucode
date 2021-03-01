
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : MetaboxPanel/Module/Header : Reset
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */

'use strict';

import Kernel from '../../../../../../../Panel/Resources/assets/js/es6/module/kernel';

import TPL__reset_popup_notification from '../header/tpl/reset-popup-notification.html';

const $ = jQuery;

export default class Reset extends Kernel {
    constructor() {
        super();

        this.confirm();
    }

    confirm() {
        this.click('.zc-metabox-panel-reset-button', () => {
            zc.confirm({
                title: this.getVar('reset-pop-up-title'),
                subject: this.getVar('reset-pop-up-subject'),
                titleOK: this.getVar('reset-pop-up-ok'),
                titleCancel: this.getVar('reset-pop-up-cancel'),
                ok: (popup) => {
                    zc.ajax({
                        data: {
                            action: `zc/module/metabox_panel/reset_${this.getVar('slug')}`,
                            id: $('.zc-panel-template_wid').data('post-id'),
                            _ajax_nonce: this.getVar('nonce')
                        },
                        error: (jqXHR, textStatus) => {
                            $(window).trigger('zc/metabox-panel/reset/error');
                            this.errorCheck('MetaboxPanel : Reset settings', jqXHR);
                        },
                        before: () => {
                            popup.hideContent();
                            $(window).trigger('zc/metabox-panel/reset/before');
                        },
                        success: (response) => {
                            if (response.type === 'success') {
                                this.successConfirm(popup, response);
                                $(window).trigger('zc/metabox-panel/reset/success-success');
                            } else {
                                this.neutralConfirm(popup, response);
                                $(window).trigger('zc/metabox-panel/reset/success-info');
                            }
                        }
                    });
                }
            });
        });

    }

    successConfirm(popup, response) {
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
    }

    neutralConfirm(popup, response) {
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
    }
}