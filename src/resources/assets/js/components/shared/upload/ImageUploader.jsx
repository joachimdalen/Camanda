import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from "react-bootstrap4-modal";
import SelectFile from "./stages/SelectFile";
import ImageEditor from "./stages/ImageEditor";
import ImageUploadComplete from "./stages/ImageUploadComplete";
import {toastr} from 'react-redux-toastr';

export default class ImageUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            accepted: null,
            rejected: null,
            stage: 0,
            image: null,
            details: null,
            savedObject: null
        };

    }

    getStage() {
        const {stage, accepted, rejected, savedObject} = this.state;
        switch (stage) {
            case 0: {
                return (<SelectFile fileSelected={(accepted, rejected) => this.setFiles(accepted, rejected)} accepted={accepted} rejected={rejected}/>)
            }
            case 1: {
                return (<ImageEditor imageConfirmed={(file, details) => this.setSaveFile(file, details)} imageUnConfirmed={() => this.notReady()} url={accepted.preview || ""}/>)
            }
            case  2: {
                return (<ImageUploadComplete image={savedObject}/>)
            }
        }
    }

    getStatus() {
        const {rejected} = this.state;
        if (rejected !== null) {
            return (<p className={"text-danger"}>{rejected.name} is a not valid file</p>);
        }
        return '';
    }

    getFooter() {
        const {ready, savedObject} = this.state;
        if (savedObject !== null) {
            return (
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger btn-sm " onClick={() => this.close()}>
                        <i className="fe fe-x mr-1"></i>
                        Close
                    </button>
                </div>
            )
        }
        return (
            <div className="modal-footer">
                <button type="button" className="btn btn-danger btn-sm " onClick={() => this.close()}>
                    <i className="fe fe-x mr-1"></i>
                    Cancel
                </button>
                <button type="button" className={`btn btn-success btn-sm`} disabled={!ready} onClick={() => this.uploadImage()}>
                    <i className="fe fe-upload mr-1"></i>
                    Upload
                </button>
            </div>
        );
    }

    setFiles(accepted, rejected) {
        this.setState({accepted: accepted, rejected: rejected}, () => {
            if (accepted !== null) {
                this.setState({stage: 1});
            }
        });
    }

    setSaveFile(file, details) {
        this.setState({
            ready: true,
            image: file,
            details: details
        })
    }

    notReady() {
        this.setState({
            ready: false,
            image: null
        })
    }

    close() {
        this.setState({
            ready: false,
            accepted: null,
            rejected: null,
            stage: 0,
            image: null,
            savedObject: null
        }, () => {
            this.props.onClose();
        })

    }

    uploadImage() {
        const {image, details} = this.state;
        axios.post('/api/upload', {
            file: image,
            width: details.width,
            height: details.height,
        }).then((response) => {
            this.setState({savedObject: response.data.data}, () => {
                this.setState({stage: 2});
            })
        }).catch((err) => {
            toastr.error('An error occurred', 'Failed to upload image');
        });
    }

    render() {
        const {open} = this.props;
        return (
            <Modal visible={open} onClickBackdrop={() => console.log('backdrop')} dialogClassName={"modal-lg modal-dialog-centered"}>
                <div className="modal-header">
                    <h5 className="modal-title">Upload Image</h5>
                </div>
                <div className="modal-body">
                    {this.getStage()}
                </div>
                {this.getFooter()}
            </Modal>

        );
    }
}
ImageUploader.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};
ImageUploader.defaultProps = {
    open: false,
    onClose: () => console.warn('[ImageUploader]: Method onClose unset')
};