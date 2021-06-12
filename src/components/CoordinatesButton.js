import React from "react";

// Code CoordinatesButton Component Here
export default class CoordinatesButton extends React.Component {


        handleClick = event => {
            this.props.onReceiveCoordinates([event.clientX, event.clientY])
        };

        render() {
            return (
                <button onClick={this.handleClick}Coords></button>
            )
        }
}