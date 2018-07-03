<?php
namespace App\CA\Traits;

use Webpatser\Uuid\Uuid;
/**
 * Trait that applies a uuid as primary key to the model.
 */
trait UuidTrait
{

    /**
     * Boot function from laravel.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(
            function ($model) {
                $model->{$model->getKeyName()} = Uuid::generate()->string;
            }
        );
    }
}
