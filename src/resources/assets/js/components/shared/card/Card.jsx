import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`card ${this.props.className}`}>
                {this.props.children}
            </div>
        );
    }
}
Card.propTypes = {
    className: PropTypes.string
};
Card.defaultProps = {
    className: ''
};