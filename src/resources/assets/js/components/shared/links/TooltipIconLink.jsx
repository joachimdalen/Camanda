import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class TooltipIconLink extends Component {
    constructor() {
        super();
        this.state = {};

    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
            <a className={`icon ${this.props.className}`} href={this.props.uri} data-toggle="tooltip"
               data-placement={this.props.placement}
               title={this.props.title}>
                <i className={`fe fe-${this.props.icon}`} />
            </a>
        );
    }
}
TooltipIconLink.propTypes = {
    placement: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    uri: PropTypes.string,
    className: PropTypes.string,
};
TooltipIconLink.defaultProps = {
    placement: 'top',
    title: '',
    icon: '',
    uri: '#',
    className: ''
};