// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    let mouseCoordinatesArray = [];
    //console.log(event.clientX)
    mouseCoordinatesArray.push(event.clientX);
    mouseCoordinatesArray.push(event.clientY);
    this.props.onReceiveCoordinates(mouseCoordinatesArray)
    //return mouseCoordinatesArray;
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
        >Coordinates</button>
      </div>
    )
  }

}
