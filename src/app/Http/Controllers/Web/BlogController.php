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
        return view('blog.posts');
    }
    public function getBlogWritePostView(Request $request)
    {
        return view('blog.write');
    }


}