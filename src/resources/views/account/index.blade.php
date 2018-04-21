@extends('layout.app')
@section('title', 'Account')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Account</h3>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="form-group">
                                    <label class="form-label">Name</label>
                                    <div class="input-icon">
                                        <span class="input-icon-addon">
                                            <i class="fe fe-terminal"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="John Doe" name="name"
                                               value="{{old('username', $user->name)}}">
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <div class="form-group">
                                    <label class="form-label">Username</label>
                                    <div class="input-icon">
                                        <span class="input-icon-addon">
                                            <i class="fe fe-user"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="Username">
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4">
                                <div class="form-group">
                                    <label class="form-label">Email address</label>
                                    <div class="input-icon">
                                        <span class="input-icon-addon">
                                            <i class="fe fe-mail"></i>
                                        </span>
                                        <input type="email" class="form-control" placeholder="Email" name="email"
                                               value="{{old('email', $user->email)}}">
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-md-3 m-auto">
                                        <div class="form-group">
                                            @isset($user->avatar)
                                                <img src="{{$user->avatar}}" style="height: 150px; width: auto" alt=""
                                                     class="img-fluid rounded">
                                                <button class="btn btn-danger btn-sm text-center my-1">Remove Avatar
                                                </button>
                                            @else
                                                <img src="http://placehold.it/200x200"
                                                     style="height: 150px; width: auto" alt=""
                                                     class="img-fluid rounded">
                                            @endisset
                                        </div>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="col-12">
                                            <div class="form-group">
                                                @isset($user->avatar)
                                                @else
                                                    <div class="form-label">Select Image</div>
                                                    <div class="custom-file">
                                                        <input type="file" class="custom-file-input"
                                                               name="avatar_image">
                                                        <label class="custom-file-label">Choose file</label>
                                                    </div>
                                                @endisset
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label class="form-label">Old Password</label>
                                                <input type="password" class="form-control" placeholder="Old Password">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label class="form-label">New Password</label>
                                                <input type="password" class="form-control" placeholder="New Password">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label class="form-label">Confirm Password</label>
                                                <input type="password" class="form-control"
                                                       placeholder="Confirm Password">
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-azure float-right">
                            <i class="fe fe-save"></i> Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection