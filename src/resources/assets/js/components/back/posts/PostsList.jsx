import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from "react-redux"
import Card from "../../shared/card/Card";
import CardHeader from "../../shared/card/CardHeader";
import CardTitle from "../../shared/card/CardTitle";
import CardOptions from "../../shared/card/CardOptions";
import CardBody from "../../shared/card/CardBody";
import Link from "../../shared/links/Link";
import {Dropdown, DropdownItem} from "../../shared/dropdown/Dropdown";
import TooltipIconLink from "../../shared/links/TooltipIconLink";
import {fetchPosts} from '../../../actions/postsListActions'
import {BarLoader} from 'react-css-loaders';
import PostStatus from "../../shared/PostStatus";

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
            <th>Views</th>
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
                <td><span className="text-muted">001401</span></td>
                <td><a href="invoice.html" className="text-inherit">{post.title}</a></td>
                <td>{post.created_at_unix}</td>
                <td>87956621</td>
                <td></td>
                <td><PostStatus status={post.status_text}/></td>
                <td className="text-right">
                    <Link type={"secondary"} title={"Unpublish"} uri={"#"} icon={"x"}
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
        );
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
                                    <Link icon={"plus"} uri={"/blog/posts/write"} title={"Write Posts"} type={"primary"}/>
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