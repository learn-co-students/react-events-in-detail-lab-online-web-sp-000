// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  getCoordinates = (event) => {
    let coordinateArray = [];
    coordinateArray.push(event.clientX);
    coordinateArray.push(event.clientY);
    this.props.onReceiveCoordinates(coordinateArray);
  }

  render() {
    return <button onClick={this.getCoordinates}></button>
  }
}
