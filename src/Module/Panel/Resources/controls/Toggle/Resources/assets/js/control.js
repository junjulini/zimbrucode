
/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : Toggle
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */

'use strict';

zc.module.panel.addControl(($, panel) => {
    $(document).on('click', '.zc-panel-control-toggle__header, .zc-panel-control-toggle__title-container', function(event) {
        event.preventDefault();
        /* Act on the event */

        $(this).parent().toggleClass('zc-panel-control-toggle_closed');
    });
});