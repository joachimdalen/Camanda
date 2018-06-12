<?php

namespace App\Http\Controllers\Api\Blog;

use App\CA\Blog\BlogRepository;
use App\Http\Controllers\Controller;
use App\Http\Requests\Post\CreatePostRequest;

class BlogController extends Controller
{

    protected $repo;

    public function __construct(BlogRepository $repository)
    {
        $this->repo = $repository;
    }

    public function createBlogPost(CreatePostRequest $request)
    {
        $data = $request->only(['title', 'summary', 'content']);
        $tags = $request->only(['tags']);
        $settings = $request->only(['status']);

        $this->repo->
    }

}
