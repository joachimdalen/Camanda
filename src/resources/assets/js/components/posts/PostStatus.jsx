import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class PostStatus extends Component {
    constructor(props) {
        super(props);
    }

    getColor() {
        const {status} = this.props;
        switch (status) {
            case 'draft': {
                return 'bg-secondary'
            }
            case 'published': {
                return 'bg-success'
            }
            case 'private': {
                return 'bg-danger'
            }
            case 'scheduled': {
                return 'bg-warning'
            }
            default: {
                return 'bg-purple'
            }
        }
    }

    getText() {
        const {status} = this.props;
        switch (status) {
            case 'draft': {
                return 'Draft'
            }
            case 'published': {
                return 'Published'
            }
            case 'private': {
                return 'Private'
            }
            case 'scheduled': {
                return 'Scheduled'
            }
            default: {
                return 'Unknown'
            }
        }
    }

    render() {
        return (<span><span className={`status-icon ${this.getColor()}`}></span> {this.getText()}</span>)
    }
}
PostStatus.propTypes = {
    status: PropTypes.string,
};
PostStatus.defaultProps = {
    status: 'unknown',
};
