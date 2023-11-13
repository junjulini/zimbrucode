
/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : Upload
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */

'use strict';

zc.module.panel.addControl(($, panel, global) => {
    panel.click('.zc-panel-control-upload__button', ($this) => {
        const l10n = _wpMediaViewsL10n;

        const frame = wp.media({
            title: l10n.chooseImage,
            multiple: false,
            library: {
                type: 'image'
            },
            button: {
                text: l10n.select
            }
        });

        // Open the frame dialog
        frame.open();

        // When a file is selected, grab the URL and set it as the text field's value
        frame.on('select', () => {
            const attachment = frame.state().get('selection').first().toJSON();

            if (attachment.type == 'image') {
                const id    = $this.attr('id');
                const image = attachment.sizes.large || attachment;

                $this.parent().find(`input[name=${id}]`).val(attachment.url).change();
                $this.parent().find(`input[name=${id}--large_image]`).val(image.url).change();
                $this.parent().find(`input[name=${id}--id]`).val(attachment.id).change();
                $this.parent().find('.zc-panel-control-upload__image-container').remove();
                $this.parent().append(`<div class="zc-panel-control-upload__image-container">\
                                            <i title="${global.remove}" class="zc-panel-control-upload__icon-close zc-icon-clear"></i>\
                                            <img src="${image.url}" alt="Image" class="zc-panel-control-upload__image" />\
                                        </div>`);
            }
        });
    });

    panel.click('.zc-panel-control-upload__icon-close', ($this) => {
        $this.parent().parent().find('input').val('').change();
        $this.parent().remove();
    });
});