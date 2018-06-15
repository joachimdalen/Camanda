<?php

namespace App\Console\Commands;

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
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        // Get current slug type
        // Get all blog posts
        // Check if blog post uses the selected slug type.
        // Convert blog post to use the selected slug type.
    }
}
