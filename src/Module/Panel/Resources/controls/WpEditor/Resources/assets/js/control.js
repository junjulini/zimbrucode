
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : WP Editor
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */

'use strict';

zc.module.panel.addControl(function($, panel) {

    var control = {};
    var interval = 1000;

    control.initWpEditor = function(element) {
        var id = element.attr('id');

        if (tinyMCEPreInit.qtInit[id] !== undefined) {
            tinymce.execCommand('mceRemoveEditor', true, id);
        }

        if (tinyMCEPreInit.qtInit[id] !== undefined) {
            window.tinyMCEPreInit.qtInit[id] = $.extend({}, window.tinyMCEPreInit.qtInit[window.wpActiveEditor], {
                id: id
            });
        }

        if (window.tinyMCEPreInit && window.tinyMCEPreInit.mceInit[window.wpActiveEditor]) {
            window.tinyMCEPreInit.mceInit[id] = $.extend({}, window.tinyMCEPreInit.mceInit[window.wpActiveEditor], {
                resize: 'vertical',
                id: id,
                setup: function(ed) {
                    var timer = false;
    
                    if (typeof ed.on != 'undefined') {
                        ed.on('init', function(ed) {
                            window.wpActiveEditor = id;
                        });
    
                        ed.on('keyup', function(e) {
                            clearTimeout(timer);
    
                            // Check after {interval} 
                            timer = setTimeout(function() {
                                clearTimeout(timer);
    
                                $('#' + ed.id).html(ed.getContent());
                                $(window).trigger('zc/panel/if-changed');
                            }, interval);
                        });
                    } else {
                        ed.onInit.add(function(ed) {
                            window.wpActiveEditor = id;
                        });
                    }
                }
            });

            window.tinyMCEPreInit.mceInit[id].plugins = window.tinyMCEPreInit.mceInit[id].plugins.replace(/,?wpfullscreen/, '');
            window.tinyMCEPreInit.mceInit[id].wp_autoresize_on = false;
        }
        
        quicktags(window.tinyMCEPreInit.qtInit[id]);
        QTags._buttonsInit();

        if (window.tinymce && window.switchEditors && '4' === tinymce.majorVersion) {
            window.switchEditors.go(id, 'tmce');
            tinymce.execCommand('mceAddEditor', true, id);
        }

        window.wpActiveEditor = id;
    };

    setTimeout(function() {
        if (window.location.href.indexOf('post.php') == -1) {
            $('.zc-panel .wp-editor-area').each(function(index, el) {
                if (window.tinyMCEPreInit.mceInit.content === undefined) {
                    control.initWpEditor($(this));
                }
            });
        }
    }, 100);
});