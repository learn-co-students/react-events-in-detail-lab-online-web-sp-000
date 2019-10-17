// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {

makeArray = (event) => {
  let array = [event.clientX, event.clientY]
  console.log(array)
  this.props.onReceiveCoordinates(array)
}

render() {
  return (
      <button onClick={this.makeArray}> Coordinates Button </button>
  )
}
}
