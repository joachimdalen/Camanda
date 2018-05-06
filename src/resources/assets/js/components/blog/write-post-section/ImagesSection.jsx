import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CardHeader from "../../shared/card/CardHeader";
import Card from "../../shared/card/Card";
import CardTitle from "../../shared/card/CardTitle";
import CardOptions from "../../shared/card/CardOptions";
import Link from "../../shared/links/Link";
import CardBody from "../../shared/card/CardBody";
import TooltipIconLink from "../../shared/links/TooltipIconLink";
import Button from "../../shared/Button";

export default class ImagesSection extends Component {
    constructor() {
        super();
        this.state = {
            images: [],
            selectedImageIndex: 0,
            isSelected: false
        };
        this.selectImage = this.selectImage.bind(this);
    }

    componentWillReceiveProps(nextProps) {

    }

    selectImage(index) {
        if (this.state.selectedImageIndex === index || !this.state.isSelected) {
            this.setState({isSelected: !this.state.isSelected, selectedImageIndex: index});
            return;
        }
        this.setState({selectedImageIndex: index});

    }

    getImageContainer(index) {
        return (
            <div
                className={`col-sm-4 col-md-3 mt-1 p-1 image-selectable col-lg-2 ${ this.state.isSelected && this.state.selectedImageIndex === index ? 'selected' : ''}`}>
                <img src="https://picsum.photos/350/150/?random" alt="}" onClick={() => this.selectImage(index)}/>
                <div className={"image-toolbar"}>
                    <i className="fe fe-type" data-toggle="tooltip" data-placement="top"
                       title="Title is set on this image"></i>
                    <i className="fe fe-camera" data-toggle="tooltip" data-placement="top"
                       title="Credits is set on this image"></i>
                    <i className="fe fe-info" data-toggle="tooltip" data-placement="top"
                       title="Description is set on this image"></i>
                </div>
                <div
                    className={`card-body flex-column ${ this.state.isSelected && this.state.selectedImageIndex === index ? 'd-flex' : 'd-none'}`}>
                    <div className="form-group input-group-sm">
                        <input type="text" name="credit" className="form-control" placeholder={"Credit"}/>
                    </div>
                    <div className="form-group input-group-sm">
                        <input type="text" name="title" className="form-control" placeholder={"Title"}/>
                    </div>
                    <div className="form-group input-group-sm">
                        <textarea name="description" id="description" rows="3"
                                  className="form-control" placeholder={"Description"}></textarea>
                    </div>
                    <div className="form-group input-group-sm mb-0 d-inline-flex align-items-center">
                        <Button title={"Remove"} icon={"x"} type={"orange"}/>
                        <Button title={"Save"} icon={"save"} type={"success"} className={"ml-2"}/>
                        <TooltipIconLink icon={"trash-2"} title={"Delete from platform"} placement={"top"}
                                         className={"text-danger ml-2"}/>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Card>
                <CardHeader>
                    <CardTitle title={"Images"}/>
                    <CardOptions>
                        <Link type={"info"} icon={"plus"} title={"Select from Gallery"} className={"mr-2"}/>
                        <Link type={"indigo"} icon={"upload"} title={"Upload"} className={"mr-2"}/>
                    </CardOptions>
                </CardHeader>
                <CardBody>
                    <div className="row">
                        <div className={"col-12"}>
                            <div className="form-group">
                                <label className="form-label">Images in carousel</label>
                                <div className="row gutters-sm">
                                    {this.getImageContainer(0)}
                                    {this.getImageContainer(1)}
                                    {this.getImageContainer(2)}
                                    {this.getImageContainer(3)}
                                    {this.getImageContainer(4)}
                                    {this.getImageContainer(5)}
                                    {this.getImageContainer(6)}
                                    {this.getImageContainer(7)}
                                    {this.getImageContainer(8)}
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        );
    }
}