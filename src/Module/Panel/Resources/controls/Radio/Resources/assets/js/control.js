
/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : Radio
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */

'use strict';

zc.module.panel.addControl(($, panel) => {
   panel.click('.zc-panel-control-radio__item-element', ($this) => {
        if (!$this.hasClass('zc-panel-control-radio__item-element_active')) {
            $this.parent().parent().find('.zc-panel-control-radio__item-element_active').removeClass('zc-panel-control-radio__item-element_active');
            $this.parent().parent().parent().find('input[type=hidden]').val($this.data('value')).change();
            $this.addClass('zc-panel-control-radio__item-element_active');
        }
    });

   panel.click('.zc-panel-control-radio__item-title', ($this) => {
        const el = $this.parent().parent().find('.zc-panel-control-radio__item-element');

        if (!el.hasClass('zc-panel-control-radio__item-element_active')) {
            $this.parent().parent().parent().find('.zc-panel-control-radio__item-element_active').removeClass('zc-panel-control-radio__item-element_active');
            $this.parent().parent().parent().parent().find('input[type=hidden]').val(el.data('value')).change();
            el.addClass('zc-panel-control-radio__item-element_active');
        }
    });
});