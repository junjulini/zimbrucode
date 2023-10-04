
/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : MetaboxPanel : Meta mode
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.3.0
 */

'use strict';

import BodySize from './module/mode/meta-mode-body-size';
import Backup   from './module/header/backup';
import Reset    from './module/header/reset';

zc.module.panel.addMode(($, panel) => {
    panel.addConfig('height-FAH', 56);
    panel.addConfig('min-size/mode2', 780);

    panel.closeBlock();          // Initializing of "close block"
    panel.controlInit();         // Initialization of controls
    panel.controlHelp();         // Control help window
    panel.scrollbar();           // Initialization of scroll bar
    panel.noMetaScaleIfMobile(); // Disable meta scale if mobile device
    panel.condition();           // Initialization of panel condition checker
    //panel.ifChanged();           // Check if some changes was made
    panel.tooltip();             // Initialization of tooltip
    panel.menu();                // Panel menu

    new BodySize; // Panel body size
    new Backup;   // Meta backup, import/export
    new Reset;    // Reset meta options

    $('.zc-panel-template__panel-loading').hide();
    $('.zc-panel.zc-panel_mode_meta').css('visibility', 'visible');

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