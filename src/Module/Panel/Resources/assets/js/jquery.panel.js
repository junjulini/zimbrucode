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



zc.setModule('panel', function ($) {
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
    // Set control
    setControl: function setControl(callback) {
      var scripts = document.getElementsByTagName('script'),
          scriptLocation = scripts[scripts.length - 1].src,
          dataH = scriptLocation.split('/'),
          controlName = dataH[dataH.length - 5];
      var controlVars = panel.getVar('controls')[controlName];
      panel.service('callback').set('control', callback, controlVars);
    },
    // Set mode
    setMode: function setMode(callback) {
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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
      this.service('menu').itemSwitch(); // Initialization of menu

      this.service('menu').mobile(); // Initialization of mobile menu
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
        zc.popup().set($.extend({}, defaults, settings));
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
   * Set panel callback
   * 
   * @return {null} None
   * @since 1.0.0
   */


  _createClass(Callback, [{
    key: "set",
    value: function set(name, callback, additional) {
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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
          section.find('[data-control=condition][data-condition]').each(function (index, el) {
            _this2.parse($(el), true);
          });
        }
      });
    }
  }, {
    key: "onChange",
    value: function onChange() {
      var _this3 = this;

      $('.zc-panel .zc-panel-controls [data-control=condition]').on('change', '[data-control=option]', function (event) {
        event.preventDefault();
        event.stopPropagation();
        /* Act on the event */

        var name = $(event.currentTarget).attr('name');

        if (_this3.cache[name] !== undefined) {
          $.each(_this3.cache[name], function (index, el) {
            _this3.parse(el);
          });
        }

        _this3.setCache('changed', true);

        $(window).trigger('zc/panel/if-changed');
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

      $('.zc-panel .zc-panel-controls [data-control=condition][data-condition]').each(function (index, el) {
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
          operator = (control.data('operator') || 'and').toLowerCase();
      $.each(conditions, function (index, condition) {
        var target = $(".zc-panel .zc-panel-controls [name=".concat(_this5.getVar('prefix-slug')).concat(condition.check, "]"));

        if (target.length > 0 && target.is('[data-control=option]')) {
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
        this.setCache('wp-body-height', $(window).height());
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
     * Set global var value
     * 
     * @param {string} key   Key/Path
     * @param {mix}    data  Var value
     * @since 1.0.0
     */

  }, {
    key: "setVar",
    value: function setVar(key, data) {
      zc.deepFindAndSetting(this.global.vars, key, data);
    }
    /**
     * Set global cache value
     * 
     * @param {string} key   Key/Path
     * @param {mix}    data  Cache value
     * @since 1.0.0
     */

  }, {
    key: "setCache",
    value: function setCache(key, data) {
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
     * Set global config value
     * 
     * @param {string} key   Key/Path
     * @param {mix}    data  Config value
     * @since 1.0.0
     */

  }, {
    key: "setConfig",
    value: function setConfig(key, data) {
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
          this.setCache("services/".concat(name), callback);
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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
     * Mobile mode
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "mobile",
    value: function mobile() {
      var _this2 = this;

      this.click('.zc-panel-header__controller-button_type_mobile-menu', function ($this) {
        if ($this.hasClass('zc-panel-header__controller-button_type_mobile-menu_active')) {
          $this.removeClass('zc-panel-header__controller-button_type_mobile-menu_active');
          $('.zc-panel-content').removeClass('zc-panel-content_mobile-menu-visible');
          $this.one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function () {
            $('.zc-panel-controls').height('auto');
          });

          _this2.service('close-block').hideDefinitely();
        } else {
          $this.addClass('zc-panel-header__controller-button_type_mobile-menu_active');
          $('.zc-panel-content').addClass('zc-panel-content_mobile-menu-visible');

          var initNavHeight = $('.zc-panel-menu__container').height(),
              navHeight = $('.zc-panel-menu__list').height() + _this2.getConfig('height-FAH'),
              controlsHeight = $('.zc-panel-controls').height();

          if (initNavHeight > navHeight) {
            navHeight = initNavHeight;
          }

          if (navHeight > controlsHeight) {
            $('.zc-panel-controls').height(navHeight - _this2.getConfig('height-FAH'));
            $('.zc-panel-submenu__scrollbar-container').height(navHeight - _this2.getConfig('header-height'));
          }

          var menuItemID = $.param.fragment() ? $.param.fragment() : '';

          if ($('.zc-panel-menu li[data-menu-item-id="' + menuItemID + '"]').length === 0) {
            menuItemID = undefined;
          }

          if (menuItemID !== undefined) {
            _this2.prepMenuItem(menuItemID);
          }

          _this2.service('close-block').show();

          _this2.scrollbarTop();
        }
      });
      $(window).on('zc/close-block.zc-panel', function () {
        if ($('.zc-panel-header__controller-button_type_mobile-menu').hasClass('zc-panel-header__controller-button_type_mobile-menu_active')) {
          $('.zc-panel-header__controller-button_type_mobile-menu').removeClass('zc-panel-header__controller-button_type_mobile-menu_active');
          $('.zc-panel-content').removeClass('zc-panel-content_mobile-menu-visible');
          $('.zc-panel-header__controller-button_type_mobile-menu').one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function (event) {
            $('.zc-panel-controls').height('auto');
          });

          _this2.service('close-block').hideDefinitely();
        }
      });
      this.click('.zc-panel-submenu__header-section_mode_mobile', function () {
        _this2.removeSubmenuActive();

        _this2.scrollbarTop();
      });
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
      var menuItem = $('.zc-panel-menu li[data-menu-item-id="' + menuItemID + '"]');
      menuItem.addClass('zc-panel-menu__item_active'); // Set icon

      var titleIconClass = menuItem.find('i').first().attr('class').match(/\bzc-icon-\S+/g)[0];
      $('.zc-panel-header__title-icon').removeClass(function (index, className) {
        return (className.match(/\bzc-icon-\S+/g) || []).join(' ');
      }).addClass(titleIconClass); // Set title

      $('.zc-panel-header__title').text(menuItem.find('span').text()); // Remove / active content section

      if (this.menuItemID) {
        $('.zc-panel-controls__section[data-section="' + this.menuItemID + '"]').removeClass('zc-panel-controls__section_active');
      }

      var section = $('.zc-panel-controls__section[data-section="' + menuItemID + '"]');
      section.addClass('zc-panel-controls__section_active');
      $(window).trigger('zc/panel/menu/item-change');
      this.setCache('menu/current-section', section);

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
        var menuParentItem = $('.zc-panel-menu__item_type_parent[data-menu-container-id="' + submenuItemID + '"]');
        menuParentItem.addClass('zc-panel-menu__item_active');

        if (!this.isSubmenuActive()) {
          this.addSubmenuActive();
        } // Set global data


        this.isSubmenuItem = true;
        this.submenuItem = submenuItem;
        this.menuParentItem = menuParentItem;
      } else {
        if (this.isSubmenuActive()) {
          this.removeSubmenuActive();
        } // Set global data


        this.isSubmenuItem = false;
        this.submenuItem = false;
        this.menuParentItem = false;
      } // Set global data


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
        this.menuItem.removeClass('zc-panel-menu__item_active');
        this.menuParentItem.removeClass('zc-panel-menu__item_active');
        this.submenuItem.removeClass('zc-panel-submenu__container_active');
        this.displaySection(menuItemID);
      }

      $('.zc-panel-content .zc-scrollbar').scrollTop(0);
    }
    /**
     * Menu item switch
     * 
     * @return {null} None
     * @since 1.0.0
     */

  }, {
    key: "itemSwitch",
    value: function itemSwitch() {
      var _this3 = this;

      var menuItemID = '';

      if ($.param.fragment()) {
        menuItemID = $.param.fragment();
      } else {
        var menuItem = $('.zc-panel-menu__list .zc-panel-menu__item_type_simple').first();
        menuItemID = menuItem.data('menu-item-id');

        if (!menuItemID) {
          var submenuItemID = menuItem.data('menu-container-id');
          menuItem = $('.zc-panel-submenu__container[data-menu-container-id=' + submenuItemID + '] .zc-panel-submenu__item_type_simple').first();
          menuItemID = menuItem.data('menu-item-id');
        }
      }

      if ($('.zc-panel-menu li[data-menu-item-id="' + menuItemID + '"]').length === 0) {
        var _menuItem = $('.zc-panel-menu__list .zc-panel-menu__item_type_simple').first();

        menuItemID = _menuItem.data('menu-item-id');

        if (!menuItemID) {
          var _submenuItemID = _menuItem.data('menu-container-id');

          _menuItem = $('.zc-panel-submenu__container[data-menu-container-id=' + _submenuItemID + '] .zc-panel-submenu__item_type_simple').first();
          menuItemID = _menuItem.data('menu-item-id');
        }
      }

      this.displaySection(menuItemID); // When hash change

      $(window).on('hashchange.zc-panel', function (event) {
        var menuItemID = $.param.fragment() ? $.param.fragment() : '';

        if ($('.zc-panel-menu li[data-menu-item-id="' + menuItemID + '"]').length === 0) {
          menuItemID = undefined;
        }

        if (menuItemID !== undefined) {
          _this3.prepMenuItem(menuItemID);
        }
      }); // When click on submenu item

      this.click('.zc-panel-submenu__item_type_simple:not(.zc-panel-menu__item_active)', function ($this) {
        var menuItemID = $this.data('menu-item-id'); // Change hash

        if (menuItemID) {
          window.location.hash = menuItemID;
        }
      }); // When click on menu item

      this.click('.zc-panel-menu__item_type_simple', function ($this) {
        if ($this.hasClass('zc-panel-menu__item_active') && !$this.hasClass('zc-panel-menu__item_type_parent')) {
          return false;
        }

        if ($this.hasClass('zc-panel-menu__item_active')) {
          if (!_this3.isSubmenuActive()) {
            _this3.addSubmenuActive();
          }

          return false;
        }

        var menuItemID = $this.data('menu-item-id'); // Change hash

        if (menuItemID !== undefined) {
          window.location.hash = menuItemID;

          _this3.prepMenuItem(menuItemID);
        } else {
          if (!_this3.isSubmenuActive()) {
            _this3.addSubmenuActive();
          }

          var _submenuItemID2 = $this.data('menu-container-id');

          var submenuItemSection = $('.zc-panel-submenu__container[data-menu-container-id=' + _submenuItemID2 + ']');
          submenuItemSection.addClass('zc-panel-submenu__container_active');
          submenuItemSection.find('.zc-scrollbar').scrollTop(0);
          $this.addClass('zc-panel-menu__item_active');

          if (!_this3.menuParentItem && _this3.menuItem) {
            _this3.menuItem.removeClass('zc-panel-menu__item_active');
          }

          if (_this3.menuParentItem) {
            _this3.menuParentItem.removeClass('zc-panel-menu__item_active');

            _this3.submenuItem.removeClass('zc-panel-submenu__container_active');
          } // Set global data


          _this3.isSubmenuItem = true;
          _this3.menuParentItem = $this;
          _this3.submenuItem = submenuItemSection;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvanF1ZXJ5LnBhbmVsLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvanF1ZXJ5LnBhbmVsLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2NhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2Nsb3NlLWJsb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2NvbmRpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9rZXJuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG4iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgWmltYnJ1Q29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsXG4gKlxuICogQGF1dGhvciAgSnVuanVsaW5pXG4gKiBAcGFja2FnZSBaaW1icnVDb2RlXG4gKiBAc2luY2UgICBaaW1icnVDb2RlIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQmFzZSBmcm9tICcuL21vZHVsZS9iYXNlJztcblxuemMuc2V0TW9kdWxlKCdwYW5lbCcsICgkKSA9PiB7XG5cbiAgICBjb25zdCBwYW5lbCA9IG5ldyBCYXNlO1xuICAgIFxuICAgIC8vIEFmdGVyIGxvYWRpbmcgcGFnZVxuICAgICQoKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHBhbmVsLm1vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93ICdwYW5lbC5tb2RlIGlzIHVuZGVmaW5lZCc7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpZiAoISQuaXNGdW5jdGlvbihwYW5lbC5tb2RlKSkge1xuICAgICAgICAgICAgICAgIHRocm93ICdwYW5lbC5tb2RlIGlzIG5vdCBmdW5jdGlvbic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhbmVsLmNoZWNrQnJvd3NlckNvbXBhdGliaWxpdHkoKTtcblxuICAgICAgICAgICAgbmV3IHBhbmVsLm1vZGUoJCwgcGFuZWwpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKCQoJy56Yy1wYW5lbC10ZW1wbGF0ZScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtdGVtcGxhdGUnKS5lbXB0eSgpLmFwcGVuZChgPGRpdiBjbGFzcz1cImVycm9yIG5vdGljZVwiPjxwPjxiPiR7cGFuZWwuZ2V0VmFyKCdicm93c2VyLWVycm9yLXRpdGxlJyl9PC9iPiA6ICR7ZXJyb3J9PC9wPjwvZGl2PmApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjd3Bib2R5LWNvbnRlbnQnKS5wcmVwZW5kKGA8ZGl2IGNsYXNzPVwiZXJyb3Igbm90aWNlXCI+PHA+PGI+JHtwYW5lbC5nZXRWYXIoJ2Jyb3dzZXItZXJyb3ItdGl0bGUnKX08L2I+IDogJHtlcnJvcn08L3A+PC9kaXY+YCk7XG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7cGFuZWwuZ2V0VmFyKCdicm93c2VyLWVycm9yLXRpdGxlJyl9IDogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gIyMjIyMjIyMjIyMjIyBQVUJMSUMgTUVUSE9EUyAjIyMjIyMjIyMjIyMjXG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBTZXQgY29udHJvbFxuICAgICAgICBzZXRDb250cm9sOiAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JyksXG4gICAgICAgICAgICAgICAgICBzY3JpcHRMb2NhdGlvbiA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmMsXG4gICAgICAgICAgICAgICAgICBkYXRhSCA9IHNjcmlwdExvY2F0aW9uLnNwbGl0KCcvJyksXG4gICAgICAgICAgICAgICAgICBjb250cm9sTmFtZSA9IGRhdGFIW2RhdGFILmxlbmd0aCAtIDVdO1xuXG4gICAgICAgICAgICBjb25zdCBjb250cm9sVmFycyA9IHBhbmVsLmdldFZhcignY29udHJvbHMnKVtjb250cm9sTmFtZV07XG4gICAgICAgICAgICBwYW5lbC5zZXJ2aWNlKCdjYWxsYmFjaycpLnNldCgnY29udHJvbCcsIGNhbGxiYWNrLCBjb250cm9sVmFycyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gU2V0IG1vZGVcbiAgICAgICAgc2V0TW9kZTogKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBwYW5lbC5tb2RlID0gY2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICB9XG59KTsiLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgWmltYnJ1Q29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZSA6IEJhc2VcbiAqXG4gKiBAYXV0aG9yICBKdW5qdWxpbmlcbiAqIEBwYWNrYWdlIFppbWJydUNvZGVcbiAqIEBzaW5jZSAgIFppbWJydUNvZGUgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBLZXJuZWwgICAgIGZyb20gJy4va2VybmVsJztcbmltcG9ydCBDbG9zZUJsb2NrIGZyb20gJy4vY2xvc2UtYmxvY2snO1xuaW1wb3J0IENhbGxiYWNrICAgZnJvbSAnLi9jYWxsYmFjayc7XG5pbXBvcnQgTWVudSAgICAgICBmcm9tICcuL21lbnUnO1xuaW1wb3J0IENvbmRpdGlvbiAgZnJvbSAnLi9jb25kaXRpb24nO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlIGV4dGVuZHMgS2VybmVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAvLyBHbG9iYWwgY2FjaGVcbiAgICAgICAgdGhpcy5nbG9iYWwuY2FjaGUgPSB7XG4gICAgICAgICAgICBjaGFuZ2VkOiBmYWxzZSxcbiAgICAgICAgICAgIHNlcnZpY2VzOiB7fVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEdsb2JhbCBjb25maWdcbiAgICAgICAgdGhpcy5nbG9iYWwuY29uZmlnID0ge1xuXG4gICAgICAgICAgICAvLyBSaWdodCBtYXJnaW5cbiAgICAgICAgICAgJ3JpZ2h0LW1hcmdpbic6IHtcbiAgICAgICAgICAgICAgICBkZXNrdG9wOiAyMCxcbiAgICAgICAgICAgICAgICBtb2JpbGU6IDEwXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnYm90dG9tLW1hcmdpbic6IDQyLCBcbiAgICAgICAgICAgICdmb290ZXItaGVpZ2h0JzogNTYsICAgIC8vIEhlaWdodCBvZiBmb290ZXJcbiAgICAgICAgICAgICdoZWFkZXItaGVpZ2h0JzogNTYsICAgIC8vIEhlaWdodCBvZiBoZWFkZXJcbiAgICAgICAgICAgICdoZWlnaHQtRkFIJzogICAgMTEyLCAgIC8vIEhlaWdodCBvZiBmb290ZXIgJiBoZWFkZXJcbiAgICAgICAgICAgICd3cC1ib2R5LWhlaWdodCc6IDAsICAgIC8vIFdwIGJvZHkgaGVpZ2h0XG5cbiAgICAgICAgICAgICdtaW4tc2l6ZSc6IHtcbiAgICAgICAgICAgICAgICAnYm9keS1oZWlnaHQnOiA1MDAsIC8vIE1pbiBwYW5lbCBib2R5IGhlaWdodFxuICAgICAgICAgICAgICAgIG1vZGUxOiA0OTAsXG4gICAgICAgICAgICAgICAgbW9kZTI6IDk1MFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJ3dwLWFkbWluLWJhci1oZWlnaHQnOiAzMlxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEdsb2JhbCB2YXJzXG4gICAgICAgIHRoaXMuZ2xvYmFsLnZhcnMgPSB6Y1BhbmVsVmFycztcblxuICAgICAgICAvLyBBZGQgc2VydmljZSA6IENhbGxiYWNrXG4gICAgICAgIHRoaXMuc2VydmljZSgnY2FsbGJhY2snLCBuZXcgQ2FsbGJhY2spO1xuICAgIH1cblxuICAgIGNoZWNrQnJvd3NlckNvbXBhdGliaWxpdHkoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoYSA9PiB7fSk7XG4gICAgICAgICAgICBuZXcgUmVzaXplT2JzZXJ2ZXIoYSA9PiB7fSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldFZhcignYnJvd3Nlci1lcnJvci1zdWJqZWN0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYW5lbCBtZW51XG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIG1lbnUoKSB7XG4gICAgICAgIHRoaXMuc2VydmljZSgnbWVudScsIG5ldyBNZW51KTtcblxuICAgICAgICB0aGlzLnNlcnZpY2UoJ21lbnUnKS5pdGVtU3dpdGNoKCk7IC8vIEluaXRpYWxpemF0aW9uIG9mIG1lbnVcbiAgICAgICAgdGhpcy5zZXJ2aWNlKCdtZW51JykubW9iaWxlKCk7ICAgICAvLyBJbml0aWFsaXphdGlvbiBvZiBtb2JpbGUgbWVudVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhbmVsIDogSW5pdCBjYWxsYmFjayBvZiBjbG9zZSBibG9jay5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY2xvc2VCbG9jaygpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlKCdjbG9zZS1ibG9jaycsIG5ldyBDbG9zZUJsb2NrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYW5lbCBzY3JvbGwgYmFyXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHNjcm9sbGJhcigpIHtcbiAgICAgICAgaWYgKCF6Yy5pc01vYmlsZSgpICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpID09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBwcml2ID0ge307XG5cbiAgICAgICAgICAgIHByaXYuY2hlY2tJZkFjdGl2ZSA9IChwYXJlbnQsIGNoaWxkcmVuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50SGVpZ2h0ICAgPSBwYXJlbnQub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW5IZWlnaHQgPSBjaGlsZHJlbi5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRIZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbkhlaWdodCA+IHBhcmVudEhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFkZENsYXNzKCd6Yy1zY3JvbGxiYXJfYWN0aXZlJywpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNsYXNzKCd6Yy1zY3JvbGxiYXJfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBwcml2LnJvID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyaWVzWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdi5jaGVja0lmQWN0aXZlKCQoZW50cnkudGFyZ2V0KS5wYXJlbnQoKSwgJChlbnRyeS50YXJnZXQpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy56Yy1wYW5lbCAuemMtc2Nyb2xsYmFyJykuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJpdi5yby5vYnNlcnZlKCQoZWwpLmNoaWxkcmVuKCkuZmlyc3QoKS5nZXQoMCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQod2luZG93KS5vbignemMvcGFuZWwvc2l6ZS1jaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbCAuemMtc2Nyb2xsYmFyJykuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByaXYuY2hlY2tJZkFjdGl2ZSgkKGVsKSwgJChlbCkuY2hpbGRyZW4oKS5maXJzdCgpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIG1ldGEgdmlld3BvcnQgaWYgbW9iaWxlXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIG5vTWV0YVNjYWxlSWZNb2JpbGUoKSB7XG4gICAgICAgIGlmICh6Yy5pc01vYmlsZSgpKSB7XG4gICAgICAgICAgICAkKCdoZWFkIG1ldGFbbmFtZT12aWV3cG9ydF0nKS5hdHRyKCdjb250ZW50JywgJ3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPTAnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhbmVsIGNvbmRpdGlvbiBjaGVja2VyLlxuICAgICAqIFxuICAgICAqIEB0eXBlICB7T2JqZWN0fVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNvbmRpdGlvbigpIHtcbiAgICAgICAgbmV3IENvbmRpdGlvbih0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiBzb21lIGNoYW5nZXMgd2FzIG1hZGVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IE1lc3NhZ2VcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBpZkNoYW5nZWQoKSB7XG4gICAgICAgICQod2luZG93KS5vbignYmVmb3JldW5sb2FkLnpjLXBhbmVsJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Q2FjaGUoJ2NoYW5nZWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhcignaWYtY2hhbmdlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb250cm9sIGhlbHBcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY29udHJvbEhlbHAoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgd2lkdGg6IDYwMCxcbiAgICAgICAgICAgIGhlaWdodDogMjUwXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jbGljaygnLnpjLXBhbmVsLWhlbHBfX3N0YXJ0ZXJfdHlwZV9zaW1wbGUnLCAoJHRoaXMpID0+IHtcbiAgICAgICAgICAgIGxldCBzZXR0aW5ncyA9ICR0aGlzLmRhdGEoJ3NldHRpbmdzJyk7XG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MgPT09IHVuZGVmaW5lZCB8fCBzZXR0aW5ncyA9PT0gJycgfHwgc2V0dGluZ3MgPT0gbnVsbCkgc2V0dGluZ3MgPSB7fTtcblxuICAgICAgICAgICAgZGVmYXVsdHMudGl0bGUgPSAkdGhpcy5hdHRyKCd0aXRsZScpO1xuICAgICAgICAgICAgZGVmYXVsdHMuaHRtbCAgPSAkdGhpcy5wYXJlbnQoKS5maW5kKCcuemMtcGFuZWwtaGVscF9fY29udGVudCcpLnRleHQoKTtcblxuICAgICAgICAgICAgemMucG9wdXAoKS5zZXQoJC5leHRlbmQoe30sIGRlZmF1bHRzLCBzZXR0aW5ncykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb250cm9scyBpbml0aWFsaXphdGlvblxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjb250cm9sSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlKCdjYWxsYmFjaycpLnJ1bignY29udHJvbCcsICQsIHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvb2x0aXBcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgdG9vbHRpcCgpIHtcbiAgICAgICAgaWYgKHpjLmlzTW9iaWxlKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwgW2RhdGEtdG9vbHRpcF0nKS50aXBzeSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdkYXRhLXRvb2x0aXAnLFxuICAgICAgICAgICAgICAgIGdyYXZpdHk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSAkKHRoaXMpLmRhdGEoJ3Rvb2x0aXAtcG9zaXRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdzJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ24nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ24nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnbic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9mZnNldDogMyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJcclxuLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFppbWJydUNvZGUgcGFja2FnZS5cclxuICpcclxuICogKGMpIEp1bmp1bGluaVxyXG4gKlxyXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxyXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cclxuICovXHJcblxyXG4vKlxyXG4gKiBTY3JpcHQgOiBQYW5lbC9Nb2R1bGUgOiBDYWxsYmFja1xyXG4gKlxyXG4gKiBAYXV0aG9yICBKdW5qdWxpbmlcclxuICogQHBhY2thZ2UgWmltYnJ1Q29kZVxyXG4gKiBAc2luY2UgICBaaW1icnVDb2RlIDEuMC4wXHJcbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgJCA9IGpRdWVyeTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGxiYWNrIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBwYW5lbCBjYWxsYmFja1xyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXHJcbiAgICAgKiBAc2luY2UgMS4wLjBcclxuICAgICAqL1xyXG4gICAgc2V0KG5hbWUsIGNhbGxiYWNrLCBhZGRpdGlvbmFsKSB7XHJcbiAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2tbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFja1tuYW1lXSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrW25hbWVdLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxyXG4gICAgICAgICAgICAgICAgYWRkaXRpb25hbDogYWRkaXRpb25hbFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgIC8qKlxyXG4gICAgICogUnVuIHBhbmVsIGNhbGxiYWNrXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcclxuICAgICAqIEBzaW5jZSAxLjAuMFxyXG4gICAgICovXHJcbiAgICBydW4obmFtZSkge1xyXG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQgJiYgbmFtZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmFwcGx5KGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIGFyZ3Muc2hpZnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbGxiYWNrW25hbWVdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5jYWxsYmFja1tuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBBcmdzID0gJC5leHRlbmQodHJ1ZSwgW10sIGFyZ3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxsYmFja1tuYW1lXVtpXS5hZGRpdGlvbmFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcEFyZ3MucHVzaCh0aGlzLmNhbGxiYWNrW25hbWVdW2ldLmFkZGl0aW9uYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFja1tuYW1lXVtpXS5jYWxsYmFjay5hcHBseSh0aGlzLCBwQXJncyk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFppbWJydUNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBQYW5lbC9Nb2R1bGUgOiBDbG9zZUJsb2NrXG4gKlxuICogQGF1dGhvciAgSnVuanVsaW5pXG4gKiBAcGFja2FnZSBaaW1icnVDb2RlXG4gKiBAc2luY2UgICBaaW1icnVDb2RlIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgS2VybmVsIGZyb20gJy4va2VybmVsJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvc2VCbG9jayBleHRlbmRzIEtlcm5lbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pc09wZW4gPSAwO1xuXG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1wYW5lbC1jb250cm9sc19fY2xvc2UtYmxvY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvY2xvc2UtYmxvY2snKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCd6Yy9jbG9zZS1ibG9jay9zaG93JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQod2luZG93KS5vbignemMvY2xvc2UtYmxvY2svaGlkZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3pjL2Nsb3NlLWJsb2NrL2hpZGUtZGVmaW5pdGVseScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZURlZmluaXRlbHkoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBjbG9zZSBibG9ja1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzaG93KCkge1xuICAgICAgICAkKCcuemMtcGFuZWwtY29udHJvbHNfX2Nsb3NlLWJsb2NrJykuYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19jbG9zZS1ibG9ja19hY3RpdmUnKTtcbiAgICAgICAgdGhpcy5pc09wZW4rKztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIGNsb3NlIGJsb2NrXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGhpZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3BlbiA9PT0gMSkge1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRyb2xzX19jbG9zZS1ibG9jaycpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19fY2xvc2UtYmxvY2tfYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzT3Blbi0tO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNPcGVuIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgYmxvY2sgZGVmaW5pdGVseVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBoaWRlRGVmaW5pdGVseSgpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRyb2xzX19jbG9zZS1ibG9jaycpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19fY2xvc2UtYmxvY2tfYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gMDtcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL2Nsb3NlLWJsb2NrJyk7XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBaaW1icnVDb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwvTW9kdWxlIDogQ29uZGl0aW9uXG4gKlxuICogQGF1dGhvciAgSnVuanVsaW5pXG4gKiBAcGFja2FnZSBaaW1icnVDb2RlXG4gKiBAc2luY2UgICBaaW1icnVDb2RlIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgS2VybmVsIGZyb20gJy4va2VybmVsJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZGl0aW9uIGV4dGVuZHMgS2VybmVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmNhY2hlID0ge307XG4gICAgICAgIHRoaXMucmVnZXggPSAvKC4rPyk6KG5vdEVtcHR5fGVtcHR5fGlzfG5vdHxjb250YWluc3w8fDw9fD58Pj0pXFwoKC4qPylcXCksPy9nO1xuXG4gICAgICAgIHRoaXMuZmlyc3RTdGFydCgpO1xuICAgICAgICB0aGlzLmRhdGFDYWNoaW5nKCk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsIHBhcnNpbmdcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZmlyc3RTdGFydCgpIHtcbiAgICAgICAgJCh3aW5kb3cpLm9uKCd6Yy9wYW5lbC9tZW51L2l0ZW0tY2hhbmdlLUlDUCcsIChldmVudCwgc2VjdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKHNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBzZWN0aW9uLmZpbmQoJ1tkYXRhLWNvbnRyb2w9Y29uZGl0aW9uXVtkYXRhLWNvbmRpdGlvbl0nKS5lYWNoKChpbmRleCwgZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZSgkKGVsKSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKCkge1xuICAgICAgICAkKCcuemMtcGFuZWwgLnpjLXBhbmVsLWNvbnRyb2xzIFtkYXRhLWNvbnRyb2w9Y29uZGl0aW9uXScpLm9uKCdjaGFuZ2UnLCAnW2RhdGEtY29udHJvbD1vcHRpb25dJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmF0dHIoJ25hbWUnKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY2FjaGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICQuZWFjaCh0aGlzLmNhY2hlW25hbWVdLCAoaW5kZXgsIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2UoZWwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgdGhpcy5zZXRDYWNoZSgnY2hhbmdlZCcsIHRydWUpO1xuICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL2lmLWNoYW5nZWQnKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWNoZSBkYXRhXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGRhdGFDYWNoaW5nKCkge1xuICAgICAgICAkKCcuemMtcGFuZWwgLnpjLXBhbmVsLWNvbnRyb2xzIFtkYXRhLWNvbnRyb2w9Y29uZGl0aW9uXVtkYXRhLWNvbmRpdGlvbl0nKS5lYWNoKChpbmRleCwgZWwpID0+IHtcbiAgICAgICAgICAgIGxldCBtYXRjaDtcblxuICAgICAgICAgICAgd2hpbGUgKG1hdGNoID0gdGhpcy5yZWdleC5leGVjKCQoZWwpLmRhdGEoJ2NvbmRpdGlvbicpKSkge1xuICAgICAgICAgICAgICAgIGxldCBrZXkgPSB0aGlzLmdldFZhcigncHJlZml4LXNsdWcnKSArIG1hdGNoWzFdO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FjaGVba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVba2V5XSA9IFtdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVba2V5XS5wdXNoKCQoZWwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2UgYnkgY29uZGl0aW9uc1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwYXJzZShjb250cm9sLCBkaXJlY3QpIHtcbiAgICAgICAgbGV0IHBhc3NlZCxcbiAgICAgICAgICAgIGNvbmRpdGlvbnMgPSB0aGlzLnByZXBDb25kaXRpb25zKGNvbnRyb2wuZGF0YSgnY29uZGl0aW9uJykpLFxuICAgICAgICAgICAgb3BlcmF0b3IgICA9IChjb250cm9sLmRhdGEoJ29wZXJhdG9yJykgfHwgJ2FuZCcpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgJC5lYWNoKGNvbmRpdGlvbnMsIChpbmRleCwgY29uZGl0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSAkKGAuemMtcGFuZWwgLnpjLXBhbmVsLWNvbnRyb2xzIFtuYW1lPSR7dGhpcy5nZXRWYXIoJ3ByZWZpeC1zbHVnJyl9JHtjb25kaXRpb24uY2hlY2t9XWApO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmxlbmd0aCA+IDAgJiYgdGFyZ2V0LmlzKCdbZGF0YS1jb250cm9sPW9wdGlvbl0nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHYxID0gdGFyZ2V0LnZhbCgpICE9PSBudWxsID8gdGFyZ2V0LnZhbCgpLnRvU3RyaW5nKCkgOiAnJztcbiAgICAgICAgICAgICAgICBjb25zdCB2MiA9IGNvbmRpdGlvbi52YWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvbmRpdGlvbi5ydWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gKHBhcnNlSW50KHYxKSA8IHBhcnNlSW50KHYyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnPD0nOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gKHBhcnNlSW50KHYxKSA8PSBwYXJzZUludCh2MikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gKHBhcnNlSW50KHYxKSA+IHBhcnNlSW50KHYyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnPj0nOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gKHBhcnNlSW50KHYxKSA+PSBwYXJzZUludCh2MikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NvbnRhaW5zJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICh2MS5pbmRleE9mKHYyKSAhPT0gLTEgPyB0cnVlIDogZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2lzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICh2MSA9PSB2Mik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbm90JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICh2MSAhPSB2Mik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbm90RW1wdHknOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdjEgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW1wdHknOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gIXYxID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCd1bmRlZmluZWQnID09IHR5cGVvZiBwYXNzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFzc2VkID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnb3InOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc2VkID0gKHBhc3NlZCB8fCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FuZCc6XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzZWQgPSAocGFzc2VkICYmIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChkaXJlY3QgJiYgZGlyZWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19faXRlbV9zaG93Jyk7XG4gICAgICAgICAgICAgICAgY29udHJvbC5kYXRhKCdjb25kaXRpb24tc2hvdycsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250cm9sLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19faXRlbV9oaWRlJyk7XG4gICAgICAgICAgICAgICAgY29udHJvbC5kYXRhKCdjb25kaXRpb24tc2hvdycsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbC5kYXRhKCdjb25kaXRpb24tc2hvdycpICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2wucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19pdGVtX2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbC5hZGRDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX2l0ZW1fc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sLmRhdGEoJ2NvbmRpdGlvbi1zaG93JywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbC5kYXRhKCdjb25kaXRpb24tc2hvdycpICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19faXRlbV9zaG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2wuYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19pdGVtX2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbC5kYXRhKCdjb25kaXRpb24tc2hvdycsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwYXNzZWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJlcGFyaW5nIGNvbmRpdGlvbnNcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcHJlcENvbmRpdGlvbnMoY29uZGl0aW9uKSB7XG4gICAgICAgIGxldCBtYXRjaCxcbiAgICAgICAgICAgIGNvbmRpdGlvbnMgPSBbXTtcblxuICAgICAgICB3aGlsZSAobWF0Y2ggPSB0aGlzLnJlZ2V4LmV4ZWMoY29uZGl0aW9uKSkge1xuICAgICAgICAgICAgY29uZGl0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAnY2hlY2snOiBtYXRjaFsxXSxcbiAgICAgICAgICAgICAgICAncnVsZSc6ICBtYXRjaFsyXSxcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBtYXRjaFszXSB8fCAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uZGl0aW9ucztcbiAgICB9XG59IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFppbWJydUNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBQYW5lbC9Nb2R1bGUgOiBLZXJuZWxcbiAqXG4gKiBAYXV0aG9yICBKdW5qdWxpbmlcbiAqIEBwYWNrYWdlIFppbWJydUNvZGVcbiAqIEBzaW5jZSAgIFppbWJydUNvZGUgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtlcm5lbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsID0gemMuZ2V0TW9kdWxlRGF0YSgncGFuZWwnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYW5lbCBzY3JvbGwgYmFyIHRvcFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzY3JvbGxiYXJUb3AoKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbCAuemMtc2Nyb2xsYmFyJykuc2Nyb2xsVG9wKDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBwYW5lbCBoZWlnaHRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY2FsY0hlaWdodCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2FjaGUoJ3dwLWJvZHktaGVpZ2h0JykgIT09ICQod2luZG93KS5oZWlnaHQoKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRDYWNoZSgnd3AtYm9keS1oZWlnaHQnLCAkKHdpbmRvdykuaGVpZ2h0KCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXJhc2UgbW9iaWxlIG1lbnVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZXJhc2VNb2JpbGVNZW51KCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rlc2t0b3BNb2RlKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlcnZpY2UoJ21lbnUvaXNTdWJtZW51SXRlbScpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLW1lbnUnKS5hZGRDbGFzcygnemMtcGFuZWwtbWVudV9zdWJtZW51LWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykuYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC1tZW51JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfbW9iaWxlLW1lbnUtdmlzaWJsZScpO1xuICAgICAgICAkKCcuemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudV9hY3RpdmUnKTtcblxuICAgICAgICB0aGlzLnNlcnZpY2UoJ2Nsb3NlLWJsb2NrJykuaGlkZURlZmluaXRlbHkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJcyBkZXNrdG9wIG1vZGVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm4gXCJ0cnVlXCIgaWYgYm9keSB3aWR0aCBpcyBiaWdnZXIgdGhlbiBcIm1pbi1zaXplLm1vZGUyXCJcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBpc0Rlc2t0b3BNb2RlKCkge1xuICAgICAgICByZXR1cm4gKCQoJy56Yy1wYW5lbCcpLndpZHRoKCkgPj0gdGhpcy5nZXRDb25maWcoJ21pbi1zaXplL21vZGUyJykpO1xuICAgIH1cblxuICAgICAvKipcbiAgICAgKiBFcnJvciBjaGVjaywgaW4gQUpBWCBvciBvdGhlclxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBlcnJvckNoZWNrKG1zZywganFYSFIpIHtcbiAgICAgICAgaWYgKCEkKCcuemMtcG9wdXAnKS5oYXNDbGFzcygnemMtcGFuZWwtZXJyb3ItY29uZmlybScpKSB7XG5cbiAgICAgICAgICAgIGlmICgkKCcuemMtcG9wdXAnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkKCcuemMtcG9wdXAnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuXG4gICAgICAgICAgICB6Yy5jb25maXJtKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogYEVycm9yIC0gJHtqcVhIUi5zdGF0dXNUZXh0fSA6ICR7anFYSFIuc3RhdHVzfWAsXG4gICAgICAgICAgICAgICAgc3ViamVjdDogYCR7bXNnfSBQYWdlIHdpbGwgYmUgcmVsb2FkZWQsIG9rP2AsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICd6Yy1wYW5lbC1lcnJvci1jb25maXJtJyxcbiAgICAgICAgICAgICAgICBvazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBnbG9iYWwgdmFyXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRlZiAgIElmIG5vdCBmb3VuZCwgcmV0dXJuIFwiZGVmXCJcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBnZXRWYXIoa2V5LCBkZWYpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLnZhcnMsIGtleSk7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkZWY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgZ2xvYmFsIHZhciB2YWx1ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkYXRhICBWYXIgdmFsdWVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzZXRWYXIoa2V5LCBkYXRhKSB7XG4gICAgICAgIHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC52YXJzLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBnbG9iYWwgY2FjaGUgdmFsdWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGF0YSAgQ2FjaGUgdmFsdWVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzZXRDYWNoZShrZXksIGRhdGEpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNhY2hlLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBnbG9iYWwgY2FjaGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGVmICAgSWYgbm90IGZvdW5kLCByZXR1cm4gXCJkZWZcIlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGdldENhY2hlKGtleSwgZGVmKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jYWNoZSwga2V5KTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRlZjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZWxlbWVudCBmcm9tIGNhY2hlIG9iamVjdFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqL1xuICAgIHJlbUNhY2hlKGtleSkge1xuICAgICAgICB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwuY2FjaGUsIGtleSwgZmFsc2UsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBnbG9iYWwgY29uZmlnIHZhbHVlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRhdGEgIENvbmZpZyB2YWx1ZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHNldENvbmZpZyhrZXksIGRhdGEpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNvbmZpZywga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZ2xvYmFsIGNvbmZpZ1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkZWYgICBJZiBub3QgZm91bmQsIHJldHVybiBcImRlZlwiXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0Q29uZmlnKGtleSwgZGVmKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jb25maWcsIGtleSk7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkZWY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXJ2aWNlKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSB8fCB0eXBlb2YgY2FsbGJhY2sgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDYWNoZShgc2VydmljZXMvJHtuYW1lfWAsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuZ2V0Q2FjaGUoYHNlcnZpY2VzLyR7bmFtZX1gLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlcnZpY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmljZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgc2VydmljZSBub3QgZXhpc3QgOiAke25hbWV9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb24oZXZlbnRzLCBzZWxlY3RvciwgaGFuZGxlciwgcHJldmVudERlZmF1bHQgPSBmYWxzZSkge1xuICAgICAgICAkKCcuemMtcGFuZWwnKS5vbihldmVudHMsIHNlbGVjdG9yLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmV2ZW50RGVmYXVsdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLCBldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsaWNrKHNlbGVjdG9yLCBoYW5kbGVyLCBwcmV2ZW50RGVmYXVsdCA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5vbignY2xpY2snLCBzZWxlY3RvciwgaGFuZGxlciwgcHJldmVudERlZmF1bHQpO1xuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgWmltYnJ1Q29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZSA6IE1lbnVcbiAqXG4gKiBAYXV0aG9yICBKdW5qdWxpbmlcbiAqIEBwYWNrYWdlIFppbWJydUNvZGVcbiAqIEBzaW5jZSAgIFppbWJydUNvZGUgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBLZXJuZWwgZnJvbSAnLi9rZXJuZWwnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgS2VybmVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmlzU3VibWVudUl0ZW0gID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVudUl0ZW1JRCAgICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tZW51SXRlbSAgICAgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN1Ym1lbnVJdGVtICAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVudVBhcmVudEl0ZW0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgY29uZGl0aW9uIDogc3VibWVudS1hY3RpdmVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcmVtb3ZlU3VibWVudUFjdGl2ZSgpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsLW1lbnUnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtbWVudV9zdWJtZW51LWFjdGl2ZScpO1xuICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250ZW50X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGNvbmRpdGlvbiA6IHN1Ym1lbnUtYWN0aXZlXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZFN1Ym1lbnVBY3RpdmUoKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbC1tZW51JykuYWRkQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRlbnQnKS5hZGRDbGFzcygnemMtcGFuZWwtY29udGVudF9zdWJtZW51LWFjdGl2ZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElzIHN1Ym1lbnUgYWN0aXZlXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGlzU3VibWVudUFjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuICgkKCcuemMtcGFuZWwtbWVudScpLmhhc0NsYXNzKCd6Yy1wYW5lbC1tZW51X3N1Ym1lbnUtYWN0aXZlJykgJiYgJCgnLnpjLXBhbmVsLWNvbnRlbnQnKS5oYXNDbGFzcygnemMtcGFuZWwtY29udGVudF9zdWJtZW51LWFjdGl2ZScpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb2JpbGUgbW9kZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBtb2JpbGUoKSB7XG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnUnLCAoJHRoaXMpID0+IHtcbiAgICAgICAgICAgIGlmICgkdGhpcy5oYXNDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51X2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudV9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250ZW50X21vYmlsZS1tZW51LXZpc2libGUnKTtcblxuICAgICAgICAgICAgICAgICR0aGlzLm9uZSgndHJhbnNpdGlvbmVuZCB3ZWJraXRUcmFuc2l0aW9uRW5kIG9UcmFuc2l0aW9uRW5kIE1TVHJhbnNpdGlvbkVuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRyb2xzJykuaGVpZ2h0KCdhdXRvJyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UoJ2Nsb3NlLWJsb2NrJykuaGlkZURlZmluaXRlbHkoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudV9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250ZW50X21vYmlsZS1tZW51LXZpc2libGUnKTtcblxuICAgICAgICAgICAgICAgIGxldCBpbml0TmF2SGVpZ2h0ID0gJCgnLnpjLXBhbmVsLW1lbnVfX2NvbnRhaW5lcicpLmhlaWdodCgpLFxuICAgICAgICAgICAgICAgICAgICBuYXZIZWlnaHQgICAgID0gJCgnLnpjLXBhbmVsLW1lbnVfX2xpc3QnKS5oZWlnaHQoKSArIHRoaXMuZ2V0Q29uZmlnKCdoZWlnaHQtRkFIJyksXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzSGVpZ2h0ICA9ICQoJy56Yy1wYW5lbC1jb250cm9scycpLmhlaWdodCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGluaXROYXZIZWlnaHQgPiBuYXZIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2SGVpZ2h0ID0gaW5pdE5hdkhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobmF2SGVpZ2h0ID4gY29udHJvbHNIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRyb2xzJykuaGVpZ2h0KG5hdkhlaWdodCAtIHRoaXMuZ2V0Q29uZmlnKCdoZWlnaHQtRkFIJykpO1xuICAgICAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtc3VibWVudV9fc2Nyb2xsYmFyLWNvbnRhaW5lcicpLmhlaWdodChuYXZIZWlnaHQgLSB0aGlzLmdldENvbmZpZygnaGVhZGVyLWhlaWdodCcpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgbWVudUl0ZW1JRCA9ICQucGFyYW0uZnJhZ21lbnQoKSA/ICQucGFyYW0uZnJhZ21lbnQoKSA6ICcnO1xuXG4gICAgICAgICAgICAgICAgaWYgKCQoJy56Yy1wYW5lbC1tZW51IGxpW2RhdGEtbWVudS1pdGVtLWlkPVwiJyArIG1lbnVJdGVtSUQgKyAnXCJdJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtSUQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG1lbnVJdGVtSUQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXBNZW51SXRlbShtZW51SXRlbUlEKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UoJ2Nsb3NlLWJsb2NrJykuc2hvdygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsYmFyVG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQod2luZG93KS5vbignemMvY2xvc2UtYmxvY2suemMtcGFuZWwnLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmICgkKCcuemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51JykuaGFzQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudV9hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnUnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51X2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfbW9iaWxlLW1lbnUtdmlzaWJsZScpO1xuXG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudScpLm9uZSgndHJhbnNpdGlvbmVuZCB3ZWJraXRUcmFuc2l0aW9uRW5kIG9UcmFuc2l0aW9uRW5kIE1TVHJhbnNpdGlvbkVuZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udHJvbHMnKS5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZSgnY2xvc2UtYmxvY2snKS5oaWRlRGVmaW5pdGVseSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1wYW5lbC1zdWJtZW51X19oZWFkZXItc2VjdGlvbl9tb2RlX21vYmlsZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU3VibWVudUFjdGl2ZSgpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxiYXJUb3AoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheSBzZWN0aW9uXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGRpc3BsYXlTZWN0aW9uKG1lbnVJdGVtSUQpIHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSAkKCcuemMtcGFuZWwtbWVudSBsaVtkYXRhLW1lbnUtaXRlbS1pZD1cIicgKyBtZW51SXRlbUlEICsgJ1wiXScpO1xuICAgICAgICBtZW51SXRlbS5hZGRDbGFzcygnemMtcGFuZWwtbWVudV9faXRlbV9hY3RpdmUnKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNldCBpY29uXG4gICAgICAgIGNvbnN0IHRpdGxlSWNvbkNsYXNzID0gbWVudUl0ZW0uZmluZCgnaScpLmZpcnN0KCkuYXR0cignY2xhc3MnKS5tYXRjaCgvXFxiemMtaWNvbi1cXFMrL2cpWzBdO1xuICAgICAgICAkKCcuemMtcGFuZWwtaGVhZGVyX190aXRsZS1pY29uJykucmVtb3ZlQ2xhc3MoKGluZGV4LCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoY2xhc3NOYW1lLm1hdGNoKC9cXGJ6Yy1pY29uLVxcUysvZykgfHwgW10pLmpvaW4oJyAnKTtcbiAgICAgICAgfSkuYWRkQ2xhc3ModGl0bGVJY29uQ2xhc3MpO1xuXG4gICAgICAgIC8vIFNldCB0aXRsZVxuICAgICAgICAkKCcuemMtcGFuZWwtaGVhZGVyX190aXRsZScpLnRleHQobWVudUl0ZW0uZmluZCgnc3BhbicpLnRleHQoKSk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIC8gYWN0aXZlIGNvbnRlbnQgc2VjdGlvblxuICAgICAgICBpZiAodGhpcy5tZW51SXRlbUlEKSB7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udHJvbHNfX3NlY3Rpb25bZGF0YS1zZWN0aW9uPVwiJyArIHRoaXMubWVudUl0ZW1JRCArICdcIl0nKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX3NlY3Rpb25fYWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWN0aW9uID0gJCgnLnpjLXBhbmVsLWNvbnRyb2xzX19zZWN0aW9uW2RhdGEtc2VjdGlvbj1cIicgKyBtZW51SXRlbUlEICsgJ1wiXScpO1xuXG4gICAgICAgIHNlY3Rpb24uYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19zZWN0aW9uX2FjdGl2ZScpO1xuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvbWVudS9pdGVtLWNoYW5nZScpO1xuICAgICAgICB0aGlzLnNldENhY2hlKCdtZW51L2N1cnJlbnQtc2VjdGlvbicsIHNlY3Rpb24pO1xuXG4gICAgICAgIGlmICghc2VjdGlvbi5oYXNDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX3NlY3Rpb25fSUNQJykpIHtcbiAgICAgICAgICAgIHNlY3Rpb24uYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19zZWN0aW9uX0lDUCcpO1xuXG4gICAgICAgICAgICAvLyBFdmVudFxuICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL21lbnUvaXRlbS1jaGFuZ2UtSUNQJywgW3NlY3Rpb25dKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSAvIGFjdGl2ZSBtZW51IGl0ZW1cbiAgICAgICAgaWYgKG1lbnVJdGVtLnBhcmVudCgpLmhhc0NsYXNzKCd6Yy1wYW5lbC1zdWJtZW51X19saXN0JykpIHtcbiAgICAgICAgICAgIGxldCBzdWJtZW51SXRlbSA9IG1lbnVJdGVtLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpO1xuXG4gICAgICAgICAgICBpZiAoc3VibWVudUl0ZW0uaGFzQ2xhc3MoJ3pjLXBhbmVsLXN1Ym1lbnVfX3Njcm9sbGJhci1jb250YWluZXInKSkge1xuICAgICAgICAgICAgICAgIHN1Ym1lbnVJdGVtID0gc3VibWVudUl0ZW0ucGFyZW50KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN1Ym1lbnVJdGVtLmFkZENsYXNzKCd6Yy1wYW5lbC1zdWJtZW51X19jb250YWluZXJfYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHN1Ym1lbnVJdGVtSUQgID0gc3VibWVudUl0ZW0uZGF0YSgnbWVudS1jb250YWluZXItaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVQYXJlbnRJdGVtID0gJCgnLnpjLXBhbmVsLW1lbnVfX2l0ZW1fdHlwZV9wYXJlbnRbZGF0YS1tZW51LWNvbnRhaW5lci1pZD1cIicgKyBzdWJtZW51SXRlbUlEICsgJ1wiXScpO1xuXG4gICAgICAgICAgICBtZW51UGFyZW50SXRlbS5hZGRDbGFzcygnemMtcGFuZWwtbWVudV9faXRlbV9hY3RpdmUnKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU3VibWVudUFjdGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTdWJtZW51QWN0aXZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCBnbG9iYWwgZGF0YVxuICAgICAgICAgICAgdGhpcy5pc1N1Ym1lbnVJdGVtICA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnN1Ym1lbnVJdGVtICAgID0gc3VibWVudUl0ZW07XG4gICAgICAgICAgICB0aGlzLm1lbnVQYXJlbnRJdGVtID0gbWVudVBhcmVudEl0ZW07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1N1Ym1lbnVBY3RpdmUoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlU3VibWVudUFjdGl2ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXQgZ2xvYmFsIGRhdGFcbiAgICAgICAgICAgIHRoaXMuaXNTdWJtZW51SXRlbSAgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc3VibWVudUl0ZW0gICAgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubWVudVBhcmVudEl0ZW0gPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBnbG9iYWwgZGF0YVxuICAgICAgICB0aGlzLm1lbnVJdGVtICAgPSBtZW51SXRlbTtcbiAgICAgICAgdGhpcy5tZW51SXRlbUlEID0gbWVudUl0ZW1JRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJpbmcgbWVudSBpdGVtXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHByZXBNZW51SXRlbShtZW51SXRlbUlEKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N1Ym1lbnVJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLm1lbnVJdGVtLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1tZW51X19pdGVtX2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5U2VjdGlvbihtZW51SXRlbUlEKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWVudUl0ZW0ucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfX2l0ZW1fYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLm1lbnVQYXJlbnRJdGVtLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1tZW51X19pdGVtX2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5zdWJtZW51SXRlbS5yZW1vdmVDbGFzcygnemMtcGFuZWwtc3VibWVudV9fY29udGFpbmVyX2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5U2VjdGlvbihtZW51SXRlbUlEKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50IC56Yy1zY3JvbGxiYXInKS5zY3JvbGxUb3AoMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVudSBpdGVtIHN3aXRjaFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBpdGVtU3dpdGNoKCkge1xuICAgICAgICBsZXQgbWVudUl0ZW1JRCA9ICcnO1xuXG4gICAgICAgIGlmICgkLnBhcmFtLmZyYWdtZW50KCkpIHtcbiAgICAgICAgICAgIG1lbnVJdGVtSUQgPSAkLnBhcmFtLmZyYWdtZW50KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbWVudUl0ZW0gPSAkKCcuemMtcGFuZWwtbWVudV9fbGlzdCAuemMtcGFuZWwtbWVudV9faXRlbV90eXBlX3NpbXBsZScpLmZpcnN0KCk7XG4gICAgICAgICAgICBtZW51SXRlbUlEID0gbWVudUl0ZW0uZGF0YSgnbWVudS1pdGVtLWlkJyk7XG5cbiAgICAgICAgICAgIGlmICghbWVudUl0ZW1JRCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1lbnVJdGVtSUQgPSBtZW51SXRlbS5kYXRhKCdtZW51LWNvbnRhaW5lci1pZCcpO1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtID0gJCgnLnpjLXBhbmVsLXN1Ym1lbnVfX2NvbnRhaW5lcltkYXRhLW1lbnUtY29udGFpbmVyLWlkPScgKyBzdWJtZW51SXRlbUlEICsgJ10gLnpjLXBhbmVsLXN1Ym1lbnVfX2l0ZW1fdHlwZV9zaW1wbGUnKS5maXJzdCgpO1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtSUQgPSBtZW51SXRlbS5kYXRhKCdtZW51LWl0ZW0taWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkKCcuemMtcGFuZWwtbWVudSBsaVtkYXRhLW1lbnUtaXRlbS1pZD1cIicgKyBtZW51SXRlbUlEICsgJ1wiXScpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbGV0IG1lbnVJdGVtID0gJCgnLnpjLXBhbmVsLW1lbnVfX2xpc3QgLnpjLXBhbmVsLW1lbnVfX2l0ZW1fdHlwZV9zaW1wbGUnKS5maXJzdCgpO1xuICAgICAgICAgICAgbWVudUl0ZW1JRCA9IG1lbnVJdGVtLmRhdGEoJ21lbnUtaXRlbS1pZCcpO1xuXG4gICAgICAgICAgICBpZiAoIW1lbnVJdGVtSUQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJtZW51SXRlbUlEID0gbWVudUl0ZW0uZGF0YSgnbWVudS1jb250YWluZXItaWQnKTtcbiAgICAgICAgICAgICAgICBtZW51SXRlbSA9ICQoJy56Yy1wYW5lbC1zdWJtZW51X19jb250YWluZXJbZGF0YS1tZW51LWNvbnRhaW5lci1pZD0nICsgc3VibWVudUl0ZW1JRCArICddIC56Yy1wYW5lbC1zdWJtZW51X19pdGVtX3R5cGVfc2ltcGxlJykuZmlyc3QoKTtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUlEID0gbWVudUl0ZW0uZGF0YSgnbWVudS1pdGVtLWlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3BsYXlTZWN0aW9uKG1lbnVJdGVtSUQpO1xuXG4gICAgICAgIC8vIFdoZW4gaGFzaCBjaGFuZ2VcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdoYXNoY2hhbmdlLnpjLXBhbmVsJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgbWVudUl0ZW1JRCA9ICQucGFyYW0uZnJhZ21lbnQoKSA/ICQucGFyYW0uZnJhZ21lbnQoKSA6ICcnO1xuXG4gICAgICAgICAgICBpZiAoJCgnLnpjLXBhbmVsLW1lbnUgbGlbZGF0YS1tZW51LWl0ZW0taWQ9XCInICsgbWVudUl0ZW1JRCArICdcIl0nKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUlEID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWVudUl0ZW1JRCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmVwTWVudUl0ZW0obWVudUl0ZW1JRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFdoZW4gY2xpY2sgb24gc3VibWVudSBpdGVtXG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1wYW5lbC1zdWJtZW51X19pdGVtX3R5cGVfc2ltcGxlOm5vdCguemMtcGFuZWwtbWVudV9faXRlbV9hY3RpdmUpJywgKCR0aGlzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbUlEID0gJHRoaXMuZGF0YSgnbWVudS1pdGVtLWlkJyk7XG5cbiAgICAgICAgICAgIC8vIENoYW5nZSBoYXNoXG4gICAgICAgICAgICBpZiAobWVudUl0ZW1JRCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gbWVudUl0ZW1JRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gV2hlbiBjbGljayBvbiBtZW51IGl0ZW1cbiAgICAgICAgdGhpcy5jbGljaygnLnpjLXBhbmVsLW1lbnVfX2l0ZW1fdHlwZV9zaW1wbGUnLCAoJHRoaXMpID0+IHtcbiAgICAgICAgICAgIGlmICgkdGhpcy5oYXNDbGFzcygnemMtcGFuZWwtbWVudV9faXRlbV9hY3RpdmUnKSAmJiAhJHRoaXMuaGFzQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfX2l0ZW1fdHlwZV9wYXJlbnQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKCd6Yy1wYW5lbC1tZW51X19pdGVtX2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzU3VibWVudUFjdGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkU3VibWVudUFjdGl2ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbWVudUl0ZW1JRCA9ICR0aGlzLmRhdGEoJ21lbnUtaXRlbS1pZCcpO1xuXG4gICAgICAgICAgICAvLyBDaGFuZ2UgaGFzaFxuICAgICAgICAgICAgaWYgKG1lbnVJdGVtSUQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gbWVudUl0ZW1JRDtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXBNZW51SXRlbShtZW51SXRlbUlEKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNTdWJtZW51QWN0aXZlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRTdWJtZW51QWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VibWVudUl0ZW1JRCA9ICR0aGlzLmRhdGEoJ21lbnUtY29udGFpbmVyLWlkJyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3VibWVudUl0ZW1TZWN0aW9uID0gJCgnLnpjLXBhbmVsLXN1Ym1lbnVfX2NvbnRhaW5lcltkYXRhLW1lbnUtY29udGFpbmVyLWlkPScgKyBzdWJtZW51SXRlbUlEICsgJ10nKTtcbiAgICAgICAgICAgICAgICBzdWJtZW51SXRlbVNlY3Rpb24uYWRkQ2xhc3MoJ3pjLXBhbmVsLXN1Ym1lbnVfX2NvbnRhaW5lcl9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBzdWJtZW51SXRlbVNlY3Rpb24uZmluZCgnLnpjLXNjcm9sbGJhcicpLnNjcm9sbFRvcCgwKTtcblxuICAgICAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCd6Yy1wYW5lbC1tZW51X19pdGVtX2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm1lbnVQYXJlbnRJdGVtICYmIHRoaXMubWVudUl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51SXRlbS5yZW1vdmVDbGFzcygnemMtcGFuZWwtbWVudV9faXRlbV9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tZW51UGFyZW50SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnVQYXJlbnRJdGVtLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1tZW51X19pdGVtX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1lbnVJdGVtLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1zdWJtZW51X19jb250YWluZXJfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFNldCBnbG9iYWwgZGF0YVxuICAgICAgICAgICAgICAgIHRoaXMuaXNTdWJtZW51SXRlbSAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubWVudVBhcmVudEl0ZW0gPSAkdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1lbnVJdGVtICAgID0gc3VibWVudUl0ZW1TZWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQVNBOzs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFpQkE7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUFTQTs7Ozs7OztBQVFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQXBCQTtBQUNBO0FBdUJBO0FBQ0E7QUFFQTtBQUNBO0FBdENBO0FBc0NBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaENBO0FBa0NBO0FBQ0E7Ozs7QUFwT0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQVNBOzs7Ozs7O0FBUUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQVNBOzs7Ozs7O0FBUUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFuQkE7QUFvQkE7QUFFQTs7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBOURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQVNBOzs7Ozs7O0FBUUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFUQTtBQVNBO0FBRUE7Ozs7Ozs7Ozs7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUEzQkE7QUFDQTtBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBdExBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUFTQTs7Ozs7OztBQVFBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoT0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQVNBOzs7Ozs7O0FBUUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFRQTtBQUVBOzs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQTNUQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9