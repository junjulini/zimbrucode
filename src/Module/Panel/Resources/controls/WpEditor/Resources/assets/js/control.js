
/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : WP editor
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */

'use strict';

zc.module.panel.addControl(($, panel) => {
    const control = {};

    control.initWpEditor = (element) => {
        const editorID = element.attr('id');

        if (editorID && tinyMCEPreInit && window.wpActiveEditor) {
            if (tinyMCEPreInit.qtInit[window.wpActiveEditor] !== undefined) {
                if (tinyMCEPreInit.qtInit[editorID] !== undefined) {
                    tinymce.execCommand('mceRemoveEditor', true, editorID);
                }

                tinyMCEPreInit.qtInit[editorID] = $.extend(true, tinyMCEPreInit.qtInit[window.wpActiveEditor], {
                    id: editorID
                });

                quicktags(tinyMCEPreInit.qtInit[editorID]);
                QTags._buttonsInit();
            }

            if (tinyMCEPreInit.mceInit[window.wpActiveEditor] !== undefined) {
                tinyMCEPreInit.mceInit[editorID] = $.extend(true, tinyMCEPreInit.mceInit[window.wpActiveEditor], {
                    resize: 'vertical',
                    id: editorID,
                    setup: (editor) => {
                        if (typeof editor.on != 'undefined') {
                            editor.on('init', () => {
                                window.wpActiveEditor = editorID;
                            });

                            editor.on('keyup change undo redo', () => {
                                $('#' + editor.id).val(editor.getContent()).change();
                            });
                        } else {
                            editor.onInit.add(() => {
                                window.wpActiveEditor = editorID;
                            });
                        }
                    }
                });

                tinyMCEPreInit.mceInit[editorID].plugins = tinyMCEPreInit.mceInit[editorID].plugins.replace(/,?wpfullscreen/, '');
                tinyMCEPreInit.mceInit[editorID].wp_autoresize_on = false;
            }

            if (tinymce && switchEditors && '4' === tinymce.majorVersion) {
                switchEditors.go(editorID, 'tmce');
                tinymce.execCommand('mceAddEditor', true, editorID);
            }

            window.wpActiveEditor = editorID;
        }
    };

    setTimeout(() => {
        if (window.location.href.indexOf('post.php') == -1) {
            $('.zc-panel .wp-editor-area').each(function () {
                if (tinyMCEPreInit.mceInit.content === undefined) {
                    control.initWpEditor($(this));
                }
            });
        }
    }, 100);
});