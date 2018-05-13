import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class DismissableTag extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps, nextState) {
    }

    componentDidCatch(error, info) {
    }

    render() {
        return (
            <span className="tag">
                {this.props.label}
                <a href="#" className="tag-addon" onClick={this.props.dismiss}>
                    <i className="fe fe-x"></i>
                </a>
            </span>
        );
    }
}
DismissableTag.propTypes = {
    label: PropTypes.string.isRequired,
    dismiss:  PropTypes.func.isRequired,
};
DismissableTag.defaultProps = {
    label: ''
};