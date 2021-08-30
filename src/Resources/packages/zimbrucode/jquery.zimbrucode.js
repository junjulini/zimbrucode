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
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : ZimbruCode/Module/Cookie
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */



class Cookie {
    constructor() {
        this.defaults = {};
    }

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

    add(key, value, attributes) {
        this.__api(key, value, attributes);
    }

    get(key) {
        return this.__api(key);
    }

    getJSON() {
        return this.__api.apply({
            json: true
        }, [].slice.call(arguments));
    }

    remove(key, attributes) {
        this.__api(key, '', this.__extend(attributes, {
            expires: -1
        }));
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
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : ZimbruCode/Module/PopUp
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */





const $ = jQuery;

class PopUp {
    constructor() {
        this.id = `zc-popup-${zc.uniqueID()}`;
    }

    /**
     * Add popup
     * 
     * @return {null} None
     * @since 1.0.0
     */
    add(options) {
        const defaults = {
            title: 'PopUp Title',
            ajax: '',
            error: () => {
                console.error('ZimbruCode : PopUp');
            },
            before: () => {},
            success: () => {},
            afterShowContent: () => {},
            width: '',
            height: '',
            html: '',
            class: ''
        };

        const settings = $.extend({}, defaults, options),
              structure = zc.tpl(_tpl_popup_html__WEBPACK_IMPORTED_MODULE_0__.default, {
                  id: this.id,
                  class: settings.class,
                  title: settings.title
              });

        $('body').css('overflow', 'hidden');
        $('body').append(structure);

        if (!settings.html) {
            this.size(settings.height, settings.width);
            zc.ajax({
                data: settings.ajax,
                before: () => {
                    settings.before.call();
                    this.hideContent();
                },
                error: settings.error,
                success: (response) => {
                    if (response.content !== undefined) {
                        this.appendContent(response.content);
                    }

                    settings.success.call(this, response);
                    this.showContent();
                    settings.afterShowContent.call(this, response);
                }
            });
        } else {
            this.size(settings.height, settings.width);
            this.appendContent(settings.html);
            this.showContent();
            settings.success.call(this, settings.html);
        }

        $(`#${this.id}`).on('click', '.zc-popup__close', (event) => {
            event.preventDefault();
            /* Act on the event */

            this.close();
        });

        $(document).on('mouseup touchstart', `#${this.id}`, (event) => {
            const popupWindow = $('.zc-popup__window');

            if (!popupWindow.is(event.target) && popupWindow.has(event.target).length === 0) {
                this.close();
            }
        });
    }

    /**
     * Calc popup window size
     * 
     * @return {null} None
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
     * @return {null} None
     * @since 1.0.0
     */
    hideContent() {
        $(`#${this.id} .zc-popup__content`).hide();
        this.showLoading();
    }

    /**
     * Show content
     * 
     * @return {null} None
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
     * @return {null} None
     * @since 1.0.0
     */
    hideLoading() {
        $(`#${this.id} .zc-popup__loading`).hide();
    }

    /**
     * Show loading
     * 
     * @return {null} None
     * @since 1.0.0
     */
    showLoading() {
        $(`#${this.id} .zc-popup__loading`).show();
    }

    /**
     * Erase content
     * @return {null} None
     * @since 1.0.0
     */
    remContent() {
        $(`#${this.id} .zc-popup__content`).empty();
    }

    /**
     * Append content
     * @return {null} None
     * @since 1.0.0
     */
    appendContent(content) {
        $(`#${this.id} .zc-popup__content`).append(content);
    }

    /**
     * Close
     * 
     * @return {null} None
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
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : ZimbruCode/Module/PopUp
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */



const $ = jQuery;

class RestAPI {
    constructor(url, nonce) {
        this.restURL = url;
        this.restNonce = nonce;
    }

    get(path, data = {}) {
        return this.__ajax('GET', path, data);
    }

    create(path, data = {}) {
        return this.__ajax('POST', path, data);
    }

    update(path, data = {}) {
        return this.__ajax('PUT', path, data);
    }

    delete(path) {
        return this.__ajax('DELETE', path);
    }

    query(path) {
        return this.restURL + path;
    }

    __ajax(method = 'GET', path, data) {
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
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : ZimbruCode functions
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */











const $ = jQuery;

class ZimbruCode {
    constructor() {
        // Modules objects
        this.module = {};
        
        // Module data
        this.moduleData = {};

        // Global data
        this.global = {};

        // Function : Cookie
        this.cookie = new _module_cookie__WEBPACK_IMPORTED_MODULE_1__.default;
    }

    /**
     * Add module
     * 
     * @return {null} None
     * @since 1.0.0
     */
    addModule(name, module) {
        this.initModuleData(name);
        this.module[name] = module($);
    }

    /**
     * Initialization module data
     * 
     * @return {null} None
     * @since 1.0.0
     */
    initModuleData(name) {
        this.moduleData[name] = {};
    }

    /**
     * Add module data
     * 
     * @return {null} None
     * @since 1.0.0
     */
    addModuleData(name, data = {}) {
        this.moduleData[name] = data;
    }

    /**
     * Get module data
     * 
     * @since 1.0.0
     */
    getModuleData(name) {
        return this.moduleData[name];
    }

    /**
     * Generate unique ID
     * 
     * @since 1.0.0
     */
    uniqueID() {
        return Math.floor(Math.random() * 26) + Date.now();
    }

    /**
     * Data replace in subject
     * 
     * @return {null} None
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
                        output = replace[index].call(this, match);
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
     * @return {null} None
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
                for (let i in paths) {
                    if (current === undefined || current[paths[i]] === undefined) {
                        return undefined;
                    } else {
                        current = current[paths[i]];
                    }
                }
        
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
     * @return {null} None
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
     * @return {null} None
     * @since 1.0.0
     */
    resize(callbackWidth, callbackHeight) {
        let windowWidth  = window.innerWidth,
            windowHeight = window.innerHeight; 

        $(window).resize(() => {
            if (window.innerWidth != windowWidth) {
                windowWidth = window.innerWidth;

                if ($.isFunction(callbackWidth)) {
                    callbackWidth.call(this, windowWidth);
                }
            }

            if (window.innerHeight != windowHeight) {
                windowHeight = window.innerHeight;

                if ($.isFunction(callbackHeight)) {
                    callbackHeight.call(this, windowHeight);
                }
            }
        });
    }

    /**
     * Clone an object
     * 
     * @since 1.0.0
     */
    clone(object) {
        return $.extend(true, {}, object);
    }

    /**
     * Random string
     * 
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
     * @since 1.0.0
     */
    parse(data, stringify) {
        return (stringify === undefined) ? JSON.parse(data) : JSON.stringify(data);
    }

    /**
     * Check if json
     * 
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
     * Strstr
     * 
     * @since 1.0.0
     */
    strstr(haystack, needle, bool) {
        const pos = haystack.indexOf(needle);

        if (pos == -1) {
            return false;
        } else {
            if (bool) {
                return haystack.substr(0, pos);
            } else {
                return haystack.slice(pos);
            }
        }
    }

    /**
     * Capitalize first letter
     * 
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
     * AJAX
     * 
     * @since 1.0.0
     */
    ajax(settings) {
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

        settings = $.extend({}, defaults, settings);

        const preparedSettings = this.clone(settings);

        if ($.isFunction(settings.before)) {
            preparedSettings.beforeSend = settings.before;
            delete preparedSettings.before;
        }

        preparedSettings.success = (response, textStatus, jqXHR) => {
            if (response < 0) {
                if ($.isFunction(settings.error)) {
                    settings.error.call(this, jqXHR, textStatus);
                }
            } else {
                if ($.isFunction(settings.success)) {
                    settings.success.call(this, response, textStatus, jqXHR);
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
                    settings.error.call(this, jqXHR, textStatus);
                }
            }
        };

        return $.ajax(preparedSettings);
    }

    /**
     * PopUp
     * 
     * @since 1.0.0
     */
    popup() {
        return new _module_popup__WEBPACK_IMPORTED_MODULE_0__.default;
    }

    /**
     * Confirm PopUp
     * 
     * @return {null} None
     * @since 1.0.0
     */
    confirm(options) {
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

        let settings = $.extend({}, defaults, options),
            html = '';

        if (settings.html) {
            html = settings.html;
        } else {
            html = this.tpl(_tpl_confirm_html__WEBPACK_IMPORTED_MODULE_3__.default, {
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

                    settings.ok.call(this, popup);
                });

                $('.zc-confirm').on('click', '.zc-confirm__button_type_cancel', (event) => {
                    event.preventDefault();
                    /* Act on the event */

                    settings.cancel.call(this, popup);
                });
            }
        });
    }

    /**
     * Prompt PopUp
     * 
     * @return {null} None
     * @since 1.0.0
     */
    prompt(options) {
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

        let settings = $.extend({}, defaults, options),
            html = '';

        if (settings.html) {
            html = settings.html;
        } else {
            html = this.tpl(_tpl_prompt_html__WEBPACK_IMPORTED_MODULE_4__.default, {
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
                        settings.ok.call(this, popup, text);
                    } else {
                        $('.zc-prompt__input').focus();
                    }
                });

                $('.zc-prompt').on('click', '.zc-prompt__button_type_cancel', (event) => {
                    event.preventDefault();
                    /* Act on the event */

                    settings.cancel.call(this, popup);
                });
            }
        });
    }

    /**
     * Alert PopUp
     * 
     * @return {null} None
     * @since 1.0.0
     */
    alert(options) {
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

        let settings = $.extend({}, defaults, options),
            html = '';

        if (settings.html) {
            html = settings.html;
        } else {
            html = this.tpl(_tpl_alert_html__WEBPACK_IMPORTED_MODULE_5__.default, {
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

                    settings.ok.call(this, popup);
                });
            }
        });
    }

    /**
     * Rest API
     * 
     * @param {string} url   WordPress rest API URL
     * @param {string} nonce WordPress X nonce for RestAPI
     * @since 1.0.0
     */
    restAPI(url, nonce) {
        return new _module_rest_api__WEBPACK_IMPORTED_MODULE_2__.default(url, nonce);
    }

    inputRange(mode, data = {}) {
        if (mode && data.el !== undefined) {
            const priv = {};

            // Has line background
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

            // Setup indicator current
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

            // Mode : Init
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
}

// Initialization of class : ZimbruCode
window.zc = new ZimbruCode();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2pxdWVyeS56aW1icnVjb2RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSx5QkFBeUIsSUFBSSxzQkFBc0IsT0FBTywyR0FBMkcsT0FBTztBQUM1SztBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDSG5CO0FBQ0Esd0dBQXdHLFNBQVMsdUxBQXVMLFVBQVU7QUFDbFQ7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQ0huQjtBQUNBLDhHQUE4RyxTQUFTLDhKQUE4SixVQUFVLGdHQUFnRyxjQUFjO0FBQzdZO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUNIbkI7QUFDQSwyR0FBMkcsU0FBUyw0QkFBNEIsYUFBYSxhQUFhLFNBQVMsb0xBQW9MLFVBQVUsOEZBQThGLGNBQWM7QUFDN2Q7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUNGbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFRTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekMseUNBQXlDO0FBQ3pDLHlDQUF5QztBQUN6Qyx1Q0FBdUM7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFD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QkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvUmVzb3VyY2VzL3BhY2thZ2VzL3ppbWJydWNvZGUvZXM2L21vZHVsZS90cGwvcG9wdXAuaHRtbCIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi90cGwvYWxlcnQuaHRtbCIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi90cGwvY29uZmlybS5odG1sIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvUmVzb3VyY2VzL3BhY2thZ2VzL3ppbWJydWNvZGUvZXM2L3RwbC9wcm9tcHQuaHRtbCIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi9tb2R1bGUvY29va2llLmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvUmVzb3VyY2VzL3BhY2thZ2VzL3ppbWJydWNvZGUvZXM2L21vZHVsZS9wb3B1cC5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi9tb2R1bGUvcmVzdC1hcGkuanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvUmVzb3VyY2VzL3BhY2thZ2VzL3ppbWJydWNvZGUvZXM2L2pxdWVyeS56aW1icnVjb2RlLmVzNi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCIgPGRpdiBpZD1cXFwie3tpZH19XFxcIiBjbGFzcz1cXFwiemMtcG9wdXAge3tjbGFzc319XFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtcG9wdXBfX3dpbmRvd1xcXCI+IDxoZWFkZXIgY2xhc3M9XFxcInpjLXBvcHVwX19oZWFkZXJcXFwiPiA8c3BhbiBjbGFzcz1cXFwiemMtcG9wdXBfX3RpdGxlXFxcIj57e3RpdGxlfX08L3NwYW4+IDxpIGNsYXNzPVxcXCJ6Yy1wb3B1cF9fY2xvc2UgemMtaWNvbi1jbGVhclxcXCI+PC9pPiA8L2hlYWRlcj4gPGRpdiBjbGFzcz1cXFwiemMtc2Nyb2xsYmFyIHpjLXBvcHVwX19vdmVyZmxvdy1oaWRkZW5cXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wb3B1cF9fbG9hZGluZ1xcXCI+IDxkaXYgY2xhc3M9XFxcInpjLWxvYWRpbmctc3Bpbm5lciB6Yy1wb3B1cF9fbG9hZGluZy1zcGlubmVyXFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2UgemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2VfbW9kZV8xXFxcIj48L2Rpdj4gPGRpdiBjbGFzcz1cXFwiemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2UgemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2VfbW9kZV8yXFxcIj48L2Rpdj4gPGRpdiBjbGFzcz1cXFwiemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2UgemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2VfbW9kZV8zXFxcIj48L2Rpdj4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wb3B1cF9fY29udGVudFxcXCI+PC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIiA8ZGl2IGNsYXNzPVxcXCJ6Yy1hbGVydFxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLWFsZXJ0X19jb250YWluZXJcXFwiPiA8cCBjbGFzcz1cXFwiemMtYWxlcnRfX3RleHRcXFwiPnt7c3ViamVjdH19PC9wPiA8L2Rpdj4gPGZvb3RlciBjbGFzcz1cXFwiemMtYWxlcnRfX2Zvb3RlclxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLWFsZXJ0X19jZW50ZXJcXFwiPiA8YnV0dG9uIGNsYXNzPVxcXCJ6Yy1hbGVydF9fYnV0dG9uIHpjLWFsZXJ0X19idXR0b25fdHlwZV9vayB6Yy1hbGVydF9fYnV0dG9uX2FjdGl2ZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj57e3RpdGxlX29rfX08L2J1dHRvbj4gPC9kaXY+IDwvZm9vdGVyPjwvZGl2PiBcIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiIDxkaXYgY2xhc3M9XFxcInpjLWNvbmZpcm1cXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1jb25maXJtX19jb250YWluZXJcXFwiPiA8cCBjbGFzcz1cXFwiemMtY29uZmlybV9fdGV4dFxcXCI+e3tzdWJqZWN0fX08L3A+IDwvZGl2PiA8Zm9vdGVyIGNsYXNzPVxcXCJ6Yy1jb25maXJtX19mb290ZXJcXFwiPiA8YnV0dG9uIGNsYXNzPVxcXCJ6Yy1jb25maXJtX19idXR0b24gemMtY29uZmlybV9fYnV0dG9uX3R5cGVfb2sgemMtY29uZmlybV9fYnV0dG9uX2FjdGl2ZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj57e3RpdGxlX29rfX08L2J1dHRvbj4gPGJ1dHRvbiBjbGFzcz1cXFwiemMtY29uZmlybV9fYnV0dG9uIHpjLWNvbmZpcm1fX2J1dHRvbl90eXBlX2NhbmNlbFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj57e3RpdGxlX2NhbmNlbH19PC9idXR0b24+IDwvZm9vdGVyPiA8L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiIDxkaXYgY2xhc3M9XFxcInpjLXByb21wdFxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLXByb21wdF9fY29udGFpbmVyXFxcIj4gPHAgY2xhc3M9XFxcInpjLXByb21wdF9fdGV4dFxcXCI+e3tzdWJqZWN0fX08L3A+IDxpbnB1dCBwbGFjZWhvbGRlcj1cXFwie3twbGFjZWhvbGRlcn19XFxcIiB2YWx1ZT1cXFwie3tkZWZhdWx0fX1cXFwiIGNsYXNzPVxcXCJ6Yy1wcm9tcHRfX2lucHV0XFxcIj4gPC9kaXY+IDxmb290ZXIgY2xhc3M9XFxcInpjLXByb21wdF9fZm9vdGVyXFxcIj4gPGJ1dHRvbiBjbGFzcz1cXFwiemMtcHJvbXB0X19idXR0b24gemMtcHJvbXB0X19idXR0b25fdHlwZV9vayB6Yy1wcm9tcHRfX2J1dHRvbl9hY3RpdmVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+e3t0aXRsZV9va319PC9idXR0b24+IDxidXR0b24gY2xhc3M9XFxcInpjLXByb21wdF9fYnV0dG9uIHpjLXByb21wdF9fYnV0dG9uX3R5cGVfY2FuY2VsXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPnt7dGl0bGVfY2FuY2VsfX08L2J1dHRvbj4gPC9mb290ZXI+IDwvZGl2PlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgWmltYnJ1Q29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFppbWJydUNvZGUvTW9kdWxlL0Nvb2tpZVxuICpcbiAqIEBhdXRob3IgIEp1bmp1bGluaVxuICogQHBhY2thZ2UgWmltYnJ1Q29kZVxuICogQHNpbmNlICAgWmltYnJ1Q29kZSAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0cyA9IHt9O1xuICAgIH1cblxuICAgIF9fZXh0ZW5kKC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0IGkgPSAwLCByZXN1bHQgPSB7fTtcblxuICAgICAgICBmb3IgKDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyaWJ1dGVzID0gYXJnc1tpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIF9fYXBpKGtleSwgdmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCwgY29udmVydGVyID0gKCkgPT4ge307XG5cbiAgICAgICAgLy8gV3JpdGVcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gdGhpcy5fX2V4dGVuZCh7XG4gICAgICAgICAgICAgICAgcGF0aDogJy8nXG4gICAgICAgICAgICB9LCB0aGlzLmRlZmF1bHRzLCBhdHRyaWJ1dGVzKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLmV4cGlyZXMgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhwaXJlcyA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgZXhwaXJlcy5zZXRNaWxsaXNlY29uZHMoZXhwaXJlcy5nZXRNaWxsaXNlY29uZHMoKSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGUrNSk7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5leHBpcmVzID0gZXhwaXJlcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB6Yy5wYXJzZSh2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAgICAgICBpZiAoIWNvbnZlcnRlci53cml0ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyh2YWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGNvbnZlcnRlci53cml0ZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAga2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhrZXkpKTtcbiAgICAgICAgICAgIGtleSA9IGtleS5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDVFfDYwfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuICAgICAgICAgICAga2V5ID0ga2V5LnJlcGxhY2UoL1tcXChcXCldL2csIGVzY2FwZSk7XG5cbiAgICAgICAgICAgIHJldHVybiAoZG9jdW1lbnQuY29va2llID0gW1xuICAgICAgICAgICAgICAgIGtleSwgJz0nLCB2YWx1ZSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmV4cGlyZXMgJiYgJzsgZXhwaXJlcz0nICsgYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCksIC8vIHVzZSBleHBpcmVzIGF0dHJpYnV0ZSwgbWF4LWFnZSBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5wYXRoICAgICYmICc7IHBhdGg9JyArIGF0dHJpYnV0ZXMucGF0aCxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmRvbWFpbiAgJiYgJzsgZG9tYWluPScgKyBhdHRyaWJ1dGVzLmRvbWFpbixcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnNlY3VyZSA/ICc7IHNlY3VyZScgOiAnJ1xuICAgICAgICAgICAgXS5qb2luKCcnKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZWFkXG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXN1bHQgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRvIHByZXZlbnQgdGhlIGZvciBsb29wIGluIHRoZSBmaXJzdCBwbGFjZSBhc3NpZ24gYW4gZW1wdHkgYXJyYXlcbiAgICAgICAgLy8gaW4gY2FzZSB0aGVyZSBhcmUgbm8gY29va2llcyBhdCBhbGwuIEFsc28gcHJldmVudHMgb2RkIHJlc3VsdCB3aGVuXG4gICAgICAgIC8vIGNhbGxpbmcgXCJnZXQoKVwiXG4gICAgICAgIGxldCBjb29raWVzID0gZG9jdW1lbnQuY29va2llID8gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpIDogW10sXG4gICAgICAgICAgICByZGVjb2RlID0gLyglWzAtOUEtWl17Mn0pKy9nLFxuICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcGFydHMgPSBjb29raWVzW2ldLnNwbGl0KCc9JyksXG4gICAgICAgICAgICAgICAgbmFtZSA9IHBhcnRzWzBdLnJlcGxhY2UocmRlY29kZSwgZGVjb2RlVVJJQ29tcG9uZW50KSxcbiAgICAgICAgICAgICAgICBjb29raWUgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCc9Jyk7XG5cbiAgICAgICAgICAgIGlmIChjb29raWUuY2hhckF0KDApID09PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgY29va2llID0gY29va2llLnNsaWNlKDEsIC0xKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb29raWUgPSBjb252ZXJ0ZXIucmVhZCA/XG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRlci5yZWFkKGNvb2tpZSwgbmFtZSkgOiBjb252ZXJ0ZXIoY29va2llLCBuYW1lKSB8fFxuICAgICAgICAgICAgICAgICAgICBjb29raWUucmVwbGFjZShyZGVjb2RlLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuanNvbikge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29va2llID0gSlNPTi5wYXJzZShjb29raWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gY29va2llO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRbbmFtZV0gPSBjb29raWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgYWRkKGtleSwgdmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdGhpcy5fX2FwaShrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKTtcbiAgICB9XG5cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fYXBpKGtleSk7XG4gICAgfVxuXG4gICAgZ2V0SlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19hcGkuYXBwbHkoe1xuICAgICAgICAgICAganNvbjogdHJ1ZVxuICAgICAgICB9LCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIHJlbW92ZShrZXksIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdGhpcy5fX2FwaShrZXksICcnLCB0aGlzLl9fZXh0ZW5kKGF0dHJpYnV0ZXMsIHtcbiAgICAgICAgICAgIGV4cGlyZXM6IC0xXG4gICAgICAgIH0pKTtcbiAgICB9XG59IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFppbWJydUNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBaaW1icnVDb2RlL01vZHVsZS9Qb3BVcFxuICpcbiAqIEBhdXRob3IgIEp1bmp1bGluaVxuICogQHBhY2thZ2UgWmltYnJ1Q29kZVxuICogQHNpbmNlICAgWmltYnJ1Q29kZSAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFRQTF9fcG9wdXAgZnJvbSAnLi90cGwvcG9wdXAuaHRtbCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcFVwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pZCA9IGB6Yy1wb3B1cC0ke3pjLnVuaXF1ZUlEKCl9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgcG9wdXBcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcFVwIFRpdGxlJyxcbiAgICAgICAgICAgIGFqYXg6ICcnLFxuICAgICAgICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdaaW1icnVDb2RlIDogUG9wVXAnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZWZvcmU6ICgpID0+IHt9LFxuICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge30sXG4gICAgICAgICAgICBhZnRlclNob3dDb250ZW50OiAoKSA9PiB7fSxcbiAgICAgICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgICAgIGhlaWdodDogJycsXG4gICAgICAgICAgICBodG1sOiAnJyxcbiAgICAgICAgICAgIGNsYXNzOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKSxcbiAgICAgICAgICAgICAgc3RydWN0dXJlID0gemMudHBsKFRQTF9fcG9wdXAsIHtcbiAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IHNldHRpbmdzLmNsYXNzLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IHNldHRpbmdzLnRpdGxlXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICAgICAkKCdib2R5JykuYXBwZW5kKHN0cnVjdHVyZSk7XG5cbiAgICAgICAgaWYgKCFzZXR0aW5ncy5odG1sKSB7XG4gICAgICAgICAgICB0aGlzLnNpemUoc2V0dGluZ3MuaGVpZ2h0LCBzZXR0aW5ncy53aWR0aCk7XG4gICAgICAgICAgICB6Yy5hamF4KHtcbiAgICAgICAgICAgICAgICBkYXRhOiBzZXR0aW5ncy5hamF4LFxuICAgICAgICAgICAgICAgIGJlZm9yZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5iZWZvcmUuY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogc2V0dGluZ3MuZXJyb3IsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5jb250ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ29udGVudChyZXNwb25zZS5jb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLnN1Y2Nlc3MuY2FsbCh0aGlzLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuYWZ0ZXJTaG93Q29udGVudC5jYWxsKHRoaXMsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2l6ZShzZXR0aW5ncy5oZWlnaHQsIHNldHRpbmdzLndpZHRoKTtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ29udGVudChzZXR0aW5ncy5odG1sKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcbiAgICAgICAgICAgIHNldHRpbmdzLnN1Y2Nlc3MuY2FsbCh0aGlzLCBzZXR0aW5ncy5odG1sKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoYCMke3RoaXMuaWR9YCkub24oJ2NsaWNrJywgJy56Yy1wb3B1cF9fY2xvc2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ21vdXNldXAgdG91Y2hzdGFydCcsIGAjJHt0aGlzLmlkfWAsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9wdXBXaW5kb3cgPSAkKCcuemMtcG9wdXBfX3dpbmRvdycpO1xuXG4gICAgICAgICAgICBpZiAoIXBvcHVwV2luZG93LmlzKGV2ZW50LnRhcmdldCkgJiYgcG9wdXBXaW5kb3cuaGFzKGV2ZW50LnRhcmdldCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjIHBvcHVwIHdpbmRvdyBzaXplXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHNpemUoaGVpZ2h0LCB3aWR0aCkge1xuICAgICAgICBoZWlnaHQgPSAodHlwZW9mIGhlaWdodCAhPT0gJ3VuZGVmaW5lZCcgfHwgaGVpZ2h0KSA/IGhlaWdodCA6IGZhbHNlO1xuICAgICAgICB3aWR0aCAgPSAodHlwZW9mIHdpZHRoICE9PSAndW5kZWZpbmVkJyB8fCB3aWR0aCkgPyB3aWR0aCA6IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHByaXYgPSB7XG4gICAgICAgICAgICBjYWxjU2l6ZSA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50LipydlxcOjExXFwuLykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX3dpbmRvd2ApLmNzcyh7J21heC13aWR0aCc6IGAke3dpZHRofXB4YCwgJ3dpZHRoJzogJzEwMCUnfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX3dpbmRvd2ApLmNzcyh7J21heC1oZWlnaHQnOiBgJHtoZWlnaHR9cHhgLCAnaGVpZ2h0JzogJzEwMCUnfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fd2luZG93YCkuY3NzKHsnbWF4LXdpZHRoJzogYCR7d2lkdGh9cHhgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX3dpbmRvd2ApLmNzcyh7J21heC1oZWlnaHQnOiBgJHtoZWlnaHR9cHhgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcHJpdi5jYWxjU2l6ZSgpO1xuXG4gICAgICAgICQod2luZG93KS5yZXNpemUoKCkgPT4ge1xuICAgICAgICAgICAgcHJpdi5jYWxjU2l6ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIGNvbnRlbnRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaGlkZUNvbnRlbnQoKSB7XG4gICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fY29udGVudGApLmhpZGUoKTtcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgY29udGVudFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzaG93Q29udGVudCgpIHtcbiAgICAgICAgdGhpcy5oaWRlTG9hZGluZygpO1xuICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX3dpbmRvdyAuemMtc2Nyb2xsYmFyYCkucmVtb3ZlQ2xhc3MoJ3pjLXBvcHVwX19vdmVyZmxvdy1oaWRkZW4nKTtcbiAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX19jb250ZW50YCkuc2hvdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgbG9hZGluZ1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBoaWRlTG9hZGluZygpIHtcbiAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX19sb2FkaW5nYCkuaGlkZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgbG9hZGluZ1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzaG93TG9hZGluZygpIHtcbiAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX19sb2FkaW5nYCkuc2hvdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVyYXNlIGNvbnRlbnRcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcmVtQ29udGVudCgpIHtcbiAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX19jb250ZW50YCkuZW1wdHkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmQgY29udGVudFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhcHBlbmRDb250ZW50KGNvbnRlbnQpIHtcbiAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX19jb250ZW50YCkuYXBwZW5kKGNvbnRlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNsb3NlKCkge1xuICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX3dpbmRvd2ApLmFkZENsYXNzKCd6Yy1wb3B1cF9fd2luZG93X2Nsb3NlJyk7XG4gICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fd2luZG93YCkub25lKCdhbmltYXRpb25lbmQgd2Via2l0QW5pbWF0aW9uRW5kIG9BbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICQoYCMke3RoaXMuaWR9IGApLmhpZGUoKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2luaXRpYWwnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBaaW1icnVDb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogWmltYnJ1Q29kZS9Nb2R1bGUvUG9wVXBcbiAqXG4gKiBAYXV0aG9yICBKdW5qdWxpbmlcbiAqIEBwYWNrYWdlIFppbWJydUNvZGVcbiAqIEBzaW5jZSAgIFppbWJydUNvZGUgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3RBUEkge1xuICAgIGNvbnN0cnVjdG9yKHVybCwgbm9uY2UpIHtcbiAgICAgICAgdGhpcy5yZXN0VVJMID0gdXJsO1xuICAgICAgICB0aGlzLnJlc3ROb25jZSA9IG5vbmNlO1xuICAgIH1cblxuICAgIGdldChwYXRoLCBkYXRhID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19hamF4KCdHRVQnLCBwYXRoLCBkYXRhKTtcbiAgICB9XG5cbiAgICBjcmVhdGUocGF0aCwgZGF0YSA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fYWpheCgnUE9TVCcsIHBhdGgsIGRhdGEpO1xuICAgIH1cblxuICAgIHVwZGF0ZShwYXRoLCBkYXRhID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19hamF4KCdQVVQnLCBwYXRoLCBkYXRhKTtcbiAgICB9XG5cbiAgICBkZWxldGUocGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2FqYXgoJ0RFTEVURScsIHBhdGgpO1xuICAgIH1cblxuICAgIHF1ZXJ5KHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdFVSTCArIHBhdGg7XG4gICAgfVxuXG4gICAgX19hamF4KG1ldGhvZCA9ICdHRVQnLCBwYXRoLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IHt9O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB1cmw6IHRoaXMucmVzdFVSTCArIHBhdGgsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdYLVdQLU5vbmNlJzogdGhpcy5yZXN0Tm9uY2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobWV0aG9kID09ICdQT1NUJyB8fCBtZXRob2QgPT0gJ1BVVCcpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucHJvY2Vzc0RhdGEgPSBmYWxzZTtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgICAgb3B0aW9ucy5jb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JztcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMuZXJyb3IgPSAoanFYSFIsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oY2FsbGJhY2tzLmZhaWwpKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLmZhaWwuY2FsbCh0aGlzLCBqcVhIUiwgdGV4dFN0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLnN1Y2Nlc3MgPSAocmVzcG9uc2UsIHRleHRTdGF0dXMsIGpxWEhSKSA9PiB7XG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKGNhbGxiYWNrcy5kb25lKSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5kb25lLmNhbGwodGhpcywgcmVzcG9uc2UsIHRleHRTdGF0dXMsIGpxWEhSKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IHpjLmFqYXgob3B0aW9ucyk7XG5cbiAgICAgICAgb3V0cHV0LmZhaWwgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5mYWlsID0gY2FsbGJhY2s7XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9O1xuXG4gICAgICAgIG91dHB1dC5kb25lID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFja3MuZG9uZSA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBaaW1icnVDb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogWmltYnJ1Q29kZSBmdW5jdGlvbnNcbiAqXG4gKiBAYXV0aG9yICBKdW5qdWxpbmlcbiAqIEBwYWNrYWdlIFppbWJydUNvZGVcbiAqIEBzaW5jZSAgIFppbWJydUNvZGUgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBQb3BVcCAgIGZyb20gJy4vbW9kdWxlL3BvcHVwJztcbmltcG9ydCBDb29raWUgIGZyb20gJy4vbW9kdWxlL2Nvb2tpZSc7XG5pbXBvcnQgUmVzdEFQSSBmcm9tICcuL21vZHVsZS9yZXN0LWFwaSc7XG5cbmltcG9ydCBUUExfX2NvbmZpcm0gZnJvbSAnLi90cGwvY29uZmlybS5odG1sJztcbmltcG9ydCBUUExfX3Byb21wdCAgZnJvbSAnLi90cGwvcHJvbXB0Lmh0bWwnO1xuaW1wb3J0IFRQTF9fYWxlcnQgICBmcm9tICcuL3RwbC9hbGVydC5odG1sJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuY2xhc3MgWmltYnJ1Q29kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIE1vZHVsZXMgb2JqZWN0c1xuICAgICAgICB0aGlzLm1vZHVsZSA9IHt9O1xuICAgICAgICBcbiAgICAgICAgLy8gTW9kdWxlIGRhdGFcbiAgICAgICAgdGhpcy5tb2R1bGVEYXRhID0ge307XG5cbiAgICAgICAgLy8gR2xvYmFsIGRhdGFcbiAgICAgICAgdGhpcy5nbG9iYWwgPSB7fTtcblxuICAgICAgICAvLyBGdW5jdGlvbiA6IENvb2tpZVxuICAgICAgICB0aGlzLmNvb2tpZSA9IG5ldyBDb29raWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIG1vZHVsZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRNb2R1bGUobmFtZSwgbW9kdWxlKSB7XG4gICAgICAgIHRoaXMuaW5pdE1vZHVsZURhdGEobmFtZSk7XG4gICAgICAgIHRoaXMubW9kdWxlW25hbWVdID0gbW9kdWxlKCQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemF0aW9uIG1vZHVsZSBkYXRhXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGluaXRNb2R1bGVEYXRhKG5hbWUpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVEYXRhW25hbWVdID0ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIG1vZHVsZSBkYXRhXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZE1vZHVsZURhdGEobmFtZSwgZGF0YSA9IHt9KSB7XG4gICAgICAgIHRoaXMubW9kdWxlRGF0YVtuYW1lXSA9IGRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IG1vZHVsZSBkYXRhXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0TW9kdWxlRGF0YShuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZHVsZURhdGFbbmFtZV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgdW5pcXVlIElEXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgdW5pcXVlSUQoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNikgKyBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERhdGEgcmVwbGFjZSBpbiBzdWJqZWN0XG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHN0clJlcGxhY2Uoc2VhcmNoLCByZXBsYWNlLCBzdWJqZWN0KSB7XG4gICAgICAgIGxldCByZWdTdHIgPSAnJztcblxuICAgICAgICBzZWFyY2guZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCAtIDEgPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZWdTdHIgKz0gZWw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlZ1N0ciArPSBgJHtlbH18YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN1YmplY3QucmVwbGFjZShuZXcgUmVnRXhwKHJlZ1N0ciwgJ2cnKSwgKG1hdGNoKSA9PiB7XG4gICAgICAgICAgICBsZXQgb3V0cHV0ID0gJyc7XG5cbiAgICAgICAgICAgIHNlYXJjaC5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWwgPT0gbWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihyZXBsYWNlW2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IHJlcGxhY2VbaW5kZXhdLmNhbGwodGhpcywgbWF0Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gcmVwbGFjZVtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVtcGxhdGUgaGFuZGxlclxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0cGwgIFRlbXBsYXRlIEhUTUxcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBEYXRhIGZvciBwcmVwYXJpbmcgdGVtcGxhdGVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICB0cGwodHBsID0gJycsIGRhdGEgPSB7fSkge1xuICAgICAgICBpZiAodHlwZW9mIHRwbCA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBsZXQgc2VhcmNoID0gW107XG4gICAgICAgICAgICBsZXQgcmVwbGFjZSA9IFtdO1xuXG4gICAgICAgICAgICAkLmVhY2goZGF0YSwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBzZWFyY2gucHVzaChge3ske2tleX19fWApO1xuICAgICAgICAgICAgICAgIHJlcGxhY2UucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyUmVwbGFjZShzZWFyY2gsIHJlcGxhY2UsIHRwbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVlcCBmaW5kIGFuZCBzZXR0aW5nXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGRlZXBGaW5kQW5kU2V0dGluZyhvYmosIHBhdGgsIHZhbHVlLCByZW1vdmUgPSBmYWxzZSkge1xuICAgICAgICBsZXQgcGF0aHMgPSBwYXRoLnNwbGl0KCcvJyksIGN1cnJlbnQgPSBvYmosIGk7XG5cbiAgICAgICAgaWYgKHJlbW92ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBwYXRocykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGF0aHMubGVuZ3RoIC0gMSA9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50W3BhdGhzW2ldXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IHVuZGVmaW5lZCB8fCBjdXJyZW50W3BhdGhzW2ldXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFtwYXRoc1tpXV0gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudFtwYXRoc1tpXV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhdGhzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBwYXRocykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudCA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnRbcGF0aHNbaV1dID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudFtwYXRoc1tpXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBwYXRocykge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50ID09PSB1bmRlZmluZWQgfHwgY3VycmVudFtwYXRoc1tpXV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXRocy5sZW5ndGggLSAxID09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjdXJyZW50W3BhdGhzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhdGhzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGlzIG1vYmlsZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBpc01vYmlsZSgpIHtcbiAgICAgICAgaWYgKC9pUChvZHxob25lfGFkKS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL0FuZHJvaWQvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgaWYgKC9Nb2JpbGUvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgvSUVNb2JpbGUvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9XaW5kb3dzIFBob25lL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvQmxhY2tCZXJyeS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL0JCMTAvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IuYXBwTmFtZSA9PT0gXCJNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXJcIikge1xuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50TW9kZSA+PSA4O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJvdW5kXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcm91bmQodmFsdWUsIGV4cCkge1xuICAgICAgICBpZiAodHlwZW9mIGV4cCA9PT0gJ3VuZGVmaW5lZCcgfHwgK2V4cCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgPSArdmFsdWU7XG4gICAgICAgIGV4cCA9ICtleHA7XG4gICAgICAgIFxuICAgICAgICBpZiAoaXNOYU4odmFsdWUpIHx8ICEodHlwZW9mIGV4cCA9PT0gJ251bWJlcicgJiYgZXhwICUgMSA9PT0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaGlmdFxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJ2UnKTtcbiAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKCsodmFsdWVbMF0gKyAnZScgKyAodmFsdWVbMV0gPyAoK3ZhbHVlWzFdICsgZXhwKSA6IGV4cCkpKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNoaWZ0IGJhY2tcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KCdlJyk7XG5cbiAgICAgICAgcmV0dXJuICsodmFsdWVbMF0gKyAnZScgKyAodmFsdWVbMV0gPyAoK3ZhbHVlWzFdIC0gZXhwKSA6IC1leHApKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNpemVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcmVzaXplKGNhbGxiYWNrV2lkdGgsIGNhbGxiYWNrSGVpZ2h0KSB7XG4gICAgICAgIGxldCB3aW5kb3dXaWR0aCAgPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgICAgIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDsgXG5cbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggIT0gd2luZG93V2lkdGgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihjYWxsYmFja1dpZHRoKSkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1dpZHRoLmNhbGwodGhpcywgd2luZG93V2lkdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCAhPSB3aW5kb3dIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKGNhbGxiYWNrSGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja0hlaWdodC5jYWxsKHRoaXMsIHdpbmRvd0hlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9uZSBhbiBvYmplY3RcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjbG9uZShvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuICQuZXh0ZW5kKHRydWUsIHt9LCBvYmplY3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJhbmRvbSBzdHJpbmdcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICByYW5kb21Db2RlKGxlbmd0aCkge1xuICAgICAgICBsZXQgY2hhcnMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWjEyMzQ1Njc4OTAnLFxuICAgICAgICAgICAgcGFzcyA9ICcnO1xuXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIGxldCBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNjIpO1xuICAgICAgICAgICAgcGFzcyArPSBjaGFycy5jaGFyQXQoaSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFzcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSBkYXRhXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcGFyc2UoZGF0YSwgc3RyaW5naWZ5KSB7XG4gICAgICAgIHJldHVybiAoc3RyaW5naWZ5ID09PSB1bmRlZmluZWQpID8gSlNPTi5wYXJzZShkYXRhKSA6IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGpzb25cbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBpc0pzb24oc3RyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBKU09OLnBhcnNlKHN0cik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0cnN0clxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHN0cnN0cihoYXlzdGFjaywgbmVlZGxlLCBib29sKSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IGhheXN0YWNrLmluZGV4T2YobmVlZGxlKTtcblxuICAgICAgICBpZiAocG9zID09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYm9vbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBoYXlzdGFjay5zdWJzdHIoMCwgcG9zKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhheXN0YWNrLnNsaWNlKHBvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYXBpdGFsaXplIGZpcnN0IGxldHRlclxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHVjZmlyc3Qoc3RyLCBmb3JjZSkge1xuICAgICAgICBzdHIgPSBmb3JjZSA/IHN0ci50b0xvd2VyQ2FzZSgpIDogc3RyIHx8ICcnO1xuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGIpKFthLXpBLVpdKS8sIChmaXJzdExldHRlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0TGV0dGVyLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBvciB1cGRhdGUgYSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyIGluIFVSTFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbWV0ZXJzICAgUXVlcnkgcGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgICAgICAgICAgVVJMXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkUXVlcnlTdHJpbmcocGFyYW1ldGVycyA9IHt9LCB1cmwpIHtcbiAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJpdiA9IHt9O1xuICAgICAgICBwcml2LlVRUyA9IChrZXksIHZhbHVlLCB1cmwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChcIihbPyZdKVwiICsga2V5ICsgXCI9Lio/KCZ8I3wkKSguKilcIiwgXCJnaVwiKTtcbiAgICAgICAgICAgIGxldCBoYXNoO1xuXG4gICAgICAgICAgICBpZiAocmUudGVzdCh1cmwpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVybC5yZXBsYWNlKHJlLCAnJDEnICsga2V5ICsgXCI9XCIgKyB2YWx1ZSArICckMiQzJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzaCA9IHVybC5zcGxpdCgnIycpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBoYXNoWzBdLnJlcGxhY2UocmUsICckMSQzJykucmVwbGFjZSgvKCZ8XFw/KSQvLCAnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBoYXNoWzFdICE9PSAndW5kZWZpbmVkJyAmJiBoYXNoWzFdICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJyMnICsgaGFzaFsxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXBhcmF0b3IgPSB1cmwuaW5kZXhPZignPycpICE9PSAtMSA/ICcmJyA6ICc/JztcblxuICAgICAgICAgICAgICAgICAgICBoYXNoID0gdXJsLnNwbGl0KCcjJyk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IGhhc2hbMF0gKyBzZXBhcmF0b3IgKyBrZXkgKyAnPScgKyB2YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGhhc2hbMV0gIT09ICd1bmRlZmluZWQnICYmIGhhc2hbMV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCArPSAnIycgKyBoYXNoWzFdO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAkLmVhY2gocGFyYW1ldGVycywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHVybCA9IHByaXYuVVFTKGtleSwgdmFsdWUsIHVybCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgcXVlcnkgc3RyaW5nIHBhcmFtZXRlciBpbiBVUkxcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1ldGVycyAgIFF1ZXJ5IHBhcmFtZXRlcnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsICAgICAgICAgIFVSTFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHJlbW92ZVF1ZXJ5U3RyaW5nKHBhcmFtZXRlcnMgPSBbXSwgdXJsKSB7XG4gICAgICAgIGNvbnN0IHByaXYgPSB7fTtcblxuICAgICAgICBwcml2LlJRUyA9IChrZXksIHVybCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJ0biA9IHVybC5zcGxpdChcIj9cIilbMF07XG4gICAgICAgICAgICBsZXQgcGFyYW07XG4gICAgICAgICAgICBsZXQgcGFyYW1zQXJyID0gW107XG4gICAgICAgICAgICBsZXQgcXVlcnlTdHJpbmcgPSAodXJsLmluZGV4T2YoXCI/XCIpICE9PSAtMSkgPyB1cmwuc3BsaXQoXCI/XCIpWzFdIDogJyc7XG5cbiAgICAgICAgICAgIGlmIChxdWVyeVN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNBcnIgPSBxdWVyeVN0cmluZy5zcGxpdChcIiZcIik7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gcGFyYW1zQXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtID0gcGFyYW1zQXJyW2ldLnNwbGl0KFwiPVwiKVswXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW0gPT09IGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zQXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJ0biA9IHJ0biArIFwiP1wiICsgcGFyYW1zQXJyLmpvaW4oXCImXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcnRuO1xuICAgICAgICB9O1xuXG4gICAgICAgICQuZWFjaChwYXJhbWV0ZXJzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdXJsID0gcHJpdi5SUVModmFsdWUsIHVybCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQUpBWFxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFqYXgoc2V0dGluZ3MpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgIHVybDogYWpheHVybCxcbiAgICAgICAgICAgIGRhdGE6ICcnLFxuICAgICAgICAgICAgYmVmb3JlOiAoKSA9PiB7fSxcbiAgICAgICAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdaaW1icnVDb2RlIDogQWpheCBFcnJvcicpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge31cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgY2hlY2tOID0gMTtcblxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IDEwMDA7XG4gICAgICAgIGNvbnN0IGl0ZXJhdGlvbnMgPSA0O1xuXG4gICAgICAgIHNldHRpbmdzID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBzZXR0aW5ncyk7XG5cbiAgICAgICAgY29uc3QgcHJlcGFyZWRTZXR0aW5ncyA9IHRoaXMuY2xvbmUoc2V0dGluZ3MpO1xuXG4gICAgICAgIGlmICgkLmlzRnVuY3Rpb24oc2V0dGluZ3MuYmVmb3JlKSkge1xuICAgICAgICAgICAgcHJlcGFyZWRTZXR0aW5ncy5iZWZvcmVTZW5kID0gc2V0dGluZ3MuYmVmb3JlO1xuICAgICAgICAgICAgZGVsZXRlIHByZXBhcmVkU2V0dGluZ3MuYmVmb3JlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJlcGFyZWRTZXR0aW5ncy5zdWNjZXNzID0gKHJlc3BvbnNlLCB0ZXh0U3RhdHVzLCBqcVhIUikgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlIDwgMCkge1xuICAgICAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oc2V0dGluZ3MuZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmVycm9yLmNhbGwodGhpcywganFYSFIsIHRleHRTdGF0dXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihzZXR0aW5ncy5zdWNjZXNzKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5zdWNjZXNzLmNhbGwodGhpcywgcmVzcG9uc2UsIHRleHRTdGF0dXMsIGpxWEhSKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcHJlcGFyZWRTZXR0aW5ncy5lcnJvciA9IChqcVhIUiwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgaWYgKGNoZWNrTiA8PSBpdGVyYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrTiArKztcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHByZXBhcmVkU2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgIH0sIGludGVydmFsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihzZXR0aW5ncy5lcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuZXJyb3IuY2FsbCh0aGlzLCBqcVhIUiwgdGV4dFN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAkLmFqYXgocHJlcGFyZWRTZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUG9wVXBcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwb3B1cCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb3BVcDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb25maXJtIFBvcFVwXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNvbmZpcm0ob3B0aW9ucykge1xuICAgICAgICBjb25zdCBwb3B1cCA9IHRoaXMucG9wdXAoKTtcblxuICAgICAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIHN1YmplY3Q6ICd0ZXN0JyxcbiAgICAgICAgICAgIG9rOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYW5jZWw6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cC5jbG9zZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlOiAnQ29uZmlybScsXG4gICAgICAgICAgICB0aXRsZU9LOiAnT0snLFxuICAgICAgICAgICAgdGl0bGVDYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgICAgICAgaHRtbDogJycsXG4gICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICAgICAgICBjbGFzczogJydcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpLFxuICAgICAgICAgICAgaHRtbCA9ICcnO1xuXG4gICAgICAgIGlmIChzZXR0aW5ncy5odG1sKSB7XG4gICAgICAgICAgICBodG1sID0gc2V0dGluZ3MuaHRtbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGh0bWwgPSB0aGlzLnRwbChUUExfX2NvbmZpcm0sIHtcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBzZXR0aW5ncy5zdWJqZWN0LFxuICAgICAgICAgICAgICAgIHRpdGxlX29rOiBzZXR0aW5ncy50aXRsZU9LLFxuICAgICAgICAgICAgICAgIHRpdGxlX2NhbmNlbDogc2V0dGluZ3MudGl0bGVDYW5jZWxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9wdXAuYWRkKHtcbiAgICAgICAgICAgIHRpdGxlOiBzZXR0aW5ncy50aXRsZSxcbiAgICAgICAgICAgIGh0bWw6IGh0bWwsXG4gICAgICAgICAgICB3aWR0aDogc2V0dGluZ3Mud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHNldHRpbmdzLmhlaWdodCxcbiAgICAgICAgICAgIGNsYXNzOiBgemMtcG9wdXBfbm8tcGFkZGluZyB6Yy1wb3B1cF90eXBlX2NvbmZpcm0gJHtzZXR0aW5ncy5jbGFzc31gLFxuICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy56Yy1jb25maXJtJykub24oJ2NsaWNrJywgJy56Yy1jb25maXJtX19idXR0b25fdHlwZV9vaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mub2suY2FsbCh0aGlzLCBwb3B1cCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKCcuemMtY29uZmlybScpLm9uKCdjbGljaycsICcuemMtY29uZmlybV9fYnV0dG9uX3R5cGVfY2FuY2VsJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5jYW5jZWwuY2FsbCh0aGlzLCBwb3B1cCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb21wdCBQb3BVcFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwcm9tcHQob3B0aW9ucykge1xuICAgICAgICBjb25zdCBwb3B1cCA9IHRoaXMucG9wdXAoKTtcblxuICAgICAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIHN1YmplY3Q6ICd0ZXN0JyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnSW5zZXJ0IHlvdXIgdGV4dCcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgICAgIG9rOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYW5jZWw6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cC5jbG9zZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlOiAnUHJvbXB0JyxcbiAgICAgICAgICAgIHRpdGxlT0s6ICdPSycsXG4gICAgICAgICAgICB0aXRsZUNhbmNlbDogJ0NhbmNlbCcsXG4gICAgICAgICAgICBodG1sOiAnJyxcbiAgICAgICAgICAgIHdpZHRoOiA0MDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgICAgIGNsYXNzOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyksXG4gICAgICAgICAgICBodG1sID0gJyc7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLmh0bWwpIHtcbiAgICAgICAgICAgIGh0bWwgPSBzZXR0aW5ncy5odG1sO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHRtbCA9IHRoaXMudHBsKFRQTF9fcHJvbXB0LCB7XG4gICAgICAgICAgICAgICAgc3ViamVjdDogc2V0dGluZ3Muc3ViamVjdCxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogc2V0dGluZ3MucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogc2V0dGluZ3MuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICB0aXRsZV9vazogc2V0dGluZ3MudGl0bGVPSyxcbiAgICAgICAgICAgICAgICB0aXRsZV9jYW5jZWw6IHNldHRpbmdzLnRpdGxlQ2FuY2VsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvcHVwLmFkZCh7XG4gICAgICAgICAgICB0aXRsZTogc2V0dGluZ3MudGl0bGUsXG4gICAgICAgICAgICBodG1sOiBodG1sLFxuICAgICAgICAgICAgd2lkdGg6IHNldHRpbmdzLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBzZXR0aW5ncy5oZWlnaHQsXG4gICAgICAgICAgICBjbGFzczogYHpjLXBvcHVwX3R5cGVfcHJvbXB0ICR7c2V0dGluZ3MuY2xhc3N9YCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuemMtcHJvbXB0Jykub24oJ2NsaWNrJywgJy56Yy1wcm9tcHRfX2J1dHRvbl90eXBlX29rJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICQoJy56Yy1wcm9tcHRfX2lucHV0JykudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLm9rLmNhbGwodGhpcywgcG9wdXAsIHRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXByb21wdF9faW5wdXQnKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKCcuemMtcHJvbXB0Jykub24oJ2NsaWNrJywgJy56Yy1wcm9tcHRfX2J1dHRvbl90eXBlX2NhbmNlbCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuY2FuY2VsLmNhbGwodGhpcywgcG9wdXApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGVydCBQb3BVcFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhbGVydChvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHBvcHVwID0gdGhpcy5wb3B1cCgpO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgc3ViamVjdDogJ3Rlc3QnLFxuICAgICAgICAgICAgb2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cC5jbG9zZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlOiAnQWxlcnQnLFxuICAgICAgICAgICAgdGl0bGVPSzogJ09LJyxcbiAgICAgICAgICAgIGh0bWw6ICcnLFxuICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICAgICAgY2xhc3M6ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHNldHRpbmdzID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKSxcbiAgICAgICAgICAgIGh0bWwgPSAnJztcblxuICAgICAgICBpZiAoc2V0dGluZ3MuaHRtbCkge1xuICAgICAgICAgICAgaHRtbCA9IHNldHRpbmdzLmh0bWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBodG1sID0gdGhpcy50cGwoVFBMX19hbGVydCwge1xuICAgICAgICAgICAgICAgIHN1YmplY3Q6IHNldHRpbmdzLnN1YmplY3QsXG4gICAgICAgICAgICAgICAgdGl0bGVfb2s6IHNldHRpbmdzLnRpdGxlT0tcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9wdXAuYWRkKHtcbiAgICAgICAgICAgIHRpdGxlOiBzZXR0aW5ncy50aXRsZSxcbiAgICAgICAgICAgIGh0bWw6IGh0bWwsXG4gICAgICAgICAgICB3aWR0aDogc2V0dGluZ3Mud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHNldHRpbmdzLmhlaWdodCxcbiAgICAgICAgICAgIGNsYXNzOiBgemMtcG9wdXBfdHlwZV9hbGVydCAke3NldHRpbmdzLmNsYXNzfWAsXG4gICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLWFsZXJ0Jykub24oJ2NsaWNrJywgJy56Yy1hbGVydF9fYnV0dG9uX3R5cGVfb2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLm9rLmNhbGwodGhpcywgcG9wdXApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXN0IEFQSVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgICBXb3JkUHJlc3MgcmVzdCBBUEkgVVJMXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5vbmNlIFdvcmRQcmVzcyBYIG5vbmNlIGZvciBSZXN0QVBJXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcmVzdEFQSSh1cmwsIG5vbmNlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVzdEFQSSh1cmwsIG5vbmNlKTtcbiAgICB9XG5cbiAgICBpbnB1dFJhbmdlKG1vZGUsIGRhdGEgPSB7fSkge1xuICAgICAgICBpZiAobW9kZSAmJiBkYXRhLmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByaXYgPSB7fTtcblxuICAgICAgICAgICAgLy8gSGFzIGxpbmUgYmFja2dyb3VuZFxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyTEJDbGFzcyA9IGRhdGEuY29udGFpbmVyTEJDbGFzcyB8fCAnJztcbiAgICAgICAgICAgIHByaXYuaGFzTEIgPSBkYXRhLmVsLnBhcmVudCgpLmhhc0NsYXNzKGNvbnRhaW5lckxCQ2xhc3MpO1xuXG4gICAgICAgICAgICAvLyBDdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBwcml2LmN1cnJlbnRWYWx1ZSA9IGRhdGEuZWwudmFsKCk7XG5cbiAgICAgICAgICAgIC8vIFRyYWNrIHBlcmNlbnRcbiAgICAgICAgICAgIGNvbnN0IG1pbiA9IGRhdGEuc2V0dGluZ3MubWluIHx8IDA7XG4gICAgICAgICAgICBjb25zdCBtYXggPSBkYXRhLnNldHRpbmdzLm1heCB8fCAxMDA7XG5cbiAgICAgICAgICAgIHByaXYudHJhY2tQZXJjZW50ID0gKChwcml2LmN1cnJlbnRWYWx1ZSAtIG1pbikgKiAxMDApIC8gKG1heCAtIG1pbik7XG5cbiAgICAgICAgICAgIC8vIFBvc3RmaXhcbiAgICAgICAgICAgIHByaXYucG9zdGZpeCA9IGRhdGEuc2V0dGluZ3MucG9zdGZpeCB8fCAnJztcblxuICAgICAgICAgICAgLy8gRWxlbWVudHNcbiAgICAgICAgICAgIGNvbnN0IGxlZnRJbmRpY2F0b3JDbGFzcyAgICA9IGRhdGEubGVmdEluZGljYXRvckNsYXNzICAgIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEluZGljYXRvckNsYXNzID0gZGF0YS5jdXJyZW50SW5kaWNhdG9yQ2xhc3MgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCByaWdodEluZGljYXRvckNsYXNzICAgPSBkYXRhLnJpZ2h0SW5kaWNhdG9yQ2xhc3MgICB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IGdyaWRDb250YWluZXJDbGFzcyAgICA9IGRhdGEuZ3JpZENvbnRhaW5lckNsYXNzICAgIHx8ICcnO1xuXG4gICAgICAgICAgICBwcml2LmxlZnRJbmRpY2F0b3IgICAgPSAobGVmdEluZGljYXRvckNsYXNzKSAgICA/IGRhdGEuZWwucGFyZW50KCkuZmluZChgLiR7bGVmdEluZGljYXRvckNsYXNzfWApICAgIDogJyc7XG4gICAgICAgICAgICBwcml2LmN1cnJlbnRJbmRpY2F0b3IgPSAoY3VycmVudEluZGljYXRvckNsYXNzKSA/IGRhdGEuZWwucGFyZW50KCkuZmluZChgLiR7Y3VycmVudEluZGljYXRvckNsYXNzfWApIDogJyc7XG4gICAgICAgICAgICBwcml2LnJpZ2h0SW5kaWNhdG9yICAgPSAocmlnaHRJbmRpY2F0b3JDbGFzcykgICA/IGRhdGEuZWwucGFyZW50KCkuZmluZChgLiR7cmlnaHRJbmRpY2F0b3JDbGFzc31gKSAgIDogJyc7XG4gICAgICAgICAgICBwcml2LmdyaWRDb250YWluZXIgICAgPSAoZ3JpZENvbnRhaW5lckNsYXNzKSAgICA/IGRhdGEuZWwucGFyZW50KCkuZmluZChgLiR7Z3JpZENvbnRhaW5lckNsYXNzfWApICAgIDogJyc7XG5cbiAgICAgICAgICAgIC8vIEFkZCB0cmFjayBwZXJjZW50XG4gICAgICAgICAgICBwcml2LmFkZFRyYWNrUGVyY2VudCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXByaXYuaGFzTEIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5lbC5jc3MoJ2JhY2tncm91bmQtc2l6ZScsIGAke3ByaXYudHJhY2tQZXJjZW50fSUgMTAwJWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFNldHVwIGluZGljYXRvciBjdXJyZW50XG4gICAgICAgICAgICBwcml2LmluZGljYXRvckN1cnJlbnQgPSAoY2hhbmdlQ3VycmVudFZhbHVlID0gZmFsc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoaWRlRnJvbVRvID0gZGF0YS5zZXR0aW5ncy5oaWRlX2Zyb21fdG8gfHwgZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoaGlkZUZyb21UbyAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aHVtYlNpemUgPSAocHJpdi5oYXNMQikgPyAxNyA6IDE2O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VDdXJyZW50VmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXYuY3VycmVudEluZGljYXRvci50ZXh0KHByaXYuY3VycmVudFZhbHVlICsgcHJpdi5wb3N0Zml4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbmRpY2F0b3JXaWR0aCA9IHByaXYuY3VycmVudEluZGljYXRvci5vdXRlcldpZHRoKCkgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsY1Bvc2l0aW9uU3R5bGUgICAgID0gYGxlZnQ6IGNhbGMoJHtwcml2LnRyYWNrUGVyY2VudH0lIC0gJHsoKGN1cnJlbnRJbmRpY2F0b3JXaWR0aCAtIHRodW1iU2l6ZSkgLyAyKSArIChwcml2LnRyYWNrUGVyY2VudCAvIDEwMCkgKiB0aHVtYlNpemV9cHgpYDsgXG5cbiAgICAgICAgICAgICAgICAgICAgcHJpdi5jdXJyZW50SW5kaWNhdG9yLmF0dHIoJ3N0eWxlJywgY2FsY1Bvc2l0aW9uU3R5bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFNob3cvSGlkZSBpbmRpY2F0b3JzIDogbGVmdCAmIHJpZ2h0XG4gICAgICAgICAgICBwcml2LmluZGljYXRvcnNTaG93SGlkZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoaWRlTWluTWF4ID0gZGF0YS5zZXR0aW5ncy5oaWRlX21pbl9tYXggfHwgZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoaGlkZU1pbk1heCAhPT0gdHJ1ZSAmJiBwcml2LmN1cnJlbnRJbmRpY2F0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBMRCA9IHByaXYubGVmdEluZGljYXRvci5nZXQoMCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IENEID0gcHJpdi5jdXJyZW50SW5kaWNhdG9yLmdldCgwKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgUkQgPSBwcml2LnJpZ2h0SW5kaWNhdG9yLmdldCgwKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoTEQucmlnaHQgKyAxID4gQ0QubGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdi5sZWZ0SW5kaWNhdG9yLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXYubGVmdEluZGljYXRvci5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoUkQubGVmdCAtIDEgPCBDRC5yaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdi5yaWdodEluZGljYXRvci5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2LnJpZ2h0SW5kaWNhdG9yLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBwcml2LmNvdW50RGVjaW1hbHMgPSAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoKHZhbHVlICUgMSkgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gTW9kZSA6IEluaXRcbiAgICAgICAgICAgIHByaXYuaW5pdE1vZGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJpdi5pbmRpY2F0b3JDdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgcHJpdi5pbmRpY2F0b3JzU2hvd0hpZGUoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIE1vZGUgOiBMaXZlXG4gICAgICAgICAgICBwcml2LmxpdmVNb2RlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByaXYuYWRkVHJhY2tQZXJjZW50KCk7XG4gICAgICAgICAgICAgICAgcHJpdi5pbmRpY2F0b3JDdXJyZW50KHRydWUpO1xuICAgICAgICAgICAgICAgIHByaXYuaW5kaWNhdG9yc1Nob3dIaWRlKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBNb2RlIDogQ2hhbmdlXG4gICAgICAgICAgICBwcml2LmNoYW5nZU1vZGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGlkZU1pbk1heCA9IGRhdGEuc2V0dGluZ3MuaGlkZV9taW5fbWF4IHx8IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNob3dHcmlkICAgPSBkYXRhLnNldHRpbmdzLmdyaWQgfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RlcCAgICAgICA9IGRhdGEuc2V0dGluZ3Muc3RlcCB8fCAxO1xuXG4gICAgICAgICAgICAgICAgZGF0YS5lbC5hdHRyKCdtaW4nLCBtaW4pO1xuICAgICAgICAgICAgICAgIGRhdGEuZWwuYXR0cignbWF4JywgbWF4KTtcbiAgICAgICAgICAgICAgICBkYXRhLmVsLmRhdGEoJ3NldHRpbmdzJywgZGF0YS5zZXR0aW5ncyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaGlkZU1pbk1heCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpdi5sZWZ0SW5kaWNhdG9yLnRleHQobWluICsgcHJpdi5wb3N0Zml4KTtcbiAgICAgICAgICAgICAgICAgICAgcHJpdi5yaWdodEluZGljYXRvci50ZXh0KG1heCArIHByaXYucG9zdGZpeCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHNob3dHcmlkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXJrID0gKG1heCAtIG1pbikgLyA0O1xuXG4gICAgICAgICAgICAgICAgICAgIHByaXYuZ3JpZENvbnRhaW5lci5maW5kKCdsaVtkYXRhLW49MV0gPiBzcGFuJykudGV4dChtaW4pO1xuICAgICAgICAgICAgICAgICAgICBwcml2LmdyaWRDb250YWluZXIuZmluZCgnbGlbZGF0YS1uPTJdID4gc3BhbicpLnRleHQoemMucm91bmQobWFyayArIG1pbiwgcHJpdi5jb3VudERlY2ltYWxzKHN0ZXApKSk7XG4gICAgICAgICAgICAgICAgICAgIHByaXYuZ3JpZENvbnRhaW5lci5maW5kKCdsaVtkYXRhLW49M10gPiBzcGFuJykudGV4dCh6Yy5yb3VuZChtYXJrICogMiArIG1pbiwgcHJpdi5jb3VudERlY2ltYWxzKHN0ZXApKSk7XG4gICAgICAgICAgICAgICAgICAgIHByaXYuZ3JpZENvbnRhaW5lci5maW5kKCdsaVtkYXRhLW49NF0gPiBzcGFuJykudGV4dCh6Yy5yb3VuZChtYXJrICogMyArIG1pbiwgcHJpdi5jb3VudERlY2ltYWxzKHN0ZXApKSk7XG4gICAgICAgICAgICAgICAgICAgIHByaXYuZ3JpZENvbnRhaW5lci5maW5kKCdsaVtkYXRhLW49NV0gPiBzcGFuJykudGV4dChtYXgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHByaXYuYWRkVHJhY2tQZXJjZW50KCk7XG4gICAgICAgICAgICAgICAgcHJpdi5pbmRpY2F0b3JDdXJyZW50KHRydWUpO1xuICAgICAgICAgICAgICAgIHByaXYuaW5kaWNhdG9yc1Nob3dIaWRlKCk7XG4gICAgICAgICAgICB9O1xuICAgIFxuICAgICAgICAgICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnaW5pdCc6XG4gICAgICAgICAgICAgICAgICAgIHByaXYuaW5pdE1vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGl2ZSc6XG4gICAgICAgICAgICAgICAgICAgIHByaXYubGl2ZU1vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2hhbmdlJzpcbiAgICAgICAgICAgICAgICAgICAgcHJpdi5jaGFuZ2VNb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBJbml0aWFsaXphdGlvbiBvZiBjbGFzcyA6IFppbWJydUNvZGVcbndpbmRvdy56YyA9IG5ldyBaaW1icnVDb2RlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9