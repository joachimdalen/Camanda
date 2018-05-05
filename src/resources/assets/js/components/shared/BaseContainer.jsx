import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class BaseContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}