import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class CardBody extends Component {
    constructor() {
        super();
        this.state = {};

    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
            <div className={"card-body"}>
                {this.props.children}
            </div>
        );
    }
}