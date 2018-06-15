<?php

namespace App\CA\Tag\Model;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    /**
     * Columns/Fields that is allowed to be mass assigned.
     *
     * @var array
     */
    protected $fillable = [
        'label',
    ];
}
