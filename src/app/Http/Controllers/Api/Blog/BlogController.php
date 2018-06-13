<?php

namespace App\Http\Controllers\Api\Blog;

use App\CA\Blog\BlogRepository;
use App\Http\Controllers\Controller;
use App\Http\Requests\Post\CreatePostRequest;
use App\Http\Resources\Blog\BlogPostResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

    }

    public function getUserBlogPosts(Request $request)
    {
        $user = Auth::guard('api')->user();
        $posts = $this->repo->getPostsForUser($user->id);
        return BlogPostResource::collection($posts);
    }

}
