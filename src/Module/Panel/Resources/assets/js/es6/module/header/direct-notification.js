
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

'use strict';

import Kernel                   from '../kernel';
import TPL__direct_notification from './tpl/direct-notification.html';

const $ = jQuery;

export default class DirectNotification extends Kernel {
    constructor() {
        super();

        this.timer    = false;
        this.type     = 'error';
        this.title    = 'Error';
        this.content  = 'General error ( AJAX / LOGIN / PHP Error )';
        this.duration = 3000;
        this.callback = () => {};
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
    add(type, title, content, duration, callback) {
        type     = type || this.type;
        title    = title || this.title;
        content  = content || this.content;
        duration = duration || this.duration;
        callback = callback || this.callback;

        clearTimeout(this.timer);
        
        const ae = 'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd',
              structure = zc.tpl(TPL__direct_notification, {
                type: type,
                title: title,
                content: content
             });

        $('.zc-panel-direct-notification').remove();
        $('.zc-panel-controls').prepend(structure);

        this.click('.zc-panel-direct-notification__close-controller', () => {
            $('.zc-panel-direct-notification').addClass('zc-panel-direct-notification_close');
            $('.zc-panel-direct-notification').one(ae, function() {
                $(this).remove();
            });

            clearTimeout(this.timer);
            callback.call();
        });

        this.timer = setTimeout(() => {
            $('.zc-panel-direct-notification').addClass('zc-panel-direct-notification_close');
            $('.zc-panel-direct-notification').one(ae, function() {
                $(this).remove();
            });

            clearTimeout(this.timer);
            callback.call();
        }, duration);
    }
}