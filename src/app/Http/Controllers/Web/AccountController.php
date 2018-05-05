<?php

namespace App\Http\Controllers\Web;


use App\Http\Controllers\Controller;
use App\Http\Requests\Account\UpdateAccountRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AccountController extends Controller
{
    /**
     * Get base view for user account.
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function getView(Request $request)
    {
        return view('account.index', ['user' => Auth::user()]);
    }

    /**
     * Update a users account.
     * @param UpdateAccountRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function updateAccount(UpdateAccountRequest $request)
    {
        $user = Auth::user();
        if (!$user) {

        }
        // Info - Password - Avatar
        $info = $request->only([
            'name', 'username', 'email'
        ]);
        if (!$user->update($info)) {
            $request->session()->flash('error', 'Failed to update account details');
        }
        if ($request->hasFile('avatar')) {
            $avatar = $request->file('avatar');
        }
        if ($request->has('old_password')) {
            if (Hash::check($request->old_password, $user->password)) {
                $user->password = Hash::make($request->password);
                $user->save();
            } else {
                return back()->withErrors(['old_password' => 'The old password does not match your current one']);
            }
        }
        $request->session()->flash('success', 'Your account details has been changed.');
        return back();
    }
}