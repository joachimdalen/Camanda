<?php
namespace App\CA\Tag;

use App\CA\Blog\Model\BlogPost;
use App\CA\Blog\PostTagRepository;
use App\CA\Tag\TagRepository;

/**
 * This class handles interaction for tag management and linking them to blog posts.
 */
class TagHelper
{
    /**
     * @var TagRepository
     */
    protected $tagRepo;

    /**
     * @var PostTagRepository
     */
    protected $postTagRepo;

    /**
     * TagHelper constructor.
     *
     * @param TagRepository $tagRepo
     * @param PostTagRepository $postTagRepo
     */
    public function __construct(TagRepository $tagRepo, PostTagRepository $postTagRepo)
    {
        $this->tagRepo = $tagRepo;
        $this->postTagRepo = $postTagRepo;

    }

    /**
     * Assign a set of new tags to a post.
     *
     * @param array $tags
     * @param BlogPost $post
     * @return Tag[]
     */
    public function assignTagsToPost(array $tags, BlogPost $post)
    {
        $assignedTags = [];
        foreach ($tags as $tag) {
            //Check if a tag with the same label already exists, if so, assign that one
            //to the current post. If not, create a new tag and assign.
            //Using the same tags/tag-ids will allow us to add filtering based on tags.
            $existingTag = $this->tagRepo->getTagFromLabel($tag['label']);
            if ($existingTag) {
                $this->postTagRepo->bindTag($existingTag->id, $post->id);
                $assignedTags[] = $existingTag;
            } else {
                $createdTag = $this->tagRepo->createTag($tag['label']);
                $this->postTagRepo->bindTag($createdTag->id, $post->id);
                $assignedTags[] = $createdTag;
            }
        }
        return $assignedTags;
    }

    /**
     * Get all tags associated with the given blog post.
     *
     * @param BlogPost $post
     * @return Tag[]
     */
    public function getTagsForPost(BlogPost $post)
    {
        $tagsRaw = $this->postTagRepo->getTagsForPost($post->id);
        $tagIds = $tagsRaw->pluck('tag_id');
        $tags = $this->tagRepo->getTagsById($tagIds);
        return $tags;

    }
}
