
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel : Page mode
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */

'use strict';

import BodySize      from './module/mode/panel-page-mode-body-size';
import OptionHandler from './module/header/option-handler';
import QuickLinks    from './module/header/quick-links';

zc.module.panel.setMode(($, panel) => {
    const priv = {};

    priv.addLoadingData = (msg = '', percent) => {
        $('.zc-panel-template__panel-loading-value').text(msg);
        $('.zc-panel-template__panel-loading-progress-total').width(Math.floor(percent) + '%');
    };

    // Load
    $.ajax({
        type: 'post',
        dataType: 'html',
        url: ajaxurl,
        data: {
            action: 'zc/module/panel/content_' + panel.getVar('slug'),
            _ajax_nonce: panel.getVar('nonce')
        },
        xhr: () => {
            const xhr = new window.XMLHttpRequest();

            // Download progress
            xhr.addEventListener('progress', (event) => {
                if (event.lengthComputable && event.total > 0) {
                    const percent = Math.floor((event.loaded / event.total) * 100);

                    priv.addLoadingData(`${percent} %`, percent);
                } else {
                    const total = xhr.getResponseHeader('X-Content-Length');
                    const percent = Math.floor((event.loaded / total) * 100);

                    priv.addLoadingData(`${percent} %`, percent);
                }
            }, false);

            return xhr;
        },
        error: (status) => {
            panel.errorCheck(' Panel : Content load', status);
        },
        success: (data) => {
            if (data <= 0) {
                zc.confirm({
                    title: 'Error - AJAX',
                    subject: 'Error : Cannot connect to AJAX Module or you are not logged. Page will be reloaded, ok?',
                    titleOK: panel.getVar('optionsResetOk'),
                    titleCancel: panel.getVar('optionsResetCancel'),
                    class: 'zc-panel-error-confirm',
                    ok: () => {
                        location.reload();
                    }
                });
            }

            $('.zc-panel-template').append(data);

            // Set wp body height
            panel.setConfig('wp-body-height', $(window).height());

            panel.closeBlock();          // Init callback of close block.
            panel.controlInit();         // Initialization of controls.
            panel.controlHelp();         // Control help window.
            panel.scrollbar();           // Initialization of scroll bar in panel.
            panel.noMetaScaleIfMobile(); // Disable meta scale if mobile device.
            panel.condition();           // Initialization of panel condition checker.
            panel.ifChanged();           // Check if some changes was made.
            panel.tooltip();             // Init tooltip
            panel.menu();                // Panel menu.

            new BodySize;                // Panel body size.
            new OptionHandler;           // Save/Reset function.
            new QuickLinks;              // Initialization of panel button "Quick Links".

            setTimeout(() => {
                $('.zc-panel-template__panel-loading').hide();  // Hide panel loading text.
                $('.zc-panel').css('visibility', 'visible');    // Full display panel.

                panel.setCache('first-start', true);
                $(window).trigger('zc/panel/show-content');
            }, 50);
        }
    });

    /**
     * Disable save button
     * 
     * @return {null} None
     * @since 1.0.0
     */
    panel.disableSaveButton = () => {
        $('.zc-panel-save-starter-button').prop('disabled', true).addClass('zc-panel-header__controller-button_disabled');
    };

    /**
     * Enable save button
     * 
     * @return {null} None
     * @since 1.0.0
     */
    panel.enableSaveButton = () => {
        $('.zc-panel-save-starter-button').prop('disabled', false).removeClass('zc-panel-header__controller-button_disabled');
    };

    /**
     * Disable reset button
     * 
     * @return {null} None
     * @since 1.0.0
     */
    panel.disableResetButton = () => {
        $('.zc-panel-reset-starter-button').prop('disabled', true).addClass('zc-panel-header__controller-button_disabled');
    };

    /**
     * Enable reset button
     * 
     * @return {null} None
     * @since 1.0.0
     */
    panel.enableResetButton = () => {
        $('.zc-panel-reset-starter-button').prop('disabled', false).removeClass('zc-panel-header__controller-button_disabled');
    };
});