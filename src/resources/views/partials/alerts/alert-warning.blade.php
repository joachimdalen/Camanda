@if(Session::has('warning'))
    <div class="alert alert-warning alert-icon alert-dismissible">
        <button type="button" class="close" data-dismiss="alert"></button>
        <i class="fe fe-alert-triangle mr-2" aria-hidden="true"></i>
        {{Session::get('warning')}}
    </div>
@endif