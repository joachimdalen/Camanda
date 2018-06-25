<?php

namespace App\Http\Controllers\Api\Upload;

use App\CA\Upload\UploadRepository;
use App\Http\Requests\Upload\ImageUploadRequest;
use App\Http\Resources\Upload\UploadResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Webpatser\Uuid\Uuid;
use Intervention\Image\ImageManagerStatic as Image;

/**
 * Class UploadController
 * Responsible for handling all file uploads in the application.
 * @package App\Http\Controllers\Api\Upload
 */
class UploadController extends Controller
{
    /**
     * @var UploadRepository
     */
    private $repo;

    /**
     * UploadController constructor.
     * @param UploadRepository $repository
     */
    public function __construct(UploadRepository $repository)
    {
        $this->repo = $repository;
    }

    /**
     * Handles image uploads
     * @todo: Move contentimg into own filesystem, and improve upload code.
     * @param ImageUploadRequest $request
     * @return UploadResource
     */
    public function uploadImage(ImageUploadRequest $request)
    {
        try {
            $user = $request->user();
            $data = $request->only(['file', 'width', 'height', 'x', 'y']);
            $uuid = Uuid::generate()->string;
            $seed = str_random(5);
            $dir = 'contentimg' . DIRECTORY_SEPARATOR . str_random(10);

            Storage::disk('public')->makeDirectory($dir);
            $img = Image::make($data['file'])->crop($data['width'], $data['height'])->encode('png');
            $pathRaw = $dir . DIRECTORY_SEPARATOR . $seed . '_' . $uuid . '.png';
            Storage::disk('public')->put($pathRaw, $img);
            $imgData = [
                'user_id' => $user->id,
                'name' => '',
                'storage_path' => $pathRaw,
                'size' => $img->filesize(),
                'mime' => $img->mime(),
                'width' => $img->width(),
                'height' => $img->height(),
            ];
            $createdImageEntry = $this->repo->create($imgData);
            return new UploadResource($createdImageEntry);
        } catch (\Exception $exception) {
            Log::error($exception);
            return response()->json(false, Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }
}
