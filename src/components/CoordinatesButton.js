import { render } from 'enzyme'
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    createArray = (event) => {
        const x = event.clientX;
        const y = event.clientY;
        this.props.onReceiveCoordinates([x,y])
    }

    render() {
        return (
            <button onClick={this.createArray}>Button</button>
        )
    }
}