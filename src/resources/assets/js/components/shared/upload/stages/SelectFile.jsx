import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dropzone from "react-dropzone";

export default class SelectFile extends Component {
    constructor(props) {
        super(props);
    }

    dropFiles(acceptedFiles, rejectedFiles) {
        const {fileSelected, rejected, accepted} = this.props;
        if (accepted !== null) {
            window.URL.revokeObjectURL(accepted.preview);
        }
        if (rejected !== null) {
            window.URL.revokeObjectURL(rejected.preview);
        }
        fileSelected(acceptedFiles[0] || null, rejectedFiles[0] || null);
    }

    getStatus() {
        const {rejected, accepted} = this.props;
        if (rejected !== null) {
            return (<p className={"text-danger"}>{rejected.name} is a not valid file</p>);
        }
        return '';
    }

    render() {
        const {rejected} = this.props;
        return (
            <Dropzone className={`file-drop ${rejected !== null ? 'file-drop__rejected' : ''}`}
                      accept="image/jpeg, image/png" multiple={false}
                      onDrop={(accepted, rejected) => this.dropFiles(accepted, rejected)}>
                <h1 className={"file-drop__title"}>Drop image here, or click to select.</h1>
                {this.getStatus()}
            </Dropzone>
        );
    }
}
SelectFile.propTypes = {
    fileSelected: PropTypes.func.isRequired,
    rejected: PropTypes.object,
    accepted: PropTypes.object
};
SelectFile.defaultProps = {};