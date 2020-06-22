// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    handleClick = (event) => {
        let x = event.clientX;
        let y = event.clientY;
        this.props.onReceiveCoordinates([x, y])
    }

    render() {
        return (
        <div>
            <button onClick={this.handleClick} >CoordinatesButton</button>
        </div>
        )
    }
}
