<?php

namespace App\CA\Setting;

use App\CA\Setting\Model\Setting;

/**
 * Class responsible for handling all database interaction
 * for the setting model.
 */
class SettingRepository
{
    /**
     *
     * @var Setting
     */
    protected $model;

    /**
     * SettingRepository constructor.
     *
     * @param Setting $setting A Setting instance.
     */
    public function __construct(Setting $setting)
    {
        $this->model = $setting;
    }

    /**
     * Add a new setting to the database.
     *
     * @param string $key   The setting key to create.
     * @param mixed  $value The value of the setting.
     * 
     * @return Setting
     */
    public function create($key, $value)
    {
        return $this->model->create(['key' => $key, 'value' => $value]);
    }

    /**
     * Get a setting by key.
     *
     * @param string $key The setting key for the setting to get.
     * 
     * @return Setting
     */
    public function get($key)
    {
        return $this->model->where('key', $key)->first();
    }

    /**
     * Update a setting value
     *
     * @param string $key   The key of the setting to update.
     * @param mixed  $value The value of the setting.
     * 
     * @return void
     */
    public function update($key, $value)
    {
        $this->model->where('key', $key)->update(['value' => $value]);
    }

    /**
     * Get all setting values
     *
     * @return Setting[]|\Illuminate\Database\Eloquent\Collection
     */
    public function getAllSettings()
    {
        return $this->model->whereNotIn('key', [SettingKeys::CACHE_SETTINGS])->get();
    }

}
