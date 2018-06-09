import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux"
import { setPostTitle, setPostSummary } from '../../actions/newPostActions';
import Card from "../shared/card/Card";
import CardHeader from "../shared/card/CardHeader";
import CardTitle from "../shared/card/CardTitle";
import CardBody from "../shared/card/CardBody";

@connect((store) => {
    return {
        post: store.post,
        saving: store.saving
    };
})
export default class AppLayout extends Component {
    constructor() {
        super();
    }


    componentWillReceiveProps(nextProps) {

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
                                            <label className="form-label">Summary <span
                                                className="form-label-small">56/100</span></label>
                                            <textarea className="form-control" name="summary" rows="6"
                                                placeholder="Content.." onChange={(e) => this.props.dispatch(setPostSummary(e.target.value))}></textarea>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>  
                    <div className="col-sm-12 col-md-3 col-lg-2 order-lg-2 order-lg-0 mb-4">

                    </div>
                </div>
            </div>
        );
    }
}