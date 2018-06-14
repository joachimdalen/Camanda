<?php

namespace App\Http\Controllers\Api\Blog;

use App\CA\Blog\BlogRepository;
use App\CA\Tag\TagHelper;
use App\Http\Controllers\Controller;
use App\Http\Requests\Post\CreatePostRequest;
use App\Http\Resources\Blog\BlogPostResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BlogController extends Controller
{

    /**
     * Blog respository
     *
     * @var BlogRepository
     */
    protected $repo;

    /**
     * Tag Helper
     *
     * @var TagHelper
     */
    protected $tagHelper;

    /**
     * BlogController Constructor
     *
     * @param BlogRepository $repository
     * @param TagHelper $tagHelper
     */
    public function __construct(BlogRepository $repository, TagHelper $tagHelper)
    {
        $this->repo = $repository;
        $this->tagHelper = $tagHelper;
    }

    /**
     * Get all blog posts for the currently signed in user.
     *
     * @param Request $request
     * @return void
     */
    public function getUserBlogPosts(Request $request)
    {
        $user = Auth::guard('api')->user();
        $posts = $this->repo->getPostsForUser($user->id);
        return BlogPostResource::collection($posts);
    }

    /**
     * Create a new blog post.
     *
     * @param CreatePostRequest $request
     * @return BlogPost
     */
    public function createBlogPost(CreatePostRequest $request)
    {
        $user = Auth::guard('api')->user();
        $data = $request->only(['title', 'summary', 'content']);
        $tags = $request->only(['tags']);
        $settings = $request->only(['status']);

        //Create and assign the tags

        $created = $this->repo->

        return response()->json(['m' => 's']);
    }
}
