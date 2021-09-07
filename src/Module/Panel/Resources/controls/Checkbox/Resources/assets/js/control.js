
/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : Checkbox
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */

'use strict';

zc.module.panel.addControl(($, panel) => {
    $('.zc-panel').on('click', '.zc-panel-control-checkbox__element', function(event) {
        if ($(this).hasClass('zc-panel-control-checkbox__element_active')) {
            $(this).removeClass('zc-panel-control-checkbox__element_active');
            $(this).parent().find('input[type=hidden]').val('off').change();
        } else {
            $(this).addClass('zc-panel-control-checkbox__element_active');
            $(this).parent().find('input[type=hidden]').val('on').change();
        }
    });
});