<?php

namespace App\Http\Resources\Blog;

use Illuminate\Http\Resources\Json\JsonResource;

class BlogPostResource extends JsonResource
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
            'short_id' => $this->getShortId(),
            'user_id' => $this->user_id,
            'title' => $this->title,
            'slug' => $this->slug,
            'content' => $this->content,
            'summary' => $this->summary,
            'status' => $this->status,
            'status_text' => $this->getStatusText(),
            'tags' => $this->tags,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'posted_at' => $this->posted_at,
            'created_at_unix' => strtotime($this->created_at),
            'updated_at_unix' => strtotime($this->updated_at),
            'posted_at_unix' => strtotime($this->posted_at),
        ];
    }
}
