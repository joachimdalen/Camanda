@extends('layout.app-public')

@section('content')
    <div class="row">
        <div class="col col-login mx-auto">
            <div class="text-center mb-6">
                <img src="{{asset('img/logo.png')}}" class="h-6" alt="">
            </div>
            <form class="card" action="{{ route('password.request') }}" method="post">
                @csrf
                <input type="hidden" name="token" value="{{ $token }}">
                <div class="card-body p-6">
                    <div class="card-title">{{ __('Reset Password') }}</div>
                    <div class="form-group">
                        <label class="form-label">{{ __('E-Mail Address') }}</label>
                        <input type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}"
                               id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email"
                               value="{{ old('email') }}" required autofocus>
                        @if ($errors->has('email'))
                            <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                        @endif
                    </div>
                    <div class="form-group">
                        <input class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password"
                               required id="password" placeholder="{{ __('Password') }}" type="password">
                        @if ($errors->has('password'))
                            <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label class="form-label">{{ __('Confirm Password') }}</label>
                        <input id="password-confirm" type="password"
                               class="form-control{{ $errors->has('password_confirmation') ? ' is-invalid' : '' }}"
                               name="password_confirmation" required>

                        @if ($errors->has('password_confirmation'))
                            <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password_confirmation') }}</strong>
                                    </span>
                        @endif
                    </div>
                    <div class="form-footer">
                        <button type="submit" class="btn btn-primary btn-block"> {{ __('Reset Password') }}</button>
                    </div>
                </div>
            </form>
            <div class="text-center text-muted">
                Don't have account yet? <a href="{{route('register')}}">Sign up</a>
            </div>
        </div>
    </div>
@endsection
