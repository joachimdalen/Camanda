<?php

namespace App\Http\Controllers\Api\Setting;

use App\Http\Controllers\Controller;

class SettingController extends Controller
{
    /**
     * Undocumented variable
     *
     * @var [type]
     */
    protected $repo;
    
    /**
     * Undocumented function
     *
     * @param SettingRepository $repository
     */
    public function __construct(SettingRepository $repository)
    {
        $this->repo = $repository;
    }
}
