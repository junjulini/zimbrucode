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
 * @since   1.3.0
 */
class DBHandler
{
    protected array $data = [];
    protected string $tableName;

    /**
     * Constructor
     *
     * @param  string $tableName   DB table name
     * @throws RuntimeException
     * @since 1.3.0
     */
    public function __construct(string $tableName = '')
    {
        if (!$slug = Kernel::getGlobal('app/slug')) {
            throw new RuntimeException('ZE0076');
        }

        if ($tableName) {
            $this->tableName = Kernel::service('wpdb')->prefix . $slug . '_' . $tableName;
        } else {
            $this->tableName = Kernel::service('wpdb')->prefix . $slug;
        }

        $this->tableName = esc_sql($this->tableName);

        $check = strcasecmp(Kernel::service('wpdb')->get_var("SHOW TABLES LIKE '{$this->tableName}'") ?? '', $this->tableName);
        $this->checkError();

        if (0 !== $check) {
            $charsetCollate = Kernel::service('wpdb')->get_charset_collate();

            $sql = "CREATE TABLE `{$this->tableName}` (
                        `id` bigint(20) unsigned NOT NULL auto_increment,
                        `name` varchar(191) NOT NULL default '',
                        `value` longtext NOT NULL,
                        `autoload` varchar(20) NOT NULL default 'yes',
                        PRIMARY KEY (id),
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
     * @throws RuntimeException
     * @return void
     * @since 1.1.0
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
     * @param string $path      Array path
     * @param mixed  $default   Default value
     * @return mixed            Item value
     * @since 1.3.0
     */
    protected function getData(string $path, mixed $default = false): mixed
    {
        return Tools::getNode($this->data, $path, $default);
    }

    /**
     * Add item data
     *
     * @param string $path    Array path
     * @param mixed  $value   Item value
     * @return void
     * @since 1.3.0
     */
    protected function addData(string $path, mixed $value): void
    {
        Tools::addNode($this->data, $path, $value);
    }

    /**
     * Cache database table
     *
     * @return void
     * @since 1.1.0
     */
    protected function cacheData(): void
    {
        $suppress = Kernel::service('wpdb')->suppress_errors();
        $result   = Kernel::service('wpdb')->get_results("SELECT `name`, `value` FROM `{$this->tableName}` WHERE `autoload` = 'yes'");

        $this->checkError();

        if ($result) {
            foreach ((array) $result as $item) {
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
     * @param string $key   Name of the table element from the database
     * @return bool         Result of checking
     * @since 1.1.0
     */
    protected function cacheSpecificData(string $key): bool
    {
        if ($key) {
            $query  = Kernel::service('wpdb')->prepare("SELECT `value` FROM `{$this->tableName}` WHERE `name` = %s LIMIT 1", $key);
            $result = Kernel::service('wpdb')->get_row($query);

            $this->checkError();

            if (is_object($result)) {
                if (is_serialized($result->value)) {
                    $this->addData($key, unserialize($result->value));
                    return true;
                } else {
                    $this->addData($key, $result->value);
                    return true;
                }
            } else {
                return false;
            }
        }

        return false;
    }

    /**
     * Get the data of an item in a database table
     *
     * @param string $path      Array path
     * @param mixed  $default   Default value
     * @return mixed            Database item value
     * @since 1.3.0
     */
    public function get(string $path = '', mixed $default = false): mixed
    {
        if ($path) {
            if (strpos($path, '/') !== false) {
                $first = strstr($path, '/', true);

                if (isset($this->data[$first])) {
                    return $this->getData($path, $default);
                } else {
                    if ($this->cacheSpecificData($first)) {
                        return $this->getData($path, $default);
                    } else {
                        return $default;
                    }
                }
            } else {
                if (isset($this->data[$path])) {
                    return $this->getData($path, $default);
                } else {
                    if ($this->cacheSpecificData($path)) {
                        return $this->getData($path, $default);
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
     * Add data for an item in a database table
     *
     * @param string $path         Array path
     * @param mixed  $value        Value
     * @param bool   $autoUpdate   Auto-update of data in the database
     * @param bool   $autoload     Autoload data from the database
     * @return bool                Action result
     * @since 1.3.0
     */
    public function add(string $path = '', mixed $value = '', bool $autoUpdate = false, bool $autoload = true): bool
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

                $query = Kernel::service('wpdb')->prepare("SELECT `autoload` FROM `{$this->tableName}` WHERE `name` = %s", $path);
                $check = Kernel::service('wpdb')->get_row($query);

                $this->checkError();

                if ($check) {
                    $result = Kernel::service('wpdb')->update($this->tableName, ['value' => $data, 'autoload' => $autoload], ['name' => $path]);
                    $this->checkError();
                } else {
                    $query  = Kernel::service('wpdb')->prepare("INSERT INTO `{$this->tableName}` (`name`, `value`, `autoload`) VALUES (%s, %s, %s) ON DUPLICATE KEY UPDATE `name` = VALUES(`name`), `value` = VALUES(`value`), `autoload` = VALUES(`autoload`)", $path, $data, $autoload);
                    $result = Kernel::service('wpdb')->query($query);

                    $this->checkError();
                }

                return (bool) $result;
            }
        }

        return false;
    }

    /**
     * Check if exist
     *
     * @param string $path   Array path
     * @return bool          Result of action
     * @since 1.1.0
     */
    public function has(string $path = ''): bool
    {
        return (!empty($this->get($path)));
    }

    /**
     * Remove database table item
     *
     * @param string $path         Array path
     * @param bool   $autoUpdate   Auto-update of data in the database
     * @return bool                Action result
     * @since 1.1.0
     */
    public function remove(string $path = '', bool $autoUpdate = false): bool
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
                        $query = Kernel::service('wpdb')->prepare("SELECT `autoload` FROM `{$this->tableName}` WHERE `name` = %s", $path);
                        $check = Kernel::service('wpdb')->get_row($query);

                        $this->checkError();

                        if ($check) {
                            $result = Kernel::service('wpdb')->update($this->tableName, ['value' => serialize($data), 'autoload' => $check->autoload], ['name' => $path]);
                            $this->checkError();
                        } else {
                            return (bool) $check;
                        }
                    } else {
                        $result = Kernel::service('wpdb')->delete($this->tableName, ['name' => $path]);
                        $this->checkError();
                    }
                }

                return (bool) $result;
            }
        }

        return false;
    }

    /**
     * Remove all items from the database table
     *
     * @return bool   Result of removing
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
     * @return array   Action result
     * @since 1.1.0
     */
    public function getAllData(): array
    {
        $output   = [];
        $suppress = Kernel::service('wpdb')->suppress_errors();
        $data     = Kernel::service('wpdb')->get_results("SELECT `name`, `value`, `autoload` FROM `{$this->tableName}`");

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
