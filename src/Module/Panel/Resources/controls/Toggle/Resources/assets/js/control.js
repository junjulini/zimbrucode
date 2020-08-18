
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : Toggle
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */

'use strict';

zc.module.panel.addControl(function($, panel) {

    $('.zc-panel-control-toggle').on('click', '.zc-panel-control-toggle__header, .zc-panel-control-toggle__title-container', function(event) {
        event.preventDefault();
        /* Act on the event */

        $(this).parent().toggleClass('zc-panel-control-toggle_closed');
    });

});