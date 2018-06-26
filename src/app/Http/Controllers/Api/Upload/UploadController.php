<?php

namespace App\Http\Controllers\Api\Upload;

use App\CA\Upload\Model\Upload;
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

    /**
     * Get all uploads for a user
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getUploadsByUser(Request $request)
    {
        $user = $request->user();
        $uploads = $this->repo->getForUser($user->id, true, 9);
        return UploadResource::collection($uploads);
    }

    /**
     * Delete a image from the gallery.
     * @param Request $request
     * @param Upload $upload
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function deleteImage(Request $request, Upload $upload)
    {
        $user = $request->user();
        if ($user->id !== $upload->user_id) return \response()->json([], Response::HTTP_NOT_FOUND);
        $path = $upload->storage_path;
        Storage::disk('public')->delete($path);
        $folder = dirname($path);
        $this->deleteDirIfEmpty($folder);
        if (!$upload->delete()) {
            Log::channel('runtime')->error('Failed to delete upload entry from the database.', ['id', $upload->id, 'path' => $path]);
            return \response()->json([], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        return \response()->json([], Response::HTTP_OK);
    }

    /**
     * Delete a directory from the storage if it's empty.
     * @param $dir
     */
    private function deleteDirIfEmpty($dir)
    {
        try {
            if (!Storage::disk('public')->exists($dir)) return;
            $files = Storage::disk('public')->allFiles($dir);
            if (count($files) === 0) Storage::disk('public')->deleteDirectory($dir);
        } catch (\Exception $exception) {
            Log::channel('runtime')->error($exception);
        }
    }
}
