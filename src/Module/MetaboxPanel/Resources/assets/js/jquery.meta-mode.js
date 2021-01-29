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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Module/MetaboxPanel/Resources/assets/js/es6/jquery.meta-mode.es6.js":
/*!*********************************************************************************!*\
  !*** ./src/Module/MetaboxPanel/Resources/assets/js/es6/jquery.meta-mode.es6.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_mode_meta_mode_body_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/mode/meta-mode-body-size */ "./src/Module/MetaboxPanel/Resources/assets/js/es6/module/mode/meta-mode-body-size.js");
/* harmony import */ var _module_header_backup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/header/backup */ "./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/backup.js");
/* harmony import */ var _module_header_reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/header/reset */ "./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/reset.js");
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : MetaboxPanel : Meta mode
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */





zc.module.panel.addMode(function ($, panel) {
  panel.addConfig('height-FAH', 56);
  panel.addConfig('min-size/mode2', 780);
  panel.closeBlock(); // Init callback of close block.

  panel.controlInit(); // Initialization of controls.

  panel.controlHelp(); // Control help window.

  panel.scrollbar(); // Initialization of scroll bar in panel.

  panel.noMetaScaleIfMobile(); // Disable meta scale if mobile device.

  panel.condition(); // Initialization of panel condition checker.

  panel.tooltip(); // Init tooltip

  panel.menu(); // Panel menu.

  new _module_mode_meta_mode_body_size__WEBPACK_IMPORTED_MODULE_0__["default"](); // Panel body size.

  new _module_header_backup__WEBPACK_IMPORTED_MODULE_1__["default"](); // Meta backup, import/export.

  new _module_header_reset__WEBPACK_IMPORTED_MODULE_2__["default"](); // Reset meta options.

  $('.zc-panel-template__panel-loading').hide(); // Hide panel loading text.

  $('.zc-panel.zc-panel_mode_meta').css('visibility', 'visible'); // Full display panel.

  /**
   * Disable save button
   * 
   * @return {null} None
   * @since 1.0.0
   */

  panel.disableSaveButton = function () {};
  /**
   * Enable save button
   * 
   * @return {null} None
   * @since 1.0.0
   */


  panel.enableSaveButton = function () {};
  /**
   * Disable reset button
   * 
   * @return {null} None
   * @since 1.0.0
   */


  panel.disableResetButton = function () {};
  /**
   * Enable reset button
   * 
   * @return {null} None
   * @since 1.0.0
   */


  panel.enableResetButton = function () {};
});

/***/ }),

/***/ "./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/backup.js":
/*!*********************************************************************************!*\
  !*** ./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/backup.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Backup; });
/* harmony import */ var _Panel_Resources_assets_js_es6_module_kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../Panel/Resources/assets/js/es6/module/kernel */ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js");
/* harmony import */ var _tpl_backup_notification_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tpl/backup-notification.html */ "./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/tpl/backup-notification.html");
/* harmony import */ var _tpl_backup_notification_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tpl_backup_notification_html__WEBPACK_IMPORTED_MODULE_1__);
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : MetaboxPanel/Module/Header : Backup
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

var Backup = /*#__PURE__*/function (_Kernel) {
  _inherits(Backup, _Kernel);

  var _super = _createSuper(Backup);

  function Backup() {
    var _this;

    _classCallCheck(this, Backup);

    _this = _super.call(this);
    _this.id = false;
    _this.closeBlock = {
      __cb: '.zc-popup-backup__close-block',
      show: function show() {
        $(_this.closeBlock.__cb).show();
      },
      hide: function hide() {
        $(_this.closeBlock.__cb).hide();
      }
    };
    _this.popup = zc.popup();

    _this.backupButton();

    return _this;
  }

  _createClass(Backup, [{
    key: "backupButton",
    value: function backupButton() {
      var _this2 = this;

      this.click('.zc-metabox-panel-backup-button', function () {
        _this2.id = $('.zc-panel-template_wid').data('post-id');

        _this2.popup.add({
          title: _this2.getVar('backup-pop-up-title'),
          width: 400,
          height: 400,
          ajax: {
            action: "zc/module/metabox_panel/backup_".concat(_this2.getVar('slug')),
            type: 'get-content',
            _ajax_nonce: _this2.getVar('nonce')
          },
          error: function error(status) {
            _this2.errorCheck('MetaboxPanelBackup : Load content', status);
          },
          success: function success() {
            _this2.save();

            _this2.deleteAll();

            _this2.deleteItem();

            _this2.restore();
          }
        });
      });
    }
  }, {
    key: "save",
    value: function save() {
      var _this3 = this;

      $('.zc-popup').on('click', '.zc-popup-backup__save-button', function (event) {
        event.preventDefault();
        /* Act on the event */

        var backupName = $(event.currentTarget).parent().find('input').val();

        if (backupName && backupName !== undefined) {
          zc.ajax({
            data: {
              action: "zc/module/metabox_panel/backup_".concat(_this3.getVar('slug')),
              type: 'save',
              id: _this3.id,
              backup_name: backupName,
              _ajax_nonce: _this3.getVar('nonce')
            },
            error: function error(jqXHR, textStatus) {
              _this3.errorCheck('MetaboxPanelBackup : Save', jqXHR);

              _this3.closeBlock.hide();
            },
            before: function before() {
              _this3.closeBlock.show();
            },
            success: function success(response) {
              _this3.closeBlock.hide();

              if (response.result === 'success') {
                if ($('.zc-popup-backup__no-backups').hasClass('zc-popup-backup__no-backups_active')) {
                  $('.zc-popup-backup__no-backups').removeClass('zc-popup-backup__no-backups_active');
                }

                $('.zc-popup-backup__input').val('');
                $('.zc-popup-backup__number').text(response.change.count);
                $('.zc-popup-backup__list').append(response.change.item);
              } else {
                console.error(response.result_msg);
              }
            }
          });
        }
      });
    }
  }, {
    key: "deleteAll",
    value: function deleteAll() {
      var _this4 = this;

      $('.zc-popup').on('click', '.zc-popup-backup__delete-button', function (event) {
        event.preventDefault();
        /* Act on the event */

        zc.ajax({
          data: {
            action: "zc/module/metabox_panel/backup_".concat(_this4.getVar('slug')),
            type: 'delete',
            _ajax_nonce: _this4.getVar('nonce')
          },
          error: function error(jqXHR, textStatus) {
            _this4.errorCheck('MetaboxPanelBackup : Delete all', jqXHR);

            _this4.closeBlock.hide();
          },
          before: function before() {
            _this4.closeBlock.show();
          },
          success: function success(response) {
            _this4.closeBlock.hide();

            if (response.result === 'success') {
              $('.zc-popup-backup__number').text(0);
              $('.zc-popup-backup__list').empty();
              $('.zc-popup-backup__no-backups').addClass('zc-popup-backup__no-backups_active');
            } else {
              console.error(response.result_msg);
            }
          }
        });
      });
    }
  }, {
    key: "deleteItem",
    value: function deleteItem() {
      var _this5 = this;

      $('.zc-popup').on('click', '.zc-popup-backup__item-button_delete', function (event) {
        event.preventDefault();
        /* Act on the event */

        zc.ajax({
          data: {
            action: "zc/module/metabox_panel/backup_".concat(_this5.getVar('slug')),
            type: 'delete-item',
            backup_name: $(event.currentTarget).parent().attr('id'),
            _ajax_nonce: _this5.getVar('nonce')
          },
          error: function error(jqXHR, textStatus) {
            _this5.errorCheck('MetaboxPanelBackup : Delete item', jqXHR);

            _this5.closeBlock.hide();
          },
          before: function before() {
            _this5.closeBlock.show();
          },
          success: function success(response) {
            _this5.closeBlock.hide();

            if (response.result === 'success') {
              $('.zc-popup-backup__number').text(response.count);
              $(event.currentTarget).parent().remove();

              if (response.count == 0) {
                $('.zc-popup-backup__no-backups').addClass('zc-popup-backup__no-backups_active');
              }
            } else {
              console.error(response.result_msg);
            }
          }
        });
      });
    }
  }, {
    key: "restore",
    value: function restore() {
      var _this6 = this;

      $('.zc-popup').on('click', '.zc-popup-backup__item-button_restore', function (event) {
        event.preventDefault();
        /* Act on the event */

        zc.ajax({
          data: {
            action: "zc/module/metabox_panel/backup_".concat(_this6.getVar('slug')),
            type: 'restore',
            id: _this6.id,
            backup_name: $(event.currentTarget).parent().attr('id'),
            _ajax_nonce: _this6.getVar('nonce')
          },
          error: function error(jqXHR, textStatus) {
            _this6.errorCheck('MetaboxPanelBackup : Restore', jqXHR);

            _this6.closeBlock.hide();
          },
          before: function before() {
            _this6.closeBlock.show();
          },
          success: function success(response) {
            _this6.closeBlock.hide();

            if (response.result === 'success') {
              _this6.popup.remContent();

              _this6.popup.appendContent(zc.tpl(_tpl_backup_notification_html__WEBPACK_IMPORTED_MODULE_1___default.a, {
                type: response.type,
                title: response.title,
                content: response.content
              }));

              _this6.popup.showContent();

              setTimeout(function () {
                location.reload();
              }, 2000);
            } else {
              console.error(response.result_msg);
            }
          }
        });
      });
    }
  }]);

  return Backup;
}(_Panel_Resources_assets_js_es6_module_kernel__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/reset.js":
/*!********************************************************************************!*\
  !*** ./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/reset.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reset; });
/* harmony import */ var _Panel_Resources_assets_js_es6_module_kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../Panel/Resources/assets/js/es6/module/kernel */ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js");
/* harmony import */ var _header_tpl_reset_popup_notification_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/tpl/reset-popup-notification.html */ "./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/tpl/reset-popup-notification.html");
/* harmony import */ var _header_tpl_reset_popup_notification_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_tpl_reset_popup_notification_html__WEBPACK_IMPORTED_MODULE_1__);
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : MetaboxPanel/Module/Header : Reset
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

var Reset = /*#__PURE__*/function (_Kernel) {
  _inherits(Reset, _Kernel);

  var _super = _createSuper(Reset);

  function Reset() {
    var _this;

    _classCallCheck(this, Reset);

    _this = _super.call(this);

    _this.confirm();

    return _this;
  }

  _createClass(Reset, [{
    key: "confirm",
    value: function confirm() {
      var _this2 = this;

      this.click('.zc-metabox-panel-reset-button', function () {
        zc.confirm({
          title: _this2.getVar('reset-pop-up-title'),
          subject: _this2.getVar('reset-pop-up-subject'),
          titleOK: _this2.getVar('reset-pop-up-ok'),
          titleCancel: _this2.getVar('reset-pop-up-cancel'),
          ok: function ok(popup) {
            zc.ajax({
              data: {
                action: "zc/module/metabox_panel/reset_".concat(_this2.getVar('slug')),
                id: $('.zc-panel-template_wid').data('post-id'),
                _ajax_nonce: _this2.getVar('nonce')
              },
              error: function error(jqXHR, textStatus) {
                $(window).trigger('zc/metabox-panel/reset/error');

                _this2.errorCheck('MetaboxPanel : Reset settings', jqXHR);
              },
              before: function before() {
                popup.hideContent();
                $(window).trigger('zc/metabox-panel/reset/before');
              },
              success: function success(response) {
                if (response.type === 'success') {
                  _this2.successConfirm(popup, response);

                  $(window).trigger('zc/metabox-panel/reset/success-success');
                } else {
                  _this2.neutralConfirm(popup, response);

                  $(window).trigger('zc/metabox-panel/reset/success-info');
                }
              }
            });
          }
        });
      });
    }
  }, {
    key: "successConfirm",
    value: function successConfirm(popup, response) {
      popup.remContent();
      popup.appendContent(zc.tpl(_header_tpl_reset_popup_notification_html__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: response.type,
        title: response.title,
        content: response.content
      }));
      popup.showContent();
      setTimeout(function () {
        location.reload();
      }, 2000);
    }
  }, {
    key: "neutralConfirm",
    value: function neutralConfirm(popup, response) {
      popup.remContent();
      popup.appendContent(zc.tpl(_header_tpl_reset_popup_notification_html__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: response.type,
        title: response.title,
        content: response.content,
        var_exit: this.getVar('exit')
      }));
      popup.showContent();
      $('.zc-popup').on('click', '.zc-panel-popup-notification__close-button', function (event) {
        event.preventDefault();
        /* Act on the event */

        popup.close();
      });
    }
  }]);

  return Reset;
}(_Panel_Resources_assets_js_es6_module_kernel__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/tpl/backup-notification.html":
/*!****************************************************************************************************!*\
  !*** ./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/tpl/backup-notification.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"zc-panel-popup-notification zc-panel-popup-notification_mode_backup zc-panel-popup-notification_type_{{type}}\"> <div class=\"zc-panel-popup-notification__icon-container\"> <i class=\"zc-panel-popup-notification__icon\"></i> </div> <div class=\"zc-panel-popup-notification__content\"> <span class=\"zc-panel-popup-notification__title\">{{title}}</span> <p class=\"zc-panel-popup-notification__text\">{{content}}</p> </div> </div>";

/***/ }),

/***/ "./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/tpl/reset-popup-notification.html":
/*!*********************************************************************************************************!*\
  !*** ./src/Module/MetaboxPanel/Resources/assets/js/es6/module/header/tpl/reset-popup-notification.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"zc-panel-popup-notification zc-panel-popup-notification_type_{{type}}\"> <div class=\"zc-panel-popup-notification__icon-container\"> <i class=\"zc-panel-popup-notification__icon\"></i> </div> <div class=\"zc-panel-popup-notification__content-container\"> <div class=\"zc-panel-popup-notification__content\"> <span class=\"zc-panel-popup-notification__title\">{{title}}</span> <p class=\"zc-panel-popup-notification__text\">{{content}}</p> </div> <div class=\"zc-panel-popup-notification__close-controller\"> <button class=\"zc-panel-popup-notification__close-button\" type=\"button\">{{var_exit}}</button> </div> </div> </div>";

/***/ }),

/***/ "./src/Module/MetaboxPanel/Resources/assets/js/es6/module/mode/meta-mode-body-size.js":
/*!********************************************************************************************!*\
  !*** ./src/Module/MetaboxPanel/Resources/assets/js/es6/module/mode/meta-mode-body-size.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MetaModeBodySize; });
/* harmony import */ var _Panel_Resources_assets_js_es6_module_kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../Panel/Resources/assets/js/es6/module/kernel */ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js");
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : MetaboxPanel/Module/Mode : Meta mode body size
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

var MetaModeBodySize = /*#__PURE__*/function (_Kernel) {
  _inherits(MetaModeBodySize, _Kernel);

  var _super = _createSuper(MetaModeBodySize);

  function MetaModeBodySize() {
    var _this;

    _classCallCheck(this, MetaModeBodySize);

    _this = _super.call(this);
    var panelWidth = $('.zc-panel.zc-panel_mode_meta').width();

    if (panelWidth > 0) {
      _this.checkPanelWidth();

      _this.metaHeight();
    } else {
      var interval = setInterval(function () {
        panelWidth = $('.zc-panel.zc-panel_mode_meta').width();

        if (panelWidth > 0) {
          clearInterval(interval);

          _this.checkPanelWidth();

          _this.metaHeight();
        }
      }, 100);
    }

    zc.resize(function () {
      _this.eraseMobileMenu(); // Erase mobile menu


      _this.metaHeight(); // Check panel height size

    });
    return _this;
  }

  _createClass(MetaModeBodySize, [{
    key: "metaHeight",
    value: function metaHeight() {
      if (this.isDesktopMode()) {
        $('.zc-panel.zc-panel_mode_meta').height('auto');
        $('.zc-panel.zc-panel_mode_meta .zc-panel-controls').height('auto');
        $('.zc-panel.zc-panel_mode_meta .zc-panel-submenu__scrollbar-container').height('auto');
      } else {
        $('.zc-panel.zc-panel_mode_meta').height('100%');
        $('.zc-panel.zc-panel_mode_meta .zc-panel-controls').height('100%');
        $('.zc-panel.zc-panel_mode_meta .zc-panel-submenu__scrollbar-container').height('100%');
      }
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

      $('.zc-panel.zc-panel_mode_meta').attr('data-width', mode + width);
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
      ro.observe($('.zc-panel.zc-panel_mode_meta').get(0));
    }
  }]);

  return MetaModeBodySize;
}(_Panel_Resources_assets_js_es6_module_kernel__WEBPACK_IMPORTED_MODULE_0__["default"]);



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

/***/ 2:
/*!***************************************************************************************!*\
  !*** multi ./src/Module/MetaboxPanel/Resources/assets/js/es6/jquery.meta-mode.es6.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/k513/Documents/dev/wp/wp-content/themes/viki/vendor/junjulini/zimbrucode/src/Module/MetaboxPanel/Resources/assets/js/es6/jquery.meta-mode.es6.js */"./src/Module/MetaboxPanel/Resources/assets/js/es6/jquery.meta-mode.es6.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kdWxlL01ldGFib3hQYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2pxdWVyeS5tZXRhLW1vZGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL01vZHVsZS9NZXRhYm94UGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvanF1ZXJ5Lm1ldGEtbW9kZS5lczYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01vZHVsZS9NZXRhYm94UGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2hlYWRlci9iYWNrdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01vZHVsZS9NZXRhYm94UGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2hlYWRlci9yZXNldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kdWxlL01ldGFib3hQYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvaGVhZGVyL3RwbC9iYWNrdXAtbm90aWZpY2F0aW9uLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL01vZHVsZS9NZXRhYm94UGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2hlYWRlci90cGwvcmVzZXQtcG9wdXAtbm90aWZpY2F0aW9uLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL01vZHVsZS9NZXRhYm94UGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL21vZGUvbWV0YS1tb2RlLWJvZHktc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9rZXJuZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuIiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFppbWJydUNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBNZXRhYm94UGFuZWwgOiBNZXRhIG1vZGVcbiAqXG4gKiBAYXV0aG9yICBKdW5qdWxpbmlcbiAqIEBwYWNrYWdlIFppbWJydUNvZGVcbiAqIEBzaW5jZSAgIFppbWJydUNvZGUgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBCb2R5U2l6ZSBmcm9tICcuL21vZHVsZS9tb2RlL21ldGEtbW9kZS1ib2R5LXNpemUnO1xuaW1wb3J0IEJhY2t1cCAgIGZyb20gJy4vbW9kdWxlL2hlYWRlci9iYWNrdXAnO1xuaW1wb3J0IFJlc2V0ICAgIGZyb20gJy4vbW9kdWxlL2hlYWRlci9yZXNldCc7XG5cbnpjLm1vZHVsZS5wYW5lbC5hZGRNb2RlKCgkLCBwYW5lbCkgPT4ge1xuXG4gICAgcGFuZWwuYWRkQ29uZmlnKCdoZWlnaHQtRkFIJywgNTYpO1xuICAgIHBhbmVsLmFkZENvbmZpZygnbWluLXNpemUvbW9kZTInLCA3ODApO1xuXG4gICAgcGFuZWwuY2xvc2VCbG9jaygpOyAgICAgICAgICAvLyBJbml0IGNhbGxiYWNrIG9mIGNsb3NlIGJsb2NrLlxuICAgIHBhbmVsLmNvbnRyb2xJbml0KCk7ICAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gb2YgY29udHJvbHMuXG4gICAgcGFuZWwuY29udHJvbEhlbHAoKTsgICAgICAgICAvLyBDb250cm9sIGhlbHAgd2luZG93LlxuICAgIHBhbmVsLnNjcm9sbGJhcigpOyAgICAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gb2Ygc2Nyb2xsIGJhciBpbiBwYW5lbC5cbiAgICBwYW5lbC5ub01ldGFTY2FsZUlmTW9iaWxlKCk7IC8vIERpc2FibGUgbWV0YSBzY2FsZSBpZiBtb2JpbGUgZGV2aWNlLlxuICAgIHBhbmVsLmNvbmRpdGlvbigpOyAgICAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gb2YgcGFuZWwgY29uZGl0aW9uIGNoZWNrZXIuXG4gICAgcGFuZWwudG9vbHRpcCgpOyAgICAgICAgICAgICAvLyBJbml0IHRvb2x0aXBcbiAgICBwYW5lbC5tZW51KCk7ICAgICAgICAgICAgICAgIC8vIFBhbmVsIG1lbnUuXG5cbiAgICBuZXcgQm9keVNpemU7IC8vIFBhbmVsIGJvZHkgc2l6ZS5cbiAgICBuZXcgQmFja3VwOyAgIC8vIE1ldGEgYmFja3VwLCBpbXBvcnQvZXhwb3J0LlxuICAgIG5ldyBSZXNldDsgICAgLy8gUmVzZXQgbWV0YSBvcHRpb25zLlxuXG4gICAgJCgnLnpjLXBhbmVsLXRlbXBsYXRlX19wYW5lbC1sb2FkaW5nJykuaGlkZSgpOyAvLyBIaWRlIHBhbmVsIGxvYWRpbmcgdGV4dC5cbiAgICAkKCcuemMtcGFuZWwuemMtcGFuZWxfbW9kZV9tZXRhJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTsgICAvLyBGdWxsIGRpc3BsYXkgcGFuZWwuXG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIHNhdmUgYnV0dG9uXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHBhbmVsLmRpc2FibGVTYXZlQnV0dG9uID0gKCkgPT4ge307XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgc2F2ZSBidXR0b25cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcGFuZWwuZW5hYmxlU2F2ZUJ1dHRvbiA9ICgpID0+IHt9O1xuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSByZXNldCBidXR0b25cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcGFuZWwuZGlzYWJsZVJlc2V0QnV0dG9uID0gKCkgPT4ge307XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgcmVzZXQgYnV0dG9uXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHBhbmVsLmVuYWJsZVJlc2V0QnV0dG9uID0gKCkgPT4ge307XG59KTsiLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgWmltYnJ1Q29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IE1ldGFib3hQYW5lbC9Nb2R1bGUvSGVhZGVyIDogQmFja3VwXG4gKlxuICogQGF1dGhvciAgSnVuanVsaW5pXG4gKiBAcGFja2FnZSBaaW1icnVDb2RlXG4gKiBAc2luY2UgICBaaW1icnVDb2RlIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgS2VybmVsIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9rZXJuZWwnO1xuXG5pbXBvcnQgVFBMX19iYWNrdXBfbm90aWZpY2F0aW9uIGZyb20gJy4vdHBsL2JhY2t1cC1ub3RpZmljYXRpb24uaHRtbCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2t1cCBleHRlbmRzIEtlcm5lbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNsb3NlQmxvY2sgID0ge1xuICAgICAgICAgICAgX19jYjogJy56Yy1wb3B1cC1iYWNrdXBfX2Nsb3NlLWJsb2NrJyxcblxuICAgICAgICAgICAgc2hvdzogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQodGhpcy5jbG9zZUJsb2NrLl9fY2IpLnNob3coKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGhpZGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkKHRoaXMuY2xvc2VCbG9jay5fX2NiKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5wb3B1cCA9IHpjLnBvcHVwKCk7XG5cbiAgICAgICAgdGhpcy5iYWNrdXBCdXR0b24oKTtcbiAgICB9XG5cbiAgICBiYWNrdXBCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1tZXRhYm94LXBhbmVsLWJhY2t1cC1idXR0b24nLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlkID0gJCgnLnpjLXBhbmVsLXRlbXBsYXRlX3dpZCcpLmRhdGEoJ3Bvc3QtaWQnKTtcblxuICAgICAgICAgICAgdGhpcy5wb3B1cC5hZGQoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmdldFZhcignYmFja3VwLXBvcC11cC10aXRsZScpLFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgICAgYWpheDoge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGB6Yy9tb2R1bGUvbWV0YWJveF9wYW5lbC9iYWNrdXBfJHt0aGlzLmdldFZhcignc2x1ZycpfWAsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdnZXQtY29udGVudCcsXG4gICAgICAgICAgICAgICAgICAgIF9hamF4X25vbmNlOiB0aGlzLmdldFZhcignbm9uY2UnKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IChzdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvckNoZWNrKCdNZXRhYm94UGFuZWxCYWNrdXAgOiBMb2FkIGNvbnRlbnQnLCBzdGF0dXMpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKCkgID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlSXRlbSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3RvcmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgJCgnLnpjLXBvcHVwJykub24oJ2NsaWNrJywgJy56Yy1wb3B1cC1iYWNrdXBfX3NhdmUtYnV0dG9uJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICBjb25zdCBiYWNrdXBOYW1lID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKS5maW5kKCdpbnB1dCcpLnZhbCgpO1xuXG4gICAgICAgICAgICBpZiAoYmFja3VwTmFtZSAmJiBiYWNrdXBOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB6Yy5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBgemMvbW9kdWxlL21ldGFib3hfcGFuZWwvYmFja3VwXyR7dGhpcy5nZXRWYXIoJ3NsdWcnKX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NhdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrdXBfbmFtZTogYmFja3VwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hamF4X25vbmNlOiB0aGlzLmdldFZhcignbm9uY2UnKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yQ2hlY2soJ01ldGFib3hQYW5lbEJhY2t1cCA6IFNhdmUnLCBqcVhIUik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQmxvY2suaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUJsb2NrLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy56Yy1wb3B1cC1iYWNrdXBfX25vLWJhY2t1cHMnKS5oYXNDbGFzcygnemMtcG9wdXAtYmFja3VwX19uby1iYWNrdXBzX2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cC1iYWNrdXBfX25vLWJhY2t1cHMnKS5yZW1vdmVDbGFzcygnemMtcG9wdXAtYmFja3VwX19uby1iYWNrdXBzX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cC1iYWNrdXBfX2lucHV0JykudmFsKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuemMtcG9wdXAtYmFja3VwX19udW1iZXInKS50ZXh0KHJlc3BvbnNlLmNoYW5nZS5jb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwLWJhY2t1cF9fbGlzdCcpLmFwcGVuZChyZXNwb25zZS5jaGFuZ2UuaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UucmVzdWx0X21zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVsZXRlQWxsKCkge1xuICAgICAgICAkKCcuemMtcG9wdXAnKS5vbignY2xpY2snLCAnLnpjLXBvcHVwLWJhY2t1cF9fZGVsZXRlLWJ1dHRvbicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgemMuYWpheCh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGB6Yy9tb2R1bGUvbWV0YWJveF9wYW5lbC9iYWNrdXBfJHt0aGlzLmdldFZhcignc2x1ZycpfWAsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkZWxldGUnLFxuICAgICAgICAgICAgICAgICAgICBfYWpheF9ub25jZTogdGhpcy5nZXRWYXIoJ25vbmNlJylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiAoanFYSFIsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvckNoZWNrKCdNZXRhYm94UGFuZWxCYWNrdXAgOiBEZWxldGUgYWxsJywganFYSFIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQmxvY2suaGlkZSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYmVmb3JlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUJsb2NrLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cC1iYWNrdXBfX251bWJlcicpLnRleHQoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuemMtcG9wdXAtYmFja3VwX19saXN0JykuZW1wdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cC1iYWNrdXBfX25vLWJhY2t1cHMnKS5hZGRDbGFzcygnemMtcG9wdXAtYmFja3VwX19uby1iYWNrdXBzX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5yZXN1bHRfbXNnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZWxldGVJdGVtKCkge1xuICAgICAgICAkKCcuemMtcG9wdXAnKS5vbignY2xpY2snLCAnLnpjLXBvcHVwLWJhY2t1cF9faXRlbS1idXR0b25fZGVsZXRlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICB6Yy5hamF4KHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYHpjL21vZHVsZS9tZXRhYm94X3BhbmVsL2JhY2t1cF8ke3RoaXMuZ2V0VmFyKCdzbHVnJyl9YCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RlbGV0ZS1pdGVtJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja3VwX25hbWU6ICQoZXZlbnQuY3VycmVudFRhcmdldCkucGFyZW50KCkuYXR0cignaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgX2FqYXhfbm9uY2U6IHRoaXMuZ2V0VmFyKCdub25jZScpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JDaGVjaygnTWV0YWJveFBhbmVsQmFja3VwIDogRGVsZXRlIGl0ZW0nLCBqcVhIUik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBiZWZvcmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUJsb2NrLnNob3coKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQmxvY2suaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwLWJhY2t1cF9fbnVtYmVyJykudGV4dChyZXNwb25zZS5jb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuY291bnQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cC1iYWNrdXBfX25vLWJhY2t1cHMnKS5hZGRDbGFzcygnemMtcG9wdXAtYmFja3VwX19uby1iYWNrdXBzX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5yZXN1bHRfbXNnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXN0b3JlKCkge1xuICAgICAgICAkKCcuemMtcG9wdXAnKS5vbignY2xpY2snLCAnLnpjLXBvcHVwLWJhY2t1cF9faXRlbS1idXR0b25fcmVzdG9yZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgemMuYWpheCh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGB6Yy9tb2R1bGUvbWV0YWJveF9wYW5lbC9iYWNrdXBfJHt0aGlzLmdldFZhcignc2x1ZycpfWAsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyZXN0b3JlJyxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICAgICAgICAgIGJhY2t1cF9uYW1lOiAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpLmF0dHIoJ2lkJyksXG4gICAgICAgICAgICAgICAgICAgIF9hamF4X25vbmNlOiB0aGlzLmdldFZhcignbm9uY2UnKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yQ2hlY2soJ01ldGFib3hQYW5lbEJhY2t1cCA6IFJlc3RvcmUnLCBqcVhIUik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCbG9jay5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBiZWZvcmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUJsb2NrLnNob3coKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQmxvY2suaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cC5yZW1Db250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwLmFwcGVuZENvbnRlbnQoemMudHBsKFRQTF9fYmFja3VwX25vdGlmaWNhdGlvbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlc3BvbnNlLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLmNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXAuc2hvd0NvbnRlbnQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UucmVzdWx0X21zZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBaaW1icnVDb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogTWV0YWJveFBhbmVsL01vZHVsZS9IZWFkZXIgOiBSZXNldFxuICpcbiAqIEBhdXRob3IgIEp1bmp1bGluaVxuICogQHBhY2thZ2UgWmltYnJ1Q29kZVxuICogQHNpbmNlICAgWmltYnJ1Q29kZSAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEtlcm5lbCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUva2VybmVsJztcblxuaW1wb3J0IFRQTF9fcmVzZXRfcG9wdXBfbm90aWZpY2F0aW9uIGZyb20gJy4uL2hlYWRlci90cGwvcmVzZXQtcG9wdXAtbm90aWZpY2F0aW9uLmh0bWwnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNldCBleHRlbmRzIEtlcm5lbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jb25maXJtKCk7XG4gICAgfVxuXG4gICAgY29uZmlybSgpIHtcbiAgICAgICAgdGhpcy5jbGljaygnLnpjLW1ldGFib3gtcGFuZWwtcmVzZXQtYnV0dG9uJywgKCkgPT4ge1xuICAgICAgICAgICAgemMuY29uZmlybSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0VmFyKCdyZXNldC1wb3AtdXAtdGl0bGUnKSxcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiB0aGlzLmdldFZhcigncmVzZXQtcG9wLXVwLXN1YmplY3QnKSxcbiAgICAgICAgICAgICAgICB0aXRsZU9LOiB0aGlzLmdldFZhcigncmVzZXQtcG9wLXVwLW9rJyksXG4gICAgICAgICAgICAgICAgdGl0bGVDYW5jZWw6IHRoaXMuZ2V0VmFyKCdyZXNldC1wb3AtdXAtY2FuY2VsJyksXG4gICAgICAgICAgICAgICAgb2s6IChwb3B1cCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB6Yy5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGB6Yy9tb2R1bGUvbWV0YWJveF9wYW5lbC9yZXNldF8ke3RoaXMuZ2V0VmFyKCdzbHVnJyl9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJCgnLnpjLXBhbmVsLXRlbXBsYXRlX3dpZCcpLmRhdGEoJ3Bvc3QtaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYWpheF9ub25jZTogdGhpcy5nZXRWYXIoJ25vbmNlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL21ldGFib3gtcGFuZWwvcmVzZXQvZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yQ2hlY2soJ01ldGFib3hQYW5lbCA6IFJlc2V0IHNldHRpbmdzJywganFYSFIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLmhpZGVDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL21ldGFib3gtcGFuZWwvcmVzZXQvYmVmb3JlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnR5cGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3NDb25maXJtKHBvcHVwLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9tZXRhYm94LXBhbmVsL3Jlc2V0L3N1Y2Nlc3Mtc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV1dHJhbENvbmZpcm0ocG9wdXAsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL21ldGFib3gtcGFuZWwvcmVzZXQvc3VjY2Vzcy1pbmZvJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBzdWNjZXNzQ29uZmlybShwb3B1cCwgcmVzcG9uc2UpIHtcbiAgICAgICAgcG9wdXAucmVtQ29udGVudCgpO1xuICAgICAgICBwb3B1cC5hcHBlbmRDb250ZW50KHpjLnRwbChUUExfX3Jlc2V0X3BvcHVwX25vdGlmaWNhdGlvbiwge1xuICAgICAgICAgICAgdHlwZTogcmVzcG9uc2UudHlwZSxcbiAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS50aXRsZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLmNvbnRlbnRcbiAgICAgICAgfSkpO1xuICAgICAgICBwb3B1cC5zaG93Q29udGVudCgpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH1cblxuICAgIG5ldXRyYWxDb25maXJtKHBvcHVwLCByZXNwb25zZSkge1xuICAgICAgICBwb3B1cC5yZW1Db250ZW50KCk7XG4gICAgICAgIHBvcHVwLmFwcGVuZENvbnRlbnQoemMudHBsKFRQTF9fcmVzZXRfcG9wdXBfbm90aWZpY2F0aW9uLCB7XG4gICAgICAgICAgICB0eXBlOiByZXNwb25zZS50eXBlLFxuICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLnRpdGxlLFxuICAgICAgICAgICAgY29udGVudDogcmVzcG9uc2UuY29udGVudCxcbiAgICAgICAgICAgIHZhcl9leGl0OiB0aGlzLmdldFZhcignZXhpdCcpXG4gICAgICAgIH0pKTtcbiAgICAgICAgcG9wdXAuc2hvd0NvbnRlbnQoKTtcblxuICAgICAgICAkKCcuemMtcG9wdXAnKS5vbignY2xpY2snLCAnLnpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fY2xvc2UtYnV0dG9uJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICBwb3B1cC5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb24gemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX21vZGVfYmFja3VwIHpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl90eXBlX3t7dHlwZX19XFxcIj4gPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19pY29uLWNvbnRhaW5lclxcXCI+IDxpIGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2ljb25cXFwiPjwvaT4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fY29udGVudFxcXCI+IDxzcGFuIGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX3RpdGxlXFxcIj57e3RpdGxlfX08L3NwYW4+IDxwIGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX3RleHRcXFwiPnt7Y29udGVudH19PC9wPiA8L2Rpdj4gPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb24gemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX3R5cGVfe3t0eXBlfX1cXFwiPiA8ZGl2IGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX2ljb24tY29udGFpbmVyXFxcIj4gPGkgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9faWNvblxcXCI+PC9pPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19jb250ZW50LWNvbnRhaW5lclxcXCI+IDxkaXYgY2xhc3M9XFxcInpjLXBhbmVsLXBvcHVwLW5vdGlmaWNhdGlvbl9fY29udGVudFxcXCI+IDxzcGFuIGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX3RpdGxlXFxcIj57e3RpdGxlfX08L3NwYW4+IDxwIGNsYXNzPVxcXCJ6Yy1wYW5lbC1wb3B1cC1ub3RpZmljYXRpb25fX3RleHRcXFwiPnt7Y29udGVudH19PC9wPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19jbG9zZS1jb250cm9sbGVyXFxcIj4gPGJ1dHRvbiBjbGFzcz1cXFwiemMtcGFuZWwtcG9wdXAtbm90aWZpY2F0aW9uX19jbG9zZS1idXR0b25cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+e3t2YXJfZXhpdH19PC9idXR0b24+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+XCI7IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFppbWJydUNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBNZXRhYm94UGFuZWwvTW9kdWxlL01vZGUgOiBNZXRhIG1vZGUgYm9keSBzaXplXG4gKlxuICogQGF1dGhvciAgSnVuanVsaW5pXG4gKiBAcGFja2FnZSBaaW1icnVDb2RlXG4gKiBAc2luY2UgICBaaW1icnVDb2RlIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgS2VybmVsIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9rZXJuZWwnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhTW9kZUJvZHlTaXplIGV4dGVuZHMgS2VybmVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBsZXQgcGFuZWxXaWR0aCA9ICQoJy56Yy1wYW5lbC56Yy1wYW5lbF9tb2RlX21ldGEnKS53aWR0aCgpO1xuICAgICAgICBpZiAocGFuZWxXaWR0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tQYW5lbFdpZHRoKCk7XG4gICAgICAgICAgICB0aGlzLm1ldGFIZWlnaHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBwYW5lbFdpZHRoID0gJCgnLnpjLXBhbmVsLnpjLXBhbmVsX21vZGVfbWV0YScpLndpZHRoKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAocGFuZWxXaWR0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1BhbmVsV2lkdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRhSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHpjLnJlc2l6ZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVyYXNlTW9iaWxlTWVudSgpOyAvLyBFcmFzZSBtb2JpbGUgbWVudVxuICAgICAgICAgICAgdGhpcy5tZXRhSGVpZ2h0KCk7ICAgICAgLy8gQ2hlY2sgcGFuZWwgaGVpZ2h0IHNpemVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbWV0YUhlaWdodCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZXNrdG9wTW9kZSgpKSB7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwuemMtcGFuZWxfbW9kZV9tZXRhJykuaGVpZ2h0KCdhdXRvJyk7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwuemMtcGFuZWxfbW9kZV9tZXRhIC56Yy1wYW5lbC1jb250cm9scycpLmhlaWdodCgnYXV0bycpO1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLnpjLXBhbmVsX21vZGVfbWV0YSAuemMtcGFuZWwtc3VibWVudV9fc2Nyb2xsYmFyLWNvbnRhaW5lcicpLmhlaWdodCgnYXV0bycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLnpjLXBhbmVsX21vZGVfbWV0YScpLmhlaWdodCgnMTAwJScpO1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLnpjLXBhbmVsX21vZGVfbWV0YSAuemMtcGFuZWwtY29udHJvbHMnKS5oZWlnaHQoJzEwMCUnKTtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC56Yy1wYW5lbF9tb2RlX21ldGEgLnpjLXBhbmVsLXN1Ym1lbnVfX3Njcm9sbGJhci1jb250YWluZXInKS5oZWlnaHQoJzEwMCUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZE1vZGVTaXplKHdpZHRoKSB7XG4gICAgICAgIGxldCBtb2RlID0gJ21vZGUtMS0nO1xuXG4gICAgICAgIGlmICh0aGlzLmdldENvbmZpZygnbWluLXNpemUvbW9kZTEnKSA+PSB3aWR0aCkge1xuICAgICAgICAgICAgbW9kZSA9ICdtb2RlLTEtJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdldENvbmZpZygnbWluLXNpemUvbW9kZTInKSA+PSB3aWR0aCkge1xuICAgICAgICAgICAgbW9kZSA9ICdtb2RlLTItJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZGUgPSAnbW9kZS0zLSc7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcuemMtcGFuZWwuemMtcGFuZWxfbW9kZV9tZXRhJykuYXR0cignZGF0YS13aWR0aCcsIG1vZGUgKyB3aWR0aCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL3NpemUtY2hhbmdlZCcpO1xuICAgIH1cblxuICAgIGNoZWNrUGFuZWxXaWR0aCgpIHtcbiAgICAgICAgY29uc3Qgcm8gPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cmllc1swXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRNb2RlU2l6ZShlbnRyaWVzWzBdLmNvbnRlbnRSZWN0LndpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcm8ub2JzZXJ2ZSgkKCcuemMtcGFuZWwuemMtcGFuZWxfbW9kZV9tZXRhJykuZ2V0KDApKTtcbiAgICB9XG59IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFppbWJydUNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBQYW5lbC9Nb2R1bGUgOiBLZXJuZWxcbiAqXG4gKiBAYXV0aG9yICBKdW5qdWxpbmlcbiAqIEBwYWNrYWdlIFppbWJydUNvZGVcbiAqIEBzaW5jZSAgIFppbWJydUNvZGUgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtlcm5lbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsID0gemMuZ2V0TW9kdWxlRGF0YSgncGFuZWwnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYW5lbCBzY3JvbGwgYmFyIHRvcFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzY3JvbGxiYXJUb3AoKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbCAuemMtc2Nyb2xsYmFyJykuc2Nyb2xsVG9wKDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBwYW5lbCBoZWlnaHRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY2FsY0hlaWdodCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2FjaGUoJ3dwLWJvZHktaGVpZ2h0JykgIT09ICQod2luZG93KS5oZWlnaHQoKSkge1xuICAgICAgICAgICAgdGhpcy5hZGRDYWNoZSgnd3AtYm9keS1oZWlnaHQnLCAkKHdpbmRvdykuaGVpZ2h0KCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXJhc2UgbW9iaWxlIG1lbnVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZXJhc2VNb2JpbGVNZW51KCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rlc2t0b3BNb2RlKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlcnZpY2UoJ21lbnUvaXNTdWJtZW51SXRlbScpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLW1lbnUnKS5hZGRDbGFzcygnemMtcGFuZWwtbWVudV9zdWJtZW51LWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykuYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC1tZW51JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfbW9iaWxlLW1lbnUtdmlzaWJsZScpO1xuICAgICAgICAkKCcuemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudV9hY3RpdmUnKTtcblxuICAgICAgICB0aGlzLnNlcnZpY2UoJ2Nsb3NlLWJsb2NrJykuaGlkZURlZmluaXRlbHkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJcyBkZXNrdG9wIG1vZGVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm4gXCJ0cnVlXCIgaWYgYm9keSB3aWR0aCBpcyBiaWdnZXIgdGhlbiBcIm1pbi1zaXplLm1vZGUyXCJcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBpc0Rlc2t0b3BNb2RlKCkge1xuICAgICAgICByZXR1cm4gKCQoJy56Yy1wYW5lbCcpLndpZHRoKCkgPj0gdGhpcy5nZXRDb25maWcoJ21pbi1zaXplL21vZGUyJykpO1xuICAgIH1cblxuICAgICAvKipcbiAgICAgKiBFcnJvciBjaGVjaywgaW4gQUpBWCBvciBvdGhlclxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBlcnJvckNoZWNrKG1zZywganFYSFIpIHtcbiAgICAgICAgaWYgKCEkKCcuemMtcG9wdXAnKS5oYXNDbGFzcygnemMtcGFuZWwtZXJyb3ItY29uZmlybScpKSB7XG5cbiAgICAgICAgICAgIGlmICgkKCcuemMtcG9wdXAnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkKCcuemMtcG9wdXAnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuXG4gICAgICAgICAgICB6Yy5jb25maXJtKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogYEVycm9yIC0gJHtqcVhIUi5zdGF0dXNUZXh0fSA6ICR7anFYSFIuc3RhdHVzfWAsXG4gICAgICAgICAgICAgICAgc3ViamVjdDogYCR7bXNnfSBQYWdlIHdpbGwgYmUgcmVsb2FkZWQsIG9rP2AsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICd6Yy1wYW5lbC1lcnJvci1jb25maXJtJyxcbiAgICAgICAgICAgICAgICBvazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBnbG9iYWwgdmFyXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRlZiAgIElmIG5vdCBmb3VuZCwgcmV0dXJuIFwiZGVmXCJcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBnZXRWYXIoa2V5LCBkZWYpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLnZhcnMsIGtleSk7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkZWY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZ2xvYmFsIHZhciB2YWx1ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkYXRhICBWYXIgdmFsdWVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRWYXIoa2V5LCBkYXRhKSB7XG4gICAgICAgIHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC52YXJzLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBnbG9iYWwgY2FjaGUgdmFsdWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGF0YSAgQ2FjaGUgdmFsdWVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRDYWNoZShrZXksIGRhdGEpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNhY2hlLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBnbG9iYWwgY2FjaGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGVmICAgSWYgbm90IGZvdW5kLCByZXR1cm4gXCJkZWZcIlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGdldENhY2hlKGtleSwgZGVmKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jYWNoZSwga2V5KTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRlZjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZWxlbWVudCBmcm9tIGNhY2hlIG9iamVjdFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqL1xuICAgIHJlbUNhY2hlKGtleSkge1xuICAgICAgICB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwuY2FjaGUsIGtleSwgZmFsc2UsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBnbG9iYWwgY29uZmlnIHZhbHVlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRhdGEgIENvbmZpZyB2YWx1ZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZENvbmZpZyhrZXksIGRhdGEpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNvbmZpZywga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZ2xvYmFsIGNvbmZpZ1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkZWYgICBJZiBub3QgZm91bmQsIHJldHVybiBcImRlZlwiXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0Q29uZmlnKGtleSwgZGVmKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jb25maWcsIGtleSk7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkZWY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXJ2aWNlKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSB8fCB0eXBlb2YgY2FsbGJhY2sgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDYWNoZShgc2VydmljZXMvJHtuYW1lfWAsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuZ2V0Q2FjaGUoYHNlcnZpY2VzLyR7bmFtZX1gLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlcnZpY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmljZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgc2VydmljZSBub3QgZXhpc3QgOiAke25hbWV9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb24oZXZlbnRzLCBzZWxlY3RvciwgaGFuZGxlciwgcHJldmVudERlZmF1bHQgPSBmYWxzZSkge1xuICAgICAgICAkKCcuemMtcGFuZWwnKS5vbihldmVudHMsIHNlbGVjdG9yLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmV2ZW50RGVmYXVsdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLCBldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsaWNrKHNlbGVjdG9yLCBoYW5kbGVyLCBwcmV2ZW50RGVmYXVsdCA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5vbignY2xpY2snLCBzZWxlY3RvciwgaGFuZGxlciwgcHJldmVudERlZmF1bHQpO1xuICAgIH1cbn0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBbUJBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQWpCQTtBQW1CQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0JBO0FBK0JBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZCQTtBQXlCQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQkE7QUE2QkE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpDQTtBQW1DQTtBQUNBOzs7O0FBMU1BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBdEJBO0FBd0JBO0FBOUJBO0FBZ0NBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUEzRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0JBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBdkJBO0FBd0JBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBL0RBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==