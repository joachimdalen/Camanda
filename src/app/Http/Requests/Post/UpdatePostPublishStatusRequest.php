<?php

namespace App\Http\Requests\Post;

use App\CA\Blog\Model\BlogPost;
use App\CA\Blog\PostStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class UpdatePostPublishStatusRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => 'exists:' . BlogPost::getTableName() . ',id',
            'status' => [
                'required',
                Rule::in([
                    PostStatus::PUBLISHED,
                    PostStatus::SCHEDULED,
                    PostStatus::PRIVATE,
                    PostStatus::DRAFT
                ])
            ]
        ];
    }
}
