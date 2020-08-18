/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Resources/packages/zimbrucode/es6/jquery.zimbrucode.es6.js":
/*!************************************************************************!*\
  !*** ./src/Resources/packages/zimbrucode/es6/jquery.zimbrucode.es6.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/popup */ "./src/Resources/packages/zimbrucode/es6/module/popup.js");
/* harmony import */ var _module_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/cookie */ "./src/Resources/packages/zimbrucode/es6/module/cookie.js");
/* harmony import */ var _module_rest_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/rest-api */ "./src/Resources/packages/zimbrucode/es6/module/rest-api.js");
/* harmony import */ var _tpl_confirm_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tpl/confirm.html */ "./src/Resources/packages/zimbrucode/es6/tpl/confirm.html");
/* harmony import */ var _tpl_confirm_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tpl_confirm_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tpl_prompt_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tpl/prompt.html */ "./src/Resources/packages/zimbrucode/es6/tpl/prompt.html");
/* harmony import */ var _tpl_prompt_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tpl_prompt_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tpl_alert_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tpl/alert.html */ "./src/Resources/packages/zimbrucode/es6/tpl/alert.html");
/* harmony import */ var _tpl_alert_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tpl_alert_html__WEBPACK_IMPORTED_MODULE_5__);
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


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var $ = jQuery;

var ZimbruCode = /*#__PURE__*/function () {
  function ZimbruCode() {
    _classCallCheck(this, ZimbruCode);

    // Modules objects
    this.module = {}; // Module data

    this.moduleData = {}; // Global data

    this.global = {}; // Function : Cookie

    this.cookie = new _module_cookie__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
  /**
   * Add module
   * 
   * @return {null} None
   * @since 1.0.0
   */


  _createClass(ZimbruCode, [{
    key: "addModule",
    value: function addModule(name, module) {
      this.moduleData[name] = {};
      this.module[name] = new module($);
    }
    /**
     * Initialization module data
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "initModuleData",
    value: function initModuleData(name) {
      this.moduleData[name] = {};
    }
    /**
     * Add module data
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "addModuleData",
    value: function addModuleData(name) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.moduleData[name] = data;
    }
    /**
     * Get module data
     * 
     * @since 1.0.0
     */

  }, {
    key: "getModuleData",
    value: function getModuleData(name) {
      return this.moduleData[name];
    }
    /**
     * Generate unique ID
     * 
     * @since 1.0.0
     */

  }, {
    key: "uniqueID",
    value: function uniqueID() {
      return Math.floor(Math.random() * 26) + Date.now();
    }
    /**
     * Data replace in subject
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "strReplace",
    value: function strReplace(search, replace, subject) {
      var _this = this;

      var regStr = '';
      search.forEach(function (el, index) {
        if (search.length - 1 == index) {
          regStr += el;
        } else {
          regStr += "".concat(el, "|");
        }
      });
      return subject.replace(new RegExp(regStr, 'g'), function (match) {
        var output = '';
        search.forEach(function (el, index) {
          if (el == match) {
            if ($.isFunction(replace[index])) {
              output = replace[index].call(_this, match);
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

  }, {
    key: "tpl",
    value: function tpl() {
      var _tpl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (typeof _tpl === 'string' && _typeof(data) === 'object') {
        var search = [];
        var replace = [];
        $.each(data, function (key, value) {
          search.push("{{".concat(key, "}}"));
          replace.push(value);
        });
        return this.strReplace(search, replace, _tpl);
      }

      return false;
    }
    /**
     * Deep find and setting
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "deepFindAndSetting",
    value: function deepFindAndSetting(obj, path, value) {
      var remove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var paths = path.split('/'),
          current = obj,
          i;

      if (remove === false) {
        if (value !== undefined) {
          for (var _i in paths) {
            if (paths.length - 1 == _i) {
              current[paths[_i]] = value;
            } else {
              if (current === undefined || current[paths[_i]] === undefined) {
                current[paths[_i]] = {};
                current = current[paths[_i]];
              } else {
                current = current[paths[_i]];
              }
            }
          }
        } else {
          for (var _i2 in paths) {
            if (current === undefined || current[paths[_i2]] === undefined) {
              return undefined;
            } else {
              current = current[paths[_i2]];
            }
          }

          return current;
        }
      } else {
        for (var _i3 in paths) {
          if (current === undefined || current[paths[_i3]] === undefined) {
            return undefined;
          } else {
            if (paths.length - 1 == _i3) {
              delete current[paths[_i3]];
            } else {
              current = current[paths[_i3]];
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

  }, {
    key: "isMobile",
    value: function isMobile() {
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

  }, {
    key: "round",
    value: function round(value, exp) {
      if (typeof exp === 'undefined' || +exp === 0) {
        return Math.round(value);
      }

      value = +value;
      exp = +exp;

      if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
      } // Shift


      value = value.toString().split('e');
      value = Math.round(+(value[0] + 'e' + (value[1] ? +value[1] + exp : exp))); // Shift back

      value = value.toString().split('e');
      return +(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp));
    }
    /**
     * Resize
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "resize",
    value: function resize(callbackWidth, callbackHeight) {
      var _this2 = this;

      var windowWidth = window.innerWidth,
          windowHeight = window.innerHeight;
      $(window).resize(function () {
        if (window.innerWidth != windowWidth) {
          windowWidth = window.innerWidth;

          if ($.isFunction(callbackWidth)) {
            callbackWidth.call(_this2, windowWidth);
          }
        }

        if (window.innerHeight != windowHeight) {
          windowHeight = window.innerHeight;

          if ($.isFunction(callbackHeight)) {
            callbackHeight.call(_this2, windowHeight);
          }
        }
      });
    }
    /**
     * Clone an object
     * 
     * @since 1.0.0
     */

  }, {
    key: "clone",
    value: function clone(object) {
      return $.extend(true, {}, object);
    }
    /**
     * Random string
     * 
     * @since 1.0.0
     */

  }, {
    key: "randomCode",
    value: function randomCode(length) {
      var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
          pass = '';

      for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * 62);
        pass += chars.charAt(i);
      }

      return pass;
    }
    /**
     * Parse data
     * 
     * @since 1.0.0
     */

  }, {
    key: "parse",
    value: function parse(data, stringify) {
      return stringify === undefined ? JSON.parse(data) : JSON.stringify(data);
    }
    /**
     * Check if json
     * 
     * @since 1.0.0
     */

  }, {
    key: "isJson",
    value: function isJson(str) {
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

  }, {
    key: "strstr",
    value: function strstr(haystack, needle, bool) {
      var pos = haystack.indexOf(needle);

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

  }, {
    key: "ucfirst",
    value: function ucfirst(str, force) {
      str = force ? str.toLowerCase() : str || '';
      return str.replace(/(\b)([a-zA-Z])/, function (firstLetter) {
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

  }, {
    key: "addQueryString",
    value: function addQueryString() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var url = arguments.length > 1 ? arguments[1] : undefined;

      if (!url) {
        url = window.location.href;
      }

      var priv = {};

      priv.UQS = function (key, value, url) {
        var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi");
        var hash;

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
            var separator = url.indexOf('?') !== -1 ? '&' : '?';
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

      $.each(parameters, function (key, value) {
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

  }, {
    key: "removeQueryString",
    value: function removeQueryString() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var url = arguments.length > 1 ? arguments[1] : undefined;
      var priv = {};

      priv.RQS = function (key, url) {
        var rtn = url.split("?")[0];
        var param;
        var paramsArr = [];
        var queryString = url.indexOf("?") !== -1 ? url.split("?")[1] : '';

        if (queryString !== '') {
          paramsArr = queryString.split("&");

          for (var i = paramsArr.length - 1; i >= 0; i -= 1) {
            param = paramsArr[i].split("=")[0];

            if (param === key) {
              paramsArr.splice(i, 1);
            }
          }

          rtn = rtn + "?" + paramsArr.join("&");
        }

        return rtn;
      };

      $.each(parameters, function (key, value) {
        url = priv.RQS(value, url);
      });
      return url;
    }
    /**
     * AJAX
     * 
     * @since 1.0.0
     */

  }, {
    key: "ajax",
    value: function ajax(settings) {
      var _this3 = this;

      var defaults = {
        method: 'post',
        url: ajaxurl,
        data: '',
        before: function before() {},
        error: function error() {
          console.warn('ZimbruCode : Ajax Error');
        },
        success: function success(response) {}
      };
      var checkN = 1;
      var interval = 1000;
      var iterations = 4;
      settings = $.extend({}, defaults, settings);
      var preparedSettings = this.clone(settings);

      if ($.isFunction(settings.before)) {
        preparedSettings.beforeSend = settings.before;
        delete preparedSettings.before;
      }

      preparedSettings.success = function (response, textStatus, jqXHR) {
        if (response < 0) {
          if ($.isFunction(settings.error)) {
            settings.error.call(_this3, jqXHR, textStatus);
          }
        } else {
          if ($.isFunction(settings.success)) {
            settings.success.call(_this3, response, textStatus, jqXHR);
          }
        }
      };

      preparedSettings.error = function (jqXHR, textStatus) {
        if (checkN <= iterations) {
          setTimeout(function () {
            checkN++;
            $.ajax(preparedSettings);
          }, interval);
        } else {
          if ($.isFunction(settings.error)) {
            settings.error.call(_this3, jqXHR, textStatus);
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

  }, {
    key: "popup",
    value: function popup() {
      return new _module_popup__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    /**
     * Confirm PopUp
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "confirm",
    value: function confirm(options) {
      var _this4 = this;

      var popup = this.popup();
      var defaults = {
        subject: 'test',
        ok: function ok() {
          popup.close();
        },
        cancel: function cancel() {
          popup.close();
        },
        title: 'Confirm',
        titleOK: 'OK',
        titleCancel: 'Cancel',
        html: '',
        width: 300,
        height: 200,
        "class": ''
      };
      var settings = $.extend({}, defaults, options),
          html = '';

      if (settings.html) {
        html = settings.html;
      } else {
        html = this.tpl(_tpl_confirm_html__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
        "class": "zc-popup_no-padding zc-popup_type_confirm ".concat(settings["class"]),
        success: function success() {
          $('.zc-confirm').on('click', '.zc-confirm__button_type_ok', function (event) {
            event.preventDefault();
            /* Act on the event */

            settings.ok.call(_this4, popup);
          });
          $('.zc-confirm').on('click', '.zc-confirm__button_type_cancel', function (event) {
            event.preventDefault();
            /* Act on the event */

            settings.cancel.call(_this4, popup);
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

  }, {
    key: "prompt",
    value: function prompt(options) {
      var _this5 = this;

      var popup = this.popup();
      var defaults = {
        subject: 'test',
        placeholder: 'Insert your text',
        "default": '',
        ok: function ok() {
          popup.close();
        },
        cancel: function cancel() {
          popup.close();
        },
        title: 'Prompt',
        titleOK: 'OK',
        titleCancel: 'Cancel',
        html: '',
        width: 400,
        height: 200,
        "class": ''
      };
      var settings = $.extend({}, defaults, options),
          html = '';

      if (settings.html) {
        html = settings.html;
      } else {
        html = this.tpl(_tpl_prompt_html__WEBPACK_IMPORTED_MODULE_4___default.a, {
          subject: settings.subject,
          placeholder: settings.placeholder,
          "default": settings["default"],
          title_ok: settings.titleOK,
          title_cancel: settings.titleCancel
        });
      }

      popup.add({
        title: settings.title,
        html: html,
        width: settings.width,
        height: settings.height,
        "class": "zc-popup_type_prompt ".concat(settings["class"]),
        success: function success() {
          $('.zc-prompt').on('click', '.zc-prompt__button_type_ok', function (event) {
            event.preventDefault();
            /* Act on the event */

            var text = $('.zc-prompt__input').val();

            if (text) {
              settings.ok.call(_this5, popup, text);
            } else {
              $('.zc-prompt__input').focus();
            }
          });
          $('.zc-prompt').on('click', '.zc-prompt__button_type_cancel', function (event) {
            event.preventDefault();
            /* Act on the event */

            settings.cancel.call(_this5, popup);
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

  }, {
    key: "alert",
    value: function alert(options) {
      var _this6 = this;

      var popup = this.popup();
      var defaults = {
        subject: 'test',
        ok: function ok() {
          popup.close();
        },
        title: 'Alert',
        titleOK: 'OK',
        html: '',
        width: 300,
        height: 200,
        "class": ''
      };
      var settings = $.extend({}, defaults, options),
          html = '';

      if (settings.html) {
        html = settings.html;
      } else {
        html = this.tpl(_tpl_alert_html__WEBPACK_IMPORTED_MODULE_5___default.a, {
          subject: settings.subject,
          title_ok: settings.titleOK
        });
      }

      popup.add({
        title: settings.title,
        html: html,
        width: settings.width,
        height: settings.height,
        "class": "zc-popup_type_alert ".concat(settings["class"]),
        success: function success() {
          $('.zc-alert').on('click', '.zc-alert__button_type_ok', function (event) {
            event.preventDefault();
            /* Act on the event */

            settings.ok.call(_this6, popup);
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

  }, {
    key: "restAPI",
    value: function restAPI(url, nonce) {
      return new _module_rest_api__WEBPACK_IMPORTED_MODULE_2__["default"](url, nonce);
    }
  }, {
    key: "inputRange",
    value: function inputRange(mode) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (mode && data.el !== undefined) {
        var priv = {}; // Has line background

        var containerLBClass = data.containerLBClass || '';
        priv.hasLB = data.el.parent().hasClass(containerLBClass); // Current value

        priv.currentValue = data.el.val(); // Track percent

        var min = data.settings.min || 0;
        var max = data.settings.max || 100;
        priv.trackPercent = (priv.currentValue - min) * 100 / (max - min); // Postfix

        priv.postfix = data.settings.postfix || ''; // Elements

        var leftIndicatorClass = data.leftIndicatorClass || '';
        var currentIndicatorClass = data.currentIndicatorClass || '';
        var rightIndicatorClass = data.rightIndicatorClass || '';
        var gridContainerClass = data.gridContainerClass || '';
        priv.leftIndicator = leftIndicatorClass ? data.el.parent().find(".".concat(leftIndicatorClass)) : '';
        priv.currentIndicator = currentIndicatorClass ? data.el.parent().find(".".concat(currentIndicatorClass)) : '';
        priv.rightIndicator = rightIndicatorClass ? data.el.parent().find(".".concat(rightIndicatorClass)) : '';
        priv.gridContainer = gridContainerClass ? data.el.parent().find(".".concat(gridContainerClass)) : ''; // Add track percent

        priv.addTrackPercent = function () {
          if (!priv.hasLB) {
            data.el.css('background-size', "".concat(priv.trackPercent, "% 100%"));
          }
        }; // Setup indicator current


        priv.indicatorCurrent = function () {
          var changeCurrentValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var hideFromTo = data.settings.hide_from_to || false;

          if (hideFromTo !== true) {
            var thumbSize = priv.hasLB ? 17 : 16;

            if (changeCurrentValue === true) {
              priv.currentIndicator.text(priv.currentValue + priv.postfix);
            }

            var currentIndicatorWidth = priv.currentIndicator.outerWidth() || 0;
            var calcPositionStyle = "left: calc(".concat(priv.trackPercent, "% - ").concat((currentIndicatorWidth - thumbSize) / 2 + priv.trackPercent / 100 * thumbSize, "px)");
            priv.currentIndicator.attr('style', calcPositionStyle);
          }
        }; // Show/Hide indicators : left & right


        priv.indicatorsShowHide = function () {
          var hideMinMax = data.settings.hide_min_max || false;

          if (hideMinMax !== true && priv.currentIndicator !== undefined) {
            var LD = priv.leftIndicator.get(0).getBoundingClientRect();
            var CD = priv.currentIndicator.get(0).getBoundingClientRect();
            var RD = priv.rightIndicator.get(0).getBoundingClientRect();

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

        priv.countDecimals = function (value) {
          if (value % 1 != 0) {
            return value.toString().split(".")[1].length;
          }

          return 0;
        }; // Mode : Init


        priv.initMode = function () {
          priv.indicatorCurrent();
          priv.indicatorsShowHide();
        }; // Mode : Live


        priv.liveMode = function () {
          priv.addTrackPercent();
          priv.indicatorCurrent(true);
          priv.indicatorsShowHide();
        }; // Mode : Change


        priv.changeMode = function () {
          var hideMinMax = data.settings.hide_min_max || false;
          var showGrid = data.settings.grid || false;
          var step = data.settings.step || 1;
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
  }]);

  return ZimbruCode;
}(); // Initialization of class : ZimbruCode


window.zc = new ZimbruCode();

/***/ }),

/***/ "./src/Resources/packages/zimbrucode/es6/module/cookie.js":
/*!****************************************************************!*\
  !*** ./src/Resources/packages/zimbrucode/es6/module/cookie.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cookie; });
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


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cookie = /*#__PURE__*/function () {
  function Cookie() {
    _classCallCheck(this, Cookie);

    this.defaults = {};
  }

  _createClass(Cookie, [{
    key: "__extend",
    value: function __extend() {
      var i = 0,
          result = {};

      for (; i < arguments.length; i++) {
        var attributes = i < 0 || arguments.length <= i ? undefined : arguments[i];

        for (var key in attributes) {
          result[key] = attributes[key];
        }
      }

      return result;
    }
  }, {
    key: "__api",
    value: function __api(key, value, attributes) {
      var result,
          converter = function converter() {}; // Write


      if (arguments.length > 1) {
        attributes = this.__extend({
          path: '/'
        }, this.defaults, attributes);

        if (typeof attributes.expires === 'number') {
          var expires = new Date();
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
          value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
        } else {
          value = converter.write(value, key);
        }

        key = encodeURIComponent(String(key));
        key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
        key = key.replace(/[\(\)]/g, escape);
        return document.cookie = [key, '=', value, attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
        attributes.path && '; path=' + attributes.path, attributes.domain && '; domain=' + attributes.domain, attributes.secure ? '; secure' : ''].join('');
      } // Read


      if (!key) {
        result = {};
      } // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all. Also prevents odd result when
      // calling "get()"


      var cookies = document.cookie ? document.cookie.split('; ') : [],
          rdecode = /(%[0-9A-Z]{2})+/g,
          i = 0;

      for (; i < cookies.length; i++) {
        var parts = cookies[i].split('='),
            name = parts[0].replace(rdecode, decodeURIComponent),
            cookie = parts.slice(1).join('=');

        if (cookie.charAt(0) === '"') {
          cookie = cookie.slice(1, -1);
        }

        try {
          cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);

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
  }, {
    key: "add",
    value: function add(key, value, attributes) {
      this.__api(key, value, attributes);
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.__api(key);
    }
  }, {
    key: "getJSON",
    value: function getJSON() {
      return this.__api.apply({
        json: true
      }, [].slice.call(arguments));
    }
  }, {
    key: "remove",
    value: function remove(key, attributes) {
      this.__api(key, '', this.__extend(attributes, {
        expires: -1
      }));
    }
  }]);

  return Cookie;
}();



/***/ }),

/***/ "./src/Resources/packages/zimbrucode/es6/module/popup.js":
/*!***************************************************************!*\
  !*** ./src/Resources/packages/zimbrucode/es6/module/popup.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PopUp; });
/* harmony import */ var _tpl_popup_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tpl/popup.html */ "./src/Resources/packages/zimbrucode/es6/module/tpl/popup.html");
/* harmony import */ var _tpl_popup_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tpl_popup_html__WEBPACK_IMPORTED_MODULE_0__);
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


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var $ = jQuery;

var PopUp = /*#__PURE__*/function () {
  function PopUp() {
    _classCallCheck(this, PopUp);

    this.id = "zc-popup-".concat(zc.uniqueID());
  }
  /**
   * Add popup
   * 
   * @return {null} None
   * @since 1.0.0
   */


  _createClass(PopUp, [{
    key: "add",
    value: function add(options) {
      var _this = this;

      var defaults = {
        title: 'PopUp Title',
        ajax: '',
        error: function error() {
          console.error('ZimbruCode : PopUp');
        },
        before: function before() {},
        success: function success() {},
        afterShowContent: function afterShowContent() {},
        width: '',
        height: '',
        html: '',
        "class": ''
      };
      var settings = $.extend({}, defaults, options),
          structure = zc.tpl(_tpl_popup_html__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: this.id,
        "class": settings["class"],
        title: settings.title
      });
      $('body').css('overflow', 'hidden');
      $('body').append(structure);

      if (!settings.html) {
        this.size(settings.height, settings.width);
        zc.ajax({
          data: settings.ajax,
          before: function before() {
            settings.before.call();

            _this.hideContent();
          },
          error: settings.error,
          success: function success(response) {
            if (response.content !== undefined) {
              _this.appendContent(response.content);
            }

            settings.success.call(_this, response);

            _this.showContent();

            settings.afterShowContent.call(_this, response);
          }
        });
      } else {
        this.size(settings.height, settings.width);
        this.appendContent(settings.html);
        this.showContent();
        settings.success.call(this, settings.html);
      }

      $("#".concat(this.id)).on('click', '.zc-popup__close', function (event) {
        event.preventDefault();
        /* Act on the event */

        _this.close();
      });
      $(document).on('mouseup touchstart', "#".concat(this.id), function (event) {
        var popupWindow = $('.zc-popup__window');

        if (!popupWindow.is(event.target) && popupWindow.has(event.target).length === 0) {
          _this.close();
        }
      });
    }
    /**
     * Calc popup window size
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "size",
    value: function size(height, width) {
      var _this2 = this;

      height = typeof height !== 'undefined' || height ? height : false;
      width = typeof width !== 'undefined' || width ? width : false;
      var priv = {
        calcSize: function calcSize() {
          if (!!navigator.userAgent.match(/Trident.*rv\:11\./)) {
            if (width) {
              $("#".concat(_this2.id, " .zc-popup__window")).css({
                'max-width': "".concat(width, "px"),
                'width': '100%'
              });
            }

            if (height) {
              $("#".concat(_this2.id, " .zc-popup__window")).css({
                'max-height': "".concat(height, "px"),
                'height': '100%'
              });
            }
          } else {
            if (width) {
              $("#".concat(_this2.id, " .zc-popup__window")).css({
                'max-width': "".concat(width, "px")
              });
            }

            if (height) {
              $("#".concat(_this2.id, " .zc-popup__window")).css({
                'max-height': "".concat(height, "px")
              });
            }
          }
        }
      };
      priv.calcSize();
      $(window).resize(function () {
        priv.calcSize();
      });
    }
    /**
     * Hide content
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "hideContent",
    value: function hideContent() {
      $("#".concat(this.id, " .zc-popup__content")).hide();
      this.showLoading();
    }
    /**
     * Show content
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "showContent",
    value: function showContent() {
      this.hideLoading();
      $("#".concat(this.id, " .zc-popup__window .zc-scrollbar")).removeClass('zc-popup__overflow-hidden');
      $("#".concat(this.id, " .zc-popup__content")).show();
    }
    /**
     * Hide loading
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "hideLoading",
    value: function hideLoading() {
      $("#".concat(this.id, " .zc-popup__loading")).hide();
    }
    /**
     * Show loading
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "showLoading",
    value: function showLoading() {
      $("#".concat(this.id, " .zc-popup__loading")).show();
    }
    /**
     * Erase content
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "remContent",
    value: function remContent() {
      $("#".concat(this.id, " .zc-popup__content")).empty();
    }
    /**
     * Append content
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "appendContent",
    value: function appendContent(content) {
      $("#".concat(this.id, " .zc-popup__content")).append(content);
    }
    /**
     * Close
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "close",
    value: function close() {
      var _this3 = this;

      $("#".concat(this.id, " .zc-popup__window")).addClass('zc-popup__window_close');
      $("#".concat(this.id, " .zc-popup__window")).one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function (event) {
        $("#".concat(_this3.id, " ")).hide().remove();
        $('body').css('overflow', 'initial');
      });
    }
  }]);

  return PopUp;
}();



/***/ }),

/***/ "./src/Resources/packages/zimbrucode/es6/module/rest-api.js":
/*!******************************************************************!*\
  !*** ./src/Resources/packages/zimbrucode/es6/module/rest-api.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RestAPI; });
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


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var $ = jQuery;

var RestAPI = /*#__PURE__*/function () {
  function RestAPI(url, nonce) {
    _classCallCheck(this, RestAPI);

    this.restURL = url;
    this.restNonce = nonce;
  }

  _createClass(RestAPI, [{
    key: "get",
    value: function get(path) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.__ajax('GET', path, data);
    }
  }, {
    key: "create",
    value: function create(path) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.__ajax('POST', path, data);
    }
  }, {
    key: "update",
    value: function update(path) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.__ajax('PUT', path, data);
    }
  }, {
    key: "delete",
    value: function _delete(path) {
      return this.__ajax('DELETE', path);
    }
  }, {
    key: "query",
    value: function query(path) {
      return this.restURL + path;
    }
  }, {
    key: "__ajax",
    value: function __ajax() {
      var _this = this;

      var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'GET';
      var path = arguments.length > 1 ? arguments[1] : undefined;
      var data = arguments.length > 2 ? arguments[2] : undefined;
      var callbacks = {};
      var options = {
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

      options.error = function (jqXHR, textStatus) {
        if ($.isFunction(callbacks.fail)) {
          callbacks.fail.call(_this, jqXHR, textStatus);
        }
      };

      options.success = function (response, textStatus, jqXHR) {
        if ($.isFunction(callbacks.done)) {
          callbacks.done.call(_this, response, textStatus, jqXHR);
        }
      };

      var output = zc.ajax(options);

      output.fail = function (callback) {
        callbacks.fail = callback;
        return output;
      };

      output.done = function (callback) {
        callbacks.done = callback;
        return output;
      };

      return output;
    }
  }]);

  return RestAPI;
}();



/***/ }),

/***/ "./src/Resources/packages/zimbrucode/es6/module/tpl/popup.html":
/*!*********************************************************************!*\
  !*** ./src/Resources/packages/zimbrucode/es6/module/tpl/popup.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div id=\"{{id}}\" class=\"zc-popup {{class}}\"> <div class=\"zc-popup__window\"> <header class=\"zc-popup__header\"> <span class=\"zc-popup__title\">{{title}}</span> <i class=\"zc-popup__close zc-icon-clear\"></i> </header> <div class=\"zc-scrollbar zc-popup__overflow-hidden\"> <div class=\"zc-popup__loading\"> <div class=\"zc-loading-spinner zc-popup__loading-spinner\"> <div class=\"zc-loading-spinner__bounce zc-loading-spinner__bounce_mode_1\"></div> <div class=\"zc-loading-spinner__bounce zc-loading-spinner__bounce_mode_2\"></div> <div class=\"zc-loading-spinner__bounce zc-loading-spinner__bounce_mode_3\"></div> </div> </div> <div class=\"zc-popup__content\"></div> </div> </div> </div>";

/***/ }),

/***/ "./src/Resources/packages/zimbrucode/es6/tpl/alert.html":
/*!**************************************************************!*\
  !*** ./src/Resources/packages/zimbrucode/es6/tpl/alert.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"zc-alert\"> <div class=\"zc-alert__container\"> <p class=\"zc-alert__text\">{{subject}}</p> </div> <footer class=\"zc-alert__footer\"> <div class=\"zc-alert__center\"> <button class=\"zc-alert__button zc-alert__button_type_ok zc-alert__button_active\" type=\"button\">{{title_ok}}</button> </div> </footer></div> ";

/***/ }),

/***/ "./src/Resources/packages/zimbrucode/es6/tpl/confirm.html":
/*!****************************************************************!*\
  !*** ./src/Resources/packages/zimbrucode/es6/tpl/confirm.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"zc-confirm\"> <div class=\"zc-confirm__container\"> <p class=\"zc-confirm__text\">{{subject}}</p> </div> <footer class=\"zc-confirm__footer\"> <button class=\"zc-confirm__button zc-confirm__button_type_ok zc-confirm__button_active\" type=\"button\">{{title_ok}}</button> <button class=\"zc-confirm__button zc-confirm__button_type_cancel\" type=\"button\">{{title_cancel}}</button> </footer> </div>";

/***/ }),

/***/ "./src/Resources/packages/zimbrucode/es6/tpl/prompt.html":
/*!***************************************************************!*\
  !*** ./src/Resources/packages/zimbrucode/es6/tpl/prompt.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"zc-prompt\"> <div class=\"zc-prompt__container\"> <p class=\"zc-prompt__text\">{{subject}}</p> <input placeholder=\"{{placeholder}}\" value=\"{{default}}\" class=\"zc-prompt__input\"> </div> <footer class=\"zc-prompt__footer\"> <button class=\"zc-prompt__button zc-prompt__button_type_ok zc-prompt__button_active\" type=\"button\">{{title_ok}}</button> <button class=\"zc-prompt__button zc-prompt__button_type_cancel\" type=\"button\">{{title_cancel}}</button> </footer> </div>";

/***/ }),

/***/ 0:
/*!******************************************************************************!*\
  !*** multi ./src/Resources/packages/zimbrucode/es6/jquery.zimbrucode.es6.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/k513/Documents/dev/wp/wp-content/themes/viki/vendor/junjulini/zimbrucode/src/Resources/packages/zimbrucode/es6/jquery.zimbrucode.es6.js */"./src/Resources/packages/zimbrucode/es6/jquery.zimbrucode.es6.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzb3VyY2VzL3BhY2thZ2VzL3ppbWJydWNvZGUvanF1ZXJ5LnppbWJydWNvZGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi9qcXVlcnkuemltYnJ1Y29kZS5lczYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi9tb2R1bGUvY29va2llLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZXMvcGFja2FnZXMvemltYnJ1Y29kZS9lczYvbW9kdWxlL3BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZXMvcGFja2FnZXMvemltYnJ1Y29kZS9lczYvbW9kdWxlL3Jlc3QtYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZXMvcGFja2FnZXMvemltYnJ1Y29kZS9lczYvbW9kdWxlL3RwbC9wb3B1cC5odG1sIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZXMvcGFja2FnZXMvemltYnJ1Y29kZS9lczYvdHBsL2FsZXJ0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi90cGwvY29uZmlybS5odG1sIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZXMvcGFja2FnZXMvemltYnJ1Y29kZS9lczYvdHBsL3Byb21wdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBaaW1icnVDb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogWmltYnJ1Q29kZSBmdW5jdGlvbnNcbiAqXG4gKiBAYXV0aG9yICBKdW5qdWxpbmlcbiAqIEBwYWNrYWdlIFppbWJydUNvZGVcbiAqIEBzaW5jZSAgIFppbWJydUNvZGUgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBQb3BVcCAgIGZyb20gJy4vbW9kdWxlL3BvcHVwJztcbmltcG9ydCBDb29raWUgIGZyb20gJy4vbW9kdWxlL2Nvb2tpZSc7XG5pbXBvcnQgUmVzdEFQSSBmcm9tICcuL21vZHVsZS9yZXN0LWFwaSc7XG5cbmltcG9ydCBUUExfX2NvbmZpcm0gZnJvbSAnLi90cGwvY29uZmlybS5odG1sJztcbmltcG9ydCBUUExfX3Byb21wdCAgZnJvbSAnLi90cGwvcHJvbXB0Lmh0bWwnO1xuaW1wb3J0IFRQTF9fYWxlcnQgICBmcm9tICcuL3RwbC9hbGVydC5odG1sJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuY2xhc3MgWmltYnJ1Q29kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIE1vZHVsZXMgb2JqZWN0c1xuICAgICAgICB0aGlzLm1vZHVsZSA9IHt9O1xuICAgICAgICBcbiAgICAgICAgLy8gTW9kdWxlIGRhdGFcbiAgICAgICAgdGhpcy5tb2R1bGVEYXRhID0ge307XG5cbiAgICAgICAgLy8gR2xvYmFsIGRhdGFcbiAgICAgICAgdGhpcy5nbG9iYWwgPSB7fTtcblxuICAgICAgICAvLyBGdW5jdGlvbiA6IENvb2tpZVxuICAgICAgICB0aGlzLmNvb2tpZSA9IG5ldyBDb29raWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIG1vZHVsZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRNb2R1bGUobmFtZSwgbW9kdWxlKSB7XG4gICAgICAgIHRoaXMubW9kdWxlRGF0YVtuYW1lXSA9IHt9O1xuICAgICAgICB0aGlzLm1vZHVsZVtuYW1lXSA9IG5ldyBtb2R1bGUoJCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6YXRpb24gbW9kdWxlIGRhdGFcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaW5pdE1vZHVsZURhdGEobmFtZSkge1xuICAgICAgICB0aGlzLm1vZHVsZURhdGFbbmFtZV0gPSB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgbW9kdWxlIGRhdGFcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkTW9kdWxlRGF0YShuYW1lLCBkYXRhID0ge30pIHtcbiAgICAgICAgdGhpcy5tb2R1bGVEYXRhW25hbWVdID0gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgbW9kdWxlIGRhdGFcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBnZXRNb2R1bGVEYXRhKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlRGF0YVtuYW1lXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSB1bmlxdWUgSURcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICB1bmlxdWVJRCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI2KSArIERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGF0YSByZXBsYWNlIGluIHN1YmplY3RcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgc3RyUmVwbGFjZShzZWFyY2gsIHJlcGxhY2UsIHN1YmplY3QpIHtcbiAgICAgICAgbGV0IHJlZ1N0ciA9ICcnO1xuXG4gICAgICAgIHNlYXJjaC5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoIC0gMSA9PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJlZ1N0ciArPSBlbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVnU3RyICs9IGAke2VsfXxgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3ViamVjdC5yZXBsYWNlKG5ldyBSZWdFeHAocmVnU3RyLCAnZycpLCAobWF0Y2gpID0+IHtcbiAgICAgICAgICAgIGxldCBvdXRwdXQgPSAnJztcblxuICAgICAgICAgICAgc2VhcmNoLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbCA9PSBtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHJlcGxhY2VbaW5kZXhdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gcmVwbGFjZVtpbmRleF0uY2FsbCh0aGlzLCBtYXRjaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSByZXBsYWNlW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZW1wbGF0ZSBoYW5kbGVyXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRwbCAgVGVtcGxhdGUgSFRNTFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIERhdGEgZm9yIHByZXBhcmluZyB0ZW1wbGF0ZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHRwbCh0cGwgPSAnJywgZGF0YSA9IHt9KSB7XG4gICAgICAgIGlmICh0eXBlb2YgdHBsID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGxldCBzZWFyY2ggPSBbXTtcbiAgICAgICAgICAgIGxldCByZXBsYWNlID0gW107XG5cbiAgICAgICAgICAgICQuZWFjaChkYXRhLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlYXJjaC5wdXNoKGB7eyR7a2V5fX19YCk7XG4gICAgICAgICAgICAgICAgcmVwbGFjZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJSZXBsYWNlKHNlYXJjaCwgcmVwbGFjZSwgdHBsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWVwIGZpbmQgYW5kIHNldHRpbmdcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZGVlcEZpbmRBbmRTZXR0aW5nKG9iaiwgcGF0aCwgdmFsdWUsIHJlbW92ZSA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBwYXRocyA9IHBhdGguc3BsaXQoJy8nKSwgY3VycmVudCA9IG9iaiwgaTtcblxuICAgICAgICBpZiAocmVtb3ZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIHBhdGhzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXRocy5sZW5ndGggLSAxID09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRbcGF0aHNbaV1dID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudCA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnRbcGF0aHNbaV1dID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50W3BhdGhzW2ldXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhdGhzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnRbcGF0aHNbaV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIHBhdGhzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50ID09PSB1bmRlZmluZWQgfHwgY3VycmVudFtwYXRoc1tpXV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhdGhzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHBhdGhzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IHVuZGVmaW5lZCB8fCBjdXJyZW50W3BhdGhzW2ldXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhdGhzLmxlbmd0aCAtIDEgPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGN1cnJlbnRbcGF0aHNbaV1dO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnRbcGF0aHNbaV1dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXMgbW9iaWxlXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGlzTW9iaWxlKCkge1xuICAgICAgICBpZiAoL2lQKG9kfGhvbmV8YWQpL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvQW5kcm9pZC9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICBpZiAoL01vYmlsZS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9JRU1vYmlsZS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL1dpbmRvd3MgUGhvbmUvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9CbGFja0JlcnJ5L2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvQkIxMC9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93Lm5hdmlnYXRvci5hcHBOYW1lID09PSBcIk1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlclwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRNb2RlID49IDg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUm91bmRcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICByb3VuZCh2YWx1ZSwgZXhwKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZXhwID09PSAndW5kZWZpbmVkJyB8fCArZXhwID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9ICt2YWx1ZTtcbiAgICAgICAgZXhwID0gK2V4cDtcbiAgICAgICAgXG4gICAgICAgIGlmIChpc05hTih2YWx1ZSkgfHwgISh0eXBlb2YgZXhwID09PSAnbnVtYmVyJyAmJiBleHAgJSAxID09PSAwKSkge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNoaWZ0XG4gICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnZScpO1xuICAgICAgICB2YWx1ZSA9IE1hdGgucm91bmQoKyh2YWx1ZVswXSArICdlJyArICh2YWx1ZVsxXSA/ICgrdmFsdWVbMV0gKyBleHApIDogZXhwKSkpO1xuICAgICAgICBcbiAgICAgICAgLy8gU2hpZnQgYmFja1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJ2UnKTtcblxuICAgICAgICByZXR1cm4gKyh2YWx1ZVswXSArICdlJyArICh2YWx1ZVsxXSA/ICgrdmFsdWVbMV0gLSBleHApIDogLWV4cCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2l6ZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICByZXNpemUoY2FsbGJhY2tXaWR0aCwgY2FsbGJhY2tIZWlnaHQpIHtcbiAgICAgICAgbGV0IHdpbmRvd1dpZHRoICA9IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgICAgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0OyBcblxuICAgICAgICAkKHdpbmRvdykucmVzaXplKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCAhPSB3aW5kb3dXaWR0aCkge1xuICAgICAgICAgICAgICAgIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKGNhbGxiYWNrV2lkdGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrV2lkdGguY2FsbCh0aGlzLCB3aW5kb3dXaWR0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ICE9IHdpbmRvd0hlaWdodCkge1xuICAgICAgICAgICAgICAgIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oY2FsbGJhY2tIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrSGVpZ2h0LmNhbGwodGhpcywgd2luZG93SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb25lIGFuIG9iamVjdFxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNsb25lKG9iamVjdCkge1xuICAgICAgICByZXR1cm4gJC5leHRlbmQodHJ1ZSwge30sIG9iamVjdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmFuZG9tIHN0cmluZ1xuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHJhbmRvbUNvZGUobGVuZ3RoKSB7XG4gICAgICAgIGxldCBjaGFycyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaMTIzNDU2Nzg5MCcsXG4gICAgICAgICAgICBwYXNzID0gJyc7XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBsZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgbGV0IGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2Mik7XG4gICAgICAgICAgICBwYXNzICs9IGNoYXJzLmNoYXJBdChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXNzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlIGRhdGFcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwYXJzZShkYXRhLCBzdHJpbmdpZnkpIHtcbiAgICAgICAgcmV0dXJuIChzdHJpbmdpZnkgPT09IHVuZGVmaW5lZCkgPyBKU09OLnBhcnNlKGRhdGEpIDogSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYganNvblxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGlzSnNvbihzdHIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIEpTT04ucGFyc2Uoc3RyKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3Ryc3RyXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgc3Ryc3RyKGhheXN0YWNrLCBuZWVkbGUsIGJvb2wpIHtcbiAgICAgICAgY29uc3QgcG9zID0gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpO1xuXG4gICAgICAgIGlmIChwb3MgPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChib29sKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhheXN0YWNrLnN1YnN0cigwLCBwb3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGF5c3RhY2suc2xpY2UocG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhcGl0YWxpemUgZmlyc3QgbGV0dGVyXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgdWNmaXJzdChzdHIsIGZvcmNlKSB7XG4gICAgICAgIHN0ciA9IGZvcmNlID8gc3RyLnRvTG93ZXJDYXNlKCkgOiBzdHIgfHwgJyc7XG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFxcYikoW2EtekEtWl0pLywgKGZpcnN0TGV0dGVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3RMZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIG9yIHVwZGF0ZSBhIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgaW4gVVJMXG4gICAgICogXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtZXRlcnMgICBRdWVyeSBwYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgICAgICAgICBVUkxcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRRdWVyeVN0cmluZyhwYXJhbWV0ZXJzID0ge30sIHVybCkge1xuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcml2ID0ge307XG4gICAgICAgIHByaXYuVVFTID0gKGtleSwgdmFsdWUsIHVybCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKFwiKFs/Jl0pXCIgKyBrZXkgKyBcIj0uKj8oJnwjfCQpKC4qKVwiLCBcImdpXCIpO1xuICAgICAgICAgICAgbGV0IGhhc2g7XG5cbiAgICAgICAgICAgIGlmIChyZS50ZXN0KHVybCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXJsLnJlcGxhY2UocmUsICckMScgKyBrZXkgKyBcIj1cIiArIHZhbHVlICsgJyQyJDMnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBoYXNoID0gdXJsLnNwbGl0KCcjJyk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IGhhc2hbMF0ucmVwbGFjZShyZSwgJyQxJDMnKS5yZXBsYWNlKC8oJnxcXD8pJC8sICcnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGhhc2hbMV0gIT09ICd1bmRlZmluZWQnICYmIGhhc2hbMV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCArPSAnIycgKyBoYXNoWzFdO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcGFyYXRvciA9IHVybC5pbmRleE9mKCc/JykgIT09IC0xID8gJyYnIDogJz8nO1xuXG4gICAgICAgICAgICAgICAgICAgIGhhc2ggPSB1cmwuc3BsaXQoJyMnKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gaGFzaFswXSArIHNlcGFyYXRvciArIGtleSArICc9JyArIHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaGFzaFsxXSAhPT0gJ3VuZGVmaW5lZCcgJiYgaGFzaFsxXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcjJyArIGhhc2hbMV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgICQuZWFjaChwYXJhbWV0ZXJzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdXJsID0gcHJpdi5VUVMoa2V5LCB2YWx1ZSwgdXJsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyIGluIFVSTFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbWV0ZXJzICAgUXVlcnkgcGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgICAgICAgICAgVVJMXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcmVtb3ZlUXVlcnlTdHJpbmcocGFyYW1ldGVycyA9IFtdLCB1cmwpIHtcbiAgICAgICAgY29uc3QgcHJpdiA9IHt9O1xuXG4gICAgICAgIHByaXYuUlFTID0gKGtleSwgdXJsKSA9PiB7XG4gICAgICAgICAgICBsZXQgcnRuID0gdXJsLnNwbGl0KFwiP1wiKVswXTtcbiAgICAgICAgICAgIGxldCBwYXJhbTtcbiAgICAgICAgICAgIGxldCBwYXJhbXNBcnIgPSBbXTtcbiAgICAgICAgICAgIGxldCBxdWVyeVN0cmluZyA9ICh1cmwuaW5kZXhPZihcIj9cIikgIT09IC0xKSA/IHVybC5zcGxpdChcIj9cIilbMV0gOiAnJztcblxuICAgICAgICAgICAgaWYgKHF1ZXJ5U3RyaW5nICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHBhcmFtc0FyciA9IHF1ZXJ5U3RyaW5nLnNwbGl0KFwiJlwiKTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBwYXJhbXNBcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW0gPSBwYXJhbXNBcnJbaV0uc3BsaXQoXCI9XCIpWzBdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNBcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcnRuID0gcnRuICsgXCI/XCIgKyBwYXJhbXNBcnIuam9pbihcIiZcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBydG47XG4gICAgICAgIH07XG5cbiAgICAgICAgJC5lYWNoKHBhcmFtZXRlcnMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB1cmwgPSBwcml2LlJRUyh2YWx1ZSwgdXJsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBSkFYXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWpheChzZXR0aW5ncykge1xuICAgICAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgdXJsOiBhamF4dXJsLFxuICAgICAgICAgICAgZGF0YTogJycsXG4gICAgICAgICAgICBiZWZvcmU6ICgpID0+IHt9LFxuICAgICAgICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1ppbWJydUNvZGUgOiBBamF4IEVycm9yJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7fVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBjaGVja04gPSAxO1xuXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gMTAwMDtcbiAgICAgICAgY29uc3QgaXRlcmF0aW9ucyA9IDQ7XG5cbiAgICAgICAgc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIHNldHRpbmdzKTtcblxuICAgICAgICBjb25zdCBwcmVwYXJlZFNldHRpbmdzID0gdGhpcy5jbG9uZShzZXR0aW5ncyk7XG5cbiAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihzZXR0aW5ncy5iZWZvcmUpKSB7XG4gICAgICAgICAgICBwcmVwYXJlZFNldHRpbmdzLmJlZm9yZVNlbmQgPSBzZXR0aW5ncy5iZWZvcmU7XG4gICAgICAgICAgICBkZWxldGUgcHJlcGFyZWRTZXR0aW5ncy5iZWZvcmU7XG4gICAgICAgIH1cblxuICAgICAgICBwcmVwYXJlZFNldHRpbmdzLnN1Y2Nlc3MgPSAocmVzcG9uc2UsIHRleHRTdGF0dXMsIGpxWEhSKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgPCAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihzZXR0aW5ncy5lcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuZXJyb3IuY2FsbCh0aGlzLCBqcVhIUiwgdGV4dFN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmdzLnN1Y2Nlc3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLnN1Y2Nlc3MuY2FsbCh0aGlzLCByZXNwb25zZSwgdGV4dFN0YXR1cywganFYSFIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBwcmVwYXJlZFNldHRpbmdzLmVycm9yID0gKGpxWEhSLCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hlY2tOIDw9IGl0ZXJhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tOICsrO1xuICAgICAgICAgICAgICAgICAgICAkLmFqYXgocHJlcGFyZWRTZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgfSwgaW50ZXJ2YWwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmdzLmVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5lcnJvci5jYWxsKHRoaXMsIGpxWEhSLCB0ZXh0U3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuICQuYWpheChwcmVwYXJlZFNldHRpbmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQb3BVcFxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHBvcHVwKCkge1xuICAgICAgICByZXR1cm4gbmV3IFBvcFVwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbmZpcm0gUG9wVXBcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY29uZmlybShvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHBvcHVwID0gdGhpcy5wb3B1cCgpO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgc3ViamVjdDogJ3Rlc3QnLFxuICAgICAgICAgICAgb2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cC5jbG9zZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbmNlbDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU6ICdDb25maXJtJyxcbiAgICAgICAgICAgIHRpdGxlT0s6ICdPSycsXG4gICAgICAgICAgICB0aXRsZUNhbmNlbDogJ0NhbmNlbCcsXG4gICAgICAgICAgICBodG1sOiAnJyxcbiAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgICAgIGNsYXNzOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyksXG4gICAgICAgICAgICBodG1sID0gJyc7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLmh0bWwpIHtcbiAgICAgICAgICAgIGh0bWwgPSBzZXR0aW5ncy5odG1sO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHRtbCA9IHRoaXMudHBsKFRQTF9fY29uZmlybSwge1xuICAgICAgICAgICAgICAgIHN1YmplY3Q6IHNldHRpbmdzLnN1YmplY3QsXG4gICAgICAgICAgICAgICAgdGl0bGVfb2s6IHNldHRpbmdzLnRpdGxlT0ssXG4gICAgICAgICAgICAgICAgdGl0bGVfY2FuY2VsOiBzZXR0aW5ncy50aXRsZUNhbmNlbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3B1cC5hZGQoe1xuICAgICAgICAgICAgdGl0bGU6IHNldHRpbmdzLnRpdGxlLFxuICAgICAgICAgICAgaHRtbDogaHRtbCxcbiAgICAgICAgICAgIHdpZHRoOiBzZXR0aW5ncy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogc2V0dGluZ3MuaGVpZ2h0LFxuICAgICAgICAgICAgY2xhc3M6IGB6Yy1wb3B1cF9uby1wYWRkaW5nIHpjLXBvcHVwX3R5cGVfY29uZmlybSAke3NldHRpbmdzLmNsYXNzfWAsXG4gICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLWNvbmZpcm0nKS5vbignY2xpY2snLCAnLnpjLWNvbmZpcm1fX2J1dHRvbl90eXBlX29rJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5vay5jYWxsKHRoaXMsIHBvcHVwKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQoJy56Yy1jb25maXJtJykub24oJ2NsaWNrJywgJy56Yy1jb25maXJtX19idXR0b25fdHlwZV9jYW5jZWwnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmNhbmNlbC5jYWxsKHRoaXMsIHBvcHVwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvbXB0IFBvcFVwXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHByb21wdChvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHBvcHVwID0gdGhpcy5wb3B1cCgpO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgc3ViamVjdDogJ3Rlc3QnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdJbnNlcnQgeW91ciB0ZXh0JyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICAgICAgb2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cC5jbG9zZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbmNlbDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU6ICdQcm9tcHQnLFxuICAgICAgICAgICAgdGl0bGVPSzogJ09LJyxcbiAgICAgICAgICAgIHRpdGxlQ2FuY2VsOiAnQ2FuY2VsJyxcbiAgICAgICAgICAgIGh0bWw6ICcnLFxuICAgICAgICAgICAgd2lkdGg6IDQwMCxcbiAgICAgICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICAgICAgY2xhc3M6ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHNldHRpbmdzID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKSxcbiAgICAgICAgICAgIGh0bWwgPSAnJztcblxuICAgICAgICBpZiAoc2V0dGluZ3MuaHRtbCkge1xuICAgICAgICAgICAgaHRtbCA9IHNldHRpbmdzLmh0bWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBodG1sID0gdGhpcy50cGwoVFBMX19wcm9tcHQsIHtcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBzZXR0aW5ncy5zdWJqZWN0LFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBzZXR0aW5ncy5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBzZXR0aW5ncy5kZWZhdWx0LFxuICAgICAgICAgICAgICAgIHRpdGxlX29rOiBzZXR0aW5ncy50aXRsZU9LLFxuICAgICAgICAgICAgICAgIHRpdGxlX2NhbmNlbDogc2V0dGluZ3MudGl0bGVDYW5jZWxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9wdXAuYWRkKHtcbiAgICAgICAgICAgIHRpdGxlOiBzZXR0aW5ncy50aXRsZSxcbiAgICAgICAgICAgIGh0bWw6IGh0bWwsXG4gICAgICAgICAgICB3aWR0aDogc2V0dGluZ3Mud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHNldHRpbmdzLmhlaWdodCxcbiAgICAgICAgICAgIGNsYXNzOiBgemMtcG9wdXBfdHlwZV9wcm9tcHQgJHtzZXR0aW5ncy5jbGFzc31gLFxuICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wcm9tcHQnKS5vbignY2xpY2snLCAnLnpjLXByb21wdF9fYnV0dG9uX3R5cGVfb2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJCgnLnpjLXByb21wdF9faW5wdXQnKS52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mub2suY2FsbCh0aGlzLCBwb3B1cCwgdGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuemMtcHJvbXB0X19pbnB1dCcpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQoJy56Yy1wcm9tcHQnKS5vbignY2xpY2snLCAnLnpjLXByb21wdF9fYnV0dG9uX3R5cGVfY2FuY2VsJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5jYW5jZWwuY2FsbCh0aGlzLCBwb3B1cCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsZXJ0IFBvcFVwXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFsZXJ0KG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgcG9wdXAgPSB0aGlzLnBvcHVwKCk7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBzdWJqZWN0OiAndGVzdCcsXG4gICAgICAgICAgICBvazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU6ICdBbGVydCcsXG4gICAgICAgICAgICB0aXRsZU9LOiAnT0snLFxuICAgICAgICAgICAgaHRtbDogJycsXG4gICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICAgICAgICBjbGFzczogJydcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpLFxuICAgICAgICAgICAgaHRtbCA9ICcnO1xuXG4gICAgICAgIGlmIChzZXR0aW5ncy5odG1sKSB7XG4gICAgICAgICAgICBodG1sID0gc2V0dGluZ3MuaHRtbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGh0bWwgPSB0aGlzLnRwbChUUExfX2FsZXJ0LCB7XG4gICAgICAgICAgICAgICAgc3ViamVjdDogc2V0dGluZ3Muc3ViamVjdCxcbiAgICAgICAgICAgICAgICB0aXRsZV9vazogc2V0dGluZ3MudGl0bGVPS1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3B1cC5hZGQoe1xuICAgICAgICAgICAgdGl0bGU6IHNldHRpbmdzLnRpdGxlLFxuICAgICAgICAgICAgaHRtbDogaHRtbCxcbiAgICAgICAgICAgIHdpZHRoOiBzZXR0aW5ncy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogc2V0dGluZ3MuaGVpZ2h0LFxuICAgICAgICAgICAgY2xhc3M6IGB6Yy1wb3B1cF90eXBlX2FsZXJ0ICR7c2V0dGluZ3MuY2xhc3N9YCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuemMtYWxlcnQnKS5vbignY2xpY2snLCAnLnpjLWFsZXJ0X19idXR0b25fdHlwZV9vaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mub2suY2FsbCh0aGlzLCBwb3B1cCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc3QgQVBJXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgIFdvcmRQcmVzcyByZXN0IEFQSSBVUkxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbm9uY2UgV29yZFByZXNzIFggbm9uY2UgZm9yIFJlc3RBUElcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICByZXN0QVBJKHVybCwgbm9uY2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXN0QVBJKHVybCwgbm9uY2UpO1xuICAgIH1cblxuICAgIGlucHV0UmFuZ2UobW9kZSwgZGF0YSA9IHt9KSB7XG4gICAgICAgIGlmIChtb2RlICYmIGRhdGEuZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgcHJpdiA9IHt9O1xuXG4gICAgICAgICAgICAvLyBIYXMgbGluZSBiYWNrZ3JvdW5kXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJMQkNsYXNzID0gZGF0YS5jb250YWluZXJMQkNsYXNzIHx8ICcnO1xuICAgICAgICAgICAgcHJpdi5oYXNMQiA9IGRhdGEuZWwucGFyZW50KCkuaGFzQ2xhc3MoY29udGFpbmVyTEJDbGFzcyk7XG5cbiAgICAgICAgICAgIC8vIEN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIHByaXYuY3VycmVudFZhbHVlID0gZGF0YS5lbC52YWwoKTtcblxuICAgICAgICAgICAgLy8gVHJhY2sgcGVyY2VudFxuICAgICAgICAgICAgY29uc3QgbWluID0gZGF0YS5zZXR0aW5ncy5taW4gfHwgMDtcbiAgICAgICAgICAgIGNvbnN0IG1heCA9IGRhdGEuc2V0dGluZ3MubWF4IHx8IDEwMDtcblxuICAgICAgICAgICAgcHJpdi50cmFja1BlcmNlbnQgPSAoKHByaXYuY3VycmVudFZhbHVlIC0gbWluKSAqIDEwMCkgLyAobWF4IC0gbWluKTtcblxuICAgICAgICAgICAgLy8gUG9zdGZpeFxuICAgICAgICAgICAgcHJpdi5wb3N0Zml4ID0gZGF0YS5zZXR0aW5ncy5wb3N0Zml4IHx8ICcnO1xuXG4gICAgICAgICAgICAvLyBFbGVtZW50c1xuICAgICAgICAgICAgY29uc3QgbGVmdEluZGljYXRvckNsYXNzICAgID0gZGF0YS5sZWZ0SW5kaWNhdG9yQ2xhc3MgICAgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SW5kaWNhdG9yQ2xhc3MgPSBkYXRhLmN1cnJlbnRJbmRpY2F0b3JDbGFzcyB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0SW5kaWNhdG9yQ2xhc3MgICA9IGRhdGEucmlnaHRJbmRpY2F0b3JDbGFzcyAgIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgZ3JpZENvbnRhaW5lckNsYXNzICAgID0gZGF0YS5ncmlkQ29udGFpbmVyQ2xhc3MgICAgfHwgJyc7XG5cbiAgICAgICAgICAgIHByaXYubGVmdEluZGljYXRvciAgICA9IChsZWZ0SW5kaWNhdG9yQ2xhc3MpICAgID8gZGF0YS5lbC5wYXJlbnQoKS5maW5kKGAuJHtsZWZ0SW5kaWNhdG9yQ2xhc3N9YCkgICAgOiAnJztcbiAgICAgICAgICAgIHByaXYuY3VycmVudEluZGljYXRvciA9IChjdXJyZW50SW5kaWNhdG9yQ2xhc3MpID8gZGF0YS5lbC5wYXJlbnQoKS5maW5kKGAuJHtjdXJyZW50SW5kaWNhdG9yQ2xhc3N9YCkgOiAnJztcbiAgICAgICAgICAgIHByaXYucmlnaHRJbmRpY2F0b3IgICA9IChyaWdodEluZGljYXRvckNsYXNzKSAgID8gZGF0YS5lbC5wYXJlbnQoKS5maW5kKGAuJHtyaWdodEluZGljYXRvckNsYXNzfWApICAgOiAnJztcbiAgICAgICAgICAgIHByaXYuZ3JpZENvbnRhaW5lciAgICA9IChncmlkQ29udGFpbmVyQ2xhc3MpICAgID8gZGF0YS5lbC5wYXJlbnQoKS5maW5kKGAuJHtncmlkQ29udGFpbmVyQ2xhc3N9YCkgICAgOiAnJztcblxuICAgICAgICAgICAgLy8gQWRkIHRyYWNrIHBlcmNlbnRcbiAgICAgICAgICAgIHByaXYuYWRkVHJhY2tQZXJjZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcHJpdi5oYXNMQikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmVsLmNzcygnYmFja2dyb3VuZC1zaXplJywgYCR7cHJpdi50cmFja1BlcmNlbnR9JSAxMDAlYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gU2V0dXAgaW5kaWNhdG9yIGN1cnJlbnRcbiAgICAgICAgICAgIHByaXYuaW5kaWNhdG9yQ3VycmVudCA9IChjaGFuZ2VDdXJyZW50VmFsdWUgPSBmYWxzZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhpZGVGcm9tVG8gPSBkYXRhLnNldHRpbmdzLmhpZGVfZnJvbV90byB8fCBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChoaWRlRnJvbVRvICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRodW1iU2l6ZSA9IChwcml2Lmhhc0xCKSA/IDE3IDogMTY7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZUN1cnJlbnRWYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdi5jdXJyZW50SW5kaWNhdG9yLnRleHQocHJpdi5jdXJyZW50VmFsdWUgKyBwcml2LnBvc3RmaXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEluZGljYXRvcldpZHRoID0gcHJpdi5jdXJyZW50SW5kaWNhdG9yLm91dGVyV2lkdGgoKSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxjUG9zaXRpb25TdHlsZSAgICAgPSBgbGVmdDogY2FsYygke3ByaXYudHJhY2tQZXJjZW50fSUgLSAkeygoY3VycmVudEluZGljYXRvcldpZHRoIC0gdGh1bWJTaXplKSAvIDIpICsgKHByaXYudHJhY2tQZXJjZW50IC8gMTAwKSAqIHRodW1iU2l6ZX1weClgOyBcblxuICAgICAgICAgICAgICAgICAgICBwcml2LmN1cnJlbnRJbmRpY2F0b3IuYXR0cignc3R5bGUnLCBjYWxjUG9zaXRpb25TdHlsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gU2hvdy9IaWRlIGluZGljYXRvcnMgOiBsZWZ0ICYgcmlnaHRcbiAgICAgICAgICAgIHByaXYuaW5kaWNhdG9yc1Nob3dIaWRlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhpZGVNaW5NYXggPSBkYXRhLnNldHRpbmdzLmhpZGVfbWluX21heCB8fCBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChoaWRlTWluTWF4ICE9PSB0cnVlICYmIHByaXYuY3VycmVudEluZGljYXRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IExEID0gcHJpdi5sZWZ0SW5kaWNhdG9yLmdldCgwKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgQ0QgPSBwcml2LmN1cnJlbnRJbmRpY2F0b3IuZ2V0KDApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBSRCA9IHByaXYucmlnaHRJbmRpY2F0b3IuZ2V0KDApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChMRC5yaWdodCArIDEgPiBDRC5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2LmxlZnRJbmRpY2F0b3IuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdi5sZWZ0SW5kaWNhdG9yLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChSRC5sZWZ0IC0gMSA8IENELnJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2LnJpZ2h0SW5kaWNhdG9yLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXYucmlnaHRJbmRpY2F0b3IuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHByaXYuY291bnREZWNpbWFscyA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICgodmFsdWUgJSAxKSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBNb2RlIDogSW5pdFxuICAgICAgICAgICAgcHJpdi5pbml0TW9kZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcml2LmluZGljYXRvckN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICBwcml2LmluZGljYXRvcnNTaG93SGlkZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gTW9kZSA6IExpdmVcbiAgICAgICAgICAgIHByaXYubGl2ZU1vZGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJpdi5hZGRUcmFja1BlcmNlbnQoKTtcbiAgICAgICAgICAgICAgICBwcml2LmluZGljYXRvckN1cnJlbnQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgcHJpdi5pbmRpY2F0b3JzU2hvd0hpZGUoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIE1vZGUgOiBDaGFuZ2VcbiAgICAgICAgICAgIHByaXYuY2hhbmdlTW9kZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoaWRlTWluTWF4ID0gZGF0YS5zZXR0aW5ncy5oaWRlX21pbl9tYXggfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvd0dyaWQgICA9IGRhdGEuc2V0dGluZ3MuZ3JpZCB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGVwICAgICAgID0gZGF0YS5zZXR0aW5ncy5zdGVwIHx8IDE7XG5cbiAgICAgICAgICAgICAgICBkYXRhLmVsLmF0dHIoJ21pbicsIG1pbik7XG4gICAgICAgICAgICAgICAgZGF0YS5lbC5hdHRyKCdtYXgnLCBtYXgpO1xuICAgICAgICAgICAgICAgIGRhdGEuZWwuZGF0YSgnc2V0dGluZ3MnLCBkYXRhLnNldHRpbmdzKTtcblxuICAgICAgICAgICAgICAgIGlmIChoaWRlTWluTWF4ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBwcml2LmxlZnRJbmRpY2F0b3IudGV4dChtaW4gKyBwcml2LnBvc3RmaXgpO1xuICAgICAgICAgICAgICAgICAgICBwcml2LnJpZ2h0SW5kaWNhdG9yLnRleHQobWF4ICsgcHJpdi5wb3N0Zml4KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoc2hvd0dyaWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hcmsgPSAobWF4IC0gbWluKSAvIDQ7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJpdi5ncmlkQ29udGFpbmVyLmZpbmQoJ2xpW2RhdGEtbj0xXSA+IHNwYW4nKS50ZXh0KG1pbik7XG4gICAgICAgICAgICAgICAgICAgIHByaXYuZ3JpZENvbnRhaW5lci5maW5kKCdsaVtkYXRhLW49Ml0gPiBzcGFuJykudGV4dCh6Yy5yb3VuZChtYXJrICsgbWluLCBwcml2LmNvdW50RGVjaW1hbHMoc3RlcCkpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpdi5ncmlkQ29udGFpbmVyLmZpbmQoJ2xpW2RhdGEtbj0zXSA+IHNwYW4nKS50ZXh0KHpjLnJvdW5kKG1hcmsgKiAyICsgbWluLCBwcml2LmNvdW50RGVjaW1hbHMoc3RlcCkpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpdi5ncmlkQ29udGFpbmVyLmZpbmQoJ2xpW2RhdGEtbj00XSA+IHNwYW4nKS50ZXh0KHpjLnJvdW5kKG1hcmsgKiAzICsgbWluLCBwcml2LmNvdW50RGVjaW1hbHMoc3RlcCkpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpdi5ncmlkQ29udGFpbmVyLmZpbmQoJ2xpW2RhdGEtbj01XSA+IHNwYW4nKS50ZXh0KG1heCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcHJpdi5hZGRUcmFja1BlcmNlbnQoKTtcbiAgICAgICAgICAgICAgICBwcml2LmluZGljYXRvckN1cnJlbnQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgcHJpdi5pbmRpY2F0b3JzU2hvd0hpZGUoKTtcbiAgICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdpbml0JzpcbiAgICAgICAgICAgICAgICAgICAgcHJpdi5pbml0TW9kZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdsaXZlJzpcbiAgICAgICAgICAgICAgICAgICAgcHJpdi5saXZlTW9kZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjaGFuZ2UnOlxuICAgICAgICAgICAgICAgICAgICBwcml2LmNoYW5nZU1vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEluaXRpYWxpemF0aW9uIG9mIGNsYXNzIDogWmltYnJ1Q29kZVxud2luZG93LnpjID0gbmV3IFppbWJydUNvZGUoKTsiLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgWmltYnJ1Q29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFppbWJydUNvZGUvTW9kdWxlL0Nvb2tpZVxuICpcbiAqIEBhdXRob3IgIEp1bmp1bGluaVxuICogQHBhY2thZ2UgWmltYnJ1Q29kZVxuICogQHNpbmNlICAgWmltYnJ1Q29kZSAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0cyA9IHt9O1xuICAgIH1cblxuICAgIF9fZXh0ZW5kKC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0IGkgPSAwLCByZXN1bHQgPSB7fTtcblxuICAgICAgICBmb3IgKDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyaWJ1dGVzID0gYXJnc1tpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIF9fYXBpKGtleSwgdmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCwgY29udmVydGVyID0gKCkgPT4ge307XG5cbiAgICAgICAgLy8gV3JpdGVcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gdGhpcy5fX2V4dGVuZCh7XG4gICAgICAgICAgICAgICAgcGF0aDogJy8nXG4gICAgICAgICAgICB9LCB0aGlzLmRlZmF1bHRzLCBhdHRyaWJ1dGVzKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLmV4cGlyZXMgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhwaXJlcyA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgZXhwaXJlcy5zZXRNaWxsaXNlY29uZHMoZXhwaXJlcy5nZXRNaWxsaXNlY29uZHMoKSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGUrNSk7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5leHBpcmVzID0gZXhwaXJlcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB6Yy5wYXJzZSh2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAgICAgICBpZiAoIWNvbnZlcnRlci53cml0ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyh2YWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGNvbnZlcnRlci53cml0ZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAga2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhrZXkpKTtcbiAgICAgICAgICAgIGtleSA9IGtleS5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDVFfDYwfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuICAgICAgICAgICAga2V5ID0ga2V5LnJlcGxhY2UoL1tcXChcXCldL2csIGVzY2FwZSk7XG5cbiAgICAgICAgICAgIHJldHVybiAoZG9jdW1lbnQuY29va2llID0gW1xuICAgICAgICAgICAgICAgIGtleSwgJz0nLCB2YWx1ZSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmV4cGlyZXMgJiYgJzsgZXhwaXJlcz0nICsgYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCksIC8vIHVzZSBleHBpcmVzIGF0dHJpYnV0ZSwgbWF4LWFnZSBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5wYXRoICAgICYmICc7IHBhdGg9JyArIGF0dHJpYnV0ZXMucGF0aCxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmRvbWFpbiAgJiYgJzsgZG9tYWluPScgKyBhdHRyaWJ1dGVzLmRvbWFpbixcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnNlY3VyZSA/ICc7IHNlY3VyZScgOiAnJ1xuICAgICAgICAgICAgXS5qb2luKCcnKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZWFkXG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXN1bHQgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRvIHByZXZlbnQgdGhlIGZvciBsb29wIGluIHRoZSBmaXJzdCBwbGFjZSBhc3NpZ24gYW4gZW1wdHkgYXJyYXlcbiAgICAgICAgLy8gaW4gY2FzZSB0aGVyZSBhcmUgbm8gY29va2llcyBhdCBhbGwuIEFsc28gcHJldmVudHMgb2RkIHJlc3VsdCB3aGVuXG4gICAgICAgIC8vIGNhbGxpbmcgXCJnZXQoKVwiXG4gICAgICAgIGxldCBjb29raWVzID0gZG9jdW1lbnQuY29va2llID8gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpIDogW10sXG4gICAgICAgICAgICByZGVjb2RlID0gLyglWzAtOUEtWl17Mn0pKy9nLFxuICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcGFydHMgPSBjb29raWVzW2ldLnNwbGl0KCc9JyksXG4gICAgICAgICAgICAgICAgbmFtZSA9IHBhcnRzWzBdLnJlcGxhY2UocmRlY29kZSwgZGVjb2RlVVJJQ29tcG9uZW50KSxcbiAgICAgICAgICAgICAgICBjb29raWUgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCc9Jyk7XG5cbiAgICAgICAgICAgIGlmIChjb29raWUuY2hhckF0KDApID09PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgY29va2llID0gY29va2llLnNsaWNlKDEsIC0xKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb29raWUgPSBjb252ZXJ0ZXIucmVhZCA/XG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRlci5yZWFkKGNvb2tpZSwgbmFtZSkgOiBjb252ZXJ0ZXIoY29va2llLCBuYW1lKSB8fFxuICAgICAgICAgICAgICAgICAgICBjb29raWUucmVwbGFjZShyZGVjb2RlLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuanNvbikge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29va2llID0gSlNPTi5wYXJzZShjb29raWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gY29va2llO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRbbmFtZV0gPSBjb29raWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgYWRkKGtleSwgdmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdGhpcy5fX2FwaShrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKTtcbiAgICB9XG5cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fYXBpKGtleSk7XG4gICAgfVxuXG4gICAgZ2V0SlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19hcGkuYXBwbHkoe1xuICAgICAgICAgICAganNvbjogdHJ1ZVxuICAgICAgICB9LCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIHJlbW92ZShrZXksIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdGhpcy5fX2FwaShrZXksICcnLCB0aGlzLl9fZXh0ZW5kKGF0dHJpYnV0ZXMsIHtcbiAgICAgICAgICAgIGV4cGlyZXM6IC0xXG4gICAgICAgIH0pKTtcbiAgICB9XG59IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFppbWJydUNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBaaW1icnVDb2RlL01vZHVsZS9Qb3BVcFxuICpcbiAqIEBhdXRob3IgIEp1bmp1bGluaVxuICogQHBhY2thZ2UgWmltYnJ1Q29kZVxuICogQHNpbmNlICAgWmltYnJ1Q29kZSAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFRQTF9fcG9wdXAgZnJvbSAnLi90cGwvcG9wdXAuaHRtbCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcFVwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pZCA9IGB6Yy1wb3B1cC0ke3pjLnVuaXF1ZUlEKCl9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgcG9wdXBcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcFVwIFRpdGxlJyxcbiAgICAgICAgICAgIGFqYXg6ICcnLFxuICAgICAgICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdaaW1icnVDb2RlIDogUG9wVXAnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZWZvcmU6ICgpID0+IHt9LFxuICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge30sXG4gICAgICAgICAgICBhZnRlclNob3dDb250ZW50OiAoKSA9PiB7fSxcbiAgICAgICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgICAgIGhlaWdodDogJycsXG4gICAgICAgICAgICBodG1sOiAnJyxcbiAgICAgICAgICAgIGNsYXNzOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKSxcbiAgICAgICAgICAgICAgc3RydWN0dXJlID0gemMudHBsKFRQTF9fcG9wdXAsIHtcbiAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IHNldHRpbmdzLmNsYXNzLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IHNldHRpbmdzLnRpdGxlXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICAgICAkKCdib2R5JykuYXBwZW5kKHN0cnVjdHVyZSk7XG5cbiAgICAgICAgaWYgKCFzZXR0aW5ncy5odG1sKSB7XG4gICAgICAgICAgICB0aGlzLnNpemUoc2V0dGluZ3MuaGVpZ2h0LCBzZXR0aW5ncy53aWR0aCk7XG4gICAgICAgICAgICB6Yy5hamF4KHtcbiAgICAgICAgICAgICAgICBkYXRhOiBzZXR0aW5ncy5hamF4LFxuICAgICAgICAgICAgICAgIGJlZm9yZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5iZWZvcmUuY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogc2V0dGluZ3MuZXJyb3IsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5jb250ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ29udGVudChyZXNwb25zZS5jb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLnN1Y2Nlc3MuY2FsbCh0aGlzLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuYWZ0ZXJTaG93Q29udGVudC5jYWxsKHRoaXMsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2l6ZShzZXR0aW5ncy5oZWlnaHQsIHNldHRpbmdzLndpZHRoKTtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ29udGVudChzZXR0aW5ncy5odG1sKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcbiAgICAgICAgICAgIHNldHRpbmdzLnN1Y2Nlc3MuY2FsbCh0aGlzLCBzZXR0aW5ncy5odG1sKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoYCMke3RoaXMuaWR9YCkub24oJ2NsaWNrJywgJy56Yy1wb3B1cF9fY2xvc2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ21vdXNldXAgdG91Y2hzdGFydCcsIGAjJHt0aGlzLmlkfWAsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9wdXBXaW5kb3cgPSAkKCcuemMtcG9wdXBfX3dpbmRvdycpO1xuXG4gICAgICAgICAgICBpZiAoIXBvcHVwV2luZG93LmlzKGV2ZW50LnRhcmdldCkgJiYgcG9wdXBXaW5kb3cuaGFzKGV2ZW50LnRhcmdldCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjIHBvcHVwIHdpbmRvdyBzaXplXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHNpemUoaGVpZ2h0LCB3aWR0aCkge1xuICAgICAgICBoZWlnaHQgPSAodHlwZW9mIGhlaWdodCAhPT0gJ3VuZGVmaW5lZCcgfHwgaGVpZ2h0KSA/IGhlaWdodCA6IGZhbHNlO1xuICAgICAgICB3aWR0aCAgPSAodHlwZW9mIHdpZHRoICE9PSAndW5kZWZpbmVkJyB8fCB3aWR0aCkgPyB3aWR0aCA6IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHByaXYgPSB7XG4gICAgICAgICAgICBjYWxjU2l6ZSA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50LipydlxcOjExXFwuLykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX3dpbmRvd2ApLmNzcyh7J21heC13aWR0aCc6IGAke3dpZHRofXB4YCwgJ3dpZHRoJzogJzEwMCUnfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX3dpbmRvd2ApLmNzcyh7J21heC1oZWlnaHQnOiBgJHtoZWlnaHR9cHhgLCAnaGVpZ2h0JzogJzEwMCUnfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fd2luZG93YCkuY3NzKHsnbWF4LXdpZHRoJzogYCR7d2lkdGh9cHhgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX3dpbmRvd2ApLmNzcyh7J21heC1oZWlnaHQnOiBgJHtoZWlnaHR9cHhgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcHJpdi5jYWxjU2l6ZSgpO1xuXG4gICAgICAgICQod2luZG93KS5yZXNpemUoKCkgPT4ge1xuICAgICAgICAgICAgcHJpdi5jYWxjU2l6ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIGNvbnRlbnRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaGlkZUNvbnRlbnQoKSB7XG4gICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fY29udGVudGApLmhpZGUoKTtcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgY29udGVudFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzaG93Q29udGVudCgpIHtcbiAgICAgICAgdGhpcy5oaWRlTG9hZGluZygpO1xuICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX3dpbmRvdyAuemMtc2Nyb2xsYmFyYCkucmVtb3ZlQ2xhc3MoJ3pjLXBvcHVwX19vdmVyZmxvdy1oaWRkZW4nKTtcbiAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX19jb250ZW50YCkuc2hvdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgbG9hZGluZ1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBoaWRlTG9hZGluZygpIHtcbiAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX19sb2FkaW5nYCkuaGlkZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgbG9hZGluZ1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzaG93TG9hZGluZygpIHtcbiAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX19sb2FkaW5nYCkuc2hvdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVyYXNlIGNvbnRlbnRcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcmVtQ29udGVudCgpIHtcbiAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX19jb250ZW50YCkuZW1wdHkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmQgY29udGVudFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhcHBlbmRDb250ZW50KGNvbnRlbnQpIHtcbiAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX19jb250ZW50YCkuYXBwZW5kKGNvbnRlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNsb3NlKCkge1xuICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX3dpbmRvd2ApLmFkZENsYXNzKCd6Yy1wb3B1cF9fd2luZG93X2Nsb3NlJyk7XG4gICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fd2luZG93YCkub25lKCdhbmltYXRpb25lbmQgd2Via2l0QW5pbWF0aW9uRW5kIG9BbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICQoYCMke3RoaXMuaWR9IGApLmhpZGUoKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2luaXRpYWwnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBaaW1icnVDb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogWmltYnJ1Q29kZS9Nb2R1bGUvUG9wVXBcbiAqXG4gKiBAYXV0aG9yICBKdW5qdWxpbmlcbiAqIEBwYWNrYWdlIFppbWJydUNvZGVcbiAqIEBzaW5jZSAgIFppbWJydUNvZGUgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3RBUEkge1xuICAgIGNvbnN0cnVjdG9yKHVybCwgbm9uY2UpIHtcbiAgICAgICAgdGhpcy5yZXN0VVJMID0gdXJsO1xuICAgICAgICB0aGlzLnJlc3ROb25jZSA9IG5vbmNlO1xuICAgIH1cblxuICAgIGdldChwYXRoLCBkYXRhID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19hamF4KCdHRVQnLCBwYXRoLCBkYXRhKTtcbiAgICB9XG5cbiAgICBjcmVhdGUocGF0aCwgZGF0YSA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fYWpheCgnUE9TVCcsIHBhdGgsIGRhdGEpO1xuICAgIH1cblxuICAgIHVwZGF0ZShwYXRoLCBkYXRhID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19hamF4KCdQVVQnLCBwYXRoLCBkYXRhKTtcbiAgICB9XG5cbiAgICBkZWxldGUocGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2FqYXgoJ0RFTEVURScsIHBhdGgpO1xuICAgIH1cblxuICAgIHF1ZXJ5KHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdFVSTCArIHBhdGg7XG4gICAgfVxuXG4gICAgX19hamF4KG1ldGhvZCA9ICdHRVQnLCBwYXRoLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IHt9O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB1cmw6IHRoaXMucmVzdFVSTCArIHBhdGgsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdYLVdQLU5vbmNlJzogdGhpcy5yZXN0Tm9uY2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobWV0aG9kID09ICdQT1NUJyB8fCBtZXRob2QgPT0gJ1BVVCcpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucHJvY2Vzc0RhdGEgPSBmYWxzZTtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgICAgb3B0aW9ucy5jb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JztcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMuZXJyb3IgPSAoanFYSFIsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oY2FsbGJhY2tzLmZhaWwpKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLmZhaWwuY2FsbCh0aGlzLCBqcVhIUiwgdGV4dFN0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLnN1Y2Nlc3MgPSAocmVzcG9uc2UsIHRleHRTdGF0dXMsIGpxWEhSKSA9PiB7XG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKGNhbGxiYWNrcy5kb25lKSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5kb25lLmNhbGwodGhpcywgcmVzcG9uc2UsIHRleHRTdGF0dXMsIGpxWEhSKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IHpjLmFqYXgob3B0aW9ucyk7XG5cbiAgICAgICAgb3V0cHV0LmZhaWwgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5mYWlsID0gY2FsbGJhY2s7XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9O1xuXG4gICAgICAgIG91dHB1dC5kb25lID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFja3MuZG9uZSA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiIDxkaXYgaWQ9XFxcInt7aWR9fVxcXCIgY2xhc3M9XFxcInpjLXBvcHVwIHt7Y2xhc3N9fVxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLXBvcHVwX193aW5kb3dcXFwiPiA8aGVhZGVyIGNsYXNzPVxcXCJ6Yy1wb3B1cF9faGVhZGVyXFxcIj4gPHNwYW4gY2xhc3M9XFxcInpjLXBvcHVwX190aXRsZVxcXCI+e3t0aXRsZX19PC9zcGFuPiA8aSBjbGFzcz1cXFwiemMtcG9wdXBfX2Nsb3NlIHpjLWljb24tY2xlYXJcXFwiPjwvaT4gPC9oZWFkZXI+IDxkaXYgY2xhc3M9XFxcInpjLXNjcm9sbGJhciB6Yy1wb3B1cF9fb3ZlcmZsb3ctaGlkZGVuXFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtcG9wdXBfX2xvYWRpbmdcXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1sb2FkaW5nLXNwaW5uZXIgemMtcG9wdXBfX2xvYWRpbmctc3Bpbm5lclxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLWxvYWRpbmctc3Bpbm5lcl9fYm91bmNlIHpjLWxvYWRpbmctc3Bpbm5lcl9fYm91bmNlX21vZGVfMVxcXCI+PC9kaXY+IDxkaXYgY2xhc3M9XFxcInpjLWxvYWRpbmctc3Bpbm5lcl9fYm91bmNlIHpjLWxvYWRpbmctc3Bpbm5lcl9fYm91bmNlX21vZGVfMlxcXCI+PC9kaXY+IDxkaXYgY2xhc3M9XFxcInpjLWxvYWRpbmctc3Bpbm5lcl9fYm91bmNlIHpjLWxvYWRpbmctc3Bpbm5lcl9fYm91bmNlX21vZGVfM1xcXCI+PC9kaXY+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiemMtcG9wdXBfX2NvbnRlbnRcXFwiPjwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIgPGRpdiBjbGFzcz1cXFwiemMtYWxlcnRcXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1hbGVydF9fY29udGFpbmVyXFxcIj4gPHAgY2xhc3M9XFxcInpjLWFsZXJ0X190ZXh0XFxcIj57e3N1YmplY3R9fTwvcD4gPC9kaXY+IDxmb290ZXIgY2xhc3M9XFxcInpjLWFsZXJ0X19mb290ZXJcXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1hbGVydF9fY2VudGVyXFxcIj4gPGJ1dHRvbiBjbGFzcz1cXFwiemMtYWxlcnRfX2J1dHRvbiB6Yy1hbGVydF9fYnV0dG9uX3R5cGVfb2sgemMtYWxlcnRfX2J1dHRvbl9hY3RpdmVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+e3t0aXRsZV9va319PC9idXR0b24+IDwvZGl2PiA8L2Zvb3Rlcj48L2Rpdj4gXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIiA8ZGl2IGNsYXNzPVxcXCJ6Yy1jb25maXJtXFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtY29uZmlybV9fY29udGFpbmVyXFxcIj4gPHAgY2xhc3M9XFxcInpjLWNvbmZpcm1fX3RleHRcXFwiPnt7c3ViamVjdH19PC9wPiA8L2Rpdj4gPGZvb3RlciBjbGFzcz1cXFwiemMtY29uZmlybV9fZm9vdGVyXFxcIj4gPGJ1dHRvbiBjbGFzcz1cXFwiemMtY29uZmlybV9fYnV0dG9uIHpjLWNvbmZpcm1fX2J1dHRvbl90eXBlX29rIHpjLWNvbmZpcm1fX2J1dHRvbl9hY3RpdmVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+e3t0aXRsZV9va319PC9idXR0b24+IDxidXR0b24gY2xhc3M9XFxcInpjLWNvbmZpcm1fX2J1dHRvbiB6Yy1jb25maXJtX19idXR0b25fdHlwZV9jYW5jZWxcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+e3t0aXRsZV9jYW5jZWx9fTwvYnV0dG9uPiA8L2Zvb3Rlcj4gPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wcm9tcHRcXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wcm9tcHRfX2NvbnRhaW5lclxcXCI+IDxwIGNsYXNzPVxcXCJ6Yy1wcm9tcHRfX3RleHRcXFwiPnt7c3ViamVjdH19PC9wPiA8aW5wdXQgcGxhY2Vob2xkZXI9XFxcInt7cGxhY2Vob2xkZXJ9fVxcXCIgdmFsdWU9XFxcInt7ZGVmYXVsdH19XFxcIiBjbGFzcz1cXFwiemMtcHJvbXB0X19pbnB1dFxcXCI+IDwvZGl2PiA8Zm9vdGVyIGNsYXNzPVxcXCJ6Yy1wcm9tcHRfX2Zvb3RlclxcXCI+IDxidXR0b24gY2xhc3M9XFxcInpjLXByb21wdF9fYnV0dG9uIHpjLXByb21wdF9fYnV0dG9uX3R5cGVfb2sgemMtcHJvbXB0X19idXR0b25fYWN0aXZlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPnt7dGl0bGVfb2t9fTwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJ6Yy1wcm9tcHRfX2J1dHRvbiB6Yy1wcm9tcHRfX2J1dHRvbl90eXBlX2NhbmNlbFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj57e3RpdGxlX2NhbmNlbH19PC9idXR0b24+IDwvZm9vdGVyPiA8L2Rpdj5cIjsiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQVNBOzs7Ozs7O0FBUUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBTUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFPQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFpQkE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBc0JBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQW1CQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBNEJBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUFFQTs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7QUMvMkJBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7QUFRQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7QUFRQTtBQUNBOzs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBZUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFzQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TkE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUFTQTs7Ozs7OztBQVFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUxBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVGQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9