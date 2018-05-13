import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import WritePost from "../../blog/WritePost";

export default class CardBody extends Component {
    constructor() {
        super();
        this.state = {};

    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
            <div className={`card-body ${this.props.className}`}>
                {this.props.children}
            </div>
        );
    }
}
CardBody.propTypes = {
    className: PropTypes.string
};
CardBody.defaultProps = {
    className: ''
};