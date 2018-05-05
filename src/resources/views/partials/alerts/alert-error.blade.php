@if(Session::has('error'))
    <div class="alert alert-danger alert-icon alert-dismissible">
        <button type="button" class="close" data-dismiss="alert"></button>
        <i class="fe fe-alert-triangle mr-2" aria-hidden="true"></i>
        {{Session::get('error')}}
    </div>
@endif