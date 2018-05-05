@extends('layout.app')
@isset($model['title'])
    @section('title', $model['title'])
@endisset
@section('content')
    <div id="{{$model['id']}}"></div>
@endsection