import React, {Component} from 'react';
import {connect} from "react-redux"
import {
    setPostTitle,
    setPostSummary,
    addPostTag,
    removePostTag,
    setPostContent,
    savePost,
    setPostStatus,
    setPostHeaderImage,
    setPostPreviewImage
} from '../../../actions/newPostActions';
import Card from "../../shared/card/Card";
import CardHeader from "../../shared/card/CardHeader";
import CardTitle from "../../shared/card/CardTitle";
import CardOptions from "../../shared/card/CardOptions";
import CardBody from "../../shared/card/CardBody";
import TagInput from '../../shared/tags/TagInput';
import Editor from "../../shared/editor/Editor";
import ImageUploader from "../../shared/upload/ImageUploader";
import ImageGallery from "../../shared/gallery/ImageGallery";

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUploaderVisible: false,
            imageGalleryVisible: false,
        }
    }

    getSaveStatus() {
        if (this.props.saving) {
            return (
                <button className="btn btn-success btn-block disabled btn-sm">
                    <i className="fe fe-save mr-1"></i>
                    Saving...
                </button>
            );
        }
        const {title, status, summary, content, headerImage, previewImage, tags} = this.props.post;
        return (
            <button className="btn btn-success btn-block btn-sm"
                    onClick={() => this.props.createPost(title, summary, tags, content, status, headerImage, previewImage)}>
                <i className="fe fe-save mr-1"></i>
                Save
            </button>
        );
    }
        //<img className={"img-responsive m-2"} src={post.headerImage || ''}
    render() {
        const {
            post, titleChange, summaryChange, contentChange, headerUrlChange,
            previewUrlChange, statusChange, tagAdd, tagRemove, created
        } = this.props;
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-9 col-lg-10 mb-4">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-3 order-md-1">
                                <Card>
                                    <CardHeader>
                                        <CardTitle title={"Post Metadata"}/>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="form-group">
                                            <label className="form-label">Title</label>
                                            <input name="title" type="text" className="form-control" value={post.title || ''}
                                                   placeholder="Title.."
                                                   onChange={(e) => titleChange(e.target.value)}/>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Tags</label>
                                            <TagInput tags={this.props.tags || []}
                                                      onDismissed={(tag) => tagRemove(tag)}
                                                      onAdded={(tag) => tagAdd(tag)}/>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Summary <span
                                                className="form-label-small">56/100</span></label>
                                            <textarea className="form-control" name="summary" rows="6"
                                                      placeholder="Content.."
                                                      onChange={(e) => summaryChange(e.target.value)} defaultValue={post.summary || ''}></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Post Header Image</label>
                                            <img className={"img-fluid m-2 d-block mx-auto mh-200"} src={post.headerImage || ''}/>
                                            <input name="title" type="text" className="form-control"
                                                   placeholder="Image Url" value={post.headerImage || ''}
                                                   onChange={(e) => headerUrlChange(e.target.value)}/>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Post Preview Image (500x333)</label>
                                               <img className={"img-fluid m-2 d-block mx-auto mh-200"} src={post.previewImage || ''}/>
                                            <input name="title" type="text" className="form-control"
                                                   placeholder="Image Url" value={post.previewImage || ''}
                                                   onChange={(e) => previewUrlChange(e.target.value)}/>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-9 order-md-1">
                                <Card className={""}>
                                    <CardHeader>
                                        <CardTitle title={"Post Content"}/>
                                        <CardOptions>
                                            <a href="#" className="card-options-fullscreen"
                                               data-toggle="card-fullscreen">
                                                <i className="fe fe-maximize"></i></a>
                                        </CardOptions>
                                    </CardHeader>
                                    <CardBody className={"editor-container pb-0"}>
                                        <Editor onChange={(e) => contentChange(e)}
                                                text={post.content}/>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-2 order-lg-2 order-lg-0 mb-4">
                        <Card>
                            <CardHeader>
                                <CardTitle title={"Options"}/>
                            </CardHeader>
                            <CardBody>
                                <div className="form-group">
                                    <label className="form-label">Status</label>
                                    <select name="status" id="status" className="form-control"
                                            onChange={(e) => statusChange(e.target.value)} defaultValue={3}>
                                        <option value="3">Draft</option>
                                        <option value="0">Publised</option>
                                    </select>
                                </div>
                                <div className="form-group text-center">
                                    <small>Post scheduling and preview will be enabled after the post is saved</small>
                                </div>
                                <div className="form-group">
                                    {this.getSaveStatus()}
                                    <button className="btn btn-azure btn-block btn-sm"
                                            onClick={() => this.setState({imageUploaderVisible: true})}>
                                        <i className="fe fe-image mr-1"></i>
                                        Image Uploader
                                    </button>
                                    <button className="btn btn-indigo btn-block btn-sm"
                                            onClick={() => this.setState({imageGalleryVisible: true})}>
                                        <i className="fe fe-book mr-1"></i>
                                        Image Gallery
                                    </button>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <ImageUploader open={this.state.imageUploaderVisible} onClose={() => this.setState({imageUploaderVisible: false})}/>
                <ImageGallery open={this.state.imageGalleryVisible} onClose={() => this.setState({imageGalleryVisible: false})}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        post: state.newPost.post,
        tags: state.newPost.tags,
        saving: state.newPost.saving,
        created: state.newPost.created,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        titleChange: (text) => {
            dispatch(setPostTitle(text))
        },
        summaryChange: (text) => {
            dispatch(setPostSummary(text))
        },
        contentChange: (text) => {
            dispatch(setPostContent(text))
        },
        headerUrlChange: (url) => {
            dispatch(setPostHeaderImage(url))
        },
        previewUrlChange: (url) => {
            dispatch(setPostPreviewImage(url))
        },
        statusChange: (status) => {
            dispatch(setPostStatus(status))
        },
        tagAdd: (tag) => {
            dispatch(addPostTag(tag))
        },
        tagRemove: (tag) => {
            dispatch(removePostTag(tag))
        },
        createPost: (title, summary, tags, content, status, header, preview) => {
            dispatch(savePost(title, summary, tags, content, status, header, preview))
        }
    }
};
export default connect(
    mapStateToProps, mapDispatchToProps
)(NewPost)