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
      this.initModuleData(name);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzb3VyY2VzL3BhY2thZ2VzL3ppbWJydWNvZGUvanF1ZXJ5LnppbWJydWNvZGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi9qcXVlcnkuemltYnJ1Y29kZS5lczYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi9tb2R1bGUvY29va2llLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZXMvcGFja2FnZXMvemltYnJ1Y29kZS9lczYvbW9kdWxlL3BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZXMvcGFja2FnZXMvemltYnJ1Y29kZS9lczYvbW9kdWxlL3Jlc3QtYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZXMvcGFja2FnZXMvemltYnJ1Y29kZS9lczYvbW9kdWxlL3RwbC9wb3B1cC5odG1sIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZXMvcGFja2FnZXMvemltYnJ1Y29kZS9lczYvdHBsL2FsZXJ0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlcy9wYWNrYWdlcy96aW1icnVjb2RlL2VzNi90cGwvY29uZmlybS5odG1sIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZXMvcGFja2FnZXMvemltYnJ1Y29kZS9lczYvdHBsL3Byb21wdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBaaW1icnVDb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogWmltYnJ1Q29kZSBmdW5jdGlvbnNcbiAqXG4gKiBAYXV0aG9yICBKdW5qdWxpbmlcbiAqIEBwYWNrYWdlIFppbWJydUNvZGVcbiAqIEBzaW5jZSAgIFppbWJydUNvZGUgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBQb3BVcCAgIGZyb20gJy4vbW9kdWxlL3BvcHVwJztcbmltcG9ydCBDb29raWUgIGZyb20gJy4vbW9kdWxlL2Nvb2tpZSc7XG5pbXBvcnQgUmVzdEFQSSBmcm9tICcuL21vZHVsZS9yZXN0LWFwaSc7XG5cbmltcG9ydCBUUExfX2NvbmZpcm0gZnJvbSAnLi90cGwvY29uZmlybS5odG1sJztcbmltcG9ydCBUUExfX3Byb21wdCAgZnJvbSAnLi90cGwvcHJvbXB0Lmh0bWwnO1xuaW1wb3J0IFRQTF9fYWxlcnQgICBmcm9tICcuL3RwbC9hbGVydC5odG1sJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuY2xhc3MgWmltYnJ1Q29kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIE1vZHVsZXMgb2JqZWN0c1xuICAgICAgICB0aGlzLm1vZHVsZSA9IHt9O1xuICAgICAgICBcbiAgICAgICAgLy8gTW9kdWxlIGRhdGFcbiAgICAgICAgdGhpcy5tb2R1bGVEYXRhID0ge307XG5cbiAgICAgICAgLy8gR2xvYmFsIGRhdGFcbiAgICAgICAgdGhpcy5nbG9iYWwgPSB7fTtcblxuICAgICAgICAvLyBGdW5jdGlvbiA6IENvb2tpZVxuICAgICAgICB0aGlzLmNvb2tpZSA9IG5ldyBDb29raWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIG1vZHVsZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRNb2R1bGUobmFtZSwgbW9kdWxlKSB7XG4gICAgICAgIHRoaXMuaW5pdE1vZHVsZURhdGEobmFtZSk7XG4gICAgICAgIHRoaXMubW9kdWxlW25hbWVdID0gbmV3IG1vZHVsZSgkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXphdGlvbiBtb2R1bGUgZGF0YVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBpbml0TW9kdWxlRGF0YShuYW1lKSB7XG4gICAgICAgIHRoaXMubW9kdWxlRGF0YVtuYW1lXSA9IHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBtb2R1bGUgZGF0YVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRNb2R1bGVEYXRhKG5hbWUsIGRhdGEgPSB7fSkge1xuICAgICAgICB0aGlzLm1vZHVsZURhdGFbbmFtZV0gPSBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBtb2R1bGUgZGF0YVxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGdldE1vZHVsZURhdGEobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGVEYXRhW25hbWVdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIHVuaXF1ZSBJRFxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHVuaXF1ZUlEKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjYpICsgRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEYXRhIHJlcGxhY2UgaW4gc3ViamVjdFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzdHJSZXBsYWNlKHNlYXJjaCwgcmVwbGFjZSwgc3ViamVjdCkge1xuICAgICAgICBsZXQgcmVnU3RyID0gJyc7XG5cbiAgICAgICAgc2VhcmNoLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGggLSAxID09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmVnU3RyICs9IGVsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWdTdHIgKz0gYCR7ZWx9fGA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzdWJqZWN0LnJlcGxhY2UobmV3IFJlZ0V4cChyZWdTdHIsICdnJyksIChtYXRjaCkgPT4ge1xuICAgICAgICAgICAgbGV0IG91dHB1dCA9ICcnO1xuXG4gICAgICAgICAgICBzZWFyY2guZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsID09IG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24ocmVwbGFjZVtpbmRleF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSByZXBsYWNlW2luZGV4XS5jYWxsKHRoaXMsIG1hdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IHJlcGxhY2VbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRlbXBsYXRlIGhhbmRsZXJcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHBsICBUZW1wbGF0ZSBIVE1MXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgRGF0YSBmb3IgcHJlcGFyaW5nIHRlbXBsYXRlXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgdHBsKHRwbCA9ICcnLCBkYXRhID0ge30pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0cGwgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgbGV0IHNlYXJjaCA9IFtdO1xuICAgICAgICAgICAgbGV0IHJlcGxhY2UgPSBbXTtcblxuICAgICAgICAgICAgJC5lYWNoKGRhdGEsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VhcmNoLnB1c2goYHt7JHtrZXl9fX1gKTtcbiAgICAgICAgICAgICAgICByZXBsYWNlLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0clJlcGxhY2Uoc2VhcmNoLCByZXBsYWNlLCB0cGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZXAgZmluZCBhbmQgc2V0dGluZ1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBkZWVwRmluZEFuZFNldHRpbmcob2JqLCBwYXRoLCB2YWx1ZSwgcmVtb3ZlID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHBhdGhzID0gcGF0aC5zcGxpdCgnLycpLCBjdXJyZW50ID0gb2JqLCBpO1xuXG4gICAgICAgIGlmIChyZW1vdmUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgaW4gcGF0aHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhdGhzLmxlbmd0aCAtIDEgPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFtwYXRoc1tpXV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50ID09PSB1bmRlZmluZWQgfHwgY3VycmVudFtwYXRoc1tpXV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRbcGF0aHNbaV1dID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnRbcGF0aHNbaV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudFtwYXRoc1tpXV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgaW4gcGF0aHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IHVuZGVmaW5lZCB8fCBjdXJyZW50W3BhdGhzW2ldXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnRbcGF0aHNbaV1dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gcGF0aHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudCA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnRbcGF0aHNbaV1dID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGF0aHMubGVuZ3RoIC0gMSA9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY3VycmVudFtwYXRoc1tpXV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudFtwYXRoc1tpXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpcyBtb2JpbGVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaXNNb2JpbGUoKSB7XG4gICAgICAgIGlmICgvaVAob2R8aG9uZXxhZCkvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9BbmRyb2lkL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIGlmICgvTW9iaWxlL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoL0lFTW9iaWxlL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvV2luZG93cyBQaG9uZS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL0JsYWNrQmVycnkvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9CQjEwL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLmFwcE5hbWUgPT09IFwiTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudE1vZGUgPj0gODtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSb3VuZFxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHJvdW5kKHZhbHVlLCBleHApIHtcbiAgICAgICAgaWYgKHR5cGVvZiBleHAgPT09ICd1bmRlZmluZWQnIHx8ICtleHAgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gK3ZhbHVlO1xuICAgICAgICBleHAgPSArZXhwO1xuICAgICAgICBcbiAgICAgICAgaWYgKGlzTmFOKHZhbHVlKSB8fCAhKHR5cGVvZiBleHAgPT09ICdudW1iZXInICYmIGV4cCAlIDEgPT09IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2hpZnRcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KCdlJyk7XG4gICAgICAgIHZhbHVlID0gTWF0aC5yb3VuZCgrKHZhbHVlWzBdICsgJ2UnICsgKHZhbHVlWzFdID8gKCt2YWx1ZVsxXSArIGV4cCkgOiBleHApKSk7XG4gICAgICAgIFxuICAgICAgICAvLyBTaGlmdCBiYWNrXG4gICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnZScpO1xuXG4gICAgICAgIHJldHVybiArKHZhbHVlWzBdICsgJ2UnICsgKHZhbHVlWzFdID8gKCt2YWx1ZVsxXSAtIGV4cCkgOiAtZXhwKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzaXplXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHJlc2l6ZShjYWxsYmFja1dpZHRoLCBjYWxsYmFja0hlaWdodCkge1xuICAgICAgICBsZXQgd2luZG93V2lkdGggID0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgICAgICB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7IFxuXG4gICAgICAgICQod2luZG93KS5yZXNpemUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoICE9IHdpbmRvd1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgICAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oY2FsbGJhY2tXaWR0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tXaWR0aC5jYWxsKHRoaXMsIHdpbmRvd1dpZHRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgIT0gd2luZG93SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihjYWxsYmFja0hlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tIZWlnaHQuY2FsbCh0aGlzLCB3aW5kb3dIZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvbmUgYW4gb2JqZWN0XG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY2xvbmUob2JqZWN0KSB7XG4gICAgICAgIHJldHVybiAkLmV4dGVuZCh0cnVlLCB7fSwgb2JqZWN0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSYW5kb20gc3RyaW5nXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcmFuZG9tQ29kZShsZW5ndGgpIHtcbiAgICAgICAgbGV0IGNoYXJzID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVoxMjM0NTY3ODkwJyxcbiAgICAgICAgICAgIHBhc3MgPSAnJztcblxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBsZXQgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYyKTtcbiAgICAgICAgICAgIHBhc3MgKz0gY2hhcnMuY2hhckF0KGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhc3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2UgZGF0YVxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHBhcnNlKGRhdGEsIHN0cmluZ2lmeSkge1xuICAgICAgICByZXR1cm4gKHN0cmluZ2lmeSA9PT0gdW5kZWZpbmVkKSA/IEpTT04ucGFyc2UoZGF0YSkgOiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBqc29uXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaXNKc29uKHN0cikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgSlNPTi5wYXJzZShzdHIpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdHJzdHJcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzdHJzdHIoaGF5c3RhY2ssIG5lZWRsZSwgYm9vbCkge1xuICAgICAgICBjb25zdCBwb3MgPSBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSk7XG5cbiAgICAgICAgaWYgKHBvcyA9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGJvb2wpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGF5c3RhY2suc3Vic3RyKDAsIHBvcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBoYXlzdGFjay5zbGljZShwb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FwaXRhbGl6ZSBmaXJzdCBsZXR0ZXJcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICB1Y2ZpcnN0KHN0ciwgZm9yY2UpIHtcbiAgICAgICAgc3RyID0gZm9yY2UgPyBzdHIudG9Mb3dlckNhc2UoKSA6IHN0ciB8fCAnJztcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxiKShbYS16QS1aXSkvLCAoZmlyc3RMZXR0ZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmaXJzdExldHRlci50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgb3IgdXBkYXRlIGEgcXVlcnkgc3RyaW5nIHBhcmFtZXRlciBpbiBVUkxcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1ldGVycyAgIFF1ZXJ5IHBhcmFtZXRlcnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsICAgICAgICAgIFVSTFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZFF1ZXJ5U3RyaW5nKHBhcmFtZXRlcnMgPSB7fSwgdXJsKSB7XG4gICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByaXYgPSB7fTtcbiAgICAgICAgcHJpdi5VUVMgPSAoa2V5LCB2YWx1ZSwgdXJsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZSA9IG5ldyBSZWdFeHAoXCIoWz8mXSlcIiArIGtleSArIFwiPS4qPygmfCN8JCkoLiopXCIsIFwiZ2lcIik7XG4gICAgICAgICAgICBsZXQgaGFzaDtcblxuICAgICAgICAgICAgaWYgKHJlLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cmwucmVwbGFjZShyZSwgJyQxJyArIGtleSArIFwiPVwiICsgdmFsdWUgKyAnJDIkMycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc2ggPSB1cmwuc3BsaXQoJyMnKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gaGFzaFswXS5yZXBsYWNlKHJlLCAnJDEkMycpLnJlcGxhY2UoLygmfFxcPykkLywgJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaGFzaFsxXSAhPT0gJ3VuZGVmaW5lZCcgJiYgaGFzaFsxXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcjJyArIGhhc2hbMV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gdXJsLmluZGV4T2YoJz8nKSAhPT0gLTEgPyAnJicgOiAnPyc7XG5cbiAgICAgICAgICAgICAgICAgICAgaGFzaCA9IHVybC5zcGxpdCgnIycpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBoYXNoWzBdICsgc2VwYXJhdG9yICsga2V5ICsgJz0nICsgdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBoYXNoWzFdICE9PSAndW5kZWZpbmVkJyAmJiBoYXNoWzFdICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJyMnICsgaGFzaFsxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgJC5lYWNoKHBhcmFtZXRlcnMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB1cmwgPSBwcml2LlVRUyhrZXksIHZhbHVlLCB1cmwpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgaW4gVVJMXG4gICAgICogXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtZXRlcnMgICBRdWVyeSBwYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgICAgICAgICBVUkxcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICByZW1vdmVRdWVyeVN0cmluZyhwYXJhbWV0ZXJzID0gW10sIHVybCkge1xuICAgICAgICBjb25zdCBwcml2ID0ge307XG5cbiAgICAgICAgcHJpdi5SUVMgPSAoa2V5LCB1cmwpID0+IHtcbiAgICAgICAgICAgIGxldCBydG4gPSB1cmwuc3BsaXQoXCI/XCIpWzBdO1xuICAgICAgICAgICAgbGV0IHBhcmFtO1xuICAgICAgICAgICAgbGV0IHBhcmFtc0FyciA9IFtdO1xuICAgICAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nID0gKHVybC5pbmRleE9mKFwiP1wiKSAhPT0gLTEpID8gdXJsLnNwbGl0KFwiP1wiKVsxXSA6ICcnO1xuXG4gICAgICAgICAgICBpZiAocXVlcnlTdHJpbmcgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zQXJyID0gcXVlcnlTdHJpbmcuc3BsaXQoXCImXCIpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHBhcmFtc0Fyci5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbSA9IHBhcmFtc0FycltpXS5zcGxpdChcIj1cIilbMF07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtc0Fyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBydG4gPSBydG4gKyBcIj9cIiArIHBhcmFtc0Fyci5qb2luKFwiJlwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJ0bjtcbiAgICAgICAgfTtcblxuICAgICAgICAkLmVhY2gocGFyYW1ldGVycywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHVybCA9IHByaXYuUlFTKHZhbHVlLCB1cmwpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFKQVhcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhamF4KHNldHRpbmdzKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICB1cmw6IGFqYXh1cmwsXG4gICAgICAgICAgICBkYXRhOiAnJyxcbiAgICAgICAgICAgIGJlZm9yZTogKCkgPT4ge30sXG4gICAgICAgICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignWmltYnJ1Q29kZSA6IEFqYXggRXJyb3InKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHt9XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGNoZWNrTiA9IDE7XG5cbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSAxMDAwO1xuICAgICAgICBjb25zdCBpdGVyYXRpb25zID0gNDtcblxuICAgICAgICBzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgc2V0dGluZ3MpO1xuXG4gICAgICAgIGNvbnN0IHByZXBhcmVkU2V0dGluZ3MgPSB0aGlzLmNsb25lKHNldHRpbmdzKTtcblxuICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmdzLmJlZm9yZSkpIHtcbiAgICAgICAgICAgIHByZXBhcmVkU2V0dGluZ3MuYmVmb3JlU2VuZCA9IHNldHRpbmdzLmJlZm9yZTtcbiAgICAgICAgICAgIGRlbGV0ZSBwcmVwYXJlZFNldHRpbmdzLmJlZm9yZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXBhcmVkU2V0dGluZ3Muc3VjY2VzcyA9IChyZXNwb25zZSwgdGV4dFN0YXR1cywganFYSFIpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSA8IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmdzLmVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5lcnJvci5jYWxsKHRoaXMsIGpxWEhSLCB0ZXh0U3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oc2V0dGluZ3Muc3VjY2VzcykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Muc3VjY2Vzcy5jYWxsKHRoaXMsIHJlc3BvbnNlLCB0ZXh0U3RhdHVzLCBqcVhIUik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHByZXBhcmVkU2V0dGluZ3MuZXJyb3IgPSAoanFYSFIsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgIGlmIChjaGVja04gPD0gaXRlcmF0aW9ucykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjaGVja04gKys7XG4gICAgICAgICAgICAgICAgICAgICQuYWpheChwcmVwYXJlZFNldHRpbmdzKTtcbiAgICAgICAgICAgICAgICB9LCBpbnRlcnZhbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oc2V0dGluZ3MuZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmVycm9yLmNhbGwodGhpcywganFYSFIsIHRleHRTdGF0dXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gJC5hamF4KHByZXBhcmVkU2V0dGluZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBvcFVwXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcG9wdXAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUG9wVXA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uZmlybSBQb3BVcFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjb25maXJtKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgcG9wdXAgPSB0aGlzLnBvcHVwKCk7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBzdWJqZWN0OiAndGVzdCcsXG4gICAgICAgICAgICBvazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FuY2VsOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXRsZTogJ0NvbmZpcm0nLFxuICAgICAgICAgICAgdGl0bGVPSzogJ09LJyxcbiAgICAgICAgICAgIHRpdGxlQ2FuY2VsOiAnQ2FuY2VsJyxcbiAgICAgICAgICAgIGh0bWw6ICcnLFxuICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICAgICAgY2xhc3M6ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHNldHRpbmdzID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKSxcbiAgICAgICAgICAgIGh0bWwgPSAnJztcblxuICAgICAgICBpZiAoc2V0dGluZ3MuaHRtbCkge1xuICAgICAgICAgICAgaHRtbCA9IHNldHRpbmdzLmh0bWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBodG1sID0gdGhpcy50cGwoVFBMX19jb25maXJtLCB7XG4gICAgICAgICAgICAgICAgc3ViamVjdDogc2V0dGluZ3Muc3ViamVjdCxcbiAgICAgICAgICAgICAgICB0aXRsZV9vazogc2V0dGluZ3MudGl0bGVPSyxcbiAgICAgICAgICAgICAgICB0aXRsZV9jYW5jZWw6IHNldHRpbmdzLnRpdGxlQ2FuY2VsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvcHVwLmFkZCh7XG4gICAgICAgICAgICB0aXRsZTogc2V0dGluZ3MudGl0bGUsXG4gICAgICAgICAgICBodG1sOiBodG1sLFxuICAgICAgICAgICAgd2lkdGg6IHNldHRpbmdzLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBzZXR0aW5ncy5oZWlnaHQsXG4gICAgICAgICAgICBjbGFzczogYHpjLXBvcHVwX25vLXBhZGRpbmcgemMtcG9wdXBfdHlwZV9jb25maXJtICR7c2V0dGluZ3MuY2xhc3N9YCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuemMtY29uZmlybScpLm9uKCdjbGljaycsICcuemMtY29uZmlybV9fYnV0dG9uX3R5cGVfb2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLm9rLmNhbGwodGhpcywgcG9wdXApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCgnLnpjLWNvbmZpcm0nKS5vbignY2xpY2snLCAnLnpjLWNvbmZpcm1fX2J1dHRvbl90eXBlX2NhbmNlbCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuY2FuY2VsLmNhbGwodGhpcywgcG9wdXApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9tcHQgUG9wVXBcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcHJvbXB0KG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgcG9wdXAgPSB0aGlzLnBvcHVwKCk7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBzdWJqZWN0OiAndGVzdCcsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0luc2VydCB5b3VyIHRleHQnLFxuICAgICAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgICAgICBvazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FuY2VsOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXRsZTogJ1Byb21wdCcsXG4gICAgICAgICAgICB0aXRsZU9LOiAnT0snLFxuICAgICAgICAgICAgdGl0bGVDYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgICAgICAgaHRtbDogJycsXG4gICAgICAgICAgICB3aWR0aDogNDAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICAgICAgICBjbGFzczogJydcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpLFxuICAgICAgICAgICAgaHRtbCA9ICcnO1xuXG4gICAgICAgIGlmIChzZXR0aW5ncy5odG1sKSB7XG4gICAgICAgICAgICBodG1sID0gc2V0dGluZ3MuaHRtbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGh0bWwgPSB0aGlzLnRwbChUUExfX3Byb21wdCwge1xuICAgICAgICAgICAgICAgIHN1YmplY3Q6IHNldHRpbmdzLnN1YmplY3QsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHNldHRpbmdzLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHNldHRpbmdzLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgdGl0bGVfb2s6IHNldHRpbmdzLnRpdGxlT0ssXG4gICAgICAgICAgICAgICAgdGl0bGVfY2FuY2VsOiBzZXR0aW5ncy50aXRsZUNhbmNlbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3B1cC5hZGQoe1xuICAgICAgICAgICAgdGl0bGU6IHNldHRpbmdzLnRpdGxlLFxuICAgICAgICAgICAgaHRtbDogaHRtbCxcbiAgICAgICAgICAgIHdpZHRoOiBzZXR0aW5ncy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogc2V0dGluZ3MuaGVpZ2h0LFxuICAgICAgICAgICAgY2xhc3M6IGB6Yy1wb3B1cF90eXBlX3Byb21wdCAke3NldHRpbmdzLmNsYXNzfWAsXG4gICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXByb21wdCcpLm9uKCdjbGljaycsICcuemMtcHJvbXB0X19idXR0b25fdHlwZV9vaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSAkKCcuemMtcHJvbXB0X19pbnB1dCcpLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5vay5jYWxsKHRoaXMsIHBvcHVwLCB0ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy56Yy1wcm9tcHRfX2lucHV0JykuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCgnLnpjLXByb21wdCcpLm9uKCdjbGljaycsICcuemMtcHJvbXB0X19idXR0b25fdHlwZV9jYW5jZWwnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmNhbmNlbC5jYWxsKHRoaXMsIHBvcHVwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxlcnQgUG9wVXBcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWxlcnQob3B0aW9ucykge1xuICAgICAgICBjb25zdCBwb3B1cCA9IHRoaXMucG9wdXAoKTtcblxuICAgICAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIHN1YmplY3Q6ICd0ZXN0JyxcbiAgICAgICAgICAgIG9rOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXRsZTogJ0FsZXJ0JyxcbiAgICAgICAgICAgIHRpdGxlT0s6ICdPSycsXG4gICAgICAgICAgICBodG1sOiAnJyxcbiAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgICAgIGNsYXNzOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyksXG4gICAgICAgICAgICBodG1sID0gJyc7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLmh0bWwpIHtcbiAgICAgICAgICAgIGh0bWwgPSBzZXR0aW5ncy5odG1sO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHRtbCA9IHRoaXMudHBsKFRQTF9fYWxlcnQsIHtcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBzZXR0aW5ncy5zdWJqZWN0LFxuICAgICAgICAgICAgICAgIHRpdGxlX29rOiBzZXR0aW5ncy50aXRsZU9LXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvcHVwLmFkZCh7XG4gICAgICAgICAgICB0aXRsZTogc2V0dGluZ3MudGl0bGUsXG4gICAgICAgICAgICBodG1sOiBodG1sLFxuICAgICAgICAgICAgd2lkdGg6IHNldHRpbmdzLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBzZXR0aW5ncy5oZWlnaHQsXG4gICAgICAgICAgICBjbGFzczogYHpjLXBvcHVwX3R5cGVfYWxlcnQgJHtzZXR0aW5ncy5jbGFzc31gLFxuICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy56Yy1hbGVydCcpLm9uKCdjbGljaycsICcuemMtYWxlcnRfX2J1dHRvbl90eXBlX29rJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5vay5jYWxsKHRoaXMsIHBvcHVwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzdCBBUElcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsICAgV29yZFByZXNzIHJlc3QgQVBJIFVSTFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBub25jZSBXb3JkUHJlc3MgWCBub25jZSBmb3IgUmVzdEFQSVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHJlc3RBUEkodXJsLCBub25jZSkge1xuICAgICAgICByZXR1cm4gbmV3IFJlc3RBUEkodXJsLCBub25jZSk7XG4gICAgfVxuXG4gICAgaW5wdXRSYW5nZShtb2RlLCBkYXRhID0ge30pIHtcbiAgICAgICAgaWYgKG1vZGUgJiYgZGF0YS5lbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBwcml2ID0ge307XG5cbiAgICAgICAgICAgIC8vIEhhcyBsaW5lIGJhY2tncm91bmRcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckxCQ2xhc3MgPSBkYXRhLmNvbnRhaW5lckxCQ2xhc3MgfHwgJyc7XG4gICAgICAgICAgICBwcml2Lmhhc0xCID0gZGF0YS5lbC5wYXJlbnQoKS5oYXNDbGFzcyhjb250YWluZXJMQkNsYXNzKTtcblxuICAgICAgICAgICAgLy8gQ3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgcHJpdi5jdXJyZW50VmFsdWUgPSBkYXRhLmVsLnZhbCgpO1xuXG4gICAgICAgICAgICAvLyBUcmFjayBwZXJjZW50XG4gICAgICAgICAgICBjb25zdCBtaW4gPSBkYXRhLnNldHRpbmdzLm1pbiB8fCAwO1xuICAgICAgICAgICAgY29uc3QgbWF4ID0gZGF0YS5zZXR0aW5ncy5tYXggfHwgMTAwO1xuXG4gICAgICAgICAgICBwcml2LnRyYWNrUGVyY2VudCA9ICgocHJpdi5jdXJyZW50VmFsdWUgLSBtaW4pICogMTAwKSAvIChtYXggLSBtaW4pO1xuXG4gICAgICAgICAgICAvLyBQb3N0Zml4XG4gICAgICAgICAgICBwcml2LnBvc3RmaXggPSBkYXRhLnNldHRpbmdzLnBvc3RmaXggfHwgJyc7XG5cbiAgICAgICAgICAgIC8vIEVsZW1lbnRzXG4gICAgICAgICAgICBjb25zdCBsZWZ0SW5kaWNhdG9yQ2xhc3MgICAgPSBkYXRhLmxlZnRJbmRpY2F0b3JDbGFzcyAgICB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbmRpY2F0b3JDbGFzcyA9IGRhdGEuY3VycmVudEluZGljYXRvckNsYXNzIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgcmlnaHRJbmRpY2F0b3JDbGFzcyAgID0gZGF0YS5yaWdodEluZGljYXRvckNsYXNzICAgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBncmlkQ29udGFpbmVyQ2xhc3MgICAgPSBkYXRhLmdyaWRDb250YWluZXJDbGFzcyAgICB8fCAnJztcblxuICAgICAgICAgICAgcHJpdi5sZWZ0SW5kaWNhdG9yICAgID0gKGxlZnRJbmRpY2F0b3JDbGFzcykgICAgPyBkYXRhLmVsLnBhcmVudCgpLmZpbmQoYC4ke2xlZnRJbmRpY2F0b3JDbGFzc31gKSAgICA6ICcnO1xuICAgICAgICAgICAgcHJpdi5jdXJyZW50SW5kaWNhdG9yID0gKGN1cnJlbnRJbmRpY2F0b3JDbGFzcykgPyBkYXRhLmVsLnBhcmVudCgpLmZpbmQoYC4ke2N1cnJlbnRJbmRpY2F0b3JDbGFzc31gKSA6ICcnO1xuICAgICAgICAgICAgcHJpdi5yaWdodEluZGljYXRvciAgID0gKHJpZ2h0SW5kaWNhdG9yQ2xhc3MpICAgPyBkYXRhLmVsLnBhcmVudCgpLmZpbmQoYC4ke3JpZ2h0SW5kaWNhdG9yQ2xhc3N9YCkgICA6ICcnO1xuICAgICAgICAgICAgcHJpdi5ncmlkQ29udGFpbmVyICAgID0gKGdyaWRDb250YWluZXJDbGFzcykgICAgPyBkYXRhLmVsLnBhcmVudCgpLmZpbmQoYC4ke2dyaWRDb250YWluZXJDbGFzc31gKSAgICA6ICcnO1xuXG4gICAgICAgICAgICAvLyBBZGQgdHJhY2sgcGVyY2VudFxuICAgICAgICAgICAgcHJpdi5hZGRUcmFja1BlcmNlbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFwcml2Lmhhc0xCKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZWwuY3NzKCdiYWNrZ3JvdW5kLXNpemUnLCBgJHtwcml2LnRyYWNrUGVyY2VudH0lIDEwMCVgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBTZXR1cCBpbmRpY2F0b3IgY3VycmVudFxuICAgICAgICAgICAgcHJpdi5pbmRpY2F0b3JDdXJyZW50ID0gKGNoYW5nZUN1cnJlbnRWYWx1ZSA9IGZhbHNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGlkZUZyb21UbyA9IGRhdGEuc2V0dGluZ3MuaGlkZV9mcm9tX3RvIHx8IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVGcm9tVG8gIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGh1bWJTaXplID0gKHByaXYuaGFzTEIpID8gMTcgOiAxNjtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhbmdlQ3VycmVudFZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2LmN1cnJlbnRJbmRpY2F0b3IudGV4dChwcml2LmN1cnJlbnRWYWx1ZSArIHByaXYucG9zdGZpeCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SW5kaWNhdG9yV2lkdGggPSBwcml2LmN1cnJlbnRJbmRpY2F0b3Iub3V0ZXJXaWR0aCgpIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGNQb3NpdGlvblN0eWxlICAgICA9IGBsZWZ0OiBjYWxjKCR7cHJpdi50cmFja1BlcmNlbnR9JSAtICR7KChjdXJyZW50SW5kaWNhdG9yV2lkdGggLSB0aHVtYlNpemUpIC8gMikgKyAocHJpdi50cmFja1BlcmNlbnQgLyAxMDApICogdGh1bWJTaXplfXB4KWA7IFxuXG4gICAgICAgICAgICAgICAgICAgIHByaXYuY3VycmVudEluZGljYXRvci5hdHRyKCdzdHlsZScsIGNhbGNQb3NpdGlvblN0eWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBTaG93L0hpZGUgaW5kaWNhdG9ycyA6IGxlZnQgJiByaWdodFxuICAgICAgICAgICAgcHJpdi5pbmRpY2F0b3JzU2hvd0hpZGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGlkZU1pbk1heCA9IGRhdGEuc2V0dGluZ3MuaGlkZV9taW5fbWF4IHx8IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVNaW5NYXggIT09IHRydWUgJiYgcHJpdi5jdXJyZW50SW5kaWNhdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgTEQgPSBwcml2LmxlZnRJbmRpY2F0b3IuZ2V0KDApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBDRCA9IHByaXYuY3VycmVudEluZGljYXRvci5nZXQoMCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFJEID0gcHJpdi5yaWdodEluZGljYXRvci5nZXQoMCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKExELnJpZ2h0ICsgMSA+IENELmxlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXYubGVmdEluZGljYXRvci5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2LmxlZnRJbmRpY2F0b3IuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKFJELmxlZnQgLSAxIDwgQ0QucmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXYucmlnaHRJbmRpY2F0b3IuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdi5yaWdodEluZGljYXRvci5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcHJpdi5jb3VudERlY2ltYWxzID0gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCh2YWx1ZSAlIDEpICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIE1vZGUgOiBJbml0XG4gICAgICAgICAgICBwcml2LmluaXRNb2RlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByaXYuaW5kaWNhdG9yQ3VycmVudCgpO1xuICAgICAgICAgICAgICAgIHByaXYuaW5kaWNhdG9yc1Nob3dIaWRlKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBNb2RlIDogTGl2ZVxuICAgICAgICAgICAgcHJpdi5saXZlTW9kZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcml2LmFkZFRyYWNrUGVyY2VudCgpO1xuICAgICAgICAgICAgICAgIHByaXYuaW5kaWNhdG9yQ3VycmVudCh0cnVlKTtcbiAgICAgICAgICAgICAgICBwcml2LmluZGljYXRvcnNTaG93SGlkZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gTW9kZSA6IENoYW5nZVxuICAgICAgICAgICAgcHJpdi5jaGFuZ2VNb2RlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhpZGVNaW5NYXggPSBkYXRhLnNldHRpbmdzLmhpZGVfbWluX21heCB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG93R3JpZCAgID0gZGF0YS5zZXR0aW5ncy5ncmlkIHx8IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXAgICAgICAgPSBkYXRhLnNldHRpbmdzLnN0ZXAgfHwgMTtcblxuICAgICAgICAgICAgICAgIGRhdGEuZWwuYXR0cignbWluJywgbWluKTtcbiAgICAgICAgICAgICAgICBkYXRhLmVsLmF0dHIoJ21heCcsIG1heCk7XG4gICAgICAgICAgICAgICAgZGF0YS5lbC5kYXRhKCdzZXR0aW5ncycsIGRhdGEuc2V0dGluZ3MpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVNaW5NYXggPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHByaXYubGVmdEluZGljYXRvci50ZXh0KG1pbiArIHByaXYucG9zdGZpeCk7XG4gICAgICAgICAgICAgICAgICAgIHByaXYucmlnaHRJbmRpY2F0b3IudGV4dChtYXggKyBwcml2LnBvc3RmaXgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzaG93R3JpZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWFyayA9IChtYXggLSBtaW4pIC8gNDtcblxuICAgICAgICAgICAgICAgICAgICBwcml2LmdyaWRDb250YWluZXIuZmluZCgnbGlbZGF0YS1uPTFdID4gc3BhbicpLnRleHQobWluKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpdi5ncmlkQ29udGFpbmVyLmZpbmQoJ2xpW2RhdGEtbj0yXSA+IHNwYW4nKS50ZXh0KHpjLnJvdW5kKG1hcmsgKyBtaW4sIHByaXYuY291bnREZWNpbWFscyhzdGVwKSkpO1xuICAgICAgICAgICAgICAgICAgICBwcml2LmdyaWRDb250YWluZXIuZmluZCgnbGlbZGF0YS1uPTNdID4gc3BhbicpLnRleHQoemMucm91bmQobWFyayAqIDIgKyBtaW4sIHByaXYuY291bnREZWNpbWFscyhzdGVwKSkpO1xuICAgICAgICAgICAgICAgICAgICBwcml2LmdyaWRDb250YWluZXIuZmluZCgnbGlbZGF0YS1uPTRdID4gc3BhbicpLnRleHQoemMucm91bmQobWFyayAqIDMgKyBtaW4sIHByaXYuY291bnREZWNpbWFscyhzdGVwKSkpO1xuICAgICAgICAgICAgICAgICAgICBwcml2LmdyaWRDb250YWluZXIuZmluZCgnbGlbZGF0YS1uPTVdID4gc3BhbicpLnRleHQobWF4KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwcml2LmFkZFRyYWNrUGVyY2VudCgpO1xuICAgICAgICAgICAgICAgIHByaXYuaW5kaWNhdG9yQ3VycmVudCh0cnVlKTtcbiAgICAgICAgICAgICAgICBwcml2LmluZGljYXRvcnNTaG93SGlkZSgpO1xuICAgICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2luaXQnOlxuICAgICAgICAgICAgICAgICAgICBwcml2LmluaXRNb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xpdmUnOlxuICAgICAgICAgICAgICAgICAgICBwcml2LmxpdmVNb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NoYW5nZSc6XG4gICAgICAgICAgICAgICAgICAgIHByaXYuY2hhbmdlTW9kZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gSW5pdGlhbGl6YXRpb24gb2YgY2xhc3MgOiBaaW1icnVDb2RlXG53aW5kb3cuemMgPSBuZXcgWmltYnJ1Q29kZSgpOyIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBaaW1icnVDb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogWmltYnJ1Q29kZS9Nb2R1bGUvQ29va2llXG4gKlxuICogQGF1dGhvciAgSnVuanVsaW5pXG4gKiBAcGFja2FnZSBaaW1icnVDb2RlXG4gKiBAc2luY2UgICBaaW1icnVDb2RlIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29raWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRlZmF1bHRzID0ge307XG4gICAgfVxuXG4gICAgX19leHRlbmQoLi4uYXJncykge1xuICAgICAgICBsZXQgaSA9IDAsIHJlc3VsdCA9IHt9O1xuXG4gICAgICAgIGZvciAoOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZXMgPSBhcmdzW2ldO1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgX19hcGkoa2V5LCB2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBsZXQgcmVzdWx0LCBjb252ZXJ0ZXIgPSAoKSA9PiB7fTtcblxuICAgICAgICAvLyBXcml0ZVxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSB0aGlzLl9fZXh0ZW5kKHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnLydcbiAgICAgICAgICAgIH0sIHRoaXMuZGVmYXVsdHMsIGF0dHJpYnV0ZXMpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMuZXhwaXJlcyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBleHBpcmVzID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBleHBpcmVzLnNldE1pbGxpc2Vjb25kcyhleHBpcmVzLmdldE1pbGxpc2Vjb25kcygpICsgYXR0cmlidXRlcy5leHBpcmVzICogODY0ZSs1KTtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmV4cGlyZXMgPSBleHBpcmVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHpjLnBhcnNlKHZhbHVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAoL15bXFx7XFxbXS8udGVzdChyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgICAgICAgIGlmICghY29udmVydGVyLndyaXRlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8M0F8M0N8M0V8M0R8MkZ8M0Z8NDB8NUJ8NUR8NUV8NjB8N0J8N0R8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gY29udmVydGVyLndyaXRlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpO1xuICAgICAgICAgICAga2V5ID0ga2V5LnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8NUV8NjB8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG4gICAgICAgICAgICBrZXkgPSBrZXkucmVwbGFjZSgvW1xcKFxcKV0vZywgZXNjYXBlKTtcblxuICAgICAgICAgICAgcmV0dXJuIChkb2N1bWVudC5jb29raWUgPSBbXG4gICAgICAgICAgICAgICAga2V5LCAnPScsIHZhbHVlLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuZXhwaXJlcyAmJiAnOyBleHBpcmVzPScgKyBhdHRyaWJ1dGVzLmV4cGlyZXMudG9VVENTdHJpbmcoKSwgLy8gdXNlIGV4cGlyZXMgYXR0cmlidXRlLCBtYXgtYWdlIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUVcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnBhdGggICAgJiYgJzsgcGF0aD0nICsgYXR0cmlidXRlcy5wYXRoLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuZG9tYWluICAmJiAnOyBkb21haW49JyArIGF0dHJpYnV0ZXMuZG9tYWluLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuc2VjdXJlID8gJzsgc2VjdXJlJyA6ICcnXG4gICAgICAgICAgICBdLmpvaW4oJycpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlYWRcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVG8gcHJldmVudCB0aGUgZm9yIGxvb3AgaW4gdGhlIGZpcnN0IHBsYWNlIGFzc2lnbiBhbiBlbXB0eSBhcnJheVxuICAgICAgICAvLyBpbiBjYXNlIHRoZXJlIGFyZSBubyBjb29raWVzIGF0IGFsbC4gQWxzbyBwcmV2ZW50cyBvZGQgcmVzdWx0IHdoZW5cbiAgICAgICAgLy8gY2FsbGluZyBcImdldCgpXCJcbiAgICAgICAgbGV0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXSxcbiAgICAgICAgICAgIHJkZWNvZGUgPSAvKCVbMC05QS1aXXsyfSkrL2csXG4gICAgICAgICAgICBpID0gMDtcblxuICAgICAgICBmb3IgKDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKSxcbiAgICAgICAgICAgICAgICBuYW1lID0gcGFydHNbMF0ucmVwbGFjZShyZGVjb2RlLCBkZWNvZGVVUklDb21wb25lbnQpLFxuICAgICAgICAgICAgICAgIGNvb2tpZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKTtcblxuICAgICAgICAgICAgaWYgKGNvb2tpZS5jaGFyQXQoMCkgPT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICBjb29raWUgPSBjb29raWUuc2xpY2UoMSwgLTEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvb2tpZSA9IGNvbnZlcnRlci5yZWFkID9cbiAgICAgICAgICAgICAgICAgICAgY29udmVydGVyLnJlYWQoY29va2llLCBuYW1lKSA6IGNvbnZlcnRlcihjb29raWUsIG5hbWUpIHx8XG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZS5yZXBsYWNlKHJkZWNvZGUsIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5qc29uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBjb29raWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IGNvb2tpZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBhZGQoa2V5LCB2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICB0aGlzLl9fYXBpKGtleSwgdmFsdWUsIGF0dHJpYnV0ZXMpO1xuICAgIH1cblxuICAgIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19hcGkoa2V5KTtcbiAgICB9XG5cbiAgICBnZXRKU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2FwaS5hcHBseSh7XG4gICAgICAgICAgICBqc29uOiB0cnVlXG4gICAgICAgIH0sIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKGtleSwgYXR0cmlidXRlcykge1xuICAgICAgICB0aGlzLl9fYXBpKGtleSwgJycsIHRoaXMuX19leHRlbmQoYXR0cmlidXRlcywge1xuICAgICAgICAgICAgZXhwaXJlczogLTFcbiAgICAgICAgfSkpO1xuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgWmltYnJ1Q29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFppbWJydUNvZGUvTW9kdWxlL1BvcFVwXG4gKlxuICogQGF1dGhvciAgSnVuanVsaW5pXG4gKiBAcGFja2FnZSBaaW1icnVDb2RlXG4gKiBAc2luY2UgICBaaW1icnVDb2RlIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgVFBMX19wb3B1cCBmcm9tICcuL3RwbC9wb3B1cC5odG1sJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wVXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlkID0gYHpjLXBvcHVwLSR7emMudW5pcXVlSUQoKX1gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBwb3B1cFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGQob3B0aW9ucykge1xuICAgICAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnUG9wVXAgVGl0bGUnLFxuICAgICAgICAgICAgYWpheDogJycsXG4gICAgICAgICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ppbWJydUNvZGUgOiBQb3BVcCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJlZm9yZTogKCkgPT4ge30sXG4gICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7fSxcbiAgICAgICAgICAgIGFmdGVyU2hvd0NvbnRlbnQ6ICgpID0+IHt9LFxuICAgICAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnJyxcbiAgICAgICAgICAgIGh0bWw6ICcnLFxuICAgICAgICAgICAgY2xhc3M6ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpLFxuICAgICAgICAgICAgICBzdHJ1Y3R1cmUgPSB6Yy50cGwoVFBMX19wb3B1cCwge1xuICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICAgICAgICBjbGFzczogc2V0dGluZ3MuY2xhc3MsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogc2V0dGluZ3MudGl0bGVcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQoc3RydWN0dXJlKTtcblxuICAgICAgICBpZiAoIXNldHRpbmdzLmh0bWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2l6ZShzZXR0aW5ncy5oZWlnaHQsIHNldHRpbmdzLndpZHRoKTtcbiAgICAgICAgICAgIHpjLmFqYXgoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHNldHRpbmdzLmFqYXgsXG4gICAgICAgICAgICAgICAgYmVmb3JlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmJlZm9yZS5jYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBzZXR0aW5ncy5lcnJvcixcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDb250ZW50KHJlc3BvbnNlLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Muc3VjY2Vzcy5jYWxsKHRoaXMsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5hZnRlclNob3dDb250ZW50LmNhbGwodGhpcywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaXplKHNldHRpbmdzLmhlaWdodCwgc2V0dGluZ3Mud2lkdGgpO1xuICAgICAgICAgICAgdGhpcy5hcHBlbmRDb250ZW50KHNldHRpbmdzLmh0bWwpO1xuICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudCgpO1xuICAgICAgICAgICAgc2V0dGluZ3Muc3VjY2Vzcy5jYWxsKHRoaXMsIHNldHRpbmdzLmh0bWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgJChgIyR7dGhpcy5pZH1gKS5vbignY2xpY2snLCAnLnpjLXBvcHVwX19jbG9zZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignbW91c2V1cCB0b3VjaHN0YXJ0JywgYCMke3RoaXMuaWR9YCwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3B1cFdpbmRvdyA9ICQoJy56Yy1wb3B1cF9fd2luZG93Jyk7XG5cbiAgICAgICAgICAgIGlmICghcG9wdXBXaW5kb3cuaXMoZXZlbnQudGFyZ2V0KSAmJiBwb3B1cFdpbmRvdy5oYXMoZXZlbnQudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGMgcG9wdXAgd2luZG93IHNpemVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgc2l6ZShoZWlnaHQsIHdpZHRoKSB7XG4gICAgICAgIGhlaWdodCA9ICh0eXBlb2YgaGVpZ2h0ICE9PSAndW5kZWZpbmVkJyB8fCBoZWlnaHQpID8gaGVpZ2h0IDogZmFsc2U7XG4gICAgICAgIHdpZHRoICA9ICh0eXBlb2Ygd2lkdGggIT09ICd1bmRlZmluZWQnIHx8IHdpZHRoKSA/IHdpZHRoIDogZmFsc2U7XG5cbiAgICAgICAgY29uc3QgcHJpdiA9IHtcbiAgICAgICAgICAgIGNhbGNTaXplIDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnQuKnJ2XFw6MTFcXC4vKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fd2luZG93YCkuY3NzKHsnbWF4LXdpZHRoJzogYCR7d2lkdGh9cHhgLCAnd2lkdGgnOiAnMTAwJSd9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fd2luZG93YCkuY3NzKHsnbWF4LWhlaWdodCc6IGAke2hlaWdodH1weGAsICdoZWlnaHQnOiAnMTAwJSd9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX193aW5kb3dgKS5jc3MoeydtYXgtd2lkdGgnOiBgJHt3aWR0aH1weGB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fd2luZG93YCkuY3NzKHsnbWF4LWhlaWdodCc6IGAke2hlaWdodH1weGB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBwcml2LmNhbGNTaXplKCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICAgICAgICBwcml2LmNhbGNTaXplKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgY29udGVudFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBoaWRlQ29udGVudCgpIHtcbiAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX19jb250ZW50YCkuaGlkZSgpO1xuICAgICAgICB0aGlzLnNob3dMb2FkaW5nKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBjb250ZW50XG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHNob3dDb250ZW50KCkge1xuICAgICAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fd2luZG93IC56Yy1zY3JvbGxiYXJgKS5yZW1vdmVDbGFzcygnemMtcG9wdXBfX292ZXJmbG93LWhpZGRlbicpO1xuICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX2NvbnRlbnRgKS5zaG93KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBsb2FkaW5nXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGhpZGVMb2FkaW5nKCkge1xuICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX2xvYWRpbmdgKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBsb2FkaW5nXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHNob3dMb2FkaW5nKCkge1xuICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX2xvYWRpbmdgKS5zaG93KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXJhc2UgY29udGVudFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICByZW1Db250ZW50KCkge1xuICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX2NvbnRlbnRgKS5lbXB0eSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGVuZCBjb250ZW50XG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFwcGVuZENvbnRlbnQoY29udGVudCkge1xuICAgICAgICAkKGAjJHt0aGlzLmlkfSAuemMtcG9wdXBfX2NvbnRlbnRgKS5hcHBlbmQoY29udGVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY2xvc2UoKSB7XG4gICAgICAgICQoYCMke3RoaXMuaWR9IC56Yy1wb3B1cF9fd2luZG93YCkuYWRkQ2xhc3MoJ3pjLXBvcHVwX193aW5kb3dfY2xvc2UnKTtcbiAgICAgICAgJChgIyR7dGhpcy5pZH0gLnpjLXBvcHVwX193aW5kb3dgKS5vbmUoJ2FuaW1hdGlvbmVuZCB3ZWJraXRBbmltYXRpb25FbmQgb0FuaW1hdGlvbkVuZCBNU0FuaW1hdGlvbkVuZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgJChgIyR7dGhpcy5pZH0gYCkuaGlkZSgpLnJlbW92ZSgpO1xuICAgICAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaW5pdGlhbCcpO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFppbWJydUNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBaaW1icnVDb2RlL01vZHVsZS9Qb3BVcFxuICpcbiAqIEBhdXRob3IgIEp1bmp1bGluaVxuICogQHBhY2thZ2UgWmltYnJ1Q29kZVxuICogQHNpbmNlICAgWmltYnJ1Q29kZSAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdEFQSSB7XG4gICAgY29uc3RydWN0b3IodXJsLCBub25jZSkge1xuICAgICAgICB0aGlzLnJlc3RVUkwgPSB1cmw7XG4gICAgICAgIHRoaXMucmVzdE5vbmNlID0gbm9uY2U7XG4gICAgfVxuXG4gICAgZ2V0KHBhdGgsIGRhdGEgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2FqYXgoJ0dFVCcsIHBhdGgsIGRhdGEpO1xuICAgIH1cblxuICAgIGNyZWF0ZShwYXRoLCBkYXRhID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19hamF4KCdQT1NUJywgcGF0aCwgZGF0YSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKHBhdGgsIGRhdGEgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2FqYXgoJ1BVVCcsIHBhdGgsIGRhdGEpO1xuICAgIH1cblxuICAgIGRlbGV0ZShwYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fYWpheCgnREVMRVRFJywgcGF0aCk7XG4gICAgfVxuXG4gICAgcXVlcnkocGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN0VVJMICsgcGF0aDtcbiAgICB9XG5cbiAgICBfX2FqYXgobWV0aG9kID0gJ0dFVCcsIHBhdGgsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0ge307XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHVybDogdGhpcy5yZXN0VVJMICsgcGF0aCxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ1gtV1AtTm9uY2UnOiB0aGlzLnJlc3ROb25jZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChtZXRob2QgPT0gJ1BPU1QnIHx8IG1ldGhvZCA9PSAnUFVUJykge1xuICAgICAgICAgICAgb3B0aW9ucy5wcm9jZXNzRGF0YSA9IGZhbHNlO1xuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgICAgICBvcHRpb25zLmNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9ucy5lcnJvciA9IChqcVhIUiwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihjYWxsYmFja3MuZmFpbCkpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MuZmFpbC5jYWxsKHRoaXMsIGpxWEhSLCB0ZXh0U3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMuc3VjY2VzcyA9IChyZXNwb25zZSwgdGV4dFN0YXR1cywganFYSFIpID0+IHtcbiAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oY2FsbGJhY2tzLmRvbmUpKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLmRvbmUuY2FsbCh0aGlzLCByZXNwb25zZSwgdGV4dFN0YXR1cywganFYSFIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gemMuYWpheChvcHRpb25zKTtcblxuICAgICAgICBvdXRwdXQuZmFpbCA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2tzLmZhaWwgPSBjYWxsYmFjaztcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgb3V0cHV0LmRvbmUgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5kb25lID0gY2FsbGJhY2s7XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gXCIgPGRpdiBpZD1cXFwie3tpZH19XFxcIiBjbGFzcz1cXFwiemMtcG9wdXAge3tjbGFzc319XFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtcG9wdXBfX3dpbmRvd1xcXCI+IDxoZWFkZXIgY2xhc3M9XFxcInpjLXBvcHVwX19oZWFkZXJcXFwiPiA8c3BhbiBjbGFzcz1cXFwiemMtcG9wdXBfX3RpdGxlXFxcIj57e3RpdGxlfX08L3NwYW4+IDxpIGNsYXNzPVxcXCJ6Yy1wb3B1cF9fY2xvc2UgemMtaWNvbi1jbGVhclxcXCI+PC9pPiA8L2hlYWRlcj4gPGRpdiBjbGFzcz1cXFwiemMtc2Nyb2xsYmFyIHpjLXBvcHVwX19vdmVyZmxvdy1oaWRkZW5cXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wb3B1cF9fbG9hZGluZ1xcXCI+IDxkaXYgY2xhc3M9XFxcInpjLWxvYWRpbmctc3Bpbm5lciB6Yy1wb3B1cF9fbG9hZGluZy1zcGlubmVyXFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2UgemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2VfbW9kZV8xXFxcIj48L2Rpdj4gPGRpdiBjbGFzcz1cXFwiemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2UgemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2VfbW9kZV8yXFxcIj48L2Rpdj4gPGRpdiBjbGFzcz1cXFwiemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2UgemMtbG9hZGluZy1zcGlubmVyX19ib3VuY2VfbW9kZV8zXFxcIj48L2Rpdj4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wb3B1cF9fY29udGVudFxcXCI+PC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIiA8ZGl2IGNsYXNzPVxcXCJ6Yy1hbGVydFxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLWFsZXJ0X19jb250YWluZXJcXFwiPiA8cCBjbGFzcz1cXFwiemMtYWxlcnRfX3RleHRcXFwiPnt7c3ViamVjdH19PC9wPiA8L2Rpdj4gPGZvb3RlciBjbGFzcz1cXFwiemMtYWxlcnRfX2Zvb3RlclxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLWFsZXJ0X19jZW50ZXJcXFwiPiA8YnV0dG9uIGNsYXNzPVxcXCJ6Yy1hbGVydF9fYnV0dG9uIHpjLWFsZXJ0X19idXR0b25fdHlwZV9vayB6Yy1hbGVydF9fYnV0dG9uX2FjdGl2ZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj57e3RpdGxlX29rfX08L2J1dHRvbj4gPC9kaXY+IDwvZm9vdGVyPjwvZGl2PiBcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiIDxkaXYgY2xhc3M9XFxcInpjLWNvbmZpcm1cXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1jb25maXJtX19jb250YWluZXJcXFwiPiA8cCBjbGFzcz1cXFwiemMtY29uZmlybV9fdGV4dFxcXCI+e3tzdWJqZWN0fX08L3A+IDwvZGl2PiA8Zm9vdGVyIGNsYXNzPVxcXCJ6Yy1jb25maXJtX19mb290ZXJcXFwiPiA8YnV0dG9uIGNsYXNzPVxcXCJ6Yy1jb25maXJtX19idXR0b24gemMtY29uZmlybV9fYnV0dG9uX3R5cGVfb2sgemMtY29uZmlybV9fYnV0dG9uX2FjdGl2ZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj57e3RpdGxlX29rfX08L2J1dHRvbj4gPGJ1dHRvbiBjbGFzcz1cXFwiemMtY29uZmlybV9fYnV0dG9uIHpjLWNvbmZpcm1fX2J1dHRvbl90eXBlX2NhbmNlbFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj57e3RpdGxlX2NhbmNlbH19PC9idXR0b24+IDwvZm9vdGVyPiA8L2Rpdj5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiIDxkaXYgY2xhc3M9XFxcInpjLXByb21wdFxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLXByb21wdF9fY29udGFpbmVyXFxcIj4gPHAgY2xhc3M9XFxcInpjLXByb21wdF9fdGV4dFxcXCI+e3tzdWJqZWN0fX08L3A+IDxpbnB1dCBwbGFjZWhvbGRlcj1cXFwie3twbGFjZWhvbGRlcn19XFxcIiB2YWx1ZT1cXFwie3tkZWZhdWx0fX1cXFwiIGNsYXNzPVxcXCJ6Yy1wcm9tcHRfX2lucHV0XFxcIj4gPC9kaXY+IDxmb290ZXIgY2xhc3M9XFxcInpjLXByb21wdF9fZm9vdGVyXFxcIj4gPGJ1dHRvbiBjbGFzcz1cXFwiemMtcHJvbXB0X19idXR0b24gemMtcHJvbXB0X19idXR0b25fdHlwZV9vayB6Yy1wcm9tcHRfX2J1dHRvbl9hY3RpdmVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+e3t0aXRsZV9va319PC9idXR0b24+IDxidXR0b24gY2xhc3M9XFxcInpjLXByb21wdF9fYnV0dG9uIHpjLXByb21wdF9fYnV0dG9uX3R5cGVfY2FuY2VsXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPnt7dGl0bGVfY2FuY2VsfX08L2J1dHRvbj4gPC9mb290ZXI+IDwvZGl2PlwiOyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFpQkE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBc0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQW1CQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBNEJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7O0FDLzJCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBZUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFzQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdE5BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUxBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVGQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9