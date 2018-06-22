<?php

namespace App\Console\Commands;

use App\CA\Blog\BlogRepository;
use App\CA\Setting\SettingKeys;
use App\CA\Setting\SettingManager;
use Illuminate\Console\Command;

class UpdateBlogPostSlugs extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ca:update-post-slugs';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Refreshes slugs for all blog posts';

    /**
     * Blog repository
     *
     * @var BlogRepository
     */
    protected $repo;

    /**
     * Setting manager
     *
     * @var SettingManager
     */
    protected $settings;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(SettingManager $settings, BlogRepository $repository)
    {
        parent::__construct();
        $this->repo = $repository;
        $this->settings = $settings;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        // Get current slug type
        $slugType = $this->settings->get(SettingKeys::SLUG_TYPE);

        // Get all blog posts
        $posts = $this->repo->getAllBlogPostsRaw();
        $postCount = count($posts);

        $bar = $this->output->createProgressBar($postCount);
        $bar->setFormat('custom_format');
        $bar->setEmptyBarCharacter('-');
        $bar->setBarCharacter('*');
        // Check if blog post uses the selected slug type.
        foreach ($posts as $post) {
            $bar->setMessage('Updating ' . $post->id);
            if ($slugType === 'random' || !$slugType) {
                $slugSize = $this->settings->get(SettingKeys::SLUG_SIZE);
                if ($slugSize == null) {
                    $slugSize = 15;
                }
                $slug = str_random($slugSize);
                while ($this->repo->isSlugInUse($slug)) {
                    $slug = str_random($slugSize);
                }
                $post['slug'] = $slug;
            } else {
                $slugSalt = str_random(4);
                //@todo: Check if this is the correct function for string replacements.
                //Limti to the word closest to 250 chars, so we have space to append our salt.
                $post['slug'] = str_replace(' ', '-', str_limit($post['title'], 249, '')) . '-' . $slugSalt;
            }
            $post->save();
            $bar->advance();
        }
        $bar->finish();
        $this->comment('');

        // Convert blog post to use the selected slug type.
    }
}
