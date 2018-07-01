<?php

namespace Tests\Unit\Tag;

use App\CA\Tag\Model\Tag;
use App\CA\Tag\TagRepository;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TagRepositoryTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test that a single tag can be created from label.
     *
     * @return void
     */
    public function testCreateSingleTag()
    {
        $tagRepo = new TagRepository(new Tag());
        $created = $tagRepo->createTag('Tag1');

        $this->assertInstanceOf(Tag::class, $created);
        $this->assertEquals($created->label, 'Tag1');
    }

    /**
     * Test that a tag can be fetched from the database.
     *
     * @return void
     */
    public function testGetTagFromLabel()
    {
        $tagRepo = new TagRepository(new Tag());

        $created = $tagRepo->createTag('Tag1');
        $tag1 = $tagRepo->getTagFromLabel('Tag1');
        $tag2 = $tagRepo->getTagFromLabel('Tag2');

        $this->assertNotNull($tag1);
        $this->assertNull($tag2);
    }

    public function testGetTagsById()
    {
        $tagRepo = new TagRepository(new Tag());

        $tag1 = $tagRepo->createTag('Tag1');
        $tag2 = $tagRepo->createTag('Tag2');
        $tag3 = $tagRepo->createTag('Tag3');

        $ids = [$tag1->id, $tag3->id];
        $tags = $tagRepo->getTagsById($ids);
        $this->assertEquals(2, count($tags));
        $this->assertEquals($tag1, $tags[0]);
        $this->assertEquals($tag3, $tags[1]);
    }
}
