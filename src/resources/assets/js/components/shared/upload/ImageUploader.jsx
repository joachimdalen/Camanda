import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from "react-bootstrap4-modal";
import Dropzone from "react-dropzone";
import SelectFile from "./stages/SelectFile";
import ImageEditor from "./stages/ImageEditor";

export default class ImageUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            accepted: null,
            rejected: null,
            stage: 0,
        };

    }

    getStage() {
        const {stage, accepted, rejected} = this.state;
        switch (stage) {
            case 0: {
                return (<SelectFile fileSelected={(accepted, rejected) => this.setFiles(accepted, rejected)} accepted={accepted} rejected={rejected}/>)
            }
            case 1: {
                return (<ImageEditor fileSave={(file) => this.setSaveFile(file)} url={accepted.preview || ""}/>)
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

    setFiles(accepted, rejected) {
        this.setState({accepted: accepted, rejected: rejected}, () => {
            if (accepted !== null) {
                this.setState({stage: 1});
            }
        });
    }

    setSaveFile(file) {
        console.log(file);
    }

    render() {
        const {open, onClose} = this.props;
        const {ready, rejected} = this.state;
        return (
            <Modal visible={true} onClickBackdrop={() => console.log('backdrop')} dialogClassName={"modal-lg modal-dialog-centered"}>
                <div className="modal-header">
                    <h5 className="modal-title">Upload Image</h5>
                </div>
                <div className="modal-body">
                    {this.getStage()}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger btn-sm " onClick={() => console.log('panic')}>
                        <i className="fe fe-x mr-1"></i>
                        Cancel
                    </button>
                    <button type="button" className={`btn btn-success btn-sm ${ready ? '' : 'disabled'}`} onClick={() => console.log('phasers')}>
                        <i className="fe fe-upload mr-1"></i>
                        Upload
                    </button>
                </div>
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