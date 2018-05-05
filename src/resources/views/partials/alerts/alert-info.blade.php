@if(Session::has('info'))
    <div class="alert alert-primary alert-icon alert-dismissible">
        <button type="button" class="close" data-dismiss="alert"></button>
        <i class="fe fe-bell mr-2" aria-hidden="true"></i>
        {{Session::get('info')}}
    </div>
@endif