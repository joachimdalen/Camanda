import React, {Component} from 'react';
import Modal from "react-bootstrap4-modal";
import PropTypes from 'prop-types';

export default class ImageBlotUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: null,
            placement: null,
            width: null,
            height: null
        };
    }

    render() {
        const {open} = this.props;
        return (
            <Modal visible={open} dialogClassName={"modal-lg modal-dialog-centered"}>
                <div className="modal-header">
                    <h5 className="modal-title">Select Image</h5>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="imageUrl" className="form-label">Image Url</label>
                                <input type="text" id="imageUrl" className="form-control" placeholder="http://example.com/images/myimage.png" onChange={(e) => this.setState({url: e.target.value})} value={this.state.url || ''}/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="" className="form-label">Placement</label>
                                <div className="selectgroup w-100">
                                    <label className="selectgroup-item">
                                        <input type="radio" name="placement" value="0" className="selectgroup-input" onChange={() => this.setState({placement: 0})} checked={this.state.placement !== null && this.state.placement === 0}/>
                                        <span className="selectgroup-button">
                                            <i className="fe fe-align-left"></i>
                                        </span>
                                    </label>
                                    <label className="selectgroup-item">
                                        <input type="radio" name="placement" value="1" className="selectgroup-input" onChange={() => this.setState({placement: 1})} checked={this.state.placement !== null && this.state.placement === 1}/>
                                        <span className="selectgroup-button">
                                            <i className="fe fe-align-center"></i>
                                        </span>
                                    </label>
                                    <label className="selectgroup-item">
                                        <input type="radio" name="placement" value="2" className="selectgroup-input" onChange={() => this.setState({placement: 2})} checked={this.state.placement !== null && this.state.placement === 2}/>
                                        <span className="selectgroup-button">
                                            <i className="fe fe-align-right"></i>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="" className="form-label">Size (Width x Height)</label>
                                <div className="row">
                                    <div className="col-6">
                                        <input type="number" className="form-control" value={this.state.width || ''} onChange={(e) => this.setState({width: e.target.value})}/>
                                    </div>
                                    <div className="col-6">
                                        <input type="number" className="form-control" value={this.state.height || ''} onChange={(e) => this.setState({height: e.target.value})}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <div className="btn-list">
                        <button type="button" className="btn btn-danger btn-sm " onClick={() => this.props.onClose()}>
                            <i className="fe fe-x mr-1"></i>
                            Close
                        </button>
                        <button type="button" className="btn btn-success btn-sm " onClick={() => this.props.addImage({
                            url: this.state.url,
                            placement: this.state.placement,
                            width: this.state.width,
                            height: this.state.height
                        })} disabled={this.state.url === null}>
                            <i className="fe fe-plus mr-1"></i>
                            Add
                        </button>
                    </div>
                </div>
            </Modal>
        );
    }
}
ImageBlotUI.propTypes = {};
ImageBlotUI.defaultProps = {};
