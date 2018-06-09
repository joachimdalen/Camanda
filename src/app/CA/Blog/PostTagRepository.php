<?php

namespace App\CA\Blog;

use App\CA\Blog\Model\PostTag;

class PostTagRepository
{
    /**
     * @var PostTag
     */
    private $model;

    /**
     * PostTagRepository constructor.
     * @param PostTag $postTag
     */
    public function __construct(PostTag $postTag)
    {
        $this->model = $postTag;
    }

    public function getTagsForPost($id)
    {
        return $this->model->where('post_id', $id)->get();
    }
}
