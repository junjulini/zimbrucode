
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : Radio
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */

'use strict';

zc.module.panel.setControl(function($, panel) {
    $('.zc-panel').on('click', '.zc-panel-control-radio__item-element', function(event) {
        event.preventDefault();
        /* Act on the event */

        if (!$(this).hasClass('zc-panel-control-radio__item-element_active')) {
            $(this).parent().parent().find('.zc-panel-control-radio__item-element_active').removeClass('zc-panel-control-radio__item-element_active');
            $(this).parent().parent().parent().find('input[type=hidden]').val($(this).data('value')).change();
            $(this).addClass('zc-panel-control-radio__item-element_active');
        }
    });

    $('.zc-panel').on('click', '.zc-panel-control-radio__item-title', function(event) {
        event.preventDefault();
        /* Act on the event */

        var el = $(this).parent().parent().find('.zc-panel-control-radio__item-element');

        if (!el.hasClass('zc-panel-control-radio__item-element_active')) {
            $(this).parent().parent().parent().find('.zc-panel-control-radio__item-element_active').removeClass('zc-panel-control-radio__item-element_active');
            $(this).parent().parent().parent().parent().find('input[type=hidden]').val(el.data('value')).change();
            el.addClass('zc-panel-control-radio__item-element_active');
        }
    });
});