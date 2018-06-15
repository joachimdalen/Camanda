<?php

namespace App\Http\Controllers\Api\Blog;

use App\CA\Blog\BlogRepository;
use App\CA\Setting\SettingKeys;
use App\CA\Setting\SettingManager;
use App\CA\Tag\TagHelper;
use App\Http\Controllers\Controller;
use App\Http\Requests\Post\CreatePostRequest;
use App\Http\Resources\Blog\BlogPostResource;
use Carbon\Carbon;
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
     * Setting manager
     *
     * @var SettingManager
     */
    protected $settings;

    /**
     * BlogController Constructor
     *
     * @param BlogRepository $repository
     * @param TagHelper $tagHelper
     * @param SettingManager $settingManager
     */
    public function __construct(BlogRepository $repository, TagHelper $tagHelper, SettingManager $settingManager)
    {
        $this->repo = $repository;
        $this->tagHelper = $tagHelper;
        $this->settings = $settingManager;
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

        //Get the posts for the singed in user, and paginate them.
        $posts = $this->repo->getPostsForUser($user->id, true, self::PAGINATION_SIZE);

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
        $tags = [];
        if ($request->filled('tags')) {
            $tags = $request->get('tags');
        }

        $slugType = $this->settings->get(SettingKeys::SLUG_TYPE);
        if ($slugType === 'random') {
            $slugSize = $this->settings->get(SettingKekys::SLUG_SIZE);
            $slug = str_random($slugSize);
            while ($this->repo->isSlugInUse($slug)) {
                $slug = str_random($slugSize);
            }
        } else {
            $slugSalt = str_random(4);
            //@todo: Check if this is the correct function for string replacements.
            //Limti to the word closest to 250 chars, so we have space to append our salt.
            $data['slug'] = str_replace($date['title'], ' ', '-') . '-' . $slugSalt;
        }

        //Assign post to logged in user
        $data['user_id'] = $user->id;

        //If the post is published right away, we want to set the posted_at to the
        //current timestamp
        if ($data['status'] === PostStatus::PUBLISHED) {
            $data['posted_at'] = Carbon::now();
        }

        //Return the newly created object.
        $created = $this->repo->createPost($data);

        // Create and assign the tags
        $created['tags'] = $this->tagHelper->assignTagsToPost($tags, $created);

        //Format and return the blog post.
        return new BlogPostResource($created);
    }
}
