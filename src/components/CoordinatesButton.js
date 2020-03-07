import React from "react";

export default class CoordinatesButton extends React.Component {

    printCoordinates = (event) => {
        const coorinates = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coorinates)
    }

    render() {
        return (
            <button onClick={this.printCoordinates}>Button 1</button>
        )
    }
}
