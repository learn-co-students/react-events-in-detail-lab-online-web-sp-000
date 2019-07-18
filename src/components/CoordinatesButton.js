import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  createCoordinatesArray = event => {
    const coordinatesArray = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinatesArray)
    return coordinatesArray;
  };

  render() {
    return (
      <button onClick={this.createCoordinatesArray}>I'm a Button!</button>
    )
  }
}
