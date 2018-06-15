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

    public function getTagFromLabel($label)
    {
        return $this->model->where('label', $label)->first();
    }

    public function createTag($label)
    {
        return $this->model->create(['label' => $label]);
    }

    public function getTagsById($ids)
    {
        return $this->model->whereIn('id', $ids)->get();
    }
}
