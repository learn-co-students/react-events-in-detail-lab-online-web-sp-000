// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

    onClick = (e) => {
        const x = e.clientX
        const y = e.clientY

        const arr = [x, y]

        this.props.onReceiveCoordinates(arr)
    }

    render() {
        return <button onClick={this.onClick} >Coordinates Button</button>
    }
}

export default CoordinatesButton