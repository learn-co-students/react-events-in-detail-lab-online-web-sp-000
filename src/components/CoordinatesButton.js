// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    constructor(props) {
        super ()

    }

    handleClick = (event) => {
        return [event.clientX, event.clientY]
    }

    render() {
        return <button onClick={this.handleClick}></button>
    }
}