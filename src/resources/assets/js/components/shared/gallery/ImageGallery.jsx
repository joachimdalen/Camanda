import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from "react-bootstrap4-modal";

export default class ImageGallery extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {open} = this.props;
        return (
            <Modal visible={open} dialogClassName={"modal-lg modal-dialog-centered"}>
                <div className="modal-header">
                    <h5 className="modal-title">Image Gallery</h5>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-3">
                            <div className="list-group list-group-transparent mb-0">
                                <div className={`list-group-item list-group-item-action active`}>
                                    <span className="icon mr-3"><i className="fe fe-layers"></i></span>General
                                </div>
                            </div>
                        </div>
                        <div className="col-9"></div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger btn-sm " onClick={() => this.close()}>
                        <i className="fe fe-x mr-1"></i>
                        Cancel
                    </button>
                    <button type="button" className={`btn btn-success btn-sm`} onClick={() => console.log('phasers')}>
                        <i className="fe fe-upload mr-1"></i>
                        Upload
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