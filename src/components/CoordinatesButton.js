// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {


    render() {
        return (
            <button onClick={({clientX, clientY}) => this.props.onReceiveCoordinates([clientX, clientY])}>Coordinates Button</button>
        )
    }
}

export default CoordinatesButton
