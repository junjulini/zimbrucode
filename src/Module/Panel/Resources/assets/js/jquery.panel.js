/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/base.js":
/*!*****************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/base.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Base)
/* harmony export */ });
/* harmony import */ var _kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kernel */ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js");
/* harmony import */ var _close_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./close-block */ "./src/Module/Panel/Resources/assets/js/es6/module/close-block.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./callback */ "./src/Module/Panel/Resources/assets/js/es6/module/callback.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/Module/Panel/Resources/assets/js/es6/module/menu.js");
/* harmony import */ var _condition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./condition */ "./src/Module/Panel/Resources/assets/js/es6/module/condition.js");

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module : Base
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */









const $ = jQuery;

class Base extends _kernel__WEBPACK_IMPORTED_MODULE_0__["default"] {

    /**
     * Constructor
     * 
     * @since 1.0.0
     */
    constructor() {
        super();

        // Global cache
        this.global.cache = {
            changed: false,
            services: {}
        };

        // Global config
        this.global.config = {

            // Right margin
           'right-margin': {
                desktop: 20,
                mobile: 10
            },

            'bottom-margin': 42,
            'footer-height': 56,  // Height of footer
            'header-height': 56,  // Height of header
            'height-FAH':    112, // Height of footer & header
            'wp-body-height': 0,  // Wp body height

            'min-size': {
                'body-height': 500, // Min panel body height
                mode1: 490,
                mode2: 950
            },

            'wp-admin-bar-height': 32
        };

        // Global vars
        this.global.vars = zcPanelVars;

        // Add service : Callback
        this.service('callback', new _callback__WEBPACK_IMPORTED_MODULE_2__["default"]);
    }

    /**
     * Check browser compatibility
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    checkBrowserCompatibility() {
        try {
            new IntersectionObserver(a => {});
            new ResizeObserver(a => {});
        } catch (error) {
            throw this.getVar('browser-error-subject');
        }
    }

    /**
     * Panel menu
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    menu() {
        this.service('menu', new _menu__WEBPACK_IMPORTED_MODULE_3__["default"]);
    }

    /**
     * Panel : Initiate a block close callback
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    closeBlock() {
        this.service('close-block', new _close_block__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }

    /**
     * Panel scroll bar
     * 
     * @return {null}   None
     * @since 1.3.0
     */
    scrollbar() {
        if (!zc.isMobile() && navigator.userAgent.indexOf('Firefox') == -1) {
            const priv = {};

            priv.checkIfActive = (parent, children) => {
                const parentHeight   = Math.round(parent.outerHeight(true));
                const childrenHeight = Math.round(children.outerHeight(true));

                if (parentHeight > 0) {
                    if (childrenHeight > parentHeight) {
                        parent.addClass('zc-scrollbar_active',);
                    } else {
                        parent.removeClass('zc-scrollbar_active');
                    }
                }
            };

            priv.ro = new ResizeObserver(entries => {
                if (entries[0] !== undefined) {
                    entries.forEach((entry) => {
                        priv.checkIfActive($(entry.target).parent(), $(entry.target));
                    });
                }
            });

            $('.zc-panel .zc-scrollbar').each((index, el) => {
                priv.ro.observe($(el).children().first().get(0));
            });

            $(window).on('zc/panel/size-changed', () => {
                $('.zc-panel .zc-scrollbar').each((index, el) => {
                    priv.checkIfActive($(el), $(el).children().first());
                });
            });
        }
    }

    /**
     * Change meta viewport if mobile
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    noMetaScaleIfMobile() {
        if (zc.isMobile()) {
            $('head meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
        }
    }

    /**
     * Conditions
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    condition() {
        new _condition__WEBPACK_IMPORTED_MODULE_4__["default"](this);
    }

    /**
     * Check if any changes have been made
     * 
     * @return {string}   Message
     * @since 1.1.0
     */
    ifChanged() {
        $(document).on('click', '#publishing-action #publish', () => {
            this.addCache('changed', false);
        });

        $(window).on('beforeunload.zc-panel', () => {
            if (this.getCache('changed')) {
                return this.getVar('if-changed');
            }
        });
    }

    /**
     * Control help
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    controlHelp() {
        const defaults = {
            width: 600,
            height: 250
        };

        this.click('.zc-panel-help__starter_type_simple', ($this) => {
            let settings = $this.data('settings');
            if (settings === undefined || settings === '' || settings == null) settings = {};

            defaults.title = $this.attr('title');
            defaults.html  = $this.parent().find('.zc-panel-help__content').text();

            zc.popup().add($.extend({}, defaults, settings));
        });
    }

    /**
     * Initializing controls
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    controlInit() {
        this.service('callback').run('control', $, this);
    }

    /**
     * Tooltip
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    tooltip() {
        if (zc.isMobile() === false) {
            $('.zc-panel [data-tooltip]').tipsy({
                title: 'data-tooltip',
                gravity: function() {
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
}

/***/ }),

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/callback.js":
/*!*********************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/callback.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Callback)
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
 * Script : Panel/Module : Callback
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */



const $ = jQuery;

class Callback {

    /**
     * Constructor
     * 
     * @since 1.0.0
     */
    constructor() {
        this.callback = {};
    }

    /**
     * Add callback
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    add(name, callback, additional) {
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
     * Run callback
     * 
     * @return {null}   None
     * @since 1.1.0
     */
    run(name) {
        if (name !== undefined && name !== '') {
            const args = [].slice.apply(arguments);
            args.shift();

            if (this.callback[name] !== undefined) {
                this.callback[name].forEach(el => {
                    const pArgs = $.extend(true, [], args);

                    if (el.additional !== undefined) {
                        pArgs.push(el.additional);
                    }

                    el.callback.apply(this, pArgs);
                });
            }
        }
    }
}

/***/ }),

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/close-block.js":
/*!************************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/close-block.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloseBlock)
/* harmony export */ });
/* harmony import */ var _kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kernel */ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js");

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module : CloseBlock
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */





const $ = jQuery;

class CloseBlock extends _kernel__WEBPACK_IMPORTED_MODULE_0__["default"] {

    /**
     * Constructor
     * 
     * @since 1.0.0
     */
    constructor() {
        super();

        this.isOpen = 0;

        this.click('.zc-panel-controls__close-block', () => {
            $(window).trigger('zc/close-block');
        });

        $(window).on('zc/close-block/show', () => {
            this.show();
        });

        $(window).on('zc/close-block/hide', () => {
            this.hide();
        });

        $(window).on('zc/close-block/hide-definitely', () => {
            this.hideDefinitely();
        });
    }

    /**
     * Show "close block"
     * 
     * @return {null}  None
     * @since 1.0.0
     */
    show() {
        $('.zc-panel-controls__close-block').addClass('zc-panel-controls__close-block_active');
        this.isOpen++;
    }

    /**
     * Hide "close block"
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    hide() {
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
     * Hide definitely "close block"
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    hideDefinitely() {
        $('.zc-panel-controls__close-block').removeClass('zc-panel-controls__close-block_active');
        this.isOpen = 0;

        $(window).trigger('zc/close-block');
    }
}

/***/ }),

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/condition.js":
/*!**********************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/condition.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Condition)
/* harmony export */ });
/* harmony import */ var _kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kernel */ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js");

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module : Condition
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */





const $ = jQuery;

class Condition extends _kernel__WEBPACK_IMPORTED_MODULE_0__["default"] {

    /**
     * Constructor
     * 
     * @since 1.0.0
     */
    constructor() {
        super();

        this.cache = {};
        this.regex = /(.+?):(notEmpty|empty|is|not|contains|<|<=|>|>=)\((.*?)\),?/g;

        this.firstStart();
        this.dataCaching();
        this.onChange();
    }

    /**
     * Find items
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    firstStart() {
        $(window).on('zc/panel/menu/item-change-ICP', (event, section) => {
            if (section) {
                section.find('[data-condition]').each((index, el) => {
                    this.parse($(el), true);
                });
            }
        });
    }

    /**
     * Check if any item has changed
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    onChange() {
        $('.zc-panel .zc-panel-controls').on('change', '[data-option]', (event) => {
            event.preventDefault();
            event.stopPropagation();
            /* Act on the event */

            const $this = $(event.currentTarget);
            let name  = $this.attr('name') || '';

            name = name.replace('[]', '');

            if (this.cache[name] !== undefined) {
                $.each(this.cache[name], (index, el) => {
                    this.parse(el);
                });
            }

            if ($this.data('i') === undefined) {
                this.addCache('changed', true);
                $(window).trigger('zc/panel/if-changed');
            }

            return false;
        });
    }

    /**
     * Cache data
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    dataCaching() {
        $('.zc-panel .zc-panel-controls [data-condition]').each((index, el) => {
            let match;

            while (match = this.regex.exec($(el).data('condition'))) {
                let key = this.getVar('prefix-slug') + match[1];

                if (this.cache[key] === undefined) {
                    this.cache[key] = [];
                }

                this.cache[key].push($(el));
            }
        });
    }

    /**
     * Parse by conditions
     * 
     * @param {object}  control      Control object
     * @param {boolean} firstStart   First start
     * @return {null}                None
     * @since 1.0.0
     */
    parse(control, firstStart) {
        let passed,
            conditions = this.prepConditions(control.data('condition')),
            operator   = (control.data('condition-operator') || 'and').toLowerCase();

        $.each(conditions, (index, condition) => {
            let status = false;
            let target = $(`.zc-panel .zc-panel-controls [name=${this.getVar('prefix-slug')}${condition.check}]`);

            if (target.length > 0 && target.is('[data-option]')) {
                status = true;
            } else {
                target = $(`.zc-panel .zc-panel-controls [id=${this.getVar('prefix-slug')}${condition.check}]`);

                if (target.length > 0 && target.is('[data-option]')) {
                    status = true;
                }
            }

            if (status === true) {
                const v1 = target.val() !== null ? target.val().toString() : '';
                const v2 = condition.value.toString();
                let result;

                switch (condition.rule) {
                    case '<':
                        result = (parseInt(v1) < parseInt(v2));
                        break;
                    case '<=':
                        result = (parseInt(v1) <= parseInt(v2));
                        break;
                    case '>':
                        result = (parseInt(v1) > parseInt(v2));
                        break;
                    case '>=':
                        result = (parseInt(v1) >= parseInt(v2));
                        break;
                    case 'contains':
                        result = (v1.indexOf(v2) !== -1 ? true : false);
                        break;
                    case 'is':
                        result = (v1 == v2);
                        break;
                    case 'not':
                        result = (v1 != v2);
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
                        passed = (passed || result);
                        break;
                    case 'and':
                    default:
                        passed = (passed && result);
                        break;
                }
            }
        });

        if (firstStart && firstStart !== undefined) {
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
     * @return {null}   None
     * @since 1.0.0
     */
    prepConditions(condition) {
        let match,
            conditions = [];

        while (match = this.regex.exec(condition)) {
            conditions.push({
                'check': match[1],
                'rule':  match[2],
                'value': match[3] || ''
            });
        }

        return conditions;
    }
}

/***/ }),

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js":
/*!*******************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/kernel.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Kernel)
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
 * Script : Panel/Module : Kernel
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */



const $ = jQuery;

class Kernel {

    /**
     * Constructor
     * 
     * @since 1.0.0
     */
    constructor() {
        this.global = zc.getModuleData('panel');
    }

    /**
     * Scroll bar : Move to top position
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    scrollbarTop() {
        $('.zc-panel .zc-scrollbar').scrollTop(0);
    }

    /**
     * Calculate panel height
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    calcHeight() {
        if (this.getCache('wp-body-height') !== $(window).height()) {
            this.addCache('wp-body-height', $(window).height());
        }
    }

    /**
     * Erase mobile menu
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    eraseMobileMenu() {
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
     * Check if the mode is desktop
     * 
     * @return {boolean}   Return "true" if body width is bigger then "min-size.mode2"
     * @since 1.0.0
     */
    isDesktopMode() {
        return ($('.zc-panel').width() >= this.getConfig('min-size/mode2'));
    }

    /**
     * Error checking, in AJAX or elsewhere
     * 
     * @return {null}   None
     * @since 1.1.0
     */
    errorCheck(mainMsg, errorMsg) {
        if (!$('.zc-popup').hasClass('zc-panel-error-confirm')) {

            if ($('.zc-popup').length) {
                $('.zc-popup').remove();
            }

            console.error(errorMsg);

            zc.confirm({
                title: mainMsg,
                subject: `${errorMsg} <br> Page will be reloaded, ok?`,
                class: 'zc-panel-error-confirm',
                ok: () => {
                    location.reload();
                }
            });
        }
    }

    /**
     * Get global variable
     * 
     * @param {string} key   Object path
     * @param {mix}    def   Default value
     * @return {mix}         Action result
     * @since 1.0.0
     */
    getVar(key, def) {
        const result = zc.deepFindAndSetting(this.global.vars, key);
        if (result !== undefined) {
            return result;
        } else {
            return def;
        }
    }

    /**
     * Add global variable value
     * 
     * @param {string} key   Object path
     * @param {mix}    data  Variable value
     * @return {null}        None
     * @since 1.0.0
     */
    addVar(key, data) {
        zc.deepFindAndSetting(this.global.vars, key, data);
    }

    /**
     * Add global cache value
     * 
     * @param {string} key   Object path
     * @param {mix}    data  Cache value
     * @return {null}        None
     * @since 1.0.0
     */
    addCache(key, data) {
        zc.deepFindAndSetting(this.global.cache, key, data);
    }

    /**
     * Get global cache
     * 
     * @param {string} key   Object path
     * @param {mix}    def   Default value
     * @return {mix}         Action result
     * @since 1.0.0
     */
    getCache(key, def) {
        const result = zc.deepFindAndSetting(this.global.cache, key);
        if (result !== undefined) {
            return result;
        } else {
            return def;
        }
    }
    
    /**
     * Remove element from cache object
     * 
     * @param {string} key   Object path
     * @return {null}        None
     * @since 1.0.0
     */
    remCache(key) {
        zc.deepFindAndSetting(this.global.cache, key, false, true);
    }

    /**
     * Add global config value
     * 
     * @param {string} key   Object path
     * @param {mix}    data  Config value
     * @return {null}        None
     * @since 1.0.0
     */
    addConfig(key, data) {
        zc.deepFindAndSetting(this.global.config, key, data);
    }

    /**
     * Get global config
     * 
     * @param {string} key   Object path
     * @param {mix}    def   Default value
     * @return {mix}         Action result
     * @since 1.0.0
     */
    getConfig(key, def) {
        const result = zc.deepFindAndSetting(this.global.config, key);
        if (result !== undefined) {
            return result;
        } else {
            return def;
        }
    }

    /**
     * Service
     * 
     * @param {string}   name       Service name
     * @param {callable} callback   Callback
     * @return {object}             Service instance
     * @since 1.0.0
     */
    service(name, callback) {
        if (name !== undefined && typeof name === 'string') {
            if ($.isFunction(callback) || typeof callback === 'object') {
                this.addCache(`services/${name}`, callback);
            } else {
                const service = this.getCache(`services/${name}`, false);
                if (service !== undefined) {
                    return service;
                } else {
                    throw new Error(`Next service not exist : ${name}`);
                }
            }
        }
    }

    /**
     * Attach an event handler function for one or more events to the selected elements
     * 
     * @param {string}   events           One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin"
     * @param {string}   selector         A selector string to filter the descendants of the selected elements that trigger the event
     * @param {callable} handler          A function to execute when the event is triggered
     * @param {boolean}  preventDefault   True if "preventDefault" must be used
     * @since 1.1.0
     */
    on(events, selector, handler, preventDefault = false) {
        $('.zc-panel').on(events, selector, (event) => {
            if (preventDefault === true) {
                event.preventDefault();
            }

            handler($(event.currentTarget), event);
        });
    }

    /**
     * Attach an event handler function for one or more events to the selected elements
     * 
     * @param {string}   selector         A selector string to filter the descendants of the selected elements that trigger the event
     * @param {callable} handler          A function to execute when the event is triggered
     * @param {boolean}  preventDefault   True if "preventDefault" must be used
     * @since 1.0.0
     */
    click(selector, handler, preventDefault = true) {
        this.on('click', selector, handler, preventDefault);
    }
}

/***/ }),

/***/ "./src/Module/Panel/Resources/assets/js/es6/module/menu.js":
/*!*****************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/module/menu.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kernel */ "./src/Module/Panel/Resources/assets/js/es6/module/kernel.js");

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module : Menu
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */





const $ = jQuery;

class Menu extends _kernel__WEBPACK_IMPORTED_MODULE_0__["default"] {

    /**
     * Constructor
     * 
     * @since 1.0.0
     */
    constructor() {
        super();

        this.isSubmenuItem  = false;
        this.menuItemID     = false;
        this.menuItem       = false;
        this.submenuItem    = false;
        this.menuParentItem = false;

        this.desktop();
        this.mobile();
    }

    /**
     * Remove condition : submenu-active
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    removeSubmenuActive() {
        $('.zc-panel-menu').removeClass('zc-panel-menu_submenu-active');
        $('.zc-panel-content').removeClass('zc-panel-content_submenu-active');
    }

    /**
     * Add condition : submenu-active
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    addSubmenuActive() {
        $('.zc-panel-menu').addClass('zc-panel-menu_submenu-active');
        $('.zc-panel-content').addClass('zc-panel-content_submenu-active');
    }

    /**
     * Check if submenu is activated
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    isSubmenuActive() {
        return ($('.zc-panel-menu').hasClass('zc-panel-menu_submenu-active') && $('.zc-panel-content').hasClass('zc-panel-content_submenu-active'));
    }

    /**
     * Display section
     * 
     * @return {null}   None
     * @since 1.1.0
     */
    displaySection(menuItemID, itemID) {
        const menuItem = $(`.zc-panel-menu li[data-menu-item-id="${menuItemID}"]`);

        // Add icon
        const titleIconClass = menuItem.find('i').first().attr('class').match(/\bzc-icon\S+/g)[0];
        $('.zc-panel-header__title-icon').removeClass((index, className) => {
            return (className.match(/\bzc-icon\S+/g) || []).join(' ');
        }).addClass(titleIconClass);

        // Add title
        $('.zc-panel-header__title').text(menuItem.find('span').text());

        // Remove / active content section
        if (this.menuItemID) {
            $(`.zc-panel-controls__section[data-section="${this.menuItemID}"]`).removeClass('zc-panel-controls__section_active');
        }

        const section = $(`.zc-panel-controls__section[data-section="${menuItemID}"]`);

        section.addClass('zc-panel-controls__section_active');
        $(window).trigger('zc/panel/menu/item-change');
        this.addCache('menu/current-section', section);

        if (!section.hasClass('zc-panel-controls__section_ICP')) {
            section.addClass('zc-panel-controls__section_ICP');

            // Event
            $(window).trigger('zc/panel/menu/item-change-ICP', [section]);
        }

        // Remove / active menu item
        if (menuItem.parent().hasClass('zc-panel-submenu__list')) {
            let submenuItem = menuItem.parent().parent().parent().parent();

            if (submenuItem.hasClass('zc-panel-submenu__scrollbar-container')) {
                submenuItem = submenuItem.parent();
            }

            submenuItem.addClass('zc-panel-submenu__container_active');

            const submenuItemID  = submenuItem.data('menu-container-id');
            const menuParentItem = $(`.zc-panel-menu__item_type_parent[data-menu-container-id="${submenuItemID}"]`);

            menuItem.addClass('zc-panel-submenu__item_active');
            menuParentItem.addClass('zc-panel-menu__item_active');

            if (!this.isSubmenuActive()) {
                this.addSubmenuActive();
            }

            // Add global data
            this.isSubmenuItem  = true;
            this.submenuItem    = submenuItem;
            this.menuParentItem = menuParentItem;
        } else {
            menuItem.addClass('zc-panel-menu__item_active');

            if (this.isSubmenuActive()) {
                this.removeSubmenuActive();
            }

            // Add global data
            this.isSubmenuItem  = false;
            this.submenuItem    = false;
            this.menuParentItem = false;
        }

        // Add global data
        this.menuItem   = menuItem;
        this.menuItemID = menuItemID;

        const standardScrollbar = $('.zc-panel-content .zc-scrollbar');

        standardScrollbar.scrollTop(0);

        if (itemID) {
            const item = $(`.zc-panel-controls [name=${this.getVar('prefix-slug')}${itemID}]`).closest('.zc-panel-controls__item');

            if (item.length !== 0) {
                setTimeout(() => {
                    const scrollbarType   = standardScrollbar.css('position') || 'absolute';
                    const scrollbarObject = (scrollbarType == 'absolute') ? standardScrollbar : $('html, body');
                    const panelHeader     = $('.zc-panel-header');

                    let differenceInSize = panelHeader.offset().top || 0;
                    differenceInSize += panelHeader.height() || 0;

                    if (scrollbarType == 'absolute') {
                        differenceInSize += standardScrollbar.height() / 2;
                    }

                    const scrollTop = item.offset().top - differenceInSize;

                    scrollbarObject.animate({
                        scrollTop: scrollTop
                    }, 'fast', () => {
                        setTimeout(() => {
                            item.addClass('zc-panel-controls__item_visual-alert');

                            setTimeout(() => {
                                item.removeClass('zc-panel-controls__item_visual-alert');
                            }, 3000);
                        }, 300);
                    });
                }, 300);
            }

            window.location.hash = menuItemID;
        }
    }

    /**
     * Processing a menu item
     * 
     * @return {null}   None
     * @since 1.1.0
     */
    procMenuItem(menuItemID, itemID) {
        if (!this.isSubmenuItem) {
            this.menuItem.removeClass('zc-panel-menu__item_active');
            this.displaySection(menuItemID, itemID);
        } else {
            this.menuItem.removeClass('zc-panel-submenu__item_active');
            this.menuParentItem.removeClass('zc-panel-menu__item_active');
            this.submenuItem.removeClass('zc-panel-submenu__container_active');
            this.displaySection(menuItemID, itemID);
        }
    }

    /**
     * Desktop mode
     * 
     * @return {null}   None
     * @since 1.1.0
     */
    desktop() {
        let menuItemID = '';
        let itemID     = undefined;

        if ($.param.fragment()) {
            menuItemID = $.param.fragment() || '';

            const data = this.getItemID(menuItemID);

            if (data !== false) {
                menuItemID = data.part1;
                itemID     = data.part2;
            }
        }

        if ($(`.zc-panel-menu li[data-menu-item-id="${menuItemID}"]`).length === 0) {
            let menuItem = $('.zc-panel-menu__list .zc-panel-menu__item_type_simple').first();
            menuItemID = menuItem.data('menu-item-id');

            if (!menuItemID) {
                const submenuItemID = menuItem.data('menu-container-id');

                menuItem = $(`.zc-panel-submenu__container[data-menu-container-id=${submenuItemID}] .zc-panel-submenu__item_type_simple`).first();
                menuItemID = menuItem.data('menu-item-id');
            }
        }

        this.displaySection(menuItemID, itemID);

        // When hash change
        $(window).on('hashchange.zc-panel', (event) => {
            let menuItemID = $.param.fragment() ? $.param.fragment() : '';
            let itemID     = undefined;

            const data = this.getItemID(menuItemID);

            if (data !== false) {
                menuItemID = data.part1;
                itemID     = data.part2;
            }

            if ($(`.zc-panel-menu li[data-menu-item-id="${menuItemID}"]`).length === 0) {
                menuItemID = undefined;
            }

            if (menuItemID !== undefined) {
                this.procMenuItem(menuItemID, itemID);
            }
        });

        // When click on parent menu item
        this.click('.zc-panel-menu__item_type_parent', ($this) => {
            const submenuItemID = $this.data('menu-container-id');
            const menuItem      = $(`.zc-panel-submenu__container[data-menu-container-id=${submenuItemID}] .zc-panel-submenu__item_type_simple`).first();
            const menuItemID    = menuItem.data('menu-item-id');

            if (menuItemID !== undefined) {
                window.location.hash = menuItemID;
            }
        });

        // When click on menu item
        this.click('.zc-panel-menu__item_type_simple:not(.zc-panel-menu__item_active)', ($this) => {
            const menuItemID = $this.data('menu-item-id');

            if (menuItemID !== undefined) {
                window.location.hash = menuItemID;
            }
        });


        // When click on submenu item
        this.click('.zc-panel-submenu__item_type_simple:not(.zc-panel-submenu__item_active)', ($this) => {
            const menuItemID = $this.data('menu-item-id');

            if (menuItemID) {
                window.location.hash = menuItemID;
            }
        });
    }

    /**
     * Mobile mode
     * 
     * @return {null}   None
     * @since 1.0.0
     */
    mobile() {
        this.click('.zc-panel-header__controller-button_type_mobile-menu', ($this) => {
            if ($this.hasClass('zc-panel-header__controller-button_type_mobile-menu_active')) {
                $this.removeClass('zc-panel-header__controller-button_type_mobile-menu_active');
                $('.zc-panel-content').removeClass('zc-panel-content_mobile-menu-visible');

                $this.one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', () => {
                    $('.zc-panel-controls').height('auto');
                });

                this.service('close-block').hideDefinitely();
            } else {
                $this.addClass('zc-panel-header__controller-button_type_mobile-menu_active');
                $('.zc-panel-content').addClass('zc-panel-content_mobile-menu-visible');

                let initNavHeight = $('.zc-panel-menu__container').height(),
                    navHeight     = $('.zc-panel-menu__list').height() + this.getConfig('height-FAH'),
                    controlsHeight  = $('.zc-panel-controls').height();

                if (initNavHeight > navHeight) {
                    navHeight = initNavHeight;
                }

                if (navHeight > controlsHeight) {
                    $('.zc-panel-controls').height(navHeight - this.getConfig('height-FAH'));
                    $('.zc-panel-submenu__scrollbar-container').height(navHeight - this.getConfig('header-height'));
                }

                let menuItemID = $.param.fragment() ? $.param.fragment() : '';

                if ($(`.zc-panel-menu li[data-menu-item-id="${menuItemID}"]`).length === 0) {
                    menuItemID = undefined;
                }

                if (menuItemID !== undefined) {
                    this.procMenuItem(menuItemID);
                }

                this.service('close-block').show();
                this.scrollbarTop();
            }
        });

        $(window).on('zc/close-block.zc-panel', () => {
            if ($('.zc-panel-header__controller-button_type_mobile-menu').hasClass('zc-panel-header__controller-button_type_mobile-menu_active')) {
                $('.zc-panel-header__controller-button_type_mobile-menu').removeClass('zc-panel-header__controller-button_type_mobile-menu_active');
                $('.zc-panel-content').removeClass('zc-panel-content_mobile-menu-visible');

                $('.zc-panel-header__controller-button_type_mobile-menu').one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', () => {
                    $('.zc-panel-controls').height('auto');
                });

                this.service('close-block').hideDefinitely();
            }
        });

        this.click('.zc-panel-submenu__header-section_mode_mobile', () => {
            this.removeSubmenuActive();
            this.scrollbarTop();
            window.location.hash = '';
        });
    }

    /**
     * Get item ID
     * 
     * @param {object} menuItemID
     * @returns {mix}
     * @since 1.1.0
     */
    getItemID(menuItemID) {
        if (menuItemID) {
            if (menuItemID.indexOf('/') != -1) {
                const part1 = zc.strstr(menuItemID, '/', true);
                const part2 = zc.strReplace(['/'], [''], zc.strstr(menuItemID, '/', false));

                if (part1 && part2) {
                    return {
                        part1: part1,
                        part2: part2
                    };
                }
            }
        }

        return false;
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
/*!**********************************************************************!*\
  !*** ./src/Module/Panel/Resources/assets/js/es6/jquery.panel.es6.js ***!
  \**********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/base */ "./src/Module/Panel/Resources/assets/js/es6/module/base.js");

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */





zc.addModule('panel', ($) => {

    const panel = new _module_base__WEBPACK_IMPORTED_MODULE_0__["default"];
    
    // After loading page
    $(() => {
        try {
            if (panel.mode === undefined) {
                throw 'panel.mode is undefined';
            }
    
            if (!$.isFunction(panel.mode)) {
                throw 'panel.mode is not function';
            }

            panel.checkBrowserCompatibility();
            panel.mode($, panel);
        } catch (error) {
            if ($('.zc-panel-template').length > 0) {
                $('.zc-panel-template').empty().append(`<div class="error notice"><p><b>${panel.getVar('browser-error-title')}</b> : ${error}</p></div>`);
            } else {
                $('#wpbody-content').prepend(`<div class="error notice"><p><b>${panel.getVar('browser-error-title')}</b> : ${error}</p></div>`);
                alert(`${panel.getVar('browser-error-title')} : ${error}`);
            }
        }
    });

    // ############# PUBLIC METHODS #############

    return {
        // Add control
        addControl: (callback) => {
            const scripts = document.getElementsByTagName('script'),
                  scriptLocation = scripts[scripts.length - 1].src,
                  dataH = scriptLocation.split('/'),
                  controlName = dataH[dataH.length - 5];

            const controlVars = panel.getVar('controls')[controlName];
            panel.service('callback').add('control', callback, controlVars);
        },

        // Add mode
        addMode: (callback) => {
            panel.mode = callback;
        }
    }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2pxdWVyeS5wYW5lbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRXFCO0FBQ0s7QUFDSDtBQUNKO0FBQ0s7O0FBRXJDOztBQUVlLG1CQUFtQiwrQ0FBTTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsaURBQVE7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsc0NBQXNDO0FBQ3RDLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDZDQUFJO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxvREFBVTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxhQUFh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QU07QUFDN0ksY0FBYztBQUNkLGdGQUFnRixvQ0FBb0MsU0FBUyxNQUFNO0FBQ25JLHlCQUF5QixxQ0FBcUMsSUFBSSxNQUFNO0FBQ3hFO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvYmFzZS5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2Nsb3NlLWJsb2NrLmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9jb25kaXRpb24uanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2tlcm5lbC5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvbWVudS5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ppbWJydWNvZGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ppbWJydWNvZGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvanF1ZXJ5LnBhbmVsLmVzNi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZSA6IEJhc2VcbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjMuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEtlcm5lbCAgICAgZnJvbSAnLi9rZXJuZWwnO1xuaW1wb3J0IENsb3NlQmxvY2sgZnJvbSAnLi9jbG9zZS1ibG9jayc7XG5pbXBvcnQgQ2FsbGJhY2sgICBmcm9tICcuL2NhbGxiYWNrJztcbmltcG9ydCBNZW51ICAgICAgIGZyb20gJy4vbWVudSc7XG5pbXBvcnQgQ29uZGl0aW9uICBmcm9tICcuL2NvbmRpdGlvbic7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2UgZXh0ZW5kcyBLZXJuZWwge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAvLyBHbG9iYWwgY2FjaGVcbiAgICAgICAgdGhpcy5nbG9iYWwuY2FjaGUgPSB7XG4gICAgICAgICAgICBjaGFuZ2VkOiBmYWxzZSxcbiAgICAgICAgICAgIHNlcnZpY2VzOiB7fVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEdsb2JhbCBjb25maWdcbiAgICAgICAgdGhpcy5nbG9iYWwuY29uZmlnID0ge1xuXG4gICAgICAgICAgICAvLyBSaWdodCBtYXJnaW5cbiAgICAgICAgICAgJ3JpZ2h0LW1hcmdpbic6IHtcbiAgICAgICAgICAgICAgICBkZXNrdG9wOiAyMCxcbiAgICAgICAgICAgICAgICBtb2JpbGU6IDEwXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnYm90dG9tLW1hcmdpbic6IDQyLFxuICAgICAgICAgICAgJ2Zvb3Rlci1oZWlnaHQnOiA1NiwgIC8vIEhlaWdodCBvZiBmb290ZXJcbiAgICAgICAgICAgICdoZWFkZXItaGVpZ2h0JzogNTYsICAvLyBIZWlnaHQgb2YgaGVhZGVyXG4gICAgICAgICAgICAnaGVpZ2h0LUZBSCc6ICAgIDExMiwgLy8gSGVpZ2h0IG9mIGZvb3RlciAmIGhlYWRlclxuICAgICAgICAgICAgJ3dwLWJvZHktaGVpZ2h0JzogMCwgIC8vIFdwIGJvZHkgaGVpZ2h0XG5cbiAgICAgICAgICAgICdtaW4tc2l6ZSc6IHtcbiAgICAgICAgICAgICAgICAnYm9keS1oZWlnaHQnOiA1MDAsIC8vIE1pbiBwYW5lbCBib2R5IGhlaWdodFxuICAgICAgICAgICAgICAgIG1vZGUxOiA0OTAsXG4gICAgICAgICAgICAgICAgbW9kZTI6IDk1MFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJ3dwLWFkbWluLWJhci1oZWlnaHQnOiAzMlxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEdsb2JhbCB2YXJzXG4gICAgICAgIHRoaXMuZ2xvYmFsLnZhcnMgPSB6Y1BhbmVsVmFycztcblxuICAgICAgICAvLyBBZGQgc2VydmljZSA6IENhbGxiYWNrXG4gICAgICAgIHRoaXMuc2VydmljZSgnY2FsbGJhY2snLCBuZXcgQ2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGJyb3dzZXIgY29tcGF0aWJpbGl0eVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNoZWNrQnJvd3NlckNvbXBhdGliaWxpdHkoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoYSA9PiB7fSk7XG4gICAgICAgICAgICBuZXcgUmVzaXplT2JzZXJ2ZXIoYSA9PiB7fSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldFZhcignYnJvd3Nlci1lcnJvci1zdWJqZWN0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYW5lbCBtZW51XG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgbWVudSgpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlKCdtZW51JywgbmV3IE1lbnUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhbmVsIDogSW5pdGlhdGUgYSBibG9jayBjbG9zZSBjYWxsYmFja1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNsb3NlQmxvY2soKSB7XG4gICAgICAgIHRoaXMuc2VydmljZSgnY2xvc2UtYmxvY2snLCBuZXcgQ2xvc2VCbG9jayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFuZWwgc2Nyb2xsIGJhclxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjMuMFxuICAgICAqL1xuICAgIHNjcm9sbGJhcigpIHtcbiAgICAgICAgaWYgKCF6Yy5pc01vYmlsZSgpICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpID09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBwcml2ID0ge307XG5cbiAgICAgICAgICAgIHByaXYuY2hlY2tJZkFjdGl2ZSA9IChwYXJlbnQsIGNoaWxkcmVuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50SGVpZ2h0ICAgPSBNYXRoLnJvdW5kKHBhcmVudC5vdXRlckhlaWdodCh0cnVlKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW5IZWlnaHQgPSBNYXRoLnJvdW5kKGNoaWxkcmVuLm91dGVySGVpZ2h0KHRydWUpKTtcblxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRIZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbkhlaWdodCA+IHBhcmVudEhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFkZENsYXNzKCd6Yy1zY3JvbGxiYXJfYWN0aXZlJywpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNsYXNzKCd6Yy1zY3JvbGxiYXJfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBwcml2LnJvID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyaWVzWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdi5jaGVja0lmQWN0aXZlKCQoZW50cnkudGFyZ2V0KS5wYXJlbnQoKSwgJChlbnRyeS50YXJnZXQpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy56Yy1wYW5lbCAuemMtc2Nyb2xsYmFyJykuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJpdi5yby5vYnNlcnZlKCQoZWwpLmNoaWxkcmVuKCkuZmlyc3QoKS5nZXQoMCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQod2luZG93KS5vbignemMvcGFuZWwvc2l6ZS1jaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbCAuemMtc2Nyb2xsYmFyJykuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByaXYuY2hlY2tJZkFjdGl2ZSgkKGVsKSwgJChlbCkuY2hpbGRyZW4oKS5maXJzdCgpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIG1ldGEgdmlld3BvcnQgaWYgbW9iaWxlXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgbm9NZXRhU2NhbGVJZk1vYmlsZSgpIHtcbiAgICAgICAgaWYgKHpjLmlzTW9iaWxlKCkpIHtcbiAgICAgICAgICAgICQoJ2hlYWQgbWV0YVtuYW1lPXZpZXdwb3J0XScpLmF0dHIoJ2NvbnRlbnQnLCAnd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uZGl0aW9uc1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNvbmRpdGlvbigpIHtcbiAgICAgICAgbmV3IENvbmRpdGlvbih0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhbnkgY2hhbmdlcyBoYXZlIGJlZW4gbWFkZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gICBNZXNzYWdlXG4gICAgICogQHNpbmNlIDEuMS4wXG4gICAgICovXG4gICAgaWZDaGFuZ2VkKCkge1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI3B1Ymxpc2hpbmctYWN0aW9uICNwdWJsaXNoJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRDYWNoZSgnY2hhbmdlZCcsIGZhbHNlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdiZWZvcmV1bmxvYWQuemMtcGFuZWwnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXRDYWNoZSgnY2hhbmdlZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFyKCdpZi1jaGFuZ2VkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnRyb2wgaGVscFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNvbnRyb2xIZWxwKCkge1xuICAgICAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIHdpZHRoOiA2MDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDI1MFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1wYW5lbC1oZWxwX19zdGFydGVyX3R5cGVfc2ltcGxlJywgKCR0aGlzKSA9PiB7XG4gICAgICAgICAgICBsZXQgc2V0dGluZ3MgPSAkdGhpcy5kYXRhKCdzZXR0aW5ncycpO1xuICAgICAgICAgICAgaWYgKHNldHRpbmdzID09PSB1bmRlZmluZWQgfHwgc2V0dGluZ3MgPT09ICcnIHx8IHNldHRpbmdzID09IG51bGwpIHNldHRpbmdzID0ge307XG5cbiAgICAgICAgICAgIGRlZmF1bHRzLnRpdGxlID0gJHRoaXMuYXR0cigndGl0bGUnKTtcbiAgICAgICAgICAgIGRlZmF1bHRzLmh0bWwgID0gJHRoaXMucGFyZW50KCkuZmluZCgnLnpjLXBhbmVsLWhlbHBfX2NvbnRlbnQnKS50ZXh0KCk7XG5cbiAgICAgICAgICAgIHpjLnBvcHVwKCkuYWRkKCQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgc2V0dGluZ3MpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6aW5nIGNvbnRyb2xzXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY29udHJvbEluaXQoKSB7XG4gICAgICAgIHRoaXMuc2VydmljZSgnY2FsbGJhY2snKS5ydW4oJ2NvbnRyb2wnLCAkLCB0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb29sdGlwXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgdG9vbHRpcCgpIHtcbiAgICAgICAgaWYgKHpjLmlzTW9iaWxlKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwgW2RhdGEtdG9vbHRpcF0nKS50aXBzeSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdkYXRhLXRvb2x0aXAnLFxuICAgICAgICAgICAgICAgIGdyYXZpdHk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSAkKHRoaXMpLmRhdGEoJ3Rvb2x0aXAtcG9zaXRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdzJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ24nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ24nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnbic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9mZnNldDogMyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZSA6IENhbGxiYWNrXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4xLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGxiYWNrIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgY2FsbGJhY2tcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGQobmFtZSwgY2FsbGJhY2ssIGFkZGl0aW9uYWwpIHtcbiAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbGxiYWNrW25hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrW25hbWVdID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tbbmFtZV0ucHVzaCh7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWw6IGFkZGl0aW9uYWxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgIC8qKlxuICAgICAqIFJ1biBjYWxsYmFja1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjEuMFxuICAgICAqL1xuICAgIHJ1bihuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQgJiYgbmFtZSAhPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5hcHBseShhcmd1bWVudHMpO1xuICAgICAgICAgICAgYXJncy5zaGlmdCgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jYWxsYmFja1tuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFja1tuYW1lXS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcEFyZ3MgPSAkLmV4dGVuZCh0cnVlLCBbXSwgYXJncyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsLmFkZGl0aW9uYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcEFyZ3MucHVzaChlbC5hZGRpdGlvbmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGVsLmNhbGxiYWNrLmFwcGx5KHRoaXMsIHBBcmdzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZSA6IENsb3NlQmxvY2tcbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEtlcm5lbCBmcm9tICcuL2tlcm5lbCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb3NlQmxvY2sgZXh0ZW5kcyBLZXJuZWwge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmlzT3BlbiA9IDA7XG5cbiAgICAgICAgdGhpcy5jbGljaygnLnpjLXBhbmVsLWNvbnRyb2xzX19jbG9zZS1ibG9jaycsICgpID0+IHtcbiAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9jbG9zZS1ibG9jaycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3pjL2Nsb3NlLWJsb2NrL3Nob3cnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCd6Yy9jbG9zZS1ibG9jay9oaWRlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQod2luZG93KS5vbignemMvY2xvc2UtYmxvY2svaGlkZS1kZWZpbml0ZWx5JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlRGVmaW5pdGVseSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IFwiY2xvc2UgYmxvY2tcIlxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgc2hvdygpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRyb2xzX19jbG9zZS1ibG9jaycpLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19fY2xvc2UtYmxvY2tfYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuaXNPcGVuKys7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBcImNsb3NlIGJsb2NrXCJcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBoaWRlKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4gPT09IDEpIHtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250cm9sc19fY2xvc2UtYmxvY2snKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX2Nsb3NlLWJsb2NrX2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc09wZW4tLTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT3BlbiA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzT3BlbiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIGRlZmluaXRlbHkgXCJjbG9zZSBibG9ja1wiXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaGlkZURlZmluaXRlbHkoKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbC1jb250cm9sc19fY2xvc2UtYmxvY2snKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX2Nsb3NlLWJsb2NrX2FjdGl2ZScpO1xuICAgICAgICB0aGlzLmlzT3BlbiA9IDA7XG5cbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL2Nsb3NlLWJsb2NrJyk7XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwvTW9kdWxlIDogQ29uZGl0aW9uXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBLZXJuZWwgZnJvbSAnLi9rZXJuZWwnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25kaXRpb24gZXh0ZW5kcyBLZXJuZWwge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmNhY2hlID0ge307XG4gICAgICAgIHRoaXMucmVnZXggPSAvKC4rPyk6KG5vdEVtcHR5fGVtcHR5fGlzfG5vdHxjb250YWluc3w8fDw9fD58Pj0pXFwoKC4qPylcXCksPy9nO1xuXG4gICAgICAgIHRoaXMuZmlyc3RTdGFydCgpO1xuICAgICAgICB0aGlzLmRhdGFDYWNoaW5nKCk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIGl0ZW1zXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZmlyc3RTdGFydCgpIHtcbiAgICAgICAgJCh3aW5kb3cpLm9uKCd6Yy9wYW5lbC9tZW51L2l0ZW0tY2hhbmdlLUlDUCcsIChldmVudCwgc2VjdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKHNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBzZWN0aW9uLmZpbmQoJ1tkYXRhLWNvbmRpdGlvbl0nKS5lYWNoKChpbmRleCwgZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZSgkKGVsKSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGFueSBpdGVtIGhhcyBjaGFuZ2VkXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgb25DaGFuZ2UoKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbCAuemMtcGFuZWwtY29udHJvbHMnKS5vbignY2hhbmdlJywgJ1tkYXRhLW9wdGlvbl0nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cblxuICAgICAgICAgICAgY29uc3QgJHRoaXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgbGV0IG5hbWUgID0gJHRoaXMuYXR0cignbmFtZScpIHx8ICcnO1xuXG4gICAgICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKCdbXScsICcnKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY2FjaGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICQuZWFjaCh0aGlzLmNhY2hlW25hbWVdLCAoaW5kZXgsIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2UoZWwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJHRoaXMuZGF0YSgnaScpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENhY2hlKCdjaGFuZ2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL2lmLWNoYW5nZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWNoZSBkYXRhXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZGF0YUNhY2hpbmcoKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbCAuemMtcGFuZWwtY29udHJvbHMgW2RhdGEtY29uZGl0aW9uXScpLmVhY2goKGluZGV4LCBlbCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1hdGNoO1xuXG4gICAgICAgICAgICB3aGlsZSAobWF0Y2ggPSB0aGlzLnJlZ2V4LmV4ZWMoJChlbCkuZGF0YSgnY29uZGl0aW9uJykpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IHRoaXMuZ2V0VmFyKCdwcmVmaXgtc2x1ZycpICsgbWF0Y2hbMV07XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWNoZVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZVtrZXldID0gW107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVtrZXldLnB1c2goJChlbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSBieSBjb25kaXRpb25zXG4gICAgICogXG4gICAgICogQHBhcmFtIHtvYmplY3R9ICBjb250cm9sICAgICAgQ29udHJvbCBvYmplY3RcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGZpcnN0U3RhcnQgICBGaXJzdCBzdGFydFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgICAgICAgICAgICAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwYXJzZShjb250cm9sLCBmaXJzdFN0YXJ0KSB7XG4gICAgICAgIGxldCBwYXNzZWQsXG4gICAgICAgICAgICBjb25kaXRpb25zID0gdGhpcy5wcmVwQ29uZGl0aW9ucyhjb250cm9sLmRhdGEoJ2NvbmRpdGlvbicpKSxcbiAgICAgICAgICAgIG9wZXJhdG9yICAgPSAoY29udHJvbC5kYXRhKCdjb25kaXRpb24tb3BlcmF0b3InKSB8fCAnYW5kJykudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAkLmVhY2goY29uZGl0aW9ucywgKGluZGV4LCBjb25kaXRpb24pID0+IHtcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSAkKGAuemMtcGFuZWwgLnpjLXBhbmVsLWNvbnRyb2xzIFtuYW1lPSR7dGhpcy5nZXRWYXIoJ3ByZWZpeC1zbHVnJyl9JHtjb25kaXRpb24uY2hlY2t9XWApO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmxlbmd0aCA+IDAgJiYgdGFyZ2V0LmlzKCdbZGF0YS1vcHRpb25dJykpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSAkKGAuemMtcGFuZWwgLnpjLXBhbmVsLWNvbnRyb2xzIFtpZD0ke3RoaXMuZ2V0VmFyKCdwcmVmaXgtc2x1ZycpfSR7Y29uZGl0aW9uLmNoZWNrfV1gKTtcblxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoID4gMCAmJiB0YXJnZXQuaXMoJ1tkYXRhLW9wdGlvbl0nKSkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHYxID0gdGFyZ2V0LnZhbCgpICE9PSBudWxsID8gdGFyZ2V0LnZhbCgpLnRvU3RyaW5nKCkgOiAnJztcbiAgICAgICAgICAgICAgICBjb25zdCB2MiA9IGNvbmRpdGlvbi52YWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvbmRpdGlvbi5ydWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gKHBhcnNlSW50KHYxKSA8IHBhcnNlSW50KHYyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnPD0nOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gKHBhcnNlSW50KHYxKSA8PSBwYXJzZUludCh2MikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gKHBhcnNlSW50KHYxKSA+IHBhcnNlSW50KHYyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnPj0nOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gKHBhcnNlSW50KHYxKSA+PSBwYXJzZUludCh2MikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NvbnRhaW5zJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICh2MS5pbmRleE9mKHYyKSAhPT0gLTEgPyB0cnVlIDogZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2lzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICh2MSA9PSB2Mik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbm90JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICh2MSAhPSB2Mik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbm90RW1wdHknOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdjEgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW1wdHknOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gIXYxID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCd1bmRlZmluZWQnID09IHR5cGVvZiBwYXNzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFzc2VkID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnb3InOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc2VkID0gKHBhc3NlZCB8fCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FuZCc6XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzZWQgPSAocGFzc2VkICYmIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmaXJzdFN0YXJ0ICYmIGZpcnN0U3RhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2wuYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19pdGVtX3Nob3cnKTtcbiAgICAgICAgICAgICAgICBjb250cm9sLmRhdGEoJ2NvbmRpdGlvbi1zaG93JywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRyb2wuYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19pdGVtX2hpZGUnKTtcbiAgICAgICAgICAgICAgICBjb250cm9sLmRhdGEoJ2NvbmRpdGlvbi1zaG93JywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICAgICAgICAgIGlmIChjb250cm9sLmRhdGEoJ2NvbmRpdGlvbi1zaG93JykgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbC5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX2l0ZW1faGlkZScpO1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19faXRlbV9zaG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2wuZGF0YSgnY29uZGl0aW9uLXNob3cnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb250cm9sLmRhdGEoJ2NvbmRpdGlvbi1zaG93JykgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2wucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19pdGVtX3Nob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbC5hZGRDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX2l0ZW1faGlkZScpO1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sLmRhdGEoJ2NvbmRpdGlvbi1zaG93JywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBhc3NlZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJpbmcgY29uZGl0aW9uc1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHByZXBDb25kaXRpb25zKGNvbmRpdGlvbikge1xuICAgICAgICBsZXQgbWF0Y2gsXG4gICAgICAgICAgICBjb25kaXRpb25zID0gW107XG5cbiAgICAgICAgd2hpbGUgKG1hdGNoID0gdGhpcy5yZWdleC5leGVjKGNvbmRpdGlvbikpIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgJ2NoZWNrJzogbWF0Y2hbMV0sXG4gICAgICAgICAgICAgICAgJ3J1bGUnOiAgbWF0Y2hbMl0sXG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogbWF0Y2hbM10gfHwgJydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbmRpdGlvbnM7XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwvTW9kdWxlIDogS2VybmVsXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4xLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtlcm5lbCB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdsb2JhbCA9IHpjLmdldE1vZHVsZURhdGEoJ3BhbmVsJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIGJhciA6IE1vdmUgdG8gdG9wIHBvc2l0aW9uXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgc2Nyb2xsYmFyVG9wKCkge1xuICAgICAgICAkKCcuemMtcGFuZWwgLnpjLXNjcm9sbGJhcicpLnNjcm9sbFRvcCgwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgcGFuZWwgaGVpZ2h0XG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY2FsY0hlaWdodCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2FjaGUoJ3dwLWJvZHktaGVpZ2h0JykgIT09ICQod2luZG93KS5oZWlnaHQoKSkge1xuICAgICAgICAgICAgdGhpcy5hZGRDYWNoZSgnd3AtYm9keS1oZWlnaHQnLCAkKHdpbmRvdykuaGVpZ2h0KCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXJhc2UgbW9iaWxlIG1lbnVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBlcmFzZU1vYmlsZU1lbnUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGVza3RvcE1vZGUoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VydmljZSgnbWVudS9pc1N1Ym1lbnVJdGVtJykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtbWVudScpLmFkZENsYXNzKCd6Yy1wYW5lbC1tZW51X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRlbnQnKS5hZGRDbGFzcygnemMtcGFuZWwtY29udGVudF9zdWJtZW51LWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLW1lbnUnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtbWVudV9zdWJtZW51LWFjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udGVudF9zdWJtZW51LWFjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udGVudF9tb2JpbGUtbWVudS12aXNpYmxlJyk7XG4gICAgICAgICQoJy56Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnUnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51X2FjdGl2ZScpO1xuXG4gICAgICAgIHRoaXMuc2VydmljZSgnY2xvc2UtYmxvY2snKS5oaWRlRGVmaW5pdGVseSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBtb2RlIGlzIGRlc2t0b3BcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAgIFJldHVybiBcInRydWVcIiBpZiBib2R5IHdpZHRoIGlzIGJpZ2dlciB0aGVuIFwibWluLXNpemUubW9kZTJcIlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGlzRGVza3RvcE1vZGUoKSB7XG4gICAgICAgIHJldHVybiAoJCgnLnpjLXBhbmVsJykud2lkdGgoKSA+PSB0aGlzLmdldENvbmZpZygnbWluLXNpemUvbW9kZTInKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY2hlY2tpbmcsIGluIEFKQVggb3IgZWxzZXdoZXJlXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMS4wXG4gICAgICovXG4gICAgZXJyb3JDaGVjayhtYWluTXNnLCBlcnJvck1zZykge1xuICAgICAgICBpZiAoISQoJy56Yy1wb3B1cCcpLmhhc0NsYXNzKCd6Yy1wYW5lbC1lcnJvci1jb25maXJtJykpIHtcblxuICAgICAgICAgICAgaWYgKCQoJy56Yy1wb3B1cCcpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wb3B1cCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcblxuICAgICAgICAgICAgemMuY29uZmlybSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IG1haW5Nc2csXG4gICAgICAgICAgICAgICAgc3ViamVjdDogYCR7ZXJyb3JNc2d9IDxicj4gUGFnZSB3aWxsIGJlIHJlbG9hZGVkLCBvaz9gLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAnemMtcGFuZWwtZXJyb3ItY29uZmlybScsXG4gICAgICAgICAgICAgICAgb2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZ2xvYmFsIHZhcmlhYmxlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIE9iamVjdCBwYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRlZiAgIERlZmF1bHQgdmFsdWVcbiAgICAgKiBAcmV0dXJuIHttaXh9ICAgICAgICAgQWN0aW9uIHJlc3VsdFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGdldFZhcihrZXksIGRlZikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwudmFycywga2V5KTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRlZjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBnbG9iYWwgdmFyaWFibGUgdmFsdWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgT2JqZWN0IHBhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGF0YSAgVmFyaWFibGUgdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgICAgICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZFZhcihrZXksIGRhdGEpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLnZhcnMsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGdsb2JhbCBjYWNoZSB2YWx1ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBPYmplY3QgcGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkYXRhICBDYWNoZSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge251bGx9ICAgICAgICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkQ2FjaGUoa2V5LCBkYXRhKSB7XG4gICAgICAgIHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jYWNoZSwga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZ2xvYmFsIGNhY2hlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIE9iamVjdCBwYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRlZiAgIERlZmF1bHQgdmFsdWVcbiAgICAgKiBAcmV0dXJuIHttaXh9ICAgICAgICAgQWN0aW9uIHJlc3VsdFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGdldENhY2hlKGtleSwgZGVmKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jYWNoZSwga2V5KTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRlZjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZWxlbWVudCBmcm9tIGNhY2hlIG9iamVjdFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBPYmplY3QgcGF0aFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgICAgICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcmVtQ2FjaGUoa2V5KSB7XG4gICAgICAgIHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jYWNoZSwga2V5LCBmYWxzZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGdsb2JhbCBjb25maWcgdmFsdWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgT2JqZWN0IHBhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGF0YSAgQ29uZmlnIHZhbHVlXG4gICAgICogQHJldHVybiB7bnVsbH0gICAgICAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRDb25maWcoa2V5LCBkYXRhKSB7XG4gICAgICAgIHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jb25maWcsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGdsb2JhbCBjb25maWdcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgT2JqZWN0IHBhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGVmICAgRGVmYXVsdCB2YWx1ZVxuICAgICAqIEByZXR1cm4ge21peH0gICAgICAgICBBY3Rpb24gcmVzdWx0XG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0Q29uZmlnKGtleSwgZGVmKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jb25maWcsIGtleSk7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkZWY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXJ2aWNlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICAgbmFtZSAgICAgICBTZXJ2aWNlIG5hbWVcbiAgICAgKiBAcGFyYW0ge2NhbGxhYmxlfSBjYWxsYmFjayAgIENhbGxiYWNrXG4gICAgICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgICAgICBTZXJ2aWNlIGluc3RhbmNlXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgc2VydmljZShuYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAobmFtZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihjYWxsYmFjaykgfHwgdHlwZW9mIGNhbGxiYWNrID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2FjaGUoYHNlcnZpY2VzLyR7bmFtZX1gLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmdldENhY2hlKGBzZXJ2aWNlcy8ke25hbWV9YCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGlmIChzZXJ2aWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXh0IHNlcnZpY2Ugbm90IGV4aXN0IDogJHtuYW1lfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaCBhbiBldmVudCBoYW5kbGVyIGZ1bmN0aW9uIGZvciBvbmUgb3IgbW9yZSBldmVudHMgdG8gdGhlIHNlbGVjdGVkIGVsZW1lbnRzXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICAgZXZlbnRzICAgICAgICAgICBPbmUgb3IgbW9yZSBzcGFjZS1zZXBhcmF0ZWQgZXZlbnQgdHlwZXMgYW5kIG9wdGlvbmFsIG5hbWVzcGFjZXMsIHN1Y2ggYXMgXCJjbGlja1wiIG9yIFwia2V5ZG93bi5teVBsdWdpblwiXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICAgc2VsZWN0b3IgICAgICAgICBBIHNlbGVjdG9yIHN0cmluZyB0byBmaWx0ZXIgdGhlIGRlc2NlbmRhbnRzIG9mIHRoZSBzZWxlY3RlZCBlbGVtZW50cyB0aGF0IHRyaWdnZXIgdGhlIGV2ZW50XG4gICAgICogQHBhcmFtIHtjYWxsYWJsZX0gaGFuZGxlciAgICAgICAgICBBIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiB0aGUgZXZlbnQgaXMgdHJpZ2dlcmVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSAgcHJldmVudERlZmF1bHQgICBUcnVlIGlmIFwicHJldmVudERlZmF1bHRcIiBtdXN0IGJlIHVzZWRcbiAgICAgKiBAc2luY2UgMS4xLjBcbiAgICAgKi9cbiAgICBvbihldmVudHMsIHNlbGVjdG9yLCBoYW5kbGVyLCBwcmV2ZW50RGVmYXVsdCA9IGZhbHNlKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbCcpLm9uKGV2ZW50cywgc2VsZWN0b3IsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByZXZlbnREZWZhdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaGFuZGxlcigkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLCBldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaCBhbiBldmVudCBoYW5kbGVyIGZ1bmN0aW9uIGZvciBvbmUgb3IgbW9yZSBldmVudHMgdG8gdGhlIHNlbGVjdGVkIGVsZW1lbnRzXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICAgc2VsZWN0b3IgICAgICAgICBBIHNlbGVjdG9yIHN0cmluZyB0byBmaWx0ZXIgdGhlIGRlc2NlbmRhbnRzIG9mIHRoZSBzZWxlY3RlZCBlbGVtZW50cyB0aGF0IHRyaWdnZXIgdGhlIGV2ZW50XG4gICAgICogQHBhcmFtIHtjYWxsYWJsZX0gaGFuZGxlciAgICAgICAgICBBIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiB0aGUgZXZlbnQgaXMgdHJpZ2dlcmVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSAgcHJldmVudERlZmF1bHQgICBUcnVlIGlmIFwicHJldmVudERlZmF1bHRcIiBtdXN0IGJlIHVzZWRcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjbGljayhzZWxlY3RvciwgaGFuZGxlciwgcHJldmVudERlZmF1bHQgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMub24oJ2NsaWNrJywgc2VsZWN0b3IsIGhhbmRsZXIsIHByZXZlbnREZWZhdWx0KTtcbiAgICB9XG59IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIHppbWJydWNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBQYW5lbC9Nb2R1bGUgOiBNZW51XG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4xLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBLZXJuZWwgZnJvbSAnLi9rZXJuZWwnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgS2VybmVsIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pc1N1Ym1lbnVJdGVtICA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lbnVJdGVtSUQgICAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVudUl0ZW0gICAgICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdWJtZW51SXRlbSAgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lbnVQYXJlbnRJdGVtID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5kZXNrdG9wKCk7XG4gICAgICAgIHRoaXMubW9iaWxlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGNvbmRpdGlvbiA6IHN1Ym1lbnUtYWN0aXZlXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcmVtb3ZlU3VibWVudUFjdGl2ZSgpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsLW1lbnUnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtbWVudV9zdWJtZW51LWFjdGl2ZScpO1xuICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250ZW50X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGNvbmRpdGlvbiA6IHN1Ym1lbnUtYWN0aXZlXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkU3VibWVudUFjdGl2ZSgpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsLW1lbnUnKS5hZGRDbGFzcygnemMtcGFuZWwtbWVudV9zdWJtZW51LWFjdGl2ZScpO1xuICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250ZW50X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgc3VibWVudSBpcyBhY3RpdmF0ZWRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBpc1N1Ym1lbnVBY3RpdmUoKSB7XG4gICAgICAgIHJldHVybiAoJCgnLnpjLXBhbmVsLW1lbnUnKS5oYXNDbGFzcygnemMtcGFuZWwtbWVudV9zdWJtZW51LWFjdGl2ZScpICYmICQoJy56Yy1wYW5lbC1jb250ZW50JykuaGFzQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfc3VibWVudS1hY3RpdmUnKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheSBzZWN0aW9uXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMS4wXG4gICAgICovXG4gICAgZGlzcGxheVNlY3Rpb24obWVudUl0ZW1JRCwgaXRlbUlEKSB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gJChgLnpjLXBhbmVsLW1lbnUgbGlbZGF0YS1tZW51LWl0ZW0taWQ9XCIke21lbnVJdGVtSUR9XCJdYCk7XG5cbiAgICAgICAgLy8gQWRkIGljb25cbiAgICAgICAgY29uc3QgdGl0bGVJY29uQ2xhc3MgPSBtZW51SXRlbS5maW5kKCdpJykuZmlyc3QoKS5hdHRyKCdjbGFzcycpLm1hdGNoKC9cXGJ6Yy1pY29uXFxTKy9nKVswXTtcbiAgICAgICAgJCgnLnpjLXBhbmVsLWhlYWRlcl9fdGl0bGUtaWNvbicpLnJlbW92ZUNsYXNzKChpbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKGNsYXNzTmFtZS5tYXRjaCgvXFxiemMtaWNvblxcUysvZykgfHwgW10pLmpvaW4oJyAnKTtcbiAgICAgICAgfSkuYWRkQ2xhc3ModGl0bGVJY29uQ2xhc3MpO1xuXG4gICAgICAgIC8vIEFkZCB0aXRsZVxuICAgICAgICAkKCcuemMtcGFuZWwtaGVhZGVyX190aXRsZScpLnRleHQobWVudUl0ZW0uZmluZCgnc3BhbicpLnRleHQoKSk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIC8gYWN0aXZlIGNvbnRlbnQgc2VjdGlvblxuICAgICAgICBpZiAodGhpcy5tZW51SXRlbUlEKSB7XG4gICAgICAgICAgICAkKGAuemMtcGFuZWwtY29udHJvbHNfX3NlY3Rpb25bZGF0YS1zZWN0aW9uPVwiJHt0aGlzLm1lbnVJdGVtSUR9XCJdYCkucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19zZWN0aW9uX2FjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9ICQoYC56Yy1wYW5lbC1jb250cm9sc19fc2VjdGlvbltkYXRhLXNlY3Rpb249XCIke21lbnVJdGVtSUR9XCJdYCk7XG5cbiAgICAgICAgc2VjdGlvbi5hZGRDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX3NlY3Rpb25fYWN0aXZlJyk7XG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9tZW51L2l0ZW0tY2hhbmdlJyk7XG4gICAgICAgIHRoaXMuYWRkQ2FjaGUoJ21lbnUvY3VycmVudC1zZWN0aW9uJywgc2VjdGlvbik7XG5cbiAgICAgICAgaWYgKCFzZWN0aW9uLmhhc0NsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19fc2VjdGlvbl9JQ1AnKSkge1xuICAgICAgICAgICAgc2VjdGlvbi5hZGRDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX3NlY3Rpb25fSUNQJyk7XG5cbiAgICAgICAgICAgIC8vIEV2ZW50XG4gICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvbWVudS9pdGVtLWNoYW5nZS1JQ1AnLCBbc2VjdGlvbl0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIC8gYWN0aXZlIG1lbnUgaXRlbVxuICAgICAgICBpZiAobWVudUl0ZW0ucGFyZW50KCkuaGFzQ2xhc3MoJ3pjLXBhbmVsLXN1Ym1lbnVfX2xpc3QnKSkge1xuICAgICAgICAgICAgbGV0IHN1Ym1lbnVJdGVtID0gbWVudUl0ZW0ucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJtZW51SXRlbS5oYXNDbGFzcygnemMtcGFuZWwtc3VibWVudV9fc2Nyb2xsYmFyLWNvbnRhaW5lcicpKSB7XG4gICAgICAgICAgICAgICAgc3VibWVudUl0ZW0gPSBzdWJtZW51SXRlbS5wYXJlbnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3VibWVudUl0ZW0uYWRkQ2xhc3MoJ3pjLXBhbmVsLXN1Ym1lbnVfX2NvbnRhaW5lcl9hY3RpdmUnKTtcblxuICAgICAgICAgICAgY29uc3Qgc3VibWVudUl0ZW1JRCAgPSBzdWJtZW51SXRlbS5kYXRhKCdtZW51LWNvbnRhaW5lci1pZCcpO1xuICAgICAgICAgICAgY29uc3QgbWVudVBhcmVudEl0ZW0gPSAkKGAuemMtcGFuZWwtbWVudV9faXRlbV90eXBlX3BhcmVudFtkYXRhLW1lbnUtY29udGFpbmVyLWlkPVwiJHtzdWJtZW51SXRlbUlEfVwiXWApO1xuXG4gICAgICAgICAgICBtZW51SXRlbS5hZGRDbGFzcygnemMtcGFuZWwtc3VibWVudV9faXRlbV9hY3RpdmUnKTtcbiAgICAgICAgICAgIG1lbnVQYXJlbnRJdGVtLmFkZENsYXNzKCd6Yy1wYW5lbC1tZW51X19pdGVtX2FjdGl2ZScpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNTdWJtZW51QWN0aXZlKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFN1Ym1lbnVBY3RpdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWRkIGdsb2JhbCBkYXRhXG4gICAgICAgICAgICB0aGlzLmlzU3VibWVudUl0ZW0gID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3VibWVudUl0ZW0gICAgPSBzdWJtZW51SXRlbTtcbiAgICAgICAgICAgIHRoaXMubWVudVBhcmVudEl0ZW0gPSBtZW51UGFyZW50SXRlbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmFkZENsYXNzKCd6Yy1wYW5lbC1tZW51X19pdGVtX2FjdGl2ZScpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc1N1Ym1lbnVBY3RpdmUoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlU3VibWVudUFjdGl2ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBZGQgZ2xvYmFsIGRhdGFcbiAgICAgICAgICAgIHRoaXMuaXNTdWJtZW51SXRlbSAgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc3VibWVudUl0ZW0gICAgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubWVudVBhcmVudEl0ZW0gPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBnbG9iYWwgZGF0YVxuICAgICAgICB0aGlzLm1lbnVJdGVtICAgPSBtZW51SXRlbTtcbiAgICAgICAgdGhpcy5tZW51SXRlbUlEID0gbWVudUl0ZW1JRDtcblxuICAgICAgICBjb25zdCBzdGFuZGFyZFNjcm9sbGJhciA9ICQoJy56Yy1wYW5lbC1jb250ZW50IC56Yy1zY3JvbGxiYXInKTtcblxuICAgICAgICBzdGFuZGFyZFNjcm9sbGJhci5zY3JvbGxUb3AoMCk7XG5cbiAgICAgICAgaWYgKGl0ZW1JRCkge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9ICQoYC56Yy1wYW5lbC1jb250cm9scyBbbmFtZT0ke3RoaXMuZ2V0VmFyKCdwcmVmaXgtc2x1ZycpfSR7aXRlbUlEfV1gKS5jbG9zZXN0KCcuemMtcGFuZWwtY29udHJvbHNfX2l0ZW0nKTtcblxuICAgICAgICAgICAgaWYgKGl0ZW0ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhclR5cGUgICA9IHN0YW5kYXJkU2Nyb2xsYmFyLmNzcygncG9zaXRpb24nKSB8fCAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxiYXJPYmplY3QgPSAoc2Nyb2xsYmFyVHlwZSA9PSAnYWJzb2x1dGUnKSA/IHN0YW5kYXJkU2Nyb2xsYmFyIDogJCgnaHRtbCwgYm9keScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYW5lbEhlYWRlciAgICAgPSAkKCcuemMtcGFuZWwtaGVhZGVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpZmZlcmVuY2VJblNpemUgPSBwYW5lbEhlYWRlci5vZmZzZXQoKS50b3AgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgZGlmZmVyZW5jZUluU2l6ZSArPSBwYW5lbEhlYWRlci5oZWlnaHQoKSB8fCAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxiYXJUeXBlID09ICdhYnNvbHV0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpZmZlcmVuY2VJblNpemUgKz0gc3RhbmRhcmRTY3JvbGxiYXIuaGVpZ2h0KCkgLyAyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gaXRlbS5vZmZzZXQoKS50b3AgLSBkaWZmZXJlbmNlSW5TaXplO1xuXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbGJhck9iamVjdC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wXG4gICAgICAgICAgICAgICAgICAgIH0sICdmYXN0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hZGRDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX2l0ZW1fdmlzdWFsLWFsZXJ0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX2l0ZW1fdmlzdWFsLWFsZXJ0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IG1lbnVJdGVtSUQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzaW5nIGEgbWVudSBpdGVtXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMS4wXG4gICAgICovXG4gICAgcHJvY01lbnVJdGVtKG1lbnVJdGVtSUQsIGl0ZW1JRCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdWJtZW51SXRlbSkge1xuICAgICAgICAgICAgdGhpcy5tZW51SXRlbS5yZW1vdmVDbGFzcygnemMtcGFuZWwtbWVudV9faXRlbV9hY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVNlY3Rpb24obWVudUl0ZW1JRCwgaXRlbUlEKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWVudUl0ZW0ucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLXN1Ym1lbnVfX2l0ZW1fYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLm1lbnVQYXJlbnRJdGVtLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1tZW51X19pdGVtX2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5zdWJtZW51SXRlbS5yZW1vdmVDbGFzcygnemMtcGFuZWwtc3VibWVudV9fY29udGFpbmVyX2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5U2VjdGlvbihtZW51SXRlbUlELCBpdGVtSUQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVza3RvcCBtb2RlXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMS4wXG4gICAgICovXG4gICAgZGVza3RvcCgpIHtcbiAgICAgICAgbGV0IG1lbnVJdGVtSUQgPSAnJztcbiAgICAgICAgbGV0IGl0ZW1JRCAgICAgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKCQucGFyYW0uZnJhZ21lbnQoKSkge1xuICAgICAgICAgICAgbWVudUl0ZW1JRCA9ICQucGFyYW0uZnJhZ21lbnQoKSB8fCAnJztcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0SXRlbUlEKG1lbnVJdGVtSUQpO1xuXG4gICAgICAgICAgICBpZiAoZGF0YSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUlEID0gZGF0YS5wYXJ0MTtcbiAgICAgICAgICAgICAgICBpdGVtSUQgICAgID0gZGF0YS5wYXJ0MjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkKGAuemMtcGFuZWwtbWVudSBsaVtkYXRhLW1lbnUtaXRlbS1pZD1cIiR7bWVudUl0ZW1JRH1cIl1gKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGxldCBtZW51SXRlbSA9ICQoJy56Yy1wYW5lbC1tZW51X19saXN0IC56Yy1wYW5lbC1tZW51X19pdGVtX3R5cGVfc2ltcGxlJykuZmlyc3QoKTtcbiAgICAgICAgICAgIG1lbnVJdGVtSUQgPSBtZW51SXRlbS5kYXRhKCdtZW51LWl0ZW0taWQnKTtcblxuICAgICAgICAgICAgaWYgKCFtZW51SXRlbUlEKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3VibWVudUl0ZW1JRCA9IG1lbnVJdGVtLmRhdGEoJ21lbnUtY29udGFpbmVyLWlkJyk7XG5cbiAgICAgICAgICAgICAgICBtZW51SXRlbSA9ICQoYC56Yy1wYW5lbC1zdWJtZW51X19jb250YWluZXJbZGF0YS1tZW51LWNvbnRhaW5lci1pZD0ke3N1Ym1lbnVJdGVtSUR9XSAuemMtcGFuZWwtc3VibWVudV9faXRlbV90eXBlX3NpbXBsZWApLmZpcnN0KCk7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1JRCA9IG1lbnVJdGVtLmRhdGEoJ21lbnUtaXRlbS1pZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U2VjdGlvbihtZW51SXRlbUlELCBpdGVtSUQpO1xuXG4gICAgICAgIC8vIFdoZW4gaGFzaCBjaGFuZ2VcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdoYXNoY2hhbmdlLnpjLXBhbmVsJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgbWVudUl0ZW1JRCA9ICQucGFyYW0uZnJhZ21lbnQoKSA/ICQucGFyYW0uZnJhZ21lbnQoKSA6ICcnO1xuICAgICAgICAgICAgbGV0IGl0ZW1JRCAgICAgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldEl0ZW1JRChtZW51SXRlbUlEKTtcblxuICAgICAgICAgICAgaWYgKGRhdGEgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1JRCA9IGRhdGEucGFydDE7XG4gICAgICAgICAgICAgICAgaXRlbUlEICAgICA9IGRhdGEucGFydDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkKGAuemMtcGFuZWwtbWVudSBsaVtkYXRhLW1lbnUtaXRlbS1pZD1cIiR7bWVudUl0ZW1JRH1cIl1gKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUlEID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWVudUl0ZW1JRCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jTWVudUl0ZW0obWVudUl0ZW1JRCwgaXRlbUlEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gV2hlbiBjbGljayBvbiBwYXJlbnQgbWVudSBpdGVtXG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1wYW5lbC1tZW51X19pdGVtX3R5cGVfcGFyZW50JywgKCR0aGlzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJtZW51SXRlbUlEID0gJHRoaXMuZGF0YSgnbWVudS1jb250YWluZXItaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtICAgICAgPSAkKGAuemMtcGFuZWwtc3VibWVudV9fY29udGFpbmVyW2RhdGEtbWVudS1jb250YWluZXItaWQ9JHtzdWJtZW51SXRlbUlEfV0gLnpjLXBhbmVsLXN1Ym1lbnVfX2l0ZW1fdHlwZV9zaW1wbGVgKS5maXJzdCgpO1xuICAgICAgICAgICAgY29uc3QgbWVudUl0ZW1JRCAgICA9IG1lbnVJdGVtLmRhdGEoJ21lbnUtaXRlbS1pZCcpO1xuXG4gICAgICAgICAgICBpZiAobWVudUl0ZW1JRCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBtZW51SXRlbUlEO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBXaGVuIGNsaWNrIG9uIG1lbnUgaXRlbVxuICAgICAgICB0aGlzLmNsaWNrKCcuemMtcGFuZWwtbWVudV9faXRlbV90eXBlX3NpbXBsZTpub3QoLnpjLXBhbmVsLW1lbnVfX2l0ZW1fYWN0aXZlKScsICgkdGhpcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVudUl0ZW1JRCA9ICR0aGlzLmRhdGEoJ21lbnUtaXRlbS1pZCcpO1xuXG4gICAgICAgICAgICBpZiAobWVudUl0ZW1JRCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBtZW51SXRlbUlEO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIC8vIFdoZW4gY2xpY2sgb24gc3VibWVudSBpdGVtXG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1wYW5lbC1zdWJtZW51X19pdGVtX3R5cGVfc2ltcGxlOm5vdCguemMtcGFuZWwtc3VibWVudV9faXRlbV9hY3RpdmUpJywgKCR0aGlzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbUlEID0gJHRoaXMuZGF0YSgnbWVudS1pdGVtLWlkJyk7XG5cbiAgICAgICAgICAgIGlmIChtZW51SXRlbUlEKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBtZW51SXRlbUlEO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb2JpbGUgbW9kZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIG1vYmlsZSgpIHtcbiAgICAgICAgdGhpcy5jbGljaygnLnpjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudScsICgkdGhpcykgPT4ge1xuICAgICAgICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnVfYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51X2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfbW9iaWxlLW1lbnUtdmlzaWJsZScpO1xuXG4gICAgICAgICAgICAgICAgJHRoaXMub25lKCd0cmFuc2l0aW9uZW5kIHdlYmtpdFRyYW5zaXRpb25FbmQgb1RyYW5zaXRpb25FbmQgTVNUcmFuc2l0aW9uRW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udHJvbHMnKS5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZSgnY2xvc2UtYmxvY2snKS5oaWRlRGVmaW5pdGVseSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51X2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykuYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfbW9iaWxlLW1lbnUtdmlzaWJsZScpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGluaXROYXZIZWlnaHQgPSAkKCcuemMtcGFuZWwtbWVudV9fY29udGFpbmVyJykuaGVpZ2h0KCksXG4gICAgICAgICAgICAgICAgICAgIG5hdkhlaWdodCAgICAgPSAkKCcuemMtcGFuZWwtbWVudV9fbGlzdCcpLmhlaWdodCgpICsgdGhpcy5nZXRDb25maWcoJ2hlaWdodC1GQUgnKSxcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHNIZWlnaHQgID0gJCgnLnpjLXBhbmVsLWNvbnRyb2xzJykuaGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5pdE5hdkhlaWdodCA+IG5hdkhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBuYXZIZWlnaHQgPSBpbml0TmF2SGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChuYXZIZWlnaHQgPiBjb250cm9sc0hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udHJvbHMnKS5oZWlnaHQobmF2SGVpZ2h0IC0gdGhpcy5nZXRDb25maWcoJ2hlaWdodC1GQUgnKSk7XG4gICAgICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1zdWJtZW51X19zY3JvbGxiYXItY29udGFpbmVyJykuaGVpZ2h0KG5hdkhlaWdodCAtIHRoaXMuZ2V0Q29uZmlnKCdoZWFkZXItaGVpZ2h0JykpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBtZW51SXRlbUlEID0gJC5wYXJhbS5mcmFnbWVudCgpID8gJC5wYXJhbS5mcmFnbWVudCgpIDogJyc7XG5cbiAgICAgICAgICAgICAgICBpZiAoJChgLnpjLXBhbmVsLW1lbnUgbGlbZGF0YS1tZW51LWl0ZW0taWQ9XCIke21lbnVJdGVtSUR9XCJdYCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtSUQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG1lbnVJdGVtSUQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2NNZW51SXRlbShtZW51SXRlbUlEKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UoJ2Nsb3NlLWJsb2NrJykuc2hvdygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsYmFyVG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQod2luZG93KS5vbignemMvY2xvc2UtYmxvY2suemMtcGFuZWwnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoJCgnLnpjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudScpLmhhc0NsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnVfYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudV9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250ZW50X21vYmlsZS1tZW51LXZpc2libGUnKTtcblxuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnUnKS5vbmUoJ3RyYW5zaXRpb25lbmQgd2Via2l0VHJhbnNpdGlvbkVuZCBvVHJhbnNpdGlvbkVuZCBNU1RyYW5zaXRpb25FbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250cm9scycpLmhlaWdodCgnYXV0bycpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlKCdjbG9zZS1ibG9jaycpLmhpZGVEZWZpbml0ZWx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1wYW5lbC1zdWJtZW51X19oZWFkZXItc2VjdGlvbl9tb2RlX21vYmlsZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU3VibWVudUFjdGl2ZSgpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxiYXJUb3AoKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBpdGVtIElEXG4gICAgICogXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1lbnVJdGVtSURcbiAgICAgKiBAcmV0dXJucyB7bWl4fVxuICAgICAqIEBzaW5jZSAxLjEuMFxuICAgICAqL1xuICAgIGdldEl0ZW1JRChtZW51SXRlbUlEKSB7XG4gICAgICAgIGlmIChtZW51SXRlbUlEKSB7XG4gICAgICAgICAgICBpZiAobWVudUl0ZW1JRC5pbmRleE9mKCcvJykgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJ0MSA9IHpjLnN0cnN0cihtZW51SXRlbUlELCAnLycsIHRydWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnQyID0gemMuc3RyUmVwbGFjZShbJy8nXSwgWycnXSwgemMuc3Ryc3RyKG1lbnVJdGVtSUQsICcvJywgZmFsc2UpKTtcblxuICAgICAgICAgICAgICAgIGlmIChwYXJ0MSAmJiBwYXJ0Mikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydDE6IHBhcnQxLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydDI6IHBhcnQyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWxcbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEJhc2UgZnJvbSAnLi9tb2R1bGUvYmFzZSc7XG5cbnpjLmFkZE1vZHVsZSgncGFuZWwnLCAoJCkgPT4ge1xuXG4gICAgY29uc3QgcGFuZWwgPSBuZXcgQmFzZTtcbiAgICBcbiAgICAvLyBBZnRlciBsb2FkaW5nIHBhZ2VcbiAgICAkKCgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChwYW5lbC5tb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAncGFuZWwubW9kZSBpcyB1bmRlZmluZWQnO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgaWYgKCEkLmlzRnVuY3Rpb24ocGFuZWwubW9kZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAncGFuZWwubW9kZSBpcyBub3QgZnVuY3Rpb24nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYW5lbC5jaGVja0Jyb3dzZXJDb21wYXRpYmlsaXR5KCk7XG4gICAgICAgICAgICBwYW5lbC5tb2RlKCQsIHBhbmVsKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmICgkKCcuemMtcGFuZWwtdGVtcGxhdGUnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLXRlbXBsYXRlJykuZW1wdHkoKS5hcHBlbmQoYDxkaXYgY2xhc3M9XCJlcnJvciBub3RpY2VcIj48cD48Yj4ke3BhbmVsLmdldFZhcignYnJvd3Nlci1lcnJvci10aXRsZScpfTwvYj4gOiAke2Vycm9yfTwvcD48L2Rpdj5gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnI3dwYm9keS1jb250ZW50JykucHJlcGVuZChgPGRpdiBjbGFzcz1cImVycm9yIG5vdGljZVwiPjxwPjxiPiR7cGFuZWwuZ2V0VmFyKCdicm93c2VyLWVycm9yLXRpdGxlJyl9PC9iPiA6ICR7ZXJyb3J9PC9wPjwvZGl2PmApO1xuICAgICAgICAgICAgICAgIGFsZXJ0KGAke3BhbmVsLmdldFZhcignYnJvd3Nlci1lcnJvci10aXRsZScpfSA6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vICMjIyMjIyMjIyMjIyMgUFVCTElDIE1FVEhPRFMgIyMjIyMjIyMjIyMjI1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gQWRkIGNvbnRyb2xcbiAgICAgICAgYWRkQ29udHJvbDogKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpLFxuICAgICAgICAgICAgICAgICAgc2NyaXB0TG9jYXRpb24gPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjLFxuICAgICAgICAgICAgICAgICAgZGF0YUggPSBzY3JpcHRMb2NhdGlvbi5zcGxpdCgnLycpLFxuICAgICAgICAgICAgICAgICAgY29udHJvbE5hbWUgPSBkYXRhSFtkYXRhSC5sZW5ndGggLSA1XTtcblxuICAgICAgICAgICAgY29uc3QgY29udHJvbFZhcnMgPSBwYW5lbC5nZXRWYXIoJ2NvbnRyb2xzJylbY29udHJvbE5hbWVdO1xuICAgICAgICAgICAgcGFuZWwuc2VydmljZSgnY2FsbGJhY2snKS5hZGQoJ2NvbnRyb2wnLCBjYWxsYmFjaywgY29udHJvbFZhcnMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEFkZCBtb2RlXG4gICAgICAgIGFkZE1vZGU6IChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgcGFuZWwubW9kZSA9IGNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgfVxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9