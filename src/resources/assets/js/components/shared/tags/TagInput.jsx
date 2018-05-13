import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DismissableTag from "./DismissableTag";
import {handleChange, hasError, getError} from "../../../helpers/helpers";
import update from 'immutability-helper';

export default class TagInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            label: ""
        };
        this.newTag = this.newTag.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        handleChange(e, this);
    }

    newTag() {
        if (this.state.label === "") {
            return;
        }
        let tag = {
            label: this.state.label
        };
        console.log(tag);
        this.setState({label: ""});
        this.props.onAdded(tag);

    }

    render() {
        return (
            <div>
                <div className="input-group">
                    <input type="text" name="label" className="form-control" placeholder="Label.."
                           onChange={(e) => this.handleChange(e)} value={this.state.label}/>
                    <span className="input-group-append">
                        <button className="btn btn-success" type="button" onClick={() => this.newTag()}>
                            <i className="fe fe-plus"></i>
                        </button>
                    </span>
                </div>
                <div className="tags mt-2">
                    {this.props.tags.map(tag => {
                        return (<DismissableTag key={tag.label} label={tag.label}
                                                dismiss={() => this.props.onDismissed(tag)}/>)
                    })}

                </div>
            </div>
        );
    }
}
TagInput.propTypes = {
    tags: PropTypes.array.isRequired,
    onDismissed: PropTypes.func.isRequired,
    onAdded: PropTypes.func.isRequired
};
TagInput.defaultProps = {
    tags: [],
};