import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
            <div className={`dropdown ${this.props.dropClassName}`}>
                <button className={`btn btn-sm btn-${this.props.type} ${this.props.dropClassName} dropdown-toggle`}
                        data-toggle="dropdown">
                    {this.props.icon !== '' ? (<i className={`fe fe-${this.props.icon} ${this.props.iconClassName} pr-2`}/>) : ''}
                    {this.props.title}
                </button>
                <div className="dropdown-menu">
                    {this.props.children}
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
        if (this.props.type === 'a') {
            return (
                <a className="dropdown-item" href={this.props.uri}>
                    <i className={`fe fe-${this.props.icon} ${this.props.iconClassName} pr-2`}/>
                    {this.props.title}
                </a>
            )
        }
        return (
            <button className="dropdown-item" type="button">
                <i className={`fe fe-${this.props.icon} ${this.props.iconClassName} pr-2`}/>
                {this.props.title}
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
    type: PropTypes.oneOf(['a', 'button'])
};
DropdownItem.defaultProps = {
    icon: '',
    className: '',
    iconClassName: '',
    uri: '#',
    title: '',
    type: 'a'
};
