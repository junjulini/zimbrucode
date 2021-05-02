
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : Image select
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */

'use strict';

zc.module.panel.addControl(($, panel) => {
    $('.zc-panel').on('click', '.zc-panel-control-image-select__item', function(event) {
        event.preventDefault();
        /* Act on the event */

        if (!$(this).hasClass('zc-panel-control-image-select__item_active')) {
            $(this).parent().find('.zc-panel-control-image-select__item_active').removeClass('zc-panel-control-image-select__item_active');
            $(this).addClass('zc-panel-control-image-select__item_active');
            $(this).parent().parent().find('input').val($(this).data('value')).change();
        }
    });
});