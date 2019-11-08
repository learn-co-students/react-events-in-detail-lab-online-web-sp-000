// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
    
    handleClick = (event) => {
        let coordinatesArray = []
        coordinatesArray.push(event.clientX, event.clientY)
        this.props.onReceiveCoordinates(coordinatesArray)
    }

    render () {
        return (
            <button onClick={(event) => this.handleClick(event)} >I am the Coordinates Button</button>
        )
    }
}

export default CoordinatesButton