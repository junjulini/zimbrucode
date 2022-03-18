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
 * @since   1.0.0
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
     * @since 1.0.0
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
 * @since   1.0.0
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
     * @since 1.0.0
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
     * @param {object} data Data for preparing template
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
     * @since 1.0.0
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
     * @since 1.0.0
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
     * @since 1.0.0
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
     * @since 1.0.0
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
     * @since 1.0.0
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
     * @since 1.0.0
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
     * @since 1.0.0
     */
    restAPI(url, nonce) {
        return new _module_rest_api__WEBPACK_IMPORTED_MODULE_2__["default"](url, nonce);
    }

    /**
     * Event source
     * 
     * @param {string} url        URL of the source
     * @param {object} settings   Event settings
     * @since 1.0.0
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
     * @since 1.0.0
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
     * @since 1.0.0
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

        settings = $.extend({}, defaults, customSettings);

        const preparedSettings = this.clone(settings);

        if ($.isFunction(settings.before)) {
            preparedSettings.beforeSend = settings.before;
            delete preparedSettings.before;
        }

        preparedSettings.success = (response, textStatus, jqXHR) => {
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

        preparedSettings.error = (jqXHR, textStatus) => {
            if (checkN <= iterations) {
                setTimeout(() => {
                    checkN ++;
                    $.ajax(preparedSettings);
                }, interval);
            } else {
                if ($.isFunction(settings.error)) {
                    settings.error(jqXHR, textStatus);
                }
            }
        };

        return $.ajax(preparedSettings);
    }
}

// Class initialization : ZimbruCode
window.zc = new ZimbruCode();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2pxdWVyeS56aW1icnVjb2RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSx5QkFBeUIsSUFBSSxzQkFBc0IsT0FBTywyR0FBMkcsT0FBTztBQUM1SztBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDSG5CO0FBQ0Esd0dBQXdHLFNBQVMsdUxBQXVMLFVBQVU7QUFDbFQ7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQ0huQjtBQUNBLDhHQUE4RyxTQUFTLDhKQUE4SixVQUFVLGdHQUFnRyxjQUFjO0FBQzdZO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUNIbkI7QUFDQSwyR0FBMkcsU0FBUyw0QkFBNEIsYUFBYSxhQUFhLFNBQVMsb0xBQW9MLFVBQVUsOEZBQThGLGNBQWM7QUFDN2Q7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUNGbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFRTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixlQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsaUJBQWlCO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLG9CQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDLHlDQUF5QztBQUN6Qyx5Q0FBeUM7QUFDekMsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFLGtDQUFrQyxFQUFFO0FBQ3BDOztBQUVBLGVBQWUsb0JBQW9CO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixhQUFhO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUU2Qjs7QUFFMUM7O0FBRWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGNBQWM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQix3QkFBd0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLDRCQUE0QjtBQUM1QixxQ0FBcUM7QUFDckMsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DO0FBQ3BDLGlDQUFpQyx1REFBVTtBQUMzQztBQUNBO0FBQ0E7QUFDQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDRIQUE0SDtBQUM1SDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsUUFBUTtBQUN0QjtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVCxtREFBbUQsUUFBUTtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCLGVBQWUsU0FBUztBQUN4QixnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsU0FBUyx5QkFBeUIsZ0JBQWdCLE1BQU0scUJBQXFCO0FBQzNHOztBQUVBO0FBQ0EsOEJBQThCLFNBQVMseUJBQXlCLGlCQUFpQixPQUFPLHNCQUFzQjtBQUM5RztBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLDhCQUE4QixTQUFTLHlCQUF5QixnQkFBZ0IsTUFBTSxJQUFJO0FBQzFGOztBQUVBO0FBQ0EsOEJBQThCLFNBQVMseUJBQXlCLGlCQUFpQixPQUFPLElBQUk7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixjQUFjLFNBQVM7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixjQUFjLFNBQVM7QUFDdkIsa0JBQWtCLFNBQVM7QUFDM0I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7O0FBRWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsY0FBYztBQUM5QjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsY0FBYztBQUM5QjtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsY0FBYztBQUM5QjtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsY0FBYztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsZUFBZTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztVQ3JKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFd0I7QUFDQztBQUNFOztBQUVNO0FBQ0Q7QUFDRDs7QUFFNUM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLHNEQUFNO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QixlQUFlLFVBQVU7QUFDekIsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixjQUFjO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsY0FBYztBQUM5QjtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixjQUFjO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCw2QkFBNkIsR0FBRztBQUNoQztBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLEVBQUUsTUFBTTtBQUN2QztBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QixlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCLGVBQWUsU0FBUztBQUN4QixnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFVBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFVBQVU7QUFDekIsZUFBZSxVQUFVO0FBQ3pCLGdCQUFnQiwwQkFBMEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLGdCQUFnQjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCLGdCQUFnQixvQkFBb0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLGFBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QixlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QixlQUFlLFNBQVM7QUFDeEIsZ0JBQWdCLGNBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixvQkFBb0I7QUFDcEM7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLG9CQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbURBQW1ELFFBQVE7QUFDM0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFEQUFLO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0Isd0JBQXdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDViw0QkFBNEIseURBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsZUFBZTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsdUJBQXVCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNEJBQTRCLHdEQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxlQUFlO0FBQzFEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsdUJBQXVCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDRCQUE0Qix1REFBVTtBQUN0QztBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZUFBZTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdGQUF3RixtQkFBbUI7QUFDM0csd0ZBQXdGLHNCQUFzQjtBQUM5Ryx3RkFBd0Ysb0JBQW9CO0FBQzVHLHdGQUF3RixtQkFBbUI7O0FBRTNHO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxrQkFBa0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFELFVBQVUsU0FBUyxrQkFBa0IsTUFBTSxrRkFBa0Y7O0FBRWxMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdEQUFPO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLGdCQUFnQjtBQUNoQztBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0EscUNBQXFDLGlCQUFpQixJQUFJLG9CQUFvQjtBQUM5RTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQix3QkFBd0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsOEJBQThCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvUmVzb3VyY2VzL3BhY2thZ2VzL3ppbWJydWNvZGUvZXM2L21vZHVsZS90cGwvcG9wdXAuaHRtbCIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi90cGwvYWxlcnQuaHRtbCIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi90cGwvY29uZmlybS5odG1sIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvUmVzb3VyY2VzL3BhY2thZ2VzL3ppbWJydWNvZGUvZXM2L3RwbC9wcm9tcHQuaHRtbCIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi9tb2R1bGUvY29va2llLmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvUmVzb3VyY2VzL3BhY2thZ2VzL3ppbWJydWNvZGUvZXM2L21vZHVsZS9wb3B1cC5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi9tb2R1bGUvcmVzdC1hcGkuanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvUmVzb3VyY2VzL3BhY2thZ2VzL3ppbWJydWNvZGUvZXM2L2pxdWVyeS56aW1icnVjb2RlLmVzNi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCIgPGRpdiBpZD1cXFwie3tpZH19XFxcIiBjbGFzcz1cXFwiemMtcG9wdXAge3tjbGFzc319XFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtcG9wdXBfX3dpbmRvd1xcXCI+IDxoZWFkZXIgY2xhc3M9XFxcInpjLXBvcHVwX19oZWFkZXJcXFwiPiA8c3BhbiBjbGFzcz1cXFwiemMtcG9wdXBfX3RpdGxlXFxcIj57e3RpdGxlfX08L3NwYW4+IDxpIGNsYXNzPVxcXCJ6Yy1wb3B1cF9fY2xvc2UgemMtaWNvbi1jbGVhclxcXCI+PC9pPiA8L2hlYWRlcj4gPGRpdiBjbGFzcz1cXFwiemMtc2Nyb2xsYmFyIHpjLXBvcHVwX19vdmVyZmxvdy1oaWRkZW5cXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wb3B1cF9fbG9hZGluZ1xcXCI+IDxkaXYgY2xhc3M9XFxcInpjLWxvYWRpbmctc3Bpbm5lciB6Yy1wb3B1cF9fbG9hZGluZy1zcGlubmVyXFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2UgemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2VfbW9kZV8xXFxcIj48L2Rpdj4gPGRpdiBjbGFzcz1cXFwiemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2UgemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2VfbW9kZV8yXFxcIj48L2Rpdj4gPGRpdiBjbGFzcz1cXFwiemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2UgemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2VfbW9kZV8zXFxcIj48L2Rpdj4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wb3B1cF9fY29udGVudFxcXCI+PC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIiA8ZGl2IGNsYXNzPVxcXCJ6Yy1hbGVydFxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLWFsZXJ0X19jb250YWluZXJcXFwiPiA8cCBjbGFzcz1cXFwiemMtYWxlcnRfX3RleHRcXFwiPnt7c3ViamVjdH19PC9wPiA8L2Rpdj4gPGZvb3RlciBjbGFzcz1cXFwiemMtYWxlcnRfX2Zvb3RlclxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLWFsZXJ0X19jZW50ZXJcXFwiPiA8YnV0dG9uIGNsYXNzPVxcXCJ6Yy1hbGVydF9fYnV0dG9uIHpjLWFsZXJ0X19idXR0b25fdHlwZV9vayB6Yy1hbGVydF9fYnV0dG9uX2FjdGl2ZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj57e3RpdGxlX29rfX08L2J1dHRvbj4gPC9kaXY+IDwvZm9vdGVyPjwvZGl2PiBcIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiIDxkaXYgY2xhc3M9XFxcInpjLWNvbmZpcm1cXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1jb25maXJtX19jb250YWluZXJcXFwiPiA8cCBjbGFzcz1cXFwiemMtY29uZmlybV9fdGV4dFxcXCI+e3tzdWJqZWN0fX08L3A+IDwvZGl2PiA8Zm9vdGVyIGNsYXNzPVxcXCJ6Yy1jb25maXJtX19mb290ZXJcXFwiPiA8YnV0dG9uIGNsYXNzPVxcXCJ6Yy1jb25maXJtX19idXR0b24gemMtY29uZmlybV9fYnV0dG9uX3R5cGVfb2sgemMtY29uZmlybV9fYnV0dG9uX2FjdGl2ZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj57e3RpdGxlX29rfX08L2J1dHRvbj4gPGJ1dHRvbiBjbGFzcz1cXFwiemMtY29uZmlybV9fYnV0dG9uIHpjLWNvbmZpcm1fX2J1dHRvbl90eXBlX2NhbmNlbFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj57e3RpdGxlX2NhbmNlbH19PC9idXR0b24+IDwvZm9vdGVyPiA8L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiIDxkaXYgY2xhc3M9XFxcInpjLXByb21wdFxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLXByb21wdF9fY29udGFpbmVyXFxcIj4gPHAgY2xhc3M9XFxcInpjLXByb21wdF9fdGV4dFxcXCI+e3tzdWJqZWN0fX08L3A+IDxpbnB1dCBwbGFjZWhvbGRlcj1cXFwie3twbGFjZWhvbGRlcn19XFxcIiB2YWx1ZT1cXFwie3tkZWZhdWx0fX1cXFwiIGNsYXNzPVxcXCJ6Yy1wcm9tcHRfX2lucHV0XFxcIj4gPC9kaXY+IDxmb290ZXIgY2xhc3M9XFxcInpjLXByb21wdF9fZm9vdGVyXFxcIj4gPGJ1dHRvbiBjbGFzcz1cXFwiemMtcHJvbXB0X19idXR0b24gemMtcHJvbXB0X19idXR0b25fdHlwZV9vayB6Yy1wcm9tcHRfX2J1dHRvbl9hY3RpdmVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+e3t0aXRsZV9va319PC9idXR0b24+IDxidXR0b24gY2xhc3M9XFxcInpjLXByb21wdF9fYnV0dG9uIHpjLXByb21wdF9fYnV0dG9uX3R5cGVfY2FuY2VsXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPnt7dGl0bGVfY2FuY2VsfX08L2J1dHRvbj4gPC9mb290ZXI+IDwvZGl2PlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFppbWJydUNvZGUvTW9kdWxlIDogQ29va2llXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb2tpZSB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRlZmF1bHRzID0ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0ZW5kIGF0dHJpYnV0ZXNcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gIHsuLi5hbnl9IGFyZ3MgICBBdHRyaWJ1dGVzXG4gICAgICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgTmV3IGF0dHJpYnV0ZXNcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBfX2V4dGVuZCguLi5hcmdzKSB7XG4gICAgICAgIGxldCBpID0gMCwgcmVzdWx0ID0ge307XG5cbiAgICAgICAgZm9yICg7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0cmlidXRlcyA9IGFyZ3NbaV07XG5cbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFQSVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICAgICAgICAgQ29va2llIG5hbWVcbiAgICAgKiBAcGFyYW0ge21peH0gICAgdmFsdWUgICAgICAgIENvb2tpZSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVzICAgQ29va2llIGF0dHJpYnV0ZXNcbiAgICAgKiBAcmV0dXJuIHttaXh9ICAgICAgICAgICAgICAgIEFjdGlvbiByZXN1bHRcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBfX2FwaShrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGxldCByZXN1bHQsIGNvbnZlcnRlciA9ICgpID0+IHt9O1xuXG4gICAgICAgIC8vIFdyaXRlXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgYXR0cmlidXRlcyA9IHRoaXMuX19leHRlbmQoe1xuICAgICAgICAgICAgICAgIHBhdGg6ICcvJ1xuICAgICAgICAgICAgfSwgdGhpcy5kZWZhdWx0cywgYXR0cmlidXRlcyk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cGlyZXMgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGV4cGlyZXMuc2V0TWlsbGlzZWNvbmRzKGV4cGlyZXMuZ2V0TWlsbGlzZWNvbmRzKCkgKyBhdHRyaWJ1dGVzLmV4cGlyZXMgKiA4NjRlKzUpO1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuZXhwaXJlcyA9IGV4cGlyZXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gemMucGFyc2UodmFsdWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmICgvXltcXHtcXFtdLy50ZXN0KHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgICAgICAgaWYgKCFjb252ZXJ0ZXIud3JpdGUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnwzQXwzQ3wzRXwzRHwyRnwzRnw0MHw1Qnw1RHw1RXw2MHw3Qnw3RHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBjb252ZXJ0ZXIud3JpdGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGtleSA9IGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoa2V5KSk7XG4gICAgICAgICAgICBrZXkgPSBrZXkucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnw1RXw2MHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KTtcbiAgICAgICAgICAgIGtleSA9IGtleS5yZXBsYWNlKC9bXFwoXFwpXS9nLCBlc2NhcGUpO1xuXG4gICAgICAgICAgICByZXR1cm4gKGRvY3VtZW50LmNvb2tpZSA9IFtcbiAgICAgICAgICAgICAgICBrZXksICc9JywgdmFsdWUsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5leHBpcmVzICYmICc7IGV4cGlyZXM9JyArIGF0dHJpYnV0ZXMuZXhwaXJlcy50b1VUQ1N0cmluZygpLCAvLyB1c2UgZXhwaXJlcyBhdHRyaWJ1dGUsIG1heC1hZ2UgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMucGF0aCAgICAmJiAnOyBwYXRoPScgKyBhdHRyaWJ1dGVzLnBhdGgsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5kb21haW4gICYmICc7IGRvbWFpbj0nICsgYXR0cmlidXRlcy5kb21haW4sXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5zZWN1cmUgPyAnOyBzZWN1cmUnIDogJydcbiAgICAgICAgICAgIF0uam9pbignJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVhZFxuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmVzdWx0ID0ge307XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUbyBwcmV2ZW50IHRoZSBmb3IgbG9vcCBpbiB0aGUgZmlyc3QgcGxhY2UgYXNzaWduIGFuIGVtcHR5IGFycmF5XG4gICAgICAgIC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLiBBbHNvIHByZXZlbnRzIG9kZCByZXN1bHQgd2hlblxuICAgICAgICAvLyBjYWxsaW5nIFwiZ2V0KClcIlxuICAgICAgICBsZXQgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZSA/IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKSA6IFtdLFxuICAgICAgICAgICAgcmRlY29kZSA9IC8oJVswLTlBLVpdezJ9KSsvZyxcbiAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBhcnRzID0gY29va2llc1tpXS5zcGxpdCgnPScpLFxuICAgICAgICAgICAgICAgIG5hbWUgPSBwYXJ0c1swXS5yZXBsYWNlKHJkZWNvZGUsIGRlY29kZVVSSUNvbXBvbmVudCksXG4gICAgICAgICAgICAgICAgY29va2llID0gcGFydHMuc2xpY2UoMSkuam9pbignPScpO1xuXG4gICAgICAgICAgICBpZiAoY29va2llLmNoYXJBdCgwKSA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgIGNvb2tpZSA9IGNvb2tpZS5zbGljZSgxLCAtMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29va2llID0gY29udmVydGVyLnJlYWQgP1xuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ZXIucmVhZChjb29raWUsIG5hbWUpIDogY29udmVydGVyKGNvb2tpZSwgbmFtZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgY29va2llLnJlcGxhY2UocmRlY29kZSwgZGVjb2RlVVJJQ29tcG9uZW50KTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmpzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb2tpZSA9IEpTT04ucGFyc2UoY29va2llKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvb2tpZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W25hbWVdID0gY29va2llO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBjb29raWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgICAgICAgIENvb2tpZSBuYW1lXG4gICAgICogQHBhcmFtIHttaXh9ICAgIHZhbHVlICAgICAgICBDb29raWUgdmFsdWVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlcyAgIENvb2tpZSBhdHRyaWJ1dGVzXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkKGtleSwgdmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdGhpcy5fX2FwaShrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY29va2llXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIENvb2tpZSBuYW1lXG4gICAgICogQHJldHVybiB7bWl4fSAgICAgICAgIENvb2tpZSBkYXRhXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2FwaShrZXkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBjb29raWUgaXRlbVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICAgICAgICAgQ29va2llIG5hbWVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlcyAgIENvb2tpZSBhdHRyaWJ1dGVzXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcmVtb3ZlKGtleSwgYXR0cmlidXRlcykge1xuICAgICAgICB0aGlzLl9fYXBpKGtleSwgJycsIHRoaXMuX19leHRlbmQoYXR0cmlidXRlcywge1xuICAgICAgICAgICAgZXhwaXJlczogLTFcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEpzb24gZGF0YVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge21peH0gICBDb29raWUgZGF0YVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGdldEpTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fYXBpLmFwcGx5KHtcbiAgICAgICAgICAgIGpzb246IHRydWVcbiAgICAgICAgfSwgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9XG59IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIHppbWJydWNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBaaW1icnVDb2RlL01vZHVsZSA6IFBvcFVwXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBUUExfX3BvcHVwIGZyb20gJy4vdHBsL3BvcHVwLmh0bWwnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BVcCB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlkID0gYHpjLXBvcHVwLSR7emMudW5pcXVlSUQoKX1gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBwb3B1cFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjdXN0b21TZXR0aW5ncyAgIFBvcFVwIGN1c3RvbSBzZXR0aW5nc1xuICAgICAqIEByZXR1cm4ge251bGx9ICAgICAgICAgICAgICAgICAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGQoY3VzdG9tU2V0dGluZ3MpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcFVwIFRpdGxlJyxcbiAgICAgICAgICAgIGpzb25SZXF1ZXN0OiB7fSxcbiAgICAgICAgICAgIGVycm9yOiAoZXJyb3JNc2cpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdaaW1icnVDb2RlIDogUG9wVXAnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZWZvcmU6ICgpID0+IHt9LFxuICAgICAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7fSxcbiAgICAgICAgICAgIGFmdGVyU2hvd0NvbnRlbnQ6ICgpID0+IHt9LFxuICAgICAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnJyxcbiAgICAgICAgICAgIGh0bWw6ICcnLFxuICAgICAgICAgICAgY2xhc3M6ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIGN1c3RvbVNldHRpbmdzKSxcbiAgICAgICAgICAgICAgc3RydWN0dXJlID0gemMudHBsKFRQTF9fcG9wdXAsIHtcbiAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IHNldHRpbmdzLmNsYXNzLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IHNldHRpbmdzLnRpdGxlXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICAgICAkKCdib2R5JykuYXBwZW5kKHN0cnVjdHVyZSk7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLmpzb25SZXF1ZXN0LmFjdGlvbiAhPT0gdW5kZWZpbmVkICYmIHNldHRpbmdzLmpzb25SZXF1ZXN0LmFjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zaXplKHNldHRpbmdzLmhlaWdodCwgc2V0dGluZ3Mud2lkdGgpO1xuXG4gICAgICAgICAgICBzZXR0aW5ncy5iZWZvcmUoKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZUNvbnRlbnQoKTtcblxuICAgICAgICAgICAgemMuanNvblJlcXVlc3Qoc2V0dGluZ3MuanNvblJlcXVlc3QuYWN0aW9uLCBzZXR0aW5ncy5qc29uUmVxdWVzdC5ub25jZSB8fCAnJywgc2V0dGluZ3MuanNvblJlcXVlc3Qub3B0aW9ucyB8fCB7fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuY29udGVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ29udGVudChyZXNwb25zZS5jb250ZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5zdWNjZXNzKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3MuYWZ0ZXJTaG93Q29udGVudChyZXNwb25zZSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3JNc2cpID0+IHtcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5lcnJvcihlcnJvck1zZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2l6ZShzZXR0aW5ncy5oZWlnaHQsIHNldHRpbmdzLndpZHRoKTtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ29udGVudChzZXR0aW5ncy5odG1sKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcbiAgICAgICAgICAgIHNldHRpbmdzLnN1Y2Nlc3Moc2V0dGluZ3MuaHRtbCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKGAjJHt0aGlzLmlkfWApLm9uKCdjbGljaycsICcuemMtcG9wdXBfX2Nsb3NlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZWRvd24gdG91Y2hzdGFydCcsIGAjJHt0aGlzLmlkfWAsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9wdXBXaW5kb3cgPSAkKCcuemMtcG9wdXBfX3dpbmRvdycpO1xuXG4gICAgICAgICAgICBpZiAoIXBvcHVwV2luZG93LmlzKGV2ZW50LnRhcmdldCkgJiYgcG9wdXBXaW5kb3cuaGFzKGV2ZW50LnRhcmdldCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjIHBvcHVwIHdpbmRvdyBzaXplXG4gICAgICogXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBoZWlnaHQgICBXaW5kb3cgaGVpZ2h0XG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSB3aWR0aCAgICBXaW5kb3cgd2lkdGhcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgICAgICAgICAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzaXplKGhlaWdodCwgd2lkdGgpIHtcbiAgICAgICAgaGVpZ2h0ID0gKHR5cGVvZiBoZWlnaHQgIT09ICd1bmRlZmluZWQnIHx8IGhlaWdodCkgPyBoZWlnaHQgOiBmYWxzZTtcbiAgICAgICAgd2lkdGggID0gKHR5cGVvZiB3aWR0aCAhPT0gJ3VuZGVmaW5lZCcgfHwgd2lkdGgpID8gd2lkdGggOiBmYWxzZTtcblxuICAgICAgICBjb25zdCBwcml2ID0ge1xuICAgICAgICAgICAgY2FsY1NpemUgOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudC4qcnZcXDoxMVxcLi8pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX193aW5kb3dgKS5jc3MoeydtYXgtd2lkdGgnOiBgJHt3aWR0aH1weGAsICd3aWR0aCc6ICcxMDAlJ30pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX193aW5kb3dgKS5jc3MoeydtYXgtaGVpZ2h0JzogYCR7aGVpZ2h0fXB4YCwgJ2hlaWdodCc6ICcxMDAlJ30pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX3dpbmRvd2ApLmNzcyh7J21heC13aWR0aCc6IGAke3dpZHRofXB4YH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX193aW5kb3dgKS5jc3MoeydtYXgtaGVpZ2h0JzogYCR7aGVpZ2h0fXB4YH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHByaXYuY2FsY1NpemUoKTtcblxuICAgICAgICAkKHdpbmRvdykucmVzaXplKCgpID0+IHtcbiAgICAgICAgICAgIHByaXYuY2FsY1NpemUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBjb250ZW50XG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaGlkZUNvbnRlbnQoKSB7XG4gICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fY29udGVudGApLmhpZGUoKTtcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgY29udGVudFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHNob3dDb250ZW50KCkge1xuICAgICAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fd2luZG93IC56Yy1zY3JvbGxiYXJgKS5yZW1vdmVDbGFzcygnemMtcG9wdXBfX292ZXJmbG93LWhpZGRlbicpO1xuICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX2NvbnRlbnRgKS5zaG93KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBsb2FkaW5nXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaGlkZUxvYWRpbmcoKSB7XG4gICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fbG9hZGluZ2ApLmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IGxvYWRpbmdcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzaG93TG9hZGluZygpIHtcbiAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX19sb2FkaW5nYCkuc2hvdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVyYXNlIGNvbnRlbnRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICByZW1Db250ZW50KCkge1xuICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX2NvbnRlbnRgKS5lbXB0eSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGVuZCBjb250ZW50XG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYXBwZW5kQ29udGVudChjb250ZW50KSB7XG4gICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fY29udGVudGApLmFwcGVuZChjb250ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNsb3NlKCkge1xuICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX3dpbmRvd2ApLmFkZENsYXNzKCd6Yy1wb3B1cF9fd2luZG93X2Nsb3NlJyk7XG4gICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fd2luZG93YCkub25lKCdhbmltYXRpb25lbmQgd2Via2l0QW5pbWF0aW9uRW5kIG9BbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICQoYCMke3RoaXMuaWR9IGApLmhpZGUoKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2luaXRpYWwnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogWmltYnJ1Q29kZS9Nb2R1bGUgOiBSZXN0QVBJXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3RBUEkge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsICAgICBSZXN0IFVSbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBub25jZSAgIE5vbmNlXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodXJsLCBub25jZSkge1xuICAgICAgICB0aGlzLnJlc3RVUkwgPSB1cmw7XG4gICAgICAgIHRoaXMucmVzdE5vbmNlID0gbm9uY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGl0ZW1cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgIFJlc3QgQVBJIHBhdGhcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAgIEFjdGlvbiBkYXRhXG4gICAgICogQHJldHVybiB7bWl4fSAgICAgICAgICBBY3Rpb24gcmVzdWx0XG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0KHBhdGgsIGRhdGEgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2FqYXgoJ0dFVCcsIHBhdGgsIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBpdGVtXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggICBSZXN0IEFQSSBwYXRoXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgICBBY3Rpb24gZGF0YVxuICAgICAqIEByZXR1cm4ge21peH0gICAgICAgICAgQWN0aW9uIHJlc3VsdFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNyZWF0ZShwYXRoLCBkYXRhID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19hamF4KCdQT1NUJywgcGF0aCwgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGl0ZW1cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgIFJlc3QgQVBJIHBhdGhcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAgIEFjdGlvbiBkYXRhXG4gICAgICogQHJldHVybiB7bWl4fSAgICAgICAgICBBY3Rpb24gcmVzdWx0XG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgdXBkYXRlKHBhdGgsIGRhdGEgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2FqYXgoJ1BVVCcsIHBhdGgsIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBpdGVtXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggICBSZXN0IEFQSSBwYXRoXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgICBBY3Rpb24gZGF0YVxuICAgICAqIEByZXR1cm4ge21peH0gICAgICAgICAgQWN0aW9uIHJlc3VsdFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGRlbGV0ZShwYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fYWpheCgnREVMRVRFJywgcGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGZ1bGwgcGF0aFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoICAgIFJlc3RBUEkgcGF0aFxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gICAgICAgIEZ1bGwgcGF0aFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHF1ZXJ5KHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdFVSTCArIHBhdGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWpheFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgICAgQWpheCBtZXRob2RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgICAgIFJlc3RBUEkgcGF0aFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhICAgICAgT3B0aW9ucyB0byBiZSBwYXNzZWQgdG8gdGhlIHNlcnZlclxuICAgICAqIEByZXR1cm4ge21peH0gICAgICAgICAgICAgQWN0aW9uIHJlc3VsdFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIF9fYWpheChtZXRob2QgPSAnR0VUJywgcGF0aCwgZGF0YSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IHt9O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB1cmw6IHRoaXMucmVzdFVSTCArIHBhdGgsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdYLVdQLU5vbmNlJzogdGhpcy5yZXN0Tm9uY2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobWV0aG9kID09ICdQT1NUJyB8fCBtZXRob2QgPT0gJ1BVVCcpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucHJvY2Vzc0RhdGEgPSBmYWxzZTtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgICAgb3B0aW9ucy5jb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JztcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMuZXJyb3IgPSAoanFYSFIsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oY2FsbGJhY2tzLmZhaWwpKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLmZhaWwuY2FsbCh0aGlzLCBqcVhIUiwgdGV4dFN0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLnN1Y2Nlc3MgPSAocmVzcG9uc2UsIHRleHRTdGF0dXMsIGpxWEhSKSA9PiB7XG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKGNhbGxiYWNrcy5kb25lKSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5kb25lLmNhbGwodGhpcywgcmVzcG9uc2UsIHRleHRTdGF0dXMsIGpxWEhSKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IHpjLmFqYXgob3B0aW9ucyk7XG5cbiAgICAgICAgb3V0cHV0LmZhaWwgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5mYWlsID0gY2FsbGJhY2s7XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9O1xuXG4gICAgICAgIG91dHB1dC5kb25lID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFja3MuZG9uZSA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogWmltYnJ1Q29kZSBmdW5jdGlvbnNcbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFBvcFVwICAgZnJvbSAnLi9tb2R1bGUvcG9wdXAnO1xuaW1wb3J0IENvb2tpZSAgZnJvbSAnLi9tb2R1bGUvY29va2llJztcbmltcG9ydCBSZXN0QVBJIGZyb20gJy4vbW9kdWxlL3Jlc3QtYXBpJztcblxuaW1wb3J0IFRQTF9fY29uZmlybSBmcm9tICcuL3RwbC9jb25maXJtLmh0bWwnO1xuaW1wb3J0IFRQTF9fcHJvbXB0ICBmcm9tICcuL3RwbC9wcm9tcHQuaHRtbCc7XG5pbXBvcnQgVFBMX19hbGVydCAgIGZyb20gJy4vdHBsL2FsZXJ0Lmh0bWwnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5jbGFzcyBaaW1icnVDb2RlIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIE1vZHVsZXMgb2JqZWN0c1xuICAgICAgICB0aGlzLm1vZHVsZSA9IHt9O1xuICAgICAgICBcbiAgICAgICAgLy8gTW9kdWxlIGRhdGFcbiAgICAgICAgdGhpcy5tb2R1bGVEYXRhID0ge307XG5cbiAgICAgICAgLy8gR2xvYmFsIGRhdGFcbiAgICAgICAgdGhpcy5nbG9iYWwgPSB7fTtcblxuICAgICAgICAvLyBGdW5jdGlvbiA6IENvb2tpZVxuICAgICAgICB0aGlzLmNvb2tpZSA9IG5ldyBDb29raWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIG1vZHVsZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgIG5hbWUgICAgIE1vZHVsZSBuYW1lXG4gICAgICogQHBhcmFtIHtjYWxsYWJsZX0gbW9kdWxlICAgQ2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgICAgICAgICAgICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkTW9kdWxlKG5hbWUsIG1vZHVsZSkge1xuICAgICAgICB0aGlzLmluaXRNb2R1bGVEYXRhKG5hbWUpO1xuICAgICAgICB0aGlzLm1vZHVsZVtuYW1lXSA9IG1vZHVsZSgkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXphdGlvbiBvZiBtb2R1bGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgIE1vZHVsZSBuYW1lXG4gICAgICogQHJldHVybiB7bnVsbH0gICAgICAgICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaW5pdE1vZHVsZURhdGEobmFtZSkge1xuICAgICAgICB0aGlzLm1vZHVsZURhdGFbbmFtZV0gPSB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgbW9kdWxlIGRhdGFcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgIE1vZHVsZSBuYW1lXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgICBNb2R1bGUgZGF0YVxuICAgICAqIEByZXR1cm4ge251bGx9ICAgICAgICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZE1vZHVsZURhdGEobmFtZSwgZGF0YSA9IHt9KSB7XG4gICAgICAgIHRoaXMubW9kdWxlRGF0YVtuYW1lXSA9IGRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IG1vZHVsZSBkYXRhXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgICBNb2R1bGUgbmFtZVxuICAgICAqIEByZXR1cm4ge29iamVjdH0gICAgICAgTW9kdWxlIGRhdGFcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBnZXRNb2R1bGVEYXRhKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlRGF0YVtuYW1lXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSB1bmlxdWUgSURcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtpbnRlZ2VyfSAgIFVuaXF1ZSBJRFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHVuaXF1ZUlEKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjYpICsgRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIGFsbCBvY2N1cnJlbmNlcyBvZiB0aGUgc2VhcmNoIHN0cmluZyB3aXRoIHRoZSByZXBsYWNlbWVudCBzdHJpbmdcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2FycmF5fSAgc2VhcmNoICAgIFRoZSB2YWx1ZSBiZWluZyBzZWFyY2hlZCBmb3IsIG90aGVyd2lzZSBrbm93biBhcyB0aGUgbmVlZGxlXG4gICAgICogQHBhcmFtIHthcnJheX0gIHJlcGxhY2UgICBUaGUgcmVwbGFjZW1lbnQgdmFsdWUgdGhhdCByZXBsYWNlcyBmb3VuZCBzZWFyY2ggdmFsdWVzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN1YmplY3QgICBUaGUgc3RyaW5nIG9yIGFycmF5IGJlaW5nIHNlYXJjaGVkIGFuZCByZXBsYWNlZCBvbiwgb3RoZXJ3aXNlIGtub3duIGFzIHRoZSBoYXlzdGFja1xuICAgICAqIEByZXR1cm4ge3N0cmluZ30gICAgICAgICAgU3RyaW5nIHdpdGggcmVwbGFjZWQgdmFsdWVzXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgc3RyUmVwbGFjZShzZWFyY2gsIHJlcGxhY2UsIHN1YmplY3QpIHtcbiAgICAgICAgbGV0IHJlZ1N0ciA9ICcnO1xuXG4gICAgICAgIHNlYXJjaC5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoIC0gMSA9PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJlZ1N0ciArPSBlbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVnU3RyICs9IGAke2VsfXxgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3ViamVjdC5yZXBsYWNlKG5ldyBSZWdFeHAocmVnU3RyLCAnZycpLCAobWF0Y2gpID0+IHtcbiAgICAgICAgICAgIGxldCBvdXRwdXQgPSAnJztcblxuICAgICAgICAgICAgc2VhcmNoLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbCA9PSBtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHJlcGxhY2VbaW5kZXhdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gcmVwbGFjZVtpbmRleF0obWF0Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gcmVwbGFjZVtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVtcGxhdGUgaGFuZGxlclxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0cGwgIFRlbXBsYXRlIEhUTUxcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBEYXRhIGZvciBwcmVwYXJpbmcgdGVtcGxhdGVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICB0cGwodHBsID0gJycsIGRhdGEgPSB7fSkge1xuICAgICAgICBpZiAodHlwZW9mIHRwbCA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBsZXQgc2VhcmNoID0gW107XG4gICAgICAgICAgICBsZXQgcmVwbGFjZSA9IFtdO1xuXG4gICAgICAgICAgICAkLmVhY2goZGF0YSwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBzZWFyY2gucHVzaChge3ske2tleX19fWApO1xuICAgICAgICAgICAgICAgIHJlcGxhY2UucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyUmVwbGFjZShzZWFyY2gsIHJlcGxhY2UsIHRwbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVlcCBmaW5kIGFuZCBzZXR0aW5nXG4gICAgICogXG4gICAgICogQHBhcmFtIHtvYmplY3R9ICBvYmogICAgICBPYmplY3QgZGF0YVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgcGF0aCAgICAgT2JqZWN0IHBhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgIHZhbHVlICAgIFZhbHVlXG4gICAgICogQHBhcmFtIHtib29sZWFufSByZW1vdmUgICBcIlRydWVcIiBpZiB0aGUgaXRlbSBuZWVkcyB0byBiZSByZW1vdmVkXG4gICAgICogQHJldHVybiB7bWl4fSAgICAgICAgICAgICBJdGVtIHZhbHVlXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZGVlcEZpbmRBbmRTZXR0aW5nKG9iaiwgcGF0aCwgdmFsdWUsIHJlbW92ZSA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBwYXRocyA9IHBhdGguc3BsaXQoJy8nKSwgY3VycmVudCA9IG9iaiwgaTtcblxuICAgICAgICBpZiAocmVtb3ZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIHBhdGhzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXRocy5sZW5ndGggLSAxID09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRbcGF0aHNbaV1dID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudCA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnRbcGF0aHNbaV1dID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50W3BhdGhzW2ldXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhdGhzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnRbcGF0aHNbaV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXRocy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IHVuZGVmaW5lZCB8fCBjdXJyZW50W2VsXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnRbZWxdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBwYXRocykge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50ID09PSB1bmRlZmluZWQgfHwgY3VycmVudFtwYXRoc1tpXV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXRocy5sZW5ndGggLSAxID09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjdXJyZW50W3BhdGhzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhdGhzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGlzIG1vYmlsZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59ICAgUmVzdWx0IG9mIGNoZWNraW5nXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaXNNb2JpbGUoKSB7XG4gICAgICAgIGlmICgvaVAob2R8aG9uZXxhZCkvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9BbmRyb2lkL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIGlmICgvTW9iaWxlL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoL0lFTW9iaWxlL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvV2luZG93cyBQaG9uZS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL0JsYWNrQmVycnkvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9CQjEwL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLmFwcE5hbWUgPT09IFwiTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudE1vZGUgPj0gODtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSb3VuZFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBleHAgXG4gICAgICogQHJldHVybiB7c3RyaW5nfSAgIEFjdGlvbiByZXN1bHRcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICByb3VuZCh2YWx1ZSwgZXhwKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZXhwID09PSAndW5kZWZpbmVkJyB8fCArZXhwID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9ICt2YWx1ZTtcbiAgICAgICAgZXhwID0gK2V4cDtcbiAgICAgICAgXG4gICAgICAgIGlmIChpc05hTih2YWx1ZSkgfHwgISh0eXBlb2YgZXhwID09PSAnbnVtYmVyJyAmJiBleHAgJSAxID09PSAwKSkge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNoaWZ0XG4gICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnZScpO1xuICAgICAgICB2YWx1ZSA9IE1hdGgucm91bmQoKyh2YWx1ZVswXSArICdlJyArICh2YWx1ZVsxXSA/ICgrdmFsdWVbMV0gKyBleHApIDogZXhwKSkpO1xuICAgICAgICBcbiAgICAgICAgLy8gU2hpZnQgYmFja1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJ2UnKTtcblxuICAgICAgICByZXR1cm4gKyh2YWx1ZVswXSArICdlJyArICh2YWx1ZVsxXSA/ICgrdmFsdWVbMV0gLSBleHApIDogLWV4cCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2l6ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Y2FsbGFibGV9IGNhbGxiYWNrV2lkdGggICAgQ2FsbGJhY2sgMVxuICAgICAqIEBwYXJhbSB7Y2FsbGFibGV9IGNhbGxiYWNrSGVpZ2h0ICAgQ2FsbGJhY2sgMlxuICAgICAqIEByZXR1cm4ge251bGx9ICAgICAgICAgICAgICAgICAgICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHJlc2l6ZShjYWxsYmFja1dpZHRoLCBjYWxsYmFja0hlaWdodCkge1xuICAgICAgICBsZXQgd2luZG93V2lkdGggID0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgICAgICB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggIT0gd2luZG93V2lkdGgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihjYWxsYmFja1dpZHRoKSkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1dpZHRoKHdpbmRvd1dpZHRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgIT0gd2luZG93SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihjYWxsYmFja0hlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tIZWlnaHQod2luZG93SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb25lIGFuIG9iamVjdFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3QgICBBbiBvYmplY3QgdGhhdCB3aWxsIHJlY2VpdmUgdGhlIG5ldyBwcm9wZXJ0aWVzXG4gICAgICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgIENsb25lZCBvYmplY3RcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjbG9uZShvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuICQuZXh0ZW5kKHRydWUsIHt9LCBvYmplY3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCByYW5kb20gc3RyaW5nXG4gICAgICogXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBsZW5ndGggICBHZW5lcmF0ZWQgc3RyaW5nIGxlbmd0aFxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gICAgICAgICAgR2VuZXJhdGVkIHN0cmluZ1xuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHJhbmRvbUNvZGUobGVuZ3RoKSB7XG4gICAgICAgIGxldCBjaGFycyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaMTIzNDU2Nzg5MCcsXG4gICAgICAgICAgICBwYXNzID0gJyc7XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBsZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgbGV0IGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2Mik7XG4gICAgICAgICAgICBwYXNzICs9IGNoYXJzLmNoYXJBdChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXNzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlIGRhdGFcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gIGRhdGEgICAgICAgIERhdGEgb2JqZWN0XG4gICAgICogQHBhcmFtIHtib29sZWFufSBzdHJpbmdpZnkgICBJZiBcInRydWVcIiB3aWxsIGJlIFwic3RyaW5naWZ5XCJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAgICAgICAgICAgIEFjdGlvbiByZXN1bHRcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwYXJzZShkYXRhLCBzdHJpbmdpZnkpIHtcbiAgICAgICAgcmV0dXJuIChzdHJpbmdpZnkgPT09IHVuZGVmaW5lZCkgPyBKU09OLnBhcnNlKGRhdGEpIDogSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgc3RyaW5nIGZvcm1hdCBpcyBqc29uXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciAgIFN0cmluZ1xuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59ICAgICBSZXN1bHQgb2YgY2hlY2tpbmdcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBpc0pzb24oc3RyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBKU09OLnBhcnNlKHN0cik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgaGF5c3RhY2sgICBUaGUgaW5wdXQgc3RyaW5nXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICBuZWVkbGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGJlZm9yZU5lZWRsZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ3xib29sZWFufSAgICBSZXR1cm5zIHRoZSBwb3J0aW9uIG9mIHN0cmluZywgb3IgZmFsc2UgaWYgbmVlZGxlIGlzIG5vdCBmb3VuZFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHN0cnN0cihoYXlzdGFjaywgbmVlZGxlLCBiZWZvcmVOZWVkbGUpIHtcbiAgICAgICAgY29uc3QgcG9zID0gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpO1xuXG4gICAgICAgIGlmIChwb3MgPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChiZWZvcmVOZWVkbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGF5c3RhY2suc3Vic3RyKDAsIHBvcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBoYXlzdGFjay5zbGljZShwb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FwaXRhbGl6ZSBmaXJzdCBsZXR0ZXJcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIHN0ciAgIFRoZSBpbnB1dCBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGZvcmNlXG4gICAgICogQHJldHVybiB7c3RyaW5nfSAgICAgICBBY3Rpb24gcmVzdWx0XG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgdWNmaXJzdChzdHIsIGZvcmNlKSB7XG4gICAgICAgIHN0ciA9IGZvcmNlID8gc3RyLnRvTG93ZXJDYXNlKCkgOiBzdHIgfHwgJyc7XG5cbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxiKShbYS16QS1aXSkvLCAoZmlyc3RMZXR0ZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmaXJzdExldHRlci50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgb3IgdXBkYXRlIGEgcXVlcnkgc3RyaW5nIHBhcmFtZXRlciBpbiBVUkxcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1ldGVycyAgIFF1ZXJ5IHBhcmFtZXRlcnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsICAgICAgICAgIFVSTFxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gICAgICAgICAgICAgQWN0aW9uIHJlc3VsdFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZFF1ZXJ5U3RyaW5nKHBhcmFtZXRlcnMgPSB7fSwgdXJsKSB7XG4gICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByaXYgPSB7fTtcbiAgICAgICAgcHJpdi5VUVMgPSAoa2V5LCB2YWx1ZSwgdXJsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZSA9IG5ldyBSZWdFeHAoXCIoWz8mXSlcIiArIGtleSArIFwiPS4qPygmfCN8JCkoLiopXCIsIFwiZ2lcIik7XG4gICAgICAgICAgICBsZXQgaGFzaDtcblxuICAgICAgICAgICAgaWYgKHJlLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cmwucmVwbGFjZShyZSwgJyQxJyArIGtleSArIFwiPVwiICsgdmFsdWUgKyAnJDIkMycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc2ggPSB1cmwuc3BsaXQoJyMnKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gaGFzaFswXS5yZXBsYWNlKHJlLCAnJDEkMycpLnJlcGxhY2UoLygmfFxcPykkLywgJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaGFzaFsxXSAhPT0gJ3VuZGVmaW5lZCcgJiYgaGFzaFsxXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcjJyArIGhhc2hbMV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gdXJsLmluZGV4T2YoJz8nKSAhPT0gLTEgPyAnJicgOiAnPyc7XG5cbiAgICAgICAgICAgICAgICAgICAgaGFzaCA9IHVybC5zcGxpdCgnIycpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBoYXNoWzBdICsgc2VwYXJhdG9yICsga2V5ICsgJz0nICsgdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBoYXNoWzFdICE9PSAndW5kZWZpbmVkJyAmJiBoYXNoWzFdICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJyMnICsgaGFzaFsxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgJC5lYWNoKHBhcmFtZXRlcnMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB1cmwgPSBwcml2LlVRUyhrZXksIHZhbHVlLCB1cmwpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgaW4gVVJMXG4gICAgICogXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtZXRlcnMgICBRdWVyeSBwYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgICAgICAgICBVUkxcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgICAgICAgIEFjdGlvbiByZXN1bHRcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICByZW1vdmVRdWVyeVN0cmluZyhwYXJhbWV0ZXJzID0gW10sIHVybCkge1xuICAgICAgICBjb25zdCBwcml2ID0ge307XG5cbiAgICAgICAgcHJpdi5SUVMgPSAoa2V5LCB1cmwpID0+IHtcbiAgICAgICAgICAgIGxldCBydG4gPSB1cmwuc3BsaXQoXCI/XCIpWzBdO1xuICAgICAgICAgICAgbGV0IHBhcmFtO1xuICAgICAgICAgICAgbGV0IHBhcmFtc0FyciA9IFtdO1xuICAgICAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nID0gKHVybC5pbmRleE9mKFwiP1wiKSAhPT0gLTEpID8gdXJsLnNwbGl0KFwiP1wiKVsxXSA6ICcnO1xuXG4gICAgICAgICAgICBpZiAocXVlcnlTdHJpbmcgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zQXJyID0gcXVlcnlTdHJpbmcuc3BsaXQoXCImXCIpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHBhcmFtc0Fyci5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbSA9IHBhcmFtc0FycltpXS5zcGxpdChcIj1cIilbMF07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtc0Fyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBydG4gPSBydG4gKyBcIj9cIiArIHBhcmFtc0Fyci5qb2luKFwiJlwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJ0bjtcbiAgICAgICAgfTtcblxuICAgICAgICAkLmVhY2gocGFyYW1ldGVycywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHVybCA9IHByaXYuUlFTKHZhbHVlLCB1cmwpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBvcFVwXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwb3B1cCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb3BVcDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb25maXJtIFBvcFVwXG4gICAgICogXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGN1c3RvbVNldHRpbmdzICAgUG9wVXAgY3VzdG9tIHNldHRpbmdzXG4gICAgICogQHJldHVybiB7bnVsbH0gICAgICAgICAgICAgICAgICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNvbmZpcm0oY3VzdG9tU2V0dGluZ3MpIHtcbiAgICAgICAgY29uc3QgcG9wdXAgPSB0aGlzLnBvcHVwKCk7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBzdWJqZWN0OiAndGVzdCcsXG4gICAgICAgICAgICBvazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FuY2VsOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXRsZTogJ0NvbmZpcm0nLFxuICAgICAgICAgICAgdGl0bGVPSzogJ09LJyxcbiAgICAgICAgICAgIHRpdGxlQ2FuY2VsOiAnQ2FuY2VsJyxcbiAgICAgICAgICAgIGh0bWw6ICcnLFxuICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICAgICAgY2xhc3M6ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHNldHRpbmdzID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBjdXN0b21TZXR0aW5ncyksXG4gICAgICAgICAgICBodG1sID0gJyc7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLmh0bWwpIHtcbiAgICAgICAgICAgIGh0bWwgPSBzZXR0aW5ncy5odG1sO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHRtbCA9IHRoaXMudHBsKFRQTF9fY29uZmlybSwge1xuICAgICAgICAgICAgICAgIHN1YmplY3Q6IHNldHRpbmdzLnN1YmplY3QsXG4gICAgICAgICAgICAgICAgdGl0bGVfb2s6IHNldHRpbmdzLnRpdGxlT0ssXG4gICAgICAgICAgICAgICAgdGl0bGVfY2FuY2VsOiBzZXR0aW5ncy50aXRsZUNhbmNlbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3B1cC5hZGQoe1xuICAgICAgICAgICAgdGl0bGU6IHNldHRpbmdzLnRpdGxlLFxuICAgICAgICAgICAgaHRtbDogaHRtbCxcbiAgICAgICAgICAgIHdpZHRoOiBzZXR0aW5ncy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogc2V0dGluZ3MuaGVpZ2h0LFxuICAgICAgICAgICAgY2xhc3M6IGB6Yy1wb3B1cF9uby1wYWRkaW5nIHpjLXBvcHVwX3R5cGVfY29uZmlybSAke3NldHRpbmdzLmNsYXNzfWAsXG4gICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLWNvbmZpcm0nKS5vbignY2xpY2snLCAnLnpjLWNvbmZpcm1fX2J1dHRvbl90eXBlX29rJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5vayhwb3B1cCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKCcuemMtY29uZmlybScpLm9uKCdjbGljaycsICcuemMtY29uZmlybV9fYnV0dG9uX3R5cGVfY2FuY2VsJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5jYW5jZWwocG9wdXApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9tcHQgUG9wVXBcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY3VzdG9tU2V0dGluZ3MgIFBvcFVwIGN1c3RvbSBzZXR0aW5nc1xuICAgICAqIEByZXR1cm4ge251bGx9ICAgICAgICAgICAgICAgICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHByb21wdChjdXN0b21TZXR0aW5ncykge1xuICAgICAgICBjb25zdCBwb3B1cCA9IHRoaXMucG9wdXAoKTtcblxuICAgICAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIHN1YmplY3Q6ICd0ZXN0JyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnSW5zZXJ0IHlvdXIgdGV4dCcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgICAgIG9rOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYW5jZWw6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cC5jbG9zZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlOiAnUHJvbXB0JyxcbiAgICAgICAgICAgIHRpdGxlT0s6ICdPSycsXG4gICAgICAgICAgICB0aXRsZUNhbmNlbDogJ0NhbmNlbCcsXG4gICAgICAgICAgICBodG1sOiAnJyxcbiAgICAgICAgICAgIHdpZHRoOiA0MDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgICAgIGNsYXNzOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgY3VzdG9tU2V0dGluZ3MpLFxuICAgICAgICAgICAgaHRtbCA9ICcnO1xuXG4gICAgICAgIGlmIChzZXR0aW5ncy5odG1sKSB7XG4gICAgICAgICAgICBodG1sID0gc2V0dGluZ3MuaHRtbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGh0bWwgPSB0aGlzLnRwbChUUExfX3Byb21wdCwge1xuICAgICAgICAgICAgICAgIHN1YmplY3Q6IHNldHRpbmdzLnN1YmplY3QsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHNldHRpbmdzLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHNldHRpbmdzLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgdGl0bGVfb2s6IHNldHRpbmdzLnRpdGxlT0ssXG4gICAgICAgICAgICAgICAgdGl0bGVfY2FuY2VsOiBzZXR0aW5ncy50aXRsZUNhbmNlbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3B1cC5hZGQoe1xuICAgICAgICAgICAgdGl0bGU6IHNldHRpbmdzLnRpdGxlLFxuICAgICAgICAgICAgaHRtbDogaHRtbCxcbiAgICAgICAgICAgIHdpZHRoOiBzZXR0aW5ncy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogc2V0dGluZ3MuaGVpZ2h0LFxuICAgICAgICAgICAgY2xhc3M6IGB6Yy1wb3B1cF90eXBlX3Byb21wdCAke3NldHRpbmdzLmNsYXNzfWAsXG4gICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXByb21wdCcpLm9uKCdjbGljaycsICcuemMtcHJvbXB0X19idXR0b25fdHlwZV9vaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSAkKCcuemMtcHJvbXB0X19pbnB1dCcpLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5vayhwb3B1cCwgdGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuemMtcHJvbXB0X19pbnB1dCcpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQoJy56Yy1wcm9tcHQnKS5vbignY2xpY2snLCAnLnpjLXByb21wdF9fYnV0dG9uX3R5cGVfY2FuY2VsJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5jYW5jZWwocG9wdXApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGVydCBQb3BVcFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjdXN0b21TZXR0aW5ncyAgUG9wVXAgY3VzdG9tIHNldHRpbmdzXG4gICAgICogQHJldHVybiB7bnVsbH0gICAgICAgICAgICAgICAgICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWxlcnQoY3VzdG9tU2V0dGluZ3MpIHtcbiAgICAgICAgY29uc3QgcG9wdXAgPSB0aGlzLnBvcHVwKCk7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBzdWJqZWN0OiAndGVzdCcsXG4gICAgICAgICAgICBvazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU6ICdBbGVydCcsXG4gICAgICAgICAgICB0aXRsZU9LOiAnT0snLFxuICAgICAgICAgICAgaHRtbDogJycsXG4gICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICAgICAgICBjbGFzczogJydcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIGN1c3RvbVNldHRpbmdzKSxcbiAgICAgICAgICAgIGh0bWwgPSAnJztcblxuICAgICAgICBpZiAoc2V0dGluZ3MuaHRtbCkge1xuICAgICAgICAgICAgaHRtbCA9IHNldHRpbmdzLmh0bWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBodG1sID0gdGhpcy50cGwoVFBMX19hbGVydCwge1xuICAgICAgICAgICAgICAgIHN1YmplY3Q6IHNldHRpbmdzLnN1YmplY3QsXG4gICAgICAgICAgICAgICAgdGl0bGVfb2s6IHNldHRpbmdzLnRpdGxlT0tcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9wdXAuYWRkKHtcbiAgICAgICAgICAgIHRpdGxlOiBzZXR0aW5ncy50aXRsZSxcbiAgICAgICAgICAgIGh0bWw6IGh0bWwsXG4gICAgICAgICAgICB3aWR0aDogc2V0dGluZ3Mud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHNldHRpbmdzLmhlaWdodCxcbiAgICAgICAgICAgIGNsYXNzOiBgemMtcG9wdXBfdHlwZV9hbGVydCAke3NldHRpbmdzLmNsYXNzfWAsXG4gICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLWFsZXJ0Jykub24oJ2NsaWNrJywgJy56Yy1hbGVydF9fYnV0dG9uX3R5cGVfb2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLm9rKHBvcHVwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5wdXQgcmFuZ2VcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZSAgIEFjdGlvbiBtb2RlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgICBHZW5lcmFsIGRhdGFcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBpbnB1dFJhbmdlKG1vZGUsIGRhdGEgPSB7fSkge1xuICAgICAgICBpZiAobW9kZSAmJiBkYXRhLmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByaXYgPSB7fTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSBsaW5lIGJhY2tncm91bmRcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckxCQ2xhc3MgPSBkYXRhLmNvbnRhaW5lckxCQ2xhc3MgfHwgJyc7XG4gICAgICAgICAgICBwcml2Lmhhc0xCID0gZGF0YS5lbC5wYXJlbnQoKS5oYXNDbGFzcyhjb250YWluZXJMQkNsYXNzKTtcblxuICAgICAgICAgICAgLy8gQ3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgcHJpdi5jdXJyZW50VmFsdWUgPSBkYXRhLmVsLnZhbCgpO1xuXG4gICAgICAgICAgICAvLyBUcmFjayBwZXJjZW50XG4gICAgICAgICAgICBjb25zdCBtaW4gPSBkYXRhLnNldHRpbmdzLm1pbiB8fCAwO1xuICAgICAgICAgICAgY29uc3QgbWF4ID0gZGF0YS5zZXR0aW5ncy5tYXggfHwgMTAwO1xuXG4gICAgICAgICAgICBwcml2LnRyYWNrUGVyY2VudCA9ICgocHJpdi5jdXJyZW50VmFsdWUgLSBtaW4pICogMTAwKSAvIChtYXggLSBtaW4pO1xuXG4gICAgICAgICAgICAvLyBQb3N0Zml4XG4gICAgICAgICAgICBwcml2LnBvc3RmaXggPSBkYXRhLnNldHRpbmdzLnBvc3RmaXggfHwgJyc7XG5cbiAgICAgICAgICAgIC8vIEVsZW1lbnRzXG4gICAgICAgICAgICBjb25zdCBsZWZ0SW5kaWNhdG9yQ2xhc3MgICAgPSBkYXRhLmxlZnRJbmRpY2F0b3JDbGFzcyAgICB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbmRpY2F0b3JDbGFzcyA9IGRhdGEuY3VycmVudEluZGljYXRvckNsYXNzIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgcmlnaHRJbmRpY2F0b3JDbGFzcyAgID0gZGF0YS5yaWdodEluZGljYXRvckNsYXNzICAgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBncmlkQ29udGFpbmVyQ2xhc3MgICAgPSBkYXRhLmdyaWRDb250YWluZXJDbGFzcyAgICB8fCAnJztcblxuICAgICAgICAgICAgcHJpdi5sZWZ0SW5kaWNhdG9yICAgID0gKGxlZnRJbmRpY2F0b3JDbGFzcykgICAgPyBkYXRhLmVsLnBhcmVudCgpLmZpbmQoYC4ke2xlZnRJbmRpY2F0b3JDbGFzc31gKSAgICA6ICcnO1xuICAgICAgICAgICAgcHJpdi5jdXJyZW50SW5kaWNhdG9yID0gKGN1cnJlbnRJbmRpY2F0b3JDbGFzcykgPyBkYXRhLmVsLnBhcmVudCgpLmZpbmQoYC4ke2N1cnJlbnRJbmRpY2F0b3JDbGFzc31gKSA6ICcnO1xuICAgICAgICAgICAgcHJpdi5yaWdodEluZGljYXRvciAgID0gKHJpZ2h0SW5kaWNhdG9yQ2xhc3MpICAgPyBkYXRhLmVsLnBhcmVudCgpLmZpbmQoYC4ke3JpZ2h0SW5kaWNhdG9yQ2xhc3N9YCkgICA6ICcnO1xuICAgICAgICAgICAgcHJpdi5ncmlkQ29udGFpbmVyICAgID0gKGdyaWRDb250YWluZXJDbGFzcykgICAgPyBkYXRhLmVsLnBhcmVudCgpLmZpbmQoYC4ke2dyaWRDb250YWluZXJDbGFzc31gKSAgICA6ICcnO1xuXG4gICAgICAgICAgICAvLyBBZGQgdHJhY2sgcGVyY2VudFxuICAgICAgICAgICAgcHJpdi5hZGRUcmFja1BlcmNlbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFwcml2Lmhhc0xCKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZWwuY3NzKCdiYWNrZ3JvdW5kLXNpemUnLCBgJHtwcml2LnRyYWNrUGVyY2VudH0lIDEwMCVgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBTZXR1cCBpbmRpY2F0b3JcbiAgICAgICAgICAgIHByaXYuaW5kaWNhdG9yQ3VycmVudCA9IChjaGFuZ2VDdXJyZW50VmFsdWUgPSBmYWxzZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhpZGVGcm9tVG8gPSBkYXRhLnNldHRpbmdzLmhpZGVfZnJvbV90byB8fCBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChoaWRlRnJvbVRvICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRodW1iU2l6ZSA9IChwcml2Lmhhc0xCKSA/IDE3IDogMTY7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZUN1cnJlbnRWYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdi5jdXJyZW50SW5kaWNhdG9yLnRleHQocHJpdi5jdXJyZW50VmFsdWUgKyBwcml2LnBvc3RmaXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9ICdsZWZ0JztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdydGwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbmRpY2F0b3JXaWR0aCA9IHByaXYuY3VycmVudEluZGljYXRvci5vdXRlcldpZHRoKCkgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsY1Bvc2l0aW9uU3R5bGUgICAgID0gYCR7ZGlyZWN0aW9ufTogY2FsYygke3ByaXYudHJhY2tQZXJjZW50fSUgLSAkeygoY3VycmVudEluZGljYXRvcldpZHRoIC0gdGh1bWJTaXplKSAvIDIpICsgKHByaXYudHJhY2tQZXJjZW50IC8gMTAwKSAqIHRodW1iU2l6ZX1weClgOyBcblxuICAgICAgICAgICAgICAgICAgICBwcml2LmN1cnJlbnRJbmRpY2F0b3IuYXR0cignc3R5bGUnLCBjYWxjUG9zaXRpb25TdHlsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gU2hvdy9IaWRlIGluZGljYXRvcnMgOiBsZWZ0ICYgcmlnaHRcbiAgICAgICAgICAgIHByaXYuaW5kaWNhdG9yc1Nob3dIaWRlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhpZGVNaW5NYXggPSBkYXRhLnNldHRpbmdzLmhpZGVfbWluX21heCB8fCBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChoaWRlTWluTWF4ICE9PSB0cnVlICYmIHByaXYuY3VycmVudEluZGljYXRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IExEID0gcHJpdi5sZWZ0SW5kaWNhdG9yLmdldCgwKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgQ0QgPSBwcml2LmN1cnJlbnRJbmRpY2F0b3IuZ2V0KDApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBSRCA9IHByaXYucmlnaHRJbmRpY2F0b3IuZ2V0KDApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ3J0bCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoUkQucmlnaHQgLSAxID4gQ0QubGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXYucmlnaHRJbmRpY2F0b3IuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2LnJpZ2h0SW5kaWNhdG9yLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChMRC5sZWZ0ICsgMSA8IENELnJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpdi5sZWZ0SW5kaWNhdG9yLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpdi5sZWZ0SW5kaWNhdG9yLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTEQucmlnaHQgKyAxID4gQ0QubGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXYubGVmdEluZGljYXRvci5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXYubGVmdEluZGljYXRvci5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoUkQubGVmdCAtIDEgPCBDRC5yaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXYucmlnaHRJbmRpY2F0b3IuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2LnJpZ2h0SW5kaWNhdG9yLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBwcml2LmNvdW50RGVjaW1hbHMgPSAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoKHZhbHVlICUgMSkgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gTW9kZSA6IEluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICBwcml2LmluaXRNb2RlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByaXYuaW5kaWNhdG9yQ3VycmVudCgpO1xuICAgICAgICAgICAgICAgIHByaXYuaW5kaWNhdG9yc1Nob3dIaWRlKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBNb2RlIDogTGl2ZVxuICAgICAgICAgICAgcHJpdi5saXZlTW9kZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcml2LmFkZFRyYWNrUGVyY2VudCgpO1xuICAgICAgICAgICAgICAgIHByaXYuaW5kaWNhdG9yQ3VycmVudCh0cnVlKTtcbiAgICAgICAgICAgICAgICBwcml2LmluZGljYXRvcnNTaG93SGlkZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gTW9kZSA6IENoYW5nZVxuICAgICAgICAgICAgcHJpdi5jaGFuZ2VNb2RlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhpZGVNaW5NYXggPSBkYXRhLnNldHRpbmdzLmhpZGVfbWluX21heCB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG93R3JpZCAgID0gZGF0YS5zZXR0aW5ncy5ncmlkIHx8IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXAgICAgICAgPSBkYXRhLnNldHRpbmdzLnN0ZXAgfHwgMTtcblxuICAgICAgICAgICAgICAgIGRhdGEuZWwuYXR0cignbWluJywgbWluKTtcbiAgICAgICAgICAgICAgICBkYXRhLmVsLmF0dHIoJ21heCcsIG1heCk7XG4gICAgICAgICAgICAgICAgZGF0YS5lbC5kYXRhKCdzZXR0aW5ncycsIGRhdGEuc2V0dGluZ3MpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVNaW5NYXggPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHByaXYubGVmdEluZGljYXRvci50ZXh0KG1pbiArIHByaXYucG9zdGZpeCk7XG4gICAgICAgICAgICAgICAgICAgIHByaXYucmlnaHRJbmRpY2F0b3IudGV4dChtYXggKyBwcml2LnBvc3RmaXgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzaG93R3JpZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWFyayA9IChtYXggLSBtaW4pIC8gNDtcblxuICAgICAgICAgICAgICAgICAgICBwcml2LmdyaWRDb250YWluZXIuZmluZCgnbGlbZGF0YS1uPTFdID4gc3BhbicpLnRleHQobWluKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpdi5ncmlkQ29udGFpbmVyLmZpbmQoJ2xpW2RhdGEtbj0yXSA+IHNwYW4nKS50ZXh0KHpjLnJvdW5kKG1hcmsgKyBtaW4sIHByaXYuY291bnREZWNpbWFscyhzdGVwKSkpO1xuICAgICAgICAgICAgICAgICAgICBwcml2LmdyaWRDb250YWluZXIuZmluZCgnbGlbZGF0YS1uPTNdID4gc3BhbicpLnRleHQoemMucm91bmQobWFyayAqIDIgKyBtaW4sIHByaXYuY291bnREZWNpbWFscyhzdGVwKSkpO1xuICAgICAgICAgICAgICAgICAgICBwcml2LmdyaWRDb250YWluZXIuZmluZCgnbGlbZGF0YS1uPTRdID4gc3BhbicpLnRleHQoemMucm91bmQobWFyayAqIDMgKyBtaW4sIHByaXYuY291bnREZWNpbWFscyhzdGVwKSkpO1xuICAgICAgICAgICAgICAgICAgICBwcml2LmdyaWRDb250YWluZXIuZmluZCgnbGlbZGF0YS1uPTVdID4gc3BhbicpLnRleHQobWF4KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwcml2LmFkZFRyYWNrUGVyY2VudCgpO1xuICAgICAgICAgICAgICAgIHByaXYuaW5kaWNhdG9yQ3VycmVudCh0cnVlKTtcbiAgICAgICAgICAgICAgICBwcml2LmluZGljYXRvcnNTaG93SGlkZSgpO1xuICAgICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2luaXQnOlxuICAgICAgICAgICAgICAgICAgICBwcml2LmluaXRNb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xpdmUnOlxuICAgICAgICAgICAgICAgICAgICBwcml2LmxpdmVNb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NoYW5nZSc6XG4gICAgICAgICAgICAgICAgICAgIHByaXYuY2hhbmdlTW9kZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICAvKipcbiAgICAgKiBSZXN0IEFQSVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgICAgIFdvcmRQcmVzcyByZXN0IEFQSSBVUkxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbm9uY2UgICBXb3JkUHJlc3MgWCBub25jZSBmb3IgUmVzdEFQSVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHJlc3RBUEkodXJsLCBub25jZSkge1xuICAgICAgICByZXR1cm4gbmV3IFJlc3RBUEkodXJsLCBub25jZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZlbnQgc291cmNlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgICAgICAgVVJMIG9mIHRoZSBzb3VyY2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc2V0dGluZ3MgICBFdmVudCBzZXR0aW5nc1xuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGV2ZW50KHVybCwgc2V0dGluZ3MpIHtcbiAgICAgICAgY29uc3QgdXJsSGFuZGxlciA9IG5ldyBVUkwodXJsKTtcblxuICAgICAgICBpZiAoc2V0dGluZ3MuZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAkLmVhY2goc2V0dGluZ3MuZGF0YSwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICB1cmxIYW5kbGVyLnNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV2dFNvdXJjZSA9IG5ldyB3aW5kb3cuRXZlbnRTb3VyY2UodXJsSGFuZGxlci5ocmVmKTtcblxuICAgICAgICBpZiAoc2V0dGluZ3MubGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihzZXR0aW5ncy5saXN0ZW5lcikpIHtcbiAgICAgICAgICAgICAgICBldnRTb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MubGlzdGVuZXIocmVzcG9uc2UsIGV2dFNvdXJjZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZXR0aW5ncy5saXN0ZW5lciA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAkLmVhY2goc2V0dGluZ3MubGlzdGVuZXIsIChrZXksIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2dFNvdXJjZS5hZGRFdmVudExpc3RlbmVyKGtleSwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSwgZXZ0U291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2V0dGluZ3MuZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZXZ0U291cmNlLm9uZXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5lcnJvcihlcnJvciwgZXZ0U291cmNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uICAgQUpBWCBhY3Rpb24gbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBub25jZSAgICBBSkFYIG5vbmNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgIE9wdGlvbnMgdG8gYmUgcGFzc2VkIHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBAcmV0dXJuIHttaXh9ICAgICAgICAgICAgQWN0aW9uIHJlc3VsdFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFzeW5jIGpzb25SZXF1ZXN0KGFjdGlvbiwgbm9uY2UgPSAnJywgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyAgID0gNDtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSAxMDAwO1xuXG4gICAgICAgIGNvbnN0IHVybEhhbmRsZXIgPSBuZXcgVVJMKGFqYXh1cmwsICQobG9jYXRpb24pLmF0dHIoJ29yaWdpbicpKTtcbiAgICAgICAgdXJsSGFuZGxlci5zZWFyY2hQYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCBhY3Rpb24pO1xuXG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgICAgdXJsSGFuZGxlci5zZWFyY2hQYXJhbXMuYXBwZW5kKCdfd3Bub25jZScsIG5vbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNsZWVwID0gKG1zKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmZXRjaFJldHJ5ID0gYXN5bmMgKGJvZHlEYXRhLCBhdHRlbXB0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsSGFuZGxlci5ocmVmLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keURhdGEpXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGBFcnJvciAtICR7cmVzcG9uc2Uuc3RhdHVzfSA6ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0IDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoaW50ZXJ2YWwpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkoYm9keURhdGEsIGF0dGVtcHQgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgZmV0Y2hSZXRyeShvcHRpb25zLCBhdHRlbXB0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQUpBWFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjdXN0b21TZXR0aW5ncyAgIEFKQVggY3VzdG9tIHNldHRpbmdzXG4gICAgICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgICAgICAgICAgQUpBWCBpbnN0YW5jZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgICBhamF4KGN1c3RvbVNldHRpbmdzKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICB1cmw6IGFqYXh1cmwsXG4gICAgICAgICAgICBkYXRhOiAnJyxcbiAgICAgICAgICAgIGJlZm9yZTogKCkgPT4ge30sXG4gICAgICAgICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignWmltYnJ1Q29kZSA6IEFqYXggRXJyb3InKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHt9XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGNoZWNrTiA9IDE7XG5cbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSAxMDAwO1xuICAgICAgICBjb25zdCBpdGVyYXRpb25zID0gNDtcblxuICAgICAgICBzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgY3VzdG9tU2V0dGluZ3MpO1xuXG4gICAgICAgIGNvbnN0IHByZXBhcmVkU2V0dGluZ3MgPSB0aGlzLmNsb25lKHNldHRpbmdzKTtcblxuICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmdzLmJlZm9yZSkpIHtcbiAgICAgICAgICAgIHByZXBhcmVkU2V0dGluZ3MuYmVmb3JlU2VuZCA9IHNldHRpbmdzLmJlZm9yZTtcbiAgICAgICAgICAgIGRlbGV0ZSBwcmVwYXJlZFNldHRpbmdzLmJlZm9yZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXBhcmVkU2V0dGluZ3Muc3VjY2VzcyA9IChyZXNwb25zZSwgdGV4dFN0YXR1cywganFYSFIpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSA8IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmdzLmVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5lcnJvcihqcVhIUiwgdGV4dFN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmdzLnN1Y2Nlc3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLnN1Y2Nlc3MocmVzcG9uc2UsIHRleHRTdGF0dXMsIGpxWEhSKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcHJlcGFyZWRTZXR0aW5ncy5lcnJvciA9IChqcVhIUiwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgaWYgKGNoZWNrTiA8PSBpdGVyYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrTiArKztcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHByZXBhcmVkU2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgIH0sIGludGVydmFsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihzZXR0aW5ncy5lcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuZXJyb3IoanFYSFIsIHRleHRTdGF0dXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gJC5hamF4KHByZXBhcmVkU2V0dGluZ3MpO1xuICAgIH1cbn1cblxuLy8gQ2xhc3MgaW5pdGlhbGl6YXRpb24gOiBaaW1icnVDb2RlXG53aW5kb3cuemMgPSBuZXcgWmltYnJ1Q29kZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==