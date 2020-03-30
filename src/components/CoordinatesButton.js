import React from "react";

export default class CoordinatesButton extends React.Component {

    printCoord = (event) => {
        const coorinates = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coorinates)
    }

    render() {
        return (
            <button onClick={this.printCoord}>Button 1</button>
        )
    }
}
