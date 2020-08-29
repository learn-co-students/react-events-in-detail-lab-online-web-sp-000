// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    constructor(props) {
        super()
        this.onReceiveCoordinates = props.onReceiveCoordinates
    }

    render() {
        return (
            <button>
            {/* onClick={this.onReceiveCoordinates([event.clientX, event.clientY])}> */}

            </button>
        )
    }


}