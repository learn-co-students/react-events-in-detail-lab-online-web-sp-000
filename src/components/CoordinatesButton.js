// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    mouse = (event) => {
        const eventArray = [event.clientX, event.clientY]
        return this.props.onReceiveCoordinates(eventArray);
    }

    render() {
        return <button onClick={this.mouse}></button>
    }
}