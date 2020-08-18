
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : MetaboxPanel : Meta mode
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */

'use strict';

import BodySize from './module/mode/meta-mode-body-size';
import Backup   from './module/header/backup';
import Reset    from './module/header/reset';

zc.module.panel.addMode(($, panel) => {

    panel.addConfig('height-FAH', 56);
    panel.addConfig('min-size/mode2', 780);

    panel.closeBlock();          // Init callback of close block.
    panel.controlInit();         // Initialization of controls.
    panel.controlHelp();         // Control help window.
    panel.scrollbar();           // Initialization of scroll bar in panel.
    panel.noMetaScaleIfMobile(); // Disable meta scale if mobile device.
    panel.condition();           // Initialization of panel condition checker.
    panel.tooltip();             // Init tooltip
    panel.menu();                // Panel menu.

    new BodySize; // Panel body size.
    new Backup;   // Meta backup, import/export.
    new Reset;    // Reset meta options.

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