
/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Script : Panel/Module : Menu
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */

'use strict';

import Kernel from './kernel';

const $ = jQuery;

export default class Menu extends Kernel {
    constructor() {
        super();

        this.isSubmenuItem  = false;
        this.menuItemID     = false;
        this.menuItem       = false;
        this.submenuItem    = false;
        this.menuParentItem = false;

        this.desktop(); // Init desktop mode
        this.mobile();  // Init mobile mode
    }

    /**
     * Remove condition : submenu-active
     * 
     * @return {null} None
     * @since 1.0.0
     */
    removeSubmenuActive() {
        $('.zc-panel-menu').removeClass('zc-panel-menu_submenu-active');
        $('.zc-panel-content').removeClass('zc-panel-content_submenu-active');
    }

    /**
     * Add condition : submenu-active
     * 
     * @return {null} None
     * @since 1.0.0
     */
    addSubmenuActive() {
        $('.zc-panel-menu').addClass('zc-panel-menu_submenu-active');
        $('.zc-panel-content').addClass('zc-panel-content_submenu-active');
    }

    /**
     * Is submenu active
     * 
     * @return {null} None
     * @since 1.0.0
     */
    isSubmenuActive() {
        return ($('.zc-panel-menu').hasClass('zc-panel-menu_submenu-active') && $('.zc-panel-content').hasClass('zc-panel-content_submenu-active'));
    }

    /**
     * Display section
     * 
     * @return {null} None
     * @since 1.0.0
     */
    displaySection(menuItemID) {
        const menuItem = $(`.zc-panel-menu li[data-menu-item-id="${menuItemID}"]`);

        // Add icon
        const titleIconClass = menuItem.find('i').first().attr('class').match(/\bzc-icon\S+/g)[0];
        $('.zc-panel-header__title-icon').removeClass((index, className) => {
            return (className.match(/\bzc-icon\S+/g) || []).join(' ');
        }).addClass(titleIconClass);

        // Add title
        $('.zc-panel-header__title').text(menuItem.find('span').text());

        // Remove / active content section
        if (this.menuItemID) {
            $(`.zc-panel-controls__section[data-section="${this.menuItemID}"]`).removeClass('zc-panel-controls__section_active');
        }

        const section = $(`.zc-panel-controls__section[data-section="${menuItemID}"]`);

        section.addClass('zc-panel-controls__section_active');
        $(window).trigger('zc/panel/menu/item-change');
        this.addCache('menu/current-section', section);

        if (!section.hasClass('zc-panel-controls__section_ICP')) {
            section.addClass('zc-panel-controls__section_ICP');

            // Event
            $(window).trigger('zc/panel/menu/item-change-ICP', [section]);
        }

        // Remove / active menu item
        if (menuItem.parent().hasClass('zc-panel-submenu__list')) {
            let submenuItem = menuItem.parent().parent().parent().parent();

            if (submenuItem.hasClass('zc-panel-submenu__scrollbar-container')) {
                submenuItem = submenuItem.parent();
            }

            submenuItem.addClass('zc-panel-submenu__container_active');

            const submenuItemID  = submenuItem.data('menu-container-id');
            const menuParentItem = $(`.zc-panel-menu__item_type_parent[data-menu-container-id="${submenuItemID}"]`);

            menuItem.addClass('zc-panel-submenu__item_active');
            menuParentItem.addClass('zc-panel-menu__item_active');

            if (!this.isSubmenuActive()) {
                this.addSubmenuActive();
            }

            // Add global data
            this.isSubmenuItem  = true;
            this.submenuItem    = submenuItem;
            this.menuParentItem = menuParentItem;
        } else {
            menuItem.addClass('zc-panel-menu__item_active');

            if (this.isSubmenuActive()) {
                this.removeSubmenuActive();
            }

            // Add global data
            this.isSubmenuItem  = false;
            this.submenuItem    = false;
            this.menuParentItem = false;
        }

        // Add global data
        this.menuItem   = menuItem;
        this.menuItemID = menuItemID;
    }

    /**
     * Preparing menu item
     * 
     * @return {null} None
     * @since 1.0.0
     */
    prepMenuItem(menuItemID) {
        if (!this.isSubmenuItem) {
            this.menuItem.removeClass('zc-panel-menu__item_active');
            this.displaySection(menuItemID);
        } else {
            this.menuItem.removeClass('zc-panel-submenu__item_active');
            this.menuParentItem.removeClass('zc-panel-menu__item_active');
            this.submenuItem.removeClass('zc-panel-submenu__container_active');
            this.displaySection(menuItemID);
        }

        $('.zc-panel-content .zc-scrollbar').scrollTop(0);
    }

    /**
     * Desktop mode
     * 
     * @return {null} None
     * @since 1.0.0
     */
    desktop() {
        let menuItemID = '';

        if ($.param.fragment()) {
            menuItemID = $.param.fragment() || '';
        }

        if ($(`.zc-panel-menu li[data-menu-item-id="${menuItemID}"]`).length === 0) {
            let menuItem = $('.zc-panel-menu__list .zc-panel-menu__item_type_simple').first();
            menuItemID = menuItem.data('menu-item-id');

            if (!menuItemID) {
                const submenuItemID = menuItem.data('menu-container-id');

                menuItem = $(`.zc-panel-submenu__container[data-menu-container-id=${submenuItemID}] .zc-panel-submenu__item_type_simple`).first();
                menuItemID = menuItem.data('menu-item-id');
            }
        }

        this.displaySection(menuItemID);

        // When hash change
        $(window).on('hashchange.zc-panel', (event) => {
            let menuItemID = $.param.fragment() ? $.param.fragment() : '';

            if ($(`.zc-panel-menu li[data-menu-item-id="${menuItemID}"]`).length === 0) {
                menuItemID = undefined;
            }

            if (menuItemID !== undefined) {
                this.prepMenuItem(menuItemID);
            }
        });

        // When click on parent menu item
        this.click('.zc-panel-menu__item_type_parent', ($this) => {
            const submenuItemID = $this.data('menu-container-id');
            const menuItem      = $(`.zc-panel-submenu__container[data-menu-container-id=${submenuItemID}] .zc-panel-submenu__item_type_simple`).first();
            const menuItemID    = menuItem.data('menu-item-id');

            if (menuItemID !== undefined) {
                window.location.hash = menuItemID;
            }
        });

        // When click on menu item
        this.click('.zc-panel-menu__item_type_simple:not(.zc-panel-menu__item_active)', ($this) => {
            const menuItemID = $this.data('menu-item-id');

            if (menuItemID !== undefined) {
                window.location.hash = menuItemID;
            }
        });


        // When click on submenu item
        this.click('.zc-panel-submenu__item_type_simple:not(.zc-panel-submenu__item_active)', ($this) => {
            const menuItemID = $this.data('menu-item-id');

            if (menuItemID) {
                window.location.hash = menuItemID;
            }
        });
    }

    /**
     * Mobile mode
     * 
     * @return {null} None
     * @since 1.0.0
     */
    mobile() {
        this.click('.zc-panel-header__controller-button_type_mobile-menu', ($this) => {
            if ($this.hasClass('zc-panel-header__controller-button_type_mobile-menu_active')) {
                $this.removeClass('zc-panel-header__controller-button_type_mobile-menu_active');
                $('.zc-panel-content').removeClass('zc-panel-content_mobile-menu-visible');

                $this.one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', () => {
                    $('.zc-panel-controls').height('auto');
                });

                this.service('close-block').hideDefinitely();
            } else {
                $this.addClass('zc-panel-header__controller-button_type_mobile-menu_active');
                $('.zc-panel-content').addClass('zc-panel-content_mobile-menu-visible');

                let initNavHeight = $('.zc-panel-menu__container').height(),
                    navHeight     = $('.zc-panel-menu__list').height() + this.getConfig('height-FAH'),
                    controlsHeight  = $('.zc-panel-controls').height();

                if (initNavHeight > navHeight) {
                    navHeight = initNavHeight;
                }

                if (navHeight > controlsHeight) {
                    $('.zc-panel-controls').height(navHeight - this.getConfig('height-FAH'));
                    $('.zc-panel-submenu__scrollbar-container').height(navHeight - this.getConfig('header-height'));
                }

                let menuItemID = $.param.fragment() ? $.param.fragment() : '';

                if ($(`.zc-panel-menu li[data-menu-item-id="${menuItemID}"]`).length === 0) {
                    menuItemID = undefined;
                }

                if (menuItemID !== undefined) {
                    this.prepMenuItem(menuItemID);
                }

                this.service('close-block').show();
                this.scrollbarTop();
            }
        });

        $(window).on('zc/close-block.zc-panel', () => {
            if ($('.zc-panel-header__controller-button_type_mobile-menu').hasClass('zc-panel-header__controller-button_type_mobile-menu_active')) {
                $('.zc-panel-header__controller-button_type_mobile-menu').removeClass('zc-panel-header__controller-button_type_mobile-menu_active');
                $('.zc-panel-content').removeClass('zc-panel-content_mobile-menu-visible');

                $('.zc-panel-header__controller-button_type_mobile-menu').one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', () => {
                    $('.zc-panel-controls').height('auto');
                });

                this.service('close-block').hideDefinitely();
            }
        });

        this.click('.zc-panel-submenu__header-section_mode_mobile', () => {
            this.removeSubmenuActive();
            this.scrollbarTop();
            window.location.hash = '';
        });
    }
}