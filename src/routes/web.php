<?php
Auth::routes();
Route::group(['prefix' => '', 'namespace' => 'Web'], function () {
    Route::get('', 'BlogController@getView')->name('home');
});
Route::group(['prefix' => 'blog', 'namespace' => 'Web'], function () {
   // Route::get('', 'AccountController@getView')->name('userAccount');
});
Route::group(['prefix' => 'account', 'namespace' => 'Web', 'middleware' => ['auth']], function () {
    Route::get('', 'AccountController@getView')->name('userAccount');
    Route::put('', 'AccountController@updateAccount')->name('updateAccount');
    Route::delete('avatar', 'AccountController@deleteAvatar')->name('deleteAvatar');
});