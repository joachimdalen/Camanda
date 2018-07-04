<?php

namespace App\Http\Controllers\Api\Blog;

use App\CA\Blog\BlogRepository;
use App\CA\Blog\Model\BlogPost;
use App\CA\Blog\PostStatus;
use App\CA\Setting\SettingKeys;
use App\CA\Setting\SettingManager;
use App\CA\Tag\TagHelper;
use App\Http\Controllers\Controller;
use App\Http\Requests\Post\CreatePostRequest;
use App\Http\Requests\Post\UpdatePostPublishStatusRequest;
use App\Http\Resources\Blog\BlogPostResource;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class BlogController extends Controller
{
    /**
     * Blog repository
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
     * @param BlogRepository $repository     A BlogRepository instance.
     * @param TagHelper      $tagHelper      A TagHelper instance.
     * @param SettingManager $settingManager A SettingManager instance.
     */
    public function __construct(
        BlogRepository $repository, TagHelper $tagHelper,
        SettingManager $settingManager
    ) {
        $this->repo = $repository;
        $this->tagHelper = $tagHelper;
        $this->settings = $settingManager;
    }

    /**
     * Get all blog posts for the currently signed in user.
     *
     * @param Request $request The http request.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getUserBlogPosts(Request $request)
    {
        // Collect all of the required information.
        $user = Auth::guard('api')->user();

        //Get the posts for the singed in user, and paginate them.
        $posts = $this->repo->getPostsForUser(
            $user->id, true, self::PAGINATION_SIZE
        );

        //Format and return the blog posts as a custom collection.
        return BlogPostResource::collection($posts);
    }

    /**
     * Create a new blog post.
     *
     * @param CreatePostRequest $request The validated http request
     *                                   for creating a post.
     *
     * @return BlogPostResource
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
        if ($slugType === 'random' || !$slugType) {
            $slugSize = $this->settings->get(SettingKeys::SLUG_SIZE);
            if ($slugSize == null) {
                $slugSize = 15;
            }
            $slug = str_random($slugSize);
            while ($this->repo->isSlugInUse($slug)) {
                $slug = str_random($slugSize);
            }
            $data['slug'] = $slug;
        } else {
            $slugSalt = str_random(4);
            // Limti to the word closest to 250 chars,
            // so we have space to append our salt.
            $data['slug'] = str_replace(
                ' ', '-',
                str_limit($data['title'], 249, '')
            ) . '-' . $slugSalt;
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

    /**
     * Update the status determining visibility for the blog post.
     *
     * @param UpdatePostPublishStatusRequest $request Validated http
     *                                                request for the new status.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function setPostPublishStatus(UpdatePostPublishStatusRequest $request)
    {
        $postId = $request->id;
        $status = $request->status;
        $updated = $this->repo->setPostStatus($postId, $status);
        if (!$updated) {
            return response()->json([], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        if ($status === PostStatus::PUBLISHED) {
            $updated = $this->repo->setPostPublishDate($postId, Carbon::now());
            if (!$updated) {
                return response()->json([], Response::HTTP_UNPROCESSABLE_ENTITY);
            }

        }
        return \response()->json(
            [
                'data' =>
                [
                    'id' => $postId,
                    'status' => $status,
                    'status_text' => PostStatus::getStatusText($status),
                ],
            ],
            Response::HTTP_OK
        );
    }

    /**
     * Get a single blog post from url path binding.
     *
     * @param Request  $request The base http request.
     * @param BlogPost $post    The post bound from the id in the url path.
     *
     * @return void
     */
    public function getBlogPost(Request $request, BlogPost $post)
    {
        return new BlogPostResource($post);
    }
}
