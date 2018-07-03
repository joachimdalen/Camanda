<?php

namespace App\CA\Blog\Model;
use Illuminate\Database\Eloquent\Model;

/**
 * Linking object used to link blog posts to tags.
 */
class PostTag extends Model
{
    /**
     * Columns/Fields that is allowed to be mass assigned.
     *
     * @var array
     */
    protected $fillable = [
        'tag_id',
        'post_id',
    ];

    /**
     * Set if table contains created_at and updated_at.
     * When set to false these timestamps will not be updated.
     *
     * @var boolean
     */
    public $timestamps = false;
}
