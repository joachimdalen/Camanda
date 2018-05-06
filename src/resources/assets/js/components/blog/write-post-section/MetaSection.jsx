import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Card from "../../shared/card/Card";
import CardHeader from "../../shared/card/CardHeader";
import CardTitle from "../../shared/card/CardTitle";
import CardBody from "../../shared/card/CardBody";
import {handleChange} from "../../../helpers/helpers";

export default class MetaSection extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            tags: [],
            summary: "",
            content: ""
        };
        this.handleChange = this.handleChange.bind(this);
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
                                <input type="text" className="form-control" id="input-tags" value="aa,bb,cc,dd"/>
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
                    <Card>
                        <CardHeader>
                            <CardTitle title={"Post Content"}/>
                        </CardHeader>
                        <CardBody>
                            <div className="form-group">
                                <textarea name="content" id="content" className="form-control" rows="10" onChange={(e) => this.handleChange(e)}></textarea>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success btn-sm float-right">
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