/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Resources/packages/zimbrucode/es6/module/tpl/popup.html":
/*!*********************************************************************!*\
  !*** ./src/Resources/packages/zimbrucode/es6/module/tpl/popup.html ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = " <div id=\"{{id}}\" class=\"zc-popup {{class}}\"> <div class=\"zc-popup__window\"> <header class=\"zc-popup__header\"> <span class=\"zc-popup__title\">{{title}}</span> <i class=\"zc-popup__close zc-icon-clear\"></i> </header> <div class=\"zc-scrollbar zc-popup__overflow-hidden\"> <div class=\"zc-popup__loading\"> <div class=\"zc-loading-spinner zc-popup__loading-spinner\"> <div class=\"zc-loading-spinner__bounce zc-loading-spinner__bounce_mode_1\"></div> <div class=\"zc-loading-spinner__bounce zc-loading-spinner__bounce_mode_2\"></div> <div class=\"zc-loading-spinner__bounce zc-loading-spinner__bounce_mode_3\"></div> </div> </div> <div class=\"zc-popup__content\"></div> </div> </div> </div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/Resources/packages/zimbrucode/es6/tpl/alert.html":
/*!**************************************************************!*\
  !*** ./src/Resources/packages/zimbrucode/es6/tpl/alert.html ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = " <div class=\"zc-alert\"> <div class=\"zc-alert__container\"> <p class=\"zc-alert__text\">{{subject}}</p> </div> <footer class=\"zc-alert__footer\"> <div class=\"zc-alert__center\"> <button class=\"zc-alert__button zc-alert__button_type_ok zc-alert__button_active\" type=\"button\">{{title_ok}}</button> </div> </footer></div> ";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/Resources/packages/zimbrucode/es6/tpl/confirm.html":
/*!****************************************************************!*\
  !*** ./src/Resources/packages/zimbrucode/es6/tpl/confirm.html ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = " <div class=\"zc-confirm\"> <div class=\"zc-confirm__container\"> <p class=\"zc-confirm__text\">{{subject}}</p> </div> <footer class=\"zc-confirm__footer\"> <button class=\"zc-confirm__button zc-confirm__button_type_ok zc-confirm__button_active\" type=\"button\">{{title_ok}}</button> <button class=\"zc-confirm__button zc-confirm__button_type_cancel\" type=\"button\">{{title_cancel}}</button> </footer> </div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/Resources/packages/zimbrucode/es6/tpl/prompt.html":
/*!***************************************************************!*\
  !*** ./src/Resources/packages/zimbrucode/es6/tpl/prompt.html ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = " <div class=\"zc-prompt\"> <div class=\"zc-prompt__container\"> <p class=\"zc-prompt__text\">{{subject}}</p> <input placeholder=\"{{placeholder}}\" value=\"{{default}}\" class=\"zc-prompt__input\"> </div> <footer class=\"zc-prompt__footer\"> <button class=\"zc-prompt__button zc-prompt__button_type_ok zc-prompt__button_active\" type=\"button\">{{title_ok}}</button> <button class=\"zc-prompt__button zc-prompt__button_type_cancel\" type=\"button\">{{title_cancel}}</button> </footer> </div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/Resources/packages/zimbrucode/es6/module/cookie.js":
/*!****************************************************************!*\
  !*** ./src/Resources/packages/zimbrucode/es6/module/cookie.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cookie)
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
 * Script : ZimbruCode/Module : Cookie
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */



class Cookie {

    /**
     * Constructor
     * 
     * @since 1.0.0
     */
    constructor() {
        this.defaults = {};
    }

    /**
     * Extend attributes
     * 
     * @param  {...any} args   Attributes
     * @return {object}        New attributes
     * @since 1.0.0
     */
    __extend(...args) {
        let i = 0, result = {};

        for (; i < args.length; i++) {
            let attributes = args[i];

            for (let key in attributes) {
                result[key] = attributes[key];
            }
        }

        return result;
    }

    /**
     * API
     * 
     * @param {string} key          Cookie name
     * @param {mix}    value        Cookie value
     * @param {object} attributes   Cookie attributes
     * @return {mix}                Action result
     * @since 1.0.0
     */
    __api(key, value, attributes) {
        let result, converter = () => {};

        // Write
        if (arguments.length > 1) {
            attributes = this.__extend({
                path: '/'
            }, this.defaults, attributes);

            if (typeof attributes.expires === 'number') {
                const expires = new Date();
                expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
                attributes.expires = expires;
            }

            try {
                result = zc.parse(value, true);
                if (/^[\{\[]/.test(result)) {
                    value = result;
                }
            } catch (e) {}

            if (!converter.write) {
                value = encodeURIComponent(String(value))
                    .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
            } else {
                value = converter.write(value, key);
            }

            key = encodeURIComponent(String(key));
            key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
            key = key.replace(/[\(\)]/g, escape);

            return (document.cookie = [
                key, '=', value,
                attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
                attributes.path    && '; path=' + attributes.path,
                attributes.domain  && '; domain=' + attributes.domain,
                attributes.secure ? '; secure' : ''
            ].join(''));
        }

        // Read
        if (!key) {
            result = {};
        }

        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling "get()"
        let cookies = document.cookie ? document.cookie.split('; ') : [],
            rdecode = /(%[0-9A-Z]{2})+/g,
            i = 0;

        for (; i < cookies.length; i++) {
            let parts = cookies[i].split('='),
                name = parts[0].replace(rdecode, decodeURIComponent),
                cookie = parts.slice(1).join('=');

            if (cookie.charAt(0) === '"') {
                cookie = cookie.slice(1, -1);
            }

            try {
                cookie = converter.read ?
                    converter.read(cookie, name) : converter(cookie, name) ||
                    cookie.replace(rdecode, decodeURIComponent);

                if (this.json) {
                    try {
                        cookie = JSON.parse(cookie);
                    } catch (e) {}
                }

                if (key === name) {
                    result = cookie;
                    break;
                }

                if (!key) {
                    result[name] = cookie;
                }
            } catch (e) {}
        }

        return result;
    }

    /**
     * Add cookie
     * 
     * @param {string} key          Cookie name
     * @param {mix}    value        Cookie value
     * @param {object} attributes   Cookie attributes
     * @since 1.0.0
     */
    add(key, value, attributes) {
        this.__api(key, value, attributes);
    }

    /**
     * Get cookie
     * 
     * @param {string} key   Cookie name
     * @return {mix}         Cookie data
     * @since 1.0.0
     */
    get(key) {
        return this.__api(key);
    }

    /**
     * Remove cookie item
     * 
     * @param {string} key          Cookie name
     * @param {object} attributes   Cookie attributes
     * @since 1.0.0
     */
    remove(key, attributes) {
        this.__api(key, '', this.__extend(attributes, {
            expires: -1
        }));
    }

    /**
     * Json data
     * 
     * @return {mix}   Cookie data
     * @since 1.0.0
     */
    getJSON() {
        return this.__api.apply({
            json: true
        }, [].slice.call(arguments));
    }
}

/***/ }),

/***/ "./src/Resources/packages/zimbrucode/es6/module/popup.js":
/*!***************************************************************!*\
  !*** ./src/Resources/packages/zimbrucode/es6/module/popup.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopUp)
/* harmony export */ });
/* harmony import */ var _tpl_popup_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tpl/popup.html */ "./src/Resources/packages/zimbrucode/es6/module/tpl/popup.html");

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : ZimbruCode/Module : PopUp
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */





const $ = jQuery;

class PopUp {

    /**
     * Constructor
     * 
     * @since 1.0.0
     */
    constructor() {
        this.id = `zc-popup-${zc.uniqueID()}`;
    }

    /**
     * Add popup
     * 
     * @param {object} customSettings   PopUp custom settings
     * @return {null}                   None
     * @since 1.1.0
     */
    add(customSettings) {
        const defaults = {
            title: 'PopUp Title',
            jsonRequest: {},
            error: (errorMsg) => {
                console.error('ZimbruCode : PopUp');
            },
            before: () => {},
            success: (response) => {},
            afterShowContent: () => {},
            width: '',
            height: '',
            html: '',
            class: ''
        };

        const settings = $.extend({}, defaults, customSettings),
              structure = zc.tpl(_tpl_popup_html__WEBPACK_IMPORTED_MODULE_0__["default"], {
                  id: this.id,
                  class: settings.class,
                  title: settings.title
              });

        $('body').css('overflow', 'hidden');
        $('body').append(structure);

        if (settings.jsonRequest.action !== undefined && settings.jsonRequest.action) {
            this.size(settings.height, settings.width);

            settings.before();
            this.hideContent();

            zc.jsonRequest(settings.jsonRequest.action, settings.jsonRequest.nonce || '', settings.jsonRequest.options || {}).then((response) => {
                if (response.content !== undefined) {
                    this.appendContent(response.content);
                }

                settings.success(response);
                this.showContent();
                settings.afterShowContent(response);
            }).catch((errorMsg) => {
                settings.error(errorMsg);
            });
        } else {
            this.size(settings.height, settings.width);
            this.appendContent(settings.html);
            this.showContent();
            settings.success(settings.html);
        }

        $(`#${this.id}`).on('click', '.zc-popup__close', (event) => {
            event.preventDefault();
            /* Act on the event */

            this.close();
        });

        $(document).on('mousedown touchstart', `#${this.id}`, (event) => {
            const popupWindow = $('.zc-popup__window');

            if (!popupWindow.is(event.target) && popupWindow.has(event.target).length === 0) {
                this.close();
            }
        });
    }

    /**
     * Calc popup window size
     * 
     * @param {integer} height   Window height
     * @param {integer} width    Window width
     * @return {null}            None
     * @since 1.0.0
     */
    size(height, width) {
        height = (typeof height !== 'undefined' || height) ? height : false;
        width  = (typeof width !== 'undefined' || width) ? width : false;

        const priv = {
            calcSize : () => {
                if (!!navigator.userAgent.match(/Trident.*rv\:11\./)) {
                    if (width) {
                        $(`#${this.id} .zc-popup__window`).css({'max-width': `${width}px`, 'width': '100%'});
                    }

                    if (height) {
                        $(`#${this.id} .zc-popup__window`).css({'max-height': `${height}px`, 'height': '100%'});
                    }
                } else {
                    if (width) {
                        $(`#${this.id} .zc-popup__window`).css({'max-width': `${width}px`});
                    }

                    if (height) {
                        $(`#${this.id} .zc-popup__window`).css({'max-height': `${height}px`});
                    }
                }
            }
        };

        priv.calcSize();

        $(window).resize(() => {
            priv.calcSize();
        });
    }

    /**
     * Hide content
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    hideContent() {
        $(`#${this.id} .zc-popup__content`).hide();
        this.showLoading();
    }

    /**
     * Show content
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    showContent() {
        this.hideLoading();
        $(`#${this.id} .zc-popup__window .zc-scrollbar`).removeClass('zc-popup__overflow-hidden');
        $(`#${this.id} .zc-popup__content`).show();
    }

    /**
     * Hide loading
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    hideLoading() {
        $(`#${this.id} .zc-popup__loading`).hide();
    }

    /**
     * Show loading
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    showLoading() {
        $(`#${this.id} .zc-popup__loading`).show();
    }

    /**
     * Erase content
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    remContent() {
        $(`#${this.id} .zc-popup__content`).empty();
    }

    /**
     * Append content
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    appendContent(content) {
        $(`#${this.id} .zc-popup__content`).append(content);
    }

    /**
     * Close
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    close() {
        $(`#${this.id} .zc-popup__window`).addClass('zc-popup__window_close');
        $(`#${this.id} .zc-popup__window`).one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', (event) => {
            $(`#${this.id} `).hide().remove();
            $('body').css('overflow', 'initial');
        });
    }
}

/***/ }),

/***/ "./src/Resources/packages/zimbrucode/es6/module/rest-api.js":
/*!******************************************************************!*\
  !*** ./src/Resources/packages/zimbrucode/es6/module/rest-api.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RestAPI)
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
 * Script : ZimbruCode/Module : RestAPI
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */



const $ = jQuery;

class RestAPI {

    /**
     * Constructor
     * 
     * @param {string} url     Rest URl
     * @param {string} nonce   Nonce
     * @since 1.0.0
     */
    constructor(url, nonce) {
        this.restURL = url;
        this.restNonce = nonce;
    }

    /**
     * Get item
     * 
     * @param {string} path   Rest API path
     * @param {object} data   Action data
     * @return {mix}          Action result
     * @since 1.0.0
     */
    get(path, data = {}) {
        return this.__ajax('GET', path, data);
    }

    /**
     * Create item
     * 
     * @param {string} path   Rest API path
     * @param {object} data   Action data
     * @return {mix}          Action result
     * @since 1.0.0
     */
    create(path, data = {}) {
        return this.__ajax('POST', path, data);
    }

    /**
     * Update item
     * 
     * @param {string} path   Rest API path
     * @param {object} data   Action data
     * @return {mix}          Action result
     * @since 1.0.0
     */
    update(path, data = {}) {
        return this.__ajax('PUT', path, data);
    }

    /**
     * Delete item
     * 
     * @param {string} path   Rest API path
     * @param {object} data   Action data
     * @return {mix}          Action result
     * @since 1.0.0
     */
    delete(path) {
        return this.__ajax('DELETE', path);
    }

    /**
     * Get full path
     * 
     * @param {string} path    RestAPI path
     * @return {string}        Full path
     * @since 1.0.0
     */
    query(path) {
        return this.restURL + path;
    }

    /**
     * Ajax
     * 
     * @param {string} method    Ajax method
     * @param {string} path      RestAPI path
     * @param {object} data      Options to be passed to the server
     * @return {mix}             Action result
     * @since 1.0.0
     */
    __ajax(method = 'GET', path, data = {}) {
        const callbacks = {};

        const options = {
            url: this.restURL + path,
            dataType: 'json',
            method: method,
            data: data,
            headers: {
                'X-WP-Nonce': this.restNonce
            }
        };

        if (method == 'POST' || method == 'PUT') {
            options.processData = false;
            options.data = JSON.stringify(data);
            options.contentType = 'application/json; charset=UTF-8';
        }

        options.error = (jqXHR, textStatus) => {
            if ($.isFunction(callbacks.fail)) {
                callbacks.fail.call(this, jqXHR, textStatus);
            }
        }

        options.success = (response, textStatus, jqXHR) => {
            if ($.isFunction(callbacks.done)) {
                callbacks.done.call(this, response, textStatus, jqXHR);
            }
        }

        const output = zc.ajax(options);

        output.fail = (callback) => {
            callbacks.fail = callback;
            return output;
        };

        output.done = (callback) => {
            callbacks.done = callback;
            return output;
        };

        return output;
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
/*!************************************************************************!*\
  !*** ./src/Resources/packages/zimbrucode/es6/jquery.zimbrucode.es6.js ***!
  \************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/popup */ "./src/Resources/packages/zimbrucode/es6/module/popup.js");
/* harmony import */ var _module_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/cookie */ "./src/Resources/packages/zimbrucode/es6/module/cookie.js");
/* harmony import */ var _module_rest_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/rest-api */ "./src/Resources/packages/zimbrucode/es6/module/rest-api.js");
/* harmony import */ var _tpl_confirm_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tpl/confirm.html */ "./src/Resources/packages/zimbrucode/es6/tpl/confirm.html");
/* harmony import */ var _tpl_prompt_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tpl/prompt.html */ "./src/Resources/packages/zimbrucode/es6/tpl/prompt.html");
/* harmony import */ var _tpl_alert_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tpl/alert.html */ "./src/Resources/packages/zimbrucode/es6/tpl/alert.html");

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : ZimbruCode functions
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */











const $ = jQuery;

class ZimbruCode {

    /**
     * Constructor
     * 
     * @since 1.0.0
     */
    constructor() {
        // Modules objects
        this.module = {};
        
        // Module data
        this.moduleData = {};

        // Global data
        this.global = {};

        // Function : Cookie
        this.cookie = new _module_cookie__WEBPACK_IMPORTED_MODULE_1__["default"];
    }

    /**
     * Add module
     * 
     * @param {string}   name     Module name
     * @param {callable} module   Callback
     * @return {null}             None
     * @since 1.0.0
     */
    addModule(name, module) {
        this.initModuleData(name);
        this.module[name] = module($);
    }

    /**
     * Initialization of module
     * 
     * @param {string} name   Module name
     * @return {null}         None
     * @since 1.0.0
     */
    initModuleData(name) {
        this.moduleData[name] = {};
    }

    /**
     * Add module data
     * 
     * @param {string} name   Module name
     * @param {object} data   Module data
     * @return {null}         None
     * @since 1.0.0
     */
    addModuleData(name, data = {}) {
        this.moduleData[name] = data;
    }

    /**
     * Get module data
     * 
     * @param {string} name   Module name
     * @return {object}       Module data
     * @since 1.0.0
     */
    getModuleData(name) {
        return this.moduleData[name];
    }

    /**
     * Generate unique ID
     * 
     * @return {integer}   Unique ID
     * @since 1.0.0
     */
    uniqueID() {
        return Math.floor(Math.random() * 26) + Date.now();
    }

    /**
     * Replace all occurrences of the search string with the replacement string
     * 
     * @param {array}  search    The value being searched for, otherwise known as the needle
     * @param {array}  replace   The replacement value that replaces found search values
     * @param {string} subject   The string or array being searched and replaced on, otherwise known as the haystack
     * @return {string}          String with replaced values
     * @since 1.1.0
     */
    strReplace(search, replace, subject) {
        let regStr = '';

        search.forEach((el, index) => {
            if (search.length - 1 == index) {
                regStr += el;
            } else {
                regStr += `${el}|`;
            }
        });

        return subject.replace(new RegExp(regStr, 'g'), (match) => {
            let output = '';

            search.forEach((el, index) => {
                if (el == match) {
                    if ($.isFunction(replace[index])) {
                        output = replace[index](match);
                        return false;
                    } else {
                        output = replace[index];
                        return false;
                    }
                }
            });

            return output;
        });
    }

    /**
     * Template handler
     * 
     * @param {string} tpl  Template HTML
     * @param {object} data Template data
     * @since 1.0.0
     */
    tpl(tpl = '', data = {}) {
        if (typeof tpl === 'string' && typeof data === 'object') {
            let search = [];
            let replace = [];

            $.each(data, (key, value) => {
                search.push(`{{${key}}}`);
                replace.push(value);
            });

            return this.strReplace(search, replace, tpl);
        }

        return false;
    }

    /**
     * Deep find and setting
     * 
     * @param {object}  obj      Object data
     * @param {string}  path     Object path
     * @param {mix}     value    Value
     * @param {boolean} remove   "True" if the item needs to be removed
     * @return {mix}             Item value
     * @since 1.1.0
     */
    deepFindAndSetting(obj, path, value, remove = false) {
        let paths = path.split('/'), current = obj, i;

        if (remove === false) {
            if (value !== undefined) {
                for (let i in paths) {
                    if (paths.length - 1 == i) {
                        current[paths[i]] = value;
                    } else {
                        if (current === undefined || current[paths[i]] === undefined) {
                            current[paths[i]] = {};
                            current = current[paths[i]];
                        } else {
                            current = current[paths[i]];
                        }
                    }
                }
            } else {
                paths.forEach(el => {
                    if (current === undefined || current[el] === undefined) {
                        return undefined;
                    } else {
                        current = current[el];
                    }
                });
        
                return current;
            }
        } else {
            for (let i in paths) {
                if (current === undefined || current[paths[i]] === undefined) {
                    return undefined;
                } else {
                    if (paths.length - 1 == i) {
                        delete current[paths[i]];
                    } else {
                        current = current[paths[i]];
                    }
                }
            }
        }
    }

    /**
     * Check if is mobile
     * 
     * @return {boolean}   Result of checking
     * @since 1.0.0
     */
    isMobile() {
        if (/iP(od|hone|ad)/i.test(window.navigator.userAgent)) {
            return true;
        }
        if (/Android/i.test(window.navigator.userAgent)) {
            if (/Mobile/i.test(window.navigator.userAgent)) {
                return true;
            }
        }
        if (/IEMobile/i.test(window.navigator.userAgent)) {
            return true;
        }
        if (/Windows Phone/i.test(window.navigator.userAgent)) {
            return true;
        }
        if (/BlackBerry/i.test(window.navigator.userAgent)) {
            return true;
        }
        if (/BB10/i.test(window.navigator.userAgent)) {
            return true;
        }
        if (window.navigator.appName === "Microsoft Internet Explorer") {
            return document.documentMode >= 8;
        }

        return false;
    }

    /**
     * Round
     * 
     * @param {string} value
     * @param {mix}    exp 
     * @return {string}   Action result
     * @since 1.0.0
     */
    round(value, exp) {
        if (typeof exp === 'undefined' || +exp === 0) {
            return Math.round(value);
        }

        value = +value;
        exp = +exp;
        
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
            return NaN;
        }

        // Shift
        value = value.toString().split('e');
        value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));
        
        // Shift back
        value = value.toString().split('e');

        return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
    }

    /**
     * Resize
     * 
     * @param {callable} callbackWidth    Callback 1
     * @param {callable} callbackHeight   Callback 2
     * @return {null}                     None
     * @since 1.1.0
     */
    resize(callbackWidth, callbackHeight) {
        let windowWidth  = window.innerWidth,
            windowHeight = window.innerHeight;

        $(window).resize(() => {
            if (window.innerWidth != windowWidth) {
                windowWidth = window.innerWidth;

                if ($.isFunction(callbackWidth)) {
                    callbackWidth(windowWidth);
                }
            }

            if (window.innerHeight != windowHeight) {
                windowHeight = window.innerHeight;

                if ($.isFunction(callbackHeight)) {
                    callbackHeight(windowHeight);
                }
            }
        });
    }

    /**
     * Clone an object
     * 
     * @param {object} object   An object that will receive the new properties
     * @return {object}         Cloned object
     * @since 1.0.0
     */
    clone(object) {
        return $.extend(true, {}, object);
    }

    /**
     * Get random string
     * 
     * @param {integer} length   Generated string length
     * @return {string}          Generated string
     * @since 1.0.0
     */
    randomCode(length) {
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
            pass = '';

        for (let x = 0; x < length; x++) {
            let i = Math.floor(Math.random() * 62);
            pass += chars.charAt(i);
        }

        return pass;
    }

    /**
     * Parse data
     * 
     * @param {object}  data        Data object
     * @param {boolean} stringify   If "true" will be "stringify"
     * @return {boolean}            Action result
     * @since 1.0.0
     */
    parse(data, stringify) {
        return (stringify === undefined) ? JSON.parse(data) : JSON.stringify(data);
    }

    /**
     * Check if string format is json
     * 
     * @param {string} str   String
     * @return {boolean}     Result of checking
     * @since 1.0.0
     */
    isJson(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }

        return true;
    }

    /**
     * 
     * @param {string}  haystack   The input string
     * @param {string}  needle
     * @param {boolean} beforeNeedle
     * @return {string|boolean}    Returns the portion of string, or false if needle is not found
     * @since 1.0.0
     */
    strstr(haystack, needle, beforeNeedle) {
        const pos = haystack.indexOf(needle);

        if (pos == -1) {
            return false;
        } else {
            if (beforeNeedle) {
                return haystack.substr(0, pos);
            } else {
                return haystack.slice(pos);
            }
        }
    }

    /**
     * Capitalize first letter
     * 
     * @param {string}  str   The input string
     * @param {boolean} force
     * @return {string}       Action result
     * @since 1.0.0
     */
    ucfirst(str, force) {
        str = force ? str.toLowerCase() : str || '';

        return str.replace(/(\b)([a-zA-Z])/, (firstLetter) => {
            return firstLetter.toUpperCase();
        });
    }

    /**
     * Add or update a query string parameter in URL
     * 
     * @param {object} parameters   Query parameters
     * @param {string} url          URL
     * @return {string}             Action result
     * @since 1.0.0
     */
    addQueryString(parameters = {}, url) {
        if (!url) {
            url = window.location.href;
        }

        const priv = {};
        priv.UQS = (key, value, url) => {
            const re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi");
            let hash;

            if (re.test(url)) {
                if (typeof value !== 'undefined' && value !== null) {
                    return url.replace(re, '$1' + key + "=" + value + '$2$3');
                } else {
                    hash = url.split('#');
                    url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');

                    if (typeof hash[1] !== 'undefined' && hash[1] !== null) {
                        url += '#' + hash[1];
                    }

                    return url;
                }
            } else {
                if (typeof value !== 'undefined' && value !== null) {
                    const separator = url.indexOf('?') !== -1 ? '&' : '?';

                    hash = url.split('#');
                    url = hash[0] + separator + key + '=' + value;

                    if (typeof hash[1] !== 'undefined' && hash[1] !== null) {
                        url += '#' + hash[1];
                    }

                    return url;
                } else {
                    return url;
                }
            }
        };

        $.each(parameters, (key, value) => {
            url = priv.UQS(key, value, url);
        });

        return url;
    }

    /**
     * Remove a query string parameter in URL
     * 
     * @param {object} parameters   Query parameters
     * @param {string} url          URL
     * @return {string}             Action result
     * @since 1.0.0
     */
    removeQueryString(parameters = [], url) {
        const priv = {};

        priv.RQS = (key, url) => {
            let rtn = url.split("?")[0];
            let param;
            let paramsArr = [];
            let queryString = (url.indexOf("?") !== -1) ? url.split("?")[1] : '';

            if (queryString !== '') {
                paramsArr = queryString.split("&");

                for (let i = paramsArr.length - 1; i >= 0; i -= 1) {
                    param = paramsArr[i].split("=")[0];

                    if (param === key) {
                        paramsArr.splice(i, 1);
                    }
                }

                rtn = rtn + "?" + paramsArr.join("&");
            }

            return rtn;
        };

        $.each(parameters, (key, value) => {
            url = priv.RQS(value, url);
        });

        return url;
    }

    /**
     * PopUp
     * 
     * @return {null}  None
     * @since 1.0.0
     */
    popup() {
        return new _module_popup__WEBPACK_IMPORTED_MODULE_0__["default"];
    }

    /**
     * Confirm PopUp
     * 
     * @param {object} customSettings   PopUp custom settings
     * @return {null}                   None
     * @since 1.1.0
     */
    confirm(customSettings) {
        const popup = this.popup();

        const defaults = {
            subject: 'test',
            ok: () => {
                popup.close();
            },
            cancel: () => {
                popup.close();
            },
            title: 'Confirm',
            titleOK: 'OK',
            titleCancel: 'Cancel',
            html: '',
            width: 300,
            height: 200,
            class: ''
        };

        let settings = $.extend({}, defaults, customSettings),
            html = '';

        if (settings.html) {
            html = settings.html;
        } else {
            html = this.tpl(_tpl_confirm_html__WEBPACK_IMPORTED_MODULE_3__["default"], {
                subject: settings.subject,
                title_ok: settings.titleOK,
                title_cancel: settings.titleCancel
            });
        }

        popup.add({
            title: settings.title,
            html: html,
            width: settings.width,
            height: settings.height,
            class: `zc-popup_no-padding zc-popup_type_confirm ${settings.class}`,
            success: () => {
                $('.zc-confirm').on('click', '.zc-confirm__button_type_ok', (event) => {
                    event.preventDefault();
                    /* Act on the event */

                    settings.ok(popup);
                });

                $('.zc-confirm').on('click', '.zc-confirm__button_type_cancel', (event) => {
                    event.preventDefault();
                    /* Act on the event */

                    settings.cancel(popup);
                });
            }
        });
    }

    /**
     * Prompt PopUp
     * 
     * @param {object} customSettings  PopUp custom settings
     * @return {null}                  None
     * @since 1.1.0
     */
    prompt(customSettings) {
        const popup = this.popup();

        const defaults = {
            subject: 'test',
            placeholder: 'Insert your text',
            default: '',
            ok: () => {
                popup.close();
            },
            cancel: () => {
                popup.close();
            },
            title: 'Prompt',
            titleOK: 'OK',
            titleCancel: 'Cancel',
            html: '',
            width: 400,
            height: 200,
            class: ''
        };

        let settings = $.extend({}, defaults, customSettings),
            html = '';

        if (settings.html) {
            html = settings.html;
        } else {
            html = this.tpl(_tpl_prompt_html__WEBPACK_IMPORTED_MODULE_4__["default"], {
                subject: settings.subject,
                placeholder: settings.placeholder,
                default: settings.default,
                title_ok: settings.titleOK,
                title_cancel: settings.titleCancel
            });
        }

        popup.add({
            title: settings.title,
            html: html,
            width: settings.width,
            height: settings.height,
            class: `zc-popup_type_prompt ${settings.class}`,
            success: () => {
                $('.zc-prompt').on('click', '.zc-prompt__button_type_ok', (event) => {
                    event.preventDefault();
                    /* Act on the event */

                    let text = $('.zc-prompt__input').val();

                    if (text) {
                        settings.ok(popup, text);
                    } else {
                        $('.zc-prompt__input').focus();
                    }
                });

                $('.zc-prompt').on('click', '.zc-prompt__button_type_cancel', (event) => {
                    event.preventDefault();
                    /* Act on the event */

                    settings.cancel(popup);
                });
            }
        });
    }

    /**
     * Alert PopUp
     * 
     * @param {object} customSettings  PopUp custom settings
     * @return {null}                  None
     * @since 1.1.0
     */
    alert(customSettings) {
        const popup = this.popup();

        const defaults = {
            subject: 'test',
            ok: () => {
                popup.close();
            },
            title: 'Alert',
            titleOK: 'OK',
            html: '',
            width: 300,
            height: 200,
            class: ''
        };

        let settings = $.extend({}, defaults, customSettings),
            html = '';

        if (settings.html) {
            html = settings.html;
        } else {
            html = this.tpl(_tpl_alert_html__WEBPACK_IMPORTED_MODULE_5__["default"], {
                subject: settings.subject,
                title_ok: settings.titleOK
            });
        }

        popup.add({
            title: settings.title,
            html: html,
            width: settings.width,
            height: settings.height,
            class: `zc-popup_type_alert ${settings.class}`,
            success: () => {
                $('.zc-alert').on('click', '.zc-alert__button_type_ok', (event) => {
                    event.preventDefault();
                    /* Act on the event */

                    settings.ok(popup);
                });
            }
        });
    }

    /**
     * Input range
     * 
     * @param {string} mode   Action mode
     * @param {object} data   General data
     * @since 1.1.0
     */
    inputRange(mode, data = {}) {
        if (mode && data.el !== undefined) {
            const priv = {};

            // Check if there is a line background
            const containerLBClass = data.containerLBClass || '';
            priv.hasLB = data.el.parent().hasClass(containerLBClass);

            // Current value
            priv.currentValue = data.el.val();

            // Track percent
            const min = data.settings.min || 0;
            const max = data.settings.max || 100;

            priv.trackPercent = ((priv.currentValue - min) * 100) / (max - min);

            // Postfix
            priv.postfix = data.settings.postfix || '';

            // Elements
            const leftIndicatorClass    = data.leftIndicatorClass    || '';
            const currentIndicatorClass = data.currentIndicatorClass || '';
            const rightIndicatorClass   = data.rightIndicatorClass   || '';
            const gridContainerClass    = data.gridContainerClass    || '';

            priv.leftIndicator    = (leftIndicatorClass)    ? data.el.parent().find(`.${leftIndicatorClass}`)    : '';
            priv.currentIndicator = (currentIndicatorClass) ? data.el.parent().find(`.${currentIndicatorClass}`) : '';
            priv.rightIndicator   = (rightIndicatorClass)   ? data.el.parent().find(`.${rightIndicatorClass}`)   : '';
            priv.gridContainer    = (gridContainerClass)    ? data.el.parent().find(`.${gridContainerClass}`)    : '';

            // Add track percent
            priv.addTrackPercent = () => {
                if (!priv.hasLB) {
                    data.el.css('background-size', `${priv.trackPercent}% 100%`);
                }
            };

            // Setup indicator
            priv.indicatorCurrent = (changeCurrentValue = false) => {
                const hideFromTo = data.settings.hide_from_to || false;

                if (hideFromTo !== true) {
                    const thumbSize = (priv.hasLB) ? 17 : 16;

                    if (changeCurrentValue === true) {
                        priv.currentIndicator.text(priv.currentValue + priv.postfix);
                    }

                    let direction = 'left';

                    if ($('body').hasClass('rtl')) {
                        direction = 'right';
                    }

                    const currentIndicatorWidth = priv.currentIndicator.outerWidth() || 0;
                    const calcPositionStyle     = `${direction}: calc(${priv.trackPercent}% - ${((currentIndicatorWidth - thumbSize) / 2) + (priv.trackPercent / 100) * thumbSize}px)`; 

                    priv.currentIndicator.attr('style', calcPositionStyle);
                }
            };

            // Show/Hide indicators : left & right
            priv.indicatorsShowHide = () => {
                const hideMinMax = data.settings.hide_min_max || false;

                if (hideMinMax !== true && priv.currentIndicator !== undefined) {
                    const LD = priv.leftIndicator.get(0).getBoundingClientRect();
                    const CD = priv.currentIndicator.get(0).getBoundingClientRect();
                    const RD = priv.rightIndicator.get(0).getBoundingClientRect();

                    if ($('body').hasClass('rtl')) {
                        if (RD.right - 1 > CD.left) {
                            priv.rightIndicator.css('visibility', 'hidden');
                        } else {
                            priv.rightIndicator.css('visibility', 'visible');
                        }

                        if (LD.left + 1 < CD.right) {
                            priv.leftIndicator.css('visibility', 'hidden');
                        } else {
                            priv.leftIndicator.css('visibility', 'visible');
                        }
                    } else {
                        if (LD.right + 1 > CD.left) {
                            priv.leftIndicator.css('visibility', 'hidden');
                        } else {
                            priv.leftIndicator.css('visibility', 'visible');
                        }
            
                        if (RD.left - 1 < CD.right) {
                            priv.rightIndicator.css('visibility', 'hidden');
                        } else {
                            priv.rightIndicator.css('visibility', 'visible');
                        }
                    }
                }
            };

            priv.countDecimals = (value) => {
                if ((value % 1) != 0) {
                    return value.toString().split(".")[1].length;
                }

                return 0;
            };

            // Mode : Initialization
            priv.initMode = () => {
                priv.indicatorCurrent();
                priv.indicatorsShowHide();
            };

            // Mode : Live
            priv.liveMode = () => {
                priv.addTrackPercent();
                priv.indicatorCurrent(true);
                priv.indicatorsShowHide();
            };

            // Mode : Change
            priv.changeMode = () => {
                const hideMinMax = data.settings.hide_min_max || false;
                const showGrid   = data.settings.grid || false;
                const step       = data.settings.step || 1;

                data.el.attr('min', min);
                data.el.attr('max', max);
                data.el.data('settings', data.settings);

                if (hideMinMax === false) {
                    priv.leftIndicator.text(min + priv.postfix);
                    priv.rightIndicator.text(max + priv.postfix);
                }

                if (showGrid === true) {
                    var mark = (max - min) / 4;

                    priv.gridContainer.find('li[data-n=1] > span').text(min);
                    priv.gridContainer.find('li[data-n=2] > span').text(zc.round(mark + min, priv.countDecimals(step)));
                    priv.gridContainer.find('li[data-n=3] > span').text(zc.round(mark * 2 + min, priv.countDecimals(step)));
                    priv.gridContainer.find('li[data-n=4] > span').text(zc.round(mark * 3 + min, priv.countDecimals(step)));
                    priv.gridContainer.find('li[data-n=5] > span').text(max);
                }

                priv.addTrackPercent();
                priv.indicatorCurrent(true);
                priv.indicatorsShowHide();
            };
    
            switch (mode) {
                case 'init':
                    priv.initMode();
                    break;
                case 'live':
                    priv.liveMode();
                    break;
                case 'change':
                    priv.changeMode();
                    break;
            }
        }
    }

     /**
     * Rest API
     * 
     * @param {string} url     WordPress rest API URL
     * @param {string} nonce   WordPress X nonce for RestAPI
     * @since 1.1.0
     */
    restAPI(url, nonce) {
        return new _module_rest_api__WEBPACK_IMPORTED_MODULE_2__["default"](url, nonce);
    }

    /**
     * Event source
     * 
     * @param {string} url        URL of the source
     * @param {object} settings   Event settings
     * @since 1.1.0
     */
    event(url, settings) {
        const urlHandler = new URL(url);

        if (settings.data !== undefined) {
            $.each(settings.data, (key, value) => {
                urlHandler.searchParams.append(key, value);
            });
        }

        const evtSource = new window.EventSource(urlHandler.href);

        if (settings.listener !== undefined) {
            if ($.isFunction(settings.listener)) {
                evtSource.addEventListener('message', (event) => {
                    const response = JSON.parse(event.data);

                    settings.listener(response, evtSource);
                });
            } else if (typeof settings.listener === 'object') {
                $.each(settings.listener, (key, callback) => {
                    evtSource.addEventListener(key, (event) => {
                        const response = JSON.parse(event.data);
    
                        callback(response, evtSource);
                    });
                });
            }
        }

        if (settings.error !== undefined) {
            evtSource.onerror = (error) => {
                settings.error(error, evtSource);
            };
        }
    }

    /**
     * 
     * @param {string} action   AJAX action name
     * @param {string} nonce    AJAX nonce
     * @param {object} options  Options to be passed to the server
     * @return {mix}            Action result
     * @since 1.1.0
     */
    async jsonRequest(action, nonce = '', options = {}) {
        let attempts   = 4;
        const interval = 1000;

        const urlHandler = new URL(ajaxurl, $(location).attr('origin'));
        urlHandler.searchParams.append('action', action);

        if (nonce) {
            urlHandler.searchParams.append('_wpnonce', nonce);
        }

        const sleep = (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        const fetchRetry = async (bodyData, attempt) => {
            try {
                const response = await fetch(urlHandler.href, {
                    method: 'POST',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache',
                    },
                    body: JSON.stringify(bodyData)
                });

                if (!response.ok) {
                    throw `Error - ${response.status} : ${response.statusText}`;
                }

                return response.json();
            } catch (error) {
                if (attempt <= 1) {
                    throw error;
                }

                await sleep(interval);

                return fetchRetry(bodyData, attempt - 1);
            }
        };

        return await fetchRetry(options, attempts);
    }

    /**
     * AJAX
     * 
     * @param {object} customSettings   AJAX custom settings
     * @return {object}                 AJAX instance
     * @since 1.1.0
     */
     ajax(customSettings) {
        const defaults = {
            method: 'post',
            url: ajaxurl,
            data: '',
            before: () => {},
            error: () => {
                console.warn('ZimbruCode : Ajax Error');
            },
            success: (response) => {}
        };

        let checkN = 1;

        const interval = 1000;
        const iterations = 4;

        const settings = $.extend({}, defaults, customSettings);

        const processedSettings = this.clone(settings);

        if ($.isFunction(settings.before)) {
            processedSettings.beforeSend = settings.before;
            delete processedSettings.before;
        }

        processedSettings.success = (response, textStatus, jqXHR) => {
            if (response < 0) {
                if ($.isFunction(settings.error)) {
                    settings.error(jqXHR, textStatus);
                }
            } else {
                if ($.isFunction(settings.success)) {
                    settings.success(response, textStatus, jqXHR);
                }
            }
        };

        processedSettings.error = (jqXHR, textStatus) => {
            if (checkN <= iterations) {
                setTimeout(() => {
                    checkN ++;
                    $.ajax(processedSettings);
                }, interval);
            } else {
                if ($.isFunction(settings.error)) {
                    settings.error(jqXHR, textStatus);
                }
            }
        };

        return $.ajax(processedSettings);
    }
}

// Class initialization : ZimbruCode
window.zc = new ZimbruCode();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2pxdWVyeS56aW1icnVjb2RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSx5QkFBeUIsSUFBSSxzQkFBc0IsT0FBTywyR0FBMkcsT0FBTztBQUM1SztBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDSG5CO0FBQ0Esd0dBQXdHLFNBQVMsdUxBQXVMLFVBQVU7QUFDbFQ7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQ0huQjtBQUNBLDhHQUE4RyxTQUFTLDhKQUE4SixVQUFVLGdHQUFnRyxjQUFjO0FBQzdZO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUNIbkI7QUFDQSwyR0FBMkcsU0FBUyw0QkFBNEIsYUFBYSxhQUFhLFNBQVMsb0xBQW9MLFVBQVUsOEZBQThGLGNBQWM7QUFDN2Q7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUNGbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFRTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixlQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsaUJBQWlCO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLG9CQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxj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bWJydWNvZGUvZXM2L21vZHVsZS90cGwvcG9wdXAuaHRtbCIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi90cGwvYWxlcnQuaHRtbCIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi90cGwvY29uZmlybS5odG1sIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvUmVzb3VyY2VzL3BhY2thZ2VzL3ppbWJydWNvZGUvZXM2L3RwbC9wcm9tcHQuaHRtbCIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi9tb2R1bGUvY29va2llLmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvUmVzb3VyY2VzL3BhY2thZ2VzL3ppbWJydWNvZGUvZXM2L21vZHVsZS9wb3B1cC5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi9tb2R1bGUvcmVzdC1hcGkuanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvUmVzb3VyY2VzL3BhY2thZ2VzL3ppbWJydWNvZGUvZXM2L2pxdWVyeS56aW1icnVjb2RlLmVzNi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCIgPGRpdiBpZD1cXFwie3tpZH19XFxcIiBjbGFzcz1cXFwiemMtcG9wdXAge3tjbGFzc319XFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtcG9wdXBfX3dpbmRvd1xcXCI+IDxoZWFkZXIgY2xhc3M9XFxcInpjLXBvcHVwX19oZWFkZXJcXFwiPiA8c3BhbiBjbGFzcz1cXFwiemMtcG9wdXBfX3RpdGxlXFxcIj57e3RpdGxlfX08L3NwYW4+IDxpIGNsYXNzPVxcXCJ6Yy1wb3B1cF9fY2xvc2UgemMtaWNvbi1jbGVhclxcXCI+PC9pPiA8L2hlYWRlcj4gPGRpdiBjbGFzcz1cXFwiemMtc2Nyb2xsYmFyIHpjLXBvcHVwX19vdmVyZmxvdy1oaWRkZW5cXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wb3B1cF9fbG9hZGluZ1xcXCI+IDxkaXYgY2xhc3M9XFxcInpjLWxvYWRpbmctc3Bpbm5lciB6Yy1wb3B1cF9fbG9hZGluZy1zcGlubmVyXFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2UgemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2VfbW9kZV8xXFxcIj48L2Rpdj4gPGRpdiBjbGFzcz1cXFwiemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2UgemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2VfbW9kZV8yXFxcIj48L2Rpdj4gPGRpdiBjbGFzcz1cXFwiemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2UgemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2VfbW9kZV8zXFxcIj48L2Rpdj4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wb3B1cF9fY29udGVudFxcXCI+PC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIiA8ZGl2IGNsYXNzPVxcXCJ6Yy1hbGVydFxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLWFsZXJ0X19jb250YWluZXJcXFwiPiA8cCBjbGFzcz1cXFwiemMtYWxlcnRfX3RleHRcXFwiPnt7c3ViamVjdH19PC9wPiA8L2Rpdj4gPGZvb3RlciBjbGFzcz1cXFwiemMtYWxlcnRfX2Zvb3RlclxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLWFsZXJ0X19jZW50ZXJcXFwiPiA8YnV0dG9uIGNsYXNzPVxcXCJ6Yy1hbGVydF9fYnV0dG9uIHpjLWFsZXJ0X19idXR0b25fdHlwZV9vayB6Yy1hbGVydF9fYnV0dG9uX2FjdGl2ZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj57e3RpdGxlX29rfX08L2J1dHRvbj4gPC9kaXY+IDwvZm9vdGVyPjwvZGl2PiBcIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiIDxkaXYgY2xhc3M9XFxcInpjLWNvbmZpcm1cXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1jb25maXJtX19jb250YWluZXJcXFwiPiA8cCBjbGFzcz1cXFwiemMtY29uZmlybV9fdGV4dFxcXCI+e3tzdWJqZWN0fX08L3A+IDwvZGl2PiA8Zm9vdGVyIGNsYXNzPVxcXCJ6Yy1jb25maXJtX19mb290ZXJcXFwiPiA8YnV0dG9uIGNsYXNzPVxcXCJ6Yy1jb25maXJtX19idXR0b24gemMtY29uZmlybV9fYnV0dG9uX3R5cGVfb2sgemMtY29uZmlybV9fYnV0dG9uX2FjdGl2ZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj57e3RpdGxlX29rfX08L2J1dHRvbj4gPGJ1dHRvbiBjbGFzcz1cXFwiemMtY29uZmlybV9fYnV0dG9uIHpjLWNvbmZpcm1fX2J1dHRvbl90eXBlX2NhbmNlbFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj57e3RpdGxlX2NhbmNlbH19PC9idXR0b24+IDwvZm9vdGVyPiA8L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiIDxkaXYgY2xhc3M9XFxcInpjLXByb21wdFxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLXByb21wdF9fY29udGFpbmVyXFxcIj4gPHAgY2xhc3M9XFxcInpjLXByb21wdF9fdGV4dFxcXCI+e3tzdWJqZWN0fX08L3A+IDxpbnB1dCBwbGFjZWhvbGRlcj1cXFwie3twbGFjZWhvbGRlcn19XFxcIiB2YWx1ZT1cXFwie3tkZWZhdWx0fX1cXFwiIGNsYXNzPVxcXCJ6Yy1wcm9tcHRfX2lucHV0XFxcIj4gPC9kaXY+IDxmb290ZXIgY2xhc3M9XFxcInpjLXByb21wdF9fZm9vdGVyXFxcIj4gPGJ1dHRvbiBjbGFzcz1cXFwiemMtcHJvbXB0X19idXR0b24gemMtcHJvbXB0X19idXR0b25fdHlwZV9vayB6Yy1wcm9tcHRfX2J1dHRvbl9hY3RpdmVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+e3t0aXRsZV9va319PC9idXR0b24+IDxidXR0b24gY2xhc3M9XFxcInpjLXByb21wdF9fYnV0dG9uIHpjLXByb21wdF9fYnV0dG9uX3R5cGVfY2FuY2VsXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPnt7dGl0bGVfY2FuY2VsfX08L2J1dHRvbj4gPC9mb290ZXI+IDwvZGl2PlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFppbWJydUNvZGUvTW9kdWxlIDogQ29va2llXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb2tpZSB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRlZmF1bHRzID0ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0ZW5kIGF0dHJpYnV0ZXNcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gIHsuLi5hbnl9IGFyZ3MgICBBdHRyaWJ1dGVzXG4gICAgICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgTmV3IGF0dHJpYnV0ZXNcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBfX2V4dGVuZCguLi5hcmdzKSB7XG4gICAgICAgIGxldCBpID0gMCwgcmVzdWx0ID0ge307XG5cbiAgICAgICAgZm9yICg7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0cmlidXRlcyA9IGFyZ3NbaV07XG5cbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFQSVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICAgICAgICAgQ29va2llIG5hbWVcbiAgICAgKiBAcGFyYW0ge21peH0gICAgdmFsdWUgICAgICAgIENvb2tpZSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVzICAgQ29va2llIGF0dHJpYnV0ZXNcbiAgICAgKiBAcmV0dXJuIHttaXh9ICAgICAgICAgICAgICAgIEFjdGlvbiByZXN1bHRcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBfX2FwaShrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGxldCByZXN1bHQsIGNvbnZlcnRlciA9ICgpID0+IHt9O1xuXG4gICAgICAgIC8vIFdyaXRlXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgYXR0cmlidXRlcyA9IHRoaXMuX19leHRlbmQoe1xuICAgICAgICAgICAgICAgIHBhdGg6ICcvJ1xuICAgICAgICAgICAgfSwgdGhpcy5kZWZhdWx0cywgYXR0cmlidXRlcyk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cGlyZXMgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGV4cGlyZXMuc2V0TWlsbGlzZWNvbmRzKGV4cGlyZXMuZ2V0TWlsbGlzZWNvbmRzKCkgKyBhdHRyaWJ1dGVzLmV4cGlyZXMgKiA4NjRlKzUpO1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuZXhwaXJlcyA9IGV4cGlyZXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gemMucGFyc2UodmFsdWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmICgvXltcXHtcXFtdLy50ZXN0KHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgICAgICAgaWYgKCFjb252ZXJ0ZXIud3JpdGUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnwzQXwzQ3wzRXwzRHwyRnwzRnw0MHw1Qnw1RHw1RXw2MHw3Qnw3RHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBjb252ZXJ0ZXIud3JpdGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGtleSA9IGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoa2V5KSk7XG4gICAgICAgICAgICBrZXkgPSBrZXkucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnw1RXw2MHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KTtcbiAgICAgICAgICAgIGtleSA9IGtleS5yZXBsYWNlKC9bXFwoXFwpXS9nLCBlc2NhcGUpO1xuXG4gICAgICAgICAgICByZXR1cm4gKGRvY3VtZW50LmNvb2tpZSA9IFtcbiAgICAgICAgICAgICAgICBrZXksICc9JywgdmFsdWUsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5leHBpcmVzICYmICc7IGV4cGlyZXM9JyArIGF0dHJpYnV0ZXMuZXhwaXJlcy50b1VUQ1N0cmluZygpLCAvLyB1c2UgZXhwaXJlcyBhdHRyaWJ1dGUsIG1heC1hZ2UgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMucGF0aCAgICAmJiAnOyBwYXRoPScgKyBhdHRyaWJ1dGVzLnBhdGgsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5kb21haW4gICYmICc7IGRvbWFpbj0nICsgYXR0cmlidXRlcy5kb21haW4sXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5zZWN1cmUgPyAnOyBzZWN1cmUnIDogJydcbiAgICAgICAgICAgIF0uam9pbignJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVhZFxuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmVzdWx0ID0ge307XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUbyBwcmV2ZW50IHRoZSBmb3IgbG9vcCBpbiB0aGUgZmlyc3QgcGxhY2UgYXNzaWduIGFuIGVtcHR5IGFycmF5XG4gICAgICAgIC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLiBBbHNvIHByZXZlbnRzIG9kZCByZXN1bHQgd2hlblxuICAgICAgICAvLyBjYWxsaW5nIFwiZ2V0KClcIlxuICAgICAgICBsZXQgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZSA/IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKSA6IFtdLFxuICAgICAgICAgICAgcmRlY29kZSA9IC8oJVswLTlBLVpdezJ9KSsvZyxcbiAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBhcnRzID0gY29va2llc1tpXS5zcGxpdCgnPScpLFxuICAgICAgICAgICAgICAgIG5hbWUgPSBwYXJ0c1swXS5yZXBsYWNlKHJkZWNvZGUsIGRlY29kZVVSSUNvbXBvbmVudCksXG4gICAgICAgICAgICAgICAgY29va2llID0gcGFydHMuc2xpY2UoMSkuam9pbignPScpO1xuXG4gICAgICAgICAgICBpZiAoY29va2llLmNoYXJBdCgwKSA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgIGNvb2tpZSA9IGNvb2tpZS5zbGljZSgxLCAtMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29va2llID0gY29udmVydGVyLnJlYWQgP1xuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ZXIucmVhZChjb29raWUsIG5hbWUpIDogY29udmVydGVyKGNvb2tpZSwgbmFtZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgY29va2llLnJlcGxhY2UocmRlY29kZSwgZGVjb2RlVVJJQ29tcG9uZW50KTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmpzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb2tpZSA9IEpTT04ucGFyc2UoY29va2llKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvb2tpZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W25hbWVdID0gY29va2llO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBjb29raWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgICAgICAgIENvb2tpZSBuYW1lXG4gICAgICogQHBhcmFtIHttaXh9ICAgIHZhbHVlICAgICAgICBDb29raWUgdmFsdWVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlcyAgIENvb2tpZSBhdHRyaWJ1dGVzXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkKGtleSwgdmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdGhpcy5fX2FwaShrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY29va2llXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIENvb2tpZSBuYW1lXG4gICAgICogQHJldHVybiB7bWl4fSAgICAgICAgIENvb2tpZSBkYXRhXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2FwaShrZXkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBjb29raWUgaXRlbVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICAgICAgICAgQ29va2llIG5hbWVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlcyAgIENvb2tpZSBhdHRyaWJ1dGVzXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcmVtb3ZlKGtleSwgYXR0cmlidXRlcykge1xuICAgICAgICB0aGlzLl9fYXBpKGtleSwgJycsIHRoaXMuX19leHRlbmQoYXR0cmlidXRlcywge1xuICAgICAgICAgICAgZXhwaXJlczogLTFcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEpzb24gZGF0YVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge21peH0gICBDb29raWUgZGF0YVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGdldEpTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fYXBpLmFwcGx5KHtcbiAgICAgICAgICAgIGpzb246IHRydWVcbiAgICAgICAgfSwgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9XG59IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIHppbWJydWNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBaaW1icnVDb2RlL01vZHVsZSA6IFBvcFVwXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4xLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBUUExfX3BvcHVwIGZyb20gJy4vdHBsL3BvcHVwLmh0bWwnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BVcCB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlkID0gYHpjLXBvcHVwLSR7emMudW5pcXVlSUQoKX1gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBwb3B1cFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjdXN0b21TZXR0aW5ncyAgIFBvcFVwIGN1c3RvbSBzZXR0aW5nc1xuICAgICAqIEByZXR1cm4ge251bGx9ICAgICAgICAgICAgICAgICAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4xLjBcbiAgICAgKi9cbiAgICBhZGQoY3VzdG9tU2V0dGluZ3MpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcFVwIFRpdGxlJyxcbiAgICAgICAgICAgIGpzb25SZXF1ZXN0OiB7fSxcbiAgICAgICAgICAgIGVycm9yOiAoZXJyb3JNc2cpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdaaW1icnVDb2RlIDogUG9wVXAnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZWZvcmU6ICgpID0+IHt9LFxuICAgICAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7fSxcbiAgICAgICAgICAgIGFmdGVyU2hvd0NvbnRlbnQ6ICgpID0+IHt9LFxuICAgICAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnJyxcbiAgICAgICAgICAgIGh0bWw6ICcnLFxuICAgICAgICAgICAgY2xhc3M6ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIGN1c3RvbVNldHRpbmdzKSxcbiAgICAgICAgICAgICAgc3RydWN0dXJlID0gemMudHBsKFRQTF9fcG9wdXAsIHtcbiAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IHNldHRpbmdzLmNsYXNzLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IHNldHRpbmdzLnRpdGxlXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICAgICAkKCdib2R5JykuYXBwZW5kKHN0cnVjdHVyZSk7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLmpzb25SZXF1ZXN0LmFjdGlvbiAhPT0gdW5kZWZpbmVkICYmIHNldHRpbmdzLmpzb25SZXF1ZXN0LmFjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zaXplKHNldHRpbmdzLmhlaWdodCwgc2V0dGluZ3Mud2lkdGgpO1xuXG4gICAgICAgICAgICBzZXR0aW5ncy5iZWZvcmUoKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZUNvbnRlbnQoKTtcblxuICAgICAgICAgICAgemMuanNvblJlcXVlc3Qoc2V0dGluZ3MuanNvblJlcXVlc3QuYWN0aW9uLCBzZXR0aW5ncy5qc29uUmVxdWVzdC5ub25jZSB8fCAnJywgc2V0dGluZ3MuanNvblJlcXVlc3Qub3B0aW9ucyB8fCB7fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuY29udGVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ29udGVudChyZXNwb25zZS5jb250ZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5zdWNjZXNzKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3MuYWZ0ZXJTaG93Q29udGVudChyZXNwb25zZSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3JNc2cpID0+IHtcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5lcnJvcihlcnJvck1zZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2l6ZShzZXR0aW5ncy5oZWlnaHQsIHNldHRpbmdzLndpZHRoKTtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ29udGVudChzZXR0aW5ncy5odG1sKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcbiAgICAgICAgICAgIHNldHRpbmdzLnN1Y2Nlc3Moc2V0dGluZ3MuaHRtbCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKGAjJHt0aGlzLmlkfWApLm9uKCdjbGljaycsICcuemMtcG9wdXBfX2Nsb3NlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZWRvd24gdG91Y2hzdGFydCcsIGAjJHt0aGlzLmlkfWAsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9wdXBXaW5kb3cgPSAkKCcuemMtcG9wdXBfX3dpbmRvdycpO1xuXG4gICAgICAgICAgICBpZiAoIXBvcHVwV2luZG93LmlzKGV2ZW50LnRhcmdldCkgJiYgcG9wdXBXaW5kb3cuaGFzKGV2ZW50LnRhcmdldCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjIHBvcHVwIHdpbmRvdyBzaXplXG4gICAgICogXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBoZWlnaHQgICBXaW5kb3cgaGVpZ2h0XG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSB3aWR0aCAgICBXaW5kb3cgd2lkdGhcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgICAgICAgICAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzaXplKGhlaWdodCwgd2lkdGgpIHtcbiAgICAgICAgaGVpZ2h0ID0gKHR5cGVvZiBoZWlnaHQgIT09ICd1bmRlZmluZWQnIHx8IGhlaWdodCkgPyBoZWlnaHQgOiBmYWxzZTtcbiAgICAgICAgd2lkdGggID0gKHR5cGVvZiB3aWR0aCAhPT0gJ3VuZGVmaW5lZCcgfHwgd2lkdGgpID8gd2lkdGggOiBmYWxzZTtcblxuICAgICAgICBjb25zdCBwcml2ID0ge1xuICAgICAgICAgICAgY2FsY1NpemUgOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudC4qcnZcXDoxMVxcLi8pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX193aW5kb3dgKS5jc3MoeydtYXgtd2lkdGgnOiBgJHt3aWR0aH1weGAsICd3aWR0aCc6ICcxMDAlJ30pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX193aW5kb3dgKS5jc3MoeydtYXgtaGVpZ2h0JzogYCR7aGVpZ2h0fXB4YCwgJ2hlaWdodCc6ICcxMDAlJ30pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX3dpbmRvd2ApLmNzcyh7J21heC13aWR0aCc6IGAke3dpZHRofXB4YH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX193aW5kb3dgKS5jc3MoeydtYXgtaGVpZ2h0JzogYCR7aGVpZ2h0fXB4YH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHByaXYuY2FsY1NpemUoKTtcblxuICAgICAgICAkKHdpbmRvdykucmVzaXplKCgpID0+IHtcbiAgICAgICAgICAgIHByaXYuY2FsY1NpemUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBjb250ZW50XG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaGlkZUNvbnRlbnQoKSB7XG4gICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fY29udGVudGApLmhpZGUoKTtcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgY29udGVudFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHNob3dDb250ZW50KCkge1xuICAgICAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fd2luZG93IC56Yy1zY3JvbGxiYXJgKS5yZW1vdmVDbGFzcygnemMtcG9wdXBfX292ZXJmbG93LWhpZGRlbicpO1xuICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX2NvbnRlbnRgKS5zaG93KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBsb2FkaW5nXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaGlkZUxvYWRpbmcoKSB7XG4gICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fbG9hZGluZ2ApLmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IGxvYWRpbmdcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzaG93TG9hZGluZygpIHtcbiAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX19sb2FkaW5nYCkuc2hvdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVyYXNlIGNvbnRlbnRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICByZW1Db250ZW50KCkge1xuICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX2NvbnRlbnRgKS5lbXB0eSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGVuZCBjb250ZW50XG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYXBwZW5kQ29udGVudChjb250ZW50KSB7XG4gICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fY29udGVudGApLmFwcGVuZChjb250ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNsb3NlKCkge1xuICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX3dpbmRvd2ApLmFkZENsYXNzKCd6Yy1wb3B1cF9fd2luZG93X2Nsb3NlJyk7XG4gICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fd2luZG93YCkub25lKCdhbmltYXRpb25lbmQgd2Via2l0QW5pbWF0aW9uRW5kIG9BbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICQoYCMke3RoaXMuaWR9IGApLmhpZGUoKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2luaXRpYWwnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogWmltYnJ1Q29kZS9Nb2R1bGUgOiBSZXN0QVBJXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3RBUEkge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsICAgICBSZXN0IFVSbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBub25jZSAgIE5vbmNlXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodXJsLCBub25jZSkge1xuICAgICAgICB0aGlzLnJlc3RVUkwgPSB1cmw7XG4gICAgICAgIHRoaXMucmVzdE5vbmNlID0gbm9uY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGl0ZW1cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgIFJlc3QgQVBJIHBhdGhcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAgIEFjdGlvbiBkYXRhXG4gICAgICogQHJldHVybiB7bWl4fSAgICAgICAgICBBY3Rpb24gcmVzdWx0XG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0KHBhdGgsIGRhdGEgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2FqYXgoJ0dFVCcsIHBhdGgsIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBpdGVtXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggICBSZXN0IEFQSSBwYXRoXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgICBBY3Rpb24gZGF0YVxuICAgICAqIEByZXR1cm4ge21peH0gICAgICAgICAgQWN0aW9uIHJlc3VsdFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNyZWF0ZShwYXRoLCBkYXRhID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19hamF4KCdQT1NUJywgcGF0aCwgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGl0ZW1cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgIFJlc3QgQVBJIHBhdGhcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAgIEFjdGlvbiBkYXRhXG4gICAgICogQHJldHVybiB7bWl4fSAgICAgICAgICBBY3Rpb24gcmVzdWx0XG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgdXBkYXRlKHBhdGgsIGRhdGEgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2FqYXgoJ1BVVCcsIHBhdGgsIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBpdGVtXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggICBSZXN0IEFQSSBwYXRoXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgICBBY3Rpb24gZGF0YVxuICAgICAqIEByZXR1cm4ge21peH0gICAgICAgICAgQWN0aW9uIHJlc3VsdFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGRlbGV0ZShwYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fYWpheCgnREVMRVRFJywgcGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGZ1bGwgcGF0aFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoICAgIFJlc3RBUEkgcGF0aFxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gICAgICAgIEZ1bGwgcGF0aFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHF1ZXJ5KHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdFVSTCArIHBhdGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWpheFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgICAgQWpheCBtZXRob2RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgICAgIFJlc3RBUEkgcGF0aFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhICAgICAgT3B0aW9ucyB0byBiZSBwYXNzZWQgdG8gdGhlIHNlcnZlclxuICAgICAqIEByZXR1cm4ge21peH0gICAgICAgICAgICAgQWN0aW9uIHJlc3VsdFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIF9fYWpheChtZXRob2QgPSAnR0VUJywgcGF0aCwgZGF0YSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IHt9O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB1cmw6IHRoaXMucmVzdFVSTCArIHBhdGgsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdYLVdQLU5vbmNlJzogdGhpcy5yZXN0Tm9uY2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobWV0aG9kID09ICdQT1NUJyB8fCBtZXRob2QgPT0gJ1BVVCcpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucHJvY2Vzc0RhdGEgPSBmYWxzZTtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgICAgb3B0aW9ucy5jb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JztcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMuZXJyb3IgPSAoanFYSFIsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oY2FsbGJhY2tzLmZhaWwpKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLmZhaWwuY2FsbCh0aGlzLCBqcVhIUiwgdGV4dFN0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLnN1Y2Nlc3MgPSAocmVzcG9uc2UsIHRleHRTdGF0dXMsIGpxWEhSKSA9PiB7XG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKGNhbGxiYWNrcy5kb25lKSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5kb25lLmNhbGwodGhpcywgcmVzcG9uc2UsIHRleHRTdGF0dXMsIGpxWEhSKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IHpjLmFqYXgob3B0aW9ucyk7XG5cbiAgICAgICAgb3V0cHV0LmZhaWwgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5mYWlsID0gY2FsbGJhY2s7XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9O1xuXG4gICAgICAgIG91dHB1dC5kb25lID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFja3MuZG9uZSA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogWmltYnJ1Q29kZSBmdW5jdGlvbnNcbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjEuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFBvcFVwICAgZnJvbSAnLi9tb2R1bGUvcG9wdXAnO1xuaW1wb3J0IENvb2tpZSAgZnJvbSAnLi9tb2R1bGUvY29va2llJztcbmltcG9ydCBSZXN0QVBJIGZyb20gJy4vbW9kdWxlL3Jlc3QtYXBpJztcblxuaW1wb3J0IFRQTF9fY29uZmlybSBmcm9tICcuL3RwbC9jb25maXJtLmh0bWwnO1xuaW1wb3J0IFRQTF9fcHJvbXB0ICBmcm9tICcuL3RwbC9wcm9tcHQuaHRtbCc7XG5pbXBvcnQgVFBMX19hbGVydCAgIGZyb20gJy4vdHBsL2FsZXJ0Lmh0bWwnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5jbGFzcyBaaW1icnVDb2RlIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIE1vZHVsZXMgb2JqZWN0c1xuICAgICAgICB0aGlzLm1vZHVsZSA9IHt9O1xuICAgICAgICBcbiAgICAgICAgLy8gTW9kdWxlIGRhdGFcbiAgICAgICAgdGhpcy5tb2R1bGVEYXRhID0ge307XG5cbiAgICAgICAgLy8gR2xvYmFsIGRhdGFcbiAgICAgICAgdGhpcy5nbG9iYWwgPSB7fTtcblxuICAgICAgICAvLyBGdW5jdGlvbiA6IENvb2tpZVxuICAgICAgICB0aGlzLmNvb2tpZSA9IG5ldyBDb29raWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIG1vZHVsZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgIG5hbWUgICAgIE1vZHVsZSBuYW1lXG4gICAgICogQHBhcmFtIHtjYWxsYWJsZX0gbW9kdWxlICAgQ2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgICAgICAgICAgICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkTW9kdWxlKG5hbWUsIG1vZHVsZSkge1xuICAgICAgICB0aGlzLmluaXRNb2R1bGVEYXRhKG5hbWUpO1xuICAgICAgICB0aGlzLm1vZHVsZVtuYW1lXSA9IG1vZHVsZSgkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXphdGlvbiBvZiBtb2R1bGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgIE1vZHVsZSBuYW1lXG4gICAgICogQHJldHVybiB7bnVsbH0gICAgICAgICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaW5pdE1vZHVsZURhdGEobmFtZSkge1xuICAgICAgICB0aGlzLm1vZHVsZURhdGFbbmFtZV0gPSB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgbW9kdWxlIGRhdGFcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgIE1vZHVsZSBuYW1lXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgICBNb2R1bGUgZGF0YVxuICAgICAqIEByZXR1cm4ge251bGx9ICAgICAgICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZE1vZHVsZURhdGEobmFtZSwgZGF0YSA9IHt9KSB7XG4gICAgICAgIHRoaXMubW9kdWxlRGF0YVtuYW1lXSA9IGRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IG1vZHVsZSBkYXRhXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgICBNb2R1bGUgbmFtZVxuICAgICAqIEByZXR1cm4ge29iamVjdH0gICAgICAgTW9kdWxlIGRhdGFcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBnZXRNb2R1bGVEYXRhKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlRGF0YVtuYW1lXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSB1bmlxdWUgSURcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtpbnRlZ2VyfSAgIFVuaXF1ZSBJRFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHVuaXF1ZUlEKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjYpICsgRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIGFsbCBvY2N1cnJlbmNlcyBvZiB0aGUgc2VhcmNoIHN0cmluZyB3aXRoIHRoZSByZXBsYWNlbWVudCBzdHJpbmdcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2FycmF5fSAgc2VhcmNoICAgIFRoZSB2YWx1ZSBiZWluZyBzZWFyY2hlZCBmb3IsIG90aGVyd2lzZSBrbm93biBhcyB0aGUgbmVlZGxlXG4gICAgICogQHBhcmFtIHthcnJheX0gIHJlcGxhY2UgICBUaGUgcmVwbGFjZW1lbnQgdmFsdWUgdGhhdCByZXBsYWNlcyBmb3VuZCBzZWFyY2ggdmFsdWVzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN1YmplY3QgICBUaGUgc3RyaW5nIG9yIGFycmF5IGJlaW5nIHNlYXJjaGVkIGFuZCByZXBsYWNlZCBvbiwgb3RoZXJ3aXNlIGtub3duIGFzIHRoZSBoYXlzdGFja1xuICAgICAqIEByZXR1cm4ge3N0cmluZ30gICAgICAgICAgU3RyaW5nIHdpdGggcmVwbGFjZWQgdmFsdWVzXG4gICAgICogQHNpbmNlIDEuMS4wXG4gICAgICovXG4gICAgc3RyUmVwbGFjZShzZWFyY2gsIHJlcGxhY2UsIHN1YmplY3QpIHtcbiAgICAgICAgbGV0IHJlZ1N0ciA9ICcnO1xuXG4gICAgICAgIHNlYXJjaC5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoIC0gMSA9PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJlZ1N0ciArPSBlbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVnU3RyICs9IGAke2VsfXxgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3ViamVjdC5yZXBsYWNlKG5ldyBSZWdFeHAocmVnU3RyLCAnZycpLCAobWF0Y2gpID0+IHtcbiAgICAgICAgICAgIGxldCBvdXRwdXQgPSAnJztcblxuICAgICAgICAgICAgc2VhcmNoLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbCA9PSBtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHJlcGxhY2VbaW5kZXhdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gcmVwbGFjZVtpbmRleF0obWF0Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gcmVwbGFjZVtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVtcGxhdGUgaGFuZGxlclxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0cGwgIFRlbXBsYXRlIEhUTUxcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBUZW1wbGF0ZSBkYXRhXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgdHBsKHRwbCA9ICcnLCBkYXRhID0ge30pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0cGwgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgbGV0IHNlYXJjaCA9IFtdO1xuICAgICAgICAgICAgbGV0IHJlcGxhY2UgPSBbXTtcblxuICAgICAgICAgICAgJC5lYWNoKGRhdGEsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VhcmNoLnB1c2goYHt7JHtrZXl9fX1gKTtcbiAgICAgICAgICAgICAgICByZXBsYWNlLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0clJlcGxhY2Uoc2VhcmNoLCByZXBsYWNlLCB0cGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZXAgZmluZCBhbmQgc2V0dGluZ1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSAgb2JqICAgICAgT2JqZWN0IGRhdGFcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIHBhdGggICAgIE9iamVjdCBwYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgICB2YWx1ZSAgICBWYWx1ZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVtb3ZlICAgXCJUcnVlXCIgaWYgdGhlIGl0ZW0gbmVlZHMgdG8gYmUgcmVtb3ZlZFxuICAgICAqIEByZXR1cm4ge21peH0gICAgICAgICAgICAgSXRlbSB2YWx1ZVxuICAgICAqIEBzaW5jZSAxLjEuMFxuICAgICAqL1xuICAgIGRlZXBGaW5kQW5kU2V0dGluZyhvYmosIHBhdGgsIHZhbHVlLCByZW1vdmUgPSBmYWxzZSkge1xuICAgICAgICBsZXQgcGF0aHMgPSBwYXRoLnNwbGl0KCcvJyksIGN1cnJlbnQgPSBvYmosIGk7XG5cbiAgICAgICAgaWYgKHJlbW92ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBwYXRocykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGF0aHMubGVuZ3RoIC0gMSA9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50W3BhdGhzW2ldXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IHVuZGVmaW5lZCB8fCBjdXJyZW50W3BhdGhzW2ldXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFtwYXRoc1tpXV0gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudFtwYXRoc1tpXV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhdGhzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGF0aHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50ID09PSB1bmRlZmluZWQgfHwgY3VycmVudFtlbF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W2VsXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gcGF0aHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudCA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnRbcGF0aHNbaV1dID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGF0aHMubGVuZ3RoIC0gMSA9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY3VycmVudFtwYXRoc1tpXV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudFtwYXRoc1tpXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpcyBtb2JpbGVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAgIFJlc3VsdCBvZiBjaGVja2luZ1xuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGlzTW9iaWxlKCkge1xuICAgICAgICBpZiAoL2lQKG9kfGhvbmV8YWQpL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvQW5kcm9pZC9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICBpZiAoL01vYmlsZS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9JRU1vYmlsZS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL1dpbmRvd3MgUGhvbmUvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9CbGFja0JlcnJ5L2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvQkIxMC9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93Lm5hdmlnYXRvci5hcHBOYW1lID09PSBcIk1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlclwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRNb2RlID49IDg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUm91bmRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZXhwIFxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gICBBY3Rpb24gcmVzdWx0XG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcm91bmQodmFsdWUsIGV4cCkge1xuICAgICAgICBpZiAodHlwZW9mIGV4cCA9PT0gJ3VuZGVmaW5lZCcgfHwgK2V4cCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgPSArdmFsdWU7XG4gICAgICAgIGV4cCA9ICtleHA7XG4gICAgICAgIFxuICAgICAgICBpZiAoaXNOYU4odmFsdWUpIHx8ICEodHlwZW9mIGV4cCA9PT0gJ251bWJlcicgJiYgZXhwICUgMSA9PT0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaGlmdFxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJ2UnKTtcbiAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKCsodmFsdWVbMF0gKyAnZScgKyAodmFsdWVbMV0gPyAoK3ZhbHVlWzFdICsgZXhwKSA6IGV4cCkpKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNoaWZ0IGJhY2tcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KCdlJyk7XG5cbiAgICAgICAgcmV0dXJuICsodmFsdWVbMF0gKyAnZScgKyAodmFsdWVbMV0gPyAoK3ZhbHVlWzFdIC0gZXhwKSA6IC1leHApKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNpemVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2NhbGxhYmxlfSBjYWxsYmFja1dpZHRoICAgIENhbGxiYWNrIDFcbiAgICAgKiBAcGFyYW0ge2NhbGxhYmxlfSBjYWxsYmFja0hlaWdodCAgIENhbGxiYWNrIDJcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgICAgICAgICAgICAgICAgICAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4xLjBcbiAgICAgKi9cbiAgICByZXNpemUoY2FsbGJhY2tXaWR0aCwgY2FsbGJhY2tIZWlnaHQpIHtcbiAgICAgICAgbGV0IHdpbmRvd1dpZHRoICA9IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgICAgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgICQod2luZG93KS5yZXNpemUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoICE9IHdpbmRvd1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgICAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oY2FsbGJhY2tXaWR0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tXaWR0aCh3aW5kb3dXaWR0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ICE9IHdpbmRvd0hlaWdodCkge1xuICAgICAgICAgICAgICAgIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oY2FsbGJhY2tIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrSGVpZ2h0KHdpbmRvd0hlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9uZSBhbiBvYmplY3RcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0ICAgQW4gb2JqZWN0IHRoYXQgd2lsbCByZWNlaXZlIHRoZSBuZXcgcHJvcGVydGllc1xuICAgICAqIEByZXR1cm4ge29iamVjdH0gICAgICAgICBDbG9uZWQgb2JqZWN0XG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY2xvbmUob2JqZWN0KSB7XG4gICAgICAgIHJldHVybiAkLmV4dGVuZCh0cnVlLCB7fSwgb2JqZWN0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgcmFuZG9tIHN0cmluZ1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbGVuZ3RoICAgR2VuZXJhdGVkIHN0cmluZyBsZW5ndGhcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgICAgIEdlbmVyYXRlZCBzdHJpbmdcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICByYW5kb21Db2RlKGxlbmd0aCkge1xuICAgICAgICBsZXQgY2hhcnMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWjEyMzQ1Njc4OTAnLFxuICAgICAgICAgICAgcGFzcyA9ICcnO1xuXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIGxldCBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNjIpO1xuICAgICAgICAgICAgcGFzcyArPSBjaGFycy5jaGFyQXQoaSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFzcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSBkYXRhXG4gICAgICogXG4gICAgICogQHBhcmFtIHtvYmplY3R9ICBkYXRhICAgICAgICBEYXRhIG9iamVjdFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RyaW5naWZ5ICAgSWYgXCJ0cnVlXCIgd2lsbCBiZSBcInN0cmluZ2lmeVwiXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gICAgICAgICAgICBBY3Rpb24gcmVzdWx0XG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcGFyc2UoZGF0YSwgc3RyaW5naWZ5KSB7XG4gICAgICAgIHJldHVybiAoc3RyaW5naWZ5ID09PSB1bmRlZmluZWQpID8gSlNPTi5wYXJzZShkYXRhKSA6IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHN0cmluZyBmb3JtYXQgaXMganNvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgICBTdHJpbmdcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAgICAgUmVzdWx0IG9mIGNoZWNraW5nXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaXNKc29uKHN0cikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgSlNPTi5wYXJzZShzdHIpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIGhheXN0YWNrICAgVGhlIGlucHV0IHN0cmluZ1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgbmVlZGxlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBiZWZvcmVOZWVkbGVcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd8Ym9vbGVhbn0gICAgUmV0dXJucyB0aGUgcG9ydGlvbiBvZiBzdHJpbmcsIG9yIGZhbHNlIGlmIG5lZWRsZSBpcyBub3QgZm91bmRcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzdHJzdHIoaGF5c3RhY2ssIG5lZWRsZSwgYmVmb3JlTmVlZGxlKSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IGhheXN0YWNrLmluZGV4T2YobmVlZGxlKTtcblxuICAgICAgICBpZiAocG9zID09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYmVmb3JlTmVlZGxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhheXN0YWNrLnN1YnN0cigwLCBwb3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGF5c3RhY2suc2xpY2UocG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhcGl0YWxpemUgZmlyc3QgbGV0dGVyXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICBzdHIgICBUaGUgaW5wdXQgc3RyaW5nXG4gICAgICogQHBhcmFtIHtib29sZWFufSBmb3JjZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gICAgICAgQWN0aW9uIHJlc3VsdFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHVjZmlyc3Qoc3RyLCBmb3JjZSkge1xuICAgICAgICBzdHIgPSBmb3JjZSA/IHN0ci50b0xvd2VyQ2FzZSgpIDogc3RyIHx8ICcnO1xuXG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFxcYikoW2EtekEtWl0pLywgKGZpcnN0TGV0dGVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3RMZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIG9yIHVwZGF0ZSBhIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgaW4gVVJMXG4gICAgICogXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtZXRlcnMgICBRdWVyeSBwYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgICAgICAgICBVUkxcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgICAgICAgIEFjdGlvbiByZXN1bHRcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRRdWVyeVN0cmluZyhwYXJhbWV0ZXJzID0ge30sIHVybCkge1xuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcml2ID0ge307XG4gICAgICAgIHByaXYuVVFTID0gKGtleSwgdmFsdWUsIHVybCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKFwiKFs/Jl0pXCIgKyBrZXkgKyBcIj0uKj8oJnwjfCQpKC4qKVwiLCBcImdpXCIpO1xuICAgICAgICAgICAgbGV0IGhhc2g7XG5cbiAgICAgICAgICAgIGlmIChyZS50ZXN0KHVybCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXJsLnJlcGxhY2UocmUsICckMScgKyBrZXkgKyBcIj1cIiArIHZhbHVlICsgJyQyJDMnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBoYXNoID0gdXJsLnNwbGl0KCcjJyk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IGhhc2hbMF0ucmVwbGFjZShyZSwgJyQxJDMnKS5yZXBsYWNlKC8oJnxcXD8pJC8sICcnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGhhc2hbMV0gIT09ICd1bmRlZmluZWQnICYmIGhhc2hbMV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCArPSAnIycgKyBoYXNoWzFdO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcGFyYXRvciA9IHVybC5pbmRleE9mKCc/JykgIT09IC0xID8gJyYnIDogJz8nO1xuXG4gICAgICAgICAgICAgICAgICAgIGhhc2ggPSB1cmwuc3BsaXQoJyMnKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gaGFzaFswXSArIHNlcGFyYXRvciArIGtleSArICc9JyArIHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaGFzaFsxXSAhPT0gJ3VuZGVmaW5lZCcgJiYgaGFzaFsxXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcjJyArIGhhc2hbMV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgICQuZWFjaChwYXJhbWV0ZXJzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdXJsID0gcHJpdi5VUVMoa2V5LCB2YWx1ZSwgdXJsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyIGluIFVSTFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbWV0ZXJzICAgUXVlcnkgcGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgICAgICAgICAgVVJMXG4gICAgICogQHJldHVybiB7c3RyaW5nfSAgICAgICAgICAgICBBY3Rpb24gcmVzdWx0XG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcmVtb3ZlUXVlcnlTdHJpbmcocGFyYW1ldGVycyA9IFtdLCB1cmwpIHtcbiAgICAgICAgY29uc3QgcHJpdiA9IHt9O1xuXG4gICAgICAgIHByaXYuUlFTID0gKGtleSwgdXJsKSA9PiB7XG4gICAgICAgICAgICBsZXQgcnRuID0gdXJsLnNwbGl0KFwiP1wiKVswXTtcbiAgICAgICAgICAgIGxldCBwYXJhbTtcbiAgICAgICAgICAgIGxldCBwYXJhbXNBcnIgPSBbXTtcbiAgICAgICAgICAgIGxldCBxdWVyeVN0cmluZyA9ICh1cmwuaW5kZXhPZihcIj9cIikgIT09IC0xKSA/IHVybC5zcGxpdChcIj9cIilbMV0gOiAnJztcblxuICAgICAgICAgICAgaWYgKHF1ZXJ5U3RyaW5nICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHBhcmFtc0FyciA9IHF1ZXJ5U3RyaW5nLnNwbGl0KFwiJlwiKTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBwYXJhbXNBcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW0gPSBwYXJhbXNBcnJbaV0uc3BsaXQoXCI9XCIpWzBdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNBcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcnRuID0gcnRuICsgXCI/XCIgKyBwYXJhbXNBcnIuam9pbihcIiZcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBydG47XG4gICAgICAgIH07XG5cbiAgICAgICAgJC5lYWNoKHBhcmFtZXRlcnMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB1cmwgPSBwcml2LlJRUyh2YWx1ZSwgdXJsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQb3BVcFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcG9wdXAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUG9wVXA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uZmlybSBQb3BVcFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjdXN0b21TZXR0aW5ncyAgIFBvcFVwIGN1c3RvbSBzZXR0aW5nc1xuICAgICAqIEByZXR1cm4ge251bGx9ICAgICAgICAgICAgICAgICAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4xLjBcbiAgICAgKi9cbiAgICBjb25maXJtKGN1c3RvbVNldHRpbmdzKSB7XG4gICAgICAgIGNvbnN0IHBvcHVwID0gdGhpcy5wb3B1cCgpO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgc3ViamVjdDogJ3Rlc3QnLFxuICAgICAgICAgICAgb2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cC5jbG9zZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbmNlbDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU6ICdDb25maXJtJyxcbiAgICAgICAgICAgIHRpdGxlT0s6ICdPSycsXG4gICAgICAgICAgICB0aXRsZUNhbmNlbDogJ0NhbmNlbCcsXG4gICAgICAgICAgICBodG1sOiAnJyxcbiAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgICAgIGNsYXNzOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgY3VzdG9tU2V0dGluZ3MpLFxuICAgICAgICAgICAgaHRtbCA9ICcnO1xuXG4gICAgICAgIGlmIChzZXR0aW5ncy5odG1sKSB7XG4gICAgICAgICAgICBodG1sID0gc2V0dGluZ3MuaHRtbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGh0bWwgPSB0aGlzLnRwbChUUExfX2NvbmZpcm0sIHtcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBzZXR0aW5ncy5zdWJqZWN0LFxuICAgICAgICAgICAgICAgIHRpdGxlX29rOiBzZXR0aW5ncy50aXRsZU9LLFxuICAgICAgICAgICAgICAgIHRpdGxlX2NhbmNlbDogc2V0dGluZ3MudGl0bGVDYW5jZWxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9wdXAuYWRkKHtcbiAgICAgICAgICAgIHRpdGxlOiBzZXR0aW5ncy50aXRsZSxcbiAgICAgICAgICAgIGh0bWw6IGh0bWwsXG4gICAgICAgICAgICB3aWR0aDogc2V0dGluZ3Mud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHNldHRpbmdzLmhlaWdodCxcbiAgICAgICAgICAgIGNsYXNzOiBgemMtcG9wdXBfbm8tcGFkZGluZyB6Yy1wb3B1cF90eXBlX2NvbmZpcm0gJHtzZXR0aW5ncy5jbGFzc31gLFxuICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy56Yy1jb25maXJtJykub24oJ2NsaWNrJywgJy56Yy1jb25maXJtX19idXR0b25fdHlwZV9vaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mub2socG9wdXApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCgnLnpjLWNvbmZpcm0nKS5vbignY2xpY2snLCAnLnpjLWNvbmZpcm1fX2J1dHRvbl90eXBlX2NhbmNlbCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuY2FuY2VsKHBvcHVwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvbXB0IFBvcFVwXG4gICAgICogXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGN1c3RvbVNldHRpbmdzICBQb3BVcCBjdXN0b20gc2V0dGluZ3NcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgICAgICAgICAgICAgICAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4xLjBcbiAgICAgKi9cbiAgICBwcm9tcHQoY3VzdG9tU2V0dGluZ3MpIHtcbiAgICAgICAgY29uc3QgcG9wdXAgPSB0aGlzLnBvcHVwKCk7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBzdWJqZWN0OiAndGVzdCcsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0luc2VydCB5b3VyIHRleHQnLFxuICAgICAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgICAgICBvazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FuY2VsOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXRsZTogJ1Byb21wdCcsXG4gICAgICAgICAgICB0aXRsZU9LOiAnT0snLFxuICAgICAgICAgICAgdGl0bGVDYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgICAgICAgaHRtbDogJycsXG4gICAgICAgICAgICB3aWR0aDogNDAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICAgICAgICBjbGFzczogJydcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIGN1c3RvbVNldHRpbmdzKSxcbiAgICAgICAgICAgIGh0bWwgPSAnJztcblxuICAgICAgICBpZiAoc2V0dGluZ3MuaHRtbCkge1xuICAgICAgICAgICAgaHRtbCA9IHNldHRpbmdzLmh0bWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBodG1sID0gdGhpcy50cGwoVFBMX19wcm9tcHQsIHtcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBzZXR0aW5ncy5zdWJqZWN0LFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBzZXR0aW5ncy5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBzZXR0aW5ncy5kZWZhdWx0LFxuICAgICAgICAgICAgICAgIHRpdGxlX29rOiBzZXR0aW5ncy50aXRsZU9LLFxuICAgICAgICAgICAgICAgIHRpdGxlX2NhbmNlbDogc2V0dGluZ3MudGl0bGVDYW5jZWxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9wdXAuYWRkKHtcbiAgICAgICAgICAgIHRpdGxlOiBzZXR0aW5ncy50aXRsZSxcbiAgICAgICAgICAgIGh0bWw6IGh0bWwsXG4gICAgICAgICAgICB3aWR0aDogc2V0dGluZ3Mud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHNldHRpbmdzLmhlaWdodCxcbiAgICAgICAgICAgIGNsYXNzOiBgemMtcG9wdXBfdHlwZV9wcm9tcHQgJHtzZXR0aW5ncy5jbGFzc31gLFxuICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wcm9tcHQnKS5vbignY2xpY2snLCAnLnpjLXByb21wdF9fYnV0dG9uX3R5cGVfb2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJCgnLnpjLXByb21wdF9faW5wdXQnKS52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mub2socG9wdXAsIHRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXByb21wdF9faW5wdXQnKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKCcuemMtcHJvbXB0Jykub24oJ2NsaWNrJywgJy56Yy1wcm9tcHRfX2J1dHRvbl90eXBlX2NhbmNlbCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuY2FuY2VsKHBvcHVwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxlcnQgUG9wVXBcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY3VzdG9tU2V0dGluZ3MgIFBvcFVwIGN1c3RvbSBzZXR0aW5nc1xuICAgICAqIEByZXR1cm4ge251bGx9ICAgICAgICAgICAgICAgICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjEuMFxuICAgICAqL1xuICAgIGFsZXJ0KGN1c3RvbVNldHRpbmdzKSB7XG4gICAgICAgIGNvbnN0IHBvcHVwID0gdGhpcy5wb3B1cCgpO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgc3ViamVjdDogJ3Rlc3QnLFxuICAgICAgICAgICAgb2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cC5jbG9zZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlOiAnQWxlcnQnLFxuICAgICAgICAgICAgdGl0bGVPSzogJ09LJyxcbiAgICAgICAgICAgIGh0bWw6ICcnLFxuICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICAgICAgY2xhc3M6ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHNldHRpbmdzID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBjdXN0b21TZXR0aW5ncyksXG4gICAgICAgICAgICBodG1sID0gJyc7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLmh0bWwpIHtcbiAgICAgICAgICAgIGh0bWwgPSBzZXR0aW5ncy5odG1sO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHRtbCA9IHRoaXMudHBsKFRQTF9fYWxlcnQsIHtcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBzZXR0aW5ncy5zdWJqZWN0LFxuICAgICAgICAgICAgICAgIHRpdGxlX29rOiBzZXR0aW5ncy50aXRsZU9LXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvcHVwLmFkZCh7XG4gICAgICAgICAgICB0aXRsZTogc2V0dGluZ3MudGl0bGUsXG4gICAgICAgICAgICBodG1sOiBodG1sLFxuICAgICAgICAgICAgd2lkdGg6IHNldHRpbmdzLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBzZXR0aW5ncy5oZWlnaHQsXG4gICAgICAgICAgICBjbGFzczogYHpjLXBvcHVwX3R5cGVfYWxlcnQgJHtzZXR0aW5ncy5jbGFzc31gLFxuICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy56Yy1hbGVydCcpLm9uKCdjbGljaycsICcuemMtYWxlcnRfX2J1dHRvbl90eXBlX29rJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5vayhwb3B1cCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElucHV0IHJhbmdlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgICBBY3Rpb24gbW9kZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhICAgR2VuZXJhbCBkYXRhXG4gICAgICogQHNpbmNlIDEuMS4wXG4gICAgICovXG4gICAgaW5wdXRSYW5nZShtb2RlLCBkYXRhID0ge30pIHtcbiAgICAgICAgaWYgKG1vZGUgJiYgZGF0YS5lbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBwcml2ID0ge307XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgbGluZSBiYWNrZ3JvdW5kXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJMQkNsYXNzID0gZGF0YS5jb250YWluZXJMQkNsYXNzIHx8ICcnO1xuICAgICAgICAgICAgcHJpdi5oYXNMQiA9IGRhdGEuZWwucGFyZW50KCkuaGFzQ2xhc3MoY29udGFpbmVyTEJDbGFzcyk7XG5cbiAgICAgICAgICAgIC8vIEN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIHByaXYuY3VycmVudFZhbHVlID0gZGF0YS5lbC52YWwoKTtcblxuICAgICAgICAgICAgLy8gVHJhY2sgcGVyY2VudFxuICAgICAgICAgICAgY29uc3QgbWluID0gZGF0YS5zZXR0aW5ncy5taW4gfHwgMDtcbiAgICAgICAgICAgIGNvbnN0IG1heCA9IGRhdGEuc2V0dGluZ3MubWF4IHx8IDEwMDtcblxuICAgICAgICAgICAgcHJpdi50cmFja1BlcmNlbnQgPSAoKHByaXYuY3VycmVudFZhbHVlIC0gbWluKSAqIDEwMCkgLyAobWF4IC0gbWluKTtcblxuICAgICAgICAgICAgLy8gUG9zdGZpeFxuICAgICAgICAgICAgcHJpdi5wb3N0Zml4ID0gZGF0YS5zZXR0aW5ncy5wb3N0Zml4IHx8ICcnO1xuXG4gICAgICAgICAgICAvLyBFbGVtZW50c1xuICAgICAgICAgICAgY29uc3QgbGVmdEluZGljYXRvckNsYXNzICAgID0gZGF0YS5sZWZ0SW5kaWNhdG9yQ2xhc3MgICAgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SW5kaWNhdG9yQ2xhc3MgPSBkYXRhLmN1cnJlbnRJbmRpY2F0b3JDbGFzcyB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0SW5kaWNhdG9yQ2xhc3MgICA9IGRhdGEucmlnaHRJbmRpY2F0b3JDbGFzcyAgIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgZ3JpZENvbnRhaW5lckNsYXNzICAgID0gZGF0YS5ncmlkQ29udGFpbmVyQ2xhc3MgICAgfHwgJyc7XG5cbiAgICAgICAgICAgIHByaXYubGVmdEluZGljYXRvciAgICA9IChsZWZ0SW5kaWNhdG9yQ2xhc3MpICAgID8gZGF0YS5lbC5wYXJlbnQoKS5maW5kKGAuJHtsZWZ0SW5kaWNhdG9yQ2xhc3N9YCkgICAgOiAnJztcbiAgICAgICAgICAgIHByaXYuY3VycmVudEluZGljYXRvciA9IChjdXJyZW50SW5kaWNhdG9yQ2xhc3MpID8gZGF0YS5lbC5wYXJlbnQoKS5maW5kKGAuJHtjdXJyZW50SW5kaWNhdG9yQ2xhc3N9YCkgOiAnJztcbiAgICAgICAgICAgIHByaXYucmlnaHRJbmRpY2F0b3IgICA9IChyaWdodEluZGljYXRvckNsYXNzKSAgID8gZGF0YS5lbC5wYXJlbnQoKS5maW5kKGAuJHtyaWdodEluZGljYXRvckNsYXNzfWApICAgOiAnJztcbiAgICAgICAgICAgIHByaXYuZ3JpZENvbnRhaW5lciAgICA9IChncmlkQ29udGFpbmVyQ2xhc3MpICAgID8gZGF0YS5lbC5wYXJlbnQoKS5maW5kKGAuJHtncmlkQ29udGFpbmVyQ2xhc3N9YCkgICAgOiAnJztcblxuICAgICAgICAgICAgLy8gQWRkIHRyYWNrIHBlcmNlbnRcbiAgICAgICAgICAgIHByaXYuYWRkVHJhY2tQZXJjZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcHJpdi5oYXNMQikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmVsLmNzcygnYmFja2dyb3VuZC1zaXplJywgYCR7cHJpdi50cmFja1BlcmNlbnR9JSAxMDAlYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gU2V0dXAgaW5kaWNhdG9yXG4gICAgICAgICAgICBwcml2LmluZGljYXRvckN1cnJlbnQgPSAoY2hhbmdlQ3VycmVudFZhbHVlID0gZmFsc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoaWRlRnJvbVRvID0gZGF0YS5zZXR0aW5ncy5oaWRlX2Zyb21fdG8gfHwgZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoaGlkZUZyb21UbyAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aHVtYlNpemUgPSAocHJpdi5oYXNMQikgPyAxNyA6IDE2O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VDdXJyZW50VmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXYuY3VycmVudEluZGljYXRvci50ZXh0KHByaXYuY3VycmVudFZhbHVlICsgcHJpdi5wb3N0Zml4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXJlY3Rpb24gPSAnbGVmdCc7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygncnRsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9ICdyaWdodCc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SW5kaWNhdG9yV2lkdGggPSBwcml2LmN1cnJlbnRJbmRpY2F0b3Iub3V0ZXJXaWR0aCgpIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGNQb3NpdGlvblN0eWxlICAgICA9IGAke2RpcmVjdGlvbn06IGNhbGMoJHtwcml2LnRyYWNrUGVyY2VudH0lIC0gJHsoKGN1cnJlbnRJbmRpY2F0b3JXaWR0aCAtIHRodW1iU2l6ZSkgLyAyKSArIChwcml2LnRyYWNrUGVyY2VudCAvIDEwMCkgKiB0aHVtYlNpemV9cHgpYDsgXG5cbiAgICAgICAgICAgICAgICAgICAgcHJpdi5jdXJyZW50SW5kaWNhdG9yLmF0dHIoJ3N0eWxlJywgY2FsY1Bvc2l0aW9uU3R5bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFNob3cvSGlkZSBpbmRpY2F0b3JzIDogbGVmdCAmIHJpZ2h0XG4gICAgICAgICAgICBwcml2LmluZGljYXRvcnNTaG93SGlkZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoaWRlTWluTWF4ID0gZGF0YS5zZXR0aW5ncy5oaWRlX21pbl9tYXggfHwgZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoaGlkZU1pbk1heCAhPT0gdHJ1ZSAmJiBwcml2LmN1cnJlbnRJbmRpY2F0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBMRCA9IHByaXYubGVmdEluZGljYXRvci5nZXQoMCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IENEID0gcHJpdi5jdXJyZW50SW5kaWNhdG9yLmdldCgwKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgUkQgPSBwcml2LnJpZ2h0SW5kaWNhdG9yLmdldCgwKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdydGwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFJELnJpZ2h0IC0gMSA+IENELmxlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2LnJpZ2h0SW5kaWNhdG9yLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpdi5yaWdodEluZGljYXRvci5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTEQubGVmdCArIDEgPCBDRC5yaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXYubGVmdEluZGljYXRvci5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXYubGVmdEluZGljYXRvci5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKExELnJpZ2h0ICsgMSA+IENELmxlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2LmxlZnRJbmRpY2F0b3IuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2LmxlZnRJbmRpY2F0b3IuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFJELmxlZnQgLSAxIDwgQ0QucmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2LnJpZ2h0SW5kaWNhdG9yLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpdi5yaWdodEluZGljYXRvci5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcHJpdi5jb3VudERlY2ltYWxzID0gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCh2YWx1ZSAlIDEpICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIE1vZGUgOiBJbml0aWFsaXphdGlvblxuICAgICAgICAgICAgcHJpdi5pbml0TW9kZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcml2LmluZGljYXRvckN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICBwcml2LmluZGljYXRvcnNTaG93SGlkZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gTW9kZSA6IExpdmVcbiAgICAgICAgICAgIHByaXYubGl2ZU1vZGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJpdi5hZGRUcmFja1BlcmNlbnQoKTtcbiAgICAgICAgICAgICAgICBwcml2LmluZGljYXRvckN1cnJlbnQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgcHJpdi5pbmRpY2F0b3JzU2hvd0hpZGUoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIE1vZGUgOiBDaGFuZ2VcbiAgICAgICAgICAgIHByaXYuY2hhbmdlTW9kZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoaWRlTWluTWF4ID0gZGF0YS5zZXR0aW5ncy5oaWRlX21pbl9tYXggfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvd0dyaWQgICA9IGRhdGEuc2V0dGluZ3MuZ3JpZCB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGVwICAgICAgID0gZGF0YS5zZXR0aW5ncy5zdGVwIHx8IDE7XG5cbiAgICAgICAgICAgICAgICBkYXRhLmVsLmF0dHIoJ21pbicsIG1pbik7XG4gICAgICAgICAgICAgICAgZGF0YS5lbC5hdHRyKCdtYXgnLCBtYXgpO1xuICAgICAgICAgICAgICAgIGRhdGEuZWwuZGF0YSgnc2V0dGluZ3MnLCBkYXRhLnNldHRpbmdzKTtcblxuICAgICAgICAgICAgICAgIGlmIChoaWRlTWluTWF4ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBwcml2LmxlZnRJbmRpY2F0b3IudGV4dChtaW4gKyBwcml2LnBvc3RmaXgpO1xuICAgICAgICAgICAgICAgICAgICBwcml2LnJpZ2h0SW5kaWNhdG9yLnRleHQobWF4ICsgcHJpdi5wb3N0Zml4KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoc2hvd0dyaWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hcmsgPSAobWF4IC0gbWluKSAvIDQ7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJpdi5ncmlkQ29udGFpbmVyLmZpbmQoJ2xpW2RhdGEtbj0xXSA+IHNwYW4nKS50ZXh0KG1pbik7XG4gICAgICAgICAgICAgICAgICAgIHByaXYuZ3JpZENvbnRhaW5lci5maW5kKCdsaVtkYXRhLW49Ml0gPiBzcGFuJykudGV4dCh6Yy5yb3VuZChtYXJrICsgbWluLCBwcml2LmNvdW50RGVjaW1hbHMoc3RlcCkpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpdi5ncmlkQ29udGFpbmVyLmZpbmQoJ2xpW2RhdGEtbj0zXSA+IHNwYW4nKS50ZXh0KHpjLnJvdW5kKG1hcmsgKiAyICsgbWluLCBwcml2LmNvdW50RGVjaW1hbHMoc3RlcCkpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpdi5ncmlkQ29udGFpbmVyLmZpbmQoJ2xpW2RhdGEtbj00XSA+IHNwYW4nKS50ZXh0KHpjLnJvdW5kKG1hcmsgKiAzICsgbWluLCBwcml2LmNvdW50RGVjaW1hbHMoc3RlcCkpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpdi5ncmlkQ29udGFpbmVyLmZpbmQoJ2xpW2RhdGEtbj01XSA+IHNwYW4nKS50ZXh0KG1heCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcHJpdi5hZGRUcmFja1BlcmNlbnQoKTtcbiAgICAgICAgICAgICAgICBwcml2LmluZGljYXRvckN1cnJlbnQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgcHJpdi5pbmRpY2F0b3JzU2hvd0hpZGUoKTtcbiAgICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdpbml0JzpcbiAgICAgICAgICAgICAgICAgICAgcHJpdi5pbml0TW9kZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdsaXZlJzpcbiAgICAgICAgICAgICAgICAgICAgcHJpdi5saXZlTW9kZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjaGFuZ2UnOlxuICAgICAgICAgICAgICAgICAgICBwcml2LmNoYW5nZU1vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgLyoqXG4gICAgICogUmVzdCBBUElcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsICAgICBXb3JkUHJlc3MgcmVzdCBBUEkgVVJMXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5vbmNlICAgV29yZFByZXNzIFggbm9uY2UgZm9yIFJlc3RBUElcbiAgICAgKiBAc2luY2UgMS4xLjBcbiAgICAgKi9cbiAgICByZXN0QVBJKHVybCwgbm9uY2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXN0QVBJKHVybCwgbm9uY2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV2ZW50IHNvdXJjZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgICAgICAgIFVSTCBvZiB0aGUgc291cmNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHNldHRpbmdzICAgRXZlbnQgc2V0dGluZ3NcbiAgICAgKiBAc2luY2UgMS4xLjBcbiAgICAgKi9cbiAgICBldmVudCh1cmwsIHNldHRpbmdzKSB7XG4gICAgICAgIGNvbnN0IHVybEhhbmRsZXIgPSBuZXcgVVJMKHVybCk7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLmRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgJC5lYWNoKHNldHRpbmdzLmRhdGEsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgdXJsSGFuZGxlci5zZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBldnRTb3VyY2UgPSBuZXcgd2luZG93LkV2ZW50U291cmNlKHVybEhhbmRsZXIuaHJlZik7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oc2V0dGluZ3MubGlzdGVuZXIpKSB7XG4gICAgICAgICAgICAgICAgZXZ0U291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmxpc3RlbmVyKHJlc3BvbnNlLCBldnRTb3VyY2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2V0dGluZ3MubGlzdGVuZXIgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgJC5lYWNoKHNldHRpbmdzLmxpc3RlbmVyLCAoa2V5LCBjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldnRTb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcihrZXksIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UsIGV2dFNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLmVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGV2dFNvdXJjZS5vbmVycm9yID0gKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3MuZXJyb3IoZXJyb3IsIGV2dFNvdXJjZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiAgIEFKQVggYWN0aW9uIG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbm9uY2UgICAgQUpBWCBub25jZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zICBPcHRpb25zIHRvIGJlIHBhc3NlZCB0byB0aGUgc2VydmVyXG4gICAgICogQHJldHVybiB7bWl4fSAgICAgICAgICAgIEFjdGlvbiByZXN1bHRcbiAgICAgKiBAc2luY2UgMS4xLjBcbiAgICAgKi9cbiAgICBhc3luYyBqc29uUmVxdWVzdChhY3Rpb24sIG5vbmNlID0gJycsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgICA9IDQ7XG4gICAgICAgIGNvbnN0IGludGVydmFsID0gMTAwMDtcblxuICAgICAgICBjb25zdCB1cmxIYW5kbGVyID0gbmV3IFVSTChhamF4dXJsLCAkKGxvY2F0aW9uKS5hdHRyKCdvcmlnaW4nKSk7XG4gICAgICAgIHVybEhhbmRsZXIuc2VhcmNoUGFyYW1zLmFwcGVuZCgnYWN0aW9uJywgYWN0aW9uKTtcblxuICAgICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgICAgIHVybEhhbmRsZXIuc2VhcmNoUGFyYW1zLmFwcGVuZCgnX3dwbm9uY2UnLCBub25jZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzbGVlcCA9IChtcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmV0Y2hSZXRyeSA9IGFzeW5jIChib2R5RGF0YSwgYXR0ZW1wdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybEhhbmRsZXIuaHJlZiwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHlEYXRhKVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBgRXJyb3IgLSAke3Jlc3BvbnNlLnN0YXR1c30gOiAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKGludGVydmFsKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFJldHJ5KGJvZHlEYXRhLCBhdHRlbXB0IC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IGZldGNoUmV0cnkob3B0aW9ucywgYXR0ZW1wdHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFKQVhcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY3VzdG9tU2V0dGluZ3MgICBBSkFYIGN1c3RvbSBzZXR0aW5nc1xuICAgICAqIEByZXR1cm4ge29iamVjdH0gICAgICAgICAgICAgICAgIEFKQVggaW5zdGFuY2VcbiAgICAgKiBAc2luY2UgMS4xLjBcbiAgICAgKi9cbiAgICAgYWpheChjdXN0b21TZXR0aW5ncykge1xuICAgICAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgdXJsOiBhamF4dXJsLFxuICAgICAgICAgICAgZGF0YTogJycsXG4gICAgICAgICAgICBiZWZvcmU6ICgpID0+IHt9LFxuICAgICAgICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1ppbWJydUNvZGUgOiBBamF4IEVycm9yJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7fVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBjaGVja04gPSAxO1xuXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gMTAwMDtcbiAgICAgICAgY29uc3QgaXRlcmF0aW9ucyA9IDQ7XG5cbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIGN1c3RvbVNldHRpbmdzKTtcblxuICAgICAgICBjb25zdCBwcm9jZXNzZWRTZXR0aW5ncyA9IHRoaXMuY2xvbmUoc2V0dGluZ3MpO1xuXG4gICAgICAgIGlmICgkLmlzRnVuY3Rpb24oc2V0dGluZ3MuYmVmb3JlKSkge1xuICAgICAgICAgICAgcHJvY2Vzc2VkU2V0dGluZ3MuYmVmb3JlU2VuZCA9IHNldHRpbmdzLmJlZm9yZTtcbiAgICAgICAgICAgIGRlbGV0ZSBwcm9jZXNzZWRTZXR0aW5ncy5iZWZvcmU7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9jZXNzZWRTZXR0aW5ncy5zdWNjZXNzID0gKHJlc3BvbnNlLCB0ZXh0U3RhdHVzLCBqcVhIUikgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlIDwgMCkge1xuICAgICAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oc2V0dGluZ3MuZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmVycm9yKGpxWEhSLCB0ZXh0U3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oc2V0dGluZ3Muc3VjY2VzcykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Muc3VjY2VzcyhyZXNwb25zZSwgdGV4dFN0YXR1cywganFYSFIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBwcm9jZXNzZWRTZXR0aW5ncy5lcnJvciA9IChqcVhIUiwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgaWYgKGNoZWNrTiA8PSBpdGVyYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrTiArKztcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHByb2Nlc3NlZFNldHRpbmdzKTtcbiAgICAgICAgICAgICAgICB9LCBpbnRlcnZhbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oc2V0dGluZ3MuZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmVycm9yKGpxWEhSLCB0ZXh0U3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuICQuYWpheChwcm9jZXNzZWRTZXR0aW5ncyk7XG4gICAgfVxufVxuXG4vLyBDbGFzcyBpbml0aWFsaXphdGlvbiA6IFppbWJydUNvZGVcbndpbmRvdy56YyA9IG5ldyBaaW1icnVDb2RlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9