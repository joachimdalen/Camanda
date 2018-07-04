<?php

namespace Tests\Unit\Tag;

use App\CA\Tag\Model\Tag;
use App\CA\Tag\TagRepository;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\CA\Tag\TagHelper;
use App\CA\Blog\Model\PostTag;
use App\CA\Blog\PostTagRepository;

class TagHelperTest extends TestCase
{
    use RefreshDatabase;

    public function testAssignTagsToPost()
    {
        $author = factory(\App\User::class)->create();
        $tagHelper = new TagHelper(new TagRepository(new Tag()), new PostTagRepository(new PostTag()));
        $post = factory(\App\CA\Blog\Model\BlogPost::class, 1)->create([
            'user_id' => $author->id,
            'slug' => str_random(10),
        ])->first();

        $tags = [[
            'label' => "Tag1",
        ], [
            'label' => 'Tag2',
        ]];

        $tagHelper->assignTagsToPost($tags, $post);

        $postTags = $tagHelper->getTagsForPost($post);

        $this->assertEquals(2, count($postTags));

    }

}
