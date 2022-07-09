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

    /**
     * Constructor
     * 
     * @since 1.0.0
     */
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

    /**
     * Constructor
     * 
     * @since 1.0.0
     */
    constructor() {
        super();

        this.dn  = new _direct_notification__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.tpl = _header_tpl_reset_popup_notification_html__WEBPACK_IMPORTED_MODULE_2__["default"];

        this.save();
        this.reset();
    }

    /**
     * Show loading
     * 
     * @since 1.0.0
     */
    showLoading() {
        $('.zc-panel-save-starter-button').hide();
        $('.zc-panel-loading-starter-button').css('display', 'flex');
        $('.zc-panel-reset-starter-button').prop('disabled', true).addClass('zc-panel-header__controller-button_disabled');
    }

    /**
     * Hide loading
     * 
     * @since 1.0.0
     */
    hideLoading() {
        $('.zc-panel-save-starter-button').css('display', 'flex');
        $('.zc-panel-loading-starter-button').hide();
        $('.zc-panel-reset-starter-button').prop('disabled', false).removeClass('zc-panel-header__controller-button_disabled');
    }

    /**
     * Save options
     * 
     * @since 1.0.0
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

    /**
     * Reset options
     * 
     * @since 1.0.0
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

    /**
     * Constructor
     * 
     * @since 1.0.0
     */
    constructor() {
        super();

        this.starterButton();
        this.closeBlock();
    }

    /**
     * Starter button
     * 
     * @since 1.0.0
     */
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

    /**
     * Close block
     * 
     * @since 1.0.0
     */
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
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module/Mode : Panel mode lite body size
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */





const $ = jQuery;

class PanelModeLiteBodySize extends _kernel__WEBPACK_IMPORTED_MODULE_0__["default"] {

    /**
     * Constructor
     * 
     * @since 1.0.0
     */
    constructor() {
        super();

        const ro = new ResizeObserver(entries => {
            if (entries[0] !== undefined) {
                this.addModeSize(entries[0].contentRect.width);
            }
        });

        ro.observe($('.zc-panel').get(0));
    }

    /**
     * Add "mode size"
     * 
     * @param {string} width   Panel width
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
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel - Lite mode
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */







zc.module.panel.addMode(($, panel) => {

    setTimeout(() => {
        panel.closeBlock();          // Initializing of "close block"
        panel.controlInit();         // Initialization of controls
        panel.controlHelp();         // Control help window
        panel.scrollbar();           // Initialization of scroll bar in panel
        panel.noMetaScaleIfMobile(); // Disable meta scale if mobile device
        panel.condition();           // Initialization of panel condition checker
        panel.ifChanged();           // Check if some changes was made
        panel.tooltip();             // Initialization of tooltip

        new _module_mode_panel_lite_mode_body_size__WEBPACK_IMPORTED_MODULE_0__["default"];                 // Panel body size
        const oh = new _module_header_option_handler__WEBPACK_IMPORTED_MODULE_1__["default"]; // Options handler
        new _module_header_quick_links__WEBPACK_IMPORTED_MODULE_2__["default"];               // Initialization of panel button "Quick Links".

        panel.addCache('option-handler', oh);

        // Active section
        const section = $('.zc-panel .zc-panel-controls__section');
        panel.addCache('menu/current-section', section);
        $(window).trigger('zc/panel/menu/item-change-ICP', [section]);

        $('.zc-panel-template__panel-loading').hide();
        $('.zc-panel').css('visibility', 'visible');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2pxdWVyeS5wYW5lbC1saXRlLW1vZGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLDJGQUEyRixNQUFNLHlPQUF5TyxPQUFPLDBEQUEwRCxTQUFTO0FBQ3BaO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUNIbkI7QUFDQSx5RkFBeUYsTUFBTSxvU0FBb1MsT0FBTyx5REFBeUQsU0FBUyx3SkFBd0osVUFBVTtBQUM5bUI7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUVvQztBQUNxQjs7QUFFdEU7O0FBRWUsaUNBQWlDLCtDQUFNOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixVQUFVO0FBQzFCLGdCQUFnQixVQUFVO0FBQzFCLGdCQUFnQixVQUFVO0FBQzFCLGdCQUFnQixVQUFVO0FBQzFCLGdCQUFnQixVQUFVO0FBQzFCLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDQUFpQyxxRUFBd0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFOEI7QUFDWTs7QUFFaUM7O0FBRXhGOztBQUVlLDRCQUE0QiwrQ0FBTTs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLDREQUFrQjtBQUN6QyxtQkFBbUIsaUZBQTZCOztBQUVoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7O0FBRUEsbURBQW1ELG9CQUFvQjtBQUN2RTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNERBQTRELG9CQUFvQjtBQUNoRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFa0I7O0FBRS9COztBQUVlLHlCQUF5QiwrQ0FBTTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViOztBQUVlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixVQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsYUFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLGFBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixhQUFhO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsYUFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLGFBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixhQUFhO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsYUFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QixlQUFlLFVBQVU7QUFDekIsZ0JBQWdCLG9CQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLEtBQUs7QUFDL0MsY0FBYztBQUNkLDBEQUEwRCxLQUFLO0FBQy9EO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsZ0VBQWdFLEtBQUs7QUFDckU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxVQUFVO0FBQ3pCLGVBQWUsVUFBVTtBQUN6QixlQUFlLFVBQVU7QUFDekIsZUFBZSxVQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QixlQUFlLFVBQVU7QUFDekIsZUFBZSxVQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUVrQjs7QUFFL0I7O0FBRWUsb0NBQW9DLCtDQUFNOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7O1VDaEVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUV1RDtBQUNUO0FBQ0g7O0FBRXhEOztBQUVBO0FBQ0EscUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDLHFDQUFxQzs7QUFFckMsWUFBWSw4RUFBUSxrQkFBa0I7QUFDdEMsdUJBQXVCLHFFQUFhLEVBQUU7QUFDdEMsWUFBWSxrRUFBVSxnQkFBZ0I7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvaGVhZGVyL3RwbC9kaXJlY3Qtbm90aWZpY2F0aW9uLmh0bWwiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2hlYWRlci90cGwvcmVzZXQtcG9wdXAtbm90aWZpY2F0aW9uLmh0bWwiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2hlYWRlci9kaXJlY3Qtbm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9oZWFkZXIvb3B0aW9uLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2hlYWRlci9xdWljay1saW5rcy5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUva2VybmVsLmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9tb2RlL3BhbmVsLWxpdGUtbW9kZS1ib2R5LXNpemUuanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L2pxdWVyeS5wYW5lbC1saXRlLW1vZGUuZXM2LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uIHpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb25fdHlwZV97e3R5cGV9fVxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb25fX2ljb24tY29udGFpbmVyXFxcIj4gPGkgY2xhc3M9XFxcInpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb25fX2ljb25cXFwiPjwvaT4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb25fX2NvbnRlbnRcXFwiPiA8c3BhbiBjbGFzcz1cXFwiemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbl9fdGl0bGVcXFwiPnt7dGl0bGV9fTwvc3Bhbj4gPHAgY2xhc3M9XFxcInpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb25fX3RleHRcXFwiPnt7Y29udGVudH19PC9wPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbl9fY2xvc2UtY29udHJvbGxlclxcXCI+IDxpIGNsYXNzPVxcXCJ6Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uX19jbG9zZS1pY29uIHpjLWljb24tY2xlYXJcXFwiPjwvaT4gPC9kaXY+IDwvZGl2PlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCIgPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uIHpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl90eXBlX3t7dHlwZX19XFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19pY29uLWNvbnRhaW5lclxcXCI+IDxpIGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2ljb25cXFwiPjwvaT4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fY29udGVudC1jb250YWluZXJcXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2NvbnRlbnRcXFwiPiA8c3BhbiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX190aXRsZVxcXCI+e3t0aXRsZX19PC9zcGFuPiA8cCBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX190ZXh0XFxcIj57e2NvbnRlbnR9fTwvcD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fY2xvc2UtY29udHJvbGxlclxcXCI+IDxidXR0b24gY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fY2xvc2UtYnV0dG9uXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPnt7dmFyX2V4aXR9fTwvYnV0dG9uPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZS9IZWFkZXIgOiBEaXJlY3Qgbm90aWZpY2F0aW9uXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBLZXJuZWwgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4va2VybmVsJztcbmltcG9ydCBUUExfX2RpcmVjdF9ub3RpZmljYXRpb24gZnJvbSAnLi90cGwvZGlyZWN0LW5vdGlmaWNhdGlvbi5odG1sJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0Tm90aWZpY2F0aW9uIGV4dGVuZHMgS2VybmVsIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy50aW1lcjEgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVyMiAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHlwZSAgICAgPSAnZXJyb3InO1xuICAgICAgICB0aGlzLnRpdGxlICAgID0gJ0Vycm9yJztcbiAgICAgICAgdGhpcy5jb250ZW50ICA9ICdHZW5lcmFsIGVycm9yICggQUpBWCAvIExPR0lOIC8gUEhQIEVycm9yICknO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gMzAwMDtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9ICgpID0+IHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBkaXJlY3Qgbm90aWZpY2F0aW9uXG4gICAgICogXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgIHR5cGUgICAgIERhdGEgdHlwZSBvZiBjb250ZW50XG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgIHRpdGxlICAgIFRpdGxlIG9mIGNvbnRlbnRcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgY29udGVudCAgQ29udGVudFxuICAgICAqIEBwYXJhbSAge2ludGVnZXJ9ICBkdXJhdGlvbiBUaW1lIG9mIHJlbW92aW5nXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uIGFmdGVyIHJlbW92aW5nXG4gICAgICogQHJldHVybiB7bnVsbH0gICAgICAgICAgICAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGQodHlwZSwgdGl0bGUsIGNvbnRlbnQsIGR1cmF0aW9uLCBjYWxsYmFjaykge1xuICAgICAgICB0eXBlICAgICA9IHR5cGUgfHwgdGhpcy50eXBlO1xuICAgICAgICB0aXRsZSAgICA9IHRpdGxlIHx8IHRoaXMudGl0bGU7XG4gICAgICAgIGNvbnRlbnQgID0gY29udGVudCB8fCB0aGlzLmNvbnRlbnQ7XG4gICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24gfHwgdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCB0aGlzLmNhbGxiYWNrO1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyMSk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyMik7XG5cbiAgICAgICAgY29uc3Qgc3RydWN0dXJlID0gemMudHBsKFRQTF9fZGlyZWN0X25vdGlmaWNhdGlvbiwge1xuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnpjLXBhbmVsIC56Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uJykucmVtb3ZlKCk7XG4gICAgICAgICQoJy56Yy1wYW5lbCAuemMtcGFuZWwtY29udHJvbHMnKS5wcmVwZW5kKHN0cnVjdHVyZSk7XG5cbiAgICAgICAgdGhpcy5jbGljaygnLnpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb25fX2Nsb3NlLWNvbnRyb2xsZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcjEpO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIyKTtcblxuICAgICAgICAgICAgJCgnLnpjLXBhbmVsIC56Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uJykuYWRkQ2xhc3MoJ3pjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb25fY2xvc2UnKTtcblxuICAgICAgICAgICAgdGhpcy50aW1lcjIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwgLnpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb24nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudGltZXIxID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwgLnpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb24nKS5hZGRDbGFzcygnemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbl9jbG9zZScpO1xuXG4gICAgICAgICAgICB0aGlzLnRpbWVyMiA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbCAuemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSwgMzAwKTtcblxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZS9IZWFkZXIgOiBPcHRpb24gaGFuZGxlclxuICpcbiAqIEBhdXRob3IgIEMuUiA8Y3JAanVuanVsaW5pLmNvbT5cbiAqIEBwYWNrYWdlIHppbWJydWNvZGVcbiAqIEBzaW5jZSAgIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgS2VybmVsICAgICAgICAgICAgIGZyb20gJy4uL2tlcm5lbCc7XG5pbXBvcnQgRGlyZWN0Tm90aWZpY2F0aW9uIGZyb20gJy4vZGlyZWN0LW5vdGlmaWNhdGlvbic7XG5cbmltcG9ydCBUUExfX3Jlc2V0X3BvcHVwX25vdGlmaWNhdGlvbiBmcm9tICcuLi9oZWFkZXIvdHBsL3Jlc2V0LXBvcHVwLW5vdGlmaWNhdGlvbi5odG1sJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uSGFuZGxlciBleHRlbmRzIEtlcm5lbCB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuZG4gID0gbmV3IERpcmVjdE5vdGlmaWNhdGlvbjtcbiAgICAgICAgdGhpcy50cGwgPSBUUExfX3Jlc2V0X3BvcHVwX25vdGlmaWNhdGlvbjtcblxuICAgICAgICB0aGlzLnNhdmUoKTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgbG9hZGluZ1xuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHNob3dMb2FkaW5nKCkge1xuICAgICAgICAkKCcuemMtcGFuZWwtc2F2ZS1zdGFydGVyLWJ1dHRvbicpLmhpZGUoKTtcbiAgICAgICAgJCgnLnpjLXBhbmVsLWxvYWRpbmctc3RhcnRlci1idXR0b24nKS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xuICAgICAgICAkKCcuemMtcGFuZWwtcmVzZXQtc3RhcnRlci1idXR0b24nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpLmFkZENsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBsb2FkaW5nXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaGlkZUxvYWRpbmcoKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbC1zYXZlLXN0YXJ0ZXItYnV0dG9uJykuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKTtcbiAgICAgICAgJCgnLnpjLXBhbmVsLWxvYWRpbmctc3RhcnRlci1idXR0b24nKS5oaWRlKCk7XG4gICAgICAgICQoJy56Yy1wYW5lbC1yZXNldC1zdGFydGVyLWJ1dHRvbicpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSBvcHRpb25zXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgdGhpcy5jbGljaygnLnpjLXBhbmVsLXNhdmUtc3RhcnRlci1idXR0b24nLCAoJHRoaXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmcoKTtcblxuICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3NhdmUvc3RhcnQnKTtcblxuICAgICAgICAgICAgY29uc3QgcHJpdiA9IHt9O1xuXG4gICAgICAgICAgICBwcml2LnByb2NPcHRpb25zID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7fTtcblxuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbCAuemMtcGFuZWwtY29udHJvbHMgW2RhdGEtb3B0aW9uXScpLmVhY2goKGluZGV4LCBlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZUl0ZW0gPSAkKGVsKS5hdHRyKCduYW1lJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZWwpLmRhdGEoJ2knKSA9PSAnaScpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVJdGVtID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICBuYW1lSXRlbSA9IG5hbWVJdGVtLnJlcGxhY2UoL1xcW1xcXS9nLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWVJdGVtID0gbmFtZUl0ZW0ucmVwbGFjZSh0aGlzLmdldFZhcigncHJlZml4LXNsdWcnKSwgJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gJChlbCkudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZWwpLmlzKCc6cmFkaW8nKSB8fCAkKGVsKS5pcygnOmNoZWNrYm94JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKGVsKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbbmFtZUl0ZW1dID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zW25hbWVJdGVtXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHpjLmpzb25SZXF1ZXN0KGB6Yy9tb2R1bGUvcGFuZWwvc2F2ZV8ke3RoaXMuZ2V0VmFyKCdzbHVnJyl9YCwgdGhpcy5nZXRWYXIoJ25vbmNlJyksIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBwcml2LnByb2NPcHRpb25zKCksXG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9zYXZlL3N1Y2Nlc3Mtc3RhcnQnKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbG9hZCA9IHR5cGVvZiByZXNwb25zZS5yZWxvYWQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kbi5hZGQocmVzcG9uc2UudHlwZSwgcmVzcG9uc2UudGl0bGUsIHJlc3BvbnNlLmNvbnRlbnQsIDMwMDAsIHJlbG9hZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlTG9hZGluZygpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnR5cGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENhY2hlKCdjaGFuZ2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvc2F2ZS9zdWNjZXNzLXJlc3BvbnNlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3NhdmUvc3VjY2Vzcy1lbmQnKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvck1zZykgPT4ge1xuICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9zYXZlL2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvckNoZWNrKCdQYW5lbCA6IFNhdmUgb3B0aW9ucycsIGVycm9yTXNnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvc2F2ZS9lbmQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgb3B0aW9uc1xuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmNsaWNrKCcuemMtcGFuZWwtcmVzZXQtc3RhcnRlci1idXR0b24nLCAoKSA9PiB7XG4gICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvcmVzZXQvc3RhcnQnKTtcblxuICAgICAgICAgICAgemMuY29uZmlybSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0VmFyKCdyZXNldC1wb3B1cC10aXRsZScpLFxuICAgICAgICAgICAgICAgIHN1YmplY3Q6IHRoaXMuZ2V0VmFyKCdyZXNldC1wb3B1cC1zdWJqZWN0JyksXG4gICAgICAgICAgICAgICAgdGl0bGVPSzogdGhpcy5nZXRWYXIoJ3Jlc2V0LXBvcHVwLW9rJyksXG4gICAgICAgICAgICAgICAgdGl0bGVDYW5jZWw6IHRoaXMuZ2V0VmFyKCdyZXNldC1wb3B1cC1jYW5jZWwnKSxcbiAgICAgICAgICAgICAgICBvazogKHBvcHVwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwLmhpZGVDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9yZXNldC9iZWZvcmUnKTtcblxuICAgICAgICAgICAgICAgICAgICB6Yy5qc29uUmVxdWVzdChgemMvbW9kdWxlL3BhbmVsL3Jlc2V0XyR7dGhpcy5nZXRWYXIoJ3NsdWcnKX1gLCB0aGlzLmdldFZhcignbm9uY2UnKSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9yZXNldC9zdWNjZXNzLXN0YXJ0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS50eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5yZW1Db250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAuYXBwZW5kQ29udGVudCh6Yy50cGwodGhpcy50cGwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogcmVzcG9uc2UudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiByZXNwb25zZS5jb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLnNob3dDb250ZW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENhY2hlKCdjaGFuZ2VkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3Jlc2V0L3N1Y2Nlc3Mtc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS50eXBlID09PSAnaW5mbycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5yZW1Db250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAuYXBwZW5kQ29udGVudCh6Yy50cGwodGhpcy50cGwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogcmVzcG9uc2UudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiByZXNwb25zZS5jb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJfZXhpdDogdGhpcy5nZXRWYXIoJ2V4aXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5zaG93Q29udGVudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3Jlc2V0L3N1Y2Nlc3MtaW5mbycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5yZW1Db250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAuYXBwZW5kQ29udGVudCh6Yy50cGwodGhpcy50cGwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdFcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdBSkFYIC8gTE9HSU4gLyBQSFAgRXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJfZXhpdDogdGhpcy5nZXRWYXIoJ2V4aXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5zaG93Q29udGVudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3Jlc2V0L3N1Y2Nlc3MtZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwJykub24oJ2NsaWNrJywgJy56Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2Nsb3NlLWJ1dHRvbicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvcmVzZXQvc3VjY2Vzcy1lbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yTXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvcmVzZXQvZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JDaGVjaygnUGFuZWwgOiBSZXNldCBvcHRpb25zJywgZXJyb3JNc2cpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3Jlc2V0L2VuZCcpO1xuICAgICAgICB9KTtcbiAgICB9O1xufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwvTW9kdWxlL0hlYWRlciA6IFF1aWNrIGxpbmtzXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBLZXJuZWwgZnJvbSAnLi4va2VybmVsJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVpY2tMaW5rcyBleHRlbmRzIEtlcm5lbCB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhcnRlckJ1dHRvbigpO1xuICAgICAgICB0aGlzLmNsb3NlQmxvY2soKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydGVyIGJ1dHRvblxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHN0YXJ0ZXJCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1wYW5lbC1xdWljay1saW5rcy1zdGFydGVyLWJ1dHRvbicsICgkdGhpcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBjcjogcGFyc2VJbnQoJCgnLnpjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlcnNfcmlnaHQnKS53aWR0aCgpKSxcbiAgICAgICAgICAgICAgICBidzogcGFyc2VJbnQoJHRoaXMub3V0ZXJXaWR0aCgpKSxcbiAgICAgICAgICAgICAgICBicG9sOiBwYXJzZUludCgkdGhpcy5wb3NpdGlvbigpLmxlZnQpLFxuICAgICAgICAgICAgICAgIGhwcjogcGFyc2VJbnQoJCgnLnpjLXBhbmVsLWhlYWRlcicpLmNzcygncGFkZGluZy1yaWdodCcpKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgcG9zID0gKChkYXRhLmNyIC0gZGF0YS5icG9sKSAtIGRhdGEuYncpICsgZGF0YS5ocHI7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwtcXVpY2stbGlua3MnKS5jc3MoJ3JpZ2h0JywgcG9zKTtcblxuICAgICAgICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKCd6Yy1wYW5lbC1xdWljay1saW5rcy1zdGFydGVyLWJ1dHRvbl9hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1xdWljay1saW5rcy1zdGFydGVyLWJ1dHRvbl9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtcXVpY2stbGlua3MnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtcXVpY2stbGlua3NfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlKCdjbG9zZS1ibG9jaycpLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ3pjLXBhbmVsLXF1aWNrLWxpbmtzLXN0YXJ0ZXItYnV0dG9uX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1xdWljay1saW5rcycpLmFkZENsYXNzKCd6Yy1wYW5lbC1xdWljay1saW5rc19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UoJ2Nsb3NlLWJsb2NrJykuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZSBibG9ja1xuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNsb3NlQmxvY2soKSB7XG4gICAgICAgICQod2luZG93KS5vbignemMvY2xvc2UtYmxvY2suemMtcGFuZWwnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoJCgnLnpjLXBhbmVsLXF1aWNrLWxpbmtzLXN0YXJ0ZXItYnV0dG9uJykuaGFzQ2xhc3MoJ3pjLXBhbmVsLXF1aWNrLWxpbmtzLXN0YXJ0ZXItYnV0dG9uX2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLXF1aWNrLWxpbmtzLXN0YXJ0ZXItYnV0dG9uJykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLXF1aWNrLWxpbmtzLXN0YXJ0ZXItYnV0dG9uX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1xdWljay1saW5rcycpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1xdWljay1saW5rc19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UoJ2Nsb3NlLWJsb2NrJykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIHppbWJydWNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBQYW5lbC9Nb2R1bGUgOiBLZXJuZWxcbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2VybmVsIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsID0gemMuZ2V0TW9kdWxlRGF0YSgncGFuZWwnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgYmFyIDogTW92ZSB0byB0b3AgcG9zaXRpb25cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzY3JvbGxiYXJUb3AoKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbCAuemMtc2Nyb2xsYmFyJykuc2Nyb2xsVG9wKDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBwYW5lbCBoZWlnaHRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjYWxjSGVpZ2h0KCkge1xuICAgICAgICBpZiAodGhpcy5nZXRDYWNoZSgnd3AtYm9keS1oZWlnaHQnKSAhPT0gJCh3aW5kb3cpLmhlaWdodCgpKSB7XG4gICAgICAgICAgICB0aGlzLmFkZENhY2hlKCd3cC1ib2R5LWhlaWdodCcsICQod2luZG93KS5oZWlnaHQoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFcmFzZSBtb2JpbGUgbWVudVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGVyYXNlTW9iaWxlTWVudSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZXNrdG9wTW9kZSgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZXJ2aWNlKCdtZW51L2lzU3VibWVudUl0ZW0nKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1tZW51JykuYWRkQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250ZW50X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwtbWVudScpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1tZW51X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250ZW50X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250ZW50X21vYmlsZS1tZW51LXZpc2libGUnKTtcbiAgICAgICAgJCgnLnpjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudScpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnVfYWN0aXZlJyk7XG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlKCdjbG9zZS1ibG9jaycpLmhpZGVEZWZpbml0ZWx5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIG1vZGUgaXMgZGVza3RvcFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59ICAgUmV0dXJuIFwidHJ1ZVwiIGlmIGJvZHkgd2lkdGggaXMgYmlnZ2VyIHRoZW4gXCJtaW4tc2l6ZS5tb2RlMlwiXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaXNEZXNrdG9wTW9kZSgpIHtcbiAgICAgICAgcmV0dXJuICgkKCcuemMtcGFuZWwnKS53aWR0aCgpID49IHRoaXMuZ2V0Q29uZmlnKCdtaW4tc2l6ZS9tb2RlMicpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFcnJvciBjaGVja2luZywgaW4gQUpBWCBvciBlbHNld2hlcmVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBlcnJvckNoZWNrKG1haW5Nc2csIGVycm9yTXNnKSB7XG4gICAgICAgIGlmICghJCgnLnpjLXBvcHVwJykuaGFzQ2xhc3MoJ3pjLXBhbmVsLWVycm9yLWNvbmZpcm0nKSkge1xuXG4gICAgICAgICAgICBpZiAoJCgnLnpjLXBvcHVwJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwJykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xuXG4gICAgICAgICAgICB6Yy5jb25maXJtKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogbWFpbk1zZyxcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBgJHtlcnJvck1zZ30gPGJyPiBQYWdlIHdpbGwgYmUgcmVsb2FkZWQsIG9rP2AsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICd6Yy1wYW5lbC1lcnJvci1jb25maXJtJyxcbiAgICAgICAgICAgICAgICBvazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBnbG9iYWwgdmFyaWFibGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgT2JqZWN0IHBhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGVmICAgRGVmYXVsdCB2YWx1ZVxuICAgICAqIEByZXR1cm4ge21peH0gICAgICAgICBBY3Rpb24gcmVzdWx0XG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0VmFyKGtleSwgZGVmKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC52YXJzLCBrZXkpO1xuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGdsb2JhbCB2YXJpYWJsZSB2YWx1ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBPYmplY3QgcGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkYXRhICBWYXJpYWJsZSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge251bGx9ICAgICAgICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkVmFyKGtleSwgZGF0YSkge1xuICAgICAgICB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwudmFycywga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZ2xvYmFsIGNhY2hlIHZhbHVlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIE9iamVjdCBwYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRhdGEgIENhY2hlIHZhbHVlXG4gICAgICogQHJldHVybiB7bnVsbH0gICAgICAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRDYWNoZShrZXksIGRhdGEpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNhY2hlLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBnbG9iYWwgY2FjaGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgT2JqZWN0IHBhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGVmICAgRGVmYXVsdCB2YWx1ZVxuICAgICAqIEByZXR1cm4ge21peH0gICAgICAgICBBY3Rpb24gcmVzdWx0XG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0Q2FjaGUoa2V5LCBkZWYpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNhY2hlLCBrZXkpO1xuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbGVtZW50IGZyb20gY2FjaGUgb2JqZWN0XG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIE9iamVjdCBwYXRoXG4gICAgICogQHJldHVybiB7bnVsbH0gICAgICAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICByZW1DYWNoZShrZXkpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNhY2hlLCBrZXksIGZhbHNlLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZ2xvYmFsIGNvbmZpZyB2YWx1ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBPYmplY3QgcGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkYXRhICBDb25maWcgdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgICAgICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZENvbmZpZyhrZXksIGRhdGEpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNvbmZpZywga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZ2xvYmFsIGNvbmZpZ1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBPYmplY3QgcGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkZWYgICBEZWZhdWx0IHZhbHVlXG4gICAgICogQHJldHVybiB7bWl4fSAgICAgICAgIEFjdGlvbiByZXN1bHRcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBnZXRDb25maWcoa2V5LCBkZWYpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNvbmZpZywga2V5KTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRlZjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcnZpY2VcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gICBuYW1lICAgICAgIFNlcnZpY2UgbmFtZVxuICAgICAqIEBwYXJhbSB7Y2FsbGFibGV9IGNhbGxiYWNrICAgQ2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICAgICAgIFNlcnZpY2UgaW5zdGFuY2VcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzZXJ2aWNlKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSB8fCB0eXBlb2YgY2FsbGJhY2sgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDYWNoZShgc2VydmljZXMvJHtuYW1lfWAsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuZ2V0Q2FjaGUoYHNlcnZpY2VzLyR7bmFtZX1gLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlcnZpY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmljZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgc2VydmljZSBub3QgZXhpc3QgOiAke25hbWV9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoIGFuIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24gZm9yIG9uZSBvciBtb3JlIGV2ZW50cyB0byB0aGUgc2VsZWN0ZWQgZWxlbWVudHNcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gICBldmVudHMgICAgICAgICAgIE9uZSBvciBtb3JlIHNwYWNlLXNlcGFyYXRlZCBldmVudCB0eXBlcyBhbmQgb3B0aW9uYWwgbmFtZXNwYWNlcywgc3VjaCBhcyBcImNsaWNrXCIgb3IgXCJrZXlkb3duLm15UGx1Z2luXCJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gICBzZWxlY3RvciAgICAgICAgIEEgc2VsZWN0b3Igc3RyaW5nIHRvIGZpbHRlciB0aGUgZGVzY2VuZGFudHMgb2YgdGhlIHNlbGVjdGVkIGVsZW1lbnRzIHRoYXQgdHJpZ2dlciB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0ge2NhbGxhYmxlfSBoYW5kbGVyICAgICAgICAgIEEgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIHRoZSBldmVudCBpcyB0cmlnZ2VyZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59ICBwcmV2ZW50RGVmYXVsdCAgIFRydWUgaWYgXCJwcmV2ZW50RGVmYXVsdFwiIG11c3QgYmUgdXNlZFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIG9uKGV2ZW50cywgc2VsZWN0b3IsIGhhbmRsZXIsIHByZXZlbnREZWZhdWx0ID0gZmFsc2UpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsJykub24oZXZlbnRzLCBzZWxlY3RvciwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJldmVudERlZmF1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoYW5kbGVyKCQoZXZlbnQuY3VycmVudFRhcmdldCksIGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoIGFuIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24gZm9yIG9uZSBvciBtb3JlIGV2ZW50cyB0byB0aGUgc2VsZWN0ZWQgZWxlbWVudHNcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gICBzZWxlY3RvciAgICAgICAgIEEgc2VsZWN0b3Igc3RyaW5nIHRvIGZpbHRlciB0aGUgZGVzY2VuZGFudHMgb2YgdGhlIHNlbGVjdGVkIGVsZW1lbnRzIHRoYXQgdHJpZ2dlciB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0ge2NhbGxhYmxlfSBoYW5kbGVyICAgICAgICAgIEEgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIHRoZSBldmVudCBpcyB0cmlnZ2VyZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59ICBwcmV2ZW50RGVmYXVsdCAgIFRydWUgaWYgXCJwcmV2ZW50RGVmYXVsdFwiIG11c3QgYmUgdXNlZFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNsaWNrKHNlbGVjdG9yLCBoYW5kbGVyLCBwcmV2ZW50RGVmYXVsdCA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5vbignY2xpY2snLCBzZWxlY3RvciwgaGFuZGxlciwgcHJldmVudERlZmF1bHQpO1xuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZS9Nb2RlIDogUGFuZWwgbW9kZSBsaXRlIGJvZHkgc2l6ZVxuICpcbiAqIEBhdXRob3IgIEMuUiA8Y3JAanVuanVsaW5pLmNvbT5cbiAqIEBwYWNrYWdlIHppbWJydWNvZGVcbiAqIEBzaW5jZSAgIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgS2VybmVsIGZyb20gJy4uL2tlcm5lbCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsTW9kZUxpdGVCb2R5U2l6ZSBleHRlbmRzIEtlcm5lbCB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGNvbnN0IHJvID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJpZXNbMF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkTW9kZVNpemUoZW50cmllc1swXS5jb250ZW50UmVjdC53aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJvLm9ic2VydmUoJCgnLnpjLXBhbmVsJykuZ2V0KDApKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgXCJtb2RlIHNpemVcIlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB3aWR0aCAgIFBhbmVsIHdpZHRoXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkTW9kZVNpemUod2lkdGgpIHtcbiAgICAgICAgbGV0IG1vZGUgPSAnbW9kZS0xLSc7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0Q29uZmlnKCdtaW4tc2l6ZS9tb2RlMScpID49IHdpZHRoKSB7XG4gICAgICAgICAgICBtb2RlID0gJ21vZGUtMS0nO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0Q29uZmlnKCdtaW4tc2l6ZS9tb2RlMicpID49IHdpZHRoKSB7XG4gICAgICAgICAgICBtb2RlID0gJ21vZGUtMi0nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kZSA9ICdtb2RlLTMtJztcbiAgICAgICAgfVxuXG4gICAgICAgICQoJy56Yy1wYW5lbCcpLmF0dHIoJ2RhdGEtd2lkdGgnLCBtb2RlICsgd2lkdGgpO1xuXG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9zaXplLWNoYW5nZWQnKTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsIC0gTGl0ZSBtb2RlXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBCb2R5U2l6ZSAgICAgIGZyb20gJy4vbW9kdWxlL21vZGUvcGFuZWwtbGl0ZS1tb2RlLWJvZHktc2l6ZSc7XG5pbXBvcnQgT3B0aW9uSGFuZGxlciBmcm9tICcuL21vZHVsZS9oZWFkZXIvb3B0aW9uLWhhbmRsZXInO1xuaW1wb3J0IFF1aWNrTGlua3MgICAgZnJvbSAnLi9tb2R1bGUvaGVhZGVyL3F1aWNrLWxpbmtzJztcblxuemMubW9kdWxlLnBhbmVsLmFkZE1vZGUoKCQsIHBhbmVsKSA9PiB7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcGFuZWwuY2xvc2VCbG9jaygpOyAgICAgICAgICAvLyBJbml0aWFsaXppbmcgb2YgXCJjbG9zZSBibG9ja1wiXG4gICAgICAgIHBhbmVsLmNvbnRyb2xJbml0KCk7ICAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gb2YgY29udHJvbHNcbiAgICAgICAgcGFuZWwuY29udHJvbEhlbHAoKTsgICAgICAgICAvLyBDb250cm9sIGhlbHAgd2luZG93XG4gICAgICAgIHBhbmVsLnNjcm9sbGJhcigpOyAgICAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gb2Ygc2Nyb2xsIGJhciBpbiBwYW5lbFxuICAgICAgICBwYW5lbC5ub01ldGFTY2FsZUlmTW9iaWxlKCk7IC8vIERpc2FibGUgbWV0YSBzY2FsZSBpZiBtb2JpbGUgZGV2aWNlXG4gICAgICAgIHBhbmVsLmNvbmRpdGlvbigpOyAgICAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gb2YgcGFuZWwgY29uZGl0aW9uIGNoZWNrZXJcbiAgICAgICAgcGFuZWwuaWZDaGFuZ2VkKCk7ICAgICAgICAgICAvLyBDaGVjayBpZiBzb21lIGNoYW5nZXMgd2FzIG1hZGVcbiAgICAgICAgcGFuZWwudG9vbHRpcCgpOyAgICAgICAgICAgICAvLyBJbml0aWFsaXphdGlvbiBvZiB0b29sdGlwXG5cbiAgICAgICAgbmV3IEJvZHlTaXplOyAgICAgICAgICAgICAgICAgLy8gUGFuZWwgYm9keSBzaXplXG4gICAgICAgIGNvbnN0IG9oID0gbmV3IE9wdGlvbkhhbmRsZXI7IC8vIE9wdGlvbnMgaGFuZGxlclxuICAgICAgICBuZXcgUXVpY2tMaW5rczsgICAgICAgICAgICAgICAvLyBJbml0aWFsaXphdGlvbiBvZiBwYW5lbCBidXR0b24gXCJRdWljayBMaW5rc1wiLlxuXG4gICAgICAgIHBhbmVsLmFkZENhY2hlKCdvcHRpb24taGFuZGxlcicsIG9oKTtcblxuICAgICAgICAvLyBBY3RpdmUgc2VjdGlvblxuICAgICAgICBjb25zdCBzZWN0aW9uID0gJCgnLnpjLXBhbmVsIC56Yy1wYW5lbC1jb250cm9sc19fc2VjdGlvbicpO1xuICAgICAgICBwYW5lbC5hZGRDYWNoZSgnbWVudS9jdXJyZW50LXNlY3Rpb24nLCBzZWN0aW9uKTtcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL21lbnUvaXRlbS1jaGFuZ2UtSUNQJywgW3NlY3Rpb25dKTtcblxuICAgICAgICAkKCcuemMtcGFuZWwtdGVtcGxhdGVfX3BhbmVsLWxvYWRpbmcnKS5oaWRlKCk7XG4gICAgICAgICQoJy56Yy1wYW5lbCcpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG5cbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3Nob3ctY29udGVudCcpO1xuICAgIH0sIDEwMCk7XG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIHNhdmUgYnV0dG9uXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHBhbmVsLmRpc2FibGVTYXZlQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICAkKCcuemMtcGFuZWwtc2F2ZS1zdGFydGVyLWJ1dHRvbicpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSkuYWRkQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fZGlzYWJsZWQnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRW5hYmxlIHNhdmUgYnV0dG9uXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHBhbmVsLmVuYWJsZVNhdmVCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgICQoJy56Yy1wYW5lbC1zYXZlLXN0YXJ0ZXItYnV0dG9uJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSkucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fZGlzYWJsZWQnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSByZXNldCBidXR0b25cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcGFuZWwuZGlzYWJsZVJlc2V0QnV0dG9uID0gKCkgPT4ge1xuICAgICAgICAkKCcuemMtcGFuZWwtcmVzZXQtc3RhcnRlci1idXR0b24nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpLmFkZENsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEVuYWJsZSByZXNldCBidXR0b25cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcGFuZWwuZW5hYmxlUmVzZXRCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgICQoJy56Yy1wYW5lbC1yZXNldC1zdGFydGVyLWJ1dHRvbicpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgfTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==