<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'blog', 'middleware' => ['auth:api']], function () {
    Route::group(['prefix' => 'posts'], function () {
        Route::get('', 'Api\Blog\BlogController@getUserBlogPosts')->name('api.blog.posts');
        Route::post('', 'Api\Blog\BlogController@createBlogPost')->name('api.blog.posts.create');
        Route::put('{slug}', 'Api\Blog\BlogController@updateBlogPost')->name('api.blog.posts.update');
    });
});
