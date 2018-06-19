<?php

namespace App\CA\Upload\Model;

use Illuminate\Database\Eloquent\Model;

class Upload extends Model
{
    /**
     * Columns/Fields that is allowed to be mass assigned.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'name',
        'storage_path',
        'size',
        'mime',
        'width',
        'height',
        'type',
        'global'
    ];
}
