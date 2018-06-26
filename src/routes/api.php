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

Route::group(['middleware' => ['auth:api']], function () {
    Route::group(['prefix' => 'blog'], function () {
        Route::group(['prefix' => 'posts', 'namespace' => 'Api\Blog'], function () {
            Route::get('', 'BlogController@getUserBlogPosts')->name('api.blog.posts');
            Route::post('', 'BlogController@createBlogPost')->name('api.blog.posts.create');
            Route::put('status', 'BlogController@setPostPublishStatus')->name('api.blog.posts.status');
            //Route::put('{slug}', 'BlogController@updateBlogPost')->name('api.blog.posts.update');
        });
    });
    Route::group(['prefix' => 'upload', 'namespace' => 'Api\Upload'], function () {
        Route::post('', 'UploadController@uploadImage')->name('api.upload');
        Route::get('mine', 'UploadController@getUploadsByUser')->name('api.upload.mine');
        Route::delete('delete/{upload}', 'UploadController@deleteImage')->name('api.upload.delete');
    });
});

