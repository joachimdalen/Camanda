import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


export default class TimePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedHour: 1,
            selectedMinute: 0,
            selectedTod: 0, // 0: AM 1: PM
        };
    }

    elementChanged() {
        return null;
    }

    renderHours() {
        let elements = [];
        for (let i = 1; i < 13; i++) {
            elements.push(
                <li id={i} key={i} onClick={() => this.setState({selectedHour: i})}
                    className={this.state.selectedHour === i ? 'selected' : ''}>
                    {i}
                </li>
            )
        }
        return (
            <ul className="hours">
                <li className="picker-header">Hrs</li>
                {elements}
            </ul>
        )

    }

    renderMinutes() {
        let elements = [];
        for (let i = 0; i < 60; i += 5) {
            elements.push(
                <li id={i} key={i} onClick={() => this.setState({selectedMinute: i})}
                    className={this.state.selectedMinute === i ? 'selected' : ''}>
                    {i}
                </li>
            )
        }
        return (
            <ul className="minutes">
                <li className="picker-header">Min</li>
                {elements}
            </ul>
        )
    }

    renderTimeOfDay() {
        let elements = [];
        for (let i = 0; i < 60; i += 5) {
            elements.push(
                <li id={i} key={i}>
                    {i}
                </li>
            )
        }
        return (
            <ul className="time-of-day">
                <li className="picker-header">Tod</li>
                <li onClick={() => this.setState({selectedTod: 0})}
                    className={this.state.selectedTod === 0 ? 'selected' : ''}>AM
                </li>
                <li onClick={() => this.setState({selectedTod: 1})}
                    className={this.state.selectedTod === 1 ? 'selected' : ''}>PM
                </li>
            </ul>
        )
    }

    render() {
        return (
            <div className="timepicker">
                {this.renderHours()}
                {this.renderMinutes()}
                {this.renderTimeOfDay()}
            </div>
        );
    }
}
TimePicker.propTypes = {};
TimePicker.defaultProps = {};
