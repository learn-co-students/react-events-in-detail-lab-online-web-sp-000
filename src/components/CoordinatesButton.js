import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
   
    constructor(props) { // Create our constructor that accepts the props.
        super(props);
    }

    grabCoordinates = (event) => { // We create a function that accepts an event as the argument.
        this.props.onReceiveCoordinates([event.clientX, event.clientY]) // We grab the X and Y coordinates from the event and pass it into our onReceiveCoordinates prop.
    }

    render () {

        return (
            <button onClick={this.grabCoordinates}></button> // Finally, we call this function after a user clicks the button.
        )
    }

}