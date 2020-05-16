import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  onClick = (event) => {
    let mouseCoord = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(mouseCoord)
  }

  render() {
    return (
      <button onClick={this.onClick} />
    )
  }
}
