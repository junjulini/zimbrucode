
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : MetaboxPanel : Meta lite mode
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */

'use strict';

import BodySize from './module/mode/meta-lite-mode-body-size';

zc.module.panel.setMode(($, panel) => {

    panel.controlInit(); // Initialization of controls.
    panel.controlHelp(); // Control help window.
    panel.condition();   // Initialization of panel condition checker.
    panel.tooltip();     // Init tooltip

    // Panel body size.
    new BodySize;

    // Active section
    const section = $('.zc-panel .zc-panel-controls__section');
    panel.setCache('menu/current-section', section);
    $(window).trigger('zc/panel/menu/item-change-ICP', [section]);

    $('.zc-panel-template__panel-loading').hide(); // Hide panel loading text.
    $('.zc-panel').css('visibility', 'visible');   // Full display panel.

    /**
     * Disable save button
     * 
     * @return {null} None
     * @since 1.0.0
     */
    panel.disableSaveButton = () => {};

    /**
     * Enable save button
     * 
     * @return {null} None
     * @since 1.0.0
     */
    panel.enableSaveButton = () => {};

    /**
     * Disable reset button
     * 
     * @return {null} None
     * @since 1.0.0
     */
    panel.disableResetButton = () => {};

    /**
     * Enable reset button
     * 
     * @return {null} None
     * @since 1.0.0
     */
    panel.enableResetButton = () => {};
});