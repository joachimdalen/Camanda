import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Link extends Component {
    constructor() {
        super();
        this.state = {};

    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
            <a className={`btn btn-sm btn-${this.props.type} ${this.props.className}`} href={this.props.uri}>
                <i className={`fe fe-${this.props.icon} ${this.props.iconClassName}`}/>
                {this.props.title}
            </a>
        );
    }
}
Link.propTypes = {
    icon: PropTypes.string,
    uri: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    iconClassName: PropTypes.string
};
Link.defaultProps = {
    icon: '',
    uri: '#',
    title: '',
    type: 'primary',
    className: '',
    iconClassName: ''
};