import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Alert extends Component {
    constructor() {
        super();
        this.state = {};

    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}
Alert.propTypes = {
    name: PropTypes.string
};
Alert.defaultProps = {
    name: 'Stranger'
};
if (document.getElementById('Alert')) {
    ReactDOM.render(<Alert/>, document.getElementById('Alert'));
}