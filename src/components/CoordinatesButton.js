// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component {

 handlesClick = (event) => {
   this.props.onReceiveCoordinates([
     event.clientX, event.clientY
   ])
 }

  render () {
    return (
      <button onClick={this.handlesClick}>
      </button>
    )
  }
}

export default CoordinatesButton