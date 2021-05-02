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









const $ = jQuery;

class Base extends _kernel__WEBPACK_IMPORTED_MODULE_0__.default {
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
            'footer-height': 56,    // Height of footer
            'header-height': 56,    // Height of header
            'height-FAH':    112,   // Height of footer & header
            'wp-body-height': 0,    // Wp body height

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
        this.service('callback', new _callback__WEBPACK_IMPORTED_MODULE_2__.default);
    }

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
     * @return {null} None
     * @since 1.0.0
     */
    menu() {
        this.service('menu', new _menu__WEBPACK_IMPORTED_MODULE_3__.default);
    }

    /**
     * Panel : Init callback of close block.
     * 
     * @return {null} None
     * @since 1.0.0
     */
    closeBlock() {
        this.service('close-block', new _close_block__WEBPACK_IMPORTED_MODULE_1__.default);
    }

    /**
     * Panel scroll bar
     * 
     * @return {null} None
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
     * @return {null} None
     * @since 1.0.0
     */
    noMetaScaleIfMobile() {
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
    condition() {
        new _condition__WEBPACK_IMPORTED_MODULE_4__.default(this);
    }

    /**
     * If some changes was made
     * 
     * @return {string} Message
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
     * @return {null} None
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
     * Controls initialization
     * 
     * @return {null} None
     * @since 1.0.0
     */
    controlInit() {
        this.service('callback').run('control', $, this);
    }

    /**
     * Tooltip
     * 
     * @return {null} None
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



const $ = jQuery;

class Callback {
    constructor() {
        this.callback = {};
    }

    /**
     * Add panel callback
     * 
     * @return {null} None
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
     * Run panel callback
     * 
     * @return {null} None
     * @since 1.0.0
     */
    run(name) {
        if (name !== undefined && name !== '') {
            const args = [].slice.apply(arguments);
            args.shift();

            if (this.callback[name] !== undefined) {
                for (let i in this.callback[name]) {
                    const pArgs = $.extend(true, [], args);

                    if (this.callback[name][i].additional !== undefined) {
                        pArgs.push(this.callback[name][i].additional);
                    }

                    this.callback[name][i].callback.apply(this, pArgs);
                };
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





const $ = jQuery;

class CloseBlock extends _kernel__WEBPACK_IMPORTED_MODULE_0__.default {
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
     * Show close block
     * 
     * @return {null} None
     * @since 1.0.0
     */
    show() {
        $('.zc-panel-controls__close-block').addClass('zc-panel-controls__close-block_active');
        this.isOpen++;
    }

    /**
     * Hide close block
     * 
     * @return {null} None
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
     * Hide block definitely
     * 
     * @return {null} None
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





const $ = jQuery;

class Condition extends _kernel__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor() {
        super();

        this.cache = {};
        this.regex = /(.+?):(notEmpty|empty|is|not|contains|<|<=|>|>=)\((.*?)\),?/g;

        this.firstStart();
        this.dataCaching();
        this.onChange();
    }

    /**
     * Initial parsing
     * 
     * @return {null} None
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
     * @return {null} None
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
     * @return {null} None
     * @since 1.0.0
     */
    parse(control, direct) {
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



const $ = jQuery;

class Kernel {
    constructor() {
        this.global = zc.getModuleData('panel');
    }

    /**
     * Panel scroll bar top
     * 
     * @return {null} None
     * @since 1.0.0
     */
    scrollbarTop() {
        $('.zc-panel .zc-scrollbar').scrollTop(0);
    }

    /**
     * Calculate panel height
     * 
     * @return {null} None
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
     * @return {null} None
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
     * Is desktop mode
     * 
     * @return {Boolean} Return "true" if body width is bigger then "min-size.mode2"
     * @since 1.0.0
     */
    isDesktopMode() {
        return ($('.zc-panel').width() >= this.getConfig('min-size/mode2'));
    }

     /**
     * Error check, in AJAX or other
     * 
     * @return {null} None
     * @since 1.0.0
     */
    errorCheck(msg, jqXHR) {
        if (!$('.zc-popup').hasClass('zc-panel-error-confirm')) {

            if ($('.zc-popup').length) {
                $('.zc-popup').remove();
            }

            console.error(msg);

            zc.confirm({
                title: `Error - ${jqXHR.statusText} : ${jqXHR.status}`,
                subject: `${msg} Page will be reloaded, ok?`,
                class: 'zc-panel-error-confirm',
                ok: () => {
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
    getVar(key, def) {
        const result = zc.deepFindAndSetting(this.global.vars, key);
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
    addVar(key, data) {
        zc.deepFindAndSetting(this.global.vars, key, data);
    }

    /**
     * Add global cache value
     * 
     * @param {string} key   Key/Path
     * @param {mix}    data  Cache value
     * @since 1.0.0
     */
    addCache(key, data) {
        zc.deepFindAndSetting(this.global.cache, key, data);
    }

    /**
     * Get global cache
     * 
     * @param {string} key   Key/Path
     * @param {mix}    def   If not found, return "def"
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
     * @param {string} key   Key/Path
     */
    remCache(key) {
        zc.deepFindAndSetting(this.global.cache, key, false, true);
    }

    /**
     * Add global config value
     * 
     * @param {string} key   Key/Path
     * @param {mix}    data  Config value
     * @since 1.0.0
     */
    addConfig(key, data) {
        zc.deepFindAndSetting(this.global.config, key, data);
    }

    /**
     * Get global config
     * 
     * @param {string} key   Key/Path
     * @param {mix}    def   If not found, return "def"
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

    on(events, selector, handler, preventDefault = false) {
        $('.zc-panel').on(events, selector, (event) => {
            if (preventDefault === true) {
                event.preventDefault();
            }

            handler.call(this, $(event.currentTarget), event);
        });
    }

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





const $ = jQuery;

class Menu extends _kernel__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor() {
        super();

        this.isSubmenuItem  = false;
        this.menuItemID     = false;
        this.menuItem       = false;
        this.submenuItem    = false;
        this.menuParentItem = false;

        this.desktop(); // Init desktop mode
        this.mobile();  // Init mobile mode
    }

    /**
     * Remove condition : submenu-active
     * 
     * @return {null} None
     * @since 1.0.0
     */
    removeSubmenuActive() {
        $('.zc-panel-menu').removeClass('zc-panel-menu_submenu-active');
        $('.zc-panel-content').removeClass('zc-panel-content_submenu-active');
    }

    /**
     * Add condition : submenu-active
     * 
     * @return {null} None
     * @since 1.0.0
     */
    addSubmenuActive() {
        $('.zc-panel-menu').addClass('zc-panel-menu_submenu-active');
        $('.zc-panel-content').addClass('zc-panel-content_submenu-active');
    }

    /**
     * Is submenu active
     * 
     * @return {null} None
     * @since 1.0.0
     */
    isSubmenuActive() {
        return ($('.zc-panel-menu').hasClass('zc-panel-menu_submenu-active') && $('.zc-panel-content').hasClass('zc-panel-content_submenu-active'));
    }

    /**
     * Display section
     * 
     * @return {null} None
     * @since 1.0.0
     */
    displaySection(menuItemID) {
        const menuItem = $(`.zc-panel-menu li[data-menu-item-id="${menuItemID}"]`);

        // Add icon
        const titleIconClass = menuItem.find('i').first().attr('class').match(/\bzc-icon-\S+/g)[0];
        $('.zc-panel-header__title-icon').removeClass((index, className) => {
            return (className.match(/\bzc-icon-\S+/g) || []).join(' ');
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
    }

    /**
     * Preparing menu item
     * 
     * @return {null} None
     * @since 1.0.0
     */
    prepMenuItem(menuItemID) {
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
    desktop() {
        let menuItemID = '';

        if ($.param.fragment()) {
            menuItemID = $.param.fragment() || '';
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

        this.displaySection(menuItemID);

        // When hash change
        $(window).on('hashchange.zc-panel', (event) => {
            let menuItemID = $.param.fragment() ? $.param.fragment() : '';

            if ($(`.zc-panel-menu li[data-menu-item-id="${menuItemID}"]`).length === 0) {
                menuItemID = undefined;
            }

            if (menuItemID !== undefined) {
                this.prepMenuItem(menuItemID);
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
     * @return {null} None
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
                    this.prepMenuItem(menuItemID);
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





zc.addModule('panel', ($) => {

    const panel = new _module_base__WEBPACK_IMPORTED_MODULE_0__.default;
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvYmFzZS5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2Nsb3NlLWJsb2NrLmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9jb25kaXRpb24uanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2tlcm5lbC5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvbWVudS5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ppbWJydWNvZGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ppbWJydWNvZGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvanF1ZXJ5LnBhbmVsLmVzNi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFD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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDOzs7Ozs7VUNuVEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFb0I7O0FBRWpDOztBQUVBLHNCQUFzQixpREFBSTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMEZBQTBGLG9DQUFvQyxTQUFTLE1BQU07QUFDN0ksYUFBYTtBQUNiLGdGQUFnRixvQ0FBb0MsU0FBUyxNQUFNO0FBQ25JLHlCQUF5QixvQ0FBb0MsS0FBSyxNQUFNO0FBQ3hFO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJmaWxlIjoic3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2pxdWVyeS5wYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBaaW1icnVDb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwvTW9kdWxlIDogQmFzZVxuICpcbiAqIEBhdXRob3IgIEp1bmp1bGluaVxuICogQHBhY2thZ2UgWmltYnJ1Q29kZVxuICogQHNpbmNlICAgWmltYnJ1Q29kZSAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEtlcm5lbCAgICAgZnJvbSAnLi9rZXJuZWwnO1xuaW1wb3J0IENsb3NlQmxvY2sgZnJvbSAnLi9jbG9zZS1ibG9jayc7XG5pbXBvcnQgQ2FsbGJhY2sgICBmcm9tICcuL2NhbGxiYWNrJztcbmltcG9ydCBNZW51ICAgICAgIGZyb20gJy4vbWVudSc7XG5pbXBvcnQgQ29uZGl0aW9uICBmcm9tICcuL2NvbmRpdGlvbic7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2UgZXh0ZW5kcyBLZXJuZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIC8vIEdsb2JhbCBjYWNoZVxuICAgICAgICB0aGlzLmdsb2JhbC5jYWNoZSA9IHtcbiAgICAgICAgICAgIGNoYW5nZWQ6IGZhbHNlLFxuICAgICAgICAgICAgc2VydmljZXM6IHt9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gR2xvYmFsIGNvbmZpZ1xuICAgICAgICB0aGlzLmdsb2JhbC5jb25maWcgPSB7XG5cbiAgICAgICAgICAgIC8vIFJpZ2h0IG1hcmdpblxuICAgICAgICAgICAncmlnaHQtbWFyZ2luJzoge1xuICAgICAgICAgICAgICAgIGRlc2t0b3A6IDIwLFxuICAgICAgICAgICAgICAgIG1vYmlsZTogMTBcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICdib3R0b20tbWFyZ2luJzogNDIsIFxuICAgICAgICAgICAgJ2Zvb3Rlci1oZWlnaHQnOiA1NiwgICAgLy8gSGVpZ2h0IG9mIGZvb3RlclxuICAgICAgICAgICAgJ2hlYWRlci1oZWlnaHQnOiA1NiwgICAgLy8gSGVpZ2h0IG9mIGhlYWRlclxuICAgICAgICAgICAgJ2hlaWdodC1GQUgnOiAgICAxMTIsICAgLy8gSGVpZ2h0IG9mIGZvb3RlciAmIGhlYWRlclxuICAgICAgICAgICAgJ3dwLWJvZHktaGVpZ2h0JzogMCwgICAgLy8gV3AgYm9keSBoZWlnaHRcblxuICAgICAgICAgICAgJ21pbi1zaXplJzoge1xuICAgICAgICAgICAgICAgICdib2R5LWhlaWdodCc6IDUwMCwgLy8gTWluIHBhbmVsIGJvZHkgaGVpZ2h0XG4gICAgICAgICAgICAgICAgbW9kZTE6IDQ5MCxcbiAgICAgICAgICAgICAgICBtb2RlMjogOTUwXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnd3AtYWRtaW4tYmFyLWhlaWdodCc6IDMyXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gR2xvYmFsIHZhcnNcbiAgICAgICAgdGhpcy5nbG9iYWwudmFycyA9IHpjUGFuZWxWYXJzO1xuXG4gICAgICAgIC8vIEFkZCBzZXJ2aWNlIDogQ2FsbGJhY2tcbiAgICAgICAgdGhpcy5zZXJ2aWNlKCdjYWxsYmFjaycsIG5ldyBDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgY2hlY2tCcm93c2VyQ29tcGF0aWJpbGl0eSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihhID0+IHt9KTtcbiAgICAgICAgICAgIG5ldyBSZXNpemVPYnNlcnZlcihhID0+IHt9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0VmFyKCdicm93c2VyLWVycm9yLXN1YmplY3QnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhbmVsIG1lbnVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgbWVudSgpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlKCdtZW51JywgbmV3IE1lbnUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhbmVsIDogSW5pdCBjYWxsYmFjayBvZiBjbG9zZSBibG9jay5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY2xvc2VCbG9jaygpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlKCdjbG9zZS1ibG9jaycsIG5ldyBDbG9zZUJsb2NrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYW5lbCBzY3JvbGwgYmFyXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHNjcm9sbGJhcigpIHtcbiAgICAgICAgaWYgKCF6Yy5pc01vYmlsZSgpICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpID09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBwcml2ID0ge307XG5cbiAgICAgICAgICAgIHByaXYuY2hlY2tJZkFjdGl2ZSA9IChwYXJlbnQsIGNoaWxkcmVuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50SGVpZ2h0ICAgPSBwYXJlbnQub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW5IZWlnaHQgPSBjaGlsZHJlbi5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRIZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbkhlaWdodCA+IHBhcmVudEhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFkZENsYXNzKCd6Yy1zY3JvbGxiYXJfYWN0aXZlJywpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNsYXNzKCd6Yy1zY3JvbGxiYXJfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBwcml2LnJvID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyaWVzWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdi5jaGVja0lmQWN0aXZlKCQoZW50cnkudGFyZ2V0KS5wYXJlbnQoKSwgJChlbnRyeS50YXJnZXQpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy56Yy1wYW5lbCAuemMtc2Nyb2xsYmFyJykuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJpdi5yby5vYnNlcnZlKCQoZWwpLmNoaWxkcmVuKCkuZmlyc3QoKS5nZXQoMCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQod2luZG93KS5vbignemMvcGFuZWwvc2l6ZS1jaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbCAuemMtc2Nyb2xsYmFyJykuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByaXYuY2hlY2tJZkFjdGl2ZSgkKGVsKSwgJChlbCkuY2hpbGRyZW4oKS5maXJzdCgpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIG1ldGEgdmlld3BvcnQgaWYgbW9iaWxlXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIG5vTWV0YVNjYWxlSWZNb2JpbGUoKSB7XG4gICAgICAgIGlmICh6Yy5pc01vYmlsZSgpKSB7XG4gICAgICAgICAgICAkKCdoZWFkIG1ldGFbbmFtZT12aWV3cG9ydF0nKS5hdHRyKCdjb250ZW50JywgJ3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPTAnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhbmVsIGNvbmRpdGlvbiBjaGVja2VyLlxuICAgICAqIFxuICAgICAqIEB0eXBlICB7T2JqZWN0fVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNvbmRpdGlvbigpIHtcbiAgICAgICAgbmV3IENvbmRpdGlvbih0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiBzb21lIGNoYW5nZXMgd2FzIG1hZGVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IE1lc3NhZ2VcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBpZkNoYW5nZWQoKSB7XG4gICAgICAgICQod2luZG93KS5vbignYmVmb3JldW5sb2FkLnpjLXBhbmVsJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Q2FjaGUoJ2NoYW5nZWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhcignaWYtY2hhbmdlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb250cm9sIGhlbHBcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY29udHJvbEhlbHAoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgd2lkdGg6IDYwMCxcbiAgICAgICAgICAgIGhlaWdodDogMjUwXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jbGljaygnLnpjLXBhbmVsLWhlbHBfX3N0YXJ0ZXJfdHlwZV9zaW1wbGUnLCAoJHRoaXMpID0+IHtcbiAgICAgICAgICAgIGxldCBzZXR0aW5ncyA9ICR0aGlzLmRhdGEoJ3NldHRpbmdzJyk7XG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MgPT09IHVuZGVmaW5lZCB8fCBzZXR0aW5ncyA9PT0gJycgfHwgc2V0dGluZ3MgPT0gbnVsbCkgc2V0dGluZ3MgPSB7fTtcblxuICAgICAgICAgICAgZGVmYXVsdHMudGl0bGUgPSAkdGhpcy5hdHRyKCd0aXRsZScpO1xuICAgICAgICAgICAgZGVmYXVsdHMuaHRtbCAgPSAkdGhpcy5wYXJlbnQoKS5maW5kKCcuemMtcGFuZWwtaGVscF9fY29udGVudCcpLnRleHQoKTtcblxuICAgICAgICAgICAgemMucG9wdXAoKS5hZGQoJC5leHRlbmQoe30sIGRlZmF1bHRzLCBzZXR0aW5ncykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb250cm9scyBpbml0aWFsaXphdGlvblxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjb250cm9sSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlKCdjYWxsYmFjaycpLnJ1bignY29udHJvbCcsICQsIHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvb2x0aXBcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgdG9vbHRpcCgpIHtcbiAgICAgICAgaWYgKHpjLmlzTW9iaWxlKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwgW2RhdGEtdG9vbHRpcF0nKS50aXBzeSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdkYXRhLXRvb2x0aXAnLFxuICAgICAgICAgICAgICAgIGdyYXZpdHk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSAkKHRoaXMpLmRhdGEoJ3Rvb2x0aXAtcG9zaXRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdzJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ24nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ24nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnbic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9mZnNldDogMyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgWmltYnJ1Q29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZSA6IENhbGxiYWNrXG4gKlxuICogQGF1dGhvciAgSnVuanVsaW5pXG4gKiBAcGFja2FnZSBaaW1icnVDb2RlXG4gKiBAc2luY2UgICBaaW1icnVDb2RlIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsYmFjayB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgcGFuZWwgY2FsbGJhY2tcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkKG5hbWUsIGNhbGxiYWNrLCBhZGRpdGlvbmFsKSB7XG4gICAgICAgIGlmICgkLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYWxsYmFja1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFja1tuYW1lXSA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrW25hbWVdLnB1c2goe1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgICAgICAgICBhZGRpdGlvbmFsOiBhZGRpdGlvbmFsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICAvKipcbiAgICAgKiBSdW4gcGFuZWwgY2FsbGJhY2tcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgcnVuKG5hbWUpIHtcbiAgICAgICAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCAmJiBuYW1lICE9PSAnJykge1xuICAgICAgICAgICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmFwcGx5KGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBhcmdzLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNhbGxiYWNrW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuY2FsbGJhY2tbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcEFyZ3MgPSAkLmV4dGVuZCh0cnVlLCBbXSwgYXJncyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2tbbmFtZV1baV0uYWRkaXRpb25hbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwQXJncy5wdXNoKHRoaXMuY2FsbGJhY2tbbmFtZV1baV0uYWRkaXRpb25hbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrW25hbWVdW2ldLmNhbGxiYWNrLmFwcGx5KHRoaXMsIHBBcmdzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBaaW1icnVDb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwvTW9kdWxlIDogQ2xvc2VCbG9ja1xuICpcbiAqIEBhdXRob3IgIEp1bmp1bGluaVxuICogQHBhY2thZ2UgWmltYnJ1Q29kZVxuICogQHNpbmNlICAgWmltYnJ1Q29kZSAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEtlcm5lbCBmcm9tICcuL2tlcm5lbCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb3NlQmxvY2sgZXh0ZW5kcyBLZXJuZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaXNPcGVuID0gMDtcblxuICAgICAgICB0aGlzLmNsaWNrKCcuemMtcGFuZWwtY29udHJvbHNfX2Nsb3NlLWJsb2NrJywgKCkgPT4ge1xuICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL2Nsb3NlLWJsb2NrJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQod2luZG93KS5vbignemMvY2xvc2UtYmxvY2svc2hvdycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3pjL2Nsb3NlLWJsb2NrL2hpZGUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCd6Yy9jbG9zZS1ibG9jay9oaWRlLWRlZmluaXRlbHknLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGVEZWZpbml0ZWx5KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgY2xvc2UgYmxvY2tcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgc2hvdygpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRyb2xzX19jbG9zZS1ibG9jaycpLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19fY2xvc2UtYmxvY2tfYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuaXNPcGVuKys7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBjbG9zZSBibG9ja1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBoaWRlKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4gPT09IDEpIHtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250cm9sc19fY2xvc2UtYmxvY2snKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX2Nsb3NlLWJsb2NrX2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc09wZW4tLTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT3BlbiA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzT3BlbiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIGJsb2NrIGRlZmluaXRlbHlcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaGlkZURlZmluaXRlbHkoKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbC1jb250cm9sc19fY2xvc2UtYmxvY2snKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX2Nsb3NlLWJsb2NrX2FjdGl2ZScpO1xuICAgICAgICB0aGlzLmlzT3BlbiA9IDA7XG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9jbG9zZS1ibG9jaycpO1xuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgWmltYnJ1Q29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZSA6IENvbmRpdGlvblxuICpcbiAqIEBhdXRob3IgIEp1bmp1bGluaVxuICogQHBhY2thZ2UgWmltYnJ1Q29kZVxuICogQHNpbmNlICAgWmltYnJ1Q29kZSAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEtlcm5lbCBmcm9tICcuL2tlcm5lbCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmRpdGlvbiBleHRlbmRzIEtlcm5lbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLnJlZ2V4ID0gLyguKz8pOihub3RFbXB0eXxlbXB0eXxpc3xub3R8Y29udGFpbnN8PHw8PXw+fD49KVxcKCguKj8pXFwpLD8vZztcblxuICAgICAgICB0aGlzLmZpcnN0U3RhcnQoKTtcbiAgICAgICAgdGhpcy5kYXRhQ2FjaGluZygpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCBwYXJzaW5nXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGZpcnN0U3RhcnQoKSB7XG4gICAgICAgICQod2luZG93KS5vbignemMvcGFuZWwvbWVudS9pdGVtLWNoYW5nZS1JQ1AnLCAoZXZlbnQsIHNlY3Rpb24pID0+IHtcbiAgICAgICAgICAgIGlmIChzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgc2VjdGlvbi5maW5kKCdbZGF0YS1jb25kaXRpb25dJykuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2UoJChlbCksIHRydWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsIC56Yy1wYW5lbC1jb250cm9scycpLm9uKCdjaGFuZ2UnLCAnW2RhdGEtb3B0aW9uXScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBsZXQgbmFtZSAgPSAkdGhpcy5hdHRyKCduYW1lJykgfHwgJyc7XG5cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoJ1tdJywgJycpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jYWNoZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgJC5lYWNoKHRoaXMuY2FjaGVbbmFtZV0sIChpbmRleCwgZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZShlbCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkdGhpcy5kYXRhKCdpJykgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2FjaGUoJ2NoYW5nZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvaWYtY2hhbmdlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhY2hlIGRhdGFcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZGF0YUNhY2hpbmcoKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbCAuemMtcGFuZWwtY29udHJvbHMgW2RhdGEtY29uZGl0aW9uXScpLmVhY2goKGluZGV4LCBlbCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1hdGNoO1xuXG4gICAgICAgICAgICB3aGlsZSAobWF0Y2ggPSB0aGlzLnJlZ2V4LmV4ZWMoJChlbCkuZGF0YSgnY29uZGl0aW9uJykpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IHRoaXMuZ2V0VmFyKCdwcmVmaXgtc2x1ZycpICsgbWF0Y2hbMV07XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWNoZVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZVtrZXldID0gW107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVtrZXldLnB1c2goJChlbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSBieSBjb25kaXRpb25zXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHBhcnNlKGNvbnRyb2wsIGRpcmVjdCkge1xuICAgICAgICBsZXQgcGFzc2VkLFxuICAgICAgICAgICAgY29uZGl0aW9ucyA9IHRoaXMucHJlcENvbmRpdGlvbnMoY29udHJvbC5kYXRhKCdjb25kaXRpb24nKSksXG4gICAgICAgICAgICBvcGVyYXRvciAgID0gKGNvbnRyb2wuZGF0YSgnY29uZGl0aW9uLW9wZXJhdG9yJykgfHwgJ2FuZCcpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgJC5lYWNoKGNvbmRpdGlvbnMsIChpbmRleCwgY29uZGl0aW9uKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gJChgLnpjLXBhbmVsIC56Yy1wYW5lbC1jb250cm9scyBbbmFtZT0ke3RoaXMuZ2V0VmFyKCdwcmVmaXgtc2x1ZycpfSR7Y29uZGl0aW9uLmNoZWNrfV1gKTtcblxuICAgICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGggPiAwICYmIHRhcmdldC5pcygnW2RhdGEtb3B0aW9uXScpKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gJChgLnpjLXBhbmVsIC56Yy1wYW5lbC1jb250cm9scyBbaWQ9JHt0aGlzLmdldFZhcigncHJlZml4LXNsdWcnKX0ke2NvbmRpdGlvbi5jaGVja31dYCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Lmxlbmd0aCA+IDAgJiYgdGFyZ2V0LmlzKCdbZGF0YS1vcHRpb25dJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2MSA9IHRhcmdldC52YWwoKSAhPT0gbnVsbCA/IHRhcmdldC52YWwoKS50b1N0cmluZygpIDogJyc7XG4gICAgICAgICAgICAgICAgY29uc3QgdjIgPSBjb25kaXRpb24udmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChjb25kaXRpb24ucnVsZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IChwYXJzZUludCh2MSkgPCBwYXJzZUludCh2MikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IChwYXJzZUludCh2MSkgPD0gcGFyc2VJbnQodjIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IChwYXJzZUludCh2MSkgPiBwYXJzZUludCh2MikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IChwYXJzZUludCh2MSkgPj0gcGFyc2VJbnQodjIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjb250YWlucyc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAodjEuaW5kZXhPZih2MikgIT09IC0xID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdpcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAodjEgPT0gdjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ25vdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAodjEgIT0gdjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ25vdEVtcHR5JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHYxID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VtcHR5JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICF2MSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgndW5kZWZpbmVkJyA9PSB0eXBlb2YgcGFzc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhc3NlZCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ29yJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NlZCA9IChwYXNzZWQgfHwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdhbmQnOlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc2VkID0gKHBhc3NlZCAmJiByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZGlyZWN0ICYmIGRpcmVjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbC5hZGRDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX2l0ZW1fc2hvdycpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2wuZGF0YSgnY29uZGl0aW9uLXNob3cnLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udHJvbC5hZGRDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX2l0ZW1faGlkZScpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2wuZGF0YSgnY29uZGl0aW9uLXNob3cnLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wuZGF0YSgnY29uZGl0aW9uLXNob3cnKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19faXRlbV9oaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2wuYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19pdGVtX3Nob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbC5kYXRhKCdjb25kaXRpb24tc2hvdycsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wuZGF0YSgnY29uZGl0aW9uLXNob3cnKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbC5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX2l0ZW1fc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19faXRlbV9oaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2wuZGF0YSgnY29uZGl0aW9uLXNob3cnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGFzc2VkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZXBhcmluZyBjb25kaXRpb25zXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHByZXBDb25kaXRpb25zKGNvbmRpdGlvbikge1xuICAgICAgICBsZXQgbWF0Y2gsXG4gICAgICAgICAgICBjb25kaXRpb25zID0gW107XG5cbiAgICAgICAgd2hpbGUgKG1hdGNoID0gdGhpcy5yZWdleC5leGVjKGNvbmRpdGlvbikpIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgJ2NoZWNrJzogbWF0Y2hbMV0sXG4gICAgICAgICAgICAgICAgJ3J1bGUnOiAgbWF0Y2hbMl0sXG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogbWF0Y2hbM10gfHwgJydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbmRpdGlvbnM7XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBaaW1icnVDb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwvTW9kdWxlIDogS2VybmVsXG4gKlxuICogQGF1dGhvciAgSnVuanVsaW5pXG4gKiBAcGFja2FnZSBaaW1icnVDb2RlXG4gKiBAc2luY2UgICBaaW1icnVDb2RlIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXJuZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdsb2JhbCA9IHpjLmdldE1vZHVsZURhdGEoJ3BhbmVsJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFuZWwgc2Nyb2xsIGJhciB0b3BcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgc2Nyb2xsYmFyVG9wKCkge1xuICAgICAgICAkKCcuemMtcGFuZWwgLnpjLXNjcm9sbGJhcicpLnNjcm9sbFRvcCgwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgcGFuZWwgaGVpZ2h0XG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNhbGNIZWlnaHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmdldENhY2hlKCd3cC1ib2R5LWhlaWdodCcpICE9PSAkKHdpbmRvdykuaGVpZ2h0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FjaGUoJ3dwLWJvZHktaGVpZ2h0JywgJCh3aW5kb3cpLmhlaWdodCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVyYXNlIG1vYmlsZSBtZW51XG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGVyYXNlTW9iaWxlTWVudSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZXNrdG9wTW9kZSgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZXJ2aWNlKCdtZW51L2lzU3VibWVudUl0ZW0nKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1tZW51JykuYWRkQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250ZW50X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwtbWVudScpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1tZW51X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250ZW50X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250ZW50X21vYmlsZS1tZW51LXZpc2libGUnKTtcbiAgICAgICAgJCgnLnpjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudScpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnVfYWN0aXZlJyk7XG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlKCdjbG9zZS1ibG9jaycpLmhpZGVEZWZpbml0ZWx5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXMgZGVza3RvcCBtb2RlXG4gICAgICogXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJuIFwidHJ1ZVwiIGlmIGJvZHkgd2lkdGggaXMgYmlnZ2VyIHRoZW4gXCJtaW4tc2l6ZS5tb2RlMlwiXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaXNEZXNrdG9wTW9kZSgpIHtcbiAgICAgICAgcmV0dXJuICgkKCcuemMtcGFuZWwnKS53aWR0aCgpID49IHRoaXMuZ2V0Q29uZmlnKCdtaW4tc2l6ZS9tb2RlMicpKTtcbiAgICB9XG5cbiAgICAgLyoqXG4gICAgICogRXJyb3IgY2hlY2ssIGluIEFKQVggb3Igb3RoZXJcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZXJyb3JDaGVjayhtc2csIGpxWEhSKSB7XG4gICAgICAgIGlmICghJCgnLnpjLXBvcHVwJykuaGFzQ2xhc3MoJ3pjLXBhbmVsLWVycm9yLWNvbmZpcm0nKSkge1xuXG4gICAgICAgICAgICBpZiAoJCgnLnpjLXBvcHVwJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBvcHVwJykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcblxuICAgICAgICAgICAgemMuY29uZmlybSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGBFcnJvciAtICR7anFYSFIuc3RhdHVzVGV4dH0gOiAke2pxWEhSLnN0YXR1c31gLFxuICAgICAgICAgICAgICAgIHN1YmplY3Q6IGAke21zZ30gUGFnZSB3aWxsIGJlIHJlbG9hZGVkLCBvaz9gLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAnemMtcGFuZWwtZXJyb3ItY29uZmlybScsXG4gICAgICAgICAgICAgICAgb2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZ2xvYmFsIHZhclxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkZWYgICBJZiBub3QgZm91bmQsIHJldHVybiBcImRlZlwiXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0VmFyKGtleSwgZGVmKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC52YXJzLCBrZXkpO1xuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGdsb2JhbCB2YXIgdmFsdWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGF0YSAgVmFyIHZhbHVlXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkVmFyKGtleSwgZGF0YSkge1xuICAgICAgICB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwudmFycywga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZ2xvYmFsIGNhY2hlIHZhbHVlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRhdGEgIENhY2hlIHZhbHVlXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkQ2FjaGUoa2V5LCBkYXRhKSB7XG4gICAgICAgIHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jYWNoZSwga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZ2xvYmFsIGNhY2hlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRlZiAgIElmIG5vdCBmb3VuZCwgcmV0dXJuIFwiZGVmXCJcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBnZXRDYWNoZShrZXksIGRlZikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwuY2FjaGUsIGtleSk7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkZWY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVsZW1lbnQgZnJvbSBjYWNoZSBvYmplY3RcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKi9cbiAgICByZW1DYWNoZShrZXkpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNhY2hlLCBrZXksIGZhbHNlLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZ2xvYmFsIGNvbmZpZyB2YWx1ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkYXRhICBDb25maWcgdmFsdWVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRDb25maWcoa2V5LCBkYXRhKSB7XG4gICAgICAgIHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jb25maWcsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGdsb2JhbCBjb25maWdcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGVmICAgSWYgbm90IGZvdW5kLCByZXR1cm4gXCJkZWZcIlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGdldENvbmZpZyhrZXksIGRlZikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwuY29uZmlnLCBrZXkpO1xuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VydmljZShuYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAobmFtZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihjYWxsYmFjaykgfHwgdHlwZW9mIGNhbGxiYWNrID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2FjaGUoYHNlcnZpY2VzLyR7bmFtZX1gLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmdldENhY2hlKGBzZXJ2aWNlcy8ke25hbWV9YCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGlmIChzZXJ2aWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXh0IHNlcnZpY2Ugbm90IGV4aXN0IDogJHtuYW1lfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uKGV2ZW50cywgc2VsZWN0b3IsIGhhbmRsZXIsIHByZXZlbnREZWZhdWx0ID0gZmFsc2UpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsJykub24oZXZlbnRzLCBzZWxlY3RvciwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJldmVudERlZmF1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgJChldmVudC5jdXJyZW50VGFyZ2V0KSwgZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGljayhzZWxlY3RvciwgaGFuZGxlciwgcHJldmVudERlZmF1bHQgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMub24oJ2NsaWNrJywgc2VsZWN0b3IsIGhhbmRsZXIsIHByZXZlbnREZWZhdWx0KTtcbiAgICB9XG59IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFppbWJydUNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBQYW5lbC9Nb2R1bGUgOiBNZW51XG4gKlxuICogQGF1dGhvciAgSnVuanVsaW5pXG4gKiBAcGFja2FnZSBaaW1icnVDb2RlXG4gKiBAc2luY2UgICBaaW1icnVDb2RlIDEuMC4wXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgS2VybmVsIGZyb20gJy4va2VybmVsJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIEtlcm5lbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pc1N1Ym1lbnVJdGVtICA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lbnVJdGVtSUQgICAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVudUl0ZW0gICAgICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdWJtZW51SXRlbSAgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lbnVQYXJlbnRJdGVtID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5kZXNrdG9wKCk7IC8vIEluaXQgZGVza3RvcCBtb2RlXG4gICAgICAgIHRoaXMubW9iaWxlKCk7ICAvLyBJbml0IG1vYmlsZSBtb2RlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGNvbmRpdGlvbiA6IHN1Ym1lbnUtYWN0aXZlXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHJlbW92ZVN1Ym1lbnVBY3RpdmUoKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbC1tZW51JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udGVudF9zdWJtZW51LWFjdGl2ZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBjb25kaXRpb24gOiBzdWJtZW51LWFjdGl2ZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRTdWJtZW51QWN0aXZlKCkge1xuICAgICAgICAkKCcuemMtcGFuZWwtbWVudScpLmFkZENsYXNzKCd6Yy1wYW5lbC1tZW51X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykuYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfc3VibWVudS1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJcyBzdWJtZW51IGFjdGl2ZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBpc1N1Ym1lbnVBY3RpdmUoKSB7XG4gICAgICAgIHJldHVybiAoJCgnLnpjLXBhbmVsLW1lbnUnKS5oYXNDbGFzcygnemMtcGFuZWwtbWVudV9zdWJtZW51LWFjdGl2ZScpICYmICQoJy56Yy1wYW5lbC1jb250ZW50JykuaGFzQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfc3VibWVudS1hY3RpdmUnKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheSBzZWN0aW9uXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGRpc3BsYXlTZWN0aW9uKG1lbnVJdGVtSUQpIHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSAkKGAuemMtcGFuZWwtbWVudSBsaVtkYXRhLW1lbnUtaXRlbS1pZD1cIiR7bWVudUl0ZW1JRH1cIl1gKTtcblxuICAgICAgICAvLyBBZGQgaWNvblxuICAgICAgICBjb25zdCB0aXRsZUljb25DbGFzcyA9IG1lbnVJdGVtLmZpbmQoJ2knKS5maXJzdCgpLmF0dHIoJ2NsYXNzJykubWF0Y2goL1xcYnpjLWljb24tXFxTKy9nKVswXTtcbiAgICAgICAgJCgnLnpjLXBhbmVsLWhlYWRlcl9fdGl0bGUtaWNvbicpLnJlbW92ZUNsYXNzKChpbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKGNsYXNzTmFtZS5tYXRjaCgvXFxiemMtaWNvbi1cXFMrL2cpIHx8IFtdKS5qb2luKCcgJyk7XG4gICAgICAgIH0pLmFkZENsYXNzKHRpdGxlSWNvbkNsYXNzKTtcblxuICAgICAgICAvLyBBZGQgdGl0bGVcbiAgICAgICAgJCgnLnpjLXBhbmVsLWhlYWRlcl9fdGl0bGUnKS50ZXh0KG1lbnVJdGVtLmZpbmQoJ3NwYW4nKS50ZXh0KCkpO1xuXG4gICAgICAgIC8vIFJlbW92ZSAvIGFjdGl2ZSBjb250ZW50IHNlY3Rpb25cbiAgICAgICAgaWYgKHRoaXMubWVudUl0ZW1JRCkge1xuICAgICAgICAgICAgJChgLnpjLXBhbmVsLWNvbnRyb2xzX19zZWN0aW9uW2RhdGEtc2VjdGlvbj1cIiR7dGhpcy5tZW51SXRlbUlEfVwiXWApLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19fc2VjdGlvbl9hY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSAkKGAuemMtcGFuZWwtY29udHJvbHNfX3NlY3Rpb25bZGF0YS1zZWN0aW9uPVwiJHttZW51SXRlbUlEfVwiXWApO1xuXG4gICAgICAgIHNlY3Rpb24uYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19zZWN0aW9uX2FjdGl2ZScpO1xuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvbWVudS9pdGVtLWNoYW5nZScpO1xuICAgICAgICB0aGlzLmFkZENhY2hlKCdtZW51L2N1cnJlbnQtc2VjdGlvbicsIHNlY3Rpb24pO1xuXG4gICAgICAgIGlmICghc2VjdGlvbi5oYXNDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX3NlY3Rpb25fSUNQJykpIHtcbiAgICAgICAgICAgIHNlY3Rpb24uYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19zZWN0aW9uX0lDUCcpO1xuXG4gICAgICAgICAgICAvLyBFdmVudFxuICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3pjL3BhbmVsL21lbnUvaXRlbS1jaGFuZ2UtSUNQJywgW3NlY3Rpb25dKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSAvIGFjdGl2ZSBtZW51IGl0ZW1cbiAgICAgICAgaWYgKG1lbnVJdGVtLnBhcmVudCgpLmhhc0NsYXNzKCd6Yy1wYW5lbC1zdWJtZW51X19saXN0JykpIHtcbiAgICAgICAgICAgIGxldCBzdWJtZW51SXRlbSA9IG1lbnVJdGVtLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpO1xuXG4gICAgICAgICAgICBpZiAoc3VibWVudUl0ZW0uaGFzQ2xhc3MoJ3pjLXBhbmVsLXN1Ym1lbnVfX3Njcm9sbGJhci1jb250YWluZXInKSkge1xuICAgICAgICAgICAgICAgIHN1Ym1lbnVJdGVtID0gc3VibWVudUl0ZW0ucGFyZW50KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN1Ym1lbnVJdGVtLmFkZENsYXNzKCd6Yy1wYW5lbC1zdWJtZW51X19jb250YWluZXJfYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHN1Ym1lbnVJdGVtSUQgID0gc3VibWVudUl0ZW0uZGF0YSgnbWVudS1jb250YWluZXItaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVQYXJlbnRJdGVtID0gJChgLnpjLXBhbmVsLW1lbnVfX2l0ZW1fdHlwZV9wYXJlbnRbZGF0YS1tZW51LWNvbnRhaW5lci1pZD1cIiR7c3VibWVudUl0ZW1JRH1cIl1gKTtcblxuICAgICAgICAgICAgbWVudUl0ZW0uYWRkQ2xhc3MoJ3pjLXBhbmVsLXN1Ym1lbnVfX2l0ZW1fYWN0aXZlJyk7XG4gICAgICAgICAgICBtZW51UGFyZW50SXRlbS5hZGRDbGFzcygnemMtcGFuZWwtbWVudV9faXRlbV9hY3RpdmUnKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU3VibWVudUFjdGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTdWJtZW51QWN0aXZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCBnbG9iYWwgZGF0YVxuICAgICAgICAgICAgdGhpcy5pc1N1Ym1lbnVJdGVtICA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnN1Ym1lbnVJdGVtICAgID0gc3VibWVudUl0ZW07XG4gICAgICAgICAgICB0aGlzLm1lbnVQYXJlbnRJdGVtID0gbWVudVBhcmVudEl0ZW07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51SXRlbS5hZGRDbGFzcygnemMtcGFuZWwtbWVudV9faXRlbV9hY3RpdmUnKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTdWJtZW51QWN0aXZlKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVN1Ym1lbnVBY3RpdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWRkIGdsb2JhbCBkYXRhXG4gICAgICAgICAgICB0aGlzLmlzU3VibWVudUl0ZW0gID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnN1Ym1lbnVJdGVtICAgID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm1lbnVQYXJlbnRJdGVtID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgZ2xvYmFsIGRhdGFcbiAgICAgICAgdGhpcy5tZW51SXRlbSAgID0gbWVudUl0ZW07XG4gICAgICAgIHRoaXMubWVudUl0ZW1JRCA9IG1lbnVJdGVtSUQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJlcGFyaW5nIG1lbnUgaXRlbVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBwcmVwTWVudUl0ZW0obWVudUl0ZW1JRCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdWJtZW51SXRlbSkge1xuICAgICAgICAgICAgdGhpcy5tZW51SXRlbS5yZW1vdmVDbGFzcygnemMtcGFuZWwtbWVudV9faXRlbV9hY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVNlY3Rpb24obWVudUl0ZW1JRCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lbnVJdGVtLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1zdWJtZW51X19pdGVtX2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5tZW51UGFyZW50SXRlbS5yZW1vdmVDbGFzcygnemMtcGFuZWwtbWVudV9faXRlbV9hY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuc3VibWVudUl0ZW0ucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLXN1Ym1lbnVfX2NvbnRhaW5lcl9hY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVNlY3Rpb24obWVudUl0ZW1JRCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCAuemMtc2Nyb2xsYmFyJykuc2Nyb2xsVG9wKDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2t0b3AgbW9kZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBkZXNrdG9wKCkge1xuICAgICAgICBsZXQgbWVudUl0ZW1JRCA9ICcnO1xuXG4gICAgICAgIGlmICgkLnBhcmFtLmZyYWdtZW50KCkpIHtcbiAgICAgICAgICAgIG1lbnVJdGVtSUQgPSAkLnBhcmFtLmZyYWdtZW50KCkgfHwgJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJChgLnpjLXBhbmVsLW1lbnUgbGlbZGF0YS1tZW51LWl0ZW0taWQ9XCIke21lbnVJdGVtSUR9XCJdYCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBsZXQgbWVudUl0ZW0gPSAkKCcuemMtcGFuZWwtbWVudV9fbGlzdCAuemMtcGFuZWwtbWVudV9faXRlbV90eXBlX3NpbXBsZScpLmZpcnN0KCk7XG4gICAgICAgICAgICBtZW51SXRlbUlEID0gbWVudUl0ZW0uZGF0YSgnbWVudS1pdGVtLWlkJyk7XG5cbiAgICAgICAgICAgIGlmICghbWVudUl0ZW1JRCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1lbnVJdGVtSUQgPSBtZW51SXRlbS5kYXRhKCdtZW51LWNvbnRhaW5lci1pZCcpO1xuXG4gICAgICAgICAgICAgICAgbWVudUl0ZW0gPSAkKGAuemMtcGFuZWwtc3VibWVudV9fY29udGFpbmVyW2RhdGEtbWVudS1jb250YWluZXItaWQ9JHtzdWJtZW51SXRlbUlEfV0gLnpjLXBhbmVsLXN1Ym1lbnVfX2l0ZW1fdHlwZV9zaW1wbGVgKS5maXJzdCgpO1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtSUQgPSBtZW51SXRlbS5kYXRhKCdtZW51LWl0ZW0taWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcGxheVNlY3Rpb24obWVudUl0ZW1JRCk7XG5cbiAgICAgICAgLy8gV2hlbiBoYXNoIGNoYW5nZVxuICAgICAgICAkKHdpbmRvdykub24oJ2hhc2hjaGFuZ2UuemMtcGFuZWwnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGxldCBtZW51SXRlbUlEID0gJC5wYXJhbS5mcmFnbWVudCgpID8gJC5wYXJhbS5mcmFnbWVudCgpIDogJyc7XG5cbiAgICAgICAgICAgIGlmICgkKGAuemMtcGFuZWwtbWVudSBsaVtkYXRhLW1lbnUtaXRlbS1pZD1cIiR7bWVudUl0ZW1JRH1cIl1gKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUlEID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWVudUl0ZW1JRCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmVwTWVudUl0ZW0obWVudUl0ZW1JRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFdoZW4gY2xpY2sgb24gcGFyZW50IG1lbnUgaXRlbVxuICAgICAgICB0aGlzLmNsaWNrKCcuemMtcGFuZWwtbWVudV9faXRlbV90eXBlX3BhcmVudCcsICgkdGhpcykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VibWVudUl0ZW1JRCA9ICR0aGlzLmRhdGEoJ21lbnUtY29udGFpbmVyLWlkJyk7XG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbSAgICAgID0gJChgLnpjLXBhbmVsLXN1Ym1lbnVfX2NvbnRhaW5lcltkYXRhLW1lbnUtY29udGFpbmVyLWlkPSR7c3VibWVudUl0ZW1JRH1dIC56Yy1wYW5lbC1zdWJtZW51X19pdGVtX3R5cGVfc2ltcGxlYCkuZmlyc3QoKTtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtSUQgICAgPSBtZW51SXRlbS5kYXRhKCdtZW51LWl0ZW0taWQnKTtcblxuICAgICAgICAgICAgaWYgKG1lbnVJdGVtSUQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gbWVudUl0ZW1JRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gV2hlbiBjbGljayBvbiBtZW51IGl0ZW1cbiAgICAgICAgdGhpcy5jbGljaygnLnpjLXBhbmVsLW1lbnVfX2l0ZW1fdHlwZV9zaW1wbGU6bm90KC56Yy1wYW5lbC1tZW51X19pdGVtX2FjdGl2ZSknLCAoJHRoaXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtSUQgPSAkdGhpcy5kYXRhKCdtZW51LWl0ZW0taWQnKTtcblxuICAgICAgICAgICAgaWYgKG1lbnVJdGVtSUQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gbWVudUl0ZW1JRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvLyBXaGVuIGNsaWNrIG9uIHN1Ym1lbnUgaXRlbVxuICAgICAgICB0aGlzLmNsaWNrKCcuemMtcGFuZWwtc3VibWVudV9faXRlbV90eXBlX3NpbXBsZTpub3QoLnpjLXBhbmVsLXN1Ym1lbnVfX2l0ZW1fYWN0aXZlKScsICgkdGhpcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVudUl0ZW1JRCA9ICR0aGlzLmRhdGEoJ21lbnUtaXRlbS1pZCcpO1xuXG4gICAgICAgICAgICBpZiAobWVudUl0ZW1JRCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gbWVudUl0ZW1JRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW9iaWxlIG1vZGVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgbW9iaWxlKCkge1xuICAgICAgICB0aGlzLmNsaWNrKCcuemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51JywgKCR0aGlzKSA9PiB7XG4gICAgICAgICAgICBpZiAoJHRoaXMuaGFzQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudV9hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnVfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udGVudF9tb2JpbGUtbWVudS12aXNpYmxlJyk7XG5cbiAgICAgICAgICAgICAgICAkdGhpcy5vbmUoJ3RyYW5zaXRpb25lbmQgd2Via2l0VHJhbnNpdGlvbkVuZCBvVHJhbnNpdGlvbkVuZCBNU1RyYW5zaXRpb25FbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250cm9scycpLmhlaWdodCgnYXV0bycpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlKCdjbG9zZS1ibG9jaycpLmhpZGVEZWZpbml0ZWx5KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnVfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRlbnQnKS5hZGRDbGFzcygnemMtcGFuZWwtY29udGVudF9tb2JpbGUtbWVudS12aXNpYmxlJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgaW5pdE5hdkhlaWdodCA9ICQoJy56Yy1wYW5lbC1tZW51X19jb250YWluZXInKS5oZWlnaHQoKSxcbiAgICAgICAgICAgICAgICAgICAgbmF2SGVpZ2h0ICAgICA9ICQoJy56Yy1wYW5lbC1tZW51X19saXN0JykuaGVpZ2h0KCkgKyB0aGlzLmdldENvbmZpZygnaGVpZ2h0LUZBSCcpLFxuICAgICAgICAgICAgICAgICAgICBjb250cm9sc0hlaWdodCAgPSAkKCcuemMtcGFuZWwtY29udHJvbHMnKS5oZWlnaHQoKTtcblxuICAgICAgICAgICAgICAgIGlmIChpbml0TmF2SGVpZ2h0ID4gbmF2SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hdkhlaWdodCA9IGluaXROYXZIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG5hdkhlaWdodCA+IGNvbnRyb2xzSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250cm9scycpLmhlaWdodChuYXZIZWlnaHQgLSB0aGlzLmdldENvbmZpZygnaGVpZ2h0LUZBSCcpKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLXN1Ym1lbnVfX3Njcm9sbGJhci1jb250YWluZXInKS5oZWlnaHQobmF2SGVpZ2h0IC0gdGhpcy5nZXRDb25maWcoJ2hlYWRlci1oZWlnaHQnKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IG1lbnVJdGVtSUQgPSAkLnBhcmFtLmZyYWdtZW50KCkgPyAkLnBhcmFtLmZyYWdtZW50KCkgOiAnJztcblxuICAgICAgICAgICAgICAgIGlmICgkKGAuemMtcGFuZWwtbWVudSBsaVtkYXRhLW1lbnUtaXRlbS1pZD1cIiR7bWVudUl0ZW1JRH1cIl1gKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1JRCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobWVudUl0ZW1JRCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlcE1lbnVJdGVtKG1lbnVJdGVtSUQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZSgnY2xvc2UtYmxvY2snKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxiYXJUb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCd6Yy9jbG9zZS1ibG9jay56Yy1wYW5lbCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICgkKCcuemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51JykuaGFzQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudV9hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnUnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51X2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfbW9iaWxlLW1lbnUtdmlzaWJsZScpO1xuXG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudScpLm9uZSgndHJhbnNpdGlvbmVuZCB3ZWJraXRUcmFuc2l0aW9uRW5kIG9UcmFuc2l0aW9uRW5kIE1TVHJhbnNpdGlvbkVuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRyb2xzJykuaGVpZ2h0KCdhdXRvJyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UoJ2Nsb3NlLWJsb2NrJykuaGlkZURlZmluaXRlbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jbGljaygnLnpjLXBhbmVsLXN1Ym1lbnVfX2hlYWRlci1zZWN0aW9uX21vZGVfbW9iaWxlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVTdWJtZW51QWN0aXZlKCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbGJhclRvcCgpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnJztcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFppbWJydUNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBQYW5lbFxuICpcbiAqIEBhdXRob3IgIEp1bmp1bGluaVxuICogQHBhY2thZ2UgWmltYnJ1Q29kZVxuICogQHNpbmNlICAgWmltYnJ1Q29kZSAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEJhc2UgZnJvbSAnLi9tb2R1bGUvYmFzZSc7XG5cbnpjLmFkZE1vZHVsZSgncGFuZWwnLCAoJCkgPT4ge1xuXG4gICAgY29uc3QgcGFuZWwgPSBuZXcgQmFzZTtcbiAgICBcbiAgICAvLyBBZnRlciBsb2FkaW5nIHBhZ2VcbiAgICAkKCgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChwYW5lbC5tb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAncGFuZWwubW9kZSBpcyB1bmRlZmluZWQnO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgaWYgKCEkLmlzRnVuY3Rpb24ocGFuZWwubW9kZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAncGFuZWwubW9kZSBpcyBub3QgZnVuY3Rpb24nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYW5lbC5jaGVja0Jyb3dzZXJDb21wYXRpYmlsaXR5KCk7XG4gICAgICAgICAgICBwYW5lbC5tb2RlKCQsIHBhbmVsKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmICgkKCcuemMtcGFuZWwtdGVtcGxhdGUnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLXRlbXBsYXRlJykuZW1wdHkoKS5hcHBlbmQoYDxkaXYgY2xhc3M9XCJlcnJvciBub3RpY2VcIj48cD48Yj4ke3BhbmVsLmdldFZhcignYnJvd3Nlci1lcnJvci10aXRsZScpfTwvYj4gOiAke2Vycm9yfTwvcD48L2Rpdj5gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnI3dwYm9keS1jb250ZW50JykucHJlcGVuZChgPGRpdiBjbGFzcz1cImVycm9yIG5vdGljZVwiPjxwPjxiPiR7cGFuZWwuZ2V0VmFyKCdicm93c2VyLWVycm9yLXRpdGxlJyl9PC9iPiA6ICR7ZXJyb3J9PC9wPjwvZGl2PmApO1xuICAgICAgICAgICAgICAgIGFsZXJ0KGAke3BhbmVsLmdldFZhcignYnJvd3Nlci1lcnJvci10aXRsZScpfSA6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vICMjIyMjIyMjIyMjIyMgUFVCTElDIE1FVEhPRFMgIyMjIyMjIyMjIyMjI1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gQWRkIGNvbnRyb2xcbiAgICAgICAgYWRkQ29udHJvbDogKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpLFxuICAgICAgICAgICAgICAgICAgc2NyaXB0TG9jYXRpb24gPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjLFxuICAgICAgICAgICAgICAgICAgZGF0YUggPSBzY3JpcHRMb2NhdGlvbi5zcGxpdCgnLycpLFxuICAgICAgICAgICAgICAgICAgY29udHJvbE5hbWUgPSBkYXRhSFtkYXRhSC5sZW5ndGggLSA1XTtcblxuICAgICAgICAgICAgY29uc3QgY29udHJvbFZhcnMgPSBwYW5lbC5nZXRWYXIoJ2NvbnRyb2xzJylbY29udHJvbE5hbWVdO1xuICAgICAgICAgICAgcGFuZWwuc2VydmljZSgnY2FsbGJhY2snKS5hZGQoJ2NvbnRyb2wnLCBjYWxsYmFjaywgY29udHJvbFZhcnMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEFkZCBtb2RlXG4gICAgICAgIGFkZE1vZGU6IChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgcGFuZWwubW9kZSA9IGNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgfVxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==