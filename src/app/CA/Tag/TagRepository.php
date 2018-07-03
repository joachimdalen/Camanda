<?php

namespace App\CA\Tag;

use App\CA\Tag\Model\Tag;

/**
 * Repository responsible of handling all database
 * interaction for the Tag model.
 */
class TagRepository
{
    /**
     * A Tag instance.
     *
     * @var Tag
     */
    protected $model;

    /**
     * TagRepository constructor.
     *
     * @param Tag $tag A Tag instance.
     */
    public function __construct(Tag $tag)
    {
        $this->model = $tag;
    }

    /**
     * Get a tag from given label.
     *
     * @param string $label The label of the tag to get.
     * 
     * @return Tag | null
     */
    public function getTagFromLabel($label)
    {
        return $this->model->where('label', $label)->first();
    }

    /**
     * Create a new tag.
     *
     * @param string $label The label of the tag to create.
     * 
     * @return Tag
     */
    public function createTag($label)
    {
        return $this->model->create(['label' => $label]);
    }

    /**
     * Get all tags with id in the array.
     *
     * @param int[] $ids IDs of tags to get.
     * 
     * @return Tag[]
     */
    public function getTagsById($ids)
    {
        return $this->model->whereIn('id', $ids)->get();
    }
}
