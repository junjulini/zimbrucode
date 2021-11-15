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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL01vZHVsZS9NZXRhYm94UGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9qcXVlcnkubWV0YS1tb2RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxpSUFBaUksTUFBTSxxT0FBcU8sT0FBTyx5REFBeUQsU0FBUztBQUNyYjtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDSG5CO0FBQ0EseUZBQXlGLE1BQU0sb1NBQW9TLE9BQU8seURBQXlELFNBQVMsd0pBQXdKLFVBQVU7QUFDOW1CO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFeUU7O0FBRWhCOztBQUV0RTs7QUFFZSxxQkFBcUIsb0ZBQU07QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxvQkFBb0I7QUFDbEY7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLG9CQUFvQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFD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QUNqQyxpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQyxpQ0FBaUM7QUFDakMsaUNBQWlDOztBQUVqQyxRQUFRLHdFQUFRLEVBQUU7QUFDbEIsUUFBUSw2REFBTSxJQUFJO0FBQ2xCLFFBQVEsNERBQUssS0FBSzs7QUFFbEIsbURBQW1EO0FBQ25ELHNFQUFzRTs7QUFFdEU7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvTWV0YWJveFBhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9oZWFkZXIvdHBsL2JhY2t1cC1ub3RpZmljYXRpb24uaHRtbCIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9NZXRhYm94UGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2hlYWRlci90cGwvcmVzZXQtcG9wdXAtbm90aWZpY2F0aW9uLmh0bWwiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvTWV0YWJveFBhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9oZWFkZXIvYmFja3VwLmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL01ldGFib3hQYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvaGVhZGVyL3Jlc2V0LmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL01ldGFib3hQYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvbW9kZS9tZXRhLW1vZGUtYm9keS1zaXplLmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9rZXJuZWwuanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL01ldGFib3hQYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9qcXVlcnkubWV0YS1tb2RlLmVzNi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCIgPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uIHpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9tb2RlX2JhY2t1cCB6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fdHlwZV97e3R5cGV9fVxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9faWNvbi1jb250YWluZXJcXFwiPiA8aSBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19pY29uXFxcIj48L2k+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2NvbnRlbnRcXFwiPiA8c3BhbiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX190aXRsZVxcXCI+e3t0aXRsZX19PC9zcGFuPiA8cCBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX190ZXh0XFxcIj57e2NvbnRlbnR9fTwvcD4gPC9kaXY+IDwvZGl2PlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCIgPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uIHpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl90eXBlX3t7dHlwZX19XFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19pY29uLWNvbnRhaW5lclxcXCI+IDxpIGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2ljb25cXFwiPjwvaT4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fY29udGVudC1jb250YWluZXJcXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2NvbnRlbnRcXFwiPiA8c3BhbiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX190aXRsZVxcXCI+e3t0aXRsZX19PC9zcGFuPiA8cCBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX190ZXh0XFxcIj57e2NvbnRlbnR9fTwvcD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fY2xvc2UtY29udHJvbGxlclxcXCI+IDxidXR0b24gY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fY2xvc2UtYnV0dG9uXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPnt7dmFyX2V4aXR9fTwvYnV0dG9uPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IE1ldGFib3hQYW5lbC9Nb2R1bGUvSGVhZGVyIDogQmFja3VwXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBLZXJuZWwgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2tlcm5lbCc7XG5cbmltcG9ydCBUUExfX2JhY2t1cF9ub3RpZmljYXRpb24gZnJvbSAnLi90cGwvYmFja3VwLW5vdGlmaWNhdGlvbi5odG1sJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja3VwIGV4dGVuZHMgS2VybmVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmlkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xvc2VCbG9jayAgPSB7XG4gICAgICAgICAgICBfX2NiOiAnLnpjLXBvcHVwLWJhY2t1cF9fY2xvc2UtYmxvY2snLFxuXG4gICAgICAgICAgICBzaG93OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLmNsb3NlQmxvY2suX19jYikuc2hvdygpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGlkZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQodGhpcy5jbG9zZUJsb2NrLl9fY2IpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnBvcHVwID0gemMucG9wdXAoKTtcblxuICAgICAgICB0aGlzLmJhY2t1cEJ1dHRvbigpO1xuICAgIH1cblxuICAgIGJhY2t1cEJ1dHRvbigpIHtcbiAgICAgICAgdGhpcy5jbGljaygnLnpjLW1ldGFib3gtcGFuZWwtYmFja3VwLWJ1dHRvbicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSAkKCcuemMtcGFuZWwtdGVtcGxhdGVfd2lkJykuZGF0YSgncG9zdC1pZCcpO1xuXG4gICAgICAgICAgICB0aGlzLnBvcHVwLmFkZCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0VmFyKCdiYWNrdXAtcG9wLXVwLXRpdGxlJyksXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgICBhamF4OiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYHpjL21vZHVsZS9tZXRhYm94X3BhbmVsL2JhY2t1cF8ke3RoaXMuZ2V0VmFyKCdzbHVnJyl9YCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2dldC1jb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgX2FqYXhfbm9uY2U6IHRoaXMuZ2V0VmFyKCdub25jZScpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogKHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yQ2hlY2soJ01ldGFib3hQYW5lbEJhY2t1cCA6IExvYWQgY29udGVudCcsIHN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSAgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVBbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVJdGVtKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdG9yZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzYXZlKCkge1xuICAgICAgICAkKCcuemMtcG9wdXAnKS5vbignY2xpY2snLCAnLnpjLXBvcHVwLWJhY2t1cF9fc2F2ZS1idXR0b24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgIGNvbnN0IGJhY2t1cE5hbWUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpLmZpbmQoJ2lucHV0JykudmFsKCk7XG5cbiAgICAgICAgICAgIGlmIChiYWNrdXBOYW1lICYmIGJhY2t1cE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHpjLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGB6Yy9tb2R1bGUvbWV0YWJveF9wYW5lbC9iYWNrdXBfJHt0aGlzLmdldFZhcignc2x1ZycpfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2F2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2t1cF9uYW1lOiBiYWNrdXBOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2FqYXhfbm9uY2U6IHRoaXMuZ2V0VmFyKCdub25jZScpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAoanFYSFIsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JDaGVjaygnTWV0YWJveFBhbmVsQmFja3VwIDogU2F2ZScsIGpxWEhSKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUJsb2NrLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQmxvY2suaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLnpjLXBvcHVwLWJhY2t1cF9fbm8tYmFja3VwcycpLmhhc0NsYXNzKCd6Yy1wb3B1cC1iYWNrdXBfX25vLWJhY2t1cHNfYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwLWJhY2t1cF9fbm8tYmFja3VwcycpLnJlbW92ZUNsYXNzKCd6Yy1wb3B1cC1iYWNrdXBfX25vLWJhY2t1cHNfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwLWJhY2t1cF9faW5wdXQnKS52YWwoJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cC1iYWNrdXBfX251bWJlcicpLnRleHQocmVzcG9uc2UuY2hhbmdlLmNvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuemMtcG9wdXAtYmFja3VwX19saXN0JykuYXBwZW5kKHJlc3BvbnNlLmNoYW5nZS5pdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5yZXN1bHRfbXNnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZWxldGVBbGwoKSB7XG4gICAgICAgICQoJy56Yy1wb3B1cCcpLm9uKCdjbGljaycsICcuemMtcG9wdXAtYmFja3VwX19kZWxldGUtYnV0dG9uJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICB6Yy5hamF4KHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYHpjL21vZHVsZS9tZXRhYm94X3BhbmVsL2JhY2t1cF8ke3RoaXMuZ2V0VmFyKCdzbHVnJyl9YCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RlbGV0ZScsXG4gICAgICAgICAgICAgICAgICAgIF9hamF4X25vbmNlOiB0aGlzLmdldFZhcignbm9uY2UnKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yQ2hlY2soJ01ldGFib3hQYW5lbEJhY2t1cCA6IERlbGV0ZSBhbGwnLCBqcVhIUik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBiZWZvcmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUJsb2NrLnNob3coKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQmxvY2suaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwLWJhY2t1cF9fbnVtYmVyJykudGV4dCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cC1iYWNrdXBfX2xpc3QnKS5lbXB0eSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwLWJhY2t1cF9fbm8tYmFja3VwcycpLmFkZENsYXNzKCd6Yy1wb3B1cC1iYWNrdXBfX25vLWJhY2t1cHNfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLnJlc3VsdF9tc2cpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlbGV0ZUl0ZW0oKSB7XG4gICAgICAgICQoJy56Yy1wb3B1cCcpLm9uKCdjbGljaycsICcuemMtcG9wdXAtYmFja3VwX19pdGVtLWJ1dHRvbl9kZWxldGUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgIHpjLmFqYXgoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBgemMvbW9kdWxlL21ldGFib3hfcGFuZWwvYmFja3VwXyR7dGhpcy5nZXRWYXIoJ3NsdWcnKX1gLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGVsZXRlLWl0ZW0nLFxuICAgICAgICAgICAgICAgICAgICBiYWNrdXBfbmFtZTogJChldmVudC5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKS5hdHRyKCdpZCcpLFxuICAgICAgICAgICAgICAgICAgICBfYWpheF9ub25jZTogdGhpcy5nZXRWYXIoJ25vbmNlJylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiAoanFYSFIsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvckNoZWNrKCdNZXRhYm94UGFuZWxCYWNrdXAgOiBEZWxldGUgaXRlbScsIGpxWEhSKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUJsb2NrLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJlZm9yZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQmxvY2suc2hvdygpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuemMtcG9wdXAtYmFja3VwX19udW1iZXInKS50ZXh0KHJlc3BvbnNlLmNvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkucGFyZW50KCkucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5jb3VudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwLWJhY2t1cF9fbm8tYmFja3VwcycpLmFkZENsYXNzKCd6Yy1wb3B1cC1iYWNrdXBfX25vLWJhY2t1cHNfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLnJlc3VsdF9tc2cpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc3RvcmUoKSB7XG4gICAgICAgICQoJy56Yy1wb3B1cCcpLm9uKCdjbGljaycsICcuemMtcG9wdXAtYmFja3VwX19pdGVtLWJ1dHRvbl9yZXN0b3JlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICB6Yy5hamF4KHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYHpjL21vZHVsZS9tZXRhYm94X3BhbmVsL2JhY2t1cF8ke3RoaXMuZ2V0VmFyKCdzbHVnJyl9YCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Jlc3RvcmUnLFxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgYmFja3VwX25hbWU6ICQoZXZlbnQuY3VycmVudFRhcmdldCkucGFyZW50KCkuYXR0cignaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgX2FqYXhfbm9uY2U6IHRoaXMuZ2V0VmFyKCdub25jZScpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JDaGVjaygnTWV0YWJveFBhbmVsQmFja3VwIDogUmVzdG9yZScsIGpxWEhSKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUJsb2NrLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJlZm9yZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQmxvY2suc2hvdygpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwLnJlbUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXAuYXBwZW5kQ29udGVudCh6Yy50cGwoVFBMX19iYWNrdXBfbm90aWZpY2F0aW9uLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogcmVzcG9uc2UudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogcmVzcG9uc2UuY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cC5zaG93Q29udGVudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5yZXN1bHRfbXNnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIHppbWJydWNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBNZXRhYm94UGFuZWwvTW9kdWxlL0hlYWRlciA6IFJlc2V0XG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBLZXJuZWwgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2tlcm5lbCc7XG5cbmltcG9ydCBUUExfX3Jlc2V0X3BvcHVwX25vdGlmaWNhdGlvbiBmcm9tICcuLi9oZWFkZXIvdHBsL3Jlc2V0LXBvcHVwLW5vdGlmaWNhdGlvbi5odG1sJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzZXQgZXh0ZW5kcyBLZXJuZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuY29uZmlybSgpO1xuICAgIH1cblxuICAgIGNvbmZpcm0oKSB7XG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1tZXRhYm94LXBhbmVsLXJlc2V0LWJ1dHRvbicsICgpID0+IHtcbiAgICAgICAgICAgIHpjLmNvbmZpcm0oe1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmdldFZhcigncmVzZXQtcG9wLXVwLXRpdGxlJyksXG4gICAgICAgICAgICAgICAgc3ViamVjdDogdGhpcy5nZXRWYXIoJ3Jlc2V0LXBvcC11cC1zdWJqZWN0JyksXG4gICAgICAgICAgICAgICAgdGl0bGVPSzogdGhpcy5nZXRWYXIoJ3Jlc2V0LXBvcC11cC1vaycpLFxuICAgICAgICAgICAgICAgIHRpdGxlQ2FuY2VsOiB0aGlzLmdldFZhcigncmVzZXQtcG9wLXVwLWNhbmNlbCcpLFxuICAgICAgICAgICAgICAgIG9rOiAocG9wdXApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgemMuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBgemMvbW9kdWxlL21ldGFib3hfcGFuZWwvcmVzZXRfJHt0aGlzLmdldFZhcignc2x1ZycpfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICQoJy56Yy1wYW5lbC10ZW1wbGF0ZV93aWQnKS5kYXRhKCdwb3N0LWlkJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2FqYXhfbm9uY2U6IHRoaXMuZ2V0VmFyKCdub25jZScpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9tZXRhYm94LXBhbmVsL3Jlc2V0L2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvckNoZWNrKCdNZXRhYm94UGFuZWwgOiBSZXNldCBzZXR0aW5ncycsIGpxWEhSKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5oaWRlQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9tZXRhYm94LXBhbmVsL3Jlc2V0L2JlZm9yZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS50eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzQ29uZmlybShwb3B1cCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvbWV0YWJveC1wYW5lbC9yZXNldC9zdWNjZXNzLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5ldXRyYWxDb25maXJtKHBvcHVwLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9tZXRhYm94LXBhbmVsL3Jlc2V0L3N1Y2Nlc3MtaW5mbycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgc3VjY2Vzc0NvbmZpcm0ocG9wdXAsIHJlc3BvbnNlKSB7XG4gICAgICAgIHBvcHVwLnJlbUNvbnRlbnQoKTtcbiAgICAgICAgcG9wdXAuYXBwZW5kQ29udGVudCh6Yy50cGwoVFBMX19yZXNldF9wb3B1cF9ub3RpZmljYXRpb24sIHtcbiAgICAgICAgICAgIHR5cGU6IHJlc3BvbnNlLnR5cGUgPz8gJ2Vycm9yJyxcbiAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS50aXRsZSA/PyAnRXJyb3InLFxuICAgICAgICAgICAgY29udGVudDogcmVzcG9uc2UuY29udGVudCA/PyAnVW5rbm93biBlcnJvcidcbiAgICAgICAgfSkpO1xuICAgICAgICBwb3B1cC5zaG93Q29udGVudCgpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH1cblxuICAgIG5ldXRyYWxDb25maXJtKHBvcHVwLCByZXNwb25zZSkge1xuICAgICAgICBwb3B1cC5yZW1Db250ZW50KCk7XG4gICAgICAgIHBvcHVwLmFwcGVuZENvbnRlbnQoemMudHBsKFRQTF9fcmVzZXRfcG9wdXBfbm90aWZpY2F0aW9uLCB7XG4gICAgICAgICAgICB0eXBlOiByZXNwb25zZS50eXBlID8/ICdlcnJvcicsXG4gICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UudGl0bGUgPz8gJ0Vycm9yJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLmNvbnRlbnQgPz8gJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgdmFyX2V4aXQ6IHRoaXMuZ2V0VmFyKCdleGl0JylcbiAgICAgICAgfSkpO1xuICAgICAgICBwb3B1cC5zaG93Q29udGVudCgpO1xuXG4gICAgICAgICQoJy56Yy1wb3B1cCcpLm9uKCdjbGljaycsICcuemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19jbG9zZS1idXR0b24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgIHBvcHVwLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IE1ldGFib3hQYW5lbC9Nb2R1bGUvTW9kZSA6IE1ldGEgbW9kZSBib2R5IHNpemVcbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEtlcm5lbCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUva2VybmVsJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YU1vZGVCb2R5U2l6ZSBleHRlbmRzIEtlcm5lbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgbGV0IHBhbmVsV2lkdGggPSAkKCcuemMtcGFuZWwuemMtcGFuZWxfbW9kZV9tZXRhJykud2lkdGgoKTtcbiAgICAgICAgaWYgKHBhbmVsV2lkdGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrUGFuZWxXaWR0aCgpO1xuICAgICAgICAgICAgdGhpcy5tZXRhSGVpZ2h0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcGFuZWxXaWR0aCA9ICQoJy56Yy1wYW5lbC56Yy1wYW5lbF9tb2RlX21ldGEnKS53aWR0aCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBhbmVsV2lkdGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tQYW5lbFdpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWV0YUhlaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cblxuICAgICAgICB6Yy5yZXNpemUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lcmFzZU1vYmlsZU1lbnUoKTsgLy8gRXJhc2UgbW9iaWxlIG1lbnVcbiAgICAgICAgICAgIHRoaXMubWV0YUhlaWdodCgpOyAgICAgIC8vIENoZWNrIHBhbmVsIGhlaWdodCBzaXplXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1ldGFIZWlnaHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGVza3RvcE1vZGUoKSkge1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLnpjLXBhbmVsX21vZGVfbWV0YScpLmhlaWdodCgnYXV0bycpO1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLnpjLXBhbmVsX21vZGVfbWV0YSAuemMtcGFuZWwtY29udHJvbHMnKS5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC56Yy1wYW5lbF9tb2RlX21ldGEgLnpjLXBhbmVsLXN1Ym1lbnVfX3Njcm9sbGJhci1jb250YWluZXInKS5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC56Yy1wYW5lbF9tb2RlX21ldGEnKS5oZWlnaHQoJzEwMCUnKTtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC56Yy1wYW5lbF9tb2RlX21ldGEgLnpjLXBhbmVsLWNvbnRyb2xzJykuaGVpZ2h0KCcxMDAlJyk7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwuemMtcGFuZWxfbW9kZV9tZXRhIC56Yy1wYW5lbC1zdWJtZW51X19zY3JvbGxiYXItY29udGFpbmVyJykuaGVpZ2h0KCcxMDAlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRNb2RlU2l6ZSh3aWR0aCkge1xuICAgICAgICBsZXQgbW9kZSA9ICdtb2RlLTEtJztcblxuICAgICAgICBpZiAodGhpcy5nZXRDb25maWcoJ21pbi1zaXplL21vZGUxJykgPj0gd2lkdGgpIHtcbiAgICAgICAgICAgIG1vZGUgPSAnbW9kZS0xLSc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXRDb25maWcoJ21pbi1zaXplL21vZGUyJykgPj0gd2lkdGgpIHtcbiAgICAgICAgICAgIG1vZGUgPSAnbW9kZS0yLSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2RlID0gJ21vZGUtMy0nO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnLnpjLXBhbmVsLnpjLXBhbmVsX21vZGVfbWV0YScpLmF0dHIoJ2RhdGEtd2lkdGgnLCBtb2RlICsgd2lkdGgpO1xuXG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9zaXplLWNoYW5nZWQnKTtcbiAgICB9XG5cbiAgICBjaGVja1BhbmVsV2lkdGgoKSB7XG4gICAgICAgIGNvbnN0IHJvID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJpZXNbMF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkTW9kZVNpemUoZW50cmllc1swXS5jb250ZW50UmVjdC53aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJvLm9ic2VydmUoJCgnLnpjLXBhbmVsLnpjLXBhbmVsX21vZGVfbWV0YScpLmdldCgwKSk7XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwvTW9kdWxlIDogS2VybmVsXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtlcm5lbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsID0gemMuZ2V0TW9kdWxlRGF0YSgncGFuZWwnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYW5lbCBzY3JvbGwgYmFyIHRvcFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzY3JvbGxiYXJUb3AoKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbCAuemMtc2Nyb2xsYmFyJykuc2Nyb2xsVG9wKDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBwYW5lbCBoZWlnaHRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY2FsY0hlaWdodCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2FjaGUoJ3dwLWJvZHktaGVpZ2h0JykgIT09ICQod2luZG93KS5oZWlnaHQoKSkge1xuICAgICAgICAgICAgdGhpcy5hZGRDYWNoZSgnd3AtYm9keS1oZWlnaHQnLCAkKHdpbmRvdykuaGVpZ2h0KCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXJhc2UgbW9iaWxlIG1lbnVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZXJhc2VNb2JpbGVNZW51KCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rlc2t0b3BNb2RlKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlcnZpY2UoJ21lbnUvaXNTdWJtZW51SXRlbScpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLW1lbnUnKS5hZGRDbGFzcygnemMtcGFuZWwtbWVudV9zdWJtZW51LWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykuYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC1tZW51JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfbW9iaWxlLW1lbnUtdmlzaWJsZScpO1xuICAgICAgICAkKCcuemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudV9hY3RpdmUnKTtcblxuICAgICAgICB0aGlzLnNlcnZpY2UoJ2Nsb3NlLWJsb2NrJykuaGlkZURlZmluaXRlbHkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJcyBkZXNrdG9wIG1vZGVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm4gXCJ0cnVlXCIgaWYgYm9keSB3aWR0aCBpcyBiaWdnZXIgdGhlbiBcIm1pbi1zaXplLm1vZGUyXCJcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBpc0Rlc2t0b3BNb2RlKCkge1xuICAgICAgICByZXR1cm4gKCQoJy56Yy1wYW5lbCcpLndpZHRoKCkgPj0gdGhpcy5nZXRDb25maWcoJ21pbi1zaXplL21vZGUyJykpO1xuICAgIH1cblxuICAgICAvKipcbiAgICAgKiBFcnJvciBjaGVjaywgaW4gQUpBWCBvciBvdGhlclxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBlcnJvckNoZWNrKG1zZywganFYSFIpIHtcbiAgICAgICAgaWYgKCEkKCcuemMtcG9wdXAnKS5oYXNDbGFzcygnemMtcGFuZWwtZXJyb3ItY29uZmlybScpKSB7XG5cbiAgICAgICAgICAgIGlmICgkKCcuemMtcG9wdXAnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkKCcuemMtcG9wdXAnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuXG4gICAgICAgICAgICB6Yy5jb25maXJtKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogYEVycm9yIC0gJHtqcVhIUi5zdGF0dXNUZXh0fSA6ICR7anFYSFIuc3RhdHVzfWAsXG4gICAgICAgICAgICAgICAgc3ViamVjdDogYCR7bXNnfSBQYWdlIHdpbGwgYmUgcmVsb2FkZWQsIG9rP2AsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICd6Yy1wYW5lbC1lcnJvci1jb25maXJtJyxcbiAgICAgICAgICAgICAgICBvazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBnbG9iYWwgdmFyXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRlZiAgIElmIG5vdCBmb3VuZCwgcmV0dXJuIFwiZGVmXCJcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBnZXRWYXIoa2V5LCBkZWYpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLnZhcnMsIGtleSk7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkZWY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZ2xvYmFsIHZhciB2YWx1ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkYXRhICBWYXIgdmFsdWVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRWYXIoa2V5LCBkYXRhKSB7XG4gICAgICAgIHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC52YXJzLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBnbG9iYWwgY2FjaGUgdmFsdWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGF0YSAgQ2FjaGUgdmFsdWVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRDYWNoZShrZXksIGRhdGEpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNhY2hlLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBnbG9iYWwgY2FjaGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGVmICAgSWYgbm90IGZvdW5kLCByZXR1cm4gXCJkZWZcIlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGdldENhY2hlKGtleSwgZGVmKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jYWNoZSwga2V5KTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRlZjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZWxlbWVudCBmcm9tIGNhY2hlIG9iamVjdFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqL1xuICAgIHJlbUNhY2hlKGtleSkge1xuICAgICAgICB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwuY2FjaGUsIGtleSwgZmFsc2UsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBnbG9iYWwgY29uZmlnIHZhbHVlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRhdGEgIENvbmZpZyB2YWx1ZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZENvbmZpZyhrZXksIGRhdGEpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNvbmZpZywga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZ2xvYmFsIGNvbmZpZ1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkZWYgICBJZiBub3QgZm91bmQsIHJldHVybiBcImRlZlwiXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0Q29uZmlnKGtleSwgZGVmKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jb25maWcsIGtleSk7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkZWY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXJ2aWNlKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSB8fCB0eXBlb2YgY2FsbGJhY2sgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDYWNoZShgc2VydmljZXMvJHtuYW1lfWAsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuZ2V0Q2FjaGUoYHNlcnZpY2VzLyR7bmFtZX1gLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlcnZpY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmljZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgc2VydmljZSBub3QgZXhpc3QgOiAke25hbWV9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb24oZXZlbnRzLCBzZWxlY3RvciwgaGFuZGxlciwgcHJldmVudERlZmF1bHQgPSBmYWxzZSkge1xuICAgICAgICAkKCcuemMtcGFuZWwnKS5vbihldmVudHMsIHNlbGVjdG9yLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmV2ZW50RGVmYXVsdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLCBldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsaWNrKHNlbGVjdG9yLCBoYW5kbGVyLCBwcmV2ZW50RGVmYXVsdCA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5vbignY2xpY2snLCBzZWxlY3RvciwgaGFuZGxlciwgcHJldmVudERlZmF1bHQpO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogTWV0YWJveFBhbmVsIDogTWV0YSBtb2RlXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBCb2R5U2l6ZSBmcm9tICcuL21vZHVsZS9tb2RlL21ldGEtbW9kZS1ib2R5LXNpemUnO1xuaW1wb3J0IEJhY2t1cCAgIGZyb20gJy4vbW9kdWxlL2hlYWRlci9iYWNrdXAnO1xuaW1wb3J0IFJlc2V0ICAgIGZyb20gJy4vbW9kdWxlL2hlYWRlci9yZXNldCc7XG5cbnpjLm1vZHVsZS5wYW5lbC5hZGRNb2RlKCgkLCBwYW5lbCkgPT4ge1xuXG4gICAgcGFuZWwuYWRkQ29uZmlnKCdoZWlnaHQtRkFIJywgNTYpO1xuICAgIHBhbmVsLmFkZENvbmZpZygnbWluLXNpemUvbW9kZTInLCA3ODApO1xuXG4gICAgcGFuZWwuY2xvc2VCbG9jaygpOyAgICAgICAgICAvLyBJbml0IGNhbGxiYWNrIG9mIGNsb3NlIGJsb2NrLlxuICAgIHBhbmVsLmNvbnRyb2xJbml0KCk7ICAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gb2YgY29udHJvbHMuXG4gICAgcGFuZWwuY29udHJvbEhlbHAoKTsgICAgICAgICAvLyBDb250cm9sIGhlbHAgd2luZG93LlxuICAgIHBhbmVsLnNjcm9sbGJhcigpOyAgICAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gb2Ygc2Nyb2xsIGJhciBpbiBwYW5lbC5cbiAgICBwYW5lbC5ub01ldGFTY2FsZUlmTW9iaWxlKCk7IC8vIERpc2FibGUgbWV0YSBzY2FsZSBpZiBtb2JpbGUgZGV2aWNlLlxuICAgIHBhbmVsLmNvbmRpdGlvbigpOyAgICAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gb2YgcGFuZWwgY29uZGl0aW9uIGNoZWNrZXIuXG4gICAgcGFuZWwudG9vbHRpcCgpOyAgICAgICAgICAgICAvLyBJbml0IHRvb2x0aXBcbiAgICBwYW5lbC5tZW51KCk7ICAgICAgICAgICAgICAgIC8vIFBhbmVsIG1lbnUuXG5cbiAgICBuZXcgQm9keVNpemU7IC8vIFBhbmVsIGJvZHkgc2l6ZS5cbiAgICBuZXcgQmFja3VwOyAgIC8vIE1ldGEgYmFja3VwLCBpbXBvcnQvZXhwb3J0LlxuICAgIG5ldyBSZXNldDsgICAgLy8gUmVzZXQgbWV0YSBvcHRpb25zLlxuXG4gICAgJCgnLnpjLXBhbmVsLXRlbXBsYXRlX19wYW5lbC1sb2FkaW5nJykuaGlkZSgpOyAvLyBIaWRlIHBhbmVsIGxvYWRpbmcgdGV4dC5cbiAgICAkKCcuemMtcGFuZWwuemMtcGFuZWxfbW9kZV9tZXRhJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTsgICAvLyBGdWxsIGRpc3BsYXkgcGFuZWwuXG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIHNhdmUgYnV0dG9uXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHBhbmVsLmRpc2FibGVTYXZlQnV0dG9uID0gKCkgPT4ge307XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgc2F2ZSBidXR0b25cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcGFuZWwuZW5hYmxlU2F2ZUJ1dHRvbiA9ICgpID0+IHt9O1xuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSByZXNldCBidXR0b25cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcGFuZWwuZGlzYWJsZVJlc2V0QnV0dG9uID0gKCkgPT4ge307XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgcmVzZXQgYnV0dG9uXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHBhbmVsLmVuYWJsZVJlc2V0QnV0dG9uID0gKCkgPT4ge307XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=