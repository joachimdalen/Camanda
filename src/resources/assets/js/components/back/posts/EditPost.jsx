import React, {Component} from 'react';
import CardBody from "../../shared/card/CardBody";
import Card from "../../shared/card/Card";
import Editor from "../../shared/editor/Editor";
import CardHeader from "../../shared/card/CardHeader";
import CardTitle from "../../shared/card/CardTitle";
import CardOptions from "../../shared/card/CardOptions";
import PostStatus from "../../posts/PostStatus";
import TagInput from "../../shared/tags/TagInput";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import TimePicker from 'react-bootstrap-time-picker';

export default class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    render() {
        const {id} = this.props.match.params;
        return (
            <div className="container">
                <Card>
                    <CardHeader>
                        <CardTitle title={id}/>
                        <CardOptions>
                            <PostStatus status={`published`}/>
                        </CardOptions>
                    </CardHeader>
                    <CardBody>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="content-tab" data-toggle="tab" href="#content" role="tab" aria-controls="content" aria-selected="true">
                                    <i className="fe fe-edit mr-1"></i> Content
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="meta-tab" data-toggle="tab" href="#meta" role="tab" aria-controls="meta" aria-selected="false">
                                    <i className="fe fe-x mr-1"></i> Meta
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="scheduling-tab" data-toggle="tab" href="#scheduling" role="tab" aria-controls="scheduling" aria-selected="false">
                                    <i className="fe fe-clock mr-1"></i> Scheduling
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="content" role="tabpanel" aria-labelledby="content-tab">
                                <Editor onChange={(e) => console.log(e)}
                                        text={''}/>
                            </div>
                            <div className="tab-pane fade" id="meta" role="tabpanel" aria-labelledby="meta-tab">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label className="form-label">Title</label>
                                            <input name="title" type="text" className="form-control" value={''}
                                                   placeholder="Title.." onChange={(e) => console.log(e)}/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label className="form-label">Tags</label>
                                            <TagInput tags={[]} onDismissed={(tag) => console.log(tag)}
                                                      onAdded={(tag) => console.log(tag)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-12">
                                        <label className="form-label">Summary <span
                                            className="form-label-small">56/100</span></label>
                                        <textarea className="form-control" name="summary" rows="6"
                                                  placeholder="Content.."
                                                  onChange={(e) => console.log(e.target.value)} defaultValue={''}></textarea>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-6">
                                        <label className="form-label">Post Header Image</label>
                                        <img className={"img-fluid m-2 d-block mx-auto mh-200"} src={''}/>
                                        <input name="title" type="text" className="form-control"
                                               placeholder="Image Url" value={''}
                                               onChange={(e) => console.log(e.target.value)}/>
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Post Preview Image (500x333)</label>
                                        <img className={"img-fluid m-2 d-block mx-auto mh-200"} src={''}/>
                                        <input name="title" type="text" className="form-control"
                                               placeholder="Image Url" value={''}
                                               onChange={(e) => console.log(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="scheduling" role="tabpanel" aria-labelledby="scheduling-tab">
                                <div className="form-group ml-5">
                                    <label className="custom-switch">
                                        <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"/>
                                            <span className="custom-switch-indicator"></span>
                                            <span className="custom-switch-description">Enable Schedule</span>
                                    </label>
                                </div>
                                <div className="row">
                                    <div className="col-3 ">
                                        <DayPicker onDayClick={(day) => console.log(day)}/>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label htmlFor="" className="form-label">Time</label>
                                            <TimePicker step={1} format={12}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="" className="form-label">Timezone</label>
                                            <select name="timezone" id="timezone" className="form-control">
                                                <option value="1">1</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
EditPost.propTypes = {};
EditPost.defaultProps = {};
