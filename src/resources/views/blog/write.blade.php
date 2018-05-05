@extends('layout.app')
@section('title', 'Write Post')
@section('content')
    <div class="container-fluid">
        <div class="row">
          {{--  <div class="col-sm-12 col-md-12 col-lg-8 col-xl-2 order-md-1">
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
            </div>--}}
            {{--  <div class="col-8 order-2">
                  <div class="card">
                      <div class="card-header">
                          <h3 class="card-title">Post Content</h3>
                      </div>
                      <div class="card-body">
                          <div class="form-group">
                              <textarea name="content" id="content" class="form-control" rows="10"></textarea>
                          </div>
                          <div class="form-group">
                              <button class="btn btn-success btn-sm float-right">
                                  <i class="fe fe-save"></i>
                                  Save
                              </button>
                          </div>
                      </div>
                  </div>
              </div>--}}
            {{--  <div class="col-8 order-2">
                  <div class="row row-cards row-deck">
                      <div class="col-md-6">
                          <div class="card card-aside">
                              <a href="#" class="card-aside-column" style="background-image: url(images/400x200.png)"></a>
                              <div class="card-body d-flex flex-column">
                                  <h4><a href="#">And this isn't my nose. This is a false one.</a></h4>
                                  <div class="text-muted">Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you suggesting that coconuts migr...</div>
                                  <div class="d-flex align-items-center pt-5 mt-auto">
                                      <div class="avatar avatar-md mr-3" style="background-image: url(./demo/faces/female/18.jpg)"></div>
                                      <div>
                                          <a href="./profile.html" class="text-default">Rose Bradley</a>
                                          <small class="d-block text-muted">3 days ago</small>
                                      </div>
                                      <div class="ml-auto text-red">
                                          <a href="#" class="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="card card-aside">
                              <a href="#" class="card-aside-column" style="background-image: url(./demo/photos/david-klaasen-54203-500.jpg)"></a>
                              <div class="card-body d-flex flex-column">
                                  <h4><a href="#">And this isn't my nose. This is a false one.</a></h4>
                                  <div class="text-muted">Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you suggesting that coconuts migr...</div>
                                  <div class="d-flex align-items-center pt-5 mt-auto">
                                      <div class="avatar avatar-md mr-3" style="background-image: url(./demo/faces/female/18.jpg)"></div>
                                      <div>
                                          <a href="./profile.html" class="text-default">Rose Bradley</a>
                                          <small class="d-block text-muted">3 days ago</small>
                                      </div>
                                      <div class="ml-auto text-red">
                                          <a href="#" class="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>--}}
            <div class="col-sm-12 col-md-9 col-lg-10 order-lg-1">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <div class="card-title">Carousel</div>
                                <div class="card-options">
                                    <button class="btn btn-info btn-sm mr-2">
                                        <i class="fe fe-plus"></i>
                                        Select from gallery
                                    </button>
                                    <button class="btn btn-indigo btn-sm mr-2">
                                        <i class="fe fe-upload"></i>
                                        Upload
                                    </button>
                                    <label class="custom-switch m-0">
                                        <input type="checkbox" value="1" class="custom-switch-input" checked>
                                        <span class="custom-switch-indicator"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-12 col-md-6 col-lg-4">
                                        <div class="form-group">
                                            <label class="form-label">Images in carousel</label>
                                            <div class="row gutters-sm">
                                                <div class="col-6 col-sm-4 mt-1 p-1 image-selectable">
                                                    <img src="http://via.placeholder.com/350x150" alt="}">
                                                </div>
                                                <div class="col-6 col-sm-4 mt-1 p-1 image-selectable">
                                                    <img src="http://via.placeholder.com/350x150" alt="}">
                                                </div>
                                                <div class="col-6 col-sm-4 mt-1 p-1 image-selectable selected">
                                                    <img src="http://via.placeholder.com/350x150" alt="}">
                                                </div>
                                                <div class="col-6 col-sm-4 mt-1 p-1 image-selectable">
                                                    <img src="http://via.placeholder.com/350x150" alt="}">
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-8">
                                        <div class="card">
                                            <div class="card-body d-flex flex-column">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <div class="form-group input-group-sm">
                                                            <label for="title">Title</label>
                                                            <input type="text" name="title" class="form-control">
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group input-group-sm">
                                                            <label for="credit">Credit</label>
                                                            <input type="text" name="credit" class="form-control">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group input-group-sm">
                                                    <label for="description">Description</label>
                                                    <textarea name="description" id="description" rows="3"
                                                              class="form-control"></textarea>
                                                </div>
                                                <div class="form-group input-group-sm">
                                                    <div class="btn-list w-100 text-right">
                                                        <button class="btn btn-sm btn-danger">
                                                            <i class="fe fe-x"></i>
                                                            Remove
                                                        </button>
                                                        <button class="btn btn-sm btn-success">
                                                            <i class="fe fe-save"></i>
                                                            Save
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-3 col-lg-2 order-lg-2 order-lg-0 mb-4">
                <div class="list-group list-group-transparent mb-0">
                    <a href="../docs/index.html" class="list-group-item list-group-item-action">
                        <span class="icon mr-3"><i class="fe fe-flag"></i></span>Meta & Content
                    </a>
                    <a href="../docs/avatars.html" class="list-group-item list-group-item-action">
                        <span class="icon mr-3"><i class="fe fe-layout"></i></span> Layout
                    </a>
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