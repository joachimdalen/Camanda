<?php

namespace App\CA\Setting;

/**
 * Class containing all setting keys used in the application.
 */
class SettingKeys
{
    /**
     * Sets what kind of slug to use for a blog post.
     * Can either be 'title' or 'random'.
     * title: Use parts of the post tile when generating the slug.
     * Will make link invalid if title is changed.
     * random: Use a set of random chars as slug.
     * Is not affected when title is changed.
     */
    const SLUG_TYPE = 'slug_type';

    /**
     * Sets length of the slug when the SLUG_TYPE is set to random.
     * Max: 20 Min: 5
     */
    const SLUG_SIZE = 'slug_size';

    /**
     * Sets whether or not setting values should be cached inside the application.
     * This value will not be cached and will always be checked directly against
     * the database.
     * Default: true
     */
    const CACHE_SETTINGS = 'cache_settings';

    /**
     * Sets if blog posts should be cached. Cache will be updated on post update
     * and other events.
     * Default: true
     */
    const CACHE_BLOG_POSTS = 'cache_blog_posts';
}
