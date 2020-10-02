// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

  handleCoordinates = (event) => {
    let arr = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(arr)
  }

  render() {
    return (
      <button onClick={this.handleCoordinates}></button>
    )
  }
}
