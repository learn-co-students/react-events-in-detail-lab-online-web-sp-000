import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  constructor(props) {
    super()
  }

  onClick = (event) => {
    let coordinates = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(coordinates);
  }

  render() {
    return (
      <button onClick={this.onClick}>Coordinates</button>
    )
  }

}
