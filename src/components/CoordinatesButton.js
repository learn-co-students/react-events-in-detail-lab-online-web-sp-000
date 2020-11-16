import React, { Component } from "react";

// Code CoordinatesButton Component Here
export default class CoordinatesButton extends Component {

  handleClick = (event) => {
    let coordinates = [event.clientX, event.clientY]
    return this.props.onReceiveCoordinates(coordinates)
  }

  render() {
    return(
      <button onClick={this.handleClick}></button>
    )
  }
}