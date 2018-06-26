<?php

namespace App\CA\Blog;


class PostStatus
{
    const PUBLISHED = 0;
    const SCHEDULED = 1;
    const PRIVATE = 2;
    const DRAFT = 3;


    public static function getStatusText(int $status)
    {
        switch ($status) {
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
}