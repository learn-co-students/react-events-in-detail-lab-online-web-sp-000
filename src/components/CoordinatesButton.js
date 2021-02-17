import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    coordinate = (event) => {
        let array = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(array)
    }

    render() {
        return <button onClick={this.coordinate}>Coordinate</button>
    }
}