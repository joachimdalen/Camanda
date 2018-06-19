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
            x: null,
            y: null,
            width: null,
            height: null,
            rotate: null,
            scaleX: null,
            scaleY: null
        }
    }

    crop(event) {
        // image in dataUrl
        console.log(event);
        this.setState({
            x: event.detail.x,
            y: event.detail.y,
            width: event.detail.width,
            height: event.detail.height,
            rotate: event.detail.rotate,
            scaleX: event.detail.scaleX,
            scaleY: event.detail.scaleY
        })
    }

    getValue(val) {
        if (val == null) return '';
        return val;
    }

    render() {
        const {url} = this.props;
        let {x, y, width, height, rotate, scaleX, scaleY} = this.state;
        console.log(rotate);
        return (
            <div className="image__editor">
                <div className="image__editor__toolbar">
                    <div className="dropdown dropup docs-options">
                        <button type="button" className="btn btn-primary btn-block dropdown-toggle" id="toggleOptions" data-toggle="dropdown" aria-expanded="false">
                            Toggle Options
                            <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu" role="menu" aria-labelledby="toggleOptions" x-placement="bottom-start">
                            <li className="dropdown-item">
                                <div className="form-check">
                                    <input className="form-check-input" id="responsive" type="checkbox" name="responsive" checked=""/>
                                    <label className="form-check-label" htmlFor="responsive">responsive</label>
                                </div>
                            </li>
                            <li className="dropdown-item">
                                <div className="form-check">
                                    <input className="form-check-input" id="restore" type="checkbox" name="restore" checked=""/>
                                    <label className="form-check-label" htmlFor="restore">restore</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="image__editor__cropper">
                    <div className="row">
                        <div className="col-9">
                            <CropperJS ref='cropper' src={url} style={{height: 400, width: '100%'}}
                                       aspectRatio={16 / 9} guides={true} crop={this.crop.bind(this)}/>
                        </div>
                        <div className="col-3">
                            <div className="image__editor__cropper__info">
                                <div className="input-group input-group-sm">
                            <span className="input-group-prepend">
                                <label className="input-group-text" htmlFor="dataX">X</label>
                            </span>
                                    <input type="text" className="form-control" id="dataX" placeholder="x" value={this.state.x !== null ? this.state.x : ''} onChange={(e) => this.setState({x: e.target.value}, () => {
                                        console.log('setting data ', this.state.x);
                                        this.refs.cropper.setData(this.state);
                                    })}/>
                                    <span className="input-group-append">
                                <span className="input-group-text">px</span>
                            </span>
                                </div>
                                <div className="input-group input-group-sm">
                              <span className="input-group-prepend">
                                <label className="input-group-text" htmlFor="dataY">Y</label>
                              </span>
                                    <input type="text" className="form-control" id="dataY" placeholder="y" value={y !== null ? y : ''}/>
                                    <span className="input-group-append">
                                <span className="input-group-text">px</span>
                            </span>
                                </div>
                                <div className="input-group input-group-sm">
                            <span className="input-group-prepend">
                                <label className="input-group-text" htmlFor="dataWidth">Width</label>
                            </span>
                                    <input type="text" className="form-control" id="dataWidth" placeholder="width" value={width !== null ? width : ''}/>
                                    <span className="input-group-append">
                                <span className="input-group-text">px</span>
                            </span>
                                </div>
                                <div className="input-group input-group-sm">
                             <span className="input-group-prepend">
                               <label className="input-group-text" htmlFor="dataHeight">Height</label>
                             </span>
                                    <input type="text" className="form-control" id="dataHeight" placeholder="height" value={height !== null ? height : ''}/>
                                    <span className="input-group-append">
                              <span className="input-group-text">px</span>
                             </span>
                                </div>
                                <div className="input-group input-group-sm">
                                 <span className="input-group-prepend">
                                   <label className="input-group-text" htmlFor="dataRotate">Rotate</label>
                                 </span>
                                    <input type="text" className="form-control" id="dataRotate" placeholder="rotate" value={rotate !== null ? rotate : ''}/>
                                    <span className="input-group-append">
                               <span className="input-group-text">deg</span>
                             </span>
                                </div>
                                <div className="input-group input-group-sm">
                            <span className="input-group-prepend">
                              <label className="input-group-text" htmlFor="dataScaleX">ScaleX</label>
                            </span>
                                    <input type="text" className="form-control" id="dataScaleX" placeholder="scaleX" value={scaleX !== null ? scaleX : ''}/>
                                </div>
                                <div className="input-group input-group-sm">
                              <span className="input-group-prepend">
                                <label className="input-group-text" htmlFor="dataScaleY">ScaleY</label>
                              </span>
                                    <input type="text" className="form-control" id="dataScaleY" placeholder="scaleY" value={scaleY !== null ? scaleY : ''}/>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        );
    }
}
ImageEditor.propTypes = {
    fileSave: PropTypes.func.isRequired,
    //url: PropTypes.string.isRequired,

};
ImageEditor.defaultProps = {
    url: ''
};