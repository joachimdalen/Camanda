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
    ];

    /**
     * Get the staus display text from the status integer.
     *
     * @return string
     */
    public function getStatusText()
    {
        switch ($this->status) {
            case PostStatus::PUBLISHED:
                return 'published';
                break;
            case PostStatus::SCHEDULED:
                return 'scheduled';
                break;
            case PostStatus::PRIVATE:
                return 'private';
                break;
            case PostStatus::DRAFT:
                return 'draft';
                break;

        }
    }

    public function getShortId()
    {
        if ($this->id) {
            return str_limit($this->id, 8, '');
        }
        return '';
    }
}
