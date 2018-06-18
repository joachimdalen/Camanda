import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from "react-redux"
import Card from "../../shared/card/Card";
import CardHeader from "../../shared/card/CardHeader";
import CardTitle from "../../shared/card/CardTitle";
import CardOptions from "../../shared/card/CardOptions";
import CardBody from "../../shared/card/CardBody";
import StaticLink from "../../shared/links/StaticLink";
import {Dropdown, DropdownItem} from "../../shared/dropdown/Dropdown";
import TooltipIconLink from "../../shared/links/TooltipIconLink";
import {fetchPosts} from '../../../actions/postsListActions'
import {BarLoader} from 'react-css-loaders';
import PostStatus from "../../posts/PostStatus";
import Moment from 'react-moment';

class PostsList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchPosts());
    }

    renderTableHeader() {
        return (<thead>
        <tr>
            <th className="w-1">No.</th>
            <th>Title</th>
            <th>Posted</th>
            <th>Updated</th>
            <th>Created</th>
            <th>Status</th>
            <th></th>
            <th></th>
        </tr>
        </thead>);
    }

    renderTableBody() {
        if (!this.props.posts) return;
        if (!this.props.posts.data.length) return;
        return (
            <tbody>
            {this.props.posts.data.map(post => {
                return this.renderRow(post)
            })}
            </tbody>
        );
    }

    renderRow(post) {
        return (
            <tr key={post.id}>
                <td><span className="text-muted">{post.short_id}</span></td>
                <td><a href="invoice.html" className="text-inherit">{post.title}</a></td>
                <td>
                    {!post.posted_at_unix ? (<p>Not Posted</p>) : (
                        <Moment fromNow unix>
                            {post.posted_at_unix}
                        </Moment>
                    )}
                </td>
                <td>
                    <Moment fromNow unix>
                        {post.updated_at_unix}
                    </Moment>
                </td>
                <td>
                    <Moment fromNow unix>
                        {post.created_at_unix}
                    </Moment>
                </td>
                <td><PostStatus status={post.status_text}/></td>
                <td className="text-right">
                    {this.getPublishActionButton(post)}
                    <Dropdown title={"Actions"} type={"secondary"}>
                        <DropdownItem icon={"eye"} title={"View"}/>
                        <DropdownItem icon={"activity"} title={"View Statistics"}/>
                        <DropdownItem icon={"copy"} title={"Copy Link"}/>
                        <DropdownItem icon={"eye-off"} title={"Copy Preview Link"}/>
                    </Dropdown>
                </td>
                <td>
                    <TooltipIconLink title={"Edit Post"} icon={"edit"} placement={"top"} uri={"#"}/>
                </td>
            </tr>
        );
    }

    getPublishActionButton(post) {
        const {status_text} = post;
        switch (status_text) {
            case 'draft': {
                return (<StaticLink type={"secondary"} title={"Publish"} uri={"#"} icon={"check-circle"} iconClassName={"text-success mr-1"} className={"mr-2"}/>)
            }
            case 'published': {
                return (<StaticLink type={"secondary"} title={"Unpublish"} uri={"#"} icon={"x"} iconClassName={"text-danger mr-1"} className={"mr-2"}/>)
            }
            case 'private': {
                return <i className={"fe fe-lock text-danger mr-2"}/>
            }
            case 'scheduled': {
                return (<StaticLink type={"secondary"} title={"Publish Now"} uri={"#"} icon={"clock"} iconClassName={"text-success mr-1"} className={"mr-2"}/>)
            }
        }
    }
    getDropDownMenu(){

    }

    renderContentOrLoader() {
        const {loading} = this.props;
        if (loading)
            return (
                <CardBody>
                    <div className="justify-content-center">
                        <BarLoader/>
                    </div>
                </CardBody>
            );
        return (
            <CardBody>
                <div className="table-responsive">
                    <table className="table card-table table-vcenter text-nowrap">
                        {this.renderTableHeader()}
                        {this.renderTableBody()}
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
            </CardBody>
        )
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Card>
                            <CardHeader>
                                <CardTitle title={"Posts"}/>
                                <CardOptions>
                                    <StaticLink icon={"plus"} uri={"/blog/posts/write"} title={"Write Posts"} type={"primary"}/>
                                </CardOptions>
                            </CardHeader>
                            {this.renderContentOrLoader()}
                        </Card>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts,
        loading: state.posts.loading
    }
};
export default connect(
    mapStateToProps,
)(PostsList)