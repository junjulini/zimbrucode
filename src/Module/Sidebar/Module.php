<?php

/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\Sidebar;

use ZimbruCode\Component\Core\ModuleKernel;

/**
 * Module : Sidebar
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */
class Module extends ModuleKernel
{
    /**
     * Module setup
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function setup()
    {

    }

    public $widgetClass = '';
    public $beforeTitle = '<h3>';
    public $afterTitle  = '</h3>';

    protected $sidebars = [];
    protected $search   = [' ', ',', '.', '"', "'", '/', '\\', '+', '=', ')', '(', '*', '&', '^', '%', '$', '#', '@', '!', '~', '`', '<', '>', '?', '[', ']', '{', '}', '|', ':'];

    /**
     * Run generator
     * 
     * @param  string $sidebar   Additional sidebar
     * @return void              This function does not return a value
     * @since 1.0.0
     */
    public function runGenerator($sidebar = 'Blog Sidebar')
    {
        $this->addAction('widgets_init', '__action_generator');
        self::setGlobalCache('sidebars', $this->getSidebarsWith($sidebar));
    }

    /**
     * Register sidebars
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function regSidebars()
    {
        $this->addAction('widgets_init', '__action_register_sidebars');
    }

    /**
     * Get all sidebars
     * 
     * @return array   Sidebars
     * @since 1.0.0
     */
    public function getSidebars()
    {
        return get_option(self::getGlobal('app/slug') . '_sidebar_generator');
    }

    /**
     * Get all sidebars
     * 
     * @param  string $sidebar   Additional sidebar
     * @return array             Sidebars
     * @since 1.0.0
     */
    public function getSidebarsWith($sidebar = '')
    {
        if ($sidebar && is_string($sidebar)) {
            $output[$sidebar] = $sidebar;
        } else {
            $output = [];
        }

        if ($sidebars = $this->getSidebars()) {
            foreach ($sidebars as $key => $value) {
                $output[$key] = $value;
            }
        }

        return $output;
    }

    /**
     * Clean the name
     * 
     * @param  string $name
     * @return string
     * @since 1.0.0
     */
    public function getNameToClass($name = '')
    {
        return str_replace($this->search, '', $name);
    }

    /**
     * Set sidebar
     * 
     * @param array $sidebar
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function setSidebar(array $sidebar = [])
    {
        $this->sidebars[] = $sidebar;
    }

    /**
     * Action : Register sidebars
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function __action_register_sidebars()
    {
        if (is_array($this->sidebars)) {
            foreach ($this->sidebars as $sidebar) {
                register_sidebar([
                    'name'          => $sidebar['name'],
                    'id'            => $sidebar['id'],
                    'before_widget' => $sidebar['before_widget'],
                    'after_widget'  => $sidebar['after_widget'],
                    'before_title'  => $sidebar['before_title'],
                    'after_title'   => $sidebar['after_title'],
                    'type'          => $sidebar['type'],
                ]);
            }
        }
    }

    /**
     * Action : Generator
     * 
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function __action_generator()
    {
        $sidebars        = $this->getSidebars();
        $additionalClass = ($this->widgetClass) ? ' ' . $this->widgetClass . ' ' : '';

        if (is_array($sidebars)) {
            $z = 1;

            foreach ($sidebars as $sidebar) {
                $sidebarClass = $this->getNameToClass($sidebar);

                register_sidebar([
                    'name'          => $sidebar,
                    'id'            => "zc-sidebar-$z",
                    'before_widget' => '<li id="%1$s" class="' . $sidebarClass . $additionalClass . ' %2$s">',
                    'after_widget'  => '</li>',
                    'before_title'  => $this->beforeTitle,
                    'after_title'   => $this->afterTitle,
                    'type'          => 'sidebar',
                ]);

                $z++;
            }
        }
    }
}
