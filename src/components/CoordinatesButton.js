import React, { Component } from 'react';

 class CoordinatesButton extends Component {

   handleEvent = event => {
    this.props.onReceiveCoordinates([event.clientX,event.clientY])
  }

   render() {
    return (
      <button onClick={this.handleEvent}></button>
    );
  }

 }

 export default CoordinatesButton;
