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

                    const currentIndicatorWidth = priv.currentIndicator.outerWidth() || 0;
                    const calcPositionStyle     = `left: calc(${priv.trackPercent}% - ${((currentIndicatorWidth - thumbSize) / 2) + (priv.trackPercent / 100) * thumbSize}px)`; 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2pxdWVyeS56aW1icnVjb2RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSx5QkFBeUIsSUFBSSxzQkFBc0IsT0FBTywyR0FBMkcsT0FBTztBQUM1SztBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDSG5CO0FBQ0Esd0dBQXdHLFNBQVMsdUxBQXVMLFVBQVU7QUFDbFQ7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQ0huQjtBQUNBLDhHQUE4RyxTQUFTLDhKQUE4SixVQUFVLGdHQUFnRyxjQUFjO0FBQzdZO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUNIbkI7QUFDQSwyR0FBMkcsU0FBUyw0QkFBNEIsYUFBYSxhQUFhLFNBQVMsb0xBQW9MLFVBQVUsOEZBQThGLGNBQWM7QUFDN2Q7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUNGbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFRTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixlQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsaUJBQWlCO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLG9CQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxj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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixnQkFBZ0I7QUFDaEM7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBLHFDQUFxQyxpQkFBaUIsSUFBSSxvQkFBb0I7QUFDOUU7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0Isd0JBQXdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDhCQUE4Qjs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi9tb2R1bGUvdHBsL3BvcHVwLmh0bWwiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9SZXNvdXJjZXMvcGFja2FnZXMvemltYnJ1Y29kZS9lczYvdHBsL2FsZXJ0Lmh0bWwiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9SZXNvdXJjZXMvcGFja2FnZXMvemltYnJ1Y29kZS9lczYvdHBsL2NvbmZpcm0uaHRtbCIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi90cGwvcHJvbXB0Lmh0bWwiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9SZXNvdXJjZXMvcGFja2FnZXMvemltYnJ1Y29kZS9lczYvbW9kdWxlL2Nvb2tpZS5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi9tb2R1bGUvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9SZXNvdXJjZXMvcGFja2FnZXMvemltYnJ1Y29kZS9lczYvbW9kdWxlL3Jlc3QtYXBpLmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ppbWJydWNvZGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi9qcXVlcnkuemltYnJ1Y29kZS5lczYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiIDxkaXYgaWQ9XFxcInt7aWR9fVxcXCIgY2xhc3M9XFxcInpjLXBvcHVwIHt7Y2xhc3N9fVxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLXBvcHVwX193aW5kb3dcXFwiPiA8aGVhZGVyIGNsYXNzPVxcXCJ6Yy1wb3B1cF9faGVhZGVyXFxcIj4gPHNwYW4gY2xhc3M9XFxcInpjLXBvcHVwX190aXRsZVxcXCI+e3t0aXRsZX19PC9zcGFuPiA8aSBjbGFzcz1cXFwiemMtcG9wdXBfX2Nsb3NlIHpjLWljb24tY2xlYXJcXFwiPjwvaT4gPC9oZWFkZXI+IDxkaXYgY2xhc3M9XFxcInpjLXNjcm9sbGJhciB6Yy1wb3B1cF9fb3ZlcmZsb3ctaGlkZGVuXFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtcG9wdXBfX2xvYWRpbmdcXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1sb2FkaW5nLXNwaW5uZXIgemMtcG9wdXBfX2xvYWRpbmctc3Bpbm5lclxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLWxvYWRpbmctc3Bpbm5lcl9fYm91bmNlIHpjLWxvYWRpbmctc3Bpbm5lcl9fYm91bmNlX21vZGVfMVxcXCI+PC9kaXY+IDxkaXYgY2xhc3M9XFxcInpjLWxvYWRpbmctc3Bpbm5lcl9fYm91bmNlIHpjLWxvYWRpbmctc3Bpbm5lcl9fYm91bmNlX21vZGVfMlxcXCI+PC9kaXY+IDxkaXYgY2xhc3M9XFxcInpjLWxvYWRpbmctc3Bpbm5lcl9fYm91bmNlIHpjLWxvYWRpbmctc3Bpbm5lcl9fYm91bmNlX21vZGVfM1xcXCI+PC9kaXY+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiemMtcG9wdXBfX2NvbnRlbnRcXFwiPjwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCIgPGRpdiBjbGFzcz1cXFwiemMtYWxlcnRcXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1hbGVydF9fY29udGFpbmVyXFxcIj4gPHAgY2xhc3M9XFxcInpjLWFsZXJ0X190ZXh0XFxcIj57e3N1YmplY3R9fTwvcD4gPC9kaXY+IDxmb290ZXIgY2xhc3M9XFxcInpjLWFsZXJ0X19mb290ZXJcXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1hbGVydF9fY2VudGVyXFxcIj4gPGJ1dHRvbiBjbGFzcz1cXFwiemMtYWxlcnRfX2J1dHRvbiB6Yy1hbGVydF9fYnV0dG9uX3R5cGVfb2sgemMtYWxlcnRfX2J1dHRvbl9hY3RpdmVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+e3t0aXRsZV9va319PC9idXR0b24+IDwvZGl2PiA8L2Zvb3Rlcj48L2Rpdj4gXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIiA8ZGl2IGNsYXNzPVxcXCJ6Yy1jb25maXJtXFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtY29uZmlybV9fY29udGFpbmVyXFxcIj4gPHAgY2xhc3M9XFxcInpjLWNvbmZpcm1fX3RleHRcXFwiPnt7c3ViamVjdH19PC9wPiA8L2Rpdj4gPGZvb3RlciBjbGFzcz1cXFwiemMtY29uZmlybV9fZm9vdGVyXFxcIj4gPGJ1dHRvbiBjbGFzcz1cXFwiemMtY29uZmlybV9fYnV0dG9uIHpjLWNvbmZpcm1fX2J1dHRvbl90eXBlX29rIHpjLWNvbmZpcm1fX2J1dHRvbl9hY3RpdmVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+e3t0aXRsZV9va319PC9idXR0b24+IDxidXR0b24gY2xhc3M9XFxcInpjLWNvbmZpcm1fX2J1dHRvbiB6Yy1jb25maXJtX19idXR0b25fdHlwZV9jYW5jZWxcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+e3t0aXRsZV9jYW5jZWx9fTwvYnV0dG9uPiA8L2Zvb3Rlcj4gPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wcm9tcHRcXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wcm9tcHRfX2NvbnRhaW5lclxcXCI+IDxwIGNsYXNzPVxcXCJ6Yy1wcm9tcHRfX3RleHRcXFwiPnt7c3ViamVjdH19PC9wPiA8aW5wdXQgcGxhY2Vob2xkZXI9XFxcInt7cGxhY2Vob2xkZXJ9fVxcXCIgdmFsdWU9XFxcInt7ZGVmYXVsdH19XFxcIiBjbGFzcz1cXFwiemMtcHJvbXB0X19pbnB1dFxcXCI+IDwvZGl2PiA8Zm9vdGVyIGNsYXNzPVxcXCJ6Yy1wcm9tcHRfX2Zvb3RlclxcXCI+IDxidXR0b24gY2xhc3M9XFxcInpjLXByb21wdF9fYnV0dG9uIHpjLXByb21wdF9fYnV0dG9uX3R5cGVfb2sgemMtcHJvbXB0X19idXR0b25fYWN0aXZlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPnt7dGl0bGVfb2t9fTwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJ6Yy1wcm9tcHRfX2J1dHRvbiB6Yy1wcm9tcHRfX2J1dHRvbl90eXBlX2NhbmNlbFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj57e3RpdGxlX2NhbmNlbH19PC9idXR0b24+IDwvZm9vdGVyPiA8L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIHppbWJydWNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBaaW1icnVDb2RlL01vZHVsZSA6IENvb2tpZVxuICpcbiAqIEBhdXRob3IgIEMuUiA8Y3JAanVuanVsaW5pLmNvbT5cbiAqIEBwYWNrYWdlIHppbWJydWNvZGVcbiAqIEBzaW5jZSAgIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29raWUge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0cyA9IHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dGVuZCBhdHRyaWJ1dGVzXG4gICAgICogXG4gICAgICogQHBhcmFtICB7Li4uYW55fSBhcmdzICAgQXR0cmlidXRlc1xuICAgICAqIEByZXR1cm4ge29iamVjdH0gICAgICAgIE5ldyBhdHRyaWJ1dGVzXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgX19leHRlbmQoLi4uYXJncykge1xuICAgICAgICBsZXQgaSA9IDAsIHJlc3VsdCA9IHt9O1xuXG4gICAgICAgIGZvciAoOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZXMgPSBhcmdzW2ldO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBUElcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgICAgICAgIENvb2tpZSBuYW1lXG4gICAgICogQHBhcmFtIHttaXh9ICAgIHZhbHVlICAgICAgICBDb29raWUgdmFsdWVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlcyAgIENvb2tpZSBhdHRyaWJ1dGVzXG4gICAgICogQHJldHVybiB7bWl4fSAgICAgICAgICAgICAgICBBY3Rpb24gcmVzdWx0XG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgX19hcGkoa2V5LCB2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBsZXQgcmVzdWx0LCBjb252ZXJ0ZXIgPSAoKSA9PiB7fTtcblxuICAgICAgICAvLyBXcml0ZVxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSB0aGlzLl9fZXh0ZW5kKHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnLydcbiAgICAgICAgICAgIH0sIHRoaXMuZGVmYXVsdHMsIGF0dHJpYnV0ZXMpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMuZXhwaXJlcyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBleHBpcmVzID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBleHBpcmVzLnNldE1pbGxpc2Vjb25kcyhleHBpcmVzLmdldE1pbGxpc2Vjb25kcygpICsgYXR0cmlidXRlcy5leHBpcmVzICogODY0ZSs1KTtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmV4cGlyZXMgPSBleHBpcmVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHpjLnBhcnNlKHZhbHVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAoL15bXFx7XFxbXS8udGVzdChyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgICAgICAgIGlmICghY29udmVydGVyLndyaXRlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8M0F8M0N8M0V8M0R8MkZ8M0Z8NDB8NUJ8NUR8NUV8NjB8N0J8N0R8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gY29udmVydGVyLndyaXRlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpO1xuICAgICAgICAgICAga2V5ID0ga2V5LnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8NUV8NjB8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG4gICAgICAgICAgICBrZXkgPSBrZXkucmVwbGFjZSgvW1xcKFxcKV0vZywgZXNjYXBlKTtcblxuICAgICAgICAgICAgcmV0dXJuIChkb2N1bWVudC5jb29raWUgPSBbXG4gICAgICAgICAgICAgICAga2V5LCAnPScsIHZhbHVlLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuZXhwaXJlcyAmJiAnOyBleHBpcmVzPScgKyBhdHRyaWJ1dGVzLmV4cGlyZXMudG9VVENTdHJpbmcoKSwgLy8gdXNlIGV4cGlyZXMgYXR0cmlidXRlLCBtYXgtYWdlIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUVcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnBhdGggICAgJiYgJzsgcGF0aD0nICsgYXR0cmlidXRlcy5wYXRoLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuZG9tYWluICAmJiAnOyBkb21haW49JyArIGF0dHJpYnV0ZXMuZG9tYWluLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuc2VjdXJlID8gJzsgc2VjdXJlJyA6ICcnXG4gICAgICAgICAgICBdLmpvaW4oJycpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlYWRcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVG8gcHJldmVudCB0aGUgZm9yIGxvb3AgaW4gdGhlIGZpcnN0IHBsYWNlIGFzc2lnbiBhbiBlbXB0eSBhcnJheVxuICAgICAgICAvLyBpbiBjYXNlIHRoZXJlIGFyZSBubyBjb29raWVzIGF0IGFsbC4gQWxzbyBwcmV2ZW50cyBvZGQgcmVzdWx0IHdoZW5cbiAgICAgICAgLy8gY2FsbGluZyBcImdldCgpXCJcbiAgICAgICAgbGV0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXSxcbiAgICAgICAgICAgIHJkZWNvZGUgPSAvKCVbMC05QS1aXXsyfSkrL2csXG4gICAgICAgICAgICBpID0gMDtcblxuICAgICAgICBmb3IgKDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKSxcbiAgICAgICAgICAgICAgICBuYW1lID0gcGFydHNbMF0ucmVwbGFjZShyZGVjb2RlLCBkZWNvZGVVUklDb21wb25lbnQpLFxuICAgICAgICAgICAgICAgIGNvb2tpZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKTtcblxuICAgICAgICAgICAgaWYgKGNvb2tpZS5jaGFyQXQoMCkgPT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICBjb29raWUgPSBjb29raWUuc2xpY2UoMSwgLTEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvb2tpZSA9IGNvbnZlcnRlci5yZWFkID9cbiAgICAgICAgICAgICAgICAgICAgY29udmVydGVyLnJlYWQoY29va2llLCBuYW1lKSA6IGNvbnZlcnRlcihjb29raWUsIG5hbWUpIHx8XG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZS5yZXBsYWNlKHJkZWNvZGUsIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5qc29uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBjb29raWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IGNvb2tpZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgY29va2llXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgICAgICAgICBDb29raWUgbmFtZVxuICAgICAqIEBwYXJhbSB7bWl4fSAgICB2YWx1ZSAgICAgICAgQ29va2llIHZhbHVlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGF0dHJpYnV0ZXMgICBDb29raWUgYXR0cmlidXRlc1xuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZChrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHRoaXMuX19hcGkoa2V5LCB2YWx1ZSwgYXR0cmlidXRlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNvb2tpZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBDb29raWUgbmFtZVxuICAgICAqIEByZXR1cm4ge21peH0gICAgICAgICBDb29raWUgZGF0YVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19hcGkoa2V5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgY29va2llIGl0ZW1cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgICAgICAgIENvb2tpZSBuYW1lXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGF0dHJpYnV0ZXMgICBDb29raWUgYXR0cmlidXRlc1xuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHJlbW92ZShrZXksIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdGhpcy5fX2FwaShrZXksICcnLCB0aGlzLl9fZXh0ZW5kKGF0dHJpYnV0ZXMsIHtcbiAgICAgICAgICAgIGV4cGlyZXM6IC0xXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBKc29uIGRhdGFcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHttaXh9ICAgQ29va2llIGRhdGFcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBnZXRKU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2FwaS5hcHBseSh7XG4gICAgICAgICAgICBqc29uOiB0cnVlXG4gICAgICAgIH0sIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogWmltYnJ1Q29kZS9Nb2R1bGUgOiBQb3BVcFxuICpcbiAqIEBhdXRob3IgIEMuUiA8Y3JAanVuanVsaW5pLmNvbT5cbiAqIEBwYWNrYWdlIHppbWJydWNvZGVcbiAqIEBzaW5jZSAgIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgVFBMX19wb3B1cCBmcm9tICcuL3RwbC9wb3B1cC5odG1sJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wVXAge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pZCA9IGB6Yy1wb3B1cC0ke3pjLnVuaXF1ZUlEKCl9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgcG9wdXBcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY3VzdG9tU2V0dGluZ3MgICBQb3BVcCBjdXN0b20gc2V0dGluZ3NcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgICAgICAgICAgICAgICAgICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkKGN1c3RvbVNldHRpbmdzKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdQb3BVcCBUaXRsZScsXG4gICAgICAgICAgICBqc29uUmVxdWVzdDoge30sXG4gICAgICAgICAgICBlcnJvcjogKGVycm9yTXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignWmltYnJ1Q29kZSA6IFBvcFVwJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmVmb3JlOiAoKSA9PiB7fSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge30sXG4gICAgICAgICAgICBhZnRlclNob3dDb250ZW50OiAoKSA9PiB7fSxcbiAgICAgICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgICAgIGhlaWdodDogJycsXG4gICAgICAgICAgICBodG1sOiAnJyxcbiAgICAgICAgICAgIGNsYXNzOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBjdXN0b21TZXR0aW5ncyksXG4gICAgICAgICAgICAgIHN0cnVjdHVyZSA9IHpjLnRwbChUUExfX3BvcHVwLCB7XG4gICAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBzZXR0aW5ncy5jbGFzcyxcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBzZXR0aW5ncy50aXRsZVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZChzdHJ1Y3R1cmUpO1xuXG4gICAgICAgIGlmIChzZXR0aW5ncy5qc29uUmVxdWVzdC5hY3Rpb24gIT09IHVuZGVmaW5lZCAmJiBzZXR0aW5ncy5qc29uUmVxdWVzdC5hY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2l6ZShzZXR0aW5ncy5oZWlnaHQsIHNldHRpbmdzLndpZHRoKTtcblxuICAgICAgICAgICAgc2V0dGluZ3MuYmVmb3JlKCk7XG4gICAgICAgICAgICB0aGlzLmhpZGVDb250ZW50KCk7XG5cbiAgICAgICAgICAgIHpjLmpzb25SZXF1ZXN0KHNldHRpbmdzLmpzb25SZXF1ZXN0LmFjdGlvbiwgc2V0dGluZ3MuanNvblJlcXVlc3Qubm9uY2UgfHwgJycsIHNldHRpbmdzLmpzb25SZXF1ZXN0Lm9wdGlvbnMgfHwge30pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZENvbnRlbnQocmVzcG9uc2UuY29udGVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0dGluZ3Muc3VjY2VzcyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudCgpO1xuICAgICAgICAgICAgICAgIHNldHRpbmdzLmFmdGVyU2hvd0NvbnRlbnQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yTXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3MuZXJyb3IoZXJyb3JNc2cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNpemUoc2V0dGluZ3MuaGVpZ2h0LCBzZXR0aW5ncy53aWR0aCk7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENvbnRlbnQoc2V0dGluZ3MuaHRtbCk7XG4gICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KCk7XG4gICAgICAgICAgICBzZXR0aW5ncy5zdWNjZXNzKHNldHRpbmdzLmh0bWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgJChgIyR7dGhpcy5pZH1gKS5vbignY2xpY2snLCAnLnpjLXBvcHVwX19jbG9zZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignbW91c2Vkb3duIHRvdWNoc3RhcnQnLCBgIyR7dGhpcy5pZH1gLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvcHVwV2luZG93ID0gJCgnLnpjLXBvcHVwX193aW5kb3cnKTtcblxuICAgICAgICAgICAgaWYgKCFwb3B1cFdpbmRvdy5pcyhldmVudC50YXJnZXQpICYmIHBvcHVwV2luZG93LmhhcyhldmVudC50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsYyBwb3B1cCB3aW5kb3cgc2l6ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gaGVpZ2h0ICAgV2luZG93IGhlaWdodFxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gd2lkdGggICAgV2luZG93IHdpZHRoXG4gICAgICogQHJldHVybiB7bnVsbH0gICAgICAgICAgICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgc2l6ZShoZWlnaHQsIHdpZHRoKSB7XG4gICAgICAgIGhlaWdodCA9ICh0eXBlb2YgaGVpZ2h0ICE9PSAndW5kZWZpbmVkJyB8fCBoZWlnaHQpID8gaGVpZ2h0IDogZmFsc2U7XG4gICAgICAgIHdpZHRoICA9ICh0eXBlb2Ygd2lkdGggIT09ICd1bmRlZmluZWQnIHx8IHdpZHRoKSA/IHdpZHRoIDogZmFsc2U7XG5cbiAgICAgICAgY29uc3QgcHJpdiA9IHtcbiAgICAgICAgICAgIGNhbGNTaXplIDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnQuKnJ2XFw6MTFcXC4vKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fd2luZG93YCkuY3NzKHsnbWF4LXdpZHRoJzogYCR7d2lkdGh9cHhgLCAnd2lkdGgnOiAnMTAwJSd9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fd2luZG93YCkuY3NzKHsnbWF4LWhlaWdodCc6IGAke2hlaWdodH1weGAsICdoZWlnaHQnOiAnMTAwJSd9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX193aW5kb3dgKS5jc3MoeydtYXgtd2lkdGgnOiBgJHt3aWR0aH1weGB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fd2luZG93YCkuY3NzKHsnbWF4LWhlaWdodCc6IGAke2hlaWdodH1weGB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBwcml2LmNhbGNTaXplKCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICAgICAgICBwcml2LmNhbGNTaXplKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgY29udGVudFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGhpZGVDb250ZW50KCkge1xuICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX2NvbnRlbnRgKS5oaWRlKCk7XG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IGNvbnRlbnRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzaG93Q29udGVudCgpIHtcbiAgICAgICAgdGhpcy5oaWRlTG9hZGluZygpO1xuICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX3dpbmRvdyAuemMtc2Nyb2xsYmFyYCkucmVtb3ZlQ2xhc3MoJ3pjLXBvcHVwX19vdmVyZmxvdy1oaWRkZW4nKTtcbiAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX19jb250ZW50YCkuc2hvdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgbG9hZGluZ1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGhpZGVMb2FkaW5nKCkge1xuICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX2xvYWRpbmdgKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBsb2FkaW5nXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgc2hvd0xvYWRpbmcoKSB7XG4gICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fbG9hZGluZ2ApLnNob3coKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFcmFzZSBjb250ZW50XG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcmVtQ29udGVudCgpIHtcbiAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX19jb250ZW50YCkuZW1wdHkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmQgY29udGVudFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFwcGVuZENvbnRlbnQoY29udGVudCkge1xuICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX2NvbnRlbnRgKS5hcHBlbmQoY29udGVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX193aW5kb3dgKS5hZGRDbGFzcygnemMtcG9wdXBfX3dpbmRvd19jbG9zZScpO1xuICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX3dpbmRvd2ApLm9uZSgnYW5pbWF0aW9uZW5kIHdlYmtpdEFuaW1hdGlvbkVuZCBvQW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAkKGAjJHt0aGlzLmlkfSBgKS5oaWRlKCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdpbml0aWFsJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFppbWJydUNvZGUvTW9kdWxlIDogUmVzdEFQSVxuICpcbiAqIEBhdXRob3IgIEMuUiA8Y3JAanVuanVsaW5pLmNvbT5cbiAqIEBwYWNrYWdlIHppbWJydWNvZGVcbiAqIEBzaW5jZSAgIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN0QVBJIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgICAgUmVzdCBVUmxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbm9uY2UgICBOb25jZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHVybCwgbm9uY2UpIHtcbiAgICAgICAgdGhpcy5yZXN0VVJMID0gdXJsO1xuICAgICAgICB0aGlzLnJlc3ROb25jZSA9IG5vbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBpdGVtXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggICBSZXN0IEFQSSBwYXRoXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgICBBY3Rpb24gZGF0YVxuICAgICAqIEByZXR1cm4ge21peH0gICAgICAgICAgQWN0aW9uIHJlc3VsdFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGdldChwYXRoLCBkYXRhID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19hamF4KCdHRVQnLCBwYXRoLCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgaXRlbVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoICAgUmVzdCBBUEkgcGF0aFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhICAgQWN0aW9uIGRhdGFcbiAgICAgKiBAcmV0dXJuIHttaXh9ICAgICAgICAgIEFjdGlvbiByZXN1bHRcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjcmVhdGUocGF0aCwgZGF0YSA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fYWpheCgnUE9TVCcsIHBhdGgsIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBpdGVtXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggICBSZXN0IEFQSSBwYXRoXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgICBBY3Rpb24gZGF0YVxuICAgICAqIEByZXR1cm4ge21peH0gICAgICAgICAgQWN0aW9uIHJlc3VsdFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHVwZGF0ZShwYXRoLCBkYXRhID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19hamF4KCdQVVQnLCBwYXRoLCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgaXRlbVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoICAgUmVzdCBBUEkgcGF0aFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhICAgQWN0aW9uIGRhdGFcbiAgICAgKiBAcmV0dXJuIHttaXh9ICAgICAgICAgIEFjdGlvbiByZXN1bHRcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBkZWxldGUocGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2FqYXgoJ0RFTEVURScsIHBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBmdWxsIHBhdGhcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgICBSZXN0QVBJIHBhdGhcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgICBGdWxsIHBhdGhcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBxdWVyeShwYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RVUkwgKyBwYXRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFqYXhcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kICAgIEFqYXggbWV0aG9kXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggICAgICBSZXN0QVBJIHBhdGhcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAgICAgIE9wdGlvbnMgdG8gYmUgcGFzc2VkIHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBAcmV0dXJuIHttaXh9ICAgICAgICAgICAgIEFjdGlvbiByZXN1bHRcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBfX2FqYXgobWV0aG9kID0gJ0dFVCcsIHBhdGgsIGRhdGEgPSB7fSkge1xuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSB7fTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdXJsOiB0aGlzLnJlc3RVUkwgKyBwYXRoLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnWC1XUC1Ob25jZSc6IHRoaXMucmVzdE5vbmNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG1ldGhvZCA9PSAnUE9TVCcgfHwgbWV0aG9kID09ICdQVVQnKSB7XG4gICAgICAgICAgICBvcHRpb25zLnByb2Nlc3NEYXRhID0gZmFsc2U7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgICAgIG9wdGlvbnMuY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCc7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLmVycm9yID0gKGpxWEhSLCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKGNhbGxiYWNrcy5mYWlsKSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5mYWlsLmNhbGwodGhpcywganFYSFIsIHRleHRTdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9ucy5zdWNjZXNzID0gKHJlc3BvbnNlLCB0ZXh0U3RhdHVzLCBqcVhIUikgPT4ge1xuICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihjYWxsYmFja3MuZG9uZSkpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MuZG9uZS5jYWxsKHRoaXMsIHJlc3BvbnNlLCB0ZXh0U3RhdHVzLCBqcVhIUik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvdXRwdXQgPSB6Yy5hamF4KG9wdGlvbnMpO1xuXG4gICAgICAgIG91dHB1dC5mYWlsID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFja3MuZmFpbCA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfTtcblxuICAgICAgICBvdXRwdXQuZG9uZSA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2tzLmRvbmUgPSBjYWxsYmFjaztcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFppbWJydUNvZGUgZnVuY3Rpb25zXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBQb3BVcCAgIGZyb20gJy4vbW9kdWxlL3BvcHVwJztcbmltcG9ydCBDb29raWUgIGZyb20gJy4vbW9kdWxlL2Nvb2tpZSc7XG5pbXBvcnQgUmVzdEFQSSBmcm9tICcuL21vZHVsZS9yZXN0LWFwaSc7XG5cbmltcG9ydCBUUExfX2NvbmZpcm0gZnJvbSAnLi90cGwvY29uZmlybS5odG1sJztcbmltcG9ydCBUUExfX3Byb21wdCAgZnJvbSAnLi90cGwvcHJvbXB0Lmh0bWwnO1xuaW1wb3J0IFRQTF9fYWxlcnQgICBmcm9tICcuL3RwbC9hbGVydC5odG1sJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuY2xhc3MgWmltYnJ1Q29kZSB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBNb2R1bGVzIG9iamVjdHNcbiAgICAgICAgdGhpcy5tb2R1bGUgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIC8vIE1vZHVsZSBkYXRhXG4gICAgICAgIHRoaXMubW9kdWxlRGF0YSA9IHt9O1xuXG4gICAgICAgIC8vIEdsb2JhbCBkYXRhXG4gICAgICAgIHRoaXMuZ2xvYmFsID0ge307XG5cbiAgICAgICAgLy8gRnVuY3Rpb24gOiBDb29raWVcbiAgICAgICAgdGhpcy5jb29raWUgPSBuZXcgQ29va2llO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBtb2R1bGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gICBuYW1lICAgICBNb2R1bGUgbmFtZVxuICAgICAqIEBwYXJhbSB7Y2FsbGFibGV9IG1vZHVsZSAgIENhbGxiYWNrXG4gICAgICogQHJldHVybiB7bnVsbH0gICAgICAgICAgICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZE1vZHVsZShuYW1lLCBtb2R1bGUpIHtcbiAgICAgICAgdGhpcy5pbml0TW9kdWxlRGF0YShuYW1lKTtcbiAgICAgICAgdGhpcy5tb2R1bGVbbmFtZV0gPSBtb2R1bGUoJCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6YXRpb24gb2YgbW9kdWxlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgICBNb2R1bGUgbmFtZVxuICAgICAqIEByZXR1cm4ge251bGx9ICAgICAgICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGluaXRNb2R1bGVEYXRhKG5hbWUpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVEYXRhW25hbWVdID0ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIG1vZHVsZSBkYXRhXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgICBNb2R1bGUgbmFtZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhICAgTW9kdWxlIGRhdGFcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgICAgICAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRNb2R1bGVEYXRhKG5hbWUsIGRhdGEgPSB7fSkge1xuICAgICAgICB0aGlzLm1vZHVsZURhdGFbbmFtZV0gPSBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBtb2R1bGUgZGF0YVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICAgTW9kdWxlIG5hbWVcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgIE1vZHVsZSBkYXRhXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0TW9kdWxlRGF0YShuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZHVsZURhdGFbbmFtZV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgdW5pcXVlIElEXG4gICAgICogXG4gICAgICogQHJldHVybiB7aW50ZWdlcn0gICBVbmlxdWUgSURcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICB1bmlxdWVJRCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI2KSArIERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBhbGwgb2NjdXJyZW5jZXMgb2YgdGhlIHNlYXJjaCBzdHJpbmcgd2l0aCB0aGUgcmVwbGFjZW1lbnQgc3RyaW5nXG4gICAgICogXG4gICAgICogQHBhcmFtIHthcnJheX0gIHNlYXJjaCAgICBUaGUgdmFsdWUgYmVpbmcgc2VhcmNoZWQgZm9yLCBvdGhlcndpc2Uga25vd24gYXMgdGhlIG5lZWRsZVxuICAgICAqIEBwYXJhbSB7YXJyYXl9ICByZXBsYWNlICAgVGhlIHJlcGxhY2VtZW50IHZhbHVlIHRoYXQgcmVwbGFjZXMgZm91bmQgc2VhcmNoIHZhbHVlc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdWJqZWN0ICAgVGhlIHN0cmluZyBvciBhcnJheSBiZWluZyBzZWFyY2hlZCBhbmQgcmVwbGFjZWQgb24sIG90aGVyd2lzZSBrbm93biBhcyB0aGUgaGF5c3RhY2tcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgICAgIFN0cmluZyB3aXRoIHJlcGxhY2VkIHZhbHVlc1xuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHN0clJlcGxhY2Uoc2VhcmNoLCByZXBsYWNlLCBzdWJqZWN0KSB7XG4gICAgICAgIGxldCByZWdTdHIgPSAnJztcblxuICAgICAgICBzZWFyY2guZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCAtIDEgPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZWdTdHIgKz0gZWw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlZ1N0ciArPSBgJHtlbH18YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN1YmplY3QucmVwbGFjZShuZXcgUmVnRXhwKHJlZ1N0ciwgJ2cnKSwgKG1hdGNoKSA9PiB7XG4gICAgICAgICAgICBsZXQgb3V0cHV0ID0gJyc7XG5cbiAgICAgICAgICAgIHNlYXJjaC5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWwgPT0gbWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihyZXBsYWNlW2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IHJlcGxhY2VbaW5kZXhdKG1hdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IHJlcGxhY2VbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRlbXBsYXRlIGhhbmRsZXJcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHBsICBUZW1wbGF0ZSBIVE1MXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgRGF0YSBmb3IgcHJlcGFyaW5nIHRlbXBsYXRlXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgdHBsKHRwbCA9ICcnLCBkYXRhID0ge30pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0cGwgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgbGV0IHNlYXJjaCA9IFtdO1xuICAgICAgICAgICAgbGV0IHJlcGxhY2UgPSBbXTtcblxuICAgICAgICAgICAgJC5lYWNoKGRhdGEsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VhcmNoLnB1c2goYHt7JHtrZXl9fX1gKTtcbiAgICAgICAgICAgICAgICByZXBsYWNlLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0clJlcGxhY2Uoc2VhcmNoLCByZXBsYWNlLCB0cGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZXAgZmluZCBhbmQgc2V0dGluZ1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSAgb2JqICAgICAgT2JqZWN0IGRhdGFcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIHBhdGggICAgIE9iamVjdCBwYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgICB2YWx1ZSAgICBWYWx1ZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVtb3ZlICAgXCJUcnVlXCIgaWYgdGhlIGl0ZW0gbmVlZHMgdG8gYmUgcmVtb3ZlZFxuICAgICAqIEByZXR1cm4ge21peH0gICAgICAgICAgICAgSXRlbSB2YWx1ZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGRlZXBGaW5kQW5kU2V0dGluZyhvYmosIHBhdGgsIHZhbHVlLCByZW1vdmUgPSBmYWxzZSkge1xuICAgICAgICBsZXQgcGF0aHMgPSBwYXRoLnNwbGl0KCcvJyksIGN1cnJlbnQgPSBvYmosIGk7XG5cbiAgICAgICAgaWYgKHJlbW92ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBwYXRocykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGF0aHMubGVuZ3RoIC0gMSA9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50W3BhdGhzW2ldXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IHVuZGVmaW5lZCB8fCBjdXJyZW50W3BhdGhzW2ldXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFtwYXRoc1tpXV0gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudFtwYXRoc1tpXV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhdGhzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGF0aHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50ID09PSB1bmRlZmluZWQgfHwgY3VycmVudFtlbF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W2VsXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gcGF0aHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudCA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnRbcGF0aHNbaV1dID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGF0aHMubGVuZ3RoIC0gMSA9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY3VycmVudFtwYXRoc1tpXV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudFtwYXRoc1tpXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpcyBtb2JpbGVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAgIFJlc3VsdCBvZiBjaGVja2luZ1xuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGlzTW9iaWxlKCkge1xuICAgICAgICBpZiAoL2lQKG9kfGhvbmV8YWQpL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvQW5kcm9pZC9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICBpZiAoL01vYmlsZS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9JRU1vYmlsZS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL1dpbmRvd3MgUGhvbmUvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9CbGFja0JlcnJ5L2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvQkIxMC9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93Lm5hdmlnYXRvci5hcHBOYW1lID09PSBcIk1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlclwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRNb2RlID49IDg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUm91bmRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZXhwIFxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gICBBY3Rpb24gcmVzdWx0XG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcm91bmQodmFsdWUsIGV4cCkge1xuICAgICAgICBpZiAodHlwZW9mIGV4cCA9PT0gJ3VuZGVmaW5lZCcgfHwgK2V4cCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgPSArdmFsdWU7XG4gICAgICAgIGV4cCA9ICtleHA7XG4gICAgICAgIFxuICAgICAgICBpZiAoaXNOYU4odmFsdWUpIHx8ICEodHlwZW9mIGV4cCA9PT0gJ251bWJlcicgJiYgZXhwICUgMSA9PT0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaGlmdFxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJ2UnKTtcbiAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKCsodmFsdWVbMF0gKyAnZScgKyAodmFsdWVbMV0gPyAoK3ZhbHVlWzFdICsgZXhwKSA6IGV4cCkpKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNoaWZ0IGJhY2tcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KCdlJyk7XG5cbiAgICAgICAgcmV0dXJuICsodmFsdWVbMF0gKyAnZScgKyAodmFsdWVbMV0gPyAoK3ZhbHVlWzFdIC0gZXhwKSA6IC1leHApKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNpemVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2NhbGxhYmxlfSBjYWxsYmFja1dpZHRoICAgIENhbGxiYWNrIDFcbiAgICAgKiBAcGFyYW0ge2NhbGxhYmxlfSBjYWxsYmFja0hlaWdodCAgIENhbGxiYWNrIDJcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgICAgICAgICAgICAgICAgICAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICByZXNpemUoY2FsbGJhY2tXaWR0aCwgY2FsbGJhY2tIZWlnaHQpIHtcbiAgICAgICAgbGV0IHdpbmRvd1dpZHRoICA9IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgICAgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgICQod2luZG93KS5yZXNpemUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoICE9IHdpbmRvd1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgICAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oY2FsbGJhY2tXaWR0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tXaWR0aCh3aW5kb3dXaWR0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ICE9IHdpbmRvd0hlaWdodCkge1xuICAgICAgICAgICAgICAgIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oY2FsbGJhY2tIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrSGVpZ2h0KHdpbmRvd0hlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9uZSBhbiBvYmplY3RcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0ICAgQW4gb2JqZWN0IHRoYXQgd2lsbCByZWNlaXZlIHRoZSBuZXcgcHJvcGVydGllc1xuICAgICAqIEByZXR1cm4ge29iamVjdH0gICAgICAgICBDbG9uZWQgb2JqZWN0XG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY2xvbmUob2JqZWN0KSB7XG4gICAgICAgIHJldHVybiAkLmV4dGVuZCh0cnVlLCB7fSwgb2JqZWN0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgcmFuZG9tIHN0cmluZ1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbGVuZ3RoICAgR2VuZXJhdGVkIHN0cmluZyBsZW5ndGhcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgICAgIEdlbmVyYXRlZCBzdHJpbmdcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICByYW5kb21Db2RlKGxlbmd0aCkge1xuICAgICAgICBsZXQgY2hhcnMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWjEyMzQ1Njc4OTAnLFxuICAgICAgICAgICAgcGFzcyA9ICcnO1xuXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIGxldCBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNjIpO1xuICAgICAgICAgICAgcGFzcyArPSBjaGFycy5jaGFyQXQoaSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFzcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSBkYXRhXG4gICAgICogXG4gICAgICogQHBhcmFtIHtvYmplY3R9ICBkYXRhICAgICAgICBEYXRhIG9iamVjdFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RyaW5naWZ5ICAgSWYgXCJ0cnVlXCIgd2lsbCBiZSBcInN0cmluZ2lmeVwiXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gICAgICAgICAgICBBY3Rpb24gcmVzdWx0XG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcGFyc2UoZGF0YSwgc3RyaW5naWZ5KSB7XG4gICAgICAgIHJldHVybiAoc3RyaW5naWZ5ID09PSB1bmRlZmluZWQpID8gSlNPTi5wYXJzZShkYXRhKSA6IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHN0cmluZyBmb3JtYXQgaXMganNvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgICBTdHJpbmdcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAgICAgUmVzdWx0IG9mIGNoZWNraW5nXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaXNKc29uKHN0cikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgSlNPTi5wYXJzZShzdHIpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIGhheXN0YWNrICAgVGhlIGlucHV0IHN0cmluZ1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgbmVlZGxlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBiZWZvcmVOZWVkbGVcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd8Ym9vbGVhbn0gICAgUmV0dXJucyB0aGUgcG9ydGlvbiBvZiBzdHJpbmcsIG9yIGZhbHNlIGlmIG5lZWRsZSBpcyBub3QgZm91bmRcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzdHJzdHIoaGF5c3RhY2ssIG5lZWRsZSwgYmVmb3JlTmVlZGxlKSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IGhheXN0YWNrLmluZGV4T2YobmVlZGxlKTtcblxuICAgICAgICBpZiAocG9zID09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYmVmb3JlTmVlZGxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhheXN0YWNrLnN1YnN0cigwLCBwb3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGF5c3RhY2suc2xpY2UocG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhcGl0YWxpemUgZmlyc3QgbGV0dGVyXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICBzdHIgICBUaGUgaW5wdXQgc3RyaW5nXG4gICAgICogQHBhcmFtIHtib29sZWFufSBmb3JjZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gICAgICAgQWN0aW9uIHJlc3VsdFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHVjZmlyc3Qoc3RyLCBmb3JjZSkge1xuICAgICAgICBzdHIgPSBmb3JjZSA/IHN0ci50b0xvd2VyQ2FzZSgpIDogc3RyIHx8ICcnO1xuXG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFxcYikoW2EtekEtWl0pLywgKGZpcnN0TGV0dGVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3RMZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIG9yIHVwZGF0ZSBhIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgaW4gVVJMXG4gICAgICogXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtZXRlcnMgICBRdWVyeSBwYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgICAgICAgICBVUkxcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgICAgICAgIEFjdGlvbiByZXN1bHRcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRRdWVyeVN0cmluZyhwYXJhbWV0ZXJzID0ge30sIHVybCkge1xuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcml2ID0ge307XG4gICAgICAgIHByaXYuVVFTID0gKGtleSwgdmFsdWUsIHVybCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKFwiKFs/Jl0pXCIgKyBrZXkgKyBcIj0uKj8oJnwjfCQpKC4qKVwiLCBcImdpXCIpO1xuICAgICAgICAgICAgbGV0IGhhc2g7XG5cbiAgICAgICAgICAgIGlmIChyZS50ZXN0KHVybCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXJsLnJlcGxhY2UocmUsICckMScgKyBrZXkgKyBcIj1cIiArIHZhbHVlICsgJyQyJDMnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBoYXNoID0gdXJsLnNwbGl0KCcjJyk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IGhhc2hbMF0ucmVwbGFjZShyZSwgJyQxJDMnKS5yZXBsYWNlKC8oJnxcXD8pJC8sICcnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGhhc2hbMV0gIT09ICd1bmRlZmluZWQnICYmIGhhc2hbMV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCArPSAnIycgKyBoYXNoWzFdO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcGFyYXRvciA9IHVybC5pbmRleE9mKCc/JykgIT09IC0xID8gJyYnIDogJz8nO1xuXG4gICAgICAgICAgICAgICAgICAgIGhhc2ggPSB1cmwuc3BsaXQoJyMnKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gaGFzaFswXSArIHNlcGFyYXRvciArIGtleSArICc9JyArIHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaGFzaFsxXSAhPT0gJ3VuZGVmaW5lZCcgJiYgaGFzaFsxXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcjJyArIGhhc2hbMV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgICQuZWFjaChwYXJhbWV0ZXJzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdXJsID0gcHJpdi5VUVMoa2V5LCB2YWx1ZSwgdXJsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyIGluIFVSTFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbWV0ZXJzICAgUXVlcnkgcGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgICAgICAgICAgVVJMXG4gICAgICogQHJldHVybiB7c3RyaW5nfSAgICAgICAgICAgICBBY3Rpb24gcmVzdWx0XG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcmVtb3ZlUXVlcnlTdHJpbmcocGFyYW1ldGVycyA9IFtdLCB1cmwpIHtcbiAgICAgICAgY29uc3QgcHJpdiA9IHt9O1xuXG4gICAgICAgIHByaXYuUlFTID0gKGtleSwgdXJsKSA9PiB7XG4gICAgICAgICAgICBsZXQgcnRuID0gdXJsLnNwbGl0KFwiP1wiKVswXTtcbiAgICAgICAgICAgIGxldCBwYXJhbTtcbiAgICAgICAgICAgIGxldCBwYXJhbXNBcnIgPSBbXTtcbiAgICAgICAgICAgIGxldCBxdWVyeVN0cmluZyA9ICh1cmwuaW5kZXhPZihcIj9cIikgIT09IC0xKSA/IHVybC5zcGxpdChcIj9cIilbMV0gOiAnJztcblxuICAgICAgICAgICAgaWYgKHF1ZXJ5U3RyaW5nICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHBhcmFtc0FyciA9IHF1ZXJ5U3RyaW5nLnNwbGl0KFwiJlwiKTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBwYXJhbXNBcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW0gPSBwYXJhbXNBcnJbaV0uc3BsaXQoXCI9XCIpWzBdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNBcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcnRuID0gcnRuICsgXCI/XCIgKyBwYXJhbXNBcnIuam9pbihcIiZcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBydG47XG4gICAgICAgIH07XG5cbiAgICAgICAgJC5lYWNoKHBhcmFtZXRlcnMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB1cmwgPSBwcml2LlJRUyh2YWx1ZSwgdXJsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQb3BVcFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcG9wdXAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUG9wVXA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uZmlybSBQb3BVcFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjdXN0b21TZXR0aW5ncyAgIFBvcFVwIGN1c3RvbSBzZXR0aW5nc1xuICAgICAqIEByZXR1cm4ge251bGx9ICAgICAgICAgICAgICAgICAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjb25maXJtKGN1c3RvbVNldHRpbmdzKSB7XG4gICAgICAgIGNvbnN0IHBvcHVwID0gdGhpcy5wb3B1cCgpO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgc3ViamVjdDogJ3Rlc3QnLFxuICAgICAgICAgICAgb2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cC5jbG9zZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbmNlbDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU6ICdDb25maXJtJyxcbiAgICAgICAgICAgIHRpdGxlT0s6ICdPSycsXG4gICAgICAgICAgICB0aXRsZUNhbmNlbDogJ0NhbmNlbCcsXG4gICAgICAgICAgICBodG1sOiAnJyxcbiAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgICAgIGNsYXNzOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgY3VzdG9tU2V0dGluZ3MpLFxuICAgICAgICAgICAgaHRtbCA9ICcnO1xuXG4gICAgICAgIGlmIChzZXR0aW5ncy5odG1sKSB7XG4gICAgICAgICAgICBodG1sID0gc2V0dGluZ3MuaHRtbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGh0bWwgPSB0aGlzLnRwbChUUExfX2NvbmZpcm0sIHtcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBzZXR0aW5ncy5zdWJqZWN0LFxuICAgICAgICAgICAgICAgIHRpdGxlX29rOiBzZXR0aW5ncy50aXRsZU9LLFxuICAgICAgICAgICAgICAgIHRpdGxlX2NhbmNlbDogc2V0dGluZ3MudGl0bGVDYW5jZWxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9wdXAuYWRkKHtcbiAgICAgICAgICAgIHRpdGxlOiBzZXR0aW5ncy50aXRsZSxcbiAgICAgICAgICAgIGh0bWw6IGh0bWwsXG4gICAgICAgICAgICB3aWR0aDogc2V0dGluZ3Mud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHNldHRpbmdzLmhlaWdodCxcbiAgICAgICAgICAgIGNsYXNzOiBgemMtcG9wdXBfbm8tcGFkZGluZyB6Yy1wb3B1cF90eXBlX2NvbmZpcm0gJHtzZXR0aW5ncy5jbGFzc31gLFxuICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy56Yy1jb25maXJtJykub24oJ2NsaWNrJywgJy56Yy1jb25maXJtX19idXR0b25fdHlwZV9vaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mub2socG9wdXApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCgnLnpjLWNvbmZpcm0nKS5vbignY2xpY2snLCAnLnpjLWNvbmZpcm1fX2J1dHRvbl90eXBlX2NhbmNlbCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuY2FuY2VsKHBvcHVwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvbXB0IFBvcFVwXG4gICAgICogXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGN1c3RvbVNldHRpbmdzICBQb3BVcCBjdXN0b20gc2V0dGluZ3NcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgICAgICAgICAgICAgICAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwcm9tcHQoY3VzdG9tU2V0dGluZ3MpIHtcbiAgICAgICAgY29uc3QgcG9wdXAgPSB0aGlzLnBvcHVwKCk7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBzdWJqZWN0OiAndGVzdCcsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0luc2VydCB5b3VyIHRleHQnLFxuICAgICAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgICAgICBvazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FuY2VsOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXRsZTogJ1Byb21wdCcsXG4gICAgICAgICAgICB0aXRsZU9LOiAnT0snLFxuICAgICAgICAgICAgdGl0bGVDYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgICAgICAgaHRtbDogJycsXG4gICAgICAgICAgICB3aWR0aDogNDAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICAgICAgICBjbGFzczogJydcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIGN1c3RvbVNldHRpbmdzKSxcbiAgICAgICAgICAgIGh0bWwgPSAnJztcblxuICAgICAgICBpZiAoc2V0dGluZ3MuaHRtbCkge1xuICAgICAgICAgICAgaHRtbCA9IHNldHRpbmdzLmh0bWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBodG1sID0gdGhpcy50cGwoVFBMX19wcm9tcHQsIHtcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBzZXR0aW5ncy5zdWJqZWN0LFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBzZXR0aW5ncy5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBzZXR0aW5ncy5kZWZhdWx0LFxuICAgICAgICAgICAgICAgIHRpdGxlX29rOiBzZXR0aW5ncy50aXRsZU9LLFxuICAgICAgICAgICAgICAgIHRpdGxlX2NhbmNlbDogc2V0dGluZ3MudGl0bGVDYW5jZWxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9wdXAuYWRkKHtcbiAgICAgICAgICAgIHRpdGxlOiBzZXR0aW5ncy50aXRsZSxcbiAgICAgICAgICAgIGh0bWw6IGh0bWwsXG4gICAgICAgICAgICB3aWR0aDogc2V0dGluZ3Mud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHNldHRpbmdzLmhlaWdodCxcbiAgICAgICAgICAgIGNsYXNzOiBgemMtcG9wdXBfdHlwZV9wcm9tcHQgJHtzZXR0aW5ncy5jbGFzc31gLFxuICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wcm9tcHQnKS5vbignY2xpY2snLCAnLnpjLXByb21wdF9fYnV0dG9uX3R5cGVfb2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJCgnLnpjLXByb21wdF9faW5wdXQnKS52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mub2socG9wdXAsIHRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXByb21wdF9faW5wdXQnKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKCcuemMtcHJvbXB0Jykub24oJ2NsaWNrJywgJy56Yy1wcm9tcHRfX2J1dHRvbl90eXBlX2NhbmNlbCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuY2FuY2VsKHBvcHVwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxlcnQgUG9wVXBcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY3VzdG9tU2V0dGluZ3MgIFBvcFVwIGN1c3RvbSBzZXR0aW5nc1xuICAgICAqIEByZXR1cm4ge251bGx9ICAgICAgICAgICAgICAgICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFsZXJ0KGN1c3RvbVNldHRpbmdzKSB7XG4gICAgICAgIGNvbnN0IHBvcHVwID0gdGhpcy5wb3B1cCgpO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgc3ViamVjdDogJ3Rlc3QnLFxuICAgICAgICAgICAgb2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cC5jbG9zZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlOiAnQWxlcnQnLFxuICAgICAgICAgICAgdGl0bGVPSzogJ09LJyxcbiAgICAgICAgICAgIGh0bWw6ICcnLFxuICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICAgICAgY2xhc3M6ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHNldHRpbmdzID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBjdXN0b21TZXR0aW5ncyksXG4gICAgICAgICAgICBodG1sID0gJyc7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLmh0bWwpIHtcbiAgICAgICAgICAgIGh0bWwgPSBzZXR0aW5ncy5odG1sO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHRtbCA9IHRoaXMudHBsKFRQTF9fYWxlcnQsIHtcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBzZXR0aW5ncy5zdWJqZWN0LFxuICAgICAgICAgICAgICAgIHRpdGxlX29rOiBzZXR0aW5ncy50aXRsZU9LXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvcHVwLmFkZCh7XG4gICAgICAgICAgICB0aXRsZTogc2V0dGluZ3MudGl0bGUsXG4gICAgICAgICAgICBodG1sOiBodG1sLFxuICAgICAgICAgICAgd2lkdGg6IHNldHRpbmdzLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBzZXR0aW5ncy5oZWlnaHQsXG4gICAgICAgICAgICBjbGFzczogYHpjLXBvcHVwX3R5cGVfYWxlcnQgJHtzZXR0aW5ncy5jbGFzc31gLFxuICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy56Yy1hbGVydCcpLm9uKCdjbGljaycsICcuemMtYWxlcnRfX2J1dHRvbl90eXBlX29rJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5vayhwb3B1cCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElucHV0IHJhbmdlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgICBBY3Rpb24gbW9kZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhICAgR2VuZXJhbCBkYXRhXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaW5wdXRSYW5nZShtb2RlLCBkYXRhID0ge30pIHtcbiAgICAgICAgaWYgKG1vZGUgJiYgZGF0YS5lbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBwcml2ID0ge307XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgbGluZSBiYWNrZ3JvdW5kXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJMQkNsYXNzID0gZGF0YS5jb250YWluZXJMQkNsYXNzIHx8ICcnO1xuICAgICAgICAgICAgcHJpdi5oYXNMQiA9IGRhdGEuZWwucGFyZW50KCkuaGFzQ2xhc3MoY29udGFpbmVyTEJDbGFzcyk7XG5cbiAgICAgICAgICAgIC8vIEN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIHByaXYuY3VycmVudFZhbHVlID0gZGF0YS5lbC52YWwoKTtcblxuICAgICAgICAgICAgLy8gVHJhY2sgcGVyY2VudFxuICAgICAgICAgICAgY29uc3QgbWluID0gZGF0YS5zZXR0aW5ncy5taW4gfHwgMDtcbiAgICAgICAgICAgIGNvbnN0IG1heCA9IGRhdGEuc2V0dGluZ3MubWF4IHx8IDEwMDtcblxuICAgICAgICAgICAgcHJpdi50cmFja1BlcmNlbnQgPSAoKHByaXYuY3VycmVudFZhbHVlIC0gbWluKSAqIDEwMCkgLyAobWF4IC0gbWluKTtcblxuICAgICAgICAgICAgLy8gUG9zdGZpeFxuICAgICAgICAgICAgcHJpdi5wb3N0Zml4ID0gZGF0YS5zZXR0aW5ncy5wb3N0Zml4IHx8ICcnO1xuXG4gICAgICAgICAgICAvLyBFbGVtZW50c1xuICAgICAgICAgICAgY29uc3QgbGVmdEluZGljYXRvckNsYXNzICAgID0gZGF0YS5sZWZ0SW5kaWNhdG9yQ2xhc3MgICAgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SW5kaWNhdG9yQ2xhc3MgPSBkYXRhLmN1cnJlbnRJbmRpY2F0b3JDbGFzcyB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0SW5kaWNhdG9yQ2xhc3MgICA9IGRhdGEucmlnaHRJbmRpY2F0b3JDbGFzcyAgIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgZ3JpZENvbnRhaW5lckNsYXNzICAgID0gZGF0YS5ncmlkQ29udGFpbmVyQ2xhc3MgICAgfHwgJyc7XG5cbiAgICAgICAgICAgIHByaXYubGVmdEluZGljYXRvciAgICA9IChsZWZ0SW5kaWNhdG9yQ2xhc3MpICAgID8gZGF0YS5lbC5wYXJlbnQoKS5maW5kKGAuJHtsZWZ0SW5kaWNhdG9yQ2xhc3N9YCkgICAgOiAnJztcbiAgICAgICAgICAgIHByaXYuY3VycmVudEluZGljYXRvciA9IChjdXJyZW50SW5kaWNhdG9yQ2xhc3MpID8gZGF0YS5lbC5wYXJlbnQoKS5maW5kKGAuJHtjdXJyZW50SW5kaWNhdG9yQ2xhc3N9YCkgOiAnJztcbiAgICAgICAgICAgIHByaXYucmlnaHRJbmRpY2F0b3IgICA9IChyaWdodEluZGljYXRvckNsYXNzKSAgID8gZGF0YS5lbC5wYXJlbnQoKS5maW5kKGAuJHtyaWdodEluZGljYXRvckNsYXNzfWApICAgOiAnJztcbiAgICAgICAgICAgIHByaXYuZ3JpZENvbnRhaW5lciAgICA9IChncmlkQ29udGFpbmVyQ2xhc3MpICAgID8gZGF0YS5lbC5wYXJlbnQoKS5maW5kKGAuJHtncmlkQ29udGFpbmVyQ2xhc3N9YCkgICAgOiAnJztcblxuICAgICAgICAgICAgLy8gQWRkIHRyYWNrIHBlcmNlbnRcbiAgICAgICAgICAgIHByaXYuYWRkVHJhY2tQZXJjZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcHJpdi5oYXNMQikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmVsLmNzcygnYmFja2dyb3VuZC1zaXplJywgYCR7cHJpdi50cmFja1BlcmNlbnR9JSAxMDAlYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gU2V0dXAgaW5kaWNhdG9yXG4gICAgICAgICAgICBwcml2LmluZGljYXRvckN1cnJlbnQgPSAoY2hhbmdlQ3VycmVudFZhbHVlID0gZmFsc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoaWRlRnJvbVRvID0gZGF0YS5zZXR0aW5ncy5oaWRlX2Zyb21fdG8gfHwgZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoaGlkZUZyb21UbyAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aHVtYlNpemUgPSAocHJpdi5oYXNMQikgPyAxNyA6IDE2O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VDdXJyZW50VmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXYuY3VycmVudEluZGljYXRvci50ZXh0KHByaXYuY3VycmVudFZhbHVlICsgcHJpdi5wb3N0Zml4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbmRpY2F0b3JXaWR0aCA9IHByaXYuY3VycmVudEluZGljYXRvci5vdXRlcldpZHRoKCkgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsY1Bvc2l0aW9uU3R5bGUgICAgID0gYGxlZnQ6IGNhbGMoJHtwcml2LnRyYWNrUGVyY2VudH0lIC0gJHsoKGN1cnJlbnRJbmRpY2F0b3JXaWR0aCAtIHRodW1iU2l6ZSkgLyAyKSArIChwcml2LnRyYWNrUGVyY2VudCAvIDEwMCkgKiB0aHVtYlNpemV9cHgpYDsgXG5cbiAgICAgICAgICAgICAgICAgICAgcHJpdi5jdXJyZW50SW5kaWNhdG9yLmF0dHIoJ3N0eWxlJywgY2FsY1Bvc2l0aW9uU3R5bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFNob3cvSGlkZSBpbmRpY2F0b3JzIDogbGVmdCAmIHJpZ2h0XG4gICAgICAgICAgICBwcml2LmluZGljYXRvcnNTaG93SGlkZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoaWRlTWluTWF4ID0gZGF0YS5zZXR0aW5ncy5oaWRlX21pbl9tYXggfHwgZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoaGlkZU1pbk1heCAhPT0gdHJ1ZSAmJiBwcml2LmN1cnJlbnRJbmRpY2F0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBMRCA9IHByaXYubGVmdEluZGljYXRvci5nZXQoMCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IENEID0gcHJpdi5jdXJyZW50SW5kaWNhdG9yLmdldCgwKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgUkQgPSBwcml2LnJpZ2h0SW5kaWNhdG9yLmdldCgwKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoTEQucmlnaHQgKyAxID4gQ0QubGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdi5sZWZ0SW5kaWNhdG9yLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXYubGVmdEluZGljYXRvci5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoUkQubGVmdCAtIDEgPCBDRC5yaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdi5yaWdodEluZGljYXRvci5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2LnJpZ2h0SW5kaWNhdG9yLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBwcml2LmNvdW50RGVjaW1hbHMgPSAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoKHZhbHVlICUgMSkgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gTW9kZSA6IEluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICBwcml2LmluaXRNb2RlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByaXYuaW5kaWNhdG9yQ3VycmVudCgpO1xuICAgICAgICAgICAgICAgIHByaXYuaW5kaWNhdG9yc1Nob3dIaWRlKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBNb2RlIDogTGl2ZVxuICAgICAgICAgICAgcHJpdi5saXZlTW9kZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcml2LmFkZFRyYWNrUGVyY2VudCgpO1xuICAgICAgICAgICAgICAgIHByaXYuaW5kaWNhdG9yQ3VycmVudCh0cnVlKTtcbiAgICAgICAgICAgICAgICBwcml2LmluZGljYXRvcnNTaG93SGlkZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gTW9kZSA6IENoYW5nZVxuICAgICAgICAgICAgcHJpdi5jaGFuZ2VNb2RlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhpZGVNaW5NYXggPSBkYXRhLnNldHRpbmdzLmhpZGVfbWluX21heCB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG93R3JpZCAgID0gZGF0YS5zZXR0aW5ncy5ncmlkIHx8IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXAgICAgICAgPSBkYXRhLnNldHRpbmdzLnN0ZXAgfHwgMTtcblxuICAgICAgICAgICAgICAgIGRhdGEuZWwuYXR0cignbWluJywgbWluKTtcbiAgICAgICAgICAgICAgICBkYXRhLmVsLmF0dHIoJ21heCcsIG1heCk7XG4gICAgICAgICAgICAgICAgZGF0YS5lbC5kYXRhKCdzZXR0aW5ncycsIGRhdGEuc2V0dGluZ3MpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVNaW5NYXggPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHByaXYubGVmdEluZGljYXRvci50ZXh0KG1pbiArIHByaXYucG9zdGZpeCk7XG4gICAgICAgICAgICAgICAgICAgIHByaXYucmlnaHRJbmRpY2F0b3IudGV4dChtYXggKyBwcml2LnBvc3RmaXgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzaG93R3JpZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWFyayA9IChtYXggLSBtaW4pIC8gNDtcblxuICAgICAgICAgICAgICAgICAgICBwcml2LmdyaWRDb250YWluZXIuZmluZCgnbGlbZGF0YS1uPTFdID4gc3BhbicpLnRleHQobWluKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpdi5ncmlkQ29udGFpbmVyLmZpbmQoJ2xpW2RhdGEtbj0yXSA+IHNwYW4nKS50ZXh0KHpjLnJvdW5kKG1hcmsgKyBtaW4sIHByaXYuY291bnREZWNpbWFscyhzdGVwKSkpO1xuICAgICAgICAgICAgICAgICAgICBwcml2LmdyaWRDb250YWluZXIuZmluZCgnbGlbZGF0YS1uPTNdID4gc3BhbicpLnRleHQoemMucm91bmQobWFyayAqIDIgKyBtaW4sIHByaXYuY291bnREZWNpbWFscyhzdGVwKSkpO1xuICAgICAgICAgICAgICAgICAgICBwcml2LmdyaWRDb250YWluZXIuZmluZCgnbGlbZGF0YS1uPTRdID4gc3BhbicpLnRleHQoemMucm91bmQobWFyayAqIDMgKyBtaW4sIHByaXYuY291bnREZWNpbWFscyhzdGVwKSkpO1xuICAgICAgICAgICAgICAgICAgICBwcml2LmdyaWRDb250YWluZXIuZmluZCgnbGlbZGF0YS1uPTVdID4gc3BhbicpLnRleHQobWF4KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwcml2LmFkZFRyYWNrUGVyY2VudCgpO1xuICAgICAgICAgICAgICAgIHByaXYuaW5kaWNhdG9yQ3VycmVudCh0cnVlKTtcbiAgICAgICAgICAgICAgICBwcml2LmluZGljYXRvcnNTaG93SGlkZSgpO1xuICAgICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2luaXQnOlxuICAgICAgICAgICAgICAgICAgICBwcml2LmluaXRNb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xpdmUnOlxuICAgICAgICAgICAgICAgICAgICBwcml2LmxpdmVNb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NoYW5nZSc6XG4gICAgICAgICAgICAgICAgICAgIHByaXYuY2hhbmdlTW9kZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICAvKipcbiAgICAgKiBSZXN0IEFQSVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgICAgIFdvcmRQcmVzcyByZXN0IEFQSSBVUkxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbm9uY2UgICBXb3JkUHJlc3MgWCBub25jZSBmb3IgUmVzdEFQSVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHJlc3RBUEkodXJsLCBub25jZSkge1xuICAgICAgICByZXR1cm4gbmV3IFJlc3RBUEkodXJsLCBub25jZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZlbnQgc291cmNlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgICAgICAgVVJMIG9mIHRoZSBzb3VyY2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc2V0dGluZ3MgICBFdmVudCBzZXR0aW5nc1xuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGV2ZW50KHVybCwgc2V0dGluZ3MpIHtcbiAgICAgICAgY29uc3QgdXJsSGFuZGxlciA9IG5ldyBVUkwodXJsKTtcblxuICAgICAgICBpZiAoc2V0dGluZ3MuZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAkLmVhY2goc2V0dGluZ3MuZGF0YSwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICB1cmxIYW5kbGVyLnNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV2dFNvdXJjZSA9IG5ldyB3aW5kb3cuRXZlbnRTb3VyY2UodXJsSGFuZGxlci5ocmVmKTtcblxuICAgICAgICBpZiAoc2V0dGluZ3MubGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihzZXR0aW5ncy5saXN0ZW5lcikpIHtcbiAgICAgICAgICAgICAgICBldnRTb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MubGlzdGVuZXIocmVzcG9uc2UsIGV2dFNvdXJjZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZXR0aW5ncy5saXN0ZW5lciA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAkLmVhY2goc2V0dGluZ3MubGlzdGVuZXIsIChrZXksIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2dFNvdXJjZS5hZGRFdmVudExpc3RlbmVyKGtleSwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSwgZXZ0U291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2V0dGluZ3MuZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZXZ0U291cmNlLm9uZXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5lcnJvcihlcnJvciwgZXZ0U291cmNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uICAgQUpBWCBhY3Rpb24gbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBub25jZSAgICBBSkFYIG5vbmNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgIE9wdGlvbnMgdG8gYmUgcGFzc2VkIHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBAcmV0dXJuIHttaXh9ICAgICAgICAgICAgQWN0aW9uIHJlc3VsdFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFzeW5jIGpzb25SZXF1ZXN0KGFjdGlvbiwgbm9uY2UgPSAnJywgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyAgID0gNDtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSAxMDAwO1xuXG4gICAgICAgIGNvbnN0IHVybEhhbmRsZXIgPSBuZXcgVVJMKGFqYXh1cmwsICQobG9jYXRpb24pLmF0dHIoJ29yaWdpbicpKTtcbiAgICAgICAgdXJsSGFuZGxlci5zZWFyY2hQYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCBhY3Rpb24pO1xuXG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgICAgdXJsSGFuZGxlci5zZWFyY2hQYXJhbXMuYXBwZW5kKCdfd3Bub25jZScsIG5vbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNsZWVwID0gKG1zKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmZXRjaFJldHJ5ID0gYXN5bmMgKGJvZHlEYXRhLCBhdHRlbXB0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsSGFuZGxlci5ocmVmLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keURhdGEpXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGBFcnJvciAtICR7cmVzcG9uc2Uuc3RhdHVzfSA6ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0IDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoaW50ZXJ2YWwpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkoYm9keURhdGEsIGF0dGVtcHQgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgZmV0Y2hSZXRyeShvcHRpb25zLCBhdHRlbXB0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQUpBWFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjdXN0b21TZXR0aW5ncyAgIEFKQVggY3VzdG9tIHNldHRpbmdzXG4gICAgICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgICAgICAgICAgQUpBWCBpbnN0YW5jZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgICBhamF4KGN1c3RvbVNldHRpbmdzKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICB1cmw6IGFqYXh1cmwsXG4gICAgICAgICAgICBkYXRhOiAnJyxcbiAgICAgICAgICAgIGJlZm9yZTogKCkgPT4ge30sXG4gICAgICAgICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignWmltYnJ1Q29kZSA6IEFqYXggRXJyb3InKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHt9XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGNoZWNrTiA9IDE7XG5cbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSAxMDAwO1xuICAgICAgICBjb25zdCBpdGVyYXRpb25zID0gNDtcblxuICAgICAgICBzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgY3VzdG9tU2V0dGluZ3MpO1xuXG4gICAgICAgIGNvbnN0IHByZXBhcmVkU2V0dGluZ3MgPSB0aGlzLmNsb25lKHNldHRpbmdzKTtcblxuICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmdzLmJlZm9yZSkpIHtcbiAgICAgICAgICAgIHByZXBhcmVkU2V0dGluZ3MuYmVmb3JlU2VuZCA9IHNldHRpbmdzLmJlZm9yZTtcbiAgICAgICAgICAgIGRlbGV0ZSBwcmVwYXJlZFNldHRpbmdzLmJlZm9yZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXBhcmVkU2V0dGluZ3Muc3VjY2VzcyA9IChyZXNwb25zZSwgdGV4dFN0YXR1cywganFYSFIpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSA8IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmdzLmVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5lcnJvcihqcVhIUiwgdGV4dFN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmdzLnN1Y2Nlc3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLnN1Y2Nlc3MocmVzcG9uc2UsIHRleHRTdGF0dXMsIGpxWEhSKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcHJlcGFyZWRTZXR0aW5ncy5lcnJvciA9IChqcVhIUiwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgaWYgKGNoZWNrTiA8PSBpdGVyYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrTiArKztcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHByZXBhcmVkU2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgIH0sIGludGVydmFsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihzZXR0aW5ncy5lcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuZXJyb3IoanFYSFIsIHRleHRTdGF0dXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gJC5hamF4KHByZXBhcmVkU2V0dGluZ3MpO1xuICAgIH1cbn1cblxuLy8gQ2xhc3MgaW5pdGlhbGl6YXRpb24gOiBaaW1icnVDb2RlXG53aW5kb3cuemMgPSBuZXcgWmltYnJ1Q29kZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==