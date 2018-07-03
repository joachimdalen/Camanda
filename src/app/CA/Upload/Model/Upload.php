<?php

namespace App\CA\Upload\Model;

use App\CA\AppBaseModel;
use Illuminate\Database\Eloquent\Model;

/**
 * Model for uploads.
 */
class Upload extends AppBaseModel
{
    /**
     * Columns/Fields that is allowed to be mass assigned.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'storage_path',
        'size',
        'mime',
        'width',
        'height',
    ];
}
