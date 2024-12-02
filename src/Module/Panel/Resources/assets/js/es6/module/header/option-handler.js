
/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module/Header : Option handler
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.3
 */

'use strict';

import Kernel             from '../kernel';
import DirectNotification from './direct-notification';

import TPL__reset_popup_notification from '../header/tpl/reset-popup-notification.html';

const $ = jQuery;

export default class OptionHandler extends Kernel {

    /**
     * Constructor
     * 
     * @since 1.3.0
     */
    constructor() {
        super();

        this.dn  = new DirectNotification;
        this.tpl = TPL__reset_popup_notification;

        this.setNotificationPosition();
        this.save();
        this.reset();
    }

    /**
     * Set notification position
     * 
     * @since 1.3.0
     */
    setNotificationPosition() {
        $(window).on('scroll zc/panel/size-changed zc/panel/save/success-end', () => {
            if (('.zc-panel .zc-panel-direct-notification').length > 0) {
                if ($('.zc-panel').width() <= this.getConfig('min-size/mode2')) {
                    const position = $('.zc-panel .zc-panel-header').position().top || 0;

                    if (position > 0) {
                        $('.zc-panel .zc-panel-direct-notification').css('top', position + 56);
                    }
                } else {
                    $('.zc-panel .zc-panel-direct-notification').attr('style', '');
                }
            }
        });
    }

    /**
     * Show loading
     * 
     * @since 1.1.0
     */
    showLoading() {
        $('.zc-panel-save-starter-button').hide();
        $('.zc-panel-loading-starter-button').css('display', 'flex');
        $('.zc-panel-reset-starter-button').prop('disabled', true).addClass('zc-panel-header__controller-button_disabled');
    }

    /**
     * Hide loading
     * 
     * @since 1.1.0
     */
    hideLoading() {
        $('.zc-panel-save-starter-button').css('display', 'flex');
        $('.zc-panel-loading-starter-button').hide();
        $('.zc-panel-reset-starter-button').prop('disabled', false).removeClass('zc-panel-header__controller-button_disabled');
    }

    /**
     * Save options
     * 
     * @since 1.3.3
     */
    save() {
        this.click('.zc-panel-save-starter-button', ($this) => {
            this.showLoading();

            $(window).trigger('zc/panel/save/start');

            const priv = {};

            priv.procOptions = () => {
                const options = {};

                $('.zc-panel .zc-panel-controls [data-option]').each((index, el) => {
                    let nameItem = $(el).attr('name');

                    if ($(el).data('i') == 'i') return;
                    if (nameItem === undefined) return;

                    nameItem = nameItem.replace(/\[\]/g, '');
                    nameItem = nameItem.replace(this.getVar('prefix-slug'), '');

                    const value = $(el).val();

                    if ($(el).is(':radio') || $(el).is(':checkbox')) {
                        if ($(el).is(':checked')) {
                            options[nameItem] = value;
                        }
                    } else {
                        options[nameItem] = value;
                    }
                });

                return options;
            };

            zc.jsonRequest(`zc/module/panel/save_${this.getVar('slug')}`, this.getVar('nonce'), {
                options: priv.procOptions(),
            }).then((response) => {
                $(window).trigger('zc/panel/save/success-start', [response]);

                const reload = typeof response.reload === 'undefined' ? undefined : () => {
                    location.reload();
                };

                this.dn.add(response.type, response.title, response.content, 3000, reload);
                this.hideLoading();

                if (response.type === 'success') {
                    this.addCache('changed', false);
                    $(window).trigger('zc/panel/save/success-response', [response]);
                }

                $(window).trigger('zc/panel/save/success-end', [response]);
            }).catch((errorMsg) => {
                $(window).trigger('zc/panel/save/error');
                this.errorCheck('Panel : Save options', errorMsg);
            });

            $(window).trigger('zc/panel/save/end');
        });
    }

    /**
     * Reset options
     * 
     * @since 1.3.3
     */
    reset() {
        this.click('.zc-panel-reset-starter-button', () => {
            $(window).trigger('zc/panel/reset/start');

            zc.confirm({
                title: this.getVar('reset-popup-title'),
                subject: this.getVar('reset-popup-subject'),
                titleOK: this.getVar('reset-popup-ok'),
                titleCancel: this.getVar('reset-popup-cancel'),
                ok: (popup) => {
                    popup.hideContent();
                    $(window).trigger('zc/panel/reset/before');

                    zc.jsonRequest(`zc/module/panel/reset_${this.getVar('slug')}`, this.getVar('nonce')).then((response) => {
                        $(window).trigger('zc/panel/reset/success-start', [response]);

                        if (response.type === 'success') {
                            popup.remContent();
                            popup.appendContent(zc.tpl(this.tpl, {
                                type: response.type,
                                title: response.title,
                                content: response.content
                            }));
                            popup.showContent();

                            setTimeout(() => {
                                location.reload();
                            }, 2000);

                            this.addCache('changed', false);

                            $(window).trigger('zc/panel/reset/success-success', [response]);
                        } else if (response.type === 'info') {
                            popup.remContent();
                            popup.appendContent(zc.tpl(this.tpl, {
                                type: response.type,
                                title: response.title,
                                content: response.content,
                                var_exit: this.getVar('exit')
                            }));
                            popup.showContent();

                            $(window).trigger('zc/panel/reset/success-info', [response]);
                        } else {
                            popup.remContent();
                            popup.appendContent(zc.tpl(this.tpl, {
                                type: 'error',
                                title: 'Error',
                                content: 'AJAX / LOGIN / PHP Error',
                                var_exit: this.getVar('exit')
                            }));
                            popup.showContent();

                            $(window).trigger('zc/panel/reset/success-error', [response]);
                        }

                        $('.zc-popup').on('click', '.zc-panel-popup-notification__close-button', (event) => {
                            event.preventDefault();
                            /* Act on the event */

                            popup.close();
                        });

                        $(window).trigger('zc/panel/reset/success-end', [response]);
                    }).catch((errorMsg) => {
                        $(window).trigger('zc/panel/reset/error');
                        this.errorCheck('Panel : Reset options', errorMsg);
                    });
                }
            });
            
            $(window).trigger('zc/panel/reset/end');
        });
    };
}