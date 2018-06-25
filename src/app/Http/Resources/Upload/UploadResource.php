<?php

namespace App\Http\Resources\Upload;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class UploadResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'storage_path' => $this->storage_path,
            'url' => Storage::disk('public')->url($this->storage_path),
            'size' => $this->size,
            'mime' => $this->mime,
            'width' => $this->width,
            'height' => $this->height
        ];
    }
}
