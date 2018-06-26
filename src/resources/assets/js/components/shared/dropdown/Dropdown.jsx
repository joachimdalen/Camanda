import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export class Dropdown extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {dropClassName, type, icon, iconClassName, title, children} = this.props;
        return (
            <div className={`dropdown ${dropClassName}`}>
                <button className={`btn btn-sm btn-${type} ${dropClassName} dropdown-toggle`}
                        data-toggle="dropdown">
                    {icon !== '' ? (<i className={`fe fe-${icon} ${iconClassName} pr-2`}/>) : ''}
                    {title}
                </button>
                <div className="dropdown-menu">
                    {children}
                </div>
            </div>
        );
    }
}

Dropdown.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string,
    dropClassName: PropTypes.string,
    iconClassName: PropTypes.string,
    type: PropTypes.string
};
Dropdown.defaultProps = {
    title: '',
    className: '',
    dropClassName: '',
    icon: '',
    iconClassName: '',
    type: 'primary',
};

export class DropdownItem extends Component {
    render() {
        const {type, uri, onClick, icon, iconClassName, className, title} = this.props;
        if (type === 'a') {
            return (
                <a className={`dropdown-item ${className}`} href={uri} onClick={onClick}>
                    <i className={`fe fe-${icon} ${iconClassName} pr-2`}/>
                    {title}
                </a>
            )
        }
        return (
            <button className={`dropdown-item ${className}`} type="button" onClick={onClick}>
                <i className={`fe fe-${icon} ${iconClassName} pr-2`}/>
                {title}
            </button>
        )
    }
}

DropdownItem.propTypes = {
    icon: PropTypes.string,
    className: PropTypes.string,
    iconClassName: PropTypes.string,
    uri: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.oneOf(['a', 'button']),
    onClick: PropTypes.func.isRequired
};
DropdownItem.defaultProps = {
    icon: '',
    className: '',
    iconClassName: '',
    uri: '#',
    title: '',
    type: 'a',
    onClick: () => console.log('')
};
