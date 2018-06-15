import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux"
import { setPostTitle, setPostSummary, addPostTag, removePostTag, setPostContent, savePost } from '../../../actions/newPostActions';
import Card from "../../shared/card/Card";
import CardHeader from "../../shared/card/CardHeader";
import CardTitle from "../../shared/card/CardTitle";
import CardOptions from "../../shared/card/CardOptions";
import CardBody from "../../shared/card/CardBody";
import TagInput from '../../shared/tags/TagInput';
import Editor from "../../shared/editor/Editor";

class NewPost extends Component {
    constructor(props) {
        super(props);
    }

    getSaveStatus() {
        if (this.props.saving) {
            return (
                <button className="btn btn-success btn-block disabled">
                    <i className="fe fe-save"></i>
                    Saving...
            </button>
            );
        }
        return (
            <button className="btn btn-success btn-block" onClick={() => this.props.dispatch(savePost(this.props.post.title, this.props.post.summary, this.props.tags, this.props.post.content, 1))}>
                <i className="fe fe-save"></i>
                Save
             </button>
        );
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-9 col-lg-10 mb-4">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-3 order-md-1">
                                <Card>
                                    <CardHeader>
                                        <CardTitle title={"Post Metadata"} />
                                    </CardHeader>
                                    <CardBody>
                                        <div className="form-group">
                                            <label className="form-label">Title</label>
                                            <input name="title" type="text" className="form-control" placeholder="Text.."
                                                onChange={(e) => this.props.dispatch(setPostTitle(e.target.value))} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Tags</label>
                                            <TagInput tags={this.props.tags} onDismissed={(tag) => this.props.dispatch(removePostTag(tag))}
                                                onAdded={(tag) => this.props.dispatch(addPostTag(tag))} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Summary <span
                                                className="form-label-small">56/100</span></label>
                                            <textarea className="form-control" name="summary" rows="6"
                                                placeholder="Content.." onChange={(e) => this.props.dispatch(setPostSummary(e.target.value))}></textarea>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-9 order-md-1">
                                <Card className={"zindex-fixed"}>
                                    <CardHeader>
                                        <CardTitle title={"Post Content"} />
                                        <CardOptions>
                                            <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen">
                                                <i className="fe fe-maximize"></i></a>
                                        </CardOptions>
                                    </CardHeader>
                                    <CardBody className={"editor-container pb-0"}>
                                        <Editor onChange={(e) => this.props.dispatch(setPostContent(e))} text={this.props.post.content} />
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-2 order-lg-2 order-lg-0 mb-4">
                        <Card>
                            <CardHeader>
                                <CardTitle title={"Options"} />
                            </CardHeader>
                            <CardBody>
                                <div className="form-group">
                                    <label className="form-label">Status</label>
                                    <select name="status" id="status" className="form-control">
                                        <option value="3">Draft</option>
                                        <option value="0">Publised</option>
                                    </select>
                                </div>
                                <div className="form-group text-center">
                                    <small>Post scheduling and preview will be enabled after the post is saved</small>
                                </div>
                                <div className="form-group">
                                    {this.getSaveStatus()}
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        post: state.newPost.post,
        tags: state.newPost.tags,
        saving: state.newPost.saving,
    }
}
export default connect(
    mapStateToProps,
)(NewPost)