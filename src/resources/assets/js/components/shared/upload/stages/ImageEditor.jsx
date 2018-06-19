import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CropperJS from 'react-cropperjs';

export default class ImageEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Settings
            showGuides: true,
            //Info
            options: null,
            ratio: 500 / 300,
            fixedRatio: true,
            enabled: true,

        }
    }

    crop(event) {
        // image in dataUrl
        //  console.log(event);
        this.setState({options: event.detail})
    }

    setEnabledState() {
        if (this.state.enabled) {
            this.setState({enabled: false}, () => {
                this.refs.cropper.disable();
                this.props.imageConfirmed(this.refs.cropper.getCroppedCanvas().toDataURL())
            });
        } else {
            this.setState({enabled: true}, () => {
                this.refs.cropper.enable();
                this.props.imageUnConfirmed();
            });
        }
    }

    setPreset(e) {
        switch (e.target.value) {
            case "preview": {
                this.setState({ratio: 500 / 333, fixedRatio: true});
                break;
            }
            case "header": {
                this.setState({ratio: 1500 / 500, fixedRatio: true});
                break;
            }
            case "free": {
                this.setState({ratio: null, fixedRatio: false});
                break;
            }
        }
    }

    getButton() {
        if (this.state.enabled) {
            return (
                <button className="btn btn-purple btn-sm" onClick={() => this.setEnabledState()}>
                    <i className="fe fe-check"></i>
                    Confirm Selection
                </button>
            );
        } else {
            return (
                <button className="btn btn-danger btn-sm" onClick={() => this.setEnabledState()}>
                    <i className="fe fe-x"></i>
                    Re-edit
                </button>
            );
        }
    }

    render() {
        const {url} = this.props;
        return (
            <div className="image__editor">
                <div className="image__editor__infobar">

                </div>
                <div className="image__editor__cropper">
                    <div className="row">
                        <div className="col-9">
                            <CropperJS ref='cropper' src={url} style={{height: 400, width: '100%'}}
                                       aspectRatio={this.state.ratio} guides={true} crop={this.crop.bind(this)} cropBoxResizable={this.state.fixedRatio}/>
                        </div>
                        <div className="col-3">
                            <div className="form-group">
                                <label className="form-label">Preset formats</label>
                                <select className="form-control" onChange={(e) => this.setPreset(e)}>
                                    <option value="preview">Preview Image</option>
                                    <option value="header">Header Image</option>
                                    <option value="free">Free selection</option>
                                </select>
                            </div>
                            <div className="form-group text-center">
                                {this.getButton()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
ImageEditor.propTypes = {
    imageConfirmed: PropTypes.func.isRequired,
    imageUnConfirmed: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
};
ImageEditor.defaultProps = {
    url: ''
};