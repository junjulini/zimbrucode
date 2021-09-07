<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Module\MetaboxPanel\Helper;

use ZimbruCode\Component\Core\Kernel;
use ZimbruCode\Component\Handler\AjaxHandler;
use ZimbruCode\Module\Panel\Library\Mode;

/**
 * Class : Metabox panel backup
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class Backup extends Kernel
{
    protected $mode         = false;
    protected $backupDbName = false;

    public function __construct(Mode $mode)
    {
        $this->mode         = $mode;
        $this->backupDbName = $this->mode->getModuleSetting('backup/db-name');

        // Ajax
        $this->addAjax("zc/module/metabox_panel/backup_{$this->mode->getModuleSetting('slug')}", '__ajax_backup');
    }

    /**
     * Get backup item content
     *
     * @param string $id     Item ID
     * @param string $name   Item name
     * @return string
     * @since 1.0.0
     */
    protected function getItemContent(string $id, string $name): string
    {
        return $this->mode->altRender('backup/item.twig', [
            'id'   => $id,
            'name' => $name,
        ]);
    }

    /**
     * Get content for PopUp
     *
     * @param AjaxHandler $ajax       AjaxHandler instance
     * @param string      $pageType   Page type [post, page, portfolio ...]
     * @return void                   This function does not return a value
     * @since 1.0.0
     */
    protected function getContent(AjaxHandler $ajax, string $pageType): void
    {
        $list  = '';
        $count = 0;

        if ($data = self::service('db')->get($this->backupDbName)) {
            if (!empty($data[$pageType])) {
                $count = count($data[$pageType]);
                foreach ($data[$pageType] as $key => $value) {
                    $list .= $this->getItemContent($key, $value['name']);
                }
            }
        }

        $active  = ($count == 0) ? ' zc-popup-backup__no-backups_active' : '';
        $content = $this->mode->altRender('backup/content.twig', [
            'count'  => $count,
            'active' => $active,
            'list'   => $list,
        ]);

        $ajax->add('content', $content)->send();
    }

    /**
     * Save backup
     *
     * @param AjaxHandler $ajax       AjaxHandler instance
     * @param string      $pageType   Page type [post, page, portfolio ...]
     * @return void                   This function does not return a value
     * @since 1.0.0
     */
    protected function save(AjaxHandler $ajax, string $pageType): void
    {
        if ($metaData = get_post_meta($ajax->post('id'), "_{$this->getGlobal('core/module/metabox-panel/meta-container-slug')}", true)) {
            $backupName = md5($ajax->post('backup_name'));

            if ($data = self::service('db')->get($this->backupDbName)) {
                if (!empty($data[$pageType][$backupName])) {
                    if ($data[$pageType][$backupName]['data'] != $metaData) {
                        $data[$pageType][$backupName]['data'] = $metaData;

                        // If has but different data
                        if (self::service('db')->add($this->backupDbName, $data, true, false)) {
                            $ajax->add('result', 'success')
                                 ->send();
                        } else {
                            $ajax->add('result', 'failure')
                                 ->add('result_msg', 'Backup/Save - Error : 1')
                                 ->send();
                        }
                    } else {
                        $ajax->add('result', 'failure')
                             ->add('result_msg', 'Backup/Save - Error : 2')
                             ->send();
                    }
                } else {
                    $data[$pageType][$backupName] = [
                        'name' => $ajax->post('backup_name'),
                        'data' => $metaData,
                    ];

                    // If not has
                    if (self::service('db')->add($this->backupDbName, $data, true, false)) {
                        $ajax->add('result', 'success')
                             ->add('change', [
                                 'count' => count($data[$pageType]),
                                 'item'  => $this->getItemContent($backupName, $ajax->post('backup_name')),
                             ])
                             ->send();
                    } else {
                        $ajax->add('result', 'failure')
                             ->add('result_msg', 'Backup/Save - Error : 3')
                             ->send();
                    }
                }
            } else {
                $data = [
                    $pageType => [
                        $backupName => [
                            'name' => $ajax->post('backup_name'),
                            'data' => $metaData,
                        ],
                    ],
                ];

                // If data is empty
                if (self::service('db')->add($this->backupDbName, $data, true, false)) {
                    $ajax->add('result', 'success')
                         ->add('change', [
                             'count' => 1,
                             'item'  => $this->getItemContent($backupName, $ajax->post('backup_name')),
                         ])
                         ->send();
                } else {
                    $ajax->add('result', 'failure')
                         ->add('result_msg', 'Backup/Save - Error : 4')
                         ->send();
                }
            }
        } else {
            $ajax->add('result', 'failure')
                 ->add('result_msg', 'Backup/Save - Error : 5')
                 ->send();
        }
    }

    /**
     * Delete all backups
     *
     * @param AjaxHandler $ajax       AjaxHandler instance
     * @param string      $pageType   Page type [post, page, portfolio ...]
     * @return void                   This function does not return a value
     * @since 1.0.0
     */
    protected function delete(AjaxHandler $ajax, string $pageType): void
    {
        if ($data = self::service('db')->get($this->backupDbName)) {
            if (!empty($data[$pageType])) {
                $data[$pageType] = [];

                if (self::service('db')->add($this->backupDbName, $data, true, false)) {
                    $ajax->add('result', 'success')->send();
                } else {
                    $ajax->add('result', 'failure')->send();
                }
            }
        }

        $ajax->add('result', 'failure')
             ->add('result_msg', 'Backup/Delete All - Error : 1')
             ->send();
    }

    /**
     * Delete specifically backup
     *
     * @param AjaxHandler $ajax       AjaxHandler instance
     * @param string      $pageType   Page type [post, page, portfolio ...]
     * @return void                   This function does not return a value
     * @since 1.0.0
     */
    protected function deleteItem(AjaxHandler $ajax, string $pageType): void
    {
        if ($data = self::service('db')->get($this->backupDbName)) {
            if (!empty($data[$pageType][$ajax->post('backup_name')])) {
                unset($data[$pageType][$ajax->post('backup_name')]);

                if (self::service('db')->add($this->backupDbName, $data, true, false)) {
                    $ajax->add('result', 'success')
                         ->add('count', count($data[$pageType]))
                         ->send();
                } else {
                    $ajax->add('result', 'failure')
                         ->add('result_msg', 'Backup/Delete Item - Error : 1')
                         ->send();
                }
            }
        }

        $ajax->add('result', 'failure')
             ->add('result_msg', 'Backup/Delete Item - Error : 2')
             ->send();
    }

    /**
     * Restore backup
     *
     * @param AjaxHandler $ajax       AjaxHandler instance
     * @param string      $pageType   Page type [post, page, portfolio ...]
     * @return void                   This function does not return a value
     * @since 1.0.0
     */
    protected function restore(AjaxHandler $ajax, string $pageType): void
    {
        if ($data = self::service('db')->get($this->backupDbName)) {
            if (!empty($data[$pageType][$ajax->post('backup_name')])) {
                $bdData = $data[$pageType][$ajax->post('backup_name')]['data'];

                // Restore backup
                update_post_meta($ajax->post('id'), "_{$this->getGlobal('core/module/metabox-panel/meta-container-slug')}", $bdData);

                $events = $this->mode->getModuleSetting('events/backup');
                $ajax->add('result', 'success')
                     ->add('type', $events['success']['type'])
                     ->add('title', $events['success']['title'])
                     ->add('content', $events['success']['content'])
                     ->send();
            } else {
                $ajax->add('result', 'failure')
                     ->add('result_msg', 'Backup/Restore - Error : 1')
                     ->send();
            }
        } else {
            $ajax->add('result', 'failure')
                 ->add('result_msg', 'Backup/Restore - Error : 2')
                 ->send();
        }
    }

    /**
     * Ajax : Backup
     *
     * @return void   This function does not return a value
     * @since 1.0.0
     */
    public function __ajax_backup()
    {
        $ajax     = new AjaxHandler($this->mode->getModuleSetting('nonce'));
        $pageType = implode('_', $this->mode->getModuleSetting('screen'));

        switch ($ajax->post('type')) {

            // Type : Get-Content
            case 'get-content':
                $this->getContent($ajax, $pageType);
                break;

            // Type : Save
            case 'save':
                $this->save($ajax, $pageType);
                break;

            // Type : Delete all
            case 'delete':
                $this->delete($ajax, $pageType);
                break;

            // Delete item
            case 'delete-item':
                $this->deleteItem($ajax, $pageType);
                break;

            // Restore
            case 'restore':
                $this->restore($ajax, $pageType);
                break;
        }

        $ajax->off();
    }
}
