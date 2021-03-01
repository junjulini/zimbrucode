
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : Code editor
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */

'use strict';

zc.module.panel.addControl(function($, panel) {

    window.zcPanel_Control_aceEditor = [];

    // ACE Editor
    $(window).on('zc/panel/menu/item-change-ICP', function(event, section) {
        section.find('.ace-editor').each(function(index, el) {
            var editor = $(el).data('editor'),
                aceEditor = ace.edit(editor);

            aceEditor.setTheme('ace/theme/' + $(el).data('theme'));
            aceEditor.getSession().setMode('ace/mode/' + $(el).data('mode'));

            if ($(el).data('readonly') == 'yes') {
                aceEditor.setReadOnly(true);
            }

            aceEditor.on('change', function(e) {
                $(el).val(aceEditor.getSession().getValue()).change();
            });

            $(el).data('zc-ace', aceEditor);

            window.zcPanel_Control_aceEditor.push(aceEditor);
        });
    });
});