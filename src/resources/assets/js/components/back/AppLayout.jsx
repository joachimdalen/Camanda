import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Link } from 'react-router-dom'

//Import route components
import NewPost from './posts/NewPost';
import PostsList from './posts/PostsList';

export default class AppLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="header collapse d-lg-flex p-0" id="headerMenuCollapse">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 ml-auto">
                                <form className="input-icon my-3 my-lg-0">
                                    <input type="search" className="form-control header-search" placeholder="Search&hellip;" tabIndex="1" />
                                    <div className="input-icon-addon">
                                        <i className="fe fe-search"></i>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg order-lg-first">
                                <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link"><i className="fe fe-paperclip"></i>Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link"><i className="fe fe-edit-2"></i>Posts</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link"><i className="fe fe-image"></i>Images</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link"><i className="fe fe-tag"></i>Whitelabel</a>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={`/blog/write`} className="nav-link"><i className="fe fe-tag"></i> Write</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-3 my-md-5">
                    <div className="container-fluid">
                        <Switch>
                            <Route path="/blog/write" component={NewPost} />
                            <Route path="/blog/posts" component={PostsList} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}