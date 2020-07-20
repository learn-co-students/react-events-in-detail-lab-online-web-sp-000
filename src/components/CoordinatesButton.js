import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    handleClick = (event) => {
        let coordinatesValues = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(coordinatesValues)
    }

    render() {
        return (
        <div>
            <button onClick={this.handleClick} >CoordinatesButton</button>
        </div>
        )
    }
}
