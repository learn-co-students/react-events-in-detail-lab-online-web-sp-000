//const { Component } = require("react")

import React, { Component } from "react";

export default class CoordinatesButton extends Component {
    // constructor(props) {
    //     super(props);
    //     this.onReceiveCoordinates
    //     //this.handleClick = this.handleClick.bind(this);
    //   }

    handleClick = (event) => {
        
        let x = event.clientX
        let y =  event.clientY

        let coordinatesArray  = [x, y]

        this.props.onReceiveCoordinates(coordinatesArray)
    }

    render() {
        return (
            <button onClick={this.handleClick}></button>
        )
    }
}
