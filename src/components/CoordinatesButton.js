import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  handleClick = (event) => {
    const myCoords = [event.clientX, event.clientY]
    return this.props.onReceiveCoordinates(myCoords)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Get coordinates</button>
    )
  }
}
