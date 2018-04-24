@extends('layout.app')
@section('title', 'Blog Posts')
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Blog Posts</h3>
                        <div class="card-options">
                            <a href="/blog/posts/write" class="btn btn-primary btn-sm">
                                <i class="fe fe-plus"></i> Write Post
                            </a>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table card-table table-vcenter text-nowrap">
                            <thead>
                            <tr>
                                <th class="w-1">No.</th>
                                <th>Title</th>
                                <th>Posted</th>
                                <th>Views</th>
                                <th>Created</th>
                                <th>Status</th>
                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><span class="text-muted">001401</span></td>
                                <td><a href="invoice.html" class="text-inherit">Design Works</a></td>
                                <td>
                                    Carlson Limited
                                </td>
                                <td>
                                    87956621
                                </td>
                                <td>
                                    15 Dec 2017
                                </td>
                                <td>
                                    <span class="status-icon bg-success"></span> Published
                                </td>
                                <td class="text-right">
                                    <a href="javascript:void(0)" class="btn btn-secondary btn-sm">
                                        <i class="fe fe-x text-danger"></i>
                                        Unpublish
                                    </a>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">
                                            Actions
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">
                                                <i class="fe fe-eye"></i>
                                                View
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                <i class="fe fe-activity"></i>
                                                View Statistics
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                <i class="fe fe-copy"></i>
                                                Copy Link
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <a class="icon" href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Edit Post">
                                        <i class="fe fe-edit"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td><span class="text-muted">001402</span></td>
                                <td><a href="invoice.html" class="text-inherit">UX Wireframes</a></td>
                                <td>
                                    Adobe
                                </td>
                                <td>
                                    87956421
                                </td>
                                <td>
                                    12 Apr 2017
                                </td>
                                <td>
                                    <span class="status-icon bg-warning"></span> Scheduled
                                </td>
                                <td class="text-right">
                                    <a href="javascript:void(0)" class="btn btn-secondary btn-sm">
                                        <i class="fe fe-clock text-indigo"></i>
                                        Publish now
                                    </a>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">
                                            Actions
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">
                                                <i class="fe fe-eye"></i>
                                                View
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                <i class="fe fe-activity"></i>
                                                View Statistics
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                <i class="fe fe-copy"></i>
                                                Copy Link
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <a class="icon" href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Edit Post">
                                        <i class="fe fe-edit"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td><span class="text-muted">001405</span></td>
                                <td><a href="invoice.html" class="text-inherit">Marketing Templates</a></td>
                                <td>
                                    Printic
                                </td>
                                <td>
                                    87956621
                                </td>
                                <td>
                                    29 Jan 2018
                                </td>
                                <td>
                                    <span class="status-icon bg-danger"></span> Private
                                </td>
                                <td class="text-right">
                                    <a href="javascript:void(0)" class="btn btn-secondary btn-sm">
                                        <i class="fe fe-check text-success"></i>
                                        Publish
                                    </a>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">
                                            Actions
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">
                                                <i class="fe fe-eye"></i>
                                                View
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                <i class="fe fe-activity"></i>
                                                View Statistics
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                <i class="fe fe-copy"></i>
                                                Copy Link
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <a class="icon" href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Edit Post">
                                        <i class="fe fe-edit"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td><span class="text-muted">001406</span></td>
                                <td><a href="invoice.html" class="text-inherit">Sales Presentation</a></td>
                                <td>
                                    Tabdaq
                                </td>
                                <td>
                                    87956621
                                </td>
                                <td>
                                    4 Feb 2018
                                </td>
                                <td>
                                    <span class="status-icon bg-secondary"></span> Draft
                                </td>
                                <td class="text-right">
                                    <a href="javascript:void(0)" class="btn btn-secondary btn-sm">
                                        <i class="fe fe-check text-success"></i>
                                        Publish
                                    </a>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">
                                            Actions
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">
                                                <i class="fe fe-eye"></i>
                                                View
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                <i class="fe fe-activity"></i>
                                                View Statistics
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                <i class="fe fe-copy"></i>
                                                Copy Link
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <a class="icon" href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Edit Post">
                                        <i class="fe fe-edit"></i>
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="mt-3">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-end mx-3">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection