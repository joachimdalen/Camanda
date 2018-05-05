import React, {Component} from 'react';

export default class Card extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className={"card"}>
                {this.props.children}
            </div>
        );
    }
}