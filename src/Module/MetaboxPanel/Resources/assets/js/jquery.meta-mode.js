/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/tpl/backup-notification.html":
/*!****************************************************************************************************!*\
  !*** ./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/tpl/backup-notification.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = " <div class=\"zc-panel-popup-notification zc-panel-popup-notification_mode_backup zc-panel-popup-notification_type_{{type}}\"> <div class=\"zc-panel-popup-notification__icon-container\"> <i class=\"zc-panel-popup-notification__icon\"></i> </div> <div class=\"zc-panel-popup-notification__content\"> <span class=\"zc-panel-popup-notification__title\">{{title}}</span> <p class=\"zc-panel-popup-notification__text\">{{content}}</p> </div> </div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/tpl/reset-popup-notification.html":
/*!*********************************************************************************************************!*\
  !*** ./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/tpl/reset-popup-notification.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = " <div class=\"zc-panel-popup-notification zc-panel-popup-notification_type_{{type}}\"> <div class=\"zc-panel-popup-notification__icon-container\"> <i class=\"zc-panel-popup-notification__icon\"></i> </div> <div class=\"zc-panel-popup-notification__content-container\"> <div class=\"zc-panel-popup-notification__content\"> <span class=\"zc-panel-popup-notification__title\">{{title}}</span> <p class=\"zc-panel-popup-notification__text\">{{content}}</p> </div> <div class=\"zc-panel-popup-notification__close-controller\"> <button class=\"zc-panel-popup-notification__close-button\" type=\"button\">{{var_exit}}</button> </div> </div> </div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/backup.js":
/*!*********************************************************************************!*\
  !*** ./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/backup.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Backup)
/* harmony export */ });
/* harmony import */ var _Panel_Resources_assets_js_es6_module_kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../Panel/Resources/assets/js/es6/module/kernel */ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js");
/* harmony import */ var _tpl_backup_notification_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tpl/backup-notification.html */ "./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/tpl/backup-notification.html");

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
 * @since   1.0.0
 */







const $ = jQuery;

class Backup extends _Panel_Resources_assets_js_es6_module_kernel__WEBPACK_IMPORTED_MODULE_0__["default"] {

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
     * @since 1.0.0
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
     * @since 1.0.0
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
     * @since 1.0.0
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
     * @since 1.0.0
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
     * @since 1.0.0
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
                    this.popup.appendContent(zc.tpl(_tpl_backup_notification_html__WEBPACK_IMPORTED_MODULE_1__["default"], {
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

/***/ }),

/***/ "./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/reset.js":
/*!********************************************************************************!*\
  !*** ./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/reset.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Reset)
/* harmony export */ });
/* harmony import */ var _Panel_Resources_assets_js_es6_module_kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../Panel/Resources/assets/js/es6/module/kernel */ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js");
/* harmony import */ var _header_tpl_reset_popup_notification_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/tpl/reset-popup-notification.html */ "./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/tpl/reset-popup-notification.html");

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







const $ = jQuery;

class Reset extends _Panel_Resources_assets_js_es6_module_kernel__WEBPACK_IMPORTED_MODULE_0__["default"] {

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
                            popup.appendContent(zc.tpl(_header_tpl_reset_popup_notification_html__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
                            popup.appendContent(zc.tpl(_header_tpl_reset_popup_notification_html__WEBPACK_IMPORTED_MODULE_1__["default"], {
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

/***/ }),

/***/ "./src/Module/MetaboxPanel/Resources/assets/js/es6/module/mode/meta-mode-body-size.js":
/*!********************************************************************************************!*\
  !*** ./src/Module/MetaboxPanel/Resources/assets/js/es6/module/mode/meta-mode-body-size.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MetaModeBodySize)
/* harmony export */ });
/* harmony import */ var _Panel_Resources_assets_js_es6_module_kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../Panel/Resources/assets/js/es6/module/kernel */ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js");

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





const $ = jQuery;

class MetaModeBodySize extends _Panel_Resources_assets_js_es6_module_kernel__WEBPACK_IMPORTED_MODULE_0__["default"] {

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

/***/ }),

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js":
/*!*******************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/kernel.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Kernel)
/* harmony export */ });

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module : Kernel
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */



const $ = jQuery;

class Kernel {

    /**
     * Constructor
     * 
     * @since 1.0.0
     */
    constructor() {
        this.global = zc.getModuleData('panel');
    }

    /**
     * Scroll bar : Move to top position
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    scrollbarTop() {
        $('.zc-panel .zc-scrollbar').scrollTop(0);
    }

    /**
     * Calculate panel height
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    calcHeight() {
        if (this.getCache('wp-body-height') !== $(window).height()) {
            this.addCache('wp-body-height', $(window).height());
        }
    }

    /**
     * Erase mobile menu
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    eraseMobileMenu() {
        if (this.isDesktopMode()) {
            if (this.service('menu/isSubmenuItem') === true) {
                $('.zc-panel-menu').addClass('zc-panel-menu_submenu-active');
                $('.zc-panel-content').addClass('zc-panel-content_submenu-active');
            }
        } else {
            $('.zc-panel-menu').removeClass('zc-panel-menu_submenu-active');
            $('.zc-panel-content').removeClass('zc-panel-content_submenu-active');
        }

        $('.zc-panel-content').removeClass('zc-panel-content_mobile-menu-visible');
        $('.zc-panel-header__controller-button_type_mobile-menu').removeClass('zc-panel-header__controller-button_type_mobile-menu_active');

        this.service('close-block').hideDefinitely();
    }

    /**
     * Check if the mode is desktop
     * 
     * @return {boolean}   Return "true" if body width is bigger then "min-size.mode2"
     * @since 1.0.0
     */
    isDesktopMode() {
        return ($('.zc-panel').width() >= this.getConfig('min-size/mode2'));
    }

    /**
     * Error checking, in AJAX or elsewhere
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    errorCheck(mainMsg, errorMsg) {
        if (!$('.zc-popup').hasClass('zc-panel-error-confirm')) {

            if ($('.zc-popup').length) {
                $('.zc-popup').remove();
            }

            console.error(errorMsg);

            zc.confirm({
                title: mainMsg,
                subject: `${errorMsg} <br> Page will be reloaded, ok?`,
                class: 'zc-panel-error-confirm',
                ok: () => {
                    location.reload();
                }
            });
        }
    }

    /**
     * Get global variable
     * 
     * @param {string} key   Object path
     * @param {mix}    def   Default value
     * @return {mix}         Action result
     * @since 1.0.0
     */
    getVar(key, def) {
        const result = zc.deepFindAndSetting(this.global.vars, key);
        if (result !== undefined) {
            return result;
        } else {
            return def;
        }
    }

    /**
     * Add global variable value
     * 
     * @param {string} key   Object path
     * @param {mix}    data  Variable value
     * @return {null}        None
     * @since 1.0.0
     */
    addVar(key, data) {
        zc.deepFindAndSetting(this.global.vars, key, data);
    }

    /**
     * Add global cache value
     * 
     * @param {string} key   Object path
     * @param {mix}    data  Cache value
     * @return {null}        None
     * @since 1.0.0
     */
    addCache(key, data) {
        zc.deepFindAndSetting(this.global.cache, key, data);
    }

    /**
     * Get global cache
     * 
     * @param {string} key   Object path
     * @param {mix}    def   Default value
     * @return {mix}         Action result
     * @since 1.0.0
     */
    getCache(key, def) {
        const result = zc.deepFindAndSetting(this.global.cache, key);
        if (result !== undefined) {
            return result;
        } else {
            return def;
        }
    }
    
    /**
     * Remove element from cache object
     * 
     * @param {string} key   Object path
     * @return {null}        None
     * @since 1.0.0
     */
    remCache(key) {
        zc.deepFindAndSetting(this.global.cache, key, false, true);
    }

    /**
     * Add global config value
     * 
     * @param {string} key   Object path
     * @param {mix}    data  Config value
     * @return {null}        None
     * @since 1.0.0
     */
    addConfig(key, data) {
        zc.deepFindAndSetting(this.global.config, key, data);
    }

    /**
     * Get global config
     * 
     * @param {string} key   Object path
     * @param {mix}    def   Default value
     * @return {mix}         Action result
     * @since 1.0.0
     */
    getConfig(key, def) {
        const result = zc.deepFindAndSetting(this.global.config, key);
        if (result !== undefined) {
            return result;
        } else {
            return def;
        }
    }

    /**
     * Service
     * 
     * @param {string}   name       Service name
     * @param {callable} callback   Callback
     * @return {object}             Service instance
     * @since 1.0.0
     */
    service(name, callback) {
        if (name !== undefined && typeof name === 'string') {
            if ($.isFunction(callback) || typeof callback === 'object') {
                this.addCache(`services/${name}`, callback);
            } else {
                const service = this.getCache(`services/${name}`, false);
                if (service !== undefined) {
                    return service;
                } else {
                    throw new Error(`Next service not exist : ${name}`);
                }
            }
        }
    }

    /**
     * Attach an event handler function for one or more events to the selected elements
     * 
     * @param {string}   events           One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin"
     * @param {string}   selector         A selector string to filter the descendants of the selected elements that trigger the event
     * @param {callable} handler          A function to execute when the event is triggered
     * @param {boolean}  preventDefault   True if "preventDefault" must be used
     * @since 1.0.0
     */
    on(events, selector, handler, preventDefault = false) {
        $('.zc-panel').on(events, selector, (event) => {
            if (preventDefault === true) {
                event.preventDefault();
            }

            handler($(event.currentTarget), event);
        });
    }

    /**
     * Attach an event handler function for one or more events to the selected elements
     * 
     * @param {string}   selector         A selector string to filter the descendants of the selected elements that trigger the event
     * @param {callable} handler          A function to execute when the event is triggered
     * @param {boolean}  preventDefault   True if "preventDefault" must be used
     * @since 1.0.0
     */
    click(selector, handler, preventDefault = true) {
        this.on('click', selector, handler, preventDefault);
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************************************************************!*\
  !*** ./src/Module/MetaboxPanel/Resources/assets/js/es6/jquery.meta-mode.es6.js ***!
  \*********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_mode_meta_mode_body_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/mode/meta-mode-body-size */ "./src/Module/MetaboxPanel/Resources/assets/js/es6/module/mode/meta-mode-body-size.js");
/* harmony import */ var _module_header_backup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/header/backup */ "./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/backup.js");
/* harmony import */ var _module_header_reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/header/reset */ "./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/reset.js");

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : MetaboxPanel : Meta mode
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */







zc.module.panel.addMode(($, panel) => {
    panel.addConfig('height-FAH', 56);
    panel.addConfig('min-size/mode2', 780);

    panel.closeBlock();          // Initializing of "close block"
    panel.controlInit();         // Initialization of controls
    panel.controlHelp();         // Control help window
    panel.scrollbar();           // Initialization of scroll bar
    panel.noMetaScaleIfMobile(); // Disable meta scale if mobile device
    panel.condition();           // Initialization of panel condition checker
    panel.tooltip();             // Initialization of tooltip
    panel.menu();                // Panel menu

    new _module_mode_meta_mode_body_size__WEBPACK_IMPORTED_MODULE_0__["default"]; // Panel body size
    new _module_header_backup__WEBPACK_IMPORTED_MODULE_1__["default"];   // Meta backup, import/export
    new _module_header_reset__WEBPACK_IMPORTED_MODULE_2__["default"];    // Reset meta options

    $('.zc-panel-template__panel-loading').hide();
    $('.zc-panel.zc-panel_mode_meta').css('visibility', 'visible');

    /**
     * Disable save button
     * 
     * @return {null} None
     * @since 1.0.0
     */
    panel.disableSaveButton = () => {};

    /**
     * Enable save button
     * 
     * @return {null} None
     * @since 1.0.0
     */
    panel.enableSaveButton = () => {};

    /**
     * Disable reset button
     * 
     * @return {null} None
     * @since 1.0.0
     */
    panel.disableResetButton = () => {};

    /**
     * Enable reset button
     * 
     * @return {null} None
     * @since 1.0.0
     */
    panel.enableResetButton = () => {};
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL01vZHVsZS9NZXRhYm94UGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9qcXVlcnkubWV0YS1tb2RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxpSUFBaUksTUFBTSxxT0FBcU8sT0FBTyx5REFBeUQsU0FBUztBQUNyYjtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDSG5CO0FBQ0EseUZBQXlGLE1BQU0sb1NBQW9TLE9BQU8seURBQXlELFNBQVMsd0pBQXdKLFVBQVU7QUFDOW1CO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFeUU7O0FBRWhCOztBQUV0RTs7QUFFZSxxQkFBcUIsb0ZBQU07O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxvQkFBb0I7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFpRSxvQkFBb0I7QUFDckY7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDZEQUE2RCxvQkFBb0I7QUFDakY7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNkRBQTZELG9CQUFvQjtBQUNqRjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNkRBQTZELG9CQUFvQjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRCxxRUFBd0I7QUFDNUU7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFeUU7O0FBRUU7O0FBRXhGOztBQUVlLG9CQUFvQixvRkFBTTs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0VBQW9FLG9CQUFvQjtBQUN4RjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsdURBQXVELGlGQUE2QjtBQUNwRjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSx1REFBdUQsaUZBQTZCO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRXlFOztBQUV0Rjs7QUFFZSwrQkFBK0Isb0ZBQU07O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsZUFBZTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjs7QUFFZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLGFBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixhQUFhO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsYUFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLGFBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixhQUFhO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsYUFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLGFBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFVBQVU7QUFDekIsZUFBZSxVQUFVO0FBQ3pCLGdCQUFnQixvQkFBb0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxLQUFLO0FBQy9DLGNBQWM7QUFDZCwwREFBMEQsS0FBSztBQUMvRDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGdFQUFnRSxLQUFLO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QixlQUFlLFVBQVU7QUFDekIsZUFBZSxVQUFVO0FBQ3pCLGVBQWUsVUFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFVBQVU7QUFDekIsZUFBZSxVQUFVO0FBQ3pCLGVBQWUsVUFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3pRQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFNEM7QUFDWDtBQUNEOztBQUU3QztBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQyxpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQyxpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDLGlDQUFpQzs7QUFFakMsUUFBUSx3RUFBUSxFQUFFO0FBQ2xCLFFBQVEsNkRBQU0sSUFBSTtBQUNsQixRQUFRLDREQUFLLEtBQUs7O0FBRWxCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvTWV0YWJveFBhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9oZWFkZXIvdHBsL2JhY2t1cC1ub3RpZmljYXRpb24uaHRtbCIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9NZXRhYm94UGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2hlYWRlci90cGwvcmVzZXQtcG9wdXAtbm90aWZpY2F0aW9uLmh0bWwiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvTWV0YWJveFBhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9oZWFkZXIvYmFja3VwLmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL01ldGFib3hQYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvaGVhZGVyL3Jlc2V0LmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL01ldGFib3hQYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvbW9kZS9tZXRhLW1vZGUtYm9keS1zaXplLmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9rZXJuZWwuanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL01ldGFib3hQYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9qcXVlcnkubWV0YS1tb2RlLmVzNi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCIgPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uIHpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9tb2RlX2JhY2t1cCB6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fdHlwZV97e3R5cGV9fVxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9faWNvbi1jb250YWluZXJcXFwiPiA8aSBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19pY29uXFxcIj48L2k+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2NvbnRlbnRcXFwiPiA8c3BhbiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX190aXRsZVxcXCI+e3t0aXRsZX19PC9zcGFuPiA8cCBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX190ZXh0XFxcIj57e2NvbnRlbnR9fTwvcD4gPC9kaXY+IDwvZGl2PlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCIgPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uIHpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl90eXBlX3t7dHlwZX19XFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19pY29uLWNvbnRhaW5lclxcXCI+IDxpIGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2ljb25cXFwiPjwvaT4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fY29udGVudC1jb250YWluZXJcXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2NvbnRlbnRcXFwiPiA8c3BhbiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX190aXRsZVxcXCI+e3t0aXRsZX19PC9zcGFuPiA8cCBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX190ZXh0XFxcIj57e2NvbnRlbnR9fTwvcD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fY2xvc2UtY29udHJvbGxlclxcXCI+IDxidXR0b24gY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fY2xvc2UtYnV0dG9uXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPnt7dmFyX2V4aXR9fTwvYnV0dG9uPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IE1ldGFib3hQYW5lbC9Nb2R1bGUvSGVhZGVyIDogQmFja3VwXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBLZXJuZWwgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2tlcm5lbCc7XG5cbmltcG9ydCBUUExfX2JhY2t1cF9ub3RpZmljYXRpb24gZnJvbSAnLi90cGwvYmFja3VwLW5vdGlmaWNhdGlvbi5odG1sJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja3VwIGV4dGVuZHMgS2VybmVsIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNsb3NlQmxvY2sgID0ge1xuICAgICAgICAgICAgX19jYjogJy56Yy1wb3B1cC1iYWNrdXBfX2Nsb3NlLWJsb2NrJyxcblxuICAgICAgICAgICAgc2hvdzogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQodGhpcy5jbG9zZUJsb2NrLl9fY2IpLnNob3coKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGhpZGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkKHRoaXMuY2xvc2VCbG9jay5fX2NiKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5wb3B1cCA9IHpjLnBvcHVwKCk7XG5cbiAgICAgICAgdGhpcy5iYWNrdXBCdXR0b24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCYWNrdXAgYnV0dG9uXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYmFja3VwQnV0dG9uKCkge1xuICAgICAgICB0aGlzLmNsaWNrKCcuemMtbWV0YWJveC1wYW5lbC1iYWNrdXAtYnV0dG9uJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pZCA9ICQoJy56Yy1wYW5lbC10ZW1wbGF0ZV93aWQnKS5kYXRhKCdwb3N0LWlkJyk7XG5cbiAgICAgICAgICAgIHRoaXMucG9wdXAuYWRkKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRWYXIoJ2JhY2t1cC1wb3B1cC10aXRsZScpLFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgICAganNvblJlcXVlc3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBgemMvbW9kdWxlL21ldGFib3hfcGFuZWwvYmFja3VwXyR7dGhpcy5nZXRWYXIoJ3NsdWcnKX1gLFxuICAgICAgICAgICAgICAgICAgICBub25jZTogdGhpcy5nZXRWYXIoJ25vbmNlJyksXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdnZXQtY29udGVudCcsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiAoZXJyb3JNc2cpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvckNoZWNrKCdNZXRhYm94UGFuZWxCYWNrdXAgOiBMb2FkIGNvbnRlbnQnLCBlcnJvck1zZyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSAgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVCYWNrdXAoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVBbGxCYWNrdXBzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQmFja3VwSXRlbSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3RvcmVCYWNrdXAoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSBiYWNrdXBcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzYXZlQmFja3VwKCkge1xuICAgICAgICAkKCcuemMtcG9wdXAnKS5vbignY2xpY2snLCAnLnpjLXBvcHVwLWJhY2t1cF9fc2F2ZS1idXR0b24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgIGNvbnN0IGJhY2t1cE5hbWUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpLmZpbmQoJ2lucHV0JykudmFsKCk7XG5cbiAgICAgICAgICAgIGlmIChiYWNrdXBOYW1lICYmIGJhY2t1cE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5zaG93KCk7XG5cbiAgICAgICAgICAgICAgICB6Yy5qc29uUmVxdWVzdChgemMvbW9kdWxlL21ldGFib3hfcGFuZWwvYmFja3VwXyR7dGhpcy5nZXRWYXIoJ3NsdWcnKX1gLCB0aGlzLmdldFZhcignbm9uY2UnKSwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2F2ZScsXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgICAgICAgICBiYWNrdXBfbmFtZTogYmFja3VwTmFtZSxcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQmxvY2suaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy56Yy1wb3B1cC1iYWNrdXBfX25vLWJhY2t1cHMnKS5oYXNDbGFzcygnemMtcG9wdXAtYmFja3VwX19uby1iYWNrdXBzX2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwLWJhY2t1cF9fbm8tYmFja3VwcycpLnJlbW92ZUNsYXNzKCd6Yy1wb3B1cC1iYWNrdXBfX25vLWJhY2t1cHNfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cC1iYWNrdXBfX2lucHV0JykudmFsKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cC1iYWNrdXBfX251bWJlcicpLnRleHQocmVzcG9uc2UuY2hhbmdlLmNvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cC1iYWNrdXBfX2xpc3QnKS5hcHBlbmQocmVzcG9uc2UuY2hhbmdlLml0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5yZXN1bHRfbXNnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvck1zZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yQ2hlY2soJ01ldGFib3hQYW5lbEJhY2t1cCA6IFNhdmUnLCBlcnJvck1zZyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhbGwgYmFja3Vwc1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGRlbGV0ZUFsbEJhY2t1cHMoKSB7XG4gICAgICAgICQoJy56Yy1wb3B1cCcpLm9uKCdjbGljaycsICcuemMtcG9wdXAtYmFja3VwX19kZWxldGUtYnV0dG9uJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICB0aGlzLmNsb3NlQmxvY2suc2hvdygpO1xuXG4gICAgICAgICAgICB6Yy5qc29uUmVxdWVzdChgemMvbW9kdWxlL21ldGFib3hfcGFuZWwvYmFja3VwXyR7dGhpcy5nZXRWYXIoJ3NsdWcnKX1gLCB0aGlzLmdldFZhcignbm9uY2UnKSwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdkZWxldGUnLFxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQmxvY2suaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cC1iYWNrdXBfX251bWJlcicpLnRleHQoMCk7XG4gICAgICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cC1iYWNrdXBfX2xpc3QnKS5lbXB0eSgpO1xuICAgICAgICAgICAgICAgICAgICAkKCcuemMtcG9wdXAtYmFja3VwX19uby1iYWNrdXBzJykuYWRkQ2xhc3MoJ3pjLXBvcHVwLWJhY2t1cF9fbm8tYmFja3Vwc19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLnJlc3VsdF9tc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvck1zZykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JDaGVjaygnTWV0YWJveFBhbmVsQmFja3VwIDogRGVsZXRlIGFsbCcsIGVycm9yTXNnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQmxvY2suaGlkZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBiYWNrdXAgaXRlbVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGRlbGV0ZUJhY2t1cEl0ZW0oKSB7XG4gICAgICAgICQoJy56Yy1wb3B1cCcpLm9uKCdjbGljaycsICcuemMtcG9wdXAtYmFja3VwX19pdGVtLWJ1dHRvbl9kZWxldGUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5zaG93KCk7XG5cbiAgICAgICAgICAgIHpjLmpzb25SZXF1ZXN0KGB6Yy9tb2R1bGUvbWV0YWJveF9wYW5lbC9iYWNrdXBfJHt0aGlzLmdldFZhcignc2x1ZycpfWAsIHRoaXMuZ2V0VmFyKCdub25jZScpLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2RlbGV0ZS1pdGVtJyxcbiAgICAgICAgICAgICAgICBiYWNrdXBfbmFtZTogJChldmVudC5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKS5hdHRyKCdpZCcpLFxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQmxvY2suaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cC1iYWNrdXBfX251bWJlcicpLnRleHQocmVzcG9uc2UuY291bnQpO1xuICAgICAgICAgICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5jb3VudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuemMtcG9wdXAtYmFja3VwX19uby1iYWNrdXBzJykuYWRkQ2xhc3MoJ3pjLXBvcHVwLWJhY2t1cF9fbm8tYmFja3Vwc19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UucmVzdWx0X21zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yTXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvckNoZWNrKCdNZXRhYm94UGFuZWxCYWNrdXAgOiBEZWxldGUgaXRlbScsIGVycm9yTXNnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQmxvY2suaGlkZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc3RvcmUgYmFja3VwXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcmVzdG9yZUJhY2t1cCgpIHtcbiAgICAgICAgJCgnLnpjLXBvcHVwJykub24oJ2NsaWNrJywgJy56Yy1wb3B1cC1iYWNrdXBfX2l0ZW0tYnV0dG9uX3Jlc3RvcmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5zaG93KCk7XG5cbiAgICAgICAgICAgIHpjLmpzb25SZXF1ZXN0KGB6Yy9tb2R1bGUvbWV0YWJveF9wYW5lbC9iYWNrdXBfJHt0aGlzLmdldFZhcignc2x1ZycpfWAsIHRoaXMuZ2V0VmFyKCdub25jZScpLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3Jlc3RvcmUnLFxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgICAgIGJhY2t1cF9uYW1lOiAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpLmF0dHIoJ2lkJyksXG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cC5yZW1Db250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXAuYXBwZW5kQ29udGVudCh6Yy50cGwoVFBMX19iYWNrdXBfbm90aWZpY2F0aW9uLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiByZXNwb25zZS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogcmVzcG9uc2UuY29udGVudFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXAuc2hvd0NvbnRlbnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLnJlc3VsdF9tc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvck1zZykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JDaGVjaygnTWV0YWJveFBhbmVsQmFja3VwIDogUmVzdG9yZScsIGVycm9yTXNnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQmxvY2suaGlkZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IE1ldGFib3hQYW5lbC9Nb2R1bGUvSGVhZGVyIDogUmVzZXRcbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEtlcm5lbCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUva2VybmVsJztcblxuaW1wb3J0IFRQTF9fcmVzZXRfcG9wdXBfbm90aWZpY2F0aW9uIGZyb20gJy4uL2hlYWRlci90cGwvcmVzZXQtcG9wdXAtbm90aWZpY2F0aW9uLmh0bWwnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNldCBleHRlbmRzIEtlcm5lbCB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuY29uZmlybSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbmZpcm0gYWN0aW9uXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY29uZmlybSgpIHtcbiAgICAgICAgdGhpcy5jbGljaygnLnpjLW1ldGFib3gtcGFuZWwtcmVzZXQtYnV0dG9uJywgKCkgPT4ge1xuICAgICAgICAgICAgemMuY29uZmlybSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0VmFyKCdyZXNldC1wb3B1cC10aXRsZScpLFxuICAgICAgICAgICAgICAgIHN1YmplY3Q6IHRoaXMuZ2V0VmFyKCdyZXNldC1wb3B1cC1zdWJqZWN0JyksXG4gICAgICAgICAgICAgICAgdGl0bGVPSzogdGhpcy5nZXRWYXIoJ3Jlc2V0LXBvcHVwLW9rJyksXG4gICAgICAgICAgICAgICAgdGl0bGVDYW5jZWw6IHRoaXMuZ2V0VmFyKCdyZXNldC1wb3B1cC1jYW5jZWwnKSxcbiAgICAgICAgICAgICAgICBvazogKHBvcHVwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwLmhpZGVDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9tZXRhYm94LXBhbmVsL3Jlc2V0L2JlZm9yZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHpjLmpzb25SZXF1ZXN0KGB6Yy9tb2R1bGUvbWV0YWJveF9wYW5lbC9yZXNldF8ke3RoaXMuZ2V0VmFyKCdzbHVnJyl9YCwgdGhpcy5nZXRWYXIoJ25vbmNlJyksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAkKCcuemMtcGFuZWwtdGVtcGxhdGVfd2lkJykuZGF0YSgncG9zdC1pZCcpLFxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnR5cGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLnJlbUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5hcHBlbmRDb250ZW50KHpjLnRwbChUUExfX3Jlc2V0X3BvcHVwX25vdGlmaWNhdGlvbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiByZXNwb25zZS50eXBlID8/ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS50aXRsZSA/PyAnRXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiByZXNwb25zZS5jb250ZW50ID8/ICdVbmtub3duIGVycm9yJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5zaG93Q29udGVudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL21ldGFib3gtcGFuZWwvcmVzZXQvc3VjY2Vzcy1zdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLnJlbUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5hcHBlbmRDb250ZW50KHpjLnRwbChUUExfX3Jlc2V0X3BvcHVwX25vdGlmaWNhdGlvbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiByZXNwb25zZS50eXBlID8/ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS50aXRsZSA/PyAnRXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiByZXNwb25zZS5jb250ZW50ID8/ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyX2V4aXQ6IHRoaXMuZ2V0VmFyKCdleGl0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAuc2hvd0NvbnRlbnQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cCcpLm9uKCdjbGljaycsICcuemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19jbG9zZS1idXR0b24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvbWV0YWJveC1wYW5lbC9yZXNldC9zdWNjZXNzLWluZm8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yTXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvbWV0YWJveC1wYW5lbC9yZXNldC9lcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvckNoZWNrKCdNZXRhYm94UGFuZWwgOiBSZXNldCBzZXR0aW5ncycsIGVycm9yTXNnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IE1ldGFib3hQYW5lbC9Nb2R1bGUvTW9kZSA6IE1ldGEgbW9kZSBib2R5IHNpemVcbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEtlcm5lbCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUva2VybmVsJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YU1vZGVCb2R5U2l6ZSBleHRlbmRzIEtlcm5lbCB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGxldCBwYW5lbFdpZHRoID0gJCgnLnpjLXBhbmVsLnpjLXBhbmVsX21vZGVfbWV0YScpLndpZHRoKCk7XG4gICAgICAgIGlmIChwYW5lbFdpZHRoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja1BhbmVsV2lkdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tQYW5lbEhlaWdodCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBhbmVsV2lkdGggPSAkKCcuemMtcGFuZWwuemMtcGFuZWxfbW9kZV9tZXRhJykud2lkdGgoKTtcblxuICAgICAgICAgICAgICAgIGlmIChwYW5lbFdpZHRoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUGFuZWxXaWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUGFuZWxIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgemMucmVzaXplKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXJhc2VNb2JpbGVNZW51KCk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrUGFuZWxIZWlnaHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIG1vZGUgc2l6ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB3aWR0aCAgIFBhbmVsIHdpZHRoXG4gICAgICogQHJldHVybiB7bnVsbH0gICAgICAgICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZE1vZGVTaXplKHdpZHRoKSB7XG4gICAgICAgIGxldCBtb2RlID0gJ21vZGUtMS0nO1xuXG4gICAgICAgIGlmICh0aGlzLmdldENvbmZpZygnbWluLXNpemUvbW9kZTEnKSA+PSB3aWR0aCkge1xuICAgICAgICAgICAgbW9kZSA9ICdtb2RlLTEtJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdldENvbmZpZygnbWluLXNpemUvbW9kZTInKSA+PSB3aWR0aCkge1xuICAgICAgICAgICAgbW9kZSA9ICdtb2RlLTItJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZGUgPSAnbW9kZS0zLSc7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcuemMtcGFuZWwuemMtcGFuZWxfbW9kZV9tZXRhJykuYXR0cignZGF0YS13aWR0aCcsIG1vZGUgKyB3aWR0aCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3NpemUtY2hhbmdlZCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIHBhbmVsIGhlaWdodFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNoZWNrUGFuZWxIZWlnaHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGVza3RvcE1vZGUoKSkge1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLnpjLXBhbmVsX21vZGVfbWV0YScpLmhlaWdodCgnYXV0bycpO1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLnpjLXBhbmVsX21vZGVfbWV0YScpLmNzcygnbWluLWhlaWdodCcsICQoJy56Yy1wYW5lbC56Yy1wYW5lbF9tb2RlX21ldGEgLnpjLXBhbmVsLW1lbnVfX2xpc3QnKS5vdXRlckhlaWdodCh0cnVlKSArIDYwKTtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC56Yy1wYW5lbF9tb2RlX21ldGEgLnpjLXBhbmVsLWNvbnRyb2xzJykuaGVpZ2h0KCdhdXRvJyk7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwuemMtcGFuZWxfbW9kZV9tZXRhIC56Yy1wYW5lbC1zdWJtZW51X19zY3JvbGxiYXItY29udGFpbmVyJykuaGVpZ2h0KCdhdXRvJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwuemMtcGFuZWxfbW9kZV9tZXRhJykuaGVpZ2h0KCcxMDAlJyk7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwuemMtcGFuZWxfbW9kZV9tZXRhJykuY3NzKCdtaW4taGVpZ2h0JywgJ2luaGVyaXQnKTtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC56Yy1wYW5lbF9tb2RlX21ldGEgLnpjLXBhbmVsLWNvbnRyb2xzJykuaGVpZ2h0KCcxMDAlJyk7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwuemMtcGFuZWxfbW9kZV9tZXRhIC56Yy1wYW5lbC1zdWJtZW51X19zY3JvbGxiYXItY29udGFpbmVyJykuaGVpZ2h0KCcxMDAlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBwYW5lbCB3aWR0aFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNoZWNrUGFuZWxXaWR0aCgpIHtcbiAgICAgICAgY29uc3Qgcm8gPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cmllc1swXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRNb2RlU2l6ZShlbnRyaWVzWzBdLmNvbnRlbnRSZWN0LndpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcm8ub2JzZXJ2ZSgkKCcuemMtcGFuZWwuemMtcGFuZWxfbW9kZV9tZXRhJykuZ2V0KDApKTtcbiAgICB9XG59IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIHppbWJydWNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBQYW5lbC9Nb2R1bGUgOiBLZXJuZWxcbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2VybmVsIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsID0gemMuZ2V0TW9kdWxlRGF0YSgncGFuZWwnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgYmFyIDogTW92ZSB0byB0b3AgcG9zaXRpb25cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzY3JvbGxiYXJUb3AoKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbCAuemMtc2Nyb2xsYmFyJykuc2Nyb2xsVG9wKDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBwYW5lbCBoZWlnaHRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjYWxjSGVpZ2h0KCkge1xuICAgICAgICBpZiAodGhpcy5nZXRDYWNoZSgnd3AtYm9keS1oZWlnaHQnKSAhPT0gJCh3aW5kb3cpLmhlaWdodCgpKSB7XG4gICAgICAgICAgICB0aGlzLmFkZENhY2hlKCd3cC1ib2R5LWhlaWdodCcsICQod2luZG93KS5oZWlnaHQoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFcmFzZSBtb2JpbGUgbWVudVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGVyYXNlTW9iaWxlTWVudSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZXNrdG9wTW9kZSgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZXJ2aWNlKCdtZW51L2lzU3VibWVudUl0ZW0nKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1tZW51JykuYWRkQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250ZW50X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwtbWVudScpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1tZW51X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250ZW50X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250ZW50X21vYmlsZS1tZW51LXZpc2libGUnKTtcbiAgICAgICAgJCgnLnpjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudScpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnVfYWN0aXZlJyk7XG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlKCdjbG9zZS1ibG9jaycpLmhpZGVEZWZpbml0ZWx5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIG1vZGUgaXMgZGVza3RvcFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59ICAgUmV0dXJuIFwidHJ1ZVwiIGlmIGJvZHkgd2lkdGggaXMgYmlnZ2VyIHRoZW4gXCJtaW4tc2l6ZS5tb2RlMlwiXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaXNEZXNrdG9wTW9kZSgpIHtcbiAgICAgICAgcmV0dXJuICgkKCcuemMtcGFuZWwnKS53aWR0aCgpID49IHRoaXMuZ2V0Q29uZmlnKCdtaW4tc2l6ZS9tb2RlMicpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFcnJvciBjaGVja2luZywgaW4gQUpBWCBvciBlbHNld2hlcmVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBlcnJvckNoZWNrKG1haW5Nc2csIGVycm9yTXNnKSB7XG4gICAgICAgIGlmICghJCgnLnpjLXBvcHVwJykuaGFzQ2xhc3MoJ3pjLXBhbmVsLWVycm9yLWNvbmZpcm0nKSkge1xuXG4gICAgICAgICAgICBpZiAoJCgnLnpjLXBvcHVwJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwJykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xuXG4gICAgICAgICAgICB6Yy5jb25maXJtKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogbWFpbk1zZyxcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBgJHtlcnJvck1zZ30gPGJyPiBQYWdlIHdpbGwgYmUgcmVsb2FkZWQsIG9rP2AsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICd6Yy1wYW5lbC1lcnJvci1jb25maXJtJyxcbiAgICAgICAgICAgICAgICBvazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBnbG9iYWwgdmFyaWFibGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgT2JqZWN0IHBhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGVmICAgRGVmYXVsdCB2YWx1ZVxuICAgICAqIEByZXR1cm4ge21peH0gICAgICAgICBBY3Rpb24gcmVzdWx0XG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0VmFyKGtleSwgZGVmKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC52YXJzLCBrZXkpO1xuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGdsb2JhbCB2YXJpYWJsZSB2YWx1ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBPYmplY3QgcGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkYXRhICBWYXJpYWJsZSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge251bGx9ICAgICAgICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkVmFyKGtleSwgZGF0YSkge1xuICAgICAgICB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwudmFycywga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZ2xvYmFsIGNhY2hlIHZhbHVlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIE9iamVjdCBwYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRhdGEgIENhY2hlIHZhbHVlXG4gICAgICogQHJldHVybiB7bnVsbH0gICAgICAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRDYWNoZShrZXksIGRhdGEpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNhY2hlLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBnbG9iYWwgY2FjaGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgT2JqZWN0IHBhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGVmICAgRGVmYXVsdCB2YWx1ZVxuICAgICAqIEByZXR1cm4ge21peH0gICAgICAgICBBY3Rpb24gcmVzdWx0XG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0Q2FjaGUoa2V5LCBkZWYpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNhY2hlLCBrZXkpO1xuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbGVtZW50IGZyb20gY2FjaGUgb2JqZWN0XG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIE9iamVjdCBwYXRoXG4gICAgICogQHJldHVybiB7bnVsbH0gICAgICAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICByZW1DYWNoZShrZXkpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNhY2hlLCBrZXksIGZhbHNlLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZ2xvYmFsIGNvbmZpZyB2YWx1ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBPYmplY3QgcGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkYXRhICBDb25maWcgdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgICAgICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZENvbmZpZyhrZXksIGRhdGEpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNvbmZpZywga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZ2xvYmFsIGNvbmZpZ1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBPYmplY3QgcGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkZWYgICBEZWZhdWx0IHZhbHVlXG4gICAgICogQHJldHVybiB7bWl4fSAgICAgICAgIEFjdGlvbiByZXN1bHRcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBnZXRDb25maWcoa2V5LCBkZWYpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNvbmZpZywga2V5KTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRlZjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcnZpY2VcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gICBuYW1lICAgICAgIFNlcnZpY2UgbmFtZVxuICAgICAqIEBwYXJhbSB7Y2FsbGFibGV9IGNhbGxiYWNrICAgQ2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICAgICAgIFNlcnZpY2UgaW5zdGFuY2VcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzZXJ2aWNlKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSB8fCB0eXBlb2YgY2FsbGJhY2sgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDYWNoZShgc2VydmljZXMvJHtuYW1lfWAsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuZ2V0Q2FjaGUoYHNlcnZpY2VzLyR7bmFtZX1gLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlcnZpY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmljZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgc2VydmljZSBub3QgZXhpc3QgOiAke25hbWV9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoIGFuIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24gZm9yIG9uZSBvciBtb3JlIGV2ZW50cyB0byB0aGUgc2VsZWN0ZWQgZWxlbWVudHNcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gICBldmVudHMgICAgICAgICAgIE9uZSBvciBtb3JlIHNwYWNlLXNlcGFyYXRlZCBldmVudCB0eXBlcyBhbmQgb3B0aW9uYWwgbmFtZXNwYWNlcywgc3VjaCBhcyBcImNsaWNrXCIgb3IgXCJrZXlkb3duLm15UGx1Z2luXCJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gICBzZWxlY3RvciAgICAgICAgIEEgc2VsZWN0b3Igc3RyaW5nIHRvIGZpbHRlciB0aGUgZGVzY2VuZGFudHMgb2YgdGhlIHNlbGVjdGVkIGVsZW1lbnRzIHRoYXQgdHJpZ2dlciB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0ge2NhbGxhYmxlfSBoYW5kbGVyICAgICAgICAgIEEgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIHRoZSBldmVudCBpcyB0cmlnZ2VyZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59ICBwcmV2ZW50RGVmYXVsdCAgIFRydWUgaWYgXCJwcmV2ZW50RGVmYXVsdFwiIG11c3QgYmUgdXNlZFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIG9uKGV2ZW50cywgc2VsZWN0b3IsIGhhbmRsZXIsIHByZXZlbnREZWZhdWx0ID0gZmFsc2UpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsJykub24oZXZlbnRzLCBzZWxlY3RvciwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJldmVudERlZmF1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoYW5kbGVyKCQoZXZlbnQuY3VycmVudFRhcmdldCksIGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoIGFuIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24gZm9yIG9uZSBvciBtb3JlIGV2ZW50cyB0byB0aGUgc2VsZWN0ZWQgZWxlbWVudHNcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gICBzZWxlY3RvciAgICAgICAgIEEgc2VsZWN0b3Igc3RyaW5nIHRvIGZpbHRlciB0aGUgZGVzY2VuZGFudHMgb2YgdGhlIHNlbGVjdGVkIGVsZW1lbnRzIHRoYXQgdHJpZ2dlciB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0ge2NhbGxhYmxlfSBoYW5kbGVyICAgICAgICAgIEEgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIHRoZSBldmVudCBpcyB0cmlnZ2VyZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59ICBwcmV2ZW50RGVmYXVsdCAgIFRydWUgaWYgXCJwcmV2ZW50RGVmYXVsdFwiIG11c3QgYmUgdXNlZFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNsaWNrKHNlbGVjdG9yLCBoYW5kbGVyLCBwcmV2ZW50RGVmYXVsdCA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5vbignY2xpY2snLCBzZWxlY3RvciwgaGFuZGxlciwgcHJldmVudERlZmF1bHQpO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogTWV0YWJveFBhbmVsIDogTWV0YSBtb2RlXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBCb2R5U2l6ZSBmcm9tICcuL21vZHVsZS9tb2RlL21ldGEtbW9kZS1ib2R5LXNpemUnO1xuaW1wb3J0IEJhY2t1cCAgIGZyb20gJy4vbW9kdWxlL2hlYWRlci9iYWNrdXAnO1xuaW1wb3J0IFJlc2V0ICAgIGZyb20gJy4vbW9kdWxlL2hlYWRlci9yZXNldCc7XG5cbnpjLm1vZHVsZS5wYW5lbC5hZGRNb2RlKCgkLCBwYW5lbCkgPT4ge1xuICAgIHBhbmVsLmFkZENvbmZpZygnaGVpZ2h0LUZBSCcsIDU2KTtcbiAgICBwYW5lbC5hZGRDb25maWcoJ21pbi1zaXplL21vZGUyJywgNzgwKTtcblxuICAgIHBhbmVsLmNsb3NlQmxvY2soKTsgICAgICAgICAgLy8gSW5pdGlhbGl6aW5nIG9mIFwiY2xvc2UgYmxvY2tcIlxuICAgIHBhbmVsLmNvbnRyb2xJbml0KCk7ICAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gb2YgY29udHJvbHNcbiAgICBwYW5lbC5jb250cm9sSGVscCgpOyAgICAgICAgIC8vIENvbnRyb2wgaGVscCB3aW5kb3dcbiAgICBwYW5lbC5zY3JvbGxiYXIoKTsgICAgICAgICAgIC8vIEluaXRpYWxpemF0aW9uIG9mIHNjcm9sbCBiYXJcbiAgICBwYW5lbC5ub01ldGFTY2FsZUlmTW9iaWxlKCk7IC8vIERpc2FibGUgbWV0YSBzY2FsZSBpZiBtb2JpbGUgZGV2aWNlXG4gICAgcGFuZWwuY29uZGl0aW9uKCk7ICAgICAgICAgICAvLyBJbml0aWFsaXphdGlvbiBvZiBwYW5lbCBjb25kaXRpb24gY2hlY2tlclxuICAgIHBhbmVsLnRvb2x0aXAoKTsgICAgICAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gb2YgdG9vbHRpcFxuICAgIHBhbmVsLm1lbnUoKTsgICAgICAgICAgICAgICAgLy8gUGFuZWwgbWVudVxuXG4gICAgbmV3IEJvZHlTaXplOyAvLyBQYW5lbCBib2R5IHNpemVcbiAgICBuZXcgQmFja3VwOyAgIC8vIE1ldGEgYmFja3VwLCBpbXBvcnQvZXhwb3J0XG4gICAgbmV3IFJlc2V0OyAgICAvLyBSZXNldCBtZXRhIG9wdGlvbnNcblxuICAgICQoJy56Yy1wYW5lbC10ZW1wbGF0ZV9fcGFuZWwtbG9hZGluZycpLmhpZGUoKTtcbiAgICAkKCcuemMtcGFuZWwuemMtcGFuZWxfbW9kZV9tZXRhJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgc2F2ZSBidXR0b25cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcGFuZWwuZGlzYWJsZVNhdmVCdXR0b24gPSAoKSA9PiB7fTtcblxuICAgIC8qKlxuICAgICAqIEVuYWJsZSBzYXZlIGJ1dHRvblxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwYW5lbC5lbmFibGVTYXZlQnV0dG9uID0gKCkgPT4ge307XG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIHJlc2V0IGJ1dHRvblxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwYW5lbC5kaXNhYmxlUmVzZXRCdXR0b24gPSAoKSA9PiB7fTtcblxuICAgIC8qKlxuICAgICAqIEVuYWJsZSByZXNldCBidXR0b25cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcGFuZWwuZW5hYmxlUmVzZXRCdXR0b24gPSAoKSA9PiB7fTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==