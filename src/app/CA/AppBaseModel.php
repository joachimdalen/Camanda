<?php

namespace App\CA;

use Illuminate\Database\Eloquent\Model;
use App\CA\Traits\UuidTrait;

/**
 * Base model containing common functions and methods for use
 * in multiple models.
 */
class AppBaseModel extends Model
{
    use UuidTrait;
    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * Get the first octet of the GUID field.
     *
     * @return string
     */
    public function getShortId()
    {
        if ($this->id) {
            return str_limit($this->id, 8, '');
        }
        return '';
    }

    /**
     * Get the database table name for the model.
     *
     * @return string | null
     */
    public static function getTableName()
    {
        return with(new static)->getTable();
    }

}
