<?php

namespace App\CA\Blog\Model;

use App\CA\AppBaseModel;
use App\CA\Blog\PostStatus;
use Illuminate\Database\Eloquent\Model;

class BlogPost extends AppBaseModel
{

    /**
     * Columns/Fields that is allowed to be mass assigned.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'title',
        'slug',
        'content',
        'summary',
        'status',
        'posted_at',
        'header_image_url',
        'preview_image_url',
        'header_image_id',
        'preview_image_id'
    ];
    protected $casts = [
        'posted_at' => 'datetime',
    ];

    /**
     * Get the staus display text from the status integer.
     *
     * @return string
     */
    public function getStatusText()
    {
        return PostStatus::getStatusText($this->status);
    }
}
