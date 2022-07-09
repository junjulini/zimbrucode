<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ZimbruCode\Component\Handler;

use RuntimeException;
use ZimbruCode\Component\Common\Tools;
use ZimbruCode\Component\Core\Kernel;

/**
 * Class : Component/Handler : DB
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.0.0
 */
class DBHandler
{
    protected $data      = [];
    protected $tableName = false;

    /**
     * Constructor
     *
     * @param string $tableName   DB table name
     * @since 1.0.0
     */
    public function __construct(string $tableName = '')
    {
        if (!$slug = esc_sql(Kernel::getGlobal('app/slug'))) {
            throw new RuntimeException('ZE0076');
        }

        if ($tableName) {
            $this->tableName = Kernel::service('wpdb')->prefix . $slug . '_' . $tableName;
        } else {
            $this->tableName = Kernel::service('wpdb')->prefix . $slug;
        }

        $check = strcasecmp(Kernel::service('wpdb')->get_var("SHOW TABLES LIKE '{$this->tableName}'"), $this->tableName);
        $this->checkError();

        if (0 !== $check) {
            $charsetCollate = Kernel::service('wpdb')->get_charset_collate();

            $sql = "CREATE TABLE {$this->tableName} (
                        id bigint(20) unsigned NOT NULL auto_increment,
                        name varchar(191) NOT NULL default '',
                        value longtext NOT NULL,
                        autoload varchar(20) NOT NULL default 'yes',
                        PRIMARY KEY  (id),
                        UNIQUE KEY name (name)
                    ) {$charsetCollate};";

            Kernel::service('wpdb')->query($sql);
            $this->checkError();
        } else {
            $this->cacheData();
        }
    }

    /**
     * Check for errors in WPDB
     *
     * @return void
     * @since 1.0.0
     */
    protected function checkError(): void
    {
        if ($e = Kernel::service('wpdb')->last_error) {
            throw new RuntimeException("ZE0077 - WPDB : {$e}");
        }
    }

    /**
     * Get item data
     *
     * @param  string  $path      Array path
     * @param  mix     $default   Default value
     * @return mix                Item value
     * @since 1.0.0
     */
    protected function getData(string $path, $default = false)
    {
        return Tools::getNode($this->data, $path, $default);
    }

    /**
     * Add item data
     *
     * @param string $path   Array path
     * @param mix    $value  Item value
     * @return void
     * @since 1.0.0
     */
    protected function addData(string $path, $value): void
    {
        Tools::addNode($this->data, $path, $value);
    }

    /**
     * Cache database table
     *
     * @return void
     * @since 1.0.0
     */
    protected function cacheData(): void
    {
        $suppress = Kernel::service('wpdb')->suppress_errors();
        $data     = Kernel::service('wpdb')->get_results("SELECT name, value FROM {$this->tableName} WHERE autoload = 'yes'");

        $this->checkError();

        if ($data) {
            foreach ((array) $data as $item) {
                if (is_serialized($item->value)) {
                    $this->addData($item->name, unserialize($item->value));
                } else {
                    $this->addData($item->name, $item->value);
                }
            }
        }

        Kernel::service('wpdb')->suppress_errors($suppress);
    }

    /**
     * Cache specific database table
     *
     * @param  string $key  Name of the table element from the database
     * @return boolean      Result of checking
     * @since 1.0.0
     */
    protected function cacheSpecificData(string $key): bool
    {
        if ($key) {
            $data = Kernel::service('wpdb')->prepare("SELECT value FROM {$this->tableName} WHERE name = %s LIMIT 1", $key);
            $row  = Kernel::service('wpdb')->get_row($data);

            $this->checkError();

            if (is_object($row)) {
                if (is_serialized($row->value)) {
                    $this->addData($key, unserialize($row->value));
                    return true;
                } else {
                    $this->addData($key, $row->value);
                    return true;
                }
            } else {
                return false;
            }
        }

        return false;
    }

    /**
     * Add data for an item in a database table
     *
     * @param string  $path         Array path
     * @param string  $value        Value
     * @param boolean $autoUpdate   Auto-update of data in the database
     * @param boolean $autoload     Autoloading data from the database
     * @since 1.0.0
     */
    public function add(string $path = '', $value = '', bool $autoUpdate = false, bool $autoload = true): bool
    {
        if ($path) {
            if ($this->getData($path) === $value) {
                return false;
            }

            if (strpos($path, '/') !== false) {
                $first = strstr($path, '/', true);

                if (!isset($this->data[$first])) {
                    $this->cacheSpecificData($first);
                }
            }

            $this->addData($path, $value);

            if ($autoUpdate == true) {
                if (strpos($path, '/') == !false) {
                    $path = strstr($path, '/', true);
                    $data = serialize($this->getData($path));
                } elseif (strpos($path, '/') === false && is_array($value)) {
                    $data = serialize($this->getData($path));
                } else {
                    $data = $this->getData($path);
                }

                $autoload = ($autoload === true) ? 'yes' : 'no';

                $check = Kernel::service('wpdb')->get_row(Kernel::service('wpdb')->prepare("SELECT autoload FROM {$this->tableName} WHERE name = %s", $path));
                $this->checkError();

                if ($check) {
                    $result = Kernel::service('wpdb')->update($this->tableName, ['value' => $data, 'autoload' => $autoload], ['name' => $path]);
                    $this->checkError();
                } else {
                    $result = Kernel::service('wpdb')->query(Kernel::service('wpdb')->prepare("INSERT INTO `{$this->tableName}` (`name`, `value`, `autoload`) VALUES (%s, %s, %s) ON DUPLICATE KEY UPDATE `name` = VALUES(`name`), `value` = VALUES(`value`), `autoload` = VALUES(`autoload`)", $path, $data, $autoload));
                    $this->checkError();
                }

                return $result;
            }
        }

        return false;
    }

    /**
     * Get the data of an item in a database table
     *
     * @param  string  $path      Array path
     * @param  mix     $default   Default value
     * @return mix                Database item value
     * @since 1.0.0
     */
    public function get(string $path = '', $default = false)
    {
        if ($path) {
            if (strpos($path, '/') !== false) {
                $first = strstr($path, '/', true);

                if (isset($this->data[$first])) {
                    return Tools::getNode($this->data, $path, $default);
                } else {
                    if ($this->cacheSpecificData($first)) {
                        return Tools::getNode($this->data, $path, $default);
                    } else {
                        return $default;
                    }
                }
            } else {
                if (isset($this->data[$path])) {
                    return Tools::getNode($this->data, $path, $default);
                } else {
                    if ($this->cacheSpecificData($path)) {
                        return Tools::getNode($this->data, $path, $default);
                    } else {
                        return $default;
                    }
                }
            }
        } else {
            return $this->data;
        }
    }

    /**
     * Remove database table item
     *
     * @param  string  $path         Array path
     * @param  boolean $autoUpdate   Auto-update of data in the database
     * @return boolean               Action result
     * @since 1.0.0
     */
    public function remove(string $path = '', $autoUpdate = false)
    {
        if ($path) {
            if (strpos($path, '/') !== false) {
                $first = strstr($path, '/', true);

                if (isset($this->data[$first])) {
                    $result = Tools::unsetNode($this->data, $path);
                } else {
                    if ($this->cacheSpecificData($first)) {
                        $result = Tools::unsetNode($this->data, $path);
                    } else {
                        return false;
                    }
                }
            } else {
                if (isset($this->data[$path])) {
                    $result = Tools::unsetNode($this->data, $path);
                } else {
                    if ($this->cacheSpecificData($path)) {
                        $result = Tools::unsetNode($this->data, $path);
                    } else {
                        return false;
                    }
                }
            }

            if ($autoUpdate && $result) {
                if (strpos($path, '/') === false) {
                    $result = Kernel::service('wpdb')->delete($this->tableName, ['name' => $path]);
                    $this->checkError();
                } else {
                    $path = strstr($path, '/', true);

                    if ($data = $this->getData($path)) {
                        $check = Kernel::service('wpdb')->get_row(Kernel::service('wpdb')->prepare("SELECT autoload FROM {$this->tableName} WHERE name = %s", $path));
                        $this->checkError();

                        $result = Kernel::service('wpdb')->update($this->tableName, ['value' => serialize($data), 'autoload' => $check->autoload], ['name' => $path]);
                        $this->checkError();
                    } else {
                        $result = Kernel::service('wpdb')->delete($this->tableName, ['name' => $path]);
                        $this->checkError();
                    }
                }

                return $result;
            }
        }
    }

    /**
     * Remove all items from the database table
     *
     * @return boolean   Result of removing
     * @since 1.0.0
     */
    public function flush(): bool
    {
        $result = Kernel::service('wpdb')->query("TRUNCATE TABLE `{$this->tableName}`");
        $this->checkError();
        $this->data = [];

        return $result;
    }

    /**
     * Dump database table
     *
     * @return void
     * @since 1.0.0
     */
    public function dump(): void
    {
        Tools::dump($this->data);
    }

    /**
     * Get database table data
     *
     * @return mix   Action result
     * @since 1.0.0
     */
    public function getAllData()
    {
        $output   = false;
        $suppress = Kernel::service('wpdb')->suppress_errors();
        $data     = Kernel::service('wpdb')->get_results("SELECT name, value, autoload FROM {$this->tableName}");

        $this->checkError();

        if ($data) {
            foreach ((array) $data as $item) {
                if (is_serialized($item->value)) {
                    $output[$item->name] = [
                        'data'     => unserialize($item->value),
                        'autoload' => $item->autoload,
                    ];
                } else {
                    $output[$item->name] = [
                        'data'     => $item->value,
                        'autoload' => $item->autoload,
                    ];
                }
            }
        }

        Kernel::service('wpdb')->suppress_errors($suppress);

        return $output;
    }
}
