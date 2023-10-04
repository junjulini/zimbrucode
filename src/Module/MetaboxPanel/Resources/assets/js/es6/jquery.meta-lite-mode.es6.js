
/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : MetaboxPanel : Meta lite mode
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */

'use strict';

import BodySize from './module/mode/meta-lite-mode-body-size';

zc.module.panel.addMode(($, panel) => {
    panel.controlInit(); // Initialization of controls
    panel.controlHelp(); // Control help window
    panel.condition();   // Initialization of panel condition checker
    //panel.ifChanged();   // Check if some changes was made
    panel.tooltip();     // Initialization of tooltip

    // Panel body size
    new BodySize;

    // Active section
    const section = $('.zc-panel.zc-panel_mode_meta-lite .zc-panel-controls__section');
    panel.addCache('menu/current-section', section);
    $(window).trigger('zc/panel/menu/item-change-ICP', [section]);

    $('.zc-panel-template__panel-loading').hide();
    $('.zc-panel.zc-panel_mode_meta-lite').css('visibility', 'visible');

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