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

            this.popup.add({
                title: this.getVar('backup-popup-title'),
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
                }
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
    constructor() {
        super();

        this.confirm();
    }

    confirm() {
        this.click('.zc-metabox-panel-reset-button', () => {
            zc.confirm({
                title: this.getVar('reset-popup-title'),
                subject: this.getVar('reset-popup-subject'),
                titleOK: this.getVar('reset-popup-ok'),
                titleCancel: this.getVar('reset-popup-cancel'),
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
        popup.appendContent(zc.tpl(_header_tpl_reset_popup_notification_html__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
    constructor() {
        super();

        let panelWidth = $('.zc-panel.zc-panel_mode_meta').width();
        if (panelWidth > 0) {
            this.checkPanelWidth();
            this.metaHeight();
        } else {
            let interval = setInterval(() => {
                panelWidth = $('.zc-panel.zc-panel_mode_meta').width();

                if (panelWidth > 0) {
                    clearInterval(interval);

                    this.checkPanelWidth();
                    this.metaHeight();
                }
            }, 100);
        }

        zc.resize(() => {
            this.eraseMobileMenu(); // Erase mobile menu
            this.metaHeight();      // Check panel height size
        });
    }

    metaHeight() {
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
    constructor() {
        this.global = zc.getModuleData('panel');
    }

    /**
     * Panel scroll bar top
     * 
     * @return {null} None
     * @since 1.0.0
     */
    scrollbarTop() {
        $('.zc-panel .zc-scrollbar').scrollTop(0);
    }

    /**
     * Calculate panel height
     * 
     * @return {null} None
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
     * @return {null} None
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
     * Is desktop mode
     * 
     * @return {Boolean} Return "true" if body width is bigger then "min-size.mode2"
     * @since 1.0.0
     */
    isDesktopMode() {
        return ($('.zc-panel').width() >= this.getConfig('min-size/mode2'));
    }

     /**
     * Error check, in AJAX or other
     * 
     * @return {null} None
     * @since 1.0.0
     */
    errorCheck(msg, jqXHR) {
        if (!$('.zc-popup').hasClass('zc-panel-error-confirm')) {

            if ($('.zc-popup').length) {
                $('.zc-popup').remove();
            }

            console.error(msg);

            zc.confirm({
                title: `Error - ${jqXHR.statusText} : ${jqXHR.status}`,
                subject: `${msg} Page will be reloaded, ok?`,
                class: 'zc-panel-error-confirm',
                ok: () => {
                    location.reload();
                }
            });
        }
    }

    /**
     * Get global var
     * 
     * @param {string} key   Key/Path
     * @param {mix}    def   If not found, return "def"
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
     * Add global var value
     * 
     * @param {string} key   Key/Path
     * @param {mix}    data  Var value
     * @since 1.0.0
     */
    addVar(key, data) {
        zc.deepFindAndSetting(this.global.vars, key, data);
    }

    /**
     * Add global cache value
     * 
     * @param {string} key   Key/Path
     * @param {mix}    data  Cache value
     * @since 1.0.0
     */
    addCache(key, data) {
        zc.deepFindAndSetting(this.global.cache, key, data);
    }

    /**
     * Get global cache
     * 
     * @param {string} key   Key/Path
     * @param {mix}    def   If not found, return "def"
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
     * @param {string} key   Key/Path
     */
    remCache(key) {
        zc.deepFindAndSetting(this.global.cache, key, false, true);
    }

    /**
     * Add global config value
     * 
     * @param {string} key   Key/Path
     * @param {mix}    data  Config value
     * @since 1.0.0
     */
    addConfig(key, data) {
        zc.deepFindAndSetting(this.global.config, key, data);
    }

    /**
     * Get global config
     * 
     * @param {string} key   Key/Path
     * @param {mix}    def   If not found, return "def"
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

    on(events, selector, handler, preventDefault = false) {
        $('.zc-panel').on(events, selector, (event) => {
            if (preventDefault === true) {
                event.preventDefault();
            }

            handler.call(this, $(event.currentTarget), event);
        });
    }

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

    panel.closeBlock();          // Init callback of close block.
    panel.controlInit();         // Initialization of controls.
    panel.controlHelp();         // Control help window.
    panel.scrollbar();           // Initialization of scroll bar in panel.
    panel.noMetaScaleIfMobile(); // Disable meta scale if mobile device.
    panel.condition();           // Initialization of panel condition checker.
    panel.tooltip();             // Init tooltip
    panel.menu();                // Panel menu.

    new _module_mode_meta_mode_body_size__WEBPACK_IMPORTED_MODULE_0__["default"]; // Panel body size.
    new _module_header_backup__WEBPACK_IMPORTED_MODULE_1__["default"];   // Meta backup, import/export.
    new _module_header_reset__WEBPACK_IMPORTED_MODULE_2__["default"];    // Reset meta options.

    $('.zc-panel-template__panel-loading').hide(); // Hide panel loading text.
    $('.zc-panel.zc-panel_mode_meta').css('visibility', 'visible');   // Full display panel.

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL01vZHVsZS9NZXRhYm94UGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9qcXVlcnkubWV0YS1tb2RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxpSUFBaUksTUFBTSxxT0FBcU8sT0FBTyx5REFBeUQsU0FBUztBQUNyYjtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDSG5CO0FBQ0EseUZBQXlGLE1BQU0sb1NBQW9TLE9BQU8seURBQXlELFNBQVMsd0pBQXdKLFVBQVU7QUFDOW1CO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFeUU7O0FBRWhCOztBQUV0RTs7QUFFZSxxQkFBcUIsb0ZBQU07QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxvQkFBb0I7QUFDbEY7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLG9CQUFvQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFD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QUNqQyxpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQyxpQ0FBaUM7QUFDakMsaUNBQWlDOztBQUVqQyxRQUFRLHdFQUFRLEVBQUU7QUFDbEIsUUFBUSw2REFBTSxJQUFJO0FBQ2xCLFFBQVEsNERBQUssS0FBSzs7QUFFbEIsbURBQW1EO0FBQ25ELHNFQUFzRTs7QUFFdEU7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvTWV0YWJveFBhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9oZWFkZXIvdHBsL2JhY2t1cC1ub3RpZmljYXRpb24uaHRtbCIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9NZXRhYm94UGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2hlYWRlci90cGwvcmVzZXQtcG9wdXAtbm90aWZpY2F0aW9uLmh0bWwiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvTWV0YWJveFBhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9oZWFkZXIvYmFja3VwLmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL01ldGFib3hQYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvaGVhZGVyL3Jlc2V0LmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL01ldGFib3hQYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvbW9kZS9tZXRhLW1vZGUtYm9keS1zaXplLmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9rZXJuZWwuanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL01ldGFib3hQYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9qcXVlcnkubWV0YS1tb2RlLmVzNi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCIgPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uIHpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9tb2RlX2JhY2t1cCB6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fdHlwZV97e3R5cGV9fVxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9faWNvbi1jb250YWluZXJcXFwiPiA8aSBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19pY29uXFxcIj48L2k+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2NvbnRlbnRcXFwiPiA8c3BhbiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX190aXRsZVxcXCI+e3t0aXRsZX19PC9zcGFuPiA8cCBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX190ZXh0XFxcIj57e2NvbnRlbnR9fTwvcD4gPC9kaXY+IDwvZGl2PlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCIgPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uIHpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl90eXBlX3t7dHlwZX19XFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19pY29uLWNvbnRhaW5lclxcXCI+IDxpIGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2ljb25cXFwiPjwvaT4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fY29udGVudC1jb250YWluZXJcXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2NvbnRlbnRcXFwiPiA8c3BhbiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX190aXRsZVxcXCI+e3t0aXRsZX19PC9zcGFuPiA8cCBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX190ZXh0XFxcIj57e2NvbnRlbnR9fTwvcD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fY2xvc2UtY29udHJvbGxlclxcXCI+IDxidXR0b24gY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fY2xvc2UtYnV0dG9uXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPnt7dmFyX2V4aXR9fTwvYnV0dG9uPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IE1ldGFib3hQYW5lbC9Nb2R1bGUvSGVhZGVyIDogQmFja3VwXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBLZXJuZWwgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2tlcm5lbCc7XG5cbmltcG9ydCBUUExfX2JhY2t1cF9ub3RpZmljYXRpb24gZnJvbSAnLi90cGwvYmFja3VwLW5vdGlmaWNhdGlvbi5odG1sJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja3VwIGV4dGVuZHMgS2VybmVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmlkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xvc2VCbG9jayAgPSB7XG4gICAgICAgICAgICBfX2NiOiAnLnpjLXBvcHVwLWJhY2t1cF9fY2xvc2UtYmxvY2snLFxuXG4gICAgICAgICAgICBzaG93OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLmNsb3NlQmxvY2suX19jYikuc2hvdygpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGlkZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQodGhpcy5jbG9zZUJsb2NrLl9fY2IpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnBvcHVwID0gemMucG9wdXAoKTtcblxuICAgICAgICB0aGlzLmJhY2t1cEJ1dHRvbigpO1xuICAgIH1cblxuICAgIGJhY2t1cEJ1dHRvbigpIHtcbiAgICAgICAgdGhpcy5jbGljaygnLnpjLW1ldGFib3gtcGFuZWwtYmFja3VwLWJ1dHRvbicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSAkKCcuemMtcGFuZWwtdGVtcGxhdGVfd2lkJykuZGF0YSgncG9zdC1pZCcpO1xuXG4gICAgICAgICAgICB0aGlzLnBvcHVwLmFkZCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0VmFyKCdiYWNrdXAtcG9wdXAtdGl0bGUnKSxcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogNDAwLFxuICAgICAgICAgICAgICAgIGFqYXg6IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBgemMvbW9kdWxlL21ldGFib3hfcGFuZWwvYmFja3VwXyR7dGhpcy5nZXRWYXIoJ3NsdWcnKX1gLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ2V0LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICBfYWpheF9ub25jZTogdGhpcy5nZXRWYXIoJ25vbmNlJylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiAoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JDaGVjaygnTWV0YWJveFBhbmVsQmFja3VwIDogTG9hZCBjb250ZW50Jywgc3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpICA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUFsbCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUl0ZW0oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNhdmUoKSB7XG4gICAgICAgICQoJy56Yy1wb3B1cCcpLm9uKCdjbGljaycsICcuemMtcG9wdXAtYmFja3VwX19zYXZlLWJ1dHRvbicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgY29uc3QgYmFja3VwTmFtZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkucGFyZW50KCkuZmluZCgnaW5wdXQnKS52YWwoKTtcblxuICAgICAgICAgICAgaWYgKGJhY2t1cE5hbWUgJiYgYmFja3VwTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgemMuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYHpjL21vZHVsZS9tZXRhYm94X3BhbmVsL2JhY2t1cF8ke3RoaXMuZ2V0VmFyKCdzbHVnJyl9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzYXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja3VwX25hbWU6IGJhY2t1cE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBfYWpheF9ub25jZTogdGhpcy5nZXRWYXIoJ25vbmNlJylcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvckNoZWNrKCdNZXRhYm94UGFuZWxCYWNrdXAgOiBTYXZlJywganFYSFIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUJsb2NrLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQmxvY2suc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKCcuemMtcG9wdXAtYmFja3VwX19uby1iYWNrdXBzJykuaGFzQ2xhc3MoJ3pjLXBvcHVwLWJhY2t1cF9fbm8tYmFja3Vwc19hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuemMtcG9wdXAtYmFja3VwX19uby1iYWNrdXBzJykucmVtb3ZlQ2xhc3MoJ3pjLXBvcHVwLWJhY2t1cF9fbm8tYmFja3Vwc19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuemMtcG9wdXAtYmFja3VwX19pbnB1dCcpLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwLWJhY2t1cF9fbnVtYmVyJykudGV4dChyZXNwb25zZS5jaGFuZ2UuY291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cC1iYWNrdXBfX2xpc3QnKS5hcHBlbmQocmVzcG9uc2UuY2hhbmdlLml0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLnJlc3VsdF9tc2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlbGV0ZUFsbCgpIHtcbiAgICAgICAgJCgnLnpjLXBvcHVwJykub24oJ2NsaWNrJywgJy56Yy1wb3B1cC1iYWNrdXBfX2RlbGV0ZS1idXR0b24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgIHpjLmFqYXgoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBgemMvbW9kdWxlL21ldGFib3hfcGFuZWwvYmFja3VwXyR7dGhpcy5nZXRWYXIoJ3NsdWcnKX1gLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGVsZXRlJyxcbiAgICAgICAgICAgICAgICAgICAgX2FqYXhfbm9uY2U6IHRoaXMuZ2V0VmFyKCdub25jZScpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JDaGVjaygnTWV0YWJveFBhbmVsQmFja3VwIDogRGVsZXRlIGFsbCcsIGpxWEhSKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUJsb2NrLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJlZm9yZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQmxvY2suc2hvdygpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuemMtcG9wdXAtYmFja3VwX19udW1iZXInKS50ZXh0KDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwLWJhY2t1cF9fbGlzdCcpLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuemMtcG9wdXAtYmFja3VwX19uby1iYWNrdXBzJykuYWRkQ2xhc3MoJ3pjLXBvcHVwLWJhY2t1cF9fbm8tYmFja3Vwc19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UucmVzdWx0X21zZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVsZXRlSXRlbSgpIHtcbiAgICAgICAgJCgnLnpjLXBvcHVwJykub24oJ2NsaWNrJywgJy56Yy1wb3B1cC1iYWNrdXBfX2l0ZW0tYnV0dG9uX2RlbGV0ZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgemMuYWpheCh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGB6Yy9tb2R1bGUvbWV0YWJveF9wYW5lbC9iYWNrdXBfJHt0aGlzLmdldFZhcignc2x1ZycpfWAsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkZWxldGUtaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGJhY2t1cF9uYW1lOiAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpLmF0dHIoJ2lkJyksXG4gICAgICAgICAgICAgICAgICAgIF9hamF4X25vbmNlOiB0aGlzLmdldFZhcignbm9uY2UnKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yQ2hlY2soJ01ldGFib3hQYW5lbEJhY2t1cCA6IERlbGV0ZSBpdGVtJywganFYSFIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQmxvY2suaGlkZSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYmVmb3JlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUJsb2NrLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cC1iYWNrdXBfX251bWJlcicpLnRleHQocmVzcG9uc2UuY291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNvdW50ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuemMtcG9wdXAtYmFja3VwX19uby1iYWNrdXBzJykuYWRkQ2xhc3MoJ3pjLXBvcHVwLWJhY2t1cF9fbm8tYmFja3Vwc19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UucmVzdWx0X21zZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzdG9yZSgpIHtcbiAgICAgICAgJCgnLnpjLXBvcHVwJykub24oJ2NsaWNrJywgJy56Yy1wb3B1cC1iYWNrdXBfX2l0ZW0tYnV0dG9uX3Jlc3RvcmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgIHpjLmFqYXgoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBgemMvbW9kdWxlL21ldGFib3hfcGFuZWwvYmFja3VwXyR7dGhpcy5nZXRWYXIoJ3NsdWcnKX1gLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmVzdG9yZScsXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgICAgICAgICBiYWNrdXBfbmFtZTogJChldmVudC5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKS5hdHRyKCdpZCcpLFxuICAgICAgICAgICAgICAgICAgICBfYWpheF9ub25jZTogdGhpcy5nZXRWYXIoJ25vbmNlJylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiAoanFYSFIsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvckNoZWNrKCdNZXRhYm94UGFuZWxCYWNrdXAgOiBSZXN0b3JlJywganFYSFIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQmxvY2suaGlkZSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYmVmb3JlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUJsb2NrLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXAucmVtQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cC5hcHBlbmRDb250ZW50KHpjLnRwbChUUExfX2JhY2t1cF9ub3RpZmljYXRpb24sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiByZXNwb25zZS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiByZXNwb25zZS5jb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwLnNob3dDb250ZW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLnJlc3VsdF9tc2cpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IE1ldGFib3hQYW5lbC9Nb2R1bGUvSGVhZGVyIDogUmVzZXRcbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEtlcm5lbCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUva2VybmVsJztcblxuaW1wb3J0IFRQTF9fcmVzZXRfcG9wdXBfbm90aWZpY2F0aW9uIGZyb20gJy4uL2hlYWRlci90cGwvcmVzZXQtcG9wdXAtbm90aWZpY2F0aW9uLmh0bWwnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNldCBleHRlbmRzIEtlcm5lbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jb25maXJtKCk7XG4gICAgfVxuXG4gICAgY29uZmlybSgpIHtcbiAgICAgICAgdGhpcy5jbGljaygnLnpjLW1ldGFib3gtcGFuZWwtcmVzZXQtYnV0dG9uJywgKCkgPT4ge1xuICAgICAgICAgICAgemMuY29uZmlybSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0VmFyKCdyZXNldC1wb3B1cC10aXRsZScpLFxuICAgICAgICAgICAgICAgIHN1YmplY3Q6IHRoaXMuZ2V0VmFyKCdyZXNldC1wb3B1cC1zdWJqZWN0JyksXG4gICAgICAgICAgICAgICAgdGl0bGVPSzogdGhpcy5nZXRWYXIoJ3Jlc2V0LXBvcHVwLW9rJyksXG4gICAgICAgICAgICAgICAgdGl0bGVDYW5jZWw6IHRoaXMuZ2V0VmFyKCdyZXNldC1wb3B1cC1jYW5jZWwnKSxcbiAgICAgICAgICAgICAgICBvazogKHBvcHVwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHpjLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYHpjL21vZHVsZS9tZXRhYm94X3BhbmVsL3Jlc2V0XyR7dGhpcy5nZXRWYXIoJ3NsdWcnKX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAkKCcuemMtcGFuZWwtdGVtcGxhdGVfd2lkJykuZGF0YSgncG9zdC1pZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hamF4X25vbmNlOiB0aGlzLmdldFZhcignbm9uY2UnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiAoanFYSFIsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvbWV0YWJveC1wYW5lbC9yZXNldC9lcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JDaGVjaygnTWV0YWJveFBhbmVsIDogUmVzZXQgc2V0dGluZ3MnLCBqcVhIUik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAuaGlkZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvbWV0YWJveC1wYW5lbC9yZXNldC9iZWZvcmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UudHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VjY2Vzc0NvbmZpcm0ocG9wdXAsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL21ldGFib3gtcGFuZWwvcmVzZXQvc3VjY2Vzcy1zdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXV0cmFsQ29uZmlybShwb3B1cCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvbWV0YWJveC1wYW5lbC9yZXNldC9zdWNjZXNzLWluZm8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHN1Y2Nlc3NDb25maXJtKHBvcHVwLCByZXNwb25zZSkge1xuICAgICAgICBwb3B1cC5yZW1Db250ZW50KCk7XG4gICAgICAgIHBvcHVwLmFwcGVuZENvbnRlbnQoemMudHBsKFRQTF9fcmVzZXRfcG9wdXBfbm90aWZpY2F0aW9uLCB7XG4gICAgICAgICAgICB0eXBlOiByZXNwb25zZS50eXBlID8/ICdlcnJvcicsXG4gICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UudGl0bGUgPz8gJ0Vycm9yJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLmNvbnRlbnQgPz8gJ1Vua25vd24gZXJyb3InXG4gICAgICAgIH0pKTtcbiAgICAgICAgcG9wdXAuc2hvd0NvbnRlbnQoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG5cbiAgICBuZXV0cmFsQ29uZmlybShwb3B1cCwgcmVzcG9uc2UpIHtcbiAgICAgICAgcG9wdXAucmVtQ29udGVudCgpO1xuICAgICAgICBwb3B1cC5hcHBlbmRDb250ZW50KHpjLnRwbChUUExfX3Jlc2V0X3BvcHVwX25vdGlmaWNhdGlvbiwge1xuICAgICAgICAgICAgdHlwZTogcmVzcG9uc2UudHlwZSA/PyAnZXJyb3InLFxuICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLnRpdGxlID8/ICdFcnJvcicsXG4gICAgICAgICAgICBjb250ZW50OiByZXNwb25zZS5jb250ZW50ID8/ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHZhcl9leGl0OiB0aGlzLmdldFZhcignZXhpdCcpXG4gICAgICAgIH0pKTtcbiAgICAgICAgcG9wdXAuc2hvd0NvbnRlbnQoKTtcblxuICAgICAgICAkKCcuemMtcG9wdXAnKS5vbignY2xpY2snLCAnLnpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fY2xvc2UtYnV0dG9uJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICBwb3B1cC5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIHppbWJydWNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBNZXRhYm94UGFuZWwvTW9kdWxlL01vZGUgOiBNZXRhIG1vZGUgYm9keSBzaXplXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBLZXJuZWwgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2tlcm5lbCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFNb2RlQm9keVNpemUgZXh0ZW5kcyBLZXJuZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGxldCBwYW5lbFdpZHRoID0gJCgnLnpjLXBhbmVsLnpjLXBhbmVsX21vZGVfbWV0YScpLndpZHRoKCk7XG4gICAgICAgIGlmIChwYW5lbFdpZHRoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja1BhbmVsV2lkdGgoKTtcbiAgICAgICAgICAgIHRoaXMubWV0YUhlaWdodCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBhbmVsV2lkdGggPSAkKCcuemMtcGFuZWwuemMtcGFuZWxfbW9kZV9tZXRhJykud2lkdGgoKTtcblxuICAgICAgICAgICAgICAgIGlmIChwYW5lbFdpZHRoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUGFuZWxXaWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGFIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgemMucmVzaXplKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXJhc2VNb2JpbGVNZW51KCk7IC8vIEVyYXNlIG1vYmlsZSBtZW51XG4gICAgICAgICAgICB0aGlzLm1ldGFIZWlnaHQoKTsgICAgICAvLyBDaGVjayBwYW5lbCBoZWlnaHQgc2l6ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBtZXRhSGVpZ2h0KCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rlc2t0b3BNb2RlKCkpIHtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC56Yy1wYW5lbF9tb2RlX21ldGEnKS5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC56Yy1wYW5lbF9tb2RlX21ldGEgLnpjLXBhbmVsLWNvbnRyb2xzJykuaGVpZ2h0KCdhdXRvJyk7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwuemMtcGFuZWxfbW9kZV9tZXRhIC56Yy1wYW5lbC1zdWJtZW51X19zY3JvbGxiYXItY29udGFpbmVyJykuaGVpZ2h0KCdhdXRvJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwuemMtcGFuZWxfbW9kZV9tZXRhJykuaGVpZ2h0KCcxMDAlJyk7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwuemMtcGFuZWxfbW9kZV9tZXRhIC56Yy1wYW5lbC1jb250cm9scycpLmhlaWdodCgnMTAwJScpO1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLnpjLXBhbmVsX21vZGVfbWV0YSAuemMtcGFuZWwtc3VibWVudV9fc2Nyb2xsYmFyLWNvbnRhaW5lcicpLmhlaWdodCgnMTAwJScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkTW9kZVNpemUod2lkdGgpIHtcbiAgICAgICAgbGV0IG1vZGUgPSAnbW9kZS0xLSc7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0Q29uZmlnKCdtaW4tc2l6ZS9tb2RlMScpID49IHdpZHRoKSB7XG4gICAgICAgICAgICBtb2RlID0gJ21vZGUtMS0nO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0Q29uZmlnKCdtaW4tc2l6ZS9tb2RlMicpID49IHdpZHRoKSB7XG4gICAgICAgICAgICBtb2RlID0gJ21vZGUtMi0nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kZSA9ICdtb2RlLTMtJztcbiAgICAgICAgfVxuXG4gICAgICAgICQoJy56Yy1wYW5lbC56Yy1wYW5lbF9tb2RlX21ldGEnKS5hdHRyKCdkYXRhLXdpZHRoJywgbW9kZSArIHdpZHRoKTtcblxuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvc2l6ZS1jaGFuZ2VkJyk7XG4gICAgfVxuXG4gICAgY2hlY2tQYW5lbFdpZHRoKCkge1xuICAgICAgICBjb25zdCBybyA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyaWVzWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE1vZGVTaXplKGVudHJpZXNbMF0uY29udGVudFJlY3Qud2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByby5vYnNlcnZlKCQoJy56Yy1wYW5lbC56Yy1wYW5lbF9tb2RlX21ldGEnKS5nZXQoMCkpO1xuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZSA6IEtlcm5lbFxuICpcbiAqIEBhdXRob3IgIEMuUiA8Y3JAanVuanVsaW5pLmNvbT5cbiAqIEBwYWNrYWdlIHppbWJydWNvZGVcbiAqIEBzaW5jZSAgIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXJuZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdsb2JhbCA9IHpjLmdldE1vZHVsZURhdGEoJ3BhbmVsJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFuZWwgc2Nyb2xsIGJhciB0b3BcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgc2Nyb2xsYmFyVG9wKCkge1xuICAgICAgICAkKCcuemMtcGFuZWwgLnpjLXNjcm9sbGJhcicpLnNjcm9sbFRvcCgwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgcGFuZWwgaGVpZ2h0XG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNhbGNIZWlnaHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmdldENhY2hlKCd3cC1ib2R5LWhlaWdodCcpICE9PSAkKHdpbmRvdykuaGVpZ2h0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FjaGUoJ3dwLWJvZHktaGVpZ2h0JywgJCh3aW5kb3cpLmhlaWdodCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVyYXNlIG1vYmlsZSBtZW51XG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGVyYXNlTW9iaWxlTWVudSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZXNrdG9wTW9kZSgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZXJ2aWNlKCdtZW51L2lzU3VibWVudUl0ZW0nKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1tZW51JykuYWRkQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250ZW50X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwtbWVudScpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1tZW51X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250ZW50X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250ZW50X21vYmlsZS1tZW51LXZpc2libGUnKTtcbiAgICAgICAgJCgnLnpjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudScpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnVfYWN0aXZlJyk7XG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlKCdjbG9zZS1ibG9jaycpLmhpZGVEZWZpbml0ZWx5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXMgZGVza3RvcCBtb2RlXG4gICAgICogXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJuIFwidHJ1ZVwiIGlmIGJvZHkgd2lkdGggaXMgYmlnZ2VyIHRoZW4gXCJtaW4tc2l6ZS5tb2RlMlwiXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaXNEZXNrdG9wTW9kZSgpIHtcbiAgICAgICAgcmV0dXJuICgkKCcuemMtcGFuZWwnKS53aWR0aCgpID49IHRoaXMuZ2V0Q29uZmlnKCdtaW4tc2l6ZS9tb2RlMicpKTtcbiAgICB9XG5cbiAgICAgLyoqXG4gICAgICogRXJyb3IgY2hlY2ssIGluIEFKQVggb3Igb3RoZXJcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZXJyb3JDaGVjayhtc2csIGpxWEhSKSB7XG4gICAgICAgIGlmICghJCgnLnpjLXBvcHVwJykuaGFzQ2xhc3MoJ3pjLXBhbmVsLWVycm9yLWNvbmZpcm0nKSkge1xuXG4gICAgICAgICAgICBpZiAoJCgnLnpjLXBvcHVwJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwJykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcblxuICAgICAgICAgICAgemMuY29uZmlybSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGBFcnJvciAtICR7anFYSFIuc3RhdHVzVGV4dH0gOiAke2pxWEhSLnN0YXR1c31gLFxuICAgICAgICAgICAgICAgIHN1YmplY3Q6IGAke21zZ30gUGFnZSB3aWxsIGJlIHJlbG9hZGVkLCBvaz9gLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAnemMtcGFuZWwtZXJyb3ItY29uZmlybScsXG4gICAgICAgICAgICAgICAgb2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZ2xvYmFsIHZhclxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkZWYgICBJZiBub3QgZm91bmQsIHJldHVybiBcImRlZlwiXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0VmFyKGtleSwgZGVmKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC52YXJzLCBrZXkpO1xuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGdsb2JhbCB2YXIgdmFsdWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGF0YSAgVmFyIHZhbHVlXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkVmFyKGtleSwgZGF0YSkge1xuICAgICAgICB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwudmFycywga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZ2xvYmFsIGNhY2hlIHZhbHVlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRhdGEgIENhY2hlIHZhbHVlXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkQ2FjaGUoa2V5LCBkYXRhKSB7XG4gICAgICAgIHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jYWNoZSwga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZ2xvYmFsIGNhY2hlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRlZiAgIElmIG5vdCBmb3VuZCwgcmV0dXJuIFwiZGVmXCJcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBnZXRDYWNoZShrZXksIGRlZikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwuY2FjaGUsIGtleSk7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkZWY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVsZW1lbnQgZnJvbSBjYWNoZSBvYmplY3RcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKi9cbiAgICByZW1DYWNoZShrZXkpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNhY2hlLCBrZXksIGZhbHNlLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZ2xvYmFsIGNvbmZpZyB2YWx1ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkYXRhICBDb25maWcgdmFsdWVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRDb25maWcoa2V5LCBkYXRhKSB7XG4gICAgICAgIHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jb25maWcsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGdsb2JhbCBjb25maWdcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGVmICAgSWYgbm90IGZvdW5kLCByZXR1cm4gXCJkZWZcIlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGdldENvbmZpZyhrZXksIGRlZikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwuY29uZmlnLCBrZXkpO1xuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VydmljZShuYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAobmFtZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihjYWxsYmFjaykgfHwgdHlwZW9mIGNhbGxiYWNrID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2FjaGUoYHNlcnZpY2VzLyR7bmFtZX1gLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmdldENhY2hlKGBzZXJ2aWNlcy8ke25hbWV9YCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGlmIChzZXJ2aWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXh0IHNlcnZpY2Ugbm90IGV4aXN0IDogJHtuYW1lfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uKGV2ZW50cywgc2VsZWN0b3IsIGhhbmRsZXIsIHByZXZlbnREZWZhdWx0ID0gZmFsc2UpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsJykub24oZXZlbnRzLCBzZWxlY3RvciwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJldmVudERlZmF1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgJChldmVudC5jdXJyZW50VGFyZ2V0KSwgZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGljayhzZWxlY3RvciwgaGFuZGxlciwgcHJldmVudERlZmF1bHQgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMub24oJ2NsaWNrJywgc2VsZWN0b3IsIGhhbmRsZXIsIHByZXZlbnREZWZhdWx0KTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IE1ldGFib3hQYW5lbCA6IE1ldGEgbW9kZVxuICpcbiAqIEBhdXRob3IgIEMuUiA8Y3JAanVuanVsaW5pLmNvbT5cbiAqIEBwYWNrYWdlIHppbWJydWNvZGVcbiAqIEBzaW5jZSAgIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQm9keVNpemUgZnJvbSAnLi9tb2R1bGUvbW9kZS9tZXRhLW1vZGUtYm9keS1zaXplJztcbmltcG9ydCBCYWNrdXAgICBmcm9tICcuL21vZHVsZS9oZWFkZXIvYmFja3VwJztcbmltcG9ydCBSZXNldCAgICBmcm9tICcuL21vZHVsZS9oZWFkZXIvcmVzZXQnO1xuXG56Yy5tb2R1bGUucGFuZWwuYWRkTW9kZSgoJCwgcGFuZWwpID0+IHtcblxuICAgIHBhbmVsLmFkZENvbmZpZygnaGVpZ2h0LUZBSCcsIDU2KTtcbiAgICBwYW5lbC5hZGRDb25maWcoJ21pbi1zaXplL21vZGUyJywgNzgwKTtcblxuICAgIHBhbmVsLmNsb3NlQmxvY2soKTsgICAgICAgICAgLy8gSW5pdCBjYWxsYmFjayBvZiBjbG9zZSBibG9jay5cbiAgICBwYW5lbC5jb250cm9sSW5pdCgpOyAgICAgICAgIC8vIEluaXRpYWxpemF0aW9uIG9mIGNvbnRyb2xzLlxuICAgIHBhbmVsLmNvbnRyb2xIZWxwKCk7ICAgICAgICAgLy8gQ29udHJvbCBoZWxwIHdpbmRvdy5cbiAgICBwYW5lbC5zY3JvbGxiYXIoKTsgICAgICAgICAgIC8vIEluaXRpYWxpemF0aW9uIG9mIHNjcm9sbCBiYXIgaW4gcGFuZWwuXG4gICAgcGFuZWwubm9NZXRhU2NhbGVJZk1vYmlsZSgpOyAvLyBEaXNhYmxlIG1ldGEgc2NhbGUgaWYgbW9iaWxlIGRldmljZS5cbiAgICBwYW5lbC5jb25kaXRpb24oKTsgICAgICAgICAgIC8vIEluaXRpYWxpemF0aW9uIG9mIHBhbmVsIGNvbmRpdGlvbiBjaGVja2VyLlxuICAgIHBhbmVsLnRvb2x0aXAoKTsgICAgICAgICAgICAgLy8gSW5pdCB0b29sdGlwXG4gICAgcGFuZWwubWVudSgpOyAgICAgICAgICAgICAgICAvLyBQYW5lbCBtZW51LlxuXG4gICAgbmV3IEJvZHlTaXplOyAvLyBQYW5lbCBib2R5IHNpemUuXG4gICAgbmV3IEJhY2t1cDsgICAvLyBNZXRhIGJhY2t1cCwgaW1wb3J0L2V4cG9ydC5cbiAgICBuZXcgUmVzZXQ7ICAgIC8vIFJlc2V0IG1ldGEgb3B0aW9ucy5cblxuICAgICQoJy56Yy1wYW5lbC10ZW1wbGF0ZV9fcGFuZWwtbG9hZGluZycpLmhpZGUoKTsgLy8gSGlkZSBwYW5lbCBsb2FkaW5nIHRleHQuXG4gICAgJCgnLnpjLXBhbmVsLnpjLXBhbmVsX21vZGVfbWV0YScpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7ICAgLy8gRnVsbCBkaXNwbGF5IHBhbmVsLlxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBzYXZlIGJ1dHRvblxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwYW5lbC5kaXNhYmxlU2F2ZUJ1dHRvbiA9ICgpID0+IHt9O1xuXG4gICAgLyoqXG4gICAgICogRW5hYmxlIHNhdmUgYnV0dG9uXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHBhbmVsLmVuYWJsZVNhdmVCdXR0b24gPSAoKSA9PiB7fTtcblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgcmVzZXQgYnV0dG9uXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHBhbmVsLmRpc2FibGVSZXNldEJ1dHRvbiA9ICgpID0+IHt9O1xuXG4gICAgLyoqXG4gICAgICogRW5hYmxlIHJlc2V0IGJ1dHRvblxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwYW5lbC5lbmFibGVSZXNldEJ1dHRvbiA9ICgpID0+IHt9O1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9