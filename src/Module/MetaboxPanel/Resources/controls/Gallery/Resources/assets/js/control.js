
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : Gallery
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */

'use strict';

zc.module.panel.addControl(function($, panel, global) {
    var control = {};

    control.frame = '';

    control.parseData = function(container) {
        if (container && container !== undefined) {
            var data = [];

            console.log(container);
            

            container.find('.zc-panel-control-gallery-type__item').each(function(index, el) {
                var id = $(this).data('id');

                if (id && id !== undefined) {
                    data.push(id);
                }
            });

            if (data) {
                container.find('input[type=hidden]').val(zc.parse(data, true)).change();
            }
        }
    };

    control.makeSortable = function() {
        $('.zc-panel-control-gallery-type__list').sortable({
            opacity: 0.6,
            revert: 300,
            stop: function(event, ui) {
                control.parseData($(this).parent());
            }
        });
    };

    control.makeSortable();

    // Add new images
    $('.zc-panel').on('click', '.zc-panel-control-gallery-type__button', function(event) {
        event.preventDefault();
        /* Act on the event */

        var $this = $(this);

        if (control.frame) {
            control.frame.close();
        }

        control.frame = wp.media({
            title: global['window-title-1'],
            button: {
                text: global['window-text-1'],
            },
            library: {
                type: 'image'
            },
            multiple: 'add'
        });

        control.frame.on('select', function() {
            var data = control.frame.state().get('selection').toJSON();
            var list = $this.parent().find('.zc-panel-control-gallery-type__list');

            if (data && $.isArray(data)) {
                $.when($.each(data, function (index, attachment) {
                    if (attachment.type == 'image') {
                        list.append(
                            '<li class="zc-panel-control-gallery-type__item" data-id="'+ attachment.id +'">\
                                <img src="'+ attachment.sizes.thumbnail.url +'" width="80" height="80" class="zc-panel-control-gallery-type__image-preview">\
                                <button title="'+ global['button-title-1'] +'" class="zc-panel-control-gallery-type__item-button zc-panel-control-gallery-type__item-button_change-image">\
                                    <i class="zc-panel-control-gallery-type__item-button-icon zc-icon-brush"></i>\
                                </button>\
                                <button title="'+ global['button-title-2'] +'" class="zc-panel-control-gallery-type__item-button zc-panel-control-gallery-type__item-button_remove-image">\
                                    <i class="zc-panel-control-gallery-type__item-button-icon zc-icon-close"></i>\
                                </button>\
                            </li>');
                    }
                })).then(function() {
                    control.parseData($this.parent());
                });
            }
        });

        control.makeSortable();
        control.frame.open();
    });

    // Change image
    $('.zc-panel').on('click', '.zc-panel-control-gallery-type__item-button_change-image', function(event) {
        event.preventDefault();
        /* Act on the event */

        var $this = $(this);
        var container = $(this).parent().parent().parent();

        if (control.frame) {
            control.frame.close();
        }

        control.frame = wp.media({
            title: global['window-title-2'],
            button: {
                text: global['window-text-2'],
            },
            library: {
                type: 'image'
            },
            multiple: false
        });

        control.frame.on('select', function() {
            var attachment = control.frame.state().get('selection').first().toJSON();

            if (attachment.type == 'image') {
                $this.parent().data('id', attachment.id);
                $this.parent().find('.zc-panel-control-gallery-type__image-preview').attr('src', attachment.sizes.thumbnail.url);
                control.parseData(container);
            }
        });

        control.frame.open();
    });

    // Remove image
    $('.zc-panel').on('click', '.zc-panel-control-gallery-type__item-button_remove-image', function(event) {
        event.preventDefault();
        /* Act on the event */

        var container = $(this).parent().parent().parent();

        $(this).parent().animate({
            opacity: 0
        }, 200, function() {
            $(this).remove();
            control.parseData(container);
        });
    });
});