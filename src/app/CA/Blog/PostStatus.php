<?php

namespace App\CA\Blog;

/**
 * Defines the status of the visibility of the blog post.
 */
class PostStatus
{
    const PUBLISHED = 0;
    const SCHEDULED = 1;
    const PRIVATE = 2;
    const DRAFT = 3;


    /**
     * Get the humanized name for a status.
     *
     * @param integer $status The status to get
     * 
     * @return string
     */
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
