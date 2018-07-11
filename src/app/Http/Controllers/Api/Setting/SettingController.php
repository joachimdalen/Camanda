<?php

namespace App\Http\Controllers\Api\Setting;

use App\CA\Setting\SettingGroups;
use App\CA\Setting\SettingManager;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SettingController extends Controller
{
    protected $manager;

    /**
     * Undocumented function
     *
     * @param SettingManager $manager
     */
    public function __construct(SettingManager $manager)
    {
        $this->manager = $manager;
    }

    /**
     * Get all settings in the General group.
     *
     * @param Request $request Base http request.
     * @return void
     */
    public function getGeneralSettings(Request $request)
    {
        $settings = $this->manager->getInGroup(SettingGroups::GENERAL);
        return \response()->json(
            ['data' => $settings],
            Response::HTTP_OK
        );
    }

    /**
     * Update a given set of setting values.
     *
     * @param Request $request Validated http request.
     * @return void
     */
    public function updateSettings(Request $request)
    {
        $settings = $request->get('settings');
        foreach ($settings as $setting) {
            $this->manager->set($setting['key'], $setting['value']);
        }
        return \response()->json(
            [],
            Response::HTTP_OK
        );
    }
}
