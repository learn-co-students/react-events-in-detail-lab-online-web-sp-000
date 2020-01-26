// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    handleClick = (e) => {
        // console.log(e)
        let coords = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(coords)
    }

    render() {
        return (
            // <button onClick={this.handleClick}>Click Me</button>
            <button onClick={ (e) => this.handleClick(e) }>Click Coords</button>
        )
    }

}
