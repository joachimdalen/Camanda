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
                        @include('partials.alerts.alerts-combined')
                        <form action="{{route('updateAccount')}}" method="POST">
                            @csrf
                            {{method_field('PUT')}}
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <label class="form-label" for="name">Name</label>
                                        <div class="input-icon">
                                        <span class="input-icon-addon">
                                            <i class="fe fe-terminal"></i>
                                        </span>
                                            <input type="text"
                                                   class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}"
                                                   placeholder="John Doe" name="name"
                                                   value="{{old('name', $user->name)}}">
                                            @if ($errors->has('password'))
                                                <span class="invalid-feedback">
                                                <strong>{{ $errors->first('name') }}</strong>
                                            </span>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-3">
                                    <div class="form-group">
                                        <label class="form-label" for="username">Username</label>
                                        <div class="input-icon">
                                        <span class="input-icon-addon">
                                            <i class="fe fe-user"></i>
                                        </span>
                                            <input type="text" id="username" name="username"
                                                   class="form-control{{ $errors->has('username') ? ' is-invalid' : '' }}"
                                                   value="{{old('username', $user->username)}}">
                                            @if ($errors->has('username'))
                                                <span class="invalid-feedback">
                                                <strong>{{ $errors->first('username') }}</strong>
                                            </span>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4">
                                    <div class="form-group">
                                        <label class="form-label" for="email">Email address</label>
                                        <div class="input-icon">
                                        <span class="input-icon-addon">
                                            <i class="fe fe-mail"></i>
                                        </span>
                                            <input type="email"
                                                   class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}"
                                                   placeholder="Email" name="email" id="email"
                                                   value="{{old('email', $user->email)}}">
                                            @if ($errors->has('email'))
                                                <span class="invalid-feedback">
                                                <strong>{{ $errors->first('email') }}</strong>
                                            </span>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-md-3 m-auto">
                                            <div class="form-group">
                                                @isset($user->avatar)
                                                    <img src="{{$user->avatar}}" style="height: 150px; width: auto"
                                                         alt=""
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
                                                                   name="avatar" id="avatar">
                                                            <label class="custom-file-label">Choose file</label>
                                                        </div>
                                                    @endisset
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="form-label" for="old_password">Old Password</label>
                                                    <input type="password"
                                                           class="form-control{{ $errors->has('old_password') ? ' is-invalid' : '' }}"
                                                           placeholder="Old Password" name="old_password"
                                                           id="old_password">
                                                    @if ($errors->has('old_password'))
                                                        <span class="invalid-feedback">
                                                        <strong>{{ $errors->first('old_password') }}</strong>
                                                    </span>
                                                    @endif
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="form-label" for="password">New Password</label>
                                                    <input type="password"
                                                           class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}"
                                                           placeholder="New Password" id="password" name="password">
                                                    @if ($errors->has('password'))
                                                        <span class="invalid-feedback">
                                                        <strong>{{ $errors->first('password') }}</strong>
                                                    </span>
                                                    @endif
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="form-label">Confirm Password</label>
                                                    <input type="password"
                                                           class="form-control{{ $errors->has('password_confirmation') ? ' is-invalid' : '' }}"
                                                           placeholder="Confirm Password" id="password_confirmation"
                                                           name="password_confirmation">
                                                    @if ($errors->has('password_confirmation'))
                                                        <span class="invalid-feedback">
                                                        <strong>{{ $errors->first('password_confirmation') }}</strong>
                                                    </span>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-azure float-right">
                                <i class="fe fe-save"></i> Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection