<?php

use App\CA\Setting\Model\Setting;
use App\CA\Setting\SettingKeys;
use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    /**
     * Create and seed all setting values.
     *
     * @return void
     */
    public function run()
    {
        Setting::create(['key' => SettingKeys::SLUG_TYPE, 'value' => 'random']);
        Setting::create(['key' => SettingKeys::SLUG_SIZE, 'value' => 15]);
        Setting::create(['key' => SettingKeys::CACHE_SETTINGS, 'value' => true]);
        Setting::create(['key' => SettingKeys::CACHE_BLOG_POSTS, 'value' => true]);
    }
}
