/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/header/tpl/direct-notification.html":
/*!*********************************************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/header/tpl/direct-notification.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = " <div class=\"zc-panel-direct-notification zc-panel-direct-notification_type_{{type}}\"> <div class=\"zc-panel-direct-notification__icon-container\"> <i class=\"zc-panel-direct-notification__icon\"></i> </div> <div class=\"zc-panel-direct-notification__content\"> <span class=\"zc-panel-direct-notification__title\">{{title}}</span> <p class=\"zc-panel-direct-notification__text\">{{content}}</p> </div> <div class=\"zc-panel-direct-notification__close-controller\"> <i class=\"zc-panel-direct-notification__close-icon zc-icon-clear\"></i> </div> </div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/header/tpl/reset-popup-notification.html":
/*!**************************************************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/header/tpl/reset-popup-notification.html ***!
  \**************************************************************************************************/
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

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/header/direct-notification.js":
/*!***************************************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/header/direct-notification.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DirectNotification)
/* harmony export */ });
/* harmony import */ var _kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kernel */ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js");
/* harmony import */ var _tpl_direct_notification_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tpl/direct-notification.html */ "./src/Module/Panel/Resources/assets/js/es6/module/header/tpl/direct-notification.html");

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module/Header : Direct notification
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */






const $ = jQuery;

class DirectNotification extends _kernel__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor() {
        super();

        this.timer1   = false;
        this.timer2   = false;
        this.type     = 'error';
        this.title    = 'Error';
        this.content  = 'General error ( AJAX / LOGIN / PHP Error )';
        this.duration = 3000;
        this.callback = () => {};
    }

    /**
     * Add direct notification
     * 
     * @param  {string}   type     Data type of content
     * @param  {string}   title    Title of content
     * @param  {string}   content  Content
     * @param  {integer}  duration Time of removing
     * @param  {Function} callback Callback function after removing
     * @return {null}              None
     * @since 1.0.0
     */
    add(type, title, content, duration, callback) {
        type     = type || this.type;
        title    = title || this.title;
        content  = content || this.content;
        duration = duration || this.duration;
        callback = callback || this.callback;

        clearTimeout(this.timer1);
        clearTimeout(this.timer2);

        const structure = zc.tpl(_tpl_direct_notification_html__WEBPACK_IMPORTED_MODULE_1__.default, {
            type: type,
            title: title,
            content: content
        });

        $('.zc-panel .zc-panel-direct-notification').remove();
        $('.zc-panel .zc-panel-controls').prepend(structure);

        this.click('.zc-panel-direct-notification__close-controller', () => {
            clearTimeout(this.timer1);
            clearTimeout(this.timer2);

            $('.zc-panel .zc-panel-direct-notification').addClass('zc-panel-direct-notification_close');

            this.timer2 = setTimeout(() => {
                $('.zc-panel .zc-panel-direct-notification').remove();
            }, 300);

            callback.call();
        });

        this.timer1 = setTimeout(() => {
            $('.zc-panel .zc-panel-direct-notification').addClass('zc-panel-direct-notification_close');

            this.timer2 = setTimeout(() => {
                $('.zc-panel .zc-panel-direct-notification').remove();
            }, 300);

            callback.call();
        }, duration);
    }
}

/***/ }),

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/header/option-handler.js":
/*!**********************************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/header/option-handler.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OptionHandler)
/* harmony export */ });
/* harmony import */ var _kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kernel */ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js");
/* harmony import */ var _direct_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./direct-notification */ "./src/Module/Panel/Resources/assets/js/es6/module/header/direct-notification.js");
/* harmony import */ var _header_tpl_reset_popup_notification_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/tpl/reset-popup-notification.html */ "./src/Module/Panel/Resources/assets/js/es6/module/header/tpl/reset-popup-notification.html");

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module/Header : Option handler
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */








const $ = jQuery;

class OptionHandler extends _kernel__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor() {
        super();

        this.dn  = new _direct_notification__WEBPACK_IMPORTED_MODULE_1__.default;
        this.tpl = _header_tpl_reset_popup_notification_html__WEBPACK_IMPORTED_MODULE_2__.default;

        this.save();
        this.reset();
    }

    showLoading() {
        $('.zc-panel-save-starter-button').hide();
        $('.zc-panel-loading-starter-button').show();
        $('.zc-panel-reset-starter-button').prop('disabled', true).addClass('zc-panel-header__controller-button_disabled');
    }

    hideLoading() {
        $('.zc-panel-save-starter-button').show();
        $('.zc-panel-loading-starter-button').hide();
        $('.zc-panel-reset-starter-button').prop('disabled', false).removeClass('zc-panel-header__controller-button_disabled');
    }

    save() {
        this.click('.zc-panel-save-starter-button', ($this) => {
            $(window).trigger('zc/panel/save/start');

            const priv = {};

            priv.prepOptions = () => {
                const options = {};

                $('.zc-panel .zc-panel-controls [data-option]').each((index, el) => {
                    let nameItem = $(el).attr('name');

                    if ($(el).data('i') == 'i') return;
                    if (nameItem === undefined) return;

                    nameItem = nameItem.replace(/\[\]/g, '');

                    const value = $(el).val();

                    if ($(el).is(':radio') || $(el).is(':checkbox')) {
                        if ($(el).is(':checked')) {
                            options[nameItem] = value;
                        }
                    } else {
                        options[nameItem] = $(el).val();
                    }
                });

                return options;
            };

            this.showLoading();

            zc.ajax({
                data: {
                    action: `zc/module/panel/save_${this.getVar('slug')}`,
                    options: zc.parse(priv.prepOptions(), true),
                    _ajax_nonce: this.getVar('nonce')
                },
                error: (jqXHR, textStatus) => {
                    $(window).trigger('zc/panel/save/error');
                    this.errorCheck('Panel : Save options', jqXHR);
                },
                success: (response) => {
                    $(window).trigger('zc/panel/save/success-start');

                    const reload = typeof response.reload === 'undefined' ? undefined : () => {
                        location.reload();
                    };

                    this.dn.add(response.type, response.title, response.content, 3000, reload);
                    this.hideLoading();

                    if (response.type === 'success') {
                        this.addCache('changed', false);
                        $(window).trigger('zc/panel/save/success-response');
                    }

                    $(window).trigger('zc/panel/save/success-end');
                }
            });

            $(window).trigger('zc/panel/save/end');
        });
    }

    reset() {
        this.click('.zc-panel-reset-starter-button', () => {
            $(window).trigger('zc/panel/reset/start');

            zc.confirm({
                title: this.getVar('reset-pop-up-title'),
                subject: this.getVar('reset-pop-up-subject'),
                titleOK: this.getVar('reset-pop-up-ok'),
                titleCancel: this.getVar('reset-pop-up-cancel'),
                ok: (popup) => {
                    zc.ajax({
                        data: {
                            action: `zc/module/panel/reset_${this.getVar('slug')}`,
                            _ajax_nonce: this.getVar('nonce')
                        },
                        error: (jqXHR, textStatus) => {
                            $(window).trigger('zc/panel/reset/error');
                            this.errorCheck('Panel : Reset options', jqXHR);
                        },
                        before: () => {
                            popup.hideContent();
                            $(window).trigger('zc/panel/reset/before');
                        },
                        success: (response) => {
                            $(window).trigger('zc/panel/reset/success-start');

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

                                $(window).trigger('zc/panel/reset/success-success');
                            } else if (response.type === 'info') {
                                popup.remContent();
                                popup.appendContent(zc.tpl(this.tpl, {
                                    type: response.type,
                                    title: response.title,
                                    content: response.content,
                                    var_exit: this.getVar('exit')
                                }));
                                popup.showContent();

                                $(window).trigger('zc/panel/reset/success-info');
                            } else {
                                popup.remContent();
                                popup.appendContent(zc.tpl(this.tpl, {
                                    type: 'error',
                                    title: 'Error',
                                    content: 'AJAX / LOGIN / PHP Error',
                                    var_exit: this.getVar('exit')
                                }));
                                popup.showContent();

                                $(window).trigger('zc/panel/reset/success-error');
                            }

                            $('.zc-popup').on('click', '.zc-panel-popup-notification__close-button', (event) => {
                                event.preventDefault();
                                /* Act on the event */

                                popup.close();
                            });

                            $(window).trigger('zc/panel/reset/success-end');
                        }
                    });
                }
            });
            
            $(window).trigger('zc/panel/reset/end');
        });
    };
}

/***/ }),

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/header/quick-links.js":
/*!*******************************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/header/quick-links.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuickLinks)
/* harmony export */ });
/* harmony import */ var _kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kernel */ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js");

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module/Header : Quick links
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */





const $ = jQuery;

class QuickLinks extends _kernel__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor() {
        super();

        this.starterButton();
        this.closeBlock();
    }

    starterButton() {
        this.click('.zc-panel-quick-links-starter-button', ($this) => {
            const data = {
                cr: parseInt($('.zc-panel-header__controllers_right').width()),
                bw: parseInt($this.outerWidth()),
                bpol: parseInt($this.position().left),
                hpr: parseInt($('.zc-panel-header').css('padding-right'))
            };

            const pos = ((data.cr - data.bpol) - data.bw) + data.hpr;
            $('.zc-panel-quick-links').css('right', pos);

            if ($this.hasClass('zc-panel-quick-links-starter-button_active')) {
                $this.removeClass('zc-panel-quick-links-starter-button_active');
                $('.zc-panel-quick-links').removeClass('zc-panel-quick-links_active');
                this.service('close-block').hide();
            } else {
                $this.addClass('zc-panel-quick-links-starter-button_active');
                $('.zc-panel-quick-links').addClass('zc-panel-quick-links_active');
                this.service('close-block').show();
            }
        });
    }

    closeBlock() {
        $(window).on('zc/close-block.zc-panel', () => {
            if ($('.zc-panel-quick-links-starter-button').hasClass('zc-panel-quick-links-starter-button_active')) {
                $('.zc-panel-quick-links-starter-button').removeClass('zc-panel-quick-links-starter-button_active');
                $('.zc-panel-quick-links').removeClass('zc-panel-quick-links_active');
                this.service('close-block').hide();
            }
        });
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
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module : Kernel
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
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

/***/ }),

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/mode/panel-lite-mode-body-size.js":
/*!*******************************************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/mode/panel-lite-mode-body-size.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelModeLiteBodySize)
/* harmony export */ });
/* harmony import */ var _kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kernel */ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js");

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module/Mode : Panel mode lite body size
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */





const $ = jQuery;

class PanelModeLiteBodySize extends _kernel__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor() {
        super();

        const ro = new ResizeObserver(entries => {
            if (entries[0] !== undefined) {
                this.addModeSize(entries[0].contentRect.width);
            }
        });

        ro.observe($('.zc-panel').get(0));
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

        $('.zc-panel').attr('data-width', mode + width);

        $(window).trigger('zc/panel/size-changed');
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
/*!********************************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/jquery.panel-lite-mode.es6.js ***!
  \********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_mode_panel_lite_mode_body_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/mode/panel-lite-mode-body-size */ "./src/Module/Panel/Resources/assets/js/es6/module/mode/panel-lite-mode-body-size.js");
/* harmony import */ var _module_header_option_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/header/option-handler */ "./src/Module/Panel/Resources/assets/js/es6/module/header/option-handler.js");
/* harmony import */ var _module_header_quick_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/header/quick-links */ "./src/Module/Panel/Resources/assets/js/es6/module/header/quick-links.js");

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel : Lite mode
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */







zc.module.panel.addMode(($, panel) => {

    setTimeout(() => {
        panel.closeBlock();          // Init callback of close block.
        panel.controlInit();         // Initialization of controls.
        panel.controlHelp();         // Control help window.
        panel.scrollbar();           // Initialization of scroll bar in panel.
        panel.noMetaScaleIfMobile(); // Disable meta scale if mobile device.
        panel.condition();           // Initialization of panel condition checker.
        panel.ifChanged();           // Check if some changes was made
        panel.tooltip();             // Init tooltip

        new _module_mode_panel_lite_mode_body_size__WEBPACK_IMPORTED_MODULE_0__.default;                 // Panel body size.
        const oh = new _module_header_option_handler__WEBPACK_IMPORTED_MODULE_1__.default; // Save/Reset => .
        new _module_header_quick_links__WEBPACK_IMPORTED_MODULE_2__.default;               // Initialization of panel button "Quick Links".

        panel.addCache('option-handler', oh);

        // Active section
        const section = $('.zc-panel .zc-panel-controls__section');
        panel.addCache('menu/current-section', section);
        $(window).trigger('zc/panel/menu/item-change-ICP', [section]);

        $('.zc-panel-template__panel-loading').hide(); // Hide panel loading text.
        $('.zc-panel').css('visibility', 'visible');   // Full display panel.

        $(window).trigger('zc/panel/show-content');
    }, 100);

    /**
     * Disable save button
     * 
     * @return {null} None
     * @since 1.0.0
     */
    panel.disableSaveButton = () => {
        $('.zc-panel-save-starter-button').prop('disabled', true).addClass('zc-panel-header__controller-button_disabled');
    };

    /**
     * Enable save button
     * 
     * @return {null} None
     * @since 1.0.0
     */
    panel.enableSaveButton = () => {
        $('.zc-panel-save-starter-button').prop('disabled', false).removeClass('zc-panel-header__controller-button_disabled');
    };

    /**
     * Disable reset button
     * 
     * @return {null} None
     * @since 1.0.0
     */
    panel.disableResetButton = () => {
        $('.zc-panel-reset-starter-button').prop('disabled', true).addClass('zc-panel-header__controller-button_disabled');
    };

    /**
     * Enable reset button
     * 
     * @return {null} None
     * @since 1.0.0
     */
    panel.enableResetButton = () => {
        $('.zc-panel-reset-starter-button').prop('disabled', false).removeClass('zc-panel-header__controller-button_disabled');
    };
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2pxdWVyeS5wYW5lbC1saXRlLW1vZGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLDJGQUEyRixNQUFNLHlPQUF5TyxPQUFPLDBEQUEwRCxTQUFTO0FBQ3BaO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUNIbkI7QUFDQSx5RkFBeUYsTUFBTSxvU0FBb1MsT0FBTyx5REFBeUQsU0FBUyx3SkFBd0osVUFBVTtBQUM5bUI7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUVvQztBQUNxQjs7QUFFdEU7O0FBRWUsaUNBQWlDLDRDQUFNO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQixnQkFBZ0IsVUFBVTtBQUMxQixnQkFBZ0IsVUFBVTtBQUMxQixnQkFBZ0IsVUFBVTtBQUMxQixnQkFBZ0IsVUFBVTtBQUMxQixnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQ0FBaUMsa0VBQXdCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9oZWFkZXIvdHBsL2RpcmVjdC1ub3RpZmljYXRpb24uaHRtbCIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvaGVhZGVyL3RwbC9yZXNldC1wb3B1cC1ub3RpZmljYXRpb24uaHRtbCIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvaGVhZGVyL2RpcmVjdC1ub3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2hlYWRlci9vcHRpb24taGFuZGxlci5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvaGVhZGVyL3F1aWNrLWxpbmtzLmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9rZXJuZWwuanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL21vZGUvcGFuZWwtbGl0ZS1tb2RlLWJvZHktc2l6ZS5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ppbWJydWNvZGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ppbWJydWNvZGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvanF1ZXJ5LnBhbmVsLWxpdGUtbW9kZS5lczYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiIDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb24gemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbl90eXBlX3t7dHlwZX19XFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbl9faWNvbi1jb250YWluZXJcXFwiPiA8aSBjbGFzcz1cXFwiemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbl9faWNvblxcXCI+PC9pPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbl9fY29udGVudFxcXCI+IDxzcGFuIGNsYXNzPVxcXCJ6Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uX190aXRsZVxcXCI+e3t0aXRsZX19PC9zcGFuPiA8cCBjbGFzcz1cXFwiemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbl9fdGV4dFxcXCI+e3tjb250ZW50fX08L3A+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uX19jbG9zZS1jb250cm9sbGVyXFxcIj4gPGkgY2xhc3M9XFxcInpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb25fX2Nsb3NlLWljb24gemMtaWNvbi1jbGVhclxcXCI+PC9pPiA8L2Rpdj4gPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb24gemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX3R5cGVfe3t0eXBlfX1cXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2ljb24tY29udGFpbmVyXFxcIj4gPGkgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9faWNvblxcXCI+PC9pPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19jb250ZW50LWNvbnRhaW5lclxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fY29udGVudFxcXCI+IDxzcGFuIGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX3RpdGxlXFxcIj57e3RpdGxlfX08L3NwYW4+IDxwIGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX3RleHRcXFwiPnt7Y29udGVudH19PC9wPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19jbG9zZS1jb250cm9sbGVyXFxcIj4gPGJ1dHRvbiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19jbG9zZS1idXR0b25cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+e3t2YXJfZXhpdH19PC9idXR0b24+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBaaW1icnVDb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwvTW9kdWxlL0hlYWRlciA6IERpcmVjdCBub3RpZmljYXRpb25cbiAqXG4gKiBAYXV0aG9yICBKdW5qdWxpbmlcbiAqIEBwYWNrYWdlIFppbWJydUNvZGVcbiAqIEBzaW5jZSAgIFppbWJydUNvZGUgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBLZXJuZWwgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4va2VybmVsJztcbmltcG9ydCBUUExfX2RpcmVjdF9ub3RpZmljYXRpb24gZnJvbSAnLi90cGwvZGlyZWN0LW5vdGlmaWNhdGlvbi5odG1sJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0Tm90aWZpY2F0aW9uIGV4dGVuZHMgS2VybmVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnRpbWVyMSAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGltZXIyICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50eXBlICAgICA9ICdlcnJvcic7XG4gICAgICAgIHRoaXMudGl0bGUgICAgPSAnRXJyb3InO1xuICAgICAgICB0aGlzLmNvbnRlbnQgID0gJ0dlbmVyYWwgZXJyb3IgKCBBSkFYIC8gTE9HSU4gLyBQSFAgRXJyb3IgKSc7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAzMDAwO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gKCkgPT4ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGRpcmVjdCBub3RpZmljYXRpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgdHlwZSAgICAgRGF0YSB0eXBlIG9mIGNvbnRlbnRcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgdGl0bGUgICAgVGl0bGUgb2YgY29udGVudFxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICBjb250ZW50ICBDb250ZW50XG4gICAgICogQHBhcmFtICB7aW50ZWdlcn0gIGR1cmF0aW9uIFRpbWUgb2YgcmVtb3ZpbmdcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24gYWZ0ZXIgcmVtb3ZpbmdcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgICAgICAgICAgICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZCh0eXBlLCB0aXRsZSwgY29udGVudCwgZHVyYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgICAgIHR5cGUgICAgID0gdHlwZSB8fCB0aGlzLnR5cGU7XG4gICAgICAgIHRpdGxlICAgID0gdGl0bGUgfHwgdGhpcy50aXRsZTtcbiAgICAgICAgY29udGVudCAgPSBjb250ZW50IHx8IHRoaXMuY29udGVudDtcbiAgICAgICAgZHVyYXRpb24gPSBkdXJhdGlvbiB8fCB0aGlzLmR1cmF0aW9uO1xuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IHRoaXMuY2FsbGJhY2s7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIxKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIyKTtcblxuICAgICAgICBjb25zdCBzdHJ1Y3R1cmUgPSB6Yy50cGwoVFBMX19kaXJlY3Rfbm90aWZpY2F0aW9uLCB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgY29udGVudDogY29udGVudFxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuemMtcGFuZWwgLnpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb24nKS5yZW1vdmUoKTtcbiAgICAgICAgJCgnLnpjLXBhbmVsIC56Yy1wYW5lbC1jb250cm9scycpLnByZXBlbmQoc3RydWN0dXJlKTtcblxuICAgICAgICB0aGlzLmNsaWNrKCcuemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbl9fY2xvc2UtY29udHJvbGxlcicsICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyMSk7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcjIpO1xuXG4gICAgICAgICAgICAkKCcuemMtcGFuZWwgLnpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb24nKS5hZGRDbGFzcygnemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbl9jbG9zZScpO1xuXG4gICAgICAgICAgICB0aGlzLnRpbWVyMiA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbCAuemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSwgMzAwKTtcblxuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRpbWVyMSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsIC56Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uJykuYWRkQ2xhc3MoJ3pjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb25fY2xvc2UnKTtcblxuICAgICAgICAgICAgdGhpcy50aW1lcjIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwgLnpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb24nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG5cbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgWmltYnJ1Q29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZS9IZWFkZXIgOiBPcHRpb24gaGFuZGxlclxuICpcbiAqIEBhdXRob3IgIEp1bmp1bGluaVxuICogQHBhY2thZ2UgWmltYnJ1Q29kZVxuICogQHNpbmNlICAgWmltYnJ1Q29kZSAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEtlcm5lbCAgICAgICAgICAgICBmcm9tICcuLi9rZXJuZWwnO1xuaW1wb3J0IERpcmVjdE5vdGlmaWNhdGlvbiBmcm9tICcuL2RpcmVjdC1ub3RpZmljYXRpb24nO1xuXG5pbXBvcnQgVFBMX19yZXNldF9wb3B1cF9ub3RpZmljYXRpb24gZnJvbSAnLi4vaGVhZGVyL3RwbC9yZXNldC1wb3B1cC1ub3RpZmljYXRpb24uaHRtbCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbkhhbmRsZXIgZXh0ZW5kcyBLZXJuZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuZG4gID0gbmV3IERpcmVjdE5vdGlmaWNhdGlvbjtcbiAgICAgICAgdGhpcy50cGwgPSBUUExfX3Jlc2V0X3BvcHVwX25vdGlmaWNhdGlvbjtcblxuICAgICAgICB0aGlzLnNhdmUoKTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIHNob3dMb2FkaW5nKCkge1xuICAgICAgICAkKCcuemMtcGFuZWwtc2F2ZS1zdGFydGVyLWJ1dHRvbicpLmhpZGUoKTtcbiAgICAgICAgJCgnLnpjLXBhbmVsLWxvYWRpbmctc3RhcnRlci1idXR0b24nKS5zaG93KCk7XG4gICAgICAgICQoJy56Yy1wYW5lbC1yZXNldC1zdGFydGVyLWJ1dHRvbicpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSkuYWRkQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICBoaWRlTG9hZGluZygpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsLXNhdmUtc3RhcnRlci1idXR0b24nKS5zaG93KCk7XG4gICAgICAgICQoJy56Yy1wYW5lbC1sb2FkaW5nLXN0YXJ0ZXItYnV0dG9uJykuaGlkZSgpO1xuICAgICAgICAkKCcuemMtcGFuZWwtcmVzZXQtc3RhcnRlci1idXR0b24nKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl9kaXNhYmxlZCcpO1xuICAgIH1cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1wYW5lbC1zYXZlLXN0YXJ0ZXItYnV0dG9uJywgKCR0aGlzKSA9PiB7XG4gICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvc2F2ZS9zdGFydCcpO1xuXG4gICAgICAgICAgICBjb25zdCBwcml2ID0ge307XG5cbiAgICAgICAgICAgIHByaXYucHJlcE9wdGlvbnMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsIC56Yy1wYW5lbC1jb250cm9scyBbZGF0YS1vcHRpb25dJykuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lSXRlbSA9ICQoZWwpLmF0dHIoJ25hbWUnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJChlbCkuZGF0YSgnaScpID09ICdpJykgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZUl0ZW0gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIG5hbWVJdGVtID0gbmFtZUl0ZW0ucmVwbGFjZSgvXFxbXFxdL2csICcnKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICQoZWwpLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKGVsKS5pcygnOnJhZGlvJykgfHwgJChlbCkuaXMoJzpjaGVja2JveCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChlbCkuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zW25hbWVJdGVtXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tuYW1lSXRlbV0gPSAkKGVsKS52YWwoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLnNob3dMb2FkaW5nKCk7XG5cbiAgICAgICAgICAgIHpjLmFqYXgoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBgemMvbW9kdWxlL3BhbmVsL3NhdmVfJHt0aGlzLmdldFZhcignc2x1ZycpfWAsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHpjLnBhcnNlKHByaXYucHJlcE9wdGlvbnMoKSwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgIF9hamF4X25vbmNlOiB0aGlzLmdldFZhcignbm9uY2UnKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvc2F2ZS9lcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yQ2hlY2soJ1BhbmVsIDogU2F2ZSBvcHRpb25zJywganFYSFIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9zYXZlL3N1Y2Nlc3Mtc3RhcnQnKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxvYWQgPSB0eXBlb2YgcmVzcG9uc2UucmVsb2FkID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG4uYWRkKHJlc3BvbnNlLnR5cGUsIHJlc3BvbnNlLnRpdGxlLCByZXNwb25zZS5jb250ZW50LCAzMDAwLCByZWxvYWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnR5cGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDYWNoZSgnY2hhbmdlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9zYXZlL3N1Y2Nlc3MtcmVzcG9uc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9zYXZlL3N1Y2Nlc3MtZW5kJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9zYXZlL2VuZCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5jbGljaygnLnpjLXBhbmVsLXJlc2V0LXN0YXJ0ZXItYnV0dG9uJywgKCkgPT4ge1xuICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3Jlc2V0L3N0YXJ0Jyk7XG5cbiAgICAgICAgICAgIHpjLmNvbmZpcm0oe1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmdldFZhcigncmVzZXQtcG9wLXVwLXRpdGxlJyksXG4gICAgICAgICAgICAgICAgc3ViamVjdDogdGhpcy5nZXRWYXIoJ3Jlc2V0LXBvcC11cC1zdWJqZWN0JyksXG4gICAgICAgICAgICAgICAgdGl0bGVPSzogdGhpcy5nZXRWYXIoJ3Jlc2V0LXBvcC11cC1vaycpLFxuICAgICAgICAgICAgICAgIHRpdGxlQ2FuY2VsOiB0aGlzLmdldFZhcigncmVzZXQtcG9wLXVwLWNhbmNlbCcpLFxuICAgICAgICAgICAgICAgIG9rOiAocG9wdXApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgemMuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBgemMvbW9kdWxlL3BhbmVsL3Jlc2V0XyR7dGhpcy5nZXRWYXIoJ3NsdWcnKX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hamF4X25vbmNlOiB0aGlzLmdldFZhcignbm9uY2UnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiAoanFYSFIsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvcmVzZXQvZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yQ2hlY2soJ1BhbmVsIDogUmVzZXQgb3B0aW9ucycsIGpxWEhSKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5oaWRlQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9yZXNldC9iZWZvcmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvcmVzZXQvc3VjY2Vzcy1zdGFydCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnR5cGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5yZW1Db250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLmFwcGVuZENvbnRlbnQoemMudHBsKHRoaXMudHBsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiByZXNwb25zZS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogcmVzcG9uc2UuY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLnNob3dDb250ZW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDYWNoZSgnY2hhbmdlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvcmVzZXQvc3VjY2Vzcy1zdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS50eXBlID09PSAnaW5mbycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAucmVtQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5hcHBlbmRDb250ZW50KHpjLnRwbCh0aGlzLnRwbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogcmVzcG9uc2UudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJfZXhpdDogdGhpcy5nZXRWYXIoJ2V4aXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLnNob3dDb250ZW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3Jlc2V0L3N1Y2Nlc3MtaW5mbycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLnJlbUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAuYXBwZW5kQ29udGVudCh6Yy50cGwodGhpcy50cGwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdBSkFYIC8gTE9HSU4gLyBQSFAgRXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyX2V4aXQ6IHRoaXMuZ2V0VmFyKCdleGl0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5zaG93Q29udGVudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9yZXNldC9zdWNjZXNzLWVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwJykub24oJ2NsaWNrJywgJy56Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2Nsb3NlLWJ1dHRvbicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9yZXNldC9zdWNjZXNzLWVuZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3Jlc2V0L2VuZCcpO1xuICAgICAgICB9KTtcbiAgICB9O1xufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBaaW1icnVDb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwvTW9kdWxlL0hlYWRlciA6IFF1aWNrIGxpbmtzXG4gKlxuICogQGF1dGhvciAgSnVuanVsaW5pXG4gKiBAcGFja2FnZSBaaW1icnVDb2RlXG4gKiBAc2luY2UgICBaaW1icnVDb2RlIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgS2VybmVsIGZyb20gJy4uL2tlcm5lbCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1aWNrTGlua3MgZXh0ZW5kcyBLZXJuZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhcnRlckJ1dHRvbigpO1xuICAgICAgICB0aGlzLmNsb3NlQmxvY2soKTtcbiAgICB9XG5cbiAgICBzdGFydGVyQnV0dG9uKCkge1xuICAgICAgICB0aGlzLmNsaWNrKCcuemMtcGFuZWwtcXVpY2stbGlua3Mtc3RhcnRlci1idXR0b24nLCAoJHRoaXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgY3I6IHBhcnNlSW50KCQoJy56Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXJzX3JpZ2h0Jykud2lkdGgoKSksXG4gICAgICAgICAgICAgICAgYnc6IHBhcnNlSW50KCR0aGlzLm91dGVyV2lkdGgoKSksXG4gICAgICAgICAgICAgICAgYnBvbDogcGFyc2VJbnQoJHRoaXMucG9zaXRpb24oKS5sZWZ0KSxcbiAgICAgICAgICAgICAgICBocHI6IHBhcnNlSW50KCQoJy56Yy1wYW5lbC1oZWFkZXInKS5jc3MoJ3BhZGRpbmctcmlnaHQnKSlcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHBvcyA9ICgoZGF0YS5jciAtIGRhdGEuYnBvbCkgLSBkYXRhLmJ3KSArIGRhdGEuaHByO1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLXF1aWNrLWxpbmtzJykuY3NzKCdyaWdodCcsIHBvcyk7XG5cbiAgICAgICAgICAgIGlmICgkdGhpcy5oYXNDbGFzcygnemMtcGFuZWwtcXVpY2stbGlua3Mtc3RhcnRlci1idXR0b25fYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnemMtcGFuZWwtcXVpY2stbGlua3Mtc3RhcnRlci1idXR0b25fYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLXF1aWNrLWxpbmtzJykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLXF1aWNrLWxpbmtzX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZSgnY2xvc2UtYmxvY2snKS5oaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCd6Yy1wYW5lbC1xdWljay1saW5rcy1zdGFydGVyLWJ1dHRvbl9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtcXVpY2stbGlua3MnKS5hZGRDbGFzcygnemMtcGFuZWwtcXVpY2stbGlua3NfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlKCdjbG9zZS1ibG9jaycpLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xvc2VCbG9jaygpIHtcbiAgICAgICAgJCh3aW5kb3cpLm9uKCd6Yy9jbG9zZS1ibG9jay56Yy1wYW5lbCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICgkKCcuemMtcGFuZWwtcXVpY2stbGlua3Mtc3RhcnRlci1idXR0b24nKS5oYXNDbGFzcygnemMtcGFuZWwtcXVpY2stbGlua3Mtc3RhcnRlci1idXR0b25fYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtcXVpY2stbGlua3Mtc3RhcnRlci1idXR0b24nKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtcXVpY2stbGlua3Mtc3RhcnRlci1idXR0b25fYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLXF1aWNrLWxpbmtzJykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLXF1aWNrLWxpbmtzX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZSgnY2xvc2UtYmxvY2snKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgWmltYnJ1Q29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZSA6IEtlcm5lbFxuICpcbiAqIEBhdXRob3IgIEp1bmp1bGluaVxuICogQHBhY2thZ2UgWmltYnJ1Q29kZVxuICogQHNpbmNlICAgWmltYnJ1Q29kZSAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2VybmVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nbG9iYWwgPSB6Yy5nZXRNb2R1bGVEYXRhKCdwYW5lbCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhbmVsIHNjcm9sbCBiYXIgdG9wXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHNjcm9sbGJhclRvcCgpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsIC56Yy1zY3JvbGxiYXInKS5zY3JvbGxUb3AoMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHBhbmVsIGhlaWdodFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjYWxjSGVpZ2h0KCkge1xuICAgICAgICBpZiAodGhpcy5nZXRDYWNoZSgnd3AtYm9keS1oZWlnaHQnKSAhPT0gJCh3aW5kb3cpLmhlaWdodCgpKSB7XG4gICAgICAgICAgICB0aGlzLmFkZENhY2hlKCd3cC1ib2R5LWhlaWdodCcsICQod2luZG93KS5oZWlnaHQoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFcmFzZSBtb2JpbGUgbWVudVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBlcmFzZU1vYmlsZU1lbnUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGVza3RvcE1vZGUoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VydmljZSgnbWVudS9pc1N1Ym1lbnVJdGVtJykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtbWVudScpLmFkZENsYXNzKCd6Yy1wYW5lbC1tZW51X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRlbnQnKS5hZGRDbGFzcygnemMtcGFuZWwtY29udGVudF9zdWJtZW51LWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLW1lbnUnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtbWVudV9zdWJtZW51LWFjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udGVudF9zdWJtZW51LWFjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udGVudF9tb2JpbGUtbWVudS12aXNpYmxlJyk7XG4gICAgICAgICQoJy56Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnUnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51X2FjdGl2ZScpO1xuXG4gICAgICAgIHRoaXMuc2VydmljZSgnY2xvc2UtYmxvY2snKS5oaWRlRGVmaW5pdGVseSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElzIGRlc2t0b3AgbW9kZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybiBcInRydWVcIiBpZiBib2R5IHdpZHRoIGlzIGJpZ2dlciB0aGVuIFwibWluLXNpemUubW9kZTJcIlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGlzRGVza3RvcE1vZGUoKSB7XG4gICAgICAgIHJldHVybiAoJCgnLnpjLXBhbmVsJykud2lkdGgoKSA+PSB0aGlzLmdldENvbmZpZygnbWluLXNpemUvbW9kZTInKSk7XG4gICAgfVxuXG4gICAgIC8qKlxuICAgICAqIEVycm9yIGNoZWNrLCBpbiBBSkFYIG9yIG90aGVyXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGVycm9yQ2hlY2sobXNnLCBqcVhIUikge1xuICAgICAgICBpZiAoISQoJy56Yy1wb3B1cCcpLmhhc0NsYXNzKCd6Yy1wYW5lbC1lcnJvci1jb25maXJtJykpIHtcblxuICAgICAgICAgICAgaWYgKCQoJy56Yy1wb3B1cCcpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG5cbiAgICAgICAgICAgIHpjLmNvbmZpcm0oe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBgRXJyb3IgLSAke2pxWEhSLnN0YXR1c1RleHR9IDogJHtqcVhIUi5zdGF0dXN9YCxcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBgJHttc2d9IFBhZ2Ugd2lsbCBiZSByZWxvYWRlZCwgb2s/YCxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3pjLXBhbmVsLWVycm9yLWNvbmZpcm0nLFxuICAgICAgICAgICAgICAgIG9rOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGdsb2JhbCB2YXJcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGVmICAgSWYgbm90IGZvdW5kLCByZXR1cm4gXCJkZWZcIlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGdldFZhcihrZXksIGRlZikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwudmFycywga2V5KTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRlZjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBnbG9iYWwgdmFyIHZhbHVlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRhdGEgIFZhciB2YWx1ZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZFZhcihrZXksIGRhdGEpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLnZhcnMsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGdsb2JhbCBjYWNoZSB2YWx1ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkYXRhICBDYWNoZSB2YWx1ZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZENhY2hlKGtleSwgZGF0YSkge1xuICAgICAgICB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwuY2FjaGUsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGdsb2JhbCBjYWNoZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkZWYgICBJZiBub3QgZm91bmQsIHJldHVybiBcImRlZlwiXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0Q2FjaGUoa2V5LCBkZWYpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNhY2hlLCBrZXkpO1xuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbGVtZW50IGZyb20gY2FjaGUgb2JqZWN0XG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICovXG4gICAgcmVtQ2FjaGUoa2V5KSB7XG4gICAgICAgIHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jYWNoZSwga2V5LCBmYWxzZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGdsb2JhbCBjb25maWcgdmFsdWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGF0YSAgQ29uZmlnIHZhbHVlXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkQ29uZmlnKGtleSwgZGF0YSkge1xuICAgICAgICB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwuY29uZmlnLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBnbG9iYWwgY29uZmlnXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRlZiAgIElmIG5vdCBmb3VuZCwgcmV0dXJuIFwiZGVmXCJcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBnZXRDb25maWcoa2V5LCBkZWYpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNvbmZpZywga2V5KTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRlZjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlcnZpY2UobmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oY2FsbGJhY2spIHx8IHR5cGVvZiBjYWxsYmFjayA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENhY2hlKGBzZXJ2aWNlcy8ke25hbWV9YCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXRDYWNoZShgc2VydmljZXMvJHtuYW1lfWAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAoc2VydmljZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTmV4dCBzZXJ2aWNlIG5vdCBleGlzdCA6ICR7bmFtZX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbihldmVudHMsIHNlbGVjdG9yLCBoYW5kbGVyLCBwcmV2ZW50RGVmYXVsdCA9IGZhbHNlKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbCcpLm9uKGV2ZW50cywgc2VsZWN0b3IsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByZXZlbnREZWZhdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsICQoZXZlbnQuY3VycmVudFRhcmdldCksIGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xpY2soc2VsZWN0b3IsIGhhbmRsZXIsIHByZXZlbnREZWZhdWx0ID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLm9uKCdjbGljaycsIHNlbGVjdG9yLCBoYW5kbGVyLCBwcmV2ZW50RGVmYXVsdCk7XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBaaW1icnVDb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwvTW9kdWxlL01vZGUgOiBQYW5lbCBtb2RlIGxpdGUgYm9keSBzaXplXG4gKlxuICogQGF1dGhvciAgSnVuanVsaW5pXG4gKiBAcGFja2FnZSBaaW1icnVDb2RlXG4gKiBAc2luY2UgICBaaW1icnVDb2RlIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgS2VybmVsIGZyb20gJy4uL2tlcm5lbCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsTW9kZUxpdGVCb2R5U2l6ZSBleHRlbmRzIEtlcm5lbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgY29uc3Qgcm8gPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cmllc1swXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRNb2RlU2l6ZShlbnRyaWVzWzBdLmNvbnRlbnRSZWN0LndpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcm8ub2JzZXJ2ZSgkKCcuemMtcGFuZWwnKS5nZXQoMCkpO1xuICAgIH1cblxuICAgIGFkZE1vZGVTaXplKHdpZHRoKSB7XG4gICAgICAgIGxldCBtb2RlID0gJ21vZGUtMS0nO1xuXG4gICAgICAgIGlmICh0aGlzLmdldENvbmZpZygnbWluLXNpemUvbW9kZTEnKSA+PSB3aWR0aCkge1xuICAgICAgICAgICAgbW9kZSA9ICdtb2RlLTEtJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdldENvbmZpZygnbWluLXNpemUvbW9kZTInKSA+PSB3aWR0aCkge1xuICAgICAgICAgICAgbW9kZSA9ICdtb2RlLTItJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZGUgPSAnbW9kZS0zLSc7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcuemMtcGFuZWwnKS5hdHRyKCdkYXRhLXdpZHRoJywgbW9kZSArIHdpZHRoKTtcblxuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvc2l6ZS1jaGFuZ2VkJyk7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFppbWJydUNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBQYW5lbCA6IExpdGUgbW9kZVxuICpcbiAqIEBhdXRob3IgIEp1bmp1bGluaVxuICogQHBhY2thZ2UgWmltYnJ1Q29kZVxuICogQHNpbmNlICAgWmltYnJ1Q29kZSAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEJvZHlTaXplICAgICAgZnJvbSAnLi9tb2R1bGUvbW9kZS9wYW5lbC1saXRlLW1vZGUtYm9keS1zaXplJztcbmltcG9ydCBPcHRpb25IYW5kbGVyIGZyb20gJy4vbW9kdWxlL2hlYWRlci9vcHRpb24taGFuZGxlcic7XG5pbXBvcnQgUXVpY2tMaW5rcyAgICBmcm9tICcuL21vZHVsZS9oZWFkZXIvcXVpY2stbGlua3MnO1xuXG56Yy5tb2R1bGUucGFuZWwuYWRkTW9kZSgoJCwgcGFuZWwpID0+IHtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBwYW5lbC5jbG9zZUJsb2NrKCk7ICAgICAgICAgIC8vIEluaXQgY2FsbGJhY2sgb2YgY2xvc2UgYmxvY2suXG4gICAgICAgIHBhbmVsLmNvbnRyb2xJbml0KCk7ICAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gb2YgY29udHJvbHMuXG4gICAgICAgIHBhbmVsLmNvbnRyb2xIZWxwKCk7ICAgICAgICAgLy8gQ29udHJvbCBoZWxwIHdpbmRvdy5cbiAgICAgICAgcGFuZWwuc2Nyb2xsYmFyKCk7ICAgICAgICAgICAvLyBJbml0aWFsaXphdGlvbiBvZiBzY3JvbGwgYmFyIGluIHBhbmVsLlxuICAgICAgICBwYW5lbC5ub01ldGFTY2FsZUlmTW9iaWxlKCk7IC8vIERpc2FibGUgbWV0YSBzY2FsZSBpZiBtb2JpbGUgZGV2aWNlLlxuICAgICAgICBwYW5lbC5jb25kaXRpb24oKTsgICAgICAgICAgIC8vIEluaXRpYWxpemF0aW9uIG9mIHBhbmVsIGNvbmRpdGlvbiBjaGVja2VyLlxuICAgICAgICBwYW5lbC5pZkNoYW5nZWQoKTsgICAgICAgICAgIC8vIENoZWNrIGlmIHNvbWUgY2hhbmdlcyB3YXMgbWFkZVxuICAgICAgICBwYW5lbC50b29sdGlwKCk7ICAgICAgICAgICAgIC8vIEluaXQgdG9vbHRpcFxuXG4gICAgICAgIG5ldyBCb2R5U2l6ZTsgICAgICAgICAgICAgICAgIC8vIFBhbmVsIGJvZHkgc2l6ZS5cbiAgICAgICAgY29uc3Qgb2ggPSBuZXcgT3B0aW9uSGFuZGxlcjsgLy8gU2F2ZS9SZXNldCA9PiAuXG4gICAgICAgIG5ldyBRdWlja0xpbmtzOyAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemF0aW9uIG9mIHBhbmVsIGJ1dHRvbiBcIlF1aWNrIExpbmtzXCIuXG5cbiAgICAgICAgcGFuZWwuYWRkQ2FjaGUoJ29wdGlvbi1oYW5kbGVyJywgb2gpO1xuXG4gICAgICAgIC8vIEFjdGl2ZSBzZWN0aW9uXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSAkKCcuemMtcGFuZWwgLnpjLXBhbmVsLWNvbnRyb2xzX19zZWN0aW9uJyk7XG4gICAgICAgIHBhbmVsLmFkZENhY2hlKCdtZW51L2N1cnJlbnQtc2VjdGlvbicsIHNlY3Rpb24pO1xuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvbWVudS9pdGVtLWNoYW5nZS1JQ1AnLCBbc2VjdGlvbl0pO1xuXG4gICAgICAgICQoJy56Yy1wYW5lbC10ZW1wbGF0ZV9fcGFuZWwtbG9hZGluZycpLmhpZGUoKTsgLy8gSGlkZSBwYW5lbCBsb2FkaW5nIHRleHQuXG4gICAgICAgICQoJy56Yy1wYW5lbCcpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7ICAgLy8gRnVsbCBkaXNwbGF5IHBhbmVsLlxuXG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9zaG93LWNvbnRlbnQnKTtcbiAgICB9LCAxMDApO1xuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBzYXZlIGJ1dHRvblxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwYW5lbC5kaXNhYmxlU2F2ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgJCgnLnpjLXBhbmVsLXNhdmUtc3RhcnRlci1idXR0b24nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpLmFkZENsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEVuYWJsZSBzYXZlIGJ1dHRvblxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwYW5lbC5lbmFibGVTYXZlQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICAkKCcuemMtcGFuZWwtc2F2ZS1zdGFydGVyLWJ1dHRvbicpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgcmVzZXQgYnV0dG9uXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHBhbmVsLmRpc2FibGVSZXNldEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgJCgnLnpjLXBhbmVsLXJlc2V0LXN0YXJ0ZXItYnV0dG9uJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKS5hZGRDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl9kaXNhYmxlZCcpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgcmVzZXQgYnV0dG9uXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHBhbmVsLmVuYWJsZVJlc2V0QnV0dG9uID0gKCkgPT4ge1xuICAgICAgICAkKCcuemMtcGFuZWwtcmVzZXQtc3RhcnRlci1idXR0b24nKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl9kaXNhYmxlZCcpO1xuICAgIH07XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=