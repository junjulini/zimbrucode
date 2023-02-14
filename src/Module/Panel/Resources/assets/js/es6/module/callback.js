
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

'use strict';

const $ = jQuery;

export default class Callback {

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