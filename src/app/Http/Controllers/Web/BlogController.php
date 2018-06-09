<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BlogController extends Controller
{

    public function getView(Request $request)
    {
        return view('templates.blog');
    }

    public function getBlogPostsView(Request $request)
    {
        //return view('blog.posts');
        return view('layout.react-base', ['model' => ['id' => 'blog-posts', 'title' => 'Blog Posts']]);
    }

    public function getBlogWritePostView(Request $request)
    {
        //return view('blog.write');
        return view('layout.react-base', ['model' => ['id' => 'app', 'title' => 'Write Post']]);
    }


}