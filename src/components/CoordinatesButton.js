// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    constructor() {
        super()
    }
    
    getCoords = (event) => {
        let xCoord = event.clientX;
        let yCoord = event.clientY;
        let arr = [xCoord, yCoord];
        this.props.onReceiveCoordinates(arr);
    }
    render() {
        return(
            <button onClick={this.getCoords}>

            </button>
        )
    }
}