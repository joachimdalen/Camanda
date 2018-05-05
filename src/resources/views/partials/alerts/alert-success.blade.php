@if(Session::has('success'))
    <div class="alert alert-success alert-icon alert-dismissible">
        <button type="button" class="close" data-dismiss="alert"></button>
        <i class="fe fe-check mr-2" aria-hidden="true"></i>
        {{Session::get('success')}}
    </div>
@endif