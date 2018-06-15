<?php
namespace App\CA\Setting;

use App\CA\Setting\SettingKeys;

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
        $val = $this->repo->get(SettingKeys::CACHE_SETTINGS);
        return $val->value;
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

    }
}
