<?php

namespace App\Http\Controllers\Api\Upload;

use App\CA\Upload\Model\Upload;
use App\CA\Upload\UploadRepository;
use App\Http\Controllers\Controller;
use App\Http\Requests\Upload\ImageUploadRequest;
use App\Http\Resources\Upload\UploadResource;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic as Image;
use Webpatser\Uuid\Uuid;

/**
 * Class UploadController
 * Responsible for handling all file uploads in the application.
 *
 * @package App\Http\Controllers\Api\Upload
 */
class UploadController extends Controller
{
    /**
     *
     * @var UploadRepository
     */
    protected $repo;

    /**
     * UploadController constructor.
     *
     * @param UploadRepository $repository A UploadRepository instance.
     */
    public function __construct(UploadRepository $repository)
    {
        $this->repo = $repository;
    }

    /**
     * Handles image uploads
     *
     * @param ImageUploadRequest $request The validated http request.
     *
     * @todo: Move contentimg into own filesystem, and improve upload code.
     *
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
            $img = Image::make($data['file'])->crop(
                $data['width'], $data['height']
            )->encode('png');
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
     *
     * @param Request $request The base http request.
     *
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
     *
     * @param Request $request The base http request.
     * @param Upload  $upload  The upload bounded from the url path.
     *
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function deleteImage(Request $request, Upload $upload)
    {
        $user = $request->user();
        if ($user->id !== $upload->user_id) {
            return \response()->json([], Response::HTTP_NOT_FOUND);
        }
        $path = $upload->storage_path;
        Storage::disk('public')->delete($path);
        $folder = dirname($path);
        $this->_deleteDirIfEmpty($folder);
        if (!$upload->delete()) {
            Log::channel('runtime')->error(
                'Failed to delete upload entry from the database.',
                ['id', $upload->id, 'path' => $path]
            );
            return \response()->json([], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        return \response()->json([], Response::HTTP_OK);
    }

    /**
     * Delete a directory from the storage if it's empty.
     *
     * @param string $dir Path of directory to delete.
     *
     * @return boolean
     */
    private function _deleteDirIfEmpty($dir)
    {
        try {
            if (!Storage::disk('public')->exists($dir)) {
                return false;
            }
            $files = Storage::disk('public')->allFiles($dir);
            if (count($files) === 0) {
                Storage::disk('public')->deleteDirectory($dir);
                return true;
            }
        } catch (\Exception $exception) {
            Log::channel('runtime')->error($exception);
            return false;
        }
    }
}
