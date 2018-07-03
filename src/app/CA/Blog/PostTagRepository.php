<?php

namespace App\CA\Blog;

use App\CA\Blog\Model\PostTag;
/**
 * Responsible for handling all database transactions for the
 * model PostTag.
 */
class PostTagRepository
{
    /**
     *
     * @var PostTag
     */
    protected $model;

    /**
     * PostTagRepository constructor.
     *
     * @param PostTag $postTag A PostTag instance.
     */
    public function __construct(PostTag $postTag)
    {
        $this->model = $postTag;
    }

    /**
     * Get all tags for the given post.
     *
     * @param string $id The id of the blog post to get tags for
     * 
     * @return PostTag[]
     */
    public function getTagsForPost($id)
    {
        return $this->model->where('post_id', $id)->get();
    }

    /**
     * Bind a tag id to the blog post id.
     *
     * @param string $tagId  The id of the tag.
     * @param string $postId The id of the blog post.
     * 
     * @return PostTag | null
     */
    public function bindTag($tagId, $postId)
    {
        return $this->model->create(['post_id' => $postId, 'tag_id' => $tagId]);
    }
}
