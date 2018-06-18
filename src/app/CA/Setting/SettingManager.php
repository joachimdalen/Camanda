<?php

namespace App\CA\Setting;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

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
     * @param SettingRepository $repository
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
    private function shouldBeCached()
    {
        $item = $this->repo->get(SettingKeys::CACHE_SETTINGS);
        //The setting failed to fetch, don't cache value to be on the safe side.
        Log::warning('[SettingsManager] Failed to fetch setting.', ['key' => SettingKeys::CACHE_SETTINGS]);
        if (!$item) return false;
        return $item->value;
    }

    /**
     * Check if a given value is already loadeed into the cache.
     *
     * @param string $key
     * @return boolean
     */
    private function isCached($key)
    {
        return Cache::has($key);
    }

    /**
     * Update cached value.
     *
     * @param string $key
     * @param mixed $value
     * @return void
     */
    private function updateCache($key, $value)
    {
        Cache::forever($key, $value);
    }

    /**
     * Get a settings value.
     * @param string $key
     * @return string
     */
    public function get($key)
    {
        if ($this->shouldBeCached()) {
            if ($this->isCached($key)) {
                return Cache::get($key);
            }
            $item = $this->repo->get($key);
            if (!$item) {
                Log::warning('[SettingsManager] Failed to fetch setting.', ['key' => $key]);
                return "";
            }
            Cache::forever($key, $item->value);
            return $item->value;
        }
        $item = $this->repo->get($key);
        if (!$item) {
            Log::warning('[SettingsManager] Failed to fetch setting.', ['key' => $key]);
            return "";
        }
        return $item->value;
    }

    /**
     * Set and/or update the setting and cache.
     * @param string $key
     * @param $value
     */
    public function set($key, $value)
    {
        $this->repo->update($key, $value);
        if ($this->shouldBeCached()) {
            $this->updateCache($key, $value);
        }
    }

}
