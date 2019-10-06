// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

  createArray = (event) => {
    const array = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(array)
  }

  render(){
    return (
      <button onClick={this.createArray}>Coordinates Button</button>
    )
  }


}
