<?php

use Faker\Generator as Faker;

$factory->define(App\CA\Blog\Model\BlogPost::class, function (Faker $faker) {
    return [
        'user_id' => 1,
        'title' => $faker->slug,
        'slug' => str_random(10),
        'content' => $faker->realText(200),
        'summary' => $faker->realText(100),
        'status' => $faker->randomElement([0, 1, 2, 3]),
    ];
});
