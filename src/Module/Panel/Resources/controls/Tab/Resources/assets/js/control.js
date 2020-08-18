
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : Tab
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */

'use strict';

zc.module.panel.addControl(function($, panel) {

    $('.zc-panel-control-tab').on('click', '.zc-panel-control-tab__element', function(event) {
        event.preventDefault();
        /* Act on the event */

        $(this).parent().find('.zc-panel-control-tab__element_active').removeClass('zc-panel-control-tab__element_active');
        $(this).addClass('zc-panel-control-tab__element_active');

        $(this).parent().parent().find('.zc-panel-control-tab__section_active').removeClass('zc-panel-control-tab__section_active');
        $(this).parent().parent().find('.zc-panel-control-tab__section[data-id="' + $(this).data('id') + '"]').addClass('zc-panel-control-tab__section_active');
    });

});