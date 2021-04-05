// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    constructor(props) {
        super()
        this.coords = props.onReceiveCoordinates
    
    }

    log = (event) => {
       this.coords([event.clientX, event.clientY])
    }

    render() {
        return (
        <div>
            <button onClick={this.log}>Print coordinates: </button>
        </div>
        )
    }
}