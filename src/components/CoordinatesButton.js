// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinateButton extends Component {
  render() { 
    return ( 
      <button
        onClick={event => this.props.onReceiveCoordinates([event.clientX, event.clientY])}>
          CoordinatesButton
        </button>
    );
  }
}
 
export default CoordinateButton;