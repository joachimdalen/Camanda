import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from "react-bootstrap4-modal";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {toastr} from "react-redux-toastr";
import Moment from 'react-moment';
import {Dropdown, DropdownItem} from "../dropdown/Dropdown";

export default class ImageGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
        }
    }

    close() {
        const {onClose} = this.props;
        onClose();
    }

    componentDidMount() {
        axios.get('/api/upload/mine').then((response) => {
            this.setState({
                images: response.data.data
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    renderImages() {
        const {images} = this.state;
        if (!images.length) return;
        return images.map(image => {
            return (
                <div className="col-4" key={image.id}>
                    <div className="card">
                        <img className="card-img-top img-thumbnail my-auto" src={image.url || ''} alt="And this isn't my nose. This is a false one."/>
                        <div className="card-body d-flex flex-column p-1 flex-0">
                            <div className="d-flex align-items-center mt-auto">
                                <div className="w-100">
                                    <p className="text-default mb-0">{`(${image.width}x${image.height}) - ${image.mime}`}</p>
                                    <small className="d-block text-muted">
                                        <Moment fromNow unix>
                                            {image.created_at_unix}
                                        </Moment>
                                    </small>
                                </div>
                                <Dropdown title={""} type={"azure"} icon={"settings"}>
                                    <CopyToClipboard text={image.url} onCopy={() => toastr.info('Copied!', 'The image link was copied to your clipboard')}>
                                        <button className="dropdown-item" type="button">
                                            <i className={`fe fe-copy pr-2`}/>
                                            Copy Link
                                        </button>
                                    </CopyToClipboard>
                                    <DropdownItem icon={"trash"} title={"Delete"}/>
                                </Dropdown>

                            </div>
                        </div>
                    </div>
                </div>
            )
        });
    }

    render() {
        const {open} = this.props;
        return (
            <Modal visible={open} dialogClassName={"modal-lg modal-dialog-centered"}>
                <div className="modal-header">
                    <h5 className="modal-title">Image Gallery</h5>
                </div>
                <div className="modal-body image-gallery-modal">
                    <div className="row row-cards row-deck">
                        {this.renderImages()}
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger btn-sm " onClick={() => this.close()}>
                        <i className="fe fe-x mr-1"></i>
                        Close
                    </button>
                </div>
            </Modal>
        );
    }
}
ImageGallery.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};
ImageGallery.defaultProps = {
    open: false,
    onClose: () => console.warn('[ImageGallery]: Method onClose unset')
};