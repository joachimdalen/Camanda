import React, {Component} from 'react';
import Card from "../../shared/card/Card";
import CardHeader from "../../shared/card/CardHeader";
import CardTitle from "../../shared/card/CardTitle";
import CardBody from "../../shared/card/CardBody";
import {handleChange} from "../../../helpers/helpers";
import Editor from "../../shared/editor/Editor";
import TagInput from "../../shared/tags/TagInput";
import update from 'immutability-helper';
import CardOptions from "../../shared/card/CardOptions";

export default class MetaSection extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            tags: [{label: 'Fist'}, {label: 'Second'}],
            summary: "",
            content: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.tagRemoved = this.tagRemoved.bind(this);
        this.tagAdded = this.tagAdded.bind(this);
    }

    tagRemoved(tag) {
        let index = this.state.tags.indexOf(tag);
        if (index === -1) return;
        this.setState({tags: update(this.state.tags, {$splice: [[index, 1]]})});
    }

    tagAdded(tag) {
        this.setState({tags: update(this.state.tags, {$push: [tag]})});
    }

    handleChange(e) {
        handleChange(e, this);
    }

    componentWillReceiveProps(nextProps) {

    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-3 order-md-1">
                    <Card>
                        <CardHeader>
                            <CardTitle title={"Post Metadata"}/>
                        </CardHeader>
                        <CardBody>
                            <div className="form-group">
                                <label className="form-label">Title</label>
                                <input name="title" type="text" className="form-control" placeholder="Text.."
                                       onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Tags</label>
                                {/*<input type="text" className="form-control" id="input-tags" value="aa,bb,cc,dd"/>*/}
                                <TagInput tags={this.state.tags} onDismissed={(tag) => this.tagRemoved(tag)}
                                          onAdded={(tag) => this.tagAdded(tag)}/>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Summary <span
                                    className="form-label-small">56/100</span></label>
                                <textarea className="form-control" name="summary" rows="6"
                                          placeholder="Content.." onChange={(e) => this.handleChange(e)}></textarea>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-9 order-md-1">
                    <Card className={"zindex-fixed"}>
                        <CardHeader>
                            <CardTitle title={"Post Content"}/>
                            <CardOptions>
                                <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen">
                                    <i className="fe fe-maximize"></i></a>
                            </CardOptions>
                        </CardHeader>
                        <CardBody className={"editor-container"}>
                            <Editor onChange={(e) => this.handleChange(e)} text={""}/>
                            <div className="form-group">
                                <button className="btn btn-success btn-sm float-right mr-2 mt-2">
                                    <i className="fe fe-save"></i>
                                    Save
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}