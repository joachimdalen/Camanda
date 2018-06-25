import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {CopyToClipboard} from "react-copy-to-clipboard";
import {toastr} from 'react-redux-toastr';

export default class ImageUploadComplete extends Component {
    constructor(props) {
        super(props);
    }

    copyLink() {
        const {image} = this.props;
        console.log(image.url);
    }

    render() {
        const {image} = this.props;
        return (
            <div>
                <img src={image.url || ''} alt="Unable to load image" className="mx-auto d-block image-uploaded-preview"/>
                <div className="input-group mt-2">
                    <input type="text" name="label" className="form-control" placeholder="Url" value={image.url || ''} readOnly={true}/>
                    <span className="input-group-append">
                        <CopyToClipboard text={image.url || ''} onCopy={() => toastr.info('Copied!', 'The image link was copied to your clipboard')}>
                             <button className="btn btn-success" type="button">
                                 <i className="fe fe-copy"></i>
                             </button>
                          </CopyToClipboard>
                    </span>
                </div>
            </div>
        );
    }
}
ImageUploadComplete.propTypes = {
    image: PropTypes.object.isRequired,
};
ImageUploadComplete.defaultProps = {};