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
            $('.zc-panel.zc-panel_mode_meta .zc-panel-controls').height('auto');
            $('.zc-panel.zc-panel_mode_meta .zc-panel-submenu__scrollbar-container').height('auto');
        } else {
            $('.zc-panel.zc-panel_mode_meta').height('100%');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL01vZHVsZS9NZXRhYm94UGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9qcXVlcnkubWV0YS1tb2RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxpSUFBaUksTUFBTSxxT0FBcU8sT0FBTyx5REFBeUQsU0FBUztBQUNyYjtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDSG5CO0FBQ0EseUZBQXlGLE1BQU0sb1NBQW9TLE9BQU8seURBQXlELFNBQVMsd0pBQXdKLFVBQVU7QUFDOW1CO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFeUU7O0FBRWhCOztBQUV0RTs7QUFFZSxxQkFBcUIsb0ZBQU07O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxvQkFBb0I7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFpRSxvQkFBb0I7QUFDckY7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztB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QjtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9NZXRhYm94UGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2hlYWRlci90cGwvYmFja3VwLW5vdGlmaWNhdGlvbi5odG1sIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL01ldGFib3hQYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvaGVhZGVyL3RwbC9yZXNldC1wb3B1cC1ub3RpZmljYXRpb24uaHRtbCIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9NZXRhYm94UGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2hlYWRlci9iYWNrdXAuanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvTWV0YWJveFBhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9oZWFkZXIvcmVzZXQuanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvTWV0YWJveFBhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9tb2RlL21ldGEtbW9kZS1ib2R5LXNpemUuanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2tlcm5lbC5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ppbWJydWNvZGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ppbWJydWNvZGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvTWV0YWJveFBhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L2pxdWVyeS5tZXRhLW1vZGUuZXM2LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb24gemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX21vZGVfYmFja3VwIHpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl90eXBlX3t7dHlwZX19XFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19pY29uLWNvbnRhaW5lclxcXCI+IDxpIGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2ljb25cXFwiPjwvaT4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fY29udGVudFxcXCI+IDxzcGFuIGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX3RpdGxlXFxcIj57e3RpdGxlfX08L3NwYW4+IDxwIGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX3RleHRcXFwiPnt7Y29udGVudH19PC9wPiA8L2Rpdj4gPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb24gemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX3R5cGVfe3t0eXBlfX1cXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2ljb24tY29udGFpbmVyXFxcIj4gPGkgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9faWNvblxcXCI+PC9pPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19jb250ZW50LWNvbnRhaW5lclxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fY29udGVudFxcXCI+IDxzcGFuIGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX3RpdGxlXFxcIj57e3RpdGxlfX08L3NwYW4+IDxwIGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX3RleHRcXFwiPnt7Y29udGVudH19PC9wPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19jbG9zZS1jb250cm9sbGVyXFxcIj4gPGJ1dHRvbiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19jbG9zZS1idXR0b25cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+e3t2YXJfZXhpdH19PC9idXR0b24+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogTWV0YWJveFBhbmVsL01vZHVsZS9IZWFkZXIgOiBCYWNrdXBcbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEtlcm5lbCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUva2VybmVsJztcblxuaW1wb3J0IFRQTF9fYmFja3VwX25vdGlmaWNhdGlvbiBmcm9tICcuL3RwbC9iYWNrdXAtbm90aWZpY2F0aW9uLmh0bWwnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrdXAgZXh0ZW5kcyBLZXJuZWwge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmlkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xvc2VCbG9jayAgPSB7XG4gICAgICAgICAgICBfX2NiOiAnLnpjLXBvcHVwLWJhY2t1cF9fY2xvc2UtYmxvY2snLFxuXG4gICAgICAgICAgICBzaG93OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLmNsb3NlQmxvY2suX19jYikuc2hvdygpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGlkZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQodGhpcy5jbG9zZUJsb2NrLl9fY2IpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnBvcHVwID0gemMucG9wdXAoKTtcblxuICAgICAgICB0aGlzLmJhY2t1cEJ1dHRvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJhY2t1cCBidXR0b25cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBiYWNrdXBCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1tZXRhYm94LXBhbmVsLWJhY2t1cC1idXR0b24nLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlkID0gJCgnLnpjLXBhbmVsLXRlbXBsYXRlX3dpZCcpLmRhdGEoJ3Bvc3QtaWQnKTtcblxuICAgICAgICAgICAgdGhpcy5wb3B1cC5hZGQoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmdldFZhcignYmFja3VwLXBvcHVwLXRpdGxlJyksXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgICBqc29uUmVxdWVzdDoge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGB6Yy9tb2R1bGUvbWV0YWJveF9wYW5lbC9iYWNrdXBfJHt0aGlzLmdldFZhcignc2x1ZycpfWAsXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLmdldFZhcignbm9uY2UnKSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2dldC1jb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IChlcnJvck1zZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yQ2hlY2soJ01ldGFib3hQYW5lbEJhY2t1cCA6IExvYWQgY29udGVudCcsIGVycm9yTXNnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpICA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUJhY2t1cCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUFsbEJhY2t1cHMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVCYWNrdXBJdGVtKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdG9yZUJhY2t1cCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYXZlIGJhY2t1cFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHNhdmVCYWNrdXAoKSB7XG4gICAgICAgICQoJy56Yy1wb3B1cCcpLm9uKCdjbGljaycsICcuemMtcG9wdXAtYmFja3VwX19zYXZlLWJ1dHRvbicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgY29uc3QgYmFja3VwTmFtZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkucGFyZW50KCkuZmluZCgnaW5wdXQnKS52YWwoKTtcblxuICAgICAgICAgICAgaWYgKGJhY2t1cE5hbWUgJiYgYmFja3VwTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUJsb2NrLnNob3coKTtcblxuICAgICAgICAgICAgICAgIHpjLmpzb25SZXF1ZXN0KGB6Yy9tb2R1bGUvbWV0YWJveF9wYW5lbC9iYWNrdXBfJHt0aGlzLmdldFZhcignc2x1ZycpfWAsIHRoaXMuZ2V0VmFyKCdub25jZScpLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzYXZlJyxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICAgICAgICAgIGJhY2t1cF9uYW1lOiBiYWNrdXBOYW1lLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLnpjLXBvcHVwLWJhY2t1cF9fbm8tYmFja3VwcycpLmhhc0NsYXNzKCd6Yy1wb3B1cC1iYWNrdXBfX25vLWJhY2t1cHNfYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuemMtcG9wdXAtYmFja3VwX19uby1iYWNrdXBzJykucmVtb3ZlQ2xhc3MoJ3pjLXBvcHVwLWJhY2t1cF9fbm8tYmFja3Vwc19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwLWJhY2t1cF9faW5wdXQnKS52YWwoJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwLWJhY2t1cF9fbnVtYmVyJykudGV4dChyZXNwb25zZS5jaGFuZ2UuY291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwLWJhY2t1cF9fbGlzdCcpLmFwcGVuZChyZXNwb25zZS5jaGFuZ2UuaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLnJlc3VsdF9tc2cpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yTXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JDaGVjaygnTWV0YWJveFBhbmVsQmFja3VwIDogU2F2ZScsIGVycm9yTXNnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUJsb2NrLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGFsbCBiYWNrdXBzXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZGVsZXRlQWxsQmFja3VwcygpIHtcbiAgICAgICAgJCgnLnpjLXBvcHVwJykub24oJ2NsaWNrJywgJy56Yy1wb3B1cC1iYWNrdXBfX2RlbGV0ZS1idXR0b24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5zaG93KCk7XG5cbiAgICAgICAgICAgIHpjLmpzb25SZXF1ZXN0KGB6Yy9tb2R1bGUvbWV0YWJveF9wYW5lbC9iYWNrdXBfJHt0aGlzLmdldFZhcignc2x1ZycpfWAsIHRoaXMuZ2V0VmFyKCdub25jZScpLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2RlbGV0ZScsXG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwLWJhY2t1cF9fbnVtYmVyJykudGV4dCgwKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwLWJhY2t1cF9fbGlzdCcpLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cC1iYWNrdXBfX25vLWJhY2t1cHMnKS5hZGRDbGFzcygnemMtcG9wdXAtYmFja3VwX19uby1iYWNrdXBzX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UucmVzdWx0X21zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yTXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvckNoZWNrKCdNZXRhYm94UGFuZWxCYWNrdXAgOiBEZWxldGUgYWxsJywgZXJyb3JNc2cpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5oaWRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGJhY2t1cCBpdGVtXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZGVsZXRlQmFja3VwSXRlbSgpIHtcbiAgICAgICAgJCgnLnpjLXBvcHVwJykub24oJ2NsaWNrJywgJy56Yy1wb3B1cC1iYWNrdXBfX2l0ZW0tYnV0dG9uX2RlbGV0ZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgdGhpcy5jbG9zZUJsb2NrLnNob3coKTtcblxuICAgICAgICAgICAgemMuanNvblJlcXVlc3QoYHpjL21vZHVsZS9tZXRhYm94X3BhbmVsL2JhY2t1cF8ke3RoaXMuZ2V0VmFyKCdzbHVnJyl9YCwgdGhpcy5nZXRWYXIoJ25vbmNlJyksIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGVsZXRlLWl0ZW0nLFxuICAgICAgICAgICAgICAgIGJhY2t1cF9uYW1lOiAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpLmF0dHIoJ2lkJyksXG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwLWJhY2t1cF9fbnVtYmVyJykudGV4dChyZXNwb25zZS5jb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkucGFyZW50KCkucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNvdW50ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cC1iYWNrdXBfX25vLWJhY2t1cHMnKS5hZGRDbGFzcygnemMtcG9wdXAtYmFja3VwX19uby1iYWNrdXBzX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5yZXN1bHRfbXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3JNc2cpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yQ2hlY2soJ01ldGFib3hQYW5lbEJhY2t1cCA6IERlbGV0ZSBpdGVtJywgZXJyb3JNc2cpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5oaWRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzdG9yZSBiYWNrdXBcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICByZXN0b3JlQmFja3VwKCkge1xuICAgICAgICAkKCcuemMtcG9wdXAnKS5vbignY2xpY2snLCAnLnpjLXBvcHVwLWJhY2t1cF9faXRlbS1idXR0b25fcmVzdG9yZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgdGhpcy5jbG9zZUJsb2NrLnNob3coKTtcblxuICAgICAgICAgICAgemMuanNvblJlcXVlc3QoYHpjL21vZHVsZS9tZXRhYm94X3BhbmVsL2JhY2t1cF8ke3RoaXMuZ2V0VmFyKCdzbHVnJyl9YCwgdGhpcy5nZXRWYXIoJ25vbmNlJyksIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAncmVzdG9yZScsXG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICAgICAgYmFja3VwX25hbWU6ICQoZXZlbnQuY3VycmVudFRhcmdldCkucGFyZW50KCkuYXR0cignaWQnKSxcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUJsb2NrLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwLnJlbUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cC5hcHBlbmRDb250ZW50KHpjLnRwbChUUExfX2JhY2t1cF9ub3RpZmljYXRpb24sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlc3BvbnNlLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiByZXNwb25zZS5jb250ZW50XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cC5zaG93Q29udGVudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UucmVzdWx0X21zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yTXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvckNoZWNrKCdNZXRhYm94UGFuZWxCYWNrdXAgOiBSZXN0b3JlJywgZXJyb3JNc2cpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5oaWRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogTWV0YWJveFBhbmVsL01vZHVsZS9IZWFkZXIgOiBSZXNldFxuICpcbiAqIEBhdXRob3IgIEMuUiA8Y3JAanVuanVsaW5pLmNvbT5cbiAqIEBwYWNrYWdlIHppbWJydWNvZGVcbiAqIEBzaW5jZSAgIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgS2VybmVsIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9rZXJuZWwnO1xuXG5pbXBvcnQgVFBMX19yZXNldF9wb3B1cF9ub3RpZmljYXRpb24gZnJvbSAnLi4vaGVhZGVyL3RwbC9yZXNldC1wb3B1cC1ub3RpZmljYXRpb24uaHRtbCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc2V0IGV4dGVuZHMgS2VybmVsIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jb25maXJtKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uZmlybSBhY3Rpb25cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjb25maXJtKCkge1xuICAgICAgICB0aGlzLmNsaWNrKCcuemMtbWV0YWJveC1wYW5lbC1yZXNldC1idXR0b24nLCAoKSA9PiB7XG4gICAgICAgICAgICB6Yy5jb25maXJtKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRWYXIoJ3Jlc2V0LXBvcHVwLXRpdGxlJyksXG4gICAgICAgICAgICAgICAgc3ViamVjdDogdGhpcy5nZXRWYXIoJ3Jlc2V0LXBvcHVwLXN1YmplY3QnKSxcbiAgICAgICAgICAgICAgICB0aXRsZU9LOiB0aGlzLmdldFZhcigncmVzZXQtcG9wdXAtb2snKSxcbiAgICAgICAgICAgICAgICB0aXRsZUNhbmNlbDogdGhpcy5nZXRWYXIoJ3Jlc2V0LXBvcHVwLWNhbmNlbCcpLFxuICAgICAgICAgICAgICAgIG9rOiAocG9wdXApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAuaGlkZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL21ldGFib3gtcGFuZWwvcmVzZXQvYmVmb3JlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgemMuanNvblJlcXVlc3QoYHpjL21vZHVsZS9tZXRhYm94X3BhbmVsL3Jlc2V0XyR7dGhpcy5nZXRWYXIoJ3NsdWcnKX1gLCB0aGlzLmdldFZhcignbm9uY2UnKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICQoJy56Yy1wYW5lbC10ZW1wbGF0ZV93aWQnKS5kYXRhKCdwb3N0LWlkJyksXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UudHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAucmVtQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLmFwcGVuZENvbnRlbnQoemMudHBsKFRQTF9fcmVzZXRfcG9wdXBfbm90aWZpY2F0aW9uLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlc3BvbnNlLnR5cGUgPz8gJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLnRpdGxlID8/ICdFcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLmNvbnRlbnQgPz8gJ1Vua25vd24gZXJyb3InXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLnNob3dDb250ZW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvbWV0YWJveC1wYW5lbC9yZXNldC9zdWNjZXNzLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAucmVtQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLmFwcGVuZENvbnRlbnQoemMudHBsKFRQTF9fcmVzZXRfcG9wdXBfbm90aWZpY2F0aW9uLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlc3BvbnNlLnR5cGUgPz8gJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLnRpdGxlID8/ICdFcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLmNvbnRlbnQgPz8gJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJfZXhpdDogdGhpcy5nZXRWYXIoJ2V4aXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5zaG93Q29udGVudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwJykub24oJ2NsaWNrJywgJy56Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2Nsb3NlLWJ1dHRvbicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9tZXRhYm94LXBhbmVsL3Jlc2V0L3N1Y2Nlc3MtaW5mbycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3JNc2cpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9tZXRhYm94LXBhbmVsL3Jlc2V0L2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yQ2hlY2soJ01ldGFib3hQYW5lbCA6IFJlc2V0IHNldHRpbmdzJywgZXJyb3JNc2cpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogTWV0YWJveFBhbmVsL01vZHVsZS9Nb2RlIDogTWV0YSBtb2RlIGJvZHkgc2l6ZVxuICpcbiAqIEBhdXRob3IgIEMuUiA8Y3JAanVuanVsaW5pLmNvbT5cbiAqIEBwYWNrYWdlIHppbWJydWNvZGVcbiAqIEBzaW5jZSAgIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgS2VybmVsIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9rZXJuZWwnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhTW9kZUJvZHlTaXplIGV4dGVuZHMgS2VybmVsIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgbGV0IHBhbmVsV2lkdGggPSAkKCcuemMtcGFuZWwuemMtcGFuZWxfbW9kZV9tZXRhJykud2lkdGgoKTtcbiAgICAgICAgaWYgKHBhbmVsV2lkdGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrUGFuZWxXaWR0aCgpO1xuICAgICAgICAgICAgdGhpcy5jaGVja1BhbmVsSGVpZ2h0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcGFuZWxXaWR0aCA9ICQoJy56Yy1wYW5lbC56Yy1wYW5lbF9tb2RlX21ldGEnKS53aWR0aCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBhbmVsV2lkdGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tQYW5lbFdpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tQYW5lbEhlaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cblxuICAgICAgICB6Yy5yZXNpemUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lcmFzZU1vYmlsZU1lbnUoKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tQYW5lbEhlaWdodCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgbW9kZSBzaXplXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHdpZHRoICAgUGFuZWwgd2lkdGhcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgICAgICAgICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkTW9kZVNpemUod2lkdGgpIHtcbiAgICAgICAgbGV0IG1vZGUgPSAnbW9kZS0xLSc7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0Q29uZmlnKCdtaW4tc2l6ZS9tb2RlMScpID49IHdpZHRoKSB7XG4gICAgICAgICAgICBtb2RlID0gJ21vZGUtMS0nO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0Q29uZmlnKCdtaW4tc2l6ZS9tb2RlMicpID49IHdpZHRoKSB7XG4gICAgICAgICAgICBtb2RlID0gJ21vZGUtMi0nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kZSA9ICdtb2RlLTMtJztcbiAgICAgICAgfVxuXG4gICAgICAgICQoJy56Yy1wYW5lbC56Yy1wYW5lbF9tb2RlX21ldGEnKS5hdHRyKCdkYXRhLXdpZHRoJywgbW9kZSArIHdpZHRoKTtcblxuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvc2l6ZS1jaGFuZ2VkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgcGFuZWwgaGVpZ2h0XG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY2hlY2tQYW5lbEhlaWdodCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZXNrdG9wTW9kZSgpKSB7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwuemMtcGFuZWxfbW9kZV9tZXRhJykuaGVpZ2h0KCdhdXRvJyk7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwuemMtcGFuZWxfbW9kZV9tZXRhIC56Yy1wYW5lbC1jb250cm9scycpLmhlaWdodCgnYXV0bycpO1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLnpjLXBhbmVsX21vZGVfbWV0YSAuemMtcGFuZWwtc3VibWVudV9fc2Nyb2xsYmFyLWNvbnRhaW5lcicpLmhlaWdodCgnYXV0bycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLnpjLXBhbmVsX21vZGVfbWV0YScpLmhlaWdodCgnMTAwJScpO1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLnpjLXBhbmVsX21vZGVfbWV0YSAuemMtcGFuZWwtY29udHJvbHMnKS5oZWlnaHQoJzEwMCUnKTtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC56Yy1wYW5lbF9tb2RlX21ldGEgLnpjLXBhbmVsLXN1Ym1lbnVfX3Njcm9sbGJhci1jb250YWluZXInKS5oZWlnaHQoJzEwMCUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIHBhbmVsIHdpZHRoXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY2hlY2tQYW5lbFdpZHRoKCkge1xuICAgICAgICBjb25zdCBybyA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyaWVzWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE1vZGVTaXplKGVudHJpZXNbMF0uY29udGVudFJlY3Qud2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByby5vYnNlcnZlKCQoJy56Yy1wYW5lbC56Yy1wYW5lbF9tb2RlX21ldGEnKS5nZXQoMCkpO1xuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZSA6IEtlcm5lbFxuICpcbiAqIEBhdXRob3IgIEMuUiA8Y3JAanVuanVsaW5pLmNvbT5cbiAqIEBwYWNrYWdlIHppbWJydWNvZGVcbiAqIEBzaW5jZSAgIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXJuZWwge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nbG9iYWwgPSB6Yy5nZXRNb2R1bGVEYXRhKCdwYW5lbCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCBiYXIgOiBNb3ZlIHRvIHRvcCBwb3NpdGlvblxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHNjcm9sbGJhclRvcCgpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsIC56Yy1zY3JvbGxiYXInKS5zY3JvbGxUb3AoMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHBhbmVsIGhlaWdodFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNhbGNIZWlnaHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmdldENhY2hlKCd3cC1ib2R5LWhlaWdodCcpICE9PSAkKHdpbmRvdykuaGVpZ2h0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FjaGUoJ3dwLWJvZHktaGVpZ2h0JywgJCh3aW5kb3cpLmhlaWdodCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVyYXNlIG1vYmlsZSBtZW51XG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZXJhc2VNb2JpbGVNZW51KCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rlc2t0b3BNb2RlKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlcnZpY2UoJ21lbnUvaXNTdWJtZW51SXRlbScpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLW1lbnUnKS5hZGRDbGFzcygnemMtcGFuZWwtbWVudV9zdWJtZW51LWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykuYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC1tZW51JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfbW9iaWxlLW1lbnUtdmlzaWJsZScpO1xuICAgICAgICAkKCcuemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudV9hY3RpdmUnKTtcblxuICAgICAgICB0aGlzLnNlcnZpY2UoJ2Nsb3NlLWJsb2NrJykuaGlkZURlZmluaXRlbHkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgbW9kZSBpcyBkZXNrdG9wXG4gICAgICogXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gICBSZXR1cm4gXCJ0cnVlXCIgaWYgYm9keSB3aWR0aCBpcyBiaWdnZXIgdGhlbiBcIm1pbi1zaXplLm1vZGUyXCJcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBpc0Rlc2t0b3BNb2RlKCkge1xuICAgICAgICByZXR1cm4gKCQoJy56Yy1wYW5lbCcpLndpZHRoKCkgPj0gdGhpcy5nZXRDb25maWcoJ21pbi1zaXplL21vZGUyJykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVycm9yIGNoZWNraW5nLCBpbiBBSkFYIG9yIGVsc2V3aGVyZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGVycm9yQ2hlY2sobWFpbk1zZywgZXJyb3JNc2cpIHtcbiAgICAgICAgaWYgKCEkKCcuemMtcG9wdXAnKS5oYXNDbGFzcygnemMtcGFuZWwtZXJyb3ItY29uZmlybScpKSB7XG5cbiAgICAgICAgICAgIGlmICgkKCcuemMtcG9wdXAnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkKCcuemMtcG9wdXAnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XG5cbiAgICAgICAgICAgIHpjLmNvbmZpcm0oe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBtYWluTXNnLFxuICAgICAgICAgICAgICAgIHN1YmplY3Q6IGAke2Vycm9yTXNnfSA8YnI+IFBhZ2Ugd2lsbCBiZSByZWxvYWRlZCwgb2s/YCxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3pjLXBhbmVsLWVycm9yLWNvbmZpcm0nLFxuICAgICAgICAgICAgICAgIG9rOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGdsb2JhbCB2YXJpYWJsZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBPYmplY3QgcGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkZWYgICBEZWZhdWx0IHZhbHVlXG4gICAgICogQHJldHVybiB7bWl4fSAgICAgICAgIEFjdGlvbiByZXN1bHRcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBnZXRWYXIoa2V5LCBkZWYpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLnZhcnMsIGtleSk7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkZWY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZ2xvYmFsIHZhcmlhYmxlIHZhbHVlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIE9iamVjdCBwYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRhdGEgIFZhcmlhYmxlIHZhbHVlXG4gICAgICogQHJldHVybiB7bnVsbH0gICAgICAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRWYXIoa2V5LCBkYXRhKSB7XG4gICAgICAgIHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC52YXJzLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBnbG9iYWwgY2FjaGUgdmFsdWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgT2JqZWN0IHBhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGF0YSAgQ2FjaGUgdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgICAgICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZENhY2hlKGtleSwgZGF0YSkge1xuICAgICAgICB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwuY2FjaGUsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGdsb2JhbCBjYWNoZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBPYmplY3QgcGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkZWYgICBEZWZhdWx0IHZhbHVlXG4gICAgICogQHJldHVybiB7bWl4fSAgICAgICAgIEFjdGlvbiByZXN1bHRcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBnZXRDYWNoZShrZXksIGRlZikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwuY2FjaGUsIGtleSk7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkZWY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVsZW1lbnQgZnJvbSBjYWNoZSBvYmplY3RcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgT2JqZWN0IHBhdGhcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgICAgICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHJlbUNhY2hlKGtleSkge1xuICAgICAgICB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwuY2FjaGUsIGtleSwgZmFsc2UsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBnbG9iYWwgY29uZmlnIHZhbHVlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIE9iamVjdCBwYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRhdGEgIENvbmZpZyB2YWx1ZVxuICAgICAqIEByZXR1cm4ge251bGx9ICAgICAgICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkQ29uZmlnKGtleSwgZGF0YSkge1xuICAgICAgICB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwuY29uZmlnLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBnbG9iYWwgY29uZmlnXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIE9iamVjdCBwYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRlZiAgIERlZmF1bHQgdmFsdWVcbiAgICAgKiBAcmV0dXJuIHttaXh9ICAgICAgICAgQWN0aW9uIHJlc3VsdFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGdldENvbmZpZyhrZXksIGRlZikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwuY29uZmlnLCBrZXkpO1xuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VydmljZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgIG5hbWUgICAgICAgU2VydmljZSBuYW1lXG4gICAgICogQHBhcmFtIHtjYWxsYWJsZX0gY2FsbGJhY2sgICBDYWxsYmFja1xuICAgICAqIEByZXR1cm4ge29iamVjdH0gICAgICAgICAgICAgU2VydmljZSBpbnN0YW5jZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHNlcnZpY2UobmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oY2FsbGJhY2spIHx8IHR5cGVvZiBjYWxsYmFjayA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENhY2hlKGBzZXJ2aWNlcy8ke25hbWV9YCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXRDYWNoZShgc2VydmljZXMvJHtuYW1lfWAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAoc2VydmljZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTmV4dCBzZXJ2aWNlIG5vdCBleGlzdCA6ICR7bmFtZX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2ggYW4gZXZlbnQgaGFuZGxlciBmdW5jdGlvbiBmb3Igb25lIG9yIG1vcmUgZXZlbnRzIHRvIHRoZSBzZWxlY3RlZCBlbGVtZW50c1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgIGV2ZW50cyAgICAgICAgICAgT25lIG9yIG1vcmUgc3BhY2Utc2VwYXJhdGVkIGV2ZW50IHR5cGVzIGFuZCBvcHRpb25hbCBuYW1lc3BhY2VzLCBzdWNoIGFzIFwiY2xpY2tcIiBvciBcImtleWRvd24ubXlQbHVnaW5cIlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgIHNlbGVjdG9yICAgICAgICAgQSBzZWxlY3RvciBzdHJpbmcgdG8gZmlsdGVyIHRoZSBkZXNjZW5kYW50cyBvZiB0aGUgc2VsZWN0ZWQgZWxlbWVudHMgdGhhdCB0cmlnZ2VyIHRoZSBldmVudFxuICAgICAqIEBwYXJhbSB7Y2FsbGFibGV9IGhhbmRsZXIgICAgICAgICAgQSBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gdGhlIGV2ZW50IGlzIHRyaWdnZXJlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gIHByZXZlbnREZWZhdWx0ICAgVHJ1ZSBpZiBcInByZXZlbnREZWZhdWx0XCIgbXVzdCBiZSB1c2VkXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgb24oZXZlbnRzLCBzZWxlY3RvciwgaGFuZGxlciwgcHJldmVudERlZmF1bHQgPSBmYWxzZSkge1xuICAgICAgICAkKCcuemMtcGFuZWwnKS5vbihldmVudHMsIHNlbGVjdG9yLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmV2ZW50RGVmYXVsdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhhbmRsZXIoJChldmVudC5jdXJyZW50VGFyZ2V0KSwgZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2ggYW4gZXZlbnQgaGFuZGxlciBmdW5jdGlvbiBmb3Igb25lIG9yIG1vcmUgZXZlbnRzIHRvIHRoZSBzZWxlY3RlZCBlbGVtZW50c1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgIHNlbGVjdG9yICAgICAgICAgQSBzZWxlY3RvciBzdHJpbmcgdG8gZmlsdGVyIHRoZSBkZXNjZW5kYW50cyBvZiB0aGUgc2VsZWN0ZWQgZWxlbWVudHMgdGhhdCB0cmlnZ2VyIHRoZSBldmVudFxuICAgICAqIEBwYXJhbSB7Y2FsbGFibGV9IGhhbmRsZXIgICAgICAgICAgQSBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gdGhlIGV2ZW50IGlzIHRyaWdnZXJlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gIHByZXZlbnREZWZhdWx0ICAgVHJ1ZSBpZiBcInByZXZlbnREZWZhdWx0XCIgbXVzdCBiZSB1c2VkXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY2xpY2soc2VsZWN0b3IsIGhhbmRsZXIsIHByZXZlbnREZWZhdWx0ID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLm9uKCdjbGljaycsIHNlbGVjdG9yLCBoYW5kbGVyLCBwcmV2ZW50RGVmYXVsdCk7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIHppbWJydWNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBNZXRhYm94UGFuZWwgOiBNZXRhIG1vZGVcbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEJvZHlTaXplIGZyb20gJy4vbW9kdWxlL21vZGUvbWV0YS1tb2RlLWJvZHktc2l6ZSc7XG5pbXBvcnQgQmFja3VwICAgZnJvbSAnLi9tb2R1bGUvaGVhZGVyL2JhY2t1cCc7XG5pbXBvcnQgUmVzZXQgICAgZnJvbSAnLi9tb2R1bGUvaGVhZGVyL3Jlc2V0JztcblxuemMubW9kdWxlLnBhbmVsLmFkZE1vZGUoKCQsIHBhbmVsKSA9PiB7XG4gICAgcGFuZWwuYWRkQ29uZmlnKCdoZWlnaHQtRkFIJywgNTYpO1xuICAgIHBhbmVsLmFkZENvbmZpZygnbWluLXNpemUvbW9kZTInLCA3ODApO1xuXG4gICAgcGFuZWwuY2xvc2VCbG9jaygpOyAgICAgICAgICAvLyBJbml0aWFsaXppbmcgb2YgXCJjbG9zZSBibG9ja1wiXG4gICAgcGFuZWwuY29udHJvbEluaXQoKTsgICAgICAgICAvLyBJbml0aWFsaXphdGlvbiBvZiBjb250cm9sc1xuICAgIHBhbmVsLmNvbnRyb2xIZWxwKCk7ICAgICAgICAgLy8gQ29udHJvbCBoZWxwIHdpbmRvd1xuICAgIHBhbmVsLnNjcm9sbGJhcigpOyAgICAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gb2Ygc2Nyb2xsIGJhclxuICAgIHBhbmVsLm5vTWV0YVNjYWxlSWZNb2JpbGUoKTsgLy8gRGlzYWJsZSBtZXRhIHNjYWxlIGlmIG1vYmlsZSBkZXZpY2VcbiAgICBwYW5lbC5jb25kaXRpb24oKTsgICAgICAgICAgIC8vIEluaXRpYWxpemF0aW9uIG9mIHBhbmVsIGNvbmRpdGlvbiBjaGVja2VyXG4gICAgcGFuZWwudG9vbHRpcCgpOyAgICAgICAgICAgICAvLyBJbml0aWFsaXphdGlvbiBvZiB0b29sdGlwXG4gICAgcGFuZWwubWVudSgpOyAgICAgICAgICAgICAgICAvLyBQYW5lbCBtZW51XG5cbiAgICBuZXcgQm9keVNpemU7IC8vIFBhbmVsIGJvZHkgc2l6ZVxuICAgIG5ldyBCYWNrdXA7ICAgLy8gTWV0YSBiYWNrdXAsIGltcG9ydC9leHBvcnRcbiAgICBuZXcgUmVzZXQ7ICAgIC8vIFJlc2V0IG1ldGEgb3B0aW9uc1xuXG4gICAgJCgnLnpjLXBhbmVsLXRlbXBsYXRlX19wYW5lbC1sb2FkaW5nJykuaGlkZSgpO1xuICAgICQoJy56Yy1wYW5lbC56Yy1wYW5lbF9tb2RlX21ldGEnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBzYXZlIGJ1dHRvblxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwYW5lbC5kaXNhYmxlU2F2ZUJ1dHRvbiA9ICgpID0+IHt9O1xuXG4gICAgLyoqXG4gICAgICogRW5hYmxlIHNhdmUgYnV0dG9uXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHBhbmVsLmVuYWJsZVNhdmVCdXR0b24gPSAoKSA9PiB7fTtcblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgcmVzZXQgYnV0dG9uXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHBhbmVsLmRpc2FibGVSZXNldEJ1dHRvbiA9ICgpID0+IHt9O1xuXG4gICAgLyoqXG4gICAgICogRW5hYmxlIHJlc2V0IGJ1dHRvblxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwYW5lbC5lbmFibGVSZXNldEJ1dHRvbiA9ICgpID0+IHt9O1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9