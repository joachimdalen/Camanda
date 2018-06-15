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
        // Collect all of the required information.
        $user = Auth::guard('api')->user();
        $posts = $this->repo->getPostsForUser($user->id);

        //Format and return the blog posts as a custom collection.
        return BlogPostResource::collection($posts);
    }

    /**
     * Create a new blog post.
     *
     * @param CreatePostRequest $request
     * @return void
     */
    public function createBlogPost(CreatePostRequest $request)
    {
        // Collect all of the required information.
        $user = Auth::guard('api')->user();
        $data = $request->only(['title', 'summary', 'content', 'status']);
        $tags = $request->only(['tags']);

        //@todo Here we should really be checking settings to see what kind
        //of slug should be used. Also add something to prevent it from
        //running more than x amount of time
        $slug = str_random(12);
        while ($this->repo->isSlugInUse($slug)) {
            $slug = str_random(12);
        }
        $data['slug'] = $slug;

        //Return the newly created object.
        $created = $this->repo->createPost($data);

        // Create and assign the tags
        $this->tagHelper->assignTagsToPost($tags);

        return BlogPostResource($created);
    }
}
