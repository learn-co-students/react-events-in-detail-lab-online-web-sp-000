// Code CoordinatesButton Component Here
import React, { Component } from "react";
export default class CoordinatesButton extends Component {
  constructor(props) {
    super();
  }

  handleMouseEvent = (e) => {
    const array = [e.clientX, e.clientY];
    this.props.onReceiveCoordinates(array);
  };

  render() {
    return <button onClick={this.handleMouseEvent}>CoordinatesButton</button>;
  }
}
