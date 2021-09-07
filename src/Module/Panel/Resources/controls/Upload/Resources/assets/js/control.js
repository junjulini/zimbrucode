
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
 * @since   1.0.0
 */

'use strict';

zc.module.panel.addControl(($, panel, global) => {
    $('.zc-panel').on('click', '.zc-panel-control-upload__button', function(event) {
        event.preventDefault();
        /* Act on the event */

        const button = $(this);
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
        frame.on('select', function(event) {
            const attachment = frame.state().get('selection').first().toJSON();

            if (attachment.type == 'image') {
                const id = button.attr('id');
                const image = attachment.sizes.large || attachment;

                button.parent().find(`input[name=${id}]`).val(attachment.url).change();
                button.parent().find(`input[name=${id}--large_image]`).val(image.url).change();
                button.parent().find(`input[name=${id}--id]`).val(attachment.id).change();
                button.parent().find('.zc-panel-control-upload__image-container').remove();
                button.parent().append(`<div class="zc-panel-control-upload__image-container">\
                                            <i title="${global.remove}" class="zc-panel-control-upload__icon-close zc-icon-clear"></i>\
                                            <img src="${image.url}" alt="Image" class="zc-panel-control-upload__image" />\
                                        </div>`);
            }
        });
    });

    $('.zc-panel').on('click', '.zc-panel-control-upload__icon-close', function(event) {
        event.preventDefault();
        /* Act on the event */

        $(this).parent().parent().find('input').val('').change();
        $(this).parent().remove();
    });
});