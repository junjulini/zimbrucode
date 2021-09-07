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
 * Script : ZimbruCode/Module/Cookie
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
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
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : ZimbruCode/Module/PopUp
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
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
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : ZimbruCode/Module/PopUp
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2pxdWVyeS56aW1icnVjb2RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSx5QkFBeUIsSUFBSSxzQkFBc0IsT0FBTywyR0FBMkcsT0FBTztBQUM1SztBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDSG5CO0FBQ0Esd0dBQXdHLFNBQVMsdUxBQXVMLFVBQVU7QUFDbFQ7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQ0huQjtBQUNBLDhHQUE4RyxTQUFTLDhKQUE4SixVQUFVLGdHQUFnRyxjQUFjO0FBQzdZO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUNIbkI7QUFDQSwyR0FBMkcsU0FBUyw0QkFBNEIsYUFBYSxhQUFhLFNBQVMsb0xBQW9MLFVBQVUsOEZBQThGLGNBQWM7QUFDN2Q7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUNGbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFRTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekMseUNBQXlDO0FBQ3pDLHlDQUF5QztBQUN6Qyx1Q0FBdUM7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFD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QkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvUmVzb3VyY2VzL3BhY2thZ2VzL3ppbWJydWNvZGUvZXM2L21vZHVsZS90cGwvcG9wdXAuaHRtbCIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi90cGwvYWxlcnQuaHRtbCIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi90cGwvY29uZmlybS5odG1sIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvUmVzb3VyY2VzL3BhY2thZ2VzL3ppbWJydWNvZGUvZXM2L3RwbC9wcm9tcHQuaHRtbCIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi9tb2R1bGUvY29va2llLmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvUmVzb3VyY2VzL3BhY2thZ2VzL3ppbWJydWNvZGUvZXM2L21vZHVsZS9wb3B1cC5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi9tb2R1bGUvcmVzdC1hcGkuanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvUmVzb3VyY2VzL3BhY2thZ2VzL3ppbWJydWNvZGUvZXM2L2pxdWVyeS56aW1icnVjb2RlLmVzNi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCIgPGRpdiBpZD1cXFwie3tpZH19XFxcIiBjbGFzcz1cXFwiemMtcG9wdXAge3tjbGFzc319XFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtcG9wdXBfX3dpbmRvd1xcXCI+IDxoZWFkZXIgY2xhc3M9XFxcInpjLXBvcHVwX19oZWFkZXJcXFwiPiA8c3BhbiBjbGFzcz1cXFwiemMtcG9wdXBfX3RpdGxlXFxcIj57e3RpdGxlfX08L3NwYW4+IDxpIGNsYXNzPVxcXCJ6Yy1wb3B1cF9fY2xvc2UgemMtaWNvbi1jbGVhclxcXCI+PC9pPiA8L2hlYWRlcj4gPGRpdiBjbGFzcz1cXFwiemMtc2Nyb2xsYmFyIHpjLXBvcHVwX19vdmVyZmxvdy1oaWRkZW5cXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wb3B1cF9fbG9hZGluZ1xcXCI+IDxkaXYgY2xhc3M9XFxcInpjLWxvYWRpbmctc3Bpbm5lciB6Yy1wb3B1cF9fbG9hZGluZy1zcGlubmVyXFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2UgemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2VfbW9kZV8xXFxcIj48L2Rpdj4gPGRpdiBjbGFzcz1cXFwiemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2UgemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2VfbW9kZV8yXFxcIj48L2Rpdj4gPGRpdiBjbGFzcz1cXFwiemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2UgemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2VfbW9kZV8zXFxcIj48L2Rpdj4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wb3B1cF9fY29udGVudFxcXCI+PC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIiA8ZGl2IGNsYXNzPVxcXCJ6Yy1hbGVydFxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLWFsZXJ0X19jb250YWluZXJcXFwiPiA8cCBjbGFzcz1cXFwiemMtYWxlcnRfX3RleHRcXFwiPnt7c3ViamVjdH19PC9wPiA8L2Rpdj4gPGZvb3RlciBjbGFzcz1cXFwiemMtYWxlcnRfX2Zvb3RlclxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLWFsZXJ0X19jZW50ZXJcXFwiPiA8YnV0dG9uIGNsYXNzPVxcXCJ6Yy1hbGVydF9fYnV0dG9uIHpjLWFsZXJ0X19idXR0b25fdHlwZV9vayB6Yy1hbGVydF9fYnV0dG9uX2FjdGl2ZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj57e3RpdGxlX29rfX08L2J1dHRvbj4gPC9kaXY+IDwvZm9vdGVyPjwvZGl2PiBcIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiIDxkaXYgY2xhc3M9XFxcInpjLWNvbmZpcm1cXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1jb25maXJtX19jb250YWluZXJcXFwiPiA8cCBjbGFzcz1cXFwiemMtY29uZmlybV9fdGV4dFxcXCI+e3tzdWJqZWN0fX08L3A+IDwvZGl2PiA8Zm9vdGVyIGNsYXNzPVxcXCJ6Yy1jb25maXJtX19mb290ZXJcXFwiPiA8YnV0dG9uIGNsYXNzPVxcXCJ6Yy1jb25maXJtX19idXR0b24gemMtY29uZmlybV9fYnV0dG9uX3R5cGVfb2sgemMtY29uZmlybV9fYnV0dG9uX2FjdGl2ZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj57e3RpdGxlX29rfX08L2J1dHRvbj4gPGJ1dHRvbiBjbGFzcz1cXFwiemMtY29uZmlybV9fYnV0dG9uIHpjLWNvbmZpcm1fX2J1dHRvbl90eXBlX2NhbmNlbFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj57e3RpdGxlX2NhbmNlbH19PC9idXR0b24+IDwvZm9vdGVyPiA8L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiIDxkaXYgY2xhc3M9XFxcInpjLXByb21wdFxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLXByb21wdF9fY29udGFpbmVyXFxcIj4gPHAgY2xhc3M9XFxcInpjLXByb21wdF9fdGV4dFxcXCI+e3tzdWJqZWN0fX08L3A+IDxpbnB1dCBwbGFjZWhvbGRlcj1cXFwie3twbGFjZWhvbGRlcn19XFxcIiB2YWx1ZT1cXFwie3tkZWZhdWx0fX1cXFwiIGNsYXNzPVxcXCJ6Yy1wcm9tcHRfX2lucHV0XFxcIj4gPC9kaXY+IDxmb290ZXIgY2xhc3M9XFxcInpjLXByb21wdF9fZm9vdGVyXFxcIj4gPGJ1dHRvbiBjbGFzcz1cXFwiemMtcHJvbXB0X19idXR0b24gemMtcHJvbXB0X19idXR0b25fdHlwZV9vayB6Yy1wcm9tcHRfX2J1dHRvbl9hY3RpdmVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+e3t0aXRsZV9va319PC9idXR0b24+IDxidXR0b24gY2xhc3M9XFxcInpjLXByb21wdF9fYnV0dG9uIHpjLXByb21wdF9fYnV0dG9uX3R5cGVfY2FuY2VsXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPnt7dGl0bGVfY2FuY2VsfX08L2J1dHRvbj4gPC9mb290ZXI+IDwvZGl2PlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFppbWJydUNvZGUvTW9kdWxlL0Nvb2tpZVxuICpcbiAqIEBhdXRob3IgIEMuUiA8Y3JAanVuanVsaW5pLmNvbT5cbiAqIEBwYWNrYWdlIHppbWJydWNvZGVcbiAqIEBzaW5jZSAgIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29raWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRlZmF1bHRzID0ge307XG4gICAgfVxuXG4gICAgX19leHRlbmQoLi4uYXJncykge1xuICAgICAgICBsZXQgaSA9IDAsIHJlc3VsdCA9IHt9O1xuXG4gICAgICAgIGZvciAoOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZXMgPSBhcmdzW2ldO1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgX19hcGkoa2V5LCB2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBsZXQgcmVzdWx0LCBjb252ZXJ0ZXIgPSAoKSA9PiB7fTtcblxuICAgICAgICAvLyBXcml0ZVxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSB0aGlzLl9fZXh0ZW5kKHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnLydcbiAgICAgICAgICAgIH0sIHRoaXMuZGVmYXVsdHMsIGF0dHJpYnV0ZXMpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMuZXhwaXJlcyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBleHBpcmVzID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBleHBpcmVzLnNldE1pbGxpc2Vjb25kcyhleHBpcmVzLmdldE1pbGxpc2Vjb25kcygpICsgYXR0cmlidXRlcy5leHBpcmVzICogODY0ZSs1KTtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmV4cGlyZXMgPSBleHBpcmVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHpjLnBhcnNlKHZhbHVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAoL15bXFx7XFxbXS8udGVzdChyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgICAgICAgIGlmICghY29udmVydGVyLndyaXRlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8M0F8M0N8M0V8M0R8MkZ8M0Z8NDB8NUJ8NUR8NUV8NjB8N0J8N0R8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gY29udmVydGVyLndyaXRlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpO1xuICAgICAgICAgICAga2V5ID0ga2V5LnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8NUV8NjB8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG4gICAgICAgICAgICBrZXkgPSBrZXkucmVwbGFjZSgvW1xcKFxcKV0vZywgZXNjYXBlKTtcblxuICAgICAgICAgICAgcmV0dXJuIChkb2N1bWVudC5jb29raWUgPSBbXG4gICAgICAgICAgICAgICAga2V5LCAnPScsIHZhbHVlLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuZXhwaXJlcyAmJiAnOyBleHBpcmVzPScgKyBhdHRyaWJ1dGVzLmV4cGlyZXMudG9VVENTdHJpbmcoKSwgLy8gdXNlIGV4cGlyZXMgYXR0cmlidXRlLCBtYXgtYWdlIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUVcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnBhdGggICAgJiYgJzsgcGF0aD0nICsgYXR0cmlidXRlcy5wYXRoLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuZG9tYWluICAmJiAnOyBkb21haW49JyArIGF0dHJpYnV0ZXMuZG9tYWluLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuc2VjdXJlID8gJzsgc2VjdXJlJyA6ICcnXG4gICAgICAgICAgICBdLmpvaW4oJycpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlYWRcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVG8gcHJldmVudCB0aGUgZm9yIGxvb3AgaW4gdGhlIGZpcnN0IHBsYWNlIGFzc2lnbiBhbiBlbXB0eSBhcnJheVxuICAgICAgICAvLyBpbiBjYXNlIHRoZXJlIGFyZSBubyBjb29raWVzIGF0IGFsbC4gQWxzbyBwcmV2ZW50cyBvZGQgcmVzdWx0IHdoZW5cbiAgICAgICAgLy8gY2FsbGluZyBcImdldCgpXCJcbiAgICAgICAgbGV0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXSxcbiAgICAgICAgICAgIHJkZWNvZGUgPSAvKCVbMC05QS1aXXsyfSkrL2csXG4gICAgICAgICAgICBpID0gMDtcblxuICAgICAgICBmb3IgKDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKSxcbiAgICAgICAgICAgICAgICBuYW1lID0gcGFydHNbMF0ucmVwbGFjZShyZGVjb2RlLCBkZWNvZGVVUklDb21wb25lbnQpLFxuICAgICAgICAgICAgICAgIGNvb2tpZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKTtcblxuICAgICAgICAgICAgaWYgKGNvb2tpZS5jaGFyQXQoMCkgPT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICBjb29raWUgPSBjb29raWUuc2xpY2UoMSwgLTEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvb2tpZSA9IGNvbnZlcnRlci5yZWFkID9cbiAgICAgICAgICAgICAgICAgICAgY29udmVydGVyLnJlYWQoY29va2llLCBuYW1lKSA6IGNvbnZlcnRlcihjb29raWUsIG5hbWUpIHx8XG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZS5yZXBsYWNlKHJkZWNvZGUsIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5qc29uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBjb29raWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IGNvb2tpZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBhZGQoa2V5LCB2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICB0aGlzLl9fYXBpKGtleSwgdmFsdWUsIGF0dHJpYnV0ZXMpO1xuICAgIH1cblxuICAgIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19hcGkoa2V5KTtcbiAgICB9XG5cbiAgICBnZXRKU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2FwaS5hcHBseSh7XG4gICAgICAgICAgICBqc29uOiB0cnVlXG4gICAgICAgIH0sIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKGtleSwgYXR0cmlidXRlcykge1xuICAgICAgICB0aGlzLl9fYXBpKGtleSwgJycsIHRoaXMuX19leHRlbmQoYXR0cmlidXRlcywge1xuICAgICAgICAgICAgZXhwaXJlczogLTFcbiAgICAgICAgfSkpO1xuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFppbWJydUNvZGUvTW9kdWxlL1BvcFVwXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBUUExfX3BvcHVwIGZyb20gJy4vdHBsL3BvcHVwLmh0bWwnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BVcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaWQgPSBgemMtcG9wdXAtJHt6Yy51bmlxdWVJRCgpfWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIHBvcHVwXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZChvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdQb3BVcCBUaXRsZScsXG4gICAgICAgICAgICBhamF4OiAnJyxcbiAgICAgICAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignWmltYnJ1Q29kZSA6IFBvcFVwJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmVmb3JlOiAoKSA9PiB7fSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHt9LFxuICAgICAgICAgICAgYWZ0ZXJTaG93Q29udGVudDogKCkgPT4ge30sXG4gICAgICAgICAgICB3aWR0aDogJycsXG4gICAgICAgICAgICBoZWlnaHQ6ICcnLFxuICAgICAgICAgICAgaHRtbDogJycsXG4gICAgICAgICAgICBjbGFzczogJydcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyksXG4gICAgICAgICAgICAgIHN0cnVjdHVyZSA9IHpjLnRwbChUUExfX3BvcHVwLCB7XG4gICAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBzZXR0aW5ncy5jbGFzcyxcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBzZXR0aW5ncy50aXRsZVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZChzdHJ1Y3R1cmUpO1xuXG4gICAgICAgIGlmICghc2V0dGluZ3MuaHRtbCkge1xuICAgICAgICAgICAgdGhpcy5zaXplKHNldHRpbmdzLmhlaWdodCwgc2V0dGluZ3Mud2lkdGgpO1xuICAgICAgICAgICAgemMuYWpheCh7XG4gICAgICAgICAgICAgICAgZGF0YTogc2V0dGluZ3MuYWpheCxcbiAgICAgICAgICAgICAgICBiZWZvcmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuYmVmb3JlLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IHNldHRpbmdzLmVycm9yLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuY29udGVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZENvbnRlbnQocmVzcG9uc2UuY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5zdWNjZXNzLmNhbGwodGhpcywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmFmdGVyU2hvd0NvbnRlbnQuY2FsbCh0aGlzLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNpemUoc2V0dGluZ3MuaGVpZ2h0LCBzZXR0aW5ncy53aWR0aCk7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENvbnRlbnQoc2V0dGluZ3MuaHRtbCk7XG4gICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KCk7XG4gICAgICAgICAgICBzZXR0aW5ncy5zdWNjZXNzLmNhbGwodGhpcywgc2V0dGluZ3MuaHRtbCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKGAjJHt0aGlzLmlkfWApLm9uKCdjbGljaycsICcuemMtcG9wdXBfX2Nsb3NlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZXVwIHRvdWNoc3RhcnQnLCBgIyR7dGhpcy5pZH1gLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvcHVwV2luZG93ID0gJCgnLnpjLXBvcHVwX193aW5kb3cnKTtcblxuICAgICAgICAgICAgaWYgKCFwb3B1cFdpbmRvdy5pcyhldmVudC50YXJnZXQpICYmIHBvcHVwV2luZG93LmhhcyhldmVudC50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsYyBwb3B1cCB3aW5kb3cgc2l6ZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzaXplKGhlaWdodCwgd2lkdGgpIHtcbiAgICAgICAgaGVpZ2h0ID0gKHR5cGVvZiBoZWlnaHQgIT09ICd1bmRlZmluZWQnIHx8IGhlaWdodCkgPyBoZWlnaHQgOiBmYWxzZTtcbiAgICAgICAgd2lkdGggID0gKHR5cGVvZiB3aWR0aCAhPT0gJ3VuZGVmaW5lZCcgfHwgd2lkdGgpID8gd2lkdGggOiBmYWxzZTtcblxuICAgICAgICBjb25zdCBwcml2ID0ge1xuICAgICAgICAgICAgY2FsY1NpemUgOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudC4qcnZcXDoxMVxcLi8pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX193aW5kb3dgKS5jc3MoeydtYXgtd2lkdGgnOiBgJHt3aWR0aH1weGAsICd3aWR0aCc6ICcxMDAlJ30pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX193aW5kb3dgKS5jc3MoeydtYXgtaGVpZ2h0JzogYCR7aGVpZ2h0fXB4YCwgJ2hlaWdodCc6ICcxMDAlJ30pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX3dpbmRvd2ApLmNzcyh7J21heC13aWR0aCc6IGAke3dpZHRofXB4YH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX193aW5kb3dgKS5jc3MoeydtYXgtaGVpZ2h0JzogYCR7aGVpZ2h0fXB4YH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHByaXYuY2FsY1NpemUoKTtcblxuICAgICAgICAkKHdpbmRvdykucmVzaXplKCgpID0+IHtcbiAgICAgICAgICAgIHByaXYuY2FsY1NpemUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBjb250ZW50XG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGhpZGVDb250ZW50KCkge1xuICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX2NvbnRlbnRgKS5oaWRlKCk7XG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IGNvbnRlbnRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgc2hvd0NvbnRlbnQoKSB7XG4gICAgICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX193aW5kb3cgLnpjLXNjcm9sbGJhcmApLnJlbW92ZUNsYXNzKCd6Yy1wb3B1cF9fb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fY29udGVudGApLnNob3coKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIGxvYWRpbmdcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaGlkZUxvYWRpbmcoKSB7XG4gICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fbG9hZGluZ2ApLmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IGxvYWRpbmdcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgc2hvd0xvYWRpbmcoKSB7XG4gICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fbG9hZGluZ2ApLnNob3coKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFcmFzZSBjb250ZW50XG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHJlbUNvbnRlbnQoKSB7XG4gICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fY29udGVudGApLmVtcHR5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kIGNvbnRlbnRcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYXBwZW5kQ29udGVudChjb250ZW50KSB7XG4gICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fY29udGVudGApLmFwcGVuZChjb250ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX193aW5kb3dgKS5hZGRDbGFzcygnemMtcG9wdXBfX3dpbmRvd19jbG9zZScpO1xuICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX3dpbmRvd2ApLm9uZSgnYW5pbWF0aW9uZW5kIHdlYmtpdEFuaW1hdGlvbkVuZCBvQW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAkKGAjJHt0aGlzLmlkfSBgKS5oaWRlKCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdpbml0aWFsJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFppbWJydUNvZGUvTW9kdWxlL1BvcFVwXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3RBUEkge1xuICAgIGNvbnN0cnVjdG9yKHVybCwgbm9uY2UpIHtcbiAgICAgICAgdGhpcy5yZXN0VVJMID0gdXJsO1xuICAgICAgICB0aGlzLnJlc3ROb25jZSA9IG5vbmNlO1xuICAgIH1cblxuICAgIGdldChwYXRoLCBkYXRhID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19hamF4KCdHRVQnLCBwYXRoLCBkYXRhKTtcbiAgICB9XG5cbiAgICBjcmVhdGUocGF0aCwgZGF0YSA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fYWpheCgnUE9TVCcsIHBhdGgsIGRhdGEpO1xuICAgIH1cblxuICAgIHVwZGF0ZShwYXRoLCBkYXRhID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19hamF4KCdQVVQnLCBwYXRoLCBkYXRhKTtcbiAgICB9XG5cbiAgICBkZWxldGUocGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2FqYXgoJ0RFTEVURScsIHBhdGgpO1xuICAgIH1cblxuICAgIHF1ZXJ5KHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdFVSTCArIHBhdGg7XG4gICAgfVxuXG4gICAgX19hamF4KG1ldGhvZCA9ICdHRVQnLCBwYXRoLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IHt9O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB1cmw6IHRoaXMucmVzdFVSTCArIHBhdGgsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdYLVdQLU5vbmNlJzogdGhpcy5yZXN0Tm9uY2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobWV0aG9kID09ICdQT1NUJyB8fCBtZXRob2QgPT0gJ1BVVCcpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucHJvY2Vzc0RhdGEgPSBmYWxzZTtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgICAgb3B0aW9ucy5jb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JztcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMuZXJyb3IgPSAoanFYSFIsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oY2FsbGJhY2tzLmZhaWwpKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLmZhaWwuY2FsbCh0aGlzLCBqcVhIUiwgdGV4dFN0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLnN1Y2Nlc3MgPSAocmVzcG9uc2UsIHRleHRTdGF0dXMsIGpxWEhSKSA9PiB7XG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKGNhbGxiYWNrcy5kb25lKSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5kb25lLmNhbGwodGhpcywgcmVzcG9uc2UsIHRleHRTdGF0dXMsIGpxWEhSKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IHpjLmFqYXgob3B0aW9ucyk7XG5cbiAgICAgICAgb3V0cHV0LmZhaWwgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5mYWlsID0gY2FsbGJhY2s7XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9O1xuXG4gICAgICAgIG91dHB1dC5kb25lID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFja3MuZG9uZSA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogWmltYnJ1Q29kZSBmdW5jdGlvbnNcbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFBvcFVwICAgZnJvbSAnLi9tb2R1bGUvcG9wdXAnO1xuaW1wb3J0IENvb2tpZSAgZnJvbSAnLi9tb2R1bGUvY29va2llJztcbmltcG9ydCBSZXN0QVBJIGZyb20gJy4vbW9kdWxlL3Jlc3QtYXBpJztcblxuaW1wb3J0IFRQTF9fY29uZmlybSBmcm9tICcuL3RwbC9jb25maXJtLmh0bWwnO1xuaW1wb3J0IFRQTF9fcHJvbXB0ICBmcm9tICcuL3RwbC9wcm9tcHQuaHRtbCc7XG5pbXBvcnQgVFBMX19hbGVydCAgIGZyb20gJy4vdHBsL2FsZXJ0Lmh0bWwnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5jbGFzcyBaaW1icnVDb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gTW9kdWxlcyBvYmplY3RzXG4gICAgICAgIHRoaXMubW9kdWxlID0ge307XG4gICAgICAgIFxuICAgICAgICAvLyBNb2R1bGUgZGF0YVxuICAgICAgICB0aGlzLm1vZHVsZURhdGEgPSB7fTtcblxuICAgICAgICAvLyBHbG9iYWwgZGF0YVxuICAgICAgICB0aGlzLmdsb2JhbCA9IHt9O1xuXG4gICAgICAgIC8vIEZ1bmN0aW9uIDogQ29va2llXG4gICAgICAgIHRoaXMuY29va2llID0gbmV3IENvb2tpZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgbW9kdWxlXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZE1vZHVsZShuYW1lLCBtb2R1bGUpIHtcbiAgICAgICAgdGhpcy5pbml0TW9kdWxlRGF0YShuYW1lKTtcbiAgICAgICAgdGhpcy5tb2R1bGVbbmFtZV0gPSBtb2R1bGUoJCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6YXRpb24gbW9kdWxlIGRhdGFcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaW5pdE1vZHVsZURhdGEobmFtZSkge1xuICAgICAgICB0aGlzLm1vZHVsZURhdGFbbmFtZV0gPSB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgbW9kdWxlIGRhdGFcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkTW9kdWxlRGF0YShuYW1lLCBkYXRhID0ge30pIHtcbiAgICAgICAgdGhpcy5tb2R1bGVEYXRhW25hbWVdID0gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgbW9kdWxlIGRhdGFcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBnZXRNb2R1bGVEYXRhKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlRGF0YVtuYW1lXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSB1bmlxdWUgSURcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICB1bmlxdWVJRCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI2KSArIERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGF0YSByZXBsYWNlIGluIHN1YmplY3RcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgc3RyUmVwbGFjZShzZWFyY2gsIHJlcGxhY2UsIHN1YmplY3QpIHtcbiAgICAgICAgbGV0IHJlZ1N0ciA9ICcnO1xuXG4gICAgICAgIHNlYXJjaC5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoIC0gMSA9PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJlZ1N0ciArPSBlbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVnU3RyICs9IGAke2VsfXxgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3ViamVjdC5yZXBsYWNlKG5ldyBSZWdFeHAocmVnU3RyLCAnZycpLCAobWF0Y2gpID0+IHtcbiAgICAgICAgICAgIGxldCBvdXRwdXQgPSAnJztcblxuICAgICAgICAgICAgc2VhcmNoLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbCA9PSBtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHJlcGxhY2VbaW5kZXhdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gcmVwbGFjZVtpbmRleF0uY2FsbCh0aGlzLCBtYXRjaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSByZXBsYWNlW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZW1wbGF0ZSBoYW5kbGVyXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRwbCAgVGVtcGxhdGUgSFRNTFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIERhdGEgZm9yIHByZXBhcmluZyB0ZW1wbGF0ZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHRwbCh0cGwgPSAnJywgZGF0YSA9IHt9KSB7XG4gICAgICAgIGlmICh0eXBlb2YgdHBsID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGxldCBzZWFyY2ggPSBbXTtcbiAgICAgICAgICAgIGxldCByZXBsYWNlID0gW107XG5cbiAgICAgICAgICAgICQuZWFjaChkYXRhLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlYXJjaC5wdXNoKGB7eyR7a2V5fX19YCk7XG4gICAgICAgICAgICAgICAgcmVwbGFjZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJSZXBsYWNlKHNlYXJjaCwgcmVwbGFjZSwgdHBsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWVwIGZpbmQgYW5kIHNldHRpbmdcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZGVlcEZpbmRBbmRTZXR0aW5nKG9iaiwgcGF0aCwgdmFsdWUsIHJlbW92ZSA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBwYXRocyA9IHBhdGguc3BsaXQoJy8nKSwgY3VycmVudCA9IG9iaiwgaTtcblxuICAgICAgICBpZiAocmVtb3ZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIHBhdGhzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXRocy5sZW5ndGggLSAxID09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRbcGF0aHNbaV1dID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudCA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnRbcGF0aHNbaV1dID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50W3BhdGhzW2ldXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhdGhzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnRbcGF0aHNbaV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIHBhdGhzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50ID09PSB1bmRlZmluZWQgfHwgY3VycmVudFtwYXRoc1tpXV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhdGhzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHBhdGhzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IHVuZGVmaW5lZCB8fCBjdXJyZW50W3BhdGhzW2ldXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhdGhzLmxlbmd0aCAtIDEgPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGN1cnJlbnRbcGF0aHNbaV1dO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnRbcGF0aHNbaV1dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXMgbW9iaWxlXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGlzTW9iaWxlKCkge1xuICAgICAgICBpZiAoL2lQKG9kfGhvbmV8YWQpL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvQW5kcm9pZC9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICBpZiAoL01vYmlsZS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9JRU1vYmlsZS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL1dpbmRvd3MgUGhvbmUvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9CbGFja0JlcnJ5L2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvQkIxMC9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93Lm5hdmlnYXRvci5hcHBOYW1lID09PSBcIk1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlclwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRNb2RlID49IDg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUm91bmRcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICByb3VuZCh2YWx1ZSwgZXhwKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZXhwID09PSAndW5kZWZpbmVkJyB8fCArZXhwID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9ICt2YWx1ZTtcbiAgICAgICAgZXhwID0gK2V4cDtcbiAgICAgICAgXG4gICAgICAgIGlmIChpc05hTih2YWx1ZSkgfHwgISh0eXBlb2YgZXhwID09PSAnbnVtYmVyJyAmJiBleHAgJSAxID09PSAwKSkge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNoaWZ0XG4gICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnZScpO1xuICAgICAgICB2YWx1ZSA9IE1hdGgucm91bmQoKyh2YWx1ZVswXSArICdlJyArICh2YWx1ZVsxXSA/ICgrdmFsdWVbMV0gKyBleHApIDogZXhwKSkpO1xuICAgICAgICBcbiAgICAgICAgLy8gU2hpZnQgYmFja1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJ2UnKTtcblxuICAgICAgICByZXR1cm4gKyh2YWx1ZVswXSArICdlJyArICh2YWx1ZVsxXSA/ICgrdmFsdWVbMV0gLSBleHApIDogLWV4cCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2l6ZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICByZXNpemUoY2FsbGJhY2tXaWR0aCwgY2FsbGJhY2tIZWlnaHQpIHtcbiAgICAgICAgbGV0IHdpbmRvd1dpZHRoICA9IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgICAgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0OyBcblxuICAgICAgICAkKHdpbmRvdykucmVzaXplKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCAhPSB3aW5kb3dXaWR0aCkge1xuICAgICAgICAgICAgICAgIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKGNhbGxiYWNrV2lkdGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrV2lkdGguY2FsbCh0aGlzLCB3aW5kb3dXaWR0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ICE9IHdpbmRvd0hlaWdodCkge1xuICAgICAgICAgICAgICAgIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oY2FsbGJhY2tIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrSGVpZ2h0LmNhbGwodGhpcywgd2luZG93SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb25lIGFuIG9iamVjdFxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNsb25lKG9iamVjdCkge1xuICAgICAgICByZXR1cm4gJC5leHRlbmQodHJ1ZSwge30sIG9iamVjdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmFuZG9tIHN0cmluZ1xuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHJhbmRvbUNvZGUobGVuZ3RoKSB7XG4gICAgICAgIGxldCBjaGFycyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaMTIzNDU2Nzg5MCcsXG4gICAgICAgICAgICBwYXNzID0gJyc7XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBsZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgbGV0IGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2Mik7XG4gICAgICAgICAgICBwYXNzICs9IGNoYXJzLmNoYXJBdChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXNzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlIGRhdGFcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwYXJzZShkYXRhLCBzdHJpbmdpZnkpIHtcbiAgICAgICAgcmV0dXJuIChzdHJpbmdpZnkgPT09IHVuZGVmaW5lZCkgPyBKU09OLnBhcnNlKGRhdGEpIDogSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYganNvblxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGlzSnNvbihzdHIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIEpTT04ucGFyc2Uoc3RyKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3Ryc3RyXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgc3Ryc3RyKGhheXN0YWNrLCBuZWVkbGUsIGJvb2wpIHtcbiAgICAgICAgY29uc3QgcG9zID0gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpO1xuXG4gICAgICAgIGlmIChwb3MgPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChib29sKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhheXN0YWNrLnN1YnN0cigwLCBwb3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGF5c3RhY2suc2xpY2UocG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhcGl0YWxpemUgZmlyc3QgbGV0dGVyXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgdWNmaXJzdChzdHIsIGZvcmNlKSB7XG4gICAgICAgIHN0ciA9IGZvcmNlID8gc3RyLnRvTG93ZXJDYXNlKCkgOiBzdHIgfHwgJyc7XG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFxcYikoW2EtekEtWl0pLywgKGZpcnN0TGV0dGVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3RMZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIG9yIHVwZGF0ZSBhIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgaW4gVVJMXG4gICAgICogXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtZXRlcnMgICBRdWVyeSBwYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgICAgICAgICBVUkxcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRRdWVyeVN0cmluZyhwYXJhbWV0ZXJzID0ge30sIHVybCkge1xuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcml2ID0ge307XG4gICAgICAgIHByaXYuVVFTID0gKGtleSwgdmFsdWUsIHVybCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKFwiKFs/Jl0pXCIgKyBrZXkgKyBcIj0uKj8oJnwjfCQpKC4qKVwiLCBcImdpXCIpO1xuICAgICAgICAgICAgbGV0IGhhc2g7XG5cbiAgICAgICAgICAgIGlmIChyZS50ZXN0KHVybCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXJsLnJlcGxhY2UocmUsICckMScgKyBrZXkgKyBcIj1cIiArIHZhbHVlICsgJyQyJDMnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBoYXNoID0gdXJsLnNwbGl0KCcjJyk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IGhhc2hbMF0ucmVwbGFjZShyZSwgJyQxJDMnKS5yZXBsYWNlKC8oJnxcXD8pJC8sICcnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGhhc2hbMV0gIT09ICd1bmRlZmluZWQnICYmIGhhc2hbMV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCArPSAnIycgKyBoYXNoWzFdO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcGFyYXRvciA9IHVybC5pbmRleE9mKCc/JykgIT09IC0xID8gJyYnIDogJz8nO1xuXG4gICAgICAgICAgICAgICAgICAgIGhhc2ggPSB1cmwuc3BsaXQoJyMnKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gaGFzaFswXSArIHNlcGFyYXRvciArIGtleSArICc9JyArIHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaGFzaFsxXSAhPT0gJ3VuZGVmaW5lZCcgJiYgaGFzaFsxXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcjJyArIGhhc2hbMV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgICQuZWFjaChwYXJhbWV0ZXJzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdXJsID0gcHJpdi5VUVMoa2V5LCB2YWx1ZSwgdXJsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyIGluIFVSTFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbWV0ZXJzICAgUXVlcnkgcGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgICAgICAgICAgVVJMXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcmVtb3ZlUXVlcnlTdHJpbmcocGFyYW1ldGVycyA9IFtdLCB1cmwpIHtcbiAgICAgICAgY29uc3QgcHJpdiA9IHt9O1xuXG4gICAgICAgIHByaXYuUlFTID0gKGtleSwgdXJsKSA9PiB7XG4gICAgICAgICAgICBsZXQgcnRuID0gdXJsLnNwbGl0KFwiP1wiKVswXTtcbiAgICAgICAgICAgIGxldCBwYXJhbTtcbiAgICAgICAgICAgIGxldCBwYXJhbXNBcnIgPSBbXTtcbiAgICAgICAgICAgIGxldCBxdWVyeVN0cmluZyA9ICh1cmwuaW5kZXhPZihcIj9cIikgIT09IC0xKSA/IHVybC5zcGxpdChcIj9cIilbMV0gOiAnJztcblxuICAgICAgICAgICAgaWYgKHF1ZXJ5U3RyaW5nICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHBhcmFtc0FyciA9IHF1ZXJ5U3RyaW5nLnNwbGl0KFwiJlwiKTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBwYXJhbXNBcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW0gPSBwYXJhbXNBcnJbaV0uc3BsaXQoXCI9XCIpWzBdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNBcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcnRuID0gcnRuICsgXCI/XCIgKyBwYXJhbXNBcnIuam9pbihcIiZcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBydG47XG4gICAgICAgIH07XG5cbiAgICAgICAgJC5lYWNoKHBhcmFtZXRlcnMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB1cmwgPSBwcml2LlJRUyh2YWx1ZSwgdXJsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBSkFYXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWpheChzZXR0aW5ncykge1xuICAgICAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgdXJsOiBhamF4dXJsLFxuICAgICAgICAgICAgZGF0YTogJycsXG4gICAgICAgICAgICBiZWZvcmU6ICgpID0+IHt9LFxuICAgICAgICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1ppbWJydUNvZGUgOiBBamF4IEVycm9yJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7fVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBjaGVja04gPSAxO1xuXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gMTAwMDtcbiAgICAgICAgY29uc3QgaXRlcmF0aW9ucyA9IDQ7XG5cbiAgICAgICAgc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIHNldHRpbmdzKTtcblxuICAgICAgICBjb25zdCBwcmVwYXJlZFNldHRpbmdzID0gdGhpcy5jbG9uZShzZXR0aW5ncyk7XG5cbiAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihzZXR0aW5ncy5iZWZvcmUpKSB7XG4gICAgICAgICAgICBwcmVwYXJlZFNldHRpbmdzLmJlZm9yZVNlbmQgPSBzZXR0aW5ncy5iZWZvcmU7XG4gICAgICAgICAgICBkZWxldGUgcHJlcGFyZWRTZXR0aW5ncy5iZWZvcmU7XG4gICAgICAgIH1cblxuICAgICAgICBwcmVwYXJlZFNldHRpbmdzLnN1Y2Nlc3MgPSAocmVzcG9uc2UsIHRleHRTdGF0dXMsIGpxWEhSKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgPCAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihzZXR0aW5ncy5lcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuZXJyb3IuY2FsbCh0aGlzLCBqcVhIUiwgdGV4dFN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmdzLnN1Y2Nlc3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLnN1Y2Nlc3MuY2FsbCh0aGlzLCByZXNwb25zZSwgdGV4dFN0YXR1cywganFYSFIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBwcmVwYXJlZFNldHRpbmdzLmVycm9yID0gKGpxWEhSLCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hlY2tOIDw9IGl0ZXJhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tOICsrO1xuICAgICAgICAgICAgICAgICAgICAkLmFqYXgocHJlcGFyZWRTZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgfSwgaW50ZXJ2YWwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmdzLmVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5lcnJvci5jYWxsKHRoaXMsIGpxWEhSLCB0ZXh0U3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuICQuYWpheChwcmVwYXJlZFNldHRpbmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQb3BVcFxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHBvcHVwKCkge1xuICAgICAgICByZXR1cm4gbmV3IFBvcFVwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbmZpcm0gUG9wVXBcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY29uZmlybShvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHBvcHVwID0gdGhpcy5wb3B1cCgpO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgc3ViamVjdDogJ3Rlc3QnLFxuICAgICAgICAgICAgb2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cC5jbG9zZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbmNlbDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU6ICdDb25maXJtJyxcbiAgICAgICAgICAgIHRpdGxlT0s6ICdPSycsXG4gICAgICAgICAgICB0aXRsZUNhbmNlbDogJ0NhbmNlbCcsXG4gICAgICAgICAgICBodG1sOiAnJyxcbiAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgICAgIGNsYXNzOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyksXG4gICAgICAgICAgICBodG1sID0gJyc7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLmh0bWwpIHtcbiAgICAgICAgICAgIGh0bWwgPSBzZXR0aW5ncy5odG1sO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHRtbCA9IHRoaXMudHBsKFRQTF9fY29uZmlybSwge1xuICAgICAgICAgICAgICAgIHN1YmplY3Q6IHNldHRpbmdzLnN1YmplY3QsXG4gICAgICAgICAgICAgICAgdGl0bGVfb2s6IHNldHRpbmdzLnRpdGxlT0ssXG4gICAgICAgICAgICAgICAgdGl0bGVfY2FuY2VsOiBzZXR0aW5ncy50aXRsZUNhbmNlbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3B1cC5hZGQoe1xuICAgICAgICAgICAgdGl0bGU6IHNldHRpbmdzLnRpdGxlLFxuICAgICAgICAgICAgaHRtbDogaHRtbCxcbiAgICAgICAgICAgIHdpZHRoOiBzZXR0aW5ncy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogc2V0dGluZ3MuaGVpZ2h0LFxuICAgICAgICAgICAgY2xhc3M6IGB6Yy1wb3B1cF9uby1wYWRkaW5nIHpjLXBvcHVwX3R5cGVfY29uZmlybSAke3NldHRpbmdzLmNsYXNzfWAsXG4gICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLWNvbmZpcm0nKS5vbignY2xpY2snLCAnLnpjLWNvbmZpcm1fX2J1dHRvbl90eXBlX29rJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5vay5jYWxsKHRoaXMsIHBvcHVwKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQoJy56Yy1jb25maXJtJykub24oJ2NsaWNrJywgJy56Yy1jb25maXJtX19idXR0b25fdHlwZV9jYW5jZWwnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmNhbmNlbC5jYWxsKHRoaXMsIHBvcHVwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvbXB0IFBvcFVwXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHByb21wdChvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHBvcHVwID0gdGhpcy5wb3B1cCgpO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgc3ViamVjdDogJ3Rlc3QnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdJbnNlcnQgeW91ciB0ZXh0JyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICAgICAgb2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cC5jbG9zZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbmNlbDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU6ICdQcm9tcHQnLFxuICAgICAgICAgICAgdGl0bGVPSzogJ09LJyxcbiAgICAgICAgICAgIHRpdGxlQ2FuY2VsOiAnQ2FuY2VsJyxcbiAgICAgICAgICAgIGh0bWw6ICcnLFxuICAgICAgICAgICAgd2lkdGg6IDQwMCxcbiAgICAgICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICAgICAgY2xhc3M6ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHNldHRpbmdzID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKSxcbiAgICAgICAgICAgIGh0bWwgPSAnJztcblxuICAgICAgICBpZiAoc2V0dGluZ3MuaHRtbCkge1xuICAgICAgICAgICAgaHRtbCA9IHNldHRpbmdzLmh0bWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBodG1sID0gdGhpcy50cGwoVFBMX19wcm9tcHQsIHtcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBzZXR0aW5ncy5zdWJqZWN0LFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBzZXR0aW5ncy5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBzZXR0aW5ncy5kZWZhdWx0LFxuICAgICAgICAgICAgICAgIHRpdGxlX29rOiBzZXR0aW5ncy50aXRsZU9LLFxuICAgICAgICAgICAgICAgIHRpdGxlX2NhbmNlbDogc2V0dGluZ3MudGl0bGVDYW5jZWxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9wdXAuYWRkKHtcbiAgICAgICAgICAgIHRpdGxlOiBzZXR0aW5ncy50aXRsZSxcbiAgICAgICAgICAgIGh0bWw6IGh0bWwsXG4gICAgICAgICAgICB3aWR0aDogc2V0dGluZ3Mud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHNldHRpbmdzLmhlaWdodCxcbiAgICAgICAgICAgIGNsYXNzOiBgemMtcG9wdXBfdHlwZV9wcm9tcHQgJHtzZXR0aW5ncy5jbGFzc31gLFxuICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wcm9tcHQnKS5vbignY2xpY2snLCAnLnpjLXByb21wdF9fYnV0dG9uX3R5cGVfb2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJCgnLnpjLXByb21wdF9faW5wdXQnKS52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mub2suY2FsbCh0aGlzLCBwb3B1cCwgdGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuemMtcHJvbXB0X19pbnB1dCcpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQoJy56Yy1wcm9tcHQnKS5vbignY2xpY2snLCAnLnpjLXByb21wdF9fYnV0dG9uX3R5cGVfY2FuY2VsJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5jYW5jZWwuY2FsbCh0aGlzLCBwb3B1cCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsZXJ0IFBvcFVwXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFsZXJ0KG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgcG9wdXAgPSB0aGlzLnBvcHVwKCk7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBzdWJqZWN0OiAndGVzdCcsXG4gICAgICAgICAgICBvazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU6ICdBbGVydCcsXG4gICAgICAgICAgICB0aXRsZU9LOiAnT0snLFxuICAgICAgICAgICAgaHRtbDogJycsXG4gICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICAgICAgICBjbGFzczogJydcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpLFxuICAgICAgICAgICAgaHRtbCA9ICcnO1xuXG4gICAgICAgIGlmIChzZXR0aW5ncy5odG1sKSB7XG4gICAgICAgICAgICBodG1sID0gc2V0dGluZ3MuaHRtbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGh0bWwgPSB0aGlzLnRwbChUUExfX2FsZXJ0LCB7XG4gICAgICAgICAgICAgICAgc3ViamVjdDogc2V0dGluZ3Muc3ViamVjdCxcbiAgICAgICAgICAgICAgICB0aXRsZV9vazogc2V0dGluZ3MudGl0bGVPS1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3B1cC5hZGQoe1xuICAgICAgICAgICAgdGl0bGU6IHNldHRpbmdzLnRpdGxlLFxuICAgICAgICAgICAgaHRtbDogaHRtbCxcbiAgICAgICAgICAgIHdpZHRoOiBzZXR0aW5ncy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogc2V0dGluZ3MuaGVpZ2h0LFxuICAgICAgICAgICAgY2xhc3M6IGB6Yy1wb3B1cF90eXBlX2FsZXJ0ICR7c2V0dGluZ3MuY2xhc3N9YCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuemMtYWxlcnQnKS5vbignY2xpY2snLCAnLnpjLWFsZXJ0X19idXR0b25fdHlwZV9vaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mub2suY2FsbCh0aGlzLCBwb3B1cCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc3QgQVBJXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgIFdvcmRQcmVzcyByZXN0IEFQSSBVUkxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbm9uY2UgV29yZFByZXNzIFggbm9uY2UgZm9yIFJlc3RBUElcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICByZXN0QVBJKHVybCwgbm9uY2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXN0QVBJKHVybCwgbm9uY2UpO1xuICAgIH1cblxuICAgIGlucHV0UmFuZ2UobW9kZSwgZGF0YSA9IHt9KSB7XG4gICAgICAgIGlmIChtb2RlICYmIGRhdGEuZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgcHJpdiA9IHt9O1xuXG4gICAgICAgICAgICAvLyBIYXMgbGluZSBiYWNrZ3JvdW5kXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJMQkNsYXNzID0gZGF0YS5jb250YWluZXJMQkNsYXNzIHx8ICcnO1xuICAgICAgICAgICAgcHJpdi5oYXNMQiA9IGRhdGEuZWwucGFyZW50KCkuaGFzQ2xhc3MoY29udGFpbmVyTEJDbGFzcyk7XG5cbiAgICAgICAgICAgIC8vIEN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIHByaXYuY3VycmVudFZhbHVlID0gZGF0YS5lbC52YWwoKTtcblxuICAgICAgICAgICAgLy8gVHJhY2sgcGVyY2VudFxuICAgICAgICAgICAgY29uc3QgbWluID0gZGF0YS5zZXR0aW5ncy5taW4gfHwgMDtcbiAgICAgICAgICAgIGNvbnN0IG1heCA9IGRhdGEuc2V0dGluZ3MubWF4IHx8IDEwMDtcblxuICAgICAgICAgICAgcHJpdi50cmFja1BlcmNlbnQgPSAoKHByaXYuY3VycmVudFZhbHVlIC0gbWluKSAqIDEwMCkgLyAobWF4IC0gbWluKTtcblxuICAgICAgICAgICAgLy8gUG9zdGZpeFxuICAgICAgICAgICAgcHJpdi5wb3N0Zml4ID0gZGF0YS5zZXR0aW5ncy5wb3N0Zml4IHx8ICcnO1xuXG4gICAgICAgICAgICAvLyBFbGVtZW50c1xuICAgICAgICAgICAgY29uc3QgbGVmdEluZGljYXRvckNsYXNzICAgID0gZGF0YS5sZWZ0SW5kaWNhdG9yQ2xhc3MgICAgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SW5kaWNhdG9yQ2xhc3MgPSBkYXRhLmN1cnJlbnRJbmRpY2F0b3JDbGFzcyB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0SW5kaWNhdG9yQ2xhc3MgICA9IGRhdGEucmlnaHRJbmRpY2F0b3JDbGFzcyAgIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgZ3JpZENvbnRhaW5lckNsYXNzICAgID0gZGF0YS5ncmlkQ29udGFpbmVyQ2xhc3MgICAgfHwgJyc7XG5cbiAgICAgICAgICAgIHByaXYubGVmdEluZGljYXRvciAgICA9IChsZWZ0SW5kaWNhdG9yQ2xhc3MpICAgID8gZGF0YS5lbC5wYXJlbnQoKS5maW5kKGAuJHtsZWZ0SW5kaWNhdG9yQ2xhc3N9YCkgICAgOiAnJztcbiAgICAgICAgICAgIHByaXYuY3VycmVudEluZGljYXRvciA9IChjdXJyZW50SW5kaWNhdG9yQ2xhc3MpID8gZGF0YS5lbC5wYXJlbnQoKS5maW5kKGAuJHtjdXJyZW50SW5kaWNhdG9yQ2xhc3N9YCkgOiAnJztcbiAgICAgICAgICAgIHByaXYucmlnaHRJbmRpY2F0b3IgICA9IChyaWdodEluZGljYXRvckNsYXNzKSAgID8gZGF0YS5lbC5wYXJlbnQoKS5maW5kKGAuJHtyaWdodEluZGljYXRvckNsYXNzfWApICAgOiAnJztcbiAgICAgICAgICAgIHByaXYuZ3JpZENvbnRhaW5lciAgICA9IChncmlkQ29udGFpbmVyQ2xhc3MpICAgID8gZGF0YS5lbC5wYXJlbnQoKS5maW5kKGAuJHtncmlkQ29udGFpbmVyQ2xhc3N9YCkgICAgOiAnJztcblxuICAgICAgICAgICAgLy8gQWRkIHRyYWNrIHBlcmNlbnRcbiAgICAgICAgICAgIHByaXYuYWRkVHJhY2tQZXJjZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcHJpdi5oYXNMQikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmVsLmNzcygnYmFja2dyb3VuZC1zaXplJywgYCR7cHJpdi50cmFja1BlcmNlbnR9JSAxMDAlYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gU2V0dXAgaW5kaWNhdG9yIGN1cnJlbnRcbiAgICAgICAgICAgIHByaXYuaW5kaWNhdG9yQ3VycmVudCA9IChjaGFuZ2VDdXJyZW50VmFsdWUgPSBmYWxzZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhpZGVGcm9tVG8gPSBkYXRhLnNldHRpbmdzLmhpZGVfZnJvbV90byB8fCBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChoaWRlRnJvbVRvICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRodW1iU2l6ZSA9IChwcml2Lmhhc0xCKSA/IDE3IDogMTY7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZUN1cnJlbnRWYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdi5jdXJyZW50SW5kaWNhdG9yLnRleHQocHJpdi5jdXJyZW50VmFsdWUgKyBwcml2LnBvc3RmaXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEluZGljYXRvcldpZHRoID0gcHJpdi5jdXJyZW50SW5kaWNhdG9yLm91dGVyV2lkdGgoKSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxjUG9zaXRpb25TdHlsZSAgICAgPSBgbGVmdDogY2FsYygke3ByaXYudHJhY2tQZXJjZW50fSUgLSAkeygoY3VycmVudEluZGljYXRvcldpZHRoIC0gdGh1bWJTaXplKSAvIDIpICsgKHByaXYudHJhY2tQZXJjZW50IC8gMTAwKSAqIHRodW1iU2l6ZX1weClgOyBcblxuICAgICAgICAgICAgICAgICAgICBwcml2LmN1cnJlbnRJbmRpY2F0b3IuYXR0cignc3R5bGUnLCBjYWxjUG9zaXRpb25TdHlsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gU2hvdy9IaWRlIGluZGljYXRvcnMgOiBsZWZ0ICYgcmlnaHRcbiAgICAgICAgICAgIHByaXYuaW5kaWNhdG9yc1Nob3dIaWRlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhpZGVNaW5NYXggPSBkYXRhLnNldHRpbmdzLmhpZGVfbWluX21heCB8fCBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChoaWRlTWluTWF4ICE9PSB0cnVlICYmIHByaXYuY3VycmVudEluZGljYXRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IExEID0gcHJpdi5sZWZ0SW5kaWNhdG9yLmdldCgwKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgQ0QgPSBwcml2LmN1cnJlbnRJbmRpY2F0b3IuZ2V0KDApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBSRCA9IHByaXYucmlnaHRJbmRpY2F0b3IuZ2V0KDApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChMRC5yaWdodCArIDEgPiBDRC5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2LmxlZnRJbmRpY2F0b3IuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdi5sZWZ0SW5kaWNhdG9yLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChSRC5sZWZ0IC0gMSA8IENELnJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2LnJpZ2h0SW5kaWNhdG9yLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXYucmlnaHRJbmRpY2F0b3IuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHByaXYuY291bnREZWNpbWFscyA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICgodmFsdWUgJSAxKSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBNb2RlIDogSW5pdFxuICAgICAgICAgICAgcHJpdi5pbml0TW9kZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcml2LmluZGljYXRvckN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICBwcml2LmluZGljYXRvcnNTaG93SGlkZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gTW9kZSA6IExpdmVcbiAgICAgICAgICAgIHByaXYubGl2ZU1vZGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJpdi5hZGRUcmFja1BlcmNlbnQoKTtcbiAgICAgICAgICAgICAgICBwcml2LmluZGljYXRvckN1cnJlbnQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgcHJpdi5pbmRpY2F0b3JzU2hvd0hpZGUoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIE1vZGUgOiBDaGFuZ2VcbiAgICAgICAgICAgIHByaXYuY2hhbmdlTW9kZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoaWRlTWluTWF4ID0gZGF0YS5zZXR0aW5ncy5oaWRlX21pbl9tYXggfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvd0dyaWQgICA9IGRhdGEuc2V0dGluZ3MuZ3JpZCB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGVwICAgICAgID0gZGF0YS5zZXR0aW5ncy5zdGVwIHx8IDE7XG5cbiAgICAgICAgICAgICAgICBkYXRhLmVsLmF0dHIoJ21pbicsIG1pbik7XG4gICAgICAgICAgICAgICAgZGF0YS5lbC5hdHRyKCdtYXgnLCBtYXgpO1xuICAgICAgICAgICAgICAgIGRhdGEuZWwuZGF0YSgnc2V0dGluZ3MnLCBkYXRhLnNldHRpbmdzKTtcblxuICAgICAgICAgICAgICAgIGlmIChoaWRlTWluTWF4ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBwcml2LmxlZnRJbmRpY2F0b3IudGV4dChtaW4gKyBwcml2LnBvc3RmaXgpO1xuICAgICAgICAgICAgICAgICAgICBwcml2LnJpZ2h0SW5kaWNhdG9yLnRleHQobWF4ICsgcHJpdi5wb3N0Zml4KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoc2hvd0dyaWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hcmsgPSAobWF4IC0gbWluKSAvIDQ7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJpdi5ncmlkQ29udGFpbmVyLmZpbmQoJ2xpW2RhdGEtbj0xXSA+IHNwYW4nKS50ZXh0KG1pbik7XG4gICAgICAgICAgICAgICAgICAgIHByaXYuZ3JpZENvbnRhaW5lci5maW5kKCdsaVtkYXRhLW49Ml0gPiBzcGFuJykudGV4dCh6Yy5yb3VuZChtYXJrICsgbWluLCBwcml2LmNvdW50RGVjaW1hbHMoc3RlcCkpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpdi5ncmlkQ29udGFpbmVyLmZpbmQoJ2xpW2RhdGEtbj0zXSA+IHNwYW4nKS50ZXh0KHpjLnJvdW5kKG1hcmsgKiAyICsgbWluLCBwcml2LmNvdW50RGVjaW1hbHMoc3RlcCkpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpdi5ncmlkQ29udGFpbmVyLmZpbmQoJ2xpW2RhdGEtbj00XSA+IHNwYW4nKS50ZXh0KHpjLnJvdW5kKG1hcmsgKiAzICsgbWluLCBwcml2LmNvdW50RGVjaW1hbHMoc3RlcCkpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpdi5ncmlkQ29udGFpbmVyLmZpbmQoJ2xpW2RhdGEtbj01XSA+IHNwYW4nKS50ZXh0KG1heCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcHJpdi5hZGRUcmFja1BlcmNlbnQoKTtcbiAgICAgICAgICAgICAgICBwcml2LmluZGljYXRvckN1cnJlbnQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgcHJpdi5pbmRpY2F0b3JzU2hvd0hpZGUoKTtcbiAgICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdpbml0JzpcbiAgICAgICAgICAgICAgICAgICAgcHJpdi5pbml0TW9kZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdsaXZlJzpcbiAgICAgICAgICAgICAgICAgICAgcHJpdi5saXZlTW9kZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjaGFuZ2UnOlxuICAgICAgICAgICAgICAgICAgICBwcml2LmNoYW5nZU1vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEluaXRpYWxpemF0aW9uIG9mIGNsYXNzIDogWmltYnJ1Q29kZVxud2luZG93LnpjID0gbmV3IFppbWJydUNvZGUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=