// Code CoordinatesButton Component Here
import React, { Component } from 'react';
//import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class CoordinatesButton extends Component {

    handleClick = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
        <button onClick={this.handleClick}></button>
        )
    }

}