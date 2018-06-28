import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class CardOptions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`card-options ${this.props.className}`}>
                {this.props.children}
            </div>
        );
    }
}
CardOptions.propTypes = {
    className: PropTypes.string,
};
CardOptions.defaultProps = {
    className: ''
};