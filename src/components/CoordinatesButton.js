import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    on_click = (event) => {
        let e = event
        let arr= [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(arr)
    }
    render() {
        return (
            <button onClick={this.on_click}>COORDINATES_BUTTON</button>
        )
    }
}
