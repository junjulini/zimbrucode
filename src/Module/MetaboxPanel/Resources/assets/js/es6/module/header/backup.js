
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : MetaboxPanel/Module/Header : Backup
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */

'use strict';

import Kernel from '../../../../../../../Panel/Resources/assets/js/es6/module/kernel';

import TPL__backup_notification from './tpl/backup-notification.html';

const $ = jQuery;

export default class Backup extends Kernel {
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

    backupButton() {
        this.click('.zc-metabox-panel-backup-button', () => {
            this.id = $('.zc-panel-template_wid').data('post-id');

            this.popup.set({
                title: this.getVar('backup-pop-up-title'),
                width: 400,
                height: 400,
                ajax: {
                    action: `zc/module/metabox_panel/backup_${this.getVar('slug')}`,
                    type: 'get-content',
                    _ajax_nonce: this.getVar('nonce')
                },
                error: (status) => {
                    this.errorCheck('MetaboxPanelBackup : Load content', status);
                },
                success: ()  => {
                    this.save();
                    this.deleteAll();
                    this.deleteItem();
                    this.restore();
                }
            });
        });
    }

    save() {
        $('.zc-popup').on('click', '.zc-popup-backup__save-button', (event) => {
            event.preventDefault();
            /* Act on the event */

            const backupName = $(event.currentTarget).parent().find('input').val();

            if (backupName && backupName !== undefined) {
                zc.ajax({
                    data: {
                        action: `zc/module/metabox_panel/backup_${this.getVar('slug')}`,
                        type: 'save',
                        id: this.id,
                        backup_name: backupName,
                        _ajax_nonce: this.getVar('nonce')
                    },
                    error: (jqXHR, textStatus) => {
                        this.errorCheck('MetaboxPanelBackup : Save', jqXHR);
                        this.closeBlock.hide();
                    },
                    before: () => {
                        this.closeBlock.show();
                    },
                    success: (response) => {
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
                    }
                });
            }
        });
    }

    deleteAll() {
        $('.zc-popup').on('click', '.zc-popup-backup__delete-button', (event) => {
            event.preventDefault();
            /* Act on the event */

            zc.ajax({
                data: {
                    action: `zc/module/metabox_panel/backup_${this.getVar('slug')}`,
                    type: 'delete',
                    _ajax_nonce: this.getVar('nonce')
                },
                error: (jqXHR, textStatus) => {
                    this.errorCheck('MetaboxPanelBackup : Delete all', jqXHR);
                    this.closeBlock.hide();
                },
                before: () => {
                    this.closeBlock.show();
                },
                success: (response) => {
                    this.closeBlock.hide();

                    if (response.result === 'success') {
                        $('.zc-popup-backup__number').text(0);
                        $('.zc-popup-backup__list').empty();
                        $('.zc-popup-backup__no-backups').addClass('zc-popup-backup__no-backups_active');
                    } else {
                        console.error(response.result_msg);
                    }
                }
            });
        });
    }

    deleteItem() {
        $('.zc-popup').on('click', '.zc-popup-backup__item-button_delete', (event) => {
            event.preventDefault();
            /* Act on the event */

            zc.ajax({
                data: {
                    action: `zc/module/metabox_panel/backup_${this.getVar('slug')}`,
                    type: 'delete-item',
                    backup_name: $(event.currentTarget).parent().attr('id'),
                    _ajax_nonce: this.getVar('nonce')
                },
                error: (jqXHR, textStatus) => {
                    this.errorCheck('MetaboxPanelBackup : Delete item', jqXHR);
                    this.closeBlock.hide();
                },
                before: () => {
                    this.closeBlock.show();
                },
                success: (response) => {
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
                }
            });
        });
    }

    restore() {
        $('.zc-popup').on('click', '.zc-popup-backup__item-button_restore', (event) => {
            event.preventDefault();
            /* Act on the event */

            zc.ajax({
                data: {
                    action: `zc/module/metabox_panel/backup_${this.getVar('slug')}`,
                    type: 'restore',
                    id: this.id,
                    backup_name: $(event.currentTarget).parent().attr('id'),
                    _ajax_nonce: this.getVar('nonce')
                },
                error: (jqXHR, textStatus) => {
                    this.errorCheck('MetaboxPanelBackup : Restore', jqXHR);
                    this.closeBlock.hide();
                },
                before: () => {
                    this.closeBlock.show();
                },
                success: (response) => {
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
                }
            });
        });
    }
}