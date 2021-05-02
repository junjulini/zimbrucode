
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : Section
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */

'use strict';

zc.module.panel.addControl(($, panel) => {
    $('.zc-panel').on('click', '.zc-panel-control-section__close', function(event) {
        event.preventDefault();
        /* Act on the event */

        $(this).parent().toggleClass('zc-panel-control-section_closed')
    });
});