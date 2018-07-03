<?php

namespace App\CA\Setting\Model;

use Illuminate\Database\Eloquent\Model;

/**
 * Application setting model.
 */
class Setting extends Model
{
    /**
     * Columns/Fields that is allowed to be mass assigned.
     *
     * @var array
     */
    protected $fillable = [
        'key',
        'value',
    ];

    /**
     * Set if table contains created_at and updated_at.
     * When set to false these timestamps will not be updated.
     *
     * @var boolean
     */
    public $timestamps = false;
}
