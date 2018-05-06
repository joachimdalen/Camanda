import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Button extends Component {
    constructor() {
        super();
        this.state = {};

    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
            <button className={`btn btn-sm btn-${this.props.type} ${this.props.className}`}>
                <i className={`fe fe-${this.props.icon} ${this.props.iconClassName}`}/>
                {this.props.title}
            </button>
        );
    }
}
Button.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    iconClassName: PropTypes.string
};
Button.defaultProps = {
    icon: '',
    title: '',
    type: 'primary',
    className: '',
    iconClassName: ''
};
