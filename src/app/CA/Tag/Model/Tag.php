<?php

namespace App\CA\Tag\Model;

use Illuminate\Database\Eloquent\Model;
use App\CA\AppBaseModel;
class Tag extends AppBaseModel
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
