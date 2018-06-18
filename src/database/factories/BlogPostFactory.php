<?php

use Faker\Generator as Faker;

$factory->define(App\CA\Blog\Model\BlogPost::class, function (Faker $faker) {
    return [
        'user_id' => 1,
        'title' => $faker->title,
        'slug' => $faker->slug,
        'content' => $faker->realText(200),
        'summary' => $faker->realText(100),
        'status' => $faker->randomElement([0, 1, 2, 3]),
        'preview_image' => $faker->imageUrl(500, 300),
        'header_image' => $faker->imageUrl(1500, 500)
    ];
});
