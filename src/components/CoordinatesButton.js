import React from 'react'

export default class CoordinatesButton extends React.Component {

    constructor() {
        super()
    }

    coordinateHandler = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <button onClick={this.coordinateHandler}>Coords</button>
        )
    }
}
