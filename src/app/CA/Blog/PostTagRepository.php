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

    public function bindTag($postId, $tagId)
    {
        return $this->model->create(['post_id' => $postId, 'tag_id' => $tagId]);
    }
}
