<?php

use App\CA\Blog\PostStatus;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBlogPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blog_posts', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('user_id');
            $table->string('title');
            $table->string('slug')->unique()->index();
            $table->text('content');
            $table->string('summary');
            $table->text('preview_image')->nullable();
            $table->text('header_image')->nullable();
            $table->uuid('preview_image_id')->nullable();
            $table->uuid('header_image_id')->nullable();
            $table->integer('status')->default(PostStatus::DRAFT);
            $table->datetime('posted_at')->nullable();
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('preview_image_id')->references('id')->on('uploads')->onDelete('cascade');
            $table->foreign('header_image_id')->references('id')->on('uploads')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blog_posts');
    }
}
