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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Module/Panel/Resources/assets/js/es6/jquery.panel-page-mode.es6.js":
/*!********************************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/jquery.panel-page-mode.es6.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_mode_panel_page_mode_body_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/mode/panel-page-mode-body-size */ "./src/Module/Panel/Resources/assets/js/es6/module/mode/panel-page-mode-body-size.js");
/* harmony import */ var _module_header_option_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/header/option-handler */ "./src/Module/Panel/Resources/assets/js/es6/module/header/option-handler.js");
/* harmony import */ var _module_header_quick_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/header/quick-links */ "./src/Module/Panel/Resources/assets/js/es6/module/header/quick-links.js");
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel : Page mode
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */





zc.module.panel.addMode(function ($, panel) {
  var priv = {};

  priv.addLoadingData = function () {
    var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var percent = arguments.length > 1 ? arguments[1] : undefined;
    $('.zc-panel-template__panel-loading-value').text(msg);
    $('.zc-panel-template__panel-loading-progress-total').width(Math.floor(percent) + '%');
  }; // Load


  $.ajax({
    type: 'post',
    dataType: 'html',
    url: ajaxurl,
    data: {
      action: 'zc/module/panel/content_' + panel.getVar('slug'),
      _ajax_nonce: panel.getVar('nonce')
    },
    xhr: function xhr() {
      var xhr = new window.XMLHttpRequest(); // Download progress

      xhr.addEventListener('progress', function (event) {
        if (event.lengthComputable && event.total > 0) {
          var percent = Math.floor(event.loaded / event.total * 100);
          priv.addLoadingData("".concat(percent, " %"), percent);
        } else {
          var total = xhr.getResponseHeader('X-Content-Length');

          var _percent = Math.floor(event.loaded / total * 100);

          priv.addLoadingData("".concat(_percent, " %"), _percent);
        }
      }, false);
      return xhr;
    },
    error: function error(status) {
      panel.errorCheck(' Panel : Content load', status);
    },
    success: function success(data) {
      if (data <= 0) {
        zc.confirm({
          title: 'Error - AJAX',
          subject: 'Error : Cannot connect to AJAX Module or you are not logged. Page will be reloaded, ok?',
          titleOK: panel.getVar('optionsResetOk'),
          titleCancel: panel.getVar('optionsResetCancel'),
          "class": 'zc-panel-error-confirm',
          ok: function ok() {
            location.reload();
          }
        });
      }

      $('.zc-panel-template').append(data); // Add wp body height

      panel.addConfig('wp-body-height', $(window).height());
      panel.closeBlock(); // Init callback of close block.

      panel.controlInit(); // Initialization of controls.

      panel.controlHelp(); // Control help window.

      panel.scrollbar(); // Initialization of scroll bar in panel.

      panel.noMetaScaleIfMobile(); // Disable meta scale if mobile device.

      panel.condition(); // Initialization of panel condition checker.

      panel.ifChanged(); // Check if some changes was made.

      panel.tooltip(); // Init tooltip

      panel.menu(); // Panel menu.

      new _module_mode_panel_page_mode_body_size__WEBPACK_IMPORTED_MODULE_0__["default"](); // Panel body size.

      var oh = new _module_header_option_handler__WEBPACK_IMPORTED_MODULE_1__["default"](); // Save/Reset function.

      new _module_header_quick_links__WEBPACK_IMPORTED_MODULE_2__["default"](); // Initialization of panel button "Quick Links".

      panel.addCache('option-handler', oh);
      setTimeout(function () {
        $('.zc-panel-template__panel-loading').hide(); // Hide panel loading text.

        $('.zc-panel').css('visibility', 'visible'); // Full display panel.

        panel.addCache('first-start', true);
        $(window).trigger('zc/panel/show-content');
      }, 50);
    }
  });
  /**
   * Disable save button
   * 
   * @return {null} None
   * @since 1.0.0
   */

  panel.disableSaveButton = function () {
    $('.zc-panel-save-starter-button').prop('disabled', true).addClass('zc-panel-header__controller-button_disabled');
  };
  /**
   * Enable save button
   * 
   * @return {null} None
   * @since 1.0.0
   */


  panel.enableSaveButton = function () {
    $('.zc-panel-save-starter-button').prop('disabled', false).removeClass('zc-panel-header__controller-button_disabled');
  };
  /**
   * Disable reset button
   * 
   * @return {null} None
   * @since 1.0.0
   */


  panel.disableResetButton = function () {
    $('.zc-panel-reset-starter-button').prop('disabled', true).addClass('zc-panel-header__controller-button_disabled');
  };
  /**
   * Enable reset button
   * 
   * @return {null} None
   * @since 1.0.0
   */


  panel.enableResetButton = function () {
    $('.zc-panel-reset-starter-button').prop('disabled', false).removeClass('zc-panel-header__controller-button_disabled');
  };
});

/***/ }),

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/header/direct-notification.js":
/*!***************************************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/header/direct-notification.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DirectNotification; });
/* harmony import */ var _kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kernel */ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js");
/* harmony import */ var _tpl_direct_notification_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tpl/direct-notification.html */ "./src/Module/Panel/Resources/assets/js/es6/module/header/tpl/direct-notification.html");
/* harmony import */ var _tpl_direct_notification_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tpl_direct_notification_html__WEBPACK_IMPORTED_MODULE_1__);
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module/Header : Direct notification
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var $ = jQuery;

var DirectNotification = /*#__PURE__*/function (_Kernel) {
  _inherits(DirectNotification, _Kernel);

  var _super = _createSuper(DirectNotification);

  function DirectNotification() {
    var _this;

    _classCallCheck(this, DirectNotification);

    _this = _super.call(this);
    _this.timer1 = false;
    _this.timer2 = false;
    _this.type = 'error';
    _this.title = 'Error';
    _this.content = 'General error ( AJAX / LOGIN / PHP Error )';
    _this.duration = 3000;

    _this.callback = function () {};

    return _this;
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


  _createClass(DirectNotification, [{
    key: "add",
    value: function add(type, title, content, duration, callback) {
      var _this2 = this;

      type = type || this.type;
      title = title || this.title;
      content = content || this.content;
      duration = duration || this.duration;
      callback = callback || this.callback;
      clearTimeout(this.timer1);
      clearTimeout(this.timer2);
      var structure = zc.tpl(_tpl_direct_notification_html__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: type,
        title: title,
        content: content
      });
      $('.zc-panel .zc-panel-direct-notification').remove();
      $('.zc-panel .zc-panel-controls').prepend(structure);
      this.click('.zc-panel-direct-notification__close-controller', function () {
        clearTimeout(_this2.timer1);
        clearTimeout(_this2.timer2);
        $('.zc-panel .zc-panel-direct-notification').addClass('zc-panel-direct-notification_close');
        _this2.timer2 = setTimeout(function () {
          $('.zc-panel .zc-panel-direct-notification').remove();
        }, 300);
        callback.call();
      });
      this.timer1 = setTimeout(function () {
        $('.zc-panel .zc-panel-direct-notification').addClass('zc-panel-direct-notification_close');
        _this2.timer2 = setTimeout(function () {
          $('.zc-panel .zc-panel-direct-notification').remove();
        }, 300);
        callback.call();
      }, duration);
    }
  }]);

  return DirectNotification;
}(_kernel__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/header/option-handler.js":
/*!**********************************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/header/option-handler.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OptionHandler; });
/* harmony import */ var _kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kernel */ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js");
/* harmony import */ var _direct_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./direct-notification */ "./src/Module/Panel/Resources/assets/js/es6/module/header/direct-notification.js");
/* harmony import */ var _header_tpl_reset_popup_notification_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/tpl/reset-popup-notification.html */ "./src/Module/Panel/Resources/assets/js/es6/module/header/tpl/reset-popup-notification.html");
/* harmony import */ var _header_tpl_reset_popup_notification_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_tpl_reset_popup_notification_html__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module/Header : Option handler
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var $ = jQuery;

var OptionHandler = /*#__PURE__*/function (_Kernel) {
  _inherits(OptionHandler, _Kernel);

  var _super = _createSuper(OptionHandler);

  function OptionHandler() {
    var _this;

    _classCallCheck(this, OptionHandler);

    _this = _super.call(this);
    _this.dn = new _direct_notification__WEBPACK_IMPORTED_MODULE_1__["default"]();
    _this.tpl = _header_tpl_reset_popup_notification_html__WEBPACK_IMPORTED_MODULE_2___default.a;

    _this.save();

    _this.reset();

    return _this;
  }

  _createClass(OptionHandler, [{
    key: "showLoading",
    value: function showLoading() {
      $('.zc-panel-save-starter-button').hide();
      $('.zc-panel-loading-starter-button').show();
      $('.zc-panel-reset-starter-button').prop('disabled', true).addClass('zc-panel-header__controller-button_disabled');
    }
  }, {
    key: "hideLoading",
    value: function hideLoading() {
      $('.zc-panel-save-starter-button').show();
      $('.zc-panel-loading-starter-button').hide();
      $('.zc-panel-reset-starter-button').prop('disabled', false).removeClass('zc-panel-header__controller-button_disabled');
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;

      this.click('.zc-panel-save-starter-button', function ($this) {
        $(window).trigger('zc/panel/save/start');
        var priv = {};

        priv.prepOptions = function () {
          var options = {};
          $('.zc-panel .zc-panel-controls [data-option]').each(function (index, el) {
            var nameItem = $(el).attr('name');
            if ($(el).data('i') == 'i') return;
            if (nameItem === undefined) return;
            nameItem = nameItem.replace(/\[\]/g, '');
            var value = $(el).val();

            if ($(el).is(':radio') || $(el).is(':checkbox')) {
              if ($(el).is(':checked')) {
                options[nameItem] = value;
              }
            } else {
              options[nameItem] = $(el).val();
            }
          });
          return options;
        };

        _this2.showLoading();

        zc.ajax({
          data: {
            action: "zc/module/panel/save_".concat(_this2.getVar('slug')),
            options: zc.parse(priv.prepOptions(), true),
            _ajax_nonce: _this2.getVar('nonce')
          },
          error: function error(jqXHR, textStatus) {
            $(window).trigger('zc/panel/save/error');

            _this2.errorCheck('Panel : Save options', jqXHR);
          },
          success: function success(response) {
            $(window).trigger('zc/panel/save/success-start');
            var reload = typeof response.reload === 'undefined' ? undefined : function () {
              location.reload();
            };

            _this2.dn.add(response.type, response.title, response.content, 3000, reload);

            _this2.hideLoading();

            if (response.type === 'success') {
              _this2.addCache('changed', false);

              $(window).trigger('zc/panel/save/success-response');
            }

            $(window).trigger('zc/panel/save/success-end');
          }
        });
        $(window).trigger('zc/panel/save/end');
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this3 = this;

      this.click('.zc-panel-reset-starter-button', function () {
        $(window).trigger('zc/panel/reset/start');
        zc.confirm({
          title: _this3.getVar('reset-pop-up-title'),
          subject: _this3.getVar('reset-pop-up-subject'),
          titleOK: _this3.getVar('reset-pop-up-ok'),
          titleCancel: _this3.getVar('reset-pop-up-cancel'),
          ok: function ok(popup) {
            zc.ajax({
              data: {
                action: "zc/module/panel/reset_".concat(_this3.getVar('slug')),
                _ajax_nonce: _this3.getVar('nonce')
              },
              error: function error(jqXHR, textStatus) {
                $(window).trigger('zc/panel/reset/error');

                _this3.errorCheck('Panel : Reset options', jqXHR);
              },
              before: function before() {
                popup.hideContent();
                $(window).trigger('zc/panel/reset/before');
              },
              success: function success(response) {
                $(window).trigger('zc/panel/reset/success-start');

                if (response.type === 'success') {
                  popup.remContent();
                  popup.appendContent(zc.tpl(_this3.tpl, {
                    type: response.type,
                    title: response.title,
                    content: response.content
                  }));
                  popup.showContent();
                  setTimeout(function () {
                    location.reload();
                  }, 2000);

                  _this3.addCache('changed', false);

                  $(window).trigger('zc/panel/reset/success-success');
                } else if (response.type === 'info') {
                  popup.remContent();
                  popup.appendContent(zc.tpl(_this3.tpl, {
                    type: response.type,
                    title: response.title,
                    content: response.content,
                    var_exit: _this3.getVar('exit')
                  }));
                  popup.showContent();
                  $(window).trigger('zc/panel/reset/success-info');
                } else {
                  popup.remContent();
                  popup.appendContent(zc.tpl(_this3.tpl, {
                    type: 'error',
                    title: 'Error',
                    content: 'AJAX / LOGIN / PHP Error',
                    var_exit: _this3.getVar('exit')
                  }));
                  popup.showContent();
                  $(window).trigger('zc/panel/reset/success-error');
                }

                $('.zc-popup').on('click', '.zc-panel-popup-notification__close-button', function (event) {
                  event.preventDefault();
                  /* Act on the event */

                  popup.close();
                });
                $(window).trigger('zc/panel/reset/success-end');
              }
            });
          }
        });
        $(window).trigger('zc/panel/reset/end');
      });
    }
  }]);

  return OptionHandler;
}(_kernel__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/header/quick-links.js":
/*!*******************************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/header/quick-links.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuickLinks; });
/* harmony import */ var _kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kernel */ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js");
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module/Header : Quick links
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var $ = jQuery;

var QuickLinks = /*#__PURE__*/function (_Kernel) {
  _inherits(QuickLinks, _Kernel);

  var _super = _createSuper(QuickLinks);

  function QuickLinks() {
    var _this;

    _classCallCheck(this, QuickLinks);

    _this = _super.call(this);

    _this.starterButton();

    _this.closeBlock();

    return _this;
  }

  _createClass(QuickLinks, [{
    key: "starterButton",
    value: function starterButton() {
      var _this2 = this;

      this.click('.zc-panel-quick-links-starter-button', function ($this) {
        var data = {
          cr: parseInt($('.zc-panel-header__controllers_right').width()),
          bw: parseInt($this.outerWidth()),
          bpol: parseInt($this.position().left),
          hpr: parseInt($('.zc-panel-header').css('padding-right'))
        };
        var pos = data.cr - data.bpol - data.bw + data.hpr;
        $('.zc-panel-quick-links').css('right', pos);

        if ($this.hasClass('zc-panel-quick-links-starter-button_active')) {
          $this.removeClass('zc-panel-quick-links-starter-button_active');
          $('.zc-panel-quick-links').removeClass('zc-panel-quick-links_active');

          _this2.service('close-block').hide();
        } else {
          $this.addClass('zc-panel-quick-links-starter-button_active');
          $('.zc-panel-quick-links').addClass('zc-panel-quick-links_active');

          _this2.service('close-block').show();
        }
      });
    }
  }, {
    key: "closeBlock",
    value: function closeBlock() {
      var _this3 = this;

      $(window).on('zc/close-block.zc-panel', function () {
        if ($('.zc-panel-quick-links-starter-button').hasClass('zc-panel-quick-links-starter-button_active')) {
          $('.zc-panel-quick-links-starter-button').removeClass('zc-panel-quick-links-starter-button_active');
          $('.zc-panel-quick-links').removeClass('zc-panel-quick-links_active');

          _this3.service('close-block').hide();
        }
      });
    }
  }]);

  return QuickLinks;
}(_kernel__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/header/tpl/direct-notification.html":
/*!*********************************************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/header/tpl/direct-notification.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"zc-panel-direct-notification zc-panel-direct-notification_type_{{type}}\"> <div class=\"zc-panel-direct-notification__icon-container\"> <i class=\"zc-panel-direct-notification__icon\"></i> </div> <div class=\"zc-panel-direct-notification__content\"> <span class=\"zc-panel-direct-notification__title\">{{title}}</span> <p class=\"zc-panel-direct-notification__text\">{{content}}</p> </div> <div class=\"zc-panel-direct-notification__close-controller\"> <i class=\"zc-panel-direct-notification__close-icon zc-icon-clear\"></i> </div> </div>";

/***/ }),

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/header/tpl/reset-popup-notification.html":
/*!**************************************************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/header/tpl/reset-popup-notification.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"zc-panel-popup-notification zc-panel-popup-notification_type_{{type}}\"> <div class=\"zc-panel-popup-notification__icon-container\"> <i class=\"zc-panel-popup-notification__icon\"></i> </div> <div class=\"zc-panel-popup-notification__content-container\"> <div class=\"zc-panel-popup-notification__content\"> <span class=\"zc-panel-popup-notification__title\">{{title}}</span> <p class=\"zc-panel-popup-notification__text\">{{content}}</p> </div> <div class=\"zc-panel-popup-notification__close-controller\"> <button class=\"zc-panel-popup-notification__close-button\" type=\"button\">{{var_exit}}</button> </div> </div> </div>";

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

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/mode/panel-page-mode-body-size.js":
/*!*******************************************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/mode/panel-page-mode-body-size.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PanelPageModeBodySize; });
/* harmony import */ var _kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kernel */ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js");
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module/Mode : Panel page mode body size
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var $ = jQuery;

var PanelPageModeBodySize = /*#__PURE__*/function (_Kernel) {
  _inherits(PanelPageModeBodySize, _Kernel);

  var _super = _createSuper(PanelPageModeBodySize);

  function PanelPageModeBodySize() {
    var _this;

    _classCallCheck(this, PanelPageModeBodySize);

    _this = _super.call(this);

    _this.height();

    _this.checkWpStickyMenu();

    _this.checkPanelWidth();

    var windowWidth = window.innerWidth,
        windowHeight = window.innerHeight;
    $(window).on('resize.zc-panel', function () {
      if (window.innerWidth != windowWidth) {
        windowWidth = window.innerWidth;

        _this.eraseMobileMenu(); // Erase mobile menu


        _this.height(); // Check panel height size

      }

      if (_this.isDesktopMode() && window.innerHeight != windowHeight) {
        windowHeight = window.innerHeight;

        _this.calcHeight(); // Calculate panel height


        _this.height(); // Check panel height size

      }
    });
    return _this;
  }

  _createClass(PanelPageModeBodySize, [{
    key: "height",
    value: function height() {
      if (this.isDesktopMode()) {
        this.checkTopSpace();
        $('.zc-panel').height('auto');
        $('.zc-panel-controls').height('auto');
        $('.zc-panel-submenu__scrollbar-container').height('auto');
      } else {
        $('.zc-panel').height('100%');
        $('.zc-panel-controls').height('100%');
        $('.zc-panel-submenu__scrollbar-container').height('100%');
      }
    }
  }, {
    key: "checkTopSpace",
    value: function checkTopSpace() {
      if (this.isDesktopMode()) {
        var wpbodyContent = $('#wpbody-content').height(),
            templateHeight = $('.zc-panel-template').height(),
            top = wpbodyContent - templateHeight + this.getConfig('wp-admin-bar-height');
        $('.zc-panel').css('top', top);
        var body = this.getConfig('wp-body-height') - top - this.getConfig('bottom-margin');

        if (body > this.getConfig('min-size/body-height')) {
          $('.zc-panel').removeClass('zc-panel_disable-height-fixed');
        } else {
          $('.zc-panel').addClass('zc-panel_disable-height-fixed');
        }
      } else {
        $('.zc-panel').css('top', 'auto');
        $('.zc-panel').removeClass('zc-panel_disable-height-fixed');
      }
    }
  }, {
    key: "checkWpStickyMenu",
    value: function checkWpStickyMenu() {
      if ($('body').hasClass('folded')) {
        $('.zc-panel').addClass('zc-panel_wp-menu-folded');
      }

      $('#adminmenumain').on('click', '#collapse-menu', function (event) {
        event.preventDefault();
        /* Act on the event */

        if ($('body').hasClass('folded')) {
          $('.zc-panel').addClass('zc-panel_wp-menu-folded');
        } else {
          $('.zc-panel').removeClass('zc-panel_wp-menu-folded');
        }
      });
    }
  }, {
    key: "addModeSize",
    value: function addModeSize(width) {
      var mode = 'mode-1-';

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
  }, {
    key: "checkPanelWidth",
    value: function checkPanelWidth() {
      var _this2 = this;

      var ro = new ResizeObserver(function (entries) {
        if (entries[0] !== undefined) {
          _this2.addModeSize(entries[0].contentRect.width);
        }
      });
      ro.observe($('.zc-panel').get(0));
    }
  }]);

  return PanelPageModeBodySize;
}(_kernel__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ 4:
/*!**************************************************************************************!*\
  !*** multi ./src/Module/Panel/Resources/assets/js/es6/jquery.panel-page-mode.es6.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/k513/Documents/dev/wp/wp-content/themes/viki/vendor/junjulini/zimbrucode/src/Module/Panel/Resources/assets/js/es6/jquery.panel-page-mode.es6.js */"./src/Module/Panel/Resources/assets/js/es6/jquery.panel-page-mode.es6.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvanF1ZXJ5LnBhbmVsLXBhZ2UtbW9kZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L2pxdWVyeS5wYW5lbC1wYWdlLW1vZGUuZXM2LmpzIiwid2VicGFjazovLy8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2hlYWRlci9kaXJlY3Qtbm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2hlYWRlci9vcHRpb24taGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9oZWFkZXIvcXVpY2stbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvaGVhZGVyL3RwbC9kaXJlY3Qtbm90aWZpY2F0aW9uLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvaGVhZGVyL3RwbC9yZXNldC1wb3B1cC1ub3RpZmljYXRpb24uaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9rZXJuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvbW9kZS9wYW5lbC1wYWdlLW1vZGUtYm9keS1zaXplLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBaaW1icnVDb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwgOiBQYWdlIG1vZGVcbiAqXG4gKiBAYXV0aG9yICBKdW5qdWxpbmlcbiAqIEBwYWNrYWdlIFppbWJydUNvZGVcbiAqIEBzaW5jZSAgIFppbWJydUNvZGUgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBCb2R5U2l6ZSAgICAgIGZyb20gJy4vbW9kdWxlL21vZGUvcGFuZWwtcGFnZS1tb2RlLWJvZHktc2l6ZSc7XG5pbXBvcnQgT3B0aW9uSGFuZGxlciBmcm9tICcuL21vZHVsZS9oZWFkZXIvb3B0aW9uLWhhbmRsZXInO1xuaW1wb3J0IFF1aWNrTGlua3MgICAgZnJvbSAnLi9tb2R1bGUvaGVhZGVyL3F1aWNrLWxpbmtzJztcblxuemMubW9kdWxlLnBhbmVsLmFkZE1vZGUoKCQsIHBhbmVsKSA9PiB7XG4gICAgY29uc3QgcHJpdiA9IHt9O1xuXG4gICAgcHJpdi5hZGRMb2FkaW5nRGF0YSA9IChtc2cgPSAnJywgcGVyY2VudCkgPT4ge1xuICAgICAgICAkKCcuemMtcGFuZWwtdGVtcGxhdGVfX3BhbmVsLWxvYWRpbmctdmFsdWUnKS50ZXh0KG1zZyk7XG4gICAgICAgICQoJy56Yy1wYW5lbC10ZW1wbGF0ZV9fcGFuZWwtbG9hZGluZy1wcm9ncmVzcy10b3RhbCcpLndpZHRoKE1hdGguZmxvb3IocGVyY2VudCkgKyAnJScpO1xuICAgIH07XG5cbiAgICAvLyBMb2FkXG4gICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgICBkYXRhVHlwZTogJ2h0bWwnLFxuICAgICAgICB1cmw6IGFqYXh1cmwsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ3pjL21vZHVsZS9wYW5lbC9jb250ZW50XycgKyBwYW5lbC5nZXRWYXIoJ3NsdWcnKSxcbiAgICAgICAgICAgIF9hamF4X25vbmNlOiBwYW5lbC5nZXRWYXIoJ25vbmNlJylcbiAgICAgICAgfSxcbiAgICAgICAgeGhyOiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgICAgICAgIC8vIERvd25sb2FkIHByb2dyZXNzXG4gICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSAmJiBldmVudC50b3RhbCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IE1hdGguZmxvb3IoKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJpdi5hZGRMb2FkaW5nRGF0YShgJHtwZXJjZW50fSAlYCwgcGVyY2VudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ1gtQ29udGVudC1MZW5ndGgnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IE1hdGguZmxvb3IoKGV2ZW50LmxvYWRlZCAvIHRvdGFsKSAqIDEwMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJpdi5hZGRMb2FkaW5nRGF0YShgJHtwZXJjZW50fSAlYCwgcGVyY2VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgICAgICByZXR1cm4geGhyO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgcGFuZWwuZXJyb3JDaGVjaygnIFBhbmVsIDogQ29udGVudCBsb2FkJywgc3RhdHVzKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhIDw9IDApIHtcbiAgICAgICAgICAgICAgICB6Yy5jb25maXJtKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdFcnJvciAtIEFKQVgnLFxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiAnRXJyb3IgOiBDYW5ub3QgY29ubmVjdCB0byBBSkFYIE1vZHVsZSBvciB5b3UgYXJlIG5vdCBsb2dnZWQuIFBhZ2Ugd2lsbCBiZSByZWxvYWRlZCwgb2s/JyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVPSzogcGFuZWwuZ2V0VmFyKCdvcHRpb25zUmVzZXRPaycpLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZUNhbmNlbDogcGFuZWwuZ2V0VmFyKCdvcHRpb25zUmVzZXRDYW5jZWwnKSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICd6Yy1wYW5lbC1lcnJvci1jb25maXJtJyxcbiAgICAgICAgICAgICAgICAgICAgb2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC10ZW1wbGF0ZScpLmFwcGVuZChkYXRhKTtcblxuICAgICAgICAgICAgLy8gQWRkIHdwIGJvZHkgaGVpZ2h0XG4gICAgICAgICAgICBwYW5lbC5hZGRDb25maWcoJ3dwLWJvZHktaGVpZ2h0JywgJCh3aW5kb3cpLmhlaWdodCgpKTtcblxuICAgICAgICAgICAgcGFuZWwuY2xvc2VCbG9jaygpOyAgICAgICAgICAvLyBJbml0IGNhbGxiYWNrIG9mIGNsb3NlIGJsb2NrLlxuICAgICAgICAgICAgcGFuZWwuY29udHJvbEluaXQoKTsgICAgICAgICAvLyBJbml0aWFsaXphdGlvbiBvZiBjb250cm9scy5cbiAgICAgICAgICAgIHBhbmVsLmNvbnRyb2xIZWxwKCk7ICAgICAgICAgLy8gQ29udHJvbCBoZWxwIHdpbmRvdy5cbiAgICAgICAgICAgIHBhbmVsLnNjcm9sbGJhcigpOyAgICAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gb2Ygc2Nyb2xsIGJhciBpbiBwYW5lbC5cbiAgICAgICAgICAgIHBhbmVsLm5vTWV0YVNjYWxlSWZNb2JpbGUoKTsgLy8gRGlzYWJsZSBtZXRhIHNjYWxlIGlmIG1vYmlsZSBkZXZpY2UuXG4gICAgICAgICAgICBwYW5lbC5jb25kaXRpb24oKTsgICAgICAgICAgIC8vIEluaXRpYWxpemF0aW9uIG9mIHBhbmVsIGNvbmRpdGlvbiBjaGVja2VyLlxuICAgICAgICAgICAgcGFuZWwuaWZDaGFuZ2VkKCk7ICAgICAgICAgICAvLyBDaGVjayBpZiBzb21lIGNoYW5nZXMgd2FzIG1hZGUuXG4gICAgICAgICAgICBwYW5lbC50b29sdGlwKCk7ICAgICAgICAgICAgIC8vIEluaXQgdG9vbHRpcFxuICAgICAgICAgICAgcGFuZWwubWVudSgpOyAgICAgICAgICAgICAgICAvLyBQYW5lbCBtZW51LlxuXG4gICAgICAgICAgICBuZXcgQm9keVNpemU7ICAgICAgICAgICAgICAgICAvLyBQYW5lbCBib2R5IHNpemUuXG4gICAgICAgICAgICBjb25zdCBvaCA9IG5ldyBPcHRpb25IYW5kbGVyOyAvLyBTYXZlL1Jlc2V0IGZ1bmN0aW9uLlxuICAgICAgICAgICAgbmV3IFF1aWNrTGlua3M7ICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gb2YgcGFuZWwgYnV0dG9uIFwiUXVpY2sgTGlua3NcIi5cblxuICAgICAgICAgICAgcGFuZWwuYWRkQ2FjaGUoJ29wdGlvbi1oYW5kbGVyJywgb2gpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtdGVtcGxhdGVfX3BhbmVsLWxvYWRpbmcnKS5oaWRlKCk7ICAvLyBIaWRlIHBhbmVsIGxvYWRpbmcgdGV4dC5cbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpOyAgICAvLyBGdWxsIGRpc3BsYXkgcGFuZWwuXG5cbiAgICAgICAgICAgICAgICBwYW5lbC5hZGRDYWNoZSgnZmlyc3Qtc3RhcnQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvc2hvdy1jb250ZW50Jyk7XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgc2F2ZSBidXR0b25cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcGFuZWwuZGlzYWJsZVNhdmVCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgICQoJy56Yy1wYW5lbC1zYXZlLXN0YXJ0ZXItYnV0dG9uJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKS5hZGRDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl9kaXNhYmxlZCcpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgc2F2ZSBidXR0b25cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcGFuZWwuZW5hYmxlU2F2ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgJCgnLnpjLXBhbmVsLXNhdmUtc3RhcnRlci1idXR0b24nKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl9kaXNhYmxlZCcpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIHJlc2V0IGJ1dHRvblxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwYW5lbC5kaXNhYmxlUmVzZXRCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgICQoJy56Yy1wYW5lbC1yZXNldC1zdGFydGVyLWJ1dHRvbicpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSkuYWRkQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fZGlzYWJsZWQnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRW5hYmxlIHJlc2V0IGJ1dHRvblxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwYW5lbC5lbmFibGVSZXNldEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgJCgnLnpjLXBhbmVsLXJlc2V0LXN0YXJ0ZXItYnV0dG9uJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSkucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fZGlzYWJsZWQnKTtcbiAgICB9O1xufSk7IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFppbWJydUNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBQYW5lbC9Nb2R1bGUvSGVhZGVyIDogRGlyZWN0IG5vdGlmaWNhdGlvblxuICpcbiAqIEBhdXRob3IgIEp1bmp1bGluaVxuICogQHBhY2thZ2UgWmltYnJ1Q29kZVxuICogQHNpbmNlICAgWmltYnJ1Q29kZSAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEtlcm5lbCAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9rZXJuZWwnO1xuaW1wb3J0IFRQTF9fZGlyZWN0X25vdGlmaWNhdGlvbiBmcm9tICcuL3RwbC9kaXJlY3Qtbm90aWZpY2F0aW9uLmh0bWwnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3ROb3RpZmljYXRpb24gZXh0ZW5kcyBLZXJuZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMudGltZXIxICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50aW1lcjIgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR5cGUgICAgID0gJ2Vycm9yJztcbiAgICAgICAgdGhpcy50aXRsZSAgICA9ICdFcnJvcic7XG4gICAgICAgIHRoaXMuY29udGVudCAgPSAnR2VuZXJhbCBlcnJvciAoIEFKQVggLyBMT0dJTiAvIFBIUCBFcnJvciApJztcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDMwMDA7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSAoKSA9PiB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZGlyZWN0IG5vdGlmaWNhdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICB0eXBlICAgICBEYXRhIHR5cGUgb2YgY29udGVudFxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICB0aXRsZSAgICBUaXRsZSBvZiBjb250ZW50XG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgIGNvbnRlbnQgIENvbnRlbnRcbiAgICAgKiBAcGFyYW0gIHtpbnRlZ2VyfSAgZHVyYXRpb24gVGltZSBvZiByZW1vdmluZ1xuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvbiBhZnRlciByZW1vdmluZ1xuICAgICAqIEByZXR1cm4ge251bGx9ICAgICAgICAgICAgICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkKHR5cGUsIHRpdGxlLCBjb250ZW50LCBkdXJhdGlvbiwgY2FsbGJhY2spIHtcbiAgICAgICAgdHlwZSAgICAgPSB0eXBlIHx8IHRoaXMudHlwZTtcbiAgICAgICAgdGl0bGUgICAgPSB0aXRsZSB8fCB0aGlzLnRpdGxlO1xuICAgICAgICBjb250ZW50ICA9IGNvbnRlbnQgfHwgdGhpcy5jb250ZW50O1xuICAgICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uIHx8IHRoaXMuZHVyYXRpb247XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgdGhpcy5jYWxsYmFjaztcblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcjEpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcjIpO1xuXG4gICAgICAgIGNvbnN0IHN0cnVjdHVyZSA9IHpjLnRwbChUUExfX2RpcmVjdF9ub3RpZmljYXRpb24sIHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy56Yy1wYW5lbCAuemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbicpLnJlbW92ZSgpO1xuICAgICAgICAkKCcuemMtcGFuZWwgLnpjLXBhbmVsLWNvbnRyb2xzJykucHJlcGVuZChzdHJ1Y3R1cmUpO1xuXG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uX19jbG9zZS1jb250cm9sbGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIxKTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyMik7XG5cbiAgICAgICAgICAgICQoJy56Yy1wYW5lbCAuemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbicpLmFkZENsYXNzKCd6Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uX2Nsb3NlJyk7XG5cbiAgICAgICAgICAgIHRoaXMudGltZXIyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsIC56Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uJykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9LCAzMDApO1xuXG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudGltZXIxID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwgLnpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb24nKS5hZGRDbGFzcygnemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbl9jbG9zZScpO1xuXG4gICAgICAgICAgICB0aGlzLnRpbWVyMiA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbCAuemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSwgMzAwKTtcblxuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBaaW1icnVDb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwvTW9kdWxlL0hlYWRlciA6IE9wdGlvbiBoYW5kbGVyXG4gKlxuICogQGF1dGhvciAgSnVuanVsaW5pXG4gKiBAcGFja2FnZSBaaW1icnVDb2RlXG4gKiBAc2luY2UgICBaaW1icnVDb2RlIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgS2VybmVsICAgICAgICAgICAgIGZyb20gJy4uL2tlcm5lbCc7XG5pbXBvcnQgRGlyZWN0Tm90aWZpY2F0aW9uIGZyb20gJy4vZGlyZWN0LW5vdGlmaWNhdGlvbic7XG5cbmltcG9ydCBUUExfX3Jlc2V0X3BvcHVwX25vdGlmaWNhdGlvbiBmcm9tICcuLi9oZWFkZXIvdHBsL3Jlc2V0LXBvcHVwLW5vdGlmaWNhdGlvbi5odG1sJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uSGFuZGxlciBleHRlbmRzIEtlcm5lbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5kbiAgPSBuZXcgRGlyZWN0Tm90aWZpY2F0aW9uO1xuICAgICAgICB0aGlzLnRwbCA9IFRQTF9fcmVzZXRfcG9wdXBfbm90aWZpY2F0aW9uO1xuXG4gICAgICAgIHRoaXMuc2F2ZSgpO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgc2hvd0xvYWRpbmcoKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbC1zYXZlLXN0YXJ0ZXItYnV0dG9uJykuaGlkZSgpO1xuICAgICAgICAkKCcuemMtcGFuZWwtbG9hZGluZy1zdGFydGVyLWJ1dHRvbicpLnNob3coKTtcbiAgICAgICAgJCgnLnpjLXBhbmVsLXJlc2V0LXN0YXJ0ZXItYnV0dG9uJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKS5hZGRDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl9kaXNhYmxlZCcpO1xuICAgIH1cblxuICAgIGhpZGVMb2FkaW5nKCkge1xuICAgICAgICAkKCcuemMtcGFuZWwtc2F2ZS1zdGFydGVyLWJ1dHRvbicpLnNob3coKTtcbiAgICAgICAgJCgnLnpjLXBhbmVsLWxvYWRpbmctc3RhcnRlci1idXR0b24nKS5oaWRlKCk7XG4gICAgICAgICQoJy56Yy1wYW5lbC1yZXNldC1zdGFydGVyLWJ1dHRvbicpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgfVxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgdGhpcy5jbGljaygnLnpjLXBhbmVsLXNhdmUtc3RhcnRlci1idXR0b24nLCAoJHRoaXMpID0+IHtcbiAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9zYXZlL3N0YXJ0Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByaXYgPSB7fTtcblxuICAgICAgICAgICAgcHJpdi5wcmVwT3B0aW9ucyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge307XG5cbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwgLnpjLXBhbmVsLWNvbnRyb2xzIFtkYXRhLW9wdGlvbl0nKS5lYWNoKChpbmRleCwgZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWVJdGVtID0gJChlbCkuYXR0cignbmFtZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKGVsKS5kYXRhKCdpJykgPT0gJ2knKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lSXRlbSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgbmFtZUl0ZW0gPSBuYW1lSXRlbS5yZXBsYWNlKC9cXFtcXF0vZywgJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gJChlbCkudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZWwpLmlzKCc6cmFkaW8nKSB8fCAkKGVsKS5pcygnOmNoZWNrYm94JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKGVsKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbbmFtZUl0ZW1dID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zW25hbWVJdGVtXSA9ICQoZWwpLnZhbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmcoKTtcblxuICAgICAgICAgICAgemMuYWpheCh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGB6Yy9tb2R1bGUvcGFuZWwvc2F2ZV8ke3RoaXMuZ2V0VmFyKCdzbHVnJyl9YCxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogemMucGFyc2UocHJpdi5wcmVwT3B0aW9ucygpLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgX2FqYXhfbm9uY2U6IHRoaXMuZ2V0VmFyKCdub25jZScpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9zYXZlL2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JDaGVjaygnUGFuZWwgOiBTYXZlIG9wdGlvbnMnLCBqcVhIUik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3NhdmUvc3VjY2Vzcy1zdGFydCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbG9hZCA9IHR5cGVvZiByZXNwb25zZS5yZWxvYWQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kbi5hZGQocmVzcG9uc2UudHlwZSwgcmVzcG9uc2UudGl0bGUsIHJlc3BvbnNlLmNvbnRlbnQsIDMwMDAsIHJlbG9hZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UudHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENhY2hlKCdjaGFuZ2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3NhdmUvc3VjY2Vzcy1yZXNwb25zZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3NhdmUvc3VjY2Vzcy1lbmQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3NhdmUvZW5kJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmNsaWNrKCcuemMtcGFuZWwtcmVzZXQtc3RhcnRlci1idXR0b24nLCAoKSA9PiB7XG4gICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvcmVzZXQvc3RhcnQnKTtcblxuICAgICAgICAgICAgemMuY29uZmlybSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0VmFyKCdyZXNldC1wb3AtdXAtdGl0bGUnKSxcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiB0aGlzLmdldFZhcigncmVzZXQtcG9wLXVwLXN1YmplY3QnKSxcbiAgICAgICAgICAgICAgICB0aXRsZU9LOiB0aGlzLmdldFZhcigncmVzZXQtcG9wLXVwLW9rJyksXG4gICAgICAgICAgICAgICAgdGl0bGVDYW5jZWw6IHRoaXMuZ2V0VmFyKCdyZXNldC1wb3AtdXAtY2FuY2VsJyksXG4gICAgICAgICAgICAgICAgb2s6IChwb3B1cCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB6Yy5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGB6Yy9tb2R1bGUvcGFuZWwvcmVzZXRfJHt0aGlzLmdldFZhcignc2x1ZycpfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2FqYXhfbm9uY2U6IHRoaXMuZ2V0VmFyKCdub25jZScpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9yZXNldC9lcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JDaGVjaygnUGFuZWwgOiBSZXNldCBvcHRpb25zJywganFYSFIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLmhpZGVDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3Jlc2V0L2JlZm9yZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9yZXNldC9zdWNjZXNzLXN0YXJ0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UudHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLnJlbUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAuYXBwZW5kQ29udGVudCh6Yy50cGwodGhpcy50cGwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlc3BvbnNlLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiByZXNwb25zZS5jb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAuc2hvd0NvbnRlbnQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENhY2hlKCdjaGFuZ2VkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9yZXNldC9zdWNjZXNzLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnR5cGUgPT09ICdpbmZvJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5yZW1Db250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLmFwcGVuZENvbnRlbnQoemMudHBsKHRoaXMudHBsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiByZXNwb25zZS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogcmVzcG9uc2UuY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcl9leGl0OiB0aGlzLmdldFZhcignZXhpdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAuc2hvd0NvbnRlbnQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvcmVzZXQvc3VjY2Vzcy1pbmZvJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAucmVtQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5hcHBlbmRDb250ZW50KHpjLnRwbCh0aGlzLnRwbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ0FKQVggLyBMT0dJTiAvIFBIUCBFcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJfZXhpdDogdGhpcy5nZXRWYXIoJ2V4aXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLnNob3dDb250ZW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3Jlc2V0L3N1Y2Nlc3MtZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuemMtcG9wdXAnKS5vbignY2xpY2snLCAnLnpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fY2xvc2UtYnV0dG9uJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3Jlc2V0L3N1Y2Nlc3MtZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvcmVzZXQvZW5kJyk7XG4gICAgICAgIH0pO1xuICAgIH07XG59IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFppbWJydUNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBQYW5lbC9Nb2R1bGUvSGVhZGVyIDogUXVpY2sgbGlua3NcbiAqXG4gKiBAYXV0aG9yICBKdW5qdWxpbmlcbiAqIEBwYWNrYWdlIFppbWJydUNvZGVcbiAqIEBzaW5jZSAgIFppbWJydUNvZGUgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBLZXJuZWwgZnJvbSAnLi4va2VybmVsJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVpY2tMaW5rcyBleHRlbmRzIEtlcm5lbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGFydGVyQnV0dG9uKCk7XG4gICAgICAgIHRoaXMuY2xvc2VCbG9jaygpO1xuICAgIH1cblxuICAgIHN0YXJ0ZXJCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1wYW5lbC1xdWljay1saW5rcy1zdGFydGVyLWJ1dHRvbicsICgkdGhpcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBjcjogcGFyc2VJbnQoJCgnLnpjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlcnNfcmlnaHQnKS53aWR0aCgpKSxcbiAgICAgICAgICAgICAgICBidzogcGFyc2VJbnQoJHRoaXMub3V0ZXJXaWR0aCgpKSxcbiAgICAgICAgICAgICAgICBicG9sOiBwYXJzZUludCgkdGhpcy5wb3NpdGlvbigpLmxlZnQpLFxuICAgICAgICAgICAgICAgIGhwcjogcGFyc2VJbnQoJCgnLnpjLXBhbmVsLWhlYWRlcicpLmNzcygncGFkZGluZy1yaWdodCcpKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgcG9zID0gKChkYXRhLmNyIC0gZGF0YS5icG9sKSAtIGRhdGEuYncpICsgZGF0YS5ocHI7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwtcXVpY2stbGlua3MnKS5jc3MoJ3JpZ2h0JywgcG9zKTtcblxuICAgICAgICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKCd6Yy1wYW5lbC1xdWljay1saW5rcy1zdGFydGVyLWJ1dHRvbl9hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1xdWljay1saW5rcy1zdGFydGVyLWJ1dHRvbl9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtcXVpY2stbGlua3MnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtcXVpY2stbGlua3NfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlKCdjbG9zZS1ibG9jaycpLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ3pjLXBhbmVsLXF1aWNrLWxpbmtzLXN0YXJ0ZXItYnV0dG9uX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1xdWljay1saW5rcycpLmFkZENsYXNzKCd6Yy1wYW5lbC1xdWljay1saW5rc19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UoJ2Nsb3NlLWJsb2NrJykuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbG9zZUJsb2NrKCkge1xuICAgICAgICAkKHdpbmRvdykub24oJ3pjL2Nsb3NlLWJsb2NrLnpjLXBhbmVsJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCQoJy56Yy1wYW5lbC1xdWljay1saW5rcy1zdGFydGVyLWJ1dHRvbicpLmhhc0NsYXNzKCd6Yy1wYW5lbC1xdWljay1saW5rcy1zdGFydGVyLWJ1dHRvbl9hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1xdWljay1saW5rcy1zdGFydGVyLWJ1dHRvbicpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1xdWljay1saW5rcy1zdGFydGVyLWJ1dHRvbl9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtcXVpY2stbGlua3MnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtcXVpY2stbGlua3NfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlKCdjbG9zZS1ibG9jaycpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gXCIgPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbiB6Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uX3R5cGVfe3t0eXBlfX1cXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uX19pY29uLWNvbnRhaW5lclxcXCI+IDxpIGNsYXNzPVxcXCJ6Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uX19pY29uXFxcIj48L2k+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uX19jb250ZW50XFxcIj4gPHNwYW4gY2xhc3M9XFxcInpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb25fX3RpdGxlXFxcIj57e3RpdGxlfX08L3NwYW4+IDxwIGNsYXNzPVxcXCJ6Yy1wYW5lbC1kaXJlY3Qtbm90aWZpY2F0aW9uX190ZXh0XFxcIj57e2NvbnRlbnR9fTwvcD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLWRpcmVjdC1ub3RpZmljYXRpb25fX2Nsb3NlLWNvbnRyb2xsZXJcXFwiPiA8aSBjbGFzcz1cXFwiemMtcGFuZWwtZGlyZWN0LW5vdGlmaWNhdGlvbl9fY2xvc2UtaWNvbiB6Yy1pY29uLWNsZWFyXFxcIj48L2k+IDwvZGl2PiA8L2Rpdj5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiIDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbiB6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fdHlwZV97e3R5cGV9fVxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9faWNvbi1jb250YWluZXJcXFwiPiA8aSBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19pY29uXFxcIj48L2k+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2NvbnRlbnQtY29udGFpbmVyXFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19jb250ZW50XFxcIj4gPHNwYW4gY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fdGl0bGVcXFwiPnt7dGl0bGV9fTwvc3Bhbj4gPHAgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fdGV4dFxcXCI+e3tjb250ZW50fX08L3A+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2Nsb3NlLWNvbnRyb2xsZXJcXFwiPiA8YnV0dG9uIGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2Nsb3NlLWJ1dHRvblxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj57e3Zhcl9leGl0fX08L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj5cIjsiLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgWmltYnJ1Q29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZSA6IEtlcm5lbFxuICpcbiAqIEBhdXRob3IgIEp1bmp1bGluaVxuICogQHBhY2thZ2UgWmltYnJ1Q29kZVxuICogQHNpbmNlICAgWmltYnJ1Q29kZSAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2VybmVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nbG9iYWwgPSB6Yy5nZXRNb2R1bGVEYXRhKCdwYW5lbCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhbmVsIHNjcm9sbCBiYXIgdG9wXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHNjcm9sbGJhclRvcCgpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsIC56Yy1zY3JvbGxiYXInKS5zY3JvbGxUb3AoMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHBhbmVsIGhlaWdodFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjYWxjSGVpZ2h0KCkge1xuICAgICAgICBpZiAodGhpcy5nZXRDYWNoZSgnd3AtYm9keS1oZWlnaHQnKSAhPT0gJCh3aW5kb3cpLmhlaWdodCgpKSB7XG4gICAgICAgICAgICB0aGlzLmFkZENhY2hlKCd3cC1ib2R5LWhlaWdodCcsICQod2luZG93KS5oZWlnaHQoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFcmFzZSBtb2JpbGUgbWVudVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBlcmFzZU1vYmlsZU1lbnUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGVza3RvcE1vZGUoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VydmljZSgnbWVudS9pc1N1Ym1lbnVJdGVtJykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtbWVudScpLmFkZENsYXNzKCd6Yy1wYW5lbC1tZW51X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRlbnQnKS5hZGRDbGFzcygnemMtcGFuZWwtY29udGVudF9zdWJtZW51LWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLW1lbnUnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtbWVudV9zdWJtZW51LWFjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udGVudF9zdWJtZW51LWFjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udGVudF9tb2JpbGUtbWVudS12aXNpYmxlJyk7XG4gICAgICAgICQoJy56Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnUnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51X2FjdGl2ZScpO1xuXG4gICAgICAgIHRoaXMuc2VydmljZSgnY2xvc2UtYmxvY2snKS5oaWRlRGVmaW5pdGVseSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElzIGRlc2t0b3AgbW9kZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybiBcInRydWVcIiBpZiBib2R5IHdpZHRoIGlzIGJpZ2dlciB0aGVuIFwibWluLXNpemUubW9kZTJcIlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGlzRGVza3RvcE1vZGUoKSB7XG4gICAgICAgIHJldHVybiAoJCgnLnpjLXBhbmVsJykud2lkdGgoKSA+PSB0aGlzLmdldENvbmZpZygnbWluLXNpemUvbW9kZTInKSk7XG4gICAgfVxuXG4gICAgIC8qKlxuICAgICAqIEVycm9yIGNoZWNrLCBpbiBBSkFYIG9yIG90aGVyXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGVycm9yQ2hlY2sobXNnLCBqcVhIUikge1xuICAgICAgICBpZiAoISQoJy56Yy1wb3B1cCcpLmhhc0NsYXNzKCd6Yy1wYW5lbC1lcnJvci1jb25maXJtJykpIHtcblxuICAgICAgICAgICAgaWYgKCQoJy56Yy1wb3B1cCcpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG5cbiAgICAgICAgICAgIHpjLmNvbmZpcm0oe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBgRXJyb3IgLSAke2pxWEhSLnN0YXR1c1RleHR9IDogJHtqcVhIUi5zdGF0dXN9YCxcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBgJHttc2d9IFBhZ2Ugd2lsbCBiZSByZWxvYWRlZCwgb2s/YCxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3pjLXBhbmVsLWVycm9yLWNvbmZpcm0nLFxuICAgICAgICAgICAgICAgIG9rOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGdsb2JhbCB2YXJcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGVmICAgSWYgbm90IGZvdW5kLCByZXR1cm4gXCJkZWZcIlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGdldFZhcihrZXksIGRlZikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwudmFycywga2V5KTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRlZjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBnbG9iYWwgdmFyIHZhbHVlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRhdGEgIFZhciB2YWx1ZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZFZhcihrZXksIGRhdGEpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLnZhcnMsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGdsb2JhbCBjYWNoZSB2YWx1ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkYXRhICBDYWNoZSB2YWx1ZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZENhY2hlKGtleSwgZGF0YSkge1xuICAgICAgICB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwuY2FjaGUsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGdsb2JhbCBjYWNoZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkZWYgICBJZiBub3QgZm91bmQsIHJldHVybiBcImRlZlwiXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0Q2FjaGUoa2V5LCBkZWYpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNhY2hlLCBrZXkpO1xuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbGVtZW50IGZyb20gY2FjaGUgb2JqZWN0XG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICovXG4gICAgcmVtQ2FjaGUoa2V5KSB7XG4gICAgICAgIHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jYWNoZSwga2V5LCBmYWxzZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGdsb2JhbCBjb25maWcgdmFsdWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGF0YSAgQ29uZmlnIHZhbHVlXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkQ29uZmlnKGtleSwgZGF0YSkge1xuICAgICAgICB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwuY29uZmlnLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBnbG9iYWwgY29uZmlnXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRlZiAgIElmIG5vdCBmb3VuZCwgcmV0dXJuIFwiZGVmXCJcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBnZXRDb25maWcoa2V5LCBkZWYpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNvbmZpZywga2V5KTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRlZjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlcnZpY2UobmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oY2FsbGJhY2spIHx8IHR5cGVvZiBjYWxsYmFjayA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENhY2hlKGBzZXJ2aWNlcy8ke25hbWV9YCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXRDYWNoZShgc2VydmljZXMvJHtuYW1lfWAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAoc2VydmljZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTmV4dCBzZXJ2aWNlIG5vdCBleGlzdCA6ICR7bmFtZX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbihldmVudHMsIHNlbGVjdG9yLCBoYW5kbGVyLCBwcmV2ZW50RGVmYXVsdCA9IGZhbHNlKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbCcpLm9uKGV2ZW50cywgc2VsZWN0b3IsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByZXZlbnREZWZhdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsICQoZXZlbnQuY3VycmVudFRhcmdldCksIGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xpY2soc2VsZWN0b3IsIGhhbmRsZXIsIHByZXZlbnREZWZhdWx0ID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLm9uKCdjbGljaycsIHNlbGVjdG9yLCBoYW5kbGVyLCBwcmV2ZW50RGVmYXVsdCk7XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBaaW1icnVDb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwvTW9kdWxlL01vZGUgOiBQYW5lbCBwYWdlIG1vZGUgYm9keSBzaXplXG4gKlxuICogQGF1dGhvciAgSnVuanVsaW5pXG4gKiBAcGFja2FnZSBaaW1icnVDb2RlXG4gKiBAc2luY2UgICBaaW1icnVDb2RlIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgS2VybmVsIGZyb20gJy4uL2tlcm5lbCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsUGFnZU1vZGVCb2R5U2l6ZSBleHRlbmRzIEtlcm5lbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5oZWlnaHQoKTtcbiAgICAgICAgdGhpcy5jaGVja1dwU3RpY2t5TWVudSgpO1xuICAgICAgICB0aGlzLmNoZWNrUGFuZWxXaWR0aCgpO1xuXG4gICAgICAgIGxldCB3aW5kb3dXaWR0aCAgPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgICAgIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS56Yy1wYW5lbCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCAhPSB3aW5kb3dXaWR0aCkge1xuICAgICAgICAgICAgICAgIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmVyYXNlTW9iaWxlTWVudSgpOyAvLyBFcmFzZSBtb2JpbGUgbWVudVxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0KCk7ICAgICAgICAgIC8vIENoZWNrIHBhbmVsIGhlaWdodCBzaXplXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzRGVza3RvcE1vZGUoKSAmJiB3aW5kb3cuaW5uZXJIZWlnaHQgIT0gd2luZG93SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjSGVpZ2h0KCk7IC8vIENhbGN1bGF0ZSBwYW5lbCBoZWlnaHRcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCgpOyAgICAgLy8gQ2hlY2sgcGFuZWwgaGVpZ2h0IHNpemVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGVpZ2h0KCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rlc2t0b3BNb2RlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tUb3BTcGFjZSgpO1xuXG4gICAgICAgICAgICAkKCcuemMtcGFuZWwnKS5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250cm9scycpLmhlaWdodCgnYXV0bycpO1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLXN1Ym1lbnVfX3Njcm9sbGJhci1jb250YWluZXInKS5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbCcpLmhlaWdodCgnMTAwJScpO1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRyb2xzJykuaGVpZ2h0KCcxMDAlJyk7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwtc3VibWVudV9fc2Nyb2xsYmFyLWNvbnRhaW5lcicpLmhlaWdodCgnMTAwJScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tUb3BTcGFjZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZXNrdG9wTW9kZSgpKSB7XG4gICAgICAgICAgICBjb25zdCB3cGJvZHlDb250ZW50ICA9ICQoJyN3cGJvZHktY29udGVudCcpLmhlaWdodCgpLFxuICAgICAgICAgICAgICAgICAgdGVtcGxhdGVIZWlnaHQgPSAkKCcuemMtcGFuZWwtdGVtcGxhdGUnKS5oZWlnaHQoKSxcbiAgICAgICAgICAgICAgICAgIHRvcCA9ICh3cGJvZHlDb250ZW50IC0gdGVtcGxhdGVIZWlnaHQpICsgdGhpcy5nZXRDb25maWcoJ3dwLWFkbWluLWJhci1oZWlnaHQnKTtcblxuICAgICAgICAgICAgJCgnLnpjLXBhbmVsJykuY3NzKCd0b3AnLCB0b3ApO1xuXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRDb25maWcoJ3dwLWJvZHktaGVpZ2h0JykgLSB0b3AgLSB0aGlzLmdldENvbmZpZygnYm90dG9tLW1hcmdpbicpO1xuXG4gICAgICAgICAgICBpZiAoYm9keSA+IHRoaXMuZ2V0Q29uZmlnKCdtaW4tc2l6ZS9ib2R5LWhlaWdodCcpKSB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsJykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsX2Rpc2FibGUtaGVpZ2h0LWZpeGVkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbCcpLmFkZENsYXNzKCd6Yy1wYW5lbF9kaXNhYmxlLWhlaWdodC1maXhlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsJykuY3NzKCd0b3AnLCAnYXV0bycpO1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsJykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsX2Rpc2FibGUtaGVpZ2h0LWZpeGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1dwU3RpY2t5TWVudSgpIHtcbiAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygnZm9sZGVkJykpIHtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbCcpLmFkZENsYXNzKCd6Yy1wYW5lbF93cC1tZW51LWZvbGRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnI2FkbWlubWVudW1haW4nKS5vbignY2xpY2snLCAnI2NvbGxhcHNlLW1lbnUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ2ZvbGRlZCcpKSB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsJykuYWRkQ2xhc3MoJ3pjLXBhbmVsX3dwLW1lbnUtZm9sZGVkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbCcpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbF93cC1tZW51LWZvbGRlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRNb2RlU2l6ZSh3aWR0aCkge1xuICAgICAgICBsZXQgbW9kZSA9ICdtb2RlLTEtJztcblxuICAgICAgICBpZiAodGhpcy5nZXRDb25maWcoJ21pbi1zaXplL21vZGUxJykgPj0gd2lkdGgpIHtcbiAgICAgICAgICAgIG1vZGUgPSAnbW9kZS0xLSc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXRDb25maWcoJ21pbi1zaXplL21vZGUyJykgPj0gd2lkdGgpIHtcbiAgICAgICAgICAgIG1vZGUgPSAnbW9kZS0yLSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2RlID0gJ21vZGUtMy0nO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnLnpjLXBhbmVsJykuYXR0cignZGF0YS13aWR0aCcsIG1vZGUgKyB3aWR0aCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3NpemUtY2hhbmdlZCcpO1xuICAgIH1cblxuICAgIGNoZWNrUGFuZWxXaWR0aCgpIHtcbiAgICAgICAgY29uc3Qgcm8gPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cmllc1swXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRNb2RlU2l6ZShlbnRyaWVzWzBdLmNvbnRlbnRSZWN0LndpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcm8ub2JzZXJ2ZSgkKCcuemMtcGFuZWwnKS5nZXQoMCkpO1xuICAgIH1cbn0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEVBO0FBMkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBVkE7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7OztBQWpFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFSQTtBQVFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBNkJBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFoRUE7QUFrRUE7QUF4RUE7QUEyRUE7QUFDQTtBQUNBOzs7O0FBMUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFMQTtBQUtBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQXhDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6QkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0NBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoT0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQXhCQTtBQXlCQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBeEdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=