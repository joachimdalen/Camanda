<?php

namespace App\CA;

use Illuminate\Database\Eloquent\Model;
use App\CA\Traits\UuidTrait;

class AppBaseModel extends Model
{
    use UuidTrait;
    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    public function getShortId()
    {
        if ($this->id) {
            return str_limit($this->id, 8, '');
        }
        return '';
    }

    public static function getTableName()
    {
        return with(new static)->getTable();
    }

}
