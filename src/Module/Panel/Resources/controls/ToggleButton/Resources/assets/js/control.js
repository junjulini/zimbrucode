
/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : Toggle button
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */

'use strict';

zc.module.panel.addControl(($, panel) => {
    $('.zc-panel').on('click', '.zc-panel-control-toggle-button__checkbox', function(event) {
        if ($(this).prop('checked')) {
            $(this).parent().find('input[type=hidden]').val('on').change();
        } else {
            $(this).parent().find('input[type=hidden]').val('off').change();
        }
    });
});