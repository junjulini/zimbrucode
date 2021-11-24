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
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module/Header : Direct notification
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */






const $ = jQuery;

class DirectNotification extends _kernel__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

        const structure = zc.tpl(_tpl_direct_notification_html__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
 * @since   1.0.0
 */








const $ = jQuery;

class OptionHandler extends _kernel__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();

        this.dn  = new _direct_notification__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.tpl = _header_tpl_reset_popup_notification_html__WEBPACK_IMPORTED_MODULE_2__["default"];

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
                title: this.getVar('reset-popup-title'),
                subject: this.getVar('reset-popup-subject'),
                titleOK: this.getVar('reset-popup-ok'),
                titleCancel: this.getVar('reset-popup-cancel'),
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
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module/Header : Quick links
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */





const $ = jQuery;

class QuickLinks extends _kernel__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ }),

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/mode/panel-page-mode-body-size.js":
/*!*******************************************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/mode/panel-page-mode-body-size.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelPageModeBodySize)
/* harmony export */ });
/* harmony import */ var _kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kernel */ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js");

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module/Mode : Panel page mode body size
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */





const $ = jQuery;

class PanelPageModeBodySize extends _kernel__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();

        this.height();
        this.checkPanelWidth();

        let windowWidth  = window.innerWidth,
            windowHeight = window.innerHeight;

        $(window).on('resize.zc-panel', () => {
            if (window.innerWidth != windowWidth) {
                windowWidth = window.innerWidth;

                this.eraseMobileMenu(); // Erase mobile menu
                this.height();          // Check panel height size
            }

            if (this.isDesktopMode() && window.innerHeight != windowHeight) {
                windowHeight = window.innerHeight;

                this.calcHeight(); // Calculate panel height
                this.height();     // Check panel height size
            }
        });
    }

    height() {
        if (this.isDesktopMode()) {
            $('.zc-panel-controls').height('auto');
            $('.zc-panel-submenu__scrollbar-container').height('auto');
        } else {
            $('.zc-panel-controls').height('100%');
            $('.zc-panel-submenu__scrollbar-container').height('100%');
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

        $('.zc-panel').attr('data-width', mode + width);

        $(window).trigger('zc/panel/size-changed');
    }

    checkPanelWidth() {
        const ro = new ResizeObserver(entries => {
            if (entries[0] !== undefined) {
                this.addModeSize(entries[0].contentRect.width);
            }
        });

        ro.observe($('.zc-panel').get(0));
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
  !*** ./src/Module/Panel/Resources/assets/js/es6/jquery.panel-page-mode.es6.js ***!
  \********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_mode_panel_page_mode_body_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/mode/panel-page-mode-body-size */ "./src/Module/Panel/Resources/assets/js/es6/module/mode/panel-page-mode-body-size.js");
/* harmony import */ var _module_header_option_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/header/option-handler */ "./src/Module/Panel/Resources/assets/js/es6/module/header/option-handler.js");
/* harmony import */ var _module_header_quick_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/header/quick-links */ "./src/Module/Panel/Resources/assets/js/es6/module/header/quick-links.js");

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel : Page mode
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */







zc.module.panel.addMode(($, panel) => {
    const priv = {};

    priv.addLoadingData = (msg = '', percent) => {
        $('.zc-panel-template__panel-loading-value').text(msg);
        $('.zc-panel-template__panel-loading-progress-total').width(Math.floor(percent) + '%');
    };

    // Load
    $.ajax({
        type: 'post',
        dataType: 'html',
        url: ajaxurl,
        data: {
            action: 'zc/module/panel/content_' + panel.getVar('slug'),
            _ajax_nonce: panel.getVar('nonce')
        },
        xhr: () => {
            const xhr = new window.XMLHttpRequest();

            // Download progress
            xhr.addEventListener('progress', (event) => {
                if (event.lengthComputable && event.total > 0) {
                    const percent = Math.floor((event.loaded / event.total) * 100);

                    priv.addLoadingData(`${percent} %`, percent);
                } else {
                    const total = xhr.getResponseHeader('X-Content-Length');
                    const percent = Math.floor((event.loaded / total) * 100);

                    priv.addLoadingData(`${percent} %`, percent);
                }
            }, false);

            return xhr;
        },
        error: (status) => {
            panel.errorCheck(' Panel : Content load', status);
        },
        success: (data) => {
            if (data <= 0) {
                zc.confirm({
                    title: 'Error - AJAX',
                    subject: 'Error : Cannot connect to AJAX Module or you are not logged. Page will be reloaded, ok?',
                    titleOK: panel.getVar('optionsResetOk'),
                    titleCancel: panel.getVar('optionsResetCancel'),
                    class: 'zc-panel-error-confirm',
                    ok: () => {
                        location.reload();
                    }
                });
            }

            $('.zc-panel-template').append(data);

            // Add wp body height
            panel.addConfig('wp-body-height', $(window).height());

            panel.closeBlock();          // Init callback of close block.
            panel.controlInit();         // Initialization of controls.
            panel.controlHelp();         // Control help window.
            panel.scrollbar();           // Initialization of scroll bar in panel.
            panel.noMetaScaleIfMobile(); // Disable meta scale if mobile device.
            panel.condition();           // Initialization of panel condition checker.
            panel.ifChanged();           // Check if some changes was made.
            panel.tooltip();             // Init tooltip
            panel.menu();                // Panel menu.

            new _module_mode_panel_page_mode_body_size__WEBPACK_IMPORTED_MODULE_0__["default"];                 // Panel body size.
            const oh = new _module_header_option_handler__WEBPACK_IMPORTED_MODULE_1__["default"]; // Save/Reset function.
            new _module_header_quick_links__WEBPACK_IMPORTED_MODULE_2__["default"];               // Initialization of panel button "Quick Links".

            panel.addCache('option-handler', oh);

            setTimeout(() => {
                $('.zc-panel-template__panel-loading').hide();  // Hide panel loading text.
                $('.zc-panel').css('visibility', 'visible');    // Full display panel.

                panel.addCache('first-start', true);
                $(window).trigger('zc/panel/show-content');
            }, 50);
        }
    });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2pxdWVyeS5wYW5lbC1wYWdlLW1vZGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLDJGQUEyRixNQUFNLHlPQUF5TyxPQUFPLDBEQUEwRCxTQUFTO0FBQ3BaO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUNIbkI7QUFDQSx5RkFBeUYsTUFBTSxvU0FBb1MsT0FBTyx5REFBeUQsU0FBUyx3SkFBd0osVUFBVTtBQUM5bUI7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUVvQztBQUNxQjs7QUFFdEU7O0FBRWUsaUNBQWlDLCtDQUFNO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQixnQkFBZ0IsVUFBVTtBQUMxQixnQkFBZ0IsVUFBVTtBQUMxQixnQkFBZ0IsVUFBVTtBQUMxQixnQkFBZ0IsVUFBVTtBQUMxQixnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQ0FBaUMscUVBQXdCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkNBQTJDLFNBQVM7QUFDcEQsa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUEsMkNBQTJDLFNBQVM7QUFDcEQ7QUFDQSxhQUFhOztBQUViO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHlDQUF5QztBQUN6Qyx5Q0FBeUM7QUFDekMseUNBQXlDO0FBQ3pDLHlDQUF5QztBQUN6Qyx5Q0FBeUM7QUFDekMseUNBQXlDO0FBQ3pDLHlDQUF5QztBQUN6Qyx5Q0FBeUM7QUFDekMseUNBQXlDOztBQUV6QyxnQkFBZ0IsOEVBQVEsa0JBQWtCO0FBQzFDLDJCQUEyQixxRUFBYSxFQUFFO0FBQzFDLGdCQUFnQixrRUFBVSxnQkFBZ0I7O0FBRTFDOztBQUVBO0FBQ0EsZ0VBQWdFO0FBQ2hFLGdFQUFnRTs7QUFFaEU7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9oZWFkZXIvdHBsL2RpcmVjdC1ub3RpZmljYXRpb24uaHRtbCIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvaGVhZGVyL3RwbC9yZXNldC1wb3B1cC1ub3RpZmljYXRpb24uaHRtbCIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvaGVhZGVyL2RpcmVjdC1ub3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2hlYWRlci9vcHRpb24taGFuZGxlci5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvaGVhZGVyL3F1aWNrLWxpbmtzLmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9rZXJuZWwuanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL21vZGUvcGFuZWwtcGFnZS1tb2RlLWJvZHktc2l6ZS5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ppbWJydWNvZGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ppbWJydWNvZGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvanF1ZXJ5LnBhbmVsLXBhZ2UtbW9kZS5lczYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiIDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb24gemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbl90eXBlX3t7dHlwZX19XFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbl9faWNvbi1jb250YWluZXJcXFwiPiA8aSBjbGFzcz1cXFwiemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbl9faWNvblxcXCI+PC9pPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbl9fY29udGVudFxcXCI+IDxzcGFuIGNsYXNzPVxcXCJ6Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uX190aXRsZVxcXCI+e3t0aXRsZX19PC9zcGFuPiA8cCBjbGFzcz1cXFwiemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbl9fdGV4dFxcXCI+e3tjb250ZW50fX08L3A+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uX19jbG9zZS1jb250cm9sbGVyXFxcIj4gPGkgY2xhc3M9XFxcInpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb25fX2Nsb3NlLWljb24gemMtaWNvbi1jbGVhclxcXCI+PC9pPiA8L2Rpdj4gPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb24gemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX3R5cGVfe3t0eXBlfX1cXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2ljb24tY29udGFpbmVyXFxcIj4gPGkgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9faWNvblxcXCI+PC9pPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19jb250ZW50LWNvbnRhaW5lclxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fY29udGVudFxcXCI+IDxzcGFuIGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX3RpdGxlXFxcIj57e3RpdGxlfX08L3NwYW4+IDxwIGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX3RleHRcXFwiPnt7Y29udGVudH19PC9wPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19jbG9zZS1jb250cm9sbGVyXFxcIj4gPGJ1dHRvbiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19jbG9zZS1idXR0b25cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+e3t2YXJfZXhpdH19PC9idXR0b24+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwvTW9kdWxlL0hlYWRlciA6IERpcmVjdCBub3RpZmljYXRpb25cbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEtlcm5lbCAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9rZXJuZWwnO1xuaW1wb3J0IFRQTF9fZGlyZWN0X25vdGlmaWNhdGlvbiBmcm9tICcuL3RwbC9kaXJlY3Qtbm90aWZpY2F0aW9uLmh0bWwnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3ROb3RpZmljYXRpb24gZXh0ZW5kcyBLZXJuZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMudGltZXIxICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50aW1lcjIgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR5cGUgICAgID0gJ2Vycm9yJztcbiAgICAgICAgdGhpcy50aXRsZSAgICA9ICdFcnJvcic7XG4gICAgICAgIHRoaXMuY29udGVudCAgPSAnR2VuZXJhbCBlcnJvciAoIEFKQVggLyBMT0dJTiAvIFBIUCBFcnJvciApJztcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDMwMDA7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSAoKSA9PiB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZGlyZWN0IG5vdGlmaWNhdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICB0eXBlICAgICBEYXRhIHR5cGUgb2YgY29udGVudFxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICB0aXRsZSAgICBUaXRsZSBvZiBjb250ZW50XG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgIGNvbnRlbnQgIENvbnRlbnRcbiAgICAgKiBAcGFyYW0gIHtpbnRlZ2VyfSAgZHVyYXRpb24gVGltZSBvZiByZW1vdmluZ1xuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvbiBhZnRlciByZW1vdmluZ1xuICAgICAqIEByZXR1cm4ge251bGx9ICAgICAgICAgICAgICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkKHR5cGUsIHRpdGxlLCBjb250ZW50LCBkdXJhdGlvbiwgY2FsbGJhY2spIHtcbiAgICAgICAgdHlwZSAgICAgPSB0eXBlIHx8IHRoaXMudHlwZTtcbiAgICAgICAgdGl0bGUgICAgPSB0aXRsZSB8fCB0aGlzLnRpdGxlO1xuICAgICAgICBjb250ZW50ICA9IGNvbnRlbnQgfHwgdGhpcy5jb250ZW50O1xuICAgICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uIHx8IHRoaXMuZHVyYXRpb247XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgdGhpcy5jYWxsYmFjaztcblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcjEpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcjIpO1xuXG4gICAgICAgIGNvbnN0IHN0cnVjdHVyZSA9IHpjLnRwbChUUExfX2RpcmVjdF9ub3RpZmljYXRpb24sIHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy56Yy1wYW5lbCAuemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbicpLnJlbW92ZSgpO1xuICAgICAgICAkKCcuemMtcGFuZWwgLnpjLXBhbmVsLWNvbnRyb2xzJykucHJlcGVuZChzdHJ1Y3R1cmUpO1xuXG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uX19jbG9zZS1jb250cm9sbGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIxKTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyMik7XG5cbiAgICAgICAgICAgICQoJy56Yy1wYW5lbCAuemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbicpLmFkZENsYXNzKCd6Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uX2Nsb3NlJyk7XG5cbiAgICAgICAgICAgIHRoaXMudGltZXIyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsIC56Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uJykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9LCAzMDApO1xuXG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudGltZXIxID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwgLnpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb24nKS5hZGRDbGFzcygnemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbl9jbG9zZScpO1xuXG4gICAgICAgICAgICB0aGlzLnRpbWVyMiA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbCAuemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSwgMzAwKTtcblxuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwvTW9kdWxlL0hlYWRlciA6IE9wdGlvbiBoYW5kbGVyXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBLZXJuZWwgICAgICAgICAgICAgZnJvbSAnLi4va2VybmVsJztcbmltcG9ydCBEaXJlY3ROb3RpZmljYXRpb24gZnJvbSAnLi9kaXJlY3Qtbm90aWZpY2F0aW9uJztcblxuaW1wb3J0IFRQTF9fcmVzZXRfcG9wdXBfbm90aWZpY2F0aW9uIGZyb20gJy4uL2hlYWRlci90cGwvcmVzZXQtcG9wdXAtbm90aWZpY2F0aW9uLmh0bWwnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25IYW5kbGVyIGV4dGVuZHMgS2VybmVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmRuICA9IG5ldyBEaXJlY3ROb3RpZmljYXRpb247XG4gICAgICAgIHRoaXMudHBsID0gVFBMX19yZXNldF9wb3B1cF9ub3RpZmljYXRpb247XG5cbiAgICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICBzaG93TG9hZGluZygpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsLXNhdmUtc3RhcnRlci1idXR0b24nKS5oaWRlKCk7XG4gICAgICAgICQoJy56Yy1wYW5lbC1sb2FkaW5nLXN0YXJ0ZXItYnV0dG9uJykuc2hvdygpO1xuICAgICAgICAkKCcuemMtcGFuZWwtcmVzZXQtc3RhcnRlci1idXR0b24nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpLmFkZENsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgfVxuXG4gICAgaGlkZUxvYWRpbmcoKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbC1zYXZlLXN0YXJ0ZXItYnV0dG9uJykuc2hvdygpO1xuICAgICAgICAkKCcuemMtcGFuZWwtbG9hZGluZy1zdGFydGVyLWJ1dHRvbicpLmhpZGUoKTtcbiAgICAgICAgJCgnLnpjLXBhbmVsLXJlc2V0LXN0YXJ0ZXItYnV0dG9uJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSkucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICBzYXZlKCkge1xuICAgICAgICB0aGlzLmNsaWNrKCcuemMtcGFuZWwtc2F2ZS1zdGFydGVyLWJ1dHRvbicsICgkdGhpcykgPT4ge1xuICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3NhdmUvc3RhcnQnKTtcblxuICAgICAgICAgICAgY29uc3QgcHJpdiA9IHt9O1xuXG4gICAgICAgICAgICBwcml2LnByZXBPcHRpb25zID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7fTtcblxuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbCAuemMtcGFuZWwtY29udHJvbHMgW2RhdGEtb3B0aW9uXScpLmVhY2goKGluZGV4LCBlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZUl0ZW0gPSAkKGVsKS5hdHRyKCduYW1lJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZWwpLmRhdGEoJ2knKSA9PSAnaScpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVJdGVtID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICBuYW1lSXRlbSA9IG5hbWVJdGVtLnJlcGxhY2UoL1xcW1xcXS9nLCAnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAkKGVsKS52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJChlbCkuaXMoJzpyYWRpbycpIHx8ICQoZWwpLmlzKCc6Y2hlY2tib3gnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoZWwpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tuYW1lSXRlbV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbbmFtZUl0ZW1dID0gJChlbCkudmFsKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5zaG93TG9hZGluZygpO1xuXG4gICAgICAgICAgICB6Yy5hamF4KHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYHpjL21vZHVsZS9wYW5lbC9zYXZlXyR7dGhpcy5nZXRWYXIoJ3NsdWcnKX1gLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB6Yy5wYXJzZShwcml2LnByZXBPcHRpb25zKCksIHRydWUpLFxuICAgICAgICAgICAgICAgICAgICBfYWpheF9ub25jZTogdGhpcy5nZXRWYXIoJ25vbmNlJylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiAoanFYSFIsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3NhdmUvZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvckNoZWNrKCdQYW5lbCA6IFNhdmUgb3B0aW9ucycsIGpxWEhSKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvc2F2ZS9zdWNjZXNzLXN0YXJ0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsb2FkID0gdHlwZW9mIHJlc3BvbnNlLnJlbG9hZCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRuLmFkZChyZXNwb25zZS50eXBlLCByZXNwb25zZS50aXRsZSwgcmVzcG9uc2UuY29udGVudCwgMzAwMCwgcmVsb2FkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlTG9hZGluZygpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS50eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2FjaGUoJ2NoYW5nZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvc2F2ZS9zdWNjZXNzLXJlc3BvbnNlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvc2F2ZS9zdWNjZXNzLWVuZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvc2F2ZS9lbmQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1wYW5lbC1yZXNldC1zdGFydGVyLWJ1dHRvbicsICgpID0+IHtcbiAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9yZXNldC9zdGFydCcpO1xuXG4gICAgICAgICAgICB6Yy5jb25maXJtKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRWYXIoJ3Jlc2V0LXBvcHVwLXRpdGxlJyksXG4gICAgICAgICAgICAgICAgc3ViamVjdDogdGhpcy5nZXRWYXIoJ3Jlc2V0LXBvcHVwLXN1YmplY3QnKSxcbiAgICAgICAgICAgICAgICB0aXRsZU9LOiB0aGlzLmdldFZhcigncmVzZXQtcG9wdXAtb2snKSxcbiAgICAgICAgICAgICAgICB0aXRsZUNhbmNlbDogdGhpcy5nZXRWYXIoJ3Jlc2V0LXBvcHVwLWNhbmNlbCcpLFxuICAgICAgICAgICAgICAgIG9rOiAocG9wdXApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgemMuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBgemMvbW9kdWxlL3BhbmVsL3Jlc2V0XyR7dGhpcy5nZXRWYXIoJ3NsdWcnKX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hamF4X25vbmNlOiB0aGlzLmdldFZhcignbm9uY2UnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiAoanFYSFIsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvcmVzZXQvZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yQ2hlY2soJ1BhbmVsIDogUmVzZXQgb3B0aW9ucycsIGpxWEhSKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5oaWRlQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9yZXNldC9iZWZvcmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvcmVzZXQvc3VjY2Vzcy1zdGFydCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnR5cGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5yZW1Db250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLmFwcGVuZENvbnRlbnQoemMudHBsKHRoaXMudHBsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiByZXNwb25zZS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogcmVzcG9uc2UuY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLnNob3dDb250ZW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDYWNoZSgnY2hhbmdlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvcmVzZXQvc3VjY2Vzcy1zdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS50eXBlID09PSAnaW5mbycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAucmVtQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5hcHBlbmRDb250ZW50KHpjLnRwbCh0aGlzLnRwbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogcmVzcG9uc2UudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJfZXhpdDogdGhpcy5nZXRWYXIoJ2V4aXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLnNob3dDb250ZW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3Jlc2V0L3N1Y2Nlc3MtaW5mbycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLnJlbUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAuYXBwZW5kQ29udGVudCh6Yy50cGwodGhpcy50cGwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdBSkFYIC8gTE9HSU4gLyBQSFAgRXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyX2V4aXQ6IHRoaXMuZ2V0VmFyKCdleGl0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5zaG93Q29udGVudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9yZXNldC9zdWNjZXNzLWVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwJykub24oJ2NsaWNrJywgJy56Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2Nsb3NlLWJ1dHRvbicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9yZXNldC9zdWNjZXNzLWVuZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3Jlc2V0L2VuZCcpO1xuICAgICAgICB9KTtcbiAgICB9O1xufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwvTW9kdWxlL0hlYWRlciA6IFF1aWNrIGxpbmtzXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBLZXJuZWwgZnJvbSAnLi4va2VybmVsJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVpY2tMaW5rcyBleHRlbmRzIEtlcm5lbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGFydGVyQnV0dG9uKCk7XG4gICAgICAgIHRoaXMuY2xvc2VCbG9jaygpO1xuICAgIH1cblxuICAgIHN0YXJ0ZXJCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1wYW5lbC1xdWljay1saW5rcy1zdGFydGVyLWJ1dHRvbicsICgkdGhpcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBjcjogcGFyc2VJbnQoJCgnLnpjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlcnNfcmlnaHQnKS53aWR0aCgpKSxcbiAgICAgICAgICAgICAgICBidzogcGFyc2VJbnQoJHRoaXMub3V0ZXJXaWR0aCgpKSxcbiAgICAgICAgICAgICAgICBicG9sOiBwYXJzZUludCgkdGhpcy5wb3NpdGlvbigpLmxlZnQpLFxuICAgICAgICAgICAgICAgIGhwcjogcGFyc2VJbnQoJCgnLnpjLXBhbmVsLWhlYWRlcicpLmNzcygncGFkZGluZy1yaWdodCcpKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgcG9zID0gKChkYXRhLmNyIC0gZGF0YS5icG9sKSAtIGRhdGEuYncpICsgZGF0YS5ocHI7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwtcXVpY2stbGlua3MnKS5jc3MoJ3JpZ2h0JywgcG9zKTtcblxuICAgICAgICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKCd6Yy1wYW5lbC1xdWljay1saW5rcy1zdGFydGVyLWJ1dHRvbl9hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1xdWljay1saW5rcy1zdGFydGVyLWJ1dHRvbl9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtcXVpY2stbGlua3MnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtcXVpY2stbGlua3NfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlKCdjbG9zZS1ibG9jaycpLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ3pjLXBhbmVsLXF1aWNrLWxpbmtzLXN0YXJ0ZXItYnV0dG9uX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1xdWljay1saW5rcycpLmFkZENsYXNzKCd6Yy1wYW5lbC1xdWljay1saW5rc19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UoJ2Nsb3NlLWJsb2NrJykuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbG9zZUJsb2NrKCkge1xuICAgICAgICAkKHdpbmRvdykub24oJ3pjL2Nsb3NlLWJsb2NrLnpjLXBhbmVsJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCQoJy56Yy1wYW5lbC1xdWljay1saW5rcy1zdGFydGVyLWJ1dHRvbicpLmhhc0NsYXNzKCd6Yy1wYW5lbC1xdWljay1saW5rcy1zdGFydGVyLWJ1dHRvbl9hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1xdWljay1saW5rcy1zdGFydGVyLWJ1dHRvbicpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1xdWljay1saW5rcy1zdGFydGVyLWJ1dHRvbl9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtcXVpY2stbGlua3MnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtcXVpY2stbGlua3NfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlKCdjbG9zZS1ibG9jaycpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwvTW9kdWxlIDogS2VybmVsXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtlcm5lbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsID0gemMuZ2V0TW9kdWxlRGF0YSgncGFuZWwnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYW5lbCBzY3JvbGwgYmFyIHRvcFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzY3JvbGxiYXJUb3AoKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbCAuemMtc2Nyb2xsYmFyJykuc2Nyb2xsVG9wKDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBwYW5lbCBoZWlnaHRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY2FsY0hlaWdodCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2FjaGUoJ3dwLWJvZHktaGVpZ2h0JykgIT09ICQod2luZG93KS5oZWlnaHQoKSkge1xuICAgICAgICAgICAgdGhpcy5hZGRDYWNoZSgnd3AtYm9keS1oZWlnaHQnLCAkKHdpbmRvdykuaGVpZ2h0KCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXJhc2UgbW9iaWxlIG1lbnVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZXJhc2VNb2JpbGVNZW51KCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rlc2t0b3BNb2RlKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlcnZpY2UoJ21lbnUvaXNTdWJtZW51SXRlbScpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLW1lbnUnKS5hZGRDbGFzcygnemMtcGFuZWwtbWVudV9zdWJtZW51LWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykuYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC1tZW51JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfbW9iaWxlLW1lbnUtdmlzaWJsZScpO1xuICAgICAgICAkKCcuemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudV9hY3RpdmUnKTtcblxuICAgICAgICB0aGlzLnNlcnZpY2UoJ2Nsb3NlLWJsb2NrJykuaGlkZURlZmluaXRlbHkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJcyBkZXNrdG9wIG1vZGVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm4gXCJ0cnVlXCIgaWYgYm9keSB3aWR0aCBpcyBiaWdnZXIgdGhlbiBcIm1pbi1zaXplLm1vZGUyXCJcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBpc0Rlc2t0b3BNb2RlKCkge1xuICAgICAgICByZXR1cm4gKCQoJy56Yy1wYW5lbCcpLndpZHRoKCkgPj0gdGhpcy5nZXRDb25maWcoJ21pbi1zaXplL21vZGUyJykpO1xuICAgIH1cblxuICAgICAvKipcbiAgICAgKiBFcnJvciBjaGVjaywgaW4gQUpBWCBvciBvdGhlclxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBlcnJvckNoZWNrKG1zZywganFYSFIpIHtcbiAgICAgICAgaWYgKCEkKCcuemMtcG9wdXAnKS5oYXNDbGFzcygnemMtcGFuZWwtZXJyb3ItY29uZmlybScpKSB7XG5cbiAgICAgICAgICAgIGlmICgkKCcuemMtcG9wdXAnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkKCcuemMtcG9wdXAnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuXG4gICAgICAgICAgICB6Yy5jb25maXJtKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogYEVycm9yIC0gJHtqcVhIUi5zdGF0dXNUZXh0fSA6ICR7anFYSFIuc3RhdHVzfWAsXG4gICAgICAgICAgICAgICAgc3ViamVjdDogYCR7bXNnfSBQYWdlIHdpbGwgYmUgcmVsb2FkZWQsIG9rP2AsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICd6Yy1wYW5lbC1lcnJvci1jb25maXJtJyxcbiAgICAgICAgICAgICAgICBvazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBnbG9iYWwgdmFyXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRlZiAgIElmIG5vdCBmb3VuZCwgcmV0dXJuIFwiZGVmXCJcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBnZXRWYXIoa2V5LCBkZWYpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLnZhcnMsIGtleSk7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkZWY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZ2xvYmFsIHZhciB2YWx1ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkYXRhICBWYXIgdmFsdWVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRWYXIoa2V5LCBkYXRhKSB7XG4gICAgICAgIHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC52YXJzLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBnbG9iYWwgY2FjaGUgdmFsdWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGF0YSAgQ2FjaGUgdmFsdWVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRDYWNoZShrZXksIGRhdGEpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNhY2hlLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBnbG9iYWwgY2FjaGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGVmICAgSWYgbm90IGZvdW5kLCByZXR1cm4gXCJkZWZcIlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGdldENhY2hlKGtleSwgZGVmKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jYWNoZSwga2V5KTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRlZjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZWxlbWVudCBmcm9tIGNhY2hlIG9iamVjdFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqL1xuICAgIHJlbUNhY2hlKGtleSkge1xuICAgICAgICB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwuY2FjaGUsIGtleSwgZmFsc2UsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBnbG9iYWwgY29uZmlnIHZhbHVlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRhdGEgIENvbmZpZyB2YWx1ZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZENvbmZpZyhrZXksIGRhdGEpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNvbmZpZywga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZ2xvYmFsIGNvbmZpZ1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkZWYgICBJZiBub3QgZm91bmQsIHJldHVybiBcImRlZlwiXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0Q29uZmlnKGtleSwgZGVmKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jb25maWcsIGtleSk7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkZWY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXJ2aWNlKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSB8fCB0eXBlb2YgY2FsbGJhY2sgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDYWNoZShgc2VydmljZXMvJHtuYW1lfWAsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuZ2V0Q2FjaGUoYHNlcnZpY2VzLyR7bmFtZX1gLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlcnZpY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmljZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgc2VydmljZSBub3QgZXhpc3QgOiAke25hbWV9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb24oZXZlbnRzLCBzZWxlY3RvciwgaGFuZGxlciwgcHJldmVudERlZmF1bHQgPSBmYWxzZSkge1xuICAgICAgICAkKCcuemMtcGFuZWwnKS5vbihldmVudHMsIHNlbGVjdG9yLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmV2ZW50RGVmYXVsdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLCBldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsaWNrKHNlbGVjdG9yLCBoYW5kbGVyLCBwcmV2ZW50RGVmYXVsdCA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5vbignY2xpY2snLCBzZWxlY3RvciwgaGFuZGxlciwgcHJldmVudERlZmF1bHQpO1xuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZS9Nb2RlIDogUGFuZWwgcGFnZSBtb2RlIGJvZHkgc2l6ZVxuICpcbiAqIEBhdXRob3IgIEMuUiA8Y3JAanVuanVsaW5pLmNvbT5cbiAqIEBwYWNrYWdlIHppbWJydWNvZGVcbiAqIEBzaW5jZSAgIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgS2VybmVsIGZyb20gJy4uL2tlcm5lbCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsUGFnZU1vZGVCb2R5U2l6ZSBleHRlbmRzIEtlcm5lbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5oZWlnaHQoKTtcbiAgICAgICAgdGhpcy5jaGVja1BhbmVsV2lkdGgoKTtcblxuICAgICAgICBsZXQgd2luZG93V2lkdGggID0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgICAgICB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuemMtcGFuZWwnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggIT0gd2luZG93V2lkdGgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5lcmFzZU1vYmlsZU1lbnUoKTsgLy8gRXJhc2UgbW9iaWxlIG1lbnVcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCgpOyAgICAgICAgICAvLyBDaGVjayBwYW5lbCBoZWlnaHQgc2l6ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0Rlc2t0b3BNb2RlKCkgJiYgd2luZG93LmlubmVySGVpZ2h0ICE9IHdpbmRvd0hlaWdodCkge1xuICAgICAgICAgICAgICAgIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0hlaWdodCgpOyAvLyBDYWxjdWxhdGUgcGFuZWwgaGVpZ2h0XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQoKTsgICAgIC8vIENoZWNrIHBhbmVsIGhlaWdodCBzaXplXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhlaWdodCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZXNrdG9wTW9kZSgpKSB7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udHJvbHMnKS5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC1zdWJtZW51X19zY3JvbGxiYXItY29udGFpbmVyJykuaGVpZ2h0KCdhdXRvJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udHJvbHMnKS5oZWlnaHQoJzEwMCUnKTtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC1zdWJtZW51X19zY3JvbGxiYXItY29udGFpbmVyJykuaGVpZ2h0KCcxMDAlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRNb2RlU2l6ZSh3aWR0aCkge1xuICAgICAgICBsZXQgbW9kZSA9ICdtb2RlLTEtJztcblxuICAgICAgICBpZiAodGhpcy5nZXRDb25maWcoJ21pbi1zaXplL21vZGUxJykgPj0gd2lkdGgpIHtcbiAgICAgICAgICAgIG1vZGUgPSAnbW9kZS0xLSc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXRDb25maWcoJ21pbi1zaXplL21vZGUyJykgPj0gd2lkdGgpIHtcbiAgICAgICAgICAgIG1vZGUgPSAnbW9kZS0yLSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2RlID0gJ21vZGUtMy0nO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnLnpjLXBhbmVsJykuYXR0cignZGF0YS13aWR0aCcsIG1vZGUgKyB3aWR0aCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3NpemUtY2hhbmdlZCcpO1xuICAgIH1cblxuICAgIGNoZWNrUGFuZWxXaWR0aCgpIHtcbiAgICAgICAgY29uc3Qgcm8gPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cmllc1swXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRNb2RlU2l6ZShlbnRyaWVzWzBdLmNvbnRlbnRSZWN0LndpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcm8ub2JzZXJ2ZSgkKCcuemMtcGFuZWwnKS5nZXQoMCkpO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwgOiBQYWdlIG1vZGVcbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEJvZHlTaXplICAgICAgZnJvbSAnLi9tb2R1bGUvbW9kZS9wYW5lbC1wYWdlLW1vZGUtYm9keS1zaXplJztcbmltcG9ydCBPcHRpb25IYW5kbGVyIGZyb20gJy4vbW9kdWxlL2hlYWRlci9vcHRpb24taGFuZGxlcic7XG5pbXBvcnQgUXVpY2tMaW5rcyAgICBmcm9tICcuL21vZHVsZS9oZWFkZXIvcXVpY2stbGlua3MnO1xuXG56Yy5tb2R1bGUucGFuZWwuYWRkTW9kZSgoJCwgcGFuZWwpID0+IHtcbiAgICBjb25zdCBwcml2ID0ge307XG5cbiAgICBwcml2LmFkZExvYWRpbmdEYXRhID0gKG1zZyA9ICcnLCBwZXJjZW50KSA9PiB7XG4gICAgICAgICQoJy56Yy1wYW5lbC10ZW1wbGF0ZV9fcGFuZWwtbG9hZGluZy12YWx1ZScpLnRleHQobXNnKTtcbiAgICAgICAgJCgnLnpjLXBhbmVsLXRlbXBsYXRlX19wYW5lbC1sb2FkaW5nLXByb2dyZXNzLXRvdGFsJykud2lkdGgoTWF0aC5mbG9vcihwZXJjZW50KSArICclJyk7XG4gICAgfTtcblxuICAgIC8vIExvYWRcbiAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiAncG9zdCcsXG4gICAgICAgIGRhdGFUeXBlOiAnaHRtbCcsXG4gICAgICAgIHVybDogYWpheHVybCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYWN0aW9uOiAnemMvbW9kdWxlL3BhbmVsL2NvbnRlbnRfJyArIHBhbmVsLmdldFZhcignc2x1ZycpLFxuICAgICAgICAgICAgX2FqYXhfbm9uY2U6IHBhbmVsLmdldFZhcignbm9uY2UnKVxuICAgICAgICB9LFxuICAgICAgICB4aHI6ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICAgICAgLy8gRG93bmxvYWQgcHJvZ3Jlc3NcbiAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlICYmIGV2ZW50LnRvdGFsID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5mbG9vcigoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwKTtcblxuICAgICAgICAgICAgICAgICAgICBwcml2LmFkZExvYWRpbmdEYXRhKGAke3BlcmNlbnR9ICVgLCBwZXJjZW50KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbCA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignWC1Db250ZW50LUxlbmd0aCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5mbG9vcigoZXZlbnQubG9hZGVkIC8gdG90YWwpICogMTAwKTtcblxuICAgICAgICAgICAgICAgICAgICBwcml2LmFkZExvYWRpbmdEYXRhKGAke3BlcmNlbnR9ICVgLCBwZXJjZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgICAgIHJldHVybiB4aHI7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICBwYW5lbC5lcnJvckNoZWNrKCcgUGFuZWwgOiBDb250ZW50IGxvYWQnLCBzdGF0dXMpO1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEgPD0gMCkge1xuICAgICAgICAgICAgICAgIHpjLmNvbmZpcm0oe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0Vycm9yIC0gQUpBWCcsXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6ICdFcnJvciA6IENhbm5vdCBjb25uZWN0IHRvIEFKQVggTW9kdWxlIG9yIHlvdSBhcmUgbm90IGxvZ2dlZC4gUGFnZSB3aWxsIGJlIHJlbG9hZGVkLCBvaz8nLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZU9LOiBwYW5lbC5nZXRWYXIoJ29wdGlvbnNSZXNldE9rJyksXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQ2FuY2VsOiBwYW5lbC5nZXRWYXIoJ29wdGlvbnNSZXNldENhbmNlbCcpLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3pjLXBhbmVsLWVycm9yLWNvbmZpcm0nLFxuICAgICAgICAgICAgICAgICAgICBvazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLXRlbXBsYXRlJykuYXBwZW5kKGRhdGEpO1xuXG4gICAgICAgICAgICAvLyBBZGQgd3AgYm9keSBoZWlnaHRcbiAgICAgICAgICAgIHBhbmVsLmFkZENvbmZpZygnd3AtYm9keS1oZWlnaHQnLCAkKHdpbmRvdykuaGVpZ2h0KCkpO1xuXG4gICAgICAgICAgICBwYW5lbC5jbG9zZUJsb2NrKCk7ICAgICAgICAgIC8vIEluaXQgY2FsbGJhY2sgb2YgY2xvc2UgYmxvY2suXG4gICAgICAgICAgICBwYW5lbC5jb250cm9sSW5pdCgpOyAgICAgICAgIC8vIEluaXRpYWxpemF0aW9uIG9mIGNvbnRyb2xzLlxuICAgICAgICAgICAgcGFuZWwuY29udHJvbEhlbHAoKTsgICAgICAgICAvLyBDb250cm9sIGhlbHAgd2luZG93LlxuICAgICAgICAgICAgcGFuZWwuc2Nyb2xsYmFyKCk7ICAgICAgICAgICAvLyBJbml0aWFsaXphdGlvbiBvZiBzY3JvbGwgYmFyIGluIHBhbmVsLlxuICAgICAgICAgICAgcGFuZWwubm9NZXRhU2NhbGVJZk1vYmlsZSgpOyAvLyBEaXNhYmxlIG1ldGEgc2NhbGUgaWYgbW9iaWxlIGRldmljZS5cbiAgICAgICAgICAgIHBhbmVsLmNvbmRpdGlvbigpOyAgICAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gb2YgcGFuZWwgY29uZGl0aW9uIGNoZWNrZXIuXG4gICAgICAgICAgICBwYW5lbC5pZkNoYW5nZWQoKTsgICAgICAgICAgIC8vIENoZWNrIGlmIHNvbWUgY2hhbmdlcyB3YXMgbWFkZS5cbiAgICAgICAgICAgIHBhbmVsLnRvb2x0aXAoKTsgICAgICAgICAgICAgLy8gSW5pdCB0b29sdGlwXG4gICAgICAgICAgICBwYW5lbC5tZW51KCk7ICAgICAgICAgICAgICAgIC8vIFBhbmVsIG1lbnUuXG5cbiAgICAgICAgICAgIG5ldyBCb2R5U2l6ZTsgICAgICAgICAgICAgICAgIC8vIFBhbmVsIGJvZHkgc2l6ZS5cbiAgICAgICAgICAgIGNvbnN0IG9oID0gbmV3IE9wdGlvbkhhbmRsZXI7IC8vIFNhdmUvUmVzZXQgZnVuY3Rpb24uXG4gICAgICAgICAgICBuZXcgUXVpY2tMaW5rczsgICAgICAgICAgICAgICAvLyBJbml0aWFsaXphdGlvbiBvZiBwYW5lbCBidXR0b24gXCJRdWljayBMaW5rc1wiLlxuXG4gICAgICAgICAgICBwYW5lbC5hZGRDYWNoZSgnb3B0aW9uLWhhbmRsZXInLCBvaCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC10ZW1wbGF0ZV9fcGFuZWwtbG9hZGluZycpLmhpZGUoKTsgIC8vIEhpZGUgcGFuZWwgbG9hZGluZyB0ZXh0LlxuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbCcpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7ICAgIC8vIEZ1bGwgZGlzcGxheSBwYW5lbC5cblxuICAgICAgICAgICAgICAgIHBhbmVsLmFkZENhY2hlKCdmaXJzdC1zdGFydCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9zaG93LWNvbnRlbnQnKTtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBzYXZlIGJ1dHRvblxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwYW5lbC5kaXNhYmxlU2F2ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgJCgnLnpjLXBhbmVsLXNhdmUtc3RhcnRlci1idXR0b24nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpLmFkZENsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEVuYWJsZSBzYXZlIGJ1dHRvblxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwYW5lbC5lbmFibGVTYXZlQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICAkKCcuemMtcGFuZWwtc2F2ZS1zdGFydGVyLWJ1dHRvbicpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgcmVzZXQgYnV0dG9uXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHBhbmVsLmRpc2FibGVSZXNldEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgJCgnLnpjLXBhbmVsLXJlc2V0LXN0YXJ0ZXItYnV0dG9uJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKS5hZGRDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl9kaXNhYmxlZCcpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgcmVzZXQgYnV0dG9uXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHBhbmVsLmVuYWJsZVJlc2V0QnV0dG9uID0gKCkgPT4ge1xuICAgICAgICAkKCcuemMtcGFuZWwtcmVzZXQtc3RhcnRlci1idXR0b24nKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl9kaXNhYmxlZCcpO1xuICAgIH07XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=