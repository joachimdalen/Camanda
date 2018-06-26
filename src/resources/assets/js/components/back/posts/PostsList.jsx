import React, {Component} from 'react';
import {connect} from "react-redux"
import Card from "../../shared/card/Card";
import CardHeader from "../../shared/card/CardHeader";
import CardTitle from "../../shared/card/CardTitle";
import CardOptions from "../../shared/card/CardOptions";
import CardBody from "../../shared/card/CardBody";
import {Dropdown, DropdownItem} from "../../shared/dropdown/Dropdown";
import TooltipIconLink from "../../shared/links/TooltipIconLink";
import {changePostPublishStatus, fetchPosts, UPDATE_POST_STATUS_FULFILLED} from '../../../actions/postsListActions'
import {BarLoader} from 'react-css-loaders';
import PostStatus from "../../posts/PostStatus";
import Moment from 'react-moment';
import {Link} from "react-router-dom";


class PostsList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.load();

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
                <td><a href="invoice.html" className="text-inherit">{post.title.slice(0, 50)}...</a></td>
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
                    {this.getDropDownMenu(post)}
                </td>
                <td>
                    {this.getEditButton(post)}
                </td>
            </tr>
        );
    }

    getEditButton(post) {
        const {id} = post;
        return (<Link to={`/blog/posts/${id}/edit`} className="icon" data-toggle="tooltip" data-placement={"top"}><i className="fe fe-edit"></i></Link>)
    }

    getPublishActionButton(post) {
        const {status} = post;
        const {changeStatus} = this.props;
        switch (status) {
            case 3: {
                return (
                    <button className={`btn btn-sm btn-secondary mr-2`} onClick={() => changeStatus(post.id, 0)}>
                        <i className={`fe fe-check-circle text-success mr-1`}/>
                        Publish
                    </button>
                );

            }
            case 0: {
                return (
                    <button className={`btn btn-sm btn-secondary mr-2`} onClick={() => changeStatus(post.id, 2)}>
                        <i className={`fe fe-x text-danger mr-1`}/>
                        Unpublish
                    </button>
                )
            }
            case 2: {
                return (
                    <button className={`btn btn-sm btn-secondary mr-2`} onClick={() => changeStatus(post.id, 3)}>
                        <i className={`fe fe-file-text mr-1`}/>
                        Draft
                    </button>
                )
            }
            case 1: {
                return (
                    <button className={`btn btn-sm btn-secondary mr-2`} onClick={() => changeStatus(post.id, 1)}>
                        <i className={`fe fe-clock text-success mr-1`}/>
                        Publish Now
                    </button>
                );
            }
        }
    }

    getDropDownMenu(post) {
        const {status} = post;
        if (status === 3) return;
        const View = () => (<DropdownItem icon={"eye"} title={"View"}/>);
        const Stats = () => (<DropdownItem icon={"activity"} title={"View Statistics"}/>);
        const CopyLink = () => (<DropdownItem icon={"copy"} title={"Copy Link"}/>);
        const PreviewLink = () => (<DropdownItem icon={"eye-off"} title={"Copy Preview Link"}/>);
        return (
            <Dropdown title={"Actions"} type={"secondary"}>
                <View/>
                {status !== 3 || status !== 0 ? (<Stats/>) : ''}
                {status !== 2 ? (<CopyLink/>) : ''}
                {status !== 0 ? (<PreviewLink/>) : ''}
            </Dropdown>
        )
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
                                    <Link to={`/blog/write`} className="btn btn-primary btn-sm"><i className="fe fe-plus"></i> Write</Link>
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
const mapDispatchToProps = dispatch => {
    return {
        load: () => {
            dispatch(fetchPosts())
        },
        changeStatus: (id, status) => {
            dispatch(changePostPublishStatus(id, status))
        }
    }
};
export default connect(
    mapStateToProps, mapDispatchToProps
)(PostsList)