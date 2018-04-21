@extends('layout.app-public')

@section('content')
    <div class="row">
        <div class="col col-login mx-auto">
            <div class="text-center mb-6">
                <img src="{{asset('img/logo.png')}}" class="h-6" alt="">
            </div>
            <form class="card" action="{{ route('register') }}" method="post">
                @csrf
                <div class="card-body p-6">
                    <div class="card-title">{{ __('Register') }}</div>
                    <div class="form-group">
                        <label class="form-label">{{ __('Name') }}</label>
                        <input type="text" id="name" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}"
                               name="name" value="{{ old('name') }}" required autofocus>
                        @if ($errors->has('name'))
                            <span class="invalid-feedback">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label class="form-label">{{ __('Username') }}</label>
                        <input type="text" id="username" class="form-control{{ $errors->has('username') ? ' is-invalid' : '' }}"
                               name="username" value="{{ old('username') }}" required autofocus>
                        @if ($errors->has('username'))
                            <span class="invalid-feedback">
                                        <strong>{{ $errors->first('username') }}</strong>
                                    </span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label class="form-label">{{ __('E-Mail Address') }}</label>
                        <input type="email" name="email"
                               class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}"
                               value="{{ old('email') }}" required>
                        @if ($errors->has('email'))
                            <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label class="form-label">{{ __('Password') }}</label>
                        <input type="password" id="password" name="password"
                               class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}"
                               placeholder="Password">
                        @if ($errors->has('password'))
                            <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label class="form-label">{{ __('Confirm Password') }}</label>
                        <input type="password" id="password-confirm" name="password_confirmation" class="form-control"
                               placeholder="Password" required>
                    </div>
                    <div class="form-group">
                        <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input"/>
                            <span class="custom-control-label">I agree to the <a href="/terms">terms and policy</a></span>
                        </label>
                    </div>
                    <div class="form-footer">
                        <button type="submit" class="btn btn-primary btn-block">  {{ __('Register') }}</button>
                    </div>
                </div>
            </form>
            <div class="text-center text-muted">
                Already have account? <a href="{{route('login')}}">Sign in</a>
            </div>
        </div>
    </div>
@endsection
