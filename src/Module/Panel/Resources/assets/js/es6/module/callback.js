
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

'use strict';

const $ = jQuery;

export default class Callback {
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