<?php
namespace App\CA\Setting;

use App\CA\Setting\Model\Setting;

class SettingRepository
{
    /**
     * @var Setting
     */
    private $model;

    /**
     * SettingRepository constructor.
     * @param Setting $setting
     */
    public function __construct(Setting $setting)
    {
        $this->model = $setting;
    }

    /**
     * Add a new setting to the database.
     *
     * @param string $key
     * @param mixed $value
     * @return Setting
     */
    public function create($key, $value)
    {
        return $this->model->create(['key' => $key, 'value' => $value]);
    }

    /**
     * Get a setting by key.
     *
     * @param string $key
     * @return Setting
     */
    public function get($key)
    {
        return $this->model->where('key', $key)->first();
    }
}
