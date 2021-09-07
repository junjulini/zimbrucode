
/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : ZimbruCode/Module/PopUp
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */

'use strict';

const $ = jQuery;

export default class RestAPI {
    constructor(url, nonce) {
        this.restURL = url;
        this.restNonce = nonce;
    }

    get(path, data = {}) {
        return this.__ajax('GET', path, data);
    }

    create(path, data = {}) {
        return this.__ajax('POST', path, data);
    }

    update(path, data = {}) {
        return this.__ajax('PUT', path, data);
    }

    delete(path) {
        return this.__ajax('DELETE', path);
    }

    query(path) {
        return this.restURL + path;
    }

    __ajax(method = 'GET', path, data) {
        const callbacks = {};

        const options = {
            url: this.restURL + path,
            dataType: 'json',
            method: method,
            data: data,
            headers: {
                'X-WP-Nonce': this.restNonce
            }
        };

        if (method == 'POST' || method == 'PUT') {
            options.processData = false;
            options.data = JSON.stringify(data);
            options.contentType = 'application/json; charset=UTF-8';
        }

        options.error = (jqXHR, textStatus) => {
            if ($.isFunction(callbacks.fail)) {
                callbacks.fail.call(this, jqXHR, textStatus);
            }
        }

        options.success = (response, textStatus, jqXHR) => {
            if ($.isFunction(callbacks.done)) {
                callbacks.done.call(this, response, textStatus, jqXHR);
            }
        }

        const output = zc.ajax(options);

        output.fail = (callback) => {
            callbacks.fail = callback;
            return output;
        };

        output.done = (callback) => {
            callbacks.done = callback;
            return output;
        };

        return output;
    }
}