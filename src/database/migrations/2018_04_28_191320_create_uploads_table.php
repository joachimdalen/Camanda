<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUploadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('uploads', function (Blueprint $table) {
            $table->uuid('id')->primary()->index();
            $table->uuid('user_id')->index(); // Uploader
            $table->string('name')->nullable();
            $table->string('storage_path');
            $table->float('size');
            $table->string('mime');
            $table->integer('width');
            $table->integer('height');
            $table->string('type');
            // Accessible by all users, not just the uploader.
            $table->boolean('global')->default(false);
            $table->timestamps();
            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('uploads');
    }
}
