import React, { Component } from 'react';
import Card from "../../../shared/card/Card";
import CardHeader from "../../../shared/card/CardHeader";
import CardTitle from "../../../shared/card/CardTitle";
import CardBody from "../../../shared/card/CardBody";


export default class GeneralSettings extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios.get('/api/setting/general').then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <Card>
                        <CardHeader>
                            <CardTitle title={"General"} />
                        </CardHeader>
                        <CardBody>
                            <div className="row">
                                <div className="col-4">
                                    <div className="form-group">
                                        <div className="form-label">Caching</div>
                                        <div className="custom-switches-stacked">
                                            <label className="custom-switch">
                                                <input type="checkbox" name="cache_settings"
                                                    className="custom-switch-input" />
                                                <span className="custom-switch-indicator"></span>
                                                <span className="custom-switch-description">Cache settings</span>
                                            </label>
                                            <label className="custom-switch">
                                                <input type="checkbox" name="cache_blog_posts"
                                                    className="custom-switch-input" />
                                                <span className="custom-switch-indicator"></span>
                                                <span className="custom-switch-description">Cache blog posts</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label className="form-label">Slug type</label>
                                        <div className="row gutters-sm">
                                            <div className="col">
                                                <select className="form-control custom-select">
                                                    <option value="title">Title</option>
                                                    <option value="random">Random</option>
                                                </select>
                                            </div>
                                            <span className="col-auto align-self-center">
                                                <span className="form-help" data-toggle="popover" data-placement="top"
                                                    data-content="<p>Sets what kind of slug to use for a blog post.<br><strong>Title: </strong>Use parts of the post tile when generating the slug. Will make link invalid if title is changed.<br> <strong>Random: </strong>Use a set of random chars as slug. Is not affected when title is changed.</p>">?</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Slug Size</label>
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <input id="rng" type="range" className="form-control custom-range" step="5" min="0" max="50" />
                                            </div>
                                            <div className="col-auto">
                                                <input id="rngval" type="number" className="form-control w-8" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}