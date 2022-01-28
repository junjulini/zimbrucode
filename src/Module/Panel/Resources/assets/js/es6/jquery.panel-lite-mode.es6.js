
/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel - Lite mode
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */

'use strict';

import BodySize      from './module/mode/panel-lite-mode-body-size';
import OptionHandler from './module/header/option-handler';
import QuickLinks    from './module/header/quick-links';

zc.module.panel.addMode(($, panel) => {

    setTimeout(() => {
        panel.closeBlock();          // Initializing of "close block"
        panel.controlInit();         // Initialization of controls
        panel.controlHelp();         // Control help window
        panel.scrollbar();           // Initialization of scroll bar in panel
        panel.noMetaScaleIfMobile(); // Disable meta scale if mobile device
        panel.condition();           // Initialization of panel condition checker
        panel.ifChanged();           // Check if some changes was made
        panel.tooltip();             // Initialization of tooltip

        new BodySize;                 // Panel body size
        const oh = new OptionHandler; // Options handler
        new QuickLinks;               // Initialization of panel button "Quick Links".

        panel.addCache('option-handler', oh);

        // Active section
        const section = $('.zc-panel .zc-panel-controls__section');
        panel.addCache('menu/current-section', section);
        $(window).trigger('zc/panel/menu/item-change-ICP', [section]);

        $('.zc-panel-template__panel-loading').hide();
        $('.zc-panel').css('visibility', 'visible');

        $(window).trigger('zc/panel/show-content');
    }, 100);

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