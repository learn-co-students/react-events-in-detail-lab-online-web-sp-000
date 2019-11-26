// Code CoordinatesButton Component Here
import React from "react"

class CoordinatesButton extends React.Component {
  onReceiveCoordinates = coords => {}
  coords = e => {
    let array = []
    array.push(e.clientX)
    array.push(e.clientY)
    this.props.onReceiveCoordinates(array)
  }
  render() {
    return <button onClick={this.coords}></button>
  }
}

export default CoordinatesButton
