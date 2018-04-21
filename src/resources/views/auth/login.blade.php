@extends('layout.app-public')

@section('content')
    <div class="row">
        <div class="col col-login mx-auto">
            <div class="text-center mb-6">
                <img src="{{asset('img/logo.png')}}" class="h-6" alt="">
            </div>
            <form class="card" action="{{ route('login') }}" method="post">
                {{csrf_field()}}
                <div class="card-body p-6">
                    <div class="card-title">Login to your account</div>
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
                        <label class="form-label">
                            {{ __('Password') }}
                            <a href="{{ route('password.request') }}"
                               class="pull-right small">  {{ __('Forgot Your Password?') }}</a>
                        </label>
                        <input class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password"
                               required id="password" placeholder="{{ __('Password') }}" type="password">
                        @if ($errors->has('password'))
                            <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label class="custom-control custom-checkbox">
                            <input class="custom-control-input" type="checkbox"
                                   name="remember" {{ old('remember') ? 'checked' : '' }}/>
                            <span class="custom-control-label">{{ __('Remember Me') }}</span>
                        </label>
                    </div>
                    <div class="form-footer">
                        <button type="submit" class="btn btn-primary btn-block">{{ __('Login') }}</button>
                    </div>
                </div>
            </form>
            <div class="text-center text-muted">
                Don't have account yet? <a href="{{route('register')}}">Sign up</a>
            </div>
        </div>
    </div>
@endsection
