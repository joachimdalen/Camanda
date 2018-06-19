<?php

namespace App\Http\Controllers\Api\Upload;

use App\Http\Requests\Upload\ImageUploadRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

/**
 * Class UploadController
 * Responsible for handling all file uploads in the application.
 * @package App\Http\Controllers\Api\Upload
 */
class UploadController extends Controller
{
    public function __construct()
    {
    }

    public function uploadImage(ImageUploadRequest $request)
    {
        $user = $request->user();
        $data = $request->only(['file', 'title', 'description']);
    }
}
