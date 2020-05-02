<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Debug;

use Tracy\IBarPanel;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : DevLogTracyBarExtension
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class DevLogTracyBarExtension implements IBarPanel
{
    public $data;

    /**
     * Renders HTML code for custom tab
     * 
     * @return string
     * @since 1.0.0
     */
    public function getTab()
    {
        ob_start();
        if (empty($this->data)) {
            return '';
        }

        ?>
        <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
            <g fill="#90CAF9">
                <path d="M17.4,33H15v-4h4l0.4,1.5C19.7,31.8,18.7,33,17.4,33z"/>
                <path d="M37,36c0,0-11.8-7-18-7V15c5.8,0,18-7,18-7V36z"/>
            </g>
            <g fill="#283593">
                <circle cx="9" cy="22" r="5"/>
                <path d="M40,19h-3v6h3c1.7,0,3-1.3,3-3S41.7,19,40,19z"/>
                <path d="M18.6,41.2c-0.9,0.6-2.5,1.2-4.6,1.4c-0.6,0.1-1.2-0.3-1.4-1L8.2,27.9c0,0,8.8-6.2,8.8,1.1 c0,5.5,1.5,8.4,2.2,9.5c0.5,0.7,0.5,1.6,0,2.3C19,41,18.8,41.1,18.6,41.2z"/>
            </g>
            <path fill="#3F51B5" d="M9,29h10V15H9c-1.1,0-2,0.9-2,2v10C7,28.1,7.9,29,9,29z"/>
            <path fill="#42A5F5" d="M38,38L38,38c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v28C40,37.1,39.1,38,38,38z"/>
        </svg>
        <span class="tracy-label"><?php echo esc_html__('Log collector', 'zc'); ?></span>
        <?php

        return ob_get_clean();
    }

    /**
     * Renders HTML code for custom panel
     * 
     * @return string
     * @since 1.0.0
     */
    public function getPanel()
    {
        ob_start();
        ?>
        <style class="tracy-debug">
            #tracy-debug .tracy-DumpPanel h2 {
                font: 11pt/1.5 sans-serif;
                margin: 0;
                padding: 2px 8px;
                color: white;
            }
        </style>

        <h1><?php echo esc_html__('Log collector', 'zc'); ?></h1>

        <div class="tracy-inner tracy-DumpPanel">
            <?php foreach ($this->data as $item): ?>
                <?php if ($item['title']): ?>
                    <?php
                    $color = htmlspecialchars($item['color'], ENT_NOQUOTES, 'UTF-8');
                    $title = htmlspecialchars($item['title'], ENT_NOQUOTES, 'UTF-8');
                    ?>
                    <h2 <?php echo "style=\"background:{$color}\""; ?>><?php echo $title; ?></h2>
                <?php endif; ?>

                <?php echo $item['dump']; ?>
            <?php endforeach; ?>
        </div>
        <?php

        return ob_get_clean();
    }
}
