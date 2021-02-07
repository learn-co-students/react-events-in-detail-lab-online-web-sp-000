// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  
handleClick = (e) => {
    let xcord = e.clientX;
    let ycord = e.clientY;
    let coordinates = [xcord, ycord]
    this.props.onReceiveCoordinates(coordinates);
}
  
  render() {
    return (
      <div >
          <button onClick={(e) => this.handleClick(e)}>Click Me!</button>
      </div>
    )
  }
  
}