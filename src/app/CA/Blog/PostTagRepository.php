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

    /**
     * Get all tags for the given post.
     *
     * @param string $id
     * @return PostTag[]
     */
    public function getTagsForPost($id)
    {
        return $this->model->where('post_id', $id)->get();
    }

    /**
     * Bind a tag id to the blog post id.
     *
     * @param string $tagId
     * @param string $postId
     * @return void
     */
    public function bindTag($tagId, $postId)
    {
        return $this->model->create(['post_id' => $postId, 'tag_id' => $tagId]);
    }
}
