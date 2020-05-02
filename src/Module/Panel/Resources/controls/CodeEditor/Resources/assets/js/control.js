
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

zc.module.panel.setControl(function($, panel) {

    window.zcPanel_Control_aceEditor = [];

    // ACE Editor
    $(window).on('zc/panel/menu/item-change-ICP', function(event, section) {
        section.find('.ace-editor').each(function(index, el) {
            var area = el,
                editor = $(el).attr('data-editor'),
                aceEditor = ace.edit(editor);

            aceEditor.setTheme('ace/theme/' + $(el).attr('data-theme'));
            aceEditor.getSession().setMode('ace/mode/' + $(el).attr('data-mode'));

            aceEditor.on('change', function(e) {
                $('#' + area.id).val(aceEditor.getSession().getValue()).change();
            });

            window.zcPanel_Control_aceEditor.push(aceEditor);
        });
    });
});