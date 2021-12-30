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

use Exception;
use Throwable;
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

        $ajax->send('content', $content);
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
        try {
            if ($metaData = get_post_meta($ajax->get('id'), "_{$this->getGlobal('core/module/metabox-panel/meta-container-slug')}", true)) {
                $backupName = md5($ajax->get('backup_name'));

                if ($data = self::service('db')->get($this->backupDbName)) {
                    if (!empty($data[$pageType][$backupName])) {
                        if ($data[$pageType][$backupName]['data'] != $metaData) {
                            $data[$pageType][$backupName]['data'] = $metaData;

                            // If has but different data
                            if (self::service('db')->add($this->backupDbName, $data, true, false)) {
                                $ajax->send('result', 'success');
                            } else {
                                throw new Exception('Backup/Save - Error : 1');
                            }
                        } else {
                            throw new Exception('Backup/Save - Error : 2');
                        }
                    } else {
                        $data[$pageType][$backupName] = [
                            'name' => $ajax->get('backup_name'),
                            'data' => $metaData,
                        ];

                        // If not has
                        if (self::service('db')->add($this->backupDbName, $data, true, false)) {
                            $ajax->send([
                                'result' => 'success',
                                'change' => [
                                    'count' => count($data[$pageType]),
                                    'item'  => $this->getItemContent($backupName, $ajax->get('backup_name')),
                                ],
                            ]);
                        } else {
                            throw new Exception('Backup/Save - Error : 3');
                        }
                    }
                } else {
                    $data = [
                        $pageType => [
                            $backupName => [
                                'name' => $ajax->get('backup_name'),
                                'data' => $metaData,
                            ],
                        ],
                    ];

                    // If data is empty
                    if (self::service('db')->add($this->backupDbName, $data, true, false)) {
                        $ajax->send([
                            'result' => 'success',
                            'change' => [
                                'count' => 1,
                                'item'  => $this->getItemContent($backupName, $ajax->get('backup_name')),
                            ],
                        ]);
                    } else {
                        throw new Exception('Backup/Save - Error : 4');
                    }
                }
            } else {
                throw new Exception('Backup/Save - Error : 5');
            }
        } catch (Throwable $th) {
            $ajax->send([
                'result'     => 'failure',
                'result_msg' => $th->getMessage(),
            ]);
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
        try {
            if ($data = self::service('db')->get($this->backupDbName)) {
                if (!empty($data[$pageType])) {
                    $data[$pageType] = [];

                    if (self::service('db')->add($this->backupDbName, $data, true, false)) {
                        $ajax->send('result', 'success');
                    } else {
                        throw new Exception('Backup/Delete All - Error : 1');
                    }
                }
            }

            throw new Exception('Backup/Delete All - Error : 2');
        } catch (Throwable $th) {
            $ajax->send([
                'result'     => 'failure',
                'result_msg' => $th->getMessage(),
            ]);
        }
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
        try {
            if ($data = self::service('db')->get($this->backupDbName)) {
                if (!empty($data[$pageType][$ajax->get('backup_name')])) {
                    unset($data[$pageType][$ajax->get('backup_name')]);

                    if (self::service('db')->add($this->backupDbName, $data, true, false)) {
                        $ajax->send([
                            'result' => 'success',
                            'count'  => count($data[$pageType]),
                        ]);
                    } else {
                        throw new Exception('Backup/Delete Item - Error : 1');
                    }
                }
            }

            throw new Exception('Backup/Delete Item - Error : 2');
        } catch (Throwable $th) {
            $ajax->send([
                'result'     => 'failure',
                'result_msg' => $th->getMessage(),
            ]);
        }
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
        try {
            if ($data = self::service('db')->get($this->backupDbName)) {
                if (!empty($data[$pageType][$ajax->get('backup_name')])) {
                    $bdData = $data[$pageType][$ajax->get('backup_name')]['data'];

                    // Restore backup
                    update_post_meta($ajax->get('id'), "_{$this->getGlobal('core/module/metabox-panel/meta-container-slug')}", $bdData);

                    $events = $this->mode->getModuleSetting('events/backup');

                    $ajax->send([
                        'result'  => 'success',
                        'type'    => $events['success']['type'],
                        'title'   => $events['success']['title'],
                        'content' => $events['success']['content'],
                    ]);
                } else {
                    throw new Exception('Backup/Restore - Error : 1');
                }
            } else {
                throw new Exception('Backup/Restore - Error : 2');
            }
        } catch (Throwable $th) {
            $ajax->send([
                'result'     => 'failure',
                'result_msg' => $th->getMessage(),
            ]);
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
        $ajax     = new AjaxHandler($this->mode->getModuleSetting('nonce'), 'edit_pages');
        $pageType = implode('_', $this->mode->getModuleSetting('screen'));

        switch ($ajax->get('type')) {

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
