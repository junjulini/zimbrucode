
/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : MetaboxPanel/Module/Header : Backup
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */

'use strict';

import Kernel from '../../../../../../../Panel/Resources/assets/js/es6/module/kernel';

import TPL__backup_notification from './tpl/backup-notification.html';

const $ = jQuery;

export default class Backup extends Kernel {

    /**
     * Constructor
     * 
     * @since 1.0.0
     */
    constructor() {
        super();

        this.id = false;
        this.closeBlock  = {
            __cb: '.zc-popup-backup__close-block',

            show: () => {
                $(this.closeBlock.__cb).show();
            },

            hide: () => {
                $(this.closeBlock.__cb).hide();
            }
        };

        this.popup = zc.popup();

        this.backupButton();
    }

    /**
     * Backup button
     * 
     * @return {null}   None
     * @since 1.1.0
     */
    backupButton() {
        this.click('.zc-metabox-panel-backup-button', () => {
            this.id = $('.zc-panel-template_wid').data('post-id');

            this.popup.add({
                title: this.getVar('backup-popup-title'),
                width: 400,
                height: 400,
                jsonRequest: {
                    action: `zc/module/metabox_panel/backup_${this.getVar('slug')}`,
                    nonce: this.getVar('nonce'),
                    options: {
                        type: 'get-content',
                    }
                },
                error: (errorMsg) => {
                    this.errorCheck('MetaboxPanelBackup : Load content', errorMsg);
                },
                success: ()  => {
                    this.saveBackup();
                    this.deleteAllBackups();
                    this.deleteBackupItem();
                    this.restoreBackup();
                }
            });
        });
    }

    /**
     * Save backup
     * 
     * @return {null}   None
     * @since 1.1.0
     */
    saveBackup() {
        $('.zc-popup').on('click', '.zc-popup-backup__save-button', (event) => {
            event.preventDefault();
            /* Act on the event */

            const backupName = $(event.currentTarget).parent().find('input').val();

            if (backupName && backupName !== undefined) {
                this.closeBlock.show();

                zc.jsonRequest(`zc/module/metabox_panel/backup_${this.getVar('slug')}`, this.getVar('nonce'), {
                    type: 'save',
                    id: this.id,
                    backup_name: backupName,
                }).then((response) => {
                    this.closeBlock.hide();

                    if (response.result === 'success') {
                        if ($('.zc-popup-backup__no-backups').hasClass('zc-popup-backup__no-backups_active')) {
                            $('.zc-popup-backup__no-backups').removeClass('zc-popup-backup__no-backups_active');
                        }

                        $('.zc-popup-backup__input').val('');
                        $('.zc-popup-backup__number').text(response.change.count);
                        $('.zc-popup-backup__list').append(response.change.item);
                    } else {
                        console.error(response.result_msg);
                    }
                }).catch((errorMsg) => {
                    this.errorCheck('MetaboxPanelBackup : Save', errorMsg);
                    this.closeBlock.hide();
                });
            }
        });
    }

    /**
     * Delete all backups
     * 
     * @return {null}   None
     * @since 1.1.0
     */
    deleteAllBackups() {
        $('.zc-popup').on('click', '.zc-popup-backup__delete-button', (event) => {
            event.preventDefault();
            /* Act on the event */

            this.closeBlock.show();

            zc.jsonRequest(`zc/module/metabox_panel/backup_${this.getVar('slug')}`, this.getVar('nonce'), {
                type: 'delete',
            }).then((response) => {
                this.closeBlock.hide();

                if (response.result === 'success') {
                    $('.zc-popup-backup__number').text(0);
                    $('.zc-popup-backup__list').empty();
                    $('.zc-popup-backup__no-backups').addClass('zc-popup-backup__no-backups_active');
                } else {
                    console.error(response.result_msg);
                }
            }).catch((errorMsg) => {
                this.errorCheck('MetaboxPanelBackup : Delete all', errorMsg);
                this.closeBlock.hide();
            });
        });
    }

    /**
     * Delete backup item
     * 
     * @return {null}   None
     * @since 1.1.0
     */
    deleteBackupItem() {
        $('.zc-popup').on('click', '.zc-popup-backup__item-button_delete', (event) => {
            event.preventDefault();
            /* Act on the event */

            this.closeBlock.show();

            zc.jsonRequest(`zc/module/metabox_panel/backup_${this.getVar('slug')}`, this.getVar('nonce'), {
                type: 'delete-item',
                backup_name: $(event.currentTarget).parent().attr('id'),
            }).then((response) => {
                this.closeBlock.hide();

                if (response.result === 'success') {
                    $('.zc-popup-backup__number').text(response.count);
                    $(event.currentTarget).parent().remove();

                    if (response.count == 0) {
                        $('.zc-popup-backup__no-backups').addClass('zc-popup-backup__no-backups_active');
                    }
                } else {
                    console.error(response.result_msg);
                }
            }).catch((errorMsg) => {
                this.errorCheck('MetaboxPanelBackup : Delete item', errorMsg);
                this.closeBlock.hide();
            });
        });
    }

    /**
     * Restore backup
     * 
     * @return {null}   None
     * @since 1.1.0
     */
    restoreBackup() {
        $('.zc-popup').on('click', '.zc-popup-backup__item-button_restore', (event) => {
            event.preventDefault();
            /* Act on the event */

            this.closeBlock.show();

            zc.jsonRequest(`zc/module/metabox_panel/backup_${this.getVar('slug')}`, this.getVar('nonce'), {
                type: 'restore',
                id: this.id,
                backup_name: $(event.currentTarget).parent().attr('id'),
            }).then((response) => {
                this.closeBlock.hide();

                if (response.result === 'success') {
                    this.popup.remContent();
                    this.popup.appendContent(zc.tpl(TPL__backup_notification, {
                        type: response.type,
                        title: response.title,
                        content: response.content
                    }));
                    this.popup.showContent();

                    setTimeout(() => {
                        location.reload();
                    }, 2000);
                } else {
                    console.error(response.result_msg);
                }
            }).catch((errorMsg) => {
                this.errorCheck('MetaboxPanelBackup : Restore', errorMsg);
                this.closeBlock.hide();
            });
        });
    }
}