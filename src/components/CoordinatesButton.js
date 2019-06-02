import React, { Component } from "react";

export default class CoordinatesButton extends Component {

  getCoordinates = (e) => {
    const coordinates = [e.clientX, e.clientY]

    this.props.onReceiveCoordinates(coordinates)
  }

  render() {
    return(
      <button onClick={this.getCoordinates}>Coordinates Button</button>
    )
  }
}