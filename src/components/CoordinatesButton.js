// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

 handleOnClick = (event) => {
   let eventData = [event.clientX, event.clientY]

   this.props.onReceiveCoordinates(eventData)
 }

  render() {
    return (
      <button onClick={this.handleOnClick}/>
    )
  }
}

