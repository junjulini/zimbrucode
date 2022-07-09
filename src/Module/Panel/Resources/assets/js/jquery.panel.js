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
 * @since   1.0.0
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
     * @since 1.0.0
     */
    scrollbar() {
        if (!zc.isMobile() && navigator.userAgent.indexOf('Firefox') == -1) {
            const priv = {};

            priv.checkIfActive = (parent, children) => {
                const parentHeight   = parent.outerHeight(true);
                const childrenHeight = children.outerHeight(true);

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
     * @since 1.0.0
     */
    ifChanged() {
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
 * @since   1.0.0
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
     * @since 1.0.0
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
 * @since   1.0.0
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
     * @since 1.0.0
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
     * @since 1.0.0
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
 * @since   1.0.0
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
     * @since 1.0.0
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
     * @since 1.0.0
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
     * @since 1.0.0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2pxdWVyeS5wYW5lbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRXFCO0FBQ0s7QUFDSDtBQUNKO0FBQ0s7O0FBRXJDOztBQUVlLG1CQUFtQiwrQ0FBTTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsaURBQVE7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsc0NBQXNDO0FBQ3RDLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDZDQUFJO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxvREFBVTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxhQUFh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Q3hFO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvYmFzZS5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2Nsb3NlLWJsb2NrLmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9jb25kaXRpb24uanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2tlcm5lbC5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvbWVudS5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ppbWJydWNvZGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ppbWJydWNvZGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvanF1ZXJ5LnBhbmVsLmVzNi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZSA6IEJhc2VcbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEtlcm5lbCAgICAgZnJvbSAnLi9rZXJuZWwnO1xuaW1wb3J0IENsb3NlQmxvY2sgZnJvbSAnLi9jbG9zZS1ibG9jayc7XG5pbXBvcnQgQ2FsbGJhY2sgICBmcm9tICcuL2NhbGxiYWNrJztcbmltcG9ydCBNZW51ICAgICAgIGZyb20gJy4vbWVudSc7XG5pbXBvcnQgQ29uZGl0aW9uICBmcm9tICcuL2NvbmRpdGlvbic7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2UgZXh0ZW5kcyBLZXJuZWwge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAvLyBHbG9iYWwgY2FjaGVcbiAgICAgICAgdGhpcy5nbG9iYWwuY2FjaGUgPSB7XG4gICAgICAgICAgICBjaGFuZ2VkOiBmYWxzZSxcbiAgICAgICAgICAgIHNlcnZpY2VzOiB7fVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEdsb2JhbCBjb25maWdcbiAgICAgICAgdGhpcy5nbG9iYWwuY29uZmlnID0ge1xuXG4gICAgICAgICAgICAvLyBSaWdodCBtYXJnaW5cbiAgICAgICAgICAgJ3JpZ2h0LW1hcmdpbic6IHtcbiAgICAgICAgICAgICAgICBkZXNrdG9wOiAyMCxcbiAgICAgICAgICAgICAgICBtb2JpbGU6IDEwXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnYm90dG9tLW1hcmdpbic6IDQyLFxuICAgICAgICAgICAgJ2Zvb3Rlci1oZWlnaHQnOiA1NiwgIC8vIEhlaWdodCBvZiBmb290ZXJcbiAgICAgICAgICAgICdoZWFkZXItaGVpZ2h0JzogNTYsICAvLyBIZWlnaHQgb2YgaGVhZGVyXG4gICAgICAgICAgICAnaGVpZ2h0LUZBSCc6ICAgIDExMiwgLy8gSGVpZ2h0IG9mIGZvb3RlciAmIGhlYWRlclxuICAgICAgICAgICAgJ3dwLWJvZHktaGVpZ2h0JzogMCwgIC8vIFdwIGJvZHkgaGVpZ2h0XG5cbiAgICAgICAgICAgICdtaW4tc2l6ZSc6IHtcbiAgICAgICAgICAgICAgICAnYm9keS1oZWlnaHQnOiA1MDAsIC8vIE1pbiBwYW5lbCBib2R5IGhlaWdodFxuICAgICAgICAgICAgICAgIG1vZGUxOiA0OTAsXG4gICAgICAgICAgICAgICAgbW9kZTI6IDk1MFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJ3dwLWFkbWluLWJhci1oZWlnaHQnOiAzMlxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEdsb2JhbCB2YXJzXG4gICAgICAgIHRoaXMuZ2xvYmFsLnZhcnMgPSB6Y1BhbmVsVmFycztcblxuICAgICAgICAvLyBBZGQgc2VydmljZSA6IENhbGxiYWNrXG4gICAgICAgIHRoaXMuc2VydmljZSgnY2FsbGJhY2snLCBuZXcgQ2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGJyb3dzZXIgY29tcGF0aWJpbGl0eVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNoZWNrQnJvd3NlckNvbXBhdGliaWxpdHkoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoYSA9PiB7fSk7XG4gICAgICAgICAgICBuZXcgUmVzaXplT2JzZXJ2ZXIoYSA9PiB7fSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldFZhcignYnJvd3Nlci1lcnJvci1zdWJqZWN0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYW5lbCBtZW51XG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgbWVudSgpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlKCdtZW51JywgbmV3IE1lbnUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhbmVsIDogSW5pdGlhdGUgYSBibG9jayBjbG9zZSBjYWxsYmFja1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNsb3NlQmxvY2soKSB7XG4gICAgICAgIHRoaXMuc2VydmljZSgnY2xvc2UtYmxvY2snLCBuZXcgQ2xvc2VCbG9jayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFuZWwgc2Nyb2xsIGJhclxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHNjcm9sbGJhcigpIHtcbiAgICAgICAgaWYgKCF6Yy5pc01vYmlsZSgpICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpID09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBwcml2ID0ge307XG5cbiAgICAgICAgICAgIHByaXYuY2hlY2tJZkFjdGl2ZSA9IChwYXJlbnQsIGNoaWxkcmVuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50SGVpZ2h0ICAgPSBwYXJlbnQub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW5IZWlnaHQgPSBjaGlsZHJlbi5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRIZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbkhlaWdodCA+IHBhcmVudEhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFkZENsYXNzKCd6Yy1zY3JvbGxiYXJfYWN0aXZlJywpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNsYXNzKCd6Yy1zY3JvbGxiYXJfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBwcml2LnJvID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyaWVzWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdi5jaGVja0lmQWN0aXZlKCQoZW50cnkudGFyZ2V0KS5wYXJlbnQoKSwgJChlbnRyeS50YXJnZXQpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy56Yy1wYW5lbCAuemMtc2Nyb2xsYmFyJykuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJpdi5yby5vYnNlcnZlKCQoZWwpLmNoaWxkcmVuKCkuZmlyc3QoKS5nZXQoMCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQod2luZG93KS5vbignemMvcGFuZWwvc2l6ZS1jaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbCAuemMtc2Nyb2xsYmFyJykuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByaXYuY2hlY2tJZkFjdGl2ZSgkKGVsKSwgJChlbCkuY2hpbGRyZW4oKS5maXJzdCgpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIG1ldGEgdmlld3BvcnQgaWYgbW9iaWxlXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgbm9NZXRhU2NhbGVJZk1vYmlsZSgpIHtcbiAgICAgICAgaWYgKHpjLmlzTW9iaWxlKCkpIHtcbiAgICAgICAgICAgICQoJ2hlYWQgbWV0YVtuYW1lPXZpZXdwb3J0XScpLmF0dHIoJ2NvbnRlbnQnLCAnd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uZGl0aW9uc1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNvbmRpdGlvbigpIHtcbiAgICAgICAgbmV3IENvbmRpdGlvbih0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhbnkgY2hhbmdlcyBoYXZlIGJlZW4gbWFkZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gICBNZXNzYWdlXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaWZDaGFuZ2VkKCkge1xuICAgICAgICAkKHdpbmRvdykub24oJ2JlZm9yZXVubG9hZC56Yy1wYW5lbCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldENhY2hlKCdjaGFuZ2VkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYXIoJ2lmLWNoYW5nZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udHJvbCBoZWxwXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY29udHJvbEhlbHAoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgd2lkdGg6IDYwMCxcbiAgICAgICAgICAgIGhlaWdodDogMjUwXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jbGljaygnLnpjLXBhbmVsLWhlbHBfX3N0YXJ0ZXJfdHlwZV9zaW1wbGUnLCAoJHRoaXMpID0+IHtcbiAgICAgICAgICAgIGxldCBzZXR0aW5ncyA9ICR0aGlzLmRhdGEoJ3NldHRpbmdzJyk7XG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MgPT09IHVuZGVmaW5lZCB8fCBzZXR0aW5ncyA9PT0gJycgfHwgc2V0dGluZ3MgPT0gbnVsbCkgc2V0dGluZ3MgPSB7fTtcblxuICAgICAgICAgICAgZGVmYXVsdHMudGl0bGUgPSAkdGhpcy5hdHRyKCd0aXRsZScpO1xuICAgICAgICAgICAgZGVmYXVsdHMuaHRtbCAgPSAkdGhpcy5wYXJlbnQoKS5maW5kKCcuemMtcGFuZWwtaGVscF9fY29udGVudCcpLnRleHQoKTtcblxuICAgICAgICAgICAgemMucG9wdXAoKS5hZGQoJC5leHRlbmQoe30sIGRlZmF1bHRzLCBzZXR0aW5ncykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXppbmcgY29udHJvbHNcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjb250cm9sSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlKCdjYWxsYmFjaycpLnJ1bignY29udHJvbCcsICQsIHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvb2x0aXBcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICB0b29sdGlwKCkge1xuICAgICAgICBpZiAoemMuaXNNb2JpbGUoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbCBbZGF0YS10b29sdGlwXScpLnRpcHN5KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ2RhdGEtdG9vbHRpcCcsXG4gICAgICAgICAgICAgICAgZ3Jhdml0eTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9ICQodGhpcykuZGF0YSgndG9vbHRpcC1wb3NpdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3MnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAndyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2UnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICduJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHRydWUsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAzLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwvTW9kdWxlIDogQ2FsbGJhY2tcbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbGJhY2sge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBjYWxsYmFja1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZChuYW1lLCBjYWxsYmFjaywgYWRkaXRpb25hbCkge1xuICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2tbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tbbmFtZV0gPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jYWxsYmFja1tuYW1lXS5wdXNoKHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgYWRkaXRpb25hbDogYWRkaXRpb25hbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgLyoqXG4gICAgICogUnVuIGNhbGxiYWNrXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcnVuKG5hbWUpIHtcbiAgICAgICAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCAmJiBuYW1lICE9PSAnJykge1xuICAgICAgICAgICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmFwcGx5KGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBhcmdzLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNhbGxiYWNrW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrW25hbWVdLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwQXJncyA9ICQuZXh0ZW5kKHRydWUsIFtdLCBhcmdzKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZWwuYWRkaXRpb25hbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwQXJncy5wdXNoKGVsLmFkZGl0aW9uYWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZWwuY2FsbGJhY2suYXBwbHkodGhpcywgcEFyZ3MpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwvTW9kdWxlIDogQ2xvc2VCbG9ja1xuICpcbiAqIEBhdXRob3IgIEMuUiA8Y3JAanVuanVsaW5pLmNvbT5cbiAqIEBwYWNrYWdlIHppbWJydWNvZGVcbiAqIEBzaW5jZSAgIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgS2VybmVsIGZyb20gJy4va2VybmVsJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvc2VCbG9jayBleHRlbmRzIEtlcm5lbCB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaXNPcGVuID0gMDtcblxuICAgICAgICB0aGlzLmNsaWNrKCcuemMtcGFuZWwtY29udHJvbHNfX2Nsb3NlLWJsb2NrJywgKCkgPT4ge1xuICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL2Nsb3NlLWJsb2NrJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQod2luZG93KS5vbignemMvY2xvc2UtYmxvY2svc2hvdycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3pjL2Nsb3NlLWJsb2NrL2hpZGUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCd6Yy9jbG9zZS1ibG9jay9oaWRlLWRlZmluaXRlbHknLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGVEZWZpbml0ZWx5KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgXCJjbG9zZSBibG9ja1wiXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzaG93KCkge1xuICAgICAgICAkKCcuemMtcGFuZWwtY29udHJvbHNfX2Nsb3NlLWJsb2NrJykuYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19jbG9zZS1ibG9ja19hY3RpdmUnKTtcbiAgICAgICAgdGhpcy5pc09wZW4rKztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIFwiY2xvc2UgYmxvY2tcIlxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGhpZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3BlbiA9PT0gMSkge1xuICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRyb2xzX19jbG9zZS1ibG9jaycpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19fY2xvc2UtYmxvY2tfYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzT3Blbi0tO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNPcGVuIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgZGVmaW5pdGVseSBcImNsb3NlIGJsb2NrXCJcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBoaWRlRGVmaW5pdGVseSgpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRyb2xzX19jbG9zZS1ibG9jaycpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19fY2xvc2UtYmxvY2tfYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gMDtcblxuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvY2xvc2UtYmxvY2snKTtcbiAgICB9XG59IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIHppbWJydWNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBQYW5lbC9Nb2R1bGUgOiBDb25kaXRpb25cbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEtlcm5lbCBmcm9tICcuL2tlcm5lbCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmRpdGlvbiBleHRlbmRzIEtlcm5lbCB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuY2FjaGUgPSB7fTtcbiAgICAgICAgdGhpcy5yZWdleCA9IC8oLis/KToobm90RW1wdHl8ZW1wdHl8aXN8bm90fGNvbnRhaW5zfDx8PD18Pnw+PSlcXCgoLio/KVxcKSw/L2c7XG5cbiAgICAgICAgdGhpcy5maXJzdFN0YXJ0KCk7XG4gICAgICAgIHRoaXMuZGF0YUNhY2hpbmcoKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgaXRlbXNcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBmaXJzdFN0YXJ0KCkge1xuICAgICAgICAkKHdpbmRvdykub24oJ3pjL3BhbmVsL21lbnUvaXRlbS1jaGFuZ2UtSUNQJywgKGV2ZW50LCBzZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VjdGlvbikge1xuICAgICAgICAgICAgICAgIHNlY3Rpb24uZmluZCgnW2RhdGEtY29uZGl0aW9uXScpLmVhY2goKGluZGV4LCBlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlKCQoZWwpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYW55IGl0ZW0gaGFzIGNoYW5nZWRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsIC56Yy1wYW5lbC1jb250cm9scycpLm9uKCdjaGFuZ2UnLCAnW2RhdGEtb3B0aW9uXScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBsZXQgbmFtZSAgPSAkdGhpcy5hdHRyKCduYW1lJykgfHwgJyc7XG5cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoJ1tdJywgJycpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jYWNoZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgJC5lYWNoKHRoaXMuY2FjaGVbbmFtZV0sIChpbmRleCwgZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZShlbCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkdGhpcy5kYXRhKCdpJykgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2FjaGUoJ2NoYW5nZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvaWYtY2hhbmdlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhY2hlIGRhdGFcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBkYXRhQ2FjaGluZygpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsIC56Yy1wYW5lbC1jb250cm9scyBbZGF0YS1jb25kaXRpb25dJykuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XG4gICAgICAgICAgICBsZXQgbWF0Y2g7XG5cbiAgICAgICAgICAgIHdoaWxlIChtYXRjaCA9IHRoaXMucmVnZXguZXhlYygkKGVsKS5kYXRhKCdjb25kaXRpb24nKSkpIHtcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gdGhpcy5nZXRWYXIoJ3ByZWZpeC1zbHVnJykgKyBtYXRjaFsxXTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhY2hlW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlW2tleV0gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlW2tleV0ucHVzaCgkKGVsKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlIGJ5IGNvbmRpdGlvbnNcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gIGNvbnRyb2wgICAgICBDb250cm9sIG9iamVjdFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZmlyc3RTdGFydCAgIEZpcnN0IHN0YXJ0XG4gICAgICogQHJldHVybiB7bnVsbH0gICAgICAgICAgICAgICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHBhcnNlKGNvbnRyb2wsIGZpcnN0U3RhcnQpIHtcbiAgICAgICAgbGV0IHBhc3NlZCxcbiAgICAgICAgICAgIGNvbmRpdGlvbnMgPSB0aGlzLnByZXBDb25kaXRpb25zKGNvbnRyb2wuZGF0YSgnY29uZGl0aW9uJykpLFxuICAgICAgICAgICAgb3BlcmF0b3IgICA9IChjb250cm9sLmRhdGEoJ2NvbmRpdGlvbi1vcGVyYXRvcicpIHx8ICdhbmQnKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICQuZWFjaChjb25kaXRpb25zLCAoaW5kZXgsIGNvbmRpdGlvbikgPT4ge1xuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9ICQoYC56Yy1wYW5lbCAuemMtcGFuZWwtY29udHJvbHMgW25hbWU9JHt0aGlzLmdldFZhcigncHJlZml4LXNsdWcnKX0ke2NvbmRpdGlvbi5jaGVja31dYCk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoID4gMCAmJiB0YXJnZXQuaXMoJ1tkYXRhLW9wdGlvbl0nKSkge1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9ICQoYC56Yy1wYW5lbCAuemMtcGFuZWwtY29udHJvbHMgW2lkPSR7dGhpcy5nZXRWYXIoJ3ByZWZpeC1zbHVnJyl9JHtjb25kaXRpb24uY2hlY2t9XWApO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGggPiAwICYmIHRhcmdldC5pcygnW2RhdGEtb3B0aW9uXScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdjEgPSB0YXJnZXQudmFsKCkgIT09IG51bGwgPyB0YXJnZXQudmFsKCkudG9TdHJpbmcoKSA6ICcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IHYyID0gY29uZGl0aW9uLnZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoY29uZGl0aW9uLnJ1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAocGFyc2VJbnQodjEpIDwgcGFyc2VJbnQodjIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICc8PSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAocGFyc2VJbnQodjEpIDw9IHBhcnNlSW50KHYyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAocGFyc2VJbnQodjEpID4gcGFyc2VJbnQodjIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICc+PSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAocGFyc2VJbnQodjEpID49IHBhcnNlSW50KHYyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY29udGFpbnMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gKHYxLmluZGV4T2YodjIpICE9PSAtMSA/IHRydWUgOiBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaXMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gKHYxID09IHYyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdub3QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gKHYxICE9IHYyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdub3RFbXB0eSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2MSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbXB0eSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAhdjEgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgPT0gdHlwZW9mIHBhc3NlZCkge1xuICAgICAgICAgICAgICAgICAgICBwYXNzZWQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdvcic6XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzZWQgPSAocGFzc2VkIHx8IHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYW5kJzpcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NlZCA9IChwYXNzZWQgJiYgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpcnN0U3RhcnQgJiYgZmlyc3RTdGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbC5hZGRDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX2l0ZW1fc2hvdycpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2wuZGF0YSgnY29uZGl0aW9uLXNob3cnLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udHJvbC5hZGRDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX2l0ZW1faGlkZScpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2wuZGF0YSgnY29uZGl0aW9uLXNob3cnLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wuZGF0YSgnY29uZGl0aW9uLXNob3cnKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19faXRlbV9oaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2wuYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19pdGVtX3Nob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbC5kYXRhKCdjb25kaXRpb24tc2hvdycsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wuZGF0YSgnY29uZGl0aW9uLXNob3cnKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbC5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX2l0ZW1fc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19faXRlbV9oaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2wuZGF0YSgnY29uZGl0aW9uLXNob3cnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGFzc2VkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZXBhcmluZyBjb25kaXRpb25zXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcHJlcENvbmRpdGlvbnMoY29uZGl0aW9uKSB7XG4gICAgICAgIGxldCBtYXRjaCxcbiAgICAgICAgICAgIGNvbmRpdGlvbnMgPSBbXTtcblxuICAgICAgICB3aGlsZSAobWF0Y2ggPSB0aGlzLnJlZ2V4LmV4ZWMoY29uZGl0aW9uKSkge1xuICAgICAgICAgICAgY29uZGl0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAnY2hlY2snOiBtYXRjaFsxXSxcbiAgICAgICAgICAgICAgICAncnVsZSc6ICBtYXRjaFsyXSxcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBtYXRjaFszXSB8fCAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uZGl0aW9ucztcbiAgICB9XG59IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIHppbWJydWNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBQYW5lbC9Nb2R1bGUgOiBLZXJuZWxcbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2VybmVsIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsID0gemMuZ2V0TW9kdWxlRGF0YSgncGFuZWwnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgYmFyIDogTW92ZSB0byB0b3AgcG9zaXRpb25cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzY3JvbGxiYXJUb3AoKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbCAuemMtc2Nyb2xsYmFyJykuc2Nyb2xsVG9wKDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBwYW5lbCBoZWlnaHRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjYWxjSGVpZ2h0KCkge1xuICAgICAgICBpZiAodGhpcy5nZXRDYWNoZSgnd3AtYm9keS1oZWlnaHQnKSAhPT0gJCh3aW5kb3cpLmhlaWdodCgpKSB7XG4gICAgICAgICAgICB0aGlzLmFkZENhY2hlKCd3cC1ib2R5LWhlaWdodCcsICQod2luZG93KS5oZWlnaHQoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFcmFzZSBtb2JpbGUgbWVudVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGVyYXNlTW9iaWxlTWVudSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZXNrdG9wTW9kZSgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZXJ2aWNlKCdtZW51L2lzU3VibWVudUl0ZW0nKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1tZW51JykuYWRkQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250ZW50X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwtbWVudScpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1tZW51X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250ZW50X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250ZW50X21vYmlsZS1tZW51LXZpc2libGUnKTtcbiAgICAgICAgJCgnLnpjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudScpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnVfYWN0aXZlJyk7XG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlKCdjbG9zZS1ibG9jaycpLmhpZGVEZWZpbml0ZWx5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIG1vZGUgaXMgZGVza3RvcFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59ICAgUmV0dXJuIFwidHJ1ZVwiIGlmIGJvZHkgd2lkdGggaXMgYmlnZ2VyIHRoZW4gXCJtaW4tc2l6ZS5tb2RlMlwiXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaXNEZXNrdG9wTW9kZSgpIHtcbiAgICAgICAgcmV0dXJuICgkKCcuemMtcGFuZWwnKS53aWR0aCgpID49IHRoaXMuZ2V0Q29uZmlnKCdtaW4tc2l6ZS9tb2RlMicpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFcnJvciBjaGVja2luZywgaW4gQUpBWCBvciBlbHNld2hlcmVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBlcnJvckNoZWNrKG1haW5Nc2csIGVycm9yTXNnKSB7XG4gICAgICAgIGlmICghJCgnLnpjLXBvcHVwJykuaGFzQ2xhc3MoJ3pjLXBhbmVsLWVycm9yLWNvbmZpcm0nKSkge1xuXG4gICAgICAgICAgICBpZiAoJCgnLnpjLXBvcHVwJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwJykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xuXG4gICAgICAgICAgICB6Yy5jb25maXJtKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogbWFpbk1zZyxcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBgJHtlcnJvck1zZ30gPGJyPiBQYWdlIHdpbGwgYmUgcmVsb2FkZWQsIG9rP2AsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICd6Yy1wYW5lbC1lcnJvci1jb25maXJtJyxcbiAgICAgICAgICAgICAgICBvazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBnbG9iYWwgdmFyaWFibGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgT2JqZWN0IHBhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGVmICAgRGVmYXVsdCB2YWx1ZVxuICAgICAqIEByZXR1cm4ge21peH0gICAgICAgICBBY3Rpb24gcmVzdWx0XG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0VmFyKGtleSwgZGVmKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC52YXJzLCBrZXkpO1xuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGdsb2JhbCB2YXJpYWJsZSB2YWx1ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBPYmplY3QgcGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkYXRhICBWYXJpYWJsZSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge251bGx9ICAgICAgICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkVmFyKGtleSwgZGF0YSkge1xuICAgICAgICB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwudmFycywga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZ2xvYmFsIGNhY2hlIHZhbHVlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIE9iamVjdCBwYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRhdGEgIENhY2hlIHZhbHVlXG4gICAgICogQHJldHVybiB7bnVsbH0gICAgICAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRDYWNoZShrZXksIGRhdGEpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNhY2hlLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBnbG9iYWwgY2FjaGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgT2JqZWN0IHBhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGVmICAgRGVmYXVsdCB2YWx1ZVxuICAgICAqIEByZXR1cm4ge21peH0gICAgICAgICBBY3Rpb24gcmVzdWx0XG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0Q2FjaGUoa2V5LCBkZWYpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNhY2hlLCBrZXkpO1xuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbGVtZW50IGZyb20gY2FjaGUgb2JqZWN0XG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIE9iamVjdCBwYXRoXG4gICAgICogQHJldHVybiB7bnVsbH0gICAgICAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICByZW1DYWNoZShrZXkpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNhY2hlLCBrZXksIGZhbHNlLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZ2xvYmFsIGNvbmZpZyB2YWx1ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBPYmplY3QgcGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkYXRhICBDb25maWcgdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgICAgICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZENvbmZpZyhrZXksIGRhdGEpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNvbmZpZywga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZ2xvYmFsIGNvbmZpZ1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBPYmplY3QgcGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkZWYgICBEZWZhdWx0IHZhbHVlXG4gICAgICogQHJldHVybiB7bWl4fSAgICAgICAgIEFjdGlvbiByZXN1bHRcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBnZXRDb25maWcoa2V5LCBkZWYpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNvbmZpZywga2V5KTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRlZjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcnZpY2VcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gICBuYW1lICAgICAgIFNlcnZpY2UgbmFtZVxuICAgICAqIEBwYXJhbSB7Y2FsbGFibGV9IGNhbGxiYWNrICAgQ2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICAgICAgIFNlcnZpY2UgaW5zdGFuY2VcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzZXJ2aWNlKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSB8fCB0eXBlb2YgY2FsbGJhY2sgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDYWNoZShgc2VydmljZXMvJHtuYW1lfWAsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuZ2V0Q2FjaGUoYHNlcnZpY2VzLyR7bmFtZX1gLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlcnZpY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmljZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgc2VydmljZSBub3QgZXhpc3QgOiAke25hbWV9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoIGFuIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24gZm9yIG9uZSBvciBtb3JlIGV2ZW50cyB0byB0aGUgc2VsZWN0ZWQgZWxlbWVudHNcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gICBldmVudHMgICAgICAgICAgIE9uZSBvciBtb3JlIHNwYWNlLXNlcGFyYXRlZCBldmVudCB0eXBlcyBhbmQgb3B0aW9uYWwgbmFtZXNwYWNlcywgc3VjaCBhcyBcImNsaWNrXCIgb3IgXCJrZXlkb3duLm15UGx1Z2luXCJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gICBzZWxlY3RvciAgICAgICAgIEEgc2VsZWN0b3Igc3RyaW5nIHRvIGZpbHRlciB0aGUgZGVzY2VuZGFudHMgb2YgdGhlIHNlbGVjdGVkIGVsZW1lbnRzIHRoYXQgdHJpZ2dlciB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0ge2NhbGxhYmxlfSBoYW5kbGVyICAgICAgICAgIEEgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIHRoZSBldmVudCBpcyB0cmlnZ2VyZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59ICBwcmV2ZW50RGVmYXVsdCAgIFRydWUgaWYgXCJwcmV2ZW50RGVmYXVsdFwiIG11c3QgYmUgdXNlZFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIG9uKGV2ZW50cywgc2VsZWN0b3IsIGhhbmRsZXIsIHByZXZlbnREZWZhdWx0ID0gZmFsc2UpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsJykub24oZXZlbnRzLCBzZWxlY3RvciwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJldmVudERlZmF1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoYW5kbGVyKCQoZXZlbnQuY3VycmVudFRhcmdldCksIGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoIGFuIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24gZm9yIG9uZSBvciBtb3JlIGV2ZW50cyB0byB0aGUgc2VsZWN0ZWQgZWxlbWVudHNcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gICBzZWxlY3RvciAgICAgICAgIEEgc2VsZWN0b3Igc3RyaW5nIHRvIGZpbHRlciB0aGUgZGVzY2VuZGFudHMgb2YgdGhlIHNlbGVjdGVkIGVsZW1lbnRzIHRoYXQgdHJpZ2dlciB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0ge2NhbGxhYmxlfSBoYW5kbGVyICAgICAgICAgIEEgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIHRoZSBldmVudCBpcyB0cmlnZ2VyZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59ICBwcmV2ZW50RGVmYXVsdCAgIFRydWUgaWYgXCJwcmV2ZW50RGVmYXVsdFwiIG11c3QgYmUgdXNlZFxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNsaWNrKHNlbGVjdG9yLCBoYW5kbGVyLCBwcmV2ZW50RGVmYXVsdCA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5vbignY2xpY2snLCBzZWxlY3RvciwgaGFuZGxlciwgcHJldmVudERlZmF1bHQpO1xuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZSA6IE1lbnVcbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEtlcm5lbCBmcm9tICcuL2tlcm5lbCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBLZXJuZWwge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmlzU3VibWVudUl0ZW0gID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVudUl0ZW1JRCAgICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tZW51SXRlbSAgICAgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN1Ym1lbnVJdGVtICAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVudVBhcmVudEl0ZW0gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmRlc2t0b3AoKTtcbiAgICAgICAgdGhpcy5tb2JpbGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgY29uZGl0aW9uIDogc3VibWVudS1hY3RpdmVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICByZW1vdmVTdWJtZW51QWN0aXZlKCkge1xuICAgICAgICAkKCcuemMtcGFuZWwtbWVudScpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1tZW51X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfc3VibWVudS1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgY29uZGl0aW9uIDogc3VibWVudS1hY3RpdmVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRTdWJtZW51QWN0aXZlKCkge1xuICAgICAgICAkKCcuemMtcGFuZWwtbWVudScpLmFkZENsYXNzKCd6Yy1wYW5lbC1tZW51X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykuYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfc3VibWVudS1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBzdWJtZW51IGlzIGFjdGl2YXRlZFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9ICAgTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGlzU3VibWVudUFjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuICgkKCcuemMtcGFuZWwtbWVudScpLmhhc0NsYXNzKCd6Yy1wYW5lbC1tZW51X3N1Ym1lbnUtYWN0aXZlJykgJiYgJCgnLnpjLXBhbmVsLWNvbnRlbnQnKS5oYXNDbGFzcygnemMtcGFuZWwtY29udGVudF9zdWJtZW51LWFjdGl2ZScpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5IHNlY3Rpb25cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBkaXNwbGF5U2VjdGlvbihtZW51SXRlbUlELCBpdGVtSUQpIHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSAkKGAuemMtcGFuZWwtbWVudSBsaVtkYXRhLW1lbnUtaXRlbS1pZD1cIiR7bWVudUl0ZW1JRH1cIl1gKTtcblxuICAgICAgICAvLyBBZGQgaWNvblxuICAgICAgICBjb25zdCB0aXRsZUljb25DbGFzcyA9IG1lbnVJdGVtLmZpbmQoJ2knKS5maXJzdCgpLmF0dHIoJ2NsYXNzJykubWF0Y2goL1xcYnpjLWljb25cXFMrL2cpWzBdO1xuICAgICAgICAkKCcuemMtcGFuZWwtaGVhZGVyX190aXRsZS1pY29uJykucmVtb3ZlQ2xhc3MoKGluZGV4LCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoY2xhc3NOYW1lLm1hdGNoKC9cXGJ6Yy1pY29uXFxTKy9nKSB8fCBbXSkuam9pbignICcpO1xuICAgICAgICB9KS5hZGRDbGFzcyh0aXRsZUljb25DbGFzcyk7XG5cbiAgICAgICAgLy8gQWRkIHRpdGxlXG4gICAgICAgICQoJy56Yy1wYW5lbC1oZWFkZXJfX3RpdGxlJykudGV4dChtZW51SXRlbS5maW5kKCdzcGFuJykudGV4dCgpKTtcblxuICAgICAgICAvLyBSZW1vdmUgLyBhY3RpdmUgY29udGVudCBzZWN0aW9uXG4gICAgICAgIGlmICh0aGlzLm1lbnVJdGVtSUQpIHtcbiAgICAgICAgICAgICQoYC56Yy1wYW5lbC1jb250cm9sc19fc2VjdGlvbltkYXRhLXNlY3Rpb249XCIke3RoaXMubWVudUl0ZW1JRH1cIl1gKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX3NlY3Rpb25fYWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWN0aW9uID0gJChgLnpjLXBhbmVsLWNvbnRyb2xzX19zZWN0aW9uW2RhdGEtc2VjdGlvbj1cIiR7bWVudUl0ZW1JRH1cIl1gKTtcblxuICAgICAgICBzZWN0aW9uLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19fc2VjdGlvbl9hY3RpdmUnKTtcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL21lbnUvaXRlbS1jaGFuZ2UnKTtcbiAgICAgICAgdGhpcy5hZGRDYWNoZSgnbWVudS9jdXJyZW50LXNlY3Rpb24nLCBzZWN0aW9uKTtcblxuICAgICAgICBpZiAoIXNlY3Rpb24uaGFzQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19zZWN0aW9uX0lDUCcpKSB7XG4gICAgICAgICAgICBzZWN0aW9uLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19fc2VjdGlvbl9JQ1AnKTtcblxuICAgICAgICAgICAgLy8gRXZlbnRcbiAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9tZW51L2l0ZW0tY2hhbmdlLUlDUCcsIFtzZWN0aW9uXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgLyBhY3RpdmUgbWVudSBpdGVtXG4gICAgICAgIGlmIChtZW51SXRlbS5wYXJlbnQoKS5oYXNDbGFzcygnemMtcGFuZWwtc3VibWVudV9fbGlzdCcpKSB7XG4gICAgICAgICAgICBsZXQgc3VibWVudUl0ZW0gPSBtZW51SXRlbS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKTtcblxuICAgICAgICAgICAgaWYgKHN1Ym1lbnVJdGVtLmhhc0NsYXNzKCd6Yy1wYW5lbC1zdWJtZW51X19zY3JvbGxiYXItY29udGFpbmVyJykpIHtcbiAgICAgICAgICAgICAgICBzdWJtZW51SXRlbSA9IHN1Ym1lbnVJdGVtLnBhcmVudCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdWJtZW51SXRlbS5hZGRDbGFzcygnemMtcGFuZWwtc3VibWVudV9fY29udGFpbmVyX2FjdGl2ZScpO1xuXG4gICAgICAgICAgICBjb25zdCBzdWJtZW51SXRlbUlEICA9IHN1Ym1lbnVJdGVtLmRhdGEoJ21lbnUtY29udGFpbmVyLWlkJyk7XG4gICAgICAgICAgICBjb25zdCBtZW51UGFyZW50SXRlbSA9ICQoYC56Yy1wYW5lbC1tZW51X19pdGVtX3R5cGVfcGFyZW50W2RhdGEtbWVudS1jb250YWluZXItaWQ9XCIke3N1Ym1lbnVJdGVtSUR9XCJdYCk7XG5cbiAgICAgICAgICAgIG1lbnVJdGVtLmFkZENsYXNzKCd6Yy1wYW5lbC1zdWJtZW51X19pdGVtX2FjdGl2ZScpO1xuICAgICAgICAgICAgbWVudVBhcmVudEl0ZW0uYWRkQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfX2l0ZW1fYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5pc1N1Ym1lbnVBY3RpdmUoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkU3VibWVudUFjdGl2ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBZGQgZ2xvYmFsIGRhdGFcbiAgICAgICAgICAgIHRoaXMuaXNTdWJtZW51SXRlbSAgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zdWJtZW51SXRlbSAgICA9IHN1Ym1lbnVJdGVtO1xuICAgICAgICAgICAgdGhpcy5tZW51UGFyZW50SXRlbSA9IG1lbnVQYXJlbnRJdGVtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVudUl0ZW0uYWRkQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfX2l0ZW1fYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3VibWVudUFjdGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTdWJtZW51QWN0aXZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCBnbG9iYWwgZGF0YVxuICAgICAgICAgICAgdGhpcy5pc1N1Ym1lbnVJdGVtICA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zdWJtZW51SXRlbSAgICA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5tZW51UGFyZW50SXRlbSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIGdsb2JhbCBkYXRhXG4gICAgICAgIHRoaXMubWVudUl0ZW0gICA9IG1lbnVJdGVtO1xuICAgICAgICB0aGlzLm1lbnVJdGVtSUQgPSBtZW51SXRlbUlEO1xuXG4gICAgICAgIGNvbnN0IHN0YW5kYXJkU2Nyb2xsYmFyID0gJCgnLnpjLXBhbmVsLWNvbnRlbnQgLnpjLXNjcm9sbGJhcicpO1xuXG4gICAgICAgIHN0YW5kYXJkU2Nyb2xsYmFyLnNjcm9sbFRvcCgwKTtcblxuICAgICAgICBpZiAoaXRlbUlEKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gJChgLnpjLXBhbmVsLWNvbnRyb2xzIFtuYW1lPSR7dGhpcy5nZXRWYXIoJ3ByZWZpeC1zbHVnJyl9JHtpdGVtSUR9XWApLmNsb3Nlc3QoJy56Yy1wYW5lbC1jb250cm9sc19faXRlbScpO1xuXG4gICAgICAgICAgICBpZiAoaXRlbS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYmFyVHlwZSAgID0gc3RhbmRhcmRTY3JvbGxiYXIuY3NzKCdwb3NpdGlvbicpIHx8ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhck9iamVjdCA9IChzY3JvbGxiYXJUeXBlID09ICdhYnNvbHV0ZScpID8gc3RhbmRhcmRTY3JvbGxiYXIgOiAkKCdodG1sLCBib2R5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhbmVsSGVhZGVyICAgICA9ICQoJy56Yy1wYW5lbC1oZWFkZXInKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlmZmVyZW5jZUluU2l6ZSA9IHBhbmVsSGVhZGVyLm9mZnNldCgpLnRvcCB8fCAwO1xuICAgICAgICAgICAgICAgICAgICBkaWZmZXJlbmNlSW5TaXplICs9IHBhbmVsSGVhZGVyLmhlaWdodCgpIHx8IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbGJhclR5cGUgPT0gJ2Fic29sdXRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlmZmVyZW5jZUluU2l6ZSArPSBzdGFuZGFyZFNjcm9sbGJhci5oZWlnaHQoKSAvIDI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBpdGVtLm9mZnNldCgpLnRvcCAtIGRpZmZlcmVuY2VJblNpemU7XG5cbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYmFyT2JqZWN0LmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBzY3JvbGxUb3BcbiAgICAgICAgICAgICAgICAgICAgfSwgJ2Zhc3QnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19faXRlbV92aXN1YWwtYWxlcnQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19faXRlbV92aXN1YWwtYWxlcnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gbWVudUl0ZW1JRDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NpbmcgYSBtZW51IGl0ZW1cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwcm9jTWVudUl0ZW0obWVudUl0ZW1JRCwgaXRlbUlEKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N1Ym1lbnVJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLm1lbnVJdGVtLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1tZW51X19pdGVtX2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5U2VjdGlvbihtZW51SXRlbUlELCBpdGVtSUQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tZW51SXRlbS5yZW1vdmVDbGFzcygnemMtcGFuZWwtc3VibWVudV9faXRlbV9hY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMubWVudVBhcmVudEl0ZW0ucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfX2l0ZW1fYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLnN1Ym1lbnVJdGVtLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1zdWJtZW51X19jb250YWluZXJfYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlTZWN0aW9uKG1lbnVJdGVtSUQsIGl0ZW1JRCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXNrdG9wIG1vZGVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSAgIE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBkZXNrdG9wKCkge1xuICAgICAgICBsZXQgbWVudUl0ZW1JRCA9ICcnO1xuICAgICAgICBsZXQgaXRlbUlEICAgICA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoJC5wYXJhbS5mcmFnbWVudCgpKSB7XG4gICAgICAgICAgICBtZW51SXRlbUlEID0gJC5wYXJhbS5mcmFnbWVudCgpIHx8ICcnO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRJdGVtSUQobWVudUl0ZW1JRCk7XG5cbiAgICAgICAgICAgIGlmIChkYXRhICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtSUQgPSBkYXRhLnBhcnQxO1xuICAgICAgICAgICAgICAgIGl0ZW1JRCAgICAgPSBkYXRhLnBhcnQyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCQoYC56Yy1wYW5lbC1tZW51IGxpW2RhdGEtbWVudS1pdGVtLWlkPVwiJHttZW51SXRlbUlEfVwiXWApLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbGV0IG1lbnVJdGVtID0gJCgnLnpjLXBhbmVsLW1lbnVfX2xpc3QgLnpjLXBhbmVsLW1lbnVfX2l0ZW1fdHlwZV9zaW1wbGUnKS5maXJzdCgpO1xuICAgICAgICAgICAgbWVudUl0ZW1JRCA9IG1lbnVJdGVtLmRhdGEoJ21lbnUtaXRlbS1pZCcpO1xuXG4gICAgICAgICAgICBpZiAoIW1lbnVJdGVtSUQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJtZW51SXRlbUlEID0gbWVudUl0ZW0uZGF0YSgnbWVudS1jb250YWluZXItaWQnKTtcblxuICAgICAgICAgICAgICAgIG1lbnVJdGVtID0gJChgLnpjLXBhbmVsLXN1Ym1lbnVfX2NvbnRhaW5lcltkYXRhLW1lbnUtY29udGFpbmVyLWlkPSR7c3VibWVudUl0ZW1JRH1dIC56Yy1wYW5lbC1zdWJtZW51X19pdGVtX3R5cGVfc2ltcGxlYCkuZmlyc3QoKTtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUlEID0gbWVudUl0ZW0uZGF0YSgnbWVudS1pdGVtLWlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3BsYXlTZWN0aW9uKG1lbnVJdGVtSUQsIGl0ZW1JRCk7XG5cbiAgICAgICAgLy8gV2hlbiBoYXNoIGNoYW5nZVxuICAgICAgICAkKHdpbmRvdykub24oJ2hhc2hjaGFuZ2UuemMtcGFuZWwnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGxldCBtZW51SXRlbUlEID0gJC5wYXJhbS5mcmFnbWVudCgpID8gJC5wYXJhbS5mcmFnbWVudCgpIDogJyc7XG4gICAgICAgICAgICBsZXQgaXRlbUlEICAgICA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0SXRlbUlEKG1lbnVJdGVtSUQpO1xuXG4gICAgICAgICAgICBpZiAoZGF0YSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUlEID0gZGF0YS5wYXJ0MTtcbiAgICAgICAgICAgICAgICBpdGVtSUQgICAgID0gZGF0YS5wYXJ0MjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCQoYC56Yy1wYW5lbC1tZW51IGxpW2RhdGEtbWVudS1pdGVtLWlkPVwiJHttZW51SXRlbUlEfVwiXWApLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtSUQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZW51SXRlbUlEICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2NNZW51SXRlbShtZW51SXRlbUlELCBpdGVtSUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBXaGVuIGNsaWNrIG9uIHBhcmVudCBtZW51IGl0ZW1cbiAgICAgICAgdGhpcy5jbGljaygnLnpjLXBhbmVsLW1lbnVfX2l0ZW1fdHlwZV9wYXJlbnQnLCAoJHRoaXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1lbnVJdGVtSUQgPSAkdGhpcy5kYXRhKCdtZW51LWNvbnRhaW5lci1pZCcpO1xuICAgICAgICAgICAgY29uc3QgbWVudUl0ZW0gICAgICA9ICQoYC56Yy1wYW5lbC1zdWJtZW51X19jb250YWluZXJbZGF0YS1tZW51LWNvbnRhaW5lci1pZD0ke3N1Ym1lbnVJdGVtSUR9XSAuemMtcGFuZWwtc3VibWVudV9faXRlbV90eXBlX3NpbXBsZWApLmZpcnN0KCk7XG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbUlEICAgID0gbWVudUl0ZW0uZGF0YSgnbWVudS1pdGVtLWlkJyk7XG5cbiAgICAgICAgICAgIGlmIChtZW51SXRlbUlEICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IG1lbnVJdGVtSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFdoZW4gY2xpY2sgb24gbWVudSBpdGVtXG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1wYW5lbC1tZW51X19pdGVtX3R5cGVfc2ltcGxlOm5vdCguemMtcGFuZWwtbWVudV9faXRlbV9hY3RpdmUpJywgKCR0aGlzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbUlEID0gJHRoaXMuZGF0YSgnbWVudS1pdGVtLWlkJyk7XG5cbiAgICAgICAgICAgIGlmIChtZW51SXRlbUlEICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IG1lbnVJdGVtSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgLy8gV2hlbiBjbGljayBvbiBzdWJtZW51IGl0ZW1cbiAgICAgICAgdGhpcy5jbGljaygnLnpjLXBhbmVsLXN1Ym1lbnVfX2l0ZW1fdHlwZV9zaW1wbGU6bm90KC56Yy1wYW5lbC1zdWJtZW51X19pdGVtX2FjdGl2ZSknLCAoJHRoaXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtSUQgPSAkdGhpcy5kYXRhKCdtZW51LWl0ZW0taWQnKTtcblxuICAgICAgICAgICAgaWYgKG1lbnVJdGVtSUQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IG1lbnVJdGVtSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vYmlsZSBtb2RlXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gICBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgbW9iaWxlKCkge1xuICAgICAgICB0aGlzLmNsaWNrKCcuemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51JywgKCR0aGlzKSA9PiB7XG4gICAgICAgICAgICBpZiAoJHRoaXMuaGFzQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudV9hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnVfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udGVudF9tb2JpbGUtbWVudS12aXNpYmxlJyk7XG5cbiAgICAgICAgICAgICAgICAkdGhpcy5vbmUoJ3RyYW5zaXRpb25lbmQgd2Via2l0VHJhbnNpdGlvbkVuZCBvVHJhbnNpdGlvbkVuZCBNU1RyYW5zaXRpb25FbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250cm9scycpLmhlaWdodCgnYXV0bycpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlKCdjbG9zZS1ibG9jaycpLmhpZGVEZWZpbml0ZWx5KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnVfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRlbnQnKS5hZGRDbGFzcygnemMtcGFuZWwtY29udGVudF9tb2JpbGUtbWVudS12aXNpYmxlJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgaW5pdE5hdkhlaWdodCA9ICQoJy56Yy1wYW5lbC1tZW51X19jb250YWluZXInKS5oZWlnaHQoKSxcbiAgICAgICAgICAgICAgICAgICAgbmF2SGVpZ2h0ICAgICA9ICQoJy56Yy1wYW5lbC1tZW51X19saXN0JykuaGVpZ2h0KCkgKyB0aGlzLmdldENvbmZpZygnaGVpZ2h0LUZBSCcpLFxuICAgICAgICAgICAgICAgICAgICBjb250cm9sc0hlaWdodCAgPSAkKCcuemMtcGFuZWwtY29udHJvbHMnKS5oZWlnaHQoKTtcblxuICAgICAgICAgICAgICAgIGlmIChpbml0TmF2SGVpZ2h0ID4gbmF2SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hdkhlaWdodCA9IGluaXROYXZIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG5hdkhlaWdodCA+IGNvbnRyb2xzSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250cm9scycpLmhlaWdodChuYXZIZWlnaHQgLSB0aGlzLmdldENvbmZpZygnaGVpZ2h0LUZBSCcpKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLXN1Ym1lbnVfX3Njcm9sbGJhci1jb250YWluZXInKS5oZWlnaHQobmF2SGVpZ2h0IC0gdGhpcy5nZXRDb25maWcoJ2hlYWRlci1oZWlnaHQnKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IG1lbnVJdGVtSUQgPSAkLnBhcmFtLmZyYWdtZW50KCkgPyAkLnBhcmFtLmZyYWdtZW50KCkgOiAnJztcblxuICAgICAgICAgICAgICAgIGlmICgkKGAuemMtcGFuZWwtbWVudSBsaVtkYXRhLW1lbnUtaXRlbS1pZD1cIiR7bWVudUl0ZW1JRH1cIl1gKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1JRCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobWVudUl0ZW1JRCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY01lbnVJdGVtKG1lbnVJdGVtSUQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZSgnY2xvc2UtYmxvY2snKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxiYXJUb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCd6Yy9jbG9zZS1ibG9jay56Yy1wYW5lbCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICgkKCcuemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51JykuaGFzQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudV9hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnUnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51X2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfbW9iaWxlLW1lbnUtdmlzaWJsZScpO1xuXG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudScpLm9uZSgndHJhbnNpdGlvbmVuZCB3ZWJraXRUcmFuc2l0aW9uRW5kIG9UcmFuc2l0aW9uRW5kIE1TVHJhbnNpdGlvbkVuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRyb2xzJykuaGVpZ2h0KCdhdXRvJyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UoJ2Nsb3NlLWJsb2NrJykuaGlkZURlZmluaXRlbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jbGljaygnLnpjLXBhbmVsLXN1Ym1lbnVfX2hlYWRlci1zZWN0aW9uX21vZGVfbW9iaWxlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVTdWJtZW51QWN0aXZlKCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbGJhclRvcCgpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0SXRlbUlEKG1lbnVJdGVtSUQpIHtcbiAgICAgICAgaWYgKG1lbnVJdGVtSUQpIHtcbiAgICAgICAgICAgIGlmIChtZW51SXRlbUlELmluZGV4T2YoJy8nKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnQxID0gemMuc3Ryc3RyKG1lbnVJdGVtSUQsICcvJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFydDIgPSB6Yy5zdHJSZXBsYWNlKFsnLyddLCBbJyddLCB6Yy5zdHJzdHIobWVudUl0ZW1JRCwgJy8nLCBmYWxzZSkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBhcnQxICYmIHBhcnQyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0MTogcGFydDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0MjogcGFydDJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIHppbWJydWNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBQYW5lbFxuICpcbiAqIEBhdXRob3IgIEMuUiA8Y3JAanVuanVsaW5pLmNvbT5cbiAqIEBwYWNrYWdlIHppbWJydWNvZGVcbiAqIEBzaW5jZSAgIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQmFzZSBmcm9tICcuL21vZHVsZS9iYXNlJztcblxuemMuYWRkTW9kdWxlKCdwYW5lbCcsICgkKSA9PiB7XG5cbiAgICBjb25zdCBwYW5lbCA9IG5ldyBCYXNlO1xuICAgIFxuICAgIC8vIEFmdGVyIGxvYWRpbmcgcGFnZVxuICAgICQoKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHBhbmVsLm1vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93ICdwYW5lbC5tb2RlIGlzIHVuZGVmaW5lZCc7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpZiAoISQuaXNGdW5jdGlvbihwYW5lbC5tb2RlKSkge1xuICAgICAgICAgICAgICAgIHRocm93ICdwYW5lbC5tb2RlIGlzIG5vdCBmdW5jdGlvbic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhbmVsLmNoZWNrQnJvd3NlckNvbXBhdGliaWxpdHkoKTtcbiAgICAgICAgICAgIHBhbmVsLm1vZGUoJCwgcGFuZWwpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKCQoJy56Yy1wYW5lbC10ZW1wbGF0ZScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtdGVtcGxhdGUnKS5lbXB0eSgpLmFwcGVuZChgPGRpdiBjbGFzcz1cImVycm9yIG5vdGljZVwiPjxwPjxiPiR7cGFuZWwuZ2V0VmFyKCdicm93c2VyLWVycm9yLXRpdGxlJyl9PC9iPiA6ICR7ZXJyb3J9PC9wPjwvZGl2PmApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjd3Bib2R5LWNvbnRlbnQnKS5wcmVwZW5kKGA8ZGl2IGNsYXNzPVwiZXJyb3Igbm90aWNlXCI+PHA+PGI+JHtwYW5lbC5nZXRWYXIoJ2Jyb3dzZXItZXJyb3ItdGl0bGUnKX08L2I+IDogJHtlcnJvcn08L3A+PC9kaXY+YCk7XG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7cGFuZWwuZ2V0VmFyKCdicm93c2VyLWVycm9yLXRpdGxlJyl9IDogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gIyMjIyMjIyMjIyMjIyBQVUJMSUMgTUVUSE9EUyAjIyMjIyMjIyMjIyMjXG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBBZGQgY29udHJvbFxuICAgICAgICBhZGRDb250cm9sOiAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JyksXG4gICAgICAgICAgICAgICAgICBzY3JpcHRMb2NhdGlvbiA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmMsXG4gICAgICAgICAgICAgICAgICBkYXRhSCA9IHNjcmlwdExvY2F0aW9uLnNwbGl0KCcvJyksXG4gICAgICAgICAgICAgICAgICBjb250cm9sTmFtZSA9IGRhdGFIW2RhdGFILmxlbmd0aCAtIDVdO1xuXG4gICAgICAgICAgICBjb25zdCBjb250cm9sVmFycyA9IHBhbmVsLmdldFZhcignY29udHJvbHMnKVtjb250cm9sTmFtZV07XG4gICAgICAgICAgICBwYW5lbC5zZXJ2aWNlKCdjYWxsYmFjaycpLmFkZCgnY29udHJvbCcsIGNhbGxiYWNrLCBjb250cm9sVmFycyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gQWRkIG1vZGVcbiAgICAgICAgYWRkTW9kZTogKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBwYW5lbC5tb2RlID0gY2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICB9XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=