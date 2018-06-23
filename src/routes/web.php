<?php
Route::group(['prefix' => 'legal'], function () {
    Route::get('privacy', function () {
        return view('legal.privacy-policy');
    })->name('legal.privacy-policy');
});

Auth::routes();
Route::group(['prefix' => '', 'namespace' => 'Web'], function () {
    //Route::get('', 'BlogController@getView')->name('home');
    Route::get('', function () {
        return view('layout.react-base', ['model' => ['id' => 'app', 'title' => 'Write Post']]);
    });
});

Route::group(['prefix' => 'blog', 'namespace' => 'Web'], function () {
    Route::get('posts', 'BlogController@getBlogPostsView')->name('web.blog.posts');
    Route::get('posts/write', 'BlogController@getBlogWritePostView')->name('web.blog.posts.write');
});

Route::group(['middleware' => ['auth']], function () {
    Route::group(['prefix' => 'account', 'namespace' => 'Web', 'middleware' => ['auth']], function () {
        Route::get('', 'AccountController@getView')->name('web.account');
        Route::put('', 'AccountController@updateAccount')->name('web.account.update');
        Route::delete('avatar', 'AccountController@deleteAvatar')->name('web.account.avatar.delete');
    });
});
