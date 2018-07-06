<?php

namespace App\CA\Setting;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

/**
 * This class is responsible for handling settings
 * and keeping both the database and cache up to date
 * with the correct values.
 */
class SettingManager
{
    /**
     * Setting repository
     *
     * @var SettingRepository
     */
    protected $repo;

    /**
     * Setting Manager constructor.
     *
     * @param SettingRepository $repository A SettingRepository instance.
     */
    public function __construct(SettingRepository $repository)
    {
        $this->repo = $repository;
    }

    /**
     * Check if caching is enabled.
     *
     * @return boolean
     */
    private function _shouldBeCached()
    {
        $item = $this->repo->get(SettingKeys::CACHE_SETTINGS);
        //The setting failed to fetch, don't cache value to be on the safe side.
        if (!$item) {
            Log::channel('runtime')->warning(
                '[SettingsManager:39] Failed to fetch setting.',
                ['key' => SettingKeys::CACHE_SETTINGS]
            );
            return false;
        }
        return $item->value;
    }

    /**
     * Check if a given value is already loadeed into the cache.
     *
     * @param string $key Setting key to check.
     *
     * @return boolean
     */
    private function _isCached($key)
    {
        return Cache::has($key);
    }

    /**
     * Update cached value.
     *
     * @param string $key   Setting key to update.
     * @param mixed  $value The new value of the setting.
     *
     * @return void
     */
    private function _updateCache($key, $value)
    {
        Cache::forever($key, $value);
    }

    /**
     * Get a settings value.
     *
     * @param string $key The setting key to get value for.
     *
     * @return string
     */
    public function get($key)
    {
        if ($this->_shouldBeCached()) {
            if ($this->_isCached($key)) {
                return Cache::get($key);
            }
            $item = $this->repo->get($key);
            if (!$item) {
                Log::channel('runtime')->warning(
                    '[SettingsManager:89] Failed to fetch setting.',
                    ['key' => $key]
                );
                return "";
            }
            Cache::forever($key, $item->value);
            return $item->value;
        }
        $item = $this->repo->get($key);
        if (!$item) {
            Log::channel('runtime')->warning(
                '[SettingsManager:100] Failed to fetch setting.',
                ['key' => $key]
            );
            return "";
        }
        return $item->value;
    }

    /**
     * Set and/or update the setting and cache.
     *
     * @param string $key   The setting key to set.
     * @param mixed  $value The value to set.
     *
     * @return void
     */
    public function set($key, $value)
    {
        $this->repo->update($key, $value);
        if ($this->_shouldBeCached()) {
            $this->_updateCache($key, $value);
        }
    }

    /**
     * Get all settings in a group.
     *
     * @param array $group Array with setting keys in group.
     * 
     * @return Setting[] | []
     */
    public function getInGroup($group)
    {
        $settings = [];
        foreach ($group as $item) {
            Log::info($item);
            $settings[] = [
                $item => $this->get($item),
            ];
        }
        return $settings;
    }

}
