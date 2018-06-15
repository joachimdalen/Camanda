<?php

namespace App\CA\Tag;

use App\CA\Tag\Model\Tag;

class TagRepository
{
    /**
     * @var Tag
     */
    private $model;

    /**
     * TagRepository constructor.
     * @param Tag $tag
     */
    public function __construct(Tag $tag)
    {
        $this->model = $tag;
    }

    /**
     * Get a tag from given label.
     *
     * @param string $label
     * @return Tag | null
     */
    public function getTagFromLabel($label)
    {
        return $this->model->where('label', $label)->first();
    }

    /**
     * Create a new tag.
     *
     * @param string $label
     * @return Tag
     */
    public function createTag($label)
    {
        return $this->model->create(['label' => $label]);
    }

    /**
     * Get all tags with id in the array.
     *
     * @param int[] $ids
     * @return Tag[]
     */
    public function getTagsById($ids)
    {
        return $this->model->whereIn('id', $ids)->get();
    }
}
