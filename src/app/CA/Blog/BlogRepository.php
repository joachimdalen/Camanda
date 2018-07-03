<?php

namespace App\CA\Blog;

use App\CA\Blog\Model\BlogPost;
use App\CA\Blog\PostStatus;

/**
 * Repository responsible of handling all database
 * interaction for the BlogPost model.
 */
class BlogRepository
{
    /**
     *
     * @var BlogPost
     */
    protected $model;

    /**
     * BlogRepository constructor.
     *
     * @param BlogPost $post A new blog post instance
     */
    public function __construct(BlogPost $post)
    {
        $this->model = $post;
    }

    /**
     * Check to see if a slug is already in use by a blog post
     *
     * @param string $slug Slug to check
     *
     * @return boolean
     */
    public function isSlugInUse($slug)
    {
        $post = $this->model->where('slug', $slug)->first();
        if ($post) {
            return true;
        }
        return false;
    }

    /**
     * Get all posts from all users marked as public.
     *
     * @return mixed
     */
    public function getPublicPosts()
    {
        $posts = $this->model->where('status', PostStatus::PUBLISHED)->paginate(25);
        /*$posts->getCollection()->map(function ($post) {
        $post->tags = $this->tagRepo->getTagsForPost($post->id);
        });*/
        return $posts;
    }

    /**
     * Get all posts created by a user.
     *
     * @param string  $userId   The active user to get posts for.
     * @param boolean $paginate If the results should be paginated.
     * @param integer $pageSize The pagination size of the results.
     *
     * @return mixed
     */
    public function getPostsForUser($userId, $paginate = true, $pageSize = 25)
    {
        $data = [
            'id', 'title', 'slug', 'status', 'created_at',
            'updated_at', 'posted_at', 'user_id',
        ];
        $posts = $this->model->where('user_id', $userId)->select($data);
        if ($paginate) {
            $posts = $posts->paginate($pageSize);
        } else {
            $posts = $posts->get();
        }
        return $posts;
    }

    /**
     * Create a new post for the logged in user.
     *
     * @param array $data Blog post model data.
     *
     * @return BlogPost
     */
    public function createPost(array $data)
    {
        $post = $this->model->create($data);
        return $post;
    }

    /**
     * Get all Blog Posts unformatted, and not in a collection.
     *
     * @return BlogPost[]|[]
     */
    public function getAllBlogPostsRaw()
    {
        $posts = $this->model->all();
        return $posts;
    }

    /**
     * Update the published state of the post.
     *
     * @param integer $id     Id of the blog post to update status for.
     * @param integer $status The new status for the post.
     *
     * @return bool
     */
    public function setPostStatus($id, $status)
    {
        $updated = $this->model->where('id', $id)->update(['status' => $status]);
        if ($updated) {
            return true;
        }
        return false;
    }

    /**
     * Update the published date for the post.
     *
     * @param integer $id   The post id to update publish date for.
     * @param string  $time The time the post went public.
     *
     * @return bool
     */
    public function setPostPublishDate($id, $time)
    {
        $updated = $this->model->where('id', $id)->update(['posted_at' => $time]);
        if ($updated) {
            return true;
        }
        return false;
    }
}
