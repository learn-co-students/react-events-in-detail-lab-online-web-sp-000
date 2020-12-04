import React, { Component } from 'react';

export default class CoordinatesButton extends React.Component {


    getCoordinates = (event) => {
        let coords = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coords)
    }

    render() {
        return(
            <button onClick={this.getCoordinates}>Coordinates Button</button>
        )
    }
}