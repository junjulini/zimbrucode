
/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : Code editor
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */

'use strict';

zc.module.panel.addControl(($, panel) => {

    window.zcPanel_Control_aceEditor = [];

    // ACE Editor
    $(window).on('zc/panel/menu/item-change-ICP', (event, section) => {
        section.find('.ace-editor').each((index, el) => {
            ace.require("ace/ext/language_tools");

            const editor = $(el).data('editor'),
                  aceEditor = ace.edit(editor);

            aceEditor.setTheme('ace/theme/' + $(el).data('theme'));
            aceEditor.getSession().setMode('ace/mode/' + $(el).data('mode'));

            aceEditor.setOptions({
                enableBasicAutocompletion: true,
                enableSnippets: true,
                enableLiveAutocompletion: true
            });

            if ($(el).data('readonly') == 'yes') {
                aceEditor.setReadOnly(true);
            }

            aceEditor.on('change', (e) => {
                $(el).val(aceEditor.getSession().getValue()).change();
            });

            $(el).data('zc-ace', aceEditor);

            window.zcPanel_Control_aceEditor.push(aceEditor);
        });
    });
});