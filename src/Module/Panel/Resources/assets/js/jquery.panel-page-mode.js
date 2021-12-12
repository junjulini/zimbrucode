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

            callback();
        });

        this.timer1 = setTimeout(() => {
            $('.zc-panel .zc-panel-direct-notification').addClass('zc-panel-direct-notification_close');

            this.timer2 = setTimeout(() => {
                $('.zc-panel .zc-panel-direct-notification').remove();
            }, 300);

            callback();
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
        $('.zc-panel-loading-starter-button').css('display', 'flex');
        $('.zc-panel-reset-starter-button').prop('disabled', true).addClass('zc-panel-header__controller-button_disabled');
    }

    hideLoading() {
        $('.zc-panel-save-starter-button').css('display', 'flex');
        $('.zc-panel-loading-starter-button').hide();
        $('.zc-panel-reset-starter-button').prop('disabled', false).removeClass('zc-panel-header__controller-button_disabled');
    }

    save() {
        this.click('.zc-panel-save-starter-button', ($this) => {
            this.showLoading();

            $(window).trigger('zc/panel/save/start');

            const priv = {};

            priv.prepOptions = () => {
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
                options: priv.prepOptions(),
            }).then((response) => {
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
            }).catch((errorMsg) => {
                $(window).trigger('zc/panel/save/error');
                this.errorCheck('Panel : Save options', errorMsg);
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
                    popup.hideContent();
                    $(window).trigger('zc/panel/reset/before');

                    zc.jsonRequest(`zc/module/panel/reset_${this.getVar('slug')}`, this.getVar('nonce')).then((response) => {
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
    errorCheck(mainMsg, errorMsg) {
        if (!$('.zc-popup').hasClass('zc-panel-error-confirm')) {

            if ($('.zc-popup').length) {
                $('.zc-popup').remove();
            }

            console.error(mainMsg);

            zc.confirm({
                title: errorMsg,
                subject: `${mainMsg} Page will be reloaded, ok?`,
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

            handler($(event.currentTarget), event);
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
        error: (jqXHR) => {
            panel.errorCheck(' Panel : Content load', `Error - ${jqXHR.status} : ${jqXHR.statusText}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2pxdWVyeS5wYW5lbC1wYWdlLW1vZGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLDJGQUEyRixNQUFNLHlPQUF5TyxPQUFPLDBEQUEwRCxTQUFTO0FBQ3BaO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUNIbkI7QUFDQSx5RkFBeUYsTUFBTSxvU0FBb1MsT0FBTyx5REFBeUQsU0FBUyx3SkFBd0osVUFBVTtBQUM5bUI7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUVvQztBQUNxQjs7QUFFdEU7O0FBRWUsaUNBQWlDLCtDQUFNO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQixnQkFBZ0IsVUFBVTtBQUMxQixnQkFBZ0IsVUFBVTtBQUMxQixnQkFBZ0IsVUFBVTtBQUMxQixnQkFBZ0IsVUFBVTtBQUMxQixnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQ0FBaUMscUVBQXdCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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VDtBQUNBLGlFQUFpRSxjQUFjLElBQUksaUJBQWlCO0FBQ3BHLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEseUNBQXlDO0FBQ3pDLHlDQUF5QztBQUN6Qyx5Q0FBeUM7QUFDekMseUNBQXlDO0FBQ3pDLHlDQUF5QztBQUN6Qyx5Q0FBeUM7QUFDekMseUNBQXlDO0FBQ3pDLHlDQUF5QztBQUN6Qyx5Q0FBeUM7O0FBRXpDLGdCQUFnQiw4RUFBUSxrQkFBa0I7QUFDMUMsMkJBQTJCLHFFQUFhLEVBQUU7QUFDMUMsZ0JBQWdCLGtFQUFVLGdCQUFnQjs7QUFFMUM7O0FBRUE7QUFDQSxnRUFBZ0U7QUFDaEUsZ0VBQWdFOztBQUVoRTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2hlYWRlci90cGwvZGlyZWN0LW5vdGlmaWNhdGlvbi5odG1sIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9oZWFkZXIvdHBsL3Jlc2V0LXBvcHVwLW5vdGlmaWNhdGlvbi5odG1sIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9oZWFkZXIvZGlyZWN0LW5vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvaGVhZGVyL29wdGlvbi1oYW5kbGVyLmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9oZWFkZXIvcXVpY2stbGlua3MuanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2tlcm5lbC5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvbW9kZS9wYW5lbC1wYWdlLW1vZGUtYm9keS1zaXplLmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ppbWJydWNvZGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9qcXVlcnkucGFuZWwtcGFnZS1tb2RlLmVzNi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCIgPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbiB6Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uX3R5cGVfe3t0eXBlfX1cXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uX19pY29uLWNvbnRhaW5lclxcXCI+IDxpIGNsYXNzPVxcXCJ6Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uX19pY29uXFxcIj48L2k+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uX19jb250ZW50XFxcIj4gPHNwYW4gY2xhc3M9XFxcInpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb25fX3RpdGxlXFxcIj57e3RpdGxlfX08L3NwYW4+IDxwIGNsYXNzPVxcXCJ6Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uX190ZXh0XFxcIj57e2NvbnRlbnR9fTwvcD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb25fX2Nsb3NlLWNvbnRyb2xsZXJcXFwiPiA8aSBjbGFzcz1cXFwiemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbl9fY2xvc2UtaWNvbiB6Yy1pY29uLWNsZWFyXFxcIj48L2k+IDwvZGl2PiA8L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiIDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbiB6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fdHlwZV97e3R5cGV9fVxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9faWNvbi1jb250YWluZXJcXFwiPiA8aSBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19pY29uXFxcIj48L2k+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2NvbnRlbnQtY29udGFpbmVyXFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19jb250ZW50XFxcIj4gPHNwYW4gY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fdGl0bGVcXFwiPnt7dGl0bGV9fTwvc3Bhbj4gPHAgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fdGV4dFxcXCI+e3tjb250ZW50fX08L3A+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2Nsb3NlLWNvbnRyb2xsZXJcXFwiPiA8YnV0dG9uIGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2Nsb3NlLWJ1dHRvblxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj57e3Zhcl9leGl0fX08L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIHppbWJydWNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBQYW5lbC9Nb2R1bGUvSGVhZGVyIDogRGlyZWN0IG5vdGlmaWNhdGlvblxuICpcbiAqIEBhdXRob3IgIEMuUiA8Y3JAanVuanVsaW5pLmNvbT5cbiAqIEBwYWNrYWdlIHppbWJydWNvZGVcbiAqIEBzaW5jZSAgIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgS2VybmVsICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2tlcm5lbCc7XG5pbXBvcnQgVFBMX19kaXJlY3Rfbm90aWZpY2F0aW9uIGZyb20gJy4vdHBsL2RpcmVjdC1ub3RpZmljYXRpb24uaHRtbCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdE5vdGlmaWNhdGlvbiBleHRlbmRzIEtlcm5lbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy50aW1lcjEgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVyMiAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHlwZSAgICAgPSAnZXJyb3InO1xuICAgICAgICB0aGlzLnRpdGxlICAgID0gJ0Vycm9yJztcbiAgICAgICAgdGhpcy5jb250ZW50ICA9ICdHZW5lcmFsIGVycm9yICggQUpBWCAvIExPR0lOIC8gUEhQIEVycm9yICknO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gMzAwMDtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9ICgpID0+IHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBkaXJlY3Qgbm90aWZpY2F0aW9uXG4gICAgICogXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgIHR5cGUgICAgIERhdGEgdHlwZSBvZiBjb250ZW50XG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgIHRpdGxlICAgIFRpdGxlIG9mIGNvbnRlbnRcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgY29udGVudCAgQ29udGVudFxuICAgICAqIEBwYXJhbSAge2ludGVnZXJ9ICBkdXJhdGlvbiBUaW1lIG9mIHJlbW92aW5nXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uIGFmdGVyIHJlbW92aW5nXG4gICAgICogQHJldHVybiB7bnVsbH0gICAgICAgICAgICAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGQodHlwZSwgdGl0bGUsIGNvbnRlbnQsIGR1cmF0aW9uLCBjYWxsYmFjaykge1xuICAgICAgICB0eXBlICAgICA9IHR5cGUgfHwgdGhpcy50eXBlO1xuICAgICAgICB0aXRsZSAgICA9IHRpdGxlIHx8IHRoaXMudGl0bGU7XG4gICAgICAgIGNvbnRlbnQgID0gY29udGVudCB8fCB0aGlzLmNvbnRlbnQ7XG4gICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24gfHwgdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCB0aGlzLmNhbGxiYWNrO1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyMSk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyMik7XG5cbiAgICAgICAgY29uc3Qgc3RydWN0dXJlID0gemMudHBsKFRQTF9fZGlyZWN0X25vdGlmaWNhdGlvbiwge1xuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnpjLXBhbmVsIC56Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uJykucmVtb3ZlKCk7XG4gICAgICAgICQoJy56Yy1wYW5lbCAuemMtcGFuZWwtY29udHJvbHMnKS5wcmVwZW5kKHN0cnVjdHVyZSk7XG5cbiAgICAgICAgdGhpcy5jbGljaygnLnpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb25fX2Nsb3NlLWNvbnRyb2xsZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcjEpO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIyKTtcblxuICAgICAgICAgICAgJCgnLnpjLXBhbmVsIC56Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uJykuYWRkQ2xhc3MoJ3pjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb25fY2xvc2UnKTtcblxuICAgICAgICAgICAgdGhpcy50aW1lcjIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwgLnpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb24nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudGltZXIxID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwgLnpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb24nKS5hZGRDbGFzcygnemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbl9jbG9zZScpO1xuXG4gICAgICAgICAgICB0aGlzLnRpbWVyMiA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbCAuemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSwgMzAwKTtcblxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZS9IZWFkZXIgOiBPcHRpb24gaGFuZGxlclxuICpcbiAqIEBhdXRob3IgIEMuUiA8Y3JAanVuanVsaW5pLmNvbT5cbiAqIEBwYWNrYWdlIHppbWJydWNvZGVcbiAqIEBzaW5jZSAgIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgS2VybmVsICAgICAgICAgICAgIGZyb20gJy4uL2tlcm5lbCc7XG5pbXBvcnQgRGlyZWN0Tm90aWZpY2F0aW9uIGZyb20gJy4vZGlyZWN0LW5vdGlmaWNhdGlvbic7XG5cbmltcG9ydCBUUExfX3Jlc2V0X3BvcHVwX25vdGlmaWNhdGlvbiBmcm9tICcuLi9oZWFkZXIvdHBsL3Jlc2V0LXBvcHVwLW5vdGlmaWNhdGlvbi5odG1sJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uSGFuZGxlciBleHRlbmRzIEtlcm5lbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5kbiAgPSBuZXcgRGlyZWN0Tm90aWZpY2F0aW9uO1xuICAgICAgICB0aGlzLnRwbCA9IFRQTF9fcmVzZXRfcG9wdXBfbm90aWZpY2F0aW9uO1xuXG4gICAgICAgIHRoaXMuc2F2ZSgpO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgc2hvd0xvYWRpbmcoKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbC1zYXZlLXN0YXJ0ZXItYnV0dG9uJykuaGlkZSgpO1xuICAgICAgICAkKCcuemMtcGFuZWwtbG9hZGluZy1zdGFydGVyLWJ1dHRvbicpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XG4gICAgICAgICQoJy56Yy1wYW5lbC1yZXNldC1zdGFydGVyLWJ1dHRvbicpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSkuYWRkQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICBoaWRlTG9hZGluZygpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsLXNhdmUtc3RhcnRlci1idXR0b24nKS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xuICAgICAgICAkKCcuemMtcGFuZWwtbG9hZGluZy1zdGFydGVyLWJ1dHRvbicpLmhpZGUoKTtcbiAgICAgICAgJCgnLnpjLXBhbmVsLXJlc2V0LXN0YXJ0ZXItYnV0dG9uJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSkucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICBzYXZlKCkge1xuICAgICAgICB0aGlzLmNsaWNrKCcuemMtcGFuZWwtc2F2ZS1zdGFydGVyLWJ1dHRvbicsICgkdGhpcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93TG9hZGluZygpO1xuXG4gICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvc2F2ZS9zdGFydCcpO1xuXG4gICAgICAgICAgICBjb25zdCBwcml2ID0ge307XG5cbiAgICAgICAgICAgIHByaXYucHJlcE9wdGlvbnMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsIC56Yy1wYW5lbC1jb250cm9scyBbZGF0YS1vcHRpb25dJykuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lSXRlbSA9ICQoZWwpLmF0dHIoJ25hbWUnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJChlbCkuZGF0YSgnaScpID09ICdpJykgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZUl0ZW0gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIG5hbWVJdGVtID0gbmFtZUl0ZW0ucmVwbGFjZSgvXFxbXFxdL2csICcnKTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZUl0ZW0gPSBuYW1lSXRlbS5yZXBsYWNlKHRoaXMuZ2V0VmFyKCdwcmVmaXgtc2x1ZycpLCAnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAkKGVsKS52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJChlbCkuaXMoJzpyYWRpbycpIHx8ICQoZWwpLmlzKCc6Y2hlY2tib3gnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoZWwpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tuYW1lSXRlbV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbbmFtZUl0ZW1dID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgemMuanNvblJlcXVlc3QoYHpjL21vZHVsZS9wYW5lbC9zYXZlXyR7dGhpcy5nZXRWYXIoJ3NsdWcnKX1gLCB0aGlzLmdldFZhcignbm9uY2UnKSwge1xuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHByaXYucHJlcE9wdGlvbnMoKSxcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3NhdmUvc3VjY2Vzcy1zdGFydCcpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVsb2FkID0gdHlwZW9mIHJlc3BvbnNlLnJlbG9hZCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRuLmFkZChyZXNwb25zZS50eXBlLCByZXNwb25zZS50aXRsZSwgcmVzcG9uc2UuY29udGVudCwgMzAwMCwgcmVsb2FkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UudHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2FjaGUoJ2NoYW5nZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9zYXZlL3N1Y2Nlc3MtcmVzcG9uc2UnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvc2F2ZS9zdWNjZXNzLWVuZCcpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yTXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3NhdmUvZXJyb3InKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yQ2hlY2soJ1BhbmVsIDogU2F2ZSBvcHRpb25zJywgZXJyb3JNc2cpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9zYXZlL2VuZCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5jbGljaygnLnpjLXBhbmVsLXJlc2V0LXN0YXJ0ZXItYnV0dG9uJywgKCkgPT4ge1xuICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3Jlc2V0L3N0YXJ0Jyk7XG5cbiAgICAgICAgICAgIHpjLmNvbmZpcm0oe1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmdldFZhcigncmVzZXQtcG9wdXAtdGl0bGUnKSxcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiB0aGlzLmdldFZhcigncmVzZXQtcG9wdXAtc3ViamVjdCcpLFxuICAgICAgICAgICAgICAgIHRpdGxlT0s6IHRoaXMuZ2V0VmFyKCdyZXNldC1wb3B1cC1vaycpLFxuICAgICAgICAgICAgICAgIHRpdGxlQ2FuY2VsOiB0aGlzLmdldFZhcigncmVzZXQtcG9wdXAtY2FuY2VsJyksXG4gICAgICAgICAgICAgICAgb2s6IChwb3B1cCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwb3B1cC5oaWRlQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvcmVzZXQvYmVmb3JlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgemMuanNvblJlcXVlc3QoYHpjL21vZHVsZS9wYW5lbC9yZXNldF8ke3RoaXMuZ2V0VmFyKCdzbHVnJyl9YCwgdGhpcy5nZXRWYXIoJ25vbmNlJykpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvcmVzZXQvc3VjY2Vzcy1zdGFydCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UudHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAucmVtQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLmFwcGVuZENvbnRlbnQoemMudHBsKHRoaXMudHBsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlc3BvbnNlLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogcmVzcG9uc2UuY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5zaG93Q29udGVudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDYWNoZSgnY2hhbmdlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9yZXNldC9zdWNjZXNzLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UudHlwZSA9PT0gJ2luZm8nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAucmVtQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLmFwcGVuZENvbnRlbnQoemMudHBsKHRoaXMudHBsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlc3BvbnNlLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogcmVzcG9uc2UuY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyX2V4aXQ6IHRoaXMuZ2V0VmFyKCdleGl0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAuc2hvd0NvbnRlbnQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9yZXNldC9zdWNjZXNzLWluZm8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAucmVtQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLmFwcGVuZENvbnRlbnQoemMudHBsKHRoaXMudHBsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnQUpBWCAvIExPR0lOIC8gUEhQIEVycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyX2V4aXQ6IHRoaXMuZ2V0VmFyKCdleGl0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAuc2hvd0NvbnRlbnQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9yZXNldC9zdWNjZXNzLWVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cCcpLm9uKCdjbGljaycsICcuemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19jbG9zZS1idXR0b24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3Jlc2V0L3N1Y2Nlc3MtZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvck1zZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3Jlc2V0L2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yQ2hlY2soJ1BhbmVsIDogUmVzZXQgb3B0aW9ucycsIGVycm9yTXNnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9yZXNldC9lbmQnKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZS9IZWFkZXIgOiBRdWljayBsaW5rc1xuICpcbiAqIEBhdXRob3IgIEMuUiA8Y3JAanVuanVsaW5pLmNvbT5cbiAqIEBwYWNrYWdlIHppbWJydWNvZGVcbiAqIEBzaW5jZSAgIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgS2VybmVsIGZyb20gJy4uL2tlcm5lbCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1aWNrTGlua3MgZXh0ZW5kcyBLZXJuZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhcnRlckJ1dHRvbigpO1xuICAgICAgICB0aGlzLmNsb3NlQmxvY2soKTtcbiAgICB9XG5cbiAgICBzdGFydGVyQnV0dG9uKCkge1xuICAgICAgICB0aGlzLmNsaWNrKCcuemMtcGFuZWwtcXVpY2stbGlua3Mtc3RhcnRlci1idXR0b24nLCAoJHRoaXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgY3I6IHBhcnNlSW50KCQoJy56Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXJzX3JpZ2h0Jykud2lkdGgoKSksXG4gICAgICAgICAgICAgICAgYnc6IHBhcnNlSW50KCR0aGlzLm91dGVyV2lkdGgoKSksXG4gICAgICAgICAgICAgICAgYnBvbDogcGFyc2VJbnQoJHRoaXMucG9zaXRpb24oKS5sZWZ0KSxcbiAgICAgICAgICAgICAgICBocHI6IHBhcnNlSW50KCQoJy56Yy1wYW5lbC1oZWFkZXInKS5jc3MoJ3BhZGRpbmctcmlnaHQnKSlcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHBvcyA9ICgoZGF0YS5jciAtIGRhdGEuYnBvbCkgLSBkYXRhLmJ3KSArIGRhdGEuaHByO1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLXF1aWNrLWxpbmtzJykuY3NzKCdyaWdodCcsIHBvcyk7XG5cbiAgICAgICAgICAgIGlmICgkdGhpcy5oYXNDbGFzcygnemMtcGFuZWwtcXVpY2stbGlua3Mtc3RhcnRlci1idXR0b25fYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnemMtcGFuZWwtcXVpY2stbGlua3Mtc3RhcnRlci1idXR0b25fYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLXF1aWNrLWxpbmtzJykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLXF1aWNrLWxpbmtzX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZSgnY2xvc2UtYmxvY2snKS5oaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCd6Yy1wYW5lbC1xdWljay1saW5rcy1zdGFydGVyLWJ1dHRvbl9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtcXVpY2stbGlua3MnKS5hZGRDbGFzcygnemMtcGFuZWwtcXVpY2stbGlua3NfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlKCdjbG9zZS1ibG9jaycpLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xvc2VCbG9jaygpIHtcbiAgICAgICAgJCh3aW5kb3cpLm9uKCd6Yy9jbG9zZS1ibG9jay56Yy1wYW5lbCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICgkKCcuemMtcGFuZWwtcXVpY2stbGlua3Mtc3RhcnRlci1idXR0b24nKS5oYXNDbGFzcygnemMtcGFuZWwtcXVpY2stbGlua3Mtc3RhcnRlci1idXR0b25fYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtcXVpY2stbGlua3Mtc3RhcnRlci1idXR0b24nKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtcXVpY2stbGlua3Mtc3RhcnRlci1idXR0b25fYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLXF1aWNrLWxpbmtzJykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLXF1aWNrLWxpbmtzX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZSgnY2xvc2UtYmxvY2snKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZSA6IEtlcm5lbFxuICpcbiAqIEBhdXRob3IgIEMuUiA8Y3JAanVuanVsaW5pLmNvbT5cbiAqIEBwYWNrYWdlIHppbWJydWNvZGVcbiAqIEBzaW5jZSAgIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXJuZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdsb2JhbCA9IHpjLmdldE1vZHVsZURhdGEoJ3BhbmVsJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFuZWwgc2Nyb2xsIGJhciB0b3BcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgc2Nyb2xsYmFyVG9wKCkge1xuICAgICAgICAkKCcuemMtcGFuZWwgLnpjLXNjcm9sbGJhcicpLnNjcm9sbFRvcCgwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgcGFuZWwgaGVpZ2h0XG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNhbGNIZWlnaHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmdldENhY2hlKCd3cC1ib2R5LWhlaWdodCcpICE9PSAkKHdpbmRvdykuaGVpZ2h0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FjaGUoJ3dwLWJvZHktaGVpZ2h0JywgJCh3aW5kb3cpLmhlaWdodCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVyYXNlIG1vYmlsZSBtZW51XG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGVyYXNlTW9iaWxlTWVudSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZXNrdG9wTW9kZSgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZXJ2aWNlKCdtZW51L2lzU3VibWVudUl0ZW0nKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1tZW51JykuYWRkQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250ZW50X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwtbWVudScpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1tZW51X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250ZW50X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250ZW50X21vYmlsZS1tZW51LXZpc2libGUnKTtcbiAgICAgICAgJCgnLnpjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudScpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnVfYWN0aXZlJyk7XG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlKCdjbG9zZS1ibG9jaycpLmhpZGVEZWZpbml0ZWx5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXMgZGVza3RvcCBtb2RlXG4gICAgICogXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJuIFwidHJ1ZVwiIGlmIGJvZHkgd2lkdGggaXMgYmlnZ2VyIHRoZW4gXCJtaW4tc2l6ZS5tb2RlMlwiXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaXNEZXNrdG9wTW9kZSgpIHtcbiAgICAgICAgcmV0dXJuICgkKCcuemMtcGFuZWwnKS53aWR0aCgpID49IHRoaXMuZ2V0Q29uZmlnKCdtaW4tc2l6ZS9tb2RlMicpKTtcbiAgICB9XG5cbiAgICAgLyoqXG4gICAgICogRXJyb3IgY2hlY2ssIGluIEFKQVggb3Igb3RoZXJcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZXJyb3JDaGVjayhtYWluTXNnLCBlcnJvck1zZykge1xuICAgICAgICBpZiAoISQoJy56Yy1wb3B1cCcpLmhhc0NsYXNzKCd6Yy1wYW5lbC1lcnJvci1jb25maXJtJykpIHtcblxuICAgICAgICAgICAgaWYgKCQoJy56Yy1wb3B1cCcpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG1haW5Nc2cpO1xuXG4gICAgICAgICAgICB6Yy5jb25maXJtKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogZXJyb3JNc2csXG4gICAgICAgICAgICAgICAgc3ViamVjdDogYCR7bWFpbk1zZ30gUGFnZSB3aWxsIGJlIHJlbG9hZGVkLCBvaz9gLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAnemMtcGFuZWwtZXJyb3ItY29uZmlybScsXG4gICAgICAgICAgICAgICAgb2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZ2xvYmFsIHZhclxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkZWYgICBJZiBub3QgZm91bmQsIHJldHVybiBcImRlZlwiXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0VmFyKGtleSwgZGVmKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC52YXJzLCBrZXkpO1xuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGdsb2JhbCB2YXIgdmFsdWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGF0YSAgVmFyIHZhbHVlXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkVmFyKGtleSwgZGF0YSkge1xuICAgICAgICB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwudmFycywga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZ2xvYmFsIGNhY2hlIHZhbHVlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRhdGEgIENhY2hlIHZhbHVlXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkQ2FjaGUoa2V5LCBkYXRhKSB7XG4gICAgICAgIHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jYWNoZSwga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZ2xvYmFsIGNhY2hlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRlZiAgIElmIG5vdCBmb3VuZCwgcmV0dXJuIFwiZGVmXCJcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBnZXRDYWNoZShrZXksIGRlZikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwuY2FjaGUsIGtleSk7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkZWY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVsZW1lbnQgZnJvbSBjYWNoZSBvYmplY3RcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKi9cbiAgICByZW1DYWNoZShrZXkpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNhY2hlLCBrZXksIGZhbHNlLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZ2xvYmFsIGNvbmZpZyB2YWx1ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkYXRhICBDb25maWcgdmFsdWVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRDb25maWcoa2V5LCBkYXRhKSB7XG4gICAgICAgIHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jb25maWcsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGdsb2JhbCBjb25maWdcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGVmICAgSWYgbm90IGZvdW5kLCByZXR1cm4gXCJkZWZcIlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGdldENvbmZpZyhrZXksIGRlZikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwuY29uZmlnLCBrZXkpO1xuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VydmljZShuYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAobmFtZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihjYWxsYmFjaykgfHwgdHlwZW9mIGNhbGxiYWNrID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2FjaGUoYHNlcnZpY2VzLyR7bmFtZX1gLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmdldENhY2hlKGBzZXJ2aWNlcy8ke25hbWV9YCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGlmIChzZXJ2aWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXh0IHNlcnZpY2Ugbm90IGV4aXN0IDogJHtuYW1lfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uKGV2ZW50cywgc2VsZWN0b3IsIGhhbmRsZXIsIHByZXZlbnREZWZhdWx0ID0gZmFsc2UpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsJykub24oZXZlbnRzLCBzZWxlY3RvciwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJldmVudERlZmF1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoYW5kbGVyKCQoZXZlbnQuY3VycmVudFRhcmdldCksIGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xpY2soc2VsZWN0b3IsIGhhbmRsZXIsIHByZXZlbnREZWZhdWx0ID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLm9uKCdjbGljaycsIHNlbGVjdG9yLCBoYW5kbGVyLCBwcmV2ZW50RGVmYXVsdCk7XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwvTW9kdWxlL01vZGUgOiBQYW5lbCBwYWdlIG1vZGUgYm9keSBzaXplXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBLZXJuZWwgZnJvbSAnLi4va2VybmVsJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWxQYWdlTW9kZUJvZHlTaXplIGV4dGVuZHMgS2VybmVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmhlaWdodCgpO1xuICAgICAgICB0aGlzLmNoZWNrUGFuZWxXaWR0aCgpO1xuXG4gICAgICAgIGxldCB3aW5kb3dXaWR0aCAgPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgICAgIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS56Yy1wYW5lbCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCAhPSB3aW5kb3dXaWR0aCkge1xuICAgICAgICAgICAgICAgIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmVyYXNlTW9iaWxlTWVudSgpOyAvLyBFcmFzZSBtb2JpbGUgbWVudVxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0KCk7ICAgICAgICAgIC8vIENoZWNrIHBhbmVsIGhlaWdodCBzaXplXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzRGVza3RvcE1vZGUoKSAmJiB3aW5kb3cuaW5uZXJIZWlnaHQgIT0gd2luZG93SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjSGVpZ2h0KCk7IC8vIENhbGN1bGF0ZSBwYW5lbCBoZWlnaHRcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCgpOyAgICAgLy8gQ2hlY2sgcGFuZWwgaGVpZ2h0IHNpemVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGVpZ2h0KCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rlc2t0b3BNb2RlKCkpIHtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250cm9scycpLmhlaWdodCgnYXV0bycpO1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLXN1Ym1lbnVfX3Njcm9sbGJhci1jb250YWluZXInKS5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250cm9scycpLmhlaWdodCgnMTAwJScpO1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLXN1Ym1lbnVfX3Njcm9sbGJhci1jb250YWluZXInKS5oZWlnaHQoJzEwMCUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZE1vZGVTaXplKHdpZHRoKSB7XG4gICAgICAgIGxldCBtb2RlID0gJ21vZGUtMS0nO1xuXG4gICAgICAgIGlmICh0aGlzLmdldENvbmZpZygnbWluLXNpemUvbW9kZTEnKSA+PSB3aWR0aCkge1xuICAgICAgICAgICAgbW9kZSA9ICdtb2RlLTEtJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdldENvbmZpZygnbWluLXNpemUvbW9kZTInKSA+PSB3aWR0aCkge1xuICAgICAgICAgICAgbW9kZSA9ICdtb2RlLTItJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZGUgPSAnbW9kZS0zLSc7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcuemMtcGFuZWwnKS5hdHRyKCdkYXRhLXdpZHRoJywgbW9kZSArIHdpZHRoKTtcblxuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvc2l6ZS1jaGFuZ2VkJyk7XG4gICAgfVxuXG4gICAgY2hlY2tQYW5lbFdpZHRoKCkge1xuICAgICAgICBjb25zdCBybyA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyaWVzWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE1vZGVTaXplKGVudHJpZXNbMF0uY29udGVudFJlY3Qud2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByby5vYnNlcnZlKCQoJy56Yy1wYW5lbCcpLmdldCgwKSk7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIHppbWJydWNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBQYW5lbCA6IFBhZ2UgbW9kZVxuICpcbiAqIEBhdXRob3IgIEMuUiA8Y3JAanVuanVsaW5pLmNvbT5cbiAqIEBwYWNrYWdlIHppbWJydWNvZGVcbiAqIEBzaW5jZSAgIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQm9keVNpemUgICAgICBmcm9tICcuL21vZHVsZS9tb2RlL3BhbmVsLXBhZ2UtbW9kZS1ib2R5LXNpemUnO1xuaW1wb3J0IE9wdGlvbkhhbmRsZXIgZnJvbSAnLi9tb2R1bGUvaGVhZGVyL29wdGlvbi1oYW5kbGVyJztcbmltcG9ydCBRdWlja0xpbmtzICAgIGZyb20gJy4vbW9kdWxlL2hlYWRlci9xdWljay1saW5rcyc7XG5cbnpjLm1vZHVsZS5wYW5lbC5hZGRNb2RlKCgkLCBwYW5lbCkgPT4ge1xuICAgIGNvbnN0IHByaXYgPSB7fTtcblxuICAgIHByaXYuYWRkTG9hZGluZ0RhdGEgPSAobXNnID0gJycsIHBlcmNlbnQpID0+IHtcbiAgICAgICAgJCgnLnpjLXBhbmVsLXRlbXBsYXRlX19wYW5lbC1sb2FkaW5nLXZhbHVlJykudGV4dChtc2cpO1xuICAgICAgICAkKCcuemMtcGFuZWwtdGVtcGxhdGVfX3BhbmVsLWxvYWRpbmctcHJvZ3Jlc3MtdG90YWwnKS53aWR0aChNYXRoLmZsb29yKHBlcmNlbnQpICsgJyUnKTtcbiAgICB9O1xuXG4gICAgLy8gTG9hZFxuICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgZGF0YVR5cGU6ICdodG1sJyxcbiAgICAgICAgdXJsOiBhamF4dXJsLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBhY3Rpb246ICd6Yy9tb2R1bGUvcGFuZWwvY29udGVudF8nICsgcGFuZWwuZ2V0VmFyKCdzbHVnJyksXG4gICAgICAgICAgICBfYWpheF9ub25jZTogcGFuZWwuZ2V0VmFyKCdub25jZScpXG4gICAgICAgIH0sXG4gICAgICAgIHhocjogKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgICAgICAvLyBEb3dubG9hZCBwcm9ncmVzc1xuICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUgJiYgZXZlbnQudG90YWwgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLmZsb29yKChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDApO1xuXG4gICAgICAgICAgICAgICAgICAgIHByaXYuYWRkTG9hZGluZ0RhdGEoYCR7cGVyY2VudH0gJWAsIHBlcmNlbnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdYLUNvbnRlbnQtTGVuZ3RoJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLmZsb29yKChldmVudC5sb2FkZWQgLyB0b3RhbCkgKiAxMDApO1xuXG4gICAgICAgICAgICAgICAgICAgIHByaXYuYWRkTG9hZGluZ0RhdGEoYCR7cGVyY2VudH0gJWAsIHBlcmNlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICAgICAgcmV0dXJuIHhocjtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IChqcVhIUikgPT4ge1xuICAgICAgICAgICAgcGFuZWwuZXJyb3JDaGVjaygnIFBhbmVsIDogQ29udGVudCBsb2FkJywgYEVycm9yIC0gJHtqcVhIUi5zdGF0dXN9IDogJHtqcVhIUi5zdGF0dXNUZXh0fWApO1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEgPD0gMCkge1xuICAgICAgICAgICAgICAgIHpjLmNvbmZpcm0oe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0Vycm9yIC0gQUpBWCcsXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6ICdFcnJvciA6IENhbm5vdCBjb25uZWN0IHRvIEFKQVggTW9kdWxlIG9yIHlvdSBhcmUgbm90IGxvZ2dlZC4gUGFnZSB3aWxsIGJlIHJlbG9hZGVkLCBvaz8nLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZU9LOiBwYW5lbC5nZXRWYXIoJ29wdGlvbnNSZXNldE9rJyksXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQ2FuY2VsOiBwYW5lbC5nZXRWYXIoJ29wdGlvbnNSZXNldENhbmNlbCcpLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3pjLXBhbmVsLWVycm9yLWNvbmZpcm0nLFxuICAgICAgICAgICAgICAgICAgICBvazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLXRlbXBsYXRlJykuYXBwZW5kKGRhdGEpO1xuXG4gICAgICAgICAgICAvLyBBZGQgd3AgYm9keSBoZWlnaHRcbiAgICAgICAgICAgIHBhbmVsLmFkZENvbmZpZygnd3AtYm9keS1oZWlnaHQnLCAkKHdpbmRvdykuaGVpZ2h0KCkpO1xuXG4gICAgICAgICAgICBwYW5lbC5jbG9zZUJsb2NrKCk7ICAgICAgICAgIC8vIEluaXQgY2FsbGJhY2sgb2YgY2xvc2UgYmxvY2suXG4gICAgICAgICAgICBwYW5lbC5jb250cm9sSW5pdCgpOyAgICAgICAgIC8vIEluaXRpYWxpemF0aW9uIG9mIGNvbnRyb2xzLlxuICAgICAgICAgICAgcGFuZWwuY29udHJvbEhlbHAoKTsgICAgICAgICAvLyBDb250cm9sIGhlbHAgd2luZG93LlxuICAgICAgICAgICAgcGFuZWwuc2Nyb2xsYmFyKCk7ICAgICAgICAgICAvLyBJbml0aWFsaXphdGlvbiBvZiBzY3JvbGwgYmFyIGluIHBhbmVsLlxuICAgICAgICAgICAgcGFuZWwubm9NZXRhU2NhbGVJZk1vYmlsZSgpOyAvLyBEaXNhYmxlIG1ldGEgc2NhbGUgaWYgbW9iaWxlIGRldmljZS5cbiAgICAgICAgICAgIHBhbmVsLmNvbmRpdGlvbigpOyAgICAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gb2YgcGFuZWwgY29uZGl0aW9uIGNoZWNrZXIuXG4gICAgICAgICAgICBwYW5lbC5pZkNoYW5nZWQoKTsgICAgICAgICAgIC8vIENoZWNrIGlmIHNvbWUgY2hhbmdlcyB3YXMgbWFkZS5cbiAgICAgICAgICAgIHBhbmVsLnRvb2x0aXAoKTsgICAgICAgICAgICAgLy8gSW5pdCB0b29sdGlwXG4gICAgICAgICAgICBwYW5lbC5tZW51KCk7ICAgICAgICAgICAgICAgIC8vIFBhbmVsIG1lbnUuXG5cbiAgICAgICAgICAgIG5ldyBCb2R5U2l6ZTsgICAgICAgICAgICAgICAgIC8vIFBhbmVsIGJvZHkgc2l6ZS5cbiAgICAgICAgICAgIGNvbnN0IG9oID0gbmV3IE9wdGlvbkhhbmRsZXI7IC8vIFNhdmUvUmVzZXQgZnVuY3Rpb24uXG4gICAgICAgICAgICBuZXcgUXVpY2tMaW5rczsgICAgICAgICAgICAgICAvLyBJbml0aWFsaXphdGlvbiBvZiBwYW5lbCBidXR0b24gXCJRdWljayBMaW5rc1wiLlxuXG4gICAgICAgICAgICBwYW5lbC5hZGRDYWNoZSgnb3B0aW9uLWhhbmRsZXInLCBvaCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC10ZW1wbGF0ZV9fcGFuZWwtbG9hZGluZycpLmhpZGUoKTsgIC8vIEhpZGUgcGFuZWwgbG9hZGluZyB0ZXh0LlxuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbCcpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7ICAgIC8vIEZ1bGwgZGlzcGxheSBwYW5lbC5cblxuICAgICAgICAgICAgICAgIHBhbmVsLmFkZENhY2hlKCdmaXJzdC1zdGFydCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9zaG93LWNvbnRlbnQnKTtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBzYXZlIGJ1dHRvblxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwYW5lbC5kaXNhYmxlU2F2ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgJCgnLnpjLXBhbmVsLXNhdmUtc3RhcnRlci1idXR0b24nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpLmFkZENsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEVuYWJsZSBzYXZlIGJ1dHRvblxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwYW5lbC5lbmFibGVTYXZlQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICAkKCcuemMtcGFuZWwtc2F2ZS1zdGFydGVyLWJ1dHRvbicpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgcmVzZXQgYnV0dG9uXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHBhbmVsLmRpc2FibGVSZXNldEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgJCgnLnpjLXBhbmVsLXJlc2V0LXN0YXJ0ZXItYnV0dG9uJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKS5hZGRDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl9kaXNhYmxlZCcpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgcmVzZXQgYnV0dG9uXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHBhbmVsLmVuYWJsZVJlc2V0QnV0dG9uID0gKCkgPT4ge1xuICAgICAgICAkKCcuemMtcGFuZWwtcmVzZXQtc3RhcnRlci1idXR0b24nKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl9kaXNhYmxlZCcpO1xuICAgIH07XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=