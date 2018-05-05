<?php

namespace App\CA\Blog;


use App\CA\Blog\Model\BlogPost;

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

    public function isSlugInUse($slug)
    {
        $post = $this->model->where('slug', $slug)->first();
        if ($post) return true;
        return false;
    }


}