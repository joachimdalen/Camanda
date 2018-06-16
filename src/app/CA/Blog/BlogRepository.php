<?php

namespace App\CA\Blog;

use App\CA\Blog\Model\BlogPost;
use App\CA\Blog\PostStatus;
use App\Http\Resources\Blog\BlogPostResource;

class BlogRepository
{
    /**
     * @var BlogPost
     */
    private $model;

    /**
     * BlogRepository constructor.
     * @param BlogPost $post
     */
    public function __construct(BlogPost $post)
    {
        $this->model = $post;
    }

    /**
     * Check to see if a slug is already in use by a blog post
     *
     * @param string $slug
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
     * @param string $userId
     * @param boolean $paginate
     * @param integer $pageSize
     * @return mixed
     */
    public function getPostsForUser($userId, $paginate = true, $pageSize = 25)
    {
        $data = [
            'id', 'title', 'slug', 'status', 'created_at', 'updated_at', 'posted_at', 'user_id'
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
     * @param array $data
     * @return BlogPost
     */
    public function createPost(array $data)
    {
        $post = $this->model->create($data);
        return $post;
    }
}
