import React, { Component } from 'react'

class CoordinatesButton extends Component {

  handleClick = (event) => {
    let mouseCoordinates = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(mouseCoordinates)
  }

  render() {
    return (
      <button onClick={this.handleClick}> Get Coordinates </button>
    )
  }
}

export default CoordinatesButton
