import React from "react";

export default class CoordinatesButton extends React.Component {

    handleMouseClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }    

    render () {
        return (
            <button onClick={this.handleMouseClick}>Coordinates</button>
        )
    }
}
