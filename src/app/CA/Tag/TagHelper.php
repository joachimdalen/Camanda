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

    protected $tagRepo;
    protected $postTagRepo;

    public function __constructor(TagRepository $tagRepo, PostTagRepository $postTagRepo)
    {
        $this->tagRepo = $tagRepo;
        $this->postTagRepo = $postTagRepo;

    }
    public function assignTagsToPost(array $tags, BlogPost $post)
    {
        foreach ($tags as $tag) {
            $existingTag = $this->tagRepo->getTagFromLabel($tag->label);
            if ($existingTag) {
                $this->postTagRepo->bindTag($existingTag->id, $post->id);
            } else {
                $createdTag = $this->tagRepo->createTag($tag->label);
                $this->postTagRepo->bindTag($createdTag->id, $post->id);
            }
        }
    }

    public function getTagsForPost(BlogPost $post)
    {
        $tagsRaw = $this->postTagRepo->getTagsForPost($post->id);
        $tagIds = $tagsRaw->pluck('tag_id');
        $tags = $this->tagRepo->getTagsById($tagIds);
        return $tags;

    }
}
