import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CardOptions from "./CardOptions";

export default class CardTitle extends Component {
    constructor() {
        super();
        this.state = {};

    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
            <div className={"card-title"}>{this.props.title}</div>
        );
    }
}
CardTitle.propTypes = {
    title: PropTypes.string
};
CardTitle.defaultProps = {
    title: ''
};