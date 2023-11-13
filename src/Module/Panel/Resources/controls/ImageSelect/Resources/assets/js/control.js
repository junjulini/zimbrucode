
/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : Image select
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */

'use strict';

zc.module.panel.addControl(($, panel) => {
    panel.click('.zc-panel-control-image-select__item', ($this) => {
        if (!$this.hasClass('zc-panel-control-image-select__item_active')) {
            $this.parent().find('.zc-panel-control-image-select__item_active').removeClass('zc-panel-control-image-select__item_active');
            $this.addClass('zc-panel-control-image-select__item_active');
            $this.parent().parent().find('input').val($this.data('value')).change();
        }
    });
});