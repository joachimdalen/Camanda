import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import BaseContainer from "../shared/BaseContainer";
import Card from "../shared/card/Card";
import CardHeader from "../shared/card/CardHeader";
import CardTitle from "../shared/card/CardTitle";
import CardOptions from "../shared/card/CardOptions";
import StaticLink from "../shared/links/StaticLink";
import {Dropdown, DropdownItem} from "../shared/dropdown/Dropdown";
import TooltipIconLink from "../shared/links/TooltipIconLink";

export default class BlogPosts extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            loading: false,
            posts: []
        };
    }

    componentDidMount() {
        axios.get(`/api/blog/posts`).then(response => {
            this.setState({loading: false, posts: response.data.data});
        }).catch(error => {
            this.setState({error: error.data});
        })
    }

    render() {
        return (
            <BaseContainer>
                <Card>
                    <CardHeader>
                        <CardTitle title={"Posts"}/>
                        <CardOptions>
                            <StaticLink icon={"plus"} uri={"/blog/posts/write"} title={"Write Posts"} type={"primary"}/>
                        </CardOptions>
                    </CardHeader>
                    <div className="table-responsive">
                        <table className="table card-table table-vcenter text-nowrap">
                            <thead>
                            <tr>
                                <th className="w-1">No.</th>
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
                                <td><span className="text-muted">001401</span></td>
                                <td><a href="invoice.html" className="text-inherit">Design Works</a></td>
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
                                    <span className="status-icon bg-success"></span> Published
                                </td>
                                <td className="text-right">
                                    <StaticLink type={"secondary"} title={"Unpublish"} uri={"#"} icon={"x"}
                                          iconClassName={"text-danger"} className={"mr-2"}/>
                                    <Dropdown title={"Actions"} type={"secondary"}>
                                        <DropdownItem icon={"eye"} title={"View"}/>
                                        <DropdownItem icon={"activity"} title={"View Statistics"}/>
                                        <DropdownItem icon={"copy"} title={"Copy Link"}/>
                                    </Dropdown>
                                </td>
                                <td>
                                    <TooltipIconLink title={"Edit Post"} icon={"edit"} placement={"top"} uri={"#"}/>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="text-muted">001402</span></td>
                                <td><a href="invoice.html" className="text-inherit">UX Wireframes</a></td>
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
                                    <span className="status-icon bg-warning"></span> Scheduled
                                </td>
                                <td className="text-right">
                                    <a href="javascript:void(0)" className="btn btn-secondary btn-sm">
                                        <i className="fe fe-clock text-indigo"></i>
                                        Publish now
                                    </a>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle"
                                                data-toggle="dropdown">
                                            Actions
                                        </button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">
                                                <i className="fe fe-eye"></i>
                                                View
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="fe fe-activity"></i>
                                                View Statistics
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="fe fe-copy"></i>
                                                Copy Link
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <a className="icon" href="javascript:void(0)" data-toggle="tooltip"
                                       data-placement="top" title="Edit Post">
                                        <i className="fe fe-edit"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="text-muted">001405</span></td>
                                <td><a href="invoice.html" className="text-inherit">Marketing Templates</a></td>
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
                                    <span className="status-icon bg-danger"></span> Private
                                </td>
                                <td className="text-right">
                                    <a href="javascript:void(0)" className="btn btn-secondary btn-sm">
                                        <i className="fe fe-check text-success"></i>
                                        Publish
                                    </a>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle"
                                                data-toggle="dropdown">
                                            Actions
                                        </button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">
                                                <i className="fe fe-eye"></i>
                                                View
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="fe fe-activity"></i>
                                                View Statistics
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="fe fe-copy"></i>
                                                Copy Link
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <a className="icon" href="javascript:void(0)" data-toggle="tooltip"
                                       data-placement="top" title="Edit Post">
                                        <i className="fe fe-edit"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="text-muted">001406</span></td>
                                <td><a href="invoice.html" className="text-inherit">Sales Presentation</a></td>
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
                                    <span className="status-icon bg-secondary"></span> Draft
                                </td>
                                <td className="text-right">
                                    <a href="javascript:void(0)" className="btn btn-secondary btn-sm">
                                        <i className="fe fe-check text-success"></i>
                                        Publish
                                    </a>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle"
                                                data-toggle="dropdown">
                                            Actions
                                        </button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">
                                                <i className="fe fe-eye"></i>
                                                View
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="fe fe-activity"></i>
                                                View Statistics
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="fe fe-copy"></i>
                                                Copy Link
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <a className="icon" href="javascript:void(0)" data-toggle="tooltip"
                                       data-placement="top" title="Edit Post">
                                        <i className="fe fe-edit"></i>
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="mt-3">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-end mx-3">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" tabIndex="-1">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </Card>
            </BaseContainer>
        );
    }
}

if (document.getElementById('blog-posts')) {
    ReactDOM.render(<BlogPosts/>, document.getElementById('blog-posts'));
}