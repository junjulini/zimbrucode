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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Module/Panel/Resources/assets/js/es6/jquery.panel.es6.js":
/*!**********************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/jquery.panel.es6.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/base */ "./src/Module/Panel/Resources/assets/js/es6/module/base.js");
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */



zc.addModule('panel', function ($) {
  var panel = new _module_base__WEBPACK_IMPORTED_MODULE_0__["default"](); // After loading page

  $(function () {
    try {
      if (panel.mode === undefined) {
        throw 'panel.mode is undefined';
      }

      if (!$.isFunction(panel.mode)) {
        throw 'panel.mode is not function';
      }

      panel.checkBrowserCompatibility();
      new panel.mode($, panel);
    } catch (error) {
      if ($('.zc-panel-template').length > 0) {
        $('.zc-panel-template').empty().append("<div class=\"error notice\"><p><b>".concat(panel.getVar('browser-error-title'), "</b> : ").concat(error, "</p></div>"));
      } else {
        $('#wpbody-content').prepend("<div class=\"error notice\"><p><b>".concat(panel.getVar('browser-error-title'), "</b> : ").concat(error, "</p></div>"));
        alert("".concat(panel.getVar('browser-error-title'), " : ").concat(error));
      }
    }
  }); // ############# PUBLIC METHODS #############

  return {
    // Add control
    addControl: function addControl(callback) {
      var scripts = document.getElementsByTagName('script'),
          scriptLocation = scripts[scripts.length - 1].src,
          dataH = scriptLocation.split('/'),
          controlName = dataH[dataH.length - 5];
      var controlVars = panel.getVar('controls')[controlName];
      panel.service('callback').add('control', callback, controlVars);
    },
    // Add mode
    addMode: function addMode(callback) {
      panel.mode = callback;
    }
  };
});

/***/ }),

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/base.js":
/*!*****************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/base.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kernel */ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js");
/* harmony import */ var _close_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./close-block */ "./src/Module/Panel/Resources/assets/js/es6/module/close-block.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./callback */ "./src/Module/Panel/Resources/assets/js/es6/module/callback.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/Module/Panel/Resources/assets/js/es6/module/menu.js");
/* harmony import */ var _condition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./condition */ "./src/Module/Panel/Resources/assets/js/es6/module/condition.js");
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module : Base
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var $ = jQuery;

var Base = /*#__PURE__*/function (_Kernel) {
  _inherits(Base, _Kernel);

  var _super = _createSuper(Base);

  function Base() {
    var _this;

    _classCallCheck(this, Base);

    _this = _super.call(this); // Global cache

    _this.global.cache = {
      changed: false,
      services: {}
    }; // Global config

    _this.global.config = {
      // Right margin
      'right-margin': {
        desktop: 20,
        mobile: 10
      },
      'bottom-margin': 42,
      'footer-height': 56,
      // Height of footer
      'header-height': 56,
      // Height of header
      'height-FAH': 112,
      // Height of footer & header
      'wp-body-height': 0,
      // Wp body height
      'min-size': {
        'body-height': 500,
        // Min panel body height
        mode1: 490,
        mode2: 950
      },
      'wp-admin-bar-height': 32
    }; // Global vars

    _this.global.vars = zcPanelVars; // Add service : Callback

    _this.service('callback', new _callback__WEBPACK_IMPORTED_MODULE_2__["default"]());

    return _this;
  }

  _createClass(Base, [{
    key: "checkBrowserCompatibility",
    value: function checkBrowserCompatibility() {
      try {
        new IntersectionObserver(function (a) {});
        new ResizeObserver(function (a) {});
      } catch (error) {
        throw this.getVar('browser-error-subject');
      }
    }
    /**
     * Panel menu
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "menu",
    value: function menu() {
      this.service('menu', new _menu__WEBPACK_IMPORTED_MODULE_3__["default"]());
    }
    /**
     * Panel : Init callback of close block.
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "closeBlock",
    value: function closeBlock() {
      this.service('close-block', new _close_block__WEBPACK_IMPORTED_MODULE_1__["default"]());
    }
    /**
     * Panel scroll bar
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "scrollbar",
    value: function scrollbar() {
      if (!zc.isMobile() && navigator.userAgent.indexOf('Firefox') == -1) {
        var priv = {};

        priv.checkIfActive = function (parent, children) {
          var parentHeight = parent.outerHeight(true);
          var childrenHeight = children.outerHeight(true);

          if (parentHeight > 0) {
            if (childrenHeight > parentHeight) {
              parent.addClass('zc-scrollbar_active');
            } else {
              parent.removeClass('zc-scrollbar_active');
            }
          }
        };

        priv.ro = new ResizeObserver(function (entries) {
          if (entries[0] !== undefined) {
            entries.forEach(function (entry) {
              priv.checkIfActive($(entry.target).parent(), $(entry.target));
            });
          }
        });
        $('.zc-panel .zc-scrollbar').each(function (index, el) {
          priv.ro.observe($(el).children().first().get(0));
        });
        $(window).on('zc/panel/size-changed', function () {
          $('.zc-panel .zc-scrollbar').each(function (index, el) {
            priv.checkIfActive($(el), $(el).children().first());
          });
        });
      }
    }
    /**
     * Change meta viewport if mobile
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "noMetaScaleIfMobile",
    value: function noMetaScaleIfMobile() {
      if (zc.isMobile()) {
        $('head meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
      }
    }
    /**
     * Panel condition checker.
     * 
     * @type  {Object}
     * @since 1.0.0
     */

  }, {
    key: "condition",
    value: function condition() {
      new _condition__WEBPACK_IMPORTED_MODULE_4__["default"](this);
    }
    /**
     * If some changes was made
     * 
     * @return {string} Message
     * @since 1.0.0
     */

  }, {
    key: "ifChanged",
    value: function ifChanged() {
      var _this2 = this;

      $(window).on('beforeunload.zc-panel', function () {
        if (_this2.getCache('changed')) {
          return _this2.getVar('if-changed');
        }
      });
    }
    /**
     * Control help
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "controlHelp",
    value: function controlHelp() {
      var defaults = {
        width: 600,
        height: 250
      };
      this.click('.zc-panel-help__starter_type_simple', function ($this) {
        var settings = $this.data('settings');
        if (settings === undefined || settings === '' || settings == null) settings = {};
        defaults.title = $this.attr('title');
        defaults.html = $this.parent().find('.zc-panel-help__content').text();
        zc.popup().add($.extend({}, defaults, settings));
      });
    }
    /**
     * Controls initialization
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "controlInit",
    value: function controlInit() {
      this.service('callback').run('control', $, this);
    }
    /**
     * Tooltip
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "tooltip",
    value: function tooltip() {
      if (zc.isMobile() === false) {
        $('.zc-panel [data-tooltip]').tipsy({
          title: 'data-tooltip',
          gravity: function gravity() {
            var position = $(this).data('tooltip-position');

            if (position) {
              switch (position) {
                case 'top':
                  return 's';
                  break;

                case 'right':
                  return 'w';
                  break;

                case 'bottom':
                  return 'n';
                  break;

                case 'left':
                  return 'e';
                  break;

                default:
                  return 'n';
                  break;
              }
            } else {
              return 'n';
            }
          },
          on: true,
          offset: 3,
          opacity: 1
        });
      }
    }
  }]);

  return Base;
}(_kernel__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/callback.js":
/*!*********************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/callback.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Callback; });
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module : Callback
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var $ = jQuery;

var Callback = /*#__PURE__*/function () {
  function Callback() {
    _classCallCheck(this, Callback);

    this.callback = {};
  }
  /**
   * Add panel callback
   * 
   * @return {null} None
   * @since 1.0.0
   */


  _createClass(Callback, [{
    key: "add",
    value: function add(name, callback, additional) {
      if ($.isFunction(callback)) {
        if (this.callback[name] === undefined) {
          this.callback[name] = [];
        }

        this.callback[name].push({
          callback: callback,
          additional: additional
        });
      }
    }
    /**
    * Run panel callback
    * 
    * @return {null} None
    * @since 1.0.0
    */

  }, {
    key: "run",
    value: function run(name) {
      if (name !== undefined && name !== '') {
        var args = [].slice.apply(arguments);
        args.shift();

        if (this.callback[name] !== undefined) {
          for (var i in this.callback[name]) {
            var pArgs = $.extend(true, [], args);

            if (this.callback[name][i].additional !== undefined) {
              pArgs.push(this.callback[name][i].additional);
            }

            this.callback[name][i].callback.apply(this, pArgs);
          }

          ;
        }
      }
    }
  }]);

  return Callback;
}();



/***/ }),

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/close-block.js":
/*!************************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/close-block.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CloseBlock; });
/* harmony import */ var _kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kernel */ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js");
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module : CloseBlock
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var $ = jQuery;

var CloseBlock = /*#__PURE__*/function (_Kernel) {
  _inherits(CloseBlock, _Kernel);

  var _super = _createSuper(CloseBlock);

  function CloseBlock() {
    var _this;

    _classCallCheck(this, CloseBlock);

    _this = _super.call(this);
    _this.isOpen = 0;

    _this.click('.zc-panel-controls__close-block', function () {
      $(window).trigger('zc/close-block');
    });

    $(window).on('zc/close-block/show', function () {
      _this.show();
    });
    $(window).on('zc/close-block/hide', function () {
      _this.hide();
    });
    $(window).on('zc/close-block/hide-definitely', function () {
      _this.hideDefinitely();
    });
    return _this;
  }
  /**
   * Show close block
   * 
   * @return {null} None
   * @since 1.0.0
   */


  _createClass(CloseBlock, [{
    key: "show",
    value: function show() {
      $('.zc-panel-controls__close-block').addClass('zc-panel-controls__close-block_active');
      this.isOpen++;
    }
    /**
     * Hide close block
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "hide",
    value: function hide() {
      if (this.isOpen === 1) {
        $('.zc-panel-controls__close-block').removeClass('zc-panel-controls__close-block_active');
        this.isOpen = 0;
      } else {
        this.isOpen--;

        if (this.isOpen < 0) {
          this.isOpen = 0;
        }
      }
    }
    /**
     * Hide block definitely
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "hideDefinitely",
    value: function hideDefinitely() {
      $('.zc-panel-controls__close-block').removeClass('zc-panel-controls__close-block_active');
      this.isOpen = 0;
      $(window).trigger('zc/close-block');
    }
  }]);

  return CloseBlock;
}(_kernel__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/condition.js":
/*!**********************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/condition.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Condition; });
/* harmony import */ var _kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kernel */ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js");
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module : Condition
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var $ = jQuery;

var Condition = /*#__PURE__*/function (_Kernel) {
  _inherits(Condition, _Kernel);

  var _super = _createSuper(Condition);

  function Condition() {
    var _this;

    _classCallCheck(this, Condition);

    _this = _super.call(this);
    _this.cache = {};
    _this.regex = /(.+?):(notEmpty|empty|is|not|contains|<|<=|>|>=)\((.*?)\),?/g;

    _this.firstStart();

    _this.dataCaching();

    _this.onChange();

    return _this;
  }
  /**
   * Initial parsing
   * 
   * @return {null} None
   * @since 1.0.0
   */


  _createClass(Condition, [{
    key: "firstStart",
    value: function firstStart() {
      var _this2 = this;

      $(window).on('zc/panel/menu/item-change-ICP', function (event, section) {
        if (section) {
          section.find('[data-condition]').each(function (index, el) {
            _this2.parse($(el), true);
          });
        }
      });
    }
  }, {
    key: "onChange",
    value: function onChange() {
      var _this3 = this;

      $('.zc-panel .zc-panel-controls').on('change', '[data-option]', function (event) {
        event.preventDefault();
        event.stopPropagation();
        /* Act on the event */

        var $this = $(event.currentTarget);
        var name = $this.attr('name') || '';
        name = name.replace('[]', '');

        if (_this3.cache[name] !== undefined) {
          $.each(_this3.cache[name], function (index, el) {
            _this3.parse(el);
          });
        }

        if ($this.data('i') === undefined) {
          _this3.addCache('changed', true);

          $(window).trigger('zc/panel/if-changed');
        }

        return false;
      });
    }
    /**
     * Cache data
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "dataCaching",
    value: function dataCaching() {
      var _this4 = this;

      $('.zc-panel .zc-panel-controls [data-condition]').each(function (index, el) {
        var match;

        while (match = _this4.regex.exec($(el).data('condition'))) {
          var key = _this4.getVar('prefix-slug') + match[1];

          if (_this4.cache[key] === undefined) {
            _this4.cache[key] = [];
          }

          _this4.cache[key].push($(el));
        }
      });
    }
    /**
     * Parse by conditions
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "parse",
    value: function parse(control, direct) {
      var _this5 = this;

      var passed,
          conditions = this.prepConditions(control.data('condition')),
          operator = (control.data('condition-operator') || 'and').toLowerCase();
      $.each(conditions, function (index, condition) {
        var status = false;
        var target = $(".zc-panel .zc-panel-controls [name=".concat(_this5.getVar('prefix-slug')).concat(condition.check, "]"));

        if (target.length > 0 && target.is('[data-option]')) {
          status = true;
        } else {
          target = $(".zc-panel .zc-panel-controls [id=".concat(_this5.getVar('prefix-slug')).concat(condition.check, "]"));

          if (target.length > 0 && target.is('[data-option]')) {
            status = true;
          }
        }

        if (status === true) {
          var v1 = target.val() !== null ? target.val().toString() : '';
          var v2 = condition.value.toString();
          var result;

          switch (condition.rule) {
            case '<':
              result = parseInt(v1) < parseInt(v2);
              break;

            case '<=':
              result = parseInt(v1) <= parseInt(v2);
              break;

            case '>':
              result = parseInt(v1) > parseInt(v2);
              break;

            case '>=':
              result = parseInt(v1) >= parseInt(v2);
              break;

            case 'contains':
              result = v1.indexOf(v2) !== -1 ? true : false;
              break;

            case 'is':
              result = v1 == v2;
              break;

            case 'not':
              result = v1 != v2;
              break;

            case 'notEmpty':
              result = v1 ? true : false;
              break;

            case 'empty':
              result = !v1 ? true : false;
              break;
          }

          if ('undefined' == typeof passed) {
            passed = result;
          }

          switch (operator) {
            case 'or':
              passed = passed || result;
              break;

            case 'and':
            default:
              passed = passed && result;
              break;
          }
        }
      });

      if (direct && direct !== undefined) {
        if (passed) {
          control.addClass('zc-panel-controls__item_show');
          control.data('condition-show', true);
        } else {
          control.addClass('zc-panel-controls__item_hide');
          control.data('condition-show', false);
        }
      } else {
        if (passed) {
          if (control.data('condition-show') !== true) {
            control.removeClass('zc-panel-controls__item_hide');
            control.addClass('zc-panel-controls__item_show');
            control.data('condition-show', true);
          }
        } else {
          if (control.data('condition-show') !== false) {
            control.removeClass('zc-panel-controls__item_show');
            control.addClass('zc-panel-controls__item_hide');
            control.data('condition-show', false);
          }
        }
      }

      passed = undefined;
    }
    /**
     * Preparing conditions
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "prepConditions",
    value: function prepConditions(condition) {
      var match,
          conditions = [];

      while (match = this.regex.exec(condition)) {
        conditions.push({
          'check': match[1],
          'rule': match[2],
          'value': match[3] || ''
        });
      }

      return conditions;
    }
  }]);

  return Condition;
}(_kernel__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js":
/*!*******************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/kernel.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Kernel; });
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module : Kernel
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

var Kernel = /*#__PURE__*/function () {
  function Kernel() {
    _classCallCheck(this, Kernel);

    this.global = zc.getModuleData('panel');
  }
  /**
   * Panel scroll bar top
   * 
   * @return {null} None
   * @since 1.0.0
   */


  _createClass(Kernel, [{
    key: "scrollbarTop",
    value: function scrollbarTop() {
      $('.zc-panel .zc-scrollbar').scrollTop(0);
    }
    /**
     * Calculate panel height
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "calcHeight",
    value: function calcHeight() {
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

  }, {
    key: "eraseMobileMenu",
    value: function eraseMobileMenu() {
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

  }, {
    key: "isDesktopMode",
    value: function isDesktopMode() {
      return $('.zc-panel').width() >= this.getConfig('min-size/mode2');
    }
    /**
    * Error check, in AJAX or other
    * 
    * @return {null} None
    * @since 1.0.0
    */

  }, {
    key: "errorCheck",
    value: function errorCheck(msg, jqXHR) {
      if (!$('.zc-popup').hasClass('zc-panel-error-confirm')) {
        if ($('.zc-popup').length) {
          $('.zc-popup').remove();
        }

        console.error(msg);
        zc.confirm({
          title: "Error - ".concat(jqXHR.statusText, " : ").concat(jqXHR.status),
          subject: "".concat(msg, " Page will be reloaded, ok?"),
          "class": 'zc-panel-error-confirm',
          ok: function ok() {
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

  }, {
    key: "getVar",
    value: function getVar(key, def) {
      var result = zc.deepFindAndSetting(this.global.vars, key);

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

  }, {
    key: "addVar",
    value: function addVar(key, data) {
      zc.deepFindAndSetting(this.global.vars, key, data);
    }
    /**
     * Add global cache value
     * 
     * @param {string} key   Key/Path
     * @param {mix}    data  Cache value
     * @since 1.0.0
     */

  }, {
    key: "addCache",
    value: function addCache(key, data) {
      zc.deepFindAndSetting(this.global.cache, key, data);
    }
    /**
     * Get global cache
     * 
     * @param {string} key   Key/Path
     * @param {mix}    def   If not found, return "def"
     * @since 1.0.0
     */

  }, {
    key: "getCache",
    value: function getCache(key, def) {
      var result = zc.deepFindAndSetting(this.global.cache, key);

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

  }, {
    key: "remCache",
    value: function remCache(key) {
      zc.deepFindAndSetting(this.global.cache, key, false, true);
    }
    /**
     * Add global config value
     * 
     * @param {string} key   Key/Path
     * @param {mix}    data  Config value
     * @since 1.0.0
     */

  }, {
    key: "addConfig",
    value: function addConfig(key, data) {
      zc.deepFindAndSetting(this.global.config, key, data);
    }
    /**
     * Get global config
     * 
     * @param {string} key   Key/Path
     * @param {mix}    def   If not found, return "def"
     * @since 1.0.0
     */

  }, {
    key: "getConfig",
    value: function getConfig(key, def) {
      var result = zc.deepFindAndSetting(this.global.config, key);

      if (result !== undefined) {
        return result;
      } else {
        return def;
      }
    }
  }, {
    key: "service",
    value: function service(name, callback) {
      if (name !== undefined && typeof name === 'string') {
        if ($.isFunction(callback) || _typeof(callback) === 'object') {
          this.addCache("services/".concat(name), callback);
        } else {
          var service = this.getCache("services/".concat(name), false);

          if (service !== undefined) {
            return service;
          } else {
            throw new Error("Next service not exist : ".concat(name));
          }
        }
      }
    }
  }, {
    key: "on",
    value: function on(events, selector, handler) {
      var _this = this;

      var preventDefault = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      $('.zc-panel').on(events, selector, function (event) {
        if (preventDefault === true) {
          event.preventDefault();
        }

        handler.call(_this, $(event.currentTarget), event);
      });
    }
  }, {
    key: "click",
    value: function click(selector, handler) {
      var preventDefault = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      this.on('click', selector, handler, preventDefault);
    }
  }]);

  return Kernel;
}();



/***/ }),

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/menu.js":
/*!*****************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/menu.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kernel */ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js");
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module : Menu
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var $ = jQuery;

var Menu = /*#__PURE__*/function (_Kernel) {
  _inherits(Menu, _Kernel);

  var _super = _createSuper(Menu);

  function Menu() {
    var _this;

    _classCallCheck(this, Menu);

    _this = _super.call(this);
    _this.isSubmenuItem = false;
    _this.menuItemID = false;
    _this.menuItem = false;
    _this.submenuItem = false;
    _this.menuParentItem = false;

    _this.desktop(); // Init desktop mode


    _this.mobile(); // Init mobile mode


    return _this;
  }
  /**
   * Remove condition : submenu-active
   * 
   * @return {null} None
   * @since 1.0.0
   */


  _createClass(Menu, [{
    key: "removeSubmenuActive",
    value: function removeSubmenuActive() {
      $('.zc-panel-menu').removeClass('zc-panel-menu_submenu-active');
      $('.zc-panel-content').removeClass('zc-panel-content_submenu-active');
    }
    /**
     * Add condition : submenu-active
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "addSubmenuActive",
    value: function addSubmenuActive() {
      $('.zc-panel-menu').addClass('zc-panel-menu_submenu-active');
      $('.zc-panel-content').addClass('zc-panel-content_submenu-active');
    }
    /**
     * Is submenu active
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "isSubmenuActive",
    value: function isSubmenuActive() {
      return $('.zc-panel-menu').hasClass('zc-panel-menu_submenu-active') && $('.zc-panel-content').hasClass('zc-panel-content_submenu-active');
    }
    /**
     * Display section
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "displaySection",
    value: function displaySection(menuItemID) {
      var menuItem = $(".zc-panel-menu li[data-menu-item-id=\"".concat(menuItemID, "\"]")); // Add icon

      var titleIconClass = menuItem.find('i').first().attr('class').match(/\bzc-icon-\S+/g)[0];
      $('.zc-panel-header__title-icon').removeClass(function (index, className) {
        return (className.match(/\bzc-icon-\S+/g) || []).join(' ');
      }).addClass(titleIconClass); // Add title

      $('.zc-panel-header__title').text(menuItem.find('span').text()); // Remove / active content section

      if (this.menuItemID) {
        $(".zc-panel-controls__section[data-section=\"".concat(this.menuItemID, "\"]")).removeClass('zc-panel-controls__section_active');
      }

      var section = $(".zc-panel-controls__section[data-section=\"".concat(menuItemID, "\"]"));
      section.addClass('zc-panel-controls__section_active');
      $(window).trigger('zc/panel/menu/item-change');
      this.addCache('menu/current-section', section);

      if (!section.hasClass('zc-panel-controls__section_ICP')) {
        section.addClass('zc-panel-controls__section_ICP'); // Event

        $(window).trigger('zc/panel/menu/item-change-ICP', [section]);
      } // Remove / active menu item


      if (menuItem.parent().hasClass('zc-panel-submenu__list')) {
        var submenuItem = menuItem.parent().parent().parent().parent();

        if (submenuItem.hasClass('zc-panel-submenu__scrollbar-container')) {
          submenuItem = submenuItem.parent();
        }

        submenuItem.addClass('zc-panel-submenu__container_active');
        var submenuItemID = submenuItem.data('menu-container-id');
        var menuParentItem = $(".zc-panel-menu__item_type_parent[data-menu-container-id=\"".concat(submenuItemID, "\"]"));
        menuItem.addClass('zc-panel-submenu__item_active');
        menuParentItem.addClass('zc-panel-menu__item_active');

        if (!this.isSubmenuActive()) {
          this.addSubmenuActive();
        } // Add global data


        this.isSubmenuItem = true;
        this.submenuItem = submenuItem;
        this.menuParentItem = menuParentItem;
      } else {
        menuItem.addClass('zc-panel-menu__item_active');

        if (this.isSubmenuActive()) {
          this.removeSubmenuActive();
        } // Add global data


        this.isSubmenuItem = false;
        this.submenuItem = false;
        this.menuParentItem = false;
      } // Add global data


      this.menuItem = menuItem;
      this.menuItemID = menuItemID;
    }
    /**
     * Preparing menu item
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "prepMenuItem",
    value: function prepMenuItem(menuItemID) {
      if (!this.isSubmenuItem) {
        this.menuItem.removeClass('zc-panel-menu__item_active');
        this.displaySection(menuItemID);
      } else {
        this.menuItem.removeClass('zc-panel-submenu__item_active');
        this.menuParentItem.removeClass('zc-panel-menu__item_active');
        this.submenuItem.removeClass('zc-panel-submenu__container_active');
        this.displaySection(menuItemID);
      }

      $('.zc-panel-content .zc-scrollbar').scrollTop(0);
    }
    /**
     * Desktop mode
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "desktop",
    value: function desktop() {
      var _this2 = this;

      var menuItemID = '';

      if ($.param.fragment()) {
        menuItemID = $.param.fragment() || '';
      }

      if ($(".zc-panel-menu li[data-menu-item-id=\"".concat(menuItemID, "\"]")).length === 0) {
        var menuItem = $('.zc-panel-menu__list .zc-panel-menu__item_type_simple').first();
        menuItemID = menuItem.data('menu-item-id');

        if (!menuItemID) {
          var submenuItemID = menuItem.data('menu-container-id');
          menuItem = $(".zc-panel-submenu__container[data-menu-container-id=".concat(submenuItemID, "] .zc-panel-submenu__item_type_simple")).first();
          menuItemID = menuItem.data('menu-item-id');
        }
      }

      this.displaySection(menuItemID); // When hash change

      $(window).on('hashchange.zc-panel', function (event) {
        var menuItemID = $.param.fragment() ? $.param.fragment() : '';

        if ($(".zc-panel-menu li[data-menu-item-id=\"".concat(menuItemID, "\"]")).length === 0) {
          menuItemID = undefined;
        }

        if (menuItemID !== undefined) {
          _this2.prepMenuItem(menuItemID);
        }
      }); // When click on parent menu item

      this.click('.zc-panel-menu__item_type_parent', function ($this) {
        var submenuItemID = $this.data('menu-container-id');
        var menuItem = $(".zc-panel-submenu__container[data-menu-container-id=".concat(submenuItemID, "] .zc-panel-submenu__item_type_simple")).first();
        var menuItemID = menuItem.data('menu-item-id');

        if (menuItemID !== undefined) {
          window.location.hash = menuItemID;
        }
      }); // When click on menu item

      this.click('.zc-panel-menu__item_type_simple:not(.zc-panel-menu__item_active)', function ($this) {
        var menuItemID = $this.data('menu-item-id');

        if (menuItemID !== undefined) {
          window.location.hash = menuItemID;
        }
      }); // When click on submenu item

      this.click('.zc-panel-submenu__item_type_simple:not(.zc-panel-submenu__item_active)', function ($this) {
        var menuItemID = $this.data('menu-item-id');

        if (menuItemID) {
          window.location.hash = menuItemID;
        }
      });
    }
    /**
     * Mobile mode
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "mobile",
    value: function mobile() {
      var _this3 = this;

      this.click('.zc-panel-header__controller-button_type_mobile-menu', function ($this) {
        if ($this.hasClass('zc-panel-header__controller-button_type_mobile-menu_active')) {
          $this.removeClass('zc-panel-header__controller-button_type_mobile-menu_active');
          $('.zc-panel-content').removeClass('zc-panel-content_mobile-menu-visible');
          $this.one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function () {
            $('.zc-panel-controls').height('auto');
          });

          _this3.service('close-block').hideDefinitely();
        } else {
          $this.addClass('zc-panel-header__controller-button_type_mobile-menu_active');
          $('.zc-panel-content').addClass('zc-panel-content_mobile-menu-visible');

          var initNavHeight = $('.zc-panel-menu__container').height(),
              navHeight = $('.zc-panel-menu__list').height() + _this3.getConfig('height-FAH'),
              controlsHeight = $('.zc-panel-controls').height();

          if (initNavHeight > navHeight) {
            navHeight = initNavHeight;
          }

          if (navHeight > controlsHeight) {
            $('.zc-panel-controls').height(navHeight - _this3.getConfig('height-FAH'));
            $('.zc-panel-submenu__scrollbar-container').height(navHeight - _this3.getConfig('header-height'));
          }

          var menuItemID = $.param.fragment() ? $.param.fragment() : '';

          if ($(".zc-panel-menu li[data-menu-item-id=\"".concat(menuItemID, "\"]")).length === 0) {
            menuItemID = undefined;
          }

          if (menuItemID !== undefined) {
            _this3.prepMenuItem(menuItemID);
          }

          _this3.service('close-block').show();

          _this3.scrollbarTop();
        }
      });
      $(window).on('zc/close-block.zc-panel', function () {
        if ($('.zc-panel-header__controller-button_type_mobile-menu').hasClass('zc-panel-header__controller-button_type_mobile-menu_active')) {
          $('.zc-panel-header__controller-button_type_mobile-menu').removeClass('zc-panel-header__controller-button_type_mobile-menu_active');
          $('.zc-panel-content').removeClass('zc-panel-content_mobile-menu-visible');
          $('.zc-panel-header__controller-button_type_mobile-menu').one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function () {
            $('.zc-panel-controls').height('auto');
          });

          _this3.service('close-block').hideDefinitely();
        }
      });
      this.click('.zc-panel-submenu__header-section_mode_mobile', function () {
        _this3.removeSubmenuActive();

        _this3.scrollbarTop();

        window.location.hash = '';
      });
    }
  }]);

  return Menu;
}(_kernel__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ 5:
/*!****************************************************************************!*\
  !*** multi ./src/Module/Panel/Resources/assets/js/es6/jquery.panel.es6.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/k513/Documents/dev/wp/wp-content/themes/viki/vendor/junjulini/zimbrucode/src/Module/Panel/Resources/assets/js/es6/jquery.panel.es6.js */"./src/Module/Panel/Resources/assets/js/es6/jquery.panel.es6.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvanF1ZXJ5LnBhbmVsLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvanF1ZXJ5LnBhbmVsLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2NhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2Nsb3NlLWJsb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2NvbmRpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9rZXJuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG4iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgWmltYnJ1Q29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsXG4gKlxuICogQGF1dGhvciAgSnVuanVsaW5pXG4gKiBAcGFja2FnZSBaaW1icnVDb2RlXG4gKiBAc2luY2UgICBaaW1icnVDb2RlIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQmFzZSBmcm9tICcuL21vZHVsZS9iYXNlJztcblxuemMuYWRkTW9kdWxlKCdwYW5lbCcsICgkKSA9PiB7XG5cbiAgICBjb25zdCBwYW5lbCA9IG5ldyBCYXNlO1xuICAgIFxuICAgIC8vIEFmdGVyIGxvYWRpbmcgcGFnZVxuICAgICQoKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHBhbmVsLm1vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93ICdwYW5lbC5tb2RlIGlzIHVuZGVmaW5lZCc7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpZiAoISQuaXNGdW5jdGlvbihwYW5lbC5tb2RlKSkge1xuICAgICAgICAgICAgICAgIHRocm93ICdwYW5lbC5tb2RlIGlzIG5vdCBmdW5jdGlvbic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhbmVsLmNoZWNrQnJvd3NlckNvbXBhdGliaWxpdHkoKTtcblxuICAgICAgICAgICAgbmV3IHBhbmVsLm1vZGUoJCwgcGFuZWwpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKCQoJy56Yy1wYW5lbC10ZW1wbGF0ZScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtdGVtcGxhdGUnKS5lbXB0eSgpLmFwcGVuZChgPGRpdiBjbGFzcz1cImVycm9yIG5vdGljZVwiPjxwPjxiPiR7cGFuZWwuZ2V0VmFyKCdicm93c2VyLWVycm9yLXRpdGxlJyl9PC9iPiA6ICR7ZXJyb3J9PC9wPjwvZGl2PmApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjd3Bib2R5LWNvbnRlbnQnKS5wcmVwZW5kKGA8ZGl2IGNsYXNzPVwiZXJyb3Igbm90aWNlXCI+PHA+PGI+JHtwYW5lbC5nZXRWYXIoJ2Jyb3dzZXItZXJyb3ItdGl0bGUnKX08L2I+IDogJHtlcnJvcn08L3A+PC9kaXY+YCk7XG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7cGFuZWwuZ2V0VmFyKCdicm93c2VyLWVycm9yLXRpdGxlJyl9IDogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gIyMjIyMjIyMjIyMjIyBQVUJMSUMgTUVUSE9EUyAjIyMjIyMjIyMjIyMjXG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBBZGQgY29udHJvbFxuICAgICAgICBhZGRDb250cm9sOiAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JyksXG4gICAgICAgICAgICAgICAgICBzY3JpcHRMb2NhdGlvbiA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmMsXG4gICAgICAgICAgICAgICAgICBkYXRhSCA9IHNjcmlwdExvY2F0aW9uLnNwbGl0KCcvJyksXG4gICAgICAgICAgICAgICAgICBjb250cm9sTmFtZSA9IGRhdGFIW2RhdGFILmxlbmd0aCAtIDVdO1xuXG4gICAgICAgICAgICBjb25zdCBjb250cm9sVmFycyA9IHBhbmVsLmdldFZhcignY29udHJvbHMnKVtjb250cm9sTmFtZV07XG4gICAgICAgICAgICBwYW5lbC5zZXJ2aWNlKCdjYWxsYmFjaycpLmFkZCgnY29udHJvbCcsIGNhbGxiYWNrLCBjb250cm9sVmFycyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gQWRkIG1vZGVcbiAgICAgICAgYWRkTW9kZTogKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBwYW5lbC5tb2RlID0gY2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICB9XG59KTsiLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgWmltYnJ1Q29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZSA6IEJhc2VcbiAqXG4gKiBAYXV0aG9yICBKdW5qdWxpbmlcbiAqIEBwYWNrYWdlIFppbWJydUNvZGVcbiAqIEBzaW5jZSAgIFppbWJydUNvZGUgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBLZXJuZWwgICAgIGZyb20gJy4va2VybmVsJztcbmltcG9ydCBDbG9zZUJsb2NrIGZyb20gJy4vY2xvc2UtYmxvY2snO1xuaW1wb3J0IENhbGxiYWNrICAgZnJvbSAnLi9jYWxsYmFjayc7XG5pbXBvcnQgTWVudSAgICAgICBmcm9tICcuL21lbnUnO1xuaW1wb3J0IENvbmRpdGlvbiAgZnJvbSAnLi9jb25kaXRpb24nO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlIGV4dGVuZHMgS2VybmVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAvLyBHbG9iYWwgY2FjaGVcbiAgICAgICAgdGhpcy5nbG9iYWwuY2FjaGUgPSB7XG4gICAgICAgICAgICBjaGFuZ2VkOiBmYWxzZSxcbiAgICAgICAgICAgIHNlcnZpY2VzOiB7fVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEdsb2JhbCBjb25maWdcbiAgICAgICAgdGhpcy5nbG9iYWwuY29uZmlnID0ge1xuXG4gICAgICAgICAgICAvLyBSaWdodCBtYXJnaW5cbiAgICAgICAgICAgJ3JpZ2h0LW1hcmdpbic6IHtcbiAgICAgICAgICAgICAgICBkZXNrdG9wOiAyMCxcbiAgICAgICAgICAgICAgICBtb2JpbGU6IDEwXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnYm90dG9tLW1hcmdpbic6IDQyLCBcbiAgICAgICAgICAgICdmb290ZXItaGVpZ2h0JzogNTYsICAgIC8vIEhlaWdodCBvZiBmb290ZXJcbiAgICAgICAgICAgICdoZWFkZXItaGVpZ2h0JzogNTYsICAgIC8vIEhlaWdodCBvZiBoZWFkZXJcbiAgICAgICAgICAgICdoZWlnaHQtRkFIJzogICAgMTEyLCAgIC8vIEhlaWdodCBvZiBmb290ZXIgJiBoZWFkZXJcbiAgICAgICAgICAgICd3cC1ib2R5LWhlaWdodCc6IDAsICAgIC8vIFdwIGJvZHkgaGVpZ2h0XG5cbiAgICAgICAgICAgICdtaW4tc2l6ZSc6IHtcbiAgICAgICAgICAgICAgICAnYm9keS1oZWlnaHQnOiA1MDAsIC8vIE1pbiBwYW5lbCBib2R5IGhlaWdodFxuICAgICAgICAgICAgICAgIG1vZGUxOiA0OTAsXG4gICAgICAgICAgICAgICAgbW9kZTI6IDk1MFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJ3dwLWFkbWluLWJhci1oZWlnaHQnOiAzMlxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEdsb2JhbCB2YXJzXG4gICAgICAgIHRoaXMuZ2xvYmFsLnZhcnMgPSB6Y1BhbmVsVmFycztcblxuICAgICAgICAvLyBBZGQgc2VydmljZSA6IENhbGxiYWNrXG4gICAgICAgIHRoaXMuc2VydmljZSgnY2FsbGJhY2snLCBuZXcgQ2FsbGJhY2spO1xuICAgIH1cblxuICAgIGNoZWNrQnJvd3NlckNvbXBhdGliaWxpdHkoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoYSA9PiB7fSk7XG4gICAgICAgICAgICBuZXcgUmVzaXplT2JzZXJ2ZXIoYSA9PiB7fSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldFZhcignYnJvd3Nlci1lcnJvci1zdWJqZWN0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYW5lbCBtZW51XG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIG1lbnUoKSB7XG4gICAgICAgIHRoaXMuc2VydmljZSgnbWVudScsIG5ldyBNZW51KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYW5lbCA6IEluaXQgY2FsbGJhY2sgb2YgY2xvc2UgYmxvY2suXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNsb3NlQmxvY2soKSB7XG4gICAgICAgIHRoaXMuc2VydmljZSgnY2xvc2UtYmxvY2snLCBuZXcgQ2xvc2VCbG9jayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFuZWwgc2Nyb2xsIGJhclxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzY3JvbGxiYXIoKSB7XG4gICAgICAgIGlmICghemMuaXNNb2JpbGUoKSAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA9PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgcHJpdiA9IHt9O1xuXG4gICAgICAgICAgICBwcml2LmNoZWNrSWZBY3RpdmUgPSAocGFyZW50LCBjaGlsZHJlbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudEhlaWdodCAgID0gcGFyZW50Lm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuSGVpZ2h0ID0gY2hpbGRyZW4ub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocGFyZW50SGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW5IZWlnaHQgPiBwYXJlbnRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5hZGRDbGFzcygnemMtc2Nyb2xsYmFyX2FjdGl2ZScsKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDbGFzcygnemMtc2Nyb2xsYmFyX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcHJpdi5ybyA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cmllc1swXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXYuY2hlY2tJZkFjdGl2ZSgkKGVudHJ5LnRhcmdldCkucGFyZW50KCksICQoZW50cnkudGFyZ2V0KSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcuemMtcGFuZWwgLnpjLXNjcm9sbGJhcicpLmVhY2goKGluZGV4LCBlbCkgPT4ge1xuICAgICAgICAgICAgICAgIHByaXYucm8ub2JzZXJ2ZSgkKGVsKS5jaGlsZHJlbigpLmZpcnN0KCkuZ2V0KDApKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ3pjL3BhbmVsL3NpemUtY2hhbmdlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwgLnpjLXNjcm9sbGJhcicpLmVhY2goKGluZGV4LCBlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcml2LmNoZWNrSWZBY3RpdmUoJChlbCksICQoZWwpLmNoaWxkcmVuKCkuZmlyc3QoKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBtZXRhIHZpZXdwb3J0IGlmIG1vYmlsZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBub01ldGFTY2FsZUlmTW9iaWxlKCkge1xuICAgICAgICBpZiAoemMuaXNNb2JpbGUoKSkge1xuICAgICAgICAgICAgJCgnaGVhZCBtZXRhW25hbWU9dmlld3BvcnRdJykuYXR0cignY29udGVudCcsICd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT0wJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYW5lbCBjb25kaXRpb24gY2hlY2tlci5cbiAgICAgKiBcbiAgICAgKiBAdHlwZSAge09iamVjdH1cbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjb25kaXRpb24oKSB7XG4gICAgICAgIG5ldyBDb25kaXRpb24odGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgc29tZSBjaGFuZ2VzIHdhcyBtYWRlXG4gICAgICogXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBNZXNzYWdlXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaWZDaGFuZ2VkKCkge1xuICAgICAgICAkKHdpbmRvdykub24oJ2JlZm9yZXVubG9hZC56Yy1wYW5lbCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldENhY2hlKCdjaGFuZ2VkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYXIoJ2lmLWNoYW5nZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udHJvbCBoZWxwXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNvbnRyb2xIZWxwKCkge1xuICAgICAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIHdpZHRoOiA2MDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDI1MFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1wYW5lbC1oZWxwX19zdGFydGVyX3R5cGVfc2ltcGxlJywgKCR0aGlzKSA9PiB7XG4gICAgICAgICAgICBsZXQgc2V0dGluZ3MgPSAkdGhpcy5kYXRhKCdzZXR0aW5ncycpO1xuICAgICAgICAgICAgaWYgKHNldHRpbmdzID09PSB1bmRlZmluZWQgfHwgc2V0dGluZ3MgPT09ICcnIHx8IHNldHRpbmdzID09IG51bGwpIHNldHRpbmdzID0ge307XG5cbiAgICAgICAgICAgIGRlZmF1bHRzLnRpdGxlID0gJHRoaXMuYXR0cigndGl0bGUnKTtcbiAgICAgICAgICAgIGRlZmF1bHRzLmh0bWwgID0gJHRoaXMucGFyZW50KCkuZmluZCgnLnpjLXBhbmVsLWhlbHBfX2NvbnRlbnQnKS50ZXh0KCk7XG5cbiAgICAgICAgICAgIHpjLnBvcHVwKCkuYWRkKCQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgc2V0dGluZ3MpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udHJvbHMgaW5pdGlhbGl6YXRpb25cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY29udHJvbEluaXQoKSB7XG4gICAgICAgIHRoaXMuc2VydmljZSgnY2FsbGJhY2snKS5ydW4oJ2NvbnRyb2wnLCAkLCB0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb29sdGlwXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHRvb2x0aXAoKSB7XG4gICAgICAgIGlmICh6Yy5pc01vYmlsZSgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsIFtkYXRhLXRvb2x0aXBdJykudGlwc3koe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnZGF0YS10b29sdGlwJyxcbiAgICAgICAgICAgICAgICBncmF2aXR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gJCh0aGlzKS5kYXRhKCd0b29sdGlwLXBvc2l0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAncyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd3JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICduJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICduJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ24nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDMsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFppbWJydUNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBQYW5lbC9Nb2R1bGUgOiBDYWxsYmFja1xuICpcbiAqIEBhdXRob3IgIEp1bmp1bGluaVxuICogQHBhY2thZ2UgWmltYnJ1Q29kZVxuICogQHNpbmNlICAgWmltYnJ1Q29kZSAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbGJhY2sge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIHBhbmVsIGNhbGxiYWNrXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZChuYW1lLCBjYWxsYmFjaywgYWRkaXRpb25hbCkge1xuICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2tbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tbbmFtZV0gPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jYWxsYmFja1tuYW1lXS5wdXNoKHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgYWRkaXRpb25hbDogYWRkaXRpb25hbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgLyoqXG4gICAgICogUnVuIHBhbmVsIGNhbGxiYWNrXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHJ1bihuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQgJiYgbmFtZSAhPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5hcHBseShhcmd1bWVudHMpO1xuICAgICAgICAgICAgYXJncy5zaGlmdCgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jYWxsYmFja1tuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmNhbGxiYWNrW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBBcmdzID0gJC5leHRlbmQodHJ1ZSwgW10sIGFyZ3MpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbGxiYWNrW25hbWVdW2ldLmFkZGl0aW9uYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcEFyZ3MucHVzaCh0aGlzLmNhbGxiYWNrW25hbWVdW2ldLmFkZGl0aW9uYWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFja1tuYW1lXVtpXS5jYWxsYmFjay5hcHBseSh0aGlzLCBwQXJncyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgWmltYnJ1Q29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZSA6IENsb3NlQmxvY2tcbiAqXG4gKiBAYXV0aG9yICBKdW5qdWxpbmlcbiAqIEBwYWNrYWdlIFppbWJydUNvZGVcbiAqIEBzaW5jZSAgIFppbWJydUNvZGUgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBLZXJuZWwgZnJvbSAnLi9rZXJuZWwnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9zZUJsb2NrIGV4dGVuZHMgS2VybmVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmlzT3BlbiA9IDA7XG5cbiAgICAgICAgdGhpcy5jbGljaygnLnpjLXBhbmVsLWNvbnRyb2xzX19jbG9zZS1ibG9jaycsICgpID0+IHtcbiAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9jbG9zZS1ibG9jaycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3pjL2Nsb3NlLWJsb2NrL3Nob3cnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCd6Yy9jbG9zZS1ibG9jay9oaWRlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQod2luZG93KS5vbignemMvY2xvc2UtYmxvY2svaGlkZS1kZWZpbml0ZWx5JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlRGVmaW5pdGVseSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IGNsb3NlIGJsb2NrXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHNob3coKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbC1jb250cm9sc19fY2xvc2UtYmxvY2snKS5hZGRDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX2Nsb3NlLWJsb2NrX2FjdGl2ZScpO1xuICAgICAgICB0aGlzLmlzT3BlbisrO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgY2xvc2UgYmxvY2tcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaGlkZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuID09PSAxKSB7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udHJvbHNfX2Nsb3NlLWJsb2NrJykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19jbG9zZS1ibG9ja19hY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuLS07XG4gICAgICAgICAgICBpZiAodGhpcy5pc09wZW4gPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc09wZW4gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBibG9jayBkZWZpbml0ZWx5XG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGhpZGVEZWZpbml0ZWx5KCkge1xuICAgICAgICAkKCcuemMtcGFuZWwtY29udHJvbHNfX2Nsb3NlLWJsb2NrJykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19jbG9zZS1ibG9ja19hY3RpdmUnKTtcbiAgICAgICAgdGhpcy5pc09wZW4gPSAwO1xuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvY2xvc2UtYmxvY2snKTtcbiAgICB9XG59IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFppbWJydUNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBQYW5lbC9Nb2R1bGUgOiBDb25kaXRpb25cbiAqXG4gKiBAYXV0aG9yICBKdW5qdWxpbmlcbiAqIEBwYWNrYWdlIFppbWJydUNvZGVcbiAqIEBzaW5jZSAgIFppbWJydUNvZGUgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBLZXJuZWwgZnJvbSAnLi9rZXJuZWwnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25kaXRpb24gZXh0ZW5kcyBLZXJuZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuY2FjaGUgPSB7fTtcbiAgICAgICAgdGhpcy5yZWdleCA9IC8oLis/KToobm90RW1wdHl8ZW1wdHl8aXN8bm90fGNvbnRhaW5zfDx8PD18Pnw+PSlcXCgoLio/KVxcKSw/L2c7XG5cbiAgICAgICAgdGhpcy5maXJzdFN0YXJ0KCk7XG4gICAgICAgIHRoaXMuZGF0YUNhY2hpbmcoKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWwgcGFyc2luZ1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBmaXJzdFN0YXJ0KCkge1xuICAgICAgICAkKHdpbmRvdykub24oJ3pjL3BhbmVsL21lbnUvaXRlbS1jaGFuZ2UtSUNQJywgKGV2ZW50LCBzZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VjdGlvbikge1xuICAgICAgICAgICAgICAgIHNlY3Rpb24uZmluZCgnW2RhdGEtY29uZGl0aW9uXScpLmVhY2goKGluZGV4LCBlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlKCQoZWwpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UoKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbCAuemMtcGFuZWwtY29udHJvbHMnKS5vbignY2hhbmdlJywgJ1tkYXRhLW9wdGlvbl0nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgY29uc3QgJHRoaXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgbGV0IG5hbWUgID0gJHRoaXMuYXR0cignbmFtZScpIHx8ICcnO1xuXG4gICAgICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKCdbXScsICcnKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY2FjaGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICQuZWFjaCh0aGlzLmNhY2hlW25hbWVdLCAoaW5kZXgsIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2UoZWwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJHRoaXMuZGF0YSgnaScpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENhY2hlKCdjaGFuZ2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL2lmLWNoYW5nZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWNoZSBkYXRhXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGRhdGFDYWNoaW5nKCkge1xuICAgICAgICAkKCcuemMtcGFuZWwgLnpjLXBhbmVsLWNvbnRyb2xzIFtkYXRhLWNvbmRpdGlvbl0nKS5lYWNoKChpbmRleCwgZWwpID0+IHtcbiAgICAgICAgICAgIGxldCBtYXRjaDtcblxuICAgICAgICAgICAgd2hpbGUgKG1hdGNoID0gdGhpcy5yZWdleC5leGVjKCQoZWwpLmRhdGEoJ2NvbmRpdGlvbicpKSkge1xuICAgICAgICAgICAgICAgIGxldCBrZXkgPSB0aGlzLmdldFZhcigncHJlZml4LXNsdWcnKSArIG1hdGNoWzFdO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FjaGVba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVba2V5XSA9IFtdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVba2V5XS5wdXNoKCQoZWwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2UgYnkgY29uZGl0aW9uc1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwYXJzZShjb250cm9sLCBkaXJlY3QpIHtcbiAgICAgICAgbGV0IHBhc3NlZCxcbiAgICAgICAgICAgIGNvbmRpdGlvbnMgPSB0aGlzLnByZXBDb25kaXRpb25zKGNvbnRyb2wuZGF0YSgnY29uZGl0aW9uJykpLFxuICAgICAgICAgICAgb3BlcmF0b3IgICA9IChjb250cm9sLmRhdGEoJ2NvbmRpdGlvbi1vcGVyYXRvcicpIHx8ICdhbmQnKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICQuZWFjaChjb25kaXRpb25zLCAoaW5kZXgsIGNvbmRpdGlvbikgPT4ge1xuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9ICQoYC56Yy1wYW5lbCAuemMtcGFuZWwtY29udHJvbHMgW25hbWU9JHt0aGlzLmdldFZhcigncHJlZml4LXNsdWcnKX0ke2NvbmRpdGlvbi5jaGVja31dYCk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoID4gMCAmJiB0YXJnZXQuaXMoJ1tkYXRhLW9wdGlvbl0nKSkge1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9ICQoYC56Yy1wYW5lbCAuemMtcGFuZWwtY29udHJvbHMgW2lkPSR7dGhpcy5nZXRWYXIoJ3ByZWZpeC1zbHVnJyl9JHtjb25kaXRpb24uY2hlY2t9XWApO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGggPiAwICYmIHRhcmdldC5pcygnW2RhdGEtb3B0aW9uXScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdjEgPSB0YXJnZXQudmFsKCkgIT09IG51bGwgPyB0YXJnZXQudmFsKCkudG9TdHJpbmcoKSA6ICcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IHYyID0gY29uZGl0aW9uLnZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoY29uZGl0aW9uLnJ1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAocGFyc2VJbnQodjEpIDwgcGFyc2VJbnQodjIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICc8PSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAocGFyc2VJbnQodjEpIDw9IHBhcnNlSW50KHYyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAocGFyc2VJbnQodjEpID4gcGFyc2VJbnQodjIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICc+PSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAocGFyc2VJbnQodjEpID49IHBhcnNlSW50KHYyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY29udGFpbnMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gKHYxLmluZGV4T2YodjIpICE9PSAtMSA/IHRydWUgOiBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaXMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gKHYxID09IHYyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdub3QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gKHYxICE9IHYyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdub3RFbXB0eSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2MSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbXB0eSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAhdjEgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgPT0gdHlwZW9mIHBhc3NlZCkge1xuICAgICAgICAgICAgICAgICAgICBwYXNzZWQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdvcic6XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzZWQgPSAocGFzc2VkIHx8IHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYW5kJzpcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NlZCA9IChwYXNzZWQgJiYgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGRpcmVjdCAmJiBkaXJlY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2wuYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19pdGVtX3Nob3cnKTtcbiAgICAgICAgICAgICAgICBjb250cm9sLmRhdGEoJ2NvbmRpdGlvbi1zaG93JywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRyb2wuYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19pdGVtX2hpZGUnKTtcbiAgICAgICAgICAgICAgICBjb250cm9sLmRhdGEoJ2NvbmRpdGlvbi1zaG93JywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICAgICAgICAgIGlmIChjb250cm9sLmRhdGEoJ2NvbmRpdGlvbi1zaG93JykgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbC5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX2l0ZW1faGlkZScpO1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19faXRlbV9zaG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2wuZGF0YSgnY29uZGl0aW9uLXNob3cnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb250cm9sLmRhdGEoJ2NvbmRpdGlvbi1zaG93JykgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2wucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19pdGVtX3Nob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbC5hZGRDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX2l0ZW1faGlkZScpO1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sLmRhdGEoJ2NvbmRpdGlvbi1zaG93JywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBhc3NlZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJpbmcgY29uZGl0aW9uc1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwcmVwQ29uZGl0aW9ucyhjb25kaXRpb24pIHtcbiAgICAgICAgbGV0IG1hdGNoLFxuICAgICAgICAgICAgY29uZGl0aW9ucyA9IFtdO1xuXG4gICAgICAgIHdoaWxlIChtYXRjaCA9IHRoaXMucmVnZXguZXhlYyhjb25kaXRpb24pKSB7XG4gICAgICAgICAgICBjb25kaXRpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgICdjaGVjayc6IG1hdGNoWzFdLFxuICAgICAgICAgICAgICAgICdydWxlJzogIG1hdGNoWzJdLFxuICAgICAgICAgICAgICAgICd2YWx1ZSc6IG1hdGNoWzNdIHx8ICcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25kaXRpb25zO1xuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgWmltYnJ1Q29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZSA6IEtlcm5lbFxuICpcbiAqIEBhdXRob3IgIEp1bmp1bGluaVxuICogQHBhY2thZ2UgWmltYnJ1Q29kZVxuICogQHNpbmNlICAgWmltYnJ1Q29kZSAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2VybmVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nbG9iYWwgPSB6Yy5nZXRNb2R1bGVEYXRhKCdwYW5lbCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhbmVsIHNjcm9sbCBiYXIgdG9wXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHNjcm9sbGJhclRvcCgpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsIC56Yy1zY3JvbGxiYXInKS5zY3JvbGxUb3AoMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHBhbmVsIGhlaWdodFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjYWxjSGVpZ2h0KCkge1xuICAgICAgICBpZiAodGhpcy5nZXRDYWNoZSgnd3AtYm9keS1oZWlnaHQnKSAhPT0gJCh3aW5kb3cpLmhlaWdodCgpKSB7XG4gICAgICAgICAgICB0aGlzLmFkZENhY2hlKCd3cC1ib2R5LWhlaWdodCcsICQod2luZG93KS5oZWlnaHQoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFcmFzZSBtb2JpbGUgbWVudVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBlcmFzZU1vYmlsZU1lbnUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGVza3RvcE1vZGUoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VydmljZSgnbWVudS9pc1N1Ym1lbnVJdGVtJykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtbWVudScpLmFkZENsYXNzKCd6Yy1wYW5lbC1tZW51X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRlbnQnKS5hZGRDbGFzcygnemMtcGFuZWwtY29udGVudF9zdWJtZW51LWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLW1lbnUnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtbWVudV9zdWJtZW51LWFjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udGVudF9zdWJtZW51LWFjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udGVudF9tb2JpbGUtbWVudS12aXNpYmxlJyk7XG4gICAgICAgICQoJy56Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnUnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51X2FjdGl2ZScpO1xuXG4gICAgICAgIHRoaXMuc2VydmljZSgnY2xvc2UtYmxvY2snKS5oaWRlRGVmaW5pdGVseSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElzIGRlc2t0b3AgbW9kZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybiBcInRydWVcIiBpZiBib2R5IHdpZHRoIGlzIGJpZ2dlciB0aGVuIFwibWluLXNpemUubW9kZTJcIlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGlzRGVza3RvcE1vZGUoKSB7XG4gICAgICAgIHJldHVybiAoJCgnLnpjLXBhbmVsJykud2lkdGgoKSA+PSB0aGlzLmdldENvbmZpZygnbWluLXNpemUvbW9kZTInKSk7XG4gICAgfVxuXG4gICAgIC8qKlxuICAgICAqIEVycm9yIGNoZWNrLCBpbiBBSkFYIG9yIG90aGVyXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGVycm9yQ2hlY2sobXNnLCBqcVhIUikge1xuICAgICAgICBpZiAoISQoJy56Yy1wb3B1cCcpLmhhc0NsYXNzKCd6Yy1wYW5lbC1lcnJvci1jb25maXJtJykpIHtcblxuICAgICAgICAgICAgaWYgKCQoJy56Yy1wb3B1cCcpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG5cbiAgICAgICAgICAgIHpjLmNvbmZpcm0oe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBgRXJyb3IgLSAke2pxWEhSLnN0YXR1c1RleHR9IDogJHtqcVhIUi5zdGF0dXN9YCxcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBgJHttc2d9IFBhZ2Ugd2lsbCBiZSByZWxvYWRlZCwgb2s/YCxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3pjLXBhbmVsLWVycm9yLWNvbmZpcm0nLFxuICAgICAgICAgICAgICAgIG9rOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGdsb2JhbCB2YXJcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGVmICAgSWYgbm90IGZvdW5kLCByZXR1cm4gXCJkZWZcIlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGdldFZhcihrZXksIGRlZikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwudmFycywga2V5KTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRlZjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBnbG9iYWwgdmFyIHZhbHVlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRhdGEgIFZhciB2YWx1ZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZFZhcihrZXksIGRhdGEpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLnZhcnMsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGdsb2JhbCBjYWNoZSB2YWx1ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkYXRhICBDYWNoZSB2YWx1ZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZENhY2hlKGtleSwgZGF0YSkge1xuICAgICAgICB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwuY2FjaGUsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGdsb2JhbCBjYWNoZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkZWYgICBJZiBub3QgZm91bmQsIHJldHVybiBcImRlZlwiXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0Q2FjaGUoa2V5LCBkZWYpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNhY2hlLCBrZXkpO1xuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbGVtZW50IGZyb20gY2FjaGUgb2JqZWN0XG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICovXG4gICAgcmVtQ2FjaGUoa2V5KSB7XG4gICAgICAgIHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jYWNoZSwga2V5LCBmYWxzZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGdsb2JhbCBjb25maWcgdmFsdWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGF0YSAgQ29uZmlnIHZhbHVlXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkQ29uZmlnKGtleSwgZGF0YSkge1xuICAgICAgICB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwuY29uZmlnLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBnbG9iYWwgY29uZmlnXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRlZiAgIElmIG5vdCBmb3VuZCwgcmV0dXJuIFwiZGVmXCJcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBnZXRDb25maWcoa2V5LCBkZWYpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNvbmZpZywga2V5KTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRlZjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlcnZpY2UobmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oY2FsbGJhY2spIHx8IHR5cGVvZiBjYWxsYmFjayA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENhY2hlKGBzZXJ2aWNlcy8ke25hbWV9YCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXRDYWNoZShgc2VydmljZXMvJHtuYW1lfWAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAoc2VydmljZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTmV4dCBzZXJ2aWNlIG5vdCBleGlzdCA6ICR7bmFtZX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbihldmVudHMsIHNlbGVjdG9yLCBoYW5kbGVyLCBwcmV2ZW50RGVmYXVsdCA9IGZhbHNlKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbCcpLm9uKGV2ZW50cywgc2VsZWN0b3IsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByZXZlbnREZWZhdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsICQoZXZlbnQuY3VycmVudFRhcmdldCksIGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xpY2soc2VsZWN0b3IsIGhhbmRsZXIsIHByZXZlbnREZWZhdWx0ID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLm9uKCdjbGljaycsIHNlbGVjdG9yLCBoYW5kbGVyLCBwcmV2ZW50RGVmYXVsdCk7XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBaaW1icnVDb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwvTW9kdWxlIDogTWVudVxuICpcbiAqIEBhdXRob3IgIEp1bmp1bGluaVxuICogQHBhY2thZ2UgWmltYnJ1Q29kZVxuICogQHNpbmNlICAgWmltYnJ1Q29kZSAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEtlcm5lbCBmcm9tICcuL2tlcm5lbCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBLZXJuZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaXNTdWJtZW51SXRlbSAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tZW51SXRlbUlEICAgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lbnVJdGVtICAgICAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3VibWVudUl0ZW0gICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tZW51UGFyZW50SXRlbSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZGVza3RvcCgpOyAvLyBJbml0IGRlc2t0b3AgbW9kZVxuICAgICAgICB0aGlzLm1vYmlsZSgpOyAgLy8gSW5pdCBtb2JpbGUgbW9kZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBjb25kaXRpb24gOiBzdWJtZW51LWFjdGl2ZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICByZW1vdmVTdWJtZW51QWN0aXZlKCkge1xuICAgICAgICAkKCcuemMtcGFuZWwtbWVudScpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1tZW51X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfc3VibWVudS1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgY29uZGl0aW9uIDogc3VibWVudS1hY3RpdmVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkU3VibWVudUFjdGl2ZSgpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsLW1lbnUnKS5hZGRDbGFzcygnemMtcGFuZWwtbWVudV9zdWJtZW51LWFjdGl2ZScpO1xuICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250ZW50X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXMgc3VibWVudSBhY3RpdmVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaXNTdWJtZW51QWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gKCQoJy56Yy1wYW5lbC1tZW51JykuaGFzQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfc3VibWVudS1hY3RpdmUnKSAmJiAkKCcuemMtcGFuZWwtY29udGVudCcpLmhhc0NsYXNzKCd6Yy1wYW5lbC1jb250ZW50X3N1Ym1lbnUtYWN0aXZlJykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc3BsYXkgc2VjdGlvblxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBkaXNwbGF5U2VjdGlvbihtZW51SXRlbUlEKSB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gJChgLnpjLXBhbmVsLW1lbnUgbGlbZGF0YS1tZW51LWl0ZW0taWQ9XCIke21lbnVJdGVtSUR9XCJdYCk7XG5cbiAgICAgICAgLy8gQWRkIGljb25cbiAgICAgICAgY29uc3QgdGl0bGVJY29uQ2xhc3MgPSBtZW51SXRlbS5maW5kKCdpJykuZmlyc3QoKS5hdHRyKCdjbGFzcycpLm1hdGNoKC9cXGJ6Yy1pY29uLVxcUysvZylbMF07XG4gICAgICAgICQoJy56Yy1wYW5lbC1oZWFkZXJfX3RpdGxlLWljb24nKS5yZW1vdmVDbGFzcygoaW5kZXgsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChjbGFzc05hbWUubWF0Y2goL1xcYnpjLWljb24tXFxTKy9nKSB8fCBbXSkuam9pbignICcpO1xuICAgICAgICB9KS5hZGRDbGFzcyh0aXRsZUljb25DbGFzcyk7XG5cbiAgICAgICAgLy8gQWRkIHRpdGxlXG4gICAgICAgICQoJy56Yy1wYW5lbC1oZWFkZXJfX3RpdGxlJykudGV4dChtZW51SXRlbS5maW5kKCdzcGFuJykudGV4dCgpKTtcblxuICAgICAgICAvLyBSZW1vdmUgLyBhY3RpdmUgY29udGVudCBzZWN0aW9uXG4gICAgICAgIGlmICh0aGlzLm1lbnVJdGVtSUQpIHtcbiAgICAgICAgICAgICQoYC56Yy1wYW5lbC1jb250cm9sc19fc2VjdGlvbltkYXRhLXNlY3Rpb249XCIke3RoaXMubWVudUl0ZW1JRH1cIl1gKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX3NlY3Rpb25fYWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWN0aW9uID0gJChgLnpjLXBhbmVsLWNvbnRyb2xzX19zZWN0aW9uW2RhdGEtc2VjdGlvbj1cIiR7bWVudUl0ZW1JRH1cIl1gKTtcblxuICAgICAgICBzZWN0aW9uLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19fc2VjdGlvbl9hY3RpdmUnKTtcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL21lbnUvaXRlbS1jaGFuZ2UnKTtcbiAgICAgICAgdGhpcy5hZGRDYWNoZSgnbWVudS9jdXJyZW50LXNlY3Rpb24nLCBzZWN0aW9uKTtcblxuICAgICAgICBpZiAoIXNlY3Rpb24uaGFzQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19zZWN0aW9uX0lDUCcpKSB7XG4gICAgICAgICAgICBzZWN0aW9uLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19fc2VjdGlvbl9JQ1AnKTtcblxuICAgICAgICAgICAgLy8gRXZlbnRcbiAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9tZW51L2l0ZW0tY2hhbmdlLUlDUCcsIFtzZWN0aW9uXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgLyBhY3RpdmUgbWVudSBpdGVtXG4gICAgICAgIGlmIChtZW51SXRlbS5wYXJlbnQoKS5oYXNDbGFzcygnemMtcGFuZWwtc3VibWVudV9fbGlzdCcpKSB7XG4gICAgICAgICAgICBsZXQgc3VibWVudUl0ZW0gPSBtZW51SXRlbS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKTtcblxuICAgICAgICAgICAgaWYgKHN1Ym1lbnVJdGVtLmhhc0NsYXNzKCd6Yy1wYW5lbC1zdWJtZW51X19zY3JvbGxiYXItY29udGFpbmVyJykpIHtcbiAgICAgICAgICAgICAgICBzdWJtZW51SXRlbSA9IHN1Ym1lbnVJdGVtLnBhcmVudCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdWJtZW51SXRlbS5hZGRDbGFzcygnemMtcGFuZWwtc3VibWVudV9fY29udGFpbmVyX2FjdGl2ZScpO1xuXG4gICAgICAgICAgICBjb25zdCBzdWJtZW51SXRlbUlEICA9IHN1Ym1lbnVJdGVtLmRhdGEoJ21lbnUtY29udGFpbmVyLWlkJyk7XG4gICAgICAgICAgICBjb25zdCBtZW51UGFyZW50SXRlbSA9ICQoYC56Yy1wYW5lbC1tZW51X19pdGVtX3R5cGVfcGFyZW50W2RhdGEtbWVudS1jb250YWluZXItaWQ9XCIke3N1Ym1lbnVJdGVtSUR9XCJdYCk7XG5cbiAgICAgICAgICAgIG1lbnVJdGVtLmFkZENsYXNzKCd6Yy1wYW5lbC1zdWJtZW51X19pdGVtX2FjdGl2ZScpO1xuICAgICAgICAgICAgbWVudVBhcmVudEl0ZW0uYWRkQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfX2l0ZW1fYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5pc1N1Ym1lbnVBY3RpdmUoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkU3VibWVudUFjdGl2ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBZGQgZ2xvYmFsIGRhdGFcbiAgICAgICAgICAgIHRoaXMuaXNTdWJtZW51SXRlbSAgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zdWJtZW51SXRlbSAgICA9IHN1Ym1lbnVJdGVtO1xuICAgICAgICAgICAgdGhpcy5tZW51UGFyZW50SXRlbSA9IG1lbnVQYXJlbnRJdGVtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVudUl0ZW0uYWRkQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfX2l0ZW1fYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3VibWVudUFjdGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTdWJtZW51QWN0aXZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCBnbG9iYWwgZGF0YVxuICAgICAgICAgICAgdGhpcy5pc1N1Ym1lbnVJdGVtICA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zdWJtZW51SXRlbSAgICA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5tZW51UGFyZW50SXRlbSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIGdsb2JhbCBkYXRhXG4gICAgICAgIHRoaXMubWVudUl0ZW0gICA9IG1lbnVJdGVtO1xuICAgICAgICB0aGlzLm1lbnVJdGVtSUQgPSBtZW51SXRlbUlEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZXBhcmluZyBtZW51IGl0ZW1cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcHJlcE1lbnVJdGVtKG1lbnVJdGVtSUQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3VibWVudUl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMubWVudUl0ZW0ucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfX2l0ZW1fYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlTZWN0aW9uKG1lbnVJdGVtSUQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tZW51SXRlbS5yZW1vdmVDbGFzcygnemMtcGFuZWwtc3VibWVudV9faXRlbV9hY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMubWVudVBhcmVudEl0ZW0ucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfX2l0ZW1fYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLnN1Ym1lbnVJdGVtLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1zdWJtZW51X19jb250YWluZXJfYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlTZWN0aW9uKG1lbnVJdGVtSUQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRlbnQgLnpjLXNjcm9sbGJhcicpLnNjcm9sbFRvcCgwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXNrdG9wIG1vZGVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZGVza3RvcCgpIHtcbiAgICAgICAgbGV0IG1lbnVJdGVtSUQgPSAnJztcblxuICAgICAgICBpZiAoJC5wYXJhbS5mcmFnbWVudCgpKSB7XG4gICAgICAgICAgICBtZW51SXRlbUlEID0gJC5wYXJhbS5mcmFnbWVudCgpIHx8ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCQoYC56Yy1wYW5lbC1tZW51IGxpW2RhdGEtbWVudS1pdGVtLWlkPVwiJHttZW51SXRlbUlEfVwiXWApLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbGV0IG1lbnVJdGVtID0gJCgnLnpjLXBhbmVsLW1lbnVfX2xpc3QgLnpjLXBhbmVsLW1lbnVfX2l0ZW1fdHlwZV9zaW1wbGUnKS5maXJzdCgpO1xuICAgICAgICAgICAgbWVudUl0ZW1JRCA9IG1lbnVJdGVtLmRhdGEoJ21lbnUtaXRlbS1pZCcpO1xuXG4gICAgICAgICAgICBpZiAoIW1lbnVJdGVtSUQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJtZW51SXRlbUlEID0gbWVudUl0ZW0uZGF0YSgnbWVudS1jb250YWluZXItaWQnKTtcblxuICAgICAgICAgICAgICAgIG1lbnVJdGVtID0gJChgLnpjLXBhbmVsLXN1Ym1lbnVfX2NvbnRhaW5lcltkYXRhLW1lbnUtY29udGFpbmVyLWlkPSR7c3VibWVudUl0ZW1JRH1dIC56Yy1wYW5lbC1zdWJtZW51X19pdGVtX3R5cGVfc2ltcGxlYCkuZmlyc3QoKTtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUlEID0gbWVudUl0ZW0uZGF0YSgnbWVudS1pdGVtLWlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3BsYXlTZWN0aW9uKG1lbnVJdGVtSUQpO1xuXG4gICAgICAgIC8vIFdoZW4gaGFzaCBjaGFuZ2VcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdoYXNoY2hhbmdlLnpjLXBhbmVsJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgbWVudUl0ZW1JRCA9ICQucGFyYW0uZnJhZ21lbnQoKSA/ICQucGFyYW0uZnJhZ21lbnQoKSA6ICcnO1xuXG4gICAgICAgICAgICBpZiAoJChgLnpjLXBhbmVsLW1lbnUgbGlbZGF0YS1tZW51LWl0ZW0taWQ9XCIke21lbnVJdGVtSUR9XCJdYCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1JRCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1lbnVJdGVtSUQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJlcE1lbnVJdGVtKG1lbnVJdGVtSUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBXaGVuIGNsaWNrIG9uIHBhcmVudCBtZW51IGl0ZW1cbiAgICAgICAgdGhpcy5jbGljaygnLnpjLXBhbmVsLW1lbnVfX2l0ZW1fdHlwZV9wYXJlbnQnLCAoJHRoaXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1lbnVJdGVtSUQgPSAkdGhpcy5kYXRhKCdtZW51LWNvbnRhaW5lci1pZCcpO1xuICAgICAgICAgICAgY29uc3QgbWVudUl0ZW0gICAgICA9ICQoYC56Yy1wYW5lbC1zdWJtZW51X19jb250YWluZXJbZGF0YS1tZW51LWNvbnRhaW5lci1pZD0ke3N1Ym1lbnVJdGVtSUR9XSAuemMtcGFuZWwtc3VibWVudV9faXRlbV90eXBlX3NpbXBsZWApLmZpcnN0KCk7XG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbUlEICAgID0gbWVudUl0ZW0uZGF0YSgnbWVudS1pdGVtLWlkJyk7XG5cbiAgICAgICAgICAgIGlmIChtZW51SXRlbUlEICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IG1lbnVJdGVtSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFdoZW4gY2xpY2sgb24gbWVudSBpdGVtXG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1wYW5lbC1tZW51X19pdGVtX3R5cGVfc2ltcGxlOm5vdCguemMtcGFuZWwtbWVudV9faXRlbV9hY3RpdmUpJywgKCR0aGlzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbUlEID0gJHRoaXMuZGF0YSgnbWVudS1pdGVtLWlkJyk7XG5cbiAgICAgICAgICAgIGlmIChtZW51SXRlbUlEICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IG1lbnVJdGVtSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgLy8gV2hlbiBjbGljayBvbiBzdWJtZW51IGl0ZW1cbiAgICAgICAgdGhpcy5jbGljaygnLnpjLXBhbmVsLXN1Ym1lbnVfX2l0ZW1fdHlwZV9zaW1wbGU6bm90KC56Yy1wYW5lbC1zdWJtZW51X19pdGVtX2FjdGl2ZSknLCAoJHRoaXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtSUQgPSAkdGhpcy5kYXRhKCdtZW51LWl0ZW0taWQnKTtcblxuICAgICAgICAgICAgaWYgKG1lbnVJdGVtSUQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IG1lbnVJdGVtSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vYmlsZSBtb2RlXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIG1vYmlsZSgpIHtcbiAgICAgICAgdGhpcy5jbGljaygnLnpjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudScsICgkdGhpcykgPT4ge1xuICAgICAgICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnVfYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51X2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfbW9iaWxlLW1lbnUtdmlzaWJsZScpO1xuXG4gICAgICAgICAgICAgICAgJHRoaXMub25lKCd0cmFuc2l0aW9uZW5kIHdlYmtpdFRyYW5zaXRpb25FbmQgb1RyYW5zaXRpb25FbmQgTVNUcmFuc2l0aW9uRW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udHJvbHMnKS5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZSgnY2xvc2UtYmxvY2snKS5oaWRlRGVmaW5pdGVseSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51X2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykuYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfbW9iaWxlLW1lbnUtdmlzaWJsZScpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGluaXROYXZIZWlnaHQgPSAkKCcuemMtcGFuZWwtbWVudV9fY29udGFpbmVyJykuaGVpZ2h0KCksXG4gICAgICAgICAgICAgICAgICAgIG5hdkhlaWdodCAgICAgPSAkKCcuemMtcGFuZWwtbWVudV9fbGlzdCcpLmhlaWdodCgpICsgdGhpcy5nZXRDb25maWcoJ2hlaWdodC1GQUgnKSxcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHNIZWlnaHQgID0gJCgnLnpjLXBhbmVsLWNvbnRyb2xzJykuaGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5pdE5hdkhlaWdodCA+IG5hdkhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBuYXZIZWlnaHQgPSBpbml0TmF2SGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChuYXZIZWlnaHQgPiBjb250cm9sc0hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udHJvbHMnKS5oZWlnaHQobmF2SGVpZ2h0IC0gdGhpcy5nZXRDb25maWcoJ2hlaWdodC1GQUgnKSk7XG4gICAgICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1zdWJtZW51X19zY3JvbGxiYXItY29udGFpbmVyJykuaGVpZ2h0KG5hdkhlaWdodCAtIHRoaXMuZ2V0Q29uZmlnKCdoZWFkZXItaGVpZ2h0JykpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBtZW51SXRlbUlEID0gJC5wYXJhbS5mcmFnbWVudCgpID8gJC5wYXJhbS5mcmFnbWVudCgpIDogJyc7XG5cbiAgICAgICAgICAgICAgICBpZiAoJChgLnpjLXBhbmVsLW1lbnUgbGlbZGF0YS1tZW51LWl0ZW0taWQ9XCIke21lbnVJdGVtSUR9XCJdYCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtSUQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG1lbnVJdGVtSUQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXBNZW51SXRlbShtZW51SXRlbUlEKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UoJ2Nsb3NlLWJsb2NrJykuc2hvdygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsYmFyVG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQod2luZG93KS5vbignemMvY2xvc2UtYmxvY2suemMtcGFuZWwnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoJCgnLnpjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudScpLmhhc0NsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnVfYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudV9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250ZW50X21vYmlsZS1tZW51LXZpc2libGUnKTtcblxuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnUnKS5vbmUoJ3RyYW5zaXRpb25lbmQgd2Via2l0VHJhbnNpdGlvbkVuZCBvVHJhbnNpdGlvbkVuZCBNU1RyYW5zaXRpb25FbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250cm9scycpLmhlaWdodCgnYXV0bycpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlKCdjbG9zZS1ibG9jaycpLmhpZGVEZWZpbml0ZWx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1wYW5lbC1zdWJtZW51X19oZWFkZXItc2VjdGlvbl9tb2RlX21vYmlsZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU3VibWVudUFjdGl2ZSgpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxiYXJUb3AoKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyc7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWlCQTs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQVNBOzs7Ozs7O0FBUUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBcEJBO0FBQ0E7QUF1QkE7QUFDQTtBQUVBO0FBQ0E7QUF0Q0E7QUFzQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQ0E7QUFrQ0E7QUFDQTs7OztBQWpPQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7QUFRQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7QUFRQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQW5CQTtBQW9CQTtBQUVBOzs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUE5REE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7QUFRQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQVRBO0FBU0E7QUFFQTs7Ozs7Ozs7OztBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBM0JBO0FBQ0E7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7OztBQXRNQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7QUFRQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaE9BO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUFTQTs7Ozs7OztBQVFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBWkE7QUFXQTtBQUVBOzs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7QUExUkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==