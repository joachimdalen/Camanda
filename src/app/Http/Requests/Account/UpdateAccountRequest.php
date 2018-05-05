<?php

namespace App\Http\Requests\Account;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class UpdateAccountRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'username' => 'required|alpha_num|unique:users,id,' . $this->get('id') . '|max:255',
            'email' => 'required|unique:users,id,' . $this->get('id') . '|max:255',
            'avatar' => 'nullable|image',
            'old_password' => 'required_with:password|',
            'password' => 'nullable|required_with:old_password|string|min:6|confirmed|max:255|different:old_password',
        ];
    }
}
