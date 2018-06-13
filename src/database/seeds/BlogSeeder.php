<?php

use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create users
        $user = factory(App\User::class)->create();

        // Create our blog posts and assign them to the created user.
        $posts = factory(App\CA\Blog\Model\BlogPost::class, 10)->create([
            'user_id' => $user->id,
        ]);
    }
}
