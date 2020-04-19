// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordianteButton extends Component {
  passCoordinates = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return(
      <button onClick={this.passCoordinates}></button>
    )
  }
}