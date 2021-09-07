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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2pxdWVyeS5wYW5lbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRXFCO0FBQ0s7QUFDSDtBQUNKO0FBQ0s7O0FBRXJDOztBQUVlLG1CQUFtQiw0Q0FBTTtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLDhDQUFRO0FBQzdDOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsc0NBQXNDO0FBQ3RDLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDBDQUFJO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxpREFBVTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvYmFzZS5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2Nsb3NlLWJsb2NrLmpzIiwid2VicGFjazovL3ppbWJydWNvZGUvLi9zcmMvTW9kdWxlL1BhbmVsL1Jlc291cmNlcy9hc3NldHMvanMvZXM2L21vZHVsZS9jb25kaXRpb24uanMiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvbW9kdWxlL2tlcm5lbC5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlLy4vc3JjL01vZHVsZS9QYW5lbC9SZXNvdXJjZXMvYXNzZXRzL2pzL2VzNi9tb2R1bGUvbWVudS5qcyIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ppbWJydWNvZGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ppbWJydWNvZGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly96aW1icnVjb2RlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vemltYnJ1Y29kZS8uL3NyYy9Nb2R1bGUvUGFuZWwvUmVzb3VyY2VzL2Fzc2V0cy9qcy9lczYvanF1ZXJ5LnBhbmVsLmVzNi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZSA6IEJhc2VcbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEtlcm5lbCAgICAgZnJvbSAnLi9rZXJuZWwnO1xuaW1wb3J0IENsb3NlQmxvY2sgZnJvbSAnLi9jbG9zZS1ibG9jayc7XG5pbXBvcnQgQ2FsbGJhY2sgICBmcm9tICcuL2NhbGxiYWNrJztcbmltcG9ydCBNZW51ICAgICAgIGZyb20gJy4vbWVudSc7XG5pbXBvcnQgQ29uZGl0aW9uICBmcm9tICcuL2NvbmRpdGlvbic7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2UgZXh0ZW5kcyBLZXJuZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIC8vIEdsb2JhbCBjYWNoZVxuICAgICAgICB0aGlzLmdsb2JhbC5jYWNoZSA9IHtcbiAgICAgICAgICAgIGNoYW5nZWQ6IGZhbHNlLFxuICAgICAgICAgICAgc2VydmljZXM6IHt9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gR2xvYmFsIGNvbmZpZ1xuICAgICAgICB0aGlzLmdsb2JhbC5jb25maWcgPSB7XG5cbiAgICAgICAgICAgIC8vIFJpZ2h0IG1hcmdpblxuICAgICAgICAgICAncmlnaHQtbWFyZ2luJzoge1xuICAgICAgICAgICAgICAgIGRlc2t0b3A6IDIwLFxuICAgICAgICAgICAgICAgIG1vYmlsZTogMTBcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICdib3R0b20tbWFyZ2luJzogNDIsIFxuICAgICAgICAgICAgJ2Zvb3Rlci1oZWlnaHQnOiA1NiwgICAgLy8gSGVpZ2h0IG9mIGZvb3RlclxuICAgICAgICAgICAgJ2hlYWRlci1oZWlnaHQnOiA1NiwgICAgLy8gSGVpZ2h0IG9mIGhlYWRlclxuICAgICAgICAgICAgJ2hlaWdodC1GQUgnOiAgICAxMTIsICAgLy8gSGVpZ2h0IG9mIGZvb3RlciAmIGhlYWRlclxuICAgICAgICAgICAgJ3dwLWJvZHktaGVpZ2h0JzogMCwgICAgLy8gV3AgYm9keSBoZWlnaHRcblxuICAgICAgICAgICAgJ21pbi1zaXplJzoge1xuICAgICAgICAgICAgICAgICdib2R5LWhlaWdodCc6IDUwMCwgLy8gTWluIHBhbmVsIGJvZHkgaGVpZ2h0XG4gICAgICAgICAgICAgICAgbW9kZTE6IDQ5MCxcbiAgICAgICAgICAgICAgICBtb2RlMjogOTUwXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnd3AtYWRtaW4tYmFyLWhlaWdodCc6IDMyXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gR2xvYmFsIHZhcnNcbiAgICAgICAgdGhpcy5nbG9iYWwudmFycyA9IHpjUGFuZWxWYXJzO1xuXG4gICAgICAgIC8vIEFkZCBzZXJ2aWNlIDogQ2FsbGJhY2tcbiAgICAgICAgdGhpcy5zZXJ2aWNlKCdjYWxsYmFjaycsIG5ldyBDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgY2hlY2tCcm93c2VyQ29tcGF0aWJpbGl0eSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihhID0+IHt9KTtcbiAgICAgICAgICAgIG5ldyBSZXNpemVPYnNlcnZlcihhID0+IHt9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0VmFyKCdicm93c2VyLWVycm9yLXN1YmplY3QnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhbmVsIG1lbnVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgbWVudSgpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlKCdtZW51JywgbmV3IE1lbnUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhbmVsIDogSW5pdCBjYWxsYmFjayBvZiBjbG9zZSBibG9jay5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY2xvc2VCbG9jaygpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlKCdjbG9zZS1ibG9jaycsIG5ldyBDbG9zZUJsb2NrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYW5lbCBzY3JvbGwgYmFyXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHNjcm9sbGJhcigpIHtcbiAgICAgICAgaWYgKCF6Yy5pc01vYmlsZSgpICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpID09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBwcml2ID0ge307XG5cbiAgICAgICAgICAgIHByaXYuY2hlY2tJZkFjdGl2ZSA9IChwYXJlbnQsIGNoaWxkcmVuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50SGVpZ2h0ICAgPSBwYXJlbnQub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW5IZWlnaHQgPSBjaGlsZHJlbi5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRIZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbkhlaWdodCA+IHBhcmVudEhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFkZENsYXNzKCd6Yy1zY3JvbGxiYXJfYWN0aXZlJywpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNsYXNzKCd6Yy1zY3JvbGxiYXJfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBwcml2LnJvID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyaWVzWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdi5jaGVja0lmQWN0aXZlKCQoZW50cnkudGFyZ2V0KS5wYXJlbnQoKSwgJChlbnRyeS50YXJnZXQpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy56Yy1wYW5lbCAuemMtc2Nyb2xsYmFyJykuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJpdi5yby5vYnNlcnZlKCQoZWwpLmNoaWxkcmVuKCkuZmlyc3QoKS5nZXQoMCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQod2luZG93KS5vbignemMvcGFuZWwvc2l6ZS1jaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbCAuemMtc2Nyb2xsYmFyJykuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByaXYuY2hlY2tJZkFjdGl2ZSgkKGVsKSwgJChlbCkuY2hpbGRyZW4oKS5maXJzdCgpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIG1ldGEgdmlld3BvcnQgaWYgbW9iaWxlXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIG5vTWV0YVNjYWxlSWZNb2JpbGUoKSB7XG4gICAgICAgIGlmICh6Yy5pc01vYmlsZSgpKSB7XG4gICAgICAgICAgICAkKCdoZWFkIG1ldGFbbmFtZT12aWV3cG9ydF0nKS5hdHRyKCdjb250ZW50JywgJ3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPTAnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhbmVsIGNvbmRpdGlvbiBjaGVja2VyLlxuICAgICAqIFxuICAgICAqIEB0eXBlICB7T2JqZWN0fVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGNvbmRpdGlvbigpIHtcbiAgICAgICAgbmV3IENvbmRpdGlvbih0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiBzb21lIGNoYW5nZXMgd2FzIG1hZGVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IE1lc3NhZ2VcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBpZkNoYW5nZWQoKSB7XG4gICAgICAgICQod2luZG93KS5vbignYmVmb3JldW5sb2FkLnpjLXBhbmVsJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Q2FjaGUoJ2NoYW5nZWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhcignaWYtY2hhbmdlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb250cm9sIGhlbHBcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY29udHJvbEhlbHAoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgd2lkdGg6IDYwMCxcbiAgICAgICAgICAgIGhlaWdodDogMjUwXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jbGljaygnLnpjLXBhbmVsLWhlbHBfX3N0YXJ0ZXJfdHlwZV9zaW1wbGUnLCAoJHRoaXMpID0+IHtcbiAgICAgICAgICAgIGxldCBzZXR0aW5ncyA9ICR0aGlzLmRhdGEoJ3NldHRpbmdzJyk7XG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MgPT09IHVuZGVmaW5lZCB8fCBzZXR0aW5ncyA9PT0gJycgfHwgc2V0dGluZ3MgPT0gbnVsbCkgc2V0dGluZ3MgPSB7fTtcblxuICAgICAgICAgICAgZGVmYXVsdHMudGl0bGUgPSAkdGhpcy5hdHRyKCd0aXRsZScpO1xuICAgICAgICAgICAgZGVmYXVsdHMuaHRtbCAgPSAkdGhpcy5wYXJlbnQoKS5maW5kKCcuemMtcGFuZWwtaGVscF9fY29udGVudCcpLnRleHQoKTtcblxuICAgICAgICAgICAgemMucG9wdXAoKS5hZGQoJC5leHRlbmQoe30sIGRlZmF1bHRzLCBzZXR0aW5ncykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb250cm9scyBpbml0aWFsaXphdGlvblxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBjb250cm9sSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlKCdjYWxsYmFjaycpLnJ1bignY29udHJvbCcsICQsIHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvb2x0aXBcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgdG9vbHRpcCgpIHtcbiAgICAgICAgaWYgKHpjLmlzTW9iaWxlKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwgW2RhdGEtdG9vbHRpcF0nKS50aXBzeSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdkYXRhLXRvb2x0aXAnLFxuICAgICAgICAgICAgICAgIGdyYXZpdHk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSAkKHRoaXMpLmRhdGEoJ3Rvb2x0aXAtcG9zaXRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdzJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ24nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ24nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnbic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9mZnNldDogMyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZSA6IENhbGxiYWNrXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGxiYWNrIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBwYW5lbCBjYWxsYmFja1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGQobmFtZSwgY2FsbGJhY2ssIGFkZGl0aW9uYWwpIHtcbiAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbGxiYWNrW25hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrW25hbWVdID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tbbmFtZV0ucHVzaCh7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWw6IGFkZGl0aW9uYWxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgIC8qKlxuICAgICAqIFJ1biBwYW5lbCBjYWxsYmFja1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBydW4obmFtZSkge1xuICAgICAgICBpZiAobmFtZSAhPT0gdW5kZWZpbmVkICYmIG5hbWUgIT09ICcnKSB7XG4gICAgICAgICAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuYXBwbHkoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGFyZ3Muc2hpZnQoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2tbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5jYWxsYmFja1tuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwQXJncyA9ICQuZXh0ZW5kKHRydWUsIFtdLCBhcmdzKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxsYmFja1tuYW1lXVtpXS5hZGRpdGlvbmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBBcmdzLnB1c2godGhpcy5jYWxsYmFja1tuYW1lXVtpXS5hZGRpdGlvbmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tbbmFtZV1baV0uY2FsbGJhY2suYXBwbHkodGhpcywgcEFyZ3MpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIHppbWJydWNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBQYW5lbC9Nb2R1bGUgOiBDbG9zZUJsb2NrXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBLZXJuZWwgZnJvbSAnLi9rZXJuZWwnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9zZUJsb2NrIGV4dGVuZHMgS2VybmVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmlzT3BlbiA9IDA7XG5cbiAgICAgICAgdGhpcy5jbGljaygnLnpjLXBhbmVsLWNvbnRyb2xzX19jbG9zZS1ibG9jaycsICgpID0+IHtcbiAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9jbG9zZS1ibG9jaycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3pjL2Nsb3NlLWJsb2NrL3Nob3cnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCd6Yy9jbG9zZS1ibG9jay9oaWRlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQod2luZG93KS5vbignemMvY2xvc2UtYmxvY2svaGlkZS1kZWZpbml0ZWx5JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlRGVmaW5pdGVseSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IGNsb3NlIGJsb2NrXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHNob3coKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbC1jb250cm9sc19fY2xvc2UtYmxvY2snKS5hZGRDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX2Nsb3NlLWJsb2NrX2FjdGl2ZScpO1xuICAgICAgICB0aGlzLmlzT3BlbisrO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgY2xvc2UgYmxvY2tcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaGlkZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuID09PSAxKSB7XG4gICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udHJvbHNfX2Nsb3NlLWJsb2NrJykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19jbG9zZS1ibG9ja19hY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuLS07XG4gICAgICAgICAgICBpZiAodGhpcy5pc09wZW4gPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc09wZW4gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBibG9jayBkZWZpbml0ZWx5XG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGhpZGVEZWZpbml0ZWx5KCkge1xuICAgICAgICAkKCcuemMtcGFuZWwtY29udHJvbHNfX2Nsb3NlLWJsb2NrJykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19jbG9zZS1ibG9ja19hY3RpdmUnKTtcbiAgICAgICAgdGhpcy5pc09wZW4gPSAwO1xuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvY2xvc2UtYmxvY2snKTtcbiAgICB9XG59IiwiXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIHppbWJydWNvZGUgcGFja2FnZS5cbiAqXG4gKiAoYykgSnVuanVsaW5pXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qXG4gKiBTY3JpcHQgOiBQYW5lbC9Nb2R1bGUgOiBDb25kaXRpb25cbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEtlcm5lbCBmcm9tICcuL2tlcm5lbCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmRpdGlvbiBleHRlbmRzIEtlcm5lbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLnJlZ2V4ID0gLyguKz8pOihub3RFbXB0eXxlbXB0eXxpc3xub3R8Y29udGFpbnN8PHw8PXw+fD49KVxcKCguKj8pXFwpLD8vZztcblxuICAgICAgICB0aGlzLmZpcnN0U3RhcnQoKTtcbiAgICAgICAgdGhpcy5kYXRhQ2FjaGluZygpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCBwYXJzaW5nXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGZpcnN0U3RhcnQoKSB7XG4gICAgICAgICQod2luZG93KS5vbignemMvcGFuZWwvbWVudS9pdGVtLWNoYW5nZS1JQ1AnLCAoZXZlbnQsIHNlY3Rpb24pID0+IHtcbiAgICAgICAgICAgIGlmIChzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgc2VjdGlvbi5maW5kKCdbZGF0YS1jb25kaXRpb25dJykuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2UoJChlbCksIHRydWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsIC56Yy1wYW5lbC1jb250cm9scycpLm9uKCdjaGFuZ2UnLCAnW2RhdGEtb3B0aW9uXScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuXG4gICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBsZXQgbmFtZSAgPSAkdGhpcy5hdHRyKCduYW1lJykgfHwgJyc7XG5cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoJ1tdJywgJycpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jYWNoZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgJC5lYWNoKHRoaXMuY2FjaGVbbmFtZV0sIChpbmRleCwgZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZShlbCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkdGhpcy5kYXRhKCdpJykgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2FjaGUoJ2NoYW5nZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvaWYtY2hhbmdlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhY2hlIGRhdGFcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZGF0YUNhY2hpbmcoKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbCAuemMtcGFuZWwtY29udHJvbHMgW2RhdGEtY29uZGl0aW9uXScpLmVhY2goKGluZGV4LCBlbCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1hdGNoO1xuXG4gICAgICAgICAgICB3aGlsZSAobWF0Y2ggPSB0aGlzLnJlZ2V4LmV4ZWMoJChlbCkuZGF0YSgnY29uZGl0aW9uJykpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IHRoaXMuZ2V0VmFyKCdwcmVmaXgtc2x1ZycpICsgbWF0Y2hbMV07XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWNoZVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZVtrZXldID0gW107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVtrZXldLnB1c2goJChlbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSBieSBjb25kaXRpb25zXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHBhcnNlKGNvbnRyb2wsIGRpcmVjdCkge1xuICAgICAgICBsZXQgcGFzc2VkLFxuICAgICAgICAgICAgY29uZGl0aW9ucyA9IHRoaXMucHJlcENvbmRpdGlvbnMoY29udHJvbC5kYXRhKCdjb25kaXRpb24nKSksXG4gICAgICAgICAgICBvcGVyYXRvciAgID0gKGNvbnRyb2wuZGF0YSgnY29uZGl0aW9uLW9wZXJhdG9yJykgfHwgJ2FuZCcpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgJC5lYWNoKGNvbmRpdGlvbnMsIChpbmRleCwgY29uZGl0aW9uKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gJChgLnpjLXBhbmVsIC56Yy1wYW5lbC1jb250cm9scyBbbmFtZT0ke3RoaXMuZ2V0VmFyKCdwcmVmaXgtc2x1ZycpfSR7Y29uZGl0aW9uLmNoZWNrfV1gKTtcblxuICAgICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGggPiAwICYmIHRhcmdldC5pcygnW2RhdGEtb3B0aW9uXScpKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gJChgLnpjLXBhbmVsIC56Yy1wYW5lbC1jb250cm9scyBbaWQ9JHt0aGlzLmdldFZhcigncHJlZml4LXNsdWcnKX0ke2NvbmRpdGlvbi5jaGVja31dYCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Lmxlbmd0aCA+IDAgJiYgdGFyZ2V0LmlzKCdbZGF0YS1vcHRpb25dJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2MSA9IHRhcmdldC52YWwoKSAhPT0gbnVsbCA/IHRhcmdldC52YWwoKS50b1N0cmluZygpIDogJyc7XG4gICAgICAgICAgICAgICAgY29uc3QgdjIgPSBjb25kaXRpb24udmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChjb25kaXRpb24ucnVsZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IChwYXJzZUludCh2MSkgPCBwYXJzZUludCh2MikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IChwYXJzZUludCh2MSkgPD0gcGFyc2VJbnQodjIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IChwYXJzZUludCh2MSkgPiBwYXJzZUludCh2MikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IChwYXJzZUludCh2MSkgPj0gcGFyc2VJbnQodjIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjb250YWlucyc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAodjEuaW5kZXhPZih2MikgIT09IC0xID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdpcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAodjEgPT0gdjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ25vdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAodjEgIT0gdjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ25vdEVtcHR5JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHYxID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VtcHR5JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICF2MSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgndW5kZWZpbmVkJyA9PSB0eXBlb2YgcGFzc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhc3NlZCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ29yJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NlZCA9IChwYXNzZWQgfHwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdhbmQnOlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc2VkID0gKHBhc3NlZCAmJiByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZGlyZWN0ICYmIGRpcmVjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbC5hZGRDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX2l0ZW1fc2hvdycpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2wuZGF0YSgnY29uZGl0aW9uLXNob3cnLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udHJvbC5hZGRDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX2l0ZW1faGlkZScpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2wuZGF0YSgnY29uZGl0aW9uLXNob3cnLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wuZGF0YSgnY29uZGl0aW9uLXNob3cnKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19faXRlbV9oaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2wuYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19pdGVtX3Nob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbC5kYXRhKCdjb25kaXRpb24tc2hvdycsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wuZGF0YSgnY29uZGl0aW9uLXNob3cnKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbC5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX2l0ZW1fc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19faXRlbV9oaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2wuZGF0YSgnY29uZGl0aW9uLXNob3cnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGFzc2VkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZXBhcmluZyBjb25kaXRpb25zXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHByZXBDb25kaXRpb25zKGNvbmRpdGlvbikge1xuICAgICAgICBsZXQgbWF0Y2gsXG4gICAgICAgICAgICBjb25kaXRpb25zID0gW107XG5cbiAgICAgICAgd2hpbGUgKG1hdGNoID0gdGhpcy5yZWdleC5leGVjKGNvbmRpdGlvbikpIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgJ2NoZWNrJzogbWF0Y2hbMV0sXG4gICAgICAgICAgICAgICAgJ3J1bGUnOiAgbWF0Y2hbMl0sXG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogbWF0Y2hbM10gfHwgJydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbmRpdGlvbnM7XG4gICAgfVxufSIsIlxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSB6aW1icnVjb2RlIHBhY2thZ2UuXG4gKlxuICogKGMpIEp1bmp1bGluaVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKlxuICogU2NyaXB0IDogUGFuZWwvTW9kdWxlIDogS2VybmVsXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtlcm5lbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsID0gemMuZ2V0TW9kdWxlRGF0YSgncGFuZWwnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYW5lbCBzY3JvbGwgYmFyIHRvcFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBzY3JvbGxiYXJUb3AoKSB7XG4gICAgICAgICQoJy56Yy1wYW5lbCAuemMtc2Nyb2xsYmFyJykuc2Nyb2xsVG9wKDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBwYW5lbCBoZWlnaHRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgY2FsY0hlaWdodCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2FjaGUoJ3dwLWJvZHktaGVpZ2h0JykgIT09ICQod2luZG93KS5oZWlnaHQoKSkge1xuICAgICAgICAgICAgdGhpcy5hZGRDYWNoZSgnd3AtYm9keS1oZWlnaHQnLCAkKHdpbmRvdykuaGVpZ2h0KCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXJhc2UgbW9iaWxlIG1lbnVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZXJhc2VNb2JpbGVNZW51KCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rlc2t0b3BNb2RlKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlcnZpY2UoJ21lbnUvaXNTdWJtZW51SXRlbScpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLW1lbnUnKS5hZGRDbGFzcygnemMtcGFuZWwtbWVudV9zdWJtZW51LWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykuYWRkQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC1tZW51JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfc3VibWVudS1hY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfbW9iaWxlLW1lbnUtdmlzaWJsZScpO1xuICAgICAgICAkKCcuemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudV9hY3RpdmUnKTtcblxuICAgICAgICB0aGlzLnNlcnZpY2UoJ2Nsb3NlLWJsb2NrJykuaGlkZURlZmluaXRlbHkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJcyBkZXNrdG9wIG1vZGVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm4gXCJ0cnVlXCIgaWYgYm9keSB3aWR0aCBpcyBiaWdnZXIgdGhlbiBcIm1pbi1zaXplLm1vZGUyXCJcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBpc0Rlc2t0b3BNb2RlKCkge1xuICAgICAgICByZXR1cm4gKCQoJy56Yy1wYW5lbCcpLndpZHRoKCkgPj0gdGhpcy5nZXRDb25maWcoJ21pbi1zaXplL21vZGUyJykpO1xuICAgIH1cblxuICAgICAvKipcbiAgICAgKiBFcnJvciBjaGVjaywgaW4gQUpBWCBvciBvdGhlclxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBlcnJvckNoZWNrKG1zZywganFYSFIpIHtcbiAgICAgICAgaWYgKCEkKCcuemMtcG9wdXAnKS5oYXNDbGFzcygnemMtcGFuZWwtZXJyb3ItY29uZmlybScpKSB7XG5cbiAgICAgICAgICAgIGlmICgkKCcuemMtcG9wdXAnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkKCcuemMtcG9wdXAnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuXG4gICAgICAgICAgICB6Yy5jb25maXJtKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogYEVycm9yIC0gJHtqcVhIUi5zdGF0dXNUZXh0fSA6ICR7anFYSFIuc3RhdHVzfWAsXG4gICAgICAgICAgICAgICAgc3ViamVjdDogYCR7bXNnfSBQYWdlIHdpbGwgYmUgcmVsb2FkZWQsIG9rP2AsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICd6Yy1wYW5lbC1lcnJvci1jb25maXJtJyxcbiAgICAgICAgICAgICAgICBvazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBnbG9iYWwgdmFyXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRlZiAgIElmIG5vdCBmb3VuZCwgcmV0dXJuIFwiZGVmXCJcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBnZXRWYXIoa2V5LCBkZWYpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLnZhcnMsIGtleSk7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkZWY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZ2xvYmFsIHZhciB2YWx1ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkYXRhICBWYXIgdmFsdWVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRWYXIoa2V5LCBkYXRhKSB7XG4gICAgICAgIHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC52YXJzLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBnbG9iYWwgY2FjaGUgdmFsdWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGF0YSAgQ2FjaGUgdmFsdWVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBhZGRDYWNoZShrZXksIGRhdGEpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNhY2hlLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBnbG9iYWwgY2FjaGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgS2V5L1BhdGhcbiAgICAgKiBAcGFyYW0ge21peH0gICAgZGVmICAgSWYgbm90IGZvdW5kLCByZXR1cm4gXCJkZWZcIlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGdldENhY2hlKGtleSwgZGVmKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jYWNoZSwga2V5KTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRlZjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZWxlbWVudCBmcm9tIGNhY2hlIG9iamVjdFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqL1xuICAgIHJlbUNhY2hlKGtleSkge1xuICAgICAgICB6Yy5kZWVwRmluZEFuZFNldHRpbmcodGhpcy5nbG9iYWwuY2FjaGUsIGtleSwgZmFsc2UsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBnbG9iYWwgY29uZmlnIHZhbHVlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAgIEtleS9QYXRoXG4gICAgICogQHBhcmFtIHttaXh9ICAgIGRhdGEgIENvbmZpZyB2YWx1ZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGFkZENvbmZpZyhrZXksIGRhdGEpIHtcbiAgICAgICAgemMuZGVlcEZpbmRBbmRTZXR0aW5nKHRoaXMuZ2xvYmFsLmNvbmZpZywga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZ2xvYmFsIGNvbmZpZ1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBLZXkvUGF0aFxuICAgICAqIEBwYXJhbSB7bWl4fSAgICBkZWYgICBJZiBub3QgZm91bmQsIHJldHVybiBcImRlZlwiXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgZ2V0Q29uZmlnKGtleSwgZGVmKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHpjLmRlZXBGaW5kQW5kU2V0dGluZyh0aGlzLmdsb2JhbC5jb25maWcsIGtleSk7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkZWY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXJ2aWNlKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSB8fCB0eXBlb2YgY2FsbGJhY2sgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDYWNoZShgc2VydmljZXMvJHtuYW1lfWAsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuZ2V0Q2FjaGUoYHNlcnZpY2VzLyR7bmFtZX1gLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlcnZpY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmljZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgc2VydmljZSBub3QgZXhpc3QgOiAke25hbWV9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb24oZXZlbnRzLCBzZWxlY3RvciwgaGFuZGxlciwgcHJldmVudERlZmF1bHQgPSBmYWxzZSkge1xuICAgICAgICAkKCcuemMtcGFuZWwnKS5vbihldmVudHMsIHNlbGVjdG9yLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmV2ZW50RGVmYXVsdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLCBldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsaWNrKHNlbGVjdG9yLCBoYW5kbGVyLCBwcmV2ZW50RGVmYXVsdCA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5vbignY2xpY2snLCBzZWxlY3RvciwgaGFuZGxlciwgcHJldmVudERlZmF1bHQpO1xuICAgIH1cbn0iLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsL01vZHVsZSA6IE1lbnVcbiAqXG4gKiBAYXV0aG9yICBDLlIgPGNyQGp1bmp1bGluaS5jb20+XG4gKiBAcGFja2FnZSB6aW1icnVjb2RlXG4gKiBAc2luY2UgICAxLjAuMFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEtlcm5lbCBmcm9tICcuL2tlcm5lbCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBLZXJuZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaXNTdWJtZW51SXRlbSAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tZW51SXRlbUlEICAgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lbnVJdGVtICAgICAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3VibWVudUl0ZW0gICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tZW51UGFyZW50SXRlbSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZGVza3RvcCgpOyAvLyBJbml0IGRlc2t0b3AgbW9kZVxuICAgICAgICB0aGlzLm1vYmlsZSgpOyAgLy8gSW5pdCBtb2JpbGUgbW9kZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBjb25kaXRpb24gOiBzdWJtZW51LWFjdGl2ZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICByZW1vdmVTdWJtZW51QWN0aXZlKCkge1xuICAgICAgICAkKCcuemMtcGFuZWwtbWVudScpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1tZW51X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRlbnRfc3VibWVudS1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgY29uZGl0aW9uIDogc3VibWVudS1hY3RpdmVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgYWRkU3VibWVudUFjdGl2ZSgpIHtcbiAgICAgICAgJCgnLnpjLXBhbmVsLW1lbnUnKS5hZGRDbGFzcygnemMtcGFuZWwtbWVudV9zdWJtZW51LWFjdGl2ZScpO1xuICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250ZW50X3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXMgc3VibWVudSBhY3RpdmVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudWxsfSBOb25lXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgaXNTdWJtZW51QWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gKCQoJy56Yy1wYW5lbC1tZW51JykuaGFzQ2xhc3MoJ3pjLXBhbmVsLW1lbnVfc3VibWVudS1hY3RpdmUnKSAmJiAkKCcuemMtcGFuZWwtY29udGVudCcpLmhhc0NsYXNzKCd6Yy1wYW5lbC1jb250ZW50X3N1Ym1lbnUtYWN0aXZlJykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc3BsYXkgc2VjdGlvblxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBkaXNwbGF5U2VjdGlvbihtZW51SXRlbUlEKSB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gJChgLnpjLXBhbmVsLW1lbnUgbGlbZGF0YS1tZW51LWl0ZW0taWQ9XCIke21lbnVJdGVtSUR9XCJdYCk7XG5cbiAgICAgICAgLy8gQWRkIGljb25cbiAgICAgICAgY29uc3QgdGl0bGVJY29uQ2xhc3MgPSBtZW51SXRlbS5maW5kKCdpJykuZmlyc3QoKS5hdHRyKCdjbGFzcycpLm1hdGNoKC9cXGJ6Yy1pY29uXFxTKy9nKVswXTtcbiAgICAgICAgJCgnLnpjLXBhbmVsLWhlYWRlcl9fdGl0bGUtaWNvbicpLnJlbW92ZUNsYXNzKChpbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKGNsYXNzTmFtZS5tYXRjaCgvXFxiemMtaWNvblxcUysvZykgfHwgW10pLmpvaW4oJyAnKTtcbiAgICAgICAgfSkuYWRkQ2xhc3ModGl0bGVJY29uQ2xhc3MpO1xuXG4gICAgICAgIC8vIEFkZCB0aXRsZVxuICAgICAgICAkKCcuemMtcGFuZWwtaGVhZGVyX190aXRsZScpLnRleHQobWVudUl0ZW0uZmluZCgnc3BhbicpLnRleHQoKSk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIC8gYWN0aXZlIGNvbnRlbnQgc2VjdGlvblxuICAgICAgICBpZiAodGhpcy5tZW51SXRlbUlEKSB7XG4gICAgICAgICAgICAkKGAuemMtcGFuZWwtY29udHJvbHNfX3NlY3Rpb25bZGF0YS1zZWN0aW9uPVwiJHt0aGlzLm1lbnVJdGVtSUR9XCJdYCkucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWNvbnRyb2xzX19zZWN0aW9uX2FjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9ICQoYC56Yy1wYW5lbC1jb250cm9sc19fc2VjdGlvbltkYXRhLXNlY3Rpb249XCIke21lbnVJdGVtSUR9XCJdYCk7XG5cbiAgICAgICAgc2VjdGlvbi5hZGRDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX3NlY3Rpb25fYWN0aXZlJyk7XG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCd6Yy9wYW5lbC9tZW51L2l0ZW0tY2hhbmdlJyk7XG4gICAgICAgIHRoaXMuYWRkQ2FjaGUoJ21lbnUvY3VycmVudC1zZWN0aW9uJywgc2VjdGlvbik7XG5cbiAgICAgICAgaWYgKCFzZWN0aW9uLmhhc0NsYXNzKCd6Yy1wYW5lbC1jb250cm9sc19fc2VjdGlvbl9JQ1AnKSkge1xuICAgICAgICAgICAgc2VjdGlvbi5hZGRDbGFzcygnemMtcGFuZWwtY29udHJvbHNfX3NlY3Rpb25fSUNQJyk7XG5cbiAgICAgICAgICAgIC8vIEV2ZW50XG4gICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignemMvcGFuZWwvbWVudS9pdGVtLWNoYW5nZS1JQ1AnLCBbc2VjdGlvbl0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIC8gYWN0aXZlIG1lbnUgaXRlbVxuICAgICAgICBpZiAobWVudUl0ZW0ucGFyZW50KCkuaGFzQ2xhc3MoJ3pjLXBhbmVsLXN1Ym1lbnVfX2xpc3QnKSkge1xuICAgICAgICAgICAgbGV0IHN1Ym1lbnVJdGVtID0gbWVudUl0ZW0ucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJtZW51SXRlbS5oYXNDbGFzcygnemMtcGFuZWwtc3VibWVudV9fc2Nyb2xsYmFyLWNvbnRhaW5lcicpKSB7XG4gICAgICAgICAgICAgICAgc3VibWVudUl0ZW0gPSBzdWJtZW51SXRlbS5wYXJlbnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3VibWVudUl0ZW0uYWRkQ2xhc3MoJ3pjLXBhbmVsLXN1Ym1lbnVfX2NvbnRhaW5lcl9hY3RpdmUnKTtcblxuICAgICAgICAgICAgY29uc3Qgc3VibWVudUl0ZW1JRCAgPSBzdWJtZW51SXRlbS5kYXRhKCdtZW51LWNvbnRhaW5lci1pZCcpO1xuICAgICAgICAgICAgY29uc3QgbWVudVBhcmVudEl0ZW0gPSAkKGAuemMtcGFuZWwtbWVudV9faXRlbV90eXBlX3BhcmVudFtkYXRhLW1lbnUtY29udGFpbmVyLWlkPVwiJHtzdWJtZW51SXRlbUlEfVwiXWApO1xuXG4gICAgICAgICAgICBtZW51SXRlbS5hZGRDbGFzcygnemMtcGFuZWwtc3VibWVudV9faXRlbV9hY3RpdmUnKTtcbiAgICAgICAgICAgIG1lbnVQYXJlbnRJdGVtLmFkZENsYXNzKCd6Yy1wYW5lbC1tZW51X19pdGVtX2FjdGl2ZScpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNTdWJtZW51QWN0aXZlKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFN1Ym1lbnVBY3RpdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWRkIGdsb2JhbCBkYXRhXG4gICAgICAgICAgICB0aGlzLmlzU3VibWVudUl0ZW0gID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3VibWVudUl0ZW0gICAgPSBzdWJtZW51SXRlbTtcbiAgICAgICAgICAgIHRoaXMubWVudVBhcmVudEl0ZW0gPSBtZW51UGFyZW50SXRlbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmFkZENsYXNzKCd6Yy1wYW5lbC1tZW51X19pdGVtX2FjdGl2ZScpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc1N1Ym1lbnVBY3RpdmUoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlU3VibWVudUFjdGl2ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBZGQgZ2xvYmFsIGRhdGFcbiAgICAgICAgICAgIHRoaXMuaXNTdWJtZW51SXRlbSAgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc3VibWVudUl0ZW0gICAgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubWVudVBhcmVudEl0ZW0gPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBnbG9iYWwgZGF0YVxuICAgICAgICB0aGlzLm1lbnVJdGVtICAgPSBtZW51SXRlbTtcbiAgICAgICAgdGhpcy5tZW51SXRlbUlEID0gbWVudUl0ZW1JRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJpbmcgbWVudSBpdGVtXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIHByZXBNZW51SXRlbShtZW51SXRlbUlEKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N1Ym1lbnVJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLm1lbnVJdGVtLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1tZW51X19pdGVtX2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5U2VjdGlvbihtZW51SXRlbUlEKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWVudUl0ZW0ucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLXN1Ym1lbnVfX2l0ZW1fYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLm1lbnVQYXJlbnRJdGVtLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1tZW51X19pdGVtX2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5zdWJtZW51SXRlbS5yZW1vdmVDbGFzcygnemMtcGFuZWwtc3VibWVudV9fY29udGFpbmVyX2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5U2VjdGlvbihtZW51SXRlbUlEKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJy56Yy1wYW5lbC1jb250ZW50IC56Yy1zY3JvbGxiYXInKS5zY3JvbGxUb3AoMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVza3RvcCBtb2RlXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVsbH0gTm9uZVxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIGRlc2t0b3AoKSB7XG4gICAgICAgIGxldCBtZW51SXRlbUlEID0gJyc7XG5cbiAgICAgICAgaWYgKCQucGFyYW0uZnJhZ21lbnQoKSkge1xuICAgICAgICAgICAgbWVudUl0ZW1JRCA9ICQucGFyYW0uZnJhZ21lbnQoKSB8fCAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkKGAuemMtcGFuZWwtbWVudSBsaVtkYXRhLW1lbnUtaXRlbS1pZD1cIiR7bWVudUl0ZW1JRH1cIl1gKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGxldCBtZW51SXRlbSA9ICQoJy56Yy1wYW5lbC1tZW51X19saXN0IC56Yy1wYW5lbC1tZW51X19pdGVtX3R5cGVfc2ltcGxlJykuZmlyc3QoKTtcbiAgICAgICAgICAgIG1lbnVJdGVtSUQgPSBtZW51SXRlbS5kYXRhKCdtZW51LWl0ZW0taWQnKTtcblxuICAgICAgICAgICAgaWYgKCFtZW51SXRlbUlEKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3VibWVudUl0ZW1JRCA9IG1lbnVJdGVtLmRhdGEoJ21lbnUtY29udGFpbmVyLWlkJyk7XG5cbiAgICAgICAgICAgICAgICBtZW51SXRlbSA9ICQoYC56Yy1wYW5lbC1zdWJtZW51X19jb250YWluZXJbZGF0YS1tZW51LWNvbnRhaW5lci1pZD0ke3N1Ym1lbnVJdGVtSUR9XSAuemMtcGFuZWwtc3VibWVudV9faXRlbV90eXBlX3NpbXBsZWApLmZpcnN0KCk7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1JRCA9IG1lbnVJdGVtLmRhdGEoJ21lbnUtaXRlbS1pZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U2VjdGlvbihtZW51SXRlbUlEKTtcblxuICAgICAgICAvLyBXaGVuIGhhc2ggY2hhbmdlXG4gICAgICAgICQod2luZG93KS5vbignaGFzaGNoYW5nZS56Yy1wYW5lbCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1lbnVJdGVtSUQgPSAkLnBhcmFtLmZyYWdtZW50KCkgPyAkLnBhcmFtLmZyYWdtZW50KCkgOiAnJztcblxuICAgICAgICAgICAgaWYgKCQoYC56Yy1wYW5lbC1tZW51IGxpW2RhdGEtbWVudS1pdGVtLWlkPVwiJHttZW51SXRlbUlEfVwiXWApLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtSUQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZW51SXRlbUlEICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXBNZW51SXRlbShtZW51SXRlbUlEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gV2hlbiBjbGljayBvbiBwYXJlbnQgbWVudSBpdGVtXG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1wYW5lbC1tZW51X19pdGVtX3R5cGVfcGFyZW50JywgKCR0aGlzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJtZW51SXRlbUlEID0gJHRoaXMuZGF0YSgnbWVudS1jb250YWluZXItaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtICAgICAgPSAkKGAuemMtcGFuZWwtc3VibWVudV9fY29udGFpbmVyW2RhdGEtbWVudS1jb250YWluZXItaWQ9JHtzdWJtZW51SXRlbUlEfV0gLnpjLXBhbmVsLXN1Ym1lbnVfX2l0ZW1fdHlwZV9zaW1wbGVgKS5maXJzdCgpO1xuICAgICAgICAgICAgY29uc3QgbWVudUl0ZW1JRCAgICA9IG1lbnVJdGVtLmRhdGEoJ21lbnUtaXRlbS1pZCcpO1xuXG4gICAgICAgICAgICBpZiAobWVudUl0ZW1JRCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBtZW51SXRlbUlEO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBXaGVuIGNsaWNrIG9uIG1lbnUgaXRlbVxuICAgICAgICB0aGlzLmNsaWNrKCcuemMtcGFuZWwtbWVudV9faXRlbV90eXBlX3NpbXBsZTpub3QoLnpjLXBhbmVsLW1lbnVfX2l0ZW1fYWN0aXZlKScsICgkdGhpcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVudUl0ZW1JRCA9ICR0aGlzLmRhdGEoJ21lbnUtaXRlbS1pZCcpO1xuXG4gICAgICAgICAgICBpZiAobWVudUl0ZW1JRCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBtZW51SXRlbUlEO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIC8vIFdoZW4gY2xpY2sgb24gc3VibWVudSBpdGVtXG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1wYW5lbC1zdWJtZW51X19pdGVtX3R5cGVfc2ltcGxlOm5vdCguemMtcGFuZWwtc3VibWVudV9faXRlbV9hY3RpdmUpJywgKCR0aGlzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbUlEID0gJHRoaXMuZGF0YSgnbWVudS1pdGVtLWlkJyk7XG5cbiAgICAgICAgICAgIGlmIChtZW51SXRlbUlEKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBtZW51SXRlbUlEO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb2JpbGUgbW9kZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bGx9IE5vbmVcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBtb2JpbGUoKSB7XG4gICAgICAgIHRoaXMuY2xpY2soJy56Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnUnLCAoJHRoaXMpID0+IHtcbiAgICAgICAgICAgIGlmICgkdGhpcy5oYXNDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51X2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudV9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1jb250ZW50X21vYmlsZS1tZW51LXZpc2libGUnKTtcblxuICAgICAgICAgICAgICAgICR0aGlzLm9uZSgndHJhbnNpdGlvbmVuZCB3ZWJraXRUcmFuc2l0aW9uRW5kIG9UcmFuc2l0aW9uRW5kIE1TVHJhbnNpdGlvbkVuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRyb2xzJykuaGVpZ2h0KCdhdXRvJyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UoJ2Nsb3NlLWJsb2NrJykuaGlkZURlZmluaXRlbHkoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ3pjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudV9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udGVudCcpLmFkZENsYXNzKCd6Yy1wYW5lbC1jb250ZW50X21vYmlsZS1tZW51LXZpc2libGUnKTtcblxuICAgICAgICAgICAgICAgIGxldCBpbml0TmF2SGVpZ2h0ID0gJCgnLnpjLXBhbmVsLW1lbnVfX2NvbnRhaW5lcicpLmhlaWdodCgpLFxuICAgICAgICAgICAgICAgICAgICBuYXZIZWlnaHQgICAgID0gJCgnLnpjLXBhbmVsLW1lbnVfX2xpc3QnKS5oZWlnaHQoKSArIHRoaXMuZ2V0Q29uZmlnKCdoZWlnaHQtRkFIJyksXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzSGVpZ2h0ICA9ICQoJy56Yy1wYW5lbC1jb250cm9scycpLmhlaWdodCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGluaXROYXZIZWlnaHQgPiBuYXZIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2SGVpZ2h0ID0gaW5pdE5hdkhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobmF2SGVpZ2h0ID4gY29udHJvbHNIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRyb2xzJykuaGVpZ2h0KG5hdkhlaWdodCAtIHRoaXMuZ2V0Q29uZmlnKCdoZWlnaHQtRkFIJykpO1xuICAgICAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtc3VibWVudV9fc2Nyb2xsYmFyLWNvbnRhaW5lcicpLmhlaWdodChuYXZIZWlnaHQgLSB0aGlzLmdldENvbmZpZygnaGVhZGVyLWhlaWdodCcpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgbWVudUl0ZW1JRCA9ICQucGFyYW0uZnJhZ21lbnQoKSA/ICQucGFyYW0uZnJhZ21lbnQoKSA6ICcnO1xuXG4gICAgICAgICAgICAgICAgaWYgKCQoYC56Yy1wYW5lbC1tZW51IGxpW2RhdGEtbWVudS1pdGVtLWlkPVwiJHttZW51SXRlbUlEfVwiXWApLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtZW51SXRlbUlEID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChtZW51SXRlbUlEICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVwTWVudUl0ZW0obWVudUl0ZW1JRCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlKCdjbG9zZS1ibG9jaycpLnNob3coKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbGJhclRvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3pjL2Nsb3NlLWJsb2NrLnpjLXBhbmVsJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCQoJy56Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnUnKS5oYXNDbGFzcygnemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51X2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWhlYWRlcl9fY29udHJvbGxlci1idXR0b25fdHlwZV9tb2JpbGUtbWVudScpLnJlbW92ZUNsYXNzKCd6Yy1wYW5lbC1oZWFkZXJfX2NvbnRyb2xsZXItYnV0dG9uX3R5cGVfbW9iaWxlLW1lbnVfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnLnpjLXBhbmVsLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnemMtcGFuZWwtY29udGVudF9tb2JpbGUtbWVudS12aXNpYmxlJyk7XG5cbiAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtaGVhZGVyX19jb250cm9sbGVyLWJ1dHRvbl90eXBlX21vYmlsZS1tZW51Jykub25lKCd0cmFuc2l0aW9uZW5kIHdlYmtpdFRyYW5zaXRpb25FbmQgb1RyYW5zaXRpb25FbmQgTVNUcmFuc2l0aW9uRW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkKCcuemMtcGFuZWwtY29udHJvbHMnKS5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZSgnY2xvc2UtYmxvY2snKS5oaWRlRGVmaW5pdGVseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNsaWNrKCcuemMtcGFuZWwtc3VibWVudV9faGVhZGVyLXNlY3Rpb25fbW9kZV9tb2JpbGUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVN1Ym1lbnVBY3RpdmUoKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsYmFyVG9wKCk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcnO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgemltYnJ1Y29kZSBwYWNrYWdlLlxuICpcbiAqIChjKSBKdW5qdWxpbmlcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLypcbiAqIFNjcmlwdCA6IFBhbmVsXG4gKlxuICogQGF1dGhvciAgQy5SIDxjckBqdW5qdWxpbmkuY29tPlxuICogQHBhY2thZ2UgemltYnJ1Y29kZVxuICogQHNpbmNlICAgMS4wLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBCYXNlIGZyb20gJy4vbW9kdWxlL2Jhc2UnO1xuXG56Yy5hZGRNb2R1bGUoJ3BhbmVsJywgKCQpID0+IHtcblxuICAgIGNvbnN0IHBhbmVsID0gbmV3IEJhc2U7XG4gICAgXG4gICAgLy8gQWZ0ZXIgbG9hZGluZyBwYWdlXG4gICAgJCgoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAocGFuZWwubW9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ3BhbmVsLm1vZGUgaXMgdW5kZWZpbmVkJztcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGlmICghJC5pc0Z1bmN0aW9uKHBhbmVsLm1vZGUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ3BhbmVsLm1vZGUgaXMgbm90IGZ1bmN0aW9uJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFuZWwuY2hlY2tCcm93c2VyQ29tcGF0aWJpbGl0eSgpO1xuICAgICAgICAgICAgcGFuZWwubW9kZSgkLCBwYW5lbCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoJCgnLnpjLXBhbmVsLXRlbXBsYXRlJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICQoJy56Yy1wYW5lbC10ZW1wbGF0ZScpLmVtcHR5KCkuYXBwZW5kKGA8ZGl2IGNsYXNzPVwiZXJyb3Igbm90aWNlXCI+PHA+PGI+JHtwYW5lbC5nZXRWYXIoJ2Jyb3dzZXItZXJyb3ItdGl0bGUnKX08L2I+IDogJHtlcnJvcn08L3A+PC9kaXY+YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJyN3cGJvZHktY29udGVudCcpLnByZXBlbmQoYDxkaXYgY2xhc3M9XCJlcnJvciBub3RpY2VcIj48cD48Yj4ke3BhbmVsLmdldFZhcignYnJvd3Nlci1lcnJvci10aXRsZScpfTwvYj4gOiAke2Vycm9yfTwvcD48L2Rpdj5gKTtcbiAgICAgICAgICAgICAgICBhbGVydChgJHtwYW5lbC5nZXRWYXIoJ2Jyb3dzZXItZXJyb3ItdGl0bGUnKX0gOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyAjIyMjIyMjIyMjIyMjIFBVQkxJQyBNRVRIT0RTICMjIyMjIyMjIyMjIyNcblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIEFkZCBjb250cm9sXG4gICAgICAgIGFkZENvbnRyb2w6IChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKSxcbiAgICAgICAgICAgICAgICAgIHNjcmlwdExvY2F0aW9uID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyYyxcbiAgICAgICAgICAgICAgICAgIGRhdGFIID0gc2NyaXB0TG9jYXRpb24uc3BsaXQoJy8nKSxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2xOYW1lID0gZGF0YUhbZGF0YUgubGVuZ3RoIC0gNV07XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xWYXJzID0gcGFuZWwuZ2V0VmFyKCdjb250cm9scycpW2NvbnRyb2xOYW1lXTtcbiAgICAgICAgICAgIHBhbmVsLnNlcnZpY2UoJ2NhbGxiYWNrJykuYWRkKCdjb250cm9sJywgY2FsbGJhY2ssIGNvbnRyb2xWYXJzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBBZGQgbW9kZVxuICAgICAgICBhZGRNb2RlOiAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIHBhbmVsLm1vZGUgPSBjYWxsYmFjaztcbiAgICAgICAgfVxuICAgIH1cbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==