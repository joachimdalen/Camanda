<?php

namespace App\CA\Blog\Model;

use App\CA\AppBaseModel;
use App\CA\Blog\PostStatus;
use Illuminate\Database\Eloquent\Model;

class BlogPost extends AppBaseModel
{

    public function getStatusText()
    {
        switch ($this->status) {
            case PostStatus::PUBLISHED:
                return 'publised';
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
}
