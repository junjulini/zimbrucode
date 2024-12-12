
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
 * @since   1.3.4
 */

'use strict';

import Kernel from './kernel';

const $ = jQuery;

export default class Condition extends Kernel {

    /**
     * Constructor
     * 
     * @since 1.3.4
     */
    constructor() {
        super();

        this.regex = /(.+?):(notEmpty|empty|is|not|contains|<|<=|>|>=)\((.*?)\),?/g;

        this.controlsNodes = new Map;
        this.cache         = new Map;

        this.dataCaching();
        this.firstStart();
        this.onChange();
    }

    /**
     * Data caching
     * 
     * @return {null}   None
     * @since 1.3.4
     */
    dataCaching() {
        document.querySelectorAll('.zc-panel .zc-panel-controls [data-option]').forEach((item) => {
            let key = item.getAttribute('name');

            if (key === null) {
                key = item.getAttribute('id');
            }

            if (key !== null) {
                this.controlsNodes.set(key, item);
            }
        });

        document.querySelectorAll('.zc-panel .zc-panel-controls [data-condition]').forEach((item) => {
            let match;

            while (match = this.regex.exec(item.dataset.condition)) {
                let key = this.getVar('prefix-slug') + match[1];

                if (key) {
                    if (this.cache.has(key) === false) {
                        this.cache.set(key, new Map);
                    }

                    this.cache.get(key).set(item, item);
                }
            }
        });
    }

    /**
     * Find items
     * 
     * @return {null}   None
     * @since 1.3.4
     */
    firstStart() {
        this.cache.forEach((el) => {
            el.forEach((childNode) => {
                this.parse($(childNode), true);
            });
        });
    }

    /**
     * Check if any item has changed
     * 
     * @return {null}   None
     * @since 1.3.4
     */
    onChange() {
        $('.zc-panel .zc-panel-controls').on('change', '[data-option]', (event) => {
            event.preventDefault();
            event.stopPropagation();
            /* Act on the event */

            const $this = $(event.currentTarget);
            let key     = $this.attr('name') || '';

            key = key.replace('[]', '');

            if (this.cache.has(key)) {
                this.cache.get(key).forEach((childNode) => {
                    this.parse($(childNode));
                });
            }

            if ($this.data('i') === undefined) {
                if (!$this.hasClass('wp-editor-area')) {
                    this.addCache('changed', true);
                    $(window).trigger('zc/panel/if-changed');
                } else {
                    if (this.getCache('mce-loaded') === true) {
                        this.addCache('changed', true);
                        $(window).trigger('zc/panel/if-changed');
                    }
                }
            }

            return false;
        });
    }

    /**
     * Parse by conditions
     * 
     * @param {object}  control      Control object
     * @param {boolean} firstStart   First start
     * @return {null}                None
     * @since 1.3.4
     */
    parse(control, firstStart) {
        let passed,
            conditions = this.prepConditions(control.data('condition')),
            operator = (control.data('condition-operator') || 'and').toLowerCase();

        $.each(conditions, (index, condition) => {
            const key = this.getVar('prefix-slug') + condition.check;

            if (this.controlsNodes.has(key)) {
                let result;
                const target = $(this.controlsNodes.get(key));
                const v1     = target.val() !== null ? target.val().toString() : '';
                const v2     = condition.value.toString();

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
    }

    /**
     * Preparing conditions
     * 
     * @return {null}   None
     * @since 1.3.4
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

    /**
     * 
     * @param {object} element   Node
     * @param {string} selector  Search
     * @returns {bool}           Return true if found
     * @since 1.3.4
     */
    is(element, selector) {
        return (element.matches || element.matchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.webkitMatchesSelector || element.oMatchesSelector).call(element, selector);
    }
}