// Code CoordinatesButton Component Here
import React, { Component } from 'react';

 class CoordinatesButton extends Component {
    
    createArray = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }

    render() {
        return <button onClick={this.createArray}>Press me</button>
    }

}

export default CoordinatesButton