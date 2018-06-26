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
        const {type, uri, onClick, icon, iconClassName, placement, className, title} = this.props;
        if (type === 'a') {
            return (
                <a className={`icon ${className}`} href={uri} data-toggle="tooltip"
                   data-placement={placement} title={title}>
                    <i className={`fe fe-${icon} ${iconClassName}`}/>
                </a>
            );
        }
        return (
            <button className={`icon ${className}`} data-toggle="tooltip"
                    data-placement={placement} title={title} onClick={onClick}>
                <i className={`fe fe-${icon} ${iconClassName}`}/>
            </button>
        );
    }
}
TooltipIconLink.propTypes = {
    placement: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    uri: PropTypes.string,
    className: PropTypes.string,
    iconClassName: PropTypes.string,
    type: PropTypes.oneOf(['a', 'button'])
};
TooltipIconLink.defaultProps = {
    placement: 'top',
    title: '',
    icon: '',
    uri: '#',
    className: '',
    iconClassName: '',
    type: 'a'
};