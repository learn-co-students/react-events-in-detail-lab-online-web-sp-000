// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  whenClicked = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    // console.log(this.props)
    return (
      <button onClick={this.whenClicked}>Coordinates</button>
    )
  }

}