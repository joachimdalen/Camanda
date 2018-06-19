<?php

namespace App\Console\Commands;

use App\CA\Setting\SettingManager;
use App\CA\Setting\SettingRepository;
use Illuminate\Console\Command;

class LoadSettingsToCache extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ca:cache-settings';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Load all settings to cache';
    /**
     * @var SettingRepository
     */
    private $settingRepository;
    /**
     * @var SettingManager
     */
    private $settingManager;

    /**
     * Create a new command instance.
     *
     * @param SettingRepository $settingRepository
     * @param SettingManager $settingManager
     */
    public function __construct(SettingRepository $settingRepository, SettingManager $settingManager)
    {
        parent::__construct();
        $this->settingRepository = $settingRepository;
        $this->settingManager = $settingManager;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->comment('Trying to retrieve all settings from database');
        $settings = $this->settingRepository->getAllSettings();
        if (!$settings || $settings->count() === 0) {
            $this->error('Failed to load settings, are you sure the seeder was run?');
        }
        $itemCount = $settings->count();
        $bar = $this->output->createProgressBar($itemCount);
        $bar->setFormat('custom_format');
        $bar->setEmptyBarCharacter('-');
        $bar->setBarCharacter('*');
        $this->comment('Loading ' . $itemCount . ' settings into cache');
        foreach ($settings as $setting) {
            $bar->setMessage('Loading ' . $setting->key);
            $this->settingManager->set($setting->key, $setting->value);
            $bar->advance();
        }
        $bar->finish();
        //Fix to wrap to new line.
        $this->comment('');
        return;
    }
}
