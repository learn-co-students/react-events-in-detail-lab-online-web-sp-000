import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

  createCoords = (event) => {
    let coords = [event.clientX, event.clientY];
    return this.props.onReceiveCoordinates(coords)
  }
  render() {
    return (
      <button onClick={(event) => this.createCoords(event)}></button>
    )
  }
}