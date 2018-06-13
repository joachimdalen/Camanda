<?php

namespace App\CA\Blog;

use App\CA\Blog\Model\BlogPost;
use App\CA\Blog\PostStatus;

class BlogRepository
{
    /**
     * @var BlogPost
     */
    private $model;

    private $tagRepo;

    /**
     * BlogRepository constructor.
     * @param BlogPost $post
     */
    public function __construct(BlogPost $post, PostTagRepository $tagRepository)
    {
        $this->model = $post;
        $this->tagRepo = $tagRepository;
    }

    public function isSlugInUse($slug)
    {
        $post = $this->model->where('slug', $slug)->first();
        if ($post) {
            return true;
        }

        return false;
    }

    public function getPublicPosts()
    {
        $posts = $this->model->where('status', PostStatus::public)->paginate(25);
        $posts->getCollection()->map(function ($post) {
            $post->tags = $this->tagRepo->getTagsForPost($post->id);
        });
        return $posts;
    }

    public function getPostsForUser($userId)
    {
        $posts = $this->model->where('user_id', $userId)->paginate(25);
      /*  $posts->getCollection()->map(function ($post) {
            $post->tags = $this->tagRepo->getTagsForPost($post->id);
        });*/
        return $posts;
    }

    public function createPost(array $data, array $tags)
    {
        $post = $this->model->create($data);
        //Loop and check/create tags
    }
}
