@extends('layout.app')
@section('title', 'Write Post')
@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-8 col-xl-2 order-1">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Post Metadata</h3>
                    </div>
                    <div class="card-body p-2">
                        <div class="form-group">
                            <label class="form-label">Title</label>
                            <input type="text" class="form-control" name="title" placeholder="Text..">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Tags</label>
                            <input type="text" class="form-control" id="input-tags" value="aa,bb,cc,dd">
                            <div class="tags p-1">
                                <span class="tag">One <a href="#" class="tag-addon"><i class="fe fe-x"></i></a></span>
                                <span class="tag">One <a href="#" class="tag-addon"><i class="fe fe-x"></i></a></span>
                                <span class="tag">One <a href="#" class="tag-addon"><i class="fe fe-x"></i></a></span>
                                <span class="tag">One <a href="#" class="tag-addon"><i class="fe fe-x"></i></a></span>
                                <span class="tag">One <a href="#" class="tag-addon"><i class="fe fe-x"></i></a></span>
                                <span class="tag">One <a href="#" class="tag-addon"><i class="fe fe-x"></i></a></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Summary <span class="form-label-small">56/100</span></label>
                            <textarea class="form-control" name="example-textarea-input" rows="6"
                                      placeholder="Content..">Oh! Come and see the violence inherent in the system! Help, help, I'm being repressed! We shall say 'Ni' again to you, if you do not appease us. I'm not a witch. I'm not a witch. Camelot!</textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-8 order-2">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title"></h3>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="content" class="form-label"> Post Content</label>
                            <textarea name="content" id="content" class="form-control" rows="10"></textarea>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-success float-right">
                                <i class="fe fe-save"></i>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-2 order-2 mb-4">
                <div class="list-group list-group-transparent mb-0">
                    <a href="../docs/index.html" class="list-group-item list-group-item-action">
                        <span class="icon mr-3"><i class="fe fe-flag"></i></span>Meta & Content
                    </a>
                </div>
                <div class="list-group list-group-transparent mb-0">
                    <a href="../docs/alerts.html" class="list-group-item list-group-item-action">
                        <span class="icon mr-3"><i class="fe fe-image"></i></span>Images
                    </a>
                    <a href="../docs/avatars.html" class="list-group-item list-group-item-action">
                        <span class="icon mr-3"><i class="fe fe-file"></i></span>Attachments
                    </a>
                    <a href="../docs/avatars.html" class="list-group-item list-group-item-action">
                        <span class="icon mr-3"><i class="fe fe-git-branch"></i></span> Git Repositories
                    </a>
                    <a href="../docs/avatars.html" class="list-group-item list-group-item-action">
                        <span class="icon mr-3"><i class="fe fe-layout"></i></span> Layout
                    </a>
                    <a href="../docs/avatars.html" class="list-group-item list-group-item-action">
                        <span class="icon mr-3"><i class="fe fe-feather"></i></span> References
                    </a>
                </div>
                <div class="d-none d-lg-block mt-6">
                    <a href="https://github.com/tabler/tabler/edit/dev/src/_docs/cards.md" class="text-muted">Edit this
                        page</a>
                </div>
            </div>
        </div>
    </div>
@endsection