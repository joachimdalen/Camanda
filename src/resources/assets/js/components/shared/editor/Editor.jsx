import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onChange = this.onChange.bind(this);
        this.modules = {
            toolbar: [
                [{'header': [1, 2, false]}],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                ['link', 'image'],
                ['clean']
            ],
        };
        this.formats = [
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image'
        ];
    }

    onChange(value) {
        this.props.onChange(value);
    }

    render() {
        return (
            <ReactQuill value={this.props.text} onChange={this.onChange} modules={this.modules}
                        formats={this.formats} className={this.props.className}/>
        );
    }
}
Editor.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired

};
Editor.defaultProps = {
    text: '',
    className: ''
};